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

Prethodno je FastComments imao veoma tradicionalnu arhitekturu za web aplikaciju. Imali smo naše serverske aplikacije, baze podataka i neke druge usluge. Ovo je
bilo duplirano u dve regije (us-west i eu). Ako ste bili u Francuskoj i želeli da pogledate nit komentara za kupca hostovanog u našem
globalnom data centru, vaši zahtevi su morali da idu do us-west za podatke o komentarima.

Više ne! Sada su podaci o komentarima i svi medijski sadržaji replicirani globalno za kupce u našoj globalnoj distribuciji, a za kupce
u našoj EU distribuciji imamo tri tačke prisustva u EU gde se podaci repliciraju. Vaši zahtevi idu do najbližeg čvora u
EU.

### Kako je ranije funkcionisalo

Osim za baze podataka koje su imale nekoliko aktivnih replika širom regija i cloud provajdera, sve usluge su bile raspoređene na jednu instancu po tipu usluge.
To je značilo da smo za svaku regiju imali jedan serverski aplikaciju, jedan pubsub server i jedan medijski server. Plan je bio vertikalno skalirati dok možemo
jer je to pojednostavljalo stvari. Pisanje koda je bilo lako - uvek ste znali da možete „pročitati svoja vlastita pisanja“ kada udarite u bazu podataka. Infra je bila jednostavna,
osim sigurnosnih ažuriranja koja bi uzela minutu prekida.

### Problem

Problem je očigledno počeo kada bismo dostigli kapacitet. Tako bismo optimizovali, a zatim bismo na kraju morali da povećamo veličinu instance za tu uslugu.

To je počelo da postaje preskupo na Linode, gde je instanca od 144 $ otprilike ekvivalentna, bazirano na našim testovima prolaznosti, instanci od 20 $ na OVH, a čak i ako
bismo promenili provajdere hostinga, imali bismo pojedinačne tačke kvara svuda - a provajderi poput OVH obično imaju duže vreme rešavanja problema nego Linode
za probleme sa održavanjem.

### RiR :)

U prvih nekoliko godina, PubSub i Medijske usluge u FastComments su napisane u Javi. Java je izabrana zbog relativno visokih performansi za uložen trud,
a nakon godina podešavanja GC-a, isprobavajući G1GC, Shenandoah i Z1, odlučili smo da nema više Jave. Ova memorijska potrošnja jednostavno je bila prevelika, a pošto su ove
usluge postale veoma stagnatne kada su bile završene, prednosti Jave su nestale. Takođe, ove usluge su se često suočavale sa problemom "neprekidnog pritiska", što je značilo
da se JVM trudio da upravlja vrhunskim saobraćajem kada JIT još nije ni bio aktiviran. Ove usluge su bile prime kandidate za prelazak na C++ ili Rust.

Rust je izabran budući da nismo stručnjaci za C++ i greška u mrežnom kodu mogla bi izložiti podatke jednog kupca drugom. Rust nam pomaže da sprečimo ovakve probleme.

U svakom slučaju, želeli smo da konsolidujemo ove usluge, pa dok smo mogli da napravimo *još* jedan prolaz optimizacije, možda sa GraalVM-om, odlučili smo da pređemo na Rust i završimo s tim.

Migracija nije prošla bez problema. Ove usluge moraju da prekinu SSL, podržavaju HTTP 1.1, HTTP/2 i tako dalje. One rade stvari poput upravljanja mnogim tokovima podataka istovremeno,
čitanja medija iz LRU cache-a na disku, S3, baza podataka, i komuniciraju u mreži. Java ekosistem, Vertx i Netty, bili su jako dobri za ove stvari. Pomeramo ekosistem biblioteka do njegovih granica, a nedostatak mnogo iskustva sa Rust bibliotekama značio je da imamo
nekoliko pokušaja i grešaka. To je izazvalo određeno vreme prekida, i izvinjavamo se zbog toga.

Takođe smo eksperimentisali sa različitim upravljačima memorije, odlučujući se za mimalloc za naše prilagođene DNS servere i libc za transportni sloj. Ne pokrećemo Nginx ili Apache, već
koristimo našu kombinaciju prilagođenog DNS servera koji usmerava klijente globalno na osnovu in-memory indeksa koji se prepravlja svake nedelje iz Maxminda i našeg transportnog sloja u Rust-u koji održava mrežu
sa drugim transportnim instancama. Transport prekida SSL, obavlja rad pubsub-a i naš je CDN. Prednost ovoga je manja preopterećenost prilikom prebacivanja stvari između
usluga i manje infrastrukturne preopterećenosti/apstrakcije. Nedostatak je uvid, tako da su dobri metrički podaci važni.

Što se tiče rezultantnih performansi, Rust usluge koristile su oko 10-30% memorije Java usluga, uprkos našem radu. Čitao sam knjige poput Java Concurrency in Practice iz zabave, tako da
iako nisam stručnjak, znam ponešto o pisanju brzih JVM usluga i bilo je mnogo lakše to postići sa Rustom. Pored toga, udari poruka u velikom broju
pretplatnika jedva bi se registrovali na korišćenju CPU-a kada bi JVM usluge trošile 40% svog vremena na GC, uprkos tome što smo naš kod pisali više kao igrani engine i manje
kao vaš tipični server. Ne mogu reći da sam veliki ljubitelj Rusta, ali za usluge koje obavljaju mnogo posla i ne menjaju se mnogo nakon inicijalnog razvoja, savršeno je. Naša glavna poslovna logika
ostaje u TypeScript-u.

### Nova arhitektura

Nova arhitektura više nema "ljubimce" čvorove. Umesto toga, svaki server je potpuna kopija sa svim istim uslugama i gotovo identičnom konfiguracijom. Svi pokreću
transport, DNS, serversku aplikaciju i kopiju baze podataka. Svi čvorovi održavaju punu enkripciju diska sa automatskim otključavanjem uz Dropbear.

Svaki server pokreće transport koji usmerava zahteve i upravlja njima kao websocket, http stream ili cdn zahtev. Ovi serveri se međusobno povezuju
i bilo koji od njih pruža mapiranje globalne mreže na svoj lokalni DNS server kako bi u realnom vremenu obavestili DNS gde se svaki aktivni čvor globalno nalazi.

Jedna prednost nove arhitekture je redundantnost. Ako nas kupac u jednoj regiji napadne stvarno jako, ostale regije ostaju online.

Aplikativni kod sada mora biti veoma svestan koji zahtevi mogu udariti najbliži čvor ili koji moraju ići do glavne baze podataka, koja može biti daleko. Napraviti grešku
može drasticno smanjiti performanse. To takođe znači da pisanja iz nekih regija mogu biti spora, i to zahteva pažljivo podešavanje i optimizaciju. Sada sledimo obrazac interno
u kodu gde sve metode koje udaraju na bazu podataka uzimaju argument readPreference, tako da pozivaoci do vrha moraju eksplicitno odlučiti kako da upite.

Prednost je veoma dobra horizontalna skalabilnost za čitanje. FastComments je veoma orijentisan na čitanje, ali ne smemo zaboraviti naše moderatore! Moderatori rade danima i noćima širom sveta
i želimo da im iskustvo ostane dobro. Kao deo ovog uvođenja radili smo sa nekolicinom njih kako bismo osigurali da alati za moderaciju ostanu brzi.

Takođe možemo ručno birati hardver, što je zabavno i nagrađujuće. Novi serveri su mešavina i5-13500 i Ryzen 5 5600X kutija, a EU je na nekim starijim Xeon-ima. U našim benchmarkovima svi ovi
su bili mnogo brži od skupljih servera koje smo istraživali kod drugih provajdera. Nedostatak je više posla sa podešavanjem, ali to smo automatizovali, zajedno sa SMART praćenjem diska za kvarove i tako dalje.

Raditi ovakve stvari znači da možemo nastaviti da nudimo konkurentne cene.

### Uvođenje

Uvođenje u proteklih nekoliko meseci dok prepisujemo usluge i prelazimo na nove provajdere hostinga bilo je neujednačeno, zahvaljujemo vam na strpljenju.

Na prvom uvođenju naši metrički podaci su pokazali povećanje zahteva koji traju više od 100ms. Trudimo se da nemamo mnogo zahteva koji traju toliko dugo za bilo šta.

<div class="text-center">
    <div class="sm">Postepeni Napredak</div>
    <img src="images/slow-reqs.png" alt="Spori Zahtevi" title="Spori Zahtevi" />
</div>

Još uvek postižemo postepeni napredak u poboljšanju performansi za neke regije. Hvala svima koji su do sada pružili povratne informacije.

### Razmatranja prilikom korišćenja API-ja

API ostaje snažno konzistentan - možete pročitati svoja vlastita pisanja - kako bismo održali unazadnu kompatibilnost i pojednostavili stvari za programere. Da bismo omogućili
programerima da izaberu performanse umesto konzistentnosti, planiramo da izložimo parametar readPreference. Prednost je što možemo ponuditi i popust na kredite za
ove API pozive.

Sve javne tačke pristupa, poput serviranja javnog komentarskog widget-a, uvek čitaju iz najbliže (lokalne) baze podataka na tom čvoru.

### Zašto ne koristiti običan CDN

Nitovi komentara nisu statični, oni su aktivni, a primena aktivnog stream-a na zastaralim statičnim podacima takođe ne funkcioniše, jer kada pregledate nit kao
anonimni korisnik dobijate "anonimnu sesiju". U ovoj anonimnoj sesiji možete raditi stvari poput blokiranja i označavanja drugih korisnika, i morate pokazati
da li je anonimni korisnik lajkovao dati komentar, i tako dalje. Nitovi komentara takođe mogu biti zaključani iza SSO, autentifikacije ili korisničkih grupa.

Na kraju, vrsta "progresivnog unapređenja" gde se dinamički podaci mapiraju na statičke podatke iz CDN-a pruža vam loše iskustvo gde sadržaj skače okolo ili se menja nakon nekoliko sekundi.
Više bismo voleli da to ne radimo.

### Ko sada ima moje podatke

Vaši podaci više nisu smešteni na Linode. Oni se repliciraju uživo između Hetznera i OVH sa potpunom enkripcijom diska, i svaka komunikacija između poslužitelja
se obavlja sa TLS-om. Održavamo nekoliko nasleđenih Linode instanci za outbound webhook proksije, ali nema podataka ili medija koji ostaju smešteni na Linode.

### Na kraju

Kao i kod svih važnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove promene. FastComments bi trebao da bolje skalira i imati
bolje vreme rada na duge staze sa ovim radom. Javite nam u komentarima ako otkrijete bilo kakve probleme.

{{/isPost}}

---