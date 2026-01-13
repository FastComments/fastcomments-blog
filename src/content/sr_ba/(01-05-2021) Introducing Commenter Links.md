---
[category:Features]
###### [postdate]
# [postlink]Uvodjenje Linkova za Komentatore[/postlink]

{{#unless isPost}}
Naša prva verzija iz 2021. donosi mogućnost (ako je omogućena na nivou korisnika) da korisnici dodaju link ka svom blogu prilikom komentarisanja.
{{/unless}}

{{#isPost}}

## Šta je novo

Naša prva verzija iz 2021. donosi mogućnost (ako je omogućena na nivou korisnika) da korisnici dodaju link ka svom blogu prilikom komentarisanja.

## Šta su Linkovi za Komentatore?

Kao što vidimo iz ove veoma zanimljive razmene, jedan od ovih korisnika ima svoje korisničko ime podvučeno kako bi se naznačilo da je to link:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Linkovi za Komentatore" title="Demonstracija Linkova za Komentatore" />
</div>

To je zato što je sajt konfigurisao svoju FastComments instalaciju da omogući popunjavanje novog polja prilikom komentarisanja, gde korisnik može ostaviti link:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Unos Linka za Komentatore" title="Unos Linka za Komentatore" />
</div>

Ovaj link takođe može biti prilagođen putem uređivanja vaših <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Detalja naloga</a>.

## Omogućavanje Linkova za Komentatore

Kreiranjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Pravila Prilagođavanja</a> možemo omogućiti novo polje za unos. Jednostavno omogućite opciju "Omogući Linkove za Komentatore".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Omogućavanje Linkova za Komentatore" title="Blog Linkovi" />
</div>

## Prekoračenje Teksta Polja za Unos

Podrazumevano, placeholder polja za link komentatora je "Vaš Blog URL.". Ovo se može promeniti putem istog pravila prilagođavanja koje ste koristili za omogućavanje funkcije, klikom na "Prikaži Prilagođeni Tekst".

## Poboljšanje Klasifikacije Spama

Ova funkcija ima sporedni efekat smanjenja sadržaja koji je označen kao spam, a koji možda nije spam. Komentari sa malo teksta i linkom imaju veću šansu da budu klasifikovani kao spam. Međutim, link komentatora ne utiče na klasifikaciju da li je komentar spam ili ne. Ovo znači da korisnik može komentarisati sa svojim blog linkom sa mnogo manjim rizikom da komentar bude označen kao spam.

Iz ovih razloga, sajtovi sa visokim količinama spama možda neće želeti da omoguće ovu funkciju, međutim oni koji to ne učine će pronaći vrednost u korišćenju sa određenim publikama.

## Uticaj na Postojeće Kupce

Ako ste postojeći kupac koji koristi FastComments, vaši korisnici neće primetiti promene u funkcionalnosti, osim ako ovu funkciju ne uključite. Isto važi i za nove kupce - otkrivaćete da je ova funkcija isključena prema podrazumevanju.

## Zaključak

Nadamo se da je ova funkcija početak bolje godine nego prethodna. Srećno komentarisanje!

{{/isPost}}