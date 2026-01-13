---
[category:Features]

###### [postdate]

# [postlink]Ažuriranje oznaka za april[/postlink]

{{#unless isPost}}Napravljene su neke promene u oznakama, dodate su neke funkcije i napravljena su neka poboljšanja kako bi se sprečilo da oznake nestaju prilikom ponovnog obrade.{{/unless}}

{{#isPost}}

### Šta je novo - Stekavanje oznaka

Pre juče, ako ste imali set oznaka u vašoj zajednici kao što su sledeće:

- Novi komentator (1 komentar)
- Član zajednice (50 komentara)
- Stručnjak (500 komentara)

... i korisnik dostigne 500 komentara, dobiće oznake prikazane na svojim komentarima kao što je ovo:

    [Novi komentator] [Član zajednice] [Stručnjak]

U ovom konkretnom scenariju, verovatno želimo da prikažemo samo oznaku `Stručnjak`. Pa, većina naših klijenata to želi, ali ne svi. Ne svi naši zakupci
nemaju istu postavku i to prepoznajemo.

Međutim, za zajednice koje prate gornji obrazac, a to je većina njih, žele da komentari prikazuju najprestižniju oznaku.

Da bismo se bavili ovim slučajem, dodali smo koncept oznake **koja zamenjuje** drugu oznaku. Time možemo stvoriti tok oznaka koje korisnik može da zasluži:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Stekavanje oznaka" title="Stekavanje oznaka" />
</div>

Interno ovo nazivamo *stekanje oznaka*. Nova oznaka "sleže" se na staru.

Možemo ovo konfigurisati tako što ćemo urediti oznaku i reći da zamenjuje drugu:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Postavka stekavanja oznaka" title="Postavka stekavanja oznaka" />
</div>

Očigledno, ovo može postati teško za praćenje, tako da je lista oznaka takođe ažurirana da pruži više informacija uključujući
koja oznaka zamenjuje šta.

### Šta je novo - Poboljšanja ponovne obrade

Kada izvršite promenu u oznaci, moramo proći kroz sve vaše korisnike i odrediti da li bi i dalje trebali "zaslužiti" oznaku,
i ažurirati sve prikazane stilove oznaka i keširati kako bi se prikazala najnovija verzija.

Ponovna obrada više ne uklanja oznaku sa korisnika prilikom čuvanja, čak i ako više ne ispunjavaju kriterijume **osim ako se konfigurisani kriterijumi ne promene**.

Administratorima napomena - možete smanjiti granične kriterijume za oznaku bez ponovne obrade koja uklanja tu oznaku. Samo **povećanje** granične vrednosti će
uzrokovati ponovnu obradu koja može ukloniti oznaku u nekim slučajevima.

Za više, nastavite da čitate u *Perspektivi komentatora*.

### Perspektiva komentatora

Ponovna obrada oznaka je vrlo rizična jer korisnici vole svoje oznake - i to prepoznajemo! Ne želimo da oduzmemo oznaku korisniku jer
su zaslužili oznaku Odgovor zbog 100 korisnika koji su odgovorili na njihove komentare, a zatim su 10 korisnika kasnije obrisali svoje komentare ili su ih moderatori uklonili.

Oznaka bi trebala ostati, i ostaje, osim...

Prilikom ponovne obrade ne znamo da ti prethodni komentari postoje, tako da bi oznaka mogla biti uklonjena od nekih korisnika ako se oznaka izmeni, kao kad se stilizacija
ažurira, ili ako se postavi stekavanje oznaka.

To se dogodilo 17. aprila 2023. godine kada smo uveli *Stekavanje oznaka* i neke zajednice omogućile ovu funkciju.

Primećena su dva scenarija:

1. Korisnici su saznali da su neke od njihovih oznaka izgledale kao da su uklonjene. Ono što se zapravo desilo je da su sve osim najprestižnijih oznaka bile skrivene.
   - **Možete prikazati sve svoje oznake ako želite.** Jednostavno kliknite na meni sa tri tačke u gornjem desnom uglu vašeg profila i kliknite `Upravljač oznakama`.
2. Neke oznake su zapravo uklonjene za neke korisnike, kao u primeru oznake Odgovor iznad. Da bismo to sprečili da se dogodi u budućnosti, 
    poboljšali smo sistem ponovne obrade tako da oznaka neće biti uklonjena osim ako se kriterijumi oznake sami ne promene i više ne ispunjavate kriterijume, međutim
    savetujemo administratorima zajednice da ne rade to, jer, ponavljam, korisnici vole svoje oznake.

### Za moderatore

Nema promene iz perspektive moderatora, osim što ćete u većini slučajeva videti manje oznaka prikazanih. Umesto toga, videćete najprestižnije oznake
vama i članovima vaše zajednice prikazane.

### Postojeći kupci

Završili smo uvođenje ove funkcije svim postojećim kupcima na svim nivoima! Stekavanje oznaka nije omogućeno po defaultu i mora se ručno konfigurisati.

### U zaključku

Nadamo se da ćete pronaći ovaj novi set funkcija i ispravki korisnim i lakim za korišćenje.

Pozdrav!

{{/isPost}}

---