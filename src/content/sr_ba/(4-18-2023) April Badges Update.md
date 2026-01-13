---
[category:Features]

###### [postdate]

# [postlink]Apdejt na značkama za april[/postlink]

{{#unless isPost}}Napravljene su neke promene na značkama, dodane su neke funkcije, i izvršena su neka poboljšanja kako bi se sprečilo da značke nestaju tokom reprocessing-a.{{/unless}}

{{#isPost}}

### Šta je novo - Stacking znački

Pre juče, ukoliko ste imali set znački u vašoj zajednici kao što su:

- Novi komentator (1 komentar)
- Član zajednice (50 komentara)
- Ekspert (500 komentara)

... i korisnik završi sa 500 komentara, dobiće značke prikazane na svojim komentarima ovako:

    [Novi komentator] [Član zajednice] [Ekspert]

U ovom konkretnom scenariju, verovatno samo želimo da se prikazuje značkа `Ekspert`. Pa, većina naših klijenata to želi, ali ne svi. Ne svi naši zakupci
imaju istu postavku i to prepoznajemo.

Međutim, za zajednice koje slede gorenavedeni obrazac, što je većina njih, žele da se u komentarima prikazuje najprestižnija značkа.

Da bismo rešili ovaj slučaj, dodali smo koncept **zamenjivanja** jedne značke drugom. Na taj način, možemo stvoriti tok znački koje korisnik može osvojiti:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Stacking znački" title="Stacking znački" />
</div>

Interno, to nazivamo *stacking znački*. Nova značkа "stack-a" se na staru.

Možemo ovo konfigurisati tako da uredimo značkу i kažemo da zamenjuje drugu:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Podešavanje stacking znački" title="Podešavanje stacking znački" />
</div>

Očigledno, ovo može postati teško za praćenje, tako da je lista znački takođe ažurirana kako bi pružila više informacija, uključujući
koja značkа zamenjuje koju.

### Šta je novo - Poboljšanja reprocessing-a

Kada izvršite promenu na znački, moramo proći kroz sve vaše korisnike i utvrditi da li još uvek treba da "osvoje" značkу,
i ažurirati sve prikazane stilove znački i keširati tako da se prikazuje najnovija verzija.

Reprocessing više ne uklanja značku od korisnika prilikom čuvanja, čak i ako više ne ispunjavaju kriterijume **osim ako se konfigurisani kriterijumi promene**.

Administratori, obratite pažnju - možete smanjiti prag kriterijuma za značkу bez reprocessing-a koje uklanja tu značku. Samo **povećanje** pragа će
uzrokovati reprocessing koji može ukloniti značku u nekim slučajevima.

Za više informacija, nastavite sa *Perspektivom komentatora*.

### Perspektiva komentatora

Reprocessing znački je vrlo rizičan jer korisnici vole svoje značke - i to prepoznajemo! Ne želimo da oduzmemo značku korisniku zato što
je dobio Reply značkу zbog 100 korisnika koji su odgovorili na njihove komentare, a onda 10 korisnika kasnije obrišu njihove komentare ili budu uklonjeni od strane moderatora.

Značka bi trebala ostati, i ostaje, osim...

Tokom reprocessing-a ne znamo da ti prethodni komentari postoje, tako da se značkа može ukloniti nekim korisnicima ako je značkа uređena, kao ako se stilizacija
ažurira ili ako se podešava stacking znački.

To se desilo 17. aprila 2023. kada smo uveli *Stacking znački* i neke zajednice omogućile ovu funkciju.

Uočena su dva scenarija:

1. Korisnici su primetili da su neke od njihovih znački nestale. Ono što se zapravo desilo je da su sve osim najprestižnijih znački skrivene.
   - **Možete prikazati sve svoje značke ako želite.** Jednostavno kliknite na meni sa tri tačke u gornjem desnom uglu vašeg profila i kliknite `Upravljanje značkama`.
2. Neke značke su zapravo uklonjene za neke korisnike, kao u primeru značke Reply iznad. Da bismo sprečili da se ovo dešava u budućnosti, 
    poboljšali smo sistem reprocessing-a tako da se značkа neće ukloniti osim ako se kriterijumi značke ne promene i više ne ispunjavate kriterijume, međutim
    savetujemo administratore zajednice da ne rade ovo jer, ponavljam, korisnici vole svoje značke.

### Za Moderatore

Nema promene iz perspektive moderatora, osim što će u većini slučajeva videti manje znački prikazanih. Umesto toga, videće se najprestižnije značke
vas i članova vaše zajednice.

### Postojeći kupci

Završili smo sa uvođenjem ove funkcije za sve postojeće kupce na svim nivoima! Stacking znački nije uključen po default-u i mora se ručno konfigurisati.

### Na kraju

Nadamo se da ćete pronaći ovaj novi skup funkcija i ispravki korisnim i lakim za korišćenje. 

Živeli!

{{/isPost}}