---
[category:Features]
###### [postdate]
# [postlink]Komentari su sada uređivi s FastComments[/postlink]

{{#unless isPost}}
Očekivano ažuriranje, sada možete uređivati komentare ostavljene s FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Što je novo

Komentari ostavljeni s FastComments sada se mogu uređivati - bez obzira jeste li prijavljeni ili ne.

<img src="images/fc-editing-demo.gif" alt="Uređivanje Demo GIF (17mb)" title="Uređivanje Demo" />

Razumljivo, ovo je jedna od naših najtraženijih značajki, i drago nam je što smo postigli ovaj milijun s našom korisničkom bazom.

#### Kako to funkcionira

Prijavljeni korisnici uvijek mogu uređivati svoje komentare. Za anonimne komentatore, naši poslužitelji pružaju privremeni prozor od 24 sata za uređivanje komentara nakon što su komentirali, sve dok ne zatvore svoj preglednik. Na primjer, to znači da anonimni komentator može komentirati, a zatim urediti svoj komentar kako bi ispravio eventualne tipfelere, bez ikakvog prijavljivanja!

Ako anonimni komentator zatvori svoj preglednik, neće moći urediti svoj komentar osim ako ne klikne na čarobnu poveznicu poslanou njihovom e-mailu.

Za dodatnu sigurnost, privremeni ključ za uređivanje bit će poništen za svaki pokušaj pogrešnog pogađanja ključa.

#### Zašto sada, nakon tako dugo?

Kao i sa svim promjenama na widgetu s klijentske strane, moramo biti oprezni da ne povećamo njegovu veličinu. Ova značajka dodaje značajnu veličinu osnovnom kodu za komentiranje (oko 1kb komprimirano - oko 10% povećanja). 
Željeli smo osigurati da to ne smanji performanse FastComments-a i da ispravno funkcionira s našim značajkama komentiranja u realnom vremenu. Također, željeli smo da značajka odgovara najčešćoj upotrebi naših kupaca - anonimnom komentiranju.

#### Uređivanje komentara uživo

Baš kao i komentiranje i glasovanje - uređivanje se događa uživo. Ako su dva korisnika na istoj stranici, a jedan korisnik uređuje svoj komentar, drugi korisnik će vidjeti ažuriranje.

#### Omogućavanje uređivanja komentara

Završili smo s implementacijom uređivanja komentara kao zadane opcije za sve naše korisnike. Trenutno se ne može isključiti.

#### Što dalje?

Planiramo objaviti mogućnost brisanja komentara u budućem ažuriranju.

#### Integracije trećih strana

Uređivanje komentara uzrokovat će propagaciju događaja na sve integracije koje imate - poput WordPressa. Ako koristite naš WordPress plugin, tada dodavanje komentara ažurira vašu WordPress instalaciju u pozadini kako biste zadržali kopiju svojih podataka. Ako uredite komentar, slijedit ćemo istu logiku i ažurirati kopiju u vašoj WordPress instalaciji. To se odnosi i na druge integracije, ne samo WordPress.

#### Zaključak

Znamo da je ova značajka dugo očekivana od nekih. Kao i sve veće verzije, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove značajke.

Živjeli!

{{/isPost}}