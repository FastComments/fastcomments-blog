---
[category:Features]

###### [postdate]

# [postlink]Ažuriranje znački za travanj[/postlink]

{{#unless isPost}}Neke promjene su napravljene na značkama, neke funkcije su dodane, a neka poboljšanja su dodana kako bi se spriječilo nestajanje znački kada dođe do ponovnog procesuiranja.{{/unless}}

{{#isPost}}

### Što je novo - Stacking znački

Prije jučer, ako ste imali set znački u svojoj zajednici poput sljedećih:

- Novi komentator (1 komentar)
- Član zajednice (50 komentara)
- Stručnjak (500 komentara)

... i korisnik na kraju ima 500 komentara, dobit će značke prikazane na svojim komentarima ovako:

    [Novi komentator] [Član zajednice] [Stručnjak]

U ovom posebnom scenariju, vjerojatno želimo da se prikazuje samo `Stručnjak` značku. Pa, većina naših kupaca to želi, ali ne svi. Neće sve naše zajednice
imati istu postavku i to prepoznajemo.

Međutim, za zajednice koje slijede gornji obrazac, što je većina njih, žele da se u komentarima prikazuje najprestižnija značka.

Kako bismo riješili ovaj slučaj, dodali smo koncept značke **koja zamjenjuje** drugu značku. Time možemo stvoriti tijek znački koje korisnik može steći:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Stacking znački" title="Stacking znački" />
</div>

Interno, ovo nazivamo *stacking znački*. Nova značka se "nakuplja" na vrh starog.

Možemo to konfigurirati tako da uređujemo značku i kažemo da zamjenjuje drugu:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Postavke stacking znački" title="Postavke stacking znački" />
</div>

Očigledno, to može postati teško pratiti pa je lista znački također ažurirana kako bi pružila više informacija, uključujući
koja značka zamjenjuje koju.

### Što je novo - Poboljšanja ponovnog procesuiranja

Kada napravite promjenu na znački, moramo proći kroz sve vaše korisnike i odrediti trebaju li i dalje "steći" značku,
te ažurirati sve prikazane stilove znački i keševe kako bi najnovija verzija bila prikazana.

Ponovno procesuiranje više ne uklanja značku od korisnika pri spremanju, čak i ako više ne ispunjavaju kriterije **osim ako se konfigurirani kriteriji ne promijene**.

Administratori, imajte na umu - možete smanjiti kriterije praga za značku bez ponovnog procesuiranja koje uklanja tu značku. Samo **povećanje** praga će
uzrokovati ponovno procesuiranje što može ukloniti značku u nekim slučajevima.

Za više informacija, nastavite čitati u *Perspektivi komentatora*.

### Perspektiva komentatora

Ponovno procesuiranje znački je vrlo rizično jer korisnici vole svoje značke - i mi to prepoznajemo! Ne želimo oduzeti značku korisniku jer
su stekli Značku za odgovor zbog 100 korisnika koji su odgovorili na njihove komentare, a zatim je 10 korisnika kasnije obrisalo svoje komentare, ili su ih uklonili moderatori.

Značka bi trebala ostati, i ostaje, osim...

Pri ponovnom procesuiranju ne znamo da ti prethodni komentari postoje, pa bi se značke mogle ukloniti nekim korisnicima ako se značke ureduju, na primjer, ako se stilizacija
ažurira, ili ako se postavi stacking znački.

To se dogodilo 17. travnja 2023. kada smo pokrenuli *Stacking znački* i neke zajednice su omogućile tu funkciju.

Primijeđena su dva scenarija:

1. Korisnici su primijetili da su neke njihove značke nestale. Ono što se zapravo dogodilo je da su sve osim najprestižnijih znački bile skrivene.
   - **Možete prikazati sve svoje značke ako želite.** Jednostavno kliknite na izbornik s tri točke u gornjem desnom kutu svog profila i kliknite `Upravljanje značkama`.
2. Neke značke su zapravo uklonjene nekim korisnicima, kao u primjeru Značke za odgovor iznad. Kako bismo spriječili da se to dogodi u budućnosti, 
    poboljšali smo sustav ponovnog procesuiranja tako da se značke neće uklanjati osim ako se sami kriteriji znački ne promijene i više ne ispunjavate kriterije, međutim
    savjetujemo administratore zajednice da se odustanu od toga, jer, opet, korisnici vole svoje značke.

### Za moderatore

Nema promjena s perspektive moderatora, osim što ćete vidjeti manje znački prikazanih u većini slučajeva. Umjesto toga, vidjet ćete najprestižnije značke vaših i članova zajednice.

### Postojeći kupci

Završili smo implementaciju ove funkcije za sve postojeće kupce na svim razinama! Stacking znački nije omogućeno prema zadanim postavkama i mora se ručno konfigurirati.

### Na kraju

Nadamo se da ćete ovaj novi skup značajki i ispravki pronaći korisnim i jednostavnim za korištenje. 

Živjeli!

{{/isPost}}

---