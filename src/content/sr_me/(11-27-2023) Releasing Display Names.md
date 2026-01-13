---
[category:Features]

###### [postdate]
# [postlink]Objavljivanje Imena za Prikaz[/postlink]

{{#unless isPost}}
FastComments je uvek podržavao imena za prikaz za SSO korisnike. Međutim, to nikada nije bilo dostupno običnim komentatorima. Danas se to menja!
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek podržavao imena za prikaz za SSO korisnike. Međutim, to nikada nije bilo dostupno običnim komentatorima. Danas se to menja!

Na stranici [Detalji naloga](https://fastcomments.com/auth/my-account/edit-details) sada možete popuniti novo polje `Display Name`. `Display Name` će
biti prikazan uz vaše komentare i vaše profile.

### Emojis

U prošlosti su korisnici imali poteškoća sa korišćenjem emojija u korisničkim imenima jer je bilo potrebno uneti vaše korisničko ime za prijavu. Međutim, sada `Display Name` može sadržavati emojije.

### Jedinstvenost i Zloupotreba

Poenta `Display Name` je da nije jedinstven. Ako dva korisnika FastComments.com, u dve veoma različite velike zajednice, imaju slična imena, želimo da im omogućimo da jednostavno postave svoje omiljeno ime za prikaz. Međutim, ne možemo ograničiti gde ljudi komentarišu sa svojim globalnim FastComments nalogom, tako da to ponekad može rezultirati zabunom.

Imati slično ime kao drugi korisnik ili moderator sam po sebi nije slučaj zloupotrebe. Međutim, ako to zloupotrebljavate tako što namerno imitirate druge korisnike, možemo
isključiti ovu funkciju na vašem nalogu, i bićete ograničeni na korišćenje samo `username`.

### Prijavljivanje

I dalje koristite svoje korisničko ime za prijavu - **ne vaše ime za prikaz!**

### Za programere i zamke

Obični `User` objekti izloženi putem API-ja sada imaju `displayName`.

### Na kraju

Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}