---
[category:Features]
###### [postdate]
# [postlink]Komentatori sada mogu ukloniti svoje komentare[/postlink]

{{#unless isPost}}
Nakon dugo očekivane nadogradnje, sada možete obrisati svoje komentare koje ste ostavili koristeći FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

#### Šta je novo

Kao što je nedavno objavljeno - komentari ostavljeni uz FastComments sada mogu biti uređivani - bez obzira da li ste prijavljeni ili ne.

<img src="images/fc-deleting-demo.gif" alt="Gif demonstracija brisanja (11mb)" title="Demonstracija brisanja" />

U nastavku, mogućnost brisanja vaših komentara je objavljena. Razumljivo, kao što je i uređivanje komentara, ovo je bila jedna od naših najtraženijih funkcija, i drago nam je što smo dostigli ovaj trenutak sa našom korisničkom bazom.

#### Kako to funkcioniše

Uklanjanje komentara funkcioniše na isti način kao i uređivanje - prijavljeni korisnici uvek mogu uređivati i brisati svoje komentare. Za anonimne komentatore, naši serveri obezbeđuju privremeni 24-satni vremenski okvir za njih da urede ili obrišu svoj komentar nakon što
su ga ostavili, pod uslovom da ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može komentarisati, a zatim urediti svoj komentar kako bi ispravio eventualne greške, ili ga obrisati, bez ikakvog prijavljivanja!

Ako anonimni komentator zatvori svoj pretraživač, neće moći da izmeni ili obriše svoj komentar osim ako ne klikne na čarobni link poslat na njegovu email adresu.

Za dodatnu sigurnost, privremeni ključ za uređivanje biće nevažeći na svaki pokušaj pogrešnog pogađanja ključa.

#### Zašto sada, posle toliko vremena?

Razlog za ovo je isti kao i zašto je uređivanje trajalo toliko dugo da bude objavljeno. Želeli smo da obezbedimo da ovo ne smanji performanse FastComments i želeli smo da osiguramo da pravilno funkcioniše sa našim funkcijama komentarisanja u realnom vremenu. Takođe, želeli smo da funkcija
prilagodi najčešćem slučaju upotrebe naših kupaca - anonimnom komentarisanja.

#### Brisanje komentara uživo

Baš kao što je komentarisanje i glasanje - brisanje se dešava uživo. Ako su dva korisnika na istoj stranici, i jedan korisnik obriše svoj komentar, drugi korisnik će videti kako je uklonjen.

#### Omogućavanje uklanjanja komentara

Završili smo sa implementacijom uređivanja i brisanja komentara po zadatku za sve naše kupce. Trenutno, ne može se isključiti.

#### Integracije trećih strana

Brisanje komentara će uzrokovati da se događaj prenese na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini kako biste sačuvali kopiju vaših podataka. Ako uklonite komentare, pratimo istu logiku i uklanjamo ga iz vaše WordPress
instalacije. Ovo se primenjuje na druge integracije, ne samo na WordPress.

#### Zaključak

Znamo da je ova funkcija dugo očekivana od strane nekih. Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije.

Živeli!

{{/isPost}}

---