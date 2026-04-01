---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Il Sistema di Trasporto Automatico per il Routing di FastComments[/postlink]

{{#unless isPost}}
Introduzione al Sistema di Trasporto Automatico per il Routing di FastComments!
{{/unless}}

{{#isPost}}

## Introduzione

Il Sistema di Trasporto Automatico per il Routing di FastComments (FARTS) è il nostro livello di trasporto e servizio. I FARTs aiutano a ridurre la congestione, instradando il traffico in base alla posizione dell'utente e, potenzialmente, al carico in futuro. Esso consiste in diversi sistemi, un livello DNS geo-consapevole, un proxy DB, replicazione DB, gestione dei certificati SSL, un reverse proxy e un CDN che utilizza una cache LRU su disco per memorizzare gli asset al bordo. Il sistema supporta sia modalità di failover silenzioso che rumoroso. La modalità silenziosa è preferita in produzione.

## Attivo-Attivo

L'ultima versione di FART contiene un proxy integrato e un livello di replicazione per il nostro database. Questo consente a FastComments di essere Attivo-Attivo con disponibilità di scrittura globale, il che permette ai nostri FARTS di essere eventualmente consistenti. [Maggiori dettagli qui](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Un approccio che abbiamo realmente adottato all'inizio è stato vedere se potevamo creare un fork di MongoDB. Uno dei nostri ingegneri (Sloperators) è riuscito effettivamente a realizzarlo con Opus 4.6, tuttavia abbiamo deciso che il rischio di farlo era superiore alla costruzione di un nostro sistema isolato.

L'ultima cosa che vorresti con qualcosa come FART è sapere che è arrivato, ma non riesci a risalire alla fonte. Abbiamo aggiunto monitoraggio e diagnostica per controllare la replicazione attivo-attivo a un livello granulare.

## Rust su Scala

Parte della motivazione per creare FART era sostituire alcuni servizi esistenti scritti in Java. Dopo averci riflettuto, abbiamo deciso di consolidarli in un unico servizio Rust per ridurre i sovraccarichi di runtime. Questo è stato un compromesso accettabile poiché non distribuiremo FART frequentemente. FART è compilato con LTO, quindi possiamo davvero farlo andare a tutta velocità.

Abbiamo speso molto tempo cercando di ottimizzare il vecchio sistema Java con diversi GC, ecc., e alla fine abbiamo semplicemente deciso che l'async Rust + Mimalloc performava in modo significativamente migliore sull'hardware stesso con requisiti di memoria molto più bassi, quindi il passaggio è stato ovvio.

## Il Master di FART

Ogni distribuzione contiene il proprio Master di FART. Il master è responsabile dell'orchestrazione di crons, webhook e così via.

## Impatto sui Clienti

Il sistema FART è in produzione da circa un anno ora. Solo di recente abbiamo effettuato la migrazione alla distribuzione Attivo-Attivo. Il nuovo sistema ci offre maggiore visibilità sulla latenza attraverso il sistema, oltre a un carico di manutenzione minore, quindi ora possiamo dedicare più tempo alle funzionalità.

FART lavora silenziosamente in background, anche se la sua presenza si fa sempre sentire. Speriamo che troviate i nostri sistemi più veloci per i vostri casi d'uso (per lo più le azioni degli utenti che comportano cambiamenti nei dati saranno più rapide in alcune regioni).

## Distribuzioni

La distribuzione utilizza lo stesso sistema di orchestrazione globale che usiamo per distribuire i servizi stessi. La documentazione di FARTS raccomanda di non fidarsi mai di una distribuzione, verificare sempre il payload prima del rilascio.

Dopo la distribuzione, gli avvisi di FART seguono una politica di escalation: prima la stanza, poi il piano, poi l'edificio.

## In Conclusione

Come tutte le versioni principali, siamo felici di aver potuto prendere il tempo necessario per ottimizzare, testare e rilasciare correttamente questa modifica. Siamo entusiasti di ciò che arriverà. FastComments dovrebbe scalare meglio e avere una maggiore disponibilità nel lungo periodo con questo lavoro. Come dice il runbook di FART: "Se senti odore di qualcosa, dillo". Faccelo sapere qui sotto se scopri eventuali problemi.

{{/isPost}}

---