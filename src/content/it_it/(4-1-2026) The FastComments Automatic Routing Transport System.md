---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Il Sistema di Trasporto Automatico a Routing di FastComments[/postlink]

{{#unless isPost}}
Introducendo Il Sistema di Trasporto Automatico a Routing di FastComments!
{{/unless}}

{{#isPost}}

## Introduzione

Il Sistema di Trasporto Automatico a Routing di FastComments (FARTS) è il nostro strato di trasporto e servizio. FARTS aiuta con la congestione, instradando
il traffico in base alla posizione dell'utente e potenzialmente al carico in futuro. Esso consiste in diversi sistemi, un layer DNS geo-consapevole, un proxy DB, replica DB, gestione dei certificati SSL, proxy inverso e CDN che utilizza una cache LRU su disco per memorizzare gli asset ai margini.

## Active-Active

L'ultima versione di FART contiene un proxy integrato e un layer di replica per il nostro database. Questo consente a FastComments di essere Active-Active
con disponibilità di scrittura globale, il che garantisce che i nostri FARTS siano eventualmente consistenti. [Maggiori dettagli qui](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Un approccio che abbiamo effettivamente adottato all'inizio è stato vedere se potessimo creare un fork active-active di MongoDB. Uno dei nostri ingegneri (Sloperators) è riuscito a realizzarlo con Opus 4.6, tuttavia, abbiamo deciso che il rischio di farlo era superiore a costruire il nostro sistema isolato.

## Rust su scala

Parte della motivazione per creare FART era sostituire alcuni servizi esistenti scritti in Java. Dopo aver riflettuto su questo per un po', abbiamo deciso di consolidarli in un unico servizio Rust per ridurre l'overhead di runtime. Questo era un compromesso accettabile dato che non distribuiamo FART spesso. FART è compilato con LTO, quindi possiamo davvero farlo funzionare al massimo.

Avevamo trascorso molto tempo cercando di ottimizzare il vecchio sistema Java con diversi garbage collector, ecc., e alla fine abbiamo semplicemente deciso che Rust asincrono + Mimalloc offrivano prestazioni significativamente migliori sull'hardware stesso con requisiti di memoria molto più bassi, quindi il passaggio è stato ovvio.

Rust si è rivelato davvero ottimo per il codice relativo alle reti che utilizza heap condivisi e lock. Tuttavia, non è impermeabile ai problemi di runtime. Vale la pena notare che il codice scritto da LLM in Rust è piuttosto soggetto a deadlock, e un modo per aggirarlo è progettare sistemi come macchine a stati facili da capire, piuttosto che semplici pile di async/await.

## Il Master FART

Ogni deployment contiene il proprio Master FART. Il master è responsabile dell'orchestrazione dei cron, webhook, e così via.

## Impatto sul Cliente

Il sistema FART è in produzione da circa un anno. Solo di recente abbiamo effettuato la migrazione al deployment Active-Active. 
C'è un certo impatto nella lettura dei propri scritti attraverso le regioni, di cui si parla nel blog post linkato sopra e [nella documentazione](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART lavora silenziosamente in background, sebbene la sua presenza sia sempre percepita. Speriamo che troviate i nostri sistemi più veloci per i vostri casi d'uso (principalmente le azioni degli utenti che comportano cambiamenti nei dati saranno più veloci in alcune regioni).

## Deployments

Il deployment utilizza lo stesso sistema di orchestrazione globale che usiamo per distribuire i servizi stessi. La documentazione FART raccomanda a Sloperators di non fidarsi mai di un deploy, sempre verificare il payload prima di rilasciare.

Dopo il deployment, gli avvisi FART seguono una politica di escalation: prima la stanza, poi il piano, poi l'edificio.

## In Conclusione

Si dice che internet sia una serie di tubi, ma in realtà è una serie di segnali.

Come tutte le versioni principali, siamo felici di aver potuto dedicare tempo per ottimizzare, testare e rilasciare correttamente questa modifica. Siamo entusiasti di ciò che ci aspetta. FastComments dovrebbe scalare meglio e avere una maggiore disponibilità nel lungo periodo con questo lavoro. Come dice il runbook di FART: "Se senti odore di qualcosa, dì qualcosa". Facci sapere qui sotto se scopri eventuali problemi.

{{/isPost}}