---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je Spreman za Svemir![/postlink]

{{#unless isPost}}
Završili smo migraciju baze podataka u aktivno-aktivnom režimu, donoseći pravu višeregionalnu redundanciju FastComments-u.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

### Šta je Novo

Svaki FastComments [point-of-presence](https://sophon.fastcomments.com/) sada lokalno prima pisanja i asinkrono ih replicira na
sve ostale čvorove. Ovo će obezbediti veću trajnost u odnosu na prethodni sistem, kao i ubrzati alate za moderaciju za korisnike u nekim regionima, uz određene kompromise.

"Spreman za Svemir" je malo optimističan, ali ideja je da bismo mogli da postavimo FastComments na različite planete i na kraju bi se sistem uskladio. Korisnici na Plutonu, međutim, morali bi da čekaju oko dan da vide promene na svojoj nadolazećoj stranici sa fakturama, jer trenutno samo jedan
master po regionu može da agregira informacije o fakturisanju.

### Mala Istorija, Zašto Promena

Kada je FastComments prvi put lansiran, imali smo vrlo tipičnu arhitekturu. Imali smo sloj proxy-a, sloj aplikacije, bazu podataka, neke replike, a zatim kasnije replike širom regiona i provajdera oblaka za dodatnu redundanciju.

Na kraju smo premestili DB replike u sve zone gde su većina naših korisnika i takođe postavili aplikaciju tamo, i napravili naš vlastiti DNS i sistem proxy-a (opisano u kasnijem blog postu) da usmerimo zahteve na najbliži čvor aplikacije. Ovo čini čitanja bržim, ali pisanja sporijim, jer sada umesto da čekate jedan HTTP put do pozadine, čekate HTTP put do bliskog čvora, a taj čvor može da izvrši više pisanja u bazu podataka nazad ka primarnom. Nije dobro!

Tako da smo kako bismo se borili protiv ovoga prestrukturirali mnoge delove aplikacije da uzmu `readPreference` u argumentima funkcije, tako da pozivaoci mogu odlučiti koliko
starim podacima su spremni da pristanu tokom čitanja, a pored toga, napravili smo više pisanja (kao što je pisanje statistike moderatora o aktivnostima moderatora) da budu fire-and-forget. Nije idealno, ali je znatno ubrzalo proces.

Jedan problem na koji smo naišli tokom globalnog rada Mongo-a su mrežne podele. Ako dovoljno čvorova bude isključeno, čitanja se zaustavljaju jer svaki čvor postaje nesiguran da li je
prihvatljivo da vrati čitanje. Postoje neki načini da se to izbegne, ali ivice postaju neuredne. Ovo nije teoretski problem - desilo se dovoljno puta uzrokujući 3AM stranice da smo se umorili od toga, čak pokušavajući da optimizujemo Mongo da bude u redu sa nesigurnošću izbora replika grupe do minuta razlike. Nažalost, mreže za Sao Paulo do Falkenstein, na primer, jednostavno nisu bile najbolje kod nekih naših provajdera hostinga. Tuning kontrole gužvi i slično pomoglo je, ali nije rešilo problem.

Sveti gral rešenje, pod pretpostavkom da ste u redu s određenim kompromisima, je sposobnost da prihvatite pisanje lokalno na tom čvoru (koji ima pristojan hardver, RAID, itd., koji se ne očekuje da će se pokvariti) i da obavestite korisnika da su njegovi podaci sačuvani. Takođe možete na tom point-of-presence imati drugi čvor kao vruću repliku za trajnost.

Tako da smo došli do ovoga. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, su svi svoji sopstveni setovi replika i prihvataju pisanja. EU
implementacija (iako imaju samo tri PoP-a) ima isto ponašanje.

### Kako To Funkcioniše

Neki od ovoga su pokriveni u prethodnoj sekciji, ali skraćeno, to je CRDT-lite. Napravili smo proxy (u Rust-u, jer naravno) koji se nalazi između aplikacije i Mongo i čini ga višemasterskim. Proxy je svestan peer-a, upravlja kontrolnim tačkama, replikacijom, nadzorom i inicijalnom sinhronizacijom. To je višemasterska zamena za Mongoov sistem replikacije, uključujući neke DDL komande.

**Razlika od drugih alata** je u tome što **ne prati oplog**. Praćenje oploga, ili korišćenje promenljivih tokova, ne bi radilo, jer vam samo prikazuju konačno stanje objekta nakon pisanja, što onemogućava upravljanje sukobima. Morate uhvatiti
svaku `$set`, `$inc` operaciju i replicirati tu operaciju.

Ovo je rešenje specifično za domen. Ne bi radilo za sve proizvode. Mogli biste reći da je to dizajn vođen domenom :). Radi za nas jer od početka veoma pažljivo samo `$set`-ujemo polja koja menjamo u dokumentima - nikada ne koristimo Mongoovu `replaceOne`, na primer. Isto važi i za brojače. **Nikada** ne radite `SET VOTES = 5`. Umesto toga, pisali biste `INCREMENT VOTES BY 5`, jer ovo omogućava eventualnu doslednost. Distribuirane brave se rešavaju **izbegavanjem njih u potpunosti**. Samo jedan čvor
po klasteru ima zastavicu postavljenu za pokretanje cron-a. Iako ovo može izgledati ograničeno, možemo kupiti servere sa terabajtima RAM-a, tako da možemo napraviti ovaj kompromis da smanjimo rizik i složenost.

### Čitanje Sopstvenih Pisanja

Za programere koji koriste API, trebali biste biti u mogućnosti da čitate svoja pisanja baš kao i ranije (napravite API poziv da kreirate komentar, zatim listajte komentare i vidite novi unos u toj listi). **Uslov** je da to ne možete raditi između regiona. Ako vaša pozadinska podrška funkcioniše samo u jednom regionu,
kao što je us-west, onda biste trebali da možete da čitate svoja pisanja osim ukoliko između vašeg pisanja i čitanja taj čvor padne **i** vaša
DNS keš ažurira na sledeći najbliži čvor. Pod uslovom da se to ne dogodi, čitanje vaših vlastitih pisanja je pouzdano.

### Testiranje & Migracija

Oko polovine koda u sistemu je testni okvir, okvir i testovi. Ipak, izdanje je bilo malo nerazmjerno, trajalo je duže vreme prekida (1 sat za EU i 20 minuta za nas-global) nego što je bilo željeno, ali smo srećni što smo prošli ovu etapu i hvala vam na strpljenju!

### Na Zaključku & Šta Ovo Znači za Vas

FastComments bi sada trebao biti brži i izdržljiviji nego ikad, i sada se možemo ponovo posvetiti razvoju funkcija :)

Živeli!

{{/isPost}}

---