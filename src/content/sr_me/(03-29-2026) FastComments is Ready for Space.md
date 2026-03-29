---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je Spreman za Svemir![/postlink]

{{#unless isPost}}
Završili smo migraciju naše aktivne baze podataka, donoseći pravu višeregionalnu redundanciju za FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

### Šta je Novo

Svaka FastComments [tačka prisustva](https://sophon.fastcomments.com/) sada upisuje lokalno i asinkrono replicira te podatke
na sve ostale čvorove. Ovo će omogućiti veću izdržljivost u poređenju sa prethodnim sistemom, a takođe će učiniti alate za moderaciju bržim
za korisnike u nekim regionima, uz određene kompromisne situacije.

"Spreman za Svemir" je pomalo optimističan, ali ideja je da bismo mogli deployovati FastComments na različite planete i na kraju bi se sistem uskladio. Korisnici na Plutonu, međutim, bi morali da sačekaju otprilike jedan dan da vide promene na svojoj sledećoj fakturi, jer trenutno samo jedan
glavni čvor po regionu može agregirati informacije o naplati.

### Nekoliko Istorije, Zašto Promena

Kada je FastComments prvotno lansiran, imali smo vrlo tipičnu arhitekturu. Imali smo proxy sloj, sloj aplikacija, bazu podataka, neke replikate, a kasnije replikate širom regiona i cloud provajdera za dodatnu redundanciju.

Na kraju smo premestili replikate baze podataka u sve zone gde su većina naših korisnika i takođe implementirali aplikaciju tamo, kao i stvorili sopstveni DNS i proxy sistem (opisano u kasnijem blog postu) za usmeravanje zahteva na najbliži čvor aplikacije. Ovo čini čitanja bržim, ali upisivanje sporijim, jer sada umesto da čekamo jedan HTTP krug do pozadine, čekamo HTTP krug do bliskog čvora, a taj čvor može da napravi više upisa nazad glavnoj. Nije dobro!

Da bismo se borili protiv ovoga, prestrukturirali smo mnoge oblasti aplikacije kako bismo uzeli `readPreference` u argumentima funkcije, tako da pozivaoci mogu da odluče koliko
su spremni da trpe "stale" podatke, a pored toga smo učinili više upisa (kao što je pisanje statistike moderatora o akcijama moderatora) "fire-and-forget". Nije idealno, ali je značajno ubrzalo stvari.

Jedan problem na koji smo naišli radeći Mongo globalno su mrežni prekidi. Ako dovoljno čvorova bude isključeno, čitanja prestaju jer svaki čvor postaje nesiguran da li
je prihvatljivo poslužiti čitanja. Ima nekoliko načina da se to izbegne, ali granični slučajevi postaju komplikovani. Ovo nije teorijski problem - dešavalo se dovoljno puta da smo dobili pozive u 3 ujutro i postali smo umorni od toga, čak smo pokušavali da pridobijemo Mongo da bude u redu sa nesigurnostima zbog izbora replikata do jedne minute razlike. Nažalost, mreže od Sao Paula do Falkensteina, na primer, jednostavno nisu bile dobre preko nekih naših hosting provajdera. Podešavanje kontrole zagušenja i sličnih stvari je pomoglo, ali nije rešilo problem.

Sveti gral rešenje, pod pretpostavkom da ste u redu sa određenim kompromisima, je mogućnost prihvatanja upisa lokalno na tom čvoru (koji ima pristojan hardver, RAID, itd, koji se verovatno neće pokvariti) i reći korisniku da su njegovi podaci sačuvani. Takođe možete u toj tački prisustva imati drugi čvor kao vrući replikat za izdržljivost.

Dakle, ovo je ono što smo postigli. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, su svi sopstveni replikati i prihvataju upise. EU
implementacija (iako samo tri PoP) ima isto ponašanje.

### Kako To Funkcioniše

Neki deo ovoga je pokriven u prethodnom odeljku, ali skraćena verzija je CRDT-lite. Napravili smo proxy (u Rust-u, jer naravno) koji se nalazi između aplikacije i Mongo-a i čini ga multi-master. Proxy je svestan peer-a, upravlja tačkama kontrole, replikacijom, nadzorom i inicijalnom sinhronizacijom. To je multi-master zamena za Mongo-ov sistem replikacije, uključujući neke DDL komande.

**Razlika od drugih alata** je u tome što **ne prati oplog**. Praćenje oploga, ili korišćenje promena strimova, ne bi funkcionisalo, jer oni samo pokazuju konačno stanje objekta nakon upisa, što otežava rešavanje konflikata. Potrebno je uhvatiti
svaku `$set`, `$inc` operaciju i replicirati tu operaciju.

Ovo je specifično za određeno polje. Ne bi radilo za sve proizvode. Mogli bismo reći da je to dizajn vođen domenom :). Radi za nas jer od samog početka vrlo pažljivo samo `$set`-ujemo polja koja menjamo na dokumentima - nikada ne koristimo Mongo-ov `replaceOne`, na primer. Isto važi i za brojače. **Nikada** ne činite `SET VOTES = 5`. Umesto toga, pisali biste `INCREMENT VOTES BY 5`, jer to omogućava eventualnu konzistentnost. Distribuirane brave se rešavaju tako što ih **potpuno izbegavamo**. Samo jedan čvor
po klasteru ima oznaku da izvrši crone. Iako se to može činiti ograničenim, možemo kupovati servere sa terabajtima RAM-a, dakle možemo preuzeti ovaj kompromis da smanjimo rizik i složenost.

### Čitanje Svojih Vlastitih Upisa

Za programere koji koriste API, trebali biste moći čitati svoje vlastite upise baš kao pre (napravite API poziv za kreiranje komentara, a zatim listajte komentare i vidite novi unos u toj listi). **Napomena** je da to ne možete raditi preko regiona. Ako vaša pozadina radi samo u jednom regionu,
poput us-west, tada biste trebali moći da čitate svoje vlastite upise osim u događaju da izmedju vašeg upisa i vašeg čitanja, taj čvor ode dolje **i** vaš
DNS keš se ažurira da ukazuje na sledeći najbliži čvor. Pod pretpostavkom da se to ne dogodi, čitanje vlastitih upisa je pouzdano.

### Testiranje & Migracija

Otprilike polovina koda u sistemu je testni okvir, struktura i testovi. Ipak, ispuštanje je bilo pomalo nerazmjerno, uz duže vreme neaktivnosti (1h za EU i 20min za nas-global) od željenog, ali smo srećni što smo prešli ovu prekretnicu i hvala vam na strpljenju!

### Na Kraj & Šta Ovo Znači za Vas

FastComments bi sada trebao biti brži i izdržljiviji nego ikada, a sada se možemo vratiti radu na funkcijama :)

Pozdrav!

{{/isPost}}

---