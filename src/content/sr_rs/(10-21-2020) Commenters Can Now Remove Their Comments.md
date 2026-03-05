---
[category:Features]
###### [postdate]
# [postlink]Komentatori Sada Mogu Ukloniti Svoje Komentare[/postlink]

{{#unless isPost}}
Ovo veoma očekivano ažuriranje omogućava vam da uklonite komentare koje ste ostavili putem FastComments-a.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničke Izraze

#### Šta je Novo

Kao što je nedavno objavljeno - komentari ostavljeni putem FastComments-a sada mogu da se uređuju - bez obzira da li ste prijavljeni ili ne.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demonstracija Uklanjanja"></video>

Kao nastavak, omogućena je opcija da uklonite svoje komentare. Razumljivo je da je, kao i uređivanje komentara, ovo jedna od naših najtraženijih funkcija, i drago nam je što smo došli do ovog važnog trenutka sa našom korisničkom bazom.

#### Kako Funkcioniše

Uklanjanje komentara funkcioniše na isti način kao i uređivanje - prijavljeni korisnici uvek mogu da urede i uklone svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni 24-časovni prozor da urede ili uklone svoj komentar nakon
komentarisanja, sve dok ne zatvore svoj pregledač. Na primer, to znači da anonimni komentator može komentarisati, a zatim da urede svoj komentar da ispravi greške, ili ga ukloni, bez ikakvog prijavljivanja!

Ako anonimni komentator zatvori svoj pregledač, neće moći da ureduje ili ukloni svoj komentar osim ako ne klikne na čarobni link poslat na njihov email.

Za dodatnu sigurnost, privremeni ključ za uređivanje biće nevažeći pri svakom pokušaju da se pogodi ključ pogrešno.

#### Zašto Sada, posle toliko vremena?

Razlog za to je isti kao i zašto je uređivanje trajalo toliko dugo da bude objavljeno. Hteli smo da osiguramo da ovo ne smanji performanse FastComments-a i želeli smo da osiguramo da pravilno funkcioniše sa našim funkcijama komentarisanja u stvarnom vremenu. Takođe, želeli smo da funkcija
prilagodi najčešći slučaj korišćenja naših kupaca - anonimno komentarisanje.

#### Uklanjanje Komentara u Stvarnom Vremenu

Baš kao što je komentarisanje i glasanje - uklanjanje se dešava uživo. Ako su dva korisnika na istoj strani, i jedan korisnik ukloni svoj komentar, drugi korisnik će videti da je uklonjen.

#### Omogućavanje Uklanjanja Komentara

Završili smo sa uvođenjem uređivanja i uklanjanja komentara kao podrazumevane opcije za sve naše korisnike. Trenutno, ova opcija ne može da se isključi.

#### Integracije Trećih Strana

Uklanjanje komentara će izazvati propagaciju događaja na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu instalaciju WordPress-a u pozadini kako biste sačuvali kopiju svojih podataka. Ako uklonite komentare, sledimo istu logiku i uklanjamo ih iz vaše WordPress
instalacije. Ovo se odnosi na druge integracije, ne samo na WordPress.

#### Zaključno

Znamo da je ova funkcija dugo očekivana od nekih. Kao i kod svih major izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju.

Živeli!

{{/isPost}}

---