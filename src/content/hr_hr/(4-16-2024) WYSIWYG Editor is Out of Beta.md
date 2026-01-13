---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG uređivač je van beta verzije[/postlink]

{{#unless isPost}}
Kupci sada mogu odabrati korištenje novog uređivača koji ne koristi vidljive sidrene oznake za formatiranje.
{{/unless}}

{{#isPost}}

### Što je novo

Korisnici FastComment alati su uvijek imali mogućnost formatirati svoje komentare s sidrenim oznakama poput `<b>ovo</b>`. Ovo je vrlo
poznato svima koji su koristili internet forume u prošlosti ili mnoge od naših konkurenata, međutim neki korisnici i
zajednice očekuju drugačije ponašanje.

Sada možete stilizirati tekst u području komentara bez sidrenih oznaka, jer se unos teksta može prebaciti na `contenteditable`.

Za demonstracijske svrhe ovo je omogućeno na ovom blogu.

Napredni uređivač ima identičan izgled kao stari uređivač, samo ne koristi vidljive sidrene oznake.

### Aktiviranje naprednog uređivanja

U prilagodbi widgeta jednostavno možete omogućiti `Advanced Editor` i kliknuti na spremi. Dokumentacija je [ovdje](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Za programere & zamke

Možete pronaći dokumentaciju za aktiviranje ovoga u kodu [ovdje](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), iako preporučujemo korištenje sučelja za prilagodbu widgeta jer će rezultirati manjim slanjem podataka po učitavanju stranice.

Generirani HTML iz content editable je malo drugačiji od starog textarea uređivača, pa imajte ovo na umu
ako analizirate komentare iz API-ja.

### Optimizacije

Zadržali smo widget za komentare da se ne širi s ovom novom značajkom dodajući ovo kao ekstenziju koja se učitava u pozadini
kada je ova značajka omogućena, što održava zadani widget za komentare malim i lakim.

### Zaključak

Kao i kod svih velikih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdati ovu značajku. Javite nam
ispod ako otkrijete ikakve probleme.

Živjeli!

{{/isPost}}

---