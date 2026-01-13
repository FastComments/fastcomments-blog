---
[category:Features]
###### [postdate]
# [postlink]Predstavljanje Linkova za Komentatore[/postlink]

{{#unless isPost}}
Naše prvo izdanje u 2021. donosi mogućnost (ako je omogućena na nivou zakupca) da korisnici dodaju link ka svom blogu prilikom komentarisanja.
{{/unless}}

{{#isPost}}

## Šta je novo

Naše prvo izdanje u 2021. donosi mogućnost (ako je omogućena na nivou zakupca) da korisnici dodaju link ka svom blogu prilikom komentarisanja.

## Šta su Linkovi za Komentatore?

Kao što možemo da vidimo iz ove veoma zanimljive razmene, jedan od ovih korisnika ima svoje korisničko ime podvučeno kako bi se označilo da je u pitanju link:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Linkovi za Komentatore" title="Demonstracija Linkova za Komentatore" />
</div>

To je zato što je sajt konfigurisan da dozvoli popunjavanje novog polja prilikom komentarisanja, gde korisnik može ostaviti link:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Unos Linka za Komentatora" title="Unos Linka za Komentatora" />
</div>

Ovaj link se takođe može prilagoditi putem uređivanja vaših <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Detalja Naloga</a>.

## Omogućavanje Linkova za Komentatore

Kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Pravila prilagođavanja</a> možemo omogućiti novo input polje. Prosto omogućite opciju "Omogući Linkove za Komentatore".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Omogućavanje Linkova za Komentatore" title="Linkovi za Blog" />
</div>

## Predefinisanje Teksta Input Polja

Podrazumevano, placeholder za polje linka komentatora je "Vaš Blog URL.". Ovo se može predefinisati putem istog pravila prilagođavanja koje ste koristili da omogućite funkciju, klikom na "Prikaži Prilagođeni Tekst".

## Poboljšanje Klasifikacije Spam-a

Ova funkcija ima sporedni efekat smanjenja sadržaja koji je označen kao spam, a možda i nije spam. Komentari sa malo teksta i linkom imaju veću šansu da budu klasifikovani kao spam. Međutim, link komentatora ne utiče na klasifikaciju da li je komentar spam ili ne. To znači da korisnik može komentarisati sa svojim blog linkom uz mnogo manji rizik da komentar bude označen kao spam.

Iz ovih razloga, sajtovi sa velikim količinama spama možda neće želeti da omoguće ovu funkciju, međutim, oni koji ne žele otkriće vrednost u korišćenju sa određenim publikama.

## Uticaj na Postojeće Klijente

Ako ste postojeći klijent koji koristi FastComments, vaši korisnici neće primetiti promene u funkcionalnosti, osim ako ne uključite ovu funkciju. Isto važi i za nove klijente - otkrićete da je ova funkcija podrazumevano isključena.

## Na Zaključak

Nadamo se da je ova funkcija početak bolje godine nego prethodna. Srećno komentarisanje!

{{/isPost}}