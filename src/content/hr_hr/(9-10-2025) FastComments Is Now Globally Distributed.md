---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments je sada globalno distribuiran[/postlink]

{{#unless isPost}}
FastComments je prešao na novu arhitekturu za bolju globalnu izvedbu.
{{/unless}}

{{#isPost}}

### Što je novo

Ranije je FastComments imao vrlo tradicionalnu arhitekturu za web aplikaciju. Imali smo naše aplikacijske servere, baze podataka i neke druge usluge. To je bilo
duplicirano u dva područja (us-west i eu). Ako ste bili u Francuskoj i željeli pregledati komentatorsku nit za kupca koji se nalazi u našem
globalnom podatkovnom centru, vaši zahtjevi bi morali ići sve do us-west za podatke o komentarima.

Više ne! Sada su podaci o komentarima i svi medijski sadržaji replicirani globalno za kupce u našoj globalnoj implementaciji, a za kupce
u našoj EU implementaciji imamo tri punkta prisutnosti u EU gdje su podaci replicirani. Vaši zahtjevi idu do najbližeg čvora u
EU.

### Kako je to funkcioniralo

Osim baza podataka koje su imale nekoliko aktivnih replika širom regija i cloud pružatelja, sve usluge su bile raspoređene na jednu instancu po vrsti usluge.
To je značilo da smo za svaku regiju imali jedan aplikacijski server, jedan pubsub server i jedan medijski server. Plan je bio vertikalno skalirati koliko god
smo mogli, jer je to pojednostavilo stvari. Pisanje koda je bilo lako - uvijek ste znali da možete "čitati svoje vlastite upise" kada radite s bazom podataka. Infrastruktura je bila jednostavna,
uz izuzeće sigurnosnih ažuriranja koja bi zadala minutu zastoja.

### Problem

Problem je očito započeo kada smo dosegli kapacitet. Tako bismo optimizirali, a zatim na kraju morali povećati veličinu instance za tu uslugu.

To je postalo troškovno neodrživo na Linodeu, gdje je instanca od $144 otprilike ekvivalentna, prema našim passmark testiranjima, od $20 OVH čvora, i čak i ako
bismo promijenili pružatelje hostinga, imali bismo pojedinačne točke neuspjeha na svim stranama - a pružatelji poput OVH obično imaju duža vremena rješavanja nego Linode
za održavanje problema.

### RiR :)

U prvim godinama, PubSub i Medijske usluge u FastCommentsu bile su napisane u Javi. Java je odabrana zbog relativno velike izvedbe za uloženi trud,
i nakon godina podešavanja GC-a, isprobavajući G1GC, Shenandoah i Z1, odlučili smo da više ne koristimo Javu. Prekomjerna upotreba memorije bila je jednostavno prevelika, a budući da su te
usluge bile vrlo statične nakon dovršetka, prednosti Jave su nestale. Također, ove usluge su se morale suočiti s problemom "razbijenog jata", što je značilo
da je JVM pokušavao obraditi vršni promet kada JIT još nije bio aktiviran. Ove usluge su bile primjereni kandidati za prelazak na C++ ili Rust.

Rust je odabran jer nismo stručnjaci za C++ i greška u mrežnom kodu mogla bi izložiti podatke jednog kupca drugome. Rust nam pomaže spriječiti ove vrste problema.

Htjeli smo u svakom slučaju konsolidirati ove usluge, pa dok smo mogli napraviti *još jedan* pokušaj optimizacije možda s GraalVM-om, odlučili smo se prebaciti na Rust i završiti s time.

Migracija nije prošla bez problema. Ove usluge moraju završiti SSL, podržavati HTTP 1.1, HTTP/2, i tako dalje. Radili su stvari poput upravljanja mnogim streamovima podataka istovremeno,
čitanja medija iz LRU predmemorije na disku, S3, baza podataka i komunikacije unutar mreže. Java ekosustav, Vertx i Netty, bili su vrlo dobri za te stvari. Pritisnuli smo ekosustav biblioteka do njegovih granica, a nedostatak velikog iskustva s Rust bibliotekama značio je da smo imali
malo pokušaja i pogrešaka. To je uzrokovalo određeni zastoj, i ispričavamo se zbog toga.

Također smo eksperimentirali s različitim upraviteljima memorije, odlučivši se za mimalloc za naše prilagođene DNS servere i libc za transportni sloj. Ne pokrećemo Nginx ili Apache, već
koristimo našu vlastitu kombinaciju prilagođenog DNS servera koji globalno usmjerava klijente na temelju indeksa u memoriji obnovljenog tjedno iz Maxminda i naš transportni sloj u Rustu koji održava mrežu
s ostalim transportnim instancama. Transport završava SSL, obrađuje posao pubsub-a, i naš je CDN. Prednost ovoga je manji prekomjeran trošak kada se stvari kreću između
usluga, i manje infrastrukturnog prekomjernog troška/apstrakcije. Nedostatak je vidljivost, tako da su dobri metrički podaci važni.

U pogledu rezultantne izvedbe, Rust usluge koristile su otprilike 10-30% memorije Java usluga, unatoč svim našim naporima. Čitao sam knjige poput Java Concurrency in Practice iz zabave, tako da
iako nisam stručnjak, znam ponešto o pisanju brzih JVM usluga, i bilo je puno lakše to postići s Rustom. Dodatno, vrhovi poruka za velike brojeve
pretplatnika jedva su se bilježili na CPU opterećenju dok su JVM usluge provodile 40% svog vremena u GC-u, unatoč tome što smo naš kod pisali više poput igre i manje
poput vaše tipične poslužiteljske usluge. Ne mogu reći da sam veliki obožavatelj Rusta, ali za usluge koje obavljaju puno posla i ne mijenjaju se mnogo nakon početnog razvoja, savršeno je. Naša glavna poslovna logika
ostaje u TypeScriptu.

### Nova arhitektura

Nova arhitektura nema više "kućnih" čvorova. Umjesto toga, svaki server je potpuni klon sa svim istim uslugama i gotovo identičnom konfiguracijom. Svi oni pokreću
transport, DNS, aplikacijski server, i kopiju baze podataka. Svi čvorovi održavaju potpunu enkripciju diska s automatskim otključavanjem putem Dropbear-a.

Svaki poslužitelj pokreće transport koji usmjerava zahtjeve i obrađuje ih kao websocket, http stream, ili CDN zahtjev. Ovi serveri se povezuju međusobno, a bilo koji od njih pruža mapiranje globalne mreže na svoj lokalni DNS server kako bi obavijestio DNS u stvarnom vremenu gdje se svaki aktivni čvor globalno nalazi.

Jedna od prednosti nove arhitekture je redundantnost. Ako kupac u jednom području nas stvarno jako opterećuje, druga područja ostaju online.

Aplikacijski kod sada mora biti vrlo svjestan koji zahtjevi mogu ići na najbliži čvor ili koji moraju ići na primarnu bazu podataka, koja može biti daleko. Napraviti grešku
može drastično smanjiti performanse. To također znači da upisi iz nekih regija mogu biti spori, i to zahtijeva pažljivo podešavanje i optimizaciju. Sada slijedimo obrazac unutar
koda gdje sve metode koje pogađaju bazu podataka uzimaju argument readPreference, tako da pozivatelji do samog vrha moraju eksplicitno odlučiti kako će upititi.

Prednost je vrlo dobro horizontalno skaliranje za čitanja. FastComments je vrlo orijentiran na čitanje, ali ne smijemo zaboraviti naše moderatore! Moderatori rade danju i noću širom svijeta
i želimo da njihovo iskustvo ostane dobro. Kao dio ovog izdanja radili smo s nekolicinom njih kako bismo osigurali da alati za moderiranje ostanu brzi.

Također možemo ručno odabrati hardver, što je zabavno i nagrađuje. Novi serveri su mješavina i5-13500 i Ryzen 5 5600X kutija, a EU je na nekim starijim Xeonima. U našim benchmarkovima svi su ovi
bili puno brži od skupljih servera koje smo istraživali kod drugih pružatelja. Nedostatak je više posla u postavljanju, ali to smo automatizirali, zajedno s SMART nadzorom diska za neuspjehe i tako dalje.

Raditi ovakve stvari znači da možemo nastaviti nuditi konkurentne cijene.

### Pustanje u rad

Implementacija tijekom proteklih nekoliko mjeseci dok prepisujemo usluge i preselimo se na nove pružatelje hostinga bila je neuredna, zahvaljujemo vam na strpljenju.

Tijekom inicijalne implementacije naši metrički podaci su pokazali povećanje zahtjeva koji traju > 100ms. Pokušavamo ne imati mnogo zahtjeva koji traju tako dugo za išta.

<div class="text-center">
    <div class="sm">Postupni napredak</div>
    <img src="images/slow-reqs.png" alt="Spori zahtjevi" title="Spori zahtjevi" />
</div>

I dalje postižemo postupni napredak u poboljšanju performansi za neka područja. Hvala svima koji su do sada pružili povratne informacije.

### Razmatranja prilikom korištenja API-ja

API ostaje snažno dosljedan - možete čitati svoje vlastite upise - kako bismo održali unatradnu kompatibilnost i pojednostavili stvari za programere. Da bismo omogućili
programerima da odaberu performanse umjesto dosljednosti, planiramo izložiti parametar readPreference. Prednost je ta što ćemo također možda ponuditi popust na kredite za
ove API pozive.

Svi javni krajnji točke, poput pružanja javnog komentatorskog widgeta, uvijek čitaju iz najbliže (lokalne) baze podataka na tom čvoru.

### Zašto ne samo koristiti redovni CDN

Komentatorske niti nisu statične, one su aktivne, i primjena live streama na zastarjele statične podatke također ne funkcionira jer kada pregledavate nit kao
anonimni korisnik dobivate "anonimnu sesiju". U ovoj anonimnoj sesiji možete raditi stvari poput blokiranja i označavanja drugih korisnika, i morate pokazati
da li je anonimni korisnik lajkao neki komentar, i tako dalje. Komentatorske niti također mogu biti zaključane iza SSO, autentifikacije ili korisničkih grupa. 

Na kraju, takvo "postupno poboljšanje" gdje je dinamički podatak mapiran na statički podatak iz CDN-a pruža vam loše iskustvo gdje se sadržaj pomiče ili mijenja nakon nekoliko sekundi.
Radije to ne bismo radili.

### Tko ima moje podatke sada

Vaši podaci više nisu pohranjeni na Linodeu. Replikirani su uživo između Hetznera i OVH-a s punom enkripcijom diska, a komunikacija između poslužitelja na pozadinskoj strani
se obavlja s TLS-om. Održavamo nekoliko naslijeđenih Linode instanci za izlazne webhook proxyje, ali nijedan podatak ili medij više nije pohranjen na Linodeu.

### Zaključak

Kao i svi veliki izdanja, drago nam je da smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove promjene. FastComments bi trebao bolje skalirati i imati
bolje vrijeme dostupnosti na duge staze s ovim radom. Javite nam u nastavku ako otkrijete bilo kakve probleme.

{{/isPost}}

---