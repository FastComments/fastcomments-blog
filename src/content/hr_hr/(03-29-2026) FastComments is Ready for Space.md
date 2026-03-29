---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je spreman za svemir![/postlink]

{{#unless isPost}}
Završili smo migraciju naše aktivno-aktivne baze podataka, donoseći pravu višeregionalnu redundanciju u FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Što je novo

Svaka [točka prisutnosti](https://sophon.fastcomments.com/) FastComments sada lokalno zapisuje podatke i asinkrono ih replicira na sve ostale čvorove. To će omogućiti veću izdržljivost u odnosu na prethodni sustav, uz brže alate za moderaciju za korisnike u nekim regijama, uz neke kompromise.

"Spreman za svemir" je pomalo optimističan izraz, ali ideja je da bismo mogli implementirati FastComments na različitim planetama i da bi na kraju sustav bio usklađen. Korisnici na Plutonu, međutim, morali bi čekati otprilike dan da vide promjene na svojoj nadolazećoj stranici računa, jer trenutno samo jedan
majstor po regiji može agregirati informacije o naplati.

### Malo povijesti, zašto promjena

Kada je FastComments prvotno pokrenut, imali smo vrlo tipičnu arhitekturu. Imali smo sloj proxyja, aplikacijski sloj, bazu podataka, neke replike, a kasnije i replikate diljem regija i cloud providera za dodatnu redundanciju.

Na kraju smo premjestili replike DB-a u sve zone gdje se nalazi većina naših korisnika i također implementirali aplikaciju tamo, te stvorili naš vlastiti DNS i proxy sustav (opisano u kasnijem blog postu) kako bismo usmjerili zahtjeve na najbliži čvor aplikacije. Ovo ubrzava čitanje, ali usporava pisanje, budući da umjesto da čekate jedan HTTP povratak na backend, čekate HTTP povratak na obližnji čvor, a taj čvor može napraviti više operacija pisanja u primar. Nije dobro!

Kako bismo se borili protiv ovoga, prestrukturirali smo mnoge dijelove aplikacije kako bismo uzeli `readPreference` u argumentima funkcije, tako da pozivatelji mogu odlučiti koliko im je staraštvo tolerabilno, a povrh toga učinili smo više pisanja (poput zapisivanja statistike moderatora tijekom akcija moderatora) fire-and-forget. Nije idealno, ali je značajno ubrzalo stvari.

Jedan problem na koji smo naišli pokretanjem Mongo globalno su mrežni prekidi. Ako dovoljan broj čvorova bude isključen, čitanja prestaju jer svaki čvor postaje nesiguran hoće li biti prihvatljivo služiti čitanja. Postoje neki načini za rješavanje ovoga, ali rubni slučajevi postaju neuredni. Ovo nije teoretski problem - događalo se dovoljno puta da izazove stranice u 3 ujutro da nam je to postalo iznimno frustrirajuće, čak i pokušavajući podesiti Mongo da bude u redu s neizvjesnošću izbora replikata do minute razmaka. Nažalost, mreže za Sao Paulo do Falkensteina, na primjer, jednostavno nisu bile baš dobre kod nekih naših pružatelja usluga hostinga. Podešavanje kontrola zagušenja i sličnih stvari pomoglo je, ali nije riješilo problem.

Sveta rješenja, pod uvjetom da ste spremni na određene kompromise, je mogućnost prihvaćanja lokalnih pisanih podataka na tom čvoru (koji ima pristojan hardver, RAID itd., koji vjerojatno neće otkazati) i reći korisniku da su njegovi podaci spremljeni. Također možete na toj točki prisutnosti imati drugi čvor kao vrući replikat za izdržljivost.

Dakle, ovo je ono do čega smo došli. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, svi su vlastiti replikatni setovi i prihvaćaju pisanja. EU
implementacija (iako ima samo tri PoP-a) ima isto ponašanje.

### Kako to funkcionira

Neki od ovoga je pokriven u prethodnom odjeljku, ali TL;DR je to CRDT-lite. Stvorili smo proxy (u Rustu, jer naravno) koji sjedi između aplikacije i Mongo i čini ga multi-majstorom. Proxy je svjestan čvorova, upravlja kontrolnim točkama, replikacijom, nadzorom i prvotnom sinkronizacijom. To je multi-majstor zamjena za Mongo sustav replikacije, uključujući za neke DDL komande.

**Razlika od drugih alata** je što ovaj **ne prati oplog**. Praćenje oploga, ili korištenje promjenskih tokova, ne bi funkcioniralo, jer oni samo prikazuju konačno stanje objekta nakon pisanja, što onemogućava rješavanje sukoba. Morate uhvatiti
svaku operaciju `$set`, `$inc` i replicirati tu operaciju.

Ovo je rješenje specifično za domeni. Ne bi radilo za sve proizvode. Mogli biste reći da je to dizajn vođen domenom :). Funkcionira za nas jer od početka vrlo pažljivo samo `$set`-amo polja koja mijenjamo na dokumentima - nikada ne koristimo Mongo `replaceOne`, na primjer. Isto vrijedi i za brojčanike. **Nikada** ne radite `SET VOTES = 5`. Umjesto toga, napisali biste `INCREMENT VOTES BY 5`, jer to omogućava konačnu konzistenciju. Distribuirane brave rješavamo **potpuno ih izbjegavajući**. Samo jedan čvor
po klasteru ima postavljen flag za pokretanje cronova. Iako to može izgledati ograničeno, možemo kupiti poslužitelje s terabajtima RAM-a, pa možemo prihvatiti ovaj kompromis kako bismo smanjili rizik i složenost.

### Čitanje vlastitih pisanja

Za programere koji koriste API, trebali biste moći čitati svoja vlastita pisanja baš kao i prije (napravite API poziv za kreiranje komentara, a zatim nabrojite komentare i vidjet ćete novi unos na toj listi). **Upozorenje** je da to ne možete raditi preko regija. Ako vaš backend radi samo u jednoj regiji,
poput us-west, tada biste trebali biti u mogućnosti čitati svoja vlastita pisanja osim u slučaju da između vašeg pisanja i vašeg čitanja, taj čvor padne **i** vaša
DNS predmemorija se ažurira tako da pokazuje na sljedeći najbliži čvor. Pod uvjetom da se to ne dogodi, čitanje vlastitih pisanja je pouzdano.

### Testiranje i migracija

Otprilike polovica koda u sustavu je testni okvir, okvira i testova. Ipak, izdanje je bilo malo grubo, uz duže vrijeme neaktivnosti (1 sat za EU i 20 minuta za us-global) nego je bilo poželjno, ali smo sretni što smo prošli ovu prekretnicu i zahvaljujemo vam na strpljenju!

### Na kraju i što to znači za vas

FastComments bi sada trebao biti brži i izdržljiviji nego ikad, a sada se možemo vratiti radu na funkcijama :)

Pozdrav!

{{/isPost}}