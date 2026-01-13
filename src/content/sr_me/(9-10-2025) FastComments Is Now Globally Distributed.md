---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Sada Ima Globalnu Distribuciju[/postlink]

{{#unless isPost}}
FastComments je prešao na novu arhitekturu radi bolje globalne performanse.
{{/unless}}

{{#isPost}}

### Šta je novo

Prethodno je FastComments imao veoma tradicionalnu arhitekturu za web aplikaciju. Imali smo naše serverske aplikacije, baze podataka i neke druge usluge. Ovo je
bilo duplicirano u dve regije (us-west i eu). Ako ste bili u Francuskoj i želeli da pregledate nit komentara za kupca koji je hostovan u našem
globalnom data centru, vaši zahtevi morali su ići sve do us-west po podatke o komentarima.

Više ne! Sada su podaci o komentarima i svi medijski resursi replicirani globalno za kupce u našoj globalnoj distribuciji, a za kupce
u našoj EU distribuciji imamo tri tačke prisustva u EU gde se podaci repliciraju. Vaši zahtevi idu na najbliži čvor u
EU.

### Kako je to funkcionisalo

Osim baza podataka koje su imale nekoliko aktivnih replika širom regiona i cloud provajdera, sve usluge su bile raspoređene na jednoj instanci po tipu usluge.
To je značilo da smo za svaku regiju imali jedan serverski aplikaciju, jedan pubsub server i jedan medijski server. Plan je bio vertikalno skalirati dok
možemo, jer je to stvari održavalo jednostavnim. Pisanje koda je bilo lako - uvek ste znali da možete "čitati svoje sopstvene zapise" kada udarite na bazu podataka. Infrastruktura je bila jednostavna,
osim bezbednosnih ažuriranja koja bi uzela minut vremena zastoja.

### Problem

Problem je očigledno počeo kada bismo dostigli kapacitet. Pa bismo optimizovali, a onda bi na kraju morali povećati veličinu instance za tu uslugu.

To je počelo postati skupo na Linode-u, gde je instanca od $144 otprilike ekvivalentna, na osnovu našeg testiranja prolazne marke, $20 OVH čvoru, a čak i ako
bismo promenili provajdere hostinga, imali bismo jedinstvene tačke greške svuda - a provajderi poput OVH obično imaju duže vreme rešavanja nego Linode
za probleme sa održavanjem.

### RiR :)

Tokom prvih nekoliko godina, PubSub i Medijska usluga u FastComments su pisane u Javi. Java je izabrana zbog relativno visoke performanse za uložen trud,
i nakon godina podešavanja GC-a, isprobavanja G1GC, Shenandoah i Z1, odlučili smo da ne koristimo više Javu. Prevelika potrošnja memorije je jednostavno bila previše, a pošto su te
usluge bile vrlo stagnirane nakon završetka, prednosti Jave su nestale. Takođe, te usluge su se obično morale suočiti sa problemom "thundering herd", što je značilo
da je JVM pokušavao da reši vršne saobraćaje pre nego što je JIT uopšte počeo da radi. Ove usluge su bile idealni kandidati za prebacivanje na C++ ili Rust.

Rust je izabran pošto nismo C++ eksperti i greška u mrežnom kodu mogla bi izložiti podatke jednog kupca drugom. Rust nam pomaže da sprečimo ove vrste problema.

Želeli smo da konsolidujemo te usluge na bilo koji način, pa dok smo mogli napraviti *još jedan* prolaz optimizacije, možda uz GraalVM, odlučili smo da pređemo na Rust i završimo s tim.

Migracija nije prošla bez problema. Ove usluge moraju da prekinu SSL, podržavaju HTTP 1.1, HTTP/2, i tako dalje. One rade stvari poput upravljanja mnogim tokom podataka istovremeno,
čitajući medije iz edge on-disk lru cache-a, S3, baza podataka i komuniciraju u mreži. Java ekosistem, Vertx i Netty, su bili veoma dobri za te stvari. Pomeramo ekosistem biblioteka do njegovog limita, a nemajući puno
iskustva s Rust bibliotekama značilo je da smo imali
neke pokušaje i greške. Ovo je uzrokovalo neki zastoj, i izvinjavamo se zbog toga.

Takođe smo eksperimentisali sa različitim upraviteljima memorije, odlučujući se za mimalloc za naše prilagođene DNS servere i libc za transportni sloj. Ne koristimo Nginx ili Apache, umesto toga
koristimo naš vlastiti spoj prilagođenog DNS servera koji usmerava klijente globalno na osnovu indeksa u memoriji koji se ponovo gradi svake nedelje iz Maxmind-a i našeg transportnog sloja u Rustu koji održava mrežu
sa ostalim transportnim instancama. Transport prekida SSL, obavlja pubsub rad i naš je CDN. Prednost ovoga je manji prekovremeni rad prilikom prebacivanja stvari između
usluga, i manji infrastrukturni prekovremeni rad/abstrakcija. Mana je vidljivost, tako da su dobri metriji važni.

U pogledu rezultantnih performansi, Rust usluge su koristile oko 10-30% memorije od Java usluga, uprkos našem radu. Čitao sam knjige poput Java Concurrency in Practice iz zabave, tako da
iako nisam stručnjak, znam ponešto o pisanju brzih JVM usluga, i bilo je mnogo lakše postići ovo s Rustom. Pored toga, skakanja poruka ka velikim brojevima
pretplatnika jedva su se registrirala na upotrebi CPU-a dok su JVM usluge provodile 40% svog vremena u GC-u, uprkos tome što smo naš kod pisali više poput igre nego
poput vaše tipične server. Ne mogu reći da sam veliki obožavatelj Rusta, ali za usluge koje obavljaju puno posla i ne menjaju se mnogo nakon inicijalnog razvoja, savršeno je. Naša glavna poslovna logika
ostaje u TypeScript-u.

### Nova arhitektura 

Nova arhitektura više nema "pet" čvorova. Umesto toga, svaki server je potpuni klon sa svim istim uslugama i gotovo identičnom konfiguracijom. Svi oni pokreću
transport, DNS, serversku aplikaciju i kopiju baze podataka. Svi čvorovi održavaju potpunu enkripciju diska sa automatskim otključavanjem sa Dropbear-om.

Svaki server pokreće usmereni transport koji prekida zahteve i obrađuje ih kao websocket, http stream ili cdn zahtev. Ovi serveri se povezuju jedni
s drugima i bilo koji od njih pruža mapiranje globalne mreže ka svom lokalnom DNS serveru kako bi u realnom vremenu rekao DNS-u gde se svaki aktivni čvor nalazi globalno.

Jedna prednost nove arhitekture je redundancija. Ako kupac u jednoj regiji udari na nas jako, druge regije ostaju online.

Kod aplikacije sada mora biti veoma svestan koji zahtevi mogu udariti najbliži čvor ili koji moraju ići do primarno baze podataka, koja može biti daleko. Pravi greška
može drastično smanjiti performanse. Ovo takođe znači da zapisi iz nekih regija mogu biti spori, i to zahteva pažljivo podešavanje i optimizaciju. Sada sledimo obrazac interno
u kodu gde sve metode koje udaraju bazu podataka uzimaju argument readPreference, tako da pozivaoci do vrha moraju eksplicitno odlučiti kako da postave upit.

Prednost je vrlo dobro horizontalno skaliranje za čitanje. FastComments je veoma baziran na čitanju, ali ne smemo zaboraviti naše moderatore! Moderatori rade danima i noćima širom sveta
i želimo da njihovo iskustvo ostane dobro. Kao deo ovog rollout-a radili smo sa nekolicinom njih kako bismo osigurali da alati za moderaciju ostanu brzi.

Takođe možemo ručno birati hardver, što je zabavno i nagrađujuće. Novi serveri su mešavina i5-13500 i Ryzen 5 5600X mašina, a EU je na nekim starijim Xeon-ima. U našim benchmark testovima svi ovi
su bili mnogo brži od skupljih servera koje smo istraživali kod drugih provajdera. Mana je više podešavanja, ali smo to automatizovali, zajedno sa SMART praćenjem diskova za greške i tako dalje.

Učinjenje ovakvih stvari znači da možemo nastaviti nuditi konkurentne cene.

### Rollout

Rollout tokom poslednjih nekoliko meseci dok prepisujemo usluge i prelazimo na nove provajdere hostinga bio je neravan, zahvaljujemo vam na strpljenju.

Na početnom rollout-u naše metrike su pokazale povećanje zahteva koji su trajali > 100ms. Trudimo se da nemamo puno zahteva koji traju toliko dugo.

<div class="text-center">
    <div class="sm">Postepeni Napredak</div>
    <img src="images/slow-reqs.png" alt="Spori Zahtevi" title="Spori Zahtevi" />
</div>

Još uvek postižemo postepeni napredak poboljšavajući performanse za neke regije. Hvala svima koji su do sada dali povratne informacije.

### Razmatranja prilikom korišćenja API-ja

API ostaje snažno konzistentan - možete čitati svoje sopstvene zapise - kako bi se održala kompatibilnost unazad i olakšale stvari za programere. Da bismo omogućili
programerima da odaberu performanse umesto konzistentnosti, planiramo da izložimo parameter readPreference. Prednost je što možemo takođe ponuditi popust na kredite za
ove API pozive.

Svi javni krajnji tačke, poput onih za služenje javnog komentarskog vidžeta, uvek čitaju iz najbliže (lokalne) baze podataka na tom čvoru.

### Zašto ne samo koristiti običan CDN

Nitovi komentara nisu statični, oni su živi, i primena živog toka na zastarelim statičnim podacima takođe ne funkcioniše, jer kada pregledate nit kao
anonimni korisnik dobijate "anonimnu sesiju". U ovoj anonimnoj sesiji možete raditi stvari poput blokiranja i označavanja drugih korisnika, i morate prikazati
da li je anoniman korisnik like-ovao dati komentar, i tako dalje. Nitovi komentara takođe mogu biti zaključani iza SSO, autentifikacije ili korisničkih grupa. 

Na kraju, vrsta "progresivne poboljšanja" u kojoj su dinamički podaci mapirani na statične podatke iz CDN-a čini da dobijete loše iskustvo gde sadržaj skače ili se menja nakon nekoliko sekundi.
Radije bismo to izbegli.

### Ko sada ima moje podatke

Vaši podaci više nisu pohranjeni na Linode-u. Oni se repliciraju uživo između Hetznera i OVH sa punom enkripcijom diska, i sva komunikacija između backend servera
vrši se putem TLS-a. Održavamo nekoliko nasleđenih Linode instanci za izlazne webhook proksije, ali nikakvi podaci ili mediji ne ostaju pohranjeni na Linode-u.

### Na kraju

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove promene. FastComments bi trebao bolje skalirati i imati
bolju dostupnost na duže staze sa ovim radom. Javite nam u komentarima ispod ako pronađete bilo kakve probleme.

{{/isPost}}

---