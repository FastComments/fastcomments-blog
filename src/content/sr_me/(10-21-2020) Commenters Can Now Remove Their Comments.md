---
[category:Features]
###### [postdate]
# [postlink]Komentatori Sada Mogu Ukloniti Svoje Komentare[/postlink]

{{#unless isPost}}
Nakon dugo očekivane nadogradnje, sada možete obrisati svoje komentare koje ste ostavili sa FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničke Izraze

#### Šta je Novo

Kao što je nedavno najavljeno - komentari ostavljeni sa FastComments sada mogu biti uređeni - bilo da ste prijavljeni ili ne.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demo Uklanjanja"></video>

Kao nastavak, omogućena je opcija da obrišete svoje komentare. Razumljivo, isto kao i uređivanje komentara, bila je jedna od naših najtraženijih karakteristika, i drago nam je što smo postigli ovaj cilj sa našom korisničkom bazom.

#### Kako To Funkcioniše

Uklanjanje komentara funkcioniše na isti način kao uređivanje - prijavljeni korisnici uvek mogu uređivati i brisati svoje komentare. Za anonimne komentatore, naši serveri nude privremeni prozor od 24 sata da urede ili obrišu svoj komentar nakon komentarisanja, sve dok ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može ostaviti komentar, a zatim ga urediti da ispravi bilo kakve greške, ili ga obrisati, bez ikakvog prijavljivanja!

Ako anonimni komentator zatvori svoj pretraživač, neće moći da uređuje ili obriše svoj komentar osim ako ne klikne na čarobnu vezu poslatu na svoj email.

Za dodatnu sigurnost, privremeni ključ za uređivanje biće nevažeći na svaki pokušaj pogrešnog pogađanja ključa.

#### Zašto Sada, nakon toliko dugo?

Razlog za ovo je isti kao i zašto je uređivanje trajalo toliko dugo da se objavi. Želeli smo da se osiguramo da ovo ne smanji performanse FastComments-a i želeli smo da osiguramo da pravilno funkcioniše sa našim funkcijama komentarisanja u realnom vremenu. Takođe, želeli smo da funkcija odgovara najčešćem slučaju korišćenja naših kupaca - anonimnom komentisanju.

#### Uklanjanje Komentara u Realnom Vremenu

Baš kao i komentarisanje i glasanje - brisanje se dešava u realnom vremenu. Ako su dva korisnika na istoj stranici, i jedan korisnik obriše svoj komentar, drugi korisnik će videti da je uklonjen.

#### Omogućavanje Uklanjanja Komentara

Završili smo sa uvođenjem uređivanja i brisanja komentara po defaultu za sve naše kupce. Trenutno, to ne može biti isključeno.

#### Integracije Trećih Strana

Uklanjanje komentara izazvaće da se događaj propagira na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, dodavanje komentara osvežava vašu instalaciju WordPress-a u pozadini kako biste sačuvali kopiju svojih podataka. Ako uklonite komentare, pratimo istu logiku i uklanjamo ih iz vaše WordPress instalacije. Ovo se odnosi i na druge integracije, ne samo WordPress.

#### U Zaključku

Znamo da je ova funkcija dugo čekana od nekih. Kao i svih većih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju.

Živeli!

{{/isPost}}