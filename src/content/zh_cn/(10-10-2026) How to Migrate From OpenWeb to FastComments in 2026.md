[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]如何在 2026 年从 OpenWeb 迁移到 FastComments[/postlink]

{{#unless isPost}}
一篇面向出版商的功能对功能指南，帮助从 OpenWeb（前身为 Spot.IM）迁移：哪些功能 1:1 对应，哪些不同，CSV 导入如何工作，SSO 握手如何变化，以及一步步的切换计划。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

本指南面向目前使用 OpenWeb 的产品和工程负责人以及社区经理，帮助他们制定迁移计划。它会遍历每个 OpenWeb 界面，列出对应的 FastComments 方案，并明确指出哪些没有 1:1 对应。

### 为什么现在

2026 年 9 月 30 日，特拉维夫地区法院应其债权人 Mars Growth Capital 的请求，任命临时接管人管理 OpenWeb，Mars Growth Capital 对公司资产和账户拥有第一顺位留置权，并正准备对 OpenWeb 的以色列资产、银行账户和知识产权执行留置（<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a）。第二天（<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a）任命了临时受托人 Adv. Ehud Gindes。2026 年早些时候，OpenWeb 最大的客户之一 Microsoft 结束合作，并因流量争议（OpenWeb 否认）扣留付款（<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a）。

OpenWeb 表示平台仍在运行。法院监督、债权人对您评论小部件所依赖的知识产权进行留置、以及受托人负责保值，这些都不是出版商希望在核心互动界面上面对的情况。如果您尚未完整导出数据，请先执行此操作，今天就完成，然后再继续本指南的其他步骤。

### 开始前需要准备的事项

在动代码之前先收集以下内容：

- **您的 OpenWeb 评论导出文件。** OpenWeb 提供 Export API（v4），生成压缩的 CSV 文件，每文件最多 100,000 条评论，时间窗口最长一个月，下载链接在一周后失效（<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>）。请求所需的所有时间窗口并安全保存文件。如果您的 OpenWeb 联系人过去提供过管理员面板的 CSV 导出，也请保留。FastComments 导入器会读取 OpenWeb CSV 中的列，如 `id`、`post_id`、`parent_comment_id`、`user_name`、`user_display_name`、`content`、`written_at`、`message_status`、`likes_count`、`dislikes_count`、`reports_count` 和 `url`。
- **您的 Spot ID 和文章 ID 列表。** 您传递给启动器的每个 `data-post-id` 将成为 FastComments 的 URL ID。如果您的文章 ID 来自 CMS，请记录其生成方式，以便在 FastComments 端使用相同值。
- **您的 SSO 用户列表。** 具体包括在 OpenWeb 注册时使用的 `primary_key` 和 `user_name`。导入时会根据用户名匹配评论作者，因此需要在 FastComments SSO 负载中使用相同的用户名。
- **您的版主列表及角色。** 包括管理员、版主和记者账号，以及各自负责的版块。
- **您的审核配置。** 包括站点范围的策略（全部批准、发布后审核、需要批准）、文章级别的覆盖、受限词列表、被静音和被封禁的用户。
- **自定义 CSS 与主题设置。** 将管理员面板中所有自定义内容导出，以便在 FastComments 小部件定制页面中重建。
- **启动器在模板中的位置**，包括任何使用 Reactions、Topic Tracker、Spotlight、通知铃或独立广告但不含对话的页面。

### AI 辅助迁移

FastComments 提供 [LLM Kit 和 MCP 服务器以加速迁移](https://docs.fastcomments.com/guide-llm-kit.html)。

### OpenWeb 文章 ID 与 FastComments URL ID 的映射

FastComments 将评论线程绑定到 `urlId`。默认情况下，URL ID 为清理后的页面 URL，但您可以将其设为任意字符串，这正是 OpenWeb 导入器的做法：它读取 `post_id` 列，并将其用作每篇文章的 FastComments URL ID。同时会将 `url` 列存为显示 URL，以便审核链接和通知邮件指向正确页面。

因此模板规则为：在 OpenWeb 中使用 `data-post-id="POST_ID"` 和 `data-post-url="ARTICLE_URL"` 的位置，改为在 FastComments 中使用 `urlId: 'POST_ID'` 和 `url: 'ARTICLE_URL'`。导入的线程会与现有线程直接对应，无需重定向或 URL 重写。参见 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID 文档</a>。

如果您更倾向于以后按 URL 而非文章 ID 来键控线程，可先完成导入，然后在 “管理数据” 下使用 “迁移评论” 工具批量将线程从文章 ID 移动到 URL。

### 功能映射表

<div class="pretty-table wide-table">

| OpenWeb | FastComments | 备注 |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | 默认实时。新评论会折叠在 “显示 N 条新评论” 按钮后，或使用 `showLiveRightAway` 立即显示。 |
| Likes and dislikes on comments | Up and down votes | 导入会保留 `likes_count` 与 `dislikes_count`。心形样式和 “禁用投票” 为可配置选项。 |
| Reactions (article-level icons) | Page Reacts | 页面上可配置的图标集合，按用户记忆。 |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` 限制嵌套层级。 |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` 在站点或 URL 模式下设定默认排序。 |
| User profiles | User profiles | 头像、简介、徽章、积分、活动、私信。支持 SSO 用户。 |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | 在 SSO 负载中设置。无需后端查询。 |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | 版主可在小部件或仪表盘中置顶。AI 代理模板可自动置顶最高投票评论。 |
| In Conversation Polls | Polls on comments | 2‑10 选项、结束日期、隐私模式、创建者限制。 |
| Ask Me Anything formats | No dedicated product | 以普通线程实现，作者的 SSO 用户带 `displayLabel`，并将提问置顶。 |
| Live Blog | No 1:1 equivalent | Live Chat 小部件和聊天模式评论可用。编辑式实时博客仍在 CMS 中实现。 |
| Topic Tracker (follow topics and authors) | Page subscriptions | 用户关注页面，而非主题或作者。无跨文章关注。 |
| Notification Bell | Notification bell in the widget | 回复、提及、线程活动、投票、订阅、徽章、私信等。 |
| Email notifications | Email notifications with templates | 通过 SSO 标记的用户可自行选择。自定义模板、品牌发件人。 |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | 无注册用户调用。服务器端签名负载后传给小部件。 |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | 同样的负载。后端在用户登录后签名。 |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | 读者通过邮件链接登录，无密码。 |
| Moderation policy per article | Customization rules per URL ID pattern | 审核模式、垃圾过滤等可按 `*/section/*` 模式变化。 |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | 代理在干运行模式下启动，可要求人工批准。 |
| Restricted words | Word blacklist customizable by locale | 默认约 450 条短语，可编辑。 |
| User muting | Block User | 在评论菜单中对单个读者进行屏蔽。 |
| Bans | Bans | 永久、限时、影子、IP‑哈希、别名感知等多种方式。 |
| Moderation Panel | Moderate Comments dashboard | 过滤、批量撤销、分组、摘要邮件、一键批准。 |
| Notification Webhook | Webhooks | 评论创建、更新、删除。无用户级别的通知 webhook。 |
| Engagement dashboard | Analytics | 在线用户、热门页面、页面加载、评论、投票、每日账户统计。无广告收入报告。 |
| In-conversation ads, Standalone Ad | None | FastComments 不投放广告。您自行保留广告系统。 |
| Social Reviews (star ratings) | Ratings and Reviews | 同一账户下的独立产品。 |
| Popular in the Community | Recent Discussions and Top Pages widgets | 基于评论活动的循环推荐。 |
| Comment Counter | Comment count widgets | 单个或批量。 |
| Export Comments API | CSV export, API, webhooks | 随时从仪表盘导出。 |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com 将数据保存在欧盟。提供 DPA。 |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | 原生 UI、SSO、实时更新、线程、审核操作。 |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` 与 `destroy()` 适用于 SPA。 |

</div>

本节其余部分将逐组详细说明。

### Conversation, Votes and Reactions

OpenWeb 的 Conversation 是实时线程。FastComments 评论小部件同样实时：评论、编辑、删除、投票和审核操作会推送给所有查看该线程的用户（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>）。默认情况下，其他人的新评论会折叠在 “显示 2 条新评论” 按钮后，以免页面跳动。实时活动可通过 `showLiveRightAway` 立即渲染，若希望新评论向下滚动则使用 `newCommentsToBottom`。

点赞与点踩对应上下投票。导入器会保留每条评论的计数。如果您的社区习惯单一点赞，可在小部件定制页将投票样式切换为心形。投票也可以完全关闭。

OpenWeb Reactions 是文章级别的图标小部件（<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>）。FastComments 对应的是 Page Reacts：可配置的表情图标集合，附加在评论小部件上，按页面和用户记忆（<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>）。Reaction 计数不在 OpenWeb 评论导出中，因此在 FastComments 中从零开始。

排序直接映射。OpenWeb 的 `data-sort-by` 值 best、newest、oldest 对应 FastComments 的 Most Relevant、Newest First、Oldest First。可通过 `defaultSortDirection`（`MR`、`NF`、`OF`）在代码或定制规则中设定默认。读者可在小部件中自行切换。

`data-read-only="true"` 对应 `readonly: true`，会阻止新评论、投票、编辑和删除。`data-post-staleness-days` 没有直接等价，但可通过定制规则对特定 URL ID 模式应用 `readonly`，亦可在模板中根据文章年龄切换。`data-messages-count` 为页面大小，可在小部件定制页设置为 10‑200 条评论。

### Replies and Threading

FastComments 默认支持无限嵌套；`maxReplyDepth` 可限制层级（`1` 为两层平面结构）。OpenWeb CSV 包含 `parent_id` 与 `parent_comment_id` 列。导入器读取 `parent_comment_id` 并在完整深度上重建回复树，因此对回复的回复仍会嵌套在其直接父级下，保留作者、时间戳、投票、标记计数和审核状态。即使回复出现在父评论之前，或父评论来自更早的导出窗口，仍能正确关联。若某条回复的父评论在所有导出中缺失，则该回复会成为顶层评论。OpenWeb 的消息 ID 会存储在每条评论上，后续重新导入旧的平面导入时会在原位匹配。

### User Profiles and Badges

FastComments 用户（包括 SSO 用户）拥有头像、显示名、简介、社交链接、徽章、积分、评论计数、公开活动流和私信功能（<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>）。活动、个人资料评论和私信面板可在 SSO 负载中或全局配置中单独关闭。

OpenWeb 的 Author Badge 需要调用 `GET /sso/v1/user/{primary_key}` 并将返回的 ID 放入 `data-author-id`。在 FastComments 中，只需在用户的 SSO 负载中设置 `displayLabel: 'Author'`（或任意最长 100 字符的标签），以及 `isAdmin` 或 `isModerator` 标记即可。该标签会在每条评论旁边渲染。若需更丰富的系统，可在 “Customize → Badges” 中配置图像或文字徽章，自动在阈值（评论数、赞数、置顶评论、资深状态、回复速度）触发，或手动分配，并可通过 SSO 负载的 `badgeConfig` 设置（<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>）。

### Pinned Comments, Polls and Q&A

任何版主都可以在小部件的评论菜单或审核仪表盘中 Pin 或 Unpin 评论。置顶评论会实时推送给所有线程阅读者。若希望自动化，可使用 AI Agents 中的 Top Comment Pinner 模板，在评论达到投票阈值后自动置顶（<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>）。

OpenWeb 的 In Conversation Polls 允许在顶层评论中附加 2‑4 选项的投票。FastComments 的投票同样附加在评论上，支持 2‑10 选项、可选结束日期、结果隐私（匿名、仅管理员、全部可见）以及 “投票后才能查看结果” 模式。您可以设置谁可以创建投票（禁用、仅管理员和版主、所有人）以及匿名读者是否可投票。投票同样通过公共 API 暴露，便于从 CMS 创建。

OpenWeb 曾提供 Ask Me Anything（AMA）形式。FastComments 没有专门的 Q&A 产品，实际做法是将其视为普通线程：在专用 URL ID 上创建线程，客人的 SSO 用户携带 `displayLabel`，将介绍评论置顶，读者在顶层评论中提问，客人在同一线程中回复，并通过提及和回复通知将人们拉回。窗口关闭后可使用 `noNewRootComments` 只允许回复。

Community Spotlight（OpenWeb 的邮件收集、计数和重定向卡片）在 FastComments 中没有对应。小部件支持通过 `headerHTML` 在评论输入框上方自定义 HTML，以实现号召性用语，但不提供邮件捕获表单。

### Live Blog

FastComments 没有 Live Blog 产品。OpenWeb 的 Live Blog 是编辑类产品：记者在管理员面板中发布带链接、推文和视频的更新，读者实时跟随（<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>）。

FastComments 为实时覆盖提供的是读者侧：Live Chat 小部件 (`embed-live-chat.min.js`) 用于流式聊天，评论小部件可在聊天模式下使用 `showLiveRightAway` 加 `newCommentsToBottom` 与实时报道并行。编辑更新仍需出版商在 CMS 或专用实时博客工具中完成，然后在其下方嵌入 FastComments 进行讨论。评论中支持 YouTube、SoundCloud 等媒体嵌入，便于工作人员以富媒体形式发布更新。

### Topic Tracker, Notifications and Email

OpenWeb 的 Topic Tracker 让读者关注基于页面元数据的主题和作者，并在匹配新文章时收到通知（<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>）。FastComments 没有跨文章的主题或作者关注功能。读者可通过通知铃订阅单个页面，并根据订阅选择每分钟、每小时或每日摘要。若跨文章关注对您的留存至关重要，请告知我们，此功能已列入路线图。

通知铃的其余映射保持一致。小部件的铃会在未读计数变红并列出：对您的回复、您参与的线程回复、提及、对您评论的赞、已订阅页面的活动、徽章奖励和私信（<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>）。应用内通知通过 WebSocket 实时推送。回复和提及邮件每分钟发送一次，仅针对已批准的评论。

对于 SSO 用户，在负载中传入 `optedInNotifications` 与 `optedInSubscriptionNotifications`，FastComments 会在下次页面加载时更新其偏好。邮件需要在负载中提供电子邮件地址。邮件模板可在 “Customize → Email Templates” 中按类型和语言编辑，并支持使用您自己的域名并配置 DKIM。版主和管理员可收到每日、每周或每月摘要，内含一键批准、回复和垃圾链接。

OpenWeb 的 Notification Webhook 会将每位用户的通知事件（`replied-message`、`liked-message`、`topic-by-keyword` 等）POST 到您的端点。FastComments 的 webhook 只覆盖评论资源：创建、更新、删除，并可订阅任意数量的端点（<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>）。如果您之前使用通知 webhook 将事件喂入自建邮件系统，需要改为监听评论事件，或让 FastComments 直接发送邮件。

### SSO: From codeA/codeB to a Signed Payload

OpenWeb 的握手包括六步：等待 `spot-im-api-ready`，OpenWeb 生成 `codeA`，您的客户端将其发送至后端，后端确认用户并调用 `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`，OpenWeb 返回 `codeB`，客户端再将 `codeB` 交回 OpenWeb（<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>）。登出调用 `window.SPOTIM.logout()`。

FastComments 安全 SSO 没有往返请求，也不需要您侧的新端点。当为已登录用户渲染页面时，后端序列化用户信息，Base64 编码后使用 HMAC‑SHA256 并使用您的 API secret 进行签名。小部件在请求中携带负载，FastComments 验证签名（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>）。Node 示例：

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // 与 OpenWeb 使用的 primary_key 相同
        email: 'reader@example.com',
        username: 'reader',              // 与 OpenWeb 注册的 user_name 相同
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // 可选，替代 Author Badge 查找
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // 渲染到页面配置中:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

时间戳为 epoch 毫秒，若超过两天则被拒绝。对未登录读者，省略这三个签名字段，仅传 `loginURL`（或 `loginCallback` 函数），小部件会显示登录提示而非编辑框。完整的 Node、Java、PHP 示例位于 <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">代码示例仓库</a>。

用户在首次页面加载时创建。不会批量注册任何人。因为 OpenWeb 导入器通过 `user_name` 匹配评论作者，若 SSO 负载携带相同 `username`，用户首次加载线程时即可拥有其导入的评论，并可随后编辑或删除。FastComments 也提供 SSO 用户 API，供您预先创建用户。

每次发送负载时，FastComments 会根据负载更新用户记录，因此您侧的显示名或头像变更会在下次页面访问时同步。将字段设为 `null` 可清除对应信息。

如果您使用 OpenWeb 的第三方 SSO（Auth0、Gigya、Piano）通过 `window.SPOTIM.startSSOForProvider`，FastComments 的流程相同：在提供商完成身份验证后，后端构建并签名负载。FastComments 侧无需特定的提供商集成配置。

另外两种选项：Simple SSO 从客户端直接传递未签名的用户对象，适用于没有后端的平台，并在有邮箱时标记为已验证（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>）。SAML 2.0 通过 Okta、Azure AD 或 ADFS 将员工登录到 FastComments 仪表盘本身，支持角色映射，仅在企业计划中提供（<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>）。

### Moderation

OpenWeb 的每篇文章审核策略 API 包含四种值：`spot_policy`、`approve_all`、`publish_and_moderate`、`require_approval`。FastComments 在 “Moderation Settings” 中配置相同行为：自动批准开关、仅首次评论需要批准、仅已验证（登录或 SSO）评论自动批准。规则可全站或针对 `*/politics/*` 等 URL ID 模式应用，以实现分区策略。所有评论（无论是否批准）都会进入 “Moderate Comments” 仪表盘，因此默认视图为 “发布后审核” 模式（<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>）。

导入会保留审核状态。OpenWeb 的 `message_status` 为 `approved` 时导入为已批准并已审核；`rejected` 导入为垃圾并已审核；其他状态导入为未批准未审核，出现在您的审核队列中。`reports_count` 成为评论的标记计数。

FastComments 的自动审核采用分层方式，而非像 Aida 那样的单一系统：

- 垃圾分类器，持续训练，可作为所有租户共享模型或专属模型，具备对长期或常被置顶用户放宽过滤的信任因子。
- 可选的 LLM 垃圾检查（Flex 计费），提供开源模型如 GLM‑5.3。
- 图片内容审核，支持低、中、高灵敏度。
- 本地化词黑名单，约 450 条默认短语，可编辑，匹配时用星号遮蔽。这里放置您在 OpenWeb 中的受限词。
- 标记阈值，达到 N 次报告后自动隐藏评论。
- 重复及近似重复消息防护，始终开启。
- AI Agents：事件驱动的代理，具备明确的工具白名单（标记垃圾、批准、锁定、置顶、私信警告、封禁、授予徽章、回复）。每个代理默认干运行，敏感工具可通过人工批准解锁，所有操作均记录理由和置信度分数。

OpenWeb 的用户静音 API 允许一个 SSO 读者静音另一个。FastComments 对应的是评论菜单中的 “Block User”，对任何已登录读者均可使用。封禁是版主操作：永久或设定时长，可选影子封禁（用户仍看到自己的评论，其他人看不到），可基于哈希 IP，且支持邮箱别名合并。封禁列表可按邮箱、姓名、版主及触发封禁的评论搜索。

“Moderate Comments” 仪表盘支持过滤（待审核、需批准、垃圾、已标记、来自封禁用户）和全文搜索，批量操作支持撤销和暂停，“全选匹配项” 适用于大队列，审核分组让您的体育编辑部仅看到体育线程，单条评论日志展示邮件是否发送的原因，且可生成可共享的过滤链接。版主仅拥有仪表盘权限，不能更改设置或导入数据。

### Analytics

FastComments Analytics 显示当前在线用户、每页在线人数、按评论数或实时阅读人数的热门页面，以及每日页面加载、评论、投票和新账户统计（<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>）。版主统计单独呈现。计数接近实时，最多延迟一分钟，且每次页面加载都会计入，而非抽样。

您不会在此看到任何广告填充、CPM 或收入数据，因为 FastComments 不投放广告。如果您之前依赖 OpenWeb 仪表盘进行参与度到收入的报告，这部分报告将转移到您自己的广告系统。

### Monetization

OpenWeb 在 Conversation 内外投放广告，并提供 Standalone Ad 单元，需通过您的 OpenWeb 联系人设置活动（<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>）。FastComments 不在小部件中投放广告，不参与收入分成，也不加载第三方广告或跟踪脚本。小部件本身是一个 iframe，您在其上方和下方的广告位由您自行管理。

权衡是明确的：您失去 OpenWeb 为您支付的费用，却获得固定、可预测的成本以及不会向页面添加广告请求的小部件。Flex 与 Pro 计划会去除品牌标识，Pro 与 Enterprise 计划提供白标。

### Data Export and Privacy

您可以随时从 FastComments 仪表盘导出所有评论数据为 CSV，日期采用 UTC ISO 格式，同样的数据也可通过 API 获取。Webhook 支持持续同步。导入文件在导入完成后会立即从 FastComments 删除。

针对 GDPR 与 CCPA，OpenWeb 提供导出与删除 API，已删除用户的评论会转移到随机访客账号（<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>）。FastComments 支持数据导出与删除请求，提供数据处理协议（DPA），并在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 运行独立的欧盟部署，数据仅在欧盟节点复制。若您的读者在欧洲，请在该区域创建账户。欧盟区域的 AI 代理封禁始终需要人工批准，以满足 DSA 第 17 条。

全球部署的评论数据会在包括新加坡在内的多个地区复制，且小部件通过 FastComments 自有的 DNS 与 CDN 提供。嵌入脚本压缩后约 35 KB。

### Mobile SDKs

OpenWeb 提供 Android、iOS 与 React Native SDK，涵盖 Conversation、Articles、Authentication、Notifications、Reactions 与 In Conversation Polls。FastComments 提供原生 <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>、<a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> 与 <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> 库，支持线程评论、WebSocket 实时更新、安全 SSO、投票、提及、图片上传、审核操作（标记、置顶、锁定、封禁）、主题定制、直播聊天模式以及社交动态组件。欧盟区域通过配置标志启用。由于没有广告，亦不存在单独的广告 SDK。

### Embed and SPA Integration

OpenWeb 启动器与容器代码：

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments 对应代码：

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // 原 data-post-id
            url: 'ARTICLE_URL',      // 原 data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

您的租户 ID 可在 <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">凭证页面</a> 获取。`data-article-tags` 没有对应功能，因为没有主题关注；评论中的标签（#hashtag）是另一套功能。

对于无限滚动和单页应用，OpenWeb 的 Virtual Pages 采用每篇文章一个容器。FastComments 中，您对每个线程调用 `FastCommentsUI(element, config)`，随后使用 `instance.update(newConfig)` 更换 URL ID，或使用 `instance.destroy()` 移除（<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>）。React、Vue、Angular 与 SolidJS 库会在配置属性变化时自动处理。生命周期回调（`onInit`、`onRender`、`commentCountUpdated`、`onReplySuccess`、`onVoteSuccess`、`onAuthenticationChange`、`onCommentSubmitStart`）取代了您之前监听的 `spot-im-*` DOM 事件。

索引页的评论计数使用评论计数小部件，可单独或批量部署。为 SEO 起见，评论会直接渲染到页面中供搜索引擎爬虫读取，而不是通过 iframe，因此无需额外的 SEO API 调用。

### Step-by-Step Cutover

**1. 创建账户并完成基础配置。** 在 fastcomments.com 或 eu.fastcomments.com 注册。设置审核选项、词黑名单、投票样式、默认排序以及小部件定制页面的自定义 CSS。添加版主和审核分组。如果您有大量管理员用户，可让我们为您导入。

**2. 执行首次导入。** 前往 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data → Import</a>，选择 OpenWeb（.csv）并上传。导入会作为后台任务运行，页面显示行数与状态，完成后会收到邮件通知（<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>）。每条评论会保留 OpenWeb 的消息 ID 作为外部 ID，重新导入时会更新已有评论而不是创建重复。

**3. 验证计数。** 将作业的行数与您的导出对比。打开几条高流量的 URL ID 在审核仪表盘中抽查作者、日期、投票总数和审核状态。确认被拒评论显示为垃圾，待处理评论位于队列中。

**4. 构建 SSO 负载。** 在后端实现上述签名代码，使用与 OpenWeb 相同的 `id` 与 `username`。在测试环境的页面上使用员工账号进行验证：导入的评论显示为该用户，编辑与删除出现在其评论菜单中。

**5. 在测试模板中替换嵌入代码。** 用 FastComments 代码片段替换启动器和容器，映射 `data-post-id` 为 `urlId`，`data-post-url` 为 `url`。移除 `window.SPOTIM.logout()` 与 `spot-im-*` 监听器，或映射到相应回调。将 CSS 放入定制规则中，以便在每次 FastComments 更新时自动生效。

**6. 并行运行。** 在部分栏目或一定比例的文章上使用 FastComments，其他保持 OpenWeb。OpenWeb 端无需任何改动。监控审核队列与分析页面。FastComments 页面期间的评论不会出现在 OpenWeb 导出中，请在最终导入前完成并在并行窗口结束前完成最终导出。

**7. CSP 与 DNS。** 若使用内容安全策略（CSP），在 `script-src`、`frame-src`、`connect-src` 中加入 `cdn.fastcomments.com` 与 `fastcomments.com`（或 `eu.fastcomments.com`），并在移除启动器后删除 `spot.im` 与 `openweb.com` 的条目。DNS 不需要更改，无需重定向，因为 URL ID 已匹配。

**8. 最终导入并上线。** 再次导出覆盖并行运行期间的 OpenWeb 数据，重新导入（重新导入安全）。随后在所有页面部署模板更改，移除启动器、Reactions、Topic Tracker、Spotlight、铃和广告容器。

**9. 上线检查清单。**

- 在两台浏览器上确认生产文章的实时评论可见。
- SSO 登录、登出并使用真实订阅者账号发表评论。
- 版主收到摘要并能从中批准。
- 回复与提及邮件到达并指向正确页面。
- 封禁列表与词黑名单已填充。
- 页面反应（Page Reacts）与评论计数在原 Reactions 与计数器位置渲染。
- CSP 报告无错误。
- 将导出与仪表盘的评论计数再次对比。

### What You Lose and What Is Different

直面差距：

- **Live Blog**：无对应产品。请在 CMS 或专用实时博客工具中保留，FastComments 只提供评论层。
- **Topic Tracker**：无跨文章的主题或作者关注，仅页面订阅。
- **Community Spotlight**：无 CTA 卡片产品。`headerHTML` 可在编辑器上方放置信息，但不提供邮件捕获。
- **Ad revenue**：无广告，组件本身不请求广告。
- **Notification webhook**：仅针对评论事件的 webhook，未提供用户级通知事件。
- **Reactions history**：文章级 Reaction 计数不在评论导出中，需重新收集或自行抓取。
- **Polls history**：投票定义与投票结果不在评论导出中，仅导入投票的评论文本，投票本身需自行抓取。
- **Login model**：无 SSO 的读者通过魔法链接登录，而非密码或社交登录按钮。
- **Human moderation staff**：OpenWeb 自带 Aida 人工审核团队。FastComments 提供工具、分类器与代理，实际人工由您自行安排。

您获得的价值：仅需一个小脚本且无广告请求的 widget；可通过批量操作与代理让单人管理大站点的审核；SSO 只需签名函数而非完整协议；以及不受法院监管的供应商。

### Timeline and the Free Import Offer

对于拥有单一 SSO 集成且几十万条评论的出版商，预计需要一至两周：一天或两天完成导出与首次导入，几天实现 SSO 与模板，进行并行运行窗口，最后完成最终导入并切换。平台已有此规模的经验：United Cloud 运营十余门户、数百万条评论，itsfoss.com 通过同一自助导入器迁移了 88,000 条历史评论。

FastComments 免费导入您的 OpenWeb CSV 导出，帮助您在切换期间并行运行 OpenWeb 与 FastComments，并在迁移过程中提供支持，包括线程与用户匹配问题。企业计划提供 99.99% SLA，并在工作时间内一小时内回复。Flex 按使用计费，适合想要无合同起步的站点。

<a href="https://fastcomments.com/contact-us">Write to us</a> 并提供您的导出规模与 SSO 设置，我们会给出方案。

### In Conclusion

今天就导出您的数据。记住：相同的文章 ID 将成为 URL ID，审核状态会随之迁移，嵌入代码只需直接替换。FastComments 与 OpenWeb 的差异已在上文列出，供您依据事实做决定。 :)

Cheers!

{{/isPost}}

---