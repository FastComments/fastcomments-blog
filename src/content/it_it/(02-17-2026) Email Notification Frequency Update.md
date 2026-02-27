---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Aggiornamento sulla Frequenza delle Notifiche Email[/postlink]

{{#unless isPost}}
Gli utenti possono ora controllare con quale frequenza ricevono notifiche email per nuovi commenti e risposte, ogni minuto, resoconto orario o resoconto giornaliero, con impostazioni separate per le notifiche di risposta e quelle amministrative, oltre a sovrascritture per singola sottoscrizione.
{{/unless}}

{{#isPost}}

### Novità

Abbiamo aggiunto le impostazioni **Frequenza delle Notifiche di Risposta** e **Frequenza delle Notifiche Amministrative** che controllano con quale frequenza ricevi notifiche email per risposte e nuovi commenti, rispettivamente. Le tre opzioni per ciascuna sono:

- **Ogni minuto** - ricevi un'email non appena arrivano nuovi commenti (controllato ogni minuto).
- **Resoconto orario** - ricevi un riassunto aggregato di nuovi commenti una volta all'ora.
- **Resoconto giornaliero** - ricevi un riassunto aggregato di nuovi commenti una volta al giorno.

La Frequenza delle Notifiche di Risposta è disponibile per tutti gli utenti e predefinita su **Ogni minuto**. La Frequenza delle Notifiche Amministrative è disponibile per gli amministratori del sito e predefinita su **Resoconto orario**. Nota che le notifiche @mention vengono sempre inviate immediatamente, indipendentemente da queste impostazioni.

Puoi anche sovrascrivere la frequenza per singole sottoscrizioni nella tabella Sottoscrizioni, per un controllo più dettagliato delle singole pagine.

### Come Configurarlo

1. Vai alle tue [Impostazioni di Notifica](https://fastcomments.com/auth/my-account/edit-notifications).
2. Usa i menu a discesa **Frequenza delle Notifiche di Risposta** e **Frequenza delle Notifiche Amministrative** per impostare le tue frequenze preferite.
3. Facoltativamente, sovrascrivi la frequenza per singole sottoscrizioni nella tabella Sottoscrizioni.
4. Clicca su **Salva Modifiche**.

### Supporto API

Il campo `notificationFrequency` sull'oggetto utente controlla la frequenza delle notifiche di risposta, e il campo `adminNotificationFrequency` controlla la frequenza delle notifiche amministrative. Le sovrascritture per singola sottoscrizione possono essere impostate tramite il campo `notificationFrequency` della sottoscrizione. Vedi la [documentazione API](https://docs.fastcomments.com/guide-api.html) per i dettagli.

### In Conclusione

Questo offre agli utenti il controllo sulla propria casella di posta senza dover disiscrivere completamente dalle pagine.

Faccelo sapere qui sotto se hai dei feedback!

Saluti!

{{/isPost}}

---