[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Hoe te migreren van OpenWeb naar FastComments in 2026[/postlink]

{{#unless isPost}}
Een functie-per-functie gids voor uitgevers die overstappen van OpenWeb (voorheen Spot.IM): wat 1:1 overeenkomt, wat anders is, hoe de CSV‑import werkt, hoe de SSO‑handshake verandert, en een stapsgewijs cutover‑plan.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit artikel bevat technische jargon

Deze gids is voor product‑ en engineering‑leads en community‑managers die vandaag OpenWeb gebruiken en een plan nodig hebben om te migreren. Het gaat door elke OpenWeb‑oppervlakte, noemt het FastComments‑equivalent, en zegt duidelijk waar er geen 1:1‑match is.

### Waarom nu

Op 30 september 2026 heeft de rechtbank van het district Tel Aviv de aanstelling van een tijdelijke curator over OpenWeb bevolen op verzoek van de kredietverstrekker, Mars Growth Capital, die een eersteklas pand op de activa en rekeningen van het bedrijf heeft en deze wil afdwingen tegen de Israëlische activa, bankrekeningen en intellectueel eigendom van OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30 sept</a>). Een tijdelijke trustee, Adv. Ehud Gindes, werd de volgende dag aangesteld (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4 okt</a>). Eerder in 2026 beëindigde Microsoft, een van de grootste klanten van OpenWeb, de samenwerking en hield betalingen in vanwege een verkeersgeschil dat OpenWeb afwijst (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28 sept</a>).

OpenWeb zegt dat het platform blijft functioneren. Rechtbanktoezicht, een kredietverstrekker die pandrechten op de IP waarop je commentaarwidget afhankelijk is afdwingt, en een trustee wiens taak het is de waarde van de activa te behouden, zijn geen voorwaarden die je als uitgever wilt voor een kernengagement‑oppervlak. Als je nog geen volledige data‑export hebt gedownload, doe dat dan eerst, vandaag, voordat je verder gaat met deze gids.

### Wat je nodig hebt voordat je begint

Verzamel deze voordat je aan code gaat:

- **Je OpenWeb commentaarexport.** OpenWeb biedt een Export‑API (v4) die zip‑CSV‑bestanden genereert, maximaal 100.000 commentaren per bestand, met datum‑bereikvensters van maximaal één maand en downloadlinks die na een week verlopen (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Vraag elk venster dat je nodig hebt aan en bewaar de bestanden op een veilige plek. Als je OpenWeb‑contact in het verleden een CSV‑export via het admin‑paneel heeft geleverd, bewaar die ook. De FastComments‑importeur leest de OpenWeb‑CSV met kolommen zoals `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` en `url`.
- **Je Spot‑ID en de lijst met post‑ID’s.** Elke `data-post-id` die je aan de launcher doorgeeft wordt een FastComments URL‑ID. Als je post‑ID’s CMS‑artikel‑ID’s zijn, noteer dan hoe ze worden gegenereerd zodat je dezelfde waarden kunt uitgeven aan de FastComments‑kant.
- **Je SSO‑gebruikerslijst.** Specifiek de `primary_key` en `user_name` waarden die je bij OpenWeb hebt geregistreerd. Auteurschap van commentaren wordt tijdens de import gematcht op gebruikersnaam, dus je wilt dezelfde gebruikersnamen doorgeven in de FastComments SSO‑payload.
- **Je moderator‑lijst en rollen.** Admin‑, moderator‑ en journalist‑accounts, en welke secties elk modereert.
- **Je moderatie‑configuratie.** Site‑brede beleid (alles goedkeuren, publiceren en modereren, goedkeuring vereisen), per‑artikel overrides, lijst met verboden woorden, gedempte en geblokkeerde gebruikers.
- **Aangepaste CSS en themainstellingen.** Exporteer alles wat je in het admin‑paneel hebt zodat je het kunt herbouwen op de FastComments widget‑aanpassingspagina.
- **Waar de launcher zich bevindt in je templates**, inclusief alle pagina’s die Reactions, Topic Tracker, Spotlight, de Notification Bell of een Standalone Ad zonder Conversation uitvoeren.

### AI‑ondersteunde migratie

FastComments biedt een [LLM‑Kit en MCP‑server om de migratie te versnellen](https://docs.fastcomments.com/guide-llm-kit.html).

### Hoe OpenWeb post‑ID’s naar FastComments URL‑ID’s worden gemapt

FastComments koppelt een commentaarthread aan een `urlId`. Standaard is de URL‑ID de opgeschoonde pagin URL, maar je kunt elke string gebruiken, en dat is precies wat de OpenWeb‑importeur doet: hij leest de `post_id`‑kolom en gebruikt die als FastComments URL‑ID voor elk commentaar op dat artikel. Hij slaat ook de `url`‑kolom op als weergave‑URL zodat moderatielinks en notificatie‑e‑mails naar de juiste pagina wijzen.

Dus de regel voor je templates is: waar je `data-post-id="POST_ID"` en `data-post-url="ARTICLE_URL"` aan OpenWeb hebt doorgegeven, geef `urlId: 'POST_ID'` en `url: 'ARTICLE_URL'` door aan FastComments. Geïmporteerde threads komen overeen met live threads zonder redirects en zonder URL‑herwerking. Zie <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">de URL‑ID‑documentatie</a>.

Als je de threads voortaan liever op URL baseert in plaats van op post‑ID, importeer eerst en gebruik vervolgens de Migrate Comments‑tool onder Manage Data om threads in bulk van de post‑ID naar de URL te verplaatsen.

### De functiemap

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Opmerkingen |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live standaard. Nieuwe commentaren worden samengevouwen achter een "Toon N nieuwe commentaren"‑knop, of verschijnen direct met `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Import behoudt `likes_count` en `dislikes_count`. Hart‑stijl en "stemmen uitschakelen" zijn configuratie‑opties. |
| Reactions (article-level icons) | Page Reacts | Configureerbare icoonset op de pagina, onthouden per gebruiker. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` beperkt nesting. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` stelt de standaard in per site of per URL‑patroon. |
| User profiles | User profiles | Avatar, bio, badges, karma, activiteit, DM’s. Werkt voor SSO‑gebruikers. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | In de SSO‑payload ingesteld. Geen backend‑lookup‑call nodig. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderators zetten vast vanuit de widget of dashboard. Een AI‑agent‑template zet top‑gestemde commentaren vast. |
| In Conversation Polls | Polls on comments | 2 tot 10 opties, sluitingsdata, privacy‑modi, maker‑beperkingen. |
| Ask Me Anything formats | No dedicated product | Uitvoeren als een thread met de SSO‑gebruiker van de auteur gelabeld en de vraag vastgezet. |
| Live Blog | No 1:1 equivalent | Live Chat widget en chat‑modus commentaren bestaan. Redactionele live‑blogging blijft in je CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Gebruikers volgen een pagina, niet een topic of auteur. Geen cross‑artikel volgen. |
| Notification Bell | Notification bell in the widget | Antwoorden, vermeldingen, thread‑activiteit, stemmen, abonnementen, badges, DM’s. |
| Email notifications | Email notifications with templates | Per‑gebruiker opt‑in via SSO‑flags. Aangepaste sjablonen, merk‑afzender. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC‑SHA256 payload) | Geen register‑user‑call. Onderteken een payload server‑side, geef het door aan de widget. |
| Third‑party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Zelfde payload. Jouw backend ondertekent het zodra de gebruiker is ingelogd. |
| Identity (OpenWeb registration screens) | Magic‑link login, Simple SSO | Lezers loggen in met een e‑mail‑link. Geen wachtwoorden. |
| Moderation policy per article | Customization rules per URL ID pattern | Goedkeuringsmodus, spamfilter en meer variëren per `*/section/*`‑patronen. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | Agents starten in droog‑run en kunnen menselijke goedkeuring vereisen. |
| Restricted words | Word blacklist customizable by locale | ~450 standaardzinnen, bewerkbaar. |
| User muting | Block User | Per‑lezer blokkering vanuit het commentaarmenu. |
| Bans | Bans | Permanent, tijdelijk, shadow, IP‑gehashed, plus‑aliases van een e‑mail die als één adres wordt behandeld. |
| Moderation Panel | Moderate Comments dashboard | Filters, bulk‑acties met undo, moderatie‑groepen, samenvattings‑e‑mails met één‑klik goedkeuring. |
| Notification Webhook | Webhooks | Commentaar aangemaakt, bijgewerkt, verwijderd. Geen per‑gebruiker notificatie‑webhook. |
| Engagement dashboard | Analytics | Live gebruikers online, top‑pagina’s, paginabezoeken, commentaren, stemmen, accounts per dag. Geen advertentie‑omzetrapportage. |
| In‑conversation ads, Standalone Ad | None | FastComments toont geen advertenties. Je behoudt je eigen advertentiestack rond de widget. |
| Social Reviews (star ratings) | Ratings and Reviews | Apart product op hetzelfde account. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Recirculatie aangedreven door commentaaractiviteit. |
| Comment Counter | Comment count widgets | Enkel en bulk. |
| Export Comments API | CSV export, API, webhooks | Export vanuit het dashboard op elk moment. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com houdt data in de EU. DPA beschikbaar. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, live‑updates, threading, moderatie‑acties. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` en `destroy()` voor SPA’s. |

</div>

De rest van deze sectie gaat elk groep in detail door.

### Conversatie, stemmen en reacties

OpenWeb's Conversation is een realtime‑thread. De FastComments commentaarwidget is dat ook: commentaren, bewerkingen, verwijderingen, stemmen en moderatie‑acties worden naar iedereen die de thread bekijkt gepusht (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Standaard verschijnen nieuwe commentaren van anderen achter een "Toon 2 nieuwe commentaren"‑knop zodat de pagina niet onder de lezer springt. Voor live‑evenementen stel `showLiveRightAway` in zodat ze onmiddellijk renderen, en `newCommentsToBottom` als je wilt dat ze naar beneden vloeien als een chat.

Likes en dislikes worden up‑ en down‑votes. De importeur behoudt beide tellingen per commentaar. Als je community gewend is aan één like, schakel de stemstijl over naar harten op de widget‑aanpassingspagina. Stemmen kan ook volledig worden uitgeschakeld.

OpenWeb Reactions is een aparte widget met twee tot vier gelabelde iconen op het artikel (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Het FastComments‑equivalent is Page Reacts: een configureerbare set reactie‑afbeeldingen gekoppeld aan de commentaar‑widget, onthouden per pagina en per gebruiker (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Reactietellingen maken geen deel uit van de OpenWeb commentaar‑export, dus ze beginnen bij nul.

Sorteren wordt direct gemapt. OpenWeb's `data-sort-by` waarden best, newest en oldest komen overeen met Most Relevant, Newest First en Oldest First. Stel de standaard in met `defaultSortDirection` (`MR`, `NF`, `OF`) in code of in een aanpassingsregel. Lezers kunnen schakelen in de widget.

`data-read-only="true"` wordt `readonly: true`, wat nieuwe commentaren, stemmen, bewerkingen en verwijderingen blokkeert. `data-post-staleness-days` heeft geen directe equivalent, maar een aanpassingsregel kan `readonly` toepassen op een URL‑ID‑patroon, en je kunt het ook vanuit je templates omdraaien op basis van de leeftijd van het artikel. `data-messages-count` is de paginagrootte, ingesteld op de widget‑aanpassingspagina van 10 tot 200 commentaren.

### Antwoorden en threading

FastComments ondersteunt standaard onbeperkte nesting; `maxReplyDepth` beperkt dit (`1` geeft een platte twee‑niveau‑structuur). De OpenWeb‑CSV bevat kolommen `parent_id` en `parent_comment_id`. De importeur leest `parent_comment_id` en bouwt de antwoordboom op volledige diepte opnieuw op, zodat een antwoord op een antwoord genesteld blijft onder zijn directe ouder, met auteur, tijdstempel, stemmen, vlag‑telling en goedkeuringsstatus intact. Antwoorden worden gekoppeld zelfs wanneer ze vóór hun ouder in het bestand verschijnen, of wanneer de ouder is geïmporteerd uit een eerder exportvenster. Een antwoord waarvan de ouder in geen enkele export aanwezig is, wordt een top‑level commentaar. De OpenWeb‑bericht‑ID wordt op elk commentaar opgeslagen, zodat een her‑import van een oudere platte import de threads bij het commentaar op zijn plaats bijwerkt.

### Gebruikersprofielen en badges

FastComments‑gebruikers, inclusief SSO‑gebruikers, krijgen een profiel met avatar, weergavenaam, bio, sociale links, badges, karma, commentaartelling, een openbare activiteitenfeed en directe berichten (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Elk van de activiteiten, profiel‑commentaren en DM‑oppervlakken kan per gebruiker in de SSO‑payload of globaal in de configuratie worden uitgeschakeld.

OpenWeb's Author Badge vereist dat je `GET /sso/v1/user/{primary_key}` aanroept voor de auteur en de geretourneerde ID in `data-author-id` plaatst. In FastComments stel je `displayLabel: 'Author'` (of elk label tot 100 tekens) in de SSO‑payload van de gebruiker, en `isAdmin` of `isModerator` voor personeel. Het label wordt naast hun naam op elk commentaar weergegeven. Voor een rijker systeem, configureer badges onder Customize, Badges: afbeelding‑ of tekst‑badges, automatisch toegekend op drempels (commentaartelling, upvotes, vastgezette commentaren, veteranenstatus, antwoord‑snelheid) of handmatig, en toewijsbaar vanuit de SSO‑payload met `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Vastgezette commentaren, polls en Q&A

Elke moderator kan een commentaar vastzetten of losmaken vanuit het commentaarmenu in de widget of vanuit het moderatie‑dashboard. Vastgezette commentaren worden live gepusht naar iedereen in de thread. Als je dit geautomatiseerd wilt, levert de AI‑Agents‑functie een Top Comment Pinner‑template die een top‑level commentaar vastzet zodra het een stem‑drempel overschrijdt (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb's In Conversation Polls laten personeel een poll met 2 tot 4 opties aan een top‑level commentaar toevoegen. FastComments‑polls worden ook aan een commentaar gekoppeld, met 2 tot 10 opties, een optionele sluitingsdatum, resultaat‑privacy (anoniem, alleen admins, iedereen), en een "stem om resultaten te zien"‑modus. Je kiest wie polls kan maken (uitgeschakeld, admins en moderators, iedereen) en of anonieme lezers kunnen stemmen. Polls zijn ook beschikbaar via de publieke API om ze vanuit je CMS te maken.

OpenWeb heeft Ask Me Anything‑formaten op zijn platform uitgevoerd. FastComments heeft geen apart Q&A‑product. De praktische vervanging is een normale thread op een dedicated URL‑ID: de gast‑SSO‑gebruiker draagt een `displayLabel`, je zet het intro‑commentaar vast, lezers stellen vragen in top‑level commentaren, de gast beantwoordt in de thread, en vermeldings‑ en antwoord‑notificaties trekken mensen terug. Stel `noNewRootComments` in nadat het venster sluit zodat alleen antwoorden doorgaan.

Community Spotlight (OpenWeb's e‑mail‑collector, teller en redirect‑kaarten) heeft geen equivalent. De widget ondersteunt aangepaste header‑HTML boven de commentaarruimte via `headerHTML`, wat een call‑to‑action dekt maar geen e‑mail‑capturatie‑formulier.

### Live Blog

Er is geen FastComments Live Blog. OpenWeb's Live Blog is een redactioneel product: verslaggevers die in het admin‑paneel zijn toegewezen plaatsen updates met ingesloten links, tweets en video, en lezers volgen mee (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Wat FastComments biedt voor live‑verslaggeving is de lezer‑kant: een Live Chat‑widget (`embed-live-chat.min.js`) voor streaming‑chat, en de commentaarwidget in chat‑modus (`showLiveRightAway` plus `newCommentsToBottom`) naast je live‑verslaggeving. Voor de redactionele updates zelf houden uitgevers die van OpenWeb overstappen ze in hun CMS of een dedicated live‑blog‑tool en embedden FastComments eronder voor discussie. Media‑embeds (YouTube, SoundCloud en anderen) worden ondersteund binnen commentaren, zodat staff‑updates die als commentaren worden geplaatst rijke media bevatten.

### Topic Tracker, meldingen en e‑mail

OpenWeb's Topic Tracker laat een lezer topics en auteurs volgen die uit paginametagegevens worden gehaald en een melding krijgen wanneer nieuwe artikelen overeenkomen (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments heeft geen topic‑ of auteur‑volging over artikelen heen. Lezers abonneren zich op een pagina via de meldingsbel en ontvangen updates voor die thread, met de frequentie per abonnement: elke minuut, uur‑samenvatting of dagelijkse samenvatting. Als cross‑artikel volgen belangrijk is voor je retentiecijfers, laat het ons weten, want deze functie staat op onze roadmap.

Alles andere in de Notification Bell wordt gemapt. De widget heeft een bel die rood wordt met het aantal ongelezen en lijsten: antwoorden op jou, antwoorden in een thread waarin je hebt gereageerd, vermeldingen, upvotes op je commentaren, activiteit op geabonneerde pagina’s, badge‑toekenningen en directe berichten (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In‑app meldingen zijn realtime via een WebSocket. Antwoord‑ en vermelding‑e‑mails worden elke minuut verzonden, alleen voor goedgekeurde commentaren.

Voor SSO‑gebruikers, geef `optedInNotifications` en `optedInSubscriptionNotifications` door in de payload en FastComments werkt hun voorkeuren bij bij de volgende paginaview. E‑mails hebben een e‑mailadres nodig in de payload. E‑mail‑sjablonen zijn bewerkbaar per type en per locale onder Customize, Email Templates, en verzenden vanaf je eigen domein met DKIM wordt ondersteund. Moderators en admins ontvangen de samenvatting en kunnen daarvan goedkeuren.

OpenWeb's Notification Webhook post per‑gebruiker notificatie‑events (`replied-message`, `liked-message`, `topic-by-keyword` enz.) naar je endpoint. FastComments‑webhooks dekken de commentaar‑resource: aangemaakt, bijgewerkt en verwijderd, met zoveel abonneer‑endpoints als je wilt (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Als je de notificatie‑webhook gebruikte om je eigen e‑mail‑systeem te voeden, zul je die logica opnieuw bouwen op commentaar‑events, of FastComments de e‑mails laten verzenden.

### SSO: Van codeA/codeB naar een ondertekeningspayload

OpenWeb's handshake heeft zes stappen: wacht op `spot-im-api-ready`, OpenWeb maakt `codeA`, je client stuurt deze naar je backend, je backend bevestigt de gebruiker en roept `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...` aan, OpenWeb retourneert `codeB`, en je client geeft `codeB` terug aan OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Logout roept `window.SPOTIM.logout()` aan.

FastComments Secure SSO heeft geen round‑trip en geen nieuw endpoint aan jouw kant. Wanneer je de pagina rendert voor een ingelogde gebruiker, serialiseert je backend de gebruiker, codeert deze Base64 en ondertekent deze met HMAC‑SHA256 met jouw API‑secret. De widget stuurt de payload met zijn verzoeken en FastComments verifieert de handtekening (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). In Node:

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

De timestamp is epoch‑milliseconden en wordt afgewezen als deze ouder is dan twee dagen. Voor een uitgelogde lezer, laat de drie ondertekende velden weg en geef alleen `loginURL` (of een `loginCallback`‑functie) door; de widget toont een login‑prompt in plaats van een composer. Volledige werkende voorbeelden in Node, Java en PHP staan in de <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code‑examples repository</a>.

Gebruikers worden aangemaakt bij de eerste paginalading. Je registreert niemand in bulk. Omdat de OpenWeb‑importeur commentaarauteurs matcht op `user_name`, claimt een gebruiker wiens SSO‑payload dezelfde `username` bevat zijn geïmporteerde commentaren de eerste keer dat hij een thread laadt en kan ze daarna bewerken of verwijderen. Er is ook een SSO‑user‑API als je gebruikers vooraf wilt aanmaken.

Elke keer dat de payload wordt verzonden, werkt FastComments het gebruikersrecord bij, zodat een gewijzigde weergavenaam of avatar aan jouw kant wordt doorgevoerd bij de volgende paginaview. Stel een veld in op `null` om het te wissen.

Als je OpenWeb's derde‑partij SSO met Auth0, Gigya of Piano via `window.SPOTIM.startSSOForProvider` gebruikte, is de FastComments‑flow hetzelfde als hierboven: zodra je provider de gebruiker heeft geauthenticeerd, bouwt je backend de payload en ondertekent deze. Er is geen provider‑specifieke integratie te configureren aan de FastComments‑kant.

Twee andere opties bestaan. Simple SSO stuurt het gebruikersobject onondertekend vanaf de client, voor platformen zonder backend, en markeert activiteit als geverifieerd wanneer een e‑mail aanwezig is (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 ondertekent je personeel in het FastComments‑dashboard zelf via Okta, Azure AD of ADFS, met rol‑mapping, en is beschikbaar op enterprise‑plannen (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderatie

OpenWeb's per‑artikel Moderation Policy API heeft vier waarden: `spot_policy`, `approve_all`, `publish_and_moderate` en `require_approval`. FastComments configureert hetzelfde gedrag in Moderation Settings: automatische goedkeuring aan of uit, goedkeuring alleen vereist voor het eerste commentaar van een gebruiker, en auto‑approve alleen voor geverifieerde (ingelogde of SSO) commentaren. Regels gelden site‑breed of voor een URL‑ID‑patroon zoals `*/politics/*`, waarmee je per‑sectie beleid kunt reproduceren. Elk commentaar, goedgekeurd of niet, komt in het Moderate Comments‑dashboard, dus het publish‑then‑review‑model is de standaardweergave daar (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Import draagt moderatiestatus over. OpenWeb `message_status` van `approved` wordt geïmporteerd als goedgekeurd en beoordeeld; `rejected` wordt geïmporteerd als spam en beoordeeld; alles andere wordt geïmporteerd als niet‑goedgekeurd en niet‑beoordeeld, zodat het in je moderatiewachtrij verschijnt. `reports_count` wordt de vlag‑telling van het commentaar.

Geautomatiseerde moderatie in FastComments is gelaagd in plaats van één enkel systeem zoals Aida:

- Een spam‑classifier, continu getraind, beschikbaar als een gedeeld model over alle tenants of geïsoleerd voor jouw tenant, met een vertrouwensfactor die filtering versoft voor langdurige of vaak vastgezette gebruikers.
- Een optionele LLM‑spamcheck op Flex‑facturering (open‑weight‑modellen zoals GLM‑5.3 zijn beschikbaar)
- Beeldinhoud‑moderatie op lage, medium of hoge gevoeligheid voor geüploade afbeeldingen.
- Een gelokaliseerde woorden‑blacklist van ongeveer 450 standaardzinnen, bewerkbaar, die overeenkomsten maskeert met sterretjes. Hier komen je OpenWeb‑beperkte woorden.
- Vlag‑drempels die een commentaar automatisch verbergen na N meldingen.
- Herhaalde en bijna‑dubbele berichtpreventie, altijd aan.
- AI‑Agents: gebeurtenis‑gedreven agents met een expliciete tool‑allowlist (markeer spam, keur goed, vergrendel, zet vast, waarschuw via DM, ban, ken badge toe, beantwoord). Elke agent start in droog‑run, gevoelige tools kunnen achter menselijke goedkeuring worden geplaatst, en elke actie wordt gelogd met een rechtvaardiging en een vertrouwensscore.

OpenWeb's User Muting API laat één SSO‑lezer een andere dempen. Het FastComments‑equivalent is Block User in het commentaarmenu, beschikbaar voor elke ingelogde lezer. Bans zijn een moderator‑actie: permanent of voor een bepaalde duur, optioneel een shadow‑ban (de gebruiker ziet zijn commentaar, maar niemand anders), optioneel op gehashte IP, met plus‑aliases van een e‑mail die als één adres wordt behandeld. De lijst met gebande gebruikers is doorzoekbaar op e‑mail, naam, moderator en het commentaar dat de ban veroorzaakte.

Het Moderate Comments‑dashboard ondersteunt filters (behoeft beoordeling, goedkeuring nodig, spam, gemarkeerd, van gebande gebruikers) en tekstzoekopdrachten, bulk‑acties met undo en pauze, "selecteer alle overeenkomende" voor zeer grote wachtrijen, moderatie‑groepen zodat je sportredactie alleen sportthreads ziet, per‑commentaar logs die laten zien waarom een e‑mail wel of niet is verzonden, en deelbare gefilterde links. Moderators hebben alleen het dashboard; ze kunnen geen instellingen wijzigen of data importeren.

### Analytics

FastComments Analytics toont gebruikers die nu online zijn over je sites en per pagina, top‑pagina’s op basis van commentaren of live‑lezers, en per‑dag series voor paginabezoeken, commentaren, stemmen en aangemaakte accounts (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Moderator‑statistieken zijn apart. Tellingen zijn bijna realtime, met een vertraging van maximaal een minuut, en elke paginabezoek wordt geteld in plaats van gesampled.

Wat je niet zult vinden is iets over advertentie‑vulling, CPM of inkomsten, omdat er geen advertenties zijn. Als het OpenWeb‑dashboard jouw bron was voor engagement‑naar‑inkomsten‑rapportage, verplaatst die rapportage zich naar je eigen advertentiestack.

### Monetisatie

OpenWeb plaatst advertenties binnen en rond de Conversation en biedt een Standalone‑Ad‑eenheid, met campagnes opgezet via je OpenWeb‑contact (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments toont geen advertenties in de widget, heeft geen revenue‑share, en laadt geen derde‑partij advertentie‑ of tracking‑scripts. De widget is een iframe die je plaatst; de advertentieruimtes erboven en eronder zijn van jou en draaien via wat je al gebruikt.

De afweging is expliciet: je verliest wat OpenWeb je betaalde, en je krijgt een vaste, voorspelbare kost en een widget die geen advertentieverzoeken aan je pagina toevoegt. Branding wordt verwijderd op Flex‑ en Pro‑plannen, en white‑labeling is beschikbaar op Pro‑ en Enterprise‑plannen.

### Data‑export en privacy

Alle commentaar‑data‑exports vanuit het FastComments‑dashboard als CSV op elk moment, met datums in UTC‑ISO‑formaat, en dezelfde data is beschikbaar via de API. Webhooks dekken doorlopende synchronisatie. Import‑bestanden worden uit FastComments verwijderd zodra de import voltooid is.

Voor GDPR en CCPA biedt OpenWeb een export‑ en delete‑API waarbij commentaren van verwijderde gebruikers gekoppeld blijven aan een willekeurig gastaccount (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments ondersteunt data‑export‑ en verwijderingsverzoeken, biedt een Data Processing Agreement, en draait een aparte EU‑deployment op <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> met data die alleen binnen EU‑punten van aanwezigheid wordt gerepliceerd. Maak daar je account aan als je lezers in Europa zijn. In de EU‑regio vereisen AI‑agent‑bans altijd menselijke goedkeuring om te voldoen aan DSA Artikel 17.

Commentaardata in de globale deployment wordt gerepliceerd over regio's inclusief een Singapore‑node, en de widget wordt geserveerd vanaf FastComments' eigen DNS en CDN. Het embed‑script is ongeveer 35 kb gecomprimeerd over het netwerk.

### Mobiele SDK's

OpenWeb levert Android, iOS en React Native SDK's met Conversation, Articles, Authentication, Notifications, Reactions en In Conversation Polls. FastComments levert native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> en <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> bibliotheken met threaded commentaren, live‑updates via WebSocket, Secure SSO, stemmen, vermeldingen, afbeelding‑uploads, moderatie‑acties (flag, pin, lock, block), theming, een live‑chat‑modus en een social‑feed component. EU‑regio is een configuratie‑vlag. Er is geen aparte advertentie‑SDK omdat er geen advertenties zijn.

### Embed en SPA‑integratie

De OpenWeb launcher en container:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

De FastComments‑equivalent:

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

Je tenant‑ID vind je op de <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">credentials‑pagina</a> zodra je een account hebt. `data-article-tags` heeft geen equivalent omdat er geen topic‑volging is; hashtags binnen commentaren zijn een andere functie.

Voor oneindig scrollen en single‑page apps is OpenWeb's Virtual Pages‑aanpak één container per artikel. In FastComments roep je `FastCommentsUI(element, config)` per thread aan en later `instance.update(newConfig)` om de URL‑ID te wisselen of `instance.destroy()` om deze te verwijderen (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). De React, Vue, Angular en SolidJS bibliotheken handelen dit af wanneer de config‑prop verandert. Lifecycle‑callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) vervangen de `spot-im-*` DOM‑events waar je naar luisterde.

Commentaartellingen op indexpagina’s gebruiken de commentaarteller‑widget, enkel of bulk. Voor SEO worden commentaren direct in de pagina gerenderd voor zoekmachine‑crawlers in plaats van binnen de iframe, dus er is geen SEO‑API‑call om te configureren.

### Stapsgewijze cutover

**1. Maak het account aan en configureer de basisinstellingen.** Meld je aan op fastcomments.com of eu.fastcomments.com. Stel je moderatie‑instellingen, woorden‑blacklist, stemstijl, standaard sortering en aangepaste CSS in op de widget‑aanpassingspagina. Voeg moderators en moderatie‑groepen toe. Als je veel admin‑gebruikers hebt, ondersteunt de import voor jou.

**2. Voer een eerste import uit.** Ga naar <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, kies OpenWeb (.csv) en upload. De import draait als een achtergrondtaak; de pagina toont rijtellingen en status, en je ontvangt een e‑mail wanneer deze voltooid is (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Elke commentaar behoudt zijn OpenWeb‑bericht‑ID als een externe ID, zodat een her‑import de bestaande commentaren bijwerkt in plaats van duplicaten te maken.

**3. Verifieer aantallen.** Vergelijk het rijtelling van de taak met je export. Open een paar high‑traffic URL‑ID’s in het moderatie‑dashboard en controleer auteurs, datums, stemtotalen en goedkeuringsstatussen. Bevestig dat afgewezen commentaren als spam verschijnen en dat wachtende commentaren in de wachtrij staan.

**4. Bouw de SSO‑payload.** Implementeer de ondertekeningscode hierboven in je backend, met dezelfde `id` en `username` die je met OpenWeb gebruikte. Test met een staff‑account op een staging‑pagina: de geïmporteerde commentaren van de gebruiker verschijnen als die van hem, en bewerken en verwijderen verschijnen in hun commentaarmenu.

**5. Vervang de embed op een staging‑template.** Vervang de launcher en container door de FastComments‑snippet, waarbij je `data-post-id` map naar `urlId` en `data-post-url` naar `url`. Verwijder `window.SPOTIM.logout()` en `spot-im-*` listeners, of map ze naar de callbacks. Pas je CSS toe in een aanpassingsregel in plaats van in code zodat het wordt getest bij elke FastComments‑release.

**6. Draai parallel.** Plaats FastComments op een sectie of een percentage van de artikelen terwijl OpenWeb op de rest blijft. Er hoeft niets aan de OpenWeb‑kant te veranderen. Houd de moderatiewachtrij en de analytics‑pagina in de gaten. Lezers die tijdens dit venster op FastComments‑pagina’s reageren, staan niet in je OpenWeb‑export, dus plan de finale import vóórdat ze beginnen, niet erna.

**7. CSP en DNS.** Als je een Content‑Security‑Policy gebruikt, sta `cdn.fastcomments.com` en `fastcomments.com` (of `eu.fastcomments.com`) toe voor `script-src`, `frame-src` en `connect-src`, en verwijder de `spot.im` en `openweb.com` entries zodra de launcher weg is. Er verandert niets aan je eigen DNS. Geen redirects nodig omdat de URL‑ID’s overeenkomen.

**8. Finale import en live gaan.** Haal nog een OpenWeb‑export op die het parallel‑run‑venster dekt, upload het (her‑import is veilig), vervolgens implementeer de template‑wijziging op alle pagina’s en verwijder de launcher, Reactions, Topic Tracker, Spotlight, bel‑ en advertentie‑containers.

**9. Live‑go‑checklist.**

- Live commentaar zichtbaar op een productie‑artikel vanuit twee browsers.
- SSO login, logout en een commentaar onder een echt abonnee‑account.
- Moderators ontvangen de samenvatting en kunnen daarvan goedkeuren.
- Antwoord‑ en vermelding‑e‑mails komen aan en linken naar de juiste pagina.
- Ban‑lijst en woorden‑blacklist gevuld.
- Page Reacts en commentaartellingen renderen waar Reactions en de teller vroeger waren.
- CSP‑rapporten schoon.
- Een laatste commentaartelling‑vergelijking tussen je export en het dashboard.

### Wat je verliest en wat anders is

Open en eerlijk over de hiaten:

- **Live Blog.** Geen equivalent. Houd het in je CMS of een live‑blog‑tool en plaats FastComments eronder.
- **Topic Tracker.** Geen cross‑artikel topic‑ of auteur‑volging. Alleen pagina‑abonnementen.
- **Community Spotlight.** Geen CTA‑kaart product. `headerHTML` geeft je een bericht boven de composer, geen e‑mail‑capture.
- **Advertentie‑inkomsten.** Geen. De widget is ad‑free by design.
- **Notification webhook.** Webhooks zijn op commentaar‑events, niet per‑gebruiker notificatie‑events.
- **Reactions‑geschiedenis.** Reactietellingen op artikelniveau staan niet in de commentaar‑export en beginnen opnieuw. We kunnen deze soms van je site scrapen.
- **Polls‑geschiedenis.** Poll‑definities en stemmen staan niet in de commentaar‑export; de poll‑commentaartekst wordt geïmporteerd, de poll niet. We kunnen deze soms van je site scrapen.
- **Login‑model.** Lezers zonder SSO loggen in via een magic‑link in plaats van een wachtwoord of een social‑login‑knop, standaard.
- **Menselijke moderatie‑staff.** OpenWeb bundelt een moderatieteam met Aida. FastComments biedt tooling, classifiers en agents; de mensen zijn van jou.

Wat je wint, in dezelfde geest: een widget die één klein script toevoegt en geen advertentieverzoeken, moderatie die één persoon kan uitvoeren voor een grote site met bulk‑acties en agents, SSO dat een ondertekeningsfunctie is in plaats van een protocol, en een leverancier die niet onder rechtbanktoezicht staat.

### Tijdlijn en het gratis import‑aanbod

Plan één tot twee weken voor een uitgever met één SSO‑integratie en enkele honderdduizend commentaren: een dag of twee voor de export en eerste import, een paar dagen voor SSO en templates, een parallel‑run‑venster, daarna de finale import en switch. Het platform ondersteunt deze schaal al: United Cloud draait meer dan tien portals en miljoenen commentaren op FastComments, en itsfoss.com verplaatste een geschiedenis van 88.000 commentaren van een andere provider via dezelfde self‑service importeur.

FastComments importeert je OpenWeb CSV‑export gratis, helpt je OpenWeb en FastComments parallel te draaien tijdens de cutover, en helpt met de migratie zelf, inclusief threading en gebruikers‑matching vragen. Enterprise‑plannen omvatten een 99,99 % SLA en support‑reacties binnen één uur tijdens kantooruren. Flex‑gebruik‑gebaseerde prijsstelling is beschikbaar voor sites die zonder contract willen starten.

<a href="https://fastcomments.com/contact-us">Schrijf ons</a> met je export‑grootte en je SSO‑setup en we komen met een plan terug.

### Conclusie

Download vandaag je export. Onthoud: dezelfde post‑ID’s worden URL‑ID’s, moderatiestatus wordt overgenomen, en de embed is een directe vervanging. De plekken waar FastComments verschilt staan hierboven vermeld zodat je kunt beslissen met de feiten voor je. :)

Proost!

{{/isPost}}

---