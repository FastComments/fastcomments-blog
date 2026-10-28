[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]I commenti sono ora tradotti per ogni lettore[/postlink]

{{#unless isPost}}
FastComments può ora tradurre i commenti stessi, non solo il widget che li contiene. Attivalo per sito o per pagina, automaticamente o con un pulsante **Traduci**, e ogni lettore vede la conversazione nella propria lingua con l'originale a un clic di distanza.
{{/unless}}

{{#isPost}}

### Novità

FastComments è stato tradotto in ventotto lingue da tempo, quindi pulsanti, etichette e email compaiono già nella lingua del lettore. I commenti non lo erano. Un commento in spagnolo su una pagina in inglese rimaneva spagnolo, e chi non lo leggeva lo scorreva oltre.

Questa versione aggiunge **Comment Translation**. Quando è attiva, un commento scritto in una lingua diversa da quella del lettore viene mostrato tradotto, con una piccola riga sotto che indica da dove proviene e un link **Mostra originale** per vedere il testo effettivo.

<img src="images/fc-comment-translation-auto.png" alt="Un lettore inglese che vede un commento spagnolo tradotto, con una riga Tradotto dallo spagnolo e un link Mostra originale sotto" title="Traduzione automatica dei commenti" class="lozad" />

### Due modalità

**Automatico** traduce in anticipo. Ogni commento in un'altra lingua arriva tradotto, e il lettore può passare all'originale se lo desidera. Questa è la modalità per una community che scrive realmente in due o più lingue e vuole che tutti leggano la stessa conversazione.

**Manuale** aggiunge un link **Traduci** a ogni commento e non fa nulla finché non viene cliccato. Il lettore decide quali commenti meritano la traduzione, e non si spende nulla per quelli che nessuno richiede. Un commento già nella lingua del lettore lo indica invece di fingere di tradurlo.

<img src="images/fc-comment-translation-manual.png" alt="Modalità manuale, dove un commento spagnolo è stato tradotto al clic e un commento inglese segnala che è già nella lingua del lettore" title="Traduzione manuale dei commenti" class="lozad" />

In entrambe le modalità la lingua del lettore è quella che il widget sta già mostrando: il **Locale / Language** impostato nella regola di personalizzazione, o la lingua del browser del visitatore se non ne hai impostata una. Non c'è nulla che il visitatore debba installare, registrare o configurare. Funziona allo stesso modo che il widget sia incorporato nella tua pagina, dentro un costruttore di siti come Google Sites, o su una pagina di commenti FastComments autonoma.

### Attivazione

Apri la tua <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>, trova **Comment Translation** subito sotto **Locale / Language**, e scegli Automatico o Manuale. È disattivato per impostazione predefinita.

Poiché vive in una regola di personalizzazione, puoi limitarlo come preferisci: a tutto il sito, a un dominio, o a una singola pagina dove sai che il pubblico è misto. È un'impostazione lato server, quindi non può essere attivata solo dalla configurazione JavaScript del widget.

### Costi

Le traduzioni sono prodotte da un modello linguistico e fatturate come token LLM, lo stesso metro di [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Qualsiasi piano può attivarla.

Ogni commento viene tradotto una volta per lingua e la traduzione viene memorizzata con il commento. Se mille lettori spagnoli aprono lo stesso thread in inglese, il lavoro di traduzione avviene una sola volta. Un commento tipico è di qualche centinaio di token, che a tariffe Flex corrisponde a circa mezzo centesimo. Se l'autore o un moderatore modifica un commento, la traduzione memorizzata viene scartata e il commento viene tradotto ex novo al prossimo accesso, così nessuno legge una traduzione di testo che non esiste più.

La modalità manuale non costa nulla finché qualcuno non clicca.

### Dettagli

Il testo tradotto è trattato esattamente come un commento digitato da qualcuno. Passa attraverso le stesse regole di sanitizzazione e di link dell'originale, quindi una traduzione non può contenere nulla che l'originale non potesse. Menzioni e hashtag mantengono la loro formattazione.

I commenti molto lunghi, o la cui lingua non può essere rilevata con certezza, vengono lasciati così come scritti anziché indovinati. La riga della lingua sotto un commento tradotto è nella lingua del lettore, così un lettore spagnolo di un commento inglese vede "Traducido del inglés" e "Mostrar original".

### Sovraccarico

Il codice per questa nuova funzionalità non viene caricato se non è abilitato, quindi non rallenta il widget dei commenti per gli altri utenti.

### Documentazione

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">La guida alla traduzione dei commenti</a> copre entrambe le modalità, l'impostazione della regola e la fatturazione.  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">La guida al locale</a> spiega come viene scelta la lingua del widget fin dall'inizio.

### In conclusione

Questo proviene da un'associazione di quartiere i cui residenti commentano in inglese e spagnolo, e che voleva che entrambi i gruppi leggessero lo stesso thread senza chiedere a nessuno di installare un'estensione del browser o registrarsi a qualcosa.

Se gestisci una community che scrive in più di una lingua, attivala e raccontaci qui sotto come leggono le traduzioni.

Saluti!

{{/isPost}}