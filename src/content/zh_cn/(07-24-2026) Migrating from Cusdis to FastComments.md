---
[category:Migration]
###### [postdate]
# [postlink]从 Cusdis 迁移到 FastComments[/postlink]

{{#unless isPost}}
阅读此文章，了解如何完整地将 Cusdis 迁移到 FastComments，包括您的线程、审核状态和页面 URL。
{{/unless}}

{{#isPost}}

Cusdis 是一个轻量级的开源评论系统。如果您已经超出其使用范围，并且想要诸如垃圾信息过滤、投票、反应、通知、单点登录（SSO）以及完整的审核仪表板等功能，FastComments 现在可以直接导入您的 Cusdis 数据。

## 导出您现有的评论

在您的 Cusdis 仪表板中，申请完整的数据导出。Cusdis 会提供一个包含您的项目、页面以及每条评论的单个 JSON 文件，文件中还包括评论的线程和审核状态。根据您的 Cusdis 设置，导出文件会通过电子邮件发送给您，或直接下载。

无需编辑或解压。保持“.json”文件原样，我们的后端会直接读取它。

## 导入到 FastComments

登录后，前往 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">此处导入文件</a>。从下拉菜单中选择 **Cusdis (.json)** 并上传您的文件。

### 等待几分钟

FastComments 的导入是“异步”的。上传文件和处理文件是两个独立的步骤。对于小文件，成功信息会立即出现。在导入页面底部有一个表格，每一行代表一次导入尝试。刷新页面即可查看状态以及已导入的评论数量。

### 完成后

导入完成后（无论成功与否），您都会收到电子邮件。上传成功并且您看到导入状态为 “Requested” 或 “Running” 时，关闭页面是安全的。

重新导入是安全的。FastComments 会根据原始的 Cusdis ID 匹配每条评论，因此再次导入会更新已有评论，而不会产生重复。如果导入失败，请 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">联系我们</a>，我们会提供帮助。

## 导入内容

- **Threaded replies.** Cusdis 将回复嵌套多层，FastComments 会重建完整的父子结构。
- **Moderation status.** 已批准的评论保持已批准状态。仍在等待批准的评论会进入您的 FastComments 审核队列，以便您审阅。
- **Authors.** 每位评论者的姓名和电子邮件都会被导入，已注册的 FastComments 用户会通过电子邮件进行匹配。
- **Formatting.** Cusdis 的评论使用 Markdown 编写。FastComments 同样渲染该 Markdown，包括链接、图片和换行，因此您的线程显示与之前完全一致。

在 Cusdis 中被删除的评论会被保留，因此您导入的线程保持干净。

## 替换 Cusdis 小部件

数据迁移完成后，删除站点上的 Cusdis 小代码片段，并嵌入 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们的代码</a>。您可以先同时运行 Cusdis 和 FastComments，以测试外观和体验。我们支持多种前端框架，<a href="https://fastcomments.com/install-wizard" target="_blank">您可以在此处找到</a>。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。

### 同时迁移 URL

Cusdis 将每条评论绑定到其页面 URL，只要您的 URL 不变，切换就很简单。如果您的 URL 也在更改，先导入 Cusdis 数据，然后使用 “管理数据” 下内置的 <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">迁移评论</a> 工具，将评论移动到新位置。您可以为旧位置和新位置分别输入整个域名、完整 URL 或 URL ID，单一的 “from” 与 “to” 配对即可一次性移动所有匹配的页面。该过程以后台任务运行，完成后会发送电子邮件通知您。

如果您希望我们代为处理（页面众多时），<a href="https://fastcomments.com/auth/my-account/help" target="_blank">告诉我们</a>旧的和新的 URL。

## 欧盟

如果您位于欧盟，您可能希望在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 上创建账户，以确保您的客户数据保留在欧盟境内。

## 回顾

1. 从 Cusdis 导出数据为 JSON
2. 在 FastComments 导入页面上传并选择 **Cusdis (.json)**
3. 将 Cusdis 代码片段替换为 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的代码</a>

{{/isPost}}

---