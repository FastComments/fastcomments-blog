---
[category:Migration]
###### [postdate]
# [postlink]Migrazione da Yotpo a FastComments[/postlink]

{{#unless isPost}}
Cerchi un'alternativa a Yotpo? Questo post spiega come migrare le recensioni dei prodotti da Yotpo a FastComments, cosa viene preservato, come si confrontano le piattaforme e quali cambiamenti ci sono per il tuo negozio.
{{/unless}}

{{#isPost}}

Abbiamo ricevuto una costante richiesta da parte dei commercianti di Shopify riguardo alle alternative a Yotpo e come spostare le loro recensioni dei prodotti dalla piattaforma. Questo post copre cosa cercare in un'alternativa a Yotpo, come funziona la migrazione a FastComments dall'inizio alla fine e quali sono i cambiamenti una volta passato a FastComments.

## A Chi È Destinato Questo Post

Questa guida è per commercianti e proprietari di negozi di ecommerce che utilizzano Yotpo per le recensioni dei prodotti e vogliono un'alternativa più veloce, leggera o più conveniente. La maggior parte dei commercianti con cui parliamo è su Shopify, ma FastComments funziona allo stesso modo sui negozi WooCommerce, BigCommerce, negozi personalizzati e configurazioni headless. Il processo di migrazione è lo stesso indipendentemente dalla piattaforma su cui opera il tuo negozio.

## Perché Trasferirsi

- FastComments è veloce. Yotpo carica quasi un megabyte di JavaScript e più round-trip di terzi, il che può rendere lente le pagine dei prodotti.
- Le recensioni non appaiono in tempo reale. Un acquirente invia una recensione, la pagina gli dice di controllare la sua casella di posta e la recensione appare solo dopo un ritardo.
- FastComments offre una tariffazione più lineare senza gate sulle funzionalità tra i vari livelli.

FastComments serve valutazioni a stelle e thread di recensioni in un singolo widget di ~30KB che si aggiorna in tempo reale. Le nuove recensioni vengono trasmesse in ogni pagina aperta nel momento in cui vengono pubblicate, senza bisogno di ricaricare! Il nostro piano basato sul traffico copre le valutazioni, la moderazione AI, la moderazione multi-stato, la funzionalità Domande e l'esportazione completa dei dati. Molti clienti pagano solo un dollaro, con prezzi per amministratore e moderatore disponibili per le organizzazioni più grandi.

## Un'Esperienza dal Vivo

Il FastComments Summary Widget è attivo, proprio come i nostri widget di commento e chat. Se viene lasciata una recensione, le valutazioni si aggiornano immediatamente senza aggiornare la pagina. Questo può essere utile per i lanci di prodotto.

FastComments funziona anche al di fuori di Shopify se decidi mai di trasferirti o gestisci negozi diversi su piattaforme diverse.

## Yotpo vs FastComments A Colpo D'Occhio

Una rapida comparazione dei fattori che i commercianti chiedono quando cercano un'alternativa a Yotpo:

- Peso del widget: Yotpo scarica oltre 800KB di JavaScript attraverso diversi round-trip. FastComments scarica 38KB in un singolo round-trip.
- Recensioni dal vivo: Yotpo richiede un aggiornamento della pagina per mostrare nuove recensioni. FastComments invia nuove stelle e commenti a ogni pagina aperta in tempo reale.
- Prezzi: Yotpo applica prezzi in base al volume di recensioni attraverso piani tier con gate sulle funzionalità. FastComments applica prezzi fissi in base al traffico della pagina e include ogni funzionalità in ogni piano.
- Recensioni fotografiche e video: Entrambi le supportano.
- Recensioni di domande e risposte: Yotpo vende Q&A come modulo aggiuntivo. FastComments lo include tramite la funzionalità Domande integrata.
- Moderazione AI: Yotpo offre regole base di pubblicazione automatica. FastComments include agenti AI con punteggi configurabili per commento e registri di audit, oltre a configurazioni di pubblicazione manuale e automatica.
- Esportazione dati: Yotpo limita l'esportazione completa ai livelli più alti. FastComments include l'esportazione completa in CSV e JSON in ogni piano.
- Migrazione da un concorrente: Yotpo addebita per il concierge della migrazione. FastComments gestisce la migrazione gratuitamente tramite un ticket di supporto.

## Come Funziona la Migrazione

Yotpo non ha un'esportazione pulita self-serve che mappa in modo chiaro in uno schema di importazione pubblico, quindi gestiamo le migrazioni da Yotpo attraverso il nostro team di supporto piuttosto che con la pagina di importazione standard. Il processo dall'inizio alla fine è:

1. Apri un <a href="https://fastcomments.com/contact-us" target="_blank">ticket di supporto</a> con noi e facci sapere che ti stai trasferendo da Yotpo.
2. Ti inviamo istruzioni per esportare i tuoi dati da Yotpo. L'esportazione copre recensioni, valutazioni, foto, flag di acquirenti verificati e risposte in thread.
3. Invia l'esportazione di nuovo a noi tramite il ticket.
4. Mappiamo ogni campo in FastComments e lo carichiamo in un tenant di staging collegato al tuo account, così puoi visualizzare il risultato prima che venga pubblicato nel tuo negozio.
5. Quando approvi l'anteprima, promuoviamo i dati al tuo tenant di produzione.

La maggior parte delle migrazioni da Yotpo si completano entro una settimana dal momento in cui riceviamo l'esportazione.

## Cosa Viene Preservato

La mappatura copre tutto ciò che Yotpo memorizza per recensione:

- Valutazioni a stelle e la valutazione aggregata del prodotto
- Testo della recensione, risposte in thread e timestamp delle risposte
- Attaccamento di foto e video (spostiamo i file nel nostro CDN)
- Flag di acquirenti verificati
- Identificatori dei clienti, affinché i conteggi delle recensioni sui profili dei clienti corrispondano a quelli di prima
- Timestamp di invio, così l'ordine cronologico sulle tue pagine prodotto è preservato

Se hai domande e risposte di Yotpo, queste vengono mappate sulla funzionalità Domande di FastComments sugli stessi thread di prodotto.

## Sostituzione del Widget

Una volta trasferiti i dati, sostituisci il widget di Yotpo nel tuo modello di pagina prodotto con il widget di FastComments. Siamo un'app per Shopify, quindi per la maggior parte dei negozi è un blocco di una riga nel tuo tema. Il <a href="https://fastcomments.com/install-wizard" target="_blank">wizard di installazione</a> copre Shopify, configurazioni headless e i principali framework front-end. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Possiamo aiutarti con questo</a>.

Puoi eseguire Yotpo e FastComments fianco a fianco su un singolo prodotto temporaneamente se desideri confrontare l'aspetto e la sensazione prima di effettuare il passaggio completo.

## EU

Se ti trovi nell'UE, crea il tuo account su <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> in modo che i tuoi dati dei clienti rimangano nell'UE.

## Domande Comuni Sulla Transizione Da Yotpo

### FastComments è più economico di Yotpo?

Nella quasi totalità dei casi, sì. FastComments funziona con un piano tariffario fisso basato sul traffico che include ogni funzionalità, dove Yotpo addebita per recensione attraverso piani tier e aggiunge spese per il superamento. Calcola i numeri per il tuo negozio sul <a href="https://fastcomments.com/pricing-calculator" target="_blank">calcolatore dei prezzi</a>.

### Posso mantenere le mie recensioni Yotpo quando cambio?

Sì. La migrazione preserva ogni recensione, ogni valutazione, ogni allegato fotografico e video, ogni risposta in thread e ogni flag di acquirente verificato. I timestamp di invio vengono trasferiti affinché l'ordine cronologico sulle tue pagine prodotto rimanga lo stesso.

### FastComments funziona al di fuori di Shopify?

Sì. FastComments funziona su Shopify, WordPress, WooCommerce, BigCommerce, negozi personalizzati e configurazioni headless. Il <a href="https://fastcomments.com/install-wizard" target="_blank">wizard di installazione</a> copre i principali framework front-end.

### Posso eseguire Yotpo e FastComments affiancati inizialmente?

Sì. Monta entrambi i widget su una singola pagina prodotto durante l'anteprima di staging per confrontare come appaiono e si sentono sul tuo negozio, quindi rimuovi Yotpo quando sei pronto per il passaggio completo.

### E per quanto riguarda Yotpo Loyalty, Yotpo SMS o Yotpo Email?

FastComments è una piattaforma di recensioni e commenti dal vivo. Non gestisce programmi di fedeltà, marketing SMS o campagne di email marketing. Se utilizzi attualmente questi prodotti di Yotpo, vorrai mantenerli o spostarli su uno strumento dedicato quando cambi le recensioni a FastComments.

Nota che ci piacerebbe sviluppare questa funzionalità, e se sei interessato a essere un beta tester per queste, saremo felici di aggiungerle al nostro roadmap a breve termine.

### Le mie valutazioni a stelle verranno comunque visualizzate sulle mie pagine prodotto?

Sì. Il widget FastComments rende la valutazione aggregata a stelle, le stelle delle recensioni individuali e il conteggio delle recensioni negli stessi posti in cui era il widget di Yotpo. L'HTML di ogni recensione è strutturato in modo che i motori di ricerca possano raccogliere i dati di valutazione sulla pagina.

### La transizione da Yotpo a FastComments influenzerà il mio SEO?

Se gli URL delle tue pagine prodotto rimangono gli stessi, no. Il contenuto delle recensioni si sposta nel nuovo widget sugli stessi URL, e i motori di ricerca vedono gli stessi prodotti con le stesse recensioni sulle stesse pagine. Se stai cambiando URL come parte del trasferimento, inviaci le coppie di URL vecchi e nuovi nel ticket di supporto affinché l'importatore possa mappare.

### C'è un periodo di prova gratuito?

Ogni piano di FastComments inizia con un periodo di prova gratuito. Puoi creare un account, eseguire l'anteprima dell'importazione e vedere il widget su un tenant di staging prima di impegnarti con un piano a pagamento.

## Riepilogo

1. <a href="https://fastcomments.com/contact-us" target="_blank">Apri un ticket di supporto</a> facendoci sapere che vuoi migrare da Yotpo
2. Esporta i tuoi dati Yotpo e inviali a noi nel ticket
3. Anteprima l'importazione su un tenant di staging
4. Sostituisci il widget di Yotpo con il widget di FastComments nel tuo modello di pagina prodotto

{{/isPost}}

---