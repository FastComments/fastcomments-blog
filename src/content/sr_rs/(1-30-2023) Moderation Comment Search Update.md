---
[category:Moderation]
[category:Features]

###### [postdate]
# [postlink]Ažuriranje pretrage komentara za moderaciju[/postlink]

{{#unless isPost}}
FastComments sada omogućava pretragu po stranici i korisniku na stranici za moderaciju komentara.
{{/unless}}

{{#isPost}}

### Šta je novo

Prethodno je FastComments omogućavao pretragu po frazama ili tačnom podudaranju stringa na stranici za moderaciju komentara.

Sada možete pretraživati komentare na sledeće načine:

- Neuredna pretraga reči: **mačke vole**
- Tačno podudaranje fraze: **"Volim mačke."**
- **_Novo!_** Po naslovu stranice: **page:"Naslov Stranice"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u listi predloga automatskog dovršavanja.
- **_Novo!_** Po URL-u stranice: **page:"https://example.com/neka-stranica"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u listi predloga automatskog dovršavanja.
- **_Novo!_** Po korisniku: **user:"Bob"**
  - Podržava automatsko dovršavanje.

Možete deliti rezultate pretrage sa drugim moderatorima ili administratorima deljenjem URL-a stranice sa stranice za moderaciju. Vrednost pretrage
će biti uključena u URL u vašem pregledaču kada pritisnete "Idite".

### Kako to dobiti

Ova funkcija je dostupna svim kupcima!

### Dokumentacija

Sajt za dokumentaciju je ažuriran, a posvećena dokumentacija za ovu funkciju [će biti održavana ovde](https://docs.fastcomments.com/guide-moderation.html#search).

### Na kraju

Kao i svi veliki izdaci, zadovoljni smo što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---