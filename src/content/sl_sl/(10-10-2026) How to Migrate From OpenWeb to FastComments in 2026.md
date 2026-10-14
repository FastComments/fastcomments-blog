[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Kako migrirati iz OpenWeb v FastComments leta 2026[/postlink]

{{#unless isPost}}
Vodnik po funkcijah za založnike, ki prehajajo iz OpenWeb (prej Spot.IM): kaj se ujema 1:1, kaj je drugačno, kako deluje uvoz CSV, kako se spreminja SSO ročaj, in korak-po-korak načrt prehoda.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnično žargonsko terminologijo

Ta vodnik je namenjen vodjem produktov in inženiringa ter upraviteljem skupnosti, ki danes uporabljajo OpenWeb in potrebujejo načrt za prehod. Pregleda vsako površino OpenWeb, navaja ekvivalent FastComments in jasno pove, kje ni 1:1 ujemanja.

### Zakaj zdaj

30. septembra 2026 je Tel avivski okrajni sodišče odredilo imenovanje začasnega upravitelja nad OpenWeb na zahtevo njegovega posojilodajalca, Mars Growth Capital, ki ima prednostno založbo nad sredstvi in računi podjetja ter želi to uveljaviti proti izraelskemu premoženju, bančnim računom in intelektualni lastnini OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Naslednji dan je bil imenovan začasni skrbnik, odvetnik Ehud Gindes (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Zgodaj v letu 2026 je Microsoft, eden največjih kupcev OpenWeb, končal sodelovanje in zadržal plačila zaradi spora o prometu, ki ga OpenWeb zavrača (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb navaja, da platforma še naprej deluje. Sodna nadzora, posojilodajalec, ki uveljavlja založbe na IP, od katerih je odvisen vaš pripomoček za komentarje, in skrbnik, katerega naloga je ohraniti vrednost sredstev, niso pogoji, ki jih kot založnik želite za ključno površino sodelovanja. Če še niste izvedli popolnega izvoza podatkov, to storite najprej, danes, pred vsemi ostalimi koraki v tem vodniku.

### Kaj potrebujete, preden začnete

- **Your OpenWeb comment export.** OpenWeb omogoča Export API (v4), ki ustvarja zipane CSV datoteke, največ 100.000 komentarjev na datoteko, z okni časovnega obdobja do enega meseca in povezavami za prenos, ki potečejo po enem tednu (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Zahtevajte vsa potrebna okna in datoteke shranite na varno mesto. Če vam je kontakt v OpenWeb v preteklosti zagotovil izvoz CSV v Admin Panelu, ga obdržite tudi. Uvoznik FastComments prebere OpenWeb CSV s stolpci, kot so `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` in `url`.
- **Your Spot ID and the list of post IDs.** Vsak `data-post-id`, ki ga posredujete zaganjalniku, postane FastComments URL ID. Če so vaši ID-ji objav CMS ID-ji, zabeležite, kako so generirani, da lahko na strani FastComments izdate enake vrednosti.
- **Your SSO user list.** Natančne vrednosti `primary_key` in `user_name`, ki ste jih registrirali v OpenWeb. Avtorstvo komentarjev se med uvozom ujema po uporabniškem imenu, zato želite v FastComments SSO payload posredovati enaka uporabniška imena.
- **Your moderator list and roles.** Seznam računov administratorjev, moderatorjev in novinarjev ter katere sekcije moderirajo.
- **Your moderation configuration.** Splošna politika (odobri vse, objavi in moderiraj, zahteva odobritev), preglasitve po člankih, seznam omejenih besed, utišani in blokirani uporabniki.
- **Custom CSS and theme settings.** Izvozite vse, kar imate v Admin Panelu, da lahko to ponovno ustvarite na strani prilagoditve FastComments pripomočka.
- **Where the launcher lives in your templates**, vključno s katerimikoli stranmi, ki poganjajo Reactions, Topic Tracker, Spotlight, Notification Bell ali Standalone Ad brez Conversation.

### AI podprta migracija

FastComments ponuja [LLM Kit in MCP strežnik za pospešitev migracije](https://docs.fastcomments.com/guide-llm-kit.html).

### Kako OpenWeb ID-ji objav preslikajo v FastComments URL ID-je

FastComments povezuje nit komentarjev z `urlId`. Privzeto je URL ID očiščeni URL strani, vendar ga lahko nastavite na katerikoli niz, in to je natanko to, kar počne uvoznik OpenWeb: prebere stolpec `post_id` in ga uporabi kot FastComments URL ID za vsak komentar v tem članku. Prav tako shrani stolpec `url` kot prikazni URL, tako da povezave za moderacijo in e‑mail obvestila kažejo na pravo stran.

Torej pravilo za vaše predloge je: kjerkoli ste OpenWeb posredovali `data-post-id="POST_ID"` in `data-post-url="ARTICLE_URL"`, posredujte FastComments `urlId: 'POST_ID'` in `url: 'ARTICLE_URL'`. Uvožene niti se ujemajo z živimi nitmi brez preusmeritev in brez prepisovanja URL-jev. Glejte <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">dokumentacijo o URL ID-ju</a>.

Če raje v prihodnje ključate niti po URL-ju namesto po ID-ju objave, najprej uvozite, nato pa uporabite orodje Migrate Comments pod Manage Data, da v bulk premaknete niti iz ID-ja objave v URL.

### Preslikava funkcij

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Opombe |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Živo po privzetku. Novi komentarji se skrčijo za gumbom "Show N New Comments", ali se prikažejo takoj z `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Uvoz ohrani `likes_count` in `dislikes_count`. Stil srca in "onemogoči glasovanje" sta možnosti nastavitve. |
| Reactions (article-level icons) | Page Reacts | Konfigurabilen nabor ikon na strani, zapomni se po uporabniku. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` omejuje globino. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` nastavi privzeto po spletnem mestu ali po vzorcu URL. |
| User profiles | User profiles | Avatar, biografija, značke, karma, aktivnost, zasebna sporočila. Deluje za SSO uporabnike. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Nastavi v SSO payloadu. Ni potrebnega klica v ozadje. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderatorji pripnejo iz pripomočka ali nadzorne plošče. Predloga AI agenta pripne najbolj glasovane komentarje. |
| In Conversation Polls | Polls on comments | 2 do 10 možnosti, datumi zaprtja, načini zasebnosti, omejitve ustvarjalca. |
| Ask Me Anything formats | No dedicated product | Izvedi kot nit z avtorjevo SSO uporabniško oznako in vprašanje pripeto. |
| Live Blog | No 1:1 equivalent | Obstaja pripomoček Live Chat in komentarji v načinu klepeta. Uredniško live blogiranje ostane v vašem CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Uporabniki sledijo strani, ne temi ali avtorju. Ni sledenja med članki. |
| Notification Bell | Notification bell in the widget | Odgovori, omembe, aktivnost niti, glasovi, naročnine, značke, zasebna sporočila. |
| Email notifications | Email notifications with templates | Možnost odjave po uporabniku preko SSO zastav. Prilagojene predloge, pošiljatelj z blagovno znamko. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | Brez klica register-user. Podpišite payload na strežniku, posredujte ga pripomočku. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Isti payload. Vaš backend ga podpiše, ko je uporabnik prijavljen. |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | Bralci se prijavijo s povezavo v e‑mailu. Brez gesel. |
| Moderation policy per article | Customization rules per URL ID pattern | Način odobritve, filter za neželeno pošto in več se razlikujejo po vzorcih `*/section/*`. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | Agenti začnejo v suhem teku in lahko zahtevajo človeško odobritev. |
| Restricted words | Word blacklist customizable by locale | ~450 privzetih fraz, mogoče urejati. |
| User muting | Block User | Blokiranje uporabnika po bralcu iz menija komentarja. |
| Bans | Bans | Trajno, časovno, sence, IP‑hashirano, z dodatnimi aliasi e‑mail naslova, ki se obravnava kot en naslov. |
| Moderation Panel | Moderate Comments dashboard | Filtri, množična dejanja z razveljavitvijo in pavzo, "izberi vse ustrezne" za zelo velike vrste, skupine moderiranja, da vaš športni oddelek vidi le športne niti, dnevniki po komentarju, ki pokažejo, zakaj e‑mail je bil poslan ali ne, ter delljive filtrirane povezave. |
| Notification Webhook | Webhooks | Komentar ustvarjen, posodobljen, izbrisan. Ni webhooka za posamezno obvestilo. |
| Engagement dashboard | Analytics | Živi uporabniki online, najboljše strani po komentarjih ali po živih bralcih, in dnevne serije za nalaganje strani, komentarje, glasove in ustvarjene račune. Ni poročanja o prihodkih iz oglasov. |
| In-conversation ads, Standalone Ad | None | FastComments ne prikazuje oglasov. Oglasni prostori nad in pod njim so vaši in se izvajajo preko tega, kar že uporabljate. |
| Social Reviews (star ratings) | Ratings and Reviews | Ločen izdelek na istem računu. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Ponovna cirkulacija, ki jo poganja aktivnost komentarjev. |
| Comment Counter | Comment count widgets | Ena in množična. |
| Export Comments API | CSV export, API, webhooks | Izvoz iz nadzorne plošče kadarkoli. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com hrani podatke v EU. DPA na voljo. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, živa posodabljanje, nit, dejanja moderiranja. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` in `destroy()` za SPA. |

</div>

Preostanek tega razdelka podrobno obravnava vsako skupino.

### Pogovor, glasovi in reakcije

OpenWeb-ov Conversation je nit v realnem času. FastComments pripomoček za komentarje je tudi: komentarji, urejanja, brisanja, glasovi in dejanja moderiranja se pošljejo vsem, ki gledajo nit (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Privzeto se novi komentarji drugih pojavijo za gumbom "Show 2 New Comments", da se stran ne premakne pod bralca. Za žive dogodke nastavite `showLiveRightAway`, da se prikažejo takoj, in `newCommentsToBottom`, če želite, da tečejo navzdol kot klepet.

Všečki in nesprejemi postanejo glasovi za in proti. Uvoz ohrani oba števila na komentar. Če je vaša skupnost navajena na en sam všeček, preklopite stil glasovanja na srca na strani prilagoditve pripomočka. Glasovanje je mogoče tudi popolnoma onemogočiti.

OpenWeb Reactions je ločen pripomoček z dvema do štirimi označenimi ikonami na članku (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments ekvivalent je Page Reacts: konfigurabilen nabor slik reakcij, priložen pripomočku za komentarje, zapomni se po strani in po uporabniku (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Števci reakcij niso del izvoza komentarjev OpenWeb, zato se začnejo z ničlo.

Razvrščanje se preslika neposredno. OpenWeb-ove vrednosti `data-sort-by` best, newest in oldest ustrezajo Most Relevant, Newest First in Oldest First. Privzeto nastavite z `defaultSortDirection` (`MR`, `NF`, `OF`) v kodi ali v pravilu prilagoditve. Bralci lahko preklapljajo v pripomočku.

`data-read-only="true"` postane `readonly: true`, kar blokira nove komentarje, glasove, urejanja in brisanja. `data-post-staleness-days` nima neposrednega ekvivalenta, vendar lahko pravilo prilagoditve uporabi `readonly` na vzorcu URL ID, in ga lahko tudi preklopite v predlogah glede na starost članka. `data-messages-count` je velikost strani, nastavljena na strani prilagoditve pripomočka od 10 do 200 komentarjev.

### Odgovori in nit

FastComments privzeto podpira neomejeno gnezdenje; `maxReplyDepth` ga omeji (`1` daje ravno dvostopenjsko strukturo). OpenWeb CSV vsebuje stolpca `parent_id` in `parent_comment_id`. Uvoznik prebere `parent_comment_id` in obnovi drevo odgovorov v polni globini, tako da odgovor na odgovor ostane gnezden pod svojim neposrednim staršem, z avtorjem, časovnim žigom, glasovi, številom zastav in stanjem odobritve nedotaknjene. Odgovori so povezani tudi, ko se pojavijo pred svojim staršem v datoteki, ali ko je starš uvožen iz prejšnjega okna izvoza. Odgovor, katerega starš manjka v vseh izvozih, postane komentar najvišje ravni. OpenWeb ID sporočila se shrani na vsak komentar, zato ponovni uvoz starejšega ploskega uvoza niti postavi na svoje mesto.

### Uporabniški profili in značke

FastComments uporabniki, vključno s SSO uporabniki, dobijo profil z avatarjem, prikaznim imenom, biografijo, povezavami do družbenih omrežij, značkami, karmo, številom komentarjev, javnim pretokom aktivnosti in zasebnimi sporočili (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Vsako od aktivnosti, komentarjev profila in DM-jev je mogoče onemogočiti po uporabniku v SSO payloadu ali globalno v nastavitvah.

OpenWeb-ova Značka avtorja zahteva klic `GET /sso/v1/user/{primary_key}` za avtorja in postavitev vrnjenega ID-ja v `data-author-id`. V FastComments nastavite `displayLabel: 'Author'` (ali katerokoli oznako do 100 znakov) v SSO payloadu uporabnika, ter `isAdmin` ali `isModerator` za osebje. Oznaka se prikaže poleg njihovega imena pri vsakem komentarju. Za bogatejši sistem konfigurirajte značke pod Customize, Badges: slikovne ali besedilne značke, dodeljene samodejno ob doseženi mejni vrednosti (število komentarjev, glasovi navzgor, pripeti komentarji, status veteran, hitrost odgovora) ali ročno, ter dodelljive iz SSO payloada z `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pripeti komentarji, ankete in vprašanja & odgovori

Katerikoli moderator lahko pripne ali odpripne komentar iz menija komentarja v pripomočku ali iz nadzorne plošče moderiranja. Pripeti komentarji se pošljejo v živo vsem na niti. Če želite to avtomatizirati, funkcija AI Agents ponuja predlogo Top Comment Pinner, ki pripne komentar najvišje ravni, ko preseže prag glasov (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb-ove In Conversation Polls omogočajo osebju, da priložijo anketo z 2 do 4 možnostmi k komentarju najvišje ravni. FastComments ankete se prav tako priložijo komentarju, z 2 do 10 možnostmi, neobveznim datumom zaprtja, zasebnostjo rezultatov (anonimno, samo admini, vsi) in načinom "glasuj za ogled rezultatov". Izberete, kdo lahko ustvarja ankete (onemogočeno, admini in moderatorji, vsi) in ali anonimni bralci lahko glasujejo. Ankete so tudi na voljo v javnem API-ju za ustvarjanje iz vašega CMS.

OpenWeb je na svoji platformi izvajal formate Ask Me Anything. FastComments nima ločenega Q&A izdelka. Praktična nadomestitev je običajna nit na namenskem URL ID: SSO uporabnik gosta nosi `displayLabel`, pripnete uvodni komentar, bralci postavljajo vprašanja v komentarjih najvišje ravni, gost odgovarja v niti, omembe in obvestila o odgovorih povlečejo ljudi nazaj. Nastavite `noNewRootComments` po zaprtju okna, da se nadaljujejo le odgovori.

Community Spotlight (OpenWeb-ov zbiralnik e‑mailov, števec in preusmeritvene kartice) nima ekvivalenta. Pripomoček podpira prilagojeno HTML glavo nad vnosom komentarja preko `headerHTML`, kar zajema poziv k dejanju, ne zajem e‑mailov.

### Live Blog

FastComments nima Live Bloga. OpenWeb-ov Live Blog je uredniški izdelek: poročevalci, dodeljeni v Admin Panelu, objavljajo posodobitve z vdelanimi povezavami, tviti in videi, bralci pa sledijo (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Kar FastComments ponuja za živo pokrivanje, je stran bralca: Live Chat pripomoček (`embed-live-chat.min.js`) za pretakanje klepeta, in pripomoček za komentarje v načinu klepeta (`showLiveRightAway` plus `newCommentsToBottom`) poleg vaše žive pokritosti. Za same uredniške posodobitve založniki, ki zapuščajo OpenWeb, jih ohranijo v CMS ali namenskem orodju za live bloganje in pod njim postavijo FastComments za razpravo. Vdelave medijev (YouTube, SoundCloud in drugi) so podprte v komentarjih, tako da posodobitve osebja, objavljene kot komentarji, vsebujejo bogate medije.

### Sledilnik tem, obvestila in e‑mail

OpenWeb-ov Topic Tracker omogoča bralcu, da sledi temam in avtorjem, izhajajočim iz metapodatkov strani, in prejme obvestilo, ko se pojavijo novi članki, ki se ujemajo (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments nima sledenja temam ali avtorjem med članki. Bralci se naročijo na stran prek obvestilnega zvonca in prejemajo posodobitve za to nit, s frekvenco, izbrano po naročilu: vsako minuto, urni povzetek ali dnevni povzetek. Če je sledenje med članki pomembno za vaše številke zadrževanja, nas obvestite, saj je ta funkcija na naši načrtovani poti.

Vse ostalo v obvestilnem zvoncu se preslika. Pripomoček ima zvonec, ki postane rdeč z neprebranimi številkami in izpiše: odgovore na vas, odgovore v niti, ki ste jo komentirali, omembe, glasove navzgor na vaših komentarjih, aktivnost na naročenih straneh, podeljene značke in zasebna sporočila (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Obvestila v aplikaciji so v realnem času preko WebSocket. E‑maili z odgovori in omembami se pošiljajo vsako minuto le za odobrene komentarje.

Za SSO uporabnike posredujte v payloadu `optedInNotifications` in `optedInSubscriptionNotifications`, FastComments posodobi njihove nastavitve ob naslednjem nalaganju strani. E‑maili potrebujejo e‑mail naslov v payloadu. Predloge e‑mailov so urejene po tipu in po lokalnem jeziku pod Customize, Email Templates, pošiljanje z lastne domene z DKIM je podprto. Moderatorji in admini dobijo povzetek dnevno, tedensko ali mesečno z enoklikom odobri, odgovori in povezave za neželeno pošto.

OpenWeb-ov Notification Webhook pošilja dogodke obvestil po uporabniku (`replied-message`, `liked-message`, `topic-by-keyword` in podobno) na vaš končni naslov. FastComments webhooki pokrivajo vir komentarja: ustvarjen, posodobljen in odstranjen, z neomejenim številom naročenih končnih točk (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Če ste uporabljali obvestilni webhook za zajemanje svojega e‑mail sistema, boste ponovno zgradili to logiko na dogodke komentarjev, ali pa pustili FastComments, da pošlje e‑maile.

### SSO: Od codeA/codeB do podpisanega payloada

OpenWeb-ov ročaj ima šest korakov: počakajte na `spot-im-api-ready`, OpenWeb ustvari `codeA`, vaš odjemalec ga pošlje vašemu strežniku, vaš strežnik potrdi uporabnika in kliče `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb vrne `codeB`, in vaš odjemalec vrne `codeB` nazaj OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Odjava kliče `window.SPOTIM.logout()`.

FastComments Secure SSO nima krožnega klica in novega končnega naslova na vaši strani. Ko izrišete stran za prijavljenega uporabnika, vaš strežnik serijalizira uporabnika, ga kodira v Base64 in podpiše z HMAC-SHA256 z vašim API skrivnim ključem. Pripomoček pošlje payload s svojimi zahtevki in FastComments preveri podpis (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). V Node:

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

Časovni žig je v milisekundah od epohe in se zavrne, če je starejši od dveh dni. Za odjavljene bralce izpustite tri podpisane polja in posredujte le `loginURL` (ali funkcijo `loginCallback`), pripomoček prikaže poziv za prijavo namesto sestavljalnika. Polni delujoči primeri v Node, Java in PHP so v <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repozitoriju primerov kode</a>.

Uporabniki se ustvarijo ob prvem nalaganju strani. Nihče se ne registrira v bulk. Ker uvoznik OpenWeb ujema avtorje komentarjev po `user_name`, uporabnik, katerega SSO payload nosi enako `username`, zahteva svoje uvožene komentarje, ko prvič naloži nit, in jih lahko od takrat ureja ali briše. Obstaja tudi SSO uporabniški API, če želite predhodno ustvariti uporabnike.

Vsakič, ko se payload pošlje, FastComments posodobi uporabniški zapis, tako da spremenjeno prikazno ime ali avatar na vaši strani prenese na naslednji ogled strani. Nastavite polje na `null`, da ga počistite.

Če ste uporabili OpenWeb-ov tretji SSO z Auth0, Gigya ali Piano preko `window.SPOTIM.startSSOForProvider`, je potek FastComments enak kot zgoraj: ko vaš ponudnik potrdi uporabnika, vaš strežnik sestavi in podpiše payload. Na strani FastComments ni posebne integracije za ponudnika.

Obstajata še dve možnosti. Simple SSO pošlje uporabniški objekt brez podpisa iz odjemalca, za platforme brez strežnika, in označi aktivnost kot potrjeno, ko je prisoten e‑mail (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 podpiše vaše osebje v nadzorno ploščo FastComments preko Okta, Azure AD ali ADFS, z mapiranjem vlog, in je na voljo v enterprise načrtih (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderiranje

OpenWeb-ov API za politiko moderiranja po članku ima štiri vrednosti: `spot_policy`, `approve_all`, `publish_and_moderate` in `require_approval`. FastComments nastavi enako vedenje v nastavitvah Moderation Settings: samodejno odobritev vklopljena ali izklopljena, odobritev potrebna le za prvi komentar uporabnika, in samodejno odobri le preverjene (prijavljene ali SSO) komentarje. Pravila veljajo po celotnem spletnem mestu ali po vzorcu URL ID, kot je `*/politics/*`, kar je način, kako reproducirate politiko po sekcijah. Vsak komentar, odobren ali ne, pristane v nadzorni plošči Moderate Comments, zato je model objavi-nato-preglej privzeti pogled tam (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Uvoz prenaša stanje moderiranja. OpenWeb `message_status` `approved` se uvozi kot odobreno in pregledano; `rejected` se uvozi kot spam in pregledano; karkoli drugega se uvozi kot neodobreno in nepregledano, zato se prikaže v vaši vrsti moderiranja. `reports_count` postane število zastav na komentarju.

Avtomatizirano moderiranje v FastComments je plastno, ne enoten sistem kot Aida:

- Spam klasifikator, nepreko treniran, na voljo kot skupni model za vse najemnike ali izoliran za vašega najemnika, z zaupnim faktorjem, ki omili filtriranje za dolgoletne ali pogosto pripete uporabnike.
- Neobvezni LLM pregled spama na Flex obračunu (na voljo so odprti modeli kot GLM-5.3).
- Moderiranje vsebine slik pri nizki, srednji ali visoki občutljivosti za naložene slike.
- Lokaliziran seznam prepovedanih besed, približno 450 privzetih fraz, urej prilagodljiv, ki zamenja zadetke z zvezdicami. Tu grejo vaše OpenWeb omejene besede.
- Prag zastav, ki samodejno skrije komentar po N prijavah.
- Preprečevanje ponovljenih in skoraj podvojenih sporočil, vedno vklopljeno.
- AI Agents: agenti, ki se sprožijo ob dogodkih, z izrecnim seznamom dovoljenih orodij (označi spam, odobri, zakleni, pripni, opozori preko DM, blokiraj, dodeli značko, odgovori). Vsak agent začne v suhem teku, občutljiva orodja so lahko zaklenjena za človeško odobritev, in vsako dejanje je zabeleženo z obrazložitvijo in oceno zaupanja.

OpenWeb-ov API za utišanje uporabnikov omogoča, da en SSO bralec utiša drugega. FastComments ekvivalent je Block User v meniju komentarja, na voljo kateremukoli prijavljenemu bralcu. Prepovedi so dejanje moderatorja: trajno ali za določen čas, po želji s senčno prepovedjo (uporabnik vidi svoj komentar, drugi pa ne), po želji po hashiranem IP, z dodatnimi aliasi e‑mail naslova, ki se obravnava kot en naslov. Seznam blokiranih uporabnikov je iskan po e‑mailu, imenu, moderatorju in komentarju, ki je sprožil blokado.

Nadzorna plošča Moderate Comments podpira filtre (potrebuje pregled, potrebuje odobritev, spam, označeno, od blokiranih uporabnikov) in besedilno iskanje, množična dejanja z razveljavitvijo in pavzo, "izberi vse ustrezne" za zelo velike vrste, skupine moderiranja, da vaš športni oddelek vidi le športne niti, dnevniki po komentarju, ki pokažejo, zakaj e‑mail je bil poslan ali ne, ter delljive filtrirane povezave. Moderatorji imajo le nadzorno ploščo; ne morejo spreminjati nastavitev ali uvažati podatkov.

### Analitika

FastComments Analytics prikazuje uporabnike, ki so trenutno online po vaših spletnih mestih in po strani, najboljše strani po komentarjih ali po živih bralcih, in dnevne serije za nalaganje strani, komentarje, glasove in ustvarjene račune (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Statistika moderatorjev je ločena. Števci so skoraj v realnem času, z zamudo največ minute, in vsako nalaganje strani se šteje, ne vzorči.

Tega ne boste našli: nič o polnjenju oglasov, CPM ali prihodkih, ker oglasov ni. Če je bil OpenWeb-ov nadzorni panel vaš vir poročanja o angažiranosti v prihodke, se to poročanje premakne na vaš lasten oglasni sklad.

### Monetizacija

OpenWeb postavlja oglase znotraj in okoli Conversation ter ponuja enoto Standalone Ad, s kampanjami, nastavljenimi preko vašega OpenWeb kontakta (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments ne prikazuje oglasov v pripomočku, ne deli prihodkov in ne nalaga skriptov za oglase ali sledenje tretjih strani. Pripomoček je iframe, ki ga postavite; oglasni prostori nad in pod njim so vaši in se izvajajo preko tega, kar že uporabljate.

Kompenzacija je jasna: izgubite, kar vam je OpenWeb plačal, in pridobite fiksno, napovedljivo ceno ter pripomoček, ki ne dodaja zahtevkov za oglase na vašo stran. Blagovna znamka je odstranjena v načrtih Flex in Pro, beležna oznaka (white labeling) je na voljo v načrtih Pro in Enterprise.

### Izvoz podatkov in zasebnost

Vsi izvozi podatkov komentarjev iz nadzorne plošče FastComments kot CSV so na voljo kadarkoli, z datumi v formatu UTC ISO, in isti podatki so na voljo tudi preko API-ja. Webhooki pokrivajo stalno sinhronizacijo. Uvozne datoteke se iz FastComments izbrišejo takoj, ko se uvoz konča.

Za GDPR in CCPA OpenWeb ponuja API za izvoz in brisanje, kjer komentarji izbrisanih uporabnikov ostanejo pritrjeni k naključnemu gostu (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments podpira zahteve za izvoz in brisanje podatkov, ponuja Dogovor o obdelavi podatkov (Data Processing Agreement) in upravlja ločeno EU namestitev na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> s podatki, repliciranimi le znotraj EU točk prisoteke. Ustvarite svoj račun tam, če so vaši bralci v Evropi. V EU regiji AI agenti za prepoved vedno zahtevajo človeško odobritev, da izpolnijo DSA člen 17.

Komentarski podatki v globalni namestitvi se replicirajo po regijah, vključno s singapurskim vozliščem, pripomoček pa se streže iz lastnega DNS in CDN FastComments. Vdelana skripta je približno 35 KB stisnjena pri prenosu.

### Mobilni SDK-ji

OpenWeb ponuja Android, iOS in React Native SDK-je s Conversation, Articles, Authentication, Notifications, Reactions in In Conversation Polls. FastComments ponuja native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> in <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> knjižnice z nitmi komentarjev, živo posodabljanje preko WebSocket, Secure SSO, glasovanjem, omembami, nalaganjem slik, dejanjami moderiranja (zastavica, pripenjanje, zaklepanje, blokiranje), temami, načinom živih klepetov in komponento za socialni vir. EU regija je konfiguracijska zastavica. Ločenega ad SDK-ja ni, ker oglasov ni.

### Vdelava in SPA integracija

OpenWeb zaganjalnik in kontejner:

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

Vaš ID najemnika je na <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">strani s poverilnicami</a>, ko imate račun. `data-article-tags` nima ekvivalenta, ker ni sledenja temam; hashtag-i v komentarjih so druga funkcija.

Za neskončni pomik in enostranske aplikacije je OpenWeb-ov pristop Virtual Pages en kontejner na članek. V FastComments pokličete `FastCommentsUI(element, config)` za vsako nit in kasneje `instance.update(newConfig)`, da zamenjate URL ID, ali `instance.destroy()`, da ga odstranite (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Knjižnice React, Vue, Angular in SolidJS to upravljajo, ko se spremeni prop konfiguracije. Klici življenjskega cikla (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) nadomestijo `spot-im-*` DOM dogodke, ki ste jih poslušali.

Števci komentarjev na indeksnih straneh uporabljajo pripomoček za število komentarjev, enega ali množičnega. Za SEO se komentarji izrišejo neposredno v stran za iskalne pajke, namesto v iframe, zato ni SEO API klica za konfiguracijo.

### Korak-po-korak prehod

**1. Ustvarite račun in nastavite osnovno.** Registrirajte se na fastcomments.com ali eu.fastcomments.com. Nastavite nastavitve moderiranja, seznam prepovedanih besed, stil glasovanja, privzeto razvrščanje in prilagojeni CSS na strani prilagoditve pripomočka. Dodajte moderatorje in skupine moderiranja. Če imate veliko admin uporabnikov, podpora uvo uvozi za vas.

**2. Izvedite prvi uvoz.** Pojdite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, izberite OpenWeb (.csv) in naložite. Uvoz teče kot ozadno opravilo; stran prikazuje število vrstic in status, prejmete e‑mail, ko se konča (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Vsak komentar ohrani svoj OpenWeb ID sporočila kot zunanji ID, zato ponovni uvoz posodobi obstoječe komentarje namesto ustvarjanja podvojenih.

**3. Preverite števce.** Primerjajte število vrstic opravila z vašim izvozom. Odprite nekaj URL ID-jev z veliko prometom v nadzorni plošči moderiranja in preverite avtorje, datume, skupno število glasov in stanja odobritve. Potrdite, da se zavrnjeni komentarji prikažejo kot spam, čakajoči pa ostanejo v vrsti.

**4. Zgradite SSO payload.** Implementirajte zgornjo kodo za podpis v vašem strežniku, z uporabo istega `id` in `username`, ki ste ju uporabili v OpenWeb. Preizkusite z računom osebja na testni strani: uvoženi komentarji uporabnika se prikažejo kot njegovi, urejanje in brisanje se pojavijo v njegovem meniju komentarja.

**5. Zamenjajte vdelavo na testni predlogi.** Zamenjajte zaganjalnik in kontejner s FastComments izrezkom, preslikajte `data-post-id` v `urlId` in `data-post-url` v `url`. Odstranite `window.SPOTIM.logout()` in `spot-im-*` poslušalce, ali jih preslikajte v povratne klice. Uporabite svoj CSS v pravilu prilagoditve namesto v kodi, da se preizkusi pri vsaki izdaji FastComments.

**6. Delajte vzporedno.** Postavite FastComments na sekcijo ali odstotek člankov, medtem ko OpenWeb ostane na preostalem. Na strani OpenWeb ni potrebno spremeniti ničesar. Spremljajte vrsto moderiranja in stran analitike. Bralci, ki komentirajo na FastComments straneh v tem obdobju, niso v vašem OpenWeb izvozu, zato načrtujte končni uvoz, preden začnejo, ne po tem.

**7. CSP in DNS.** Če uporabljate Content-Security-Policy, dovolite `cdn.fastcomments.com` in `fastcomments.com` (ali `eu.fastcomments.com`) za `script-src`, `frame-src` in `connect-src`, ter odstranite vnose `spot.im` in `openweb.com`, ko je zaganjalnik odstranjen. Na vašem DNS ni sprememb. Preusmeritve niso potrebne, ker se URL ID-ji ujemajo.

**8. Končni uvoz in go-live.** Izvedite še en izvoz iz OpenWeb, ki pokriva vzporedno obdobje, ga naložite (ponovni uvoz je varen), nato razširite spremembo predloge po vseh straneh in odstranite zaganjalnik, Reactions, Topic Tracker, Spotlight, zvonec in oglasne vsebnike.

**9. Go-live kontrolni seznam.**

- Živo komentiranje je vidno na produkcijskem članku iz dveh brskalnikov.
- SSO prijava, odjava in komentar pod pravim naročnikovim računom.
- Moderatorji prejmejo povzetek in lahko odobrijo iz njega.
- E‑maili z odgovori in omembami prispejo in povežejo na pravilno stran.
- Seznam prepovedi in seznam prepovedanih besed je napolnjen.
- Page Reacts in števci komentarjev se prikazujejo tam, kjer sta bila Reactions in števec.
- CSP poročila so čista.
- Zadnja primerjava števila komentarjev med vašim izvozom in nadzorno ploščo.

### Kaj izgubite in kaj je drugačno

Biti neposreden glede vrzeli:

- **Live Blog.** Ni ekvivalenta. Ohranite ga v CMS ali orodju za live bloganje in pod njim postavite FastComments.
- **Topic Tracker.** Ni sledenja temam ali avtorjem med članki. Le naročnine na strani.
- **Community Spotlight.** Ni izdelka CTA kartice. `headerHTML` vam daje sporočilo nad sestavljalnikom, ne zajem e‑mailov.
- **Ad revenue.** Nič. Pripomoček je po zasnovi brez oglasov.
- **Notification webhook.** Webhooki so na dogodke komentarjev, ne na dogodke obvestil po uporabniku.
- **Reactions history.** Števci reakcij na ravni članka niso v izvozu komentarjev in se začnejo znova. Včasih jih lahko pobiramo s vaše strani.
- **Polls history.** Definicije anket in glasovi niso v izvozu komentarjev; besedilo ankete se uvozi, anketa ne. Včasih jih lahko pobiramo s vaše strani.
- **Login model.** Bralci brez SSO se prijavijo s čarobno povezavo namesto gesla ali gumba za socialno prijavo.
- **Human moderation staff.** OpenWeb vključuje ekipo moderatorjev z Aida. FastComments ponuja orodja, klasifikatorje in agente; člove moderatorje so vaši.

Kaj pridobite, v istem duhu: pripomoček, ki doda le majhen skript in brez zahtevkov za oglase, moderiranje, ki ga lahko ena oseba upravlja za veliko spletno mesto z množičnimi dejanji in agenti, SSO, ki je funkcija podpisovanja namesto protokola, in ponudnik, ki ni pod sodnim nadzorom.

### Časovnica in brezplačna ponudba uvoza

Načrtujte en do dva tedna za založnika z eno SSO integracijo in nekaj sto tisoč komentarji: en do dva dneva za izvoz in prvi uvoz, nekaj dni za SSO in predloge, vzporedno obdobje, nato končni uvoz in preklop. Platforma že obvladuje to razsežnost: United Cloud upravlja več kot deset portalov in milijone komentarjev na FastComments, in itsfoss.com je prenesel zgodovino 88 000 komentarjev iz drugega ponudnika preko istega samopostrežnega uvoznika.

FastComments brezplačno uvozi vaš OpenWeb CSV izvoz, pomaga vam omogočiti OpenWeb in FastComments vzporedno med prehodom ter pomaga pri sami migraciji, vključno z nitmi in vprašanji o ujemanju uporabnikov. Enterprise načrti vključujejo 99,99 % SLA in podporne odgovore v eni uri med delovnim časom. Flex cenitev po uporabi je na voljo za strani, ki želijo začeti brez pogodbe.

<a href="https://fastcomments.com/contact-us">Pišite nam</a> z velikostjo vašega izvoza in nastavitvijo SSO, mi pa se bomo vrnili z načrtom.

### Zaključek

Izvedite svoj izvoz še danes. Zapomnite si: isti ID-ji objav postanejo URL ID-ji, stanje moderiranja se prenese, in vdelava je preprosta zamenjava. Mesta, kjer se FastComments razlikuje, so navedena zgoraj, da se lahko odločite na podlagi dejstev. :)

{{/isPost}}

---