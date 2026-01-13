---
[category:Features]
###### [postdate]
# [postlink]Uvođenje linkova za komentatore[/postlink]

{{#unless isPost}}
Naše prvo izdanje u 2021. godini donosi mogućnost (ako je omogućena na nivou korisnika) da korisnici dodaju link do svog bloga prilikom komentarisanja.
{{/unless}}

{{#isPost}}

## Šta je novo

Naše prvo izdanje u 2021. godini donosi mogućnost (ako je omogućena na nivou korisnika) da korisnici dodaju link do svog bloga prilikom komentarisanja.

## Šta su linkovi za komentatore?

Kao što vidimo u ovoj veoma radoznaloj razmeni, jedan od ovih korisnika ima svoje korisničko ime podvučeno da bi označio da je to link:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Linkovi za komentatore" title="Demonstracija linkova za komentatore" />
</div>

To je zato što je sajt konfigurisao svoju FastComments instalaciju da dozvoli popunjavanje novog polja prilikom komentarisanja, gde korisnik može ostaviti link:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Unos linka za komentatore" title="Unos linka za komentatore" />
</div>

Ovaj link se takođe može prilagoditi putem uređivanja vaših <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Detalja o nalogu</a>.

## Omogućavanje linkova za komentatore

Kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Pravila prilagođavanja</a> možemo omogućiti novo
polje za unos. Jednostavno omogućite opciju "Omogući linkove za komentatore".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Omogućavanje linkova za komentatore" title="Linkovi za blog" />
</div>

## Zamenjivanje teksta u polju za unos

Podrazumevano, prostor za unos linka komentatora je "Vaš blog URL.". Ovo se može zameniti putem istog pravila prilagođavanja
koje ste koristili za omogućavanje funkcije, klikom na "Prikaži prilagođeni tekst".

## Poboljšanje klasifikacije spama

Ova funkcija ima nus efekat smanjenja sadržaja označenog kao spam koji možda i nije spam. Komentari sa malo teksta i linkom imaju veću šansu da budu klasifikovani
kao spam. Međutim, link komentatora ne utiče na klasifikaciju da li je komentar spam ili ne. To znači da korisnik može komentarisati sa svojim blog linkom
uz mnogo manji rizik od označavanja komentara kao spama.

Iz ovih razloga, sajtovi sa velikim količinama spama možda neće želeti da omoguće ovu funkciju, međutim oni koji to ne učine će pronaći vrednost u korišćenju sa određenim publikama.

## Uticaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, vaši korisnici neće primetiti nikakve promene u funkcionalnosti, osim ako ne uključite ovu funkciju. Isto važi i za nove korisnike - otkrićete da je ova funkcija po defaultu isključena.

## Na kraju

Nadamo se da je ova funkcija početak boljeg godine nego prošla. Srećno komentarisanje!

{{/isPost}}