[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Sådan migrerer du fra OpenWeb til FastComments i 2026[/postlink]

{{#unless isPost}}
En funktion‑for‑funktion guide for udgivere, der skifter fra OpenWeb (tidligere Spot.IM): hvad der svarer 1:1, hvad der er anderledes, hvordan CSV‑importen fungerer, hvordan SSO‑handshaken ændres, og en trin‑for‑trin cut‑over‑plan.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

Denne guide er til produkt‑ og ingeniørledere samt community‑managere, der kører OpenWeb i dag og har brug for en plan for at flytte. Den gennemgår hver OpenWeb‑overflade, navngiver den tilsvarende FastComments‑funktion, og siger tydeligt, hvor der ikke er et 1:1‑match.

### Hvorfor nu

Den 30. september 2026 beordrede Tel Aviv District Court udpegning af en midlertidig modtager over OpenWeb på anmodning af deres långiver, Mars Growth Capital, som har en førsteprioritets pant på selskabets aktiver og konti og er ved at håndhæve den mod OpenWebs israelske aktiver, bankkonti og intellektuel ejendom (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). En midlertidig trustee, Adv. Ehud Gindes, blev udpeget dagen efter (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Tidligere i 2026 afsluttede Microsoft, en af OpenWebs største kunder, sit engagement og tilbageholdt betalinger over en trafikdispute, som OpenWeb afviser (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb siger, at platformen fortsætter med at fungere. Domstolsopsyn, en långiver der håndhæver pant på den IP, din kommentarswidget afhænger af, og en trustee hvis opgave er at bevare aktivernes værdi, er ikke betingelser, en udgiver ønsker under en kerne‑engagementsoverflade. Hvis du endnu ikke har trukket en fuld data‑eksport, gør det først, i dag, før du går videre i denne guide.

### Hvad du skal have klar, før du starter

Indsaml disse, før du rører ved nogen kode:

- **Din OpenWeb‑kommentar‑eksport.** OpenWeb udsender et Export API (v4), som producerer zip‑pakkede CSV‑filer, højst 100.000 kommentarer pr. fil, med datointervaller på op til en måned og download‑links, der udløber efter en uge (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Anmod om hvert vindue du har brug for, og gem filerne et sikkert sted. Hvis din OpenWeb‑kontakt har leveret en Admin Panel CSV‑eksport tidligere, behold også den. FastComments‑importøren læser OpenWeb‑CSV‑filen med kolonner som `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` og `url`.
- **Dit Spot‑ID og listen over post‑ID’er.** Hver `data-post-id`, du sender til launcheren, bliver et FastComments URL‑ID. Hvis dine post‑ID’er er CMS‑artikel‑ID’er, notér hvordan de genereres, så du kan udsende de samme værdier på FastComments‑siden.
- **Din SSO‑bruger‑liste.** Specifikt `primary_key` og `user_name`‑værdierne du registrerede med OpenWeb. Kommentar‑forfatterskab matches på brugernavn under import, så du skal sende de samme brugernavne i FastComments‑SSO‑payloaden.
- **Din moderator‑liste og roller.** Admin‑, moderator‑ og journalist‑konti, samt hvilke sektioner hver moderator har ansvar for.
- **Din moderations‑konfiguration.** Site‑omfattende politik (godkend alt, publicer og moderer, kræv godkendelse), per‑artikel‑overstyringer, begrænset ord‑liste, muted og banned brugere.
- **Tilpasset CSS og tema‑indstillinger.** Eksporter alt du har i Admin‑Panelet, så du kan genskabe det i FastComments‑widget‑tilpasningssiden.
- **Hvor launcheren lever i dine skabeloner**, inklusiv alle sider der kører Reactions, Topic Tracker, Spotlight, Notification Bell eller en Standalone Ad uden en Conversation.

### Sådan mappes OpenWeb post‑ID’er til FastComments URL‑ID’er

FastComments knytter en kommentartråd til en `urlId`. Som standard er URL‑ID’et den rensede side‑URL, men du kan sætte det til enhver streng, og det er præcis, hvad OpenWeb‑importøren gør: den læser `post_id`‑kolonnen og bruger den som FastComments URL‑ID for hver kommentar på den artikel. Den gemmer også `url`‑kolonnen som den viste URL, så moderations‑links og notifikations‑emails peger på den rigtige side.

Reglen for dine skabeloner er altså: hvor du har sendt `data-post-id="POST_ID"` og `data-post-url="ARTICLE_URL"` til OpenWeb, send `urlId: 'POST_ID'` og `url: 'ARTICLE_URL'` til FastComments. Importerede tråde stemmer overens med live‑tråde uden omdirigeringer og uden URL‑omskrivning. Se <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL‑ID‑dokumentationen</a>.

Hvis du foretrækker at nøgle tråde efter URL fremover i stedet for post‑ID, importér først og brug så værktøjet Migrate Comments under Manage Data til at flytte tråde fra post‑ID til URL i bulk.

### Funktionskortet

| OpenWeb | FastComments | Noter |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live by default. New comments collapse behind a "Show N New Comments" button, or appear instantly with `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Import preserves `likes_count` and `dislikes_count`. Heart style and "disable voting" are config options. |
| Reactions (article-level icons) | Page Reacts | Configurable icon set on the page, remembered per user. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` caps nesting. See the import note on threads below. |
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
| Aida AI moderation | Spam classifiers, ChatGPT 4 option, image moderation, AI Agents | Agents start in dry run and can require human approval. |
| Restricted words | Word blacklist | ~450 default phrases, editable. |
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

Resten af dette afsnit gennemgår hver gruppe i detaljer.

### Conversation, Votes and Reactions

OpenWebs Conversation er en real‑time tråd. FastComments‑kommentar‑widget er også: kommentarer, redigeringer, sletninger, stemmer og moderations‑handlinger pushes til alle, der ser tråden (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Som standard vises nye kommentarer fra andre bag en "Show 2 New Comments" knap, så siden ikke springer under læseren. For live‑begivenheder sæt `showLiveRightAway`, så de renderes med det samme, og `newCommentsToBottom` hvis du vil have dem til at flyde nedad som en chat.

Likes og dislikes bliver op‑ og ned‑stemmer. Importøren bevarer begge tællere per kommentar. Hvis dit community er vant til kun ét like, skift stemmestilen til hjerter på widget‑tilpasningssiden. Stemning kan også slås helt fra.

OpenWeb Reactions er en separat widget med to til fire mærkede ikoner på artiklen (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Den tilsvarende FastComments‑funktion er Page Reacts: et konfigurerbart sæt af reaktions‑billeder knyttet til kommentar‑widgeten, husket per side og per bruger (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Reaktions‑tællere er ikke en del af OpenWeb‑kommentar‑eksporten, så de starter fra nul.

Sortering map‑pes direkte. OpenWebs `data-sort-by`‑værdier best, newest og oldest svarer til Most Relevant, Newest First og Oldest First. Sæt standarden med `defaultSortDirection` (`MR`, `NF`, `OF`) i kode eller i en tilpasnings‑regel. Læserne kan skifte i widgeten.

`data-read-only="true"` bliver til `readonly: true`, som blokerer nye kommentarer, stemmer, redigeringer og sletninger. `data-post-staleness-days` har ingen direkte ækvivalent, men en tilpasnings‑regel kan anvende `readonly` på et URL‑ID‑mønster, og du kan også flippe den fra dine skabeloner baseret på artikel‑alder. `data-messages-count` er side‑størrelsen, sat i widget‑tilpasningssiden fra 10 til 200 kommentarer.

### Replies and Threading

FastComments understøtter ubegrænset indlejring som standard; `maxReplyDepth` begrænser den (`1` giver en flad to‑niveau struktur). OpenWeb‑CSV’en indeholder `parent_id` og `parent_comment_id` kolonnerne. Den nuværende importør importerer hver række som en top‑level kommentar på sin side, i datorekkefølge, med forfatter, tidsstempel, stemmer, flag‑tæller og godkendelses‑status intakt. Den genopbygger ikke forælder‑barn‑træet. Hvis dine tråde er svar‑tunge, fortæl os det når du sender eksporten, så vi kan håndtere tråd‑opbygning som del af importen i stedet for at efterlade dig med en flad tråd.

### User Profiles and Badges

FastComments‑brugere, inklusiv SSO‑brugere, får en profil med avatar, display‑navn, bio, sociale links, badges, karma, kommentar‑tæller, en offentlig aktivitets‑feed og direkte beskeder (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Hver af aktivitets‑, profil‑kommentar‑ og DM‑overflader kan deaktiveres per bruger i SSO‑payloaden eller globalt i konfigurationen.

OpenWebs Author Badge kræver, at du kalder `GET /sso/v1/user/{primary_key}` for forfatteren og placerer den returnerede ID i `data-author-id`. I FastComments sætter du `displayLabel: 'Author'` (eller et vilkårligt label op til 100 tegn) i brugerens SSO‑payload, og `isAdmin` eller `isModerator` for personale. Labelen vises ved siden af deres navn på hver kommentar. For et rigere system, konfigurer badges under Customize, Badges: billed‑ eller tekst‑badges, tildelt automatisk på tærskler (kommentar‑tæller, up‑votes, pinned kommentarer, veteran‑status, svar‑hastighed) eller manuelt, og tildelbare fra SSO‑payloaden med `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Enhver moderator kan Pin eller Unpin en kommentar fra kommentar‑menuen i widgeten eller fra moderations‑dashboardet. Pinned kommentarer pushes live til alle på tråden. Hvis du vil automatisere dette, leverer AI Agents‑funktionen en Top Comment Pinner‑skabelon, der pinner en top‑level kommentar, når den krydser en stemme‑tærskel (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWebs In Conversation Polls lader personale vedhæfte en 2‑til‑4‑options poll til en top‑level kommentar. FastComments‑polls vedhæfter også til en kommentar, med 2‑til‑10 muligheder, en valgfri luknings‑dato, resultat‑privatliv (anonym, kun admins, alle), og en "vote to see results" tilstand. Du vælger hvem der kan oprette polls (deaktiveret, admins og moderators, alle) og om anonyme læsere kan stemme. Polls eksponeres også i den offentlige API for at oprette dem fra dit CMS.

OpenWeb har kørt Ask Me Anything‑formater på sin platform. FastComments har intet dedikeret Q&A‑produkt. Den praktiske erstatning er en normal tråd på et dedikeret URL‑ID: gæstens SSO‑bruger bærer et `displayLabel`, du pinner intro‑kommentaren, læsere stiller spørgsmål i top‑level kommentarer, gæsten svarer i tråden, og nævnelses‑ og svar‑notifikationer trækker folk tilbage. Sæt `noNewRootComments` efter vinduet lukker, så kun svar fortsætter.

Community Spotlight (OpenWebs email‑collector, counter og redirect‑cards) har ingen ækvivalent. Widget’en understøtter tilpasset header‑HTML over kommentar‑input via `headerHTML`, som dækker en call‑to‑action men ikke en email‑capture‑form.

### Live Blog

Der findes ingen FastComments Live Blog. OpenWebs Live Blog er et redaktionelt produkt: reportere tildelt i Admin‑Panelet poster opdateringer med indlejrede links, tweets og video, og læsere følger med (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Det FastComments tilbyder til live‑dækning er læsersiden: en Live Chat widget (`embed-live-chat.min.js`) til streaming‑chat, og kommentar‑widgeten i chat‑tilstand (`showLiveRightAway` plus `newCommentsToBottom`) ved siden af din live‑dækning. For de redaktionelle opdateringer selv, beholder udgivere, der skifter fra OpenWeb, dem i deres CMS eller et dedikeret live‑blog‑værktøj og indlejrer FastComments nedenunder til diskussion. Medie‑indlejringer (YouTube, SoundCloud og andre) understøttes i kommentarer, så personale‑opdateringer postet som kommentarer bærer rig medie.

### Topic Tracker, Notifications and Email

OpenWebs Topic Tracker lader en læser følge emner og forfattere udtrukket fra side‑metadata og få besked, når nye artikler matcher (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments har ingen emne‑ eller forfatter‑følgning på tværs af artikler. Læsere abonnerer på en side fra notifikations‑klokken og modtager opdateringer for den tråd, med frekvens valgt per abonnement: hvert minut, time‑digest eller dag‑digest. Hvis tværs‑artikel‑følgning er vigtig for din fastholdelse, mister du denne funktion.

Alt andet i Notification Bell map‑pes. Widget’en har en klokke, der bliver rød med ulæst‑tæller og lister: svar til dig, svar i en tråd du har kommenteret i, nævnelser, up‑votes på dine kommentarer, aktivitet på abonnerede sider, badge‑tildelinger og direkte beskeder (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In‑app notifikationer er real‑time over en WebSocket. Svar‑ og nævnelses‑emails sendes hvert minut kun for godkendte kommentarer.

For SSO‑brugere, send `optedInNotifications` og `optedInSubscriptionNotifications` i payloaden, så FastComments opdaterer deres præferencer ved næste side‑load. Emails kræver en email‑adresse i payloaden. Email‑skabeloner er redigerbare per type og per locale under Customize, Email Templates, og afsendelse fra dit eget domæne med DKIM understøttes. Moderators og admins får et dagligt, ugentligt eller månedligt digest med et‑klik godkend, svar og spam‑links.

OpenWebs Notification Webhook poster per‑user notifikations‑events (`replied-message`, `liked-message`, `topic-by-keyword` osv.) til din endpoint. FastComments webhooks dækker kommentar‑ressourcen: created, updated og removed, med så mange abonnements‑endpoints du ønsker (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Hvis du brugte notifikations‑webhooken til at fodre dit eget email‑system, vil du genopbygge den logik på kommentar‑events, eller lade FastComments sende emailene.

### SSO: Fra codeA/codeB til en signeret payload

OpenWebs handshake har seks trin: vent på `spot-im-api-ready`, OpenWeb mint‑er `codeA`, din klient sender den til din backend, din backend bekræfter brugeren og kalder `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb return‑er `codeB`, og din klient giver `codeB` tilbage til OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Logout kalder `window.SPOTIM.logout()`.

FastComments Secure SSO har ingen round‑trip og ingen ny endpoint på din side. Når du renderer siden for en logget‑ind bruger, serialiserer din backend brugeren, Base64‑encodes den, og signerer den med HMAC‑SHA256 ved brug af din API‑secret. Widget’en sender payloaden med sine requests, og FastComments verificerer signaturen (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). I Node:

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

Timestampet er epoch‑millisekunder og afvises, hvis det er ældre end to dage. For en logget‑ud læser, udelad de tre signerede felter og send kun `loginURL` (eller en `loginCallback` funktion), så widget’en viser en login‑prompt i stedet for en composer. Fuldstændige eksempler i Node, Java og PHP findes i <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a>.

Brugere oprettes ved første side‑load. Du bulk‑registrerer ingen. Da OpenWeb‑importøren matcher kommentar‑forfattere på `user_name`, får en bruger, hvis SSO‑payload bærer samme `username`, deres importerede kommentarer første gang de loader en tråd, og kan redigere eller slette dem derefter. Der findes også en SSO‑bruger‑API, hvis du vil for‑oprette brugere.

Hver gang payloaden sendes, opdaterer FastComments bruger‑recorden ud fra den, så ændret display‑navn eller avatar på din side propagere ved næste side‑visning. Sæt et felt til `null` for at rydde det.

Hvis du brugte OpenWebs tredjeparts‑SSO med Auth0, Gigya eller Piano via `window.SPOTIM.startSSOForProvider`, er FastComments‑flowet det samme som ovenfor: når din provider har autentificeret brugeren, bygger din backend og signerer payloaden. Der er ingen provider‑specifik integration at konfigurere på FastComments‑siden.

To andre muligheder findes. Simple SSO sender bruger‑objektet usigneret fra klienten, for platforme uden backend, og markerer aktivitet som verificeret, når en email er til stede (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 signerer dit personale ind i FastComments‑dashboardet selv via Okta, Azure AD eller ADFS, med rolle‑mapping, og er tilgængelig på enterprise‑planer (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

OpenWebs per‑artikel Moderations‑Policy API har fire værdier: `spot_policy`, `approve_all`, `publish_and_moderate` og `require_approval`. FastComments konfigurerer de samme adfærd i Moderation Settings: automatisk godkendelse til eller fra, godkendelse kun for en brugers første kommentar, og auto‑godkend kun verificerede (loggede‑ind eller SSO) kommentarer. Regler anvendes site‑wide eller på et URL‑ID‑mønster som `*/politics/*`, som er hvordan du genskaber per‑sektion‑politik. Hver kommentar, godkendt eller ej, lander i Moderate Comments‑dashboardet, så publish‑then‑review‑modellen er standardvisningen der (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Import bevarer moderations‑status. OpenWeb `message_status` af `approved` importeres som godkendt og gennemgået; `rejected` importeres som spam og gennemgået; alt andet importeres som ikke‑godkendt og ikke‑gennemgået, så det vises i din moderations‑kø. `reports_count` bliver kommentarens flag‑tæller.

Automatiseret moderation i FastComments er lagdelt i stedet for et enkelt system som Aida:

- En spam‑klassifikator, kontinuerligt trænet, tilgængelig som en delt model på tværs af alle lejere eller isoleret til din lejer, med en tillids‑faktor der slapper filtrering for lang‑varende eller ofte‑pinned brugere.
- En valgfri ChatGPT 4 spam‑check på Flex‑billing.
- Billed‑indholds‑moderation på lav, medium eller høj følsomhed for uploadede billeder.
- En ord‑blacklist på ca. 450 standard‑fraser, redigerbar, som maskerer matches med stjerner. Her kommer dine OpenWeb begrænsede ord hen.
- Flag‑tærskler der automatisk skjuler en kommentar efter N rapporter.
- Gentagen og næsten‑duplikat‑besked‑forebyggelse, altid aktiv.
- AI Agents: hændelses‑drevne agenter med en eksplicit værktøjs‑allowlist (mark spam, approve, lock, pin, warn by DM, ban, award badge, reply). Hver agent starter i dry run, følsomme værktøjer kan gate‑læses bag menneskelig godkendelse, og hver handling logges med en begrundelse og confidence‑score.

OpenWebs User Muting API lader én SSO‑læser mute en anden. FastComments‑ækvivalenten er Block User i kommentar‑menuen, tilgængelig for enhver logget‑ind læser. Bans er en moderator‑handling: permanent eller i en fastsat varighed, eventuelt en shadow‑ban (brugeren ser sin kommentar, men ingen andre gør), eventuelt efter hashed IP, med plus‑aliases af en email behandlet som én adresse. Den bannede bruger‑liste er søgbar på email, navn, moderator og den kommentar der udløste bannet.

Moderate Comments‑dashboardet understøtter filtre (needs review, needs approval, spam, flagged, from banned users) og tekst‑søgning, bulk‑handlinger med undo og pause, "select all matching" for meget store køer, moderations‑grupper så dit sports‑desk kun ser sports‑tråde, per‑kommentar‑logge der viser hvorfor en email gik eller ikke gik ud, og delbare filtrerede links. Moderators har kun dashboardet; de kan ikke ændre indstillinger eller importere data.

### Analytics

FastComments Analytics viser brugere online lige nu på tværs af dine sites og per side, top‑sider efter kommentarer eller efter live‑læser‑antal, og per‑dag serier for side‑loads, kommentarer, stemmer og oprettede konti (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Moderator‑statistik er separat. Tællinger er næsten real‑time, forsinket med højst et minut, og hver side‑load tælles i stedet for at blive samplet.

Det du ikke vil finde, er noget om annonce‑fyld, CPM eller indtægter, fordi der ingen annoncer er. Hvis OpenWebs dashboard var din kilde til engagement‑til‑indtægt‑rapportering, flytter den rapportering til din egen ad‑stack.

### Monetization

OpenWeb placerer annoncer inde og omkring Conversation og tilbyder en Standalone Ad‑enhed, med kampagner sat op gennem din OpenWeb‑kontakt (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments kører ingen annoncer i widgeten, har ingen revenue‑share, og indlæser ingen tredjeparts‑ad‑ eller tracking‑scripts. Widget’en er en iframe du placerer; ad‑slots over og under den er dine og kører gennem hvad du allerede bruger.

Afvejningen er eksplicit: du mister hvad OpenWeb betalte dig, og du får en fast, forudsigelig omkostning og en widget, der ikke tilføjer annonce‑forespørgsler til din side. Branding fjernes på Flex‑ og Pro‑planer, og white‑labeling er tilgængelig på Pro‑ og Enterprise‑planer.

### Data Export and Privacy

Alle kommentar‑data kan eksporteres fra FastComments‑dashboardet som CSV når som helst, med datoer i UTC ISO‑format, og de samme data er tilgængelige via API’en. Webhooks dækker løbende sync. Import‑filer slettes fra FastComments så snart importen er færdig.

For GDPR og CCPA leverer OpenWeb en eksport‑ og slet‑API, hvor slettede brugeres kommentarer forbliver knyttet til en tilfældig gæstekonto (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments understøtter data‑eksport og slet‑anmodninger, tilbyder en Data Processing Agreement, og kører en separat EU‑deployment på <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> med data replikeret kun inden for EU‑points of presence. Opret din konto der, hvis dine læsere er i Europa. I EU‑regionen kræver AI‑agent‑bans altid menneskelig godkendelse for at opfylde DSA Artikel 17.

Kommentar‑data i den globale deployment er replikeret på tværs af regioner inklusiv en Singapore‑node, og widget’en serveres fra FastComments’ egen DNS og CDN. Embed‑scriptet er under 30 KB på disk og omkring 6 KB komprimeret på netværket.

### Mobile SDKs

OpenWeb leverer Android, iOS og React Native SDK’er med Conversation, Articles, Authentication, Notifications, Reactions og In Conversation Polls. FastComments leverer native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> og <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> biblioteker med trådet kommentarer, live‑opdateringer over WebSocket, Secure SSO, stemmer, nævnelser, billed‑uploads, moderations‑handlinger (flag, pin, lock, block), tematisering, en live‑chat‑tilstand og en social feed‑komponent. EU‑region er en konfigurations‑flag. Der er ingen separat ad‑SDK fordi der ingen annoncer er.

### Embed and SPA Integration

OpenWeb‑launcheren og containeren:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments‑ækvivalenten:

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

Dit tenant‑ID findes på <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">embed code page</a>, når du har en konto. `data-article-tags` har ingen ækvivalent, da der ikke er nogen topic‑følgning; hashtags i kommentarer er en anden funktion.

For uendelig scroll og single‑page apps, er OpenWebs Virtual Pages‑tilgang én container per artikel. I FastComments kalder du `FastCommentsUI(element, config)` per tråd og senere `instance.update(newConfig)` for at skifte URL‑ID eller `instance.destroy()` for at fjerne den (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular og SolidJS‑bibliotekerne håndterer dette når config‑prop’en ændres. Lifecycle‑callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) erstatter `spot-im-*` DOM‑events du lyttede på.

Kommentar‑tællere på indeks‑sider bruger comment count widget, enkelt eller i bulk. For SEO renderes kommentarer direkte i siden for søgemaskine‑crawlere i stedet for inde i iframe, så der er ingen SEO‑API‑call at konfigurere.

### Step-by-Step Cutover

**1. Opret kontoen og konfigurer grundlæggende.** Tilmeld dig på fastcomments.com eller eu.fastcomments.com. Indstil dine moderations‑indstillinger, ord‑blacklist, stemme‑stil, standard‑sortering og tilpasset CSS på widget‑tilpasningssiden. Tilføj moderatorer og moderations‑grupper. Hvis du har mange admin‑brugere, understøtter vi import af dem for dig.

**2. Kør en første import.** Gå til <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, vælg OpenWeb (.csv) og upload. Importen kører som en baggrunds‑job; siden viser række‑tællinger og status, og du får en email, når den er færdig (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Hver OpenWeb‑message‑ID bliver FastComments‑kommentar‑ID, så genkørsel af importen skaber ikke dubletter.

**3. Verificer tællinger.** Sammenlign job‑tællingen med din eksport. Åbn et par høj‑trafik URL‑ID’er i moderations‑dashboardet og spot‑tjek forfattere, datoer, stemme‑totaler og godkendelses‑status. Bekræft at afviste kommentarer vises som spam, og at ventende kommentarer sidder i køen.

**4. Byg SSO‑payloaden.** Implementér signerings‑koden ovenfor i din backend, med samme `id` og `username` som du brugte med OpenWeb. Test med en staff‑konto på en staging‑side: brugerens importerede kommentarer vises som deres, og redigering og sletning dukker op i deres kommentar‑menu.

**5. Skift embed på en staging‑skabelon.** Erstat launcheren og containeren med FastComments‑snippet’en, map‑p `data-post-id` til `urlId` og `data-post-url` til `url`. Fjern `window.SPOTIM.logout()` og `spot-im-*` lyttere, eller map dem til callbacks. Anvend din CSS i en tilpasnings‑regel i stedet for i kode, så den testes på hver FastComments‑release.

**6. Kør parallelt.** Sæt FastComments på en sektion eller en procentdel af artiklerne, mens OpenWeb forbliver på resten. Intet på OpenWeb‑siden behøver at ændres. Hold øje med moderations‑køen og analytics‑siden. Læsere, der kommenterer på FastComments‑sider i dette vindue, er ikke i din OpenWeb‑eksport, så planlæg den endelige import før de starter, ikke efter.

**7. CSP og DNS.** Hvis du kører en Content‑Security‑Policy, tillad `cdn.fastcomments.com` og `fastcomments.com` (eller `eu.fastcomments.com`) for `script-src`, `frame-src` og `connect-src`, og fjern `spot.im` og `openweb.com`‑indgangene, når launcheren er væk. Intet ændres i din egen DNS. Ingen redirects er nødvendige, fordi URL‑ID‑erne matcher.

**8. Endelig import og go live.** Træk en sidste OpenWeb‑eksport, der dækker parallel‑kørsels‑vinduet, upload den (re‑import er sikkert), deploy derefter skabelon‑ændringen på alle sider og fjern launcheren, Reactions, Topic Tracker, Spotlight, bell og ad‑containere.

**9. Go‑live tjekliste.**

- Live‑commenting synlig på en produktions‑artikel fra to browsere.
- SSO login, logout og en kommentar under en rigtig abonnent‑konto.
- Moderators modtager digest og kan godkende fra den.
- Svar‑ og nævnelses‑emails ankommer og linker til den korrekte side.
- Bans‑liste og ord‑blacklist udfyldt.
- Page Reacts og kommentar‑tællere renderes hvor Reactions og tælleren plejede at være.
- CSP‑rapporter rene.
- En sidste kommentar‑tæller‑sammenligning mellem din eksport og dashboardet.

### Hvad du mister og hvad der er anderledes

Vær direkte om hullerne:

- **Live Blog.** Ingen ækvivalent. Hold den i dit CMS eller et live‑blog‑værktøj og placer FastComments under den.
- **Topic Tracker.** Ingen tværs‑artikel‑topic eller forfatter‑følgning. Kun side‑abonnementer.
- **Community Spotlight.** Intet CTA‑kort produkt. `headerHTML` giver dig en besked over komponisten, ikke en email‑capture.
- **Ad‑indtægter.** Ingen. Widget’en er ad‑fri som design.
- **Notification webhook.** Webhooks er på kommentar‑events, ikke per‑user notifikations‑events.
- **Threading på import.** Den nuværende importør flader svar ud til top‑level kommentarer på samme side. Fortæl os, hvis du har brug for at genopbygge træet.
- **Reactions‑historik.** Artikel‑niveau reaktions‑tællere er ikke i kommentar‑eksporten og starter fra nul.
- **Polls‑historik.** Poll‑definitioner og stemmer er ikke i kommentar‑eksporten; poll‑tekst importeres, poll‑en gør den ikke.
- **Login‑model.** Læsere uden SSO logger ind med magic‑link i stedet for password eller social login‑knap.
- **Human moderation staff.** OpenWeb leverer et moderations‑team med Aida. FastComments leverer værktøjer, klassifikatorer og agenter; menneskene er dine.

Hvad du får, i samme ånd: en widget, der kun tilføjer et lille script og ingen ad‑requests, moderation som én person kan køre for et stort site med bulk‑handlinger og agenter, SSO som en signerings‑funktion i stedet for en protokol, og en leverandør, der ikke er under domstols‑opsyn.

### Timeline and the Free Import Offer

Planlæg en til to uger for en udgiver med én SSO‑integration og et par hundrede tusinde kommentarer: en dag eller to på eksport og første import, et par dage på SSO og skabeloner, et parallel‑kørsels‑vindue, derefter den endelige import og skift. Platformen håndterer allerede denne skala: United Cloud driver mere end ti portaler og millioner af kommentarer på FastComments, og itsfoss.com flyttede en 88.000‑kommentar‑historik fra en anden leverandør via den samme selv‑service importør.

FastComments importerer din OpenWeb CSV‑eksport gratis, hjælper dig med at køre OpenWeb og FastComments parallelt under cut‑over, og hjælper med selve migrationen, inklusiv tråd‑opbygning og bruger‑match‑spørgsmål. Enterprise‑planer inkluderer en SLA, support‑svar inden for en time i arbejdstiden, og muligheden for en Isolated Cloud‑deployment i din egen cloud‑konto (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Flex‑brugsbaseret prisfastsættelse er tilgængelig for sites, der vil starte uden kontrakt.

Skriv til <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> med din eksport‑størrelse og din SSO‑opsætning, så vender vi tilbage med en plan.

### In Conclusion

Træk din eksport i dag. Resten af migrationen er mekanisk: de samme post‑ID’er bliver URL‑ID’er, de samme brugernavne gør krav på deres kommentarer via SSO, moderations‑status overføres, og embed‑koden er et direkte swap. De steder, hvor FastComments afviger, er listet ovenfor, så du kan beslutte med fakta foran dig.

Cheers!{{/isPost}}