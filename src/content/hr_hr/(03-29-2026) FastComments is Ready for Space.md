---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je spreman za prostor![/postlink]

{{#unless isPost}}
Završili smo migraciju baze podataka u aktivno-aktivnom režimu, donoseći pravu višeregionalnu redundanciju za FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Što je novo

Svaki FastComments [point-of-presence](https://sophon.fastcomments.com/) sada lokalno zapisuje podatke i asinkrono ih replicira
na sve ostale čvorove. Ovo će pružiti veću trajnost u odnosu na prethodni sustav, uz bržu moderaciju alata
za korisnike u nekim regijama, sa određenim kompromisima.

"Spreman za prostor" je pomalo optimističan, ali ideja je da bismo mogli implementirati FastComments na različite planete i na kraju bi sustav bio usklađen. Korisnici na Plutonu, međutim, morali bi čekati otprilike jedan dan da vide promjene na svojoj nadolazećoj stranici računa, jer samo jedan
master po regiji trenutno može agregirati informacije o naplati.

### Malo povijesti, zašto promjena

Kada je FastComments prvotno pokrenut, imali smo vrlo tipičnu arhitekturu. Imali smo proxy sloj, aplikacijski sloj, bazu podataka, neke replike, a zatim kasnije replike preko regija i cloud pružatelja za dodatnu redundanciju.

Na kraju smo premjestili DB replike u sve zone gdje se nalaze većina naših korisnika i također postavili aplikaciju tamo, a stvorili smo vlastiti DNS i proxy sustav (opisano u kasnijem blog postu) za usmjeravanje zahtjeva na najbliži čvor aplikacije. Ovo čini čitanje brzim, ali zapisivanje sporijim, jer sada umjesto da čekate na jedan HTTP kružni put do pozadinskog sustava, čekate na HTTP kružni put do bliskog čvora, a taj čvor može napraviti više zapisivanja u bazu podataka natrag na primarni. Nema dobre!

Dakle, da bismo se borili protiv ovoga, restrukturirali smo mnoge dijelove aplikacije da uzmu `readPreference` u funkcijskim argumentima, tako da pozivatelji mogu odlučiti koliko
stara im je prihvatljiva njihova očitanja, a osim toga napravili smo više zapisivanja (poput zapisivanja statisike moderatora na akcije moderatora) kao fire-and-forget. Nije idealno, ali je značajno ubrzalo stvari.

Jedan problem na koji smo naišli pri globalnom radu s Mongo je mrežno presijecanje. Ako dovoljno čvorova bude isključeno, čitanja prestaju jer svaki čvor postaje nesiguran hoće li
biti prihvatljivo poslužiti čitanja. Postoje neki načini da se to zaobiđe, ali rubni slučajevi postaju neuredni. Ovo nije teorijski problem - događalo se dovoljno puta što je uzrokovalo 3 ujutro alert, da smo odustali od toga, čak smo pokušavali optimizirati Mongo da bude u redu s nesigurnostima izbora replikata do minute razmaka. Nažalost, mreže između Sao Paula i Falkensteina, na primjer, jednostavno nisu bile kvalitetne kod nekih od naših pružatelja usluga. Podešavanje kontrole zagušenja i sličnog pomoglo je, ali nije riješilo problem.

Sveti gral rješenja, pod pretpostavkom da ste u redu s određenim kompromisima, je mogućnost prihvaćanja zapisa lokalno na tom čvoru (koji ima pristojan hardver, RAID itd., a malo je vjerojatno da će se pokvariti) i reći korisniku da su njihovi podaci sačuvani. Također, u tom point-of-presence možete imati i drugi čvor kao vruću repliku za trajnost.

Dakle, ovo je ono do čega smo došli. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, svi su vlastiti replikati i prihvaćaju zapise. EU
implementacija (iako ima samo tri PoP-a) ima isto ponašanje.

### Kako to funkcionira

Neki od ovoga su pokriveni u prethodnom odjeljku, ali TL;DR je to CRDT-lite. Stvorili smo proxy (u Rustu, jer naravno) koji sjedi između aplikacije i Mongo i čini ga višemasterskim. Proxy je svjestan čvorova, upravlja kontrolnim točkama, replikacijom, nadzorom i inicijalnom sinkronizacijom. To je višemasterska zamjena za Mongoov replikacijski sustav, uključujući neke DDL naredbe.

**Razlika od drugih alata** je u tome što **ne prati oplog**. Praćenje oploga, ili korištenje promjena streamova, ne bi funkcioniralo, jer samo pokazuju konačno stanje objekta nakon zapisa što onemogućava rješavanje sukoba. Morate zabilježiti svaku operaciju `$set`, `$inc` i replicirati tu operaciju.

Ovo je rješenje specifično za domenu. Ne bi funkcioniralo za sve proizvode. Mogli biste reći da je to dizajn vođen domenom :). Funkcionira za nas jer smo od samog početka vrlo pažljivo samo `$set` polja koja mijenjamo na dokumentima - nikada ne koristimo Mongoov `replaceOne`, na primjer. Isto važi i za brojače. **Nikada** ne radite `SET VOTES = 5`. Umjesto toga, pisali biste `INCREMENT VOTES BY 5`, jer ovo omogućuje konačnu konzistentnost. Distribuirane brave se rješavaju s **ne**. Samo jedan čvor
po klasteru ima oznaku postavljenu za izvođenje cronova. Iako se ovo može činiti ograničavajuće, možemo kupiti servere s terabajtima RAM-a, tako da možemo prihvatiti ovaj trgovinski rizik i smanjiti složenost.

### Čitanje vlastitih zapisa

Za razvijače koji koriste API, trebali biste moći čitati vlastite zapise baš kao i prije (napravite API poziv za kreiranje komentara, a zatim navedite komentare i vidite novi unos na toj listi). **Upozorenje** je da to ne možete učiniti između regija. Ako vaš backend radi samo u jednoj regiji,
kao što je us-west, tada biste trebali moći čitati vlastite zapise osim u slučaju da između vašeg zapisa i vašeg čitanja taj čvor padne **i** vaša
DNS predmemorija se ažurira da pokaže na sljedeći najbliži čvor. Pod uvjetom da se to ne dogodi, čitanje vlastitih zapisa je pouzdano.

[Također možete odrediti koji point-of-presence koristite. Više informacija ovdje.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testiranje i migracija

Otprilike polovica koda u sustavu čini testna oprema, okvir i testovi. Ipak, objavljivanje je bilo pomalo neugodno, trajanje zastoja (1 sat za EU i 20 minuta za nas-global) bilo je dulje nego što se željelo, ali smo sretni što smo prošli ovaj okvir i zahvaljujemo na vašem strpljenju!

### U zaključku i što to znači za vas

FastComments bi sada trebao biti brži i izdržljiviji nego ikada, a sada se možemo ponovo posvetiti radu na značajkama :)

Živjeli!

{{/isPost}}