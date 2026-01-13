---
[category:Features]
###### [postdate]
# [postlink]Komentatori Sada Mogu Ukloniti Svoje Komentare[/postlink]

{{#unless isPost}}
Novi, dugo očekivani update, sada možete obrisati svoje komentare ostavljene uz FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Rečnik

#### Šta je Novo

Kao što je nedavno najavljeno - komentari ostavljeni uz FastComments sada se mogu uređivati - bez obzira da li ste prijavljeni ili ne.

<img src="images/fc-deleting-demo.gif" alt="Demo GIF za Brisanje (11mb)" title="Demo za Brisanje" />

Kao nastavak, mogućnost da obrišete svoje komentare je puštena. Razumljivo, kao i uređivanje komentara, bila je jedna od najtraženijih funkcija, i drago nam je što smo dostigli ovu prekretnicu sa našom korisničkom bazom.

#### Kako To Funkcioniše

Uklanjanje komentara funkcioniše na isti način kao i uređivanje - prijavljeni korisnici uvek mogu da uređuju i brišu svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni period od 24 sata da uredite ili obrišete svoj komentar nakon
ostavljanja komentara sve dok ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može komentarisati, a zatim urediti svoj komentar da ispravi eventualne greške ili ga obrisati bez ikakve prijave!

Ako anonimni komentator zatvori svoj pretraživač, neće moći da uređuje ili briše svoj komentar osim ako ne klikne na čarobni link poslat na njihov email.

Za dodatnu sigurnost, privremeni ključ za uređivanje biće nevažeći pri bilo kakvom pokušaju da se key pogrešno pogodi.

#### Zašto Sada, nakon tako dugog vremena?

Razlog za to je isti kao zašto je uređivanje toliko dugo trajalo da bude objavljeno. Hteli smo da osiguramo da ovo ne smanji performanse FastComments i želeli smo da osiguramo da pravilno funkcioniše sa našim funkcijama za live komentarisanje. Takođe, želeli smo da funkcija
prilagodi najčešći slučaj korišćenja naših klijenata - anonimno komentarisanje.

#### Brisanje Live Komentara

Baš kao i komentarisanje i glasanje - brisanje se dešava uživo. Ako su dva korisnika na istoj stranici, i jedan korisnik obriše svoj komentar, drugi korisnik će videti da je uklonjen.

#### Omogućavanje Uklanjanja Komentara

Završili smo sa uvođenjem uređivanja i brisanja komentara po defaultu za sve naše klijente. Trenutno, to ne može biti isključeno.

#### Integracije Trećih Strana

Brisanje komentara će izazvati događaj koji se propagira na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini tako da zadržite kopiju vaših podataka. Ako uklonite komentare, pratimo istu logiku i brišemo ih iz vaše WordPress
instalacije. Ovo se odnosi i na druge integracije, ne samo na WordPress.

#### Na Zaključak

Znamo da su neki dugo čekali ovu funkciju. Kao i kod svih većih izdanja, drago nam je da smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju.

Živeli!

{{/isPost}}

---