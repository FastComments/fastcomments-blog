---
[category:Migration]
###### [postdate]
# [postlink]从 Commento 迁移到 FastComments[/postlink]

{{#unless isPost}}
阅读此文章以了解如何从 Commento 完全迁移到 FastComments。

## 注意事项

Commento 并没有提供完整的 URL。他们提供的只是评论线程所属的域名 - 如 "fastcomments.com/some-page"。
这意味着 FastComments 导入器必须假设协议是什么，并默认使用 https。如果您运行导入并未看到您的数据，您可能需要检查您的网站是否安全。
{{/unless}}

{{#isPost}}
### 导出您现有的评论

为了从 Commento 导出您网站的评论和用户数据，请在他们的管理仪表板中转到常规，然后导出数据。

您会注意到通过电子邮件收到的文件具有神秘的 "gz" 文件扩展名。如果您对技术稍微熟悉，您可能知道这表示 "gzip"，这是一种流行且高效的文件压缩方式。

### 不要打开 "gz" 文件

默认的 Windows 10 安装将无法打开来自 Commento 的文件。这没关系，因为您不必这样做，FastComments 能够理解这个压缩文件。

之后，如果您已登录，您可以<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">在这里导入文件</a>。从下拉菜单中选择 Commento 并上传您的文件。

### 等待几分钟

FastComments 导入是 "异步" 的。这意味着上传文件和处理它是两个独立的步骤。

因此，根据您的文件大小，您可能会立即收到成功消息。在导入页面底部有一个表格 - 每一行代表一次导入尝试。
您可以安全地刷新此页面以查看您的导入状态以及到目前为止已导入的行数。

### 完成后

导入完成时您将收到电子邮件 - 无论成功与否。在文件上传成功并在导入页面看到您的导入后，您可以关闭页面。它将具有 "请求中" 的状态，当开始时状态将变为 "进行中"。

可以安全地根据需要重新导入多次 - 但是如果您的导入失败了，请<a href="https://fastcomments.com/auth/my-account/help" target="_blank">与我们联系</a>，以便我们可以提供帮助。

### 用 FastComments 替换 Commento 代码

这仅仅是一个移除 Commento 提供的小代码片段并用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们自己的代码</a>替换它的问题。
您甚至可以暂时在同一网站上运行 Commento 和 FastComments 以测试和调整外观。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。

### 同时迁移 URL

评论本身与 Commento 导出中的 "链接" 字段相关联，因此只要您的 URL 不变，切换就很简单。如果您想要迁移 URL 并保留您的评论，请<a href="https://fastcomments.com/auth/my-account/help" target="_blank">告诉我们</a>，通过发送给我们旧的和新的 URL。帮助页面允许上传小文本文件，因此如果您迁移的不仅仅是几个 URL，请创建一个 Excel 表。

### 总结

1. 导出您的数据
2. 导入到 FastComments
3. 用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a> JavaScript 代码替换 Commento 的代码

## 注意事项

Commento 并没有提供完整的 URL。他们提供的只是评论线程所属的域名 - 如 "fastcomments.com/some-page"。
这意味着 FastComments 导入器必须假设协议是什么，并默认使用 https。如果您运行导入并未看到您的数据，您可能需要检查您的网站是否安全。

## 为什么 Commento 不发送我的文件？
对于较大的站点，Commento 可能因其技术限制而无法创建导出文件。我们有能力抓取您现有的网站并提取评论，但这可能相当定制，并且由于所需的时间，您需要拥有支持套餐。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">您可以在这里请求帮助</a>。
{{/isPost}}

---