[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Hoe te migreren van OpenWeb naar FastComments in 2026[/postlink]

{{#unless isPost}}
Een functie‑voor‑functie gids voor uitgevers die overstappen van OpenWeb (voorheen Spot.IM): wat 1:1 overeenkomt, wat anders is, hoe de CSV‑import werkt, hoe de SSO‑handshake verandert, en een stapsgewijs cutover‑plan.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit artikel bevat technische jargon

Deze gids is bedoeld voor product‑ en engineering‑leiders en community‑managers die vandaag OpenWeb gebruiken en een plan nodig hebben om te migreren. Het behandelt elk OpenWeb‑oppervlak, noemt het FastComments‑equivalent, en geeft duidelijk aan waar er geen 1:1‑overeenkomst is.

### Waarom nu

Op 30 september 2026 heeft de rechtbank van het district Tel‑Aviv de benoeming van een tijdelijke curator over OpenWeb bevolen op verzoek van haar kredietverstrekker, Mars Growth Capital, die een eersteklas pandrecht heeft op de activa en rekeningen van het bedrijf en dit wil afdwingen tegen de Israëlische activa, bankrekeningen en intellectueel eigendom van OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30 sept.</a>). Een tijdelijke trustee, Adv. Ehud Gindes, werd de volgende dag benoemd (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4 okt.</a>). Eerder in 2026 beëindigde Microsoft, een van de grootste klanten van OpenWeb, haar samenwerking en hield betalingen in vanwege een verkeersgeschil dat OpenWeb afwijst (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28 sept.</a>).

OpenWeb zegt dat het platform blijft functioneren. Rechtbanktoezicht, een kredietverstrekker die pandrechten op de IP afdwingt waarop jouw commentaarwidget steunt, en een trustee die de waarde van de activa moet behouden, zijn geen voorwaarden die een uitgever wil onder een kern‑engagement‑oppervlak. Als je nog geen volledige data‑export hebt gedownload, doe dat dan eerst, vandaag, voordat je verder gaat met deze gids.

### Wat je nodig hebt voordat je begint

Verzamel dit voordat je code aanraakt:

- **Je OpenWeb‑commentaar‑export.** OpenWeb biedt een Export‑API (v4) die zip‑CSV‑bestanden levert, maximaal 100 000 reacties per bestand, met datum‑vensters tot één maand en download‑links die na een week verlopen (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Vraag elk venster dat je nodig hebt aan en bewaar de bestanden op een veilige plek. Als je OpenWeb‑contact in het verleden een CSV‑export via het Admin‑paneel heeft geleverd, bewaar die dan ook. De FastComments‑importeur leest de OpenWeb‑CSV met kolommen zoals `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` en `url`.
- **Je Spot‑ID en de lijst met post‑IDs.** Elke `data-post-id` die je aan de launcher doorgeeft, wordt een FastComments‑URL‑ID. Als je post‑IDs CMS‑artikel‑IDs zijn, noteer dan hoe ze worden gegenereerd zodat je dezelfde waarden kunt uitgeven aan de FastComments‑kant.
- **Je SSO‑gebruikerslijst.** Specifiek de `primary_key`‑ en `user_name`‑waarden die je bij OpenWeb hebt geregistreerd. Auteurschap van reacties wordt tijdens import gematcht op gebruikersnaam, dus je wilt dezelfde gebruikersnamen doorgeven in de FastComments‑SSO‑payload.
- **Je moderator‑lijst en rollen.** Admin‑, moderator‑ en journalistaccounts, en welke secties elk modereert.
- **Je moderatie‑configuratie.** Site‑brede beleid (alles goedkeuren, publiceren en modereren, goedkeuring vereisen), per‑artikel overrides, lijst met verboden woorden, gedempte en geblokkeerde gebruikers.
- **Aangepaste CSS‑ en themainstellingen.** Exporteer alles wat je in het Admin‑paneel hebt, zodat je het kunt herbouwen in de FastComments‑widget‑aanpassingspagina.
- **Waar de launcher zich bevindt in je templates**, inclusief alle pagina’s die Reactions, Topic Tracker, Spotlight, de Notification Bell of een Standalone Ad zonder Conversation uitvoeren.

### Hoe OpenWeb‑post‑IDs map naar FastComments‑URL‑IDs

FastComments koppelt een reactiedraad aan een `urlId`. Standaard is de URL‑ID de opgeschoonde paginanaam, maar je kunt elke string gebruiken, en dat is precies wat de OpenWeb‑importeur doet: hij leest de `post_id`‑kolom en gebruikt die als FastComments‑URL‑ID voor elke reactie op dat artikel. Hij slaat ook de `url`‑kolom op als weergave‑URL zodat moderatielinks en notificatie‑e‑mails naar de juiste pagina wijzen.

Dus de regel voor je templates is: waar je `data-post-id="POST_ID"` en `data-post-url="ARTICLE_URL"` aan OpenWeb doorgeeft, geef je `urlId: 'POST_ID'` en `url: 'ARTICLE_URL'` aan FastComments. Geïmporteerde draden komen overeen met live‑draden zonder redirects en zonder URL‑herwriting. Zie <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">de URL‑ID‑documentatie</a>.

Als je liever draden in de toekomst op URL baseert in plaats van op post‑ID, importeer dan eerst en gebruik daarna de tool **Migrate Comments** onder **Manage Data** om draden in bulk van post‑ID naar URL te verplaatsen.

### De feature‑map

| OpenWeb | FastComments | Opmerkingen |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live by default. New comments collapse behind a "Show N New Comments" button, or appear instantly with `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Import preserves `likes_count` and `dislikes_count`. Heart style and "disable voting" are config options. |
| Reactions (article-level icons) | Page Reacts | Configurable icon set on the page, remembered per user. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` caps nesting. See the import note on threads below. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` sets the default per site or per URL pattern. |
| User profiles | User profiles | Avatar, bio, badges, karma, activity, DMs. Works for SSO users. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Set in the SSO payload. No backend lookup call needed. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderators pin from the widget or dashboard. An AI agent template pins top‑voted comments. |
| In Conversation Polls | Polls on comments | 2 to 10 options, close dates, privacy modes, creator restrictions. |
| Ask Me Anything formats | No dedicated product | Run as a thread with the author's SSO user labeled and the question pinned. |
| Live Blog | No 1:1 equivalent | Live Chat widget and chat‑mode comments exist. Editorial live blogging stays in your CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Users follow a page, not a topic or author. No cross‑article follow. |
| Notification Bell | Notification bell in the widget | Replies, mentions, thread activity, votes, subscriptions, badges, DMs. |
| Email notifications | Email notifications with templates | Per-user opt-in via SSO flags. Custom templates, branded sender. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC‑SHA256 payload) | No register‑user call. Sign a payload server‑side, pass it to the widget. |
| Third‑party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Same payload. Your backend signs it once the user is logged in. |
| Identity (OpenWeb registration screens) | Magic‑link login, Simple SSO | Readers log in with an email link. No passwords. |
| Moderation policy per article | Customization rules per URL ID pattern | Approval mode, spam filter and more vary by `*/section/*` patterns. |
| Aida AI moderation | Spam classifiers, ChatGPT 4 option, image moderation, AI Agents | Agents start in dry run and can require human approval. |
| Restricted words | Word blacklist | ~450 default phrases, editable. |
| User muting | Block User | Per‑reader block from the comment menu. |
| Bans | Bans | Permanent, timed, shadow, IP‑hashed, plus‑alias aware. |
| Moderation Panel | Moderate Comments dashboard | Filters, bulk actions with undo, moderation groups, digest emails with one‑click approve. |
| Notification Webhook | Webhooks | Comment created, updated, deleted. No per‑user notification webhook. |
| Engagement dashboard | Analytics | Live users online, top pages, page loads, comments, votes, accounts by day. No ad revenue reporting. |
| In‑conversation ads, Standalone Ad | None | FastComments runs no ads. You keep your own ad stack around the widget. |
| Social Reviews (star ratings) | Ratings and Reviews | Separate product on the same account. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Recirculation driven by comment activity. |
| Comment Counter | Comment count widgets | Single and bulk. |
| Export Comments API | CSV export, API, webhooks | Export from the dashboard any time. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com keeps data in the EU. DPA available. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, live updates, threading, moderation actions. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` and `destroy()` for SPAs. |

De rest van deze sectie gaat dieper in op elke groep.

### Conversation, Votes and Reactions

OpenWeb’s Conversation is een realtime‑draad. De FastComments‑commentaarwidget is dat ook: reacties, bewerkingen, verwijderingen, stemmen en moderatie‑acties worden naar iedereen die de draad bekijkt gepusht (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Standaard verschijnen nieuwe reacties van anderen achter een “Show 2 New Comments”‑knop zodat de pagina niet springt onder de lezer. Voor live‑evenementen zet je `showLiveRightAway` zodat ze meteen renderen, en `newCommentsToBottom` als je wilt dat ze naar beneden vloeien als een chat.

Likes en dislikes worden up‑ en down‑votes. De importeur behoudt beide tellingen per reactie. Als je community gewend is aan één like, schakel dan de stemstijl naar harten in de widget‑aanpassingspagina. Stemmen kan ook volledig uitgeschakeld worden.

OpenWeb Reactions is een apart widget met twee tot vier gelabelde iconen op het artikel (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Het FastComments‑equivalent is Page Reacts: een configureerbare set reactie‑afbeeldingen gekoppeld aan de commentaarwidget, onthouden per pagina en per gebruiker (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Reactietellingen maken geen deel uit van de OpenWeb‑commentaar‑export, dus ze starten vanaf nul.

Sorteren map direct. OpenWeb’s `data-sort-by`‑waarden best, newest en oldest komen overeen met Most Relevant, Newest First en Oldest First. Stel de standaard in met `defaultSortDirection` (`MR`, `NF`, `OF`) in code of in een aanpassingsregel. Lezers kunnen in de widget wisselen.

`data-read-only="true"` wordt `readonly: true`, wat nieuwe reacties, stemmen, bewerkingen en verwijderingen blokkeert. `data-post-staleness-days` heeft geen direct equivalent, maar een aanpassingsregel kan `readonly` toepassen op een URL‑ID‑patroon, en je kunt het ook vanuit je templates omdraaien op basis van artikel‑leeftijd. `data-messages-count` is de paginagrootte, in te stellen in de widget‑aanpassingspagina van 10 tot 200 reacties.

### Replies and Threading

FastComments ondersteunt standaard onbeperkte nesting; `maxReplyDepth` beperkt dit (`1` geeft een platte twee‑niveau‑structuur). De OpenWeb‑CSV bevat `parent_id` en `parent_comment_id` kolommen. De huidige importeur importeert elke rij als een top‑level reactie op zijn pagina, in datumvolgorde, met auteur, tijdstempel, stemmen, vlag‑telling en goedkeuringsstatus intact. Hij bouwt de ouder‑kind‑boom niet opnieuw op. Als je draden veel replies bevatten, laat ons dat weten wanneer je de export stuurt; we kunnen threading afhandelen tijdens de import in plaats van je een afgevlakte draad te geven.

### User Profiles and Badges

FastComments‑gebruikers, inclusief SSO‑gebruikers, krijgen een profiel met avatar, weergavenaam, bio, sociale links, badges, karma, reactietelling, een openbare activiteitenfeed en directe berichten (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Elk van de activiteiten, profielreacties en DM‑oppervlakken kan per gebruiker in de SSO‑payload of globaal in de configuratie uitgeschakeld worden.

OpenWeb’s Author Badge vereist dat je `GET /sso/v1/user/{primary_key}` aanroept voor de auteur en de geretourneerde ID in `data-author-id` plaatst. In FastComments zet je `displayLabel: 'Author'` (of elk label tot 100 tekens) in de SSO‑payload, en `isAdmin` of `isModerator` voor personeel. Het label wordt naast hun naam op elke reactie weergegeven. Voor een rijker systeem configureer je badges onder **Customize → Badges**: afbeelding‑ of tekst‑badges, automatisch toegekend op drempels (reactietelling, up‑votes, gepinde reacties, veteranenstatus, reactietempo) of handmatig, en toewijsbaar vanuit de SSO‑payload met `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Elke moderator kan een reactie vastzetten of losmaken vanuit het reactiemenu in de widget of vanuit het moderatiedashboard. Vastgezette reacties worden live naar iedereen in de draad gepusht. Als je dit geautomatiseerd wilt, levert de AI‑Agents‑functie een **Top Comment Pinner**‑template die een top‑level reactie vastzet zodra deze een stem‑drempel overschrijdt (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb’s In‑Conversation Polls laten staff een poll met 2‑4 opties aan een top‑level reactie koppelen. FastComments‑polls koppelen ook aan een reactie, met 2‑10 opties, een optionele sluitingsdatum, resultaat‑privacy (anoniem, alleen admins, iedereen) en een “stem om resultaten te zien” modus. Je kiest wie polls mag maken (uitgeschakeld, admins en moderators, iedereen) en of anonieme lezers mogen stemmen. Polls worden ook blootgesteld via de openbare API voor creatie vanuit je CMS.

OpenWeb heeft Ask Me Anything‑formaten op het platform. FastComments heeft geen apart Q&A‑product. De praktische vervanging is een normale draad op een dedicated URL‑ID: de gast‑SSO‑gebruiker draagt een `displayLabel`, je zet de intro‑reactie vast, lezers stellen vragen in top‑level reacties, de gast beantwoordt in de draad, en mention‑ en reply‑notificaties trekken mensen terug. Zet `noNewRootComments` na het sluiten van het venster zodat alleen replies doorgaan.

Community Spotlight (OpenWeb’s e‑mail‑collector, teller en redirect‑kaarten) heeft geen equivalent. De widget ondersteunt aangepast header‑HTML boven de invoer via `headerHTML`, wat een call‑to‑action dekt maar geen e‑mail‑capture‑formulier.

### Live Blog

Er is geen FastComments Live Blog. OpenWeb’s Live Blog is een redactioneel product: verslaggevers die in het Admin‑paneel updates posten met ingebedde links, tweets en video, en lezers volgen de updates (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Wat FastComments biedt voor live‑verslaggeving is de lezer‑kant: een Live Chat‑widget (`embed-live-chat.min.js`) voor streaming‑chat, en de commentaarwidget in chat‑modus (`showLiveRightAway` plus `newCommentsToBottom`) naast je live‑verslag. Voor de redactionele updates zelf houden uitgevers die van OpenWeb overstappen ze in hun CMS of een dedicated live‑blog‑tool en embedden FastComments eronder voor discussie. Media‑embeds (YouTube, SoundCloud en anderen) worden ondersteund binnen reacties, zodat staff‑updates als reacties rijke media bevatten.

### Topic Tracker, Notifications and Email

OpenWeb’s Topic Tracker laat een lezer topics en auteurs volgen die uit paginametagegevens worden gehaald en een melding krijgen wanneer nieuwe artikelen overeenkomen (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments heeft geen topic‑ of auteur‑volging over artikelen heen. Lezers abonneren zich op een pagina via de notificatie‑bel en ontvangen updates voor die draad, met frequentie gekozen per abonnement: elke minuut, uur‑samenvatting of dag‑samenvatting. Als cross‑article volgen belangrijk is voor je retentie‑cijfers, verlies je die functionaliteit.

Alles andere in de Notification Bell map. De widget heeft een bel die rood wordt met het ongelezen aantal en lijst: replies op jou, replies in een draad waarin je gereageerd hebt, mentions, up‑votes op jouw reacties, activiteit op geabonneerde pagina’s, badge‑toekenningen en directe berichten (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In‑app notificaties zijn realtime via een WebSocket. Reply‑ en mention‑e‑mails gaan elke minuut uit, alleen voor goedgekeurde reacties.

Voor SSO‑gebruikers geef je `optedInNotifications` en `optedInSubscriptionNotifications` mee in de payload en FastComments werkt hun voorkeuren bij bij de volgende paginalading. E‑mails hebben een e‑mailadres nodig in de payload. E‑mail‑templates zijn bewerkbaar per type en per locale onder **Customize → Email Templates**, en verzenden vanaf je eigen domein met DKIM wordt ondersteund. Moderators en admins krijgen een dagelijkse, wekelijkse of maandelijkse samenvatting met één‑klik goedkeuring, reageren en spam‑links.

OpenWeb’s Notification Webhook post per‑gebruiker notificatie‑events (`replied-message`, `liked-message`, `topic-by-keyword`, enz.) naar je endpoint. FastComments‑webhooks dekken de commentaar‑resource: created, updated en removed, met zoveel abonneer‑endpoints als je wilt (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Als je de notificatie‑webhook gebruikte om je eigen e‑mail‑systeem te voeden, moet je die logica opnieuw bouwen op commentaar‑events, of FastComments de e‑mails laten verzenden.

### SSO: Van codeA/codeB naar een ondertekende payload

OpenWeb’s handshake heeft zes stappen: wacht op `spot-im-api-ready`, OpenWeb maakt `codeA`, jouw client stuurt die naar je backend, je backend bevestigt de gebruiker en roept `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...` aan, OpenWeb retourneert `codeB`, en jouw client geeft `codeB` terug aan OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Logout roept `window.SPOTIM.logout()` aan.

FastComments Secure SSO heeft geen round‑trip en geen nieuw endpoint aan jouw kant. Wanneer je de pagina rendert voor een ingelogde gebruiker, serialiseert je backend de gebruiker, base64‑encodeert die, en ondertekent met HMAC‑SHA256 met je API‑secret. De widget stuurt de payload mee met zijn requests en FastComments verifieert de handtekening (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). In Node:

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

De timestamp is epoch‑milliseconden en wordt afgewezen als hij ouder is dan twee dagen. Voor een uitgelogde lezer laat je de drie ondertekende velden weg en geef je alleen `loginURL` (of een `loginCallback`‑functie) mee; de widget toont dan een login‑prompt in plaats van een composer. Volledige werkende voorbeelden in Node, Java en PHP staan in de <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code‑examples‑repository</a>.

Gebruikers worden aangemaakt bij de eerste paginalading. Je registreert niemand in bulk. Omdat de OpenWeb‑importeur commentauteurs matcht op `user_name`, claimt een gebruiker wiens SSO‑payload dezelfde `username` draagt zijn geïmporteerde reacties de eerste keer dat hij een draad laadt en kan ze daarna bewerken of verwijderen. Er is ook een SSO‑user‑API als je gebruikers vooraf wilt aanmaken.

Elke keer dat de payload wordt verzonden, werkt FastComments het gebruikersrecord bij, dus een gewijzigde weergavenaam of avatar aan jouw kant wordt bij de volgende paginabezoek doorgevoerd. Zet een veld op `null` om het te wissen.

Als je OpenWeb’s third‑party SSO met Auth0, Gigya of Piano via `window.SPOTIM.startSSOForProvider` gebruikte, is de FastComments‑flow hetzelfde als hierboven: zodra je provider de gebruiker heeft geauthenticeerd, bouwt je backend de payload en ondertekent die. Er is geen provider‑specifieke integratie die je op FastComments‑kant moet configureren.

Twee andere opties bestaan. Simple SSO stuurt het gebruikersobject onondertekend vanuit de client, voor platformen zonder backend, en markeert activiteit als geverifieerd wanneer een e‑mail aanwezig is (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 ondertekent je staff in het FastComments‑dashboard zelf via Okta, Azure AD of ADFS, met rol‑mapping, en is beschikbaar op enterprise‑plannen (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

OpenWeb’s per‑artikel Moderation Policy API heeft vier waarden: `spot_policy`, `approve_all`, `publish_and_moderate` en `require_approval`. FastComments configureert dezelfde gedragingen in **Moderation Settings**: automatische goedkeuring aan of uit, goedkeuring alleen vereist voor de eerste reactie van een gebruiker, en auto‑approve alleen voor geverifieerde (ingelogde of SSO) reacties. Regels gelden site‑breed of voor een URL‑ID‑patroon zoals `*/politics/*`, wat de manier is om per‑sectie beleid te reproduceren. Elke reactie, goedgekeurd of niet, belandt in het **Moderate Comments**‑dashboard, dus het publish‑then‑review‑model is de standaardweergave daar (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Import behoudt moderatiestatus. OpenWeb `message_status` van `approved` wordt geïmporteerd als goedgekeurd en beoordeeld; `rejected` wordt geïmporteerd als spam en beoordeeld; alles andere wordt geïmporteerd als niet‑goedgekeurd en niet‑beoordeeld zodat het in je moderatiewachtrij verschijnt. `reports_count` wordt de vlag‑telling van de reactie.

Geautomatiseerde moderatie in FastComments is gelaagd in plaats van één enkel systeem zoals Aida:

- Een spam‑classifier, continu getraind, beschikbaar als gedeeld model over alle tenants of geïsoleerd voor jouw tenant, met een trust‑factor die filteren versoft voor lang‑staande of vaak‑gepinde gebruikers.
- Een optionele ChatGPT 4‑spam‑check op Flex‑billing.
- Beeld‑contentmoderatie op lage, middel of hoge gevoeligheid voor geüploade afbeeldingen.
- Een woord‑blacklist van ongeveer 450 standaardzinnen, bewerkbaar, die matches maskeert met sterretjes. Hier komen jouw OpenWeb‑beperkte woorden terecht.
- Vlag‑drempels die een reactie automatisch verbergen na N meldingen.
- Herhaalde en bijna‑dubbele berichtpreventie, altijd aan.
- AI‑Agents: event‑gedreven agents met een expliciete tool‑allowlist (markeer spam, keur goed, vergrendel, pin, waarschuw via DM, ban, ken badge toe, beantwoord). Elke agent start in dry‑run, gevoelige tools kunnen achter menselijke goedkeuring worden geplaatst, en elke actie wordt gelogd met een rechtvaardiging en confidence‑score.

OpenWeb’s User Muting API laat één SSO‑lezer een andere dempen. Het FastComments‑equivalent is **Block User** in het reactiemenu, beschikbaar voor elke ingelogde lezer. Bans zijn een moderator‑actie: permanent of voor een bepaalde duur, optioneel een shadow‑ban (de gebruiker ziet zijn eigen reactie, anderen niet), optioneel per gehashte IP, met plus‑aliases van een e‑mail die als één adres wordt behandeld. De lijst met gebande gebruikers is doorzoekbaar op e‑mail, naam, moderator en de reactie die de ban triggerde.

Het **Moderate Comments**‑dashboard ondersteunt filters (needs review, needs approval, spam, flagged, from banned users) en tekst‑zoek, bulk‑acties met undo en pause, “select all matching” voor zeer grote wachtrijen, moderatie‑groepen zodat je sport‑desk alleen sport‑draden ziet, per‑reactie logs die laten zien waarom een e‑mail wel of niet is verzonden, en deelbare gefilterde links. Moderators hebben alleen het dashboard; ze kunnen geen instellingen wijzigen of data importeren.

### Analytics

FastComments Analytics toont gebruikers die nu online zijn over je sites en per pagina, top‑pagina’s op reacties of live‑lezers, en per‑dag series voor paginabezoeken, reacties, stemmen en aangemaakte accounts (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Moderator‑statistieken zijn apart. Tellingen zijn bijna realtime, met een vertraging van maximaal een minuut, en elke paginabezoek wordt geteld in plaats van gesampled.

Wat je niet zult vinden, is iets over advertentie‑vulling, CPM of inkomsten, omdat er geen advertenties zijn. Als OpenWeb’s dashboard jouw bron was voor engagement‑naar‑inkomsten‑rapportage, verschuift die rapportage naar je eigen advertentiestack.

### Monetization

OpenWeb plaatst advertenties binnen en rond de Conversation en biedt een Standalone‑Ad‑eenheid, met campagnes opgezet via je OpenWeb‑contact (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments draait geen advertenties in de widget, heeft geen revenue‑share, en laadt geen third‑party advertentie‑ of tracking‑scripts. De widget is een iframe die je plaatst; de advertentieruimtes erboven en eronder zijn van jou en draaien via wat je al gebruikt.

De afweging is expliciet: je verliest wat OpenWeb je betaalde, en je krijgt een vaste, voorspelbare kost en een widget die geen advertentieverzoeken aan je pagina toevoegt. Branding wordt verwijderd op Flex‑ en Pro‑plannen, en white‑labeling is beschikbaar op Pro‑ en Enterprise‑plannen.

### Data Export and Privacy

Alle commentaar‑data‑exports zijn beschikbaar vanuit het FastComments‑dashboard als CSV op elk moment, met datums in UTC‑ISO‑formaat, en dezelfde data is beschikbaar via de API. Webhooks dekken doorlopende synchronisatie. Import‑bestanden worden uit FastComments verwijderd zodra de import voltooid is.

Voor GDPR en CCPA biedt OpenWeb een export‑ en delete‑API waarbij verwijderde gebruikers‑reacties gekoppeld blijven aan een willekeurig gastaccount (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments ondersteunt data‑export‑ en verwijderingsverzoeken, biedt een Data Processing Agreement, en draait een aparte EU‑deployment op <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> met data die alleen binnen EU‑punten van aanwezigheid wordt gerepliceerd. Maak je account daar aan als je lezers in Europa zitten. In de EU‑regio vereisen AI‑agent‑bans altijd menselijke goedkeuring om te voldoen aan DSA Artikel 17.

Commentaar‑data in de globale deployment wordt gerepliceerd over regio’s inclusief een Singapore‑node, en de widget wordt geserveerd vanaf FastComments’ eigen DNS en CDN. Het embed‑script is onder 30 KB op schijf en ongeveer 6 KB gecomprimeerd over het netwerk.

### Mobile SDKs

OpenWeb levert Android, iOS en React Native SDK’s met Conversation, Articles, Authentication, Notifications, Reactions en In‑Conversation Polls. FastComments levert native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> en <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> bibliotheken met threaded comments, live updates via WebSocket, Secure SSO, stemmen, mentions, afbeelding‑uploads, moderatie‑acties (flag, pin, lock, block), thematisering, een live‑chat‑modus en een social‑feed component. EU‑regio is een configuratie‑vlag. Er is geen apart ad‑SDK omdat er geen advertenties zijn.

### Embed and SPA Integration

De OpenWeb‑launcher en container:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

Het FastComments‑equivalent:

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

Je tenant‑ID vind je op de <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">embed‑code‑pagina</a> zodra je een account hebt. `data-article-tags` heeft geen equivalent omdat er geen topic‑volging is; hashtags binnen reacties zijn een andere functie.

Voor infinite scroll en single‑page apps is OpenWeb’s Virtual Pages‑aanpak één container per artikel. In FastComments roep je `FastCommentsUI(element, config)` per draad aan en later `instance.update(newConfig)` om de URL‑ID te wisselen of `instance.destroy()` om te verwijderen (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). De React, Vue, Angular en SolidJS bibliotheken handelen dit af wanneer de config‑prop verandert. Lifecycle‑callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) vervangen de `spot-im-*` DOM‑events waar je naar luisterde.

Reactie‑tellers op index‑pagina’s gebruiken de comment‑count‑widget, enkel of in bulk. Voor SEO renderen we reacties direct in de pagina voor zoekmachine‑crawlers in plaats van binnen de iframe, dus er is geen SEO‑API‑call nodig om te configureren.

### Step-by-Step Cutover

**1. Maak het account aan en configureer de basis.** Meld je aan op fastcomments.com of eu.fastcomments.com. Stel je moderatie‑instellingen, woord‑blacklist, stem‑stijl, standaard sortering en aangepaste CSS in op de widget‑aanpassingspagina. Voeg moderators en moderatie‑groepen toe. Als je veel admin‑gebruikers hebt, ondersteunt het importeren voor jou.

**2. Voer een eerste import uit.** Ga naar <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, kies OpenWeb (.csv) en upload. De import draait als een achtergrond‑taak; de pagina toont rijtellingen en status, en je ontvangt een e‑mail wanneer hij voltooid is (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Elke OpenWeb‑message‑ID wordt de FastComments‑reactie‑ID, dus een herhaalde import maakt geen duplicaten.

**3. Verifieer tellingen.** Vergelijk de rijtelling van de taak met je export. Open een paar high‑traffic URL‑IDs in het moderatiedashboard en controleer auteurs, datums, stemtotalen en goedkeuringsstatussen. Bevestig dat afgewezen reacties als spam verschijnen en dat wachtende reacties in de wachtrij zitten.

**4. Bouw de SSO‑payload.** Implementeer de ondertekeningscode hierboven in je backend, met dezelfde `id` en `username` die je bij OpenWeb gebruikte. Test met een staff‑account op een staging‑pagina: de geïmporteerde reacties van de gebruiker verschijnen als die van hem, en bewerken en verwijderen verschijnen in het reactiemenu.

**5. Vervang de embed op een staging‑template.** Vervang de launcher en container door het FastComments‑snippet, waarbij je `data-post-id` map naar `urlId` en `data-post-url` naar `url`. Verwijder `window.SPOTIM.logout()` en `spot-im-*` listeners, of map ze naar de callbacks. Pas je CSS toe in een aanpassingsregel in plaats van in code zodat het bij elke FastComments‑release wordt getest.

**6. Run parallel.** Zet FastComments op een sectie of een percentage van artikelen terwijl OpenWeb op de rest blijft. Er hoeft niets aan de OpenWeb‑kant te veranderen. Houd de moderatiewachtrij en de analytics‑pagina in de gaten. Lezers die tijdens dit venster op FastComments‑pagina’s reageren, staan niet in je OpenWeb‑export, dus plan de finale import vóórdat ze beginnen, niet erna.

**7. CSP en DNS.** Als je een Content‑Security‑Policy draait, sta `cdn.fastcomments.com` en `fastcomments.com` (of `eu.fastcomments.com`) toe voor `script-src`, `frame-src` en `connect-src`, en verwijder de `spot.im` en `openweb.com`‑vermeldingen zodra de launcher weg is. Er verandert niets aan je eigen DNS. Geen redirects nodig omdat de URL‑IDs overeenkomen.

**8. Finale import en live‑gang.** Haal nog een OpenWeb‑export op die het parallel‑run‑venster dekt, upload (her‑import is veilig), deploy dan de template‑wijziging over alle pagina’s en verwijder de launcher, Reactions, Topic Tracker, Spotlight, bel‑ en advertentie‑containers.

**9. Live‑gang checklist.**

- Live‑commentaar zichtbaar op een productie‑artikel vanuit twee browsers.
- SSO‑login, logout en een reactie onder een echt abonnee‑account.
- Moderators ontvangen de digest en kunnen daarvan goedkeuren.
- Reply‑ en mention‑e‑mails komen aan en linken naar de juiste pagina.
- Ban‑lijst en woord‑blacklist zijn gevuld.
- Page Reacts en comment‑count‑rendering waar Reactions en de teller vroeger stonden.
- CSP‑rapporten schoon.
- Een laatste comment‑count‑vergelijking tussen je export en het dashboard.

### Wat je verliest en wat anders is

Wees duidelijk over de gaten:

- **Live Blog.** Geen equivalent. Houd het in je CMS of een live‑blog‑tool en plaats FastComments eronder.
- **Topic Tracker.** Geen cross‑article topic‑ of auteur‑volging. Alleen page‑subscriptions.
- **Community Spotlight.** Geen CTA‑kaartproduct. `headerHTML` geeft je een bericht boven de composer, geen e‑mail‑capture.
- **Advertentie‑inkomsten.** Geen. De widget is ad‑vrij ontworpen.
- **Notification webhook.** Webhooks zijn op comment‑events, niet per‑gebruiker notificatie‑events.
- **Threading bij import.** De huidige importeur vlakt replies af tot top‑level reacties op dezelfde pagina. Laat ons weten als je de boom wilt herbouwen.
- **Reactions‑geschiedenis.** Reactie‑telling per artikel staat niet in de comment‑export en start vanaf nul.
- **Polls‑geschiedenis.** Poll‑definities en stemmen staan niet in de comment‑export; de poll‑tekst wordt geïmporteerd, de poll zelf niet.
- **Login‑model.** Lezers zonder SSO loggen in via een magic‑link in plaats van een wachtwoord of social‑login‑knop.
- **Menselijke moderatie‑staff.** OpenWeb levert een moderatieteam met Aida. FastComments biedt tooling, classifiers en agents; de mensen zijn van jou.

Wat je wint, in dezelfde geest: een widget die één klein script toevoegt en geen advertentieverzoeken, moderatie die één persoon kan runnen voor een grote site met bulk‑acties en agents, SSO dat een ondertekenings‑functie is in plaats van een protocol, en een leverancier die niet onder gerechtelijk toezicht staat.

### Tijdlijn en de gratis import‑aanbieding

Plan één tot twee weken voor een uitgever met één SSO‑integratie en enkele honderdduizend reacties: een dag of twee voor de export en eerste import, een paar dagen voor SSO en templates, een parallel‑run‑venster, daarna de finale import en switch. Het platform heeft dit al op schaal: United Cloud draait meer dan tien portals en miljoenen reacties op FastComments, en itsfoss.com migreerde een geschiedenis van 88 000 reacties van een andere provider via dezelfde self‑service‑importeur.

FastComments importeert je OpenWeb‑CSV‑export gratis, helpt je OpenWeb en FastComments parallel te draaien tijdens de cutover, en ondersteunt de migratie zelf, inclusief threading‑ en gebruikers‑matching‑vragen. Enterprise‑plannen omvatten een SLA, support‑reacties binnen één uur tijdens kantooruren, en de optie van een Isolated Cloud‑deployment in je eigen cloud‑account (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Flex‑usage‑based pricing is beschikbaar voor sites die zonder contract willen starten.

Schrijf naar <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> met je export‑grootte en je SSO‑setup en we komen met een plan terug.

### In conclusie

Download je export vandaag. De rest van de migratie is mechanisch: dezelfde post‑IDs worden URL‑IDs, dezelfde gebruikersnamen claimen hun reacties via SSO, moderatiestatus wordt overgenomen, en de embed is een directe swap. De plaatsen waar FastComments verschilt, staan hierboven opgesomd zodat je met de feiten kunt beslissen.

Cheers!

{{/isPost}}

---