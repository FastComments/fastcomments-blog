---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG Editor je napustio Beta fazu[/postlink]

{{#unless isPost}}
Kupci sada mogu da se odluče za korišćenje novog editora koji ne koristi vidljive anchor tagove za formatiranje.
{{/unless}}

{{#isPost}}

### Šta je novo

Korisnici FastComment su uvek imali mogućnost da formatiraju svoje komentare sa anchor tagovima poput `<b>ovoga</b>`. Ovo je veoma
poznato svakome ko je u prošlosti koristio internet forum ili mnogim našim konkurentima, međutim neki korisnici i
zajednice očekuju drugačije ponašanje.

Sada možete stilizovati tekst u oblasti komentara bez anchor tagova, pošto se unos teksta može prebaciti u `contenteditable`.

Za demonstracione svrhe, ovo je omogućeno na ovom blogu.

Napredni editor ima identičan izgled kao stari editor, samo što ne koristi vidljive anchor tagove.

### Uključivanje Naprednog Uređivanja

U prilagođavanju widget-a jednostavno možete omogućiti `Napredni Editor` i sačuvati promene. Dokumentacija je [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Za Programere & Zamke

Dokumentaciju za omogućavanje ovog u kodu možete pronaći [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), iako preporučujemo korišćenje UI prilagođavanja widget-a jer
to rezultira manjim količinama podataka koji se šalju po učitavanju stranice.

Generisani HTML iz content editable je malo drugačiji od starog textarea editora, pa imajte to na umu
ako parsirate komentare iz API-ja.

### Optimizacije

Zadržali smo widget za komentare da ne raste sa ovom novom funkcijom dodajući ovo kao ekstenziju koja se učitava u pozadini
kada je ova funkcija omogućena, što održava podrazumevani widget za komentare malim i lakim.

### Na kraju

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcionalnosti. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---