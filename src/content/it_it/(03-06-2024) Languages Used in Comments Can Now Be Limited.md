---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Le lingue utilizzate nei commenti possono ora essere limitate[/postlink]

{{#unless isPost}}
Alcune comunità desiderano limitare le lingue utilizzate. Questo può ora essere fatto con FastComments.
{{/unless}}

{{#isPost}}

### Novità

FastComments ha sempre cercato di supportare quante più lingue e località possibile.

Tuttavia, alcune comunità vogliono limitare le lingue utilizzate per comunicare e scrivere commenti.

Invece di applicare questa regola, e potenzialmente bandire gli utenti, ora può essere configurato esplicitamente sulla piattaforma.

### Come Configurarlo

Nell'interfaccia di personalizzazione del widget con cui probabilmente hai familiarità, puoi ora selezionare una o più lingue in cui i commenti possono essere scritti.

La piattaforma, al momento della sottomissione del commento, tenterà di determinare la lingua del commento in tempo reale. Se la fiducia nella lingua determinata è
superiore al 70%, e corrisponde a una lingua consentita, allora il commento è consentito.

Se il commento scritto non è in una lingua definita dalla tua configurazione, all'utente verrà mostrato un messaggio di errore nella propria lingua.

### Impatto per gli Sviluppatori

Questa configurazione avrà un impatto anche sui commenti salvati tramite l'API.

Riceverai un errore simile al seguente:

            status: 'failed',
            reason: `Il commento sembra essere uno di queste lingue: [es], ma solo [en,fr] sono consentite.`,
            code: 'language-not-allowed',
            translatedError: "Un messaggio di errore nella lingua dell'utente."

### In Conclusione

Come per tutti i rilasci importanti, siamo felici di aver avuto il tempo di ottimizzare, testare e rilasciare correttamente questa funzionalità. Faccelo sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---