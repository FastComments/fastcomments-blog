---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je spreman za svemir![/postlink]

{{#unless isPost}}
Završili smo migraciju naše aktivne baze podataka, donoseći pravu višeregionalnu redundanciju za FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

### Šta je novo

Svaka FastComments [tačka prisutnosti](https://sophon.fastcomments.com/) sada lokalno upisuje i asinkrono replicira te podatke
na sve ostale čvorove. To će obezbediti veću trajnost u odnosu na prethodni sistem, uz brže alate za moderaciju
za korisnike u nekim regionima, uz određene kompromise.

"Spreman za svemir" je pomalo optimističan, ali ideja je da bismo mogli postaviti FastComments na različite planete i na kraju bi sistem bio sinhronizovan. Korisnici na Plutonu, međutim, morali bi da čekaju oko jednog dana da vide promene na svojoj predstojećoj stranici sa fakturama, pošto trenutno samo jedan
glavni čvor po regionu može da agregira informacije o naplati.

### Malo istorije, zašto promena

Kada je FastComments prvobitno lansiran, imali smo vrlo tipičnu arhitekturu. Imali smo sloj proksija, sloj aplikacije, bazu podataka, nekoliko replika, a kasnije i replike širom regiona i provajdera u oblaku za dodatnu redundanciju.

Na kraju smo premestili replike DB-a u sve zone gde su većina naših korisnika i takođe postavili aplikaciju tamo, i kreirali naš sopstveni DNS i proksi sistem (opisano u kasnijem blog postu) da usmere zahteve na najbliži čvor aplikacije. Ovo čini čitanje brzim, ali upisivanje sporijim, jer umesto da čekate na jedan HTTP kružni put do backend-a, čekate na HTTP kružni put do obližnjeg čvora, a taj čvor može da izvrši više upisa u bazu podataka na primarni. Nije dobro!

Dakle, da bismo se borili sa ovim, restrukturirali smo mnoga područja aplikacije da prihvate `readPreference` kao argumente funkcije, tako da pozivaoci mogu da odluče koliko
stare informacije su spremni da apsorbuju tokom čitanja, a pored toga, učinili smo više upisa (kao što su upisivanje statistike moderatora o akcijama moderatora) da budu fire-and-forget. Nije idealno, ali je značajno ubrzalo stvari.

Jedan problem na koji smo naišli tokom globalnog korišćenja Mongo su mrežni prekidi. Ako su dovoljno čvorova odvojeni, čitanja staju jer svaki čvor postaje nesiguran da li
je prihvatljivo obaviti čitanja. Postoje neki načini oko ovoga, ali ivice slučajevi postaju neuredni. Ovo nije teorijski problem - desilo se dovoljno puta uzrokujući obaveštenja u 3 ujutro da smo se zasitili, čak smo pokušavali da prilagodimo Mongo da bude u redu sa neizvesnošću izbora replikacijskog skupa do jedne minute razlike. Nažalost, mreže od Sao Paula do Falkensteina, na primer, jednostavno nisu bile dobre kod nekih od naših provajdera hostinga. Podesite kontrolu zagušenja i slično pomoglo je, ali nije rešilo problem.

Rešenje svetog grala, pod pretpostavkom da ste u redu sa određenim kompromisima, je mogućnost da se lokalno prihvate upisi na tom čvoru (koji ima pristojan hardver, RAID, itd., što je malo verovatno da će se pokvariti) i obavestiti korisnika da su njegovi podaci sačuvani. Takođe možete u toj tački prisutnosti imati i drugi čvor kao vruću repliku za trajnost.

Dakle, to je ono do čega smo došli. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur su svi sopstveni replikacijski skupovi i prihvataju upise. EU
implementacija (iako ima samo tri PoP-a) ima isto ponašanje.

### Kako to funkcioniše

Neki od ovoga su pokriveni u prethodnom odeljku, ali TL;DR je da je to CRDT-lite. Stvorili smo proksi (u Rust-u, jer naravno) koji se nalazi između aplikacije i Mongo-a i čini ga multi-master. Proksi je svestan čvora, upravlja tačkama, replikacijom, nadgledanjem i inicijalnom sinhronizacijom. To je multi-master zamena za replikacioni sistem Mongo-a, uključujući i za neke DDL komande.

**Razlika od drugih alata** je što **ne prati oplog**. Praćenje oploga, ili korišćenje promena, ne bi funkcionisalo, jer samo prikazuju konačno stanje objekta posle upisa, što je onemogućilo rešavanje sukoba. Potrebno je uhvatiti
svaku `$set`, `$inc` operaciju i replicirati tu operaciju.

Ovo je rešenje specifično za domen. Ne bi funkcionisalo za sve proizvode. Moglo bi se reći da je to dizajn uslovljen domenom :). Radi za nas jer od samog početka vrlo pažljivo samo `$set`-ujemo polja koja menjamo na dokumentima - nikada ne koristimo Mongo-ovo `replaceOne`, na primer. Isto važi i za brojače. Ti **nikada** ne radiš `SET VOTES = 5`. Umesto toga, napisao bi `INCREMENT VOTES BY 5`, jer to omogućava eventualnu konzistentnost. Distribuirani zaključci se rešavaju sa **ne**. Samo jedan čvor
po klasteru ima flag postavljen da pokreće cronove. Iako se ovo može činiti ograničeno, možemo kupiti servere sa terabajtima RAM-a, tako da možemo preuzeti ovaj kompromis kako bismo smanjili rizik i složenost.

### Čitanje vlastitih upisa

Za programere koji koriste API, trebali biste moći da čitate svoje vlastite upise baš kao pre (napravite API poziv za kreiranje komentara, a zatim nabrojite komentare i vidite novi unos na toj listi). **Oprez** je da to ne možete uraditi preko regiona. Ako vaša pozadina radi samo u jednom regionu,
kao što je us-west, tada biste trebali moći da čitate svoje vlastite upise osim u slučaju da između vašeg upisa i vašeg čitanja, taj čvor padne **i** vaša
DNS keš ažurira se da ukazuje na sledeći najbliži čvor. U slučaju da se to ne dogodi, čitanje vlastitih upisa je pouzdano.

[Takođe možete fiksirati koju tačku prisutnosti pogađate. Više informacija ovde.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testiranje & Migracija

Otprilike polovina koda u sistemu je testni okvir, okruženje i testovi. Ipak, objavljivanje je bilo malo nerazvijeno, uz duže vreme zastoja (1 sat za EU i 20 minuta za us-global) nego što se očekivalo, ali smo srećni što smo prošli ovu prekretnicu i hvala vam na strpljenju!

### U zaključku & Šta to znači za vas

FastComments bi sada trebao biti brži i trajniji nego ikada, a sada se možemo vratiti radu na funkcijama :)

Živeli!

{{/isPost}}

---