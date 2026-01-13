---
[category:API & Development]

###### [postdate]
# [postlink]Promene u strukturi Webhook-a[/postlink]

{{#unless isPost}}
Izvršili smo neke promene u vezi ponašanja struktura webhook-a.
{{/unless}}

{{#isPost}}

### Šta je novo

Pre 14. novembra 2023. godine, izvršene su sledeće promene na webhook-ovima:

#### Ažuriranje Webhook-ova

**Prethodno**, ažuriranja su sadržavala najnoviju verziju komentara. Ako su dva korisnika brzo glasala za komentar, to bi
pokrenulo dva webhook-a. Međutim, bilo je moguće da prvi događaj webhook-a sadrži **najnoviju verziju**, što je rezultiralo dva
identična događaja webhook-a:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Od 14. novembra** svaki događaj webhook-a je idempotentan i sadrži objekat komentara u trenutku promene. U gorenavedenom primeru sada ćete dobiti dva događaja:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Brisanje Webhook-ova

**Prethodno**, webhook-ovi za brisanje su samo sadržavali ID komentara. To je bio objekat poput `{ id: string }`.

**Od 14. novembra**, webhook-ovi za brisanje će sadržavati **celi** objekat komentara u trenutku uklanjanja.

### U zaključku

Kao i u svim velikim izdanjima, drago nam je što smo mogli da izdvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---