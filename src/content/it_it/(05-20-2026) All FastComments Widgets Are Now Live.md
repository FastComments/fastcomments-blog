---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Tutti i widget FastComments sono ora attivi[/postlink]

{{#unless isPost}}
Ogni widget FastComments incorporato (conteggi commenti, commenti recenti, pagine top, discussioni recenti, riepilogo recensioni, mi piace flottanti) ora si aggiorna in tempo reale.
{{/unless}}

{{#isPost}}

### Novità

Il widget principale per i commenti è attivo fin dal primo giorno. I widget incorporati più piccoli, invece, non lo erano. I conteggi dei commenti, i widget "commenti recenti" o "pagine top", etc., mostravano felicemente un numero che era fino a un minuto obsoleto.

Ora ogni widget che FastComments fornisce si iscrive agli aggiornamenti live e si aggiorna immediatamente :) Questo include anche i riepiloghi delle recensioni!

### Quali Widget

Tutti. Concretamente:

- `FastCommentsCommentCount` - il conteggio dei commenti per pagina
- `FastCommentsCommentCountBulk` - la versione bulk che aggiorna molti conteggi su una pagina di elenco/archivio
- `FastCommentsRecentComments` e `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` e `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (il badge del conteggio commenti flottante)
- `FastCommentsEmbedPageLikesFloating` (i mi piace flottanti + conteggio commenti)

### Cosa Devi Fare

Niente. Se hai già uno di questi incorporati, aggiorna la pagina una volta. La prossima volta che un commento viene pubblicato, modificato, eliminato o qualcuno reagisce a una pagina, il widget si aggiornerà.

Il vecchio flag di configurazione `isLive: true` sui widget del conteggio commenti è ora ridondante - i widget sono sempre attivi.

Se carichi il JS del widget dal nostro CDN, hai la nuova versione, inclusa nel caso tu utilizzi una delle nostre librerie wrapper (React, Vue, ecc).

### Anche i Mi Piace sono Attivi

Il widget dei mi piace flottanti ora risponde anche agli eventi di mi piace e reazione. Clicca sul cuore in una pagina e altre schede aperte vedranno il conteggio cambiare.

### Come Funziona

Ogni widget apre una singola connessione WebSocket. I widget che mostrano dati per una pagina specifica (`comment-count` (inclusa la versione bulk), `reviews-summary`, `embed-page-likes-floating`) si iscrivono allo stream di eventi di quella pagina. I widget che mostrano dati che coprono un tenant (`recent-comments`, `top-pages`, `recent-discussions`) si iscrivono a uno stream pulito di impulsi per tenant che invia un segnale ogni volta che qualcosa in quel tenant cambia.

Il risultato è che un widget inattivo costa praticamente nulla e un widget attivo mostra un numero aggiornato entro un secondo o due dalla modifica sottostante.

### Coerenza della Cache

Le cache lato server che supportano questi widget in precedenza scadevano su un TTL di 60 secondi. Ora si invalidano nel momento in cui atterra un evento di commento o reazione rilevante, quindi la prima richiesta dopo una modifica restituisce dati freschi, non la versione memorizzata.

### In Conclusione

Siamo felici di aver potuto dedicare del tempo a testare e ottimizzare questa modifica in modo che i nostri clienti possano goderne allo stesso prezzo di sempre. Pensiamo che i
riepiloghi di recensioni live siano un differenziatore particolarmente interessante per noi.

Fateci sapere qui sotto se notate qualcosa di strano.

Saluti!

{{/isPost}}