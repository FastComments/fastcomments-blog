---
[category:Performance]
###### [postdate]
# [postlink]FastComments aggiornato a HTTP/2[/postlink]

{{#unless isPost}}
Abbiamo apportato alcuni aggiornamenti all'infrastruttura che migliorano ulteriormente le prestazioni di FastComments!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo articolo contiene gergo tecnico

### Novità

Dalla sua lancio, FastComments è stato su HTTP/1.1. Recentemente, abbiamo migrato tutta la nostra infrastruttura
in tutte le regioni a HTTP/2.

### Impatto

Questo aggiornamento mantiene FastComments aggiornato con gli standard moderni mentre fornisce
alcuni miglioramenti delle prestazioni. Lo svantaggio è che alcuni browser più vecchi non sono più supportati.

### Browser e client deprecati

Puoi trovare [browser non supportati qui](https://caniuse.com/http2). Il principale problema sarà IE11 che
ha solo un supporto parziale, tuttavia questi utenti dovrebbero passare a Edge.

Chrome, Firefox e altri supportano HTTP/2 da anni, quindi riteniamo sia sicuro apportare questa modifica.

### Vantaggi delle prestazioni

FastComments è già abbastanza ottimizzato in termini di risorse servite e del loro ordine. Ad esempio,
il widget dei commenti invia solo alcune richieste per caricarsi - l'iframe iniziale, poi lo script che include lo stile per ridurre il numero di richieste, e poi
la richiesta all'API per ottenere tutte le informazioni necessarie. Rispetto a molti altri servizi è abbastanza compatto.

Quindi, questo non è un caso in cui HTTP/2 aiuta molto. Il principale vantaggio di HTTP/2 è la possibilità di effettuare richieste concorrenti.

Tuttavia, HTTP/2 ci aiuta con la compressione! Gli header ora vengono inviati in un protocollo binario che
è più compatto, e alcuni plugin con molte risorse si caricheranno molto più velocemente poiché le richieste
possono essere accodate in parallelo.

### In conclusione

Grazie ai nostri clienti per la loro pazienza nell'implementare queste modifiche. Speriamo che
continuiate ad amare FastComments.

Saluti!

{{/isPost}}

---