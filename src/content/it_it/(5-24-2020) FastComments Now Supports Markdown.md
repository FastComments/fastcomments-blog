---
[category:Features]

###### [postdate]
# [postlink]FastComments Ora Supporta Markdown[/postlink]

È arrivata un'esperienza di commento più ricca su FastComments grazie all'uso di Markdown!

{{#isPost}}

Markdown è un insieme di convenzioni per lo styling del testo. Ad esempio, per creare una parola in grassetto potremmo \*\*fare così\*\*.
Inserire link normali significa semplicemente incollare l'URL originale, e le immagini funzionano come prima.

Ecco una cheatsheet di Markdown, fornita da Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Quale sintassi Markdown supporta FastComments?

Supportiamo completamente Markdown, tranne le intestazioni. Quando definiamo un'intestazione la rendiamo semplicemente come testo normale poiché distrae dal flusso della conversazione. Le intestazioni
sono per contenuti come post di blog e documenti - non per conversazioni.

FastComments ha sempre supportato le immagini tramite la sintassi [img]...[/img]. Questo continuerà a essere supportato poiché è più facile da comprendere rispetto a quello di Markdown.

### Miscelare contenuti

Un singolo commento può contenere tutte le forme di formattazione - markdown, link, immagini, frammenti di codice e tabelle.

### Evitare attacchi XSF/XSS

In precedenza, FastComments inviava testo normale attraverso la rete e lo analizzava sul client. Ora, l'HTML viene inviato attraverso la rete, e manteniamo due versioni di ogni commento
nel nostro database per supportare funzionalità come la modifica dei commenti.

Inviare HTML direttamente ai commenti ha i suoi rischi - così tutti i commenti generati vengono analizzati e puliti per prevenire attacchi cross-site e cross-frame.

### Esportazione dei dati

Quando esporti i commenti riceverai la versione che l'utente ha visto quando ha digitato il proprio commento. Se desideri ottenere l'HTML grezzo, contattaci.

### Preoccupazioni sulle performance

L'eccesso di funzionalità ha la tendenza a rallentare le cose. Non è ciò che vogliamo fare su FastComments.
Aggiungere questa funzionalità ha **ridotto** la dimensione del nostro widget lato client di ~400 byte - da 9.53kb a 9.12kb - significando caricamenti di pagina più rapidi.

Anche se teoricamente questa funzionalità potrebbe rallentare il meccanismo di salvataggio dei commenti, non abbiamo riscontrato alcun degrado delle performance e come sempre stiamo monitorando le nostre API.

### Come posso ottenerla?

Il supporto per Markdown è stato distribuito automaticamente a tutti i nostri clienti. Non dovresti vedere troppi cambiamenti nei contenuti pubblicati sul tuo sito - tranne che ora gli utenti possono grassetto, sottolineare e fare alcune cose elaborate
come creare tabelle semplici.

Come con tutti i rilasci di funzionalità, ci aspettiamo feedback e mentre abbiamo molti test automatizzati... se riscontri problemi - faccelo sapere!

Buon commento.

{{/isPost}}

---