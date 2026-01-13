---
[category:API & Development]

###### [postdate]
# [postlink]Promene u strukturi Webhook-a[/postlink]

{{#unless isPost}}
Uveli smo neke promene u ponašanju vezane za strukture webhook-a.
{{/unless}}

{{#isPost}}

### Šta je novo

Pre 14. novembra 2023. godine, uveli smo sledeće promene u webhook-ove:

#### Ažuriranje Webhook-ova

**Prethodno**, ažuriranja su sadržavala najnoviju verziju komentara. Ako su dva korisnika brzo glasala za isti komentar, to bi
pokrenulo dva webhook-a. Međutim, bilo je moguće da prvi događaj webhook-a sadrži **najnoviju verziju**, što je rezultiralo u dva
identična događaja webhook-a:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Od 14. novembra** svaki događaj webhook-a je idempotentan i sadrži objekt komentara u trenutku promene. U gornjem primeru sada ćete dobiti dva događaja:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Brisanje Webhook-ova

**Prethodno**, webhook-ovi za brisanje su sadržavali samo id komentara. Bio je to objekat poput `{ id: string }`.

**Od 14. novembra**, webhook-ovi za brisanje će sadržati **cela** objekat komentara u trenutku uklanjanja.

### U zaključku

Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---