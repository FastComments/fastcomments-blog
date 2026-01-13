---
[category:Features]
###### [postdate]
# [postlink]Komentari su sada editable sa FastComments[/postlink]

{{#unless isPost}}
Ovo je dugo očekivano ažuriranje, sada možete uređivati komentare ostavljene sa FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Šta je novo

Komentari ostavljeni sa FastComments sada mogu biti uređivani - bez obzira da li ste prijavljeni ili ne.

<img src="images/fc-editing-demo.gif" alt="Demonstracija uređivanja GIF (17mb)" title="Demonstracija uređivanja" />

Razumljivo je da je ovo jedna od naših najtraženijih funkcija, i srećni smo što smo dostigli ovu prekretnicu sa našom korisničkom bazom.

#### Kako to funkcioniše

Prijavljeni korisnici uvek mogu da uređuju svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni 24-satni prozor da mogu da uredite svoj komentar nakon
komentarisanja sve dok ne zatvore svoj pretrživač. Na primer, to znači da anonimni komentator može komentarisati, a zatim urediti svoj komentar da ispravi eventualne greške, bez ikakvog prijavljivanja!

Ako anonimni komentator zatvori svoj pretrživač, neće biti u mogućnosti da uređuje svoj komentar, osim ako ne klikne na čarobni link poslat na njegov email.

Za dodatnu sigurnost, privremeni ključ za uređivanje će biti nevažeći na svakoj pokušaju pogrešnog pogađanja ključa.

#### Zašto sada, nakon toliko vremena?

Kao i sa svim promenama na klijentskoj strani widgeta, moramo biti oprezni da ne povećamo njegovu veličinu. Ova funkcija dodaje značajnu veličinu osnovnom kodu za komentarisanje (oko 1kb gzipovano - otprilike 10% povećanja).
Želeli smo da osiguramo da to ne smanji performanse FastComments i da funkcioniše ispravno sa našim funkcijama komentarisanja uživo. Takođe, želeli smo da funkcija
zadovolji najčešći slučaj korišćenja naših kupaca - anonimno komentarisanje.

#### Uređivanje komentara uživo

Baš kao i komentarisanje i glasanje - uređivanje se dešava uživo. Ako su dva korisnika na istoj stranici, a jedan korisnik uređuje svoj komentar, drugi korisnik će videti ažuriranje.

#### Omogućavanje uređivanja komentara

Završili smo sa implementacijom uređivanja komentara po defoltu za sve naše kupce. Trenutno, to ne može biti isključeno.

#### Šta je sledeće?

Planiramo da objavimo mogućnost brisanja komentara takođe u budućem ažuriranju.

#### Integracije sa trećim stranama

Uređivanje komentara će uzrokovati da se događaj propagira na sve integracije koje imate - poput WordPress-a. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini kako biste zadržali kopiju svojih podataka. Ako uredite komentar, pratimo istu logiku i ažuriramo kopiju u vašoj WordPress
instalaciji. Ovo se odnosi i na druge integracije, ne samo WordPress.

#### U zaključku

Znamo da je ova funkcija dugo čekana od strane nekih. Kao i kod svih velikih izdanja, drago nam je da smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju.

Živeli!

{{/isPost}}

---