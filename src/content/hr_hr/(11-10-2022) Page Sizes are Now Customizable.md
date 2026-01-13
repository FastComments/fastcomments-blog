---
[category:UI & Customization]

###### [postdate]
# [postlink]Veličine stranica sada su prilagodljive[/postlink]

{{#unless isPost}}
FastComments je imao fiksnu veličinu stranice od 30 komentara od početka. Ovo je sada prilagodljivo!
{{/unless}}

{{#isPost}}

### Što je novo

Vaši komentatorski navoji sada mogu imati različite veličine paginacije, a to se sada može prilagoditi globalno na vašem računu, ili na razini
web stranice, ili čak razini stranice. Ovo može biti poželjno ako želite da određene stranice prikazuju manje ili više komentara prije nego što korisnik
mora paginirati.

Ovo također utječe na beskonačno pomicanje, i sve okvire ili integracije koje prikazuju komentare iz FastComments.

Veličine stranica mogu se kretati od `10` sve do `200`. Zadano ostaje na `30`.

### Kako to dobiti

Jednostavno se uputite na pouzdani [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i definirajte
svoju veličinu stranice.

Imajte na umu da FastComments unaprijed izračunava komentare prikazane na svakoj stranici, tako da će promjena ovog parametra pokrenuti naš sustav
da ponovo izračuna sve vaše komentatorske navoje. Ovo neće uzrokovati nikakvo zastoje, ali može potrajati nekoliko minuta da bi se promjena pojavila.

### Dokumentacija

Ažurirana dokumentacija o veličinama stranica može se pronaći na [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Promjene koje su prekretnice

Kao dio ove promjene, dva prijevoda definirana u widgetu za komentare su preimenovana. `PREV_30` i `NEXT_30` su sada
`PREV` i `NEXT`, respektivno, i sadrže `[count]` varijablu.

Ako ste definirali prijevode za gumbi paginacije putem Widget Customization UI, onda smo ih već migrirali
umjesto vas. Ako prosljeđujete prijevode u nekoj vrsti integracije putem koda, morat ćete ažurirati ovo:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Na kraju

Kao i kod svih glavnih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---