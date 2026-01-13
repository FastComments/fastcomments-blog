---
[category:Features]

###### [postdate]
# [postlink]Objavljivanje Prikazanih Imena[/postlink]

{{#unless isPost}}
FastComments je uvek podržavao prikazana imena za SSO korisnike. Međutim, to nikada nije bilo vidljivo redovnim komentatorima. Danas se to menja!
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek podržavao prikazana imena za SSO korisnike. Međutim, to nikada nije bilo vidljivo redovnim komentatorima. Danas se to menja!

Na stranici [Detalji naloga](https://fastcomments.com/auth/my-account/edit-details) sada možete popuniti novo polje `Prikazano Ime`. `Prikazano Ime` će
biti prikazano uz vaše komentare i na vašim profilima.

### Emoji

Ranije su korisnici imali poteškoća u korišćenju emojija u korisničkim imenima, jer je trebalo da unesete svoje korisničko ime za prijavu. Međutim, sada `Prikazano Ime` može sadržati emojije.

### Jedinstvenost i Zloupotreba

Cilj `Prikazanog Imena` je da nije jedinstveno. Ako dva korisnika FastComments.com, u dve veoma različite glavne zajednice imaju slična imena, želeli bismo
da mogu postaviti svoje preferirano prikazano ime. Međutim, ne možemo ograničiti gde ljudi komentarišu sa svojim globalnim FastComments nalogom, tako da to ponekad može
rezultirati zabunom.

Imati slično ime kao drugi korisnik ili moderator, samo po sebi, nije slučaj za zloupotrebu. Međutim, ako to zloupotrebljavate namernim imitiranjem drugih korisnika, možemo
onemogućiti ovu funkciju na vašem nalogu, i bićete ograničeni na korišćenje samo `korisničkog imena`.

### Prijavljivanje

Još uvek koristite svoje korisničko ime za prijavu - **ne vaše prikazano ime!**

### Za programere i zamke

Redovni `User` objekti izloženi putem API-ja sada imaju `displayName`.

### Na kraju

Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}