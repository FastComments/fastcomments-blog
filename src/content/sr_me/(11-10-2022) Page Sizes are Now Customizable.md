---
[category:UI & Customization]

###### [postdate]
# [postlink]Veličine stranica su sada prilagodljive[/postlink]

{{#unless isPost}}
FastComments je imao fiksnu veličinu stranice od 30 komentara od lansiranja. Ovo je sada prilagodljivo!
{{/unless}}

{{#isPost}}

### Šta je novo

Vaši komentari sada mogu imati različite veličine stranica, a ovo se sada može prilagoditi globalno na vašem nalogu, ili na nivou
sajta, ili čak stranice. Ovo može biti poželjno ako želite da određene stranice imaju manje ili više komentara prikazanih pre nego
što korisnik mora da prelazi na sledeću stranicu.

Ovo takođe utiče na beskrajno pomeranje, kao i na sve okvire ili integracije koje prikazuju komentare iz FastComments.

Veličine stranica mogu se kretati od `10` do `200`. Podrazumevano ostaje na `30`.

### Kako to dobiti

Jednostavno idite na pouzdani [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i definišite
svoju veličinu stranice.

Napomena: FastComments unapred izračunava komentare prikazane na svakoj strani, tako da će promjena ovog parametra aktivirati naš
sistem da ponovo izračuna sve vaše komentare. Ovo neće prouzrokovati nikakvo vreme zastoja, ali može potrajati nekoliko minuta da se promena prikaže.

### Dokumentacija

Ažurirana dokumentacija o veličinama stranica može se naći na [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Promene koje se ne mogu vratiti

Kao deo ove promene, dva prevoda definisana u komentarskom vidgetu su promenjena. `PREV_30` i `NEXT_30` su sada
`PREV` i `NEXT`, respektivno, i sadrže promenljivu `[count]`.

Ako ste definisali prevode za dugmad za paginaciju putem Widget Customization UI, već smo ih migrirali
za vas. Ako prosleđujete prevode na neki način integracije putem koda, moraćete da ažurirate sledeće:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Na kraju

Kao i kod svih većih izdanja, drago nam je da smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}