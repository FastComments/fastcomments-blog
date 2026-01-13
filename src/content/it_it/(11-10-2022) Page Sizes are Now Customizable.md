---
[category:UI & Customization]

###### [postdate]
# [postlink]Le Dimensioni delle Pagine sono Ora Personalizzabili[/postlink]

{{#unless isPost}}
FastComments ha avuto una dimensione fissa di 30 commenti per pagina sin dal lancio. Ora è personalizzabile!
{{/unless}}

{{#isPost}}

### Novità

I tuoi thread di commenti possono ora avere diverse dimensioni di impaginazione, e questo può essere personalizzato globalmente sul tuo account, o a livello di sito, o addirittura di pagina. Questo può essere desiderabile se vuoi che alcune pagine mostrino meno o più commenti prima che l'utente debba paginare.

Questo influisce anche sullo scrolling infinito e su qualsiasi framework o integrazione che rende i commenti da FastComments.

Le dimensioni delle pagine possono variare da `10` fino a `200`. Il valore predefinito rimane `30`.

### Come Ottenerlo

Basta andare al fidato [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) e definire la tua dimensione della pagina.

Nota che FastComments pre-calcola i commenti mostrati su ogni pagina, quindi cambiare questo parametro attiverà il nostro sistema per ricalcolare tutti i tuoi thread di commenti. Questo non causerà alcun downtime, ma potrebbe richiedere alcuni minuti affinché la modifica appaia.

### Documentazione

La documentazione aggiornata sulle dimensioni delle pagine può essere trovata su [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Modifiche Rilevanti

Come parte di questo cambiamento, due traduzioni definite nel widget dei commenti sono state rinominate. `PREV_30` e `NEXT_30` sono ora `PREV` e `NEXT`, rispettivamente, e contengono una variabile `[count]`.

Se hai definito traduzioni per i pulsanti di paginazione tramite il Widget Customization UI, allora le abbiamo già migrate per te. Se stai passando le traduzioni in qualche tipo di integrazione tramite codice, dovrai aggiornare queste:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### In Conclusione

Come tutte le principali release, siamo felici di aver potuto dedicare tempo per ottimizzare, testare e rilasciare correttamente questa funzionalità. Facci sapere qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---