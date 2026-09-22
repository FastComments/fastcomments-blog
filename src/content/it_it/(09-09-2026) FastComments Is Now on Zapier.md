[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments è ora su Zapier[/postlink]

{{#unless isPost}}
Collega i tuoi commenti a migliaia di app con l'app ufficiale FastComments per Zapier. I trigger si attivano nel momento in cui viene pubblicato un commento, e qualsiasi app può creare commenti, pagine e utenti sul tuo sito.
{{/unless}}

{{#isPost}}

### Novità

Ora esiste un'app ufficiale FastComments su [Zapier](https://zapier.com). Accedi una sola volta dall'editor di Zapier e puoi inviare ogni nuovo commento a Slack, registrarli in un foglio di calcolo, aggiungere i commentatori al tuo CRM o creare commenti da una risposta di un modulo, senza scrivere alcun codice.

Prima di questo, collegare FastComments a un altro strumento significava creare un ricevitore webhook proprio o scrivere contro la REST API. Entrambe le soluzioni funzionano ancora. L'app Zapier è per i casi in cui preferisci non eseguire nulla.

### Trigger

Tre trigger, tutti istantanei:

- **New Comment** si attiva quando viene pubblicato un commento. Per impostazione predefinita, solo i commenti approvati e non spam attivano il trigger, così uno Zap che pubblica in un canale pubblico non trapela contenuti ancora in coda di moderazione. C'è una casella di controllo per includere tutto.
- **Updated Comment** si attiva quando un commento viene modificato, approvato, votato, fissato o altrimenti cambiato. Filtra sul campo approvato e diventa un trigger di "commento approvato".
- **Deleted Comment** si attiva quando un commento viene eliminato, includendo il commento completo per i tuoi registri.

Ogni trigger ha un filtro dominio opzionale che elenca i domini configurati sul tuo account, così uno Zap può monitorare un sito tra molti.

I trigger sono basati su webhook, non su polling. FastComments invia l'evento a Zapier nel momento in cui avviene, nulla interroga il tuo account in attesa, e l'attesa non costa crediti API.

### Azioni e ricerche

Actions call the FastComments API on your behalf:

- **Create Comment** su qualsiasi pagina, come commentatore nominato o come utente SSO esistente, opzionalmente come risposta.
- **Create Page**, così una pagina può essere elencata e limitata a gruppi di membri prima del suo primo commento.
- **Create SSO User**, così i membri dei tuoi altri strumenti possono commentare con la propria identità.
- **Create Feed Post** e **Create Hash Tag**.
- **Flag Comment** per la revisione del moderatore.

Le ricerche cercano elementi per i passaggi successivi: **Find Comment** per ID, **Find SSO User** per email e **Find Page** per ID URL. Abbina una ricerca con la creazione corrispondente nella modalità "find or create" di Zapier e l'utente o la pagina mancante verrà creata per te.

### Alcuni Zap per iniziare

- New Comment, poi Slack "Send Channel Message". Mappa il nome del commentatore, il commento e l'URL della pagina. Usa il filtro dominio per indirizzare ogni sito al proprio canale.
- New Comment, poi Google Sheets "Create Spreadsheet Row", con Deleted Comment che aggiunge una riga come secondo Zap. Il foglio diventa una traccia di audit.
- Updated Comment filtrato su Approved è vero, poi Gmail "Send Email" per informare l'autore che il suo commento è pubblicato.
- Typeform "New Response", poi Create Comment sulla tua pagina testimonianze con Approved deselezionato, così puoi revisionare ciascuno prima che appaia.
- WordPress "New Post", poi Create Page, così ogni post viene registrato prima del primo commento.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) contiene di più, incluso un flusso di lavoro per il provisioning di utenti SSO dal tuo strumento di membership.

### Come si collega

L'app utilizza OAuth. Quando aggiungi un passaggio FastComments, Zapier richiede la tua regione (Stati Uniti o UE), ti reindirizza a FastComments per accedere e mostra una pagina di consenso che indica l'applicazione, l'account a cui si connetterà e le autorizzazioni richieste. Nessuna chiave API viene copiata in Zapier.

La persona che approva la connessione deve essere un amministratore API sull'account. I proprietari dell'account lo hanno già e possono concederlo ad altri membri del team nella pagina Utenti.

Ogni connessione appare sotto **Integrate**, poi **Connected Apps** nella tua dashboard, contrassegnata come integrazione ufficiale, con la data dell'ultimo utilizzo. Revocarla lì disconnette Zapier immediatamente. Attivare un Zap crea una sottoscrizione webhook che puoi vedere nella pagina Webhooks con la sorgente **API**, e disattivare il Zap la rimuove.

### Quanto costa

L'app è gratuita su tutti i piani Zapier, incluso quello gratuito, e FastComments non addebita costi aggiuntivi. I trigger non consumano crediti API. Azioni e ricerche consumano gli stessi crediti di una chiamata dal tuo codice, uno per chiamata nella maggior parte dei casi.

### Documentazione

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) copre la connessione di un account, ogni trigger e azione con i relativi campi, esempi di Zap e la risoluzione dei problemi. L'integrazione stessa è open source su [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### In conclusione

Apri [fastcomments.com/zapier](https://fastcomments.com/zapier) per trovare l'app, collegare il tuo account e creare il tuo primo Zap.

Come sempre, facci sapere qui sotto se incontri qualche problema.

Saluti!

{{/isPost}}

---