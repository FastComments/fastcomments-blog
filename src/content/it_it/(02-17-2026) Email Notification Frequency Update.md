---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Aggiornamento della Frequenza delle Notifiche Email[/postlink]

{{#unless isPost}}
Gli utenti possono ora controllare con quale frequenza ricevono notifiche email per nuovi commenti e risposte — ogni minuto, sommario orario o sommario giornaliero — con un'unica impostazione condivisa, oltre a sovrascritture per singola iscrizione.
{{/unless}}

{{#isPost}}

### Novità

Abbiamo aggiunto un'impostazione di **Frequenza delle Notifiche per Nuovi Commenti** che controlla con quale frequenza ricevi le notifiche email sia per le risposte che per i nuovi commenti. Le tre opzioni sono:

- **Ogni minuto** - ricevi un'email non appena arrivano nuovi commenti (controllato ogni minuto).
- **Sommario orario** - ricevi un sommario aggregato dei nuovi commenti una volta all'ora.
- **Sommario giornaliero** - ricevi un sommario aggregato dei nuovi commenti una volta al giorno.

Questa impostazione è disponibile sia per gli amministratori dei tenant che per i commentatori, e si applica a tutte le email di notifica dei commenti. Nota che le notifiche @menzione vengono sempre inviate immediatamente, indipendentemente da questa impostazione.

Puoi anche sovrascrivere la frequenza per singola iscrizione nella tabella delle Iscrizioni, per un controllo più dettagliato sulle singole pagine.

### Come Configurarlo

1. Vai alle tue [Impostazioni Notifiche](https://fastcomments.com/auth/my-account/edit-notifications).
2. Usa il menu a discesa **Frequenza delle Notifiche per Nuovi Commenti** per impostare la tua frequenza preferita.
3. Facoltativamente, sovrascrivi la frequenza per iscrizioni individuali nella tabella delle Iscrizioni.
4. Clicca su **Salva Modifiche**.

L'impostazione predefinita è **Ogni minuto**, che corrisponde al comportamento precedente.

### Supporto API

La frequenza di notifica è disponibile anche tramite l'API. L'impostazione a livello utente è il campo <div class="code">notificationFrequency</div>, e le sovrascritture per singola iscrizione possono essere impostate tramite il campo <div class="code">notificationFrequency</div> dell'iscrizione. Consulta la [documentazione API](https://docs.fastcomments.com/guide-api.html) per dettagli.

### In Conclusione

Questo offre agli utenti il controllo sulla loro casella di posta senza dover annullare completamente l'iscrizione dalle pagine. Una singola impostazione ora copre sia le notifiche per le risposte che quelle per i nuovi commenti, rendendo più semplice la gestione.

Facci sapere qui sotto se hai feedback!

Saluti!

{{/isPost}}

---