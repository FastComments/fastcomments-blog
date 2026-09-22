[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments 已在 Zapier 上[/postlink]

{{#unless isPost}}
使用官方 FastComments Zapier 应用，将您的评论连接到数千个应用程序。触发器在评论发布的瞬间触发，任何应用都可以在您的站点上创建评论、页面和用户。
{{/unless}}

{{#isPost}}

### 新功能

现在在 [Zapier](https://zapier.com) 上有官方的 FastComments 应用。只需在 Zapier 编辑器中登录一次，即可将每条新评论发送到 Slack、记录到电子表格、将评论者添加到您的 CRM，或从表单提交创建评论，无需编写任何代码。

在此之前，将 FastComments 接入其他工具需要自行搭建 webhook 接收器或使用 REST API 编写代码。这两种方式仍然可用。Zapier 应用适用于您不想运行任何东西的情况。

### 触发器

三个触发器，全部即时：

- **New Comment** 在评论发布时触发。默认情况下，仅已批准且非垃圾评论会触发，这样发布到公共频道的 Zap 不会泄露仍在审核队列中的内容。可以勾选复选框以包含所有内容。
- **Updated Comment** 在评论被编辑、批准、投票、置顶或其他更改时触发。对 approved 字段进行过滤即可将其变为“已批准评论”触发器。
- **Deleted Comment** 在评论被删除时触发，并提供完整的评论内容供您记录。

每个触发器都有可选的域过滤器，列出您账户中配置的域名，以便 Zap 能够在多个站点中监视特定站点。

这些触发器基于 webhook 而非轮询。FastComments 在事件发生的瞬间将其发送到 Zapier，期间不会轮询您的账户，等待也不消耗 API 积分。

### 操作和搜索

操作代表您调用 FastComments API：

- **Create Comment** 在任意页面上创建评论，可作为具名评论者或现有 SSO 用户，亦可选择作为回复。
- **Create Page**，以便在页面的第一条评论出现之前对其进行列出并限制成员组访问。
- **Create SSO User**，使您其他工具中的成员能够以自己的身份进行评论。
- **Create Feed Post** 和 **Create Hash Tag**。
- **Flag Comment**，以供版主审查。

搜索用于在后续步骤中查找信息：通过 id **Find Comment**，通过 email **Find SSO User**，以及通过 URL ID **Find Page**。在 Zapier 的“查找或创建”模式下，将搜索与相应的创建操作配对，缺失的用户或页面将为您自动创建。

### 一些入门 Zap 示例

- New Comment，然后使用 Slack 的 “Send Channel Message”。映射评论者名称、评论内容和页面 URL。使用域过滤器将每个站点路由到其专属频道。
- New Comment，然后使用 Google Sheets 的 “Create Spreadsheet Row”，以及将 Deleted Comment 追加为第二个 Zap 的行。该表格将成为审计日志。
- Updated Comment 过滤条件为 Approved 为 true，然后使用 Gmail 的 “Send Email”，通知作者其评论已上线。
- Typeform 的 “New Response”，随后在您的推荐页面上 Create Comment，且不勾选 Approved，以便在评论出现前进行审核。
- WordPress 的 “New Post”，随后 Create Page，以便在第一条评论出现前注册每篇文章。

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) 包含更多内容，包括从您的会员工具为 SSO 用户进行配置的工作流。

### 它是如何连接的

该应用使用 OAuth。当您添加 FastComments 步骤时，Zapier 会询问您的地区（美国或欧盟），将您重定向至 FastComments 登录，并显示一个同意页面，列出应用名称、将要连接的账户以及请求的权限。不会将 API 密钥复制到 Zapier。

批准连接的人员必须是该账户的 API 管理员。账户所有者已经具备此权限，并可在 Users 页面上将其授予其他团队成员。

每个连接都会在您的仪表板的 **Integrate** → **Connected Apps** 中显示，标记为官方集成，并显示最近使用时间。在此处撤销连接会立即断开 Zapier。启用 Zap 会创建一个 webhook 订阅，您可以在 Webhooks 页面看到，来源为 **API**，关闭 Zap 则会移除该订阅。

### 费用说明

该应用在所有 Zapier 计划（包括免费计划）中均免费，FastComments 也不收取额外费用。触发器不消耗 API 积分。操作和搜索消耗的积分与您自行调用代码时相同，通常每次调用消耗一个积分。

### 文档

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) 介绍了连接账户、每个触发器和操作及其字段、示例 Zap 以及故障排除。该集成本身是开源的，位于 [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier)。

### 结论

打开 [fastcomments.com/zapier](https://fastcomments.com/zapier) 找到该应用，连接您的账户，并创建您的第一个 Zap。

如往常一样，如果遇到任何问题，请在下方告诉我们。

干杯!

{{/isPost}}

---