---
[category:Features]

###### [postdate]

# [postlink]Ažuriranje Badges-a za April[/postlink]

{{#unless isPost}}Napravljene su neke promene vezane za oznake, dodate su neke funkcije, a neke poboljšanja su dodata kako bi se sprečilo da oznake nestanu kada se ponovo procesuiraju.{{/unless}}

{{#isPost}}

### Šta je novo - Stakanje Oznaka

Pre juče, ako ste imali set oznaka u vašoj zajednici kao što su sledeće:

- Novi Komentator (1 komentar)
- Član Zajednice (50 komentara)
- Ekspert (500 komentara)

... i korisnik završi sa 500 komentara, dobiće oznake prikazane na svojim komentarima ovako:

    [Novi Komentator] [Član Zajednice] [Ekspert]

U ovom konkretnom scenariju, verovatno želimo da se prikaže samo oznaka `Ekspert`. Pa, većina naših kupaca to želi, ali ne svi. Ne svi naši zakupci
imaju istu postavku i to prepoznajemo.

Međutim, za zajednice koje slede navedeni obrazac, a to je većina, žele da komentari prikazuju najprestižniju oznaku.

Da bismo se nosili sa ovim slučajem, dodali smo koncept oznake **koja zamenjuje** drugu oznaku. Na ovaj način možemo stvoriti tok oznaka koje korisnik može da zaradi:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Stakanje Oznaka" title="Stakanje Oznaka" />
</div>

Interno, nazivamo to *stakanje oznaka*. Nova oznaka "stacks" na vrhu stare.

Možemo ovo konfigurisati tako što ćemo urediti oznaku i reći da zamenjuje drugu:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Podešavanje Stakanja Oznaka" title="Podešavanje Stakanja Oznaka" />
</div>

Očigledno, ovo može postati teško za praćenje, tako da je lista oznaka takođe ažurirana da pruži više informacija, uključujući
koja oznaka zamenjuje koju.

### Šta je novo - Poboljšanja Ponovnog Procesuiranja

Kada napravite promenu na oznaci, moramo da prođemo kroz sve vaše korisnike i odredimo da li bi i dalje trebali "zaraditi" oznaku,
i ažurirati sve prikazane stilove oznaka, kao i kešove tako da najnovija verzija bude prikazana.

Ponovno procesuiranje više ne uklanja oznaku od korisnika prilikom čuvanja, čak i ako više ne ispunjavaju kriterijume **osim ako se konfigurisani kriterijumi ne promene**.

Administratori, obratite pažnju - možete smanjiti kriterijume praga za oznaku bez ponovnog procesuiranja koje uklanja tu oznaku. Samo **povećanje** praga će
uzrokovati ponovno procesuiranje koje može ukloniti oznaku u nekim slučajevima.

Za više informacija, nastavite da čitate u *Perspektivi Komentatora*.

### Perspektiva Komentatora

Ponovno procesuiranje oznaka je veoma rizično jer korisnici vole svoje oznake - i to prepoznajemo! Ne želimo da oduzmemo oznaku korisniku jer
je zaradio Oznaku Odgovora zbog 100 korisnika koji su odgovorili na njegove komentare, a zatim 10 korisnika kasnije obriše njihove komentare, ili budu uklonjeni od strane moderatora.

Oznaka bi trebala ostati, i ostaje, osim...

Prilikom ponovnog procesuiranja ne znamo da ti prethodni komentari postoje, tako da oznaka može biti uklonjena od nekih korisnika ako se oznaka izmeni, kao ako se stil
ažurira, ili ako se postavi stakanje oznaka.

Ovo se dogodilo 17. aprila 2023. kada smo predstavili *Stakanje Oznaka* i neke zajednice omogućile ovu funkciju.

Posmatrana su dva scenarija:

1. Korisnici su otkrili da su neke njihove oznake izgubljene. Ono što se zapravo desilo je da su sve osim najprestižnijih oznaka bile skrivene.
   - **Možete prikazati sve svoje oznake ako želite.** Jednostavno kliknite na meni sa tri tačke u gornjem desnom delu vašeg profila i kliknite na `Upravljaj Oznakama`.
2. Neke oznake su zaista uklonjene za neke korisnike, kao u primeru Oznake Odgovora iznad. Da bismo sprečili da se ovo desi u budućnosti,
   unapredili smo sistem ponovnog procesuiranja tako da oznaka neće biti uklonjena osim ako se kriterijumi same oznake ne promene i više ne ispunjavate kriterijume, međutim
   savetujemo protiv administracija zajednice da to rade jer, opet, korisnici vole svoje oznake.

### Za Moderatore

Nema promene iz perspektive moderatora, osim što ćete u većini slučajeva videti manje oznaka prikazanih. Umesto toga, videćete najprestižnije od
vaših i oznaka članova zajednice prikazanih.

### Postojeći Klijenti

Završili smo uvođenje ove funkcije svim postojećim klijentima na svim nivoima! Stakanje oznaka nije omogućeno po defaultu i mora se ručno konfigurisati.

### Zaključak

Nadamo se da ćete ovaj novi set funkcija i ispravki smatrati korisnim i lakim za korišćenje. 

Pozdrav!

{{/isPost}}