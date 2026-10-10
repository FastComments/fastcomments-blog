[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]如何在2026年从 OpenWeb 迁移到 FastComments[/postlink]

{{#unless isPost}}
逐功能指南，帮助出版商从 OpenWeb（前身 Spot.IM）迁移：哪些功能 1:1 对应，哪些不同，CSV 导入如何工作，SSO 握手如何变化，以及一步步的切换计划。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

本指南面向目前使用 OpenWeb 的产品和工程负责人以及社区经理，提供迁移计划。它会遍历每个 OpenWeb 界面，列出对应的 FastComments 功能，并明确说明哪些没有 1:1 对应。

### 为什么现在

2026 年 9 月 30 日，特拉维夫地区法院应其债权人 Mars Growth Capital 的请求，任命临时接管人接管 OpenWeb，Mars Growth Capital 对公司资产和账户拥有第一顺位留置权，并正准备对 OpenWeb 的以色列资产、银行账户和知识产权执行留置（<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>）。第二天任命了临时受托人 Adv. Ehud Gindes（<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>）。2026 年早些时候，OpenWeb 最大的客户之一 Microsoft 结束合作，并因流量争议（OpenWeb 否认）扣留付款（<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>）。

OpenWeb 表示平台仍在运行。法院监督、债权人对您评论小部件所依赖的知识产权的留置权以及受托人旨在保值的职责，都不是出版商在核心交互面希望出现的情况。如果您尚未完成完整的数据导出，请先立即执行此操作，在本指南的其他步骤之前。

### 开始前需要准备的事项

在动代码之前先收集以下内容：

- **您的 OpenWeb 评论导出。** OpenWeb 提供 Export API（v4），生成压缩的 CSV 文件，每文件最多 100,000 条评论，时间窗口最长一个月，下载链接在一周后失效（<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>）。请求所需的所有时间窗口并安全保存文件。如果您的 OpenWeb 联系人过去提供过管理员面板的 CSV 导出，也请保留。FastComments 导入器会读取 OpenWeb CSV，列包括 `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` 和 `url`。
- **您的 Spot ID 和文章 ID 列表。** 您传递给启动器的每个 `data-post-id` 将成为 FastComments 的 URL ID。如果您的文章 ID 是 CMS 文章 ID，请记录其生成方式，以便在 FastComments 端使用相同值。
- **您的 SSO 用户列表。** 特别是您在 OpenWeb 注册的 `primary_key` 和 `user_name`。导入时会根据用户名匹配评论作者，因此需要在 FastComments SSO 负载中传递相同的用户名。
- **您的版主列表和角色。** 管理员、版主和记者账户，以及各自负责的板块。
- **您的审核配置。** 站点范围的策略（全部批准、发布后审核、需要批准），文章级别的覆盖，受限词列表，已静音和已封禁用户。
- **自定义 CSS 和主题设置。** 从管理员面板导出所有自定义内容，以便在 FastComments 小部件定制页面中重建。
- **启动器在模板中的位置**，包括运行 Reactions、Topic Tracker、Spotlight、通知铃或独立广告但不带对话的页面。

### OpenWeb 文章 ID 与 FastComments URL ID 的映射

FastComments 将评论线程绑定到 `urlId`。默认情况下，URL ID 为清理后的页面 URL，但您可以将其设为任意字符串，这正是 OpenWeb 导入器的做法：它读取 `post_id` 列并将其用作每篇文章的 FastComments URL ID。同时，它将 `url` 列存为显示 URL，以便审核链接和通知邮件指向正确页面。

因此模板的规则是：在 OpenWeb 中使用 `data-post-id="POST_ID"` 和 `data-post-url="ARTICLE_URL"` 的地方，改为在 FastComments 中使用 `urlId: 'POST_ID'` 和 `url: 'ARTICLE_URL'`。导入的线程会与实时线程直接对应，无需重定向或 URL 重写。参见 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID 文档</a>。

如果您希望以后改为按 URL 而非文章 ID 进行线程键控，可先导入，然后在 “管理数据” 下使用 “迁移评论” 工具批量将线程从文章 ID 移动到 URL。

### 功能映射表

| OpenWeb | FastComments | 备注 |
| --- | --- | --- |
| 实时更新的对话 | 带实时评论的评论小部件 | 默认实时。新评论会折叠在 “显示 N 条新评论” 按钮后，或使用 `showLiveRightAway` 立即显示。 |
| 评论的点赞和点踩 | 上下投票 | 导入会保留 `likes_count` 和 `dislikes_count`。心形样式和 “禁用投票” 为配置选项。 |
| 文章级别的 Reactions | 页面反应 | 可配置的图标集合，按用户记忆。 |
| 回复和线程 | 多层回复，深度无限 | `maxReplyDepth` 限制嵌套层级（`1` 为平面两层结构）。参见下文的线程导入说明。 |
| 排序：最佳、最新、最旧 | 最相关、最新、最旧 | `defaultSortDirection` 设置站点或 URL 模式的默认排序。 |
| 用户资料 | 用户资料 | 头像、简介、徽章、积分、评论计数、公开活动流和私信。支持 SSO 用户。 |
| 作者徽章 | `displayLabel`, `isAdmin`, `isModerator`, 徽章 | 在 SSO 负载中设置。无需后端查询。 |
| 置顶实时博客更新、突出评论 | 任意评论的置顶/取消置顶 | 版主可在小部件或仪表盘中置顶。AI 模板可自动置顶最高投票评论。 |
| 对话内投票 | 评论投票 | 2 到 10 选项，关闭日期，结果隐私模式，创建者限制。 |
| AMA（Ask Me Anything）格式 | 无专用产品 | 作为普通线程运行，作者的 SSO 用户带 `displayLabel`，问题置顶。 |
| 实时博客 | 无 1:1 对应 | 有实时聊天小部件和聊天模式评论。编辑实时博客仍在 CMS 中。 |
| 主题追踪（关注主题和作者） | 页面订阅 | 用户关注页面，而非主题或作者。无跨文章追踪。 |
| 通知铃 | 小部件内的通知铃 | 回复、提及、线程活动、投票、订阅、徽章、私信。 |
| 邮件通知 | 带模板的邮件通知 | 按用户通过 SSO 标记选择。自定义模板，品牌发件人。 |
| SSO 握手（codeA/codeB） | 安全 SSO（HMAC-SHA256 负载） | 无注册用户调用。服务器端签名负载并传给小部件。 |
| 第三方 SSO（Auth0、Gigya、Piano） | 在您的提供商认证后安全 SSO | 同样的负载。后端在用户登录后签名。 |
| 身份（OpenWeb 注册页面） | 魔法链接登录、简易 SSO | 读者通过邮件链接登录，无密码。 |
| 按文章的审核策略 | 按 URL ID 模式的自定义规则 | 批准模式、垃圾过滤等可按 `*/section/*` 模式变化。 |
| Aida AI 审核 | 垃圾分类器、ChatGPT 4 选项、图像审核、AI 代理 | 代理在干运行模式下启动，可要求人工批准。 |
| 受限词 | 词汇黑名单 | 默认约 450 条短语，可编辑。 |
| 用户静音 | 阻止用户 | 在评论菜单中对单个读者进行阻止。 |
| 封禁 | 封禁 | 永久、定时、影子、IP 哈希、别名感知。 |
| 审核面板 | 审核评论仪表盘 | 过滤、批量撤销、审核组、摘要邮件一键批准。 |
| 通知 Webhook | Webhook | 评论创建、更新、删除。无用户级别的通知 webhook。 |
| 互动仪表盘 | 分析 | 在线用户、热门页面、页面加载、评论、投票、每日账户统计。无广告收入报告。 |
| 对话内广告、独立广告 | 无 | FastComments 不投放广告。您自行在小部件周围保留广告系统。 |
| 社交评价（星级评分） | 评分与评论 | 同一账户下的独立产品。 |
| 社区热门 | 最近讨论和热门页面小部件 | 通过评论活动驱动再循环。 |
| 评论计数器 | 评论计数小部件 | 单个或批量。 |
| 导出评论 API | CSV 导出、API、Webhook | 随时从仪表盘导出。 |
| 导出并删除用户数据（GDPR/CCPA） | 账户与数据删除，欧盟地区 | eu.fastcomments.com 将数据保存在欧盟。提供 DPA。 |
| Android、iOS、React Native SDK | Android、iOS、React Native SDK | 原生 UI、SSO、实时更新、线程、审核操作。 |
| 启动器、虚拟页面、React SDK | 嵌入脚本、`fcConfigs`、React、Vue、Angular、SolidJS 库 | `update()` 与 `destroy()` 用于 SPA。 |

本节其余部分将逐组详细说明。

### 对话、投票和 Reactions

OpenWeb 的 Conversation 是实时线程。FastComments 评论小部件同样实时：评论、编辑、删除、投票和审核操作会推送给所有查看该线程的用户（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">文档</a>）。默认情况下，其他人的新评论会折叠在 “显示 2 条新评论” 按钮后，以免页面跳动。实时事件可使用 `showLiveRightAway` 立即渲染，若希望评论向下滚动可使用 `newCommentsToBottom`。

点赞和点踩变为上下投票。导入器会保留每条评论的计数。如果您的社区习惯单一点赞，可在小部件定制页面将投票样式切换为心形。投票也可以完全关闭。

OpenWeb Reactions 是一个独立小部件，文章上有 2 到 4 个标记图标（<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb 文档</a>）。FastComments 对应的是 Page Reacts：可配置的反应图片集合，附加在评论小部件上，按页面和用户记忆（<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">文档</a>）。Reactions 计数不在 OpenWeb 评论导出中，因此在 FastComments 中从零开始。

排序直接映射。OpenWeb 的 `data-sort-by` 值 best、newest、oldest 对应 Most Relevant、Newest First、Oldest First。使用 `defaultSortDirection`（`MR`、`NF`、`OF`）在代码或自定义规则中设置默认。读者可在小部件中切换。

`data-read-only="true"` 变为 `readonly: true`，阻止新评论、投票、编辑和删除。`data-post-staleness-days` 没有直接对应，但可通过自定义规则对特定 URL ID 模式应用 `readonly`，也可在模板中根据文章年龄切换。`data-messages-count` 是页面大小，可在小部件定制页面设置，范围 10 到 200 条评论。

### 回复和线程

FastComments 默认支持无限嵌套；`maxReplyDepth` 限制嵌套层级（`1` 为平面两层结构）。OpenWeb CSV 包含 `parent_id` 和 `parent_comment_id` 列。当前导入器会把每行作为该页面的顶层评论导入，按日期顺序，保留作者、时间戳、投票、标记计数和审核状态，但不重建父子树。如果您的线程回复密集，请在发送导出时告知我们，我们可以在导入时处理线程结构，而不是留下扁平化的线程。

### 用户资料和徽章

FastComments 用户（包括 SSO 用户）拥有头像、显示名、简介、社交链接、徽章、积分、评论计数、公开活动流和私信功能（<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">文档</a>）。活动、个人资料评论和私信面板可在 SSO 负载中或全局配置中禁用。

OpenWeb 的作者徽章需要调用 `GET /sso/v1/user/{primary_key}` 并将返回的 ID 放入 `data-author-id`。在 FastComments 中，您在用户的 SSO 负载中设置 `displayLabel: 'Author'`（或任意最长 100 字符的标签），并使用 `isAdmin` 或 `isModerator` 标记员工。标签会在每条评论旁边渲染。若需更丰富的系统，可在 “自定义 → 徽章” 中配置图像或文字徽章，基于阈值（评论数、赞数、置顶评论、资深状态、回复速度）自动授予，或手动分配，并可通过 SSO 负载的 `badgeConfig` 设置（<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">文档</a>）。

### 置顶评论、投票和问答

任何版主都可以在小部件的评论菜单或审核仪表盘中置顶或取消置顶评论。置顶的评论会实时推送给所有线程阅读者。如果希望自动化，可使用 AI 代理模板 “Top Comment Pinner”，当评论达到投票阈值时自动置顶（<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">文档</a>）。

OpenWeb 的对话内投票允许在顶层评论上附加 2 到 4 选项的投票。FastComments 的投票同样附加在评论上，提供 2 到 10 选项、可选关闭日期、结果隐私（匿名、仅管理员、所有人）以及 “投票后查看结果” 模式。您可以设置谁可以创建投票（禁用、管理员和版主、所有人），以及匿名读者是否可以投票。投票也通过公共 API 暴露，可从 CMS 创建。

OpenWeb 曾提供 AMA（Ask Me Anything）格式。FastComments 没有专门的 Q&A 产品。实际做法是创建一个专用的 URL ID 线程，客人的 SSO 用户带 `displayLabel`，将介绍性评论置顶，读者在顶层评论提问，客人在同一线程回复，并通过提及和回复通知拉回读者。窗口关闭后可使用 `noNewRootComments` 只允许回复。

Community Spotlight（OpenWeb 的邮件收集、计数和重定向卡片）没有对应产品。小部件支持通过 `headerHTML` 在评论输入框上方自定义 HTML，提供号召性用语，但不提供邮件捕获表单。

### 实时博客

FastComments 没有实时博客产品。OpenWeb 的实时博客是编辑产品：记者在管理员面板发布带链接、推文和视频的更新，读者实时跟随（<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb 文档</a>）。

FastComments 为实时覆盖提供读者侧功能：Live Chat 小部件（`embed-live-chat.min.js`）用于流式聊天，评论小部件可在聊天模式下使用 `showLiveRightAway` 加 `newCommentsToBottom` 与您的实时报道并行。编辑更新仍保留在 CMS 或专用实时博客工具中，FastComments 只负责下方的讨论。评论中支持嵌入媒体（YouTube、SoundCloud 等），因此工作人员以评论形式发布的更新也能带丰富媒体。

### 主题追踪、通知和邮件

OpenWeb 的 Topic Tracker 让读者关注基于页面元数据的主题和作者，并在新文章匹配时收到通知（<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb 文档</a>）。FastComments 没有跨文章的主题或作者关注。读者通过通知铃订阅页面，收到该线程的更新，频率可选每分钟、每小时摘要或每日摘要。如果跨文章关注对您的留存至关重要，这将是您失去的功能。

通知铃的其他映射保持不变。小部件的铃会变红并显示未读计数，列出：对您的回复、您参与的线程回复、提及、对您评论的投票、已订阅页面的活动、徽章授予和私信（<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">文档</a>）。应用内通知通过 WebSocket 实时推送。回复和提及邮件每分钟发送一次，仅针对已批准的评论。

对于 SSO 用户，在负载中传递 `optedInNotifications` 和 `optedInSubscriptionNotifications`，FastComments 会在下次页面加载时更新其偏好。邮件需要负载中提供电子邮件地址。邮件模板可在 “自定义 → 邮件模板” 中按类型和语言编辑，并支持使用您自己的域名并配置 DKIM。版主和管理员可收到每日、每周或每月摘要，包含一键批准、回复和垃圾链接。

OpenWeb 的通知 Webhook 会将每用户的通知事件（`replied-message`、`liked-message`、`topic-by-keyword` 等）发送到您的端点。FastComments 的 Webhook 关注评论资源：创建、更新、删除，可订阅任意数量的端点（<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">文档</a>）。如果您之前使用通知 Webhook 为自有邮件系统供稿，则需要在评论事件上重建该逻辑，或让 FastComments 直接发送邮件。

### SSO：从 codeA/codeB 到签名负载

OpenWeb 的握手包括六步：等待 `spot-im-api-ready`，OpenWeb 生成 `codeA`，您的客户端将其发送到后端，后端确认用户并调用 `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`，OpenWeb 返回 `codeB`，您的客户端将 `codeB` 交回 OpenWeb（<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb 文档</a>）。注销调用 `window.SPOTIM.logout()`。

FastComments 安全 SSO 没有往返，也不需要您侧的新端点。当为已登录用户渲染页面时，后端序列化用户，Base64 编码，并使用 HMAC‑SHA256 以及您的 API secret 进行签名。小部件在请求中发送负载，FastComments 验证签名（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">文档</a>）。Node 示例：

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

时间戳为 epoch 毫秒，若超过两天将被拒绝。对未登录读者，省略这三个签名字段，仅传 `loginURL`（或 `loginCallback` 函数），小部件会显示登录提示而非编辑框。完整的 Node、Java、PHP 示例位于 <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">代码示例仓库</a>。

用户在首次页面加载时创建。不会批量注册任何人。因为 OpenWeb 导入器通过 `user_name` 匹配评论作者，若 SSO 负载携带相同的 `username`，则该用户在首次加载线程时会认领其导入的评论，并可随后编辑或删除。FastComments 也提供 SSO 用户 API，供您预先创建用户。

每次发送负载时，FastComments 会根据负载更新用户记录，因此您侧的显示名或头像变更会在下次页面查看时同步。将字段设为 `null` 可清除。

如果您使用 OpenWeb 的第三方 SSO（Auth0、Gigya、Piano）通过 `window.SPOTIM.startSSOForProvider`，FastComments 流程相同：在提供商完成认证后，后端构建并签名负载。FastComments 侧无需特定提供商的集成配置。

另外还有两种选项。Simple SSO 从客户端直接传递未签名的用户对象，适用于没有后端的平台，并在有电子邮件时将活动标记为已验证（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">文档</a>）。SAML 2.0 通过 Okta、Azure AD 或 ADFS 将您的员工登录到 FastComments 仪表盘本身，支持角色映射，且仅在企业计划中提供（<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">文档</a>）。

### 审核

OpenWeb 的每篇文章审核策略 API 包含四个值：`spot_policy`、`approve_all`、`publish_and_moderate` 和 `require_approval`。FastComments 在 “审核设置” 中配置相同的行为：自动批准开启或关闭，仅对用户的第一条评论需要批准，仅对已验证（登录或 SSO）评论自动批准。规则可全站或针对 `*/politics/*` 等 URL ID 模式应用，以实现分区策略。每条评论（无论是否批准）都会进入 “审核评论” 仪表盘，因此默认视图是 “发布后审核” 模式（<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">文档</a>）。

导入会保留审核状态。OpenWeb 的 `message_status` 为 `approved` 时导入为已批准并已审核；`rejected` 导入为垃圾并已审核；其他状态导入为未批准未审核，出现在您的审核队列中。`reports_count` 成为评论的标记计数。

FastComments 的自动审核是分层的，而不是像 Aida 那样的单一系统：

- 垃圾分类器，持续训练，可作为所有租户共享模型或仅限您租户，具备对长期或常被置顶用户放宽过滤的信任因子。
- 可选的 ChatGPT 4 垃圾检查（Flex 计费）。
- 图像内容审核，支持低、中、高灵敏度。
- 约 450 条默认短语的词汇黑名单，可编辑，匹配时用星号遮蔽。这里放置 OpenWeb 的受限词。
- 标记阈值，达到 N 次标记自动隐藏评论。
- 重复和近似重复消息防护，始终开启。
- AI 代理：基于事件的代理，拥有明确的工具白名单（标记垃圾、批准、锁定、置顶、私信警告、封禁、授予徽章、回复）。每个代理默认干运行，敏感工具可通过人工批准解锁，所有操作均记录理由和置信度分数。

OpenWeb 的用户静音 API 允许一个 SSO 读者静音另一个。FastComments 对应的是评论菜单中的 “阻止用户”，对任何已登录读者均可使用。封禁是版主操作：永久或设定时长，可选影子封禁（用户仍看到自己的评论，其他人看不到），可选基于哈希的 IP，支持将同一邮箱的别名视为同一地址。封禁用户列表可按邮箱、姓名、版主和触发封禁的评论搜索。

“审核评论” 仪表盘支持过滤（需要审核、需要批准、垃圾、已标记、来自封禁用户）和全文搜索，批量操作支持撤销和暂停，“全选匹配项” 适用于大队列，审核组可让您的体育编辑部仅看到体育线程，评论日志显示邮件是否发送以及原因，可生成可共享的过滤链接。版主仅拥有仪表盘权限，不能更改设置或导入数据。

### 分析

FastComments 分析显示当前在线用户、每页在线人数、按评论数或实时阅读人数的热门页面，以及每日的页面加载、评论、投票和新账户统计（<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">文档</a>）。版主统计单独列出。计数接近实时，最多延迟一分钟，且每次页面加载都会计数，而非抽样。

您不会在这里看到任何广告填充、CPM 或收入数据，因为没有广告。如果 OpenWeb 的仪表盘是您用于互动‑收入报告的来源，那么该报告将转移到您自己的广告系统。

### 盈利

OpenWeb 在对话内外投放广告，并提供独立广告单元，活动通过您的 OpenWeb 联系人设置（<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb 文档</a>）。FastComments 不在小部件中投放广告，不进行收入分成，也不加载第三方广告或跟踪脚本。小部件是您嵌入的 iframe，广告位由您自行在上下方放置并使用已有的广告系统。

权衡是明确的：您失去 OpenWeb 为您支付的费用，获得固定、可预测的成本以及不向页面添加广告请求的小部件。Flex 与 Pro 计划去除品牌标识，Pro 与 Enterprise 提供白标。

### 数据导出与隐私

所有评论数据可随时从 FastComments 仪表盘导出为 CSV，日期采用 UTC ISO 格式，同样的数据也可通过 API 获取。Webhook 支持持续同步。导入文件在导入完成后即从 FastComments 删除。

针对 GDPR 与 CCPA，OpenWeb 提供导出与删除 API，已删除用户的评论会附加到随机访客账户（<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb 文档</a>）。FastComments 支持数据导出与删除请求，提供数据处理协议（DPA），并在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 运行独立的欧盟部署，数据仅在欧盟节点复制。若您的读者在欧洲，请在该域创建账户。欧盟地区的 AI 代理封禁始终需要人工批准，以满足 DSA 第 17 条。

全球部署的评论数据在包括新加坡节点在内的多个地区复制，且小部件由 FastComments 自有 DNS 与 CDN 提供。嵌入脚本磁盘体积低于 30 KB，压缩后约 6 KB。

### 移动 SDK

OpenWeb 提供 Android、iOS 与 React Native SDK，支持对话、文章、认证、通知、Reactions 与对话内投票。FastComments 提供原生 <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>、<a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> 与 <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> 库，具备线程评论、WebSocket 实时更新、安全 SSO、投票、提及、图片上传、审核操作（标记、置顶、锁定、阻止）、主题定制、实时聊天模式以及社交动态组件。欧盟地区通过配置标志启用。由于没有广告，亦无单独的广告 SDK。

### 嵌入与 SPA 集成

OpenWeb 启动器和容器：

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments 对应：

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

您的租户 ID 可在 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">嵌入代码页面</a>获取。`data-article-tags` 没有对应项，因为没有主题追踪；评论中的标签是另一种功能。

对于无限滚动和单页应用，OpenWeb 的虚拟页面方法是每篇文章一个容器。FastComments 中您对每个线程调用 `FastCommentsUI(element, config)`，随后使用 `instance.update(newConfig)` 更换 URL ID，或 `instance.destroy()` 移除（<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">文档</a>）。React、Vue、Angular 与 SolidJS 库在配置属性变化时会自动处理。生命周期回调（`onInit`、`onRender`、`commentCountUpdated`、`onReplySuccess`、`onVoteSuccess`、`onAuthenticationChange`、`onCommentSubmitStart`）取代了您之前监听的 `spot-im-*` DOM 事件。

索引页的评论计数使用评论计数小部件，单个或批量。为 SEO 起见，评论直接渲染到页面供搜索引擎爬虫读取，而不是在 iframe 中，因此无需 SEO API 调用进行配置。

### 步骤式切换

**1. 创建账户并配置基础设置。** 在 fastcomments.com 或 eu.fastcomments.com 注册。设置审核、词汇黑名单、投票样式、默认排序和小部件自定义 CSS。添加版主和审核组。如果您有大量管理员用户，支持为您导入。

**2. 进行首次导入。** 前往 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">管理数据 → 导入</a>，选择 OpenWeb（.csv）并上传。导入作为后台任务运行，页面显示行数和状态，完成后会收到邮件（<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">文档</a>）。每个 OpenWeb 消息 ID 会映射为 FastComments 评论 ID，重新导入不会产生重复。

**3. 验证计数。** 将作业的行数与您的导出对比。打开几个高流量的 URL ID 在审核仪表盘中抽查作者、日期、投票总数和审核状态。确认被拒评论显示为垃圾，待处理评论位于队列中。

**4. 构建 SSO 负载。** 在后端实现上述签名代码，使用与 OpenWeb 相同的 `id` 与 `username`。在暂存页面使用员工账号测试：导入的评论显示为该用户，编辑和删除出现在其评论菜单中。

**5. 在暂存模板上替换嵌入代码。** 用 FastComments 代码片段替换启动器和容器，映射 `data-post-id` 为 `urlId`，`data-post-url` 为 `url`。移除 `window.SPOTIM.logout()` 与 `spot-im-*` 监听器，或映射到相应回调。将 CSS 放在自定义规则中，而非硬编码，以便在每次 FastComments 更新时自动测试。

**6. 并行运行。** 在某个栏目或一定比例的文章上使用 FastComments，其他保持 OpenWeb。OpenWeb 端无需更改。监控审核队列和分析页面。FastComments 页面期间的评论不会出现在您的 OpenWeb 导出中，因此请在最终导入前计划好窗口，而不是之后。

**7. CSP 与 DNS。** 若使用内容安全策略，允许 `cdn.fastcomments.com` 与 `fastcomments.com`（或 `eu.fastcomments.com`）用于 `script-src`、`frame-src` 与 `connect-src`，并在移除启动器后删除 `spot.im` 与 `openweb.com` 条目。您的 DNS 不需要更改。由于 URL ID 匹配，无需重定向。

**8. 最终导入并上线。** 再次导出覆盖并行运行期间的 OpenWeb 数据，上传（重新导入安全），然后在所有页面部署模板更改并移除启动器、Reactions、Topic Tracker、Spotlight、铃和广告容器。

**9. 上线检查清单。**

- 在两种浏览器的生产文章上看到实时评论。
- SSO 登录、注销，并使用真实订阅者账号发表评论。
- 版主收到摘要并能从中批准。
- 回复和提及邮件到达并指向正确页面。
- 封禁列表和词汇黑名单已填充。
- 页面反应和评论计数在原 Reactions 与计数器位置渲染。
- CSP 报告无异常。
- 再次比较导出与仪表盘的评论计数。

### 失去的功能与不同之处

直面差距：

- **实时博客。** 无对应。请在 CMS 或实时博客工具中保留，FastComments 只负责下方讨论。
- **主题追踪。** 无跨文章的主题或作者关注。仅页面订阅。
- **社区聚光灯。** 无 CTA 卡片产品。`headerHTML` 可在编辑器上方放置信息，但不提供邮件捕获。
- **广告收入。** 无。小部件本身无广告。
- **通知 webhook。** 仅针对评论事件的 webhook，非每用户通知事件。
- **导入时的线程结构。** 当前导入器将回复扁平化为同页顶层评论。如需重建树结构，请告知我们。
- **Reactions 历史。** 文章级别的 reaction 计数不在评论导出中，需重新开始。
- **投票历史。** 投票定义和投票数不在评论导出中；投票的评论文本会导入，投票本身不会。
- **登录模型。** 没有 SSO 的读者通过魔法链接登录，而非密码或社交登录按钮。
- **人工审核团队。** OpenWeb 自带 Aida 审核团队。FastComments 提供工具、分类器和代理，人工审核由您自行负责。

您获得的好处：仅需一个小脚本且无广告请求的 widget，能够通过批量操作和代理让少数人管理大站点的审核，SSO 只需签名函数而非完整协议，以及不受法院监管的供应商。

### 时间表与免费导入优惠

对于拥有单一 SSO 集成和数十万条评论的出版商，计划约 1‑2 周：导出与首次导入 1‑2 天，SSO 与模板几天，平行运行窗口，然后最终导入与切换。平台已有此规模的案例：United Cloud 运营十余门户和数百万条 FastComments 评论，itsfoss.com 通过同一自助导入器迁移了 88,000 条历史评论。

FastComments 免费导入您的 OpenWeb CSV 导出，帮助您在切换期间并行运行 OpenWeb 与 FastComments，并在迁移过程中提供支持，包括线程和用户匹配问题。企业计划提供 SLA、工作时间内一小时内回复支持，以及在您自有云账户中的隔离云部署选项（<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">文档</a>）。Flex 基于使用量的计费适用于希望无合同起步的站点。

请发送邮件至 <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a>，说明您的导出规模和 SSO 设置，我们将提供方案。

### 结论

今天就导出数据。其余迁移工作机械化：相同的文章 ID 成为 URL ID，相同的用户名通过 SSO 认领评论，审核状态保留，嵌入代码直接替换。FastComments 与 OpenWeb 的差异已在上文列出，您可据此做出决策。

干杯！

{{/isPost}}

---