---
[category:Features]
###### [postdate]
# [postlink]Komentatori sada mogu da uklone svoje komentare[/postlink]

{{#unless isPost}}
Ovo je dugo očekivana nova funkcija; sada možete da obrišete svoje komentare ostavljene sa FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Šta je novo

Kao što je nedavno najavljeno - komentari ostavljeni sa FastComments sada mogu da se edituju - bez obzira na to da li ste prijavljeni ili ne.

<img src="images/fc-deleting-demo.gif" alt="Demo brisanja GIF (11mb)" title="Demo brisanja" />

Kao nastavak, omogućena je funkcija za brisanje vaših komentara. Razumljivo, kao i uređivanje komentara, ovo je bila jedna od najtraženijih funkcija, i drago nam je što smo dostigli ovaj važan korak sa našom korisničkom bazom.

#### Kako to funkcioniše

Uklanjanje komentara funkcioniše na isti način kao i uređivanje - prijavljeni korisnici uvek mogu da edituju i brišu svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni vremenski okvir od 24 sata kako bi mogli da edituju ili obrišu svoj komentar nakon
ostavljanja komentara, sve dok ne zatvore svoj pregledač. Na primer, to znači da anonimni komentator može ostaviti komentar, a zatim ga editovati kako bi ispravio greške, ili ga obrisati, bez prijavljivanja!

Ako anonimni komentator zatvori svoj pregledač, neće moći da edituje ili obriše svoj komentar osim ako ne klikne na magični link poslat na njihov email.

Za dodatnu sigurnost, privremeni edit ključ će biti nevažeći na svaki pokušaj pogrešnog pogađanja ključa.

#### Zašto sada, nakon toliko vremena?

Objašnjenje za ovo je isto kao i kod razloga zašto je uređivanje trajalo toliko dugo da bude objavljeno. Želeli smo da osiguramo da ovo ne smanji performanse FastComments i da funkcioniše ispravno sa našim funkcijama komentarisanja u realnom vremenu. Takođe, želeli smo da funkcija
odgovara najčešćem slučaju korišćenja naših kupaca - anonimnom komentisanju.

#### Brisanje komentara uživo

Baš kao što se komentarišu i glasa, brisanje se dešava uživo. Ako su dva korisnika na istoj stranici, a korisnik obriše svoj komentar, drugi korisnik će videti kako je uklonjen.

#### Omogućavanje uklanjanja komentara

Završili smo sa implementacijom uređivanja i brisanja komentara po defaultu za sve naše kupce. Trenutno, ova opcija ne može biti isključena.

#### Integracije trećih strana

Brisanje komentara će izazvati propagaciju događaja na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, dodavanje komentara osvežava vašu WordPress instalaciju u pozadini tako da zadržite kopiju svojih podataka. Ako uklonite komentare, pratimo istu logiku i uklanjamo ih iz vaše WordPress
instalacije. Ovo se odnosi i na druge integracije, ne samo WordPress.

#### Na zaključak

Znamo da su neki dugo čekali ovu funkciju. Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije.

Živeli!

{{/isPost}}