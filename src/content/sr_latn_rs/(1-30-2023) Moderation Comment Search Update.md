---
[category:Moderacija]
[category:Karakteristike]

###### [postdate]
# [postlink]Ažuriranje pretrage komentara u moderaciji[/postlink]

{{#unless isPost}}
FastComments sada omogućava pretragu po stranici i korisniku na stranici za moderaciju komentara.
{{/unless}}

{{#isPost}}

### Šta je Novo

Prethodno je FastComments omogućavao pretragu po frazama ili tačnom podudaranju stringova na stranici za moderaciju komentara.

Sada možete pretraživati komentare na sledeće načine:

- Nejasna pretraga reči: **cats love**
- Tačno podudaranje fraze: **"I love cats."**
- **_Novo!_** Po naslovu stranice: **page:"Page Title"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u listi predloga automatskog dovršavanja.
- **_Novo!_** Po URL-u stranice: **page:"https://example.com/some-page"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u listi predloga automatskog dovršavanja.
- **_Novo!_** Po korisniku: **user:"Bob"**
  - Podržava automatsko dovršavanje.

Možete deliti rezultate pretrage sa drugim moderatorima ili administratorima deljenjem URL-a stranice sa stranice za moderaciju. Vrednost pretraživačkog polja biće uključena u URL vašeg pregledača nakon što pritisnete "Go".

### Kako doći do toga

Ova funkcija je dostupna svim korisnicima!

### Dokumentacija

Sajt za dokumentaciju je ažuriran, a posvećena dokumentacija za ovu funkciju [biće održavana ovde](https://docs.fastcomments.com/guide-moderation.html#search).

### Zaključak

Kao i kod svih važnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---