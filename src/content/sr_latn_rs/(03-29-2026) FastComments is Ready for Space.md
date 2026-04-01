---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je spreman za svemir![/postlink]

{{#unless isPost}}
Završili smo našu aktivnu migraciju baze podataka, donoseći pravu višeregionalnu redundanciju u FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke termine

### Šta je novo

Svaki FastComments [point-of-presence](https://sophon.fastcomments.com/) sada lokalno prihvata zapise i asimetrično ih replicira
na sve ostale čvorove. Ovo će obezbediti veću izdržljivost u odnosu na prethodni sistem, zajedno sa bržim alatima za moderaciju
za korisnike u nekim regionima, uz neke kompromise.

"Spreman za svemir" zvuči malo optimistično, ali ideja je da možemo implementirati FastComments na različitim planetama i na kraju bi sistem bio sinhronizovan. Korisnici na Plutonu, međutim, bi morali da sačekaju oko jednog dana da bi videli promene na svojoj stranici računa, jer samo jedan
master po regionu trenutno može da agregira informacije o naplatama.

### Neka istorija, zašto promena

Kada je FastComments prvobitno pokrenut, imali smo veoma tipičnu arhitekturu. Imali smo proxy sloj, aplikativni sloj, bazu podataka, nekoliko replika, a zatim kasnije replike širom regiona i cloud provajdera za dodatnu redundanciju.

Na kraju smo premestili replike baze podataka u sve zone gde je većina naših korisnika i takođe primenili aplikaciju tamo, i kreirali naš vlastiti DNS i proxy sistem (opisan u kasnijem blog postu) kako bismo usmerili zahteve ka najbližem aplikativnom čvoru. Ovo čini čitanje bržim, ali pisanje sporijim, jer umesto da čekate jedno HTTP putovanje do backenda, čekate HTTP putovanje do bližeg čvora, a taj čvor može da vrati više pisanja nazad ka primarnom. Nije dobro!

Da bismo se borili protiv ovog problema, prestrukturirali smo mnoga područja aplikacije da prihvate `readPreference` u argumentima funkcije, tako da pozivaoci mogu odlučiti koliko su spremni da podnesu da njihova čitanja budu zastarela, a osim toga, napravili smo više pisanja (poput pisanja statistike moderatora na akcije moderatora) kao fire-and-forget. Nije idealno, ali je značajno ubrzalo proces.

Jedan problem sa kojim smo se susreli tokom globalnog korišćenja Mongo su mrežni prekidi. Ako dovoljno čvorova bude isključeno, čitanja prestaju jer svaki čvor postaje nesiguran da li je prihvatljivo da pruža čitanja. Ima načina da se ovo reši, ali ivice slučajeva postaju komplikovane. Ovo nije teorijski problem - desilo se dovoljno puta uzrokujući probudna obaveštenja u 3 ujutro da smo se umorili od toga, čak pokušavajući da optimizujemo Mongo da bude u redu sa nesigurnostima izbora replikaseta do jednog minuta. Nažalost, mreže između Sao Paula i Falkensteina, na primer, jednostavno nisu bile dobre kod nekih naših provajdera hostinga. Podešavanje kontrole zagušenja i slično je pomoglo, ali nije rešilo problem.

Sveti gral rešenja, pod uslovom da ste spremni na određene kompromise, je sposobnost da prihvatite zapise lokalno na tom čvoru (koji ima dobar hardver, RAID, itd., što je malo verovatno da će se pokvariti) i da obavestite korisnika da su njegovi podaci sačuvani. Takođe možete u tom point-of-presence imati drugi čvor kao vruću repliku za izdržljivost.

Dakle, ovo je ono što smo postigli. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, svi su svoja replikaseta i prihvataju zapise. EU
implementacija (iako ima samo tri PoP-a) ima isto ponašanje.

### Kako to funkcioniše

Neki deo ovoga je pokriven u prethodnom odeljku, ali TL;DR je da je to CRDT-lite. Kreirali smo proxy (u Rustu, jer naravno) koji se nalazi između aplikacije i Mongo i čini ga multi-master. Proxy je svestan čvorova, upravlja kontrolnim tačkama, replikacijom, praćenjem i prvobitnom sinhronizacijom. To je multi-master zamena za Mongo-ov replikacijski sistem, uključujući neke DDL komande.

**Razlika od drugih alata** je u tome što **ne prati oplog**. Praćenje oploga, ili korišćenje promena strimova, ne bi radilo, jer prikazuje samo konačno stanje objekta nakon pisanja, što čini nemogućim rešavanje konflikata. Potrebno je uhvatiti
svaku `$set`, `$inc` operaciju i replicirati tu operaciju samu.

Ovo je rešenje specifično za domen. Ne bi radilo za sve proizvode. Moglo bi se reći da je to dizajn vođen domenom :). Radi za nas jer od početka vrlo pažljivo samo `$set`-ujemo polja koja menjamo na dokumentima - nikada ne koristimo Mongo-ovu `replaceOne`, na primer. Isto važi i za brojače. **Nikada** ne radite `SET VOTES = 5`. Umesto toga, pisali biste `INCREMENT VOTES BY 5`, jer ovo omogućava eventualnu konzistentnost. Distribuirane brave se rešavaju pomoću **ne**. Samo jedan čvor
po klasteru ima oznaku postavljenu za pokretanje cronova. Iako ovo može delovati ograničeno, možemo kupiti servere sa terabajtima RAM-a, tako da možemo preuzeti ovaj kompromis kako bismo smanjili rizik i složenost.

### Čitanje sopstvenih zapisa

Za programere koji koriste API, trebali biste moći da čitate svoje vlastite zapise baš kao i ranije (napravite API poziv da kreirate komentar, zatim navedite komentare i vidite novi unos u toj listi). **Napomena** je da ovo ne možete raditi preko regiona. Ako vaš backend radi u samo jednom regionu,
poput us-west, tada biste trebali moći da čitate svoje sopstvene zapise osim u slučaju da između vašeg pisanja i vašeg čitanja, taj čvor padne **i** vaša
DNS keširanja se ažurira da usmeri ka sledećem najbližem čvoru. Pod uslovom da se to ne dogodi, čitanje vaših vlastitih zapisa je pouzdano.

[Možete takođe odrediti koji point-of-presence koristite. Više informacija ovde.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testiranje i migracija

Oko polovine koda u sistemu je testni okvir, infrastruktura i testovi. Ipak, izdanje je bilo malo problematično, što je zahtevalo duže vreme nedostupnosti (1 sat za EU i 20 minuta za us-global) nego što je bilo poželjno, ali smo srećni što smo prošli ovu prekretnicu i hvala vam na strpljenju!

### Na kraju i šta ovo znači za vas

FastComments bi sada trebali biti brži i izdržljiviji nego ikada, a sada se možemo vratiti radu na funkcionalnostima :)

Živeli!

{{/isPost}}