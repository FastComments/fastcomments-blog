---
[category:Moderation]
[category:Features]

###### [postdate]
# [postlink]Ažuriranje pretrage komentara u moderaciji[/postlink]

{{#unless isPost}}
FastComments sada omogućava pretragu po stranici i korisniku na stranici za moderaciju komentara.
{{/unless}}

{{#isPost}}

### Šta je novo

Prethodno je FastComments omogućavao pretragu po frazama ili tačnom podudaranju stringova na stranici za moderaciju komentara.

Sada možete pretraživati komentare na sledeće načine:

- Fuzzy pretraga reči: **mačke vole**
- Tačno podudaranje fraze: **"Volim mačke."**
- **_Novo!_** Prema naslovu stranice: **page:"Naslov Stranice"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u listi predloga za automatsko dovršavanje.
- **_Novo!_** Prema URL-u stranice: **page:"https://example.com/neka-stranica"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u listi predloga za automatsko dovršavanje.
- **_Novo!_** Prema korisniku: **user:"Bob"**
  - Podržava automatsko dovršavanje.

Možete deliti rezultate pretrage sa drugim moderatorima ili administratorima dijeljenjem URL-a stranice iz stranice za moderaciju. Vrednost u pretraživaču će biti uključena u URL nakon što pritisnete "Idi".

### Kako to dobiti

Ova funkcija je dostupna svim kupcima!

### Dokumentacija

Web stranica za dokumentaciju je ažurirana, a posvećena dokumentacija za ovu funkciju [će biti održavana ovde](https://docs.fastcomments.com/guide-moderation.html#search).

### Na kraju

Kao i kod svih velikih izdanja, drago nam je što smo imali vremena da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
u komentarima ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---