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

Siamo lieti di annunciare il plugin ufficiale di FastComments per Moodle. Se hai utilizzato Moodle e volevi aggiungere commenti
in tempo reale, commenti a thread o chat collaborativa ai tuoi corsi, questo plugin lo rende semplice. Sostituisce il vecchio approccio manuale in PHP
con un vero e proprio plugin per Moodle che si installa in pochi minuti e si integra con i tuoi attuali account utenti di Moodle. Il plugin funziona
con Moodle 4.1 e versioni successive, e il codice sorgente è disponibile su [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Iniziare

Per installarlo, scarica il file ZIP dal [repository GitHub](https://github.com/FastComments/fastcomments-moodle) ed estrailo
in `<moodle-root>/local/fastcomments`. Quindi, accedi come amministratore del sito e visita **Amministrazione del Sito > Notifiche**.
Moodle rileverà il nuovo plugin e avvierà automaticamente l'installazione.

Una volta installato, vai su **Amministrazione del Sito > Plugin > Plugin Locali > FastComments** per configurarlo. Avrai bisogno del tuo
**Tenant ID** (disponibile nel tuo dashboard di FastComments) e del tuo **API Secret** se desideri utilizzare SSO Sicuro, che ti consigliamo.

Tieni presente che il download manuale da GitHub è temporaneo mentre aspettiamo che il plugin venga approvato nella directory dei plugin di Moodle. Una volta approvato, potrai installarlo direttamente dall'installer dei plugin di Moodle.

### Stili di Commento

Il plugin supporta tre stili di commento, quindi puoi scegliere quello che funziona meglio per i tuoi studenti e la struttura del corso.

**Modalità Commenti** posiziona un widget di commento completo sotto il contenuto della pagina. Gli studenti ricevono risposte a thread, @menzioni,
votazione positiva e negativa, un editor di testo ricco e la campanella di notifiche per iscriversi a nuovi commenti su una pagina.

<div class="text-center">
    <div class="sm">Commenti su una pagina del corso</div>
    <img src="images/moodle-course-comments.png" alt="Commenti del Corso" title="Commenti del Corso" />
</div>

**Modalità Collab Chat** aggiunge una barra nella parte superiore della pagina che invita gli utenti a selezionare del testo e avviare una discussione. Il
testo evidenziato è ancorato al contenuto, quindi la conversazione rimane legata esattamente a ciò di cui si sta discutendo. Mostra anche gli utenti online e il numero di discussioni attive. Questa modalità non visualizza un widget in fondo.

<div class="text-center">
    <div class="sm">Chat collaborativa ancorata al testo selezionato</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Modalità Collab Chat + Commenti** ti offre entrambe le funzionalità contemporaneamente. Gli studenti possono evidenziare il testo per discussioni inline e
utilizzare anche il widget di commento completo sotto il contenuto. Questo è ottimo per i corsi in cui desideri sia un feedback rapido inline che
discussioni più lunghe a thread.

<div class="text-center">
    <div class="sm">Entrambi gli stili di commento attivi su una pagina</div>
    <img src="images/moodle-page-comments.png" alt="Commenti della Pagina" title="Commenti della Pagina" />
</div>

### SSO Automatico

Il plugin supporta tre modalità di SSO. **SSO Sicuro** è l'opzione raccomandata. Firma l'identità dell'utente sul server con
HMAC-SHA256 utilizzando il tuo API Secret, quindi le credenziali non sono mai esposte sul client. Con SSO Sicuro, gli amministratori di Moodle sono
automaticamente sincronizzati come moderatori di FastComments, il che significa che i tuoi amministratori di sito possono moderare i commenti senza alcuna
configurazione aggiuntiva. Gli avatar degli utenti, i nomi e gli indirizzi email vengono tutti trasferiti in modo sicuro.

**SSO Semplice** passa i dati dell'utente (nome, email, avatar) lato client senza una firma. È rapido da impostare ma meno sicuro
rispetto all'approccio HMAC. Infine, **Nessuno** disabilita completamente SSO, quindi gli utenti commentano in modo anonimo.

### Preferenze di Notifica per Gli Utenti

Gli studenti possono gestire le proprie impostazioni di notifica di FastComments direttamente dal proprio profilo Moodle. Nella sezione **FastComments**
possono attivare o disattivare le notifiche di risposta (ricevere un'email quando qualcuno risponde al loro commento) e le notifiche di iscrizione
(ricevere email per i thread a cui si sono iscritti). Questo mantiene tutto in un unico posto e offre agli studenti il controllo su quante email ricevono.

### In Conclusione

Il plugin per Moodle è disponibile ora. Per la guida completa all'installazione, dai un'occhiata al
[Guida all'Integrazione di Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), e il codice sorgente è su
[GitHub](https://github.com/FastComments/fastcomments-moodle). Facci sapere qui sotto se hai qualche feedback!

Saluti!

{{/isPost}}

---