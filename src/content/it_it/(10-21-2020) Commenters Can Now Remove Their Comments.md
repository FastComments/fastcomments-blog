---
[category:Features]
###### [postdate]
# [postlink]I Commentatori Possono Ora Rimuovere I Loro Commenti[/postlink]

{{#unless isPost}}
Un aggiornamento molto atteso, ora puoi eliminare i tuoi commenti lasciati con FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Terminologia Tecnica

#### Cosa c'è di Nuovo

Come annunciato di recente - i commenti lasciati con FastComments possono ora essere modificati - che tu sia loggato o meno.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demo di Eliminazione"></video>

Come seguito, è stata rilasciata la possibilità di eliminare i tuoi commenti. Comprensibilmente, proprio come la modifica dei commenti, è stata una delle funzionalità più richieste, e siamo felici di raggiungere questo traguardo con la nostra base utenti.

#### Come Funziona

La rimozione dei commenti funziona allo stesso modo della modifica - gli utenti loggati possono sempre modificare ed eliminare i loro commenti. Per i commentatori anonimi, i nostri server offrono una finestra temporanea di 24 ore per modificare o eliminare il loro commento dopo
aver commentato, a condizione che non chiudano il browser. Ad esempio, questo significa che un commentatore anonimo può commentare e poi modificare il proprio commento per correggere eventuali errori di battitura, o eliminarlo, senza mai effettuare il login!

Se il commentatore anonimo chiude il browser, non sarà in grado di modificare o eliminare il proprio commento a meno che non clicchi sul link magico inviato alla loro email.

Per una maggiore sicurezza, la chiave temporanea di modifica sarà annullata ad ogni tentativo di indovinare la chiave in modo errato.

#### Perché Ora, dopo così Tanto Tempo?

La motivazione di questo è la stessa per cui la modifica ha impiegato così tanto tempo per essere rilasciata. Volevamo assicurarci che non diminuisse le prestazioni di FastComments e volevamo garantire che funzionasse correttamente con le nostre funzionalità di commenting dal vivo. Inoltre, volevamo che la funzionalità
accomodasse il caso d'uso più comune dei nostri clienti - il commento anonimo.

#### Eliminazione di Commenti Live

Proprio come commentare e votare - l'eliminazione avviene in tempo reale. Se due utenti sono sulla stessa pagina e un utente elimina il proprio commento, l'altro utente vedrà il commento rimosso.

#### Abilitazione della Rimozione dei Commenti

Abbiamo terminato il rollout della modifica e dell'eliminazione dei commenti di default per tutti i nostri clienti. Attualmente, non può essere disattivato.

#### Integrazioni di Terze Parti

Eliminare un commento causerà la propagazione dell'evento a qualsiasi integrazione tu abbia - come WordPress. Se utilizzi il nostro plugin di WordPress, allora aggiungere un commento aggiorna
la tua installazione di WordPress in background in modo da mantenere una copia dei tuoi dati. Se rimuovi commenti, seguiamo la stessa logica e li rimuoviamo dalla tua installazione di WordPress. Questo si applica ad altre integrazioni, non solo a WordPress.

#### In Conclusione

Sappiamo che questa funzionalità è stata a lungo attesa da alcuni. Come tutte le principali release, siamo contenti di aver potuto dedicare il tempo necessario per ottimizzare, testare e rilasciare correttamente questa funzionalità.

Saluti!

{{/isPost}}