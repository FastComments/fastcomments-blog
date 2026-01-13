---
[category:API & Development]

###### [postdate]
# [postlink]Webhook Strukturændringer[/postlink]

{{#unless isPost}}
Vi har lavet nogle adfærdsrelaterede ændringer til webhook-strukturerne.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Før den 14. november 2023 har vi lavet følgende ændringer til webhooks:

#### Opdater Webhooks

**Tidligere** ville opdateringer indeholde den nyeste version af en kommentar. Hvis to brugere stemte på en kommentar i hurtig rækkefølge, ville dette
udløse to webhooks. Det var dog muligt, at den første webhook-begivenhed indeholdt den **nyeste version**, hvilket resulterede i to
identiske webhook-begivenheder:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Fra den 14. november** er hver webhook-begivenhed idempotent og indeholder kommentarobjektet på tidspunktet for ændringen. I ovenstående eksempel får du nu to begivenheder:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Slet Webhooks

**Tidligere** indeholdt slet-webhooks kun kommentarens id. Dette var et objekt som `{ id: string }`.

**Fra den 14. november** vil slet-webhooks indeholde **hele** kommentarobjektet på tidspunktet for fjernelse.

### Afslutning

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og frigive denne funktion korrekt. Lad os vide
nederst, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---