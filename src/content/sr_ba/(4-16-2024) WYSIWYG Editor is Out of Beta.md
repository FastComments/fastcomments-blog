---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG Editor je izašao iz beta faze[/postlink]

{{#unless isPost}}
Kupci se sada mogu odlučiti za korištenje novog editora koji ne koristi vidljive anchor tagove za formatiranje.
{{/unless}}

{{#isPost}}

### Šta je novo

Korisnici FastComment-a su uvek imali mogućnost da formatiraju svoje komentare putem anchor tabova kao što su `<b>ovo</b>`. To je vrlo poznato svima koji su koristili internet forum u prošlosti, ili mnogima od naših konkurenata, međutim neki korisnici i zajednice očekuju drugačije ponašanje.

Sada možete stilizovati tekst u oblasti komentara bez anchor tagova, budući da se unos teksta može prebaciti na `contenteditable`.

Za demonstracione svrhe ovo je omogućeno na ovom blogu.

Napredni editor ima identičan izgled kao stari editor, samo što ne koristi vidljive anchor tagove.

### Uključivanje Naprednog Uređivanja

U prilagođavanju widgeta možete jednostavno omogućiti `Napredni Editor` i pritisnuti sačuvaj. Dokumentacija je [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Za programere i zamerke

Možete pronaći dokumentaciju za omogućavanje ovoga u kodu [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg) iako preporučujemo korištenje UI-a za prilagođavanje widgeta, pošto će to rezultirati manjim količinama podataka koji se šalju tokom učitavanja stranice.

Generisani HTML iz content editable je nešto drugačiji od starog textarea editora, tako da to imajte na umu ako analizirate komentare iz API-a.

### Optimizacije

Zadržali smo widget za komentare od rasta s ovom novom karakteristikom dodavanjem ovo kao ekstenzije koja se učitava u pozadini kada je ova funkcija omogućena, čime se zadržava podrazumevani widget za komentare malim i laganim.

### Na kraju

Kao i sa svim velikim izdanjima, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---