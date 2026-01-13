---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG uređivač je van beta faze[/postlink]

{{#unless isPost}}
Kupci sada mogu da se prijave za korišćenje novog uređivača koji ne koristi vidljive ankere za formatiranje.
{{/unless}}

{{#isPost}}

### Šta je novo

Korisnici FastComment su oduvek imali mogućnost da formatiraju svoje komentare koristeći atribute kao što su `<b>ovo</b>`. To je veoma poznato svima koji su koristili internet forum u prošlosti, ili mnogim našim konkurentima, međutim neki korisnici i zajednice očekuju drugačije ponašanje.

Sada možete stilizovati tekst u okviru komentara bez ankera, jer se unos teksta može prebaciti na `contenteditable`.

Za demonstracione svrhe ovo je omogućeno na ovom blogu.

Napredni uređivač ima identičan izgled kao stari uređivač, samo što ne koristi vidljive anker tagove.

### Uključivanje naprednog uređivanja

U prilagođavanju vidžeta možete jednostavno omogućiti `Napredni uređivač` i sačuvati promene. Dokumentacija je [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Za programere & zamke

Možete pronaći dokumentaciju za omogućavanje ovoga u kodu [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg) iako preporučujemo korišćenje UI za prilagođavanje vidžeta jer će to rezultirati manjim količinama podataka koji se šalju prilikom učitavanja stranice.

Generisani HTML iz content editable je malo drugačiji od starog textarea uređivača, pa to imajte na umu ako analizirate komentare iz API-ja.

### Optimizacije

Zadržali smo vidžet za komentare od rasta s ovom novom funkcijom dodajući ovo kao ekstenziju koja se učitava u pozadini kada je ova opcija omogućena, što drži podrazumevani vidžet za komentare malim i laganim.

### Na kraju

Kao i kod svih važnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam u komentarima ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---