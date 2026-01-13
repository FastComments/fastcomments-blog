---
[category:Features]

###### [postdate]

# [postlink]Ažuriranje znački za april[/postlink]

{{#unless isPost}}Napravljene su neke promene u vezi sa značkama, dodate su neke funkcije, i izvršena su neka poboljšanja kako bi se sprečile značke da nestanu prilikom ponovnog procesiranja.{{/unless}}

{{#isPost}}

### Šta je novo - Spajanje znački

Pre juče, ako ste imali skup znački u svojoj zajednici poput sledećih:

- Novi komentator (1 komentar)
- Član zajednice (50 komentara)
- Stručnjak (500 komentara)

... i korisnik završi sa 500 komentara, dobiće značke prikazane na svojim komentarima ovako:

    [Novi komentator] [Član zajednice] [Stručnjak]

U ovoj posebnoj situaciji, verovatno želimo da se prikaže samo značku `Stručnjak`. Pa, većina naših kupaca to želi, ali ne i svi. Ne svi naši zakupci
imaju istu konfiguraciju i to prepoznajemo.

Međutim, za zajednice koje slede obrazac iznad, a to je većina njih, žele da se u komentarima prikaže najprestižnija značка.

Da bismo obradili ovaj slučaj, dodali smo koncept značke **koja zamenjuje** drugu značku. Time možemo stvoriti tok znački koje korisnik može da dobije:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Spajanje znački" title="Spajanje znački" />
</div>

Interno, ovo nazivamo *spajanje znački*. Nova značка "pored" stare.

Možemo to konfigurisati tako što ćemo uređivati značku i reći da zamenjuje drugu:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Konfiguracija spajanja znački" title="Konfiguracija spajanja znački" />
</div>

Očigledno, ovo može postati teško za praćenje, pa je lista znački takođe ažurirana kako bi pružila više informacija uključujući
koja značка zamenjuje koju.

### Šta je novo - Poboljšanja ponovnog procesiranja

Kada napravite promenu na znački, moramo proći kroz sve vaše korisnike i odrediti da li i dalje treba da "zarade" značku,
i ažurirati sve prikazane stilove znački i kešove kako bi se prikazala najnovija verzija.

Ponovno procesiranje više ne uklanja značku od korisnika prilikom čuvanja čak i ako više ne ispunjavaju kriterijume **osim ako se konfigurisan kriterijum ne promeni**.

Administratori, napomena - možete smanjiti kriterijum praga za značku bez ponovnog procesiranja koje uklanja tu značku. Samo **povećanje** praga će
uzrokovati ponovno procesiranje koje može ukloniti značku u nekim slučajevima.

Za više informacija, nastavite čitati u *Perspektivi komentatora*.

### Perspektiva komentatora

Ponovno procesiranje znački je veoma rizično jer korisnici vole svoje značke - i to prepoznajemo! Ne želimo da oduzmemo značku korisniku jer
su zaradili značku Odgovor na osnovu 100 korisnika koji su odgovorili na njihove komentare, a zatim 10 korisnika kasnije obrišu svoje komentare, ili budu uklonjeni od strane moderatora.

Značka treba da ostane, i ostaje, osim...

Prilikom ponovnog procesiranja ne znamo da ti prethodni komentari postoje, tako da značku može ukloniti od nekih korisnika ako je značku uređena, kao što je ako su stilovi
ažurirani, ili ako je podešeno spajanje znački.

Ovo se desilo 17. aprila 2023. godine kada smo uveli *Spajanje znački* i neke zajednice omogućile ovu funkciju.

Primećene su dve situacije:

1. Korisnici su primetili da su im neke značke nestale. Ono što se zapravo desilo je da su sve osim najprestižnijih znački bile skrivene.
   - **Možete prikazati sve svoje značke ako želite.** Jednostavno kliknite na meni sa tri tačke u gornjem desnom uglu profila i kliknite na `Upravljanje značkama`.
2. Neke značke su zapravo uklonjene za neke korisnike, kao u primeru značke Odgovor iznad. Da bismo sprečili da se ovo ponovo desi u budućnosti, 
    poboljšali smo sistem ponovnog procesiranja tako da se značka neće ukloniti osim ako se kriterijumi značke sami ne promene i više ne ispunjavate kriterijume, međutim
    savetujemo protiv toga administratorima zajednica.

### Za moderatore

Nema promene iz perspektive moderatora, osim što će u većini slučajeva biti manje znački prikazano. Umesto toga, videće se najprestižnije
značke vas i članova vaše zajednice.

### Postojeći kupci

Završili smo uvođenje ove funkcije za sve postojeće kupce na svim nivoima! Spajanje znački nije omogućeno po defaultu i mora se ručno konfigurisati.

### Na kraju

Nadamo se da ćete naći ovaj novi skup funkcija i ispravki korisnim i lakim za korišćenje.

Živeli!

{{/isPost}}