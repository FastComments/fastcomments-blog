---
[category:API & Development]
###### [postdate]
# [postlink]I Webhook arrivano su FastComments[/postlink]

{{#unless isPost}}
FastComments ora può chiamare la tua API per la creazione, l'aggiornamento e la rimozione dei commenti.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo articolo contiene gergo tecnico

#### Cosa c'è di nuovo

Con FastComments è ora possibile invocare un endpoint API ogni volta che un commento viene aggiunto, aggiornato o rimosso dal nostro sistema.

Realizziamo questo con webhook asincroni su HTTP/HTTPS.

#### Come usarlo

Prima di tutto, naviga alla <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">pagina di amministrazione Webhook</a>. Questa è accessibile tramite Gestisci Dati -> Webhooks.

Da lì puoi specificare gli endpoint per ciascun tipo di evento commento.

Per ogni tipo di evento, assicurati di fare clic su **Invia Payload di Test** per garantire che l'integrazione sia impostata correttamente. Vedi la sezione successiva, "Test", per i dettagli.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Esempio di configurazione Webhooks" title="Esempio di configurazione Webhooks" class="lozad" />
</div>

#### Test

Nella <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">pagina di amministrazione Webhook</a> ci sono pulsanti "Invia Payload di Test" per ogni tipo di evento (Crea, Aggiorna, Elimina). Gli eventi Crea e Aggiorna inviano un oggetto WebhookComment fittizio, mentre il test di Elimina invierà un corpo della richiesta fittizio con solo un ID.

Il test effettuerà due chiamate per verificare il codice di risposta per i scenari "felici" (API Key corretta) e "tristi" (API key non valida).

Quando il test invia una chiave API non valida dovrebbe restituire un codice di stato di 401 affinché il test sia completamente superato. Se non controlli correttamente il valore del token, vedrai un errore come:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Errore di autenticazione Webhooks" title="Errore di autenticazione Webhooks" class="lozad" />
</div>

#### La struttura dell'oggetto Commento
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### La struttura dell'evento "Crea"

Il corpo della richiesta dell'evento "crea" è un oggetto WebhookComment.

#### La struttura dell'evento "Aggiorna"

Il corpo della richiesta dell'evento "aggiorna" è un oggetto WebhookComment.

#### La struttura dell'evento "Elimina"

Il corpo della richiesta dell'evento "elimina" è un oggetto WebhookComment, **ma contenente solo l'id**.

#### Perché Create e Update usano entrambi HTTP PUT e non POST?

**Poiché tutte le nostre richieste contengono un ID**, ripetere la stessa richiesta di Creazione o Aggiornamento **non dovrebbe creare nuovi oggetti dalla tua parte**. Questo significa che queste chiamate sono idempotenti e dovrebbero essere eventi PUT secondo la specifica HTTP.

#### Come funziona

Tutte le modifiche all'oggetto Commento nel sistema attivano un evento che finisce in una coda. Puoi monitorare questa coda nella <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">pagina di amministrazione Webhook</a> nel caso in cui la tua API vada giù. Se una richiesta alla tua API fallisce, la inseriremo di nuovo in coda secondo un programma. Quel programma è di 1 minuto * il conteggio dei tentativi. Se la chiamata fallisce una volta, riproverà dopo un minuto. Se fallisce due volte, aspetterà due minuti, e così via. 
Questo è per evitare di sovraccaricare la tua API se hai problemi di carico.

#### Sicurezza & Token API

Nell'intestazione della richiesta passeremo il tuo <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> nel parametro chiamato "token".

Se non controlli correttamente questo parametro, la tua integrazione non sarà contrassegnata come Verificata. Questo è un sistema di protezione per garantire che tutte le integrazioni con FastComments siano sicure.

#### In conclusione

Speriamo che tu trovi l'integrazione Webhook di FastComments facile da comprendere e veloce da impostare.

Se hai ulteriori domande, sentiti libero di contattare la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">pagina di supporto clienti</a>.

Saluti!

{{/isPost}}