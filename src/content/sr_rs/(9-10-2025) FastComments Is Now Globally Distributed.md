---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments je sada globalno distribuiran[/postlink]

{{#unless isPost}}
FastComments je prešao na novu arhitekturu za bolju globalnu performansu.
{{/unless}}

{{#isPost}}

### Šta je novo

Pre ovog, FastComments je imao vrlo tradicionalnu arhitekturu za web aplikacije. Imali smo naše serverske aplikacije, baze podataka i neke druge usluge. Ovo je
bilo duplicirano u dve regije (us-west i eu). Ako ste bili u Francuskoj i želeli da pogledate nit komentara za kupca hostovanog u našem
globalnom data centru, vaši zahtevi bi morali da idu do us-west za podatke o komentarima.

Sada više nije tako! Sada su podaci o komentarima i svi medijski resursi replicirani globalno za kupce u našoj globalnoj implementaciji, i za kupce
u našoj EU implementaciji imamo tri tačke prisustva u EU gde se podaci repliciraju. Vaši zahtevi idu na najbliži čvor u
EU.

### Kako je to funkcionisalo

Osim baza podataka koje su imale nekoliko aktivnih replika preko regija i cloud provajdera, sve usluge su bile implementirane na jednoj instanci po tipu usluge.
To je značilo da smo za svaku regiju imali jedan serverski aplikaciju, jedan pubsub server i jedan medijski server. Plan je bio vertikalno skalirati dok
možemo, jer je to jednostavno. Pisanje koda je bilo lako - uvek ste znali da možete "pročitati svoje pisanje" kada ste se povezali na bazu podataka. Infrastruktura je bila jednostavna,
s izuzetkom bezbednosnih ažuriranja koja bi trajala minutu prekida.

### Problem

Problemi su se počeli javljati na očigledan način kada bismo dostigli kapacitet. Tako bismo optimizovali, a zatim bismo na kraju morali da povećamo veličinu instance za tu uslugu.

Ovo je počelo da postaje preskupo na Linode-u, gde je instanca od $144 otprilike ekvivalentna, na osnovu naših passmark testova, OVH čvoru od $20, a čak i ako
bismo promenili provajdere hostinga imali bismo jedinstvene tačke kvara svuda - a provajderi poput OVH imaju tendenciju dužih vremena rešavanja nego Linode
za probleme sa održavanjem.

### RiR :)

Tokom prvih nekoliko godina, PubSub i Media usluge u FastComments su pisane u Javi. Java je izabrana zbog relativno visoke performanse za uloženi trud,
a nakon godina podešavanja GC, isprobavajući G1GC, Shenandoah i Z1, odlučili smo da ne koristimo više Javu. Prekoračenje korišćenja memorije jednostavno je bilo previše, a pošto su te
usluge bile vrlo stagnante kada su bile završene, prednosti Jave su nestale. Takođe, ove usluge su često morale da se bore sa problemom "thundering herd", što znači
da je JVM pokušavao da se nosi sa vrhunskim saobraćajem kada JIT još nije bio aktiviran. Ove usluge su bile glavne kandidatkinje za prelazak na C++ ili Rust.

Rust je izabran pošto nismo stručnjaci za C++ i greška u mrežnom kodu mogla bi izložiti podatke jednog korisnika drugom. Rust nam pomaže da sprečimo ovakve probleme.

Želeli smo da konsolidujemo ove usluge u svakom slučaju, tako da iako smo mogli da izvršimo *još jedan* optimizatorski pokušaj možda uz GraalVM, odlučili smo da pređemo na Rust i završimo to.

Migracija nije bila bez problema. Ove usluge moraju da obavljaju SSL terminaciju, podržavaju HTTP 1.1, HTTP/2 i tako dalje. One rade stvari poput upravljanja mnogim tokovima podataka istovremeno,
čitajući medijske sadržaje iz edge on-disk lru cache, S3, baza podataka i komunicirajući u mreži. Java ekosistem, Vertx i Netty, bili su veoma dobri za ove stvari. Pushing the library ecosystem to its limit, i nedostatak puno iskustva sa Rust bibliotekama značilo je da smo imali
malo pokušaja i grešaka. To je uzrokovalo neki prekid rada, i izvinjavamo se zbog toga.

Takođe smo eksperimentisali sa različitim upravljačkim memorijama, odlučujući se za mimalloc za naše prilagođene DNS servers i libc za transportni sloj. Ne koristimo Nginx ili Apache, već
koristimo našu kombinaciju prilagođenog DNS servera koji usmerava klijente globalno na osnovu indeksa u memoriji, koji se ponovo gradi svake nedelje iz Maxmind-a i našeg transportnog sloja u Rustu koji održava mrežu
sa drugim transportnim instancama. Transport terminira SSL, obavlja pubsub posao, i naš je CDN. Prednost ovoga je manji teret prilikom premeštanja stvari između
usluga, i manje infrastrukture i apstrakcije. Nedostatak je uvid, tako da su dobri metri važni.

U pogledu rezultantnih performansi, Rust usluge koristile su oko 10-30% memorije Java usluga, uprkos svim našim naporima. Čitao sam knjige kao što je Java Concurrency in Practice iz zabave, tako da
iako nisam ekspert znam nešto ili dvoje o pisanju brzih JVM usluga, i bilo je mnogo lakše postići ovo sa Rustom. Dodatno, iznenadne poraste poruka za veliki broj
pretplatnika jedva da bi registrivale opterećenje CPU-a dok su JVM usluge trošile 40% svog vremena u GC, uprkos tome što je naš kod više ličio na kod igračke i manje
na tipičan server. Ne mogu da kažem da sam veliki ljubitelj Rusta, ali za usluge koje rade puno posla i ne menjaju se mnogo nakon inicijalnog razvoja, savršen je. Naša glavna poslovna logika
ostaje u TypeScript-u.

### Nova arhitektura

Nova arhitektura više nema "kućne" čvorove. Umesto toga, svaki server je potpuna klon sa svim istim uslugama i gotovo identičnom konfiguracijom. Svi oni pokreću
transport, DNS, serversku aplikaciju i kopiju baze podataka. Svi čvorovi održavaju punu enkripciju diska sa automatskim otključavanjem uz Dropbear.

Svaki server pokreće transport koji usmerava zahteve i obrađuje ih kao websocket, http stream ili cdn zahtev. Ovi serveri se međusobno povezuju i bilo koji od njih obezbeđuje mapiranje globalne mreže na svoj lokalni DNS server kako bi real-time obavestio DNS gde se svaki aktivni čvor nalazi globalno.

Jedna od prednosti nove arhitekture je redundancija. Ako kupac u jednoj regiji znatno optereti sistem, druge regije ostaju online.

Kod aplikacije sada mora imati veliko razumevanje koji zahtevi mogu ići do najbližeg čvora ili koji moraju da idu do glavne baze podataka, koja može biti daleko. Greška
može drastično smanjiti performanse. To takođe znači da pisanja iz nekih regija mogu biti spora, i ovo zahteva pažljivo podešavanje i optimizaciju. Sada sledujemo obrazac interno
u kodu gde sve metode koje se javljaju na bazi podataka uzimaju argument readPreference, tako da pozivaoci do vrha moraju izričito odlučiti kako da upitaju.

Prednost je vrlo dobra horizontalna skalabilnost za čitanje. FastComments je veoma opterećen čitanjima, ali ne smemo zaboraviti naše moderatore! Moderatori rade iz dana u dan širom sveta
i želimo da njihovo iskustvo ostane dobro. Kao deo ovog uvođenja radili smo sa nekima od njih da obezbedimo da alati za moderaciju ostanu brzi.

Takođe možemo selektivno birati hardver, što je zabavno i korisno. Novi serveri su mešavina i5-13500 i Ryzen 5 5600X kutija, a EU je na nekim starijim Xeons. U našim benchmark-ovima
svi su bili daleko brži od skupljih servera koje smo istraživali kod drugih provajdera. Nedostatak je više posla na postavljanju, ali smo to automatizovali, zajedno sa SMART nadgledanjem diskova za greške i slično.

Raditi ovakve stvari znači da možemo nastaviti da nudimo konkurentne cene.

### Uvođenje

Uvođenje tokom proteklih nekoliko meseci dok prepisujemo usluge i prelazimo na nove provajdere hostinga je bilo nerazmjerno, zahvaljujemo vam na strpljenju.

Tokom inicijalnog uvođenja, naše metrike su pokazale povećanje zahteva koji traju > 100ms. Trudimo se da nemamo mnogo zahteva koji traju toliko dugo za bilo šta.

<div class="text-center">
    <div class="sm">Postepeni Napredak</div>
    <img src="images/slow-reqs.png" alt="Spori Zahtevi" title="Spori Zahtevi" />
</div>

Još uvek postignemo postepeni napredak u poboljšanju performansi za neke regije. Hvala svima koji su do sada dali povratne informacije.

### Razmatranja prilikom korišćenja API-ja

API ostaje snažno konzistentan - možete da pročitate svoje pisanje - kako bismo održali unazad kompatibilnost i olakšali stvar developerima. Da bismo omogućili
developerima da biraju performanse umesto konzistentnosti, planiramo da izložimo parameter readPreference. Prednost je što ćemo možda takođe ponuditi popust u kreditima za
ove API pozive.

Sve javne tačke, poput usluge javnog komentarskog widgeta, uvek čitaju iz najbliže (lokalne) baze podataka na tom čvoru.

### Zašto ne koristiti običan CDN

Nitovi komentara nisu statični, već su živi, i primena živog toka preko zastarelih statičnih podataka takođe ne funkcioniše, jer kada gledate nit kao
anonimni korisnik dobijate "anonimnu sesiju". U ovoj anonimnoj sesiji možete raditi stvari poput blokiranja i označavanja drugih korisnika, i morate prikazati
da li je anonimni korisnik lajkovao dati komentar, i tako dalje. Nitovi komentara takođe mogu biti zaključani iza SSO, autentifikacije ili korisničkih grupa.

Na kraju, vrsta "progresivnog unapređenja" gde su dinamički podaci mapirani na statičke podatke iz CDN-a daje vam loše iskustvo gde se sadržaj premesta ili menja nakon nekoliko sekundi.
Radije bismo to izbegli.

### Ko ima moje podatke sada

Vaši podaci više nisu pohranjeni na Linode-u. Oni su uživo replicirani između Hetzner-a i OVH-a sa punom enkripcijom diska, a sva komunikacija između serverskih backenda
se obavlja putem TLS-a. Održavamo nekoliko starih Linode instanci za outbound webhook proxy, ali nijedan podatak ili medij više nije pohranjen na Linode.

### Zaključak

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove promene. FastComments bi trebao bolje da se skalira i imati
bolje vreme rada na duge staze sa ovim radom. Javite nam ispod ako otkrijete bilo kakve probleme.

{{/isPost}}