---
[category:Annunci]
[category:Prestazioni]
[category:API & Sviluppo]
###### [postdate]
# [postlink]FastComments Ora È Globalmente Distribuito[/postlink]

{{#unless isPost}}
FastComments è passato a una nuova architettura per una migliore prestazione globale.
{{/unless}}

{{#isPost}}

### Cosa c'è di Nuovo

In precedenza, FastComments aveva un'architettura molto tradizionale per un'applicazione web. Avevamo i nostri server applicativi, database e altri servizi. Questo era
duplicato in due regioni (us-west ed eu). Se ti trovavi in Francia e volevi visualizzare un thread di commento per un cliente ospitato nel nostro
datacenter globale, le tue richieste dovevano andare fino a us-west per i dati dei commenti.

Non più! Ora i dati dei commenti e tutti gli asset multimediali sono replicati globalmente per i clienti nel nostro deployment globale, e per i clienti
nel nostro deployment UE abbiamo tre punti di presenza nell'UE dove i dati sono replicati. Le tue richieste vanno al nodo più vicino nell'
UE.

### Come Funzionava Prima

A parte i database che avevano diversi repliche attive nelle regioni e nei fornitori di cloud, tutti i servizi erano distribuiti su un'istanza per tipo di servizio.
Questo significava che per ogni regione avevamo un server applicativo, un server pubsub e un server multimediale. Il piano era scalare verticalmente finché potevamo
per mantenere le cose semplici. Scrivere codice era facile - sapevi sempre di poter "leggere i tuoi stessi scritti" quando accedevi al database. L'infrastruttura era facile,
ad eccezione degli aggiornamenti di sicurezza che richiedevano un minuto di inattività.

### Il Problema

Il problema è iniziato ovviamente quando abbiamo raggiunto la capacità massima. Così abbiamo ottimizzato, e poi alla fine abbiamo dovuto aumentare le dimensioni dell'istanza per quel servizio.

Questo ha iniziato a diventare costoso su Linode, dove un'istanza da $144 è all'incirca equivalente, in base ai nostri test di passmark, a un nodo OVH da $20, e anche se
avessimo cambiato fornitore di hosting avremmo avuto punti di fallimento singoli ovunque - e fornitori come OVH tendono ad avere tempi di risoluzione più lunghi rispetto a Linode
per problemi di manutenzione.

### RiR :)

Per i primi anni i servizi PubSub e Media di FastComments sono stati scritti in Java. Java è stato scelto per essere relativamente ad alte prestazioni in relazione agli sforzi
investiti, e dopo anni di ottimizzazione del GC, provando G1GC, Shenandoah e Z1, abbiamo deciso di abbandonare definitivamente Java. L'overhead di utilizzo della memoria era semplicemente troppo elevato e poiché questi
servizi erano molto stagnanti una volta completati, i benefici di Java sono svaniti. Inoltre, questi servizi tendevano a dover affrontare il problema del "thundering herd", il che significava
che la JVM stava cercando di gestire i picchi di traffico quando il JIT non era neanche ancora entrato in funzione. Questi servizi erano candidati ideali per passare a C++ o Rust.

Rust è stato scelto poiché non siamo esperti di C++ e commettere un errore nel codice di rete potrebbe esporre i dati di un cliente a un altro. Rust ci aiuta a prevenire questi tipi di problemi.

Volevamo consolidare comunque questi servizi, quindi mentre avremmo potuto fare *un'altra* passata ottimizzandoli forse con GraalVM, abbiamo deciso di passare a Rust e di finirla lì.

La migrazione non è stata priva di problemi. Questi servizi devono terminare SSL, supportare HTTP 1.1, HTTP/2, e così via. Fanno cose come gestire molti stream di dati contemporaneamente,
leggere media da una cache LRU su disco a livello edge, S3, database e comunicare in una rete mesh. L'ecosistema Java, Vertx e Netty, era molto buono per queste cose. Stiamo spingendo l'ecosistema delle librerie al suo limite, e non avendo molta esperienza con le librerie Rust abbiamo avuto
un po' di tentativi ed errori. Questo ha causato qualche inattività, e ci scusiamo per questo.

Abbiamo anche sperimentato con diversi gestori di memoria, stabilendoci su mimalloc per i nostri server DNS personalizzati e libc per il livello di trasporto. Non utilizziamo Nginx o Apache, invece
usiamo la nostra combinazione di un server DNS personalizzato che instrada i client globalmente basato su un indice in memoria ricostruito settimanalmente da Maxmind e il nostro livello di trasporto in Rust che mantiene una rete
con le altre istanze di trasporto. Il trasporto termina SSL, gestisce il lavoro del pubsub ed è il nostro CDN. Il vantaggio di questo è un minore overhead nel trasferimento dei dati tra
servizi e meno overhead/astrazione dell'infrastruttura. Lo svantaggio è la visibilità, quindi buoni metriche sono importanti.

In termini di prestazioni risultanti, i servizi Rust utilizzavano circa il 10-30% della memoria rispetto a quelli Java, nonostante tutto il nostro lavoro. Leggo libri come "Java Concurrency in Practice" per divertimento, quindi
anche se non sono un esperto so un paio di cose sulla scrittura di servizi JVM veloci, ed è stato molto più facile raggiungere questo obiettivo con Rust. Inoltre, i picchi di messaggi a un gran numero
di sottoscrittori registrerebbero a malapena l'uso della CPU mentre i servizi JVM spenderebbero il 40% del loro tempo nella GC, nonostante scrivessimo il nostro codice più simile a un motore di gioco e meno
come il tuo server tipico. Non posso dire di essere un grande fan di Rust, ma per servizi che fanno molto lavoro e non cambiano molto dopo lo sviluppo iniziale, è perfetto. La nostra logica di business principale
rimane in TypeScript.

### La Nuova Architettura

La nuova architettura non ha più nodi "pet". Invece, ogni server è un clone completo con tutti gli stessi servizi e configurazioni quasi identiche. Ognuno di essi esegue
il trasporto, DNS, il server applicativo e una copia del database. Tutti i nodi mantengono la crittografia del disco completo con sblocco automatico con Dropbear.

Ogni server esegue il trasporto di routing che termina le richieste e le gestisce come websocket, flusso http o richiesta cdn. Questi server si connettono tra di loro e ciascuno di essi fornisce una mappatura della rete globale al proprio server DNS locale per informare il DNS in tempo reale dove si trova ogni nodo attivo a livello globale.

Un vantaggio della nuova architettura è la ridondanza. Se un cliente in una regione ci colpisce davvero forte, le altre regioni rimangono attive.

Il codice applicativo ora deve essere molto consapevole di quali query possono raggiungere il nodo più vicino o quali devono andare al database primario, che potrebbe essere distante. Commettere un errore
può ridurre drasticamente le prestazioni. Questo significa anche che le scritture provenienti da alcune regioni possono essere lente, e questo richiede una sintonizzazione e ottimizzazione attenta. Seguiamo ora un modello internamente
nel codice dove tutti i metodi che accedono al database prendono un argomento readPreference, in modo che i chiamanti fino in cima debbano decidere esplicitamente come eseguire la query.

Il vantaggio è una molto buona scalabilità orizzontale per le letture. FastComments è molto orientato alla lettura, ma non dobbiamo dimenticare i nostri moderatori! I moderatori lavorano giorno e notte in tutto il mondo
e vogliamo mantenere la loro esperienza buona. Come parte di questo rollout abbiamo collaborato con alcuni di loro per garantire che gli strumenti di moderazione rimangano rapidi.

Possiamo anche selezionare l'hardware a mano, il che è divertente e gratificante. I nuovi server sono un mix di box i5-13500 e Ryzen 5 5600X, e l'UE è su alcune Xeon più vecchi. Nei nostri benchmark tutti questi
erano molto più veloci dei server più costosi che stavamo esplorando su altri fornitori. Lo svantaggio è un maggiore lavoro di configurazione, ma abbiamo automatizzato questo, insieme al monitoraggio SMART dei dischi per i guasti e così via.

Fare queste cose significa che possiamo continuare a offrire prezzi competitivi.

### Il Rollout

Il rollout negli ultimi mesi mentre riscriviamo i servizi e ci spostiamo verso nuovi fornitori di hosting è stato accidentato, vi ringraziamo per la vostra pazienza.

Nella fase di rollout iniziale le nostre metriche ci hanno mostrato un aumento delle richieste che impiegano > 100ms. Cerchiamo di non avere molte richieste che impiegano così tanto tempo per qualsiasi cosa.

<div class="text-center">
    <div class="sm">Progresso Graduale</div>
    <img src="images/slow-reqs.png" alt="Richieste Lente" title="Richieste Lente" />
</div>

Stiamo ancora facendo progressi graduali nel migliorare le prestazioni per alcune regioni. Grazie a tutti coloro che hanno fornito feedback fino ad ora.

### Considerazioni Quando Usare L'API

L'API rimane fortemente coerente - puoi leggere i tuoi stessi scritti - per mantenere la compatibilità con le versioni precedenti e mantenere le cose semplici per gli sviluppatori. Per consentire
agli sviluppatori di scegliere prestazioni rispetto alla coerenza, intendiamo esporre il parametro readPreference. Il vantaggio è che possiamo anche offrire uno sconto sui crediti per
queste chiamate API.

Tutti gli endpoint pubblici, come per servire il widget di commento pubblico, leggono sempre dal database (locale) più vicino su quel nodo.

### Perché Non Usare Semplicemente un CDN Normale

I thread di commento non sono statici, sono attivi, e applicare uno stream live sui dati statici obsoleti non funziona poiché quando visualizzi un thread come
un utente anonimo ottieni una "sessione anonima". In questa sessione anonima puoi fare cose come bloccare e segnalare altri utenti, e devi mostrare
se l'utente anonimo ha messo "mi piace" a un dato commento, e così via. I thread di commento possono anche essere bloccati dietro SSO, autenticazione o gruppi di utenti. 

Infine, il tipo di "miglioramento progressivo" in cui i dati dinamici vengono mappati ai dati statici dal CDN ti dà un'esperienza negativa in cui il contenuto salta o cambia dopo pochi secondi.
Preferiremmo non farlo.

### Chi Ha I Miei Dati Ora

I tuoi dati non sono più archiviati su Linode. Sono replicati live tra Hetzner e OVH con crittografia completa del disco, e tutta la comunicazione tra i server backend
avviene tramite TLS. Manteniamo un paio di istanze legacy di Linode per proxy webhook in uscita, ma nessun dato o media rimane memorizzato su Linode.

### In Conclusione

Come in tutti i grandi rilasci, siamo felici di poterci prendere il tempo per ottimizzare, testare e rilasciare correttamente questa modifica. FastComments dovrebbe scalare meglio e avere
una migliore uptime a lungo termine con questo lavoro. Facci sapere qui sotto se scopri eventuali problemi.

{{/isPost}}

---