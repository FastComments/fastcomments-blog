---
[category:UI & Customization]

###### [postdate]
# [postlink]Veličine stranica su sada prilagodljive[/postlink]

{{#unless isPost}}
FastComments je imao fiksnu veličinu stranice od 30 komentara od lansiranja. Ovo je sada prilagodljivo!
{{/unless}}

{{#isPost}}

### Šta je novo

Vaše niti komentara sada mogu imati različite veličine paginacije, a ovo može biti prilagođeno globalno za vaš nalog, ili na
nivou sajta, ili čak na nivou stranice. Ovo može biti poželjno ako želite da određene stranice imaju manje ili više prikazanih komentara pre nego što korisnik
mora da paginira.

Ovo takođe utiče na beskonačno skrolovanje, i na sve okvire ili integracije koje renderuju komentare iz FastComments-a.

Veličine stranica mogu se kretati od `10` do `200`. Podrazumevana veličina ostaje `30`.

### Kako to dobiti

Jednostavno posetite poverljivi [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i definišite
veličinu svoje stranice.

Napomena da FastComments unapred izračunava komentare prikazane na svakoj stranici, tako da će promena ovog parametra aktivirati naš sistem
da ponovo izračuna sve vaše niti komentara. Ovo neće izazvati nikakvo zastoje, ali može potrajati nekoliko minuta da promena postane vidljiva.

### Dokumentacija

Ažurirana dokumentacija o veličinama stranica može se pronaći na [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Prelazne promene

Kao deo ove promene, dve prevodene reči definisane u widget-u za komentare su preimenovane. `PREV_30` i `NEXT_30` su sada
`PREV` i `NEXT`, redom, i sadrže varijablu `[count]`.

Ako ste definisali prevode za dugmad paginacije putem Widget Customization UI-a, onda smo već migrirali
ove za vas. Ako šaljete prevode u nekoj vrsti integracije putem koda, moraćete da ažurirate ovo:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### U zaključku

Kao i svako veće izdanje, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Čivajte!

{{/isPost}}

---