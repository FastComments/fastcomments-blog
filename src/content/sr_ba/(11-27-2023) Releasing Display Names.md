---
[category:Features]

###### [postdate]
# [postlink]Objavljivanje Imena za Prikaz[/postlink]

{{#unless isPost}}
FastComments je uvek podržavao imena za prikaz za SSO korisnike. Međutim, to nikada nije bilo dostupno običnim komentatorima. Danas to menja!
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek podržavao imena za prikaz za SSO korisnike. Međutim, to nikada nije bilo dostupno običnim komentatorima. Danas to menja!

Na stranici [Detalji računa](https://fastcomments.com/auth/my-account/edit-details) sada možete popuniti novo polje `Ime za prikaz`. `Ime za prikaz` će
biti prikazano uz vaše komentare i vaše profile.

### Emojiji

Ranije su korisnici imali problema sa korišćenjem emojija u korisničkim imenima jer je potrebno uneti svoje korisničko ime za prijavu. Međutim, sada `Ime za prikaz` može sadržavati emojije.

### Jedinstvenost i zloupotreba

Poenta `Imena za prikaz` je da nije jedinstveno. Ako dva korisnika FastComments.com, u dve vrlo različite glavne zajednice imaju slična imena, tada bismo želeli
da mogu postaviti svoje preferirano ime za prikaz. Međutim, ne možemo ograničiti gde ljudi komentarišu sa svojim globalnim FastComments računima, tako da to ponekad može
prouzrokovati zabunu.

Imati slično ime kao drugi korisnik ili moderator, samo po sebi, nije slučaj za zloupotrebu. Međutim, ako ovo zloupotrebljavate tako što namerno oponašate druge korisnike, možemo
onemogućiti ovu funkciju na vašem računu, i bićete ograničeni na korišćenje samo `korisničkog imena`.

### Prijava

Još uvek koristite svoje korisničko ime za prijavu - **ne vaše ime za prikaz!**

### Za programere i zamke

Obični `Korisnički` objekti koji su dostupni putem API-ja sada imaju `displayName`.

### Zaključak

Kao i kod svih važnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}