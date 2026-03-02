---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin FastComments per Moodle[/postlink]

{{#unless isPost}}
FastComments ha ora un plugin dedicato per Moodle con SSO, commenti in thread e chat collaborativa per i tuoi corsi.
{{/unless}}

{{#isPost}}

### Novità

Siamo entusiasti di annunciare il plugin ufficiale FastComments per Moodle. Se stai utilizzando Moodle e vuoi aggiungere commenti live,
in thread o chat collaborativa ai tuoi corsi, questo plugin rende tutto semplice. Sostituisce il vecchio approccio manuale in PHP
con un vero e proprio plugin per Moodle che si installa in pochi minuti e si integra con i tuoi account utente Moodle esistenti. Il plugin funziona
con Moodle 4.1 e versioni successive, e il codice sorgente è disponibile su [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Iniziare

Per installare, scarica lo ZIP dal [repository GitHub](https://github.com/FastComments/fastcomments-moodle) ed estrailo
in `<moodle-root>/local/fastcomments`. Quindi accedi come amministratore del sito e visita **Amministrazione del sito > Notifiche**.
Moodle rileverà il nuovo plugin e installerà automaticamente.

Una volta installato, vai a **Amministrazione del sito > Plugin > Plugin locali > FastComments** per configurare. Avrai bisogno del tuo
**Tenant ID** (trovato nel tuo dashboard di FastComments) e del tuo **API Secret** se desideri utilizzare SSO sicuro, che ti consigliamo.

Nota che il download manuale da GitHub è temporaneo mentre aspettiamo che il plugin venga approvato nella directory dei plugin di Moodle. Una volta approvato, sarai in grado di installarlo direttamente dal gestore dei plugin di Moodle.

### Stili di Commento

Il plugin supporta tre stili di commento, così puoi scegliere quello che funziona meglio per i tuoi studenti e la struttura del corso.

**Modalità Commenti** posiziona un widget di commento completo sotto il contenuto della pagina. Gli studenti possono ricevere risposte in thread, @menzioni,
votazioni positive e negative, un editor di testo avanzato e la campanella di notifica per iscriversi ai nuovi commenti su una pagina.

<div class="text-center">
    <div class="sm">Commenti su una pagina di corso</div>
    <img src="images/moodle-course-comments.png" alt="Commenti del Corso" title="Commenti del Corso" />
</div>

**Modalità Chat Collaborativa** aggiunge una barra nella parte superiore della pagina che invita gli utenti a selezionare del testo e avviare una discussione. Il
testo evidenziato è ancorato al contenuto, quindi la conversazione rimane legata esattamente a ciò di cui si parla. Mostra anche gli utenti online e il numero di discussioni attive. Questa modalità non presenta un widget inferiore.

<div class="text-center">
    <div class="sm">Chat collaborativa ancorata al testo selezionato</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Collaborativa" title="Chat Collaborativa" />
</div>

**Modalità Chat Collaborativa + Commenti** ti offre entrambe le funzionalità contemporaneamente. Gli studenti possono evidenziare testo per discussioni in linea e utilizzare anche il widget di commento completo sotto il contenuto. Questo è ottimo per i corsi in cui desideri sia un feedback rapido in linea che conversazioni più lunghe in thread.

<div class="text-center">
    <div class="sm">Entrambi gli stili di commento attivi su una pagina</div>
    <img src="images/moodle-page-comments.png" alt="Commenti della Pagina" title="Commenti della Pagina" />
</div>

### SSO Che Funziona

Il plugin supporta tre modalità SSO. **SSO Sicuro** è l'opzione consigliata. Firma l'identità dell'utente lato server con
HMAC-SHA256 utilizzando il tuo API Secret, quindi le credenziali non vengono mai esposte sul client. Con SSO Sicuro, gli amministratori di Moodle sono
automaticamente sincronizzati come moderatori di FastComments, il che significa che i tuoi amministratori di sito possono moderare commenti senza alcuna
configurazione aggiuntiva. Gli avatar utente, i nomi e gli indirizzi email sono tutti trasmessi in modo sicuro.

**SSO Semplice** trasmette i dati utente (nome, email, avatar) lato client senza una firma. È rapido da configurare ma meno sicuro
rispetto all'approccio HMAC. Infine, **Nessuno** disabilita completamente SSO, quindi gli utenti commentano in modo anonimo.

### Preferenze di Notifica Utente

Gli studenti possono gestire direttamente le impostazioni di notifica di FastComments dal loro profilo Moodle. Nella sezione **FastComments**
possono attivare le notifiche di risposta (ricevere un'email quando qualcuno risponde al loro commento) e le notifiche di iscrizione
(ricevere email per i thread a cui si sono iscritti). Questo mantiene tutto in un unico posto e dà agli studenti il controllo sulla quantità di email che ricevono.

### In Conclusione

Il plugin per Moodle è disponibile ora. Per la guida completa all'installazione, dai un'occhiata alla
[Guida all'Integrazione Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), e il codice sorgente è su
[GitHub](https://github.com/FastComments/fastcomments-moodle). Faccelo sapere qui sotto se hai feedback!

Saluti!

{{/isPost}}

---