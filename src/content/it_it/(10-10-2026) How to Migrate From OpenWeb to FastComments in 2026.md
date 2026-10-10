[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Come migrare da OpenWeb a FastComments nel 2026[/postlink]

{{#unless isPost}}
Una guida funzionalità per funzionalità per gli editori che passano da OpenWeb (ex Spot.IM): cosa corrisponde 1:1, cosa è diverso, come funziona l'importazione CSV, come cambia la stretta di mano SSO, e un piano di migrazione passo-passo.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo articolo contiene gergo tecnico

Questa guida è per responsabili di prodotto e ingegneria e community manager che gestiscono OpenWeb oggi e hanno bisogno di un piano di migrazione. Analizza ogni superficie di OpenWeb, indica l'equivalente FastComments e specifica chiaramente dove non esiste una corrispondenza 1:1.

### Perché ora

Il 30 settembre 2026 il Tribunale Distrettuale di Tel Aviv ha ordinato la nomina di un curatore temporaneo su OpenWeb su richiesta del suo creditore, Mars Growth Capital, che detiene un privilegio di primo grado sui beni e sui conti dell'azienda e sta cercando di farlo valere contro i beni israeliani, i conti bancari e la proprietà intellettuale di OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30 set</a>). Un curatore temporaneo, l’avv. Ehud Gindes, è stato nominato il giorno successivo (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4 ott</a>). All'inizio del 2026 Microsoft, uno dei più grandi clienti di OpenWeb, ha interrotto il suo impegno e ha trattenuto pagamenti a causa di una disputa sul traffico che OpenWeb respinge (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28 set</a>).

OpenWeb afferma che la piattaforma continua a funzionare. La supervisione giudiziaria, un creditore che fa valere privilegi sulla proprietà intellettuale da cui dipende il tuo widget di commenti, e un curatore il cui compito è preservare il valore degli asset non sono condizioni che un editore desidera per una superficie di coinvolgimento centrale. Se non hai ancora effettuato un'esportazione completa dei dati, fallo subito, oggi, prima di qualsiasi altra cosa in questa guida.

### Cosa ti serve prima di iniziare

Raccogli questi elementi prima di toccare il codice:

- **Il tuo export dei commenti OpenWeb.** OpenWeb espone un Export API (v4) che produce file CSV compressi, al massimo 100.000 commenti per file, con finestre di intervallo di data fino a un mese e link di download che scadono dopo una settimana (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">documentazione OpenWeb</a>). Richiedi tutte le finestre di cui hai bisogno e conserva i file in un luogo sicuro. Se il tuo contatto OpenWeb ti ha fornito in passato un export CSV dal pannello di amministrazione, tienilo anche quello. L'importatore FastComments legge il CSV di OpenWeb con colonne come `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` e `url`.
- **Il tuo Spot ID e l'elenco degli ID dei post.** Ogni `data-post-id` che passi al launcher diventa un FastComments URL ID. Se i tuoi ID post sono gli ID degli articoli CMS, annota come vengono generati così da poter emettere gli stessi valori sul lato FastComments.
- **Il tuo elenco utenti SSO.** In particolare i valori `primary_key` e `user_name` che hai registrato con OpenWeb. L'autore del commento viene abbinato al nome utente durante l'import, quindi devi passare gli stessi username nel payload SSO di FastComments.
- **Il tuo elenco moderatori e ruoli.** Account admin, moderatore e giornalista, e le sezioni che ciascuno modera.
- **La tua configurazione di moderazione.** Politica a livello di sito (approva tutti, pubblica e modera, richiedi approvazione), override per articolo, lista parole ristrette, utenti silenziati e bannati.
- **CSS personalizzato e impostazioni tema.** Esporta tutto ciò che hai nel pannello di amministrazione così da ricostruirlo nella pagina di personalizzazione del widget FastComments.
- **Dove vive il launcher nei tuoi template**, incluse le pagine che eseguono Reactions, Topic Tracker, Spotlight, la Notification Bell o un Standalone Ad senza Conversazione.

### Come gli ID post di OpenWeb si mappano agli URL ID di FastComments

FastComments associa un thread di commenti a un `urlId`. Per impostazione predefinita l'URL ID è l'URL della pagina pulita, ma puoi impostarlo a qualsiasi stringa, ed è esattamente quello che fa l'importatore OpenWeb: legge la colonna `post_id` e la usa come FastComments URL ID per ogni commento di quell'articolo. Inoltre memorizza la colonna `url` come URL di visualizzazione, così i link di moderazione e le email di notifica puntano alla pagina corretta.

Quindi la regola per i tuoi template è: ovunque tu abbia passato `data-post-id="POST_ID"` e `data-post-url="ARTICLE_URL"` a OpenWeb, passa `urlId: 'POST_ID'` e `url: 'ARTICLE_URL'` a FastComments. I thread importati si allineano con i thread live senza redirect e senza riscrittura URL. Vedi <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">la documentazione sugli URL ID</a>.

Se preferisci chiavare i thread per URL invece che per ID post, importa prima e poi usa lo strumento Migrate Comments sotto Manage Data per spostare i thread dall'ID post all'URL in blocco.

### La mappa delle funzionalità

| OpenWeb | FastComments | Note |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live per impostazione predefinita. I nuovi commenti si collassano dietro un pulsante “Show N New Comments”, oppure appaiono immediatamente con `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | L'import mantiene `likes_count` e `dislikes_count`. Lo stile a cuore e “disable voting” sono opzioni di configurazione. |
| Reactions (article-level icons) | Page Reacts | Set di icone configurabile sulla pagina, ricordato per utente. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` limita la nidificazione. Vedi la nota sull'import dei thread sotto. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` imposta il valore predefinito per sito o per pattern URL. |
| User profiles | User profiles | Avatar, bio, badge, karma, attività, DM. Funziona per utenti SSO. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Impostato nel payload SSO. Nessuna chiamata di lookup backend necessaria. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | I moderatori pinnano dal widget o dalla dashboard. Un modello di agente AI pinnano i commenti più votati. |
| In Conversation Polls | Polls on comments | 2‑10 opzioni, date di chiusura, modalità privacy, restrizioni per creatore. |
| Ask Me Anything formats | No dedicated product | Esegui come thread con l'utente SSO dell'autore etichettato e la domanda pinnata. |
| Live Blog | No 1:1 equivalent | Esistono widget Live Chat e commenti in modalità chat. Il live blogging editoriale rimane nel tuo CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Gli utenti seguono una pagina, non un argomento o autore. Nessun follow cross‑article. |
| Notification Bell | Notification bell in the widget | Risposte, menzioni, attività thread, voti, subscription, badge, DM. |
| Email notifications | Email notifications with templates | Opt‑in per utente via flag SSO. Template personalizzati, mittente brandizzato. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC‑SHA256 payload) | Nessuna chiamata register‑user. Firma un payload server‑side e passalo al widget. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Stesso payload. Il tuo backend lo firma una volta che l'utente è loggato. |
| Identity (OpenWeb registration screens) | Magic‑link login, Simple SSO | I lettori accedono con un link email. Nessuna password. |
| Moderation policy per article | Customization rules per URL ID pattern | Modalità approvazione, filtro spam e altro variano per pattern `*/section/*`. |
| Aida AI moderation | Spam classifiers, ChatGPT 4 option, image moderation, AI Agents | Gli agenti partono in dry run e possono richiedere approvazione umana. |
| Restricted words | Word blacklist | ~450 frasi predefinite, modificabili. |
| User muting | Block User | Blocco per lettore dal menu commento. |
| Bans | Bans | Permanenti, temporizzati, shadow, IP‑hashed, plus‑alias aware. |
| Moderation Panel | Moderate Comments dashboard | Filtri, azioni bulk con undo, gruppi di moderazione, email digest con approvazione con un click. |
| Notification Webhook | Webhooks | Comment created, updated, deleted. Nessun webhook per notifiche utente. |
| Engagement dashboard | Analytics | Utenti live online, pagine top, page loads, commenti, voti, account per giorno. Nessun reporting di revenue pubblicitaria. |
| In-conversation ads, Standalone Ad | None | FastComments non mostra pubblicità. Mantieni il tuo stack pubblicitario intorno al widget. |
| Social Reviews (star ratings) | Ratings and Reviews | Prodotto separato sullo stesso account. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Ricircolazione guidata dall’attività dei commenti. |
| Comment Counter | Comment count widgets | Singolo e bulk. |
| Export Comments API | CSV export, API, webhooks | Esporta dal dashboard in qualsiasi momento. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com conserva i dati in EU. DPA disponibile. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | UI nativa, SSO, aggiornamenti live, threading, azioni di moderazione. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` e `destroy()` per SPA. |

Il resto di questa sezione approfondisce ogni gruppo in dettaglio.

### Conversation, Votes and Reactions

La Conversation di OpenWeb è un thread in tempo reale. Anche il widget di commenti FastComments lo è: commenti, modifiche, cancellazioni, voti e azioni di moderazione vengono spinti a tutti gli utenti che visualizzano il thread (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Per impostazione predefinita i nuovi commenti di altri utenti appaiono dietro un pulsante “Show 2 New Comments” così la pagina non salta sotto il lettore. Per eventi live imposta `showLiveRightAway` così vengono renderizzati immediatamente, e `newCommentsToBottom` se vuoi che fluiscano verso il basso come una chat.

I like e dislike diventano voti su/giù. L'importatore mantiene entrambi i conteggi per commento. Se la tua community è abituata a un solo like, passa lo stile voto a cuori nella pagina di personalizzazione del widget. Il voto può anche essere disattivato del tutto.

Le Reactions di OpenWeb sono un widget separato con due‑quattro icone etichettate sull'articolo (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). L'equivalente FastComments è Page Reacts: un set configurabile di immagini di reazione associate al widget dei commenti, ricordato per pagina e per utente (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). I conteggi delle reazioni non fanno parte dell'export dei commenti OpenWeb, quindi partono da zero.

Il sorting si mappa direttamente. I valori `data-sort-by` di OpenWeb (best, newest, oldest) corrispondono a Most Relevant, Newest First e Oldest First. Imposta il valore predefinito con `defaultSortDirection` (`MR`, `NF`, `OF`) nel codice o in una regola di personalizzazione. I lettori possono cambiare dal widget.

`data-read-only="true"` diventa `readonly: true`, che blocca nuovi commenti, voti, modifiche e cancellazioni. `data-post-staleness-days` non ha un equivalente diretto, ma una regola di personalizzazione può applicare `readonly` a un pattern URL ID, e puoi anche attivarla dai template in base all'età dell'articolo. `data-messages-count` è la dimensione della pagina, impostata nella pagina di personalizzazione del widget da 10 a 200 commenti.

### Replies and Threading

FastComments supporta nidificazione illimitata per impostazione predefinita; `maxReplyDepth` la limita (`1` produce una struttura piatta a due livelli). Il CSV di OpenWeb include le colonne `parent_id` e `parent_comment_id`. L'importatore attuale importa ogni riga come commento di livello superiore sulla sua pagina, in ordine cronologico, mantenendo autore, timestamp, voti, conteggio flag e stato di approvazione intatti. Non ricostruisce l'albero padre‑figlio. Se i tuoi thread sono molto reply‑heavy, comunicacelo quando invii l'export e gestiremo il threading durante l'import invece di lasciarti con un thread appiattito.

### User Profiles and Badges

Gli utenti FastComments, inclusi gli utenti SSO, ottengono un profilo con avatar, nome visualizzato, bio, link social, badge, karma, conteggio commenti, feed di attività pubblico e messaggi diretti (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Ognuna delle superfici di attività, commenti profilo e DM può essere disabilitata per utente nel payload SSO o globalmente nella configurazione.

Il Badge Autore di OpenWeb richiede di chiamare `GET /sso/v1/user/{primary_key}` per l'autore e inserire l'ID restituito in `data-author-id`. In FastComments imposti `displayLabel: 'Author'` (o qualsiasi etichetta fino a 100 caratteri) nel payload SSO dell'utente, e `isAdmin` o `isModerator` per lo staff. L'etichetta viene mostrata accanto al nome su ogni commento. Per un sistema più ricco, configura i badge sotto Customize → Badges: badge immagine o testo, assegnati automaticamente su soglie (conteggio commenti, upvote, commenti pinnati, status veterano, velocità risposta) o manualmente, e assegnabili dal payload SSO con `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Qualsiasi moderatore può Pin o Unpin un commento dal menu del commento nel widget o dalla dashboard di moderazione. I commenti pinnati vengono spinti live a tutti gli utenti del thread. Se vuoi automatizzare, la funzionalità AI Agents fornisce un modello Top Comment Pinner che pinnano un commento di livello superiore una volta superata una soglia di voto (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

Le In Conversation Polls di OpenWeb consentono allo staff di allegare un sondaggio da 2 a 4 opzioni a un commento di livello superiore. I sondaggi FastComments si allegano anch'essi a un commento, con 2‑10 opzioni, data di chiusura opzionale, privacy dei risultati (anonimo, solo admin, tutti) e modalità “vota per vedere i risultati”. Decidi chi può creare sondaggi (disabilitato, admin e moderatori, tutti) e se i lettori anonimi possono votare. I sondaggi sono anche esposti nell'API pubblica per crearli dal tuo CMS.

OpenWeb ha gestito formati Ask Me Anything sulla sua piattaforma. FastComments non ha un prodotto Q&A dedicato. La sostituzione pratica è un thread normale su un URL ID dedicato: l'utente SSO dell'ospite porta un `displayLabel`, tu pinni il commento introduttivo, i lettori chiedono nei commenti di livello superiore, l'ospite risponde in thread, e le notifiche di menzione e risposta riportano le persone. Imposta `noNewRootComments` dopo la chiusura della finestra così solo le risposte continuano.

Il Community Spotlight (collector email, counter e card di redirect di OpenWeb) non ha equivalente. Il widget supporta HTML header personalizzato sopra l'input commento tramite `headerHTML`, che copre una call‑to‑action ma non un modulo di cattura email.

### Live Blog

Non esiste un Live Blog FastComments. Il Live Blog di OpenWeb è un prodotto editoriale: i reporter assegnati nel pannello di amministrazione pubblicano aggiornamenti con link incorporati, tweet e video, e i lettori seguono (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Ciò che FastComments offre per la copertura live è il lato lettore: un widget Live Chat (`embed-live-chat.min.js`) per chat streaming, e il widget dei commenti in modalità chat (`showLiveRightAway` più `newCommentsToBottom`) accanto alla tua copertura live. Per gli aggiornamenti editoriali, gli editori che lasciano OpenWeb li mantengono nel loro CMS o in uno strumento di live blog dedicato e incorporano FastComments sotto per la discussione. Gli embed multimediali (YouTube, SoundCloud e altri) sono supportati nei commenti, così gli aggiornamenti dello staff pubblicati come commenti includono media ricchi.

### Topic Tracker, Notifications and Email

Il Topic Tracker di OpenWeb consente a un lettore di seguire argomenti e autori estratti dai metadati della pagina e di essere notificato quando nuovi articoli corrispondono (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments non ha follow di argomenti o autori cross‑article. I lettori si iscrivono a una pagina dalla Notification Bell e ricevono aggiornamenti per quel thread, con frequenza scelta per iscrizione: ogni minuto, digest oraria o digest giornaliera. Se il follow cross‑article è importante per i tuoi KPI, questa è una funzionalità che perdi.

Il resto della Notification Bell si mappa. Il widget ha una campanella che diventa rossa con il conteggio non letto e elenca: risposte a te, risposte in un thread in cui hai commentato, menzioni, upvote sui tuoi commenti, attività su pagine iscritte, badge assegnati e DM (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Le notifiche in‑app sono in tempo reale via WebSocket. Le email di risposta e menzione vengono inviate ogni minuto solo per commenti approvati.

Per gli utenti SSO, passa `optedInNotifications` e `optedInSubscriptionNotifications` nel payload e FastComments aggiorna le loro preferenze al successivo caricamento pagina. Le email richiedono un indirizzo email nel payload. I template email sono modificabili per tipo e per lingua sotto Customize → Email Templates, e l'invio dal tuo dominio con DKIM è supportato. I moderatori e admin ricevono un digest giornaliero, settimanale o mensile con approvazione con un click, risposta e link spam.

Il Notification Webhook di OpenWeb pubblica eventi di notifica per utente (`replied-message`, `liked-message`, `topic-by-keyword`, ecc.) al tuo endpoint. I webhook FastComments coprono la risorsa commento commento: creato, aggiornato e rimosso, con quanti endpoint di sottoscrizione vuoi (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Se usavi il webhook di notifica per alimentare il tuo sistema email, dovrai ricostruire quella logica sugli eventi commento, o lasciare che FastComments invii le email.

### SSO: Da codeA/codeB a un Payload firmato

La stretta di mano di OpenWeb ha sei passaggi: attendi `spot-im-api-ready`, OpenWeb genera `codeA`, il tuo client lo invia al backend, il backend conferma l'utente e chiama `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb restituisce `codeB`, e il tuo client restituisce `codeB` a OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Il logout chiama `window.SPOTIM.logout()`.

FastComments Secure SSO non prevede nessun round‑trip né un nuovo endpoint da te. Quando renderizzi la pagina per un utente loggato, il tuo backend serializza l'utente, lo codifica in Base64 e lo firma con HMAC‑SHA256 usando il tuo segreto API. Il widget invia il payload con le sue richieste e FastComments verifica la firma (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). In Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // stesso valore usato come primary_key con OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // stesso user_name registrato con OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // opzionale, sostituisce il lookup Author Badge
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

Il timestamp è in millisecondi epoch e viene rifiutato se più vecchio di due giorni. Per un lettore non loggato, ometti i tre campi firmati e passa solo `loginURL` (o una funzione `loginCallback`) e il widget mostrerà un prompt di login invece del composer. Esempi completi in Node, Java e PHP sono nel <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repository di esempi di codice</a>.

Gli utenti vengono creati al primo caricamento pagina. Non registri in blocco nessuno. Poiché l'importatore OpenWeb abbina gli autori dei commenti per `user_name`, un utente il cui payload SSO porta lo stesso `username` rivendica i propri commenti importati al primo caricamento di un thread e può modificarli o cancellarli da quel momento. Esiste anche un'API utente SSO se vuoi pre‑creare gli utenti.

Ogni volta che il payload viene inviato, FastComments aggiorna il record utente, così un nome visualizzato o avatar modificato da te si propaga al prossimo visualizzatore. Imposta un campo a `null` per cancellarlo.

Se usavi il SSO di terze parti di OpenWeb con Auth0, Gigya o Piano via `window.SPOTIM.startSSOForProvider`, il flusso FastComments è lo stesso: una volta che il tuo provider ha autenticato l'utente, il tuo backend costruisce e firma il payload. Non c'è integrazione specifica del provider da configurare su FastComments.

Altre due opzioni esistono. Simple SSO passa l'oggetto utente non firmato dal client, per piattaforme senza backend, e marca l'attività come verificata quando è presente un'email (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 firma il tuo staff nella dashboard FastComments stessa tramite Okta, Azure AD o ADFS, con mappatura ruoli, ed è disponibile nei piani enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

L'API di Moderazione per articolo di OpenWeb ha quattro valori: `spot_policy`, `approve_all`, `publish_and_moderate` e `require_approval`. FastComments configura gli stessi comportamenti in Moderation Settings: approvazione automatica attiva o disattiva, approvazione richiesta solo per il primo commento di un utente, e auto‑approvazione solo per commenti verificati (loggati o SSO). Le regole si applicano a livello di sito o a un pattern URL ID come `*/politics/*`, che è come riprodurre la politica per sezione. Ogni commento, approvato o no, arriva nella dashboard Moderate Comments, così il modello pubblica‑poi‑revisiona è la vista predefinita (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

L'import porta lo stato di moderazione. `message_status` di OpenWeb con valore `approved` viene importato come approvato e revisionato; `rejected` come spam e revisionato; qualsiasi altro valore viene importato non approvato e non revisionato, così appare nella tua coda di moderazione. `reports_count` diventa il conteggio flag del commento.

La moderazione automatica su FastComments è a più livelli, non un unico sistema come Aida:

- Un classificatore spam, addestrato continuamente, disponibile come modello condiviso tra tutti i tenant o isolato per il tuo tenant, con fattore di fiducia che rilassa il filtraggio per utenti di lunga data o spesso pinnati.
- Un opzionale controllo spam ChatGPT 4 su fatturazione Flex.
- Moderazione contenuti immagine a bassa, media o alta sensibilità per immagini caricate.
- Una blacklist di parole di circa 450 frasi predefinite, modificabili, che maschera le corrispondenze con asterischi. Qui vanno le parole ristrette di OpenWeb.
- Soglie di flag che nascondono automaticamente un commento dopo N segnalazioni.
- Prevenzione di messaggi ripetuti o quasi‑duplicati, sempre attiva.
- AI Agents: agenti event‑driven con una allowlist di strumenti esplicita (segnala spam, approva, blocca, pinn, avvisa via DM, banna, assegna badge, risponde). Ogni agente parte in dry run, gli strumenti sensibili possono essere soggetti a approvazione umana, e ogni azione è loggata con giustificazione e punteggio di confidenza.

L'API di User Muting di OpenWeb consente a un lettore SSO di silenziare un altro. L'equivalente FastComments è Block User nel menu commento, disponibile a qualsiasi lettore loggato. I ban sono un'azione di moderatore: permanente o per durata impostata, opzionalmente shadow ban (l'utente vede il proprio commento ma nessun altro), opzionalmente per IP hashed, con plus‑alias aware per email trattata come un unico indirizzo. L'elenco utenti bannati è ricercabile per email, nome, moderatore e commento che ha scatenato il ban.

La dashboard Moderate Comments supporta filtri (da revisionare, da approvare, spam, segnalati, da utenti bannati) e ricerca testuale, azioni bulk con undo e pausa, “select all matching” per code molto grandi, gruppi di moderazione così il tuo desk sportivo vede solo i thread sportivi, log per commento che mostrano perché un'email è stata inviata o meno, e link filtrati condivisibili. I moderatori hanno solo la dashboard; non possono cambiare impostazioni o importare dati.

### Analytics

FastComments Analytics mostra gli utenti online in tempo reale sui tuoi siti e per pagina, le pagine top per commenti o per lettori live, e serie giornaliere per page loads, commenti, voti e account creati (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Le statistiche dei moderatori sono separate. I conteggi sono quasi in tempo reale, con ritardo massimo di un minuto, e ogni caricamento pagina è contato anziché campionato.

Ciò che non troverai è qualsiasi dato su riempimento pubblicitario, CPM o revenue, perché non ci sono pubblicità. Se il dashboard di OpenWeb era la tua fonte per il reporting engagement‑to‑revenue, quel reporting passa al tuo stack pubblicitario.

### Monetization

OpenWeb inserisce pubblicità dentro e intorno alla Conversation e offre un'unità Standalone Ad, con campagne gestite tramite il tuo contatto OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments non mostra pubblicità nel widget, non ha revenue share, e non carica script di tracciamento o pubblicità di terze parti. Il widget è un iframe che inserisci; gli spazi pubblicitari sopra e sotto sono tuoi e gestiti con quello che già usi.

Il trade‑off è esplicito: perdi quello che OpenWeb ti pagava, e guadagni un costo fisso, prevedibile, e un widget che non aggiunge richieste pubblicitarie alla tua pagina. Il branding è rimosso nei piani Flex e Pro, e il white‑label è disponibile su Pro ed Enterprise.

### Data Export and Privacy

Tutti i dati dei commenti possono essere esportati dal dashboard FastComments come CSV in qualsiasi momento, con date in formato UTC ISO, e gli stessi dati sono disponibili via API. I webhook coprono la sincronizzazione continua. I file di import vengono cancellati da FastComments non appena l'import è completato.

Per GDPR e CCPA, OpenWeb fornisce un'API di export e delete dove i commenti degli utenti cancellati rimangono collegati a un account guest casuale (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments supporta richieste di export e cancellazione dati, offre un Data Processing Agreement, e gestisce una distribuzione separata EU su <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> con dati replicati solo all'interno dei punti di presenza EU. Crea il tuo account lì se i tuoi lettori sono in Europa. Nella regione EU, i ban degli agenti AI richiedono sempre approvazione umana per soddisfare l'Articolo 17 del DSA.

I dati dei commenti nella distribuzione globale sono replicati in regioni includendo un nodo a Singapore, e il widget è servito dal DNS e CDN di FastComments. Lo script di embed è < 30 KB su disco e circa 6 KB compressi in rete.

### Mobile SDKs

OpenWeb rilascia SDK Android, iOS e React Native con Conversation, Articles, Authentication, Notifications, Reactions e In Conversation Polls. FastComments rilascia librerie native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> e <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> con commenti threadati, aggiornamenti live via WebSocket, Secure SSO, voti, menzioni, upload immagini, azioni di moderazione (flag, pin, lock, block), theming, modalità live chat e componente social feed. La regione EU è un flag di configurazione. Non esiste un SDK pubblicitario separato perché non ci sono pubblicità.

### Embed and SPA Integration

Il launcher e container OpenWeb:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

L'equivalente FastComments:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // era data-post-id
            url: 'ARTICLE_URL',      // era data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Il tuo tenant ID è nella <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">pagina del codice embed</a> una volta che hai un account. `data-article-tags` non ha equivalente poiché non c'è follow per argomenti; gli hashtag nei commenti sono una funzionalità diversa.

Per scroll infinito e SPA, l'approccio Virtual Pages di OpenWeb è un container per articolo. In FastComments chiami `FastCommentsUI(element, config)` per thread e poi `instance.update(newConfig)` per cambiare l'URL ID o `instance.destroy()` per rimuoverlo (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Le librerie React, Vue, Angular e SolidJS gestiscono questo quando la prop config cambia. I callback di ciclo vita (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) sostituiscono gli eventi DOM `spot-im-*` a cui eri abituato.

I contatori commenti su pagine indice usano il widget di conteggio commenti, singolo o bulk. Per SEO, i commenti sono renderizzati direttamente nella pagina per i crawler anziché dentro l'iframe, così non c'è chiamata API SEO da configurare.

### Step-by-Step Cutover

**1. Crea l'account e configura le basi.** Registrati su fastcomments.com o eu.fastcomments.com. Imposta le impostazioni di moderazione, blacklist parole, stile voto, ordinamento predefinito e CSS personalizzato nella pagina di personalizzazione del widget. Aggiungi moderatori e gruppi di moderazione. Se hai molti admin, supportiamo l'import per te.

**2. Esegui il primo import.** Vai a <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, scegli OpenWeb (.csv) e carica. L'import avviene in background; la pagina mostra conteggi righe e stato, e ricevi una email al completamento (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Ogni ID messaggio OpenWeb diventa l'ID commento FastComments, così una nuova importazione non crea duplicati.

**3. Verifica i conteggi.** Confronta il conteggio righe del job con il tuo export. Apri qualche URL ID ad alto traffico nella dashboard di moderazione e controlla autori, date, totali voti e stati di approvazione. Conferma che i commenti rifiutati compaiano come spam e quelli in attesa siano nella coda.

**4. Costruisci il payload SSO.** Implementa il codice di firma sopra nel tuo backend, usando lo stesso `id` e `username` usati con OpenWeb. Testa con un account staff su una pagina di staging: i commenti importati appaiono come loro, e modifica/cancellazione compaiono nel menu commento.

**5. Sostituisci l'embed su un template di staging.** Rimpiazza il launcher e container con lo snippet FastComments, mappando `data-post-id` a `urlId` e `data-post-url` a `url`. Rimuovi `window.SPOTIM.logout()` e gli ascoltatori `spot-im-*`, o mappali ai callback corrispondenti. Applica il tuo CSS in una regola di personalizzazione anziché nel codice così viene testato ad ogni rilascio FastComments.

**6. Esegui in parallelo.** Metti FastComments su una sezione o una percentuale di articoli mentre OpenWeb resta sul resto. Nulla sul lato OpenWeb deve cambiare. Monitora la coda di moderazione e la pagina analytics. I lettori che commentano su pagine FastComments durante questa finestra non saranno nell'export OpenWeb, quindi pianifica l'import finale prima che inizino, non dopo.

**7. CSP e DNS.** Se usi una Content‑Security‑Policy, consenti `cdn.fastcomments.com` e `fastcomments.com` (o `eu.fastcomments.com`) per `script-src`, `frame-src` e `connect-src`, e rimuovi le voci `spot.im` e `openweb.com` una volta rimosso il launcher. Non ci sono cambiamenti DNS. Nessun redirect è necessario perché gli URL ID coincidono.

**8. Import finale e go live.** Estrai un altro export OpenWeb che copra la finestra di esecuzione parallela, caricalo (re‑import è sicuro), poi distribuisci il cambiamento di template su tutte le pagine e rimuovi il launcher, Reactions, Topic Tracker, Spotlight, campanella e contenitori pubblicitari.

**9. Checklist go‑live.**

- Commenti live visibili su un articolo di produzione da due browser.
- Login/logout SSO e un commento con un vero account subscriber.
- I moderatori ricevono il digest e possono approvare da lì.
- Email di risposta e menzione arrivano e puntano alla pagina corretta.
- Lista ban e blacklist parole popolata.
- Page Reacts e widget conteggio commenti renderizzati dove prima c'erano Reactions e il counter.
- Report CSP puliti.
- Ultimo confronto conteggio commenti tra il tuo export e la dashboard.

### Cosa perdi e cosa è diverso

Essere chiari sulle lacune:

- **Live Blog.** Nessun equivalente. Mantienilo nel tuo CMS o in uno strumento di live blogging e posiziona FastComments sotto.
- **Topic Tracker.** Nessun follow cross‑article per argomento o autore. Solo subscription pagina.
- **Community Spotlight.** Nessun prodotto card CTA. `headerHTML` ti dà un messaggio sopra il composer, non un form di cattura email.
- **Revenue pubblicitaria.** Nessuna. Il widget è privo di pubblicità per design.
- **Notification webhook.** I webhook sono su eventi commento, non su eventi notifica per utente.
- **Threading in import.** L'importatore attuale appiattisce le risposte a commenti di livello superiore sulla stessa pagina. Avvisaci se ti serve ricostruire l'albero.
- **Storico Reactions.** I conteggi di reazione a livello articolo non sono nell'export dei commenti e ricominciano da zero.
- **Storico Polls.** Le definizioni e i voti dei sondaggi non sono nell'export dei commenti; il testo del commento del sondaggio viene importato, il sondaggio no.
- **Modello login.** I lettori senza SSO accedono con magic link invece di password o pulsante social.
- **Staff di moderazione umana.** OpenWeb fornisce un team di moderazione con Aida. FastComments offre strumenti, classificatori e agenti; gli umani sono tuoi.

Ciò che guadagni, nello stesso spirito: un widget che aggiunge solo uno script piccolo e nessuna richiesta pubblicitaria, moderazione che una sola persona può gestire per un grande sito con azioni bulk e agenti, SSO che è una funzione di firma anziché un protocollo, e un fornitore non sotto supervisione giudiziaria.

### Timeline e offerta di import gratuito

Pianifica una o due settimane per un editore con una integrazione SSO e qualche centinaio di migliaia di commenti: un giorno o due per l'export e il primo import, qualche giorno per SSO e template, una finestra di esecuzione parallela, poi l'import finale e lo switch. La piattaforma già gestisce questa scala: United Cloud gestisce più di dieci portali e milioni di commenti su FastComments, e itsfoss.com ha spostato una storia di 88 000 commenti da un altro provider con lo stesso importatore self‑service.

FastComments importa gratuitamente il tuo CSV export da OpenWeb, ti aiuta a gestire OpenWeb e FastComments in parallelo durante il cutover, e supporta la migrazione stessa, inclusi threading e domande di abbinamento utenti. I piani enterprise includono SLA, risposte di supporto entro un'ora durante l’orario lavorativo, e l’opzione di un deployment Isolated Cloud nel tuo account cloud (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Il pricing Flex basato sull'uso è disponibile per i siti che vogliono partire senza contratto.

Scrivi a <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> con la dimensione del tuo export e la configurazione SSO e ti risponderemo con un piano.

### In conclusione

Estrai il tuo export oggi. Il resto della migrazione è meccanico: gli stessi post ID diventano URL ID, gli stessi username rivendicano i loro commenti tramite SSO, lo stato di moderazione viene trasferito, e l'embed è uno scambio diretto. I punti in cui FastComments differisce sono elencati sopra così puoi decidere con i fatti davanti a te.

Cheers!

{{/isPost}}

---