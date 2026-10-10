[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Kako migrirati iz OpenWeb v FastComments leta 2026[/postlink]

{{#unless isPost}}
Vodič po funkcijah za založnike, ki prehajajo iz OpenWeb (prej Spot.IM): kaj se ujema 1:1, kaj je drugačno, kako deluje uvoz CSV, kako se spremeni SSO rokovanje, in korak-po-korak načrt prehoda.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični žargon

Ta vodnik je namenjen vodjem produktov in inženiringa ter upraviteljem skupnosti, ki danes uporabljajo OpenWeb in potrebujejo načrt za prehod. Pregleda vsako površino OpenWeb, navaja ekvivalent v FastComments in jasno pove, kje ni 1:1 ujemanja.

### Zakaj zdaj

30. septembra 2026 je Tel Avivski okrajni sodišče na zahtevo njegovega posojilodajalca, Mars Growth Capital, ki ima prednostno založbo nad sredstvi in računi podjetja, odredilo začasno upravljanje OpenWeba, kar naj bi se uveljavilo nad izraelskimi sredstvi, bančnimi računi in intelektualno lastnino OpenWeba (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30. sept.</a>). Naslednji dan je bil imenovan začasni skrbnik, adv. Ehud Gindes (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4. okt.</a>). Zgodaj v letu 2026 je Microsoft, eden največjih OpenWebovih kupcev, prekinil sodelovanje in zadržal plačila zaradi spora o prometu, ki ga OpenWeb zavrača (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28. sept.</a>).

OpenWeb pravi, da platforma še naprej deluje. Sodna nadzornost, posojilodajalec, ki uveljavlja založbe na IP, od katerega je odvisen vaš pripomoček za komentarje, in skrbnik, katerega naloga je ohraniti vrednost sredstev, niso pogoji, ki jih želi založnik pod osnovno sodelovalno površino. Če še niste izvedli popolnega izvoza podatkov, to storite najprej, danes, preden nadaljujete z vodnikom.

### Kaj potrebujete, preden začnete

Zberite naslednje, preden se dotaknete kode:

- **Vaš izvoz komentarjev iz OpenWeba.** OpenWeb ponuja Export API (v4), ki ustvarja zipane CSV datoteke, največ 100.000 komentarjev na datoteko, z okni datumov do enega meseca in povezavami za prenos, ki potečejo po tednu (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Zahtevajte vsa okna, ki jih potrebujete, in datoteke shranite na varno mesto. Če vam je kontakt iz OpenWeba v preteklosti zagotovil izvoz CSV iz Admin panela, ga obdržite tudi. FastComments uvoznik bere OpenWeb CSV s stolpci, kot so `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` in `url`.
- **Vaš Spot ID in seznam ID-jev objav.** Vsak `data-post-id`, ki ga posredujete zaganjalniku, postane FastComments URL ID. Če so vaši ID-ji objav CMS-ovi ID-ji, zabeležite, kako so ustvarjeni, da lahko na strani FastComments izdate enake vrednosti.
- **Vaš seznam SSO uporabnikov.** Natančneje `primary_key` in `user_name` vrednosti, ki ste jih registrirali pri OpenWebu. Avtorstvo komentarjev se med uvozom ujema po uporabniškem imenu, zato želite posredovati enaka uporabniška imena v FastComments SSO payloadu.
- **Vaš seznam moderatorjev in vlog.** Administratorski, moderacijski in novinarski računi ter katere sekcije moderirajo.
- **Vaša konfiguracija moderacije.** Splošna politika (odobri vse, objavi in moderiraj, zahteva odobritev), preglasitve po člankih, seznam omejenih besed, utišani in blokirani uporabniki.
- **Lastni CSS in nastavitve teme.** Izvozite vse, kar imate v Admin panelu, da lahko to ponovno zgradite na strani prilagoditve FastComments pripomočka.
- **Kje se zaganjalnik nahaja v vaših predlogah**, vključno s katerimikoli stranmi, ki poganjajo Reactions, Topic Tracker, Spotlight, Notification Bell ali Standalone Ad brez Conversation.

### Kako se OpenWeb ID-ji objav preslikajo v FastComments URL ID-je

FastComments povezuje nit komentarjev z `urlId`. Privzeto je URL ID očiščen URL strani, vendar ga lahko nastavite na katerikoli niz, in to je natanko to, kar počne OpenWeb uvoznik: prebere stolpec `post_id` in ga uporabi kot FastComments URL ID za vsak komentar na tem članku. Prav tako shrani stolpec `url` kot prikazni URL, tako da povezave za moderacijo in e‑mail obvestila kažejo na pravo stran.

Torej pravilo za vaše predloge je: kjerkoli ste poslali `data-post-id="POST_ID"` in `data-post-url="ARTICLE_URL"` OpenWebu, pošljite `urlId: 'POST_ID'` in `url: 'ARTICLE_URL'` FastCommentsu. Uvožene niti se ujemajo z živimi nitmi brez preusmeritev in brez prepisovanja URL‑jev. Glejte <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">dokumentacijo o URL ID-ju</a>.

Če raje v prihodnje ključate niti po URL‑ju namesto po ID‑ju objave, najprej uvozite in nato uporabite orodje Migrate Comments pod Manage Data, da v bulk načinu premaknete niti z ID‑ja objave na URL.

### Preslikava funkcij

| OpenWeb | FastComments | Opombe |
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

Preostali tega razdelka podrobno obravnavajo vsako skupino.

### Conversation, Votes and Reactions

OpenWeb‑ova Conversation je nit v realnem času. FastComments‑ov pripomoček za komentarje je tudi: komentarji, urejanja, brisanja, glasovanja in moderacijska dejanja se potiskajo vsem, ki gledajo nit (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Privzeto se novi komentarji drugih ljudi pojavijo za gumbom "Show 2 New Comments", da stran ne skače pod bralca. Za žive dogodke nastavite `showLiveRightAway`, da se prikažejo takoj, in `newCommentsToBottom`, če želite, da tečejo navzdol kot klepet.

Všečki in nesprejemi postanejo glasovi gor in dol. Uvoznik ohrani oba števila na komentar. Če je vaša skupnost navajena enega všečka, preklopite stil glasovanja na srca na strani prilagoditve pripomočka. Glasovanje je mogoče tudi popolnoma izklopiti.

OpenWeb Reactions je ločen pripomoček z dvema do štirimi označenimi ikonami na članku (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments‑ov ekvivalent je Page Reacts: nastavljiv nabor slik reakcij, priložen pripomočku za komentarje, zapomni si jih po strani in po uporabniku (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Števci reakcij niso del izvoza komentarjev OpenWeb, zato se začnejo z ničlo.

Razvrščanje se preslika neposredno. OpenWeb‑ove vrednosti `data-sort-by` best, newest in oldest ustrezajo Most Relevant, Newest First in Oldest First. Privzeto nastavite z `defaultSortDirection` (`MR`, `NF`, `OF`) v kodi ali v pravilu prilagoditve. Bralci lahko preklapljajo v pripomočku.

`data-read-only="true"` postane `readonly: true`, kar blokira nove komentarje, glasove, urejanja in brisanja. `data-post-staleness-days` nima neposrednega ekvivalenta, vendar lahko pravilo prilagoditve uporabi `readonly` na vzorcu URL ID, prav tako pa ga lahko preklopite v predlogah glede na starost članka. `data-messages-count` je velikost strani, nastavljena na strani prilagoditve pripomočka kjerkoli od 10 do 200 komentarjev.

### Replies and Threading

FastComments privzeto podpira neomejeno gnezdenje; `maxReplyDepth` ga omeji (`1` daje ravno dvostopenjsko strukturo). OpenWeb CSV vključuje stolpca `parent_id` in `parent_comment_id`. Trenutni uvoznik uvozi vsako vrstico kot komentar najvišje ravni na njegovi strani, po datumu, z avtorjem, časovnim žigom, glasovi, številom zastav in stanjem odobritve nedotaknjene. Ne gradi drevesa starš-otrok. Če so vaše niti močno odgovorjene, nam sporočite, ko pošiljate izvoz, in bomo obdelali gnezdenje kot del uvoza namesto da vas pustimo z izravnano nitjo.

### User Profiles and Badges

FastComments‑ovi uporabniki, vključno s SSO uporabniki, dobijo profil z avatarjem, prikaznim imenom, biografijo, socialnimi povezavami, značkami, karmo, številom komentarjev, javnim tokovom aktivnosti in zasebnimi sporočili (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Vsako od površin aktivnosti, komentarjev profila in DM-jev je mogoče onemogočiti po uporabniku v SSO payloadu ali globalno v nastavitvah.

OpenWeb‑ov Author Badge zahteva klic `GET /sso/v1/user/{primary_key}` za avtorja in postavitev vrnjenega ID v `data-author-id`. V FastComments nastavite `displayLabel: 'Author'` (ali katerikoli label do 100 znakov) v SSO payloadu uporabnika, ter `isAdmin` ali `isModerator` za osebje. Label se prikaže poleg njihovega imena pri vsakem komentarju. Za bolj bogat sistem konfigurirajte značke pod Customize, Badges: slikovne ali besedilne značke, dodeljene samodejno po mejnikih (število komentarjev, glasovi, pripete komentarje, status veteran, hitrost odgovorov) ali ročno, ter dodelljive iz SSO payloada z `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Katerikoli moderator lahko pripne ali odpripne komentar iz menija komentarja v pripomočku ali iz nadzorne plošče moderacije. Pripeti komentarji se takoj prikažejo vsem na niti. Če želite to avtomatizirati, AI Agents funkcija ponuja predlogo Top Comment Pinner, ki pripne komentar najvišje ravni, ko preseže prag glasov (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb‑ove In Conversation Polls omogočajo osebju, da priloži 2–4 možnosti ankete k komentarju najvišje ravni. FastComments ankete se prav tako priložijo komentarju, z 2–10 možnostmi, neobveznim datumom zaprtja, zasebnostjo rezultatov (anonimno, samo admini, vsi) in načinom "glasuj za ogled rezultatov". Izberete, kdo lahko ustvarja ankete (onemogočeno, admini in moderatorji, vsi) in ali anonimni bralci lahko glasujejo. Ankete so tudi izpostavljene v javnem API-ju za ustvarjanje iz vašega CMS-a.

OpenWeb je imel na platformi formate Ask Me Anything. FastComments nima ločenega Q&A produkta. Praktična nadomestitev je običajna nit na namenskem URL ID: SSO uporabnik gosta nosi `displayLabel`, pripnete uvodni komentar, bralci postavljajo vprašanja v komentarjih najvišje ravni, gost odgovarja v niti, omembe in obvestila povlečejo ljudi nazaj. Nastavite `noNewRootComments` po zaprtju okna, da se nadaljuje le z odgovori.

Community Spotlight (OpenWeb‑ov zbirnik e‑mailov, števec in preusmeritvene kartice) nima ekvivalenta. Pripomoček podpira prilagodljiv HTML glave nad vnosom komentarja preko `headerHTML`, kar pokriva klic k dejanju, vendar ne zajema obrazca za zajem e‑mailov.

### Live Blog

FastComments nima Live Bloga. OpenWeb‑ov Live Blog je uredniški produkt: poročevalci v Admin panelu objavljajo posodobitve z vdelanimi povezavami, tviti in videi, bralci pa sledijo (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Kar FastComments ponuja za živo pokrivanje, je bralni del: Live Chat pripomoček (`embed-live-chat.min.js`) za pretakanje klepeta, in pripomoček za komentarje v načinu klepeta (`showLiveRightAway` plus `newCommentsToBottom`) poleg vaše žive pokritosti. Za uredniške posodobitve sami ostanejo v vašem CMS-u ali namenskem orodju za live blog, FastComments pa se vgradi spodaj za razpravo. Mediji (YouTube, SoundCloud in drugi) so podprti znotraj komentarjev, tako da posodobitve osebja v komentarjih nosijo bogate medije.

### Topic Tracker, Notifications and Email

OpenWeb‑ov Topic Tracker omogoča bralcu, da sledi temam in avtorjem iz metapodatkov strani ter prejme obvestila, ko se pojavijo novi članki, ki se ujemajo (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments nima sledi tem ali avtorjev čez članke. Bralci se naročijo na stran preko zvonca za obvestila in prejemajo posodobitve za to nit, s frekvenco po izbiri: vsako minuto, urni povzetek ali dnevni povzetek. Če je za vaše metrike zadrževanja pomembno sledenje čez članke, to funkcijo izgubite.

Vse ostalo v Notification Bell se preslika. Pripomoček ima zvonec, ki postane rdeč z neprebranimi, in izpiše: odgovori na vas, odgovori v niti, v katere ste komentirali, omembe, glasove na vaših komentarjih, aktivnost na naročenih straneh, dodelitve značk in zasebna sporočila (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). V‑app obvestila so v realnem času preko WebSocket. E‑maili za odgovore in omembe se pošiljajo vsako minuto le za odobrene komentarje.

Za SSO uporabnike posredujte `optedInNotifications` in `optedInSubscriptionNotifications` v payloadu, FastComments pa posodobi njihove nastavitve ob naslednji naložitvi strani. E‑maili potrebujejo e‑mail naslov v payloadu. Predloge e‑mailov so ureljive po tipu in po jeziku pod Customize, Email Templates, pošiljanje pa iz vaše domene z DKIM je podprto. Moderatorji in admini dobijo dnevni, tedenski ali mesečni povzetek z enoklikom odobritev, odgovor in povezave za spam.

OpenWeb‑ov Notification Webhook pošilja dogodke po‑uporabniku (`replied-message`, `liked-message`, `topic-by-keyword` itd.) na vaš koncni naslov. FastComments‑ovi webhooki pokrivajo vir komentarja: ustvarjen, posodobljen, izbrisan, z neomejenim številom naročenih koncnih točk (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Če ste uporabljali webhook za pošiljanje lastnega e‑mail sistema, boste morali ponovno zgraditi to logiko na dogodkih komentarjev, ali pa pustiti FastComments, da pošlje e‑maile.

### SSO: From codeA/codeB to a Signed Payload

OpenWeb‑ovo rokovanje ima šest korakov: počakajte na `spot-im-api-ready`, OpenWeb izda `codeA`, vaš odjemalec ga pošlje vašemu backendu, vaš backend potrdi uporabnika in kliče `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb vrne `codeB`, in vaš odjemalec vrne `codeB` nazaj OpenWebu (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Odjava kliče `window.SPOTIM.logout()`.

FastComments Secure SSO nima povratnega kroga in ni novega končnega naslova na vaši strani. Ko renderirate stran za prijavljenega uporabnika, vaš backend serijalizira uporabnika, ga Base64‑kodira in podpiše z HMAC‑SHA256 z vašim API skrivnim ključem. Pripomoček pošlje payload s svojimi zahtevki in FastComments preveri podpis (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). V Node:

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

Časovni žig je v milisekundah od epohe in je zavrnjen, če je starejši od dveh dni. Za odjavljene bralce izpustite tri podpisane polja in posredujte le `loginURL` (ali funkcijo `loginCallback`) ter pripomoček prikaže prijavni poziv namesto kompozitorja. Polni delujoči primeri v Node, Java in PHP so v <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repozitoriju primerov kode</a>.

Uporabniki se ustvarijo ob prvi naložitvi strani. Ne izvajate bulk registracije. Ker OpenWeb uvoznik ujema avtorje komentarjev po `user_name`, uporabnik, katerega SSO payload nosi enako `username`, prevzame svoje uvožene komentarje ob prvi nalogi niti in jih lahko od takrat ureja ali briše. Obstaja tudi SSO uporabniški API, če želite predhodno ustvariti uporabnike.

Vsakič, ko se pošlje payload, FastComments posodobi uporabniški zapis, tako da se spremenjeno prikazno ime ali avatar na vaši strani prenese pri naslednjem ogledu. Nastavite polje na `null`, da ga počistite.

Če ste uporabljali OpenWeb‑ov tretji SSO z Auth0, Gigya ali Piano preko `window.SPOTIM.startSSOForProvider`, FastComments potek ostaja enak: ko vaš ponudnik potrdi uporabnika, vaš backend sestavi in podpiše payload. Ni posebne integracije na strani FastComments.

Obstajata še dve možnosti. Simple SSO pošlje objekt uporabnika brez podpisa iz odjemalca, za platforme brez backend-a, in označi aktivnost kot potrjeno, ko je prisoten e‑mail (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 podpiše vaše osebje v FastComments nadzorni plošči preko Okta, Azure AD ali ADFS, z mapiranjem vlog, in je na voljo v enterprise načrtih (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

OpenWeb‑ov API za politiko moderacije po članku ima štiri vrednosti: `spot_policy`, `approve_all`, `publish_and_moderate` in `require_approval`. FastComments konfigurira enaka vedenja v Moderation Settings: samodejno odobravanje vklopljeno/izklopljeno, odobritev zahtevana le za prvi komentar uporabnika, in samodejno odobravanje le preverjenih (prijavljenih ali SSO) komentarjev. Pravila se uporabljajo na celotnem spletnem mestu ali na vzorcu URL ID, kot je `*/politics/*`, kar je način, kako reproducirate politiko po sekcijah. Vsak komentar, odobren ali ne, pristane v nadzorni plošči Moderate Comments, zato je model objavi‑potem‑preglej privzeti pogled tam (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Uvoz prenaša stanje moderacije. OpenWeb `message_status` `approved` se uvozi kot odobren in pregledan; `rejected` se uvozi kot spam in pregledan; karkoli drugega se uvozi kot neodobreno in nepregledano, zato se pojavi v vaši moderacijski čakalni vrsti. `reports_count` postane število zastav komentarja.

Avtomatizirana moderacija v FastComments je plastnata, ne enoten sistem kot Aida:

- Spam klasifikator, neprekinjeno treniran, na voljo kot skupni model za vse najemnike ali izoliran za vašega najemnika, s faktorjem zaupanja, ki omili filtriranje za dolgoletne ali pogosto pripete uporabnike.
- Opcijski ChatGPT 4 spam pregled na Flex obračunu.
- Moderacija slikovnih vsebin pri nizki, srednji ali visoki občutljivosti za naložene slike.
- Črni seznam besed, približno 450 privzetih fraz, ureljiv, ki maskira zadetke z zvezdicami. Tu grejo vaše OpenWeb omejene besede.
- Prag zastav, ki samodejno skrije komentar po N prijavah.
- Preprečevanje ponavljajočih se in skoraj enakih sporočil, vedno vklopljeno.
- AI Agents: dogodkovno vodeni agenti z izrecnim seznamom dovoljenih orodij (označi spam, odobri, zakleni, pripni, opozori z DM, blokiraj, dodeli značko, odgovori). Vsak agent začne v suhem teku, občutljiva orodja so lahko zaklenjena za človeško odobritev, in vsako dejanje je zabeleženo z obrazložitvijo in oceno zaupanja.

OpenWeb‑ov API za utišanje uporabnikov omogoča, da en SSO bralec utiša drugega. FastComments‑ov ekvivalent je Block User v meniju komentarja, na voljo kateremu koli prijavljenemu bralcu. Bani so dejanje moderatorja: trajni ali za določen čas, po želji senčni ban (uporabnik vidi svoj komentar, drugi ne), po želji po hashiranem IP, z dodatkom aliasov e‑mailov, ki se obravnavajo kot en naslov. Seznam blokiranih uporabnikov je preiskljiv po e‑mailu, imenu, moderatorju in komentarju, ki je sprožil ban.

Nadzorna plošča Moderate Comments podpira filtre (potrebuje pregled, potrebuje odobritev, spam, označeno, od blokiranih uporabnikov) in iskanje po besedilu, množične akcije z razveljavitvijo in pavzo, "izberi vse ustrezne" za zelo velike vrste, moderacijske skupine, da vaš športni oddelek vidi le športne niti, dnevnike po komentarju, ki pokažejo, zakaj je e‑mail poslan ali ne, in deljive filtrirane povezave. Moderatorji imajo le nadzorno ploščo; ne morejo spreminjati nastavitev ali uvažati podatkov.

### Analytics

FastComments Analytics prikazuje uporabnike, ki so trenutno online, po vaših spletnih mestih in po strani, najboljše strani po komentarjih ali po aktivnih bralcih, ter dnevne serije za nalaganje strani, komentarje, glasove in ustvarjene račune (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Statistike moderatorjev so ločene. Števci so skoraj v realnem času, zakasnjeni največ minuto, in vsako nalaganje strani se šteje, ne vzorči.

Kar ne boste našli, so podatki o polnjenju oglasov, CPM ali prihodkih, ker oglasov ni. Če je OpenWeb‑ova nadzorna plošča bila vaš vir poročanja o angažmaju‑do‑prihodkih, se to poročanje prenese na vaš lasten oglasni sklad.

### Monetization

OpenWeb postavlja oglase znotraj in okoli Conversation ter ponuja Standalone Ad enoto, s kampanjami, ki jih nastavite preko vašega OpenWeb kontakta (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments ne poganja oglasov v pripomočku, ne ponuja delitve prihodkov, in ne nalaga skriptov za oglaševanje ali sledenje tretjih strani. Pripomoček je iframe, ki ga postavite; oglasni prostori nad in pod njim so vaši in se poganjajo preko tega, kar že uporabljate.

Kompenzacija je jasna: izgubite, kar vam je OpenWeb plačeval, in pridobite fiksne, predvidljive stroške ter pripomoček, ki ne dodaja zahtev za oglase na vašo stran. Blagovna znamka je odstranjena v Flex in Pro načrtih, in bele označbe so na voljo v Pro in Enterprise.

### Data Export and Privacy

Vsi izvozi komentarjev iz FastComments nadzorne plošče kot CSV so na voljo kadarkoli, z datumi v UTC ISO formatu, in isti podatki so na voljo tudi preko API-ja. Webhooki pokrivajo stalno sinhronizacijo. Uvožene datoteke se izbrišejo iz FastComments takoj, ko se uvoz konča.

Za GDPR in CCPA OpenWeb ponuja izvoz in izbris API, kjer komentarji izbrisanih uporabnikov ostanejo pritrjeni k naključnemu gostujočemu računu (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments podpira zahteve za izvoz in izbris podatkov, ponuja Data Processing Agreement, in poganja ločeno EU namestitev na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> s podatki, repliciranimi le znotraj EU točk prisotnosti. Ustvarite svoj račun tam, če so vaši bralci v Evropi. V EU regiji AI agenti za ban vedno zahtevajo človeško odobritev, da izpolnijo DSA Člen 17.

Komentar podatki v globalni namestitvi se replicirajo po regijah, vključno s singapurskim vozliščem, pripomoček pa se streže iz lastnega DNS in CDN FastComments. Vdelani skript je manjši od 30 KB na disku in približno 6 KB stisnjen na prenosu.

### Mobile SDKs

OpenWeb ponuja Android, iOS in React Native SDK-je s Conversation, Articles, Authentication, Notifications, Reactions in In Conversation Polls. FastComments ponuja native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> in <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> knjižnice s nitmi komentarjev, živimi posodobitvami preko WebSocket, Secure SSO, glasovanjem, omembami, nalaganjem slik, moderacijskimi akcijami (zastavitev, pripenjanje, zaklepanje, blokiranje), temami, načinom live chat in komponento socialnega toka. EU regija je konfiguracijska zastavica. Ločenega oglasnega SDK-ja ni, ker oglasov ni.

### Embed and SPA Integration

OpenWeb zaganjalnik in vsebnik:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments ekvivalent:

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

Vaš tenant ID je na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">strani kode vdelave</a>, ko imate račun. `data-article-tags` nima ekvivalenta, saj ni sledenja tem; hashtag-i znotraj komentarjev so druga funkcija.

Za neskončni pomik in enostranske aplikacije je OpenWeb‑ov pristop Virtual Pages en vsebnik na članek. V FastComments pokličete `FastCommentsUI(element, config)` za vsako nit in kasneje `instance.update(newConfig)` za zamenjavo URL ID ali `instance.destroy()` za odstranitev (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular in SolidJS knjižnice to upravljajo, ko se spremeni prop konfiguracije. Klici življenjskega cikla (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) nadomestijo `spot-im-*` DOM dogodke, ki ste jih poslušali.

Števci komentarjev na indeksnih straneh uporabljajo pripomoček za števce komentarjev, enojni ali bulk. Za SEO se komentarji izrišejo neposredno v stran za iskalnike, namesto v iframe, tako da ni SEO API klica za konfiguracijo.

### Step-by-Step Cutover

**1. Ustvarite račun in nastavite osnovno.** Registrirajte se na fastcomments.com ali eu.fastcomments.com. Nastavite nastavitve moderacije, črni seznam besed, stil glasovanja, privzeto razvrščanje in lastni CSS na strani prilagoditve pripomočka. Dodajte moderatorje in moderacijske skupine. Če imate veliko admin uporabnikov, podpiramo uvoz za vas.

**2. Zaženite prvi uvoz.** Pojdite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, izberite OpenWeb (.csv) in naložite. Uvoz teče v ozadju; stran prikazuje število vrstic in status, prejeli boste e‑mail, ko se konča (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Vsak OpenWeb ID sporočila postane FastComments ID komentarja, zato ponovni uvoz ne ustvari podvojenih.

**3. Preverite števce.** Primerjajte število vrstic v opravilu z vašim izvozom. Odprite nekaj URL ID-jev z veliko prometa v nadzorni plošči moderacije in ročno preverite avtorje, datume, skupno število glasov in stanje odobritve. Potrdite, da se zavrnjeni komentarji prikažejo kot spam, odobreni pa čakajo v čakalni vrsti.

**4. Zgradite SSO payload.** Implementirajte kodo za podpis, ki je zgoraj, v vašem backendu, z istim `id` in `username`, ki ste ju uporabili pri OpenWebu. Preizkusite na testni strani: uvoženi komentarji uporabnika se prikažejo kot njegovi, urejanje in brisanje se pojavijo v meniju komentarja.

**5. Zamenjajte vdelavo v testni predlogi.** Zamenjajte zaganjalnik in vsebnik s FastComments fragmentom, preslikajte `data-post-id` v `urlId` in `data-post-url` v `url`. Odstranite `window.SPOTIM.logout()` in `spot-im-*` poslušalce, ali jih preslikajte v ustrezne povratne klice. Uporabite svoj CSS v pravilu prilagoditve, namesto v kodi, da se testira pri vsaki FastComments posodobitvi.

**6. Delujte vzporedno.** Postavite FastComments na sekcijo ali odstotek člankov, medtem ko OpenWeb ostane na preostanku. Na strani OpenWeb ni treba spreminjati ničesar. Spremljajte moderacijsko čakalno vrsto in stran analitike. Bralci, ki komentirajo na FastComments straneh v tem obdobju, niso v vašem OpenWeb izvozu, zato načrtujte končni uvoz pred njihovim začetkom, ne po njem.

**7. CSP in DNS.** Če uporabljate Content-Security-Policy, dovolite `cdn.fastcomments.com` in `fastcomments.com` (ali `eu.fastcomments.com`) za `script-src`, `frame-src` in `connect-src`, ter odstranite `spot.im` in `openweb.com` vnose, ko je zaganjalnik odpravljen. Vaš DNS se ne spremeni. Preusmeritve niso potrebne, ker se URL ID‑ji ujemajo.

**8. Končni uvoz in go‑live.** Pridobite še en izvoz OpenWeb, ki pokriva obdobje vzporednega delovanja, ga naložite (ponovni uvoz je varen), nato razširite spremembo predloge po vseh straneh in odstranite zaganjalnik, Reactions, Topic Tracker, Spotlight, zvonec in oglasne vsebnike.

**9. Go‑live kontrolni seznam.**

- Živo komentiranje je vidno na produkcijskem članku v dveh brskalnikih.
- SSO prijava, odjava in komentar pod pravim naročnikom.
- Moderatorji prejmejo povzetek in lahko odobrijo iz njega.
- E‑maili za odgovore in omembe prispejo in povežejo na pravo stran.
- Seznam banov in črni seznam besed je napolnjen.
- Page Reacts in števci komentarjev se prikazujejo tam, kjer sta bila Reactions in števec.
- CSP poročila so čista.
- Zadnji primerjava števcev komentarjev med vašim izvozom in nadzorno ploščo.

### Kaj izgubite in kaj je drugačno

Bodite neposredni glede vrzeli:

- **Live Blog.** Ni ekvivalenta. Ohranite ga v CMS‑u ali orodju za live blogging in FastComments postavite pod njim.
- **Topic Tracker.** Ni sledenja tem ali avtorjem čez članke. Le naročnine na stran.
- **Community Spotlight.** Ni CTA kartice. `headerHTML` ponudi sporočilo nad vnosom, ne pa obrazec za zajem e‑mailov.
- **Prihodki od oglasov.** Nič. Pripomoček je brez oglasov po zasnovi.
- **Notification webhook.** Webhooki so na dogodkih komentarjev, ne na dogodkih obvestil po uporabniku.
- **Gnezdenje pri uvozu.** Trenutni uvoz razravna odgovore v komentarje najvišje ravni na isti strani. Sporočite, če potrebujete obnovitev drevesa.
- **Zgodovina reakcij.** Števci reakcij na ravni članka niso v izvozu komentarjev in se začnejo z ničlo.
- **Zgodovina anket.** Definicije anket in glasovi niso v izvozu komentarjev; besedilo ankete se uvozi, anketa ne.
- **Model prijave.** Bralci brez SSO se prijavijo s čarobno povezavo namesto gesla ali socialnega gumbka.
- **Človeško moderacijsko osebje.** OpenWeb ponuja moderacijsko ekipo z Aida. FastComments nudi orodja, klasifikatorje in agente; človeški moderatorji so vaši.

Kaj pridobite, v istem duhu: pripomoček, ki doda le majhen skript in ne zahteva oglasnih zahtev, moderacijo, ki jo lahko upravlja ena oseba za veliko spletno mesto z množičnimi akcijami in agenti, SSO, ki je funkcija podpisovanja namesto protokola, in dobavitelja, ki ni pod sodno nadzorno.

### Časovnica in brezplačna ponudba uvoza

Načrtujte en do dva tedna za založnika z eno SSO integracijo in nekaj sto tisoč komentarji: en do dva dneva za izvoz in prvi uvoz, nekaj dni za SSO in predloge, obdobje vzporednega delovanja, nato končni uvoz in preklop. Platforma že obvladuje to skalo: United Cloud poganja več kot deset portalov in milijone komentarjev na FastComments, itsfoss.com je prenesel zgodovino 88 000 komentarjev iz drugega ponudnika s tem samim samopostrežnim uvoznikom.

FastComments brezplačno uvozi vaš OpenWeb CSV izvoz, pomaga vam poganjati OpenWeb in FastComments vzporedno med prehodom, in pomaga pri sami migraciji, vključno z gnezdenjem in vprašanji o ujemanju uporabnikov. Enterprise načrti vključujejo SLA, podporne odgovore v eni uri med delovnim časom, in možnost izolirane Cloud namestitve v vašem lastnem oblačnem računu (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Flex plačilo po uporabi je na voljo za strani, ki želijo začeti brez pogodbe.

Pišite na <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> z velikostjo vašega izvoza in nastavitvijo SSO, mi bomo odgovorili s načrtom.

### Zaključek

Danes prenesite svoj izvoz. Preostanek migracije je mehaničen: isti ID‑ji objav postanejo URL ID‑ji, ista uporabniška imena prevzamejo svoje komentarje preko SSO, stanje moderacije se prenese, in vdelava je preprosta zamenjava. Razlike FastComments so navedene zgoraj, da se lahko odločite na podlagi dejstev.

Cheers!{{/isPost}}