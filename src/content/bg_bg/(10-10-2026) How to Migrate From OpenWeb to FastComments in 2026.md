[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Как да мигрирате от OpenWeb към FastComments през 2026[/postlink]

{{#unless isPost}}
Ръководство „функция по функция“ за издатели, преминаващи от OpenWeb (преди това Spot.IM): какво съвпада 1:1, какво е различно, как работи CSV импортът, как се променя SSO ръкостискането и стъпка‑по‑стъпка план за преминаване.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Тази статия съдържа технически жаргон

Това ръководство е за ръководители на продукти и инженеринг и за мениджъри на общности, които днес използват OpenWeb и се нуждаят от план за миграция. То преминава през всяка повърхност на OpenWeb, посочва еквивалента в FastComments и ясно казва къде няма 1:1 съвпадение.

### Защо сега

На 30 септември 2026 г. Тел Авивският окръжен съд нареди назначаването на временен получател над OpenWeb по искане на неговия кредитор, Mars Growth Capital, който държи първостепенен залог върху активите и сметките на компанията и се стреми да го приложи срещу израелските активи, банкови сметки и интелектуална собственост на OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). На следващия ден беше назначен временен тръст, адв. Ехуд Гиндес (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). По‑рано през 2026 г. Microsoft, един от най‑големите клиенти на OpenWeb, прекрати ангажимента си и задържа плащания по спор за трафик, който OpenWeb отрича (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb твърди, че платформата продължава да работи. Съдебен надзор, кредитор, който налага залози върху IP‑то, от което зависи вашият коментаторски уиджет, и тръст, чиято задача е да запази стойността на активите, не са условия, които издателят иска при основната си ангажираност. Ако все още не сте изтеглили пълен експорт на данните, направете го първо, днес, преди всичко друго в това ръководство.

### Какво ви е нужно преди да започнете

Съберете следното, преди да пипате код:

- **Вашият OpenWeb експорт на коментари.** OpenWeb предоставя Export API (v4), който генерира архивирани CSV файлове, максимум 100 000 коментари на файл, с прозорци от до един месец и линкове за изтегляне, които изтичат след седмица (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Поискайте всеки необходим прозорец и съхранете файловете на сигурно място. Ако вашият контакт в OpenWeb е предоставил CSV експорт от Административния панел, запазете и него. FastComments импортерът чете OpenWeb CSV с колони като `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` и `url`.
- **Вашият Spot ID и списъка с ID‑та на публикациите.** Всеки `data-post-id`, който предавате на стартерa, се превръща в FastComments URL ID. Ако вашите ID‑та на публикациите са CMS article ID‑та, запишете как се генерират, за да можете да издадете същите стойности от страната на FastComments.
- **Вашият SSO списък с потребители.** Конкретно `primary_key` и `user_name` стойностите, които регистрирахте в OpenWeb. Авторството на коментари се съпоставя по потребителско име по време на импорта, затова трябва да предавате същите потребителски имена в SSO полезния товар на FastComments.
- **Вашият списък с модератори и роли.** Администраторски, модераторски и журналистически акаунти, и кои секции всеки модерира.
- **Вашата конфигурация за модерация.** Политика за целия сайт (одобряване на всички, публикуване и модериране, изискване на одобрение), специфични за статия пренаписвания, списък с ограничени думи, заглушени и блокирани потребители.
- **Персонализиран CSS и настройки за тема.** Експортирайте всичко, което имате в Административния панел, за да можете да го възстановите в страницата за персонализиране на уиджета на FastComments.
- **Къде се намира стартерът във вашите шаблони**, включително всяка страница, която изпълнява Reactions, Topic Tracker, Spotlight, Notification Bell или Standalone Ad без Conversation.

### Как OpenWeb ID‑та на публикациите се съпоставя с FastComments URL ID‑та

FastComments свързва нишка от коментари с `urlId`. По подразбиране URL ID‑тото е почистеният URL на страницата, но можете да зададете произволен низ, и точно това прави импортерът на OpenWeb: той чете колоната `post_id` и я използва като FastComments URL ID за всеки коментар към тази статия. Също така съхранява колоната `url` като показван URL, така че линковете за модерация и имейлите за известия сочат към правилната страница.

Така правилото за вашите шаблони е: където предавахте `data-post-id="POST_ID"` и `data-post-url="ARTICLE_URL"` към OpenWeb, предайте `urlId: 'POST_ID'` и `url: 'ARTICLE_URL'` към FastComments. Импортираните нишки съвпадат с живите нишки без пренасочвания и без пренаписване на URL‑то. Вижте <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">документацията за URL ID</a>.

Ако предпочитате в бъдеще да ключовате нишките по URL вместо по post ID, импортирайте първо и след това използвайте инструмента Migrate Comments под Manage Data, за да преместите нишките от post ID към URL в масов режим.

### Таблица с еквивалентите

| OpenWeb | FastComments | Бележки |
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

Останалата част от този раздел разглежда всяка група подробно.

### Conversation, Votes and Reactions

Conversation‑ът на OpenWeb е нишка в реално време. Коментаторският уиджет на FastComments също е: коментари, редакции, изтривания, гласове и действия за модерация се изпращат към всички, които гледат нишката (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). По подразбиране новите коментари от други хора се скриват зад бутон „Show 2 New Comments“, за да не се подскача страницата под читателя. За живи събития задайте `showLiveRightAway`, за да се визуализират веднага, и `newCommentsToBottom`, ако искате да се движат надолу като чат.

Likes и dislikes се превръщат в up и down votes. Импортерът запазва и двете брояния за всеки коментар. Ако вашата общност е свикнала с единствено лайк, сменете стила на гласуване към сърца в страницата за персонализиране на уиджета. Гласуването може също да се изключи изцяло.

Reactions в OpenWeb е отделен уиджет с две‑четири етикетирани икони в статията (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Еквивалентът в FastComments е Page Reacts: конфигурируем набор от реакционни изображения, прикрепени към уиджета за коментари, запомнени за всяка страница и за всеки потребител (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Брояците на реакциите не са част от CSV‑то за експортиране от OpenWeb, затова започват от нула.

Сортирането се съпоставя директно. `data-sort-by` стойностите best, newest и oldest в OpenWeb съответстват на Most Relevant, Newest First и Oldest First. Задайте подразбиращото се с `defaultSortDirection` (`MR`, `NF`, `OF`) в кода или в правило за персонализиране. Читателите могат да превключват в уиджета.

`data-read-only="true"` става `readonly: true`, което блокира нови коментари, гласове, редакции и изтривания. `data-post-staleness-days` няма директен еквивалент, но правило за персонализиране може да приложи `readonly` към шаблон за URL ID, а също така можете да го превключвате от вашите шаблони според възрастта на статията. `data-messages-count` е размерът на страницата, задава се в страницата за персонализиране на уиджета – от 10 до 200 коментари.

### Replies and Threading

FastComments поддържа неограничена вложеност по подразбиране; `maxReplyDepth` я ограничава (`1` дава плоска дву‑нивова структура). CSV‑то на OpenWeb включва колони `parent_id` и `parent_comment_id`. Текущият импортер импортира всеки ред като коментар от най‑горно ниво на съответната страница, в хронологичен ред, със запазени автор, времеви печат, гласове, брой маркирания и състояние на одобрение. Той не възстановява дървото parent‑child. Ако вашите нишки са богати на отговори, кажете ни, когато изпращате експорта, и ние ще се погрижим за нишките като част от импорта, вместо да ви оставим с изравнена нишка.

### User Profiles and Badges

FastComments потребителите, включително SSO потребителите, получават профил с аватар, показвано име, биография, социални линкове, значки, карма, брой коментари, публичен поток от активност и директни съобщения (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Всеки от потоките за активност, коментари в профила и DM‑те може да се изключи за конкретен потребител в SSO полезния товар или глобално в конфигурацията.

OpenWeb‑овият Author Badge изисква извикване на `GET /sso/v1/user/{primary_key}` за автора и поставяне на върнатото ID в `data-author-id`. В FastComments задавате `displayLabel: 'Author'` (или какъвто и да е етикет до 100 знака) в SSO полезния товар, и `isAdmin` или `isModerator` за персонал. Етикетът се визуализира до името им при всеки коментар. За по‑богата система, конфигурирайте значки под Customize → Badges: изображение или текстови значки, автоматично присъждани при достигане на прагове (брой коментари, upvotes, закрепени коментари, статус „ветеран“, скорост на отговор) или ръчно, и задаваеми от SSO полезния товар с `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Всеки модератор може да Pin или Unpin коментар от менюто на коментара в уиджета или от таблото за модерация. Закрепените коментари се изпращат в живо към всички в нишката. Ако искате това автоматично, функцията AI Agents доставя шаблон Top Comment Pinner, който закрепва коментар от най‑горно ниво, след като премине гласов праг (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb‑овите In Conversation Polls позволяват на персонала да прикачи 2‑4‑опционен въпрос към коментар от най‑горно ниво. FastComments ползва същия подход – ползва се ползва към коментар, с 2‑10 опции, незадължителна дата за затваряне, поверителност на резултатите (анонимно, само администратори, всички) и режим „гласувай за да видиш резултата“. Избирате кой може да създава анкети (изключено, администратори и модератори, всички) и дали анонимните читатели могат да гласуват. Анкетите също се излагат в публичния API за създаване от вашия CMS.

OpenWeb е предлагал формати Ask Me Anything. FastComments няма отделен Q&A продукт. Практичната замяна е обикновена нишка на специален URL ID: SSO потребителят‑гост носи `displayLabel`, закрепвате въведителния коментар, читателите задават въпроси в коментари от най‑горно ниво, гостът отговаря в нишката, а известията за споменаване и отговор връщат хората обратно. Задайте `noNewRootComments` след като прозореца се затвори, за да продължат само отговорите.

Community Spotlight (имейл колектор, брояч и пренасочващи карти) няма еквивалент. Уиджетът поддържа персонализиран HTML заглавие над полето за въвеждане чрез `headerHTML`, което покрива CTA, но не и форма за събиране на имейли.

### Live Blog

Няма FastComments Live Blog. Live Blog‑ът на OpenWeb е редакционен продукт: репортери, назначени в Административния панел, публикуват актуализации с вградени линкове, туитове и видео, а читателите следват в реално време (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Това, което FastComments предлага за живо отразяване, е страната на читателя: Live Chat уиджет (`embed-live-chat.min.js`) за чат в поток и уиджет за коментари в чат режим (`showLiveRightAway` плюс `newCommentsToBottom`) заедно с вашето живо отразяване. За редакционните актуализации самите издатели запазват съдържанието в CMS или специален инструмент за живо блогиране и вграждат FastComments отдолу за дискусия. Медийни вграждания (YouTube, SoundCloud и др.) се поддържат в коментари, така че персоналните актуализации, публикувани като коментари, носят богато медийно съдържание.

### Topic Tracker, Notifications and Email

Topic Tracker‑ът на OpenWeb позволява на читател да следи теми и автори, извлечени от метаданните на страницата, и да получава известия, когато нови статии съвпадат (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments няма следване на тема или автор през статии. Читателите се абонират за страница от известителната камбана и получават актуализации за тази нишка, с честота, избрана за абонамента: всяка минута, часова резюме или дневно резюме. Ако следването между статии е важно за вашите метрики, това е функция, която губите.

Всичко останало в Notification Bell се съпоставя. Уиджетът има камбана, която става червена с броя на непрочетените и изброява: отговори към вас, отговори в нишка, в която коментирахте, споменавания, upvotes върху вашите коментари, активност в абонирани страници, присъждане на значки и директни съобщения (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). В‑ап уведомленията са в реално време чрез WebSocket. Имейлите за отговор и споменаване се изпращат всяка минута само за одобрени коментари.

За SSO потребители предайте `optedInNotifications` и `optedInSubscriptionNotifications` в полезния товар и FastComments актуализира предпочитанията им при следващото зареждане на страницата. За имейлите е нужен имейл адрес в полезния товар. Шаблоните за имейл са редактирани по тип и по локализация под Customize → Email Templates, а изпращането от вашия собствен домейн с DKIM се поддържа. Модератори и администратори получават дневно, седмично или месечно резюме с еднократно одобрение, отговор и линкове за спам.

Notification Webhook‑ът на OpenWeb изпраща събития за известия на потребител (`replied-message`, `liked-message`, `topic-by-keyword` и др.) към вашия край. Webhook‑овете на FastComments обхващат ресурса за коментари: създаден, актуализиран и изтрит, с неограничен брой абониращи се крайни точки (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Ако сте използвали webhook за известия, за да захранвате вашата имейл система, ще трябва да пресъздадете тази логика върху събития за коментари, или да оставите FastComments да изпраща имейлите.

### SSO: From codeA/codeB to a Signed Payload

Ръкописът на OpenWeb има шест стъпки: изчакайте `spot-im-api-ready`, OpenWeb създава `codeA`, клиентът ви го изпраща към вашия бекенд, бекендът ви потвърждава потребителя и извиква `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb връща `codeB`, и клиентът ви предава `codeB` обратно към OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Изходът от системата е `window.SPOTIM.logout()`.

FastComments Secure SSO няма обратен път и няма нов краен пункт от ваша страна. Когато рендерирате страницата за влезнал потребител, вашият бекенд сериализира потребителя, Base64‑кодиратe го и го подписва с HMAC‑SHA256, използвайки вашия API таен ключ. Уиджетът изпраща полезния товар със заявките си и FastComments проверява подписа (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). В Node:

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

Времевата отметка е в милисекунди от епохата и се отказва, ако е по‑стара от два дни. За излезъл читател, пропуснете трите подписани полета и предайте само `loginURL` (или функция `loginCallback`) и уиджетът ще покаже прозорец за вход вместо композитор. Пълни работещи примери за Node, Java и PHP са в <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">репозитория с кодови примери</a>.

Потребителите се създават при първото зареждане на страницата. Не регистрирате никого масово. Тъй като импортерът на OpenWeb съпоставя авторите на коментари по `user_name`, потребител, чийто SSO полезен товар носи същото `username`, претендира за своите импортирани коментари при първото зареждане на нишка и оттогава може да ги редактира или изтрива. Съществува и SSO потребителски API, ако искате предварително да създадете потребители.

Всеки път, когато полезният товар се изпрати, FastComments актуализира потребителския запис, така че променено показвано име или аватар от ваша страна се разпространява при следващото зареждане на страницата. Задайте поле на `null`, за да го изчистите.

Ако сте използвали трети‑страничен SSO на OpenWeb с Auth0, Gigya или Piano чрез `window.SPOTIM.startSSOForProvider`, потокът в FastComments е същият: след като вашият доставчик аутентицира потребителя, вашият бекенд създава и подписва полезния товар. Няма специфична интеграция за доставчик, която да се конфигурира от страна на FastComments.

Две други опции съществуват. Simple SSO предава потребителския обект без подпис от клиента, за платформи без бекенд, и маркира активността като проверена, когато има имейл (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 подписва вашия персонал в таблото на FastComments чрез Okta, Azure AD или ADFS, с мапинг на роли, и е достъпно в Enterprise плановете (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

API‑то за политика за модерация по статия в OpenWeb има четири стойности: `spot_policy`, `approve_all`, `publish_and_moderate` и `require_approval`. FastComments конфигурира същото поведение в Moderation Settings: автоматично одобрение включено/изключено, одобрение задължително само за първия коментар на потребителя и автоматично одобряване само на проверени (влезли или SSO) коментари. Правилата се прилагат за целия сайт или за шаблон на URL ID като `*/politics/*`, което е начинът да възпроизведете политика по секция. Всеки коментар, одобрен или не, попада в таблото Moderate Comments, така че моделът publish‑then‑review е подразбиращият се изглед там (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Импортът пренася състоянието на модерацията. OpenWeb `message_status` със стойност `approved` се импортира като одобрен и прегледан; `rejected` се импортира като спам и прегледан; всичко друго се импортира като неодобрен и непрегледан, така че се появява във вашата опашка за модерация. `reports_count` става броя на маркиранията на коментара.

Автоматизираната модерация в FastComments е слоеста, а не единна система като Aida:

- Спам класификатор, непрекъснато обучаван, достъпен като споделен модел за всички наематели или изолиран за вашия наемател, с фактор на доверие, който отпуска филтрирането за дългогодишни или често закрепени потребители.
- По избор проверка за спам с ChatGPT 4 при Flex таксуване.
- Модерация на изображения с ниска, средна или висока чувствителност за качени изображения.
- Списък с черни думи от около 450 стандартни фрази, редактираме, който маскира съвпадения със звездички. Тук отиват вашите ограничени думи от OpenWeb.
- Прагове за маркиране, които автоматично скриват коментар след N доклада.
- Предотвратяване на повторни и почти дублирани съобщения, винаги включено.
- AI Agents: събитийно‑задвижвани агенти с изрично позволени инструменти (маркиране като спам, одобряване, заключване, закрепване, предупреждение чрез DM, бан, присъждане на значка, отговор). Всеки агент започва в dry run, чувствителните инструменти могат да се задействат след човешко одобрение, и всяко действие се записва с обосновка и степен на увереност.

OpenWeb API‑то за заглушаване на потребител позволява на един SSO читател да заглуши друг. Еквивалентът в FastComments е Block User в менюто на коментара, достъпен за всеки влезъл читател. Баните са действие на модератор: постоянен или за зададен период, по избор с shadow ban (потребителят вижда своя коментар, но никой друг не го вижда), по избор по хеширан IP, с плюс‑алиаси за имейл, третиран като един адрес. Списъкът с баннати потребители е търсим по имейл, име, модератор и коментар, който е предизвикал бан.

Таблото Moderate Comments поддържа филтри (нуждаещи се от преглед, нуждаещи се от одобрение, спам, маркирани, от баннати потребители) и текстово търсене, масови действия с undo и pause, „select all matching“ за много големи опашки, групи за модерация, така че вашият спортен отдел вижда само спортни нишки, логове за всеки коментар, които показват защо имейл е изпратен или не, и споделими филтрирани линкове. Модераторите имат само таблото; те не могат да променят настройки или да импортират данни.

### Analytics

FastComments Analytics показва потребители онлайн в момента за вашите сайтове и по страница, топ страници по коментари или по живи читатели, и дневни серии за зареждания на страници, коментари, гласове и създадени акаунти (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Статистиките за модератори са отделни. Броячетата са почти в реално време, със закъснение най‑много една минута, и всяко зареждане на страница се брои, а не се извадка.

Това, което няма, е каквото и да е свързано с рекламно запълване, CPM или приходи, защото няма реклами. Ако таблото на OpenWeb беше вашият източник за докладване на ангажираност‑към‑приход, това докладване се премества към вашия собствен рекламен стек.

### Monetization

OpenWeb поставя реклами вътре и около Conversation и предлага Standalone Ad единица, с кампании, настроени чрез вашия контакт в OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments не изпълнява реклами в уиджета, не има споделяне на приходи и не зарежда скриптове за трети страни за реклама или проследяване. Уиджетът е iframe, който вмъквате; рекламните места над и под него са ваши и се изпълняват чрез това, което вече използвате.

Търгуването е явно: губите каквото OpenWeb ви плащаше, а получавате фиксирана, предвидима цена и уиджет, който не добавя рекламни заявки към вашата страница. Брандирането се премахва в плановете Flex и Pro, а бялото маркиране е достъпно в Pro и Enterprise.

### Data Export and Privacy

Всички експорти на коментари от таблото на FastComments се предлагат като CSV по всяко време, с дати във формат UTC ISO, и същите данни са достъпни чрез API. Webhook‑овете покриват текуща синхронизация. Файловете за импорт се изтриват от FastComments веднага след завършване на импорта.

За GDPR и CCPA OpenWeb предоставя API за експортиране и изтриване, където изтритите потребители остават прикрепени към случаен гост акаунт (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments поддържа заявки за експортиране и изтриване на данни, предлага Data Processing Agreement и поддържа отделно EU разполагане на <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> с данни, репликирани само в EU точки на присъствие. Създайте вашия акаунт там, ако вашите читатели са в Европа. В EU региона AI агент бановете винаги изискват човешко одобрение, за да се съобразят с DSA Article 17.

Коментарните данни в глобалното разполагане се репликират в региони, включително възел в Сингапур, а уиджетът се обслужва от собствените DNS и CDN на FastComments. Скриптът за вграждане е под 30 KB на диск и около 6 KB компресиран при предаване.

### Mobile SDKs

OpenWeb доставя Android, iOS и React Native SDK‑ове с Conversation, Articles, Authentication, Notifications, Reactions и In Conversation Polls. FastComments доставя native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> и <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> библиотеки с нишкови коментари, живи актуализации чрез WebSocket, Secure SSO, гласуване, споменавания, качване на изображения, действия за модерация (маркиране, закрепване, заключване, блокиране), темизиране, режим на жив чат и компонент за социална хронология. EU регионът е флаг за конфигурация. Няма отделен рекламни SDK, защото няма реклами.

### Embed and SPA Integration

OpenWeb стартерът и контейнерът:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments еквивалентът:

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

Вашият tenant ID се намира на <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">страницата за embed код</a>, след като имате акаунт. `data-article-tags` няма еквивалент, тъй като няма следване на теми; хаштаговете в коментари са различна функция.

За безкрайно превъртане и едностранични приложения, подходът Virtual Pages на OpenWeb е един контейнер на статия. В FastComments викаме `FastCommentsUI(element, config)` за всяка нишка и по‑късно `instance.update(newConfig)` за смяна на URL ID или `instance.destroy()` за премахване (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular и SolidJS библиотеките се справят с това, когато се промени пропсът config. Животните callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) заменят `spot-im-*` DOM събитията, които слушахте.

Броячетата на коментари в индексните страници използват уиджет за брой коментари, единичен или масов. За SEO коментарите се рендерират директно в страницата за търсачките, вместо в iframe, така че няма SEO API повикване за конфигуриране.

### Step-by-Step Cutover

**1. Създайте акаунта и конфигурирайте основните настройки.** Регистрирайте се на fastcomments.com или eu.fastcomments.com. Задайте вашите настройки за модерация, черен списък за думи, стил на гласуване, подразбиращо се сортиране и персонализиран CSS в страницата за персонализиране на уиджета. Добавете модератори и групи за модерация. Ако имате много администраторски потребители, поддръжката може да ги импортира за вас.

**2. Извършете първия импорт.** Отидете на <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, изберете OpenWeb (.csv) и качете файла. Импортът се изпълнява като фонов процес; страницата показва брой редове и статус, а вие получавате имейл, когато завърши (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Всеки OpenWeb message ID се превръща в FastComments comment ID, така че повторен импорт не създава дубликати.

**3. Проверете броячетата.** Сравнете броя на редовете от задачата с вашия експорт. Отворете няколко URL ID с висок трафик в таблото за модерация и проверете автори, дати, гласове и състояния на одобрение. Потвърдете, че отхвърлените коментари се показват като спам, а чакащите са в опашката.

**4. Създайте SSO полезния товар.** Реализирайте кода за подписване, показан по‑горе, в бекенда си, използвайки същия `id` и `username`, които използвахте с OpenWeb. Тествайте с персонал в тестова страница: импортираните коментари се показват като техни, а редактиране и изтриване се появяват в менюто им.

**5. Сменете embed‑а в тестов шаблон.** Заместете стартерa и контейнера с FastComments снипет, като съпоставите `data-post-id` към `urlId` и `data-post-url` към `url`. Премахнете `window.SPOTIM.logout()` и `spot-im-*` слушателите, или ги съпоставете към съответните callbacks. Прилагайте вашия CSS в правило за персонализиране, вместо в код, за да се тества при всяко издание на FastComments.

**6. Пуснете паралелно.** Поставете FastComments в секция или процент от статиите, докато OpenWeb остава в останалата част. Нищо от страната на OpenWeb не се променя. Наблюдавайте опашката за модерация и страницата за аналитика. Читателите, коментиращи в FastComments по време на този прозорец, не се включват във вашия OpenWeb експорт, затова планирайте последния импорт преди те да започнат, а не след това.

**7. CSP и DNS.** Ако използвате Content‑Security‑Policy, разрешете `cdn.fastcomments.com` и `fastcomments.com` (или `eu.fastcomments.com`) за `script-src`, `frame-src` и `connect-src`, и премахнете `spot.im` и `openweb.com` след като стартерът изчезне. Нищо не се променя във вашия DNS. Пренасочвания не са нужни, защото URL ID‑тата съвпадат.

**8. Последен импорт и пускане в продукция.** Изтеглете още един OpenWeb експорт, обхващащ прозореца с паралелно изпълнение, качете го (повторен импорт е безопасен), след това разположете промените в шаблона навсякъде и премахнете стартерa, Reactions, Topic Tracker, Spotlight, камбаната и рекламните контейнери.

**9. Чеклист за пускане.**

- Живо коментиране видимо на продукционна статия от два браузъра.
- SSO вход, изход и коментар под реален абонатен акаунт.
- Модераторите получават резюме и могат да одобряват от него.
- Имейли за отговор и споменаване пристигат и водят до правилната страница.
- Списък с банове и черен списък за думи попълнени.
- Page Reacts и уиджети за брой коментари се визуализират там, където преди бяха Reactions и броячът.
- CSP доклади чисти.
- Последно сравнение на брой коментари между вашия експорт и таблото.

### Какво губите и какво е различно

Бъдещото за разликите:

- **Live Blog.** Няма еквивалент. Запазете го в CMS‑а или инструмент за живо блогиране и поставете FastComments под него.
- **Topic Tracker.** Няма следване на тема или автор между статии. Само абонаменти за страници.
- **Community Spotlight.** Няма продукт за CTA карта. `headerHTML` ви дава съобщение над композитора, но не и форма за събиране на имейли.
- **Ad revenue.** Няма. Уиджетът е без реклами по дизайн.
- **Notification webhook.** Webhook‑овете са за събития от коментари, не за потребителски известия.
- **Threading при импорт.** Текущият импортер изравнява отговорите към коментари от най‑горно ниво на същата страница. Кажете ни, ако ви трябва възстановяване на дървото.
- **Reactions история.** Брояците на реакциите на ниво статия не са в CSV‑то и започват от нула.
- **Polls история.** Дефинициите и гласовете на анкети не са в CSV‑то; текстът на анкетния коментар се импортира, но самата анкета не.
- **Login модел.** Читателите без SSO влизат чрез magic‑link вместо парола или социален бутон.
- **Човешки модерационен персонал.** OpenWeb включва екип за модерация с Aida. FastComments предоставя инструменти, класификатори и агенти; хората са ваши.

Какво печелите, в същия дух: уиджет, който добавя само малък скрипт и без рекламни заявки, модерация, която един човек може да управлява за голям сайт с масови действия и агенти, SSO, който е функция за подписване, а не протокол, и доставчик, който не е под съдебен надзор.

### Timeline and the Free Import Offer

Планирайте една‑две седмици за издател с една SSO интеграция и няколко стотин хиляди коментари: ден‑два за експорта и първия импорт, няколко дни за SSO и шаблони, прозорец за паралелно изпълнение, след това последен импорт и превключване. Платформата вече поддържа този мащаб: United Cloud управлява над десет портала и милиони коментари с FastComments, а itsfoss.com премести история от 88 000 коментара от друг доставчик чрез същия самообслужващ импортер.

FastComments импортира вашия OpenWeb CSV експорт безплатно, помага ви да работите паралелно с OpenWeb и FastComments по време на преминаването и подпомага самата миграция, включително въпроси за дървото и съвпадение на потребители. Плановете Enterprise включват SLA, отговори в рамките на един час в работно време и опция за изолирано облачно разполагане във вашия собствен облачен акаунт (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Ценообразуване по използване (Flex) е налично за сайтове, които искат да започнат без договор.

Пишете на <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> с размера на вашия експорт и вашата SSO конфигурация и ние ще се свържем с план.

### In Conclusion

Изтеглете вашия експорт днес. Останалата част от миграцията е механична: същите post ID‑та стават URL ID‑та, същите потребителски имена претендират за своите коментари чрез SSO, състоянието на модерацията се пренася, а embed‑ът е проста замяна. Местата, където FastComments се различава, са изброени по‑горе, за да можете да решите с фактите пред вас.

Cheers!{{/isPost}}