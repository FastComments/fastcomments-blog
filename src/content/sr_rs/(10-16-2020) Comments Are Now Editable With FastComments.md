---
[category:Features]
###### [postdate]
# [postlink]Komentari Sada Mogu da Se Uređuju sa FastComments[/postlink]

{{#unless isPost}}
Mnogi su očekivali ovo ažuriranje, sada možete uređivati komentare ostavljene uz FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

#### Šta je Novo

Komentari ostavljeni uz FastComments sada mogu da se uređuju - bez obzira da li ste prijavljeni ili ne.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Demonstracija Uređivanja"></video>

Razumljivo, ovo je jedna od naših najtraženijih funkcionalnosti, i drago nam je što smo dostigli ovu prekretnicu sa našom korisničkom bazom.

#### Kako To Funkcioniše

Prijavljeni korisnici uvek mogu da uređuju svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni vremenski okvir od 24 sata za uređivanje njihovog komentara nakon komentarisanja sve dok ne zatvore svoj pregledač. Na primer, to znači da anonimni komentator može komentarisati, a zatim urediti svoj komentar kako bi ispravio greške, bez potrebe da se uloguje!

Ako anonimni komentator zatvori svoj pregledač, neće moći da uređuje svoj komentar osim ako ne klikne na čarobni link poslat na njegov email.

Za dodatnu bezbednost, privremeni ključ za uređivanje biće nevažeći na svaki pokušaj pogrešnog pogađanja ključa.

#### Zašto Sada, nakon toliko vremena?

Kao i kod svih promena na klijentskoj strani, moramo biti oprezni da ne povećamo njenu veličinu. Ova funkcija dodaje značajnu veličinu osnovnoj bazi koda za komentarisanje (oko 1kb gzipovano - oko 10% povećanja). 
Želeli smo da osiguramo da ovo ne smanji performanse FastComments-a i da radi ispravno sa našim funkcijama uživo za komentarisanje. Takođe, želeli smo da funkcija
zadovolji najčešći slučaj korišćenja naših klijenata - anonimno komentarisanje.

#### Uređivanje Živih Komentara

Baš kao komentarisanje i glasanje - uređivanje se dešava uživo. Ako su dva korisnika na istoj stranici, i jedan korisnik uređuje svoj komentar, drugi korisnik će videti ažuriranje.

#### Omogućavanje Uređivanja Komentara

Završili smo sa uvođenjem uređivanja komentara kao podrazumevane funkcionalnosti za sve naše korisnike. Trenutno, ne može se isključiti.

#### Šta Je Sledeće?

Planiramo da u budućem ažuriranju omogućimo i mogućnost brisanja komentara.

#### Integracije Trećih Strana

Uređivanje komentara će uzrokovati događaj koji se propagira na sve integracije koje imate - kao što je WordPress. Ako koristite naš WordPress dodatak, tada dodavanje komentara ažurira
vašu WordPress instalaciju u pozadini kako biste zadržali kopiju svojih podataka. Ako uredite komentar, pratimo istu logiku i ažuriramo kopiju u vašoj WordPress
instalaciji. Ovo važi i za druge integracije, ne samo za WordPress.

#### Na Zaključak

Znamo da je ova funkcija dugo čekana od nekih. Kao i kod svih velikih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju.

Živeli!

{{/isPost}}