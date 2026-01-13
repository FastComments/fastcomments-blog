---
[category:Migration]
###### [postdate]
# [postlink]从 Hyvor Talk 迁移到 FastComments[/postlink]

{{#unless isPost}}
阅读此帖子以了解如何从 Hyvor Talk 完全迁移到 FastComments。

如果您使用的是手动代码安装与 Hyvor Talk，那么只需删除他们提供的小代码片段，并用 <a href="https://fastcomments.com/install-wizard" target="_blank">我们自己的</a> 进行替换即可。
您甚至可以在同一网站上暂时运行 Hyvor 和 FastComments，以测试和调整外观和感觉。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以帮助您</a>。

如果您没有使用代码片段安装，那么说明将根据您的平台而有所不同 - 再次 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">与我们联系</a>。
{{/unless}}

{{#isPost}}

## 如果您使用 WordPress

FastComments 有一个专用的 WordPress 插件： <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

该插件使安装、设置和同步变得非常简单。如果您选择此路线，则可以忽略此处的其余说明。只需确保您已将 Hyvor Talk 的评论同步回您的 WordPress 安装。

如果您遇到一些客户报告的问题，可能需要使用我们的 WordPress 插件，但可以通过手动从 Hyvor Talk 导出数据进行数据导入。
您可以在 [管理数据 -> 导入评论](https://fastcomments.com/auth/my-account/manage-data/import) 中找到数据导入。

## 手动通用安装

### 导出您现有的评论

FastComments 导入器将迁移您的评论线程、用户名、用户头像、表情符号和内联图片。我们将无缝地将图片迁移到我们的服务器。

截至 2022 年，Hyvor Talk 不会导出电子邮件或上下投票。如果您能从他们那里获得带有这些信息的导出文件，我们可以进行导入。

### 导入 .JSON 文件

在下载了 Hyvor 导出文件后，登录到您的 FastComments 仪表板，然后 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">在这里导入文件</a>。从下拉菜单中选择 Hyvor Talk 并上传您的文件。

### 等待几分钟

FastComments 的导入是“异步”的。这意味着上传文件和处理它是两个不同的步骤。

因此，根据您的文件大小，您可能会立即收到成功消息。在导入页面底部有一个表格 - 每一行代表一次导入尝试。
您可以安全地刷新此页面，以查看您的导入状态以及到目前为止已导入的行数。

### 当它完成时

导入完成时，无论成功与否，您都会收到一封电子邮件。您可以在文件上传成功并且在导入页面看到您的导入后关闭该页面。它的状态会显示“已请求”，当开始时状态将为“正在运行”。

可以安全地重新导入多次 - 但是如果您的导入失败，请 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">与我们联系</a>，以便我们能提供帮助。

### 用 FastComments 替换 Hyvor Talk 代码

如果您使用的是基于代码片段的安装与 Hyvor，那么只需删除他们提供的小代码片段，并用 <a href="https://fastcomments.com/install-wizard" target="_blank">我们自己的</a> 进行替换即可。
我们还支持许多前端框架，您可以在 [这里找到](https://fastcomments.com/install-wizard)。您甚至可以在同一网站上暂时运行 Hyvor 和 FastComments，以测试和调整外观和感觉。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以帮助您</a>。

如果您没有使用基于代码片段的安装，则说明将根据您的平台而有所不同 - 再次 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">与我们联系</a>。

我们提供自助安装向导 [在这里](https://fastcomments.com/install-wizard)。

### 同时迁移 URL

评论本身与导出中的页面 ID 字段绑定，因此只要您的 URL 不变，切换就很简单。如果您想迁移 URL 并保留您的评论，请 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">告知我们</a>，并发送旧的和新的 URL。帮助页面允许上传小的文本文件，因此如果您迁移的不止几个 URL，请创建一个 Excel 表格。

### 欧盟

如果您在欧盟，您可能希望在 [eu.fastcomments.com](https://eu.fastcomments.com) 创建您的帐户，以便您的客户数据保留在欧盟内。

### 概括

1. 导出您的数据
2. 导入到 FastComments
3. 用 <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments 的</a> JavaScript 代码替换 Hyvor 的

## 为什么 Hyvor 不会发送我的文件？
对于较大的站点，Hyvor 可能由于其自身的技术限制而无法创建导出的文件。我们有能力抓取您现有站点并提取评论，但这可能相当定制，并且由于涉及的时间，将要求您购买支持套餐。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">您可以在这里请求帮助</a>。
{{/isPost}}

---