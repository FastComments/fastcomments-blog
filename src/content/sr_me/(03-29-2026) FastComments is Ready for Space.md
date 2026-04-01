---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je Spreman za Prostor![/postlink]

{{#unless isPost}}
Završili smo migraciju naše aktivno-aktivne baze podataka, donoseći pravu višeregionalnu redundanciju na FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

### Šta je Novo

Svaka FastComments [tačka prisutnosti](https://sophon.fastcomments.com/) sada lokalno zapisuje i asinkrono replicira
na sve druge čvorove. Ovo će omogućiti veću trajnost u odnosu na prethodni sistem, a takođe će učiniti alate za moderaciju bržim
za korisnike u nekim regionima, uz određene kompromise.

"Spreman za Prostor" je pomalo optimistična izjava, ali ideja je da bismo mogli da postavimo FastComments na različite planete i na kraju bi se sistem uskladio. Korisnici na Plutonu, međutim, bi morali da sačekaju oko jedan dan da vide promene na svojoj stranici sa računima, jer samo jedan
master po regionu trenutno može agregirati informacije o naplati.

### Neka Istorija, Zašto Promena

Kada je FastComments prvobitno lansiran, imali smo vrlo tipičnu arhitekturu. Imali smo sloj proxy-a, sloj aplikacije, bazu podataka, neke replike, zatim kasnije replike širom regiona i cloud provajdera za dodatnu redundanciju.

Na kraju smo premestili DB replike u sve zone gde je većina naših korisnika i takođe smo tamo postavili aplikaciju, i stvorili vlastiti DNS i proxy sistem (opisano u nekom kasnijem blog postu) za usmeravanje zahteva ka najbližem čvoru aplikacije. Ovo čini očitavanje brzim, ali pisanje sporijim, jer sada umesto da čekate jedan HTTP povratni put ka zadnjem delu, čekate HTTP povratni put ka bliskom čvoru, a taj čvor može da izvrši više upisa u bazu podataka nazad ka primarnom. Nije dobro!

Dakle, da bismo se borili protiv ovoga, restrukturirali smo mnoga područja aplikacije da uzimaju `readPreference` u argumentima funkcije, tako da pozivaoci mogu da odluče koliko su stari njihovi podaci koje su spremni da čitaju, i pored toga učinili više upisa (kao što su zapisivanje statistike moderatora na akcije moderatora) eksplicitnim. Nije idealno, ali je znatno ubrzalo stvari.

Jedan problem sa kojim smo se susreli tokom globalnog rada sa Mongo su mrežni prekidi. Ako dovoljno čvorova bude isključeno, očitavanja prestaju, jer svaki čvor postaje nesiguran da li je prihvatljivo služiti očitavanjima. Postoje neka rešenja za ovo, ali ivice slučajeva postaju neuredne. Ovo nije teorijski problem - dogodilo se dovoljno puta da smo doživeli 3 ujutro uzbune tako da smo se zasitili, čak smo pokušavali da podesimo Mongo da se nosi sa nesigurnošću izbora replika do minut razlike. Nažalost, mreže od Sao Paula do Falkensteina, na primer, jednostavno nisu bile baš dobre kod nekih naših hosting provajdera. Podesavanje kontrole zagušenja i sličnog je pomoglo, ali nije rešilo problem.

Sveta rešenja, pod uslovom da ste spremni na određene kompromise, je mogućnost da prihvatite upise lokalno na tom čvoru (koji ima pristojan hardver, RAID, itd., što je malo verovatno da će se pokvariti) i obavestite korisnika da su njegovi podaci sačuvani. Takođe možete na toj tački prisutnosti imati i drugi čvor kao vruću repliku za trajnost.

Dakle, ovo je ono što smo postigli. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, su svi svoje replike i prihvataju upise. EU
implementacija (iako samo tri PoP-a) ima isto ponašanje.

### Kako To Funkcioniše

Neki od ovoga je pokriveno u prethodnom odeljku, ali skraćena verzija je da je to CRDT-lite. Napravili smo proxy (u Rust-u, jer naravno) koji sedi između aplikacije i Mongo i čini ga multi-master. Proxy je svestan peer-a, upravlja tačkama, replikacijom, nadzorom i inicijalnom sinhronizacijom. To je multi-master zamena za Mongo-ov replikacijski sistem, uključujući za neke DDL komande.

**Razlika od drugih alata** je u tome što **ne prati oplog**. Praćenje oploga, ili korišćenje promena u tokovima, ne bi funkcionisalo, jer oni samo prikazuju konačno stanje objekta nakon upisa, što onemogućava rešavanje sukoba. Potrebno je uhvatiti svaku `$set`, `$inc` operaciju i replicirati tu operaciju samu.

Ovo je rešenje specifično za domenu. Ne bi funkcionisalo za sve proizvode. Mogli bismo reći da je to dizajn vođen domenom :). Funkcioniše za nas jer od samog početka veoma pažljivo samo `$set`-ujemo polja koja menjamo na dokumentima - nikada ne koristimo Mongo-ov `replaceOne`, na primer. Isto važi i za brojače. **Nikada** ne radite `SET VOTES = 5`. Umesto toga, napisali biste `INCREMENT VOTES BY 5`, jer ovo omogućava konačnu doslednost. Distribuirane zaključavanje se rešavaju sa **ne**. Samo jedan čvor
po klasteru ima oznaku da pokreće krone. Iako se ovo može činiti ograničenim, možemo kupiti servere sa terabajtima RAM-a, tako da možemo preuzeti ovaj kompromis kako bismo smanjili rizik i složenost.

### Čitanje Vlastitih Upisa

Za programere koji koriste API, trebali biste moći da čitate svoje vlastite upise baš kao i ranije (napravite API poziv za kreiranje komentara, a zatim listajte komentare i vidite novi unos na toj listi). **Upozorenje** je da to ne možete raditi između regiona. Ako vaša pozadina radi samo u jednom regionu,
kao što je us-west, onda biste trebali biti u mogućnosti da čitate svoje vlastite upise osim u slučaju kada između vašeg upisa i vašeg čitanja, taj čvor padne **i** vaša
DNS cache se ažurira da pokazuje na sledeći najbliži čvor. Pod uslovom da se to ne dogodi, čitanje vlastitih upisa je pouzdano.

[Takođe možete označiti koju tačku prisutnosti pritiskate. Više informacija ovde.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testiranje & Migracija

Otprilike polovina koda u sistemu je testni okvir, struktura i testovi. Ipak, objavljivanje je bilo pomalo grbavo, uz duža vremena zastoja (1h za EU i 20min za us-global) od željenog, ali smo srećni što smo prošli ovu prekretnicu i hvala vam na strpljenju!

### Na Zaključku & Šta Ovo Znači za Vas

FastComments bi sada trebalo da bude brži i otporniji nego ikad, a sada se možemo vratiti radu na funkcijama :)

Živeli!

{{/isPost}}

---