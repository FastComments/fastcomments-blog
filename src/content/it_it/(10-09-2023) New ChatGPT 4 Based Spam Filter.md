---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Nuovo Filtro Antispam Basato su ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments aggiunge alla sua lista di opzioni per i filtri antispam.
{{/unless}}

{{#isPost}}

### Novità

FastComments continua a migliorare il suo classificatore antispam Naïve-Bayes, tuttavia abbiamo aggiunto una nuova opzione alla flotta di rilevatori di spam.

Ora puoi rilevare lo spam utilizzando ChatGPT 4 fornito da OpenAI.

### Configurazione

Per configurare quale rilevatore di spam utilizzare, controlla la pagina Impostazioni di Moderazione nel tuo pannello di controllo admin. Il rilevatore di spam basato su GPT4 è addebitato a `$0.08` ogni `1000` token.

Questo rilevatore di spam è disponibile solo per i clienti con un piano Flex poiché è addebitato in base ai token utilizzati.

### Ottimizzazioni

Prima inviamo tutti i contenuti attraverso il classificatore Naïve-Bayes condiviso per limitare le chiamate a OpenAI. Questo ti fa risparmiare soldi per lo spam molto ovvio. Per lo spam extra subdolo, poi contattiamo OpenAI per vedere se il contenuto appare come spam.

### Risultati

Abbiamo osservato miglioramenti immediati nelle comunità che hanno attivato questa funzionalità.

### Documentazione

Questo può essere configurato tramite la pagina Impostazioni di Moderazione nel tuo pannello di controllo admin.

[La documentazione può essere trovata anche qui](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### In Conclusione

Ringraziamo i nostri clienti che ci forniscono feedback continui in modo che possiamo pensare a idee come questa. Speriamo che tu continui ad amare FastComments.

Saluti!

{{/isPost}}

---