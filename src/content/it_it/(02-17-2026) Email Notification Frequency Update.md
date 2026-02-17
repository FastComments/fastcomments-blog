---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Aggiornamento sulla Frequenza delle Notifiche via Email[/postlink]

{{#unless isPost}}
Gli utenti possono ora controllare con quale frequenza ricevono notifiche via email per nuovi commenti e risposte, ogni minuto, riepilogo orario o riepilogo giornaliero, con un'unica impostazione condivisa, oltre a override per singole iscrizioni.
{{/unless}}

{{#isPost}}

### Novità

Abbiamo aggiunto un'impostazione di **Frequenza delle Notifiche per Nuovi Commenti** che controlla con quale frequenza ricevi notifiche via email sia per le notifiche di risposta che per le notifiche di tenant (nuovi commenti). Le tre opzioni sono:

- **Ogni minuto** - ricevi un'email non appena arrivano nuovi commenti (controllato ogni minuto).
- **Riepilogo orario** - ricevi un riepilogo raggruppato dei nuovi commenti una volta all'ora.
- **Riepilogo giornaliero** - ricevi un riepilogo raggruppato dei nuovi commenti una volta al giorno.

Questa impostazione è disponibile sia per gli amministratori dei tenant che per i commentatori, e si applica a tutte le email di notifica dei commenti. Tieni presente che le notifiche @mention vengono sempre inviate immediatamente indipendentemente da questa impostazione.

Puoi anche sovrascrivere la frequenza per singola iscrizione nella tabella delle Iscrizioni, per un controllo più dettagliato su pagine singole.

### Come Configurarlo

1. Vai alle tue [Impostazioni Notifiche](https://fastcomments.com/auth/my-account/edit-notifications).
2. Usa il menu a discesa **Frequenza delle Notifiche per Nuovi Commenti** per impostare la frequenza preferita.
3. Facoltativamente, sovrascrivi la frequenza per singole iscrizioni nella tabella delle Iscrizioni.
4. Clicca su **Salva Modifiche**.

Il valore predefinito è **Ogni minuto**, che corrisponde al comportamento precedente.

### Supporto API

La frequenza delle notifiche è disponibile anche tramite API. L'impostazione a livello utente è il campo `notificationFrequency`, e gli override per singole iscrizioni possono essere impostati tramite il campo `notificationFrequency` dell'iscrizione. Consulta la [documentazione API](https://docs.fastcomments.com/guide-api.html) per dettagli.

### In Conclusione

Questo dà agli utenti il controllo sulla loro casella di posta senza dover disiscriversi completamente dalle pagine. Un'unica impostazione ora copre sia le notifiche di risposta che quelle di tenant, semplificando la gestione.

Facci sapere qui sotto se hai feedback!

Saluti!

{{/isPost}}

---