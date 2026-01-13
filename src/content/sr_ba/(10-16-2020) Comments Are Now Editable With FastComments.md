---
[category:Features]
###### [postdate]
# [postlink]Komentari su sada uređivi sa FastComments[/postlink]

{{#unless isPost}}
Veoma očekivana ažuriranja, sada možete uređivati komentare ostavljene uz FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Šta je novo

Komentari ostavljeni uz FastComments sada se mogu uređivati - bilo da ste prijavljeni ili ne.

<img src="images/fc-editing-demo.gif" alt="GIF demonstracija uređivanja (17mb)" title="Demonstracija uređivanja" />

Razumljivo, ovo je jedna od naših najtraženijih funkcija, i drago nam je što smo dostigli ovaj korak sa našom korisničkom bazom.

#### Kako funkcioniše

Prijavljeni korisnici uvek mogu uređivati svoje komentare. Za anonimne komentatore, naši serveri obezbeđuju privremeni vremenski okvir od 24 sata kako bi mogli da uredite svoj komentar nakon 
komentarisanja, sve dok ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može komentarisati, a zatim urediti svoj komentar da ispravi greške, bez prijavljivanja!

Ako anonimni komentator zatvori svoj pretraživač, neće moći da uređuje svoj komentar osim ako ne klikne na magičnu vezu poslatu na njihov email.

Za dodatnu sigurnost, privremeni ključ za uređivanje će biti nevažeći u slučaju bilo kakvog pokušaja pogrešnog pogađanja ključa.

#### Zašto sada, nakon toliko vremena?

Kao i kod svih promena na klijentskoj strani vidgeta, moramo biti oprezni da ne povećamo njegovu veličinu. Ova funkcija dodaje značajnu veličinu osnovnom kodu za komentarisanje (oko 1kb gzipovano - oko 10% povećanje).
Želeli smo da osiguramo da ovo ne smanji performanse FastComments-a i želeli smo da osiguramo da funkcioniše ispravno sa našim funkcijama komentarisanja uživo. Takođe, želeli smo da funkcija
odgovara najčešćim slučajevima korišćenja naših kupaca - anonimnom komentarisanju.

#### Uređivanje komentara uživo

Baš kao i komentarisanje i glasanje - uređivanje se dešava uživo. Ako su dva korisnika na istoj stranici, i jedan korisnik uređuje svoj komentar, drugi korisnik će videti ažuriranje.

#### Aktiviranje uređivanja komentara

Završili smo sa implementacijom uređivanja komentara kao podrazumevanu opciju za sve naše kupce. Trenutno, ne može se isključiti.

#### Šta dalje?

Planiramo da objavimo mogućnost brisanja komentara u nekom budućem ažuriranju.

#### Integracije trećih strana

Uređivanje komentara će uzrokovati da se događaj prenese na sve integracije koje imate - poput WordPress-a. Ako koristite naš WordPress dodatak, dodavanje komentara ažurira 
vašu WordPress instalaciju u pozadini tako da zadržite kopiju svojih podataka. Ako uredite komentar, pratimo istu logiku i ažuriramo kopiju u vašoj WordPress 
instalaciji. Ovo se odnosi na druge integracije, ne samo WordPress.

#### U zaključku

Znamo da je ova funkcija dugo čekana od nekih. Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije.

Nazdravlje!

{{/isPost}}

---