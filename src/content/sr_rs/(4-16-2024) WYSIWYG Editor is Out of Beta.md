---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG uređivač je izašao iz beta verzije[/postlink]

{{#unless isPost}}
Korisnici sada mogu da se prijave za korišćenje novog uređivača koji ne koristi vidljive anker oznake za formatiranje.
{{/unless}}

{{#isPost}}

### Šta je novo

Korisnici FastComment su oduvek imali mogućnost da formatiraju svoje komentare sa anker oznakama poput `<b>ovog</b>`. Ovo je vrlo
poznato svakome ko je ranije koristio internet forum, ili mnogim našim konkurentima, međutim neki korisnici i
zajednice očekuju drugačije ponašanje.

Sada možete stilizovati tekst u oblasti komentara bez anker oznaka, jer se unos teksta može prebaciti u `contenteditable`.

U svrhu demonstracije, ovo je omogućeno na ovom blogu.

Napredni uređivač ima isti izgled kao stari uređivač, samo što ne koristi vidljive anker oznake.

### Aktiviranje naprednog uređivanja

U prilagođavanju vidžeta jednostavno možete aktivirati `Napredni uređivač` i pritisnuti sačuvaj. Dokumentacija je [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Za programere i posebne napomene

Možete naći dokumentaciju za aktiviranje ovoga u kodu [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), iako preporučujemo korišćenje UI za prilagođavanje vidžeta, pošto će to rezultirati manjim količinama podataka koji se šalju tokom učitavanja stranice.

Generisani HTML iz content editable je malo drugačiji od starog textarea uređivača, pa to imajte na umu
ako parsirate komentare iz API-ja.

### Optimizacije

Zadržali smo widget za komentare od rasta sa ovom novom funkcijom dodajući je kao ekstenziju koja se učitava u pozadini
kada je ova funkcija omogućena, što održava podrazumevani widget za komentare malim i lakim.

### Zaključak

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---