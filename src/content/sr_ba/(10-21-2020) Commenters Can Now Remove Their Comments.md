---
[category:Features]
###### [postdate]
# [postlink]Komentatori Sada Mogu Ukloniti Svoje Komentare[/postlink]

{{#unless isPost}}
Ova dugo očekivana ažuriranja, sada možete obrisati svoje komentare ostavljene uz FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Šta je Novo

Kao što je nedavno najavljeno - komentari ostavljeni uz FastComments sada mogu biti uređeni - bez obzira na to da li ste prijavljeni ili ne.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demonstracija Brisanja"></video>

Kao dodatak, mogućnost brisanja vaših komentara je objavljena. Razumljivo, kao i uređivanje komentara, bila je jedna od naših najtraženijih funkcija, i drago nam je da smo postigli ovaj cilj s našom korisničkom bazom.

#### Kako To Funkcionira

Uklanjanje komentara funkcioniše na isti način kao i uređivanje - prijavljeni korisnici uvek mogu uređivati i brisati svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni vremenski okvir od 24 sata da editiraju ili obrišu svoj komentar nakon ostavljanja komentara, sve dok ne zatvore svoj pregledač. Na primer, to znači da anonimni komentator može da komentariše, a zatim da uređuje svoj komentar da ispravi greške, ili da ga obriše, bez da se ikada prijavi!

Ako anonimni komentator zatvori svoj pregledač, neće moći da uređuje ili briše svoj komentar osim ako ne klikne na čarobni link poslat na njegov email.

Za dodatnu sigurnost, privremeni ključ za izmene će biti nevažeći pri bilo kom pokušaju pogrešnog pogađanja ključa.

#### Zašto Sada, nakon toliko vremena?

Razlog za ovo je isti kao i zašto je uređivanje trajalo tako dugo da bude objavljeno. Želeli smo da osiguramo da to ne smanji performanse FastComments i da radi ispravno s našim funkcijama komentarisanja u realnom vremenu. Takođe, želeli smo da funkcija zadovolji najčešći slučaj korišćenja naših klijenata - anonimno komentarisanje.

#### Brisanje Komentara u Realnom Vremenu

Baš kao i komentarisanje i glasanje - brisanje se dešava u realnom vremenu. Ako su dva korisnika na istoj strani, i jedan korisnik obriše svoj komentar, drugi korisnik će videti da je on uklonjen.

#### Omogućavanje Uklanjanja Komentara

Završili smo sa puštanjem uređivanja i brisanja komentara kao podrazumevane opcije za sve naše korisnike. Trenutno, to ne može biti isključeno.

#### Integracije Trećih Strana

Brisanje komentara će izazvati događaj da se prenese na sve integracije koje imate - poput WordPress-a. Ako koristite naš WordPress dodatak, onda dodavanje komentara ažurira vašu WordPress instalaciju u pozadini tako da zadržite kopiju svojih podataka. Ako uklonite komentare, pratimo istu logiku i uklanjamo ih iz vaše WordPress instalacije. Ovo se odnosi i na druge integracije, ne samo WordPress.

#### Zaključak

Znamo da su neki čekali ovu funkciju dugo. Kao i kod svih većih izdanja, drago nam je što smo mogli da provedemo vreme optimizirajući, testirajući i pravilno objavljujući ovu funkciju.

Živeli!

{{/isPost}}