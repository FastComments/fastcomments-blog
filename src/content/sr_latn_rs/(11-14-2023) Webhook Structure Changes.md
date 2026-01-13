---
[category:API & Development]

###### [postdate]
# [postlink]Promene u strukturi Webhook-a[/postlink]

{{#unless isPost}}
Upravljali smo nekim promenama vezanim za ponašanje struktura webhook-a.
{{/unless}}

{{#isPost}}

### Šta je novo

Pre 14. novembra 2023. godine, napravili smo sledeće promene u webhook-ovima:

#### Ažuriranje Webhook-ova

**Prethodno**, ažuriranja su sadržavala najnoviju verziju komentara. Ako su dva korisnika brzo glasala za komentar, ovo bi
pokrenulo dva webhook-a. Međutim, moglo je da se desi da prvi webhook događaj sadrži **najnoviju verziju**, što bi rezultovalo dva
identična webhook događaja:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Od 14. novembra** svaki webhook događaj je idempotentan i sadrži objekat komentara u trenutku promene. U gornjem primeru sada ćete dobiti dva događaja:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Brisanje Webhook-ova

**Prethodno**, webhook-ovi za brisanje su sadržavali samo id komentara. Ovo je bio objekat poput `{ id: string }`.

**Od 14. novembra**, webhook-ovi za brisanje će sadržati **ceo** objekat komentara u trenutku uklanjanja.

### U zaključku

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---