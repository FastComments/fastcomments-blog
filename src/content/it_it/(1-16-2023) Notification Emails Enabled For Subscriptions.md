---
[category:Features]
###### [postdate]
# [postlink]Email di Notifica Abilitate per le Sottoscrizioni[/postlink]

{{#unless isPost}}
FastComments ora invia email agli utenti per le pagine a cui sono iscritti.
{{/unless}}

{{#isPost}}

### Cosa c'è di Nuovo

Con FastComments gli utenti possono cliccare sull'icona a forma di campana su un widget dei commenti per iscriversi a quella pagina. Li notificheremo
quando vengono lasciati nuovi commenti su quella pagina, o quando c'è un nuovo commento in un thread di risposta di cui fanno parte.

Lo abbiamo fatto per anni, tuttavia non inviavamo email per queste notifiche - erano visibili solo nella nostra dashboard.

Ora invieremo email per queste notifiche.

### Nuovi Tipi di Email

Ora inviamo due nuovi tipi di email. Il primo è quando hai solo un paio di notifiche. Elencheremo semplicemente
i nuovi commenti nell'email per te.

Il secondo tipo di email che riceverai contiene collegamenti a ciascuna pagina per cui hai ricevuto notifiche. Questo viene inviato
quando ricevi molte notifiche.

Queste email di notifica sono solo per i nuovi commenti sulle pagine a cui sei iscritto.

### Programma di Notifica via Email

Le email di notifica vengono inviate ogni ora per prevenire email eccessive. L'eccezione è se la pagina in questione ha più di diecimila
commenti, nel qual caso invieremo notifiche per quella pagina solo una volta al giorno.

### Per i Proprietari del Sito - Personalizzazione delle Email

Un nuovo modello di email `Nuovi Commenti di Sottoscrizione` sarà presto disponibile per la personalizzazione.

### Per gli Sviluppatori & Problemi Noti

Per gli utenti SSO, non invieremo le email di notifica per impostazione predefinita. Dovrai passare un nuovo flag: `optedInSubscriptionNotifications: true` nell'oggetto utente, o
nel payload del widget dei commenti, per abilitare queste nuove notifiche.

### In Conclusione

Come per tutti i grandi rilasci, siamo lieti di aver potuto prendere il tempo per ottimizzare, testare e rilasciare correttamente questa funzionalità. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---