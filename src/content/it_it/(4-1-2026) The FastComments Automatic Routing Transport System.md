---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Il Sistema di Trasporto Automatico di Routing di FastComments[/postlink]

{{#unless isPost}}
Presentiamo il Sistema di Trasporto Automatico di Routing di FastComments!
{{/unless}}

{{#isPost}}

## Introduzione

Il Sistema di Trasporto Automatico di Routing di FastComments (FARTS) è il nostro strato di trasporto e servizio. FARTS aiuta con la congestione, instradando il traffico in base alla posizione dell'utente e potenzialmente al carico in futuro. Si compone di diversi sistemi, un livello DNS geo-consapevole, un proxy DB, replicazione DB, gestione dei certificati SSL, proxy inverso e CDN che utilizza una cache LRU su disco per memorizzare gli asset all'estremità.

## Active-Active

L'ultima versione di FART contiene un proxy integrato e un livello di replicazione per il nostro database. Questo consente a FastComments di essere Active-Active con disponibilità di scrittura globale, che garantisce che i nostri FARTS siano alla fine coerenti. [Maggiori dettagli qui](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Un approccio che abbiamo effettivamente preso all'inizio è stato vedere se potevamo creare un fork active-active di MongoDB. Uno dei nostri ingegneri (Sloperators) è riuscito a portare a termine questo con Opus 4.6, tuttavia, abbiamo deciso che il rischio di farlo era superiore rispetto alla costruzione di un nostro sistema isolato.

## Rust su scala

Parte della motivazione per creare FART era sostituire alcuni servizi esistenti scritti in Java. Dopo aver riflettuto su di esso per un po', abbiamo deciso di consolidare questi in un unico servizio Rust per ridurre l'overhead di runtime. Questo è stato un compromesso accettabile poiché non distribuiamo FART spesso. FART è compilato con LTO, quindi possiamo davvero lasciarlo andare.

Abbiamo speso molto tempo cercando di ottimizzare il vecchio sistema Java con diversi GC, ecc., e alla fine abbiamo semplicemente deciso che async Rust + Mimalloc performavano significativamente meglio sull'hardware stesso con requisiti di memoria molto più bassi, quindi il passaggio è stato ovvio.

Rust si è rivelato davvero ottimo per il codice relativo alla rete che utilizza heap condivisi e lock. Tuttavia, non è immune a problemi di runtime. Vale la pena notare che il codice scritto da LLM in Rust è piuttosto soggetto a deadlock, e un modo per evitarlo è progettare i sistemi come macchine a stati facili da comprendere, invece di semplici pile di async/await.

## Il Master FART

Ogni distribuzione contiene il proprio Master FART. Il master è responsabile di orchestrare cron, webhook e così via.

## Impatto per i clienti

Il sistema FART è in produzione da circa un anno. Solo di recente abbiamo effettuato la migrazione alla distribuzione Active-Active. 
C'è un certo impatto per la lettura delle proprie scritture attraverso le regioni, che è trattato nel post del blog sopra collegato e [nella documentazione](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART funziona silenziosamente in background, anche se la sua presenza si fa sempre sentire. Speriamo che tu trovi i nostri sistemi più veloci per i tuoi casi d'uso (soprattutto le azioni degli utenti che comportano modifiche ai dati saranno più veloci in alcune regioni).

## Distribuzioni

La distribuzione utilizza lo stesso sistema di orchestrazione globale che utilizziamo per distribuire i servizi stessi. La documentazione FART raccomanda a Sloperators di non fidarsi mai di una distribuzione, ma di verificare sempre il payload prima di rilasciarlo.

Dopo la distribuzione, gli avvisi FART seguono una politica di escalation: prima la stanza, poi il piano, poi l'edificio.

## In conclusione

Dicono che Internet sia una serie di tubi, ma in realtà è una serie di flatulenze.

Come per tutti i principali rilasci, siamo felici di aver potuto prendere il tempo per ottimizzare, testare e rilasciare adeguatamente questa modifica. Siamo entusiasti di ciò che ci aspetta. 
FastComments dovrebbe scalare meglio e avere una migliore disponibilità a lungo termine con questo lavoro. Come dice il manuale FART: "Se senti odore di qualcosa, dì qualcosa". Facci sapere qui sotto se scopri eventuali problemi.

{{/isPost}}

---