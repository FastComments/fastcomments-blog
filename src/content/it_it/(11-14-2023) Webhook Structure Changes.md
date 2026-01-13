---
[category:API & Development]

###### [postdate]
# [postlink]Modifiche alla Struttura dei Webhook[/postlink]

{{#unless isPost}}
Abbiamo apportato alcune modifiche relative al comportamento delle strutture dei webhook.
{{/unless}}

{{#isPost}}

### Novità

Prima del 14 novembre 2023, abbiamo effettuato le seguenti modifiche ai webhook:

#### Aggiornamento dei Webhook

**In precedenza**, gli aggiornamenti contenevano l'ultima versione di un commento. Se due utenti votavano un commento in rapida successione, questo
avrebbe attivato due webhook. Tuttavia, era possibile che il primo evento webhook contenesse la **versione più recente**, risultando in due
eventi webhook identici:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Dal 14 novembre** ogni evento webhook è idempotente e contiene l'oggetto commento al momento della modifica. Nell'esempio sopra ora riceverai due eventi:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Eliminazione dei Webhook

**In precedenza**, i webhook di eliminazione contenevano solo l'id del commento. Questo era un oggetto come `{ id: string }`.

**Dal 14 novembre**, i webhook di eliminazione conterranno l'**intero** oggetto commento al momento della rimozione.

### In Conclusione

Come per tutte le major release, siamo felici di aver potuto prendere tempo per ottimizzare, testare e rilasciare correttamente questa funzionalità. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---