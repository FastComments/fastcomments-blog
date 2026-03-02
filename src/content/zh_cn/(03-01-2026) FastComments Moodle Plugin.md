---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle 插件[/postlink]

{{#unless isPost}}
FastComments 现在提供了一个专用的 Moodle 插件，具有 SSO、线程评论和协作聊天功能，适用于您的课程。
{{/unless}}

{{#isPost}}

### 新功能

我们很高兴地宣布正式发布 FastComments 插件用于 Moodle。如果您一直在使用 Moodle，并希望为您的课程添加实时、线程评论或协作聊天，这个插件使其变得简单。它用一个合适的 Moodle 插件替代了旧的手动 PHP 方法，该插件在几分钟内安装并与您现有的 Moodle 用户账户集成。该插件兼容 Moodle 4.1 及更高版本，源代码可在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 上获取。

### 开始使用

要安装，请从 [GitHub 仓库](https://github.com/FastComments/fastcomments-moodle) 下载 ZIP 文件并解压到 `<moodle-root>/local/fastcomments`。然后以站点管理员身份登录并访问 **站点管理 > 通知**。Moodle 将检测到新插件并自动运行安装。

安装完成后，前往 **站点管理 > 插件 > 本地插件 > FastComments** 进行配置。您需要您的 **租户 ID**（在您的 FastComments 仪表板中找到）和 **API 密钥**，如果您想使用安全 SSO，我们建议这样做。

请注意，从 GitHub 手动下载是临时的，等待插件在 Moodle 插件目录中获得批准。一旦获得批准，您将能够直接从 Moodle 的插件安装器中安装它。

### 评论样式

该插件支持三种评论样式，您可以选择最适合您的学生和课程结构的方式。

**评论** 模式在页面内容下方显示一个完整的评论小部件。学生可以获得线程回复、@提及、点赞和点踩、富文本编辑器，以及用于订阅页面新评论的通知铃铛。

<div class="text-center">
    <div class="sm">课程页面上的评论</div>
    <img src="images/moodle-course-comments.png" alt="课程评论" title="课程评论" />
</div>

**协作聊天** 模式在页面顶部添加一个栏，提示用户选择文本并开始讨论。被突出显示的文本与内容锚定，因此对话与正在讨论的内容保持紧密相关。它还显示在线用户和活动讨论的数量。此模式不渲染底部小部件。

<div class="text-center">
    <div class="sm">锚定于所选文本的协作聊天</div>
    <img src="images/moodle-collab-chat.png" alt="协作聊天" title="协作聊天" />
</div>

**协作聊天 + 评论** 同时提供两者。学生可以突出文本以进行行内讨论，并且还可以使用内容下方的完整评论小部件。这对于需要快速的行内反馈和更长线程对话的课程非常有用。

<div class="text-center">
    <div class="sm">页面上同时激活的两种评论样式</div>
    <img src="images/moodle-page-comments.png" alt="页面评论" title="页面评论" />
</div>

### 自动 SSO

该插件支持三种 SSO 模式。**安全 SSO** 是推荐选项。它使用您的 API 密钥在服务器端通过 HMAC-SHA256 签署用户身份，因此凭据不会暴露在客户端。使用安全 SSO，Moodle 管理员将自动同步为 FastComments 版主，这意味着您的站点管理员可以在无需额外设置的情况下管理评论。用户头像、名称和电子邮件地址都被安全传递。

**简单 SSO** 客户端无签名地传递用户数据（名称、电子邮件、头像）。设置快速但不如 HMAC 方法安全。最后，**无** 完全禁用 SSO，因此用户以匿名方式评论。

### 用户通知偏好

学生可以直接从他们的 Moodle 个人资料管理他们的 FastComments 通知设置。在 **FastComments** 部分，他们可以切换回复通知（当有人回复他们的评论时收到电子邮件）和订阅通知（为他们已订阅的主题接收电子邮件）。这将所有内容保留在一个地方，并让学生控制他们收到的电子邮件量。

### 结论

Moodle 插件现在可用。有关完整的设置指南，请查看 [Moodle 集成指南](https://docs.fastcomments.com/guide-installation-moodle.html)，源代码在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 上。请在下方告知我们您的反馈意见！

干杯！

{{/isPost}}

---