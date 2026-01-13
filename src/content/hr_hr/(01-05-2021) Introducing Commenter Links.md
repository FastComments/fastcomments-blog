---
[category:Features]
###### [postdate]
# [postlink]Predstavljamo poveznice komentatora[/postlink]

{{#unless isPost}}
Naše prvo izdanje u 2021. donosi mogućnost (ako je omogućeno na razini stanara) da korisnici dodaju poveznicu na svoj blog prilikom komentiranja.
{{/unless}}

{{#isPost}}

## Što je novo

Naše prvo izdanje u 2021. donosi mogućnost (ako je omogućeno na razini stanara) da korisnici dodaju poveznicu na svoj blog prilikom komentiranja.

## Što su Poveznice Komentatora?

Kao što vidimo iz ove vrlo zanimljive razmjene, jedan od ovih korisnika ima svoje korisničko ime podcrtano kako bi se naznačilo da je to poveznica:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Poveznice Komentatora" title="Poveznice Komentatora - Demonstracija" />
</div>

To je zato što je stranica konfigurirala svoju instalaciju FastComments kako bi omogućila ispunjavanje novog polja prilikom komentiranja, gdje korisnik može ostaviti poveznicu:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Unos Poveznice Komentatora" title="Unos Poveznice Komentatora" />
</div>

Ova poveznica također se može prilagoditi putem uređivanja vaših <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Podataka o računu</a>.

## Omogućavanje poveznica komentatora

Kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravila prilagodbe</a> možemo omogućiti novo
polje za unos. Jednostavno omogućite opciju "Omogući poveznice komentatora".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Omogućavanje Poveznica Komentatora" title="Poveznice na Blogu" />
</div>

## Prebacivanje Teksta U Unosnom Polju

Zadano, tekstualni prostor za unos poveznice komentatora je "Vaša URL adresa bloga.". Ovo se može prebrisati putem istog pravila prilagodbe
koje ste koristili za omogućavanje funkcije, klikom na "Prikaži prilagođeni tekst".

## Poboljšanje Klasifikacije Spama

Ova funkcija ima nuspojavu smanjenja sadržaja označenog kao spam koji možda nije spam. Komentari s malo teksta i poveznicom imaju veće šanse da budu klasificirani
kao spam. Međutim, poveznica komentatora ne utječe na klasifikaciju je li komentar spam ili ne. To znači da korisnik može komentirati s poveznicom na svoj blog
s mnogo manjim rizikom da će komentar biti označen kao spam.

Iz tih razloga, stranice s velikim količinama spama možda neće htjeti omogućiti ovu funkciju, međutim oni koji ne žele će pronaći vrijednost u korištenju s određenim publikama.

## Utjecaj na postojeće kupce

Ako ste postojeći kupac koji koristi FastComments, vaši korisnici neće primijetiti promjenu u funkcionalnosti, osim ako ne uključite ovu funkciju. Isto vrijedi i za nove kupce - otkrit ćete da je ova funkcija prema zadanim postavkama isključena.

## U Zaključku

Nadamo se da je ova funkcija početak boljih godina od prošle. Sretno s komentiranjem!

{{/isPost}}