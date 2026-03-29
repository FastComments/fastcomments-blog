---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin FastComments per Moodle[/postlink]

{{#unless isPost}}
FastComments ha ora un plugin dedicato per Moodle con SSO, commenti a thread e chat collaborativa per i tuoi corsi.
{{/unless}}

{{#isPost}}

### Novità

Siamo entusiasti di annunciare il plugin ufficiale FastComments per Moodle. Se stai utilizzando Moodle e vuoi aggiungere commenti live,
a thread o chat collaborativa ai tuoi corsi, questo plugin rende tutto semplice. Sostituisce il vecchio approccio manuale in PHP
con un vero plugin per Moodle che si installa in pochi minuti e si integra con i tuoi account utente Moodle esistenti. Il plugin funziona
con Moodle 4.1 e versioni successive, e il codice sorgente è disponibile su [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Iniziare

Per installarlo, scarica il plugin dal [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) e installalo
tramite l'installatore di plugin del tuo sito Moodle. In alternativa, puoi scaricarlo ed estrarlo in
`<moodle-root>/local/fastcomments`, quindi accedi come amministratore del sito e visita **Amministrazione del sito > Notifiche**.
Moodle rileverà il nuovo plugin e avvierà automaticamente l'installazione.

Una volta installato, vai su **Amministrazione del sito > Plugin > Plugin locali > FastComments** per configurarlo. Avrai bisogno del tuo
**Tenant ID** (trovato nel tuo dashboard FastComments) e del tuo **API Secret** se desideri utilizzare SSO Sicuro, che ti consigliamo.

### Stili di Commento

Il plugin supporta tre stili di commento, così puoi scegliere quello che funziona meglio per i tuoi studenti e per la struttura del tuo corso.

**Commenti** modalità posiziona un widget di commento completo sotto il contenuto della pagina. Gli studenti ricevono risposte a thread, @menzioni,
votazioni favorevoli e contrarie, un editor di testo arricchito e la campanella delle notifiche per iscriversi a nuovi commenti su una pagina.

<div class="text-center">
    <div class="sm">Commenti su una pagina del corso</div>
    <img src="images/moodle-course-comments.png" alt="Commenti del Corso" title="Commenti del Corso" />
</div>

**Chat Collaborativa** modalità aggiunge una barra in cima alla pagina che invita gli utenti a selezionare testo e iniziare una discussione. Il
testo evidenziato è ancorato al contenuto, quindi la conversazione rimane legata esattamente a ciò di cui si sta discutendo. Mostra anche
utenti online e il numero di discussioni attive. Questa modalità non rende un widget in fondo.

<div class="text-center">
    <div class="sm">Chat collaborativa ancorata al testo selezionato</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Collaborativa" title="Chat Collaborativa" />
</div>

**Chat Collaborativa + Commenti** ti offre entrambi contemporaneamente. Gli studenti possono evidenziare testo per discussioni inline e
usare anche il widget di commento completo sotto il contenuto. Questo è ottimo per i corsi in cui desideri sia feedback rapido inline che
discussioni più lunghe a thread.

<div class="text-center">
    <div class="sm">Entrambi gli stili di commento attivi su una pagina</div>
    <img src="images/moodle-page-comments.png" alt="Commenti della Pagina" title="Commenti della Pagina" />
</div>

### SSO Automatico

Il plugin supporta tre modalità SSO. **SSO Sicuro** è l'opzione raccomandata. Firma l'identità dell'utente lato server con
HMAC-SHA256 usando il tuo API Secret, quindi le credenziali non vengono mai esposte sul client. Con SSO Sicuro, gli amministratori di Moodle
sono automaticamente sincronizzati come moderatori di FastComments, il che significa che i tuoi amministratori del sito possono moderare i commenti senza alcuna
configurazione aggiuntiva. Gli avatar degli utenti, i nomi e gli indirizzi email sono tutti trasmessi in modo sicuro.

**SSO Semplice** trasmette i dati degli utenti (nome, email, avatar) lato client senza una firma. È veloce da configurare ma meno sicuro
rispetto all'approccio HMAC. Infine, **Nessuno** disabilita completamente SSO, quindi gli utenti commentano in forma anonima.

### Preferenze di Notifica per gli Utenti

Gli studenti possono gestire direttamente le loro impostazioni di notifica FastComments dal loro profilo Moodle. Nella sezione **FastComments**
possono attivare le notifiche di risposta (ricevere un'email quando qualcuno risponde al loro commento) e le notifiche di iscrizione
(ricevere email per le discussioni a cui si sono iscritti). Questo tiene tutto in un unico posto e dà agli studenti il controllo su quante email ricevono.

### In Conclusione

Il plugin per Moodle è disponibile ora. Per la guida completa all'installazione, dai un'occhiata alla
[Guida all'Integrazione per Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), e il codice sorgente è su
[GitHub](https://github.com/FastComments/fastcomments-moodle). Faccelo sapere qui sotto se hai dei feedback!

Saluti!

{{/isPost}}

---