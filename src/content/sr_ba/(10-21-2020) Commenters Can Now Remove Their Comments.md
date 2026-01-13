---
[category:Features]
###### [postdate]
# [postlink]Komentatori sada mogu ukloniti svoje komentare[/postlink]

{{#unless isPost}}
Ovo je dugo očekivano ažuriranje, sada možete brisati svoje komentare koje ste ostavili uz FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički jezik

#### Šta je novo

Kao što je nedavno najavljeno - komentari ostavljeni uz FastComments sada se mogu uređivati - bez obzira da li ste prijavljeni ili ne.

<img src="images/fc-deleting-demo.gif" alt="Demonstracija brisanja GIF (11mb)" title="Demonstracija brisanja" />

Kao nastavak, mogućnost brisanja vaših komentara je puštena. Razumljivo, isto kao i uređivanje komentara, bila je jedna od naših najtraženijih funkcija, i drago nam je što smo dostigli ovaj važan cilj s našim korisnicima.

#### Kako to funkcioniše

Uklanjanje komentara funkcioniše na isti način kao i uređivanje - prijavljeni korisnici uvek mogu da edituju i brišu svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni prozor od 24 sata za njih da edituju ili obrišu svoj komentar nakon komentarisanja, sve dok ne zatvore svoj pregledač. Na primer, to znači da anonimni komentator može komentarisati, a zatim urediti svoj komentar da ispravi bilo kakve greške, ili ga obrisati, bez da se ikada prijavi!

Ako anonimni komentator zatvori svoj pregledač, neće moći da edituje ili obriše svoj komentar sve dok ne klikne na čarobni link poslat na njegovu e-poštu.

Za dodatnu sigurnost, privremeni ključ za uređivanje biće nevažeći na bilo koji pokušaj da se ključ pogrešno pogodi.

#### Zašto sada, nakon toliko vremena?

Razlog za ovo je isti kao i zašto je uređivanje oduzelo toliko vremena da bude objavljeno. Želeli smo da osiguramo da ovo ne smanji performanse FastComments-a i želeli smo da osiguramo da pravilno funkcioniše sa našim funkcijama komentarisanja uživo. Takođe, želeli smo da funkcija odgovara najčešćem korišćenju naših kupaca - anonimnom komentisanju.

#### Brisanje komentara uživo

Baš kao što je komentarisanje i glasanje - brisanje se dešava uživo. Ako su dva korisnika na istoj stranici, i jedan korisnik obriše svoj komentar, drugi korisnik će videti da je uklonjen.

#### Omogućavanje uklanjanja komentara

Završili smo sa uvođenjem uređivanja i brisanja komentara kao podrazumevanih za sve naše kupce. Trenutno, to se ne može isključiti.

#### Integracije trećih strana

Brisanje komentara će izazvati događaj koji će se propagirati na sve integracije koje imate - poput WordPress-a. Ako koristite naš WordPress dodatak, dodavanje komentara ažurira vašu WordPress instalaciju u pozadini kako biste zadržali kopiju svojih podataka. Ako uklonite komentare, sledimo istu logiku i uklanjamo ih iz vaše WordPress instalacije. Ovo se odnosi i na druge integracije, ne samo na WordPress.

#### Na kraju

Znamo da su mnogi dugo čekali ovu funkciju. Kao i svi veći izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju.

Ziveli!

{{/isPost}}