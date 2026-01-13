---
[category:API & Development]

###### [postdate]
# [postlink]Promene Strukture Webhook-a[/postlink]

{{#unless isPost}}
Napravili smo neke promene u vezi sa ponašanjem struktura webhook-a.
{{/unless}}

{{#isPost}}

### Šta je novo

Pre 14. novembra 2023, napravili smo sledeće promene u webhook-ovima:

#### Ažuriranje Webhook-ova

**Prethodno**, ažuriranja su sadržala najnoviju verziju komentara. Ako su dva korisnika glasala za komentar u brzom sledstvu, to bi
pokrenulo dva webhook-a. Međutim, bilo je moguće da prvi webhook događaj sadrži **najnoviju verziju**, što bi rezultiralo sa dva
identična webhook događaja:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Od 14. novembra** svaki webhook događaj je idempotentan i sadrži objekat komentara u trenutku promene. U gornjem primeru sada ćete dobiti dva događaja:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Brisanje Webhook-ova

**Prethodno**, webhook-ovi za brisanje su sadržavali samo id komentara. To je bio objekat poput `{ id: string }`.

**Od 14. novembra**, webhook-ovi za brisanje će sadržavati **ceo** objekat komentara u trenutku uklanjanja.

### U Zaključku

Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ukoliko otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---