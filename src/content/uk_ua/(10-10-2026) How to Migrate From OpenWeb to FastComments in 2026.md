[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Як мігрувати з OpenWeb до FastComments у 2026 році[/postlink]

{{#unless isPost}}
Посібник по функціях для видавців, які переходять з OpenWeb (раніше Spot.IM): що відповідає 1:1, що відрізняється, як працює імпорт CSV, як змінюється процес SSO, та покроковий план переходу.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

Ця стаття містить технічний жаргон

### Why Now

30 вересня 2026 р. Тель‑Авівський окружний суд наказав призначити тимчасового отримувача над OpenWeb за запитом його кредитора, Mars Growth Capital, який має першочергову заставу на активи та рахунки компанії і прагне її виконати щодо ізраїльських активів, банківських рахунків та інтелектуальної власності OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Тимчасовим довіреним, адв. Ехудом Гіндесом, був призначений наступного дня (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Раніше у 2026 р. Microsoft, один із найбільших клієнтів OpenWeb, завершив співпрацю і утримав платежі через спір щодо трафіку, який OpenWeb відхиляє (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb стверджує, що платформа продовжує працювати. Судовий нагляд, кредитор, що виконує застави на IP, від якого залежить ваш віджет коментарів, і довірець, чия задача — зберегти вартість активів, не є умовами, які ви хочете як видавцю для ключової поверхні взаємодії. Якщо ви ще не завантажили повний експорт даних, зробіть це спочатку, сьогодні, перед будь‑яким іншим кроком у цьому посібнику.

### What You Need Before You Start

Зберіть це перед тим, як торкатися коду:

- **Your OpenWeb comment export.** OpenWeb надає Export API (v4), який створює zip‑файли CSV, максимум 100 000 коментарів у файлі, з вікнами діапазону дат до одного місяця і посиланнями для завантаження, які закінчуються через тиждень (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Запросіть усі потрібні вікна і збережіть файли в безпечному місці. Якщо ваш контакт в OpenWeb раніше надавав CSV‑експорт через Admin Panel, збережіть і його. FastComments імпортер читає CSV OpenWeb з колонками, такими як `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` і `url`.
- **Your Spot ID and the list of post IDs.** Кожен `data-post-id`, який ви передаєте в launcher, стає FastComments URL ID. Якщо ваші post IDs — це CMS‑ідентифікатори статей, зафіксуйте, як вони генеруються, щоб ви могли передавати ті ж значення у FastComments.
- **Your SSO user list.** Зокрема значення `primary_key` і `user_name`, які ви зареєстрували в OpenWeb. Авторство коментаря співставляється за іменем користувача під час імпорту, тому ви хочете передавати ті ж імена користувачів у payload SSO FastComments.
- **Your moderator list and roles.** Облікові записи адміністраторів, модераторів і журналістів, і які розділи кожен модерує.
- **Your moderation configuration.** Політика сайту (approve all, publish and moderate, require approval), переваги per‑article, список заборонених слів, вимкнені та забанені користувачі.
- **Custom CSS and theme settings.** Експортуйте все, що маєте в Admin Panel, щоб ви могли відтворити це на сторінці налаштувань FastComments widget.
- **Where the launcher lives in your templates**, включаючи будь‑які сторінки, що запускають Reactions, Topic Tracker, Spotlight, Notification Bell або Standalone Ad без Conversation.

### AI Assisted Migration

FastComments provides an [LLM Kit and MCP server to speed up the migration](https://docs.fastcomments.com/guide-llm-kit.html).

### How OpenWeb Post IDs Map to FastComments URL IDs

FastComments прив’язує гілку коментаря до `urlId`. За замовчуванням URL ID — це очищений URL сторінки, але ви можете задати будь‑який рядок, і саме це робить імпортер OpenWeb: він читає колонку `post_id` і використовує її як FastComments URL ID для кожного коментаря в цій статті. Він також зберігає колонку `url` як відображуваний URL, щоб посилання модерації та листи‑сповіщення вказували на правильну сторінку.

Отже, правило для ваших шаблонів таке: де б ви не передавали `data-post-id="POST_ID"` і `data-post-url="ARTICLE_URL"` в OpenWeb, передайте `urlId: 'POST_ID'` і `url: 'ARTICLE_URL'` в FastComments. Імпортовані гілки збігаються з живими гілками без перенаправлень і без переписування URL. Дивіться <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">документацію про URL ID</a>.

Якщо ви хочете надалі ключувати гілки за URL замість post ID, спочатку імпортуйте, а потім використайте інструмент Migrate Comments у Manage Data, щоб масово перемістити гілки з post ID на URL.

### The Feature Map

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Примітки |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | За замовчуванням живе. Нові коментарі згортатимуться за кнопкою "Показати N нових коментарів", або з’являтимуться миттєво за допомогою `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Імпорт зберігає `likes_count` та `dislikes_count`. Стиль у вигляді серця та опція "вимкнути голосування" є налаштуваннями. |
| Reactions (article-level icons) | Page Reacts | Налаштовуваний набір іконок на сторінці, запам’ятовується для кожного користувача. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` обмежує глибину. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` встановлює значення за замовчуванням для сайту або шаблону URL. |
| User profiles | User profiles | Аватар, біо, бейджі, карма, активність, приватні повідомлення. Працює для SSO користувачів. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Встановлюється у SSO payload. Не потрібен запит до бекенду. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Модератори закріплюють з віджету або панелі. Шаблон AI‑агента закріплює коментарі з найвищим голосуванням. |
| In Conversation Polls | Polls on comments | Від 2 до 10 варіантів, дати закриття, режим конфіденційності, обмеження для створювача. |
| Ask Me Anything formats | No dedicated product | Запускається як гілка з SSO користувачем автора, позначеним, і питанням, закріпленим. |
| Live Blog | No 1:1 equivalent | Існує віджет Live Chat та коментарі в чат‑режимі. Редакційне живе блогу залишається у вашій CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Користувачі підписуються на сторінку, а не на тему чи автора. Немає підписки між статтями. |
| Notification Bell | Notification bell in the widget | Відповіді, згадки, активність гілки, голоси, підписки, бейджі, приватні повідомлення. |
| Email notifications | Email notifications with templates | Опція підписки для кожного користувача через SSO прапорці. Кастомні шаблони, брендований відправник. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC‑SHA256 payload) | Не потрібно викликати register‑user. Підписуйте payload на сервері, передайте його у віджет. |
| Third‑party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Той самий payload. Ваш бекенд підписує його після входу користувача. |
| Identity (OpenWeb registration screens) | Magic‑link login, Simple SSO | Читачі входять за посиланням у електронній пошті. Без паролів. |
| Moderation policy per article | Customization rules per URL ID pattern | Режим схвалення, спам‑фільтр та інше змінюються за шаблонами `*/section/*`. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | Агенти стартують у режимі dry run і можуть вимагати схвалення людини. |
| Restricted words | Word blacklist customizable by locale | ~450 типових фраз, редагованих. |
| User muting | Block User | Блокування окремого читача з меню коментаря. |
| Bans | Bans | Постійне, з таймером, тіньове, за хешованим IP, з урахуванням псевдонімів. |
| Moderation Panel | Moderate Comments dashboard | Фільтри, масові дії з відміною, групи модерації, дайджести електронною поштою з однокліковим схваленням. |
| Notification Webhook | Webhooks | Створення, оновлення, видалення коментаря. Немає webhook для сповіщень per user. |
| Engagement dashboard | Analytics | Онлайн користувачі, топ‑сторінки, завантаження сторінок, коментарі, голоси, акаунти за день. Без звітності про рекламний дохід. |
| In‑conversation ads, Standalone Ad | None | FastComments не показує рекламу. Ви зберігаєте власний рекламний стек навколо віджету. |
| Social Reviews (star ratings) | Ratings and Reviews | Окремий продукт в межах того ж акаунту. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Перенаправлення, кероване активністю коментарів. |
| Comment Counter | Comment count widgets | Одинарний та масовий. |
| Export Comments API | CSV export, API, webhooks | Експорт з дашборду в будь‑який час. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com зберігає дані в ЄС. Доступна DPA. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Нативний UI, SSO, живі оновлення, гілкування, дії модерації. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` та `destroy()` для SPA. |
</div>

The rest of this section goes through each group in detail.

### Conversation, Votes and Reactions

OpenWeb's Conversation — це гілка в реальному часі. Віджет коментарів FastComments теж: коментарі, правки, видалення, голоси та дії модерації поширюються до всіх, хто переглядає гілку (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). За замовчуванням нові коментарі від інших людей з’являються за кнопкою "Показати 2 нових коментаря", щоб сторінка не стрибала під читачем. Для живих подій встановіть `showLiveRightAway`, щоб вони рендерилися миттєво, і `newCommentsToBottom`, якщо ви хочете, щоб вони текли вниз, як у чаті.

Likes і dislikes стають голосами "за" і "проти". Імпортер зберігає обидві кількості на кожному коментарі. Якщо ваша спільнота звикла до одного лайка, переключіть стиль голосування на серця у налаштуваннях віджету. Голосування можна також повністю вимкнути.

OpenWeb Reactions — окремий віджет з двома‑чотирма позначеними іконками на статті (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Еквівалент FastComments — Page Reacts: налаштовуваний набір реакційних зображень, прикріплених до віджету коментаря, запам’ятовується на сторінці та для кожного користувача (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Кількість реакцій не входить до експорту коментарів OpenWeb, тому вони стартують з нуля.

Сортування мапиться безпосередньо. Значення `data-sort-by` OpenWeb — best, newest і oldest — відповідають Most Relevant, Newest First і Oldest First. Встановіть за замовчуванням за допомогою `defaultSortDirection` (`MR`, `NF`, `OF`) у коді або в правилі кастомізації. Читачі можуть перемикатися у віджеті.

`data-read-only="true"` стає `readonly: true`, що блокує нові коментарі, голоси, правки та видалення. `data-post-staleness-days` не має прямого еквіваленту, але правило кастомізації може застосовувати `readonly` до шаблону URL ID, і ви також можете перемикати його у шаблонах залежно від віку статті. `data-messages-count` — це розмір сторінки, задається у налаштуваннях віджету від 10 до 200 коментарів.

### Replies and Threading

FastComments підтримує необмежену глибину за замовчуванням; `maxReplyDepth` обмежує її (`1` дає плоску двохрівневу структуру). CSV OpenWeb містить колонки `parent_id` і `parent_comment_id`. Імпортер читає `parent_comment_id` і відновлює дерево відповідей у повній глибині, тому відповідь на відповідь залишається під своїм безпосереднім батьком, з автором, міткою часу, голосами, кількістю скарг і станом схвалення без змін. Відповіді зв’язуються навіть коли вони з’являються до їх батька у файлі, або коли батько був імпортований з попереднього вікна експорту. Відповідь, у якої батька немає в жодному експорті, стає коментарем верхнього рівня. Ідентифікатор повідомлення OpenWeb зберігається в кожному коментарі, тому повторний імпорт старого плоского імпорту «підв’язує» його на місці.

### User Profiles and Badges

FastComments користувачі, включаючи SSO‑користувачів, отримують профіль з аватаром, відображуваним ім’ям, біо, соціальними посиланнями, бейджами, кармою, кількістю коментарів, публічним стрічкою активності та приватними повідомленнями (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Кожну зі сторінок активності, коментарів профілю та DM‑поверхонь можна вимкнути per‑user у payload SSO або глобально у конфігурації.

OpenWeb Author Badge вимагав виклику `GET /sso/v1/user/{primary_key}` для автора і розміщення отриманого ID у `data-author-id`. У FastComments ви встановлюєте `displayLabel: 'Author'` (або будь‑яку мітку до 100 символів) у payload SSO, і `isAdmin` або `isModerator` для персоналу. Мітка відображається поруч з їх ім’ям у кожному коментарі. Для більш розширеної системи налаштуйте бейджі у Customize → Badges: зображення або текстові бейджі, які автоматично надаються за порогами (кількість коментарів, голоси «за», закріплені коментарі, статус ветерана, швидкість відповіді) або вручну, і їх можна призначати з payload SSO за допомогою `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Будь‑який модератор може Pin або Unpin коментар з меню коментаря у віджеті або з панелі модерації. Закріплені коментарі поширюються в реальному часі до всіх у гілці. Якщо ви хочете автоматизувати це, функція AI Agents постачає шаблон Top Comment Pinner, який закріплює коментар верхнього рівня, коли він перевищує поріг голосування (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb In Conversation Polls дозволяє персоналу прикріплювати опитування з 2‑4 варіантами до коментаря верхнього рівня. Polls FastComments також прикріплюються до коментаря, з 2‑10 варіантами, необов’язковою датою закриття, режимом конфіденційності (анонімний, лише адміністратори, всі) і режимом «голосувати, щоб побачити результати». Ви обираєте, хто може створювати опитування (вимкнено, адміністратори та модератори, всі) і чи можуть анонімні читачі голосувати. Опитування також доступні у публічному API для створення їх з вашої CMS.

OpenWeb запускав формати Ask Me Anything. FastComments не має окремого Q&A продукту. Практичний замінник — це звичайна гілка на спеціальному URL ID: SSO‑користувач гостя має `displayLabel`, ви закріплюєте вступний коментар, читачі задають питання у коментарях верхнього рівня, гість відповідає в гілці, а сповіщення про згадки та відповіді повертають їх назад. Після закриття вікна встановіть `noNewRootComments`, щоб продовжували лише відповіді.

Community Spotlight (збирач електронних листів, лічильник і редирект‑карти OpenWeb) не має еквіваленту. Віджет підтримує кастомний HTML‑заголовок над полем вводу коментаря через `headerHTML`, що покриває заклик до дії, але не форму захоплення електронної пошти.

### Live Blog

Немає FastComments Live Blog. Live Blog OpenWeb — це редакційний продукт: репортери, призначені в Admin Panel, публікують оновлення з вбудованими посиланнями, твітами та відео, а читачі слідкують у реальному часі (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Що FastComments пропонує для живого покриття, — це сторона читача: віджет Live Chat (`embed-live-chat.min.js`) для потокового чату і віджет коментаря в чат‑режимі (`showLiveRightAway` плюс `newCommentsToBottom`) поряд з вашою живою трансляцією. Для самих редакційних оновлень видавці, які залишаються на OpenWeb, зберігають їх у своїй CMS або окремому інструменті live‑blog і вбудовують FastComments нижче для обговорення. Медійні вбудовування (YouTube, SoundCloud та інші) підтримуються всередині коментарів, тому оновлення персоналу, розміщені як коментарі, несуть багаті медіа.

### Topic Tracker, Notifications and Email

Topic Tracker OpenWeb дозволяє читачу слідкувати за темами та авторами, отримуючи сповіщення, коли нові статті відповідають (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments не має підписки на теми чи авторів між статтями. Читачі підписуються на сторінку через сповіщувальний дзвінок і отримують оновлення для цієї гілки, з частотою, обраною per‑subscription: кожну хвилину, щогодинний дайджест або щоденний дайджест. Якщо вам важливе крос‑статейне слідкування для утримання аудиторії, дайте нам знати — ця функція в нашій дорожній карті.

Все інше в Notification Bell мапиться. Віджет має дзвінок, який стає червоним з кількістю непрочитаних і перелічує: відповіді вам, відповіді в гілці, в якій ви коментували, згадки, голоси за ваші коментарі, активність на підписаних сторінках, нагороди бейджами та приватні повідомлення (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Сповіщення в додатку — у реальному часі через WebSocket. Листи‑повідомлення про відповіді та згадки надходять кожну хвилину лише для схвалених коментарів.

Для SSO‑користувачів передайте `optedInNotifications` і `optedInSubscriptionNotifications` у payload, і FastComments оновить їхні налаштування при наступному завантаженні сторінки. Листи потребують електронної адреси у payload. Шаблони листів редагуються per‑type і per‑locale у Customize → Email Templates, і надсилання з вашого домену з DKIM підтримується. Модератори та адміністратори отримують щоденний, щотижневий або щомісячний дайджест з однокліковим схваленням, відповіддю та посиланням на спам.

Notification Webhook OpenWeb надсилає per‑user події сповіщень (`replied-message`, `liked-message`, `topic-by-keyword` тощо) на ваш endpoint. Webhooks FastComments охоплюють ресурс коментаря: створено, оновлено, видалено, з будь‑якою кількістю підписаних endpoint‑ів (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Якщо ви використовували webhook сповіщень, щоб живити власну систему листів, вам доведеться перебудувати цю логіку на події коментаря, або дозволити FastComments надсилати листи.

### SSO: From codeA/codeB to a Signed Payload

Handshake OpenWeb має шість кроків: чекати `spot-im-api-ready`, OpenWeb генерує `codeA`, ваш клієнт надсилає його вашому бекенду, ваш бекенд підтверджує користувача і викликає `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb повертає `codeB`, і ваш клієнт передає `codeB` назад OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Вихід викликає `window.SPOTIM.logout()`.

Secure SSO FastComments не має кругового запиту і не потребує нового endpoint. Коли ви рендерите сторінку для залогіненого користувача, ваш бекенд серіалізує користувача, кодує Base64 і підписує HMAC‑SHA256 за допомогою вашого API‑секрету. Віджет надсилає payload у своїх запитах, а FastComments перевіряє підпис (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). У Node:

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

Таймстамп — це мілісекунди епохи, і відхиляється, якщо старший за два дні. Для незалогіненого читача пропустіть три підписані поля і передайте лише `loginURL` (або функцію `loginCallback`), і віджет покаже запит на вхід замість композитора. Повні робочі приклади в Node, Java і PHP у <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">репозначеному сховищі коду</a>.

Користувачі створюються при першому завантаженні сторінки. Ви не реєструєте їх масово. Оскільки імпортер OpenWeb співставляє авторів коментарів за `user_name`, користувач, payload SSO якого містить той самий `username`, отримує свої імпортовані коментарі під час першого завантаження гілки і може їх редагувати чи видаляти далі. Є також API SSO‑користувачів, якщо ви хочете попередньо створити користувачів.

Кожен раз, коли payload надсилається, FastComments оновлює запис користувача, тому змінене відображуване ім’я чи аватар з вашого боку поширюються при наступному перегляді. Встановіть поле в `null`, щоб очистити його.

Якщо ви використовували стороннє SSO OpenWeb через Auth0, Gigya або Piano за допомогою `window.SPOTIM.startSSOForProvider`, потік FastComments такий самий: після того, як ваш провайдер автентифікував користувача, ваш бекенд створює і підписує payload. Немає провайдер‑специфічної інтеграції, яку треба налаштовувати у FastComments.

Інші два варіанти існують. Simple SSO передає об’єкт користувача без підпису з клієнта, для платформ без бекенду, і позначає активність як верифіковану, коли присутня електронна пошта (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 підписує ваш персонал у самій панелі FastComments через Okta, Azure AD або ADFS, з мапінгом ролей, і доступний у корпоративних планах (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

API політики модерації per‑article OpenWeb має чотири значення: `spot_policy`, `approve_all`, `publish_and_moderate` і `require_approval`. FastComments налаштовує ті ж поведінки у Moderation Settings: автоматичне схвалення увімкнено або вимкнено, схвалення потрібне лише для першого коментаря користувача, і авто‑схвалення лише для верифікованих (залогінених або SSO) коментарів. Правила застосовуються на рівні сайту або до шаблону URL ID, наприклад `*/politics/*`, що дозволяє відтворити політику per‑section. Коженний коментар, схвалений чи ні, потрапляє у панель Moderate Comments, тому модель «опублікувати‑потім‑переглянути» є стандартним виглядом (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Імпорт переносить стан модерації. OpenWeb `message_status` зі значенням `approved` імпортується як схвалений і переглянутий; `rejected` імпортується як спам і переглянутий; будь‑яке інше імпортується як не схвалений і не переглянутий, тому з’являється у вашій черзі модерації. `reports_count` стає кількістю скарг коментаря.

Автоматизована модерація у FastComments багаторівнева, а не одинарна система типу Aida:

- Спам‑класифікатор, безперервно навчається, доступний як спільна модель для всіх орендарів або ізольовано для вашого орендаря, з фактором довіри, що розслабляє фільтрацію для довгострокових або часто закріплених користувачів.
- Додаткова LLM‑перевірка спаму на тарифі Flex (доступні відкриті моделі типу GLM‑5.3)
- Модерація зображень з низькою, середньою або високою чутливістю для завантажених зображень.
- Локалізований чорний список слів приблизно 450 типових фраз, редагований, який маскує збіги зірочками. Ось куди йдуть ваші обмежені слова OpenWeb.
- Пороги скарг, які автоматично приховують коментар після N скарг.
- Запобігання повторним та майже дублюючим повідомленням, завжди ввімкнено.
- AI Agents: подієві агенти з явним allowlist інструментів (позначити спам, схвалити, заблокувати, закріпити, попередити DM, бан, нагородити бейдж, відповісти). Кожен агент стартує в dry run, чутливі інструменти можуть бути під контролем людського схвалення, і кожна дія журналюється з обґрунтуванням і рівнем впевненості.

OpenWeb User Muting API дозволяє одному SSO‑читачу заглушити іншого. FastComments еквівалент — Block User у меню коментаря, доступний будь‑якому залогіненому читачу. Бан — це дія модератора: постійний або на певний час, за бажанням тіньовий бан (користувач бачить свій коментар, а інші ні), за хешованим IP, з урахуванням псевдонімів електронної пошти. Список забанених користувачів можна шукати за електронною поштою, ім’ям, модератором і коментарем, який викликав бан.

Панель Moderate Comments підтримує фільтри (потрібен перегляд, потрібне схвалення, спам, позначені, від забанених користувачів) і текстовий пошук, масові дії з відміною та паузою, «вибрати всі відповідні» для дуже великих черг, групи модерації, щоб ваш спортивний деск бачив лише спортивні гілки, журнали per‑comment, які показують, чому лист був чи не був надісланий, і подільні посилання з фільтрами. Модератори мають лише панель; вони не можуть змінювати налаштування чи імпортувати дані.

### Analytics

FastComments Analytics показує користувачів онлайн зараз на ваших сайтах і per‑page, топ‑сторінки за кількістю коментарів або живих читачів, та щоденні ряди за завантаженнями сторінок, коментарями, голосами і створеними акаунтами (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Статистика модераторів окрема. Показники майже в реальному часі, затримка максимум одна хвилина, і кожне завантаження сторінки рахується, а не вибірково.

Того, чого ви не знайдете, — це будь‑яка інформація про заповнення реклами, CPM чи дохід, бо реклами немає. Якщо дашборд OpenWeb був вашим джерелом звітності про залучення‑до‑доходу, ця звітність переходить до вашого власного рекламного стеку.

### Monetization

OpenWeb розміщує рекламу всередині та навколо Conversation і пропонує Standalone Ad unit, з кампаніями, налаштованими через ваш контакт в OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments не показує рекламу у віджеті, не має поділу доходу і не завантажує сторонні рекламні чи трекінгові скрипти. Віджет — це iframe, який ви розміщуєте; рекламні слоти над і під ним — ваші і працюють через те, що ви вже використовуєте.

Компроміс явний: ви втрачаєте те, що OpenWeb вам платив, і отримуєте фіксовану, передбачувану вартість і віджет, який не додає рекламних запитів до вашої сторінки. Брендування прибирається у планах Flex і Pro, а white‑labeling доступний у Pro і Enterprise.

### Data Export and Privacy

Весь експорт даних коментарів з дашборду FastComments у CSV доступний у будь‑який час, з датами у форматі UTC ISO, і ті ж дані доступні через API. Webhooks охоплюють постійний синхронізм. Файли імпорту видаляються з FastComments одразу після завершення імпорту.

Для GDPR та CCPA OpenWeb надає API експорту та видалення, де видалені користувачі залишають свої коментарі прив’язаними до випадкового гостьового акаунту (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments підтримує запити на експорт та видалення даних, пропонує Data Processing Agreement, і працює в окремому EU‑розгортанні за адресою <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> з даними, реплікованими лише в межах точок присутності EU. Створіть акаунт там, якщо ваші читачі в Європі. У EU‑регіоні заборони AI‑агентів завжди потребують людського схвалення, щоб відповідати DSA статті 17.

Дані коментарів у глобальному розгортанні реплікуються між регіонами, включаючи вузолійський вузол, а віджет подається з власного DNS та CDN FastComments. Скрипт embed — близько 35 KB стисло в мережі.

### Mobile SDKs

OpenWeb постачає Android, iOS і React Native SDKs з Conversation, Articles, Authentication, Notifications, Reactions і In Conversation Polls. FastComments постачає нативні <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> і <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> бібліотеки з гілками коментарів, живими оновленнями через WebSocket, Secure SSO, голосуванням, згадками, завантаженням зображень, діями модерації (скарги, закріплення, блокування, блокування), темізацією, режимом live‑chat і компонентом соціальної стрічки. EU‑регіон — це прапорець конфігурації. Окремого рекламного SDK немає, бо реклами немає.

### Embed and SPA Integration

OpenWeb launcher і container:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments еквівалент:

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

Ваш tenant ID знаходиться на <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">сторінці облікових даних</a>, коли у вас є акаунт. `data-article-tags` не має еквіваленту, оскільки немає підписки на теми; хештеги всередині коментарів — це інша функція.

Для нескінченного скролу та SPA OpenWeb Virtual Pages підходить один контейнер на статтю. У FastComments ви викликаєте `FastCommentsUI(element, config)` per‑thread, а потім `instance.update(newConfig)` для заміни URL ID або `instance.destroy()` для видалення (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Бібліотеки React, Vue, Angular і SolidJS обробляють це, коли змінюються пропси конфігурації. Колбеки життєвого циклу (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) замінюють `spot-im-*` DOM‑події, які ви слухали.

Лічильники коментарів на індексних сторінках використовують віджет лічильника коментарів, одиничний або масовий. Для SEO коментарі рендеряться безпосередньо в сторінці для сканерів пошукових систем, а не всередині iframe, тому немає SEO‑API‑виклику для налаштування.

### Step-by-Step Cutover

**1. Create the account and configure the basics.** Зареєструйтесь на fastcomments.com або eu.fastcomments.com. Встановіть налаштування модерації, чорний список слів, стиль голосування, сортування за замовчуванням і кастомний CSS у сторінці налаштувань віджету. Додайте модераторів і групи модерації. Якщо у вас багато адміністраторів, підтримка імпортує їх за вас.

**2. Run a first import.** Перейдіть у <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, виберіть OpenWeb (.csv) і завантажте. Імпорт працює у фоні; сторінка показує кількість рядків і статус, і ви отримуєте лист, коли він завершиться (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Кожен коментар зберігає свій OpenWeb message ID як external ID, тому повторний імпорт оновлює існуючі коментарі замість створення дублів.

**3. Verify counts.** Порівняйте кількість рядків у завданні з вашим експортом. Відкрийте кілька URL ID з високим трафіком у панелі модерації і швидко перевірте авторів, дати, підсумки голосів і стани схвалення. Переконайтеся, що відхилені коментарі позначені як спам, а очікуючі — у черзі.

**4. Build the SSO payload.** Реалізуйте код підпису, наведений вище, у вашому бекенді, використовуючи ті ж `id` і `username`, які ви використовували в OpenWeb. Протестуйте на тестовій сторінці: імпортовані коментарі користувача мають виглядати його, а редагування та видалення мають з’являтися в його меню коментаря.

**5. Swap the embed on a staging template.** Замініть launcher і container на snippet FastComments, зіставляючи `data-post-id` → `urlId` і `data-post-url` → `url`. Видаліть `window.SPOTIM.logout()` і `spot-im-*` слухачі, або зіставте їх з колбеками. Додайте ваш CSS у правило кастомізації, а не у код, щоб він тестувався у кожному випуску FastComments.

**6. Run in parallel.** Розмістіть FastComments у розділі або у відсотку статей, залишаючи OpenWeb на решті. На стороні OpenWeb нічого не потрібно змінювати. Слідкуйте за чергою модерації та сторінкою аналітики. Коментарі, залишені на сторінках FastComments під час цього вікна, не будуть у вашому експорті OpenWeb, тому плануйте фінальний імпорт до їх появи, а не після.

**7. CSP and DNS.** Якщо ви використовуєте Content‑Security‑Policy, дозвольте `cdn.fastcomments.com` і `fastcomments.com` (або `eu.fastcomments.com`) для `script-src`, `frame-src` і `connect-src`, і видаліть записи `spot.im` і `openweb.com`, коли launcher буде видалено. Ваш DNS не змінюється. Перенаправлення не потрібні, бо URL ID збігаються.

**8. Final import and go live.** Завантажте ще один експорт OpenWeb, що охоплює період паралельного запуску, завантажте його (повторний імпорт безпечний), потім розгорніть зміну шаблону на всіх сторінках і видаліть launcher, Reactions, Topic Tracker, Spotlight, bell і рекламні контейнери.

**9. Go‑live checklist.**

- Живе коментування видно на продакшн‑статті в двох браузерах.
- SSO вхід, вихід і коментар під реальним акаунтом підписника.
- Модератори отримують дайджест і можуть схвалювати з нього.
- Листи‑повідомлення про відповіді та згадки надходять і посилаються на правильну сторінку.
- Список банів і чорний список слів заповнені.
- Page Reacts і лічильники коментарів відображаються там, де раніше були Reactions і counter.
- CSP‑звіти чисті.
- Останнє порівняння лічильника коментарів між вашим експортом і дашбордом.

### What You Lose and What Is Different

Будьте прямими щодо прогалин:

- **Live Blog.** Немає еквіваленту. Тримайте його у вашій CMS або інструменті live‑blog і розміщуйте FastComments під ним.
- **Topic Tracker.** Немає крос‑статейного слідкування за темами або авторами. Тільки підписки на сторінки.
- **Community Spotlight.** Немає продукту CTA‑картки. `headerHTML` дає вам повідомлення над композером, а не форму захоплення електронної пошти.
- **Ad revenue.** Немає. Віджет без реклами за дизайном.
- **Notification webhook.** Webhooks працюють лише на події коментаря, а не на події сповіщення per‑user.
- **Reactions history.** Кількість реакцій на рівні статті не входить у експорт коментаря і стартує з нуля. Ми іноді можемо скрапити їх з вашого сайту.
- **Polls history.** Визначення опитувань і голоси не входять у експорт коментаря; текст коментаря‑опитування імпортується, сам опитування — ні. Ми іноді можемо скрапити їх з вашого сайту.
- **Login model.** Читачі без SSO входять за магічним посиланням замість пароля чи соціальної кнопки за замовчуванням.
- **Human moderation staff.** OpenWeb постачає команду модерації з Aida. FastComments надає інструменти, класифікатори і агентів; люди — ваші.

Що ви отримуєте, у тому ж дусі: віджет, що додає лише один маленький скрипт і не створює рекламних запитів, модерація, яку може вести одна людина для великого сайту за допомогою масових дій і агентів, SSO, що є функцією підпису, а не протоколом, і постачальник, який не під судовим наглядом.

### Timeline and the Free Import Offer

Заплануйте один‑два тижні для видавця з однією інтеграцією SSO і кількома сотнями тисяч коментарів: день‑два на експорт і перший імпорт, кілька днів на SSO і шаблони, вікно паралельного запуску, потім фінальний імпорт і перемикання. Платформа вже працює у такому масштабі: United Cloud керує більше десяти порталами і мільйонами коментарів у FastComments, а itsfoss.com переніс історію в 88 000 коментарів з іншого провайдера через той самий самостійний імпортер.

FastComments імпортує ваш CSV‑експорт OpenWeb безкоштовно, допомагає вам працювати з OpenWeb і FastComments паралельно під час переходу і допомагає з самим процесом міграції, включаючи питання гілкування та співставлення користувачів. Плани Enterprise включають SLA 99.99 % і підтримку з відповіддю протягом однієї години в робочі години. Ціноутворення Flex за використанням доступне для сайтів, які хочуть стартувати без контракту.

<a href="https://fastcomments.com/contact-us">Write to us</a> with your export size and your SSO setup and we will come back with a plan.

### In Conclusion

Pull your export today. Remember: the same post IDs become URL IDs, moderation state carries over, and the embed is a straight swap. The places where FastComments differs are listed above so you can decide with the facts in front of you. :)

Cheers!

{{/isPost}}

---