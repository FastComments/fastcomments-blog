---
[category:Features]
###### [postdate]
# [postlink]Komentari su sada uređivi sa FastComments[/postlink]

{{#unless isPost}}
Dugo očekivana ažuriranja, sada možete uređivati komentare ostavljene sa FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničke izraze

#### Šta je novo

Komentari ostavljeni sa FastComments sada mogu biti uređivani - bilo da ste prijavljeni ili ne.

<img src="images/fc-editing-demo.gif" alt="Uređivanje Demo GIF (17mb)" title="Uređivanje Demo" />

Razumljivo, ovo je jedna od naših najtraženijih funkcija, i drago nam je što smo dostigli ovu prekretnicu sa našim korisnicima.

#### Kako funkcionira

Prijavljeni korisnici uvek mogu da uređuju svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni prozor od 24 sata za uređivanje komentara nakon
ostavljanja, sve dok ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može ostaviti komentar, a zatim da ga izmeni da ispravi bilo kakve greške, bez prijavljivanja!

Ako anonimni komentator zatvori svoj pretraživač, neće moći da uređuje svoj komentar osim ako ne klikne na čarobni link poslat na njihov email.

Za dodatnu sigurnost, privremeni ključ za uređivanje će biti nevažeći na svaki pokušaj pogrešnog pogađanja ključa.

#### Zašto sada, nakon toliko dugo?

Kao i kod svih promena na klijentskom widgetu, moramo biti oprezni da ne povećamo njegovu veličinu. Ova funkcija dodaje značajnu veličinu osnovnom kodu za komentare (oko 1kb kompresovano - oko 10% povećanje).
Želeli smo da osiguramo da to ne smanji performanse FastComments i želeli smo da osiguramo da funkcioniše ispravno sa našim live komentarima. Takođe, želeli smo da funkcija
prilagodi najčešći slučaj korišćenja naših kupaca - anonimno komentarisanje.

#### Uređivanje live komentara

Baš kao i komentarisanje i glasanje - uređivanje se dešava uživo. Ako su dva korisnika na istoj stranici, a jedan korisnik uređuje svoj komentar, drugi korisnik će videti ažuriranje.

#### Omogućavanje uređivanja komentara

Završili smo s uvođenjem uređivanja komentara kao podrazumevane opcije za sve naše kupce. Trenutno, to ne može biti isključeno.

#### Šta je sledeće?

Planiramo da u budućem ažuriranju omogućimo mogućnost brisanja komentara.

#### Integracije trećih strana

Uređivanje komentara će izazvati da se događaj propagira na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini kako biste zadržali kopiju vaših podataka. Ako uredite komentar, pratimo istu logiku i ažuriramo kopiju u vašoj WordPress
instalaciji. Ovo važi i za druge integracije, ne samo za WordPress.

#### U zaključku

Znamo da su neki dugo čekali ovu funkciju. Kao i svi veći izdanci, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno puštanje ove funkcije.

Pozdrav! 

{{/isPost}}