---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments je sada globalno distribuiran[/postlink]

{{#unless isPost}}
FastComments je prešao na novu arhitekturu radi boljih globalnih performansi.
{{/unless}}

{{#isPost}}

### Šta je novo

Ranije je FastComments imao veoma tradicionalnu arhitekturu za web aplikaciju. Imali smo naše aplikacione servere, baze podataka i neke druge usluge. To je
bilo duplirano u dve regije (us-west i eu). Ako ste bili u Francuskoj i želeli da pogledate nit komentara za kupca koji je hostovan u našem
globalnom centru podataka, vaši zahtevi su morali da idu sve do us-west za podatke o komentarima.

Ne više! Sada su podaci o komentarima i svi medijski sadržaji replicirani globalno za kupce u našoj globalnoj distribuciji, a za kupce
u našoj EU distribuciji imamo tri tačke prisustva u EU gde se podaci repliciraju. Vaši zahtevi idu do najbližeg čvora u
EU.

### Kako je to funkcionisalo ranije

Osim baza podataka koje su imale nekoliko aktivnih replika širom regija i pružaoca cloud usluga, sve usluge su bile raspoređene na jednoj instanci po tipu usluge.
To je značilo da smo za svaku regiju imali jedan aplikacioni server, jedan pubsub server i jedan medijski server. Plan je bio da se vertikalno skaliramo dok smo mogli
jer je to održavalo stvari jednostavnim. Pisanje koda je bilo lako - uvek ste znali da možete "pročitati svoje sopstvene zapise" kada udarite u bazu podataka. Infrastruktura je bila jednostavna,
s izuzetkom sigurnosnih ažuriranja koja bi trajala minut prekida.

### Problem

Problem je počeo očigledno kada bismo dostigli kapacitet. Tako bismo optimizovali, a zatim bismo na kraju morali da povećamo veličinu instance za tu uslugu.

To je počelo postajati skupo na Linode-u, gde je $144 instanca otprilike ekvivalentna, na osnovu našeg passmark testiranja, $20 OVH čvora, i čak i ako
bismo promenili pružatelje usluga imali bismo jedinstvene tačke kvara svuda - a pružaoci poput OVH obično imaju duže vreme rešavanja nego Linode
za probleme sa održavanjem.

### RiR :)

Tokom prvih nekoliko godina, PubSub i Media usluge u FastComments-u su napisane u Javi. Java je izabrana zbog relativno visoke performanse u odnosu na trud
uložen, i nakon godina podešavanja GC-a, isprobavanja G1GC-a, Shenandoah i Z1, odlučili smo da je kraj sa Javom. Prevelika potrošnja memorije jednostavno je bila previše i pošto su ove
usluge bile veoma stagnirajuće nakon što su završene, prednosti Jave su nestale. Takođe, ove usluge su se obično suočavale sa problemom "thundering herd", što je značilo
da je JVM pokušavao da upravlja vršnim prometom kada JIT još nije ni počeo da radi. Ove usluge su bile prime kandidate za prelazak na C++ ili Rust.

Rust je izabran jer nismo C++ eksperti i greška u mrežnom kodu bi mogla izložiti podatke jednog kupca drugom. Rust nam pomaže da sprečimo ove vrste problema.

Želeli smo da konsolidujemo ove usluge ionako, pa dok smo mogli da napravimo *još jedan* prolaz da ih optimizujemo možda sa GraalVM-om, odlučili smo da pređemo na Rust i da završimo s tim.

Migracija nije bila bez problema. Ove usluge moraju da prekidaju SSL, podržavaju HTTP 1.1, HTTP/2, i tako dalje. One rade stvari poput upravljanja mnogim tokovima podataka istovremeno,
čitajući medije iz LRU keša na disku sa ivice, S3, baza podataka, i komunicirajući u mreži. Java ekosistem, Vertx i Netty, su bili veoma dobri za ove stvari. Pomeramo ekosistem biblioteka do njegovih granica, a nedostatak iskustva sa Rust bibliotekama značio je da smo imali
neki pokušaj i grešku. To je izazvalo određeni prekid, i izvinjavamo se zbog toga.

Takođe smo eksperimentisali sa različitim upravljačima memorije, a na kraju se odlučili za mimalloc za naše prilagođene DNS servere i libc za transportni sloj. Ne koristimo Nginx ili Apache, umesto toga
koristimo našu kombinaciju prilagođenog DNS servera koji globalno usmerava klijente na osnovu indeks sačuvanog u memoriji koji se nedeljno obnavlja iz Maxminda i našeg transportnog sloja u Rust-u koji održava mrežu
sa drugim transportnim instancama. Transport prekida SSL, upravlja pubsub radom, i naš je CDN. Prednost ovoga je manja potrošnja resursa prilikom premještanja stvari između
usluga, i manji infrastrukturalni overhead/apstrakcija. Nedostatak je uvid, pa su dobri metrički podaci važni.

U pogledu rezultantnih performansi, Rust usluge su koristile oko 10-30% memorije od onih u Javi, uprkos svom našem radu. Čitao sam knjige poput Java Concurrency in Practice iz zabave, pa
iako nisam stručnjak, znam ponešto o pisanju brzih JVM usluga, i bilo je mnogo lakše postići ovo sa Rust-om. Pored toga, skokovi poruka na veliki broj
pretplatnika jedva su se registrovali na korišćenju CPU-a kada su JVM usluge provodile 40% svog vremena u GC-u, uprkos tome što smo pisali naš kod više kao u igračkom motoru a manje
kao tipičnom serveru. Ne mogu reći da sam veliki obožavalac Rust-a, ali za usluge koje obavljaju mnogo posla i ne menjaju se mnogo nakon početnog razvoja, savršeno je. Naša glavna poslovna logika
ostaje u TypeScript-u.

### Nova arhitektura

Nova arhitektura više nema "pet" čvorova. Umesto toga, svaki server je potpuni klon sa svim istim uslugama i gotovo identičnom konfiguracijom. Svi oni rade
transport, DNS, aplikacioni server, i kopiju baze podataka. Svi čvorovi održavaju Potpunu Enkripciju Diska sa automatskim otključavanjem putem Dropbear-a.

Svaki server pokreće rutirajući transport koji završava zahteve i obrađuje ih kao websocket, http tok, ili cdn zahtev. Ovi serveri se međusobno povezuju i bilo koji od njih pruža mapiranje globalne mreže sa svojim lokalnim DNS serverom kako bi u realnom vremenu obavestili DNS gde se svaki aktivni čvor globalno nalazi.

Jedna od prednosti nove arhitekture je redundancija. Ako nas kupac u jednoj regiji jako pritisne, ostale regije ostaju online.

Aplikacioni kod sada mora biti veoma svestan koji upiti mogu pogoditi najbliži čvor ili koji moraju ići ka osnovnoj bazi podataka, koja može biti daleko. Greška može drastično smanjiti performanse. To takođe znači da mogu trajati sporiji upisi iz nekih regija, i ovo zahteva pažljivo podešavanje i optimizaciju. Sada pratimo šablon interno u
kod gde sve metode koje pogode bazu podataka uzimaju argument readPreference, tako da pozivaoci do vrha moraju eksplicitno odlučiti kako da upitaju.

Prednost je veoma dobro horizontalno skaliranje za čitanje. FastComments je veoma opterećen čitanjem, ali ne smemo zaboraviti naše moderatore! Moderatori rade svakog dana širom sveta
i želimo da njihovo iskustvo ostane dobro. Kao deo ovog uvođenja radili smo sa nekolicinom njih kako bismo osigurali da alati za moderiranje ostanu brzi.

Takođe možemo ručno birati hardver, što je zabavno i korisno. Novi serveri su mešavina i5-13500 i Ryzen 5 5600X kutija, dok je EU na nekim starijim Xeon-ima. U našim benchmark testovima svi ovi
su bili mnogo brži od skupljih servera koje smo istraživali kod drugih pružatelja. Nedostatak je više posla oko postavljanja, ali smo ovo automatizovali, zajedno sa SMART nadzorom diska za kvarove, i tako dalje.

Rad na ovim stvarima znači da možemo nastaviti da nudimo konkurentne cene.

### Uvođenje

Uvođenje tokom proteklih nekoliko meseci dok prepisujemo usluge i prelazimo na nove pružatelje usluga bilo je neuredno, zahvaljujemo vam na strpljenju.

Tokom prvobitnog uvođenja naši metrički podaci su nam pokazali povećanje zahteva koji traju duže od 100ms. Pokušavamo da ne dozvolimo da mnogi zahtevi traju ovako dugo za bilo šta.

<div class="text-center">
    <div class="sm">Postepeni Napredak</div>
    <img src="images/slow-reqs.png" alt="Spori Zahtevi" title="Spori Zahtevi" />
</div>

Još uvek postižemo postepeni napredak poboljšavajući performanse za neke regije. Hvala svima koji su do sada pružili povratne informacije.

### Razmatranja prilikom korišćenja API-ja

API ostaje snažno konzistentan - možete čitati svoje sopstvene zapise - kako bismo održali kompatibilnost unazad i olakšali stvari programerima. Da bismo omogućili
programerima da biraju performanse umesto konzistentnosti, planiramo da izložimo parametar readPreference. Prednost je da bismo mogli takođe ponuditi popust na kredite za
ove API pozive.

Svi javni endpoint-i, poput onih za serviranje javnog komentara, uvek čitaju sa najbliže (lokalne) baze podataka na tom čvoru.

### Zašto ne koristiti običan CDN

Nitovi komentara nisu statični, oni su živi, i primena živog toka preko ustajalih statičnih podataka takođe ne funkcioniše jer kada gledate nit kao
anonimni korisnik dobijate "anonimnu sesiju". U ovoj anonimnoj sesiji možete raditi stvari kao što su blokiranje i prijavljivanje drugih korisnika, i morate pokazati
da li je anon korisnik lajkovao dati komentar, i tako dalje. Nitovi komentara takođe mogu biti zaključani iza SSO-a, autentifikacije ili korisničkih grupa.

Na kraju, vrsta "progresivnog unapređenja", gde se dinamički podaci mapiraju na statičke podatke sa CDN-a, pruža loše iskustvo gde sadržaj skače ili se menja nakon nekoliko sekundi.
Radije bismo to izbegli.

### Ko sada ima moje podatke

Vaši podaci više nisu pohranjeni na Linode-u. Oni se uživo repliciraju između Hetznera i OVH sa punom enkripcijom diska, a svo komuniciranje između serverskih pozadina
se odvija putem TLS-a. Održavamo nekoliko nasleđenih Linode instanci za outbound webhook proksije, ali nijedan podatak ili medij ne ostaje pohranjen na Linode-u.

### Na kraju

Kao i kod svih velikih izdanja, srećni smo što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu promenu. FastComments bi trebao bolje da se skalira i imati
bolji vremenski rad na dugim stazama sa ovim radom. Javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}

---