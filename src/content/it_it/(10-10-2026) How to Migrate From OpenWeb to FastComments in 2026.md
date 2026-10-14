[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Come migrare da OpenWeb a FastComments nel 2026[/postlink]

{{#unless isPost}}
Una guida funzionalità per funzionalità per gli editori che passano da OpenWeb (ex Spot.IM): cosa corrisponde 1:1, cosa è diverso, come funziona l'importazione CSV, come cambia la stretta di mano SSO, e un piano di cutover passo‑passo.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo articolo contiene gergo tecnico

Questa guida è per responsabili di prodotto e ingegneria e community manager che gestiscono OpenWeb oggi e hanno bisogno di un piano di migrazione. Analizza ogni superficie di OpenWeb, indica l'equivalente FastComments e specifica chiaramente dove non esiste una corrispondenza 1:1.

### Perché ora

Il 30 settembre 2026 il Tribunale Distrettuale di Tel Aviv ha ordinato la nomina di un curatore temporaneo su OpenWeb su richiesta del suo creditore, Mars Growth Capital, che detiene un privilegio di primo rango sui beni e sui conti della società e sta cercando di farlo valere contro i beni israeliani di OpenWeb, i conti bancari e la proprietà intellettuale (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30 set</a>). Un fiduciario temporaneo, l’avv. Ehud Gindes, è stato nominato il giorno successivo (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4 ott</a>). All’inizio del 2026 Microsoft, uno dei più grandi clienti di OpenWeb, ha interrotto il suo impegno e ha trattenuto pagamenti a causa di una disputa sul traffico che OpenWeb respinge (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28 set</a>).

OpenWeb afferma che la piattaforma continua a funzionare. La supervisione giudiziaria, un creditore che fa valere privilegi sulla proprietà intellettuale da cui dipende il tuo widget di commenti, e un fiduciario il cui compito è preservare il valore degli asset non sono condizioni desiderabili per un editore su una superficie di coinvolgimento centrale. Se non hai ancora effettuato un’esportazione completa dei dati, fallo subito, oggi, prima di qualsiasi altra cosa in questa guida.

### Cosa ti serve prima di iniziare

Raccogli questi elementi prima di toccare il codice:

- **La tua esportazione dei commenti OpenWeb.** OpenWeb espone un’Export API (v4) che produce file CSV compressi, al massimo 100.000 commenti per file, con finestre di intervallo di data fino a un mese e link di download che scadono dopo una settimana (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Richiedi tutte le finestre di cui hai bisogno e conserva i file in un luogo sicuro. Se il tuo contatto OpenWeb ti ha fornito in passato un’esportazione CSV dal pannello di amministrazione, conserva anche quella. L’importatore FastComments legge il CSV di OpenWeb con colonne come `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` e `url`.
- **Il tuo Spot ID e l’elenco degli ID dei post.** Ogni `data-post-id` che passi al launcher diventa un URL ID FastComments. Se gli ID dei tuoi post sono gli ID degli articoli CMS, annota come vengono generati così da poter emettere gli stessi valori sul lato FastComments.
- **La tua lista utenti SSO.** In particolare i valori `primary_key` e `user_name` che hai registrato con OpenWeb. L’autore del commento viene abbinato al nome utente durante l’importazione, quindi devi passare gli stessi username nel payload SSO di FastComments.
- **La tua lista di moderatori e i ruoli.** Account admin, moderatore e giornalista, e le sezioni che ciascuno modera.
- **La tua configurazione di moderazione.** Politica a livello di sito (approva tutti, pubblica e modera, richiedi approvazione), override per articolo, lista di parole restritte, utenti silenziati e bannati.
- **CSS personalizzato e impostazioni del tema.** Esporta tutto ciò che hai nel pannello di amministrazione così da poterlo ricostruire nella pagina di personalizzazione del widget FastComments.
- **Dove vive il launcher nei tuoi template**, incluse le pagine che eseguono Reactions, Topic Tracker, Spotlight, la Notification Bell o un Ad Standalone senza Conversazione.

### Migrazione assistita da IA

FastComments fornisce un [LLM Kit e server MCP per velocizzare la migrazione](https://docs.fastcomments.com/guide-llm-kit.html).

### Come gli ID dei post OpenWeb si mappano agli URL ID FastComments

FastComments collega un thread di commenti a un `urlId`. Per impostazione predefinita l’URL ID è l’URL della pagina pulita, ma puoi impostarlo a qualsiasi stringa, ed è esattamente quello che fa l’importatore OpenWeb: legge la colonna `post_id` e la usa come URL ID FastComments per ogni commento di quell’articolo. Memorizza anche la colonna `url` come URL di visualizzazione così i link di moderazione e le email di notifica puntano alla pagina corretta.

Quindi la regola per i tuoi template è: ovunque tu abbia passato `data-post-id="POST_ID"` e `data-post-url="ARTICLE_URL"` a OpenWeb, passa `urlId: 'POST_ID'` e `url: 'ARTICLE_URL'` a FastComments. I thread importati si allineano con i thread live senza reindirizzamenti e senza riscrittura URL. Vedi <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">la documentazione sugli URL ID</a>.

Se preferisci chiavare i thread per URL in futuro invece che per ID post, importa prima e poi usa lo strumento Migrate Comments sotto Manage Data per spostare i thread dall’ID post all’URL in blocco.

### La mappa delle funzionalità

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Note |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live by default. New comments collapse behind a "Show N New Comments" button, or appear instantly with `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Import preserves `likes_count` and `dislikes_count`. Heart style and "disable voting" are config options. |
| Reactions (article-level icons) | Page Reacts | Configurable icon set on the page, remembered per user. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` caps nesting. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` sets the default per site or per URL pattern. |
| User profiles | User profiles | Avatar, bio, badges, karma, activity, DMs. Works for SSO users. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Set in the SSO payload. No backend lookup call needed. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderators pin from the widget or dashboard. An AI agent template pins top-voted comments. |
| In Conversation Polls | Polls on comments | 2 to 10 options, close dates, privacy modes, creator restrictions. |
| Ask Me Anything formats | No dedicated product | Run as a thread with the author's SSO user labeled and the question pinned. |
| Live Blog | No 1:1 equivalent | Live Chat widget and chat-mode comments exist. Editorial live blogging stays in your CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Users follow a page, not a topic or author. No cross-article follow. |
| Notification Bell | Notification bell in the widget | Replies, mentions, thread activity, votes, subscriptions, badges, DMs. |
| Email notifications | Email notifications with templates | Per-user opt-in via SSO flags. Custom templates, branded sender. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | No register-user call. Sign a payload server-side, pass it to the widget. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Same payload. Your backend signs it once the user is logged in. |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | Readers log in with an email link. No passwords. |
| Moderation policy per article | Customization rules per URL ID pattern | Approval mode, spam filter and more vary by `*/section/*` patterns. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | Agents start in dry run and can require human approval. |
| Restricted words | Word blacklist customizable by locale | ~450 default phrases, editable. |
| User muting | Block User | Per-reader block from the comment menu. |
| Bans | Bans | Permanent, timed, shadow, IP-hashed, plus-alias aware. |
| Moderation Panel | Moderate Comments dashboard | Filters, bulk actions with undo, moderation groups, digest emails with one-click approve. |
| Notification Webhook | Webhooks | Comment created, updated, deleted. No per-user notification webhook. |
| Engagement dashboard | Analytics | Live users online, top pages, page loads, comments, votes, accounts by day. No ad revenue reporting. |
| In-conversation ads, Standalone Ad | None | FastComments runs no ads. You keep your own ad stack around the widget. |
| Social Reviews (star ratings) | Ratings and Reviews | Separate product on the same account. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Recirculation driven by comment activity. |
| Comment Counter | Comment count widgets | Single and bulk. |
| Export Comments API | CSV export, API, webhooks | Export from the dashboard any time. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com keeps data in the EU. DPA available. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, live updates, threading, moderation actions. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` and `destroy()` for SPAs. |

</div>

Il resto di questa sezione analizza ogni gruppo in dettaglio.

### Conversation, Votes and Reactions

La Conversation di OpenWeb è un thread in tempo reale. Il widget di commenti FastComments lo è altrettanto: commenti, modifiche, cancellazioni, voti e azioni di moderazione vengono spinti a tutti gli utenti che visualizzano il thread (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Per impostazione predefinita i nuovi commenti di altri utenti appaiono dietro un pulsante "Show 2 New Comments" così la pagina non salta sotto il lettore. Per eventi live imposta `showLiveRightAway` così vengono renderizzati immediatamente, e `newCommentsToBottom` se vuoi che fluiscano verso il basso come una chat.

I like e i dislike diventano voti su e giù. L’importatore conserva entrambi i conteggi per commento. Se la tua community è abituata a un singolo like, passa lo stile di voto a cuori nella pagina di personalizzazione del widget. Il voto può anche essere disattivato del tutto.

Le Reactions di OpenWeb sono un widget separato con due‑quattro icone etichettate sull’articolo (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). L’equivalente FastComments è Page Reacts: un set configurabile di immagini di reazione allegato al widget di commenti, ricordato per pagina e per utente (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). I conteggi delle reazioni non fanno parte dell’esportazione dei commenti OpenWeb, quindi partono da zero.

Il sorting si mappa direttamente. I valori `data-sort-by` di OpenWeb best, newest e oldest corrispondono a Most Relevant, Newest First e Oldest First. Imposta il valore predefinito con `defaultSortDirection` (`MR`, `NF`, `OF`) nel codice o in una regola di personalizzazione. I lettori possono cambiare nel widget.

`data-read-only="true"` diventa `readonly: true`, che blocca nuovi commenti, voti, modifiche e cancellazioni. `data-post-staleness-days` non ha un equivalente diretto, ma una regola di personalizzazione può applicare `readonly` a un pattern di URL ID, e puoi anche attivarla dai template in base all’età dell’articolo. `data-messages-count` è la dimensione della pagina, impostata nella pagina di personalizzazione del widget da 10 a 200 commenti.

### Replies and Threading

FastComments supporta annidamento illimitato per impostazione predefinita; `maxReplyDepth` lo limita (`1` fornisce una struttura piatta a due livelli). Il CSV di OpenWeb include le colonne `parent_id` e `parent_comment_id`. L’importatore legge `parent_comment_id` e ricostruisce l’albero di risposta a piena profondità, così una risposta a una risposta rimane annidata sotto il suo genitore diretto, con autore, timestamp, voti, conteggio segnalazioni e stato di approvazione intatti. Le risposte sono collegate anche quando appaiono prima del loro genitore nel file, o quando il genitore è stato importato da una finestra di esportazione precedente. Una risposta il cui genitore manca da tutte le esportazioni diventa un commento di livello superiore. L’ID del messaggio OpenWeb è memorizzato su ogni commento, così una re‑importazione di un’importazione piatta più vecchia lo inserisce al posto giusto.

### User Profiles and Badges

Gli utenti FastComments, inclusi gli utenti SSO, ottengono un profilo con avatar, nome visualizzato, bio, link social, badge, karma, conteggio commenti, feed di attività pubblico e messaggi diretti (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Ognuna delle superfici di attività, commenti del profilo e DM può essere disabilitata per utente nel payload SSO o globalmente nella configurazione.

Il Badge Autore di OpenWeb richiede di chiamare `GET /sso/v1/user/{primary_key}` per l’autore e inserire l’ID restituito in `data-author-id`. In FastComments imposti `displayLabel: 'Author'` (o qualsiasi etichetta fino a 100 caratteri) nel payload SSO dell’utente, e `isAdmin` o `isModerator` per lo staff. L’etichetta viene mostrata accanto al nome su ogni commento. Per un sistema più ricco, configura i badge sotto Customize, Badges: badge immagine o testo, assegnati automaticamente su soglie (conteggio commenti, voti positivi, commenti pinnati, status veterano, velocità di risposta) o manualmente, e assegnabili dal payload SSO con `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Qualsiasi moderatore può Pin o Unpin un commento dal menu del commento nel widget o dal dashboard di moderazione. I commenti pinnati vengono spinti in tempo reale a tutti gli utenti del thread. Se vuoi automatizzare, la funzionalità AI Agents fornisce un template Top Comment Pinner che fissa un commento di livello superiore una volta superata una soglia di voti (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

I Polls In Conversation di OpenWeb consentono allo staff di allegare un sondaggio da 2 a 4 opzioni a un commento di livello superiore. I poll di FastComments si allegano anch’essi a un commento, con 2‑10 opzioni, data di chiusura opzionale, privacy dei risultati (anonimo, solo admin, tutti) e modalità "vota per vedere i risultati". Puoi scegliere chi può creare poll (disabilitato, admin e moderatori, tutti) e se i lettori anonimi possono votare. I poll sono anche esposti nell’API pubblica per crearli dal tuo CMS.

OpenWeb ha gestito formati Ask Me Anything sulla sua piattaforma. FastComments non ha un prodotto Q&A dedicato. La sostituzione pratica è un thread normale su un URL ID dedicato: l’utente SSO dell’ospite porta un `displayLabel`, fissi il commento introduttivo, i lettori chiedono nei commenti di livello superiore, l’ospite risponde in thread, e le notifiche di menzione e risposta riportano le persone. Imposta `noNewRootComments` dopo la chiusura della finestra così solo le risposte continuano.

Il Community Spotlight (raccolta email, contatore e schede di reindirizzamento di OpenWeb) non ha equivalente. Il widget supporta HTML di intestazione personalizzato sopra l’input del commento tramite `headerHTML`, che copre una call to action ma non un modulo di cattura email.

### Live Blog

Non esiste un Live Blog FastComments. Il Live Blog di OpenWeb è un prodotto editoriale: i reporter assegnati nel pannello di amministrazione pubblicano aggiornamenti con link incorporati, tweet e video, e i lettori seguono (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Ciò che FastComments offre per la copertura live è il lato lettore: un widget Live Chat (`embed-live-chat.min.js`) per lo streaming di chat, e il widget di commenti in modalità chat (`showLiveRightAway` più `newCommentsToBottom`) accanto alla tua copertura live. Per gli aggiornamenti editoriali stessi, gli editori che lasciano OpenWeb li mantengono nel loro CMS o in uno strumento di live blog dedicato e incorporano FastComments sotto per la discussione. Gli embed multimediali (YouTube, SoundCloud e altri) sono supportati nei commenti, così gli aggiornamenti dello staff pubblicati come commenti includono media ricchi.

### Topic Tracker, Notifications and Email

Il Topic Tracker di OpenWeb consente a un lettore di seguire argomenti e autori derivati dai metadati della pagina e di essere notificato quando nuovi articoli corrispondono (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments non ha follow di argomenti o autori tra articoli. I lettori si iscrivono a una pagina dalla Notification Bell e ricevono aggiornamenti per quel thread, con frequenza scelta per iscrizione: ogni minuto, digest oraria o digest giornaliera. Se il follow cross‑article è importante per i tuoi numeri di retention, faccelo sapere perché questa funzionalità è nella nostra roadmap.

Tutto il resto nella Notification Bell si mappa. Il widget ha una campanella che diventa rossa con il conteggio non letto e elenca: risposte a te, risposte in un thread in cui hai commentato, menzioni, voti positivi sui tuoi commenti, attività su pagine iscritte, premi badge e messaggi diretti (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Le notifiche in‑app sono in tempo reale via WebSocket. Le email di risposta e menzione vengono inviate ogni minuto solo per commenti approvati.

Per gli utenti SSO, passa `optedInNotifications` e `optedInSubscriptionNotifications` nel payload e FastComments aggiorna le loro preferenze al prossimo caricamento della pagina. Le email necessitano di un indirizzo email nel payload. I template email sono modificabili per tipo e per lingua sotto Customize, Email Templates, e l’invio dal tuo dominio con DKIM è supportato. I moderatori e gli admin ricevono un digest giornaliero, settimanale o mensile con approvazione con un click, risposta e link spam.

Il Notification Webhook di OpenWeb invia eventi di notifica per utente (`replied-message`, `liked-message`, `topic-by-keyword` ecc.) al tuo endpoint. I webhook FastComments coprono la risorsa commento: creato, aggiornato e rimosso, con tutti gli endpoint di sottoscrizione che desideri (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Se usavi il webhook di notifica per alimentare il tuo sistema email, ricostruirai quella logica sugli eventi commento, o lascerai FastComments inviare le email.

### SSO: From codeA/codeB to a Signed Payload

La stretta di mano di OpenWeb ha sei passaggi: attendi `spot-im-api-ready`, OpenWeb genera `codeA`, il tuo client lo invia al backend, il backend conferma l’utente e chiama `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb restituisce `codeB`, e il tuo client restituisce `codeB` a OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Il logout chiama `window.SPOTIM.logout()`.

FastComments Secure SSO non ha round‑trip e non richiede un nuovo endpoint da parte tua. Quando renderizzi la pagina per un utente loggato, il tuo backend serializza l’utente, lo codifica in Base64 e lo firma con HMAC‑SHA256 usando il tuo segreto API. Il widget invia il payload con le sue richieste e FastComments verifica la firma (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). In Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

Il timestamp è in millisecondi epoch e viene rifiutato se più vecchio di due giorni. Per un lettore non loggato, ometti i tre campi firmati e passa solo `loginURL` (o una funzione `loginCallback`) e il widget mostra un prompt di login invece del compositore. Esempi completi funzionanti in Node, Java e PHP sono nel <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repository di esempi di codice</a>.

Gli utenti vengono creati al primo caricamento della pagina. Non registri in blocco nessuno. Poiché l’importatore OpenWeb abbina gli autori dei commenti per `user_name`, un utente il cui payload SSO porta lo stesso `username` rivendica i suoi commenti importati al primo caricamento di un thread e può modificarli o cancellarli da quel momento. Esiste anche un’API utente SSO se vuoi pre‑creare gli utenti.

Ogni volta che il payload viene inviato, FastComments aggiorna il record utente da esso, così un nome visualizzato o avatar modificato dal tuo lato si propaga al prossimo visualizzatore della pagina. Imposta un campo a `null` per cancellarlo.

Se hai usato l’S SSO di terze parti di OpenWeb con Auth0, Gigya o Piano via `window.SPOTIM.startSSOForProvider`, il flusso FastComments è lo stesso: una volta che il tuo provider ha autenticato l’utente, il tuo backend costruisce e firma il payload. Non c’è integrazione specifica del provider da configurare su FastComments.

Due altre opzioni esistono. Simple SSO passa l’oggetto utente non firmato dal client, per piattaforme senza backend, e segna l’attività come verificata quando è presente un’ una email (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 firma il tuo staff nella dashboard FastComments stessa tramite Okta, Azure AD o ADFS, con mappatura ruoli, ed è disponibile nei piani enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

L’API di Moderazione per articolo di OpenWeb ha quattro valori: `spot_policy`, `approve_all`, `publish_and_moderate` e `require_approval`. FastComments configura gli stessi comportamenti in Moderation Settings: approvazione automatica attiva o disattiva, approvazione richiesta solo per il primo commento di un utente, e auto‑approvazione solo per commenti verificati (loggati o SSO). Le regole si applicano a livello di sito o a un pattern di URL ID come `*/politics/*`, che è come riprodurre la politica per sezione. Ogni commento, approvato o no, arriva nella dashboard Moderate Comments, così il modello pubblica‑poi‑revisiona è la vista predefinita lì (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

L’importazione porta lo stato di moderazione. `message_status` di OpenWeb con valore `approved` viene importato come approvato e revisionato; `rejected` come spam e revisionato; qualsiasi altro valore viene importato non approvato e non revisionato così appare nella tua coda di moderazione. `reports_count` diventa il conteggio di segnalazioni del commento.

La moderazione automatica su FastComments è stratificata anziché un unico sistema come Aida:

- Un classificatore spam, addestrato continuamente, disponibile come modello condiviso tra tutti i tenant o isolato per il tuo tenant, con fattore di fiducia che rilassa il filtraggio per utenti di lunga data o spesso pinnati.
- Un controllo spam opzionale LLM su fatturazione Flex (modelli a peso aperto come GLM-5.3 disponibili)
- Moderazione contenuti immagine a bassa, media o alta sensibilità per immagini caricate.
- Una blacklist di parole localizzata di circa 450 frasi predefinite, modificabile, che maschera le corrispondenze con asterischi. Qui vanno le tue parole restritte di OpenWeb.
- Soglie di segnalazione che nascondono automaticamente un commento dopo N segnalazioni.
- Prevenzione di messaggi ripetuti e quasi‑duplicati, sempre attiva.
- AI Agents: agenti basati su eventi con una whitelist esplicita di strumenti (segnala spam, approva, blocca, fissa, avvisa via DM, banna, assegna badge, risponde). Ogni agente parte in dry run, gli strumenti sensibili possono essere soggetti a approvazione umana, e ogni azione è registrata con una giustificazione e un punteggio di confidenza.

L’API di Muting Utente di OpenWeb consente a un lettore SSO di silenziare un altro. L’equivalente FastComments è Block User nel menu del commento, disponibile per qualsiasi lettore loggato. I ban sono un’azione di moderatore: permanente o per durata impostata, opzionalmente un ban ombra (l’utente vede il proprio commento ma nessun altro), opzionalmente per IP hash, con plus‑alias di una email trattata come un unico indirizzo. L’elenco degli utenti bannati è ricercabile per email, nome, moderatore e commento che ha generato il ban.

Il dashboard Moderate Comments supporta filtri (necessita revisione, necessita approvazione, spam, segnalato, da utenti bannati) e ricerca testuale, azioni di massa con annullamento e pausa, “seleziona tutti corrispondenti” per code molto grandi, gruppi di moderazione così la tua redazione sportiva vede solo i thread sportivi, log per commento che mostrano perché un’email è stata inviata o meno, e link filtrati condivisibili. I moderatori hanno solo il dashboard; non possono cambiare impostazioni o importare dati.

### Analytics

FastComments Analytics mostra gli utenti online in questo momento su tutti i tuoi siti e per pagina, le pagine più commentate o con più lettori live, e serie giornaliere per caricamenti di pagina, commenti, voti e account creati (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Le statistiche dei moderatori sono separate. I conteggi sono quasi in tempo reale, con ritardo al massimo di un minuto, e ogni caricamento di pagina è contato anziché campionato.

Ciò che non troverai è qualsiasi informazione su riempimento pubblicitario, CPM o revenue, perché non ci sono annunci. Se la dashboard di OpenWeb era la tua fonte per il reporting engagement‑to‑revenue, quel reporting si sposta al tuo stack pubblicitario.

### Monetization

OpenWeb inserisce annunci dentro e intorno alla Conversation e offre un’unità Standalone Ad, con campagne impostate tramite il tuo contatto OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments non gestisce annunci nel widget, non ha revenue share, e non carica script di terze parti per annunci o tracciamento. Il widget è un iframe che inserisci; gli spazi pubblicitari sopra e sotto sono tuoi e funzionano con qualsiasi soluzione tu usi già.

Il compromesso è esplicito: perdi quello che OpenWeb ti pagava, e guadagni un costo fisso, prevedibile e un widget che non aggiunge richieste di annunci alla tua pagina. Il branding è rimosso nei piani Flex e Pro, e il white‑label è disponibile nei piani Pro e Enterprise.

### Data Export and Privacy

Tutti i dati dei commenti possono essere esportati dal dashboard FastComments come CSV in qualsiasi momento, con date in formato UTC ISO, e gli stessi dati sono disponibili via API. I webhook coprono la sincronizzazione continua. I file di importazione vengono cancellati da FastComments non appena l’importazione è completata.

Per GDPR e CCPA, OpenWeb fornisce un’API di esportazione e cancellazione dove i commenti degli utenti cancellati rimangono collegati a un account ospite casuale (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments supporta richieste di esportazione e cancellazione dati, offre un Data Processing Agreement, e gestisce una distribuzione separata EU su <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> con dati replicati solo all’interno dei punti di presenza EU. Crea il tuo account lì se i tuoi lettori sono in Europa. Nella regione EU, i ban degli agenti IA richiedono sempre approvazione umana per soddisfare l’Articolo 17 del DSA.

I dati dei commenti nella distribuzione globale sono replicati tra regioni includendo un nodo Singapore, e il widget è servito dai DNS e CDN di FastComments. Lo script di embed è circa 35 kb compressi in trasmissione.

### Mobile SDKs

OpenWeb rilascia SDK Android, iOS e React Native con Conversation, Articles, Authentication, Notifications, Reactions e In Conversation Polls. FastComments rilascia librerie native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> e <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> con commenti in thread, aggiornamenti live via WebSocket, Secure SSO, voti, menzioni, upload di immagini, azioni di moderazione (segnala, fissa, blocca, ecc.), tematizzazione, modalità live chat e componente feed sociale. La regione EU è un flag di configurazione. Non esiste un SDK pubblicitario separato perché non ci sono annunci.

### Embed and SPA Integration

Il launcher e contenitore OpenWeb:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

L’equivalente FastComments:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Il tuo tenant ID è nella <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">pagina delle credenziali</a> una volta che hai un account. `data-article-tags` non ha equivalente poiché non c’è follow di argomenti; gli hashtag nei commenti sono una funzionalità diversa.

Per lo scroll infinito e le SPA, l’approccio Virtual Pages di OpenWeb è un contenitore per articolo. In FastComments chiami `FastCommentsUI(element, config)` per thread e poi `instance.update(newConfig)` per cambiare l’URL ID o `instance.destroy()` per rimuoverlo (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Le librerie React, Vue, Angular e SolidJS gestiscono questo quando la prop config cambia. I callback di ciclo di vita (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) sostituiscono gli eventi DOM `spot-im-*` a cui eri abituato.

I conteggi dei commenti nelle pagine indice usano il widget di conteggio commenti, singolo o in blocco. Per SEO, i commenti sono renderizzati direttamente nella pagina per i crawler dei motori di ricerca anziché dentro l’iframe, così non c’è chiamata API SEO da configurare.

### Step-by-Step Cutover

**1. Crea l’account e configura le basi.** Registrati su fastcomments.com o eu.fastcomments.com. Imposta le impostazioni di moderazione, blacklist parole, stile voto, ordinamento predefinito e CSS personalizzato nella pagina di personalizzazione del widget. Aggiungi moderatori e gruppi di moderazione. Se hai molti utenti admin, supporta l’importazione per te.

**2. Esegui una prima importazione.** Vai a <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, scegli OpenWeb (.csv) e carica. L’importazione avviene in background; la pagina mostra il conteggio delle righe e lo stato, e ricevi un’email al completamento (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Ogni commento conserva il suo ID messaggio OpenWeb come ID esterno, così una nuova importazione aggiorna i commenti esistenti invece di crearne di duplicati.

**3. Verifica i conteggi.** Confronta il conteggio delle righe del job con la tua esportazione. Apri alcuni URL ID ad alto traffico nella dashboard di moderazione e controlla autori, date, totali voti e stati di approvazione. Conferma che i commenti rifiutati compaiano come spam e quelli in attesa siano nella coda.

**4. Costruisci il payload SSO.** Implementa il codice di firma sopra nel tuo backend, usando lo stesso `id` e `username` usati con OpenWeb. Testa con un account staff su una pagina di staging: i commenti importati dell’utente appaiono come suoi, e modifica e cancellazione compaiono nel menu del commento.

**5. Sostituisci l’embed in un template di staging.** Sostituisci il launcher e il contenitore con lo snippet FastComments, mappando `data-post-id` a `urlId` e `data-post-url` a `url`. Rimuovi `window.SPOTIM.logout()` e gli ascoltatori `spot-im-*`, o mappali ai callback. Applica il tuo CSS in una regola di personalizzazione anziché nel codice così viene testato ad ogni rilascio FastComments.

**6. Esegui in parallelo.** Metti FastComments su una sezione o una percentuale di articoli mentre OpenWeb rimane sul resto. Nulla sul lato OpenWeb deve cambiare. Monitora la coda di moderazione e la pagina di analytics. I lettori che commentano su pagine FastComments durante questa finestra non sono nella tua esportazione OpenWeb, quindi pianifica l’importazione finale prima che inizino, non dopo.

**7. CSP e DNS.** Se usi una Content‑Security‑Policy, consenti `cdn.fastcomments.com` e `fastcomments.com` (o `eu.fastcomments.com`) per `script-src`, `frame-src` e `connect-src`, e rimuovi le voci `spot.im` e `openweb.com` una volta rimosso il launcher. Non cambiano i tuoi DNS. Non servono redirect perché gli URL ID corrispondono.

**8. Importazione finale e go live.** Estrai un’altra esportazione OpenWeb che copra la finestra di esecuzione parallela, caricala (re‑import è sicuro), poi distribuisci il cambiamento di template su tutte le pagine e rimuovi il launcher, Reactions, Topic Tracker, Spotlight, campanella e contenitori pubblicitari.

**9. Checklist go‑live.**

- Commenti live visibili su un articolo di produzione da due browser.
- Login SSO, logout e un commento con un vero account abbonato.
- I moderatori ricevono il digest e possono approvare da lì.
- Email di risposta e menzione arrivano e puntano alla pagina corretta.
- Lista ban e blacklist parole popolata.
- Page Reacts e widget di conteggio commenti renderizzati dove prima c’erano Reactions e il contatore.
- Report CSP puliti.
- Un ultimo confronto del conteggio commenti tra la tua esportazione e il dashboard.

### Cosa perdi e cosa è diverso

Essere chiari sulle lacune:

- **Live Blog.** Nessun equivalente. Mantienilo nel tuo CMS o in uno strumento di live blogging e inserisci FastComments sotto.
- **Topic Tracker.** Nessun follow di argomento o autore cross‑article. Solo iscrizioni a pagine.
- **Community Spotlight.** Nessun prodotto di scheda CTA. `headerHTML` ti dà un messaggio sopra il compositore, non una cattura email.
- **Revenue da annunci.** Nessuno. Il widget è privo di annunci per design.
- **Notification webhook.** I webhook sono su eventi commento, non su eventi di notifica per utente.
- **Storia delle Reactions.** I conteggi di reazione a livello di articolo non sono nell’esportazione dei commenti e ricominciano da zero. Possiamo talvolta estrarli dal tuo sito.
- **Storia dei Polls.** Le definizioni e i voti dei poll non sono nell’esportazione dei commenti; il testo del commento del poll viene importato, il poll no. Possiamo talvolta estrarli dal tuo sito.
- **Modello di login.** I lettori senza SSO accedono tramite magic link invece di password o pulsante social di default.
- **Staff di moderazione umano.** OpenWeb fornisce un team di moderazione con Aida. FastComments fornisce strumenti, classificatori e agenti; gli umani sono tuoi.

Ciò che guadagni, nello stesso spirito: un widget che aggiunge solo uno script piccolo e nessuna richiesta di annunci, moderazione che una sola persona può gestire per un grande sito con azioni di massa e agenti, SSO che è una funzione di firma anziché un protocollo, e un fornitore non sotto supervisione giudiziaria.

### Timeline e offerta di importazione gratuita

Pianifica una o due settimane per un editore con una integrazione SSO e qualche centinaio di migliaia di commenti: un giorno o due per l’esportazione e la prima importazione, qualche giorno per SSO e template, una finestra di esecuzione parallela, poi l’importazione finale e lo switch. La piattaforma gestisce già questa scala: United Cloud gestisce più di dieci portali e milioni di commenti su FastComments, e itsfoss.com ha spostato una cronologia di 88 000 commenti da un altro provider tramite lo stesso importatore self‑service.

FastComments importa gratuitamente il tuo CSV di esportazione OpenWeb, ti aiuta a gestire OpenWeb e FastComments in parallelo durante il cutover, e ti assiste nella migrazione stessa, incluse domande su threading e abbinamento utenti. I piani Enterprise includono SLA al 99,99 % e risposte di supporto entro un’ora durante l’orario lavorativo. Il pricing basato su utilizzo Flex è disponibile per i siti che vogliono iniziare senza contratto.

<a href="https://fastcomments.com/contact-us">Scrivici</a> con la dimensione della tua esportazione e la configurazione SSO e ti forniremo un piano.

### In conclusione

Estrai la tua esportazione oggi. Ricorda: gli stessi ID post diventano URL ID, lo stato di moderazione viene trasferito, e l’embed è uno scambio diretto. I punti in cui FastComments differisce sono elencati sopra così puoi decidere con i fatti davanti a te. :)

Saluti!

{{/isPost}}

---