---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je spreman za prostor![/postlink]

{{#unless isPost}}
Završili smo migraciju naših aktivnih baza podataka, donoseći pravu višeregionalnu redundanciju u FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke izraze

### Šta je novo

Svaka FastComments [tačka prisustva](https://sophon.fastcomments.com/) sada upisuje lokalno i asinkrono replicira
na sve ostale čvoriće. To će obezbediti veću izdržljivost u odnosu na prethodni sistem, uz brže alate za moderaciju
za korisnike u nekim regionima, uz određene kompromise.

"Spreman za prostor" je malo optimističan, ali ideja je da bismo mogli da postavimo FastComments na različite planete i na kraju bi sistem mogao da bude u skladu. Korisnici na Plutonu, međutim, morali bi da čekaju oko jedan dan da vide promene na svojoj sledećoj stranici sa fakturama, jer trenutno samo jedan
master po regionu može da agregira informacije o naplati.

### Mala istorija, zašto promena

Kada je FastComments prvobitno lansiran, imali smo veoma tipičnu arhitekturu. Imali smo sloj za proxy, sloj aplikacije, bazu podataka, neke replike, a kasnije i replike širom regiona i provajdera u oblaku za dodatnu redundanciju.

Na kraju smo premestili replike baze podataka u sve zone gde su većina naših korisnika i takođe postavili aplikaciju tamo, a stvorili smo naš sopstveni DNS i proxy sistem (opisano u kasnijem blog postu) da preusmerimo zahteve na najbliži čvorić aplikacije. Ovo čini čitanja bržim, ali upisivanje sporijim, jer sada umesto da čekate na jedan HTTP povratak ka backendu, čekate na HTTP povratak do bliskog čvorića, a taj čvorić može izvršiti više upisa u bazu podataka nazad ka prvom. Nije dobro!

Kako bismo se borili protiv ovoga, prestrukturirali smo mnoga područja aplikacije tako da uzimaju `readPreference` u argumentima funkcije, tako da pozivaoci mogu odlučiti koliko su
stari podaci koje su spremni da čitaju, i pored toga, učinili više upisa (kao što su upisi statistike moderatora na akcije moderatora) "fire-and-forget". Nije idealno, ali je značajno ubrzalo stvari.

Jedan problem na koji smo naišli dok smo globalno koristili Mongo su mrežni prekidi. Ako dovoljno čvorića bude isključeno, čitanja staju jer svako čvoriće postaje nesigurno da li
je prihvatljivo da pruža čitanja. Postoji nekoliko načina da se ovo izbegne, ali rubne situacije postaju složene. Ovo nije teoretski problem - dešavalo se dovoljno puta, izazivajući buđenje u 3 ujutru, da smo se umorili od toga, čak smo pokušali da podesimo Mongo da bude u redu sa nesigurnošću izbora replikovanih setova do jedne minute razlike. Nažalost, mreže za Sao Paulo do Falkensteina, na primer, jednostavno nisu bile dobre kod nekih naših provajdera hostinga. Podesavanje kontrole zagušenja i slično je pomoglo, ali nije reševalo problem.

Sveti gral rešenja, pod pretpostavkom da ste u redu sa određenim kompromisima, je sposobnost da prihvatite upise lokalno na tom čvoriću (koji ima pristojan hardver, RAID, itd., koji verovatno neće otkazati) i reći korisniku da su njegovi podaci sačuvani. Takođe u toj tački prisustva možete imati još jedno čvorište kao vruću repliku za izdržljivost.

Ovde smo stigli. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, su svi sopstveni replikacijski setovi i prihvataju upise. EU
implementacija (iako samo tri PoP-a) ima isto ponašanje.

### Kako to funkcioniše

Neki od ovoga su pokriveni u prethodnom odeljku, ali TL;DR je da je to CRDT-lite. Napravili smo proxy (u Rustu, naravno) koji se nalazi između aplikacije i Mongo i čini ga multi-master. Proxy je svestan peer-a, upravlja tačkama osveženja, replikacijom, nadzorom, i inicijalnom sinhronizacijom. To je multi-master zamena za Mongoov sistem replikacije, uključujući neke DDL komande.

**Razlika u odnosu na druge alate** je to što **ne prati oplog**. Praćenje oplog-a, ili korišćenje tokova promena, ne bi delovalo, jer vam samo pokazuje konačno stanje objekta nakon upisa, što čini nemogućim upravljanje konfliktima. Trebalo bi da uhvatite
svaku `$set`, `$inc` operaciju i replicirate tu operaciju.

Ovo je rešenje specifično za domen. Ne bi radilo za sve proizvode. Mogli biste reći da je to dizajn vođen domenom :). Radi za nas jer smo od samog početka vrlo pažljivo samo `$set` polja koja menjamo na dokumentima - nikada ne koristimo Mongoov `replaceOne`, na primer. Isto važi i za brojače. **Nikada** ne radite `SET VOTES = 5`. Umesto toga, pisali biste `INCREMENT VOTES BY 5`, jer to omogućava konačnu doslednost. Distribuirane brave se rešavaju od strane **nemojte**. Samo jedno čvoriće
po klasteru ima zastavicu postavljenu da pokreće cronove. Iako se ovo može činiti ograničeno, možemo kupiti servere sa terabajtima RAM-a, tako da možemo prihvatiti ovaj kompromis da smanjimo rizik i složenost.

### Čitanje vaših vlastitih upisa

Za programere koji koriste API, trebali biste moći da čitate svoje vlastite upise kao i ranije (napravite API poziv da kreirate komentar, zatim nabrojite komentare i vidite novi unos na toj listi). **Caveat** je da to ne možete uraditi između regiona. Ako vaš backend radi samo u jednom regionu,
kao što je us-west, tada biste trebali moći da čitate svoje vlastite upise, osim u slučaju da između vašeg upisa i vašeg čitanja to čvoriće ode **i** vaša
DNS keš ažurira da ukazuje na sledeće najbliže čvoriće. Pod uslovom da se ovo ne dogodi, čitanje vaših vlastitih upisa je pouzdano.

[Možete takođe fiksirati koju tačku prisustva koristite. Više informacija ovde.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testiranje i migracija

Otprilike polovina koda u sistemu čini testni okvir, infrastrukturni alat i testovi. Ipak, izdanje je bilo malo neprijatno, sa dužim vremenom zastoja (1 sat za EU i 20 minuta za nas-global) nego što se želelo, ali smo srećni što smo prošli ovu prekretnicu i zahvaljujemo na vašem strpljenju!

### Na kraju & šta ovo znači za vas

FastComments bi sada trebao biti brži i izdržljiviji nego ikad, a sada se možemo vratiti radu na funkcijama :)

Pozdrav! 

{{/isPost}}