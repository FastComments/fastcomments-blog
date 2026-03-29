---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je spreman za prostor![postlink]

{{#unless isPost}}
Završili smo migraciju naše aktivno-aktivne baze podataka, donoseći pravu višeregionalnu redundantnost u FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Svaki FastComments [point-of-presence](https://sophon.fastcomments.com/) sada upisuje lokalno i asinkrono replicira te podatke
na sve druge čvorove. Ovo će obezbediti povećanu otpornost u odnosu na prethodni sistem, a istovremeno će moderacione alate učiniti bržim
za korisnike u nekim regionima, uz određene kompromise.

"Spreman za prostor" je pomalo optimističan, ali ideja je da bismo mogli implementirati FastComments na različitim planetama i da bi sistem na kraju bio usklađen. Korisnici na Plutonu, međutim, morali bi da sačekaju oko dan da vide promene na svojoj stranici sa nadolazećim fakturama, budući da trenutno samo jedan
master po regionu može da agregira informacija o naplati.

### Neka istorija, zašto promena

Kada je FastComments prvobitno lansiran, imali smo veoma tipičnu arhitekturu. Imali smo sloj proksi-ja, sloj aplikacije, bazu podataka, neke replike, a kasnije i replike širom regiona i provajdera u oblaku za dodatnu redundantnost.

Na kraju smo premestili replikacije baze podataka u sve zone u kojima su većina naših korisnika i takođe implementirali aplikaciju tamo, i kreirali smo sopstveni DNS i proksi sistem (opisano u kasnijem blog postu) za usmeravanje zahteva ka najbližem čvoru aplikacije. Ovo čini čitanja bržim, ali upisima sporijim, budući da umesto da čekate na jedan HTTP round trip do pozadine, čekate na jedan HTTP round trip do bliskog čvora, a taj čvor može da izvrši više upisa u bazu podataka nazad ka primarnom. Nije dobro!

Kako bismo se borili protiv ovoga, restrukturisali smo mnoge oblasti aplikacije da prihvate `readPreference` u argumentima funkcije, tako da pozivaoci mogu odlučiti koliko
stare podatke su u redu sa svojim čitanjima, a povrh toga smo učinili više upisa (kao što je pisanje statistike moderatora pri akcijama moderatora) fire-and-forget. Nije idealno, ali je značajno ubrzalo stvari.

Jedan problem na koji smo naišli tokom globalnog rada sa Mongo su mrežne pregrade. Ako se dovoljno čvorova isključi, čitanja se zaustavljaju jer svaki čvor postaje nesiguran da li
je prihvatljivo da služi čitanja. Postoje neki načini oko ovoga, ali ivice slučajevi postaju složeni. Ovo nije teoretski problem - događalo se dovoljno puta da smo dobili 3AM obaveštenja, što nas je jako umorilo, čak smo pokušavali da podesimo Mongo da bude u redu sa nesigurnostima kod izbora replikaseta do minuta razlike. Nažalost, mreže između Sao Paula i Falkenštajna, na primer, jednostavno nisu bile dobre kod nekih naših provajdera hostinga. Podesavanje kontrole saobraćaja itd. je pomoglo, ali nije rešilo problem.

Sveti gral rešenje, pod uslovom da ste u redu sa određenim kompromisima, je mogućnost da prihvatite upise lokalno na tom čvoru (koji ima pristojan hardver, RAID itd., što je malo verovatno da će se pokvariti) i obavestite korisnika da su njegovi podaci sačuvani. Takođe možete u tom point-of-presence imati još jedan čvor kao vruću replikaciju za otpornost.

Dakle, ovo je ono do čega smo došli. Oregon, Virginia, Falkenštajn, Sao Paulo, Singapur, su svi svoje replike i prihvataju upise. EU
implementacija (iako samo tri PoP-a) ima isto ponašanje.

### Kako to funkcioniše

Neki od ovoga su pokriveni u prethodnoj sekciji, ali TL;DR je da je to CRDT-lite. Napravili smo proksi (u Rustu, jer naravno) koji sedi između aplikacije i Mongo i čini ga višemaster. Proksi je svestan peer-ova, upravlja tačkama, replikacijom, monitoringom i inicijalnom sinhronizacijom. To je višemaster zamena za Mongo-ov sistem replikacije, uključujući za neke DDL komande.

**Razlika od drugih alata** je u tome što **ne prati oplog**. Praćenje oploga, ili korišćenje promena strimova, ne bi funkcionisalo, jer vam samo prikazuje konačno stanje objekta nakon pisanja, što otežava rešavanje sukoba. Potrebno je uhvatiti
svaku `$set`, `$inc` operaciju i replicirati tu operaciju.

Ovo je rešenje specifično za domen. Ne bi funkcionisalo za sve proizvode. Možete reći da je to dizajn vođen domenom :). Funkcioniše za nas jer od samog početka veoma pažljivo koristimo samo `$set` za polja koja menjamo na dokumentima - nikada ne koristimo Mongo-ov `replaceOne`, na primer. Isto važi i za brojače. **Nikada** ne radite `SET VOTES = 5`. Umesto toga, napisali biste `INCREMENT VOTES BY 5`, jer to omogućava eventualnu doslednost. Distribuirane brave se rešavaju **izbegavanjem potpuno**. Samo jedan čvor
po klasteru ima oznaku za pokretanje cronova. Iako ovo može delovati ograničeno, možemo kupiti servere sa terabajtima RAM-a, tako da možemo uzeti ovaj kompromis da smanjimo rizik i složenost.

### Čitanje svojih upisa

Za programere koji koriste API, trebali biste moći da čitate svoje upise kao i ranije (napravite API poziv za kreiranje komentara, zatim listajte komentare i vidite novi unos u toj listi). **Upozorenje** je da to ne možete raditi širom regiona. Ako vaš backend radi u samo jednoj regiji,
kao što je us-west, tada biste trebali moći da čitate svoje upise osim u slučaju da između vašeg upisa i vašeg čitanja, taj čvor otkaže **i** vaša
DNS keširanja se ažurira da pokaže na sledeći najbliži čvor. Ukoliko se to ne dogodi, čitanje vaših upisa je pouzdano.

### Testiranje & Migracija

Otprilike polovina koda u sistemu je testna oprema, framework i testovi. Ipak, izdanje je bilo malo nerazmjerno, uzimajući dužu prekid (1 sat za EU i 20 minuta za us-global) nego što je željeno, ali smo srećni što smo prošli ovaj korak i zahvaljujemo vam na strpljenju!

### U zaključku & što to znači za vas

FastComments bi sada trebao biti brži i otporniji nego ikad, a sada se možemo vratiti radu na funkcijama :)

Živeli!

{{/isPost}}

---