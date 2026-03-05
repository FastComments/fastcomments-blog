[category:Features]
###### [postdate]
# [postlink]Komentari su Sada Uređivani sa FastComments[/postlink]

{{#unless isPost}}
Mnogi su čekali ovu nadogradnju, sada možete uređivati komentare ostavljene sa FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Šta je novo

Komentari ostavljeni sa FastComments sada mogu da se uređuju - bez obzira da li ste prijavljeni ili ne.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Editing Demo"></video>

Razumljivo, ovo je bila jedna od naših najtraženijih funkcija, i srećni smo što smo dostigli ovu tačku s našim korisnicima.

#### Kako to funkcioniše

Prijavljeni korisnici uvek mogu da uređuju svoje komentare. Za anonimne komentatore, naši serveri pružaju privremeni 24-satni prozor da urede svoj komentar nakon što su komentarisali, sve dok ne zatvore svoj pregledač. Na primer, to znači da anonimni komentator može da komentariše, a zatim da uredi svoj komentar kako bi ispravio eventualne greške, a da nikada ne mora da se prijavi!

Ako anonimni komentator zatvori svoj pregledač, ne će moći da uruči svoj komentar osim ako ne klikne na magičnu vezu poslatu na njegovu email adresu.

Za dodatnu sigurnost, privremeni ključ za uređivanje će biti nevažeći pri bilo kakvom pokušaju pogrešnog pogađanja ključa.

#### Zašto sada, nakon toliko vremena?

Kao i kod svih promena na korisničkoj strani, moramo biti oprezni da ne uvećamo njegovu veličinu. Ova funkcija dodaje značajnu urednost osnovnom kodu za komentare (oko 1kb zategnuto - oko 10% povećanja).
Želeli smo da osiguramo da to ne smanji performanse FastComments i želeli smo da osiguramo da pravilno radi sa našim funkcijama uživo. Takođe, želeli smo da funkcija
prilagodi najčešćem korišćenju naših kupaca - anonimnom komentarisanja.

#### Uređivanje Uživljenih Komentara

Baš kao i komentarisanje i glasanje - uređivanje se dešava uživo. Ako su dva korisnika na istoj stranici, a jedan korisnik uređuje svoj komentar, drugi korisnik će videti da je ažuriran.

#### Omogućavanje Uređivanja Komentara

Završili smo sa uvođenjem uređivanja komentara kao podrazumevane opcije za sve naše korisnike. Trenutno, to se ne može isključiti.

#### Šta sledeće?

Planiramo da uvedemo mogućnost brisanja komentara u budućoj nadogradnji.

#### Integracije Trećih Strana

Uređivanje komentara će uzrokovati propagaciju događaja na sve integracije koje imate - poput WordPress-a. Ako koristite naš WordPress dodatak, dodavanje komentara ažurira vašu WordPress instalaciju u pozadini kako biste zadržali kopiju svojih podataka. Ako uredite komentar, pratimo istu logiku i ažuriramo kopiju u vašoj WordPress instalaciji. Ovo se odnosi na druge integracije, a ne samo na WordPress.

#### Zaključak

Znamo da su neki dugo čekali ovu funkciju. Kao i sa svim važnim izdanjima, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije.

Živeli!

{{/isPost}}