---
[category:Migration]

###### [postdate]
# [postlink]从 IntenseDebate 迁移到 FastComments[/postlink]

{{#unless isPost}}
阅读此文章以了解如何从 IntenseDebate 完全迁移到 FastComments。
{{/unless}}

{{#isPost}}
## 如果您使用 WordPress

FastComments 有一个专用的 WordPress 插件：<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

该插件使安装、设置和同步变得非常简单。如果您选择此方法，可以忽略这里其余的说明。

## 手动、通用安装

### 导出您现有的评论

要从 IntenseDebate 的管理仪表板导出您网站的评论和用户数据，请转到 Sites -> Your Site -> Tools -> XML Export。

您会注意到通过电子邮件获得的结果文件有一个神秘的 "gz" 文件扩展名。如果您对技术稍微了解，您可能知道这代表 "gzip"，它是一种流行且高效的文件压缩方式。

### 不要打开 "gz" 文件

默认的 Windows 10 安装无法打开来自 IntenseDebate 的文件。这没关系，因为使用 FastComments 您不必打开它。我们的后端可以理解该压缩文件。

之后，如果您已登录，可以<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">点击这里导入文件</a>. 从下拉菜单中选择 IntenseDebate 并上传您的文件。

### 等待几分钟

FastComments 的导入是“异步”的。这意味着上传文件和处理它是两个独立的步骤。

因此，根据您的文件大小，您可能会立即收到成功消息。在导入页面的底部有一个表格 - 每一行代表一次导入尝试。
您可以安全地刷新此页面以查看导入的状态及到目前为止已导入的行数。

### 完成后

导入完成时您将收到一封电子邮件 - 无论是成功还是失败。文件上传成功后，您可以关闭页面并查看导入页面中的导入。它的状态会显示为“请求中”，当它开始时状态将变为“运行中”。

您可以安全地重新导入多次 - 但是如果您的导入失败，<a href="https://fastcomments.com/auth/my-account/help" target="_blank">请与我们联系</a>，以便我们可以提供帮助。

### 用 FastComments 替换 IntenseDebate 代码

这只是将 IntenseDebate 提供的小代码片段移除，并用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们自己的代码</a>替换。
您甚至可以暂时在同一网站上同时运行 IntenseDebate 和 FastComments 进行测试和调整外观。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。

如果您正在使用 IntenseDebate 小部件并希望替换它们，请<a href="https://fastcomments.com/auth/my-account/help" target="_blank">联系我们</a>。

### 同时迁移 URL

评论本身与 IntenseDebate 导出的“链接”字段相关，所以只要您的 URL 不变，切换就很简单。如果您想迁移 URL 并保留您的评论，请<a href="https://fastcomments.com/auth/my-account/help" target="_blank">告诉我们</a>，通过向我们发送旧的和新的 URL。帮助页面允许上传小文本文件，因此如果
您正在迁移不止几个 URL，请创建一个 Excel 表格。

### 总结

1. 导出您的数据
2. 导入到 FastComments
3. 用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a> JavaScript 代码片段进行替换

## 为什么 IntenseDebate 不会将我的文件发送给我？
对于较大的网站，IntenseDebate 可能由于其技术限制无法创建导出的文件。我们有能力抓取您现有的网站并提取评论，但这可能相当定制，并且由于涉及的时间，会要求您拥有支持包。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">您可以在这里请求帮助</a>。
{{/isPost}}

---