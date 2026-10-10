[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Како мигрирати са OpenWeb на FastComments у 2026[/postlink]

{{#unless isPost}}
Водич по функцији за издаваче који прелазе са OpenWeb (раније Spot.IM): шта се мапира 1:1, шта је другачије, како ради CSV увоз, како се мења SSO руковање, и корак по корак план за миграцију.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Овај чланак садржи технички жаргон

Овај водич је намењен вођама производа и инжењеринга и менаџерима заједнице који данас користе OpenWeb и потребан им је план за прелазак. Прођиће кроз сваку OpenWeb површину, навести FastComments еквивалент и јасно рећи где не постоји 1:1 подударање.

### Зашто сада

30. септембра 2026. суд у Тел Авивском округу наредио је именовање привременог примаоца над OpenWeb-ом по захтеву његовог кредитора, Mars Growth Capital, који држи први приоритетни залог над имовином и рачунима компаније и покушава да га спроведе над израелском имовином, банковним рачунима и интелектуалном својином OpenWeb-а (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Привремени повереник, адв. Ехуд Гиндес, именован је следећег дана (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Раније 2026. Microsoft, један од највећих клијената OpenWeb-а, окончао је сарадњу и задржао плаћања због спорног саобраћаја који OpenWeb одбија (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb тврди да платформа наставља да ради. Судско надгледање, кредитор који спроводи залоге на ИП који ваш widget за коментаре зависи, и повереник чији је задатак да очува вредност имовине нису услови које издавач жели под кључном површином ангажмана. Ако још увек нисте извршили пуну извезену датотеку, урадите то прво, данас, пре било чега другог у овом водичу.

### Шта вам је потребно пре него што почнете

Прикупите ово пре него што додирнете било који код:

- **Ваш OpenWeb извоз коментара.** OpenWeb излаже Export API (v4) који генерише запаковане CSV датотеке, највише 100 000 коментара по датотеци, са прозорима датумског опсега до једног месеца и линковима за преузимање који истичу након недеље (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Захтевајте сваки прозор који вам треба и чувате датотеке на безбедном месту. Ако ваш OpenWeb контакт у прошлости обезбеди CSV извоз из Админ панела, сачувајте и тај. FastComments увозник чита OpenWeb CSV са колонама као што су `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` и `url`.
- **Ваш Spot ID и листу ID‑ја постова.** Сваки `data-post-id` који проследите покретачу постаје FastComments URL ID. Ако су ваши ID‑ји постова CMS ID‑ји чланака, забележите како се генеришу како бисте могли емитовати исте вредности на страни FastComments.
- **Ваш SSO листу корисника.** Конкретно `primary_key` и `user_name` вредности које сте регистровали код OpenWeb-а. Ауторство коментара се упоређује по корисничком имену током увоза, па желите да проследите исте корисничке називе у FastComments SSO оптерецику.
- **Вашу листу модератора и улоге.** Администратори, модератори и новинарски налози, и које одељке сваки модерира.
- **Вашу конфигурацију модерације.** Ситеско правило (одобри све, објави и модерирај, захтевај одобрење), почланкове преиначивања, листу ограничених речи, утишане и забрањене кориснике.
- **Прилагођени CSS и подешавања теме.** Извезите све што имате у Админ панелу како бисте могли поново изградити у страници за прилагођавање FastComments widget‑а.
- **Где се покретач налази у вашим шаблонима**, укључујући све странице које покрећу Reactions, Topic Tracker, Spotlight, Notification Bell или Standalone Ad без Conversation‑а.

### Како OpenWeb ID‑ји постова мапирају у FastComments URL ID‑је

FastComments везује низ коментара за `urlId`. Подразумевано је чисти URL странице, али можете поставити било који стринг, и то је управо оно што OpenWeb увозник ради: чита колону `post_id` и користи је као FastComments URL ID за сваки коментар на том чланку. Такође чува колону `url` као приказани URL тако да линкови за модерацију и обавештења е‑поштом показују на праву страницу.

Дакле, правило за ваше шаблоне је: где год сте проследили `data-post-id="POST_ID"` и `data-post-url="ARTICLE_URL"` OpenWeb‑у, проследите `urlId: 'POST_ID'` и `url: 'ARTICLE_URL'` FastComments‑у. Увезени низови се поравнају са живим низовима без преусмеравања и без преписивања URL‑а. Погледајте <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">документацију о URL ID‑ју</a>.

Ако више волите да кључате низове по URL‑у уместо по ID‑ју поста, прво увезите, а затим користите алат Migrate Comments у оквиру Manage Data да преместите низове од ID‑ја поста ка URL‑у у масовном режиму.

### Мапа функција

| OpenWeb | FastComments | Белешке |
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

Остатак ове секције пролази кроз сваку групу у детаљу.

### Конверзација, гласови и реакције

Conversation у OpenWeb‑у је нити у реалном времену. FastComments widget за коментаре је такође: коментари, измене, брисања, гласови и радње модерације се гурају свим корисницима који гледају нити (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Подразумевано нови коментари од других људи се појављују иза дугмета "Show 2 New Comments" како би страница не скочила испод читача. За живе догађаје поставите `showLiveRightAway` да се рендерују одмах, и `newCommentsToBottom` ако желите да тече надоле као ћаскање.

Лајкови и дислајкови постају гласови за и против. Увозник чува оба броја по коментару. Ако ваша заједница користи само један лајк, промените стил гласања у срца на страници за прилагођавање widget‑а. Гласање се такође може у потпуности искључити.

OpenWeb Reactions је одвојени widget са два до четири означена икона на чланку (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments еквивалент је Page Reacts: конфигурисан сет реакцијских слика прикачених коментар widget‑у, памти се по страници и по кориснику (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Бројеви реакција нису део OpenWeb CSV извоза, па почињу од нуле.

Сортирање се мапира директно. OpenWeb `data-sort-by` вредности best, newest и oldest одговарају Most Relevant, Newest First и Oldest First. Поставите подразумевано помоћу `defaultSortDirection` (`MR`, `NF`, `OF`) у коду или у прилагођеној правила. Читачи могу мењати у widget‑у.

`data-read-only="true"` постаје `readonly: true`, што блокира нове коментаре, гласове, измене и брисања. `data-post-staleness-days` нема директан еквивалент, али прилагођено правило може применити `readonly` на шаблон URL ID, а такође можете превести то из шаблона на основу старости чланка. `data-messages-count` је величина странице, поставља се у прилагођавању widget‑а било од 10 до 200 коментара.

### Одговори и нити

FastComments подржава неограничено угнежђивање подразумевано; `maxReplyDepth` ограничава (`1` даје плоску структуру од два нивоа). OpenWeb CSV укључује колоне `parent_id` и `parent_comment_id`. Текући увозник увози сваки ред као коментар највишег нивоа на својој страници, у хронолошком редоследу, са аутором, временском ознаком, гласовима, бројем заставица и стањем одобрења нетакнутим. Не реконструише стабло родитељ‑детет. Ако су ваши низови пуни одговора, јавите нам када пошаљете извоз и ми ћемо обрадити нити као део увоза уместо да вам оставимо спремљену равну структуру.

### Профили корисника и значке

FastComments корисници, укључујући SSO кориснике, добијају профил са аватаром, именом за приказ, биографијом, друштвеним везама, значкама, кармом, бројем коментара, јавним током активности и директним порукама (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Свака од активности, профилних коментара и ДМ површина може бити искључена по кориснику у SSO оптерецику или глобално у конфигурацији.

OpenWeb Author Badge захтева позив `GET /sso/v1/user/{primary_key}` за аутора и постављање добијеног ID‑ја у `data-author-id`. У FastComments постављате `displayLabel: 'Author'` (или било који натпис до 100 знакова) у SSO оптерецику, и `isAdmin` или `isModerator` за особље. Натпис се приказује поред имена на сваком коментару. За богатији систем, конфигуришите значке у Customize, Badges: слике или текстуалне значке, аутоматски додељене на прагу (број коментара, гласови, закачени коментари, ветерани, брзина одговора) или ручно, и додељиве из SSO оптерецика помоћу `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Закачени коментари, анкете и Питања‑и‑одговори

Било који модератор може Pin или Unpin коментар из менија коментара у widget‑у или са контролне табле за модерацију. Закачени коментари се гутају живо свим корисницима нити. Ако желите аутоматизацију, AI Agents функција испоручује шаблон Top Comment Pinner који закачи коментар највишег нивоа кад пређе гласовни праг (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb In Conversation Polls дозвољавају особљу да прикаче анкету са 2 до 4 опције на коментар највишег нивоа. FastComments анкете такође прикачене коментару, са 2 до 10 опција, опционо датумом затварања, приватношћу резултата (анонимно, само администратори, сви) и режимом "гласај за видети резултате". Ви изаберете ко може правити анкете (искључено, администратори и модератори, сви) и да ли анонимни читачи могу гласати. Анкете су такође изложене у јавном API‑ју за креирање из вашег CMS‑а.

OpenWeb је имао формате Ask Me Anything. FastComments нема посебан Q&A производ. Практично решење је обичан нити на посебном URL ID‑ју: SSO корисник госта носи `displayLabel`, закачите уводни коментар, читачи постављају питања у коментарима највишег нивоа, госта одговара унутар нити, а обавештења о споменама и одговорима врате људе назад. Поставите `noNewRootComments` након што прозор затвори, тако да само одговори наставе.

Community Spotlight (OpenWeb‑ов прикупљач е‑поште, бројач и редирект картице) нема еквивалент. Widget подржава прилагођени HTML заглавља изнад уноса коментара преко `headerHTML`, што покрива позив на акцију, али не и форму за прикупљање е‑поште.

### Live Blog

Не постоји FastComments Live Blog. OpenWeb Live Blog је уреднички производ: репортери у Админ панелу објављују ажурирања са уграђеним линковима, твитовима и видео записима, а читачи прате (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Шта FastComments нуди за живо извештавање је страна читача: Live Chat widget (`embed-live-chat.min.js`) за стриминг ћаскање, и widget за коментаре у режиму ћаскања (`showLiveRightAway` плус `newCommentsToBottom`) уз вашу живу покривеност. За уредничка ажурирања, издавачи који напуштају OpenWeb задржавају их у свом CMS‑у или посебном алату за live blog и уграђују FastComments испод за дискусију. Медијски уграђени садржаји (YouTube, SoundCloud и други) подржани су унутар коментара, тако да ажурирања особља у виду коментара доносе богати медиј.

### Topic Tracker, обавештења и е‑пошта

OpenWeb Topic Tracker омогућава читачу да прати теме и ауторе из метаподатака странице и добија обавештења када нови чланци одговарају (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments нема праћење тема или аутора преко чланака. Читачи се претплаћују страници преко звона за обавештења и добијају ажурирања за тај нити, са фреквенцијом изабраном по претплати: сваки минут, сатовни сажетак или дневни сажетак. Ако вам је крос‑чланак праћење важно за задржавање, ово је функција коју губите.

Све остало у Notification Bell мапира. Widget има звоник који постаје црвен са бројем непрочитаних и листа: одговори вама, одговори у нити у којој сте коментарисали, спомене, гласови за ваше коментаре, активност на претплаћеним страницама, награђене значке и директне поруке (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Обавештења у апликацији су у реалном времену преко WebSocket‑а. Е‑поруке о одговорима и споменама се шаљу сваки минут за одобрене коментаре.

За SSO кориснике, проследите `optedInNotifications` и `optedInSubscriptionNotifications` у оптерецику и FastComments ажурира њихове преференце приликом следећег учитавања странице. Е‑поруке захтевају е‑пошту у оптерецику. Шаблони е‑поште су уређиви по типу и по локалу у Customize, Email Templates, а слање са вашег домена уз DKIM је подржано. Модератори и администратори добијају дневни, недељни или месечни сажетак са једним кликом за одобрење, одговор и линкове за спам.

OpenWeb Notification Webhook шаље по‑корисничке догађаје обавештења (`replied-message`, `liked-message`, `topic-by-keyword` и сл.) на ваш крајњи тачку. FastComments webhooks покривају ресурс коментара: created, updated и removed, са колико год претплатних крајњих тачака желите (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Ако сте користили webhook за обавештења да напајате ваш систем е‑поште, поново ћете изградити ту логику на догађаје коментара, или дозволити FastComments‑у да шаље е‑поруке.

### SSO: Од codeA/codeB до потписаног оптерецика

OpenWeb руковање има шест корака: чекање на `spot-im-api-ready`, OpenWeb издаје `codeA`, ваш клијент шаље то вашој позадини, ваша позадина потврђује корисника и позива `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb враћа `codeB`, и ваш клијент враћа `codeB` назад OpenWeb‑у (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Одјава позива `window.SPOTIM.logout()`.

FastComments Secure SSO нема рунде‑трип и нови крајњи тачка на вашој страни. Када рендерујете страницу за пријављеног корисника, ваша позадина серијализује корисника, Base64‑кодује га и потписује HMAC‑SHA256 користећи ваш API тајни кључ. Widget шаље оптерецик са захтевима и FastComments верификује потпис (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). У Node:

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

Временска ознака је епоц у милисекундама и одбија се ако је старија од два дана. За одјављеног читача, изоставите три потписана поља и проследите само `loginURL` (или `loginCallback` функцију) и widget ће приказати прозор за пријаву уместо композитора. Пуни радни примери у Node, Java и PHP су у <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">репозиторијуму примера кода</a>.

Корисници се креирају при првом учитавању странице. Не региструјете никога у масовном режиму. Пошто OpenWeb увозник упоређује ауторе коментара по `user_name`, корисник чији SSO оптерецик носи исти `username` тврди да су његови увезени коментари први пут када учита нити и може их уређивати или брисати од тада па надаље. Постоји и SSO кориснички API ако желите унапред креирати кориснике.

Сваки пут када се пошаље оптерецик, FastComments ажурира кориснички запис из њега, тако да промене у приказном имену или аватару на вашој страни пропагирају приликом следећег приказа странице. Поставите поље на `null` да га обришете.

Ако сте користили OpenWeb трећепартијски SSO са Auth0, Gigya или Piano преко `window.SPOTIM.startSSOForProvider`, FastComments ток је исти као горе: када ваш провајдер аутентификује корисника, ваша позадина гради и потписује оптерецик. Не постоји провајдер‑специфична интеграција за конфигурисање на страни FastComments.

Два друга опције постоје. Simple SSO прослеђује кориснички објекат без потписа са клијента, за платформе без позадине, и означава активност као верификовану када постоји е‑пошта (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 потписује ваше особље у сам FastComments контролни панел преко Okta, Azure AD или ADFS, са мапирањем улога, и доступан је на enterprise плановима (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Модерација

OpenWeb API за политику модерације по чланку има четири вредности: `spot_policy`, `approve_all`, `publish_and_moderate` и `require_approval`. FastComments конфигурише исте понашања у Moderation Settings: аутоматско одобрење укључено или искључено, захтева одобрење само за први коментар корисника, и аутоматско одобрење само за верификоване (пријављене или SSO) коментаре. Правила се примењују широм сајта или на шаблону URL ID као `*/politics/*`, што је начин да репродукујете политику по одељку. Сваки коментар, одобрен или не, појављује се у Moderate Comments контролној табли, тако да је модел објави‑па‑преглед подразумевани приказ тамо (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Увоз носи стање модерације. OpenWeb `message_status` од `approved` увози се као одобрен и прегледан; `rejected` увози се као спам и прегледан; било шта друго увози се неодобрено и непрегледано тако да се појављује у вашој реду за модерацију. `reports_count` постаје број заставица коментара.

Аутоматска модерација у FastComments је слојевита уместо једног система као Aida:

- Спам класификатор, континуирано трениран, доступан као заједнички модел за све кориснике или изолован за ваш налог, са фактором поверења који опушта филтрирање за дуготрајне или често закачене кориснике.
- Опциона ChatGPT 4 провера спама на Flex наплатном плану.
- Модерација сликовног садржаја на ниској, средњој или високој осетљивости за отпремљене слике.
- Листа забрањених речи од око 450 подразумеваних фраза, уређивачка, која маскира подударања звездицама. Овде иду ваше OpenWeb ограничене речи.
- Праг заставица који аутоматски скрива коментар након N пријава.
- Превенција поновљених и готово дупликатних порука, увек укључена.
- AI Agents: агентски догађаји са експлицитним листом дозвола (означи спам, одобри, закључај, закачи, упозори ДМ‑ом, забрани, награди значку, одговор). Сваки агент почиње у сухом покретању, осетљиви алати могу бити гатеђени људским одобрењем, а свака радња се бележи са оправдањем и степеном сигурности.

OpenWeb User Muting API дозвољава једном SSO читачу да утишне другог. FastComments еквивалент је Block User у менију коментара, доступан сваком пријављеном читачу. Забране су радња модератора: трајне или за одређено време, опционо сенчарне (корисник види свој коментар, али нико други не), опционо по хешираној ИП адреси, са плус‑алијасима е‑поште као једна адреса. Листа забрањених корисника претражује се по е‑пошти, имену, модератору и коментару који је изазвао забрану.

Контролна табла Moderate Comments подржава филтере (потребан преглед, потребно одобрење, спам, заставице, од забрањених корисника) и текстуално претраживање, масовне радње са поништењем и паузом, „изабери све који се подударају“ за веома велике редове, модерационе групе тако да ваш спортски деск види само спортске низове, по‑коментарске дневнике који показују зашто је е‑пошта послата или не, и делљиве филтероване линкове. Модератори имају само контролну таблу; не могу мењати подешавања или увозити податке.

### Аналитика

FastComments Analytics приказује кориснике онлајн тренутно по вашим сајтовима и по страници, топ странице по коментарима или по живим читаоцима, и дневне серије за учитавања страница, коментаре, гласове и креиране налоге (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Статистике модератора су одвојене. Бројеви су готово у реалном времену, одложени највише минут, и свако учитавање странице се броји уместо да се узоркује.

Оно што нећете наћи је било шта о попуњавању реклама, CPM‑у или приходима, јер нема реклама. Ако је OpenWeb контролна табла била ваш извор извештавања о ангажману‑у‑приход, тај извештај се премешта у ваш сопствени рекламни стек.

### Монетизација

OpenWeb поставља рекламе унутар и око Conversation и нуди Standalone Ad јединицу, са кампањама постављеним преко вашег OpenWeb контакта (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments не покреће рекламе у widget‑у, не дели приходе, и не учитава скрипте трећих страна за рекламе или праћење. Widget је iframe који постављате; рекламни простори изнад и испод су ваши и раде преко онога што већ користите.

Трговачка размена је експлицитна: губите шта год OpenWeb плаћа, а добијате фиксни, предвидљиви трошак и widget који не додаје захтеве за рекламе вашој страници. Брендинг је уклоњен на Flex и Pro плановима, а white‑label је доступан на Pro и Enterprise плановима.

### Извоз података и приватност

Сви извози података коментара из FastComments контролне табле као CSV у било ком тренутку, са датумима у UTC ISO формату, и исти подаци су доступни преко API‑ја. Webhooks покривају континуирано синхронизацију. Увозне датотеке се бришу из FastComments чим се увоз заврши.

За GDPR и CCPA, OpenWeb пружа API за извоз и брисање где коментари избрисаних корисника остају везани за случајни гостујући налог (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments подржава захтеве за извоз и брисање података, нуди Data Processing Agreement, и покреће посебну EU инсталацију на <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> са репликацијом података само унутар EU тачака присутности. Креирајте налог тамо ако су ваши читаоци у Европи. У EU региону, AI агент забране увек захтевају људско одобрење да би се испунио DSA члан 17.

Коментарски подаци у глобалној инсталацији репликују се по регионима укључујући Сингапурски чвор, а widget се служи из FastComments‑овог DNS‑а и CDN‑а. Уграђени скрипт је мањи од 30 KB на диску и око 6 KB компресован на мрежи.

### Мобилни SDK‑ови

OpenWeb испоручује Android, iOS и React Native SDK‑ове са Conversation, Articles, Authentication, Notifications, Reactions и In Conversation Polls. FastComments испоручује нативне <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> и <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> библиотеке са нити коментара, живим ажурирањима преко WebSocket, Secure SSO, гласовањем, споменама, отпремањем слика, радњама модерације (заставица, закачивање, закључавање, блокирање), теме, режимом живог ћаскања и друштвеним током. EU регион је конфигурациони флаг. Не постоји посебан рекламни SDK јер нема реклама.

### Уграђивање и SPA интеграција

OpenWeb покретач и контејнер:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments еквивалент:

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

Ваш tenant ID је на <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">страници за код уграђивања</a> када имате налог. `data-article-tags` нема еквивалент јер не постоји праћење тема; хештегови унутар коментара су друга функција.

За бесконачно скроловање и SPA, OpenWeb‑ов приступ Virtual Pages је један контејнер по чланку. У FastComments позивате `FastCommentsUI(element, config)` по нити, а касније `instance.update(newConfig)` да замените URL ID или `instance.destroy()` да га уклоните (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular и SolidJS библиотеке управљају овим када се промени проп config. Животни колбеци (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) замењују `spot-im-*` DOM догађаје које сте слушали.

Бројачи коментара на индекс страницама користе widget за број коментара, појединачни или масовни. За SEO, коментари се рендерују директно у страницу за претраживаче уместо у iframe‑у, тако да не постоји SEO API позив за конфигурисање.

### Корак по корак план миграције

**1. Креирајте налог и подесите основе.** Пријавите се на fastcomments.com или eu.fastcomments.com. Поставите подешавања модерације, листу забрањених речи, стил гласовања, подразумевано сортирање и прилагођени CSS у страници за прилагођавање widget‑а. Додајте модераторе и модерационе групе. Ако имате много администраторских корисника, подршка их увози за вас.

**2. Покрените први увоз.** Идите на <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, изаберите OpenWeb (.csv) и отпремите. Увоз се извршава у позадини; страница приказује број редова и статус, а ви добијате е‑поруку када заврши (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Сваки OpenWeb ID поруке постаје FastComments ID коментара, тако да поновни увоз не прави дупликате.

**3. Проверите бројеве.** Упоредите број редова посла са вашим извозом. Отворите неколико URL ID‑ја великог саобраћаја у контролној табли за модерацију и проверите ауторе, датуме, укупне гласове и стања одобрења. Потврдите да се одбијени коментари приказују као спам, а они на чекању у реду.

**4. Изградите SSO оптерецик.** Имплементирајте код за потписање изнад у вашој позадини, користећи исти `id` и `username` који сте користили са OpenWeb‑ом. Тестирајте са особљем на тест страници: увезени коментари се приказују као њихови, а уређивање и брисање се појављују у њиховом менију.

**5. Замени уграђивање у тест шаблону.** Замени покретач и контејнер FastComments снипетом, мапирајући `data-post-id` у `urlId` и `data-post-url` у `url`. Уклоните `window.SPOTIM.logout()` и `spot-im-*` слушаоце, или их мапирајте у колбеци. Примените ваш CSS у прилагођеној правила уместо у коду, тако да се тестира на сваком издању FastComments.

**6. Покрени паралелно.** Поставите FastComments на одељак или проценат чланака док OpenWeb остаје на остатку. Ништа на страни OpenWeb‑а не мора да се мења. Пратите ред за модерацију и страницу аналитике. Читачи који коментаришу на FastComments страницама током овог периода нису у вашем OpenWeb извозу, па планирајте коначни увоз пре него што они почну, а не после.

**7. CSP и DNS.** Ако користите Content‑Security‑Policy, дозволите `cdn.fastcomments.com` и `fastcomments.com` (или `eu.fastcomments.com`) за `script-src`, `frame-src` и `connect-src`, и уклоните `spot.im` и `openweb.com` уносе када покретач нестане. Ништа се не мења у вашем DNS‑у. Препусове нису потребне јер се URL ID‑ји подударају.

**8. Коначни увоз и пуштање у живо.** Повуците још један OpenWeb извоз који покрива период паралелног рада, отпремите га (ре‑увоз је безбедан), затим распоредите промену шаблона на све странице и уклоните покретач, Reactions, Topic Tracker, Spotlight, звоник и рекламне контејнере.

**9. Чек листа за пуштање у живо.**

- Живо коментарисање видљиво на продукционом чланку из два прегледача.
- SSO пријава, одјава и коментар под правим налогом претплатника.
- Модератори примају сажетак и могу одобрити из њега.
- Е‑поруке о одговорима и споменама стижу и линкују на исправну страницу.
- Листа забрана и листа забрањених речи попуњена.
- Page Reacts и widget‑и за број коментара приказују се где су раније биле Reactions и бројач.
- CSP извештаји чисти.
- Још једно поређење броја коментара из вашег извоза и контролне табле.

### Шта губите и шта је другачије

Бити директан о празнинама:

- **Live Blog.** Нема еквивалента. Држите га у вашем CMS‑у или алату за live blog и поставите FastComments испод.
- **Topic Tracker.** Нема крос‑чланак праћење тема или аутора. Само претплате на страницу.
- **Community Spotlight.** Нема производа за CTA картице. `headerHTML` вам даје поруку изнад композитора, не форму за прикупљање е‑поште.
- **Приход од реклама.** Нема. Widget је без реклама по дизајну.
- **Notification webhook.** Webhooks су на догађаје коментара, не на по‑корисничке догађаје обавештења.
- **Нити при увозу.** Текући увозник спљашћује одговоре у коментаре највишег нивоа на истој страници. Јавите нам ако треба да се реконструише стабло.
- **Историја реакција.** Бројеви реакција на нивоу чланка нису у CSV‑у и почињу од нуле.
- **Историја анкета.** Дефиниције анкета и гласови нису у CSV‑у; текст анкете се увози, али сама анкета не.
- **Модел пријаве.** Читачи без SSO пријављују се магичним линком уместо лозинке или друштвеног логина.
- **Људски модератори.** OpenWeb има уграђен тим модератора са Aida. FastComments пружа алате, класификаторе и агенте; људи су ваши.

Шта добијате, у истом духу: widget који додаје само један мали скрипт и без захтева за рекламе, модерација коју једна особа може управљати за велики сајт са масовним радњама и агентима, SSO који је функција потписа уместо протокола, и добављач који није под судским надгледањем.

### Временски оквир и бесплатна понуда за увоз

Планирајте једну до две недеље за издавача са једном SSO интеграцијом и неколико стотина хиљада коментара: дан или два за извоз и први увоз, неколико дана за SSO и шаблоне, период паралелног рада, затим коначни увоз и пребацивање. Платформа већ подржи овакву скалу: United Cloud управља више од десет портала и милионима коментара на FastComments, а itsfoss.com је преместио историју од 88 000 коментара са другог провајдера преко истог самоуслужног увозника.

FastComments бесплатно увози ваш OpenWeb CSV извоз, помаже вам да радите OpenWeb и FastComments паралелно током миграције, и помаже у самом процесу миграције, укључујући нити и упаривање корисника. Enterprise планови укључују SLA, одговоре подршке у року од једног сата током радних сати, и опцију Isolated Cloud распоређивања у вашем облаку (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Flex плаћање по употреби је доступно за сајтове који желе да започну без уговора.

Пишите на <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> са величином вашег извоза и вашим SSO подешавањем и добићете план.

### У закључку

Повуците ваш извоз данас. Остатак миграције је механички: исти ID‑ји постају URL ID‑ји, исти кориснички називи тврде своје коментаре преко SSO, стање модерације се преноси, а уграђивање је директна замена. Места где FastComments одступа су наведена изнад како бисте могли да донесете одлуку на основу чињеница.

Cheers!{{/isPost}}