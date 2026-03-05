---
[category:Features]
###### [postdate]
# [postlink]Komentari Sada Mogu Biti Uređivani Sa FastComments[/postlink]

{{#unless isPost}}
Mnogi su iščekivali ovaj update, sada možete uređivati komentare ostavljene sa FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

#### Šta je Novo

Komentari ostavljeni sa FastComments sada mogu biti uređivani - bilo da ste prijavljeni ili ne.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Demonstracija Uređivanja"></video>

Razumljivo, ovo je jedna od naših najtraženijih funkcija, i drago nam je što smo postigli ovaj milestone sa našom korisničkom bazom.

#### Kako Funkcioniše

Prijavljeni korisnici uvek mogu uređivati svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni 24-satni prozor za uređivanje njihovog komentara nakon
komentarisanja, sve dok ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može komentarisati, a zatim urediti svoj komentar da ispravi bilo kakve greške, bez potrebe da se uloguje!

Ako anonimni komentator zatvori svoj pretraživač, neće moći da uređuje svoj komentar osim ako ne klikne na čarobnu vezu poslanu na njihov email.

Za dodatnu sigurnost, privremeni ključ za uređivanje će biti poništen na svaki pokušaj da se pogodi ključ pogrešno.

#### Zašto Sada, posle toliko vremena?

Kao i sa svim promenama na klijentskoj strani, moramo biti oprezni da ne povećamo njegovu veličinu. Ova funkcija dodaje značajnu veličinu osnovnom kodu za komentare (oko 1kb gzipped - oko 10% povećanja).
Želeli smo da osiguramo da ovo ne smanji performanse FastComments i želeli smo da osiguramo da pravilno funkcioniše sa našim funkcijama komentarisanja u realnom vremenu. Takođe, želeli smo da funkcija
prilagodi najčešći slučaj korišćenja naših kupaca - anonimno komentarisanje.

#### Uređivanje Komentara u Realnom Vremenu

Baš kao što se komentarišu i glasa, uređivanje se dešava u realnom vremenu. Ako su dva korisnika na istoj stranici, a jedan korisnik uređuje svoj komentar, drugi korisnik će videti ažuriranje.

#### Omogućavanje Uređivanja Komentara

Završili smo sa uvođenjem uređivanja komentara kao podrazumevane opcije za sve naše kupce. Trenutno, ne može se isključiti.

#### Šta je Sledeće?

Planiramo da u budućem ažuriranju omogućimo mogućnost brisanja komentara.

#### Integracije Trećih Strana

Uređivanje komentara će izazvati propagaciju događaja na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu instalaciju WordPress-a u pozadini tako da zadržite kopiju svojih podataka. Ako uredite komentar, pratimo istu logiku i ažuriramo kopiju u vašoj WordPress
instalaciji. Ovo se primenjuje i na druge integracije, ne samo WordPress.

#### U Zaključku

Znamo da su neki dugo čekali ovu funkciju. Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije.

Živeli!

{{/isPost}}