[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Kako migrirati s OpenWeb na FastComments u 2026[/postlink]

{{#unless isPost}}
Vodič po značajkama za izdavače koji prelaze s OpenWeba (prije Spot.IM): što se podudara 1:1, što je drugačije, kako funkcionira CSV uvoz, kako se mijenja SSO rukovanje, i korak-po-korak plan prebacivanja.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

Ovaj vodič je namijenjen voditeljima proizvoda i inženjeringa te menadžerima zajednice koji danas koriste OpenWeb i trebaju plan za migraciju. Prolazi kroz svaku površinu OpenWeba, navodi ekvivalent u FastCommentsu i jasno kaže gdje ne postoji 1:1 podudaranje.

### Zašto sada

30. rujna 2026. Tel Avivski okružni sud naredio je imenovanje privremenog upravitelja nad OpenWebom na zahtjev njegovog zajmodavca, Mars Growth Capital, koji ima prvi prioritetni zalog na imovini i računima tvrtke i želi ga provesti protiv izraelske imovine, bankovnih računa i intelektualnog vlasništva OpenWeba (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30. rujna</a>). Privremeni povjerenik, adv. Ehud Gindes, imenovan je sljedećeg dana (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4. listopada</a>). Ranije u 2026. Microsoft, jedan od najvećih kupaca OpenWeba, prekinuo je suradnju i zadržao plaćanja zbog spornog prometa koji OpenWeb odbacuje (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28. rujna</a>).

OpenWeb tvrdi da platforma i dalje radi. Sudski nadzor, zajmodavac koji provodi zaloge na IP-u na kojem vaš widget za komentare ovisi, i povjerenik čiji je zadatak očuvati vrijednost imovine nisu uvjeti koje izdavač želi pod ključnom površinom angažmana. Ako još niste preuzeli potpuni izvoz podataka, učinite to prvo, danas, prije bilo čega drugog u ovom vodiču.

### Što trebate prije nego što započnete

Prikupite sljedeće prije nego što dotaknete bilo koji kod:

- **Vaš izvoz komentara iz OpenWeba.** OpenWeb izlaže Export API (v4) koji proizvodi zipane CSV datoteke, najviše 100 000 komentara po datoteci, s vremenskim prozorima do jednog mjeseca i poveznicama za preuzimanje koje istječu nakon tjedna (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Zatražite svaki prozor koji vam treba i pohranite datoteke na sigurno mjesto. Ako vam je kontakt iz OpenWeba u prošlosti dao CSV izvoz iz Admin panela, zadržite i taj. FastComments uvoz čita OpenWeb CSV s kolonama poput `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` i `url`.
- **Vaš Spot ID i popis ID‑ova postova.** Svaki `data-post-id` koji proslijedite launcheru postaje FastComments URL ID. Ako su vaši ID‑ovi postova CMS‑ovi, zabilježite kako se generiraju kako biste mogli emitirati iste vrijednosti na strani FastComments.
- **Vaš popis SSO korisnika.** Konkretno `primary_key` i `user_name` vrijednosti koje ste registrirali u OpenWebu. Autorsko vlasništvo komentara podudara se po korisničkom imenu tijekom uvoza, pa želite proslijediti ista korisnička imena u FastComments SSO payloadu.
- **Vaš popis moderatora i uloga.** Administratorski, moderacijski i novinarski računi, i koje sekcije svaki moderira.
- **Vaša konfiguracija moderacije.** Pravila na razini cijele stranice (odobri sve, objavi i moderiraj, zahtijevaj odobrenje), nadjačavanja po članku, popis zabranjenih riječi, utišani i zabranjeni korisnici.
- **Prilagođeni CSS i postavke teme.** Izvezite sve što imate u Admin panelu kako biste to mogli obnoviti na stranici za prilagodbu widgeta FastComments.
- **Gdje se launcher nalazi u vašim predlošcima**, uključujući sve stranice koje pokreću Reactions, Topic Tracker, Spotlight, Notification Bell ili Standalone Ad bez Conversationa.

### Kako se OpenWeb ID‑ovi postova mapiraju na FastComments URL ID‑ove

FastComments povezuje nit komentara s `urlId`. Prema zadanim postavkama URL ID je očišćeni URL stranice, ali možete ga postaviti na bilo koji string, i upravo to radi OpenWeb uvoz: čita `post_id` kolonu i koristi je kao FastComments URL ID za svaki komentar na tom članku. Također pohranjuje `url` kolonu kao prikazni URL tako da linkovi za moderaciju i obavijesti e‑mailom pokazuju na ispravnu stranicu.

Stoga pravilo za vaše predloške glasi: gdje god ste proslijedili `data-post-id="POST_ID"` i `data-post-url="ARTICLE_URL"` OpenWebu, proslijedite `urlId: 'POST_ID'` i `url: 'ARTICLE_URL'` FastCommentsu. Uvezene niti se podudaraju s živim nitima bez preusmjeravanja i bez prepisivanja URL‑ova. Pogledajte <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">dokumentaciju o URL ID‑u</a>.

Ako radije želite ključati niti po URL‑u ubuduće umjesto po ID‑u posta, najprije uvezite, a zatim upotrijebite alat Migrate Comments pod Manage Data kako biste u bulku premjestili niti s ID‑a posta na URL.

### Mapa značajki

| OpenWeb | FastComments | Napomene |
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

Ostatak ovog odjeljka prolazi kroz svaku grupu detaljno.

### Conversation, Votes and Reactions

OpenWeb‑ov Conversation je nit u stvarnom vremenu. FastComments widget za komentare također je: komentari, uređivanja, brisanja, glasovi i moderacijske radnje šalju se svima koji gledaju nit (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Prema zadanim postavkama novi komentari od drugih ljudi pojavljuju se iza gumba "Show 2 New Comments" kako stranica ne bi skočila pod čitatelja. Za live događaje postavite `showLiveRightAway` da se prikazuju odmah, i `newCommentsToBottom` ako želite da teku prema dolje kao chat.

Likes i dislikes postaju up i down glasovi. Uvoz čuva oba broja po komentaru. Ako vaša zajednica koristi samo jedan like, prebacite stil glasovanja na srca u stranici za prilagodbu widgeta. Glasovanje se također može potpuno isključiti.

OpenWeb Reactions je zaseban widget s dva do četiri označena ikona na članku (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments ekvivalent je Page Reacts: konfigurabilni set slika reakcija pričvršćenih uz widget, zapamćen po stranici i po korisniku (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Brojke reakcija nisu dio OpenWeb CSV izvoza, pa počinju od nule.

Sortiranje se mapira izravno. OpenWeb `data-sort-by` vrijednosti best, newest i oldest odgovaraju Most Relevant, Newest First i Oldest First. Postavite zadano s `defaultSortDirection` (`MR`, `NF`, `OF`) u kodu ili u pravilu prilagodbe. Čitatelji mogu mijenjati u widgetu.

`data-read-only="true"` postaje `readonly: true`, što blokira nove komentare, glasove, uređivanja i brisanja. `data-post-staleness-days` nema izravan ekvivalent, ali pravilo prilagodbe može primijeniti `readonly` na uzorak URL‑ID‑a, a vi ga možete i prebacivati iz predložaka ovisno o starosti članka. `data-messages-count` je veličina stranice, postavlja se u stranici za prilagodbu widgeta bilo od 10 do 200 komentara.

### Replies and Threading

FastComments podržava neograničeno ugniježđivanje po zadanim postavkama; `maxReplyDepth` ga ograničava (`1` daje ravnu strukturu s dva nivoa). OpenWeb CSV uključuje `parent_id` i `parent_comment_id` kolone. Trenutni uvoz uvozi svaki redak kao komentar najvišeg nivoa na svojoj stranici, po datumu, s autorom, vremenskom oznakom, glasovima, brojem zastavica i stanjem odobrenja netaknutim. Ne rekonstruira stablo roditelj‑dijete. Ako su vaše niti puno odgovora, javite nam prilikom slanja izvoza i mi ćemo obraditi ugniježđivanje kao dio uvoza umjesto da ostavimo izravnatu nit.

### User Profiles and Badges

FastComments korisnici, uključujući SSO korisnike, dobivaju profil s avatarom, prikaznim imenom, biografijom, društvenim vezama, značkama, karmom, brojem komentara, javnim feedom aktivnosti i izravnim porukama (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Svaki od površina aktivnosti, komentara profila i DM‑ova može se onemogućiti po korisniku u SSO payloadu ili globalno u konfiguraciji.

OpenWeb‑ov Author Badge zahtijeva poziv `GET /sso/v1/user/{primary_key}` za autora i postavljanje vraćenog ID‑a u `data-author-id`. U FastComments postavite `displayLabel: 'Author'` (ili bilo koju oznaku do 100 znakova) u SSO payloadu, i `isAdmin` ili `isModerator` za osoblje. Oznaka se prikazuje uz njihovo ime na svakom komentaru. Za bogatiji sustav, konfigurirajte značke pod Customize → Badges: slike ili tekstualne značke, automatski dodijeljene po pragovima (broj komentara, up‑glasovi, zakačeni komentari, veteran status, brzina odgovora) ili ručno, i dodjeljive iz SSO payloada s `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Bilo koji moderator može Pin ili Unpin komentar iz izbornika komentara u widgetu ili iz nadzorne ploče. Pinirani komentari se odmah prikazuju svima u niti. Ako želite automatizaciju, AI Agents značajka isporučuje predložak Top Comment Pinner koji zakači komentar najvišeg nivoa kad prijeđe prag glasova (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb‑ove In Conversation Polls omogućuju osoblju da prikače anketu s 2‑4 opcije na komentar najvišeg nivoa. FastComments ankete također prikače na komentar, s 2‑10 opcija, opcionalnim datumom zatvaranja, privatnošću rezultata (anonimno, samo admini, svi) i načinom "glasaj za rezultate". Odaberite tko može stvarati ankete (onemogućeno, admini i moderatori, svi) i mogu li anonimni čitatelji glasati. Ankete su također izložene javnom API‑ju za stvaranje iz vašeg CMS‑a.

OpenWeb je imao Ask Me Anything formate. FastComments nema poseban Q&A proizvod. Praktična zamjena je normalna nit na posvećenom URL‑ID‑u: SSO korisnik gosta nosi `displayLabel`, zakačite uvodni komentar, čitatelji postavljaju pitanja u komentarima najvišeg nivoa, gost odgovara u niti, a obavijesti o spominjanju i odgovorima vraćaju ljude natrag. Postavite `noNewRootComments` nakon što prozor zatvori kako bi se nastavljalo samo s odgovorima.

Community Spotlight (OpenWeb‑ov email collector, counter i redirect kartice) nema ekvivalent. Widget podržava prilagođeni HTML zaglavlja iznad polja za unos putem `headerHTML`, što pokriva CTA, ali ne i obrazac za prikupljanje emailova.

### Live Blog

Ne postoji FastComments Live Blog. OpenWeb‑ov Live Blog je urednički proizvod: reportažeri dodjeljeni u Admin panelu objavljuju ažuriranja s ugrađenim poveznicama, tweetovima i videom, a čitatelji prate (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Ono što FastComments nudi za live pokrivanje je čitateljska strana: Live Chat widget (`embed-live-chat.min.js`) za streaming chat, i widget za komentare u chat modu (`showLiveRightAway` plus `newCommentsToBottom`) uz vaše live izvještavanje. Za urednička ažuriranja, izdavači koji napuštaju OpenWeb zadržavaju ih u svom CMS‑u ili posebnom alatu za live blog i ugrade FastComments ispod za raspravu. Medijski embedovi (YouTube, SoundCloud i drugi) podržani su unutar komentara, pa staff‑ova ažuriranja objavljena kao komentari nose bogati medij.

### Topic Tracker, Notifications and Email

OpenWeb‑ov Topic Tracker omogućuje čitatelju da prati teme i autore iz metapodataka stranice i bude obaviješten kada novi članci odgovaraju (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments nema praćenje tema ili autora preko članaka. Čitatelji pretplaćuju se na stranicu putem zvona za obavijesti i primaju ažuriranja za tu nit, s frekvencijom po pretplati: svaka minuta, satni sažetak ili dnevni sažetak. Ako vam je praćenje preko članaka važno za zadržavanje, to je značajka koju gubite.

Sve ostalo u Notification Bell mapira se. Widget ima zvono koje postaje crveno s brojem nepročitanih i prikazuje: odgovore vama, odgovore u niti u kojoj ste komentirali, spominjanja, up‑glasove na vaše komentare, aktivnost na pretplaćenim stranicama, dodijeljene značke i izravne poruke (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In‑app obavijesti su u stvarnom vremenu preko WebSocket‑a. Emailovi za odgovore i spominjanja šalju se svake minute samo za odobrene komentare.

Za SSO korisnike, proslijedite `optedInNotifications` i `optedInSubscriptionNotifications` u payloadu i FastComments ažurira njihove postavke pri sljedećem učitavanju stranice. Emailovi zahtijevaju email adresu u payloadu. Email predlošci su uređivi po tipu i po jeziku pod Customize → Email Templates, a slanje s vaše domene uz DKIM je podržano. Moderatori i admini dobivaju dnevni, tjedni ili mjesečni sažetak s jednim klikom za odobravanje, odgovor i linkove za spam.

OpenWeb‑ov Notification Webhook objavljuje događaje po korisniku (`replied-message`, `liked-message`, `topic-by-keyword` i sl.) na vaš endpoint. FastComments webhookovi pokrivaju resurs komentar: kreiran, ažuriran i uklonjen, s onoliko pretplatničkih endpointa koliko želite (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Ako ste koristili webhook za obavijesti da napajate vlastiti email sustav, morat ćete obnoviti tu logiku na događaje komentara, ili dopustiti FastCommentsu da šalje emailove.

### SSO: From codeA/codeB to a Signed Payload

OpenWeb‑ovo rukovanje ima šest koraka: čekanje na `spot-im-api-ready`, OpenWeb generira `codeA`, vaš klijent ga šalje vašem backendu, vaš backend potvrđuje korisnika i poziva `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb vraća `codeB`, i vaš klijent vraća `codeB` OpenWebu (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Odjava poziva `window.SPOTIM.logout()`.

FastComments Secure SSO nema round‑trip i nema novi endpoint na vašoj strani. Kada renderirate stranicu za prijavljenog korisnika, vaš backend serijalizira korisnika, Base64‑kodira ga i potpisuje HMAC‑SHA256 koristeći vaš API secret. Widget šalje payload sa svojim zahtjevima i FastComments verificira potpis (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). U Nodeu:

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

Timestamp je epoch milisekunde i odbacuje se ako je stariji od dva dana. Za odjavljene čitatelje, izostavite tri potpisana polja i proslijedite samo `loginURL` (ili `loginCallback` funkciju) i widget prikazuje prompt za prijavu umjesto kompozitora. Potpuni radni primjeri u Nodeu, Javi i PHP‑u su u <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repozitoriju primjera koda</a>.

Korisnici se stvaraju pri prvom učitavanju stranice. Ne radite bulk‑registraciju nikoga. Budući da OpenWeb uvoz podudara autore komentara po `user_name`, korisnik čiji SSO payload nosi isti `username` preuzima svoje uvezene komentare prvi put kad učita nit i može ih uređivati ili brisati od tada nadalje. Također postoji SSO korisnički API ako želite unaprijed kreirati korisnike.

Svaki put kad se payload pošalje, FastComments ažurira korisnički zapis iz njega, pa se promijenjeno prikazno ime ili avatar s vaše strane propagira pri sljedećem prikazu stranice. Postavite polje na `null` da ga očistite.

Ako ste koristili OpenWeb‑ov treći‑strani SSO s Auth0, Gigya ili Piano putem `window.SPOTIM.startSSOForProvider`, FastComments tok je isti kao gore: nakon što vaš provider autentificira korisnika, vaš backend izgradi i potpiše payload. Nema provider‑specifične integracije za konfiguriranje na FastComments strani.

Postoje još dvije opcije. Simple SSO prosljeđuje objekt korisnika ne‑potpisan s klijenta, za platforme bez backenda, i označava aktivnost kao verificiranu kad je prisutan email (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 potpisuje vaš osoblje u samom FastComments nadzornom panelu kroz Okta, Azure AD ili ADFS, s mapiranjem uloga, i dostupan je na enterprise planovima (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

OpenWeb‑ov API za politiku moderacije po članku ima četiri vrijednosti: `spot_policy`, `approve_all`, `publish_and_moderate` i `require_approval`. FastComments konfigurira iste ponašaje u Moderation Settings: automatsko odobravanje uključeno ili isključeno, odobravanje potrebno samo za prvi komentar korisnika, i automatsko odobravanje samo verificiranih (prijavljenih ili SSO) komentara. Pravila se primjenjuju na cijeloj stranici ili na uzorak URL‑ID‑a poput `*/politics/*`, što je način da reproducirate politiku po sekciji. Svaki komentar, odobren ili ne, završava u Moderate Comments nadzornoj ploči, pa je model objavi‑zatim‑pregled zadani pogled tamo (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Uvoz prenosi stanje moderacije. OpenWeb `message_status` od `approved` uvozi se kao odobren i pregledan; `rejected` uvozi se kao spam i pregledan; sve ostalo uvozi se neodobreno i nepregledano pa se pojavljuje u vašem redoslijedu moderacije. `reports_count` postaje broj zastavica komentara.

Automatizirana moderacija u FastCommentsu je slojevita, a ne jedinstveni sustav poput Aide:

- Spam klasifikator, kontinuirano treniran, dostupan kao zajednički model za sve najamnike ili izoliran za vaš najamnik, s faktorom povjerenja koji ublažava filtriranje za dugogodišnje ili često zakačene korisnike.
- Opcionalna provjera spam‑a ChatGPT 4 na Flex naplati.
- Moderacija sadržaja slike na niskoj, srednjoj ili visokoj osjetljivosti za učitane slike.
- Crna lista riječi od otprilike 450 zadanih fraza, uređivačka, koja maskira podudaranja zvjezdicama. Ovdje idu vaše OpenWeb zabranjene riječi.
- Pragovi zastavica koji automatski skrivaju komentar nakon N prijava.
- Sprječavanje ponavljanja i gotovo‑duplikata poruka, uvijek aktivno.
- AI Agents: događaj‑vođeni agenti s eksplicitnim popisom alata (označi spam, odobri, zaključaj, zakači, upozori DM‑om, zabrani, dodijeli značku, odgovori). Svaki agent počinje u dry‑run modu, osjetljivi alati mogu biti zaključani iza odobrenja čovjeka, i svaka radnja se bilježi s opravdanjem i ocjenom pouzdanosti.

OpenWeb‑ov API za utišavanje korisnika dopušta jednom SSO čitatelju da utiša drugog. FastComments ekvivalent je Block User u izborniku komentara, dostupan svakom prijavljenom čitatelju. Zabrane su radnja moderatora: trajne ili vremenski ograničene, opcionalno shadow (korisnik vidi svoj komentar, ali nitko drugi ne), opcionalno po hash‑iranom IP‑u, s plus‑aliasom e‑mail adrese tretirane kao jedna adresa. Popis zabranjenih korisnika pretraživati se može po e‑mailu, imenu, moderatoru i komentaru koji je izazvao zabranu.

Moderate Comments nadzorna ploča podržava filtere (treba pregled, treba odobrenje, spam, označeno, od zabranjenih korisnika) i pretragu teksta, bulk akcije s undo i pauzom, "select all matching" za vrlo velike redove, grupe moderacije tako da vaš sportski tim vidi samo sportske niti, logove po komentaru koji pokazuju zašto je email poslan ili ne, i dijeljive filtrirane linkove. Moderatori imaju samo nadzornu ploču; ne mogu mijenjati postavke ili uvoziti podatke.

### Analytics

FastComments Analytics prikazuje korisnike online upravo sada po vašim stranicama i po stranici, top stranice po komentarima ili po živim čitateljima, i seriju po danu za učitavanja stranica, komentare, glasove i kreirane račune (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Statistike moderatora su odvojene. Brojke su gotovo u stvarnom vremenu, s najviše minutnim odgodom, i svako učitavanje stranice se broji, a ne uzorkuje.

Nećete naći ništa o popunjavanju oglasa, CPM‑u ili prihodima, jer nema oglasa. Ako je OpenWeb‑ov nadzorni panel bio vaš izvor za izvještavanje o angažmanu‑prihodu, taj izvještaj se prebacuje na vaš vlastiti ad‑stack.

### Monetization

OpenWeb postavlja oglase unutar i oko Conversationa i nudi Standalone Ad jedinicu, s kampanjama postavljenim kroz vaš OpenWeb kontakt (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments ne prikazuje oglase u widgetu, ne dijeli prihod i ne učitava skripte trećih strana za oglase ili praćenje. Widget je iframe koji vi postavljate; ad‑slotovi iznad i ispod njega su vaši i rade kroz ono što već koristite.

Kompenzacija je eksplicitna: gubite sve što vam je OpenWeb plaćao, a dobivate fiksni, predvidljivi trošak i widget koji ne dodaje zahtjeve za oglasima na vašu stranicu. Brendiranje je uklonjeno na Flex i Pro planovima, a white‑labeling je dostupan na Pro i Enterprise planovima.

### Data Export and Privacy

Svi podaci o komentarima mogu se izvesti iz FastComments nadzorne ploče kao CSV u bilo koje vrijeme, s datumima u UTC ISO formatu, a isti podaci su dostupni i preko API‑ja. Webhookovi pokrivaju kontinuiranu sinkronizaciju. Uvezene datoteke se brišu iz FastComments čim se uvoz završi.

Za GDPR i CCPA, OpenWeb pruža API za izvoz i brisanje gdje komentari izbrisanih korisnika ostaju prikačeni na nasumični gost račun (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments podržava zahtjeve za izvoz i brisanje podataka, nudi Data Processing Agreement, i ima zasebnu EU implementaciju na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> s podacima repliciranim samo unutar EU točaka prisutnosti. Kreirajte račun tamo ako su vaši čitatelji u Europi. U EU regiji, AI agent zabrane uvijek zahtijevaju odobrenje čovjeka da zadovolje DSA članak 17.

Komentar podaci u globalnoj implementaciji repliciraju se po regijama uključujući čvor u Singapuru, a widget se servira iz vlastitog DNS‑a i CDN‑a FastCommentsa. Embed skripta je manja od 30 KB na disku i oko 6 KB kompresirana na mreži.

### Mobile SDKs

OpenWeb isporučuje Android, iOS i React Native SDK‑e s Conversation, Articles, Authentication, Notifications, Reactions i In Conversation Polls. FastComments isporučuje native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> i <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> biblioteke s nitima komentara, live ažuriranjima preko WebSocket‑a, Secure SSO, glasovanjem, spominjanjem, uploadom slika, moderacijskim radnjama (flag, pin, lock, block), temama, live chat modom i komponentom društvenog feeda. EU regija je konfiguracijska zastavica. Ne postoji zaseban ad SDK jer nema oglasa.

### Embed and SPA Integration

OpenWeb launcher i kontejner:

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

Vaš tenant ID nalazi se na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">embed code page</a> nakon što imate račun. `data-article-tags` nema ekvivalent jer ne postoji praćenje tema; hashtagovi unutar komentara su drugačija značajka.

Za beskonačni scroll i single‑page aplikacije, OpenWeb‑ov Virtual Pages pristup je jedan kontejner po članku. U FastComments pozivate `FastCommentsUI(element, config)` po niti i kasnije `instance.update(newConfig)` za zamjenu URL‑ID‑a ili `instance.destroy()` za uklanjanje (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular i SolidJS biblioteke to rade kad se promijeni prop konfiguracije. Lifecycle callback‑i (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) zamjenjuju `spot-im-*` DOM događaje koje ste slušali.

Broj komentara na indeksnim stranicama koristi widget za broj komentara, pojedinačno ili bulk. Za SEO, komentari se renderiraju izravno u stranicu za crawlere umjesto unutar iframe‑a, pa ne postoji SEO API poziv za konfiguraciju.

### Step-by-Step Cutover

**1. Create the account and configure the basics.** Registrirajte se na fastcomments.com ili eu.fastcomments.com. Postavite postavke moderacije, crnu listu riječi, stil glasovanja, zadano sortiranje i prilagođeni CSS na stranici za prilagodbu widgeta. Dodajte moderatore i grupe moderacije. Ako imate mnogo admin korisnika, podrška će ih uvesti za vas.

**2. Run a first import.** Idite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, odaberite OpenWeb (.csv) i učitajte. Uvoz se izvršava u pozadini; stranica prikazuje broj redaka i status, a vi dobijete email kad završi (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Svaki OpenWeb ID poruke postaje FastComments ID komentara, pa ponovni uvoz ne stvara duplikate.

**3. Verify counts.** Usporedite broj redaka posla s vašim izvozom. Otvorite nekoliko URL‑ID‑ova s visokim prometom u nadzornoj ploči moderacije i provjerite autore, datume, ukupne glasove i stanje odobrenja. Potvrdite da se odbijeni komentari prikazuju kao spam, a čekajući u redu.

**4. Build the SSO payload.** Implementirajte kod za potpisivanje iznad u vašem backendu, koristeći isti `id` i `username` koji ste koristili u OpenWebu. Testirajte s osobnim računom na staging stranici: uvezeni komentari prikazuju se kao njihovi, a uređivanje i brisanje se pojavljuju u izborniku komentara.

**5. Swap the embed on a staging template.** Zamijenite launcher i kontejner FastComments snippetom, mapirajući `data-post-id` na `urlId` i `data-post-url` na `url`. Uklonite `window.SPOTIM.logout()` i `spot-im-*` slušatelje, ili ih mapirajte na odgovarajuće callbacke. Primijenite vaš CSS u pravilu prilagodbe umjesto u kodu kako bi se testirao na svakoj FastComments verziji.

**6. Run in parallel.** Postavite FastComments na sekciju ili postotak članaka dok OpenWeb ostaje na ostatku. Ništa na OpenWeb strani ne mora mijenjati. Pratite red moderacije i stranicu analitike. Čitatelji koji komentiraju na FastComments stranicama tijekom ovog perioda nisu u vašem OpenWeb izvozu, pa planirajte finalni uvoz prije nego što počnu, a ne nakon.

**7. CSP and DNS.** Ako koristite Content‑Security‑Policy, dopustite `cdn.fastcomments.com` i `fastcomments.com` (ili `eu.fastcomments.com`) za `script-src`, `frame-src` i `connect-src`, i uklonite `spot.im` i `openweb.com` unose kad launcher nestane. Vaš DNS se ne mijenja. Preusmjeravanja nisu potrebna jer se URL‑ID‑ovi podudaraju.

**8. Final import and go live.** Preuzmite još jedan OpenWeb izvoz koji pokriva paralelni period, učitajte ga (ponovni uvoz je siguran), zatim implementirajte promjenu predloška na sve stranice i uklonite launcher, Reactions, Topic Tracker, Spotlight, zvono i ad kontejnere.

**9. Go‑live checklist.**

- Live komentiranje vidljivo na produkcijskom članku iz dva preglednika.
- SSO prijava, odjava i komentar pod pravim pretplatničkim računom.
- Moderatori primaju sažetak i mogu odobriti iz njega.
- Emailovi za odgovor i spominjanje stižu i povezuju na ispravnu stranicu.
- Popis zabrana i crna lista riječi popunjeni.
- Page Reacts i widgeti broja komentara prikazani tamo gdje su bile Reactions i counter.
- CSP izvještaji čisti.
- Još jedno uspoređivanje broja komentara između vašeg izvoza i nadzorne ploče.

### What You Lose and What Is Different

Biti izravan o prazninama:

- **Live Blog.** Nema ekvivalenta. Zadržite ga u CMS‑u ili alatu za live blog i postavite FastComments ispod.
- **Topic Tracker.** Nema praćenja tema ili autora preko članaka. Samo pretplate na stranicu.
- **Community Spotlight.** Nema CTA kartice. `headerHTML` daje poruku iznad kompozitora, ne obrazac za prikupljanje emailova.
- **Ad revenue.** Nema. Widget je bez oglasa po dizajnu.
- **Notification webhook.** Webhookovi su na događaje komentara, ne na događaje obavijesti po korisniku.
- **Threading on import.** Trenutni uvoz izravna pretvara odgovore u top‑level komentare na istoj stranici. Recite nam ako trebate obnoviti stablo.
- **Reactions history.** Brojke reakcija na razini članka nisu u CSV‑u i počinju od nule.
- **Polls history.** Definicije anketa i glasovi nisu u CSV‑u; tekst ankete se uvozi, anketa ne.
- **Login model.** Čitatelji bez SSO prijavljuju se magic‑linkom umjesto lozinkom ili društvenim loginom.
- **Human moderation staff.** OpenWeb nudi tim moderacije s Aida. FastComments pruža alate, klasifikatore i agente; ljudi su vaši.

Što dobivate, u istom duhu: widget koji dodaje samo jedan mali skript i ne traži oglase, moderaciju koju može voditi jedna osoba za veliku stranicu s bulk akcijama i agentima, SSO koji je funkcija potpisivanja umjesto protokola, i dobavljača koji nije pod sudskim nadzorom.

### Timeline and the Free Import Offer

Planirajte jedan do dva tjedna za izdavača s jednim SSO integracijom i nekoliko stotina tisuća komentara: dan ili dva za izvoz i prvi uvoz, nekoliko dana za SSO i predloške, paralelni period, zatim finalni uvoz i prebacivanje. Platforma već nosi ovu skalu: United Cloud upravlja s više od deset portala i milijunima komentara na FastComments, a itsfoss.com je premjestio povijest od 88 000 komentara s drugog providera kroz isti samouslužni uvoz.

FastComments uvozi vaš OpenWeb CSV izvoz besplatno, pomaže vam voditi OpenWeb i FastComments paralelno tijekom prebacivanja, i pomaže s migracijom samom, uključujući pitanja o ugniježđivanju i podudaranju korisnika. Enterprise planovi uključuju SLA, podršku s odgovorom unutar jednog sata tijekom radnog vremena, i opciju Isolated Cloud implementacije u vašem vlastitom cloud računu (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Flex naplata po korištenju dostupna je za stranice koje žele započeti bez ugovora.

Pišite na <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> s veličinom vašeg izvoza i postavkama SSO‑a i vratit ćemo se s planom.

### In Conclusion

Izvezite svoj izvoz danas. Ostatak migracije je mehanički: isti ID‑ovi postova postaju URL‑ID‑ovi, ista korisnička imena preuzimaju svoje komentare putem SSO‑a, stanje moderacije se prenosi, a embed je jednostavna zamjena. Mjesta gdje FastComments razlikuje su navedena iznad kako biste mogli odlučiti uz činjenice pred vama.

Cheers!{{/isPost}}