---
[category:Features]
###### [postdate]
# [postlink]Komentatori sada mogu ukloniti svoje komentare[/postlink]

{{#unless isPost}}
Čekano ažuriranje, sada možete izbrisati svoje komentare ostavljene uz FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Što je novo

Kao što je nedavno objavljeno - komentari ostavljeni uz FastComments sada se mogu uređivati - bez obzira jeste li prijavljeni ili ne.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demonstracija brisanja"></video>

Kao nadogradnja, mogućnost brisanja vaših komentara je objavljena. Razumljivo, slično kao uređivanje komentara, to je bila jedna od naših najtraženijih funkcija, i drago nam je što smo postigli ovu prekretnicu s našom bazom korisnika.

#### Kako to funkcionira

Uklanjanje komentara funkcionira na isti način kao i uređivanje - prijavljeni korisnici uvijek mogu uređivati i brisati svoje komentare. Za anonimne komentatore, naši poslužitelji pružaju privremeni vremenski okvir od 24 sata za uređivanje ili brisanje njihovog komentara nakon komentiranja, dokle god ne zatvore svoj preglednik. Na primjer, to znači da anonimni komentator može komentirati, a zatim urediti svoj komentar kako bi ispravio eventualne tipfelere, ili ga izbrisati, a da se nikada ne prijavi!

Ako anonimni komentator zatvori svoj preglednik, neće moći uređivati ili brisati svoj komentar osim ako ne klikne na čarobnu poveznicu poslanju na njihov email.

Za dodatnu sigurnost, privremena ključ za uređivanje bit će nevažeća pri svakom pokušaju pogrešnog pogađanja ključa.

#### Zašto sada, nakon toliko vremena?

Racional iza ovoga je isti kao i razlog zašto je uređivanje toliko dugo trebalo biti objavljeno. Željeli smo osigurati da ovo ne smanji performanse FastComments-a i željeli smo osigurati da pravilno funkcionira s našim funkcijama komentiranja u stvarnom vremenu. Također, željeli smo da funkcija odgovara najčešćem slučaju korištenja naših kupaca - anonimnom komentiranju.

#### Brisanje komentara uživo

Baš kao i komentiranje i glasovanje - brisanje se događa uživo. Ako su dva korisnika na istoj stranici, a jedan korisnik izbriše svoj komentar, drugi korisnik će vidjeti kako je uklonjen.

#### Omogućavanje uklanjanja komentara

Završili smo s implementacijom uređivanja i brisanja komentara po defaultu za sve naše kupce. Trenutno se ne može isključiti.

#### Integracije trećih strana

Brisanje komentara uzrokovat će propagaciju događaja na sve integracije koje imate - poput WordPressa. Ako koristite naš WordPress dodatak, dodavanje komentara ažurira vašu instalaciju WordPressa u pozadini tako da čuvate kopiju svojih podataka. Ako uklonite komentare, slijedimo istu logiku i uklanjamo ih iz vaše instalacije WordPressa. Ovo se odnosi i na druge integracije, ne samo na WordPress.

#### Zaključak

Znamo da su mnogi dugo čekali ovu funkciju. Kao i svi veći izdaci, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije.

Živjeli!

{{/isPost}}

---