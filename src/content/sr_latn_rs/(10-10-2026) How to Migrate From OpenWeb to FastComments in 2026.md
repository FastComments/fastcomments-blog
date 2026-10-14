[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Kako migrirati sa OpenWeb na FastComments u 2026[/postlink]

{{#unless isPost}}
Vodič po funkcijama za izdavače koji prelaze sa OpenWeb (ranije Spot.IM): šta se mapira 1:1, šta je drugačije, kako funkcioniše CSV uvoz, kako se menja SSO rukovanje, i plan korak po korak za prebacivanje.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

Ovaj vodič je namenjen voditeljima proizvoda i inženjeringa i menadžerima zajednice koji danas koriste OpenWeb i trebaju plan za migraciju. Prolazi kroz svaku OpenWeb površinu, navodi ekvivalent u FastComments i jasno kaže gde ne postoji 1:1 podudaranje.

### Zašto sada

30. septembra 2026. Telavivski okružni sud je po zahtevu njegovog zajmodavca, Mars Growth Capital, naložio privremeno upravljanje OpenWeb-om. Mars Growth Capital drži prvi prioritetni zalog na imovini i računima kompanije i pokušava da ga sprovede protiv izraelske imovine, bankovnih računa i intelektualne svojine OpenWeb-a (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Privremeni poverenik, adv. Ehud Gindes, je imenovan sledećeg dana (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Ranije iste godine Microsoft, jedan od najvećih OpenWeb-ovih kupaca, je prekinuo saradnju i zadržao plaćanja zbog spornog saobraćajnog spora koji OpenWeb odbija (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb tvrdi da platforma i dalje funkcioniše. Sudsko nadgledanje, zajmodavac koji sprovodi zaloge na IP-u od kojeg vaš widget za komentare zavisi, i poverenik čiji je zadatak da očuva vrednost imovine nisu uslovi koje želite kao izdavač za ključnu površinu angažovanja. Ako još niste preuzeli kompletan izvoz podataka, uradite to prvo, danas, pre bilo čega drugog u ovom vodiču.

### Šta vam je potrebno pre nego što počnete

Prikupite sledeće pre nego što dotaknete bilo koji kod:

- **Vaš OpenWeb izvoz komentara.** OpenWeb izlaže Export API (v4) koji proizvodi zipovane CSV fajlove, najviše 100 000 komentara po fajlu, sa vremenskim prozorima do jednog meseca i linkovima za preuzimanje koji ističu posle nedelje (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Zatražite sve prozore koji su vam potrebni i čuvajte fajlove na sigurnom mestu. Ako vam je OpenWeb kontakt ranije obezbedio CSV izvoz iz Admin panela, čuvajte i taj. FastComments uvoz čita OpenWeb CSV sa kolonama kao što su `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` i `url`.
- **Vaš Spot ID i lista ID‑ova postova.** Svaki `data-post-id` koji prosledite launcheru postaje FastComments URL ID. Ako su vaši ID‑ovi postova CMS‑ovi ID‑ovi, zabeležite kako se generišu da biste mogli emitovati iste vrednosti na FastComments strani.
- **Vaša SSO lista korisnika.** Konkretno `primary_key` i `user_name` vrednosti koje ste registrovali kod OpenWeb‑a. Autorsko pravo komentara se podudara po korisničkom imenu tokom uvoza, pa želite da prosledite ista korisnička imena u FastComments SSO payload.
- **Vaša lista moderatora i uloga.** Administratorski, moderatorski i novinarski nalozi, i koje sekcije svaki moderira.
- **Vaša konfiguracija moderacije.** Globalna politika (odobri sve, objavi i moderiraj, zahteva odobrenje), po‑članku preklapanja, lista ograničenih reči, utišani i blokirani korisnici.
- **Prilagođeni CSS i podešavanja teme.** Izvezite sve što imate u Admin panelu da biste mogli ponovo izgraditi u FastComments stranici za prilagođavanje widgeta.
- **Gde launcher živi u vašim šablonima**, uključujući sve stranice koje pokreću Reactions, Topic Tracker, Spotlight, Notification Bell ili Standalone Ad bez Conversation.

### AI asistirana migracija

FastComments pruža [LLM Kit i MCP server za ubrzanje migracije](https://docs.fastcomments.com/guide-llm-kit.html).

### Kako se OpenWeb ID‑ovi postova mapiraju na FastComments URL ID‑ove

FastComments povezuje nit komentara sa `urlId`. Podrazumevano je to očišćeni URL stranice, ali možete postaviti bilo koji string, i upravo to radi OpenWeb uvoz: čita kolonu `post_id` i koristi je kao FastComments URL ID za svaki komentar na tom članku. Takođe čuva kolonu `url` kao prikazni URL tako da linkovi za moderaciju i email obaveštenja pokazuju pravu stranicu.

Znači pravilo za vaše šablone je: gde god ste prosledili `data-post-id="POST_ID"` i `data-post-url="ARTICLE_URL"` OpenWeb‑u, prosledite `urlId: 'POST_ID'` i `url: 'ARTICLE_URL'` FastComments‑u. Uvezeni niti se podudaraju sa živim nitima bez preusmeravanja i bez prepisivanja URL‑ova. Pogledajte <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID dokumentaciju</a>.

Ako radije želite da ključeve niti vezujete za URL u budućnosti umesto za ID posta, prvo uvezite, a zatim koristite alat Migrate Comments pod Manage Data da premestite niti sa ID‑a posta na URL u bulk‑u.

### Mapa funkcija

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Napomene |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live po podrazumevanju. Novi komentari se skupljaju iza dugmeta “Show N New Comments”, ili se pojavljuju odmah uz `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Uvoz čuva `likes_count` i `dislikes_count`. Stil srca i “disable voting” su opcije konfiguracije. |
| Reactions (article-level icons) | Page Reacts | Konfigurisani set ikona na stranici, pamti se po korisniku. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` ograničava dubinu. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` postavlja podrazumevano po sajtu ili po obrascu URL‑a. |
| User profiles | User profiles | Avatar, biografija, značke, karma, aktivnost, DM‑ovi. Radi za SSO korisnike. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Postavlja se u SSO payload‑u. Nije potreban poziv backend‑a. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderatori zakačuju iz widgeta ili dashboard‑a. AI šablon zakači najglasnije komentare. |
| In Conversation Polls | Polls on comments | 2‑10 opcija, datumi zatvaranja, režimi privatnosti, ograničenja kreatora. |
| Ask Me Anything formats | No dedicated product | Radi se kao nit sa SSO korisnikom autora označenim i pitanjem zakačenim. |
| Live Blog | No 1:1 equivalent | Live Chat widget i chat‑mode komentari postoje. Editorial live blogging ostaje u vašem CMS‑u. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Korisnici prate stranicu, ne temu ili autora. Nema praćenja preko članaka. |
| Notification Bell | Notification bell in the widget | Odgovori, spominjanja, aktivnost niti, glasovi, pretplate, značke, DM‑ovi. |
| Email notifications | Email notifications with templates | Po‑korisničkom opt‑in‑u preko SSO zastavica. Prilagođeni šabloni, brendirani pošiljalac. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | Nema register‑user poziva. Potpisujete payload na serveru i prosleđujete widgetu. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Isti payload. Backend ga potpisuje kada je korisnik prijavljen. |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | Čitaoci se prijavljuju putem email linka. Bez lozinki. |
| Moderation policy per article | Customization rules per URL ID pattern | Režim odobrenja, spam filter i još mnogo toga varira po obrascima `*/section/*`. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | Agenti počinju u dry‑run režimu i mogu zahtevati ljudsko odobrenje. |
| Restricted words | Word blacklist customizable by locale | ~450 podrazumevanih fraza, izmenjivo. |
| User muting | Block User | Blokiranje po čitaocu iz menija komentara. |
| Bans | Bans | Trajni, vremenski, shadow, IP‑hashed, plus‑alias aware. |
| Moderation Panel | Moderate Comments dashboard | Filteri, bulk akcije sa undo, grupe moderacije, digest email‑ovi sa jednim klikom odobri. |
| Notification Webhook | Webhooks | Komentar kreiran, ažuriran, obrisan. Nema per‑user notifikacionog webhook‑a. |
| Engagement dashboard | Analytics | Live korisnici online, top stranice, učitavanja stranica, komentari, glasovi, nalozi po danu. Nema izveštaja o prihodima od oglasa. |
| In-conversation ads, Standalone Ad | None | FastComments ne prikazuje oglase. Vi zadržavate svoj ad stack oko widgeta. |
| Social Reviews (star ratings) | Ratings and Reviews | Poseban proizvod na istom nalogu. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Recirkulacija podstaknuta aktivnošću komentara. |
| Comment Counter | Comment count widgets | Jedan i bulk. |
| Export Comments API | CSV export, API, webhooks | Izvoz iz dashboard‑a bilo kada. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com čuva podatke u EU. DPA dostupan. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, live ažuriranja, threading, akcije moderacije. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` i `destroy()` za SPA‑ove. |

</div>

Ostatak ovog odeljka prolazi kroz svaku grupu detaljno.

### Conversation, Votes and Reactions

OpenWeb‑ov Conversation je nit u realnom vremenu. FastComments‑ov widget za komentare je takođe: komentari, izmene, brisanja, glasovi i akcije moderacije se guraju svima koji gledaju nit (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Podrazumevano se novi komentari od drugih ljudi pojavljuju iza dugmeta “Show 2 New Comments” kako stranica ne bi skočila pod čitaoca. Za live događaje postavite `showLiveRightAway` da se renderuju odmah, i `newCommentsToBottom` ako želite da teku nadole kao chat.

Lajkovi i dislajkovi postaju glasovi za i protiv. Uvoz čuva oba broja po komentaru. Ako vaša zajednica koristi samo jedan lajk, prebacite stil glasanja na srca u stranici za prilagođavanje widgeta. Glasanje se može i potpuno isključiti.

OpenWeb Reactions je zaseban widget sa dva do četiri označena ikona na članku (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments‑ov ekvivalent je Page Reacts: konfigurisani set slika reakcija prikačenih widgetu, pamti se po stranici i po korisniku (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Broj reakcija nije deo OpenWeb CSV izvoza, pa počinju od nule.

Sortiranje se mapira direktno. OpenWeb‑ove vrednosti `data-sort-by` best, newest i oldest odgovaraju Most Relevant, Newest First i Oldest First. Postavite podrazumevano pomoću `defaultSortDirection` (`MR`, `NF`, `OF`) u kodu ili u pravilu prilagođavanja. Čitaoci mogu menjati u widgetu.

`data-read-only="true"` postaje `readonly: true`, što blokira nove komentare, glasove, izmene i brisanja. `data-post-staleness-days` nema direktan ekvivalent, ali pravilo prilagođavanja može primeniti `readonly` na obrazac URL‑ID‑a, a vi ga možete i preokrenuti iz šablona na osnovu starosti članka. `data-messages-count` je veličina stranice, postavlja se u stranici za prilagođavanje widgeta bilo od 10 do 200 komentara.

### Replies and Threading

FastComments podržava neograničeno ugnježđivanje po podrazumevanju; `maxReplyDepth` ga ograničava (`1` daje ravnu strukturu od dva nivoa). OpenWeb CSV uključuje kolone `parent_id` i `parent_comment_id`. Uvoz čita `parent_comment_id` i rekonstruiše stablo odgovora u punoj dubini, tako da odgovor na odgovor ostane ugnježđen pod svojim direktnim roditeljem, sa autorom, vremenskim oznakama, glasovima, brojem zastavica i stanjem odobrenja netaknutim. Odgovori su povezani čak i kada se pojave pre svog roditelja u fajlu, ili kada je roditelj uvezen iz ranijeg prozora izvoza. Odgovor čiji roditelj nedostaje u svakom izvozu postaje komentar najvišeg nivoa. OpenWeb ID poruke se čuva na svakom komentaru, pa re‑uvoz starijeg flat uvoza ponovo poveže niti na mestu.

### User Profiles and Badges

FastComments korisnici, uključujući SSO korisnike, dobijaju profil sa avatarom, prikaznim imenom, biografijom, društvenim linkovima, značkama, karmom, brojem komentara, javnim feed‑om aktivnosti i direktnim porukama (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Svaki od ovih površina (aktivnost, komentari profila, DM‑ovi) može se onemogućiti po korisniku u SSO payload‑u ili globalno u konfiguraciji.

OpenWeb‑ov Author Badge zahteva da pozovete `GET /sso/v1/user/{primary_key}` za autora i postavite dobijeni ID u `data-author-id`. U FastComments‑u postavite `displayLabel: 'Author'` (ili bilo koji label do 100 znakova) u SSO payload‑u, i `isAdmin` ili `isModerator` za osoblje. Label se prikazuje pored imena na svakom komentaru. Za bogatiji sistem, konfigurišite značke pod Customize → Badges: slike ili tekstualne značke, dodeljuju se automatski po pragovima (broj komentara, glasovi, zakačeni komentari, veteran status, brzina odgovora) ili ručno, i mogu se dodeliti iz SSO payload‑a pomoću `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Bilo koji moderator može Pin ili Unpin komentar iz menija komentara u widgetu ili iz dashboard‑a za moderaciju. Zakačeni komentari se push‑uju live svima na niti. Ako želite automatizovano, AI Agents funkcija isporučuje šablon Top Comment Pinner koji zakači komentar najvišeg nivoa čim pređe prag glasova (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb‑ove In Conversation Polls omogućavaju osoblju da prikače anketu sa 2‑4 opcije na komentar najvišeg nivoa. FastComments ankete se takođe prikače na komentar, sa 2‑10 opcija, opcionalnim datumom zatvaranja, privatnošću rezultata (anonimno, samo admini, svima) i režimom “vote to see results”. Birate ko može kreirati ankete (onemogućeno, admini i moderatori, svi) i da li anonimni čitaoci mogu glasati. Ankete su takođe izložene javnom API‑ju za kreiranje iz vašeg CMS‑a.

OpenWeb je imao Ask Me Anything formate. FastComments nema poseban Q&A proizvod. Praktična zamena je obična nit na dedikovanoj URL‑ID: SSO korisnik gosta nosi `displayLabel`, zakačite uvodni komentar, čitaoci postavljaju pitanja u komentarima najvišeg nivoa, gost odgovara u niti, a spominjanja i obaveštenja o odgovorima vraćaju ljude nazad. Postavite `noNewRootComments` nakon što prozor zatvori, tako da samo odgovori nastave.

Community Spotlight (OpenWeb‑ov email collector, counter i redirect kartice) nema ekvivalent. Widget podržava prilagođeni HTML zaglavlja iznad polja za unos komentara putem `headerHTML`, što pokriva CTA, ali ne i formu za prikupljanje email‑ova.

### Live Blog

Ne postoji FastComments Live Blog. OpenWeb‑ov Live Blog je editorialni proizvod: reporteri dodeljeni u Admin panelu objavljuju ažuriranja sa ugrađenim linkovima, tweet‑ovima i videom, a čitaoci prate (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Ono što FastComments nudi za live pokrivanje je čitalačka strana: Live Chat widget (`embed-live-chat.min.js`) za streaming chat, i widget za komentare u chat‑modu (`showLiveRightAway` plus `newCommentsToBottom`) uz vašu live pokrivenost. Za editorialna ažuriranja, izdavači koji napuštaju OpenWeb zadržavaju ih u svom CMS‑u ili posebnom alatu za live blog i ugrade FastComments ispod za diskusiju. Medijski embed‑ovi (YouTube, SoundCloud i drugi) su podržani unutar komentara, pa staff‑ova ažuriranja postavljena kao komentari nose bogat medijski sadržaj.

### Topic Tracker, Notifications and Email

OpenWeb‑ov Topic Tracker omogućava čitaocu da prati teme i autore iz meta podataka stranice i dobija obaveštenja kada se pojave novi članci koji se podudaraju (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments nema praćenje tema ili autora preko članaka. Čitaoci se pretplaćuju na stranicu iz notification bell‑a i primaju ažuriranja za tu nit, sa frekvencijom po pretplati: svake minute, satni digest ili dnevni digest. Ako vam je praćenje preko članaka važno za zadržavanje, javite nam jer je ova funkcija na našem roadmap‑u.

Sve ostalo u Notification Bell‑u se mapira. Widget ima zvono koje postaje crveno sa brojem nepročitanih i prikazuje: odgovori vama, odgovori u niti u kojoj ste komentarisali, spominjanja, glasove na vašim komentarima, aktivnost na pretplaćenim stranicama, dodeljene značke i DM‑ove (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In‑app notifikacije su real‑time preko WebSocket‑a. Email‑ovi za odgovore i spominjanja se šalju svake minute samo za odobrene komentare.

Za SSO korisnike, prosledite `optedInNotifications` i `optedInSubscriptionNotifications` u payload‑u i FastComments ažurira njihove preferencije pri sledećem učitavanju stranice. Email‑ovi zahtevaju email adresu u payload‑u. Email šabloni su izmenjivi po tipu i po lokalu pod Customize → Email Templates, i slanje sa vašeg domena uz DKIM je podržano. Moderatori i admini dobijaju dnevni, nedeljni ili mesečni digest sa jednim klikom odobri, odgovori i spam linkove.

OpenWeb‑ov Notification Webhook šalje per‑user notifikacione događaje (`replied-message`, `liked-message`, `topic-by-keyword` i sl.) na vaš endpoint. FastComments webhook‑ovi pokrivaju resurs komentar: kreiran, ažuriran i obrisan, sa onoliko pretplatnih endpoint‑ova koliko želite (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Ako ste koristili notifikacioni webhook za napajanje vašeg email sistema, ponovo ćete izgraditi tu logiku na događajima komentara, ili dozvoliti FastComments‑u da šalje email‑ove.

### SSO: From codeA/codeB to a Signed Payload

OpenWeb‑ov handshake ima šest koraka: čekate `spot-im-api-ready`, OpenWeb generiše `codeA`, vaš klijent ga šalje vašem backend‑u, backend potvrđuje korisnika i poziva `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb vraća `codeB`, i vaš klijent vraća `codeB` nazad OpenWeb‑u (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Logout poziva `window.SPOTIM.logout()`.

FastComments Secure SSO nema round‑trip i nema novi endpoint na vašoj strani. Kada renderujete stranicu za prijavljenog korisnika, vaš backend serijalizuje korisnika, Base64‑kodira ga i potpisuje HMAC‑SHA256 koristeći vaš API secret. Widget šalje payload sa svojim zahtevima i FastComments verifikuje potpis (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). U Node‑u:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // ista vrednost koju ste koristili kao primary_key kod OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // isto user_name koje ste registrovali kod OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // opcionalno, zamenjuje Author Badge lookup
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

Timestamp je epoch milisekunde i odbacuje se ako je stariji od dva dana. Za odjavljene čitaoce, izostavite tri potpisana polja i prosledite samo `loginURL` (ili `loginCallback` funkciju) i widget prikazuje prompt za login umesto kompozera. Potpuni radni primeri u Node, Java i PHP su u <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a>.

Korisnici se kreiraju pri prvom učitavanju stranice. Ne radite bulk‑register nikoga. Pošto OpenWeb uvoz podudara autore komentara po `user_name`, korisnik čiji SSO payload nosi isti `username` preuzima svoje uvezene komentare prvi put kada učita nit i može ih editovati ili brisati od tada. Postoji i SSO user API ako želite da pre‑kreirate korisnike.

Svaki put kad se payload pošalje, FastComments ažurira korisnički zapis iz njega, pa promena display name‑a ili avatara na vašoj strani propagira pri sledećem prikazu stranice. Postavite polje na `null` da ga očistite.

Ako ste koristili OpenWeb‑ov third‑party SSO sa Auth0, Gigya ili Piano preko `window.SPOTIM.startSSOForProvider`, FastComments tok je isti kao gore: kada vaš provajder autentifikuje korisnika, vaš backend izgradi i potpiše payload. Nema provajder‑specifične integracije za konfigurisanje na FastComments strani.

Dve druge opcije postoje. Simple SSO prosleđuje user objekat nepotpisano sa klijenta, za platforme bez backend‑a, i označava aktivnost kao verifikovanu kada je prisutan email (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 potpisuje vaš staff u FastComments dashboard‑u kroz Okta, Azure AD ili ADFS, sa mapiranjem rola, i dostupan je na enterprise planovima (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

OpenWeb‑ov API za politiku moderacije po članku ima četiri vrednosti: `spot_policy`, `approve_all`, `publish_and_moderate` i `require_approval`. FastComments konfiguriše iste ponašaje u Moderation Settings: automatsko odobravanje uključeno ili isključeno, odobrenje potrebno samo za prvi komentar korisnika, i auto‑approve samo verifikovanih (prijavljenih ili SSO) komentara. Pravila se primenjuju site‑wide ili po obrascu URL‑ID‑a kao `*/politics/*`, što je način da reprodukujete politiku po sekciji. Svaki komentar, odobren ili ne, završava u Moderate Comments dashboard‑u, pa je publish‑then‑review model podrazumevani pogled tamo (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Uvoz nosi stanje moderacije. OpenWeb `message_status` od `approved` uvozi se kao odobren i pregledan; `rejected` uvozi se kao spam i pregledan; bilo šta drugo uvozi se neodobreno i nepregledano pa se pojavljuje u vašem moderation queue‑u. `reports_count` postaje broj zastavica komentara.

Automatizovana moderacija u FastComments je slojevita, a ne jedan sistem kao Aida:

- Spam klasifikator, kontinuirano treniran, dostupan kao shared model za sve tenant‑e ili izolovan za vaš tenant, sa trust faktorom koji ublažava filtriranje za dugogodišnje ili često zakačene korisnike.
- Opcioni LLM spam check na Flex naplati (open weight modeli kao GLM‑5.3 su dostupni)
- Moderacija slike na niskoj, srednjoj ili visokoj osetljivosti za upload‑ovane slike.
- Lokalizovana lista crnog spiska reči od oko 450 podrazumevanih fraza, izmenjiva, koja maskira podudaranja zvezdicama. Ovde idu vaše OpenWeb ograničene reči.
- Prag zastavica koji automatski sakriva komentar posle N izveštaja.
- Sprečavanje ponovljenih i gotovo duplih poruka, uvek uključeno.
- AI Agents: event‑driven agenti sa eksplicitnim tool allowlist‑om (mark spam, approve, lock, pin, warn by DM, ban, award badge, reply). Svaki agent počinje u dry‑run režimu, osetljivi alati mogu biti gated iza ljudskog odobrenja, i svaka akcija se loguje sa opravdanjem i confidence score‑om.

OpenWeb‑ov User Muting API dozvoljava jednom SSO čitaocu da utiša drugog. FastComments ekvivalent je Block User u meniju komentara, dostupan bilo kojem prijavljenom čitaocu. Banovi su moderator akcija: trajni ili na određeno vreme, opcionalno shadow ban (korisnik vidi svoj komentar, drugi ne), opcionalno po hashed IP, uz plus‑alias aware (email tretiran kao jedna adresa). Lista banovanih korisnika pretraživa se po email‑u, imenu, moderatoru i komentaru koji je izazvao ban.

Moderate Comments dashboard podržava filtere (treba pregled, treba odobrenje, spam, označeno, od banovanih korisnika) i tekstualno pretraživanje, bulk akcije sa undo i pauzom, “select all matching” za veoma velike queue‑e, grupe moderacije tako da vaš sports desk vidi samo sportske niti, per‑comment logove koji pokazuju zašto je email poslat ili ne, i deljive filtrirane linkove. Moderatori imaju samo dashboard; ne mogu menjati podešavanja ili uvoziti podatke.

### Analytics

FastComments Analytics prikazuje korisnike online trenutno po vašim sajtovima i po stranici, top stranice po komentarima ili po live čitaocima, i dnevne serije za učitavanja stranica, komentare, glasove i kreirane naloge (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Statistike moderatora su odvojene. Brojevi su blizu real‑time, odloženi najviše minut, i svako učitavanje stranice se broji, ne uzorkuje.

Nećete naći ništa o ad fill, CPM ili prihodima, jer nema oglasa. Ako je OpenWeb‑ov dashboard bio vaš izvor za engagement‑to‑revenue izveštavanje, taj izveštaj se prebacuje na vaš sopstveni ad stack.

### Monetization

OpenWeb postavlja oglase unutar i oko Conversation i nudi Standalone Ad jedinicu, sa kampanjama postavljenim kroz vaš OpenWeb kontakt (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments ne prikazuje oglase u widgetu, ne ima revenue share i ne učitava third‑party ad ili tracking skripte. Widget je iframe koji vi postavljate; ad slotovi iznad i ispod su vaši i rade kroz ono što već koristite.

Kompenzacija je eksplicitna: gubite sve što je OpenWeb plaćao, a dobijate fiksni, predvidivi trošak i widget koji ne dodaje ad zahteve vašoj stranici. Brendiranje se uklanja na Flex i Pro planovima, a white‑labeling je dostupan na Pro i Enterprise.

### Data Export and Privacy

Svi podaci o komentarima mogu se izvesti iz FastComments dashboard‑a kao CSV bilo kada, sa datumima u UTC ISO formatu, i isti podaci su dostupni preko API‑ja. Webhook‑ovi pokrivaju kontinuiranu sinhronizaciju. Uvezeni fajlovi se brišu iz FastComments čim se uvoz završi.

Za GDPR i CCPA, OpenWeb pruža export i delete API gde komentari izbrisanih korisnika ostaju prikačeni na nasumični guest nalog (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments podržava zahteve za izvoz i brisanje podataka, nudi Data Processing Agreement, i ima poseban EU deployment na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> sa podacima repliciranim samo unutar EU tačaka prisutnosti. Kreirajte nalog tamo ako su vaši čitaoci u Evropi. U EU regionu, AI agent banovi uvek zahtevaju ljudsko odobrenje da bi zadovoljili DSA član 17.

Komentar podaci u globalnom deployment‑u repliciraju se kroz regione uključujući čvor u Singapuru, a widget se servira iz FastComments‑ovog DNS‑a i CDN‑a. Embed skripta je oko 35 kb kompresovana na provod.

### Mobile SDKs

OpenWeb isporučuje Android, iOS i React Native SDK‑e sa Conversation, Articles, Authentication, Notifications, Reactions i In Conversation Polls. FastComments isporučuje native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> i <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> biblioteke sa nitima komentara, live ažuriranjima preko WebSocket‑a, Secure SSO, glasanje, spominjanja, upload slika, akcije moderacije (flag, pin, lock, block), temama, live chat režimu i komponentom social feed. EU region je konfiguraciona zastavica. Ne postoji poseban ad SDK jer nema oglasa.

### Embed and SPA Integration

OpenWeb launcher i container:

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

Vaš tenant ID je na <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">credentials page</a> kada imate nalog. `data-article-tags` nema ekvivalent jer ne postoji praćenje tema; hashtag‑ovi unutar komentara su drugačija funkcija.

Za infinite scroll i single‑page aplikacije, OpenWeb‑ov Virtual Pages pristup je jedan container po članku. U FastComments‑u pozivate `FastCommentsUI(element, config)` po niti i kasnije `instance.update(newConfig)` da zamenite URL ID ili `instance.destroy()` da ga uklonite (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular i SolidJS biblioteke to rade kada se promeni prop konfiguracije. Lifecycle callback‑i (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) zamenjuju `spot-im-*` DOM događaje koje ste slušali.

Brojači komentara na indeks stranicama koriste comment count widget, pojedinačno ili bulk. Za SEO, komentari se renderuju direktno u stranicu za pretraživače umesto unutar iframe‑a, pa ne postoji SEO API poziv za konfiguraciju.

### Step-by-Step Cutover

**1. Kreirajte nalog i konfigurišite osnove.** Registrujte se na fastcomments.com ili eu.fastcomments.com. Postavite svoje moderation settings, word blacklist, stil glasanja, podrazumevano sortiranje i prilagođeni CSS na stranici za prilagođavanje widgeta. Dodajte moderatore i grupe moderacije. Ako imate mnogo admin korisnika, podrška će ih uvesti za vas.

**2. Pokrenite prvi uvoz.** Idite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, izaberite OpenWeb (.csv) i otpremite. Uvoz se izvršava u pozadini; stranica prikazuje broj redova i status, i dobićete email kada se završi (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Svaki komentar zadržava svoj OpenWeb message ID kao eksterni ID, pa ponovni uvoz ažurira postojeće komentare umesto da pravi duplikate.

**3. Proverite brojeve.** Uporedite broj redova posla sa vašim izvozom. Otvorite nekoliko URL‑ID‑ova visokog saobraćaja u moderation dashboard‑u i proverite autore, datume, ukupne glasove i stanja odobrenja. Potvrdite da se odbijeni komentari prikazuju kao spam, a čekajući se nalaze u queue‑u.

**4. Izgradite SSO payload.** Implementirajte kod za potpisivanje iznad u vašem backend‑u, koristeći isti `id` i `username` koji ste koristili kod OpenWeb‑a. Testirajte sa staff nalogom na staging stranici: uvezeni komentari se prikazuju kao njihovi, a edit i delete se pojavljuju u meniju komentara.

**5. Zamenite embed u staging šablonu.** Zamenite launcher i container FastComments snippet‑om, mapirajući `data-post-id` na `urlId` i `data-post-url` na `url`. Uklonite `window.SPOTIM.logout()` i `spot-im-*` listenere, ili ih mapirajte na odgovarajuće callback‑e. Primenu CSS‑a stavite u pravilo prilagođavanja umesto u kod, tako da se testira na svakom FastComments izdanju.

**6. Pokrenite paralelno.** Postavite FastComments na sekciju ili procenat članaka dok OpenWeb ostane na ostatku. Ništa na OpenWeb strani ne mora da se menja. Pratite moderation queue i analytics stranicu. Čitaoci koji komentarišu na FastComments stranicama tokom ovog perioda nisu u vašem OpenWeb izvozu, pa planirajte finalni uvoz pre nego što počnu, ne posle.

**7. CSP i DNS.** Ako koristite Content‑Security‑Policy, dozvolite `cdn.fastcomments.com` i `fastcomments.com` (ili `eu.fastcomments.com`) za `script-src`, `frame-src` i `connect-src`, i uklonite `spot.im` i `openweb.com` unose kada launcher nestane. Ništa se ne menja na vašem DNS‑u. Nema preusmeravanja jer se URL ID‑ovi podudaraju.

**8. Finalni uvoz i go‑live.** Preuzmite još jedan OpenWeb izvoz koji pokriva paralelni period, otpremite ga (re‑import je siguran), zatim primenite promenu šablona na sve stranice i uklonite launcher, Reactions, Topic Tracker, Spotlight, zvono i ad kontejnere.

**9. Go‑live kontrolna lista.**

- Live komentarisanje vidljivo na produkcionom članku iz dva pretraživača.
- SSO login, logout i komentar pod pravim pretplatničkim nalogom.
- Moderatori primaju digest i mogu odobravati iz njega.
- Email‑ovi za odgovor i spominjanje stižu i linkuju na pravu stranicu.
- Lista banova i word blacklist popunjeni.
- Page Reacts i comment count widgeti renderuju tamo gde su bile Reactions i counter.
- CSP izveštaji čisti.
- Još jedno poređenje broja komentara između vašeg izvoza i dashboard‑a.

### Šta gubite i šta je drugačije

Budite direktni u vezi praznina:

- **Live Blog.** Nema ekvivalenta. Zadržite ga u CMS‑u ili alatu za live blog i postavite FastComments ispod.
- **Topic Tracker.** Nema praćenja tema ili autora preko članaka. Samo pretplate na stranicu.
- **Community Spotlight.** Nema CTA kartice proizvoda. `headerHTML` daje poruku iznad kompozera, ne email capture.
- **Prihod od oglasa.** Nema. Widget je ad‑free po dizajnu.
- **Notification webhook.** Webhook‑ovi su na događajima komentara, ne na per‑user notifikacionim događajima.
- **Istorija reakcija.** Brojevi reakcija na nivou članka nisu u CSV‑u i počinju od nule. Ponekad možemo da ih iskopamo sa vašeg sajta.
- **Istorija anketa.** Definicije anketa i glasovi nisu u CSV‑u; tekst ankete se uvozi, anketa ne. Ponekad možemo da ih iskopamo sa vašeg sajta.
- **Model login‑a.** Čitaoci bez SSO se prijavljuju magic‑linkom umesto lozinkom ili društvenim loginom po podrazumevanju.
- **Ljudski moderacijski tim.** OpenWeb dolazi sa timom moderacije i Aida. FastComments pruža alate, klasifikatore i agente; ljudi su vaši.

Šta dobijate, u istom duhu: widget koji dodaje samo jedan mali skript i nema ad zahteve, moderaciju koju jedan čovek može da vodi za veliki sajt uz bulk akcije i agente, SSO koji je funkcija potpisivanja umesto protokola, i dobavljača koji nije pod sudskim nadzorom.

### Vremenski okvir i besplatna ponuda za uvoz

Planirajte jednu do dve nedelje za izdavača sa jednom SSO integracijom i nekoliko stotina hiljada komentara: dan ili dva za izvoz i prvi uvoz, nekoliko dana za SSO i šablone, paralelni period, zatim finalni uvoz i prebacivanje. Platforma već nosi ovu skalu: United Cloud upravlja više od deset portala i milionima komentara na FastComments, a itsfoss.com je prešao istoriju od 88 000 komentara sa drugog provajdera kroz isti self‑service uvoz.

FastComments uvozi vaš OpenWeb CSV izvoz besplatno, pomaže vam da vodite OpenWeb i FastComments paralelno tokom prebacivanja, i pomaže u samoj migraciji, uključujući pitanja o nitima i podudaranju korisnika. Enterprise planovi uključuju 99,99 % SLA i podršku koja odgovara u roku od jednog sata tokom radnog vremena. Flex naplata po korišćenju je dostupna za sajtove koji žele da počnu bez ugovora.

<a href="https://fastcomments.com/contact-us">Write to us</a> sa veličinom vašeg izvoza i vašom SSO konfiguracijom i mi ćemo se vratiti sa planom.

### Zaključak

Preuzmite svoj izvoz danas. Zapamtite: isti post ID‑ovi postaju URL ID‑ovi, stanje moderacije se prenosi, a embed je jednostavna zamena. Mesta gde FastComments razlikuje su navedena iznad kako biste mogli da odlučite na osnovu činjenica ispred vas. :)

Cheers!

{{/isPost}}

---