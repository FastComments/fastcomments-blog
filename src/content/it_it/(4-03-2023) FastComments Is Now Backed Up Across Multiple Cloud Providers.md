---
[category:Announcements]

###### [postdate]
# [postlink]FastComments È Ora Supportato Su Più Fornitori Di Cloud[/postlink]

{{#unless isPost}}
A partire da aprile 2023, i database di FastComments sono ora archiviati in più fornitori di cloud per una maggiore cautela.
{{/unless}}

{{#isPost}}

### Novità

In precedenza, FastComments aveva backup del database in tempo reale su più server, ma nello stesso fornitore di cloud.

FastComments utilizza principalmente Linode per le regioni US-West ed EU, come distribuzioni separate di database e applicazioni.

Ogni regione aveva in precedenza la propria replica del database come backup attivo. Se il database principale fosse mai andato perso, per qualsiasi motivo, 
il backup attivo sarebbe stato disponibile per sostituirlo. Vengono anche eseguiti snapshot del database su questi backup.

Abbiamo ora aggiunto backup su un altro fornitore di cloud, in modo che i dati in ciascuna regione non siano isolati a un solo datacenter per regione.

La nuova topologia del database è:

- US-West
  - Un cluster di database su Linode in California.
  - **NUOVO** Una replica attiva su Hetzner in Oregon.
- EU
  - Un cluster di database su Linode in Francoforte.
  - **NUOVO** Una replica attiva su Hetzner a Falkenstein.

Queste repliche sono attive, hanno sempre l'ultima versione del database. 

### In Conclusione

Come per tutti i principali rilasci, siamo lieti di aver potuto prendere il tempo necessario per ottimizzare, testare e rilasciare correttamente questa funzionalità. Fateci sapere
qui sotto se scoprite eventuali problemi.

Saluti!

{{/isPost}}