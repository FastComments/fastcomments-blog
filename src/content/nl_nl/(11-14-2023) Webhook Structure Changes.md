---
[category:API & Development]

###### [postdate]
# [postlink]Webhook Structuur Wijzigingen[/postlink]

{{#unless isPost}}
We hebben enkele gedragsgerelateerde wijzigingen aangebracht in de webhookstructuren.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Voor 14 november 2023 hebben we de volgende wijzigingen aangebracht in webhooks:

#### Update Webhooks

**Voorheen** bevatten updates de laatste versie van een opmerking. Als twee gebruikers snel achter elkaar op een opmerking stemden, zou dit
twee webhooks triggeren. Het was echter mogelijk dat het eerste webhook-evenement de **laatste versie** bevatte, wat resulteerde in twee
identieke webhook-evenementen:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Vanaf 14 november** is elk webhook-evenement idempotent en bevat het opmerkingobject op het moment van de wijziging. In het bovenstaande voorbeeld ontvang je nu twee evenementen:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Verwijder Webhooks

**Voorheen** bevatten verwijder-webhooks alleen de opmerking id. Dit was een object zoals `{ id: string }`.

**Vanaf 14 november** zullen verwijder-webhooks het **hele** opmerkingobject bevatten op het moment van verwijdering.

### Conclusie

Zoals bij alle belangrijke releases zijn we blij dat we de tijd konden nemen om deze functie te optimaliseren, te testen en correct uit te brengen. Laat het ons hieronder weten als je problemen ontdekt.

Proost!

{{/isPost}}

---