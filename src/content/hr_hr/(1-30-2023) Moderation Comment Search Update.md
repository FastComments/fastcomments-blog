---
[category:Moderacija]
[category:Značajke]

###### [postdate]
# [postlink]Ažuriranje pretraživanja komentara za moderaciju[/postlink]

{{#unless isPost}}
FastComments sada omogućuje pretraživanje po stranici i korisniku na stranici za moderaciju komentara.
{{/unless}}

{{#isPost}}

### Što je novo

Ranije je FastComments dopuštao pretraživanje prema frazama ili točnoj podudarnosti niza na stranici za moderaciju komentara.

Sada možete pretraživati komentare na sljedeće načine:

- Fuzzy pretraživanje riječi: **mačke vole**
- Točna podudarnost fraze: **"Volim mačke."**
- **_Novo!_** Prema naslovu stranice: **page:"Naslov stranice"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u popisu prijedloga automatskog dovršavanja.
- **_Novo!_** Prema URL-u stranice: **page:"https://example.com/neka-stranica"**
  - Podržava automatsko dovršavanje.
  - Prikazuje broj komentara za svaku stranicu u popisu prijedloga automatskog dovršavanja.
- **_Novo!_** Prema korisniku: **user:"Bob"**
  - Podržava automatsko dovršavanje.

Možete podijeliti rezultate pretraživanja s drugim moderatorima ili administratorima dijeleći URL stranice s stranice za moderaciju. Vrijednost pretraživačkog polja bit će uključena u URL u vašem pregledniku nakon što pritisnete "Idi".

### Kako to dobiti

Ova funkcija je uvedena svim korisnicima!

### Dokumentacija

Stranica s dokumentacijom je ažurirana, a posvećena dokumentacija za ovu funkciju [bit će održavana ovdje](https://docs.fastcomments.com/guide-moderation.html#search).

### U zaključku

Kao i kod svih velikih izdanja, drago nam je da smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam u nastavku ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---