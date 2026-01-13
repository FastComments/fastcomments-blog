---
[category:Migration]
###### [postdate]
# [postlink]从 Muut 评论迁移到 FastComments[/postlink]

{{#unless isPost}}
阅读本篇文章，了解如何从 Muut 完全迁移到 FastComments。

这只是删除 Muut 给你的简短代码片段，并用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们自己的代码</a> 替换它的简单问题。
你甚至可以暂时在同一网站上同时运行 Muut 和 FastComments，以测试和调整外观和感觉。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以帮助您</a>。
{{/unless}}

{{#isPost}}
### 导出您的现有评论

FastComments 导入工具将迁移您的评论、用户名、用户头像和嵌入图片。我们将无缝迁移这些图片到我们的服务器。

要从 Muut 的管理仪表板导出您网站的评论和用户数据，请前往集成，然后选择 JSON 导出。

您会注意到，通过电子邮件收到的文件结果有一个神秘的 "gz" 文件扩展名。如果您稍微懂一些技术，您可能知道这代表 "gzip"，这是一种流行且高效的压缩文件的方法。

### 不要打开 "gz" 文件

默认的 Windows 10 安装无法打开 Muut 的文件。这没关系，因为在 FastComments 中您不需要这样。我们的后端可以理解这个压缩文件。

之后，如果您已经登录，您可以在 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">这里导入文件</a>。从下拉菜单中选择 Muut 并上传您的文件。

您需输入您的网站 URL。这是因为 Muut 并没有在导出中提供该信息。

### 等待几分钟

FastComments 的导入是 "异步" 的。这意味着上传文件和处理文件是两个独立的步骤。

因此，根据您的文件大小，您可能会立即收到成功消息。在导入页面底部有一个表格 - 每一行代表一次导入尝试。
您可以安全地刷新此页面，以查看导入的状态以及到目前为止已导入的行数。

### 完成后

导入完成时，您会收到电子邮件 - 无论成功与否。在文件成功上传并且您在导入页面上看到导入后，您可以关闭该页面。它的状态将显示为 "请求中"，当它开始时状态将变为 "运行中"。

可以安全地重新导入多次 - 但如果您的导入失败，请 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">联系我们</a>，以便我们可以提供帮助。

### 用 FastComments 替换 Muut 代码

这只是删除 Muut 给你的简短代码片段，并用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们自己的代码</a> 替换它的简单问题。
你甚至可以暂时在同一网站上同时运行 Muut 和 FastComments，以测试和调整外观和感觉。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以帮助您</a>。

### 同时迁移 URL

评论本身是与 Muut 导出的 "链接" 字段关联的，因此只要您的 URL 不变，切换就很简单。如果您希望迁移 URL 并保留您的评论，请通过发送旧的和新的 URL <a href="https://fastcomments.com/auth/my-account/help" target="_blank">告知我们</a>。帮助页面允许上传小文本文件，因此如果您迁移的不止几个 URL，请创建一个 Excel 表。

### 总结

1. 导出您的数据
2. 导入到 FastComments
3. 用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a> JavaScript 代码片段进行替换

## 为什么 Muut 不会把我的文件发送给我？
对于较大的网站，Muut 可能由于其技术限制无法创建导出文件。我们有能力抓取您现有的网站并提取评论，但这可能相当定制，考虑到所需时间，您需要拥有支持包。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">您可以在这里请求帮助</a>。
{{/isPost}}

---