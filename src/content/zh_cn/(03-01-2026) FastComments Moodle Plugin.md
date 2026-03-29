---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle 插件[/postlink]

{{#unless isPost}}
FastComments 现在有了专用的 Moodle 插件，支持 SSO、线程评论和课程协作聊天。
{{/unless}}

{{#isPost}}

### 新功能

我们很高兴地宣布 FastComments 的官方 Moodle 插件。如果您一直在使用 Moodle 并想为您的课程添加实时、线程评论或协作聊天，这个插件可以轻松实现。它用一个合适的 Moodle 插件替代了旧的手动 PHP 方法，只需几分钟即可安装，并与您现有的 Moodle 用户账户集成。该插件支持 Moodle 4.1 及更高版本，源代码可在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 上获取。

### 开始使用

要安装，请从 [Moodle 插件目录](https://moodle.org/plugins/local_fastcomments) 获取插件，并通过您的 Moodle 网站的插件安装程序进行安装。或者，您可以下载并解压缩到 `<moodle-root>/local/fastcomments`，然后以网站管理员身份登录，并访问 **网站管理 > 通知**。Moodle 将检测到新插件并自动运行安装。

安装完成后，前往 **网站管理 > 插件 > 本地插件 > FastComments** 进行配置。您需要您的 **租户 ID**（在您的 FastComments 仪表板中找到）和 **API 秘密**，如果您想使用安全 SSO，这也是我们推荐的。

### 评论样式

该插件支持三种评论样式，因此您可以选择最适合您的学生和课程结构的样式。

**评论**模式在页面内容下方放置了一个完整的评论小部件。学生可以进行线程回复、@提及、点赞和点踩，使用富文本编辑器，以及订阅页面新评论的通知铃铛。

<div class="text-center">
    <div class="sm">课程页面上的评论</div>
    <img src="images/moodle-course-comments.png" alt="课程评论" title="课程评论" />
</div>

**协作聊天**模式在页面顶部添加了一个栏，提示用户选择文本并启动讨论。高亮的文本与内容相连，因此对话与正在讨论的内容保持一致。它还显示在线用户和活跃讨论的数量。此模式不渲染底部小部件。

<div class="text-center">
    <div class="sm">锚定选定文本的协作聊天</div>
    <img src="images/moodle-collab-chat.png" alt="协作聊天" title="协作聊天" />
</div>

**协作聊天 + 评论**同时提供两者。学生可以高亮文本进行内联讨论，也可以在内容下方使用完整的评论小部件。这对希望同时获得快速内联反馈和更长线程对话的课程非常有利。

<div class="text-center">
    <div class="sm">页面上同时激活两种评论样式</div>
    <img src="images/moodle-page-comments.png" alt="页面评论" title="页面评论" />
</div>

### 自动 SSO

该插件支持三种 SSO 模式。**安全 SSO**是推荐的选项。它使用您的 API 秘密在服务器端对用户身份进行 HMAC-SHA256 签名，因此凭据永远不会在客户端暴露。使用安全 SSO，Moodle 管理员会自动同步为 FastComments 的版主，这意味着您的网站管理员可以在没有额外设置的情况下审核评论。用户头像、姓名和电子邮件地址都是安全传递的。

**简单 SSO**在客户端传递用户数据（姓名、电子邮件、头像），不带签名。虽然设置较快，但安全性不如 HMAC 方法。最后，**无**则完全禁用 SSO，因此用户以匿名方式评论。

### 用户通知偏好

学生可以直接从他们的 Moodle 个人资料中管理 FastComments 通知设置。在 **FastComments** 部分，他们可以切换回复通知（当有人回复他们的评论时收到电子邮件）和订阅通知（收到他们已订阅的线程的电子邮件）。这将所有内容集中在一个地方，并让学生控制他们接收的电子邮件数量。

### 结论

Moodle 插件现在可以使用。有关完整的设置指南，请查看
[Moodle 集成指南](https://docs.fastcomments.com/guide-installation-moodle.html)，源代码在 [GitHub](https://github.com/FastComments/fastcomments-moodle) 上。请告诉我们您的反馈！

干杯！

{{/isPost}}

---