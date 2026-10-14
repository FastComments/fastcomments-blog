[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Sådan migrerer du fra OpenWeb til FastComments i 2026[/postlink]

{{#unless isPost}}
En funktion‑for‑funktion guide for udgivere, der skifter fra OpenWeb (tidligere Spot.IM): hvad der svarer 1:1, hvad der er anderledes, hvordan CSV‑importen fungerer, hvordan SSO‑SSO‑handshake ændres, og en trin‑for‑trin cutover‑plan.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

Denne guide er for produkt‑ og ingeniørledere og community‑managere som kører OpenWeb i dag og har brug for en plan for at flytte. Den går igennem hver OpenWeb‑overflade, navngiver FastComments‑ækvivalenten, og siger tydeligt hvor der ikke er et 1:1‑match.

### Hvorfor nu

Den

Den 30. september 2026 beordrede Tel Aviv Byrett at udpege en midlertidig modtager over OpenWeb på anmodning fra dets långiver, Mars Growth Capital, som har en førsteprioritets pant i selskabets aktiver og konti og er ved at håndhæve den mod OpenWebs israelske aktiver, bankkonti og intellektuel ejendom (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). En midlertidig trustee, Adv. Ehud Gindes, blev udpeget dagen efter (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Tidligere i 2026 afsluttede Microsoft, en af OpenWebs største kunder, sit engagement og tilbageholdt betalinger over en trafikdispute, som OpenWeb afviser (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb siger, at platformen fortsætter med at fungere. Retligt tilsyn, en långiver der håndhæver pant på den IP, som din kommentarswidget afhænger af, og en trustee, hvis job er at bevare aktivernes værdi, er ikke betingelser du som udgiver ønsker for en kerneengagementsoverflade. Hvis du endnu ikke har hentet en fuld dataeksport, gør det først, i dag, før du går videre i denne guide.

### Hvad du har brug for, før du starter

Indsaml disse før du rører nogen kode:

- **Din OpenWeb‑kommentar eksport.** OpenWeb eksponerer en Export API (v4) der producerer zip‑pakkede CSV‑filer, højst 100.000 kommentarer per fil, med datointerval‑vinduer på op til en måned og download‑links der udløber efter en uge (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Anmod om hvert vindue du har brug for og gem filerne et sikkert sted. Hvis din OpenWeb‑kontakt har leveret en Admin Panel CSV‑eksport tidligere, behold også den. FastComments‑importøren læser OpenWeb‑CSV’en med kolonner såsom `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` og `url`.
- **Dit Spot‑ID og listen over post‑ID’er.** Hver `data-post-id` du sender til launcheren bliver et FastComments URL‑ID. Hvis dine post‑ID’er er CMS‑artikel‑ID’er, bemærk hvordan de genereres så du kan udsende de samme værdier på FastComments‑siden.
- **Din SSO‑brugerliste.** Specifikt `primary_key` og `user_name` værdierne du registrerede med OpenWeb. Kommentar‑forfatterskab matches på brugernavn under import, så du skal sende de samme brugernavne i FastComments‑SSO‑payloaden.
- **Din moderatorliste og roller.** Admin‑, moderator‑ og journalist‑konti, og hvilke sektioner hver modererer.
- **Din moderationskonfiguration.** Site‑omfattende politik (godkend alle, udgiv og moderer, kræv godkendelse), per‑artikel overrides, begrænset ordliste, muted og banned brugere.
- **Tilpasset CSS og temaindstillinger.** Eksporter alt du har i Admin‑panelet så du kan genopbygge det på FastComments widget‑tilpasningsside.
- **Hvor launcheren befinder sig i dine skabeloner**, inklusive alle sider der kører Reactions, Topic Tracker, Spotlight, Notification Bell eller en Standalone Ad uden en Conversation.

### AI‑assisteret migration

FastComments leverer et [LLM‑Kit og MCP‑server til at fremskynde migrationen](https://docs.fastcomments.com/guide-llm-kit.html).

### Hvordan OpenWeb post‑ID’er kortlægges til FastComments URL‑ID’er

FastComments knytter en kommentartråd til en `urlId`. Som standard er URL‑ID’en den rensede side‑URL, men du kan sætte den til en vilkårlig streng, og det er præcis hvad OpenWeb‑importøren gør: den læser `post_id`‑kolonnen og bruger den som FastComments URL‑ID for hver kommentar på den artikel. Den gemmer også `url`‑kolonnen som den viste URL så moderations‑links og notifikations‑emails peger på den rigtige side.

Reglen for dine skabeloner er derfor: hvor du har sendt `data-post-id="POST_ID"` og `data-post-url="ARTICLE_URL"` til OpenWeb, send `urlId: 'POST_ID'` og `url: 'ARTICLE_URL'` til FastComments. Importerede tråde stemmer overens med live‑tråde uden omdirigeringer og uden URL‑omskrivning. Se <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL‑ID‑dokumentationen</a>.

Hvis du foretrækker at nøgle tråde efter URL fremover i stedet for efter post‑ID, importér først og brug derefter Værktøjet Migrate Comments under Manage Data til at flytte tråde fra post‑ID til URL i bulk.

### Feature‑kortet

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Noter |
| --- | --- | --- | 
| Conversation med realtidsopdateringer | Kommentarwidget med live‑kommentering | Live som standard. Nye kommentarer kollapser bag en "Show N New Comments"‑knap, eller vises øjeblikkeligt med `showLiveRightAway`. |
| Likes og dislikes på kommentarer | Op‑ og ned‑stemmer | Import bevarer `likes_count` og `dislikes_count`. Hjerte‑stil og "disable voting" er konfigurationsmuligheder. |
| Reactions (ikon på artikel‑niveau) | Page Reacts | Konfigurerbart ikon‑sæt på siden, husket per bruger. |
| Svar og trådning | Trådet svar, ubegrænset dybde | `maxReplyDepth` begrænser indlejring. |
| Sortering: bedst, nyeste, ældste | Most Relevant, Newest First, Oldest First | `defaultSortDirection` indstiller standarden per site eller per URL‑mønster. |
| Brugerprofiler | Brugerprofiler | Avatar, bio, badges, karma, aktivitet, DMs. Fungerer for SSO‑brugere. |
| Forfatter‑badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Sættes i SSO‑payloaden. Ingen backend‑opslag nødvendig. |
| Fastgjorte Live Blog‑opdateringer, fremhævede kommentarer | Pin og Unpin på enhver kommentar | Moderatorer pin fra widgeten eller dashboardet. En AI‑agent‑skabelon pin’er top‑stemte kommentarer. |
| Polls i samtale | Polls på kommentarer | 2 til 10 muligheder, lukningsdatoer, privatlivs‑tilstande, skaber‑restriktioner. |
| Ask Me Anything‑formater | Intet dedikeret produkt | Kør som en tråd med forfatterens SSO‑bruger mærket og spørgsmålet fastgjort. |
| Live Blog | Ingen 1:1‑ækvivalent | Live Chat‑widget og chat‑tilstand kommentarer findes. Redaktionel live‑blogging forbliver i dit CMS. |
| Topic Tracker (følg emner og forfattere) | Page subscriptions | Brugere følger en side, ikke et emne eller forfatter. Ingen tværs‑artikel‑følgning. |
| Notification Bell | Notification bell i widgeten | Svar, nævnelser, trådens aktivitet, stemmer, abonnementer, badges, DMs. |
| E‑mail‑notifikationer | E‑mail‑notifikationer med skabeloner | Per‑bruger opt‑in via SSO‑flags. Tilpassede skabeloner, brandet afsender. |
| SSO‑handshake (codeA/codeB) | Secure SSO (HMAC‑SHA256 payload) | Ingen register‑user‑opkald. Signér en payload på server‑siden, send den til widgeten. |
| Tredjeparts‑SSO (Auth0, Gigya, Piano) | Secure SSO efter din udbyder autentificerer | Samme payload. Din backend signerer den når brugeren er logget ind. |
| Identitet (OpenWeb‑registreringsskærme) | Magic‑link login, Simple SSO | Læserne logger ind med et e‑mail‑link. Ingen adgangskoder. |
| Moderationspolitik per artikel | Tilpasningsregler per URL‑ID‑mønster | Godkendelses‑tilstand, spam‑filter og mere varierer efter `*/section/*`‑mønstre. |
| Aida AI‑moderation | Spam‑klassifikatorer, LLM‑baserede filtre, billed‑moderation, AI‑Agents | Agenter starter i dry run og kan kræve menneskelig godkendelse. |
| Begrænsede ord | Ordliste sortlistning tilpasselig efter locale | ~450 standardfraser, redigerbare. |
| Bruger‑mute | Block User | Per‑læser blokering fra kommentarmenuen. |
| Bans | Bans | Permanent, tidsbegrænset, shadow, IP‑hashed, plus‑alias aware. |
| Moderationspanel | Moderate Comments dashboard | Filtre, bulk‑handlinger med fortryd, moderationsgrupper, opsummerings‑e‑mails med et‑klik‑godkendelse. |
| Notifikations‑Webhook | Webhooks | Kommentar oprettet, opdateret, slettet. Ingen per‑bruger notifikations‑webhook. |
| Engagement‑dashboard | Analytics | Live‑brugere online, top‑sider, side‑indlæsninger, kommentarer, stemmer, konti pr. dag. Ingen annonce‑indtægts‑rapportering. |
| In‑conversation ads, Standalone Ad | Ingen | FastComments kører ingen annoncer. Du beholder din egen annonce‑stack omkring widgeten. |
| Social Reviews (stjerne‑vurderinger) | Ratings and Reviews | Separat produkt på samme konto. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Gen‑cirkulation drevet af kommentar‑aktivitet. |
| Comment Counter | Comment count widgets | Enkelt og bulk. |
| Export Comments API | CSV export, API, webhooks | Eksporter fra dashboardet når som helst. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com holder data i EU. DPA tilgængelig. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, live‑opdateringer, trådning, moderations‑handlinger. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` og `destroy()` for SPAs. |

</div>

Resten af denne sektionen gennemgår hver gruppe i detaljer.

### Conversation, stemmer og reaktioner

OpenWeb's Conversation er en realtids‑tråd. FastComments‑kommentarwidgeten er også: kommentarer, redigeringer, sletninger, stemmer og moderations‑handlinger skubbes til alle, der ser tråden (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Som standard vises nye kommentarer fra andre bag en "Show 2 New Comments"‑knap så siden ikke hopper under læseren. For live‑begivenheder sæt `showLiveRightAway` så de renderes med det samme, og `newCommentsToBottom` hvis du vil have dem til at flyde nedad som en chat.

Likes og dislikes bliver op‑ og ned‑stemmer. Importøren bevarer begge tællere per kommentar. Hvis dit fællesskab er vant til et enkelt like, skift stemmestilen til hjerter på widget‑tilpasningssiden. Stemning kan også slås helt fra.

OpenWeb Reactions er en separat widget med to til fire mærkede ikoner på artiklen (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments‑ækvivalenten er Page Reacts: et konfigurerbart sæt af reaktions‑billeder knyttet til kommentar‑widgeten, husket per side og per bruger (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Reaktions‑tællere er ikke en del af OpenWeb‑kommentar‑eksporten, så de starter fra nul.

Sortering kortlægges direkte. OpenWeb's `data-sort-by` værdier best, newest og oldest svarer til Most Relevant, Newest First og Oldest First. Indstil standarden med `defaultSortDirection` (`MR`, `NF`, `OF`) i kode eller i en tilpasningsregel. Læsere kan skifte i widgeten.

`data-read-only="true"` bliver til `readonly: true`, som blokerer nye kommentarer, stemmer, redigeringer og sletninger. `data-post-staleness-days` har ingen direkte ækvivalent, men en tilpasningsregel kan anvende `readonly` på et URL‑ID‑mønster, og du kan også skifte den fra dine skabeloner baseret på artikelens alder. `data-messages-count` er side‑størrelsen, indstillet på widget‑tilpasningssiden fra 10 til 200 kommentarer.

### Svar og trådning

FastComments understøtter ubegrænset indlejring som standard; `maxReplyDepth` begrænser den (`1` giver en flad to‑niveau struktur). OpenWeb‑CSV’en indeholder `parent_id` og `parent_comment_id` kolonner. Importøren læser `parent_comment_id` og genopbygger svar‑træet i fuld dybde, så et svar på et svar forbliver indlejret under sin direkte forælder, med forfatter, tidsstempel, stemmer, flag‑tæller og godkendelses‑status intakt. Svar er linket selv når de vises før deres forælder i filen, eller når forælderen blev importeret fra et tidligere eksport‑vindue. Et svar hvis forælder mangler i alle eksporter bliver en top‑niveau kommentar. OpenWeb‑besked‑ID’en gemmes på hver kommentar, så gen‑import af en ældre flad import tråder den på plads.

### Brugerprofiler og badges

FastComments‑brugere, inklusive SSO‑brugere, får en profil med avatar, visningsnavn, bio, sociale links, badges, karma, kommentar‑tæller, et offentligt aktivitets‑feed og direkte beskeder (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Hver af aktivitets‑, profil‑kommentar‑ og DM‑fladerne kan deaktiveres per bruger i SSO‑payloaden eller globalt i konfigurationen.

OpenWeb's Author Badge kræver at du kalder `GET /sso/v1/user/{primary_key}` for forfatteren og placerer den returnerede ID i `data-author-id`. I FastComments sætter du `displayLabel: 'Author'` (eller enhver label op til 100 tegn) i brugerens SSO‑payload, og `isAdmin` eller `isModerator` for personale. Labelen vises ved siden af deres navn på hver kommentar. For et rigere system, konfigurer badges under Customize, Badges: billed‑ eller tekst‑badges, tildelt automatisk ved tærskler (kommentar‑tæller, upvotes, fastgjorte kommentarer, veteran‑status, svar‑hastighed) eller manuelt, og tildelbare fra SSO‑payloaden med `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Fastgjorte kommentarer, afstemninger og Q&A

Enhver moderator kan Pin eller Unpin en kommentar fra kommentarmenuen i widgeten eller fra moderations‑dashboardet. Fastgjorte kommentarer skubbes live til alle på tråden. Hvis du vil have dette automatiseret, leverer AI Agents‑funktionen en Top Comment Pinner‑skabelon, der fastgør en top‑niveau kommentar, når den krydser en stemme‑tærskel (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb's In Conversation Polls lader personale vedhæfte en 2‑til‑4‑options afstemning til en top‑niveau kommentar. FastComments‑afstemninger vedhæftes også til en kommentar, med 2‑til‑10 muligheder, en valgfri lukningsdato, resultat‑privatliv (anonym, kun admins, alle), og en "vote to see results"‑tilstand. Du vælger hvem der kan oprette afstemninger (deaktiveret, admins og moderatorer, alle) og om anonyme læsere kan stemme. Afstemninger eksponeres også i den offentlige API for at oprette dem fra dit CMS.

OpenWeb har kørt Ask Me Anything‑formater på sin platform. FastComments har intet separat Q&A‑produkt. Den praktiske erstatning er en normal tråd på en dedikeret URL‑ID: gæstens SSO‑bruger bærer en `displayLabel`, du fastgør intro‑kommentaren, læsere stiller spørgsmål i top‑niveau kommentarer, gæsten svarer i tråden, og nævnelses‑ og svar‑notifikationer trækker folk tilbage. Sæt `noNewRootComments` efter vinduet lukker så kun svar fortsætter.

Community Spotlight (OpenWeb's e‑mail‑collector, tæller og omdirigerings‑kort) har ingen ækvivalent. Widgeten understøtter tilpasset header‑HTML over kommentar‑input via `headerHTML`, som dækker en call‑to‑action men ikke en e‑mail‑capture‑form.

### Live Blog

Der findes ingen FastComments Live Blog. OpenWeb's Live Blog er et redaktionelt produkt: reporterere tildelt i Admin‑panelet poster opdateringer med indlejrede links, tweets og video, og læsere følger med (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Det FastComments tilbyder til live‑dækning er læsersiden: en Live Chat‑widget (`embed-live-chat.min.js`) til streaming‑chat, og kommentar‑widgeten i chat‑tilstand (`showLiveRightAway` plus `newCommentsToBottom`) sammen med din live‑dækning. For de redaktionelle opdateringer selv, holder udgivere, der forlader OpenWeb, dem i deres CMS eller et dedikeret live‑blog‑værktøj og placerer FastComments nedenunder til diskussion. Medie‑indlejringer (YouTube, SoundCloud og andre) understøttes i kommentarer, så personalets opdateringer postet som kommentarer indeholder rig medie.

### Topic Tracker, notifikationer og e‑mail

OpenWeb's Topic Tracker lader en læser følge emner og forfattere hentet fra side‑metadata og få notifikationer når nye artikler matcher (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments har ingen emne‑ eller forfatter‑følgning på tværs af artikler. Læsere følger en side fra notifikations‑klokken og modtager opdateringer for den tråd, med hyppighed valgt per abonnement: hvert minut, time‑opsummering eller daglig opsummering. Hvis tværs‑artikel‑følgning er vigtigt for dine fastholdelses‑tal, så lad os vide, da denne funktion er på vores roadmap.

Alt andet i Notifikations‑klokken kortlægges. Widgeten har en klokke der bliver rød med det ulæste antal og viser: svar til dig, svar i en tråd du har kommenteret i, nævnelser, upvotes på dine kommentarer, aktivitet på abonnerede sider, badge‑tildelinger og direkte beskeder (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In‑app notifikationer er realtid over en WebSocket. Svar‑ og nævnelses‑e‑mails sendes hvert minut kun for godkendte kommentarer.

For SSO‑brugere, send `optedInNotifications` og `optedInSubscriptionNotifications` i payloaden, og FastComments opdaterer deres præferencer ved næste side‑indlæsning. E‑mails kræver en e‑mail‑adresse i payloaden. E‑mail‑skabeloner er redigerbare per type og per locale under Customize, Email Templates, og afsendelse fra dit eget domæne med DKIM understøttes. Moderatorer og admins får en daglig, ugentlig eller månedlig opsummering med et‑klik‑godkendelse, svar og spam‑links.

OpenWeb's Notification Webhook poster per‑bruger notifikations‑begivenheder (`replied-message`, `liked-message`, `topic-by-keyword` osv.) til din endpoint. FastComments‑webhooks dækker kommentar‑ressourcen: oprettet, opdateret, slettet. Ingen per‑bruger notifikations‑webhook. Hvis du brugte notifikations‑webhooken til at fodre dit eget e‑mail‑system, vil du gen‑opbygge den logik på kommentar‑begivenheder, eller lade FastComments sende e‑mails.

### SSO: Fra codeA/codeB til en signeret payload

OpenWeb's handshake har seks trin: vent på `spot-im-api-ready`, OpenWeb udsteder `codeA`, din klient sender den til din backend, din backend bekræfter brugeren og kalder `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb returnerer `codeB`, og din klient giver `codeB` tilbage til OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Logout kalder `window.SPOTIM.logout()`.

FastComments Secure SSO har ingen round‑trip og ingen ny endpoint på din side. Når du render siden for en logget‑ind bruger, serialiserer din backend brugeren, Base64‑koder den, og signerer den med HMAC‑SHA256 ved brug af din API‑secret. Widgeten sender payloaden med sine anmodninger og FastComments verificerer signaturen (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). I Node:

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

Tidsstemplet er epoch‑millisekunder og afvises hvis det er ældre end to dage. For en logget‑ud læser, udelad de tre signerede felter og send kun `loginURL` (eller en `loginCallback`‑funktion), og widgeten viser en login‑prompt i stedet for en komponist. Fuld fungerende eksempler i Node, Java og PHP findes i <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a>.

Brugere oprettes ved første side‑indlæsning. Du bulk‑registrerer ingen. Da OpenWeb‑importøren matcher kommentar‑forfattere på `user_name`, gør en bruger hvis SSO‑payload bærer den samme `username` krav på deres importerede kommentarer første gang de indlæser en tråd og kan redigere eller slette dem derefter. Der er også en SSO‑bruger‑API hvis du vil for‑oprette brugere.

Hver gang payloaden sendes, opdaterer FastComments bruger‑recordet ud fra den, så et ændret display‑navn eller avatar på din side propagere ved næste side‑visning. Sæt et felt til `null` for at rydde det.

Hvis du brugte OpenWeb's tredjeparts‑SSO med Auth0, Gigya eller Piano via `window.SPOTIM.startSSOForProvider`, er FastComments‑flowet det samme som ovenfor: når din udbyder har autentificeret brugeren, bygger din backend og signerer payloaden. Der er ingen udbyder‑specifik integration at konfigurere på FastComments‑siden.

To andre muligheder findes. Simple SSO sender bruger‑objektet usigneret fra klienten, for platforme uden backend, og markerer aktivitet som verificeret når en e‑mail er til stede (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 signerer dit personale ind i FastComments‑dashboardet via Okta, Azure AD eller ADFS, med rolle‑mapping, og er tilgængelig på enterprise‑planer (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

OpenWeb's per‑artikel Moderations‑Policy API har fire værdier: `spot_policy`, `approve_all`, `publish_and_moderate` og `require_approval`. FastComments konfigurerer de samme adfærd i Moderationsindstillinger: automatisk godkendelse til eller fra, godkendelse kun påkrævet for en brugers første kommentar, og auto‑godkend kun verificerede (logget‑ind eller SSO) kommentarer. Regler gælder site‑omfattende eller for et URL‑ID‑mønster såsom `*/politics/*`, som er hvordan du reproducerer per‑sektion politik. Hver kommentar, godkendt eller ej, lander i Moderate Comments‑dashboardet, så publish‑then‑review‑modellen er standardvisningen der (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Import overfører moderations‑status. OpenWeb `message_status` af `approved` importeres som godkendt og gennemgået; `rejected` importeres som spam og gennemgået; alt andet importeres som ikke‑godkendt og ikke‑gennemgået så det vises i din moderations‑kø. `reports_count` bliver kommentarens flag‑tæller.

Automatiseret moderation på FastComments er lagdelt i stedet for et enkelt system som Aida:

- En spam‑klassifikator, kontinuerligt trænet, tilgængelig som en delt model på tværs af alle lejere eller isoleret til din lejer, med en tillidsfaktor der slapper filtreringen for langvarige eller ofte fastgjorte brugere.
- En valgfri LLM‑spam‑check på Flex‑fakturering (åbne vægt‑modeller som GLM-5.3 er tilgængelige)
- Billed‑indholds‑moderation på lav, medium eller høj følsomhed for uploadede billeder.
- En lokaliseret ord‑blacklist med ca. 450 standardfraser, redigerbar, som maskerer matches med stjerner. Her kommer dine OpenWeb‑begrænsede ord.
- Flag‑tærskler der automatisk skjuler en kommentar efter N rapporter.
- Gentagelses‑ og næsten‑duplikat‑besked‑forebyggelse, altid aktiv.
- AI‑agenter: hændelses‑drevne agenter med en eksplicit værktøjs‑allowlist (markér spam, godkend, lås, fastgør, advare via DM, ban, tildel badge, svar). Hver agent starter i dry run, følsomme værktøjer kan gate‑læses bag menneskelig godkendelse, og hver handling logges med en begrundelse og tillids‑score.

OpenWeb's User Muting API lader én SSO‑læser mute en anden. FastComments‑ækvivalenten er Block User i kommentarmenuen, tilgængelig for enhver logget‑ind læser. Bans er en moderator‑handling: permanent eller i en fastsat varighed, valgfrit en shadow‑ban (brugeren ser deres kommentarpost, men ingen andre gør), valgfrit efter hashed IP, plus‑alias aware. Den bannede bruger‑liste er søgbar på e‑mail, navn, moderator og den kommentar der udløste bannet.

### Analytics

FastComments Analytics viser brugere online lige nu på tværs af dine sites og per side, top‑sider efter kommentarer eller efter live‑læser, og per‑dag serier for side‑indlæsninger, kommentarer, stemmer og oprettede konti (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Moderator‑statistik er separat. Tællinger er næsten realtid, forsinket med højst et minut, og hver side‑indlæsning tælles i stedet for at blive samplet.

Det du ikke vil finde, er noget om annonce‑udfyldning, CPM eller indtægter, fordi der ingen annoncer er. Hvis OpenWeb‑dashboardet var din kilde til engagement‑til‑indtægts‑rapportering, flyttes den rapportering til din egen annonce‑stack.

### Monetisering

OpenWeb placerer annoncer inde og omkring Conversation og tilbyder en Standalone Ad‑enhed, med kampagner sat op gennem din OpenWeb‑kontakt (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments kører ingen annoncer i widgeten, har ingen revenue‑share, og indlæser ikke tredjeparts‑annonce‑ eller tracking‑scripts. Widgeten er en iframe du placerer; annonce‑slotsene over og under den er dine og kører gennem hvad du allerede bruger.

Afvejen er eksplicit: du mister hvad OpenWeb betalte dig, og du får en fast, forudsigelig omkostning og en widget der ikke tilføjer annonce‑forespørgsler til din side. Branding fjernes på Flex‑ og Pro‑planer, og white‑labeling er tilgængelig på Pro‑ og Enterprise‑planer.

### Dataeksport og privatliv

Alle kommentar‑dataeksporter fra FastComments‑dashboardet som CSV når som helst, med datoer i UTC ISO‑format, og de samme data er tilgængelige via API’en. Webhooks dækker løbende sync. Import‑filer slettes fra FastComments så snart importen er færdig.

For GDPR og CCPA, OpenWeb leverer en eksport‑ og slet‑API hvor slettede brugeres kommentarer forbliver knyttet til en tilfældig gæstekonto (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments understøtter data‑eksport‑ og slet‑anmodninger, tilbyder en Data Processing Agreement, og kører en separat EU‑deployment på <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> med data kun replikeret inden for EU‑points of presence. Opret din konto der hvis dine læsere er i Europa. I EU‑regionen kræver AI‑agent‑bans altid menneskelig godkendelse for at opfylde DSA Artikel 17.

Kommentardata i den globale deployment er replikeret på tværs af regioner inklusive en Singapore‑node, og widgeten leveres fra FastComments' egen DNS og CDN. Embed‑scriptet er omkring 35 kb komprimeret på netværket.

### Mobile SDK'er

OpenWeb leverer Android, iOS og React Native SDK'er med Conversation, Articles, Authentication, Notifications, Reactions og In Conversation Polls. FastComments leverer native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> og <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> biblioteker med trådet kommentarer, live‑opdateringer over WebSocket, Secure SSO, stemmer, nævnelser, billed‑uploads, moderations‑handlinger (flag, pin, lock, block), tematisering, en live‑chat‑tilstand og en social feed‑komponent. EU‑regionen er en konfigurations‑flag. Der er ingen separat annonce‑SDK fordi der ingen annoncer er.

### Embed og SPA‑integration

OpenWeb launcheren og containeren:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments ækvivalenten:

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

Dit tenant‑ID er på <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">credentials page</a> når du har en konto. `data-article-tags` har ingen ækvivalent da der ingen emne‑følgning er; hashtags i kommentarer er en anden funktion.

For infinite scroll og single‑page apps, OpenWeb's Virtual Pages‑tilgang er én container per artikel. I FastComments kalder du `FastCommentsUI(element, config)` per tråd og senere `instance.update(newConfig)` for at skifte URL‑ID eller `instance.destroy()` for at fjerne den (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular og SolidJS‑bibliotekerne håndterer dette når config‑prop’en ændres. Livscyklus‑callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) erstatter `spot-im-*` DOM‑events du lyttede efter.

Kommentar‑tællere på indeks‑sider bruger comment count widget, enkelt eller bulk. For SEO renderes kommentarer direkte ind i siden for søgemaskine‑crawlers i stedet for inde i iframe, så der er ingen SEO‑API‑opkald at konfigurere.

### Trin‑for‑trin cutover

**1. Opret kontoen og konfigurer grundlæggende.** Tilmeld dig på fastcomments.com eller eu.fastcomments.com. Indstil dine moderationsindstillinger, ord‑blacklist, stemme‑stil, standard‑sortering, og tilpasset CSS på widget‑tilpasningssiden. Tilføj moderatorer og moderations‑grupper. Hvis du har mange admin‑brugere, understøtter importen dem for dig.

**2. Kør den første import.** Gå til <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, vælg OpenWeb (.csv) og upload. Importen kører som en baggrunds‑job; siden viser række‑tællinger og status, og du modtager en e‑mail når den er færdig (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Hver kommentar bevarer sin OpenWeb‑besked‑ID som en ekstern ID, så gen‑kørsel af en import opdaterer de eksisterende kommentarer i stedet for at oprette dubletter.

**3. Verificer tællinger.** Sammenlign job‑tællingen med din eksport. Åbn et par høj‑trafik URL‑ID’er i moderations‑dashboardet og foretag spot‑check af forfattere, datoer, stemme‑totaler og godkendelses‑status. Bekræft at afviste kommentarer vises som spam og ventende kommentarer sidder i køen.

**4. Byg SSO‑payloaden.** Implementér signerings‑koden ovenfor i din backend, med samme `id` og `username` som du brugte med OpenWeb. Test med en staff‑konto på en staging‑side: brugerens importerede kommentarer vises som deres, og redigering og sletning vises i deres kommentarmenu.

**5. Udskift embed på en staging‑skabelon.** Erstat launcheren og containeren med FastComments‑snippet’en, map `data-post-id` til `urlId` og `data-post-url` til `url`. Fjern `window.SPOTIM.logout()` og `spot-im-*` lyttere, eller map dem til callbacks. Anvend din CSS i en tilpasnings‑regel i stedet for i kode så den testes på hver FastComments‑release.

**6. Kør parallelt.** Placér FastComments på en sektion eller en procentdel af artikler mens OpenWeb forbliver på resten. Intet på OpenWeb‑siden behøver at ændres. Hold øje med moderations‑køen og analytics‑siden. Læsere der kommenterer på FastComments‑sider i dette vindue er ikke i din OpenWeb‑eksport, så planlæg den endelige import før de starter, ikke efter.

**7. CSP og DNS.** Hvis du kører en Content‑Security‑Policy, tillad `cdn.fastcomments.com` og `fastcomments.com` (eller `eu.fastcomments.com`) for `script-src`, `frame-src` og `connect-src`, og fjern `spot.im` og `openweb.com` posterne når launcheren er væk. Intet ændres på din egen DNS. Ingen omdirigeringer er nødvendige fordi URL‑ID’erne matcher.

**8. Endelig import og go live.** Hent en sidste OpenWeb‑eksport der dækker parallel‑kørsels‑vinduet, upload den (gen‑import er sikkert), derefter deploy skabelon‑ændringen på alle sider og fjern launcheren, Reactions, Topic Tracker, Spotlight, bell og ad‑containere.

**9. Go‑live tjekliste.**

- Live‑kommentering synlig på en produktions‑artikel fra to browsere.
- SSO login, logout og en kommentar under en rigtig abonnent‑konto.
- Moderatorer modtager opsummeringen og kan godkende fra den.
- Svar‑ og nævnelses‑e‑mails ankommer og linker til den korrekte side.
- Bans‑liste og ord‑blacklist udfyldt.
- Page Reacts og kommentar‑tællere renderes hvor Reactions og tælleren plejede at være.
- CSP‑rapporter rene.
- En sidste kommentar‑tæller‑sammenligning mellem din eksport og dashboardet.

### Hvad du mister og hvad er anderledes

Være direkte om hullerne:

- **Live Blog.** Ingen ækvivalent. Hold det i dit CMS eller et live‑blogging‑værktøj og placer FastComments under det.
- **Topic Tracker.** Ingen tværs‑artikel emne‑ eller forfatter‑følgning. Kun side‑abonnementer.
- **Community Spotlight.** Intet CTA‑kort produkt. `headerHTML` giver dig en besked over komponisten, ikke en e‑mail‑capture.
- **Ad revenue.** Ingen. Widgeten er annonce‑fri som design.
- **Notification webhook.** Webhooks er på kommentar‑begivenheder, ikke per‑bruger notifikations‑begivenheder.
- **Reactions history.** Artikel‑niveau reaktions‑tællere er ikke i kommentar‑eksporten og starter frisk. Vi kan nogle gange skrabe dem fra din side.
- **Polls history.** Poll‑definitioner og stemmer er ikke i kommentar‑eksporten; poll‑ens kommentar‑tekst importeres, poll’en gør det ikke. Vi kan nogle gange skrabe dem fra din side.
- **Login model.** Læsere uden SSO logger ind med magic‑link i stedet for en adgangskode eller en social login‑knap som standard.
- **Human moderation staff.** OpenWeb har et moderations‑team med Aida. FastComments leverer værktøjer, klassifikatorer og agenter; menneskene er dine.

Hvad du får, i samme ånd: en widget der tilføjer et lille script og ingen annonce‑forespørgsler, moderation som én person kan køre for et stort site med bulk‑handlinger og agenter, SSO som en sign‑funktion i stedet for en protokol, og en leverandør der ikke er under retsligt tilsyn.

### Tidslinje og det gratis import‑tilbud

Planlæg en til to uger for en udgiver med én SSO‑integration og et par hundrede tusinde kommentarer: en dag eller to på eksport og første import, et par dage på SSO og skabeloner, et parallel‑kørsels‑vindue, derefter den endelige import og skift. Platformen håndterer allerede denne skala: United Cloud driver mere end ti portaler og millioner af kommentarer på FastComments, og itsfoss.com flyttede en 88.000‑kommentar‑historik fra en anden udbyder gennem den samme selv‑service importør.

FastComments importerer din OpenWeb CSV‑eksport gratis, hjælper dig med at køre OpenWeb og FastComments parallelt under cutover, og hjælper med selve migrationen, inklusiv trådning og bruger‑matchning spørgsmål. Enterprise‑planer inkluderer en 99,99 % SLA og support‑svar inden for en time i åbningstiden. Flex‑brugs‑baseret pris er tilgængelig for sites der vil starte uden kontrakt.

<a href="https://fastcomments.com/contact-us">Skriv til os</a> med din eksportstørrelse og din SSO‑opsætning, så vender vi tilbage med en plan.

### Afslutningsvis

Hent din eksport i dag. Husk: de samme post‑ID’er bliver URL‑ID’er, moderations‑status overføres, og embed‑et er en simpel udskiftning. De steder hvor FastComments adskiller sig er listet ovenfor så du kan beslutte med fakta foran dig. :)

Skål!{{/isPost}}

---