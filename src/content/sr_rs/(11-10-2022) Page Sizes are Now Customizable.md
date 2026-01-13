---
[category:UI & Customization]

###### [postdate]
# [postlink]Veličine stranica su sada prilagodljive[/postlink]

{{#unless isPost}}
FastComments je imao fiksnu veličinu stranice od 30 komentara od lansiranja. Sada je to prilagodljivo!
{{/unless}}

{{#isPost}}

### Šta je novo

Vaši komentari sada mogu imati različite veličine paginacije, a ovo se može prilagoditi globalno na vašem računu, ili na
nivou sajta, ili čak stranice. Ovo može biti poželjno ako želite da određene stranice imaju manje ili više komentara pre nego što korisnik
mora paginirati.

Ovo takođe utiče na beskonačno skrolovanje, kao i na sve okvire ili integracije koje prikazuju komentare iz FastComments.

Veličine stranica mogu biti od `10` pa sve do `200`. Default ostaje na `30`.

### Kako to dobiti

Jednostavno idite na pouzdani [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i definišite
svoju veličinu stranice.

Imajte na umu da FastComments prethodno izračunava komentare prikazane na svakoj stranici, tako da će promena ovog parametra aktivirati naš sistem
da ponovo izračuna sve vaše komentare. Ovo neće izazvati nikakvo zastoje, ali može potrajati nekoliko minuta da se promena prikaže.

### Dokumentacija

Ažurirana dokumentacija o veličinama stranica može se pronaći na [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Prelomi

Kao deo ove promene, dve prevodene reči definisane u widgetu za komentare su preimenovane. `PREV_30` i `NEXT_30` su sada
`PREV` i `NEXT`, odnosno, i sadrže `[count]` promenljivu.

Ako ste definisali prevode za dugmadi paginacije putem Widget Customization UI, već smo ih migrirali
za vas. Ako prevode prosleđujete u nekoj vrsti integracije putem kod, moraćete da ažurirate ovo:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Na kraju

Kao i sa svim velikim izdanjima, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
ispod ako otkrijete neke probleme.

Živeli!

{{/isPost}}

---