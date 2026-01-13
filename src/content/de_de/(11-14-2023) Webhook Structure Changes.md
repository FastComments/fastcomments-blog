---
[category:API & Entwicklung]

###### [postdate]
# [postlink]Änderungen an der Webhook-Struktur[/postlink]

{{#unless isPost}}
Wir haben einige verhaltensbezogene Änderungen an den Webhook-Strukturen vorgenommen.
{{/unless}}

{{#isPost}}

### Was gibt's Neues

Vor dem 14. November 2023 haben wir die folgenden Änderungen an Webhooks vorgenommen:

#### Update Webhooks

**Zuvor** enthielten Updates die neueste Version eines Kommentars. Wenn zwei Benutzer einen Kommentar schnell nacheinander bewertet haben, führte dies
zu zwei Webhook-Triggern. Es war jedoch möglich, dass das erste Webhook-Ereignis die **neueste Version** enthielt, was zu zwei
identischen Webhook-Ereignissen führte:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Ab dem 14. November** ist jedes Webhook-Ereignis idempotent und enthält das Kommentarobjekt zum Zeitpunkt der Änderung. Im obigen Beispiel erhalten Sie nun zwei Ereignisse:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Delete Webhooks

**Zuvor** enthielten Delete Webhooks nur die Kommentar-ID. Dies war ein Objekt wie `{ id: string }`.

**Ab dem 14. November** enthalten Delete Webhooks das **gesamte** Kommentarobjekt zum Zeitpunkt der Entfernung.

### Fazit

Wie bei allen größeren Versionen freuen wir uns, dass wir die Zeit nutzen konnten, um dieses Feature zu optimieren, zu testen und ordnungsgemäß bereitzustellen. Lassen Sie uns unten wissen, wenn Sie Probleme entdecken.

Prost!

{{/isPost}}

---