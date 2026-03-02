---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle 插件[/postlink]

{{#unless isPost}}
FastComments 现在提供了一个专用的 Moodle 插件，具有 SSO、线程评论和协作聊天功能，适用于您的课程。
{{/unless}}

{{#isPost}}

### 新内容

我们很高兴地宣布官方的 FastComments Moodle 插件。如果您一直在使用 Moodle 并希望为您的课程添加实时、线程评论或协作聊天，这个插件让您轻松实现。它取代了旧的手动 PHP 方法，提供一个适当的 Moodle 插件，几分钟内即可安装，并与您现有的 Moodle 用户账户集成。该插件与 Moodle 4.1 及更高版本兼容，源代码可在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 获取。

### 入门指南

要安装，请从 [GitHub 储存库](https://github.com/FastComments/fastcomments-moodle) 下载 ZIP 文件并将其解压到 `<moodle-root>/local/fastcomments`。然后以站点管理员身份登录，访问 **站点管理 > 通知**。Moodle 将检测到新插件并自动运行安装。

安装后，前往 **站点管理 > 插件 > 本地插件 > FastComments** 进行配置。您需要提供您的 **租户 ID**（在您的 FastComments 控制面板中找到）和 **API 密钥**，如果您希望使用安全 SSO，我们建议您这样做。

请注意，手动从 GitHub 下载是临时的，我们在等待插件在 Moodle 插件目录中的批准。一旦获批，您将能够直接从 Moodle 的插件安装程序中安装它。

### 评论样式

该插件支持三种评论样式，因此您可以选择最适合您的学生和课程结构的样式。

**评论**模式在页面内容下方放置一个完整的评论小部件。学生可以获得线程回复、@提及、点赞和点踩、富文本编辑器，以及用于订阅页面新评论的通知铃铛。

<div class="text-center">
    <div class="sm">课程页面上的评论</div>
    <img src="images/moodle-course-comments.png" alt="课程评论" title="课程评论" />
</div>

**协作聊天**模式在页面顶部添加一个栏，提示用户选择文本并开始讨论。被高亮的文本与内容挂钩，因此对话保持与正在讨论的内容相关。它还显示在线用户和活跃讨论的数量。此模式不渲染底部小部件。

<div class="text-center">
    <div class="sm">锚定到所选文本的协作聊天</div>
    <img src="images/moodle-collab-chat.png" alt="协作聊天" title="协作聊天" />
</div>

**协作聊天 + 评论**同时提供这两种功能。学生可以高亮文本以进行行内讨论，同时也可以使用内容下方的完整评论小部件。这对于希望同时获取快速行内反馈和较长线程讨论的课程非常适合。

<div class="text-center">
    <div class="sm">页面上同时激活两种评论样式</div>
    <img src="images/moodle-page-comments.png" alt="页面评论" title="页面评论" />
</div>

### SSO 一切正常

该插件支持三种 SSO 模式。**安全 SSO**是推荐选项。它服务器端签署用户身份，使用 HMAC-SHA256 和您的 API 密钥，因此凭据从未在客户端暴露。使用安全 SSO，Moodle 管理员会自动同步为 FastComments 调解员，这意味着您的网站管理员可以无需额外设置即可审核评论。用户头像、姓名和电子邮件地址都是安全传递的。

**简单 SSO**在没有签名的情况下在客户端传递用户数据（姓名、电子邮件、头像）。设置快速，但安全性低于 HMAC 方法。最后，**无**完全禁用 SSO，因此用户可以匿名评论。

### 用户通知首选项

学生可以直接从他们的 Moodle 个人资料管理 FastComments 通知设置。在 **FastComments** 部分，他们可以切换回复通知（当有人回复他们的评论时收到电子邮件）和订阅通知（收到他们订阅的线程的电子邮件）。这使一切集中在一个地方，并让学生掌控他们收到的电子邮件数量。

### 结论

Moodle 插件现已可用。有关完整的设置指南，请查看 [Moodle 集成指南](https://docs.fastcomments.com/guide-installation-moodle.html)，源代码在 [GitHub](https://github.com/FastComments/fastcomments-moodle)。如果您有任何反馈，请在下面告知我们！

干杯！

{{/isPost}}

---