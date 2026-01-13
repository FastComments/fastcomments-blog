---
[category:Moderacija]
[category:Funkcionalnosti]

###### [postdate]
# [postlink]Ažuriranje pretrage komentara za moderaciju[/postlink]

{{#unless isPost}}
FastComments sada omogućava pretragu po stranici i korisniku na stranici za moderaciju komentara.
{{/unless}}

{{#isPost}}

### Šta je novo

Prethodno, FastComments vam je omogućavao pretragu po frazama ili tačnom podudaranju stringa na stranici za moderaciju komentara.

Sada možete pretraživati komentare na sledeće načine:

- Nejasna pretraga reči: **mačke vole**
- Tačno podudaranje fraze: **"Volim mačke."**
- **_Novo!_** Po naslovu stranice: **page:"Naslov stranice"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u listi predloga za automatsko dovršavanje.
- **_Novo!_** Po URL-u stranice: **page:"https://example.com/neka-stranica"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u listi predloga za automatsko dovršavanje.
- **_Novo!_** Po korisniku: **user:"Bob"**
  - Podržava automatsko dovršavanje.

Možete deliti rezultate pretrage sa drugim moderatorima ili administratorima deljenjem URL-a stranice sa stranice za moderaciju. Vrednost u pretrazi
će biti uključena u URL u vašem pregledaču nakon što pritisnete "Idi".

### Kako doći do toga

Ova funkcija je dostupna svim korisnicima!

### Dokumentacija

Veb stranica za dokumentaciju je ažurirana, a posvećena dokumentacija za ovu funkciju [biće održavana ovde](https://docs.fastcomments.com/guide-moderation.html#search).

### Na kraju

Kao i svi veliki izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i ispravno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---