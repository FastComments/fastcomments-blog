---
[category:Features]
###### [postdate]
# [postlink]Komentari Su Sada Uredivi Sa FastComments[/postlink]

{{#unless isPost}}
Ovo dugo očekivano ažuriranje omogućava vam da uređujete komentare ostavljene sa FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Jezik

#### Šta je Novo

Komentari ostavljeni sa FastComments sada mogu biti uređivani - bilo da ste prijavljeni ili ne.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Demonstracija Uređivanja"></video>

Razumljivo, ovo je jedna od naših najtraženijih funkcija, i srećni smo što smo postigli ovu prekretnicu sa našom korisničkom bazom.

#### Kako To Radi

Prijavljeni korisnici uvek mogu uređivati svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni vremenski okvir od 24 sata da urede svoj komentar nakon
ostavljanja komentara, pod uslovom da ne zatvore svoj pretraživač. Na primer, to znači da anonimni komentator može da komentariše, a zatim da urediti svoj komentar da ispravi bilo kakve greške, bez ikada prijavljivanja!

Ako anonimni komentator zatvori svoj pretraživač, neće moći da uređuje svoj komentar osim ako ne klikne na magični link poslat na njihov email.

Za dodatnu sigurnost, privremeni ključ za uređivanje biće nevažeći pri bilo kakvom pokušaju pogrešnog pogađanja ključa.

#### Zašto Sada, nakon toliko vremena?

Kao i kod svih promena u widgetu sa klijentske strane, moramo biti oprezni da ne povećamo njegovu veličinu. Ova funkcija dodaje značajnu veličinu osnovnom kodu za komentarisanje (oko 1kb gzipped - otprilike 10% povećanje).
Želeli smo da osiguramo da ovo ne smanji performanse FastComments i da osiguramo da pravilno funkcioniše sa našim funkcijama komentarisanja uživo. Takođe, želeli smo da funkcija
prilagodi najčešćem slučaju korišćenja naših kupaca - anonimnom komentarisanju.

#### Uređivanje Komentara Uživo

Poput komentarisanja i glasanja - uređivanje se dešava uživo. Ako su dva korisnika na istoj strani, i jedan korisnik uređuje svoj komentar, drugi korisnik će videti ažuriranje.

#### Omogućavanje Uređivanja Komentara

Završili smo sa uvođenjem uređivanja komentara kao podrazumevane opcije za sve naše kupce. Trenutno, ne može se isključiti.

#### Šta Slediti?

Planiramo da u budućem ažuriranju omogućimo i mogućnost brisanja komentara.

#### Integracije Trećih Strana

Uređivanje komentara će izazvati propagaciju događaja na sve integracije koje imate - poput WordPress-a. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini kako biste sačuvali kopiju svojih podataka. Ako uredite komentar, pratimo istu logiku i ažuriramo kopiju u vašoj WordPress
instalaciji. Ovo važi i za druge integracije, ne samo za WordPress.

#### Na Zaključku

Znamo da je ova funkcija dugo čekana od nekih. Kao i sa svim glavnim izdanjima, drago nam je što smo mogli posvetiti vreme optimizaciji, testiranju i pravilnom objavljivanju ove funkcije.

Živeli!

{{/isPost}}

---