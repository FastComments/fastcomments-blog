---
[category:Features]
###### [postdate]
# [postlink]Komentatori sada mogu ukloniti svoje komentare[/postlink]

{{#unless isPost}}
Već dugo očekivana nadogradnja, sada možete izbrisati svoje komentare ostavljene putem FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Riječnik

#### Što je novo

Kao što je nedavno objavljeno - komentari ostavljeni putem FastComments sada se mogu uređivati - bilo da ste prijavljeni ili ne.

<img src="images/fc-deleting-demo.gif" alt="Demonstracija brisanja GIF (11mb)" title="Demonstracija brisanja" />

Kao nastavak, mogućnost brisanja vaših komentara je objavljena. Razumljivo, isto kao i uređivanje komentara, bila je jedna od naših najtraženijih značajki, i drago nam je da smo dostigli ovu prekretnicu s našom bazom korisnika.

#### Kako funkcionira

Uklanjanje komentara radi na isti način kao i uređivanje - prijavljeni korisnici uvijek mogu uređivati i brisati svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni 24-satni prozor za uređivanje ili brisanje njihovog komentara nakon
komentiranja, sve dok ne zatvore svoj preglednik. Na primjer, to znači da anonimni komentator može komentirati, a zatim urediti svoj komentar kako bi ispravio tipfelere ili ga izbrisati, bez da se ikada prijavi!

Ako anonimni komentator zatvori svoj preglednik, neće moći urediti ili obrisati svoj komentar osim ako ne klikne na čarobni link poslan na njihov e-mail.

Za dodatnu sigurnost, privremena ključna oznaka za uređivanje bit će nevažeća pri svakom pokušaju pogrešnog pogađanja ključa.

#### Zašto sada, nakon toliko vremena?

Racionalna objašnjenja za to su ista kao i zašto je uređivanje tako dugo trajalo da bude objavljeno. Željeli smo osigurati da ovo ne smanji performanse FastComments-a i željeli smo osigurati da radi ispravno s našim značajkama komentiranja uživo. Također, željeli smo da funkcija
prilagodi najčešćim slučajevima korištenja naših kupaca - anonimno komentiranje.

#### Brisanje komentara uživo

Baš kao i komentiranje i glasanje - brisanje se događa uživo. Ako su dva korisnika na istoj stranici, i korisnik obriše svoj komentar, drugi korisnik će vidjeti da je uklonjen.

#### Omogućavanje uklanjanja komentara

Završili smo s implementacijom uređivanja i brisanja komentara kao zadane opcije za sve naše kupce. Trenutno, to se ne može isključiti.

#### Integracije trećih strana

Brisanje komentara uzrokovat će propagaciju događaja na svaku integraciju koju imate - poput WordPressa. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini tako da zadržite kopiju svojih podataka. Ako uklonite komentare, slijedimo istu logiku i uklonimo ga iz vaše WordPress
instalacije. Ovo se odnosi na druge integracije, ne samo WordPress.

#### Zaključak

Znamo da je ova značajka dugo čekana od nekih. Kao i kod svih glavnih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove značajke.

Živjeli!

{{/isPost}}