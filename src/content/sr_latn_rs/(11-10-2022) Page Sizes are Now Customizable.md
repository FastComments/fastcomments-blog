---
[category:UI & Customization]

###### [postdate]
# [postlink]Veličine stranica su sada prilagodljive[/postlink]

{{#unless isPost}}
FastComments je imao fiksnu veličinu stranice od 30 komentara od samog lansiranja. Ovo je sada prilagodljivo!
{{/unless}}

{{#isPost}}

### Šta je novo

Vaši komentari sada mogu imati različite veličine paginacije, a ovo može biti prilagođeno globalno na vašem nalogu, ili na
sajtu, ili čak nivou stranice. Ovo može biti poželjno ako želite da određene stranice imaju manje ili više prikazanih komentara pre nego što korisnik
mora da paginira.

Ovo takođe utiče na beskonačno skrolovanje, kao i na sve okvire ili integracije koje prikazuju komentare iz FastComments.

Veličine stranica mogu varirati od `10` do `200`. Podrazumevana veličina ostaje `30`.

### Kako to dobiti

Jednostavno idite na pouzdani [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i definišite
svoju veličinu stranice.

Napominjemo da FastComments unapred izračunava komentare prikazane na svakoj stranici, tako da će promena ovog parametra pokrenuti naš sistem
da ponovo izračuna sve vaše komentare. Ovo neće izazvati nikakvo zastoja, ali može potrajati nekoliko minuta da se promena prikaze.

### Dokumentacija

Ažurirana dokumentacija o veličinama stranica može se naći na [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Prekidne izmene

Kao deo ove promene, dve prevodene fraze definisane u vidžetu komentara su preimenovane. `PREV_30` i `NEXT_30` su sada
`PREV` i `NEXT`, respektivno, i sadrže `[count]` promenljivu.

Ako ste definisali prevode za dugmad paginacije putem Widget Customization UI, već smo ih migrirali
za vas. Ako prenosite prevode na neki način integracije putem koda, moraćete da ažurirate ovo:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Zaključak

Kaо što je to slučaj sa svim važnim izdanjima, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
u komentarima ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---