---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments è Pronto per lo Spazio![/postlink]

{{#unless isPost}}
Abbiamo completato la migrazione del nostro database attivo-attivo, portando vera ridondanza multi-regione a FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

### Novità

Ogni [point-of-presence](https://sophon.fastcomments.com/) di FastComments ora gestisce le scritture localmente e le replica in modo asincrono su tutti gli altri nodi. Questo fornirà una maggiore durabilità rispetto al sistema precedente, insieme a una velocizzazione degli strumenti di moderazione per gli utenti in alcune regioni, con alcuni compromessi.

"Pronto per lo Spazio" è un po' ottimistico, ma l'idea è che potremmo distribuire FastComments su diversi pianeti e alla fine il sistema si sincronizzerebbe. Gli utenti su Plutone, tuttavia, dovrebbero aspettare circa un giorno per vedere le modifiche riflesse nella loro pagina delle fatture imminenti, poiché attualmente solo un master per regione può aggregare le informazioni di fatturazione.

### Un Po' di Storia, Perché il Cambiamento

Quando FastComments è stato lanciato, avevamo un'architettura molto tipica. Avevamo uno strato proxy, uno strato app, un database, alcune repliche, e poi in seguito repliche tra regioni e fornitori di cloud per ulteriore ridondanza.

Alla fine abbiamo spostato le repliche del DB in tutte le zone dove si trovano la maggior parte dei nostri utenti e abbiamo anche distribuito l'app lì, creando il nostro sistema DNS e proxy (descritto in un post del blog successivo) per instradare le richieste al nodo app più vicino. Questo rende le letture veloci, ma le scritture più lente, poiché ora invece di attendere un round trip HTTP verso il backend, si attende un round trip HTTP verso un nodo vicino, e quel nodo potrebbe fare più scritture sul database principale. Non è ideale!

Quindi, per combattere questo problema, abbiamo ristrutturato molte aree dell'applicazione per prendere un `readPreference` nei parametri della funzione, in modo che i chiamanti possano decidere quanto superate sono disposti ad accettare le loro letture, e su questo abbiamo fatto in modo che più scritture (come scrivere le statistiche dei moderatori sulle azioni dei moderatori) funzionassero in modalità fire-and-forget. Non è l'ideale, ma ha notevolmente accelerato le operazioni.

Uno dei problemi che abbiamo riscontrato eseguendo Mongo a livello globale sono le divisioni di rete. Se un numero sufficiente di nodi viene disconnesso, le letture si fermano poiché ogni nodo diventa incerto se sia accettabile servire letture. Ci sono alcuni modi per risolvere questo, ma i casi limite possono diventare complicati. Questo non è un problema teorico - è successo abbastanza volte, causando notifiche alle 3 del mattino, da stancarci, anche cercando di regolare Mongo affinché fosse in grado di gestire l'incertezza delle elezioni del replicaset fino a un minuto di distanza. Purtroppo, le reti da Sao Paulo a Falkenstein, ad esempio, non erano molto buone tra alcuni dei nostri fornitori di hosting. Regolare il controllo della congestione e simili ha aiutato, ma non ha risolto il problema.

La soluzione ideale, supponendo che tu sia a posto con alcuni compromessi, è la capacità di accettare le scritture localmente su quel nodo (che ha hardware decente, RAID, ecc., che è improbabile che si guasti) e dire all'utente che i suoi dati sono salvati. Puoi anche, in quel punto-of-presence, avere un secondo nodo come replica calda per la durabilità.

Quindi questo è dove siamo arrivati. Oregon, Virginia, Falkenstein, Sao Paulo, Singapore, sono tutti i propri replicaset e accettano scritture. Il deployment UE (anche se solo tre PoPs) ha lo stesso comportamento.

### Come Funziona

Alcune di queste informazioni sono coperte nella sezione precedente, ma il TL;DR è che è CRDT-leggero. Abbiamo creato un proxy (in Rust, perché ovviamente) che si trova tra l'applicazione e Mongo e lo rende multi-master. Il proxy è a conoscenza dei peer, gestisce checkpoint, replicazione, monitoraggio e sincronizzazione iniziale. È un sostituto multi-master per il sistema di replicazione di Mongo, inclusi alcuni comandi DDL.

**La differenza rispetto ad altri strumenti** è che questo **non osserva l'oplog**. Osservare l'oplog, o utilizzare i flussi di modifica, non funzionerebbe, poiché mostrano solo lo stato finale dell'oggetto dopo la scrittura, rendendo impossibile gestire i conflitti. È necessario catturare
ciascuna operazione `$set`, `$inc` e replicare quella stessa operazione.

Questa è una soluzione specifica per un dominio. Non funzionerebbe per tutti i prodotti. Potresti dire che è un design guidato dal dominio :). Funziona per noi perché sin dall'inizio abbiamo fatto attenzione a `$set`are solo i campi che cambiamo nei documenti - non abbiamo mai usato `replaceOne` di Mongo, ad esempio. Lo stesso vale per i contatori. **Non** dovresti mai fare `SET VOTES = 5`. Invece, dovresti scrivere `INCREMENT VOTES BY 5`, poiché ciò consente la consistenza eventuale. I blocchi distribuiti sono gestiti da **non fare**. Solo un nodo
per cluster ha una flag impostata per eseguire i cron. Anche se questo può sembrare limitato, possiamo acquistare server con terabyte di RAM, quindi possiamo accettare questo compromesso per ridurre il rischio e la complessità.

### Leggere le Proprie Scritture

Per gli sviluppatori che usano l'API, dovresti essere in grado di leggere le tue scritture proprio come prima (effettuare una chiamata API per creare un commento, quindi elencare i commenti e vedere la nuova voce in quell'elenco). **La cautela** è che non puoi farlo tra regioni. Se il tuo backend funziona in una sola regione, come us-west, allora dovresti essere in grado di leggere le tue scritture, tranne nel caso in cui tra la tua scrittura e la tua lettura, quel nodo si guasti **e** la tua
cache DNS venga aggiornata per puntare al nodo più vicino. Purché ciò non accada, leggere le tue scritture è affidabile.

[Puoi anche fissare quale point-of-presence colpisci. Maggiori informazioni qui.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Test e La Migrazione

Circa metà del codice nel sistema è il test harness, il framework e i test. Tuttavia, il rilascio è stato un po' accidentato, richiedendo un tempo di inattività più lungo (1 ora per l'UE e 20 minuti per noi-global) di quanto desiderato, ma siamo felici di aver superato questa pietra miliare e ti ringraziamo per la tua pazienza!

### In Conclusione & Cosa Significa per Te

FastComments dovrebbe ora essere più veloce e duraturo che mai, e ora possiamo tornare a lavorare sulle funzionalità :)

Saluti!

{{/isPost}}

---