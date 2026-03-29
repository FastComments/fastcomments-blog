---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments è Pronto per lo Spazio![/postlink]

{{#unless isPost}}
Abbiamo completato la migrazione del nostro database attivo-attivo, portando una vera ridondanza multi-regione a FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

### Novità

Ogni [point-of-presence](https://sophon.fastcomments.com/) di FastComments ora scrive localmente e replica in modo asincrono a tutti gli altri nodi. Questo fornirà una maggiore durabilità rispetto al sistema precedente, oltre a rendere gli strumenti di moderazione più rapidi per gli utenti in alcune regioni, con alcuni compromessi.

"Pronto per lo Spazio" è un po' ottimistico, ma l'idea è che potremmo distribuire FastComments su diversi pianeti e alla fine il sistema finirebbe per essere sincronizzato. Gli utenti su Plutone, tuttavia, dovrebbero aspettare circa un giorno per vedere le modifiche riflettersi sulla loro prossima pagina della fattura, poiché attualmente solo un master per regione può aggregare le informazioni di fatturazione.

### Un Po' di Storia, Perché il Cambiamento

Quando FastComments è stato lanciato originariamente, avevamo un'architettura molto tipica. Avevamo uno strato proxy, uno strato app, un database, alcune repliche, poi in seguito repliche attraverso regioni e fornitori di cloud per una maggiore ridondanza.

Alla fine abbiamo spostato le repliche del DB in tutte le zone dove si trovano la maggior parte dei nostri utenti e abbiamo anche distribuito l'app lì, creando il nostro sistema DNS e proxy (descritto in un post del blog successivo) per instradare le richieste al nodo app più vicino. Questo rende le letture veloci, ma le scritture più lente, poiché ora invece di aspettare un round trip HTTP verso il backend, si aspetta un round trip HTTP verso un nodo vicino, e quel nodo potrebbe eseguire più scritture di database verso il primario. Non è buono!

Quindi, per contrastare questo, abbiamo ristrutturato molte aree dell'applicazione per accettare un `readPreference` come argomento della funzione, così i chiamanti possono decidere quanto obsolete possono essere le loro letture, e in aggiunta abbiamo fatto in modo che più scritture (come la registrazione delle statistiche dei moderatori sulle azioni dei moderatori) siano fire-and-forget. Non è ideale, ma ha velocizzato significativamente le cose.

Un problema che abbiamo riscontrato facendo funzionare Mongo a livello globale sono le divisioni della rete. Se abbastanza nodi vengono isolati, le letture si fermano poiché ciascun nodo diventa incerto se è accettabile servire letture. Ci sono alcuni modi per aggirare questo, ma i casi limite diventano disordinati. Questo non è un problema teorico - è capitato abbastanza volte da causare pagine alle 3 del mattino che ci siamo stancati di questo, anche provando a regolare Mongo per essere okay con l'incertezza delle elezioni del replicaset fino a un minuto di distanza. Sfortunatamente, le reti da San Paolo a Falkenstein, per esempio, semplicemente non erano molto buone attraverso alcuni dei nostri fornitori di hosting. La regolazione del controllo della congestione e simili ha aiutato, ma non ha risolto il problema.

La soluzione di Graal, supponendo che tu sia d'accordo con certi compromessi, è la capacità di accettare le scritture localmente su quel nodo (che ha hardware decente, RAID, ecc., che è improbabile si guasti) e dire all'utente che i suoi dati sono stati salvati. Puoi anche in quel punto-of-presence avere un secondo nodo come replica calda per la durabilità.

Quindi, questo è ciò su cui alla fine siamo arrivati. Oregon, Virginia, Falkenstein, San Paolo, Singapore, sono tutti i loro propri replicaset e accettano scritture. La distribuzione nell'UE (anche se solo tre PoPs) ha lo stesso comportamento.

### Come Funziona

Alcuni di questi aspetti sono trattati nella sezione precedente, ma il TL;DR è che è CRDT-lite. Abbiamo creato un proxy (in Rust, perché ovviamente) che si trova tra l'applicazione e Mongo e lo rende multi-master. Il proxy è consapevole dei peer, gestisce checkpoint, replicazione, monitoraggio e sincronizzazione iniziale. È un sostituto multi-master per il sistema di replicazione di Mongo, inclusi alcuni comandi DDL.

**La differenza rispetto ad altri strumenti** è che **non segui l'oplog**. Seguire l'oplog, o usare i change streams, non funzionerebbe, perché essi mostravano solo lo stato finale dell'oggetto dopo la scrittura, rendendo impossibile gestire i conflitti. Devi catturare ogni operazione `$set`, `$inc` e replicare quell'operazione stessa.

Questa è una soluzione specifica del dominio. Non funzionerebbe per tutti i prodotti. Potresti dire che è design-driven by domain :). Funziona per noi perché fin dall'inizio abbiamo prestato molta attenzione a `$set` solo i campi che cambiamo sui documenti - non usiamo mai `replaceOne` di Mongo, per esempio. Stesso discorso per i contatori. **Non** fai mai `SET VOTES = 5`. Invece, scriveresti `INCREMENT VOTES BY 5`, poiché questo consente la coerenza eventuale. I lock distribuiti sono gestiti **evitando completamente di usarli**. Solo un nodo per cluster ha un flag impostato per eseguire cron. Anche se questo potrebbe sembrare limitato, possiamo acquistare server con terabyte di RAM, quindi possiamo prendere questo compromesso per ridurre il rischio e la complessità.

### Leggere le Tue Stesse Scritture

Per gli sviluppatori che usano l'API, dovresti essere in grado di leggere le tue stesse scritture proprio come prima (effettua una chiamata API per creare un commento, poi elenca i commenti e vedi la nuova voce in quella lista). **La limitazione** è che non puoi farlo attraverso le regioni. Se il tuo backend funziona in una sola regione, come us-west, allora dovresti essere in grado di leggere le tue stesse scritture, tranne nel caso in cui tra la tua scrittura e la tua lettura, quel nodo si guasti **e** la tua cache DNS si aggiorni per puntare al nodo più vicino successivo. A condizione che ciò non accada, leggere le tue stesse scritture è affidabile.

### Test & La Migrazione

Circa la metà del codice nel sistema è il framework di test e i test stessi. Tuttavia, il rilascio è stato un po' irregolare, con un tempo di inattività maggiore (1 ora per l'UE e 20 minuti per il globale) rispetto a quanto desiderato, ma siamo felici di aver superato questo traguardo e ti ringraziamo per la tua pazienza!

### In Conclusione & Cosa Significa per Te

FastComments dovrebbe ora essere più veloce e più durevole che mai, e ora possiamo tornare a lavorare su funzionalità :)

Saluti!

{{/isPost}}

---