---
[category:Features]
###### [postdate]
# [postlink]Komentari Su Sada Uređivani Sa FastComments[/postlink]

{{#unless isPost}}
Veoma očekivano ažuriranje, sada možete uređivati komentare ostavljene sa FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Šta Je Novo

Komentari ostavljeni sa FastComments sada mogu biti uređivani - bez obzira da li ste ulogovani ili ne.

<img src="images/fc-editing-demo.gif" alt="Demonstracija Uređivanja GIF (17mb)" title="Demonstracija Uređivanja" />

Razumljivo, ovo je bila jedna od naših najtraženijih funkcija, i srećni smo što smo dostigli ovu prekretnicu sa našom korisničkom bazom.

#### Kako To Funkcioniše

Ulogovani korisnici uvek mogu uređivati svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni vremenski okvir od 24 sata da bi mogli urediti svoj komentar nakon
ostavljanja komentara, sve dok ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može ostaviti komentar, a zatim urediti svoj komentar kako bi ispravio bilo kakve greške, bez ikakvog prijavljivanja!

Ako anonimni komentator zatvori svoj pretraživač, neće moći da uređuje svoj komentar osim ako ne klikne na magičnu vezu poslatu na njegov email.

Za dodatnu sigurnost, privremeni ključ za uređivanje će biti nevažeći u svakoj pokušaju da se pogodi ključ pogrešno.

#### Zašto Sada, nakon toliko vremena?

Kao sa svim promenama na klijent u widgetu, moramo biti oprezni da ne uvećamo njegovu veličinu. Ova funkcija dodaje značajnu veličinu osnovnoj kodnoj bazi komentarisanja (oko 1kb gzipped - oko 10% povećanja).
Želeli smo da osiguramo da ovo ne smanji performanse FastComments i da osiguramo da pravilno funkcioniše sa našim funkcijama komentarisanja uživo. Takođe, želeli smo da funkcija
zadovolji najčešći slučaj korišćenja naših kupaca - anonimno komentarisanje.

#### Uređivanje Komentara Uživo

Baš kao i komentarisanje i glasanje - uređivanje se dešava uživo. Ako su dva korisnika na istoj stranici, a jedan korisnik uređuje svoj komentar, drugi korisnik će videti to ažuriranje.

#### Omogućavanje Uređivanja Komentara

Završili smo sa implementacijom uređivanja komentara po defaultu za sve naše korisnike. Trenutno, to ne može biti isključeno.

#### Šta Sledeće?

Planiramo da objavimo mogućnost brisanja komentara takođe u budućem ažuriranju.

#### Integracije Trećih Strana

Uređivanje komentara će izazvati događaj da se propagira na sve integracije koje imate - poput WordPressa. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini, kako biste zadržali kopiju svojih podataka. Ako uredite komentar, pratimo istu logiku i ažuriramo kopiju u vašoj WordPress
instalaciji. Ovo se primenjuje na druge integracije, ne samo WordPress.

#### Na Zaključak

Znamo da je ova funkcija dugo čekana od strane nekih. Kao i sa svim velikim izdanjima, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcije.

Živeli!

{{/isPost}}

---