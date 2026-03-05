---
[category:Features]
###### [postdate]
# [postlink]Komentari Su Sada Uredivi S FastComments[/postlink]

{{#unless isPost}}
Ovo dugo očekivano ažuriranje, sada možete uređivati komentare ostavljene s FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Rječnik

#### Što Je Novo

Komentari ostavljeni s FastComments sada se mogu uređivati - bez obzira jeste li prijavljeni ili ne.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Uređivanje Demonstracija"></video>

Razumljivo, bila je to jedna od naših najtraženijih značajki, a drago nam je što smo postigli ovu prekretnicu s našom korisničkom bazom.

#### Kako To Funkcionira

Prijavljeni korisnici uvijek mogu uređivati svoje komentare. Za anonimne komentatore, naši poslužitelji pružaju privremeni vremenski okvir od 24 sata za uređivanje komentara nakon
ostavljanja komentara sve dok ne zatvore svoj preglednik. Na primjer, to znači da anonimni komentator može komentirati, a zatim urediti svoj komentar kako bi ispravio pravopisne greške, a da se nikada ne prijavi!

Ako anonimni komentator zatvori svoj preglednik, neće moći urediti svoj komentar osim ako ne klikne na čarobnu vezu poslanju putem e-maila.

Za dodatnu sigurnost, privremeni ključ za uređivanje bit će nevažeći pri bilo kojem pokušaju pogrešnog pogađanja ključa.

#### Zašto Sada, nakon toliko vremena?

Kao i sa svim promjenama na klijentskom widgetu, moramo biti oprezni da ne povećamo njegovu veličinu. Ova značajka dodaje značajnu veličinu osnovnoj bazi koda za komentiranje (oko 1kb gzipirano - oko 10% povećanja).
Željeli smo osigurati da to ne smanjuje performanse FastComments i da osiguramo da ispravno radi s našim značajkama komentiranja uživo. Također, željeli smo da značajka
zadovolji najčešće korištenje naših kupaca - anonimno komentiranje.

#### Uređivanje Komentara Uživo

Baš kao i komentiranje i glasovanje - uređivanje se događa uživo. Ako su dva korisnika na istoj stranici, a jedan korisnik uređuje svoj komentar, drugi korisnik će vidjeti ažuriranje.

#### Omogućavanje Uređivanja Komentara

Završili smo s implementacijom uređivanja komentara kao zadane postavke za sve naše kupce. Trenutno se ne može isključiti.

#### Što Je Sljedeće?

Planiramo u budućem ažuriranju omogućiti mogućnost brisanja komentara.

#### Integracije Trećih Strana

Uređivanje komentara uzrokovat će da se događaj propagira na sve integracije koje imate - poput WordPressa. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini tako da zadržite kopiju svojih podataka. Ako uredite komentar, slijedimo istu logiku i ažuriramo kopiju u vašoj WordPress
instalaciji. Ovo se odnosi na druge integracije, ne samo na WordPress.

#### Zaključak

Znamo da je ova značajka dugo čekana od strane nekih. Kao i kod svih glavnih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove značajke.

Živjeli!

{{/isPost}}

---