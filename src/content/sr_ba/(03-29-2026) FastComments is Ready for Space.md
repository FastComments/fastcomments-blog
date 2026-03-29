---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je spreman za svemir![/postlink]

{{#unless isPost}}
Završili smo migraciju naše aktivno-aktivne baze podataka, donoseći pravu višeregionu redundantnost u FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Svaki FastComments [point-of-presence](https://sophon.fastcomments.com/) sada zapisuje lokalno i asinkrono replicira te zapise
na sve druge čvorove. Ovo će pružiti povećanu trajnost u odnosu na prethodni sistem, uz brže moderacijske alate
za korisnike u nekim regijama, uz određene kompromisne aspekte.

"Spreman za svemir" je pomalo optimističan, ali ideja je da bismo mogli postaviti FastComments na različite planete i na kraju bi se sistem
synchronizovao. Korisnici na Plutonu bi, međutim, morali da čekaju oko jednog dana da vide promene na svojoj stranici s nadolazećim
računom, jer trenutno samo jedan master po regionu može agregirati informacije o naplati.

### Mala istorija, zašto promena

Kada je FastComments prvobitno pokrenut, imali smo veoma tipičnu arhitekturu. Imali smo sloj proxy-a, aplikativni sloj, bazu podataka, neke replike, zatim kasnije replike širom regiona i provajdera u oblaku radi dodatne redundantnosti.

Na kraju smo premestili replike baze podataka u sve zone gde je većina naših korisnika i takođe postavili aplikaciju tamo, i kreirali naš vlastiti DNS i proxy sistem (opisan u kasnijem blog postu) za preusmeravanje zahteva na najbliži čvor aplikacije. Ovo čini čitanja bržim, ali upisima sporijim, jer sada umesto da čekate jedno HTTP putovanje do backenda, čekate HTTP putovanje do bliskog čvora, a taj čvor može napraviti više upisa u bazu podataka natrag ka primarnom. Nije dobro!

Dakle, da bismo se borili protiv ovoga, prestrukturirali smo mnoga područja aplikacije da prihvate `readPreference` u argumentima funkcije, tako da pozivaoci mogu odlučiti koliko
stari su spremni da čekaju na svoje čitanje, a osim toga su mnogi upisi (poput zapisivanja statistike moderatora o akcijama moderatora) postali fire-and-forget. Nije idealno, ali je značajno ubrzalo stvari.

Jedan problem sa kojim smo se susreli u radu sa Mongo globalno su mrežna razdvajanja. Ako dovoljno čvorova bude isključeno, čitanja prestaju jer svaki čvor postaje nesiguran da li 
je prihvatljivo servisirati čitanja. Postoje neki načini da se ovo preskoči, ali ivice slučajevi postaju komplikovani. Ovo nije teoretski problem - dešavalo se dovoljno puta, uzrokujući pozive u 3 ujutro, da smo se smorili od toga, čak pokušavajući da podesimo Mongo da bude u redu sa nesigurnostima izbora replikaseta do jedne minute razlike. Nažalost, mreže između Sao Paula i Falkensteina, na primer, jednostavno nisu bile dobre kod nekih naših provajdera hostinga. Podesavanje kontrole zagušenja i sličnih stvari je pomoglo, ali nije rešilo problem.

Sveti gral rešenja, pod pretpostavkom da ste spremni na određene kompromise, je mogućnost prihvatanja upisa lokalno na tom čvoru (koji ima pristojan hardver, RAID itd., koji verovatno neće otkazati) i reći korisniku da su njegovi podaci sačuvani. Takođe možete u tom point-of-presence imati još jedan čvor kao vruću repliku za trajnost.

Dakle, ovo je ono do čega smo došli. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, svi su to svoje replike i prihvataju upise. EU
implementacija (iako ima samo tri PoP-a) ima isto ponašanje.

### Kako to funkcioniše

Neki od ovoga su pokriveni u prethodnom odeljku, ali TL;DR je da je to CRDT-lite. Kreirali smo proxy (u Rust-u, naravno) koji se nalazi između aplikacije i Mongo-a i čini ga multi-master. Proxy je svestan peer-a, upravlja tačkama kontrole, replikacijom, nadgledanjem i inicijalnom sinhronizacijom. To je multi-master zamena za Mongo-ov replikacioni sistem, uključujući i neke DDL komande.

**Razlika od drugih alata** je u tome što **ne prati oplog**. Praćenje oploga, ili korišćenje tokova promena, ne bi radili, jer vam pokazuju samo završno stanje objekta nakon upisa, što čini nemogućim rešavanje sukoba. Potrebno je uhvatiti
svaku `$set`, `$inc` operaciju i replicirati tu operaciju samu.

Ovo je specifično rešenje za domen. Ne bi radilo za sve proizvode. Možete reći da je to dizajn vođen domenom :). Funkcioniše za nas jer od samog početka vrlo pažljivo samo `$set`-ujemo polja koja menjamo na dokumentima - nikad ne koristimo Mongo-ov `replaceOne`, na primer. Isto važi za brojače. Nikada ne radite `SET VOTES = 5`. Umesto toga, biste napisali `INCREMENT VOTES BY 5`, jer ovo omogućava konačnu konzistenciju. Raspodeljena zaključavanja se rešavaju **izbegavanjem ih u potpunosti**. Samo jedan čvor po klasteru ima oznaku da pokreće cronove. Dok ovo može delovati ograničeno, možemo kupiti servere sa terabajtima RAM-a, pa možemo prihvatiti ovaj kompromis na smanjenje rizika i složenosti.

### Čitanje svojih vlastitih upisa

Za developere koji koriste API, trebali biste moći da pročitate svoje vlastite upise baš kao i pre (napravite API poziv za kreiranje komentara, zatim listajte komentare i vidite novi unos na toj listi). **Napomena** je da to ne možete raditi između regiona. Ako vaša backend aplikacija radi u samo jednom regionu,
poput us-west, onda biste trebali moći pročitati svoje vlastite upise osim u slučaju da između vašeg upisa i vašeg čitanja, taj čvor padne **i** vaša
DNS keš ažurira da pokazuje na sledeći najbliži čvor. Ukoliko se ovo ne dogodi, čitanje vaših vlastitih upisa je pouzdano.

### Testiranje & Migracija

Otprilike polovina koda u sistemu je testna struktura, okvir i testovi. Ipak, izdanje je bilo pomalo neuspešno, s dužim vremenom neaktivnosti (1 sat za EU i 20 minuta za us-global) nego što smo želeli, ali smo srećni što smo prešli preko ovog prevoja i zahvaljujemo vam na strpljenju!

### Na kraju & Šta to znači za vas

FastComments bi sada trebao biti brži i stabilniji nego ikad, i sada se možemo vratiti radu na funkcijama :)

Živeli!

{{/isPost}}

---