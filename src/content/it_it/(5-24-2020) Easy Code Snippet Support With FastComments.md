---
[category:Features]

###### [postdate]
# [postlink]Supporto Facile per Codici con FastComments[/postlink]

Alcuni dei nostri clienti hanno siti e blog legati allo sviluppo software. In queste comunità è comune condividere frammenti di codice. Ecco come FastComments rende questo facile.

{{#isPost}}

FastComments consente di condividere codice semplicemente incollandolo nella casella di commento. Può essere mescolato con altro testo e immagini, e non richiede di aggiungere manualmente alcun tipo di tag "codice" per aggiungere la formattazione. Basta incollare!

Ecco una rapida dimostrazione che lo mostra in azione.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demo di Condivisione di Frammenti di Codice" title="Demo di Condivisione di Frammenti di Codice"></video>

### Implicazioni sulle Prestazioni

Aggiungere questa funzionalità ha comportato solo ~150 byte in più per il widget lato client poiché la maggior parte della funzionalità è gestita lato server. Infatti, se si unisce questo alle recenti funzionalità di Markdown aggiunte, la dimensione del widget è effettivamente diminuita con queste recenti funzionalità!

### Cose da Notare

Se hai una comunità che condivide pesantemente codice, dovresti considerare di aumentare la dimensione massima del commento per rendere più facile la condivisione di frammenti di codice. Questo può essere fatto tramite la scheda "Personalizza" della dashboard di amministrazione.

### Rilevamento del Codice

Per mantenere la dimensione del widget lato client ridotta, rileveremo automaticamente solo il codice incollato per linguaggi simili a C e Python (Java, JavaScript, CSS, C++, ad esempio) che usano "{" o spazi per il controllo di flusso. Se stai usando comunemente un linguaggio che non viene rilevato automaticamente, contattaci.

Per inserire manualmente un blocco di codice, scrivi un commento come: ```<code>(defun someLispCode(1, 2, 3))</code>```. Possiamo rilevare automaticamente circa 150 linguaggi. 

### Migrazione dei Commenti Esistenti

Se desideri migrarti a FastComments e hai molti commenti che contengono frammenti di codice che vuoi formattare correttamente, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">possiamo aiutarti</a>.

### In Conclusione

Questo è tutto! Abbiamo implementato questa funzionalità in tutte le comunità online su FastComments.

Buon commento!

{{/isPost}}