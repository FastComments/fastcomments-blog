---
[category:API & Development]

###### [postdate]
# [postlink]Promjene u strukturi webhooks-a[/postlink]

{{#unless isPost}}
Uveli smo neke promjene vezane uz ponašanje struktura webhooks-a.
{{/unless}}

{{#isPost}}

### Što je novo

Prije 14. studenog 2023. godine, izvršili smo sljedeće promjene na webhooks:

#### Ažuriranje Webhooks-a

**Prije**, ažuriranja su sadržavala najnoviju verziju komentara. Ako su dva korisnika glasala za komentar u brzom slijedu, to bi
pokrenulo dva webhooks-a. Međutim, bilo je moguće da prvi događaj webhooks-a sadrži **najnoviju verziju**, što je rezultiralo dva
identična događaja webhooks-a:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Od 14. studenog** svaki događaj webhooks-a je idempotentan i sadrži objekt komentara u trenutku promjene. U gornjem primjeru sada ćete dobiti dva događaja:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Brisanje Webhooks-a

**Prije**, webhooks za brisanje sadržavali su samo id komentara. To je bio objekt poput `{ id: string }`.

**Od 14. studenog**, webhooks za brisanje će sadržavati **cijeli** objekt komentara u trenutku uklanjanja.

### Zaključak

Kao i svi veći izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove značajke. Javite nam
u nastavku ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---