---
[category:迁移]
[category:教程]
###### [postdate]
# [postlink]从 Disqus 迁移到 FastComments[/postlink]

{{#unless isPost}}
阅读此文章以了解如何完全从 Disqus 迁移到 FastComments。

如果您使用的是 Disqus 的通用站点集成，那么只需删除他们提供的小代码片段，并将其替换为 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们自己的代码</a>。您甚至可以暂时在同一网站上运行 Disqus 和 FastComments 以测试和调整外观和感觉。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。

如果您没有使用通用站点集成，那么说明将根据您的平台有所不同 - 再次 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">联系我们</a>。
{{/unless}}

{{#isPost}}
Disqus 在很多方面做得很好，但它们的不足之处正是 FastComments 介入的地方。

## 如果您使用的是 WordPress

FastComments 提供了一个专用的 WordPress 插件： <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

该插件使安装、设置和同步变得非常简单。如果您选择此路线，则可以忽略这里的其余说明。

## 手动通用安装

### 导出您现有的评论

FastComments 导入工具将迁移您的评论、用户名、用户头像和内联图像。我们将无缝地将图像迁移到我们的服务器。

Disqus 处理导出数据的方式做得相当好。根据他们的指南 <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">这里</a>，您会注意到通过电子邮件收到的最终文件具有神秘的 "gz" 文件扩展名。如果您对技术有一些了解，您可能知道这代表 "gzip"，它是一种流行且高效的文件压缩方式。

### 不要打开 "gz" 文件

默认的 Windows 10 安装将无法打开来自 Disqus 的文件。这没关系，因为您不需要用 FastComments 来打开。我们的后端可以理解这个压缩文件，因此您只需按照他们的说明 <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">这里获取该文件</a>。

之后，如果您已登录，可以去 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">这里导入文件</a>。从下拉菜单中选择 Disqus，并上传您的文件。

### 等待几分钟

FastComments 的导入是 "异步" 的。这意味着上传文件和处理它是两个独立的步骤。

因此，根据您的文件大小，您可能会立即收到成功消息。在导入页面底部有一个表格 - 每一行代表一次导入尝试。您可以安全地刷新此页面，以查看您的导入状态以及迄今为止导入了多少行。

### 完成后

导入完成后，无论是否成功，您都会收到一封电子邮件。在文件上传成功并且您在导入页面上看到您的导入后，可以关闭页面。它的状态为 "已请求"，并且当开始时状态将变为 "正在运行"。

可以安全地重新导入多次；然而，如果您的导入失败，请 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">联系我们</a> 以便我们提供帮助。

### 用 FastComments 替换 Disqus 代码

如果您使用的是 Disqus 的通用站点集成，则只需删除他们提供的小代码片段，并将其替换为 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们自己的代码</a>。您甚至可以在同一网站上暂时运行 Disqus 和 FastComments，以测试和调整外观和感觉。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。

如果您没有使用通用站点集成，那么说明将根据您的平台有所不同 - 再次 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">联系我们</a>。

### 同时迁移 URL

评论本身与 Disqus 导出中的 "链接" 字段相关联，因此只要您的 URL 不变，切换就很容易。如果您希望迁移 URL 并保留您的评论，请 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">告知我们</a>，发送给我们旧的和新的 URL。帮助页面允许上传小的文本文件，因此如果您迁移的不止几个 URL，请创建一个 Excel 表格。

### 回顾

1. 导出您的数据
2. 导入到 FastComments
3. 用 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的</a> JavaScript 代码替换 Disqus 代码

## 为什么 Disqus 不给我发送文件？
对于较大的网站，Disqus 可能无法创建导出的文件，因为其技术限制。我们有能力抓取您现有的网站并提取评论，但这可能相当定制，且由于涉及的时间，您需要购买支持套餐。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">您可以在这里请求帮助</a>。
{{/isPost}}

---