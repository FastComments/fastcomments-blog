[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Kako migrirati s OpenWeb na FastComments u 2026[/postlink]

{{#unless isPost}}
Vodič po značajkama za izdavače koji prelaze s OpenWeb (prije Spot.IM): što se podudara 1:1, što je drugačije, kako funkcionira CSV uvoz, kako se mijenja SSO handshake i korak-po-korak plan prebacivanja.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

Ovaj vodič je namijenjen voditeljima proizvoda i inženjeringa te upraviteljima zajednice koji danas koriste OpenWeb i trebaju plan za migraciju. Prolazi kroz svaku OpenWeb površinu, navodi FastComments ekvivalent i jasno navodi gdje ne postoji 1:1 podudaranje.

### Zašto sada

30. rujna 2026. Telavijski okružni sud naredio je imenovanje privremenog upravitelja nad OpenWebom na zahtjev njegovog zajmodavca, Mars Growth Capital, koji ima prvi prioritetni založak nad imovinom i računima tvrtke i pokušava ga provesti protiv izraelske imovine, bankovnih računa i intelektualnog vlasništva OpenWeba (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Privremeni povjerenik, adv. Ehud Gindes, imenovan je sljedećeg dana (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Ranije u 2026. Microsoft, jedan od najvećih OpenWebovih kupaca, prekinuo je suradnju i zadržao plaćanja zbog spornog prometa koji OpenWeb odbija (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb tvrdi da platforma i dalje radi. Sudski nadzor, zajmodavac koji provodi založak na IP-u od kojeg ovisi vaš widget za komentare, i povjerenik čiji je zadatak očuvati vrijednost imovine, nisu uvjeti koje želite kao izdavač za ključnu površinu angažmana. Ako još niste preuzeli potpuni izvoz podataka, učinite to prvo, danas, prije bilo čega drugog u ovom vodiču.

### Što vam je potrebno prije nego što započnete

- **Vaš OpenWeb izvoz komentara.** OpenWeb izlaže Export API (v4) koji proizvodi zipane CSV datoteke, najviše 100.000 komentara po datoteci, s vremenskim prozorima do jednog mjeseca i linkovima za preuzimanje koji istječu nakon tjedna (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Zatražite svaki prozor koji vam treba i čuvajte datoteke na sigurnom mjestu. Ako vam je OpenWeb kontakt pružio CSV izvoz iz Admin panela u prošlosti, zadržite i to. FastComments uvoz čita OpenWeb CSV s kolonama poput `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` i `url`.
- **Vaš Spot ID i popis ID‑ova objava.** Svaki `data-post-id` koji proslijedite pokretaču postaje FastComments URL ID. Ako su vaši ID‑ovi objava CMS ID‑ovi članaka, zabilježite kako se generiraju kako biste mogli emitirati iste vrijednosti na FastComments strani.
- **Vaš popis SSO korisnika.** Konkretno `primary_key` i `user_name` vrijednosti koje ste registrirali kod OpenWeba. Autorsko vlasništvo komentara podudara se po korisničkom imenu tijekom uvoza, pa želite proslijediti ista korisnička imena u FastComments SSO payload.
- **Vaš popis moderatora i uloga.** Administratorski, moderacijski i novinarski računi, i koje sekcije svaki moderira.
- **Vaša konfiguracija moderacije.** Pravila na razini stranice (odobri sve, objavi i moderiraj, zahtijevaj odobrenje), nadjačavanja po članku, popis ograničenih riječi, utišani i zabranjeni korisnici.
- **Prilagođeni CSS i postavke teme.** Izvezite sve što imate u Admin panelu kako biste mogli obnoviti to u FastComments stranici za prilagodbu widgeta.
- **Gdje se pokretač nalazi u vašim predlošcima**, uključujući sve stranice koje pokreću Reakcije, Topic Tracker, Spotlight, Notification Bell ili Standalone Ad bez Conversation.

### AI asistirana migracija

FastComments pruža [LLM Kit i MCP poslužitelj za ubrzanje migracije](https://docs.fastcomments.com/guide-llm-kit.html).

### Kako OpenWeb ID‑ovi objava mapiraju na FastComments URL ID‑ove

FastComments povezuje nit komentara s `urlId`. Prema zadanim postavkama URL ID je očišćeni URL stranice, ali možete ga postaviti na bilo koji string, i to je upravo ono što OpenWeb uvoz radi: čita `post_id` stupac i koristi ga kao FastComments URL ID za svaki komentar na tom članku. Također pohranjuje `url` stupac kao prikazni URL tako da linkovi za moderaciju i obavijesti e‑mailom pokazuju na ispravnu stranicu.

Stoga pravilo za vaše predloške je: gdje god ste proslijedili `data-post-id="POST_ID"` i `data-post-url="ARTICLE_URL"` OpenWebu, proslijedite `urlId: 'POST_ID'` i `url: 'ARTICLE_URL'` FastCommentsu. Uvezeni niti podudaraju se s živim nitima bez preusmjeravanja i bez prepisivanja URL‑ova. Pogledajte <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">dokumentaciju o URL ID‑u</a>.

Ako radije želite ključati niti po URL‑u ubuduće umjesto po ID‑u objave, najprije uvezite, a zatim koristite alat Migrate Comments pod Manage Data za masovno premještanje niti s ID‑a objave na URL.

### Mapa značajki

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Napomene |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live po zadanim postavkama. Novi komentari se skupljaju iza gumba "Show N New Comments", ili se pojavljuju odmah uz `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Uvoz čuva `likes_count` i `dislikes_count`. Stil srca i "disable voting" su opcije konfiguracije. |
| Reactions (article-level icons) | Page Reacts | Konfigurabilni set ikona na stranici, zapamćen po korisniku. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` ograničava dubinu grananja. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` postavlja zadano po stranici ili po URL uzorku. |
| User profiles | User profiles | Avatar, biografija, značke, karma, aktivnost, privatne poruke. Radi za SSO korisnike. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Postavlja se u SSO payloadu. Nije potreban poziv backend pretrage. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderatori prikvačuju iz widgeta ili nadzorne ploče. AI agent predložak prikvači najglasnije komentare. |
| In Conversation Polls | Polls on comments | 2 do 10 opcija, datumi zatvaranja, načini privatnosti, ograničenja tvorca. |
| Ask Me Anything formats | No dedicated product | Izvedite kao nit s autorovim SSO korisnikom označenim i pitanjem prikvačenim. |
| Live Blog | No 1:1 equivalent | Postoji Live Chat widget i komentari u chat načinu. Redakcijsko live bloganje ostaje u vašem CMS-u. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Korisnici prate stranicu, ne temu ili autora. Nema praćenja kroz više članaka. |
| Notification Bell | Notification bell in the widget | Odgovori, spominjanja, aktivnost niti, glasovi, pretplate, značke, privatne poruke. |
| Email notifications | Email notifications with templates | Opt‑in po korisniku putem SSO zastavica. Prilagođeni predlošci, brendirani pošiljatelj. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | Nema poziva register-user. Potpišite payload na serveru i proslijedite ga widgetu. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Isti payload. Vaš backend ga potpisuje nakon što je korisnik prijavljen. |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | Čitatelji se prijavljuju putem email linka. Nema lozinki. |
| Moderation policy per article | Customization rules per URL ID pattern | Način odobrenja, filter spama i ostalo varira po uzorcima `*/section/*`. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | Agenti započinju u suhoj probi i mogu zahtijevati odobrenje od čovjeka. |
| Restricted words | Word blacklist customizable by locale | ~450 zadane fraze, moguće uređivati. |
| User muting | Block User | Blokiranje po čitatelju iz izbornika komentara. |
| Bans | Bans | Trajne, vremenski ograničene, sjenovite, hashirane po IP‑u, s prepoznavanjem aliasa. |
| Moderation Panel | Moderate Comments dashboard | Filtri, grupne radnje s poništavanjem, grupe moderacije, sažetci e‑mailova s jednim klikom za odobrenje. |
| Notification Webhook | Webhooks | Komentar kreiran, ažuriran, izbrisan. Nema webhooka po korisniku. |
| Engagement dashboard | Analytics | Korisnici online u stvarnom vremenu, najpopularnije stranice, učitavanja stranica, komentari, glasovi, računi po danu. Nema izvještavanja o prihodima od oglasa. |
| In-conversation ads, Standalone Ad | None | FastComments ne prikazuje oglase. Vi zadržavate vlastiti ad stack oko widgeta. |
| Social Reviews (star ratings) | Ratings and Reviews | Odvojeni proizvod na istom računu. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Recirkulacija potaknuta aktivnošću komentara. |
| Comment Counter | Comment count widgets | Jedinstveni i grupni. |
| Export Comments API | CSV export, API, webhooks | Izvoz s nadzorne ploče u bilo koje vrijeme. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com čuva podatke u EU. DPA dostupna. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Izvorno UI, SSO, live ažuriranja, grananje, radnje moderacije. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` i `destroy()` za SPA‑ove. |

</div>

Preostali dio ovog odjeljka prolazi kroz svaku grupu detaljno.

### Razgovor, glasovi i reakcije

OpenWeb-ov Conversation je nit u stvarnom vremenu. FastComments widget za komentare također je: komentari, uređivanja, brisanja, glasovi i radnje moderacije se šalju svima koji gledaju nit (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Prema zadanim postavkama novi komentari od drugih ljudi pojavljuju se iza gumba "Show 2 New Comments" kako stranica ne bi skočila pod čitatelja. Za live događaje postavite `showLiveRightAway` da se prikazuju odmah, i `newCommentsToBottom` ako želite da teku prema dolje kao chat.

Lajkovi i dislajkovi postaju glasovi za i protiv. Uvoz čuva oba broja po komentaru. Ako vaša zajednica koristi samo jedan lajk, prebacite stil glasanja na srca u stranici za prilagodbu widgeta. Glasanje se također može potpuno isključiti.

OpenWeb Reactions je zaseban widget s dva do četiri označena ikona na članku (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments ekvivalent je Page Reacts: konfigurabilni set slika reakcija prikačen na widget za komentare, zapamćen po stranici i po korisniku (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Broj reakcija nije dio OpenWeb CSV izvoza, pa počinju od nule.

Sortiranje se izravno mapira. OpenWeb-ovi `data-sort-by` vrijednosti best, newest i oldest odgovaraju Most Relevant, Newest First i Oldest First. Postavite zadano s `defaultSortDirection` (`MR`, `NF`, `OF`) u kodu ili u pravilu prilagodbe. Čitatelji mogu mijenjati u widgetu.

`data-read-only="true"` postaje `readonly: true`, što blokira nove komentare, glasove, uređivanja i brisanja. `data-post-staleness-days` nema izravan ekvivalent, ali pravilo prilagodbe može primijeniti `readonly` na uzorak URL ID‑a, i također ga možete prebacivati iz predložaka na temelju starosti članka. `data-messages-count` je veličina stranice, postavlja se u stranici za prilagodbu widgeta bilo od 10 do 200 komentara.

### Odgovori i grananje

FastComments podržava neograničeno grananje po zadanim postavkama; `maxReplyDepth` ga ograničava (`1` daje ravnu strukturu s dva nivoa). OpenWeb CSV uključuje stupce `parent_id` i `parent_comment_id`. Uvoz čita `parent_comment_id` i obnovlja stablo odgovora u punoj dubini, tako da odgovor na odgovor ostaje ugniježđen pod svojim izravnim roditeljem, s autorom, vremenskom oznakom, glasovima, brojem zastavica i stanjem odobrenja netaknutim. Odgovori su povezani čak i kada se pojave prije svog roditelja u datoteci, ili kada je roditelj uvezen iz ranijeg prozora izvoza. Odgovor čiji je roditelj nedostaje u svakom izvozu postaje komentar najviše razine. OpenWeb ID poruke pohranjuje se na svakom komentaru, pa se ponovni uvoz starijeg ravnog uvoza ubacuje na mjesto.

### Korisnički profili i značke

FastComments korisnici, uključujući SSO korisnike, dobivaju profil s avatarom, prikaznim imenom, biografijom, društvenim vezama, značkama, karmom, brojem komentara, javnim aktivnostima i privatnim porukama (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Svaki od površina aktivnosti, profila komentara i DM‑ova može se onemogućiti po korisniku u SSO payloadu ili globalno u konfiguraciji.

OpenWeb-ova Author Badge zahtijeva da pozovete `GET /sso/v1/user/{primary_key}` za autora i postavite vraćeni ID u `data-author-id`. U FastComments postavite `displayLabel: 'Author'` (ili bilo koju oznaku do 100 znakova) u SSO payloadu, i `isAdmin` ili `isModerator` za osoblje. Oznaka se prikazuje uz njihovo ime na svakom komentaru. Za bogatiji sustav, konfigurirajte značke pod Customize, Badges: slike ili tekstualne značke, dodijeljene automatski po pragovima (broj komentara, glasovi, prikvačeni komentari, veteran status, brzina odgovora) ili ručno, i dodjeljive iz SSO payloada s `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Prikvačeni komentari, ankete i Q&A

Bilo koji moderator može Pin ili Unpin komentar iz izbornika komentara u widgetu ili iz nadzorne ploče moderacije. Prikvačeni komentari se odmah prikazuju svima na niti. Ako želite automatizirati, AI Agents značajka isporučuje predložak Top Comment Pinner koji prikvači komentar najviše razine kad prijeđe prag glasova (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb-ove In Conversation Polls omogućuju osoblju da prikače anketu s 2 do 4 opcije na komentar najviše razine. FastComments ankete također se prikače na komentar, s 2 do 10 opcija, opcionalnim datumom zatvaranja, načinima privatnosti (anonimno, samo admini, svi) i načinom "glasaj da vidiš rezultate". Odaberite tko može stvarati ankete (onemogućeno, admini i moderatori, svi) i mogu li anonimni čitatelji glasati. Ankete su također izložene u javnom API‑ju za stvaranje iz vašeg CMS‑a.

OpenWeb je imao Ask Me Anything formate na svojoj platformi. FastComments nema poseban Q&A proizvod. Praktična zamjena je normalna nit na posvećenom URL ID‑u: gostov SSO korisnik nosi `displayLabel`, prikvačite uvodni komentar, čitatelji postavljaju pitanja u komentarima najviše razine, gost odgovara u niti, a spominjanje i obavijesti o odgovorima vraćaju ljude. Postavite `noNewRootComments` nakon što prozor zatvori tako da nastave samo odgovori.

Community Spotlight (OpenWeb-ov email collector, counter i redirect kartice) nema ekvivalent. Widget podržava prilagođeni HTML zaglavlja iznad unosa komentara putem `headerHTML`, što pokriva poziv na akciju, ali ne i obrazac za prikupljanje emaila.

### Live Blog

Nema FastComments Live Blog. OpenWeb-ov Live Blog je urednički proizvod: reportažeri dodijeljeni u Admin panelu objavljuju ažuriranja s ugrađenim linkovima, tweetovima i videom, a čitatelji prate (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Što FastComments nudi za live pokrivanje je čitateljská strana: Live Chat widget (`embed-live-chat.min.js`) za streaming chat, i widget za komentare u chat načinu (`showLiveRightAway` plus `newCommentsToBottom`) uz vašu live pokrivenost. Za urednička ažuriranja, izdavači koji napuštaju OpenWeb zadržavaju ih u svom CMS‑u ili posebnom alatu za live blogiranje i ugrade FastComments ispod za raspravu. Medijski embedovi (YouTube, SoundCloud i drugi) podržani su unutar komentara, pa osobna ažuriranja objavljena kao komentari nose bogati medij.

### Topic Tracker, obavijesti i e‑mail

OpenWeb-ov Topic Tracker omogućuje čitatelju da prati teme i autore iz meta podataka stranice i bude obaviješten kada se nove članke podudaraju (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments nema praćenja tema ili autora kroz članke. Čitatelji pretplaćuju se na stranicu iz obavijesnog zvona i primaju ažuriranja za tu nit, s učestalošću odabrane po pretplati: svaka minuta, satni sažetak ili dnevni sažetak. Ako vam je praćenje kroz više članaka važno za zadržavanje, javite nam jer je ova značajka na našem planu.

Sve ostalo u Notification Bell se mapira. Widget ima zvono koje postaje crveno s brojem nepročitanih i popisom: odgovori vama, odgovori u niti u kojoj ste komentirali, spominjanja, glasovi na vašim komentarima, aktivnost na pretplaćenim stranicama, dodijeljene značke i privatne poruke (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Obavijesti u aplikaciji su u stvarnom vremenu preko WebSocket‑a. Emailovi o odgovorima i spominjanjima šalju se svake minute za odobrene komentare.

Za SSO korisnike, proslijedite `optedInNotifications` i `optedInSubscriptionNotifications` u payload i FastComments ažurira njihove postavke pri sljedećem učitavanju stranice. Emailovi trebaju email adresu u payloadu. Predlošci emailova su uređivi po tipu i po lokalu pod Customize, Email Templates, i slanje s vaše domene uz DKIM je podržano. Moderatori i admini dobivaju dnevni, tjedni ili mjesečni sažetak s jednim klikom za odobrenje, odgovor i linkove za spam.

OpenWeb-ov Notification Webhook objavljuje događaje obavijesti po korisniku (`replied-message`, `liked-message`, `topic-by-keyword` i sl.) na vaš endpoint. FastComments webhookovi pokrivaju resurs komentara: kreiran, ažuriran, izbrisan, s onoliko pretplaćenih endpointa koliko želite (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Ako ste koristili webhook obavijesti za napajanje vlastitog email sustava, obnovit ćete tu logiku na događaje komentara, ili dopustiti FastCommentsu slati emailove.

### SSO: Od codeA/codeB do potpisanog payloada

OpenWeb-ov handshake ima šest koraka: čekanje na `spot-im-api-ready`, OpenWeb generira `codeA`, vaš klijent ga šalje vašem backendu, vaš backend potvrđuje korisnika i poziva `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb vraća `codeB`, i vaš klijent vraća `codeB` natrag OpenWebu (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Odjava poziva `window.SPOTIM.logout()`.

FastComments Secure SSO nema povratni put i nema novi endpoint na vašoj strani. Kada renderirate stranicu za prijavljenog korisnika, vaš backend serijalizira korisnika, Base64‑kodira ga i potpisuje HMAC‑SHA256 koristeći vaš API secret. Widget šalje payload sa svojim zahtjevima i FastComments verificira potpis (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). U Node:

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

Timestamp je epoch milisekunde i odbacuje se ako je stariji od dva dana. Za odjavljene čitatelje, izostavite tri potpisana polja i proslijedite samo `loginURL` (ili funkciju `loginCallback`) i widget prikazuje prompt za prijavu umjesto kompozitora. Potpuni radni primjeri u Node, Java i PHP su u <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a>.

Korisnici se stvaraju pri prvom učitavanju stranice. Ne registrirate nikoga u grupi. Budući da OpenWeb uvoz podudara autore komentara po `user_name`, korisnik čiji SSO payload nosi isti `username` preuzima svoje uvezene komentare prvi put kad učita nit i može ih uređivati ili brisati od tada. Također postoji SSO korisnički API ako želite unaprijed stvoriti korisnike.

Svaki put kad se payload pošalje, FastComments ažurira korisnički zapis iz njega, pa promijenjeno prikazno ime ili avatar na vašoj strani propagira pri sljedećem prikazu stranice. Postavite polje na `null` da ga očistite.

Ako ste koristili OpenWeb-ov treći‑strani SSO s Auth0, Gigya ili Piano putem `window.SPOTIM.startSSOForProvider`, FastComments tok je isti kao gore: nakon što vaš pružatelj autentificira korisnika, vaš backend izgradi i potpiše payload. Nema specifične integracije za konfiguriranje na FastComments strani.

Postoje još dvije opcije. Simple SSO prosljeđuje objekt korisnika nepotpisano s klijenta, za platforme bez backend‑a, i označava aktivnost kao verificiranu kad je prisutan email (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 potpisuje vaše osoblje u FastComments nadzornoj ploči putem Okta, Azure AD ili ADFS, s mapiranjem uloga, i dostupno je na enterprise planovima (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderacija

OpenWeb-ov API za politiku moderacije po članku ima četiri vrijednosti: `spot_policy`, `approve_all`, `publish_and_moderate` i `require_approval`. FastComments konfigurira iste ponašaje u Moderation Settings: automatsko odobrenje uključeno ili isključeno, odobrenje potrebno samo za prvi komentar korisnika, i automatsko odobrenje samo verificiranih (prijavljenih ili SSO) komentara. Pravila se primjenjuju na cijeloj stranici ili na uzorak URL ID‑a poput `*/politics/*`, što je način da reproducirate politiku po sekciji. Svaki komentar, odobren ili ne, završava u Moderate Comments nadzornoj ploči, pa je model objavi‑zatim‑pregled zadani pogled tamo (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Uvoz prenosi stanje moderacije. OpenWeb `message_status` od `approved` uvozi se kao odobren i pregledan; `rejected` uvozi se kao spam i pregledan; sve ostalo uvozi se neodobreno i nepregledano pa se pojavljuje u vašem redu za moderaciju. `reports_count` postaje broj zastavica komentara.

Automatizirana moderacija na FastComments je slojevita, a ne jedinstveni sustav poput Aida:

- Spam klasifikator, kontinuirano treniran, dostupan kao zajednički model za sve najamnike ili izoliran za vaš najamnik, s faktorom povjerenja koji opušta filtriranje za dugogodišnje ili često prikvačene korisnike.
- Opcionalna LLM provjera spama na Flex naplati (dostupni su otvoreni modeli poput GLM-5.3).
- Moderacija sadržaja slika na niskoj, srednjoj ili visokoj osjetljivosti za učitane slike.
- Lokalizirana lista zabranjenih riječi s otprilike 450 zadanim frazama, uređivačna, koja maskira podudaranja zvjezdicama. Ovdje idu vaše OpenWeb ograničene riječi.
- Prag zastavica koji automatski skriva komentar nakon N prijava.
- Prevencija ponovljenih i gotovo duplikatnih poruka, uvijek aktivna.
- AI Agenti: događaj‑vođeni agenti s eksplicitnim popisom dozvoljenih alata (označi spam, odobri, zaključaj, prikvači, upozori putem DM, zabrani, dodijeli značku, odgovori). Svaki agent započinje u suhoj probi, osjetljivi alati mogu biti zaključani iza odobrenja čovjeka, i svaka radnja se bilježi s opravdanjem i ocjenom pouzdanosti.

OpenWeb-ov API za utišavanje korisnika omogućuje jednom SSO čitatelju da utiša drugog. FastComments ekvivalent je Block User u izborniku komentara, dostupan svakom prijavljenom čitatelju.

Zabrane su radnja moderatora: trajna ili na određeno vrijeme, opcionalno sjenovita zabrana (korisnik vidi svoj komentar, ali nitko drugi ne), opcionalno po hashiranom IP‑u, s prepoznavanjem aliasa e‑mail adrese tretirane kao jedna adresa. Popis zabranjenih korisnika pretraživati se može po emailu, imenu, moderatoru i komentaru koji je izazvao zabranu.

Nadzorna ploča Moderate Comments podržava filtre (potrebna recenzija, odobrenje, spam, označeno, od zabranjenih korisnika) i pretragu teksta, grupne radnje s poništavanjem i pauzom, "odaberi sve podudarajuće" za vrlo velike redove, grupe moderacije tako da vaš sportski tim vidi samo sportske niti, logove po komentaru koji pokazuju zašto je email poslan ili ne, i dijeljive filtrirane linkove. Moderatori imaju samo nadzornu ploču; ne mogu mijenjati postavke ili uvoz podataka.

### Analitika

FastComments Analitika prikazuje korisnike online upravo sada na vašim stranicama i po stranici, najpopularnije stranice po komentarima ili po aktivnim čitateljima, i seriju po danu za učitavanja stranica, komentare, glasove i kreirane račune (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Statistike moderatora su odvojene. Brojke su gotovo u stvarnom vremenu, s najviše jednim minutom kašnjenja, i svako učitavanje stranice se broji, a ne uzorkuje.

Nećete naći ništa o popunjavanju oglasa, CPM-u ili prihodima, jer nema oglasa. Ako je OpenWeb‑ova nadzorna ploča bila vaš izvor za izvještavanje o angažmanu‑do‑prihodu, to izvještavanje se prebacuje na vaš vlastiti ad stack.

### Monetizacija

OpenWeb postavlja oglase unutar i oko Conversation i nudi Standalone Ad jedinicu, s kampanjama postavljenim kroz vaš OpenWeb kontakt (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments ne prikazuje oglase u widgetu, ne dijeli prihod i ne učitava skripte trećih strana za oglase ili praćenje. Widget je iframe koji postavljate; ad slotovi iznad i ispod njega su vaši i pokreću se kroz ono što već koristite.

Kompenzacija je jasna: gubite sve što vam je OpenWeb plaćao, a dobivate fiksni, predvidljivi trošak i widget koji ne dodaje zahtjeve za oglasima na vašu stranicu. Brendiranje je uklonjeno na Flex i Pro planovima, a white‑labeling je dostupan na Pro i Enterprise planovima.

### Izvoz podataka i privatnost

Svi izvoz podataka komentara iz FastComments nadzorne ploče kao CSV u bilo koje vrijeme, s datumima u UTC ISO formatu, i isti podaci su dostupni preko API‑ja. Webhookovi pokrivaju kontinuiranu sinkronizaciju. Uvezene datoteke se brišu iz FastComments čim uvoz završi.

Za GDPR i CCPA, OpenWeb pruža API za izvoz i brisanje gdje komentari izbrisanih korisnika ostaju prikačeni na nasumični gost račun (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments podržava zahtjeve za izvoz i brisanje podataka, nudi Data Processing Agreement, i pokreće zasebnu EU implementaciju na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> s podacima repliciranim samo unutar EU točaka prisutnosti. Kreirajte svoj račun tamo ako su vaši čitatelji u Europi. U EU regiji, AI agent zabrane uvijek zahtijevaju odobrenje čovjeka da zadovolje DSA Članak 17.

Komentar podaci u globalnoj implementaciji repliciraju se kroz regije uključujući čvor u Singapuru, a widget se servira iz FastComments‑ovog vlastitog DNS‑a i CDN‑a. Skripta za embed je oko 35 kb kompresirana na mreži.

### Mobilni SDK‑i

OpenWeb isporučuje Android, iOS i React Native SDK‑ove s Conversation, Articles, Authentication, Notifications, Reactions i In Conversation Polls. FastComments isporučuje nativne <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> i <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> biblioteke s grananjem komentara, live ažuriranjima preko WebSocket‑a, Secure SSO, glasovanjem, spominjanjem, učitavanjem slika, radnjama moderacije (flag, pin, lock, block), temama, live chat načinom i komponentom društvenog feeda. EU regija je konfiguracijska zastavica. Ne postoji zaseban ad SDK jer nema oglasa.

### Ugradnja i SPA integracija

OpenWeb pokretač i kontejner:

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

Vaš tenant ID je na <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">stranici s vjerodajnicama</a> nakon što imate račun. `data-article-tags` nema ekvivalent jer ne postoji praćenje tema; hashtagovi unutar komentara su drugačija značajka.

Za beskonačni scroll i single‑page aplikacije, OpenWeb‑ov pristup Virtual Pages je jedan kontejner po članku. U FastComments pozivate `FastCommentsUI(element, config)` po niti i kasnije `instance.update(newConfig)` za zamjenu URL ID‑a ili `instance.destroy()` za uklanjanje (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular i SolidJS biblioteke to rade kad se promijeni prop konfiguracije. Životni ciklus callback‑i (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) zamjenjuju `spot-im-*` DOM događaje koje ste slušali.

Brojači komentara na indeksnim stranicama koriste widget za broj komentara, pojedinačno i grupno. Za SEO, komentari se renderiraju izravno u stranicu za pretraživače umjesto unutar iframe‑a, pa nema SEO API poziva za konfiguraciju.

### Korak-po-korak prebacivanje

**1. Stvorite račun i konfigurirajte osnovno.** Registrirajte se na fastcomments.com ili eu.fastcomments.com. Postavite postavke moderacije, popis zabranjenih riječi, stil glasanja, zadano sortiranje i prilagođeni CSS na stranici za prilagodbu widgeta. Dodajte moderatore i grupe moderacije. Ako imate mnogo admin korisnika, podrška će ih uvesti za vas.

**2. Pokrenite prvi uvoz.** Idite na Manage Data, Import, odaberite OpenWeb (.csv) i učitajte. Uvoz se izvršava u pozadini; stranica prikazuje broj redaka i status, a vi dobijete email kad završi. Svaki komentar zadržava svoj OpenWeb ID poruke kao eksterni ID, pa ponovni uvoz ažurira postojeće komentare umjesto stvaranja duplikata.

**3. Provjerite brojeve.** Usporedite broj redaka posla s vašim izvozom. Otvorite nekoliko URL ID‑ova s visokim prometom u nadzornoj ploči moderacije i provjerite nasumično autore, datume, ukupne glasove i stanje odobrenja. Potvrdite da odbijeni komentari izgledaju kao spam, a čekajući su u redu.

**4. Izgradite SSO payload.** Implementirajte kod za potpisivanje iznad u vašem backendu, koristeći isti `id` i `username` koji ste koristili s OpenWebom. Testirajte s računom osoblja na testnoj stranici: uvezeni komentari korisnika prikazuju se kao njihovi, a uređivanje i brisanje se pojavljuju u njihovom izborniku komentara.

**5. Zamijenite embed na testnom predlošku.** Zamijenite pokretač i kontejner FastComments isječkom, mapirajući `data-post-id` na `urlId` i `data-post-url` na `url`. Uklonite `window.SPOTIM.logout()` i `spot-im-*` slušatelje, ili ih mapirajte na callback‑e. Primijenite svoj CSS u pravilu prilagodbe umjesto u kodu kako bi se testirao na svakoj FastComments verziji.

**6. Pokrenite paralelno.** Postavite FastComments na sekciju ili postotak članaka dok OpenWeb ostaje na ostatku. Ništa na OpenWeb strani ne treba mijenjati. Pratite red moderacije i stranicu analitike. Čitatelji koji komentiraju FastComments stranice tijekom ovog perioda nisu u vašem OpenWeb izvozu, pa planirajte finalni uvoz prije nego što počnu, a ne nakon.

**7. CSP i DNS.** Ako koristite Content‑Security‑Policy, dopustite `cdn.fastcomments.com` i `fastcomments.com` (ili `eu.fastcomments.com`) za `script-src`, `frame-src` i `connect-src`, i uklonite `spot.im` i `openweb.com` unose nakon što je pokretač uklonjen. Ništa se ne mijenja na vašem DNS‑u. Preusmjeravanja nisu potrebna jer se URL ID‑ovi podudaraju.

**8. Finalni uvoz i puštanje u rad.** Preuzmite još jedan OpenWeb izvoz koji pokriva paralelni period, učitajte ga (ponovni uvoz je siguran), zatim implementirajte promjenu predloška na svim stranicama i uklonite pokretač, Reactions, Topic Tracker, Spotlight, zvono i ad kontejnere.

**9. Lista provjere za puštanje u rad.**

- Live komentiranje vidljivo na produkcijskom članku iz dva preglednika.
- SSO prijava, odjava i komentar pod stvarnim pretplatničkim računom.
- Moderatori primaju sažetak i mogu odobriti iz njega.
- Emailovi o odgovorima i spominjanjima stižu i povezuju na ispravnu stranicu.
- Popis zabrana i popis zabranjenih riječi popunjeni.
- Page Reacts i prikaz brojača komentara tamo gdje su bile Reactions i brojač.
- CSP izvještaji čisti.
- Još jedna usporedba brojača komentara između vašeg izvoza i nadzorne ploče.

### Što gubite i što je drugačije

Budite izravni o prazninama:

- **Live Blog.** Nema ekvivalenta. Zadržite ga u svom CMS‑u ili alatu za live blogiranje i postavite FastComments ispod za raspravu.
- **Topic Tracker.** Nema praćenja tema ili autora kroz članke. Samo pretplate na stranicu.
- **Community Spotlight.** Nema proizvoda za CTA karticu. `headerHTML` vam daje poruku iznad kompozitora, ne obrazac za prikupljanje emaila.
- **Ad revenue.** Nema. Widget je bez oglasa po dizajnu.
- **Notification webhook.** Webhookovi su na događaje komentara, ne na događaje obavijesti po korisniku.
- **Reactions history.** Broj reakcija na razini članka nije u CSV izvozu i počinje od nule. Ponekad možemo izvući ove s vaše stranice.
- **Polls history.** Definicije anketa i glasovi nisu u CSV izvozu; tekst ankete se uvozi, anketa ne. Ponekad možemo izvući ove s vaše stranice.
- **Login model.** Čitatelji bez SSO prijavljuju se magic linkom umjesto lozinke ili gumba za društveno prijavljivanje po zadanim postavkama.
- **Human moderation staff.** OpenWeb pruža tim moderacije s Aida. FastComments pruža alate, klasifikatore i agente; ljudi su vaši.

Što dobivate, u istom duhu: widget koji dodaje samo mali skript i ne dodaje zahtjeve za oglasima, moderaciju koju jedna osoba može voditi za veliku stranicu s grupnim radnjama i agentima, SSO koji je funkcija potpisivanja umjesto protokola, i dobavljač koji nije pod sudskim nadzorom.

### Vremenski okvir i besplatna ponuda za uvoz

Planirajte jedan do dva tjedna za izdavača s jednim SSO integracijom i nekoliko stotina tisuća komentara: dan ili dva za izvoz i prvi uvoz, nekoliko dana za SSO i predloške, paralelni period, zatim finalni uvoz i prebacivanje. Platforma već nosi ovu skalu: United Cloud upravlja više od deset portala i milijunima komentara na FastComments, a itsfoss.com je premjestio povijest od 88 000 komentara s drugog pružatelja kroz isti samouslužni uvoznik.

FastComments uvozi vaš OpenWeb CSV izvoz besplatno, pomaže vam voditi OpenWeb i FastComments paralelno tijekom prebacivanja, i pomaže s samom migracijom, uključujući grananje i pitanja podudaranja korisnika. Enterprise planovi uključuju 99,99 % SLA i podršku s odgovorom unutar jednog sata tijekom radnog vremena. Flex naplata po korištenju je dostupna za stranice koje žele početi bez ugovora.

<a href="https://fastcomments.com/contact-us">Pišite nam</a> s veličinom vašeg izvoza i vašom SSO postavkom i mi ćemo se vratiti s planom.

### Zaključak

Preuzmite svoj izvoz danas. Zapamtite: isti ID‑ovi objava postaju URL ID‑ovi, stanje moderacije se prenosi, a embed je jednostavna zamjena. Mjesta gdje FastComments razlikuje su navedena iznad kako biste mogli odlučiti uz činjenice pred vama. :)

Živjeli!

{{/isPost}}

---