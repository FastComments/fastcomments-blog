[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Як мігрувати з OpenWeb до FastComments у 2026 році[/postlink]

{{#unless isPost}}
A feature-by-feature guide for publishers moving off OpenWeb (formerly Spot.IM): what maps 1:1, what is different, how the CSV import works, how the SSO handshake changes, and a step-by-step cutover plan.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> У цій статті міститься технічний жаргон

Цей посібник призначений для керівників продукту та інженерії, а також менеджерів спільнот, які сьогодні працюють з OpenWeb і потребують плану переходу. Він проходить по кожному елементу OpenWeb, називає еквівалент FastComments і чітко вказує, де немає 1:1 відповідності.

### Чому саме зараз

30 вересня 2026 р. Тель-Авівський районний суд постановив про призначення тимчасового отримувача над OpenWeb за проханням його кредитора, Mars Growth Capital, який має першочергову заставу на активи та рахунки компанії і намагається її виконати щодо ізраїльських активів, банківських рахунків та інтелектуальної власності OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Наступного дня був призначений тимчасовий довірений, адвокат Ехуд Гіндес (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Раніше у 2026 р. Microsoft, один із найбільших клієнтів OpenWeb, завершив співпрацю та утримав платежі через спір щодо трафіку, який OpenWeb відхиляє (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb заявляє, що платформа продовжує працювати. Судовий нагляд, кредитор, який здійснює заставу на IP, від якого залежить ваш віджет коментарів, і довірений, чия задача — зберегти вартість активів, не є умовами, які видавництво хоче мати під час основної взаємодії. Якщо ви ще не завантажили повний експорт даних, зробіть це спочатку, сьогодні, перед будь‑яким іншим кроком у цьому посібнику.

### Що потрібно підготувати перед початком

Зберіть це перед тим, як торкатися коду:

- **Ваш експорт коментарів OpenWeb.** OpenWeb надає Export API (v4), який генерує zip‑файли CSV, максимум 100 000 коментарів у файлі, з вікнами діапазону дат до одного місяця та посиланнями для завантаження, які закінчуються через тиждень (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Запросіть усі потрібні вікна і збережіть файли в безпечному місці. Якщо ваш контакт в OpenWeb раніше надавав CSV‑експорт через Admin Panel, збережіть і його. FastComments імпортер читає CSV OpenWeb з колонками `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` та `url`.
- **Ваш Spot ID та список ID статей.** Кожен `data-post-id`, який ви передаєте в лончер, стає FastComments URL ID. Якщо ваші ID статей — це CMS‑ідентифікатори, зафіксуйте, як вони генеруються, щоб можна було передавати ті ж значення у FastComments.
- **Ваш список користувачів SSO.** Зокрема значення `primary_key` та `user_name`, які ви зареєстрували в OpenWeb. Авторство коментаря співставляється за іменем користувача під час імпорту, тому треба передавати ті ж імена у SSO‑payload FastComments.
- **Ваш список модераторів та ролі.** Облікові записи адміністраторів, модераторів і журналістів, а також розділи, які вони модерують.
- **Ваші налаштування модерації.** Політика сайту (автоматичне схвалення, публікація та модерація, вимога схвалення), переваги per‑article, список заборонених слів, вимкнені та заблоковані користувачі.
- **Користувацькі CSS та налаштування теми.** Експортуйте все, що є в Admin Panel, щоб потім відтворити у FastComments.
- **Де розташований лончер у ваших шаблонах**, включаючи будь‑які сторінки, що використовують Reactions, Topic Tracker, Spotlight, Notification Bell або Standalone Ad без Conversation.

### Як OpenWeb Post IDs відображаються у FastComments URL IDs

FastComments прив’язує гілку коментарів до `urlId`. За замовчуванням URL ID — це очищений URL сторінки, але ви можете задати будь‑який рядок, і саме це робить імпортер OpenWeb: він читає колонку `post_id` і використовує її як FastComments URL ID для кожного коментаря в цій статті. Він також зберігає колонку `url` як відображуваний URL, щоб посилання в модерації та листи‑сповіщення вказували на правильну сторінку.

Отже, правило для ваших шаблонів таке: де б ви не передавали `data-post-id="POST_ID"` і `data-post-url="ARTICLE_URL"` в OpenWeb, передайте `urlId: 'POST_ID'` і `url: 'ARTICLE_URL'` у FastComments. Імпортовані гілки збігаються з живими без перенаправлень і без переписування URL. Дивіться <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">документацію про URL ID</a>.

Якщо ви хочете надалі прив’язувати гілки за URL замість ID статті, спочатку імпортуйте, а потім використайте інструмент Migrate Comments у Manage Data, щоб масово перемістити гілки з ID статті на URL.

### Карта функцій

| OpenWeb | FastComments | Примітки |
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

The rest of this section goes through each group in detail.

### Conversation, Votes and Reactions

OpenWeb's Conversation is a real-time thread. The FastComments comment widget is too: comments, edits, deletions, votes and moderation actions are pushed to everyone viewing the thread (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). By default new comments from other people appear behind a "Show 2 New Comments" button so the page does not jump under the reader. For live events set `showLiveRightAway` so they render immediately, and `newCommentsToBottom` if you want them to flow downward like a chat.

Likes and dislikes become up and down votes. The importer keeps both counts per comment. If your community is used to a single like, switch the vote style to hearts in the widget customization page. Voting can also be turned off entirely.

OpenWeb Reactions is a separate widget with two to four labeled icons on the article (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). The FastComments equivalent is Page Reacts: a configurable set of reaction images attached to the comment widget, remembered per page and per user (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Reaction counts are not part of the OpenWeb comment export, so they start from zero.

Sorting maps directly. OpenWeb's `data-sort-by` values best, newest and oldest correspond to Most Relevant, Newest First and Oldest First. Set the default with `defaultSortDirection` (`MR`, `NF`, `OF`) in code or in a customization rule. Readers can switch in the widget.

`data-read-only="true"` becomes `readonly: true`, which blocks new comments, votes, edits and deletes. `data-post-staleness-days` has no direct equivalent, but a customization rule can apply `readonly` to a URL ID pattern, and you can also flip it from your templates based on article age. `data-messages-count` is the page size, set in the widget customization page anywhere from 10 to 200 comments.

### Replies and Threading

FastComments supports unlimited nesting by default; `maxReplyDepth` limits it (`1` gives a flat two-level structure). The OpenWeb CSV includes `parent_id` and `parent_comment_id` columns. The current importer imports every row as a top-level comment on its page, in date order, with author, timestamp, votes, flag count and approval state intact. It does not rebuild the parent-child tree. If your threads are reply-heavy, tell us when you send the export and we will handle threading as part of the import rather than leaving you with a flattened thread.

### User Profiles and Badges

FastComments users, including SSO users, get a profile with avatar, display name, bio, social links, badges, karma, comment count, a public activity feed, and direct messages (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Each of the activity, profile comments and DM surfaces can be disabled per user in the SSO payload or globally in configuration.

OpenWeb's Author Badge requires you to call `GET /sso/v1/user/{primary_key}` for the author and place the returned ID in `data-author-id`. In FastComments you set `displayLabel: 'Author'` (or any label up to 100 characters) in the user's SSO payload, and `isAdmin` or `isModerator` for staff. The label renders next to their name on every comment. For a richer system, configure badges under Customize, Badges: image or text badges, awarded automatically on thresholds (comment count, upvotes, pinned comments, veteran status, reply speed) or manually, and assignable from the SSO payload with `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Any moderator can Pin or Unpin a comment from the comment menu in the widget or from the moderation dashboard. Pinned comments are pushed live to everyone on the thread. If you want this automated, the AI Agents feature ships a Top Comment Pinner template that pins a top-level comment once it crosses a vote threshold (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb's In Conversation Polls let staff attach a 2 to 4 option poll to a top-level comment. FastComments polls also attach to a comment, with 2 to 10 options, an optional close date, result privacy (anonymous, admins only, everyone), and a "vote to see results" mode. You choose who can create polls (disabled, admins and moderators, everyone) and whether anonymous readers can vote. Polls are also exposed in the public API for creating them from your CMS.

OpenWeb has run Ask Me Anything formats on its platform. FastComments has no separate Q&A product. The practical replacement is a normal thread on a dedicated URL ID: the guest's SSO user carries a `displayLabel`, you pin the intro comment, readers ask in top-level comments, the guest replies in-thread, and mention and reply notifications pull people back. Set `noNewRootComments` after the window closes so only replies continue.

Community Spotlight (OpenWeb's email collector, counter and redirect cards) has no equivalent. The widget supports custom header HTML above the comment input via `headerHTML`, which covers a call to action but not an email capture form.

### Live Blog

There is no FastComments Live Blog. OpenWeb's Live Blog is an editorial product: reporters assigned in the Admin Panel post updates with embedded links, tweets and video, and readers follow along (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

What FastComments offers for live coverage is the reader side: a Live Chat widget (`embed-live-chat.min.js`) for streaming chat, and the comment widget in chat mode (`showLiveRightAway` plus `newCommentsToBottom`) alongside your live coverage. For the editorial updates themselves, publishers moving off OpenWeb keep them in their CMS or a dedicated live blog tool and embed FastComments below for discussion. Media embeds (YouTube, SoundCloud and others) are supported inside comments, so staff updates posted as comments do carry rich media.

### Topic Tracker, Notifications and Email

OpenWeb's Topic Tracker lets a reader follow topics and authors drawn from page metadata and get notified when new articles match (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments has no topic or author follow across articles. Readers subscribe to a page from the notification bell and receive updates for that thread, with the frequency chosen per subscription: every minute, hourly digest or daily digest. If cross-article following matters to your retention numbers, this is a feature you lose.

Everything else in the Notification Bell maps. The widget has a bell that turns red with the unread count and lists: replies to you, replies in a thread you commented in, mentions, upvotes on your comments, activity on subscribed pages, badge awards and direct messages (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In-app notifications are real time over a WebSocket. Reply and mention emails go out every minute for approved comments only.

For SSO users, pass `optedInNotifications` and `optedInSubscriptionNotifications` in the payload and FastComments updates their preferences on the next page load. Emails need an email address in the payload. Email templates are editable per type and per locale under Customize, Email Templates, and sending from your own domain with DKIM is supported. Moderators and admins get a daily, weekly or monthly digest with one-click approve, respond and spam links.

OpenWeb's Notification Webhook posts per-user notification events (`replied-message`, `liked-message`, `topic-by-keyword` and so on) to your endpoint. FastComments webhooks cover the comment resource: created, updated and removed, with as many subscribing endpoints as you want (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). If you were using the notification webhook to feed your own email system, you will rebuild that logic on comment events, or let FastComments send the emails.

### SSO: From codeA/codeB to a Signed Payload

OpenWeb's handshake has six steps: wait for `spot-im-api-ready`, OpenWeb mints `codeA`, your client sends it to your backend, your backend confirms the user and calls `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb returns `codeB`, and your client hands `codeB` back to OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Logout calls `window.SPOTIM.logout()`.

FastComments Secure SSO has no round trip and no new endpoint on your side. When you render the page for a logged-in user, your backend serializes the user, Base64-encodes it, and signs it with HMAC-SHA256 using your API secret. The widget sends the payload with its requests and FastComments verifies the signature (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). In Node:

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

The timestamp is epoch milliseconds and is rejected if it is more than two days old. For a logged-out reader, omit the three signed fields and pass only `loginURL` (or a `loginCallback` function) and the widget shows a login prompt instead of a composer. Full working examples in Node, Java and PHP are in the <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a>.

Users are created on first page load. You do not bulk-register anyone. Because the OpenWeb importer matches comment authors by `user_name`, a user whose SSO payload carries the same `username` claims their imported comments the first time they load a thread and can edit or delete them from then on. There is also an SSO user API if you want to pre-create users.

Each time the payload is sent, FastComments updates the user record from it, so a changed display name or avatar on your side propagates on the next page view. Set a field to `null` to clear it.

If you used OpenWeb's third-party SSO with Auth0, Gigya or Piano via `window.SPOTIM.startSSOForProvider`, the FastComments flow is the same as above: once your provider has authenticated the user, your backend builds and signs the payload. There is no provider-specific integration to configure on the FastComments side.

Two other options exist. Simple SSO passes the user object unsigned from the client, for platforms without a backend, and marks activity as verified when an email is present (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 signs your staff into the FastComments dashboard itself through Okta, Azure AD or ADFS, with role mapping, and is available on enterprise plans (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

OpenWeb's per-article Moderation Policy API has four values: `spot_policy`, `approve_all`, `publish_and_moderate` and `require_approval`. FastComments configures the same behaviors in Moderation Settings: automatic approval on or off, approval required only for a user's first comment, and auto-approve only verified (logged-in or SSO) comments. Rules apply site-wide or to a URL ID pattern such as `*/politics/*`, which is how you reproduce per-section policy. Every comment, approved or not, lands in the Moderate Comments dashboard, so the publish-then-review model is the default view there (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Import carries moderation state across. OpenWeb `message_status` of `approved` imports as approved and reviewed; `rejected` imports as spam and reviewed; anything else imports unapproved and unreviewed so it appears in your moderation queue. `reports_count` becomes the comment's flag count.

Automated moderation on FastComments is layered rather than a single system like Aida:

- A spam classifier, continuously trained, available as a shared model across all tenants or isolated to your tenant, with a trust factor that relaxes filtering for long-standing or often-pinned users.
- An optional ChatGPT 4 spam check on Flex billing.
- Image content moderation at low, medium or high sensitivity for uploaded images.
- A word blacklist of roughly 450 default phrases, editable, that masks matches with asterisks. This is where your OpenWeb restricted words go.
- Flag thresholds that auto-hide a comment after N reports.
- Repeated and near-duplicate message prevention, always on.
- AI Agents: event-driven agents with an explicit tool allowlist (mark spam, approve, lock, pin, warn by DM, ban, award badge, reply). Every agent starts in dry run, sensitive tools can be gated behind human approval, and every action is logged with a justification and confidence score.

OpenWeb's User Muting API lets one SSO reader mute another. The FastComments equivalent is Block User in the comment menu, available to any logged-in reader. Bans are a moderator action: permanent or for a set duration, optionally a shadow ban (the user sees their comment post but nobody else does), optionally by hashed IP, with plus-aliases of an email treated as one address. The banned users list is searchable by email, name, moderator and the comment that triggered the ban.

The Moderate Comments dashboard supports filters (needing review, needing approval, spam, flagged, from banned users) and text search, bulk actions with undo and pause, "select all matching" for very large queues, moderation groups so your sports desk only sees sports threads, per-comment logs that show why an email did or did not go out, and shareable filtered links. Moderators have the dashboard only; they cannot change settings or import data.

### Analytics

FastComments Analytics shows users online right now across your sites and per page, top pages by comments or by live readers, and per-day series for page loads, comments, votes and accounts created (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Moderator statistics are separate. Counts are near real time, delayed by at most a minute, and every page load is counted rather than sampled.

What you will not find is anything about ad fill, CPM or revenue, because there are no ads. If OpenWeb's dashboard was your source for engagement‑to‑revenue reporting, that reporting moves to your own ad stack.

### Monetization

OpenWeb places ads inside and around the Conversation and offers a Standalone Ad unit, with campaigns set up through your OpenWeb contact (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments does not run ads in the widget, does not run a revenue share, and does not load third‑party ad or tracking scripts. The widget is an iframe you place; the ad slots above and below it are yours and run through whatever you already use.

The trade‑off is explicit: you lose whatever OpenWeb paid you, and you gain a fixed, predictable cost and a widget that does not add ad requests to your page. Branding is removed on Flex and Pro plans, and white labeling is available on Pro and Enterprise.

### Data Export and Privacy

All comment data exports from the FastComments dashboard as CSV at any time, with dates in UTC ISO format, and the same data is available over the API. Webhooks cover ongoing sync. Import files are deleted from FastComments as soon as the import completes.

For GDPR and CCPA, OpenWeb provides an export and delete API where deleted users' comments remain attached to a random guest account (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments supports data export and deletion requests, offers a Data Processing Agreement, and runs a separate EU deployment at <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> with data replicated only within EU points of presence. Create your account there if your readers are in Europe. In the EU region, AI agent bans always require human approval to satisfy DSA Article 17.

Comment data in the global deployment is replicated across regions including a Singapore node, and the widget is served from FastComments' own DNS and CDN. The embed script is under 30 KB on disk and about 6 KB compressed on the wire.

### Mobile SDKs

OpenWeb ships Android, iOS and React Native SDKs with Conversation, Articles, Authentication, Notifications, Reactions and In Conversation Polls. FastComments ships native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> and <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> libraries with threaded comments, live updates over WebSocket, Secure SSO, voting, mentions, image uploads, moderation actions (flag, pin, lock, block), theming, a live chat mode and a social feed component. EU region is a configuration flag. There is no separate ad SDK because there are no ads.

### Embed and SPA Integration

The OpenWeb launcher and container:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

The FastComments equivalent:

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

Your tenant ID is on the <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">embed code page</a> once you have an account. `data-article-tags` has no equivalent since there is no topic following; hashtags inside comments are a different feature.

For infinite scroll and single‑page apps, OpenWeb's Virtual Pages approach is one container per article. In FastComments you call `FastCommentsUI(element, config)` per thread and later `instance.update(newConfig)` to swap the URL ID or `instance.destroy()` to remove it (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). The React, Vue, Angular and SolidJS libraries handle this when the config prop changes. Lifecycle callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) replace the `spot-im-*` DOM events you were listening for.

Comment counts on index pages use the comment count widget, single or bulk. For SEO, comments are rendered directly into the page for search engine crawlers rather than inside the iframe, so there is no SEO API call to configure.

### Step-by-Step Cutover

**1. Create the account and configure the basics.** Sign up on fastcomments.com or eu.fastcomments.com. Set your moderation settings, word blacklist, vote style, default sort, and custom CSS in the widget customization page. Add moderators and moderation groups. If you have many admin users, support imports them for you.

**2. Run a first import.** Go to <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, choose OpenWeb (.csv) and upload. The import runs as a background job; the page shows row counts and status, and you receive an email when it completes (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Each OpenWeb message ID becomes the FastComments comment ID, so re‑running an import does not create duplicates.

**3. Verify counts.** Compare the job's row count against your export. Open a few high‑traffic URL IDs in the moderation dashboard and spot check authors, dates, vote totals and approval states. Confirm rejected comments show as spam and pending ones sit in the queue.

**4. Build the SSO payload.** Implement the signing code above in your backend, using the same `id` and `username` you used with OpenWeb. Test with a staff account on a staging page: the user's imported comments show as theirs, and edit and delete appear in their comment menu.

**5. Swap the embed on a staging template.** Replace the launcher and container with the FastComments snippet, mapping `data-post-id` to `urlId` and `data-post-url` to `url`. Remove `window.SPOTIM.logout()` and `spot-im-*` listeners, or map them to the callbacks. Apply your CSS in a customization rule rather than in code so it is tested on every FastComments release.

**6. Run in parallel.** Put FastComments on a section or a percentage of articles while OpenWeb stays on the rest. Nothing on the OpenWeb side needs to change. Watch the moderation queue and the analytics page. Readers commenting on FastComments pages during this window are not in your OpenWeb export, so plan the final import before they start, not after.

**7. CSP and DNS.** If you run a Content‑Security‑Policy, allow `cdn.fastcomments.com` and `fastcomments.com` (or `eu.fastcomments.com`) for `script-src`, `frame-src` and `connect-src`, and remove the `spot.im` and `openweb.com` entries once the launcher is gone. Nothing changes on your own DNS. No redirects are needed because the URL IDs match.

**8. Final import and go live.** Pull one more OpenWeb export covering the parallel‑run window, upload it (re‑import is safe), then deploy the template change across all pages and remove the launcher, Reactions, Topic Tracker, Spotlight, bell and ad containers.

**9. Go‑live checklist.**

- Live commenting visible on a production article from two browsers.
- SSO login, logout and a comment under a real subscriber account.
- Moderators receive the digest and can approve from it.
- Reply and mention emails arrive and link to the correct page.
- Bans list and word blacklist populated.
- Page Reacts and comment counts rendering where Reactions and the counter used to be.
- CSP reports clean.
- One last comment‑count comparison between your export and the dashboard.

### What You Lose and What Is Different

Being direct about the gaps:

- **Live Blog.** No equivalent. Keep it in your CMS or a live‑blogging tool and put FastComments under it.
- **Topic Tracker.** No cross‑article topic or author following. Only page subscriptions.
- **Community Spotlight.** No CTA card product. `headerHTML` gives you a message above the composer, not an email capture.
- **Ad revenue.** None. The widget is ad‑free by design.
- **Notification webhook.** Webhooks are on comment events, not per‑user notification events.
- **Threading on import.** The current importer flattens replies to top‑level comments on the same page. Tell us if you need the tree rebuilt.
- **Reactions history.** Article‑level reaction counts are not in the comment export and start fresh.
- **Polls history.** Poll definitions and votes are not in the comment export; the poll's comment text imports, the poll does not.
- **Login model.** Readers without SSO log in by magic link instead of a password or a social login button.
- **Human moderation staff.** OpenWeb bundles a moderation team with Aida. FastComments provides tooling, classifiers and agents; the humans are yours.

What you gain, in the same spirit: a widget that adds one small script and no ad requests, moderation that one person can run for a large site with bulk actions and agents, SSO that is a signing function rather than a protocol, and a vendor that is not under court supervision.

### Timeline and the Free Import Offer

Plan one to two weeks for a publisher with one SSO integration and a few hundred thousand comments: a day or two on the export and first import, a few days on SSO and templates, a parallel‑run window, then the final import and switch. The platform already carries this scale: United Cloud runs more than ten portals and millions of comments on FastComments, and itsfoss.com moved an 88 000‑comment history from another provider through the same self‑service importer.

FastComments imports your OpenWeb CSV export for free, helps you run OpenWeb and FastComments in parallel during the cutover, and helps with the migration itself, including threading and user‑matching questions. Enterprise plans include an SLA, support replies within one hour during business hours, and the option of an Isolated Cloud deployment in your own cloud account (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Flex usage‑based pricing is available for sites that want to start without a contract.

Write to <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> with your export size and your SSO setup and we will come back with a plan.

### In Conclusion

Pull your export today. The rest of the migration is mechanical: the same post IDs become URL IDs, the same usernames claim their comments through SSO, moderation state carries over, and the embed is a straight swap. The places where FastComments differs are listed above so you can decide with the facts in front of you.

Cheers!

{{/isPost}}

---