[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Как мигрировать с OpenWeb на FastComments в 2026 году[/postlink]

{{#unless isPost}}
Пошаговое руководство «функция за функцией» для издателей, переходящих с OpenWeb (ранее Spot.IM): что сопоставляется 1:1, что отличается, как работает импорт CSV, как меняется рукопожатие SSO и план пошагового переключения.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> В этой статье содержится технический жаргон

Это руководство предназначено для руководителей продуктов и инженерных команд, а также менеджеров сообществ, которые сегодня используют OpenWeb и нуждаются в плане перехода. Оно проходит по каждому элементу OpenWeb, указывает эквивалент FastComments и явно отмечает, где нет 1:1 соответствия.

### Почему сейчас

30 сентября 2026 г. Тель-Авивский районный суд постановил назначить временного получателя над OpenWeb по запросу её кредитора, Mars Growth Capital, который имеет первоочередное залоговое право на активы и счета компании и собирается принудительно реализовать его в отношении израильских активов, банковских счетов и интеллектуальной собственности OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30 сен</a>). На следующий день был назначен временный попечитель, адв. Эхуд Гиндес (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4 окт</a>). Ранее в 2026 г. Microsoft, один из крупнейших клиентов OpenWeb, прекратил сотрудничество и удержал платежи из‑за спора о трафике, который OpenWeb отвергает (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28 сен</a>).

OpenWeb заявляет, что платформа продолжает работать. Судебный надзор, кредитор, реализующий залоги на ИС, от которой зависит ваш виджет комментариев, и попечитель, задача которого — сохранить стоимость активов, не являются условиями, которые издатель хотел бы видеть в основной рабочей среде. Если вы ещё не сделали полную выгрузку данных, сделайте это сейчас, прежде чем продолжать чтение этого руководства.

### Что вам понадобится перед началом

Соберите всё это, прежде чем менять код:

- **Экспорт комментариев из OpenWeb.** OpenWeb предоставляет Export API (v4), который генерирует zip‑файлы CSV, не более 100 000 комментариев в файле, с окнами дат до одного месяца и ссылками для скачивания, которые истекают через неделю (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Запросите все нужные окна и храните файлы в безопасном месте. Если ваш контакт в OpenWeb ранее предоставлял CSV‑экспорт из админ‑панели, сохраните и его. Импортёр FastComments читает CSV OpenWeb с колонками `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` и `url`.
- **Ваш Spot ID и список ID статей.** Каждый `data-post-id`, который вы передаёте в лаунчер, становится FastComments URL ID. Если ваши ID статей — это CMS‑идентификаторы, запомните, как они генерируются, чтобы можно было выдавать те же значения в FastComments.
- **Список пользователей SSO.** В частности значения `primary_key` и `user_name`, которые вы регистрировали в OpenWeb. Авторство комментариев сопоставляется по имени пользователя при импорте, поэтому передайте те же имена в полезную нагрузку SSO FastComments.
- **Список модераторов и их роли.** Учётные записи администраторов, модераторов и журналистов, а также разделы, которые они модерируют.
- **Конфигурацию модерации.** Политика сайта (одобрять всё, публиковать и модерировать, требовать одобрения), переопределения per‑article, список запрещённых слов, заглушённые и забаненные пользователи.
- **Пользовательские CSS и настройки темы.** Экспортируйте всё, что есть в админ‑панели, чтобы потом восстановить в настройках виджета FastComments.
- **Где находится лаунчер в ваших шаблонах**, включая любые страницы, где работают Reactions, Topic Tracker, Spotlight, Notification Bell или Standalone Ad без Conversation.

### Как ID статей OpenWeb сопоставляются с URL ID FastComments

FastComments привязывает ветку комментариев к `urlId`. По умолчанию URL ID — это очищенный URL страницы, но вы можете задать любую строку, и именно так работает импортёр OpenWeb: он читает колонку `post_id` и использует её как FastComments URL ID для каждого комментария этой статьи. Он также сохраняет колонку `url` как отображаемый URL, чтобы ссылки модерации и письма‑уведомления указывали на правильную страницу.

Итак, правило для ваших шаблонов: где бы вы ни передавали `data-post-id="POST_ID"` и `data-post-url="ARTICLE_URL"` в OpenWeb, передайте `urlId: 'POST_ID'` и `url: 'ARTICLE_URL'` в FastComments. Импортированные ветки совпадают с живыми ветками без редиректов и без переписывания URL. См. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">документацию по URL ID</a>.

Если вы хотите в дальнейшем привязывать ветки к URL вместо ID статьи, сначала импортируйте, а затем используйте инструмент Migrate Comments в разделе Manage Data, чтобы массово переместить ветки от ID статьи к URL.

### Карта функций

| OpenWeb | FastComments | Примечания |
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

Остальная часть этого раздела подробно рассматривает каждую группу.

### Conversation, Votes and Reactions

Conversation OpenWeb — это поток в реальном времени. Виджет комментариев FastComments тоже: комментарии, правки, удаления, голоса и действия модерации пушатся всем, кто просматривает ветку (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). По умолчанию новые комментарии от других людей скрыты за кнопкой «Show 2 New Comments», чтобы страница не прыгала под читателем. Для живых событий установите `showLiveRightAway`, чтобы они отображались сразу, и `newCommentsToBottom`, если хотите, чтобы они шли вниз, как в чате.

Лайки и дизлайки становятся голосами «за» и «против». Импортёр сохраняет оба счётчика для каждого комментария. Если ваше сообщество привыкло к единственному лайку, переключите стиль голосования на сердца в настройках виджета. Голосование также можно полностью отключить.

Reactions OpenWeb — отдельный виджет с двумя‑четырьмя помеченными иконками на статье (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Эквивалент FastComments — Page Reacts: настраиваемый набор реакций, прикреплённый к виджету комментариев, запоминается per‑page и per‑user (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Счётчики реакций не входят в экспорт комментариев OpenWeb, поэтому они стартуют с нуля.

Сортировка отображается напрямую. Значения `data-sort-by` OpenWeb (best, newest, oldest) соответствуют Most Relevant, Newest First и Oldest First. Установите значение по умолчанию через `defaultSortDirection` (`MR`, `NF`, `OF`) в коде или в правиле кастомизации. Читатели могут переключать сортировку в виджете.

`data-read-only="true"` становится `readonly: true`, что блокирует новые комментарии, голоса, правки и удаления. `data-post-staleness-days` не имеет прямого эквивалента, но правило кастомизации может применять `readonly` к шаблону URL ID, а также вы можете переключать его из шаблонов в зависимости от возраста статьи. `data-messages-count` — это размер страницы, задаётся в настройках виджета от 10 до 200 комментариев.

### Replies and Threading

FastComments поддерживает неограниченную вложенность по умолчанию; `maxReplyDepth` ограничивает её (`1` даёт плоскую структуру из двух уровней). CSV OpenWeb содержит колонки `parent_id` и `parent_comment_id`. Текущий импортёр импортирует каждую строку как топ‑уровневый комментарий на своей странице, в хронологическом порядке, сохраняя автора, метку времени, голоса, счётчик флагов и статус одобрения. Он **не** восстанавливает дерево родитель‑потомок. Если ваши ветки сильно зависят от ответов, сообщите нам при отправке экспорта, и мы обработаем вложенность в процессе импорта вместо того, чтобы оставлять плоскую структуру.

### User Profiles and Badges

Пользователи FastComments, включая SSO‑пользователей, получают профиль с аватаром, отображаемым именем, биографией, соцсетями, бейджами, кармой, счётчиком комментариев, публичной лентой активности и личными сообщениями (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Каждый из этих элементов можно отключить per‑user в полезной нагрузке SSO или глобально в конфигурации.

Авторский бейдж OpenWeb требует вызова `GET /sso/v1/user/{primary_key}` и размещения полученного ID в `data-author-id`. В FastComments вы задаёте `displayLabel: 'Author'` (или любой ярлык до 100 символов) в полезной нагрузке SSO, а `isAdmin` или `isModerator` — для персонала. Ярлык отображается рядом с именем в каждом комментарии. Для более богатой системы настройте бейджи в разделе Customize → Badges: изображения или текстовые бейджи, автоматически выдаваемые по порогам (кол‑во комментариев, голоса, закреплённые комментарии, статус ветерана, скорость ответов) или вручную, и назначаемые из полезной нагрузки SSO через `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Любой модератор может закрепить (Pin) или открепить (Unpin) комментарий из меню комментария в виджете или из панели модерации. Закреплённые комментарии пушатся в реальном времени всем, кто смотрит ветку. Если хотите автоматизировать, функция AI Agents поставляется с шаблоном Top Comment Pinner, который закрепляет топ‑уровневый комментарий, когда он набирает определённый порог голосов (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

In Conversation Polls OpenWeb позволяют прикреплять к топ‑уровневому комментарию опрос с 2‑4 вариантами. Опросы FastComments тоже привязываются к комментарию, но поддерживают 2‑10 вариантов, необязательную дату закрытия, режим приватности результатов (анонимно, только админам, всем) и режим «голосовать, чтобы увидеть результаты». Вы выбираете, кто может создавать опросы (отключено, админы и модераторы, все) и могут ли анонимные читатели голосовать. Опросы также доступны через публичный API для создания их из вашей CMS.

OpenWeb предлагал форматы Ask Me Anything. FastComments не имеет отдельного продукта Q&A. Практическая замена — обычная ветка на отдельном URL ID: SSO‑пользователь гостя получает `displayLabel`, вы закрепляете вводный комментарий, читатели задают вопросы в топ‑уровневых комментариях, гость отвечает в ветке, а упоминания и ответы генерируют уведомления. После закрытия окна установите `noNewRootComments`, чтобы новые корневые комментарии не появлялись, а только ответы.

Community Spotlight (email‑коллектор, счётчик и редиректы OpenWeb) не имеет эквивалента. Виджет поддерживает пользовательский HTML‑заголовок над полем ввода через `headerHTML`, что покрывает CTA, но не форму захвата email.

### Live Blog

FastComments не имеет Live Blog. Live Blog OpenWeb — это редакционный продукт: репортеры в админ‑панели публикуют обновления с вложенными ссылками, твитами и видео, а читатели следят за ними (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

FastComments предлагает только клиентскую часть для живых трансляций: виджет Live Chat (`embed-live-chat.min.js`) для потокового чата и виджет комментариев в режиме чата (`showLiveRightAway` плюс `newCommentsToBottom`) рядом с вашими живыми репортажами. Для самих редакционных обновлений издатели, уходящие с OpenWeb, сохраняют их в своей CMS или отдельном инструменте Live Blog и встраивают FastComments ниже для обсуждения. Медиа‑вставки (YouTube, SoundCloud и др.) поддерживаются внутри комментариев, так что обновления персонала, размещённые как комментарии, могут включать богатый медиа‑контент.

### Topic Tracker, Notifications and Email

Topic Tracker OpenWeb позволяет читателю подписываться на темы и авторов, извлечённых из метаданных страницы, и получать уведомления, когда появляются новые статьи, соответствующие этим темам (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments не имеет подписки на темы или авторов между статьями. Читатели подписываются на страницу через колокольчик уведомлений и получают обновления только для этой ветки, с частотой, выбранной при подписке: каждую минуту, часовой дайджест или ежедневный дайджест. Если кросс‑статейная подписка важна для ваших метрик удержания, это функция, которую вы теряете.

Всё остальное в Notification Bell сопоставляется. Виджет имеет колокольчик, который краснеет при наличии непрочитанных уведомлений и показывает список: ответы вам, ответы в ветке, где вы комментировали, упоминания, голоса за ваши комментарии, активность на подписанных страницах, награды бейджей и личные сообщения (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). In‑app уведомления работают в реальном времени через WebSocket. Письма‑уведомления о ответах и упоминаниях отправляются каждую минуту только для одобренных комментариев.

Для SSO‑пользователей передайте `optedInNotifications` и `optedInSubscriptionNotifications` в полезной нагрузке, и FastComments обновит их предпочтения при следующей загрузке страницы. Для отправки писем нужен email в полезной нагрузке. Шаблоны писем редактируются per‑type и per‑locale в разделе Customize → Email Templates, а отправка с вашего домена с DKIM поддерживается. Модераторы и админы получают ежедневный, недельный или месячный дайджест с однокликовым одобрением, ответом и ссылками на спам.

Notification Webhook OpenWeb отправляет события уведомлений per‑user (`replied-message`, `liked-message`, `topic-by-keyword` и т.д.) на ваш эндпоинт. Webhooks FastComments охватывают ресурс комментария: создан, обновлён, удалён, с неограниченным числом подписывающихся эндпоинтов (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Если вы использовали webhook уведомлений для своей системы email, вам придётся перестроить логику на события комментариев или позволить FastComments отправлять письма.

### SSO: From codeA/codeB to a Signed Payload

Рукопожатие OpenWeb состоит из шести шагов: ждать `spot-im-api-ready`, OpenWeb генерирует `codeA`, ваш клиент отправляет его вашему бэкенду, бэкенд подтверждает пользователя и вызывает `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb возвращает `codeB`, и ваш клиент передаёт `codeB` обратно в OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Выход из системы вызывается `window.SPOTIM.logout()`.

Secure SSO FastComments не требует кругового обмена и не имеет нового эндпоинта на вашей стороне. Когда вы рендерите страницу для залогиненного пользователя, ваш бэкенд сериализует пользователя, кодирует его в Base64 и подписывает HMAC‑SHA256 с использованием вашего API‑секрета. Виджет отправляет полезную нагрузку вместе с запросами, а FastComments проверяет подпись (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). На Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // то же значение, что использовалось как primary_key в OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // то же user_name, что регистрировалось в OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // опционально, заменяет поиск Author Badge
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

Таймстамп — это миллисекунды эпохи, и запрос отклоняется, если он старше двух дней. Для незалогиненного читателя опустите три подписанные поля и передайте только `loginURL` (или функцию `loginCallback`), и виджет покажет запрос входа вместо композитора. Полные рабочие примеры на Node, Java и PHP находятся в <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">репозитории примеров кода</a>.

Пользователи создаются при первой загрузке страницы. Вы не регистрируете их массово. Поскольку импортёр OpenWeb сопоставляет авторов комментариев по `user_name`, пользователь, чей SSO‑payload содержит тот же `username`, «захватывает» свои импортированные комментарии при первой загрузке ветки и может их редактировать или удалять дальше. Есть также API SSO‑пользователей, если хотите предварительно создавать пользователей.

Каждый раз, когда полезная нагрузка отправляется, FastComments обновляет запись пользователя, так что изменённое отображаемое имя или аватар с вашей стороны распространяются при следующем просмотре страницы. Установите поле в `null`, чтобы очистить его.

Если вы использовали сторонний SSO OpenWeb через Auth0, Gigya или Piano с `window.SPOTIM.startSSOForProvider`, поток FastComments такой же: после того как ваш провайдер аутентифицирует пользователя, ваш бэкенд формирует и подписывает полезную нагрузку. Специфической интеграции провайдера на стороне FastComments нет.

Есть два других варианта. Simple SSO передаёт объект пользователя без подписи из клиента, для платформ без бэкенда, и помечает активность как проверенную, когда присутствует email (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 подписывает ваш персонал в самой панели FastComments через Okta, Azure AD или ADFS, с маппингом ролей, и доступен в корпоративных планах (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

API политики модерации per‑article в OpenWeb имеет четыре значения: `spot_policy`, `approve_all`, `publish_and_moderate` и `require_approval`. FastComments настраивает те же поведения в Moderation Settings: автоматическое одобрение включено/выключено, требование одобрения только для первого комментария пользователя и авто‑одобрение только проверенных (залогиненных или SSO) комментариев. Правила применяются ко всему сайту или к шаблону URL ID, например `*/politics/*`, что позволяет воспроизводить политику per‑section. Каждый комментарий, одобренный или нет, попадает в панель Moderate Comments, так что модель «публикуй‑затем‑проверяй» является представлением по умолчанию (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Импорт переносит состояние модерации. `message_status` OpenWeb со значением `approved` импортируется как одобренный и проверенный; `rejected` импортируется как спам и проверенный; всё остальное импортируется как не одобренный и не проверенный, поэтому появляется в очереди модерации. `reports_count` становится счётчиком флагов комментария.

Автоматическая модерация в FastComments многослойна, а не единый механизм как Aida:

- Спам‑классификатор, постоянно обучаемый, доступный как общая модель для всех арендаторов или изолированно для вашего арендатора, с фактором доверия, который ослабляет фильтрацию для давних или часто закреплённых пользователей.
- Опциональная проверка спама ChatGPT 4 при тарифе Flex.
- Модерация изображений с низкой, средней или высокой чувствительностью для загруженных изображений.
- Чёрный список слов (~450 стандартных фраз, редактируемый), маскирующий совпадения звёздочками. Здесь размещаются ваши ограниченные слова из OpenWeb.
- Пороговые значения флагов, после которых комментарий автоматически скрывается.
- Предотвращение повторяющихся и почти‑дублирующих сообщений, всегда включено.
- AI Agents: событийные агенты с явным allowlist инструментов (отметить спам, одобрить, заблокировать, закрепить, предупредить DM, бан, выдать бейдж, ответ). Каждый агент стартует в dry run, чувствительные инструменты могут быть ограничены человеческим одобрением, и каждое действие логируется с обоснованием и оценкой уверенности.

API User Muting OpenWeb позволяет одному SSO‑читателю заглушать другого. Эквивалент FastComments — Block User в меню комментария, доступный любому залогиненному читателю. Баны — действие модератора: постоянный или на заданный срок, опционально shadow‑ban (пользователь видит свой комментарий, но никто другой), опционально по хешу IP, с учётом алиасов email как одного адреса. Список забаненных пользователей можно искать по email, имени, модератору и комментарию, вызвавшему бан.

Панель Moderate Comments поддерживает фильтры (нуждается в проверке, нуждается в одобрении, спам, отмечено, от забаненных пользователей) и текстовый поиск, массовые действия с отменой и паузой, «выбрать все подходящие» для больших очередей, группы модерации, чтобы ваш спортивный отдел видел только спортивные ветки, логи per‑comment, показывающие, почему письмо было отправлено или нет, и делимые отфильтрованные ссылки. Модераторы имеют только панель; они не могут менять настройки или импортировать данные.

### Analytics

FastComments Analytics показывает онлайн‑пользователей в реальном времени по вашим сайтам и per‑page, топ‑страницы по комментариям или живым читателям, а также дневные серии по загрузкам страниц, комментариям, голосам и созданным аккаунтам (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Статистика модераторов отдельна. Счётчики почти в реальном времени, задержка не более минуты, и каждый просмотр страницы считается, а не выбирается случайным образом.

То, чего вы не найдёте, — любые данные о рекламных показах, CPM или доходах, потому что рекламы нет. Если в дашборде OpenWeb вы получали отчёты о вовлечённости‑к‑доходу, теперь эти отчёты переходят к вашей собственной рекламной системе.

### Monetization

OpenWeb размещает рекламу внутри и вокруг Conversation и предлагает Standalone Ad‑unit, с кампаниями, настроенными через ваш контакт в OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments не показывает рекламу в виджете, не делит доход и не загружает сторонние рекламные или трекинговые скрипты. Виджет — это iframe, который вы размещаете; рекламные блоки сверху и снизу — ваши, и работают через ваш уже существующий стек.

Компромисс ясен: вы теряете всё, что платило OpenWeb, и получаете фиксированную предсказуемую стоимость и виджет, который не добавляет рекламные запросы к странице. Брендинг убран в тарифах Flex и Pro, а white‑label доступен в Pro и Enterprise.

### Data Export and Privacy

Все экспортированные данные комментариев доступны из панели FastComments в виде CSV в любой момент, даты в формате UTC ISO, и те же данные доступны через API. Webhooks покрывают синхронизацию в реальном времени. Файлы импорта удаляются из FastComments сразу после завершения импорта.

Для GDPR и CCPA OpenWeb предоставляет API экспорта и удаления, где удалённые пользователи оставляют комментарии, привязанные к случайному гостевому аккаунту (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments поддерживает запросы на экспорт и удаление данных, предлагает Data Processing Agreement и работает в отдельном EU‑развёртывании на <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> с репликацией данных только внутри точек присутствия в ЕС. Создайте аккаунт там, если ваши читатели находятся в Европе. В EU‑регионе бан‑агенты AI всегда требуют человеческого одобрения, чтобы соответствовать статье 17 DSA.

Данные комментариев в глобальном развёртывании реплицируются по регионам, включая узел в Сингапуре, а виджет обслуживается собственным DNS и CDN FastComments. Скрипт embed весит менее 30 KB на диске и около 6 KB в сжатом виде по сети.

### Mobile SDKs

OpenWeb поставляет Android, iOS и React Native SDK с Conversation, Articles, Authentication, Notifications, Reactions и In‑Conversation Polls. FastComments поставляет нативные <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> и <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> библиотеки с ветвлением комментариев, живыми обновлениями через WebSocket, Secure SSO, голосованием, упоминаниями, загрузкой изображений, действиями модерации (флаг, закрепление, блокировка, блок), темизацией, режимом Live Chat и компонентом социальной ленты. EU‑регион включается флагом конфигурации. Отдельного рекламного SDK нет, потому что рекламы нет.

### Embed and SPA Integration

Лаунчер и контейнер OpenWeb:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

Эквивалент FastComments:

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

Ваш tenant ID находится на <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">странице кода embed</a>, как только у вас будет аккаунт. `data-article-tags` не имеет эквивалента, так как нет подписки на темы; хештеги внутри комментариев — отдельная функция.

Для бесконечной прокрутки и SPA OpenWeb использует подход Virtual Pages — один контейнер на статью. В FastComments вы вызываете `FastCommentsUI(element, config)` per‑thread, а позже `instance.update(newConfig)` для смены URL ID или `instance.destroy()` для удаления (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Библиотеки React, Vue, Angular и SolidJS обрабатывают это при изменении пропса config. Коллбэки жизненного цикла (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) заменяют события DOM `spot-im-*`, которые вы слушали.

Счётчики комментариев на индексных страницах используют виджет comment count, одиночный или массовый. Для SEO комментарии рендерятся напрямую в страницу для поисковых роботов, а не внутри iframe, поэтому нет отдельного SEO‑API‑вызова для настройки.

### Step-by-Step Cutover

**1. Создайте аккаунт и настройте базовые параметры.** Зарегистрируйтесь на fastcomments.com или eu.fastcomments.com. Установите параметры модерации, чёрный список слов, стиль голосования, сортировку по умолчанию и пользовательский CSS на странице настройки виджета. Добавьте модераторов и группы модерации. Если у вас много админ‑пользователей, поддержка импортирует их за вас.

**2. Запустите первый импорт.** Перейдите в <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data → Import</a>, выберите OpenWeb (.csv) и загрузите файл. Импорт запускается как фонова задача; страница показывает количество строк и статус, а вы получаете письмо по завершении (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Каждый OpenWeb message ID становится FastComments comment ID, поэтому повторный импорт не создаёт дубликаты.

**3. Проверьте счётчики.** Сравните количество строк в задаче с вашим экспортом. Откройте несколько URL ID с высоким трафиком в панели модерации и проверьте авторов, даты, голоса и статусы одобрения. Убедитесь, что отклонённые комментарии отображаются как спам, а ожидающие — в очереди.

**4. Сформируйте SSO‑payload.** Реализуйте код подписи, приведённый выше, в вашем бэкенде, используя те же `id` и `username`, что использовались в OpenWeb. Протестируйте на тестовой странице с учётной записью персонала: импортированные комментарии должны отображаться как их, а правка и удаление должны появляться в меню комментария.

**5. Замените embed в тестовом шаблоне.** Замените лаунчер и контейнер на сниппет FastComments, сопоставив `data-post-id` → `urlId` и `data-post-url` → `url`. Удалите `window.SPOTIM.logout()` и слушатели `spot-im-*`, либо сопоставьте их с вашими коллбэками. Примените ваш CSS в правиле кастомизации, а не в коде, чтобы он тестировался при каждом релизе FastComments.

**6. Запустите параллельно.** Разместите FastComments на отдельном разделе или на части статей, пока OpenWeb остаётся на остальных. На стороне OpenWeb ничего менять не нужно. Следите за очередью модерации и аналитикой. Комментарии, оставленные в FastComments в этот период, не попадут в ваш экспорт OpenWeb, поэтому планируйте финальный импорт до их появления, а не после.

**7. CSP и DNS.** Если у вас включён Content‑Security‑Policy, разрешите `cdn.fastcomments.com` и `fastcomments.com` (или `eu.fastcomments.com`) для `script-src`, `frame-src` и `connect-src`, и удалите записи `spot.im` и `openweb.com`, как только лаунчер исчезнет. DNS‑настройки не меняются. Перенаправления не нужны, потому что URL ID совпадают.

**8. Финальный импорт и запуск.** Скачайте ещё один экспорт OpenWeb, покрывающий период параллельного запуска, загрузите его (повторный импорт безопасен), затем разверните изменение шаблона на всех страницах и удалите лаунчер, Reactions, Topic Tracker, Spotlight, колокольчик и рекламные контейнеры.

**9. Чек‑лист перед запуском.**

- Живой комментарий виден на продакшн‑статье в двух браузерах.
- SSO‑вход, выход и комментарий от реального подписчика.
- Модераторы получают дайджест и могут одобрять из него.
- Письма‑ответы и упоминания приходят и ссылаются на правильную страницу.
- Список банов и чёрный список слов заполнены.
- Page Reacts и виджеты счётчиков комментариев отображаются там, где раньше были Reactions и счётчик.
- CSP‑отчёты чисты.
- Последнее сравнение счётчика комментариев между вашим экспортом и дашбордом.

### Что вы теряете и что отличается

Чётко о пробелах:

- **Live Blog.** Нет эквивалента. Оставьте его в CMS или отдельном инструменте и разместите FastComments под ним.
- **Topic Tracker.** Нет кросс‑статейного подписывания на темы или авторов. Только подписки на страницу.
- **Community Spotlight.** Нет продукта карточки CTA. `headerHTML` даёт сообщение над композитором, но не форму захвата email.
- **Ad revenue.** Нет. Виджет без рекламы по дизайну.
- **Notification webhook.** Webhook‑и только на события комментариев, не на пользовательские уведомления.
- **Threading при импорте.** Текущий импортёр «сплющивает» ответы в топ‑уровневые комментарии на той же странице. Сообщите, если нужен восстановленный древовидный вид.
- **История реакций.** Счётчики реакций на уровне статьи не входят в экспорт комментариев и стартуют с нуля.
- **История опросов.** Определения опросов и голоса не входят в экспорт; текст комментария опроса импортируется, сам опрос — нет.
- **Модель входа.** Читатели без SSO входят через magic‑link вместо пароля или кнопки соцсети.
- **Человеческий модерационный персонал.** OpenWeb поставляет команду модерации с Aida. FastComments предоставляет инструменты, классификаторы и агентов; люди — ваши.

Что вы получаете в том же духе: виджет, добавляющий один небольшой скрипт и без рекламных запросов, модерацию, которую один человек может вести на большом сайте с массовыми действиями и агентами, SSO, реализованный как функция подписи, а не как протокол, и поставщика, не находящегося под судебным надзором.

### Timeline and the Free Import Offer

Запланируйте от одной до двух недель для издателя с одной интеграцией SSO и несколькими сотнями тысяч комментариев: день‑два на экспорт и первый импорт, несколько дней на SSO и шаблоны, окно параллельного запуска, затем финальный импорт и переключение. Платформа уже справляется с таким масштабом: United Cloud обслуживает более десяти порталов и миллионы комментариев на FastComments, а itsfoss.com перенёс историю из 88 000 комментариев от другого провайдера через тот же самодельный импортёр.

FastComments импортирует ваш CSV‑экспорт из OpenWeb бесплатно, помогает вам работать с OpenWeb и FastComments параллельно во время переключения и помогает с самой миграцией, включая вопросы о построении дерева и сопоставлении пользователей. Корпоративные планы включают SLA, ответы поддержки в течение часа в рабочие часы и возможность развертывания Isolated Cloud в вашем собственном облачном аккаунте (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Тариф Flex с оплатой по использованию доступен для сайтов, желающих начать без контракта.

Пишите на <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> с указанием размера вашего экспорта и настроек SSO — мы подготовим план.

### In Conclusion

Скачайте ваш экспорт уже сегодня. Остальная часть миграции механична: те же ID статей становятся URL ID, те же имена пользователей «захватывают» свои комментарии через SSO, состояние модерации переносится, а embed‑код меняется напрямую. Отличия FastComments перечислены выше, чтобы вы могли принять решение, опираясь на факты.

Cheers!{{/isPost}}

---