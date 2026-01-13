---
[category:Migration]
###### [postdate]
# [postlink]从 JustComments 迁移到 FastComments[/postlink]

{{#unless isPost}}
阅读本文以了解如何完全从 JustComments 迁移到 FastComments。

这通常只需删除他们提供的小代码片段，并将其替换为 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们自己的</a>。
您甚至可以暂时在同一网站上同时运行 JustComments 和 FastComments，以测试和调整外观和感觉。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。
{{/unless}}

{{#isPost}}

从2021年开始，JustComments 将关闭。在 FastComments，我们让您轻松切换到我们的平台。

您会发现 FastComments 提供许多您习惯的功能，还有更多其他功能。

## 定价差异

JustComments 使用基于积分的系统，而 FastComments 使用分层模型，提供三个层级。通过 FastComments，我们的 $5/月计划
覆盖您每月最多 1M 页加载量。超过此量的计划是 Pro 和 Enterprise 计划，您可以在我们的 <a href="https://fastcomments.com/traffic-pricing" target="_blank">定价页面</a> 查看。

## 如果您在 WordPress 上

FastComments 有一个专用的 WordPress 插件： <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

该插件使安装、设置和同步变得非常简单。然而，JustComments 不会将您的评论同步回您的 WordPress 安装，这正是 FastComments 所做的。这意味着在同步后，您需要按照下面的导出和导入步骤进行操作。

## 导出您现有的评论

FastComments 导入工具将迁移您的评论、用户名、用户头像和内联图像。我们将无缝地将图像移动到我们的服务器。

要从 JustComments 下载您的评论数据，请访问您的账户页面。

## 导入 FastComments 管理后台

无需担心打开 JustComments 导出的文件。

如果您已登录，可以 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">在这里导入文件</a>。

从下拉列表中选择 JustComments 并上传您的文件。

### 页面标识符

导入时，您将看到选择页面 URL 或“项目 ID”的选项。如果您不确定选择哪个，请选择页面 URL。如果您与 JustComments 有集成，并在小部件配置中指定项目 ID，则选择项目 ID。

### 等待几分钟

FastComments 导入是“异步”的。这意味着上传文件和处理是两个独立的步骤。

因此，根据您的文件大小，您可能会立即收到成功消息。在导入页面底部有一个表格 - 每一行代表一个导入尝试。
您可以安全地刷新此页面，以查看导入的状态和到目前为止已导入的行数。

### 完成时

导入完成时，您将收到电子邮件 - 无论是成功与否。在文件上传成功并且您可以在导入页面上看到导入后，您可以关闭页面。状态将为“已请求”，当开始时状态将为“正在运行”。

可以根据需要安全地重新导入多次 - 但是如果您的导入失败，请 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">联系我</a>，以便我们提供帮助。

### 用 FastComments 替换 JustComments 代码

如果您没有使用 JustComments WordPress 插件，则只需删除他们给您的小代码片段，并用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们自己的</a> 替换。
您甚至可以暂时在同一网站上同时运行 JustComments 和 FastComments，以测试和调整外观和感觉。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。

### 同时迁移 URL

评论默认与 JustComments 导出中的“pageUrl”字段绑定，因此只要您的 URL 不变，切换就很简单。如果您想迁移 URL 并保留您的评论，请 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">告诉我们</a>，通过发送旧 URL 和新 URL。帮助页面允许上传小文本文件，因此如果您要迁移的不止几个 URL，请创建一个 Excel 表。

## 小结

1. 导出您的数据
2. 导入 FastComments
3. 如果未在 WordPress 上，交换 JustComments JavaScript 代码片段与 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a>

{{/isPost}}