---
[category:API & Development]

###### [postdate]
# [postlink]使用 FastComments 设置 SSO[/postlink]

{{#unless isPost}}
FastComments 为各种平台和自定义集成提供 SSO 解决方案。
{{/unless}}

{{#isPost}}

# 概述

## 什么是 SSO？

SSO，或单点登录，是一组用于允许您或您的用户使用 FastComments，而无需创建另一个账户的约定。

假设您不允许匿名评论，则需要一个账户才能使用 FastComments 进行评论。我们使这个注册过程非常简单——用户在评论时只需留下他们的电子邮件。但是，我们理解，即便如此，对某些网站来说也是多余的摩擦。

## 我该如何获取？

所有账户类型目前都可以访问 SSO 以及支持。不过，SSO 用户的最大数量将根据您的套餐而有所不同。

### WordPress 用户

如果您使用我们的 <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> 插件，那么无需编写任何代码！只需前往插件的管理员页面，点击 SSO 设置，然后启用。

这将带您进入一个单按钮点击的向导，该向导将创建您的 API 密钥，将其发送到您的 WordPress 安装中并启用 SSO。我们为您将其整合成了一个单一的按钮点击。

请注意，如果您是第一次安装该插件，则必须先完成设置过程，才能看到带有 SSO 设置按钮的管理员页面。

### 自定义集成

FastComments SSO 使用 HMAC-SHA256 加密作为实现 SSO 的机制。首先，我们将介绍整体架构，提供示例和详细步骤。不过，在本文末尾有关于 **从 Disqus 和 Commento 迁移** 的说明。

流程如下所示：

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Diagram" title="FastComments SSO Diagram" class="lozad" />
</div>

您无需为 FastComments SSO 编写任何新的 API 端点。只需使用您的密钥加密用户的信息，并将有效载荷传递给评论小部件。

我们提供了包括 NodeJS、Java/Spring 和传统 PHP 在内的多种语言/运行时的完整功能代码示例。尽管在 NodeJS 示例中我们使用了 ExpressJS，而在 Java 示例中使用了 Spring，但在这些运行时中实现 FastComments SSO 不需要任何框架/库——原生加密包均可使用。

您可以在这里找到代码示例库：

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO 代码示例</a>

#### 获取您的 API 密钥

您的 API 密钥可以从 <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">此页面</a> 获取。您也可以通过访问我的账户，点击 API/SSO 瓦片，然后点击“获取 API 密钥”来找到此页面。

#### 评论小部件参数

评论小部件的高层 API 文档可以在 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">这里</a> 找到，并点击“显示高级选项”。在页面上搜索 SSO。

让我们详细了解这些参数的含义。

评论小部件采用配置对象——如果您使用 FastComments 传递客户 ID（称为 tenantId），则已经传递了此对象。

要启用 SSO，请传递一个新的“sso”对象，该对象必须具有以下参数。值应在 **服务器端** 生成。

- userDataJSONBase64: 用户的数据，采用 JSON 格式，然后进行 Base64 编码。
- verificationHash: 从 UNIX_TIME + userDataJSONBase64 创建的 HMAC-SHA256 哈希。
- timestamp: 当前 Unix 时间。**不得在未来，或超过三小时之前。**
- loginURL: 评论小部件可以显示以登录用户的 URL。
- logoutURL: 评论小部件可以显示以登出用户的 URL。
- loginCallback: 当提供而不是登录 URL 时，评论小部件在点击登录按钮时将调用的函数。
- logoutCallback: 当提供而不是登出 URL 时，评论小部件在点击登出按钮时将调用的函数。

#### 用户对象

用户对象包含以下架构：

- id（字符串，必填）（最大 1k 字符）
- email（字符串，必填）（最大 1k 字符）。注意：必须唯一。
- username（字符串，必填）（最大 1k 字符）。注意：用户名不能是电子邮件。无需唯一。
- avatar（字符串，选填）（最大 3k 字符）
- optedInNotifications（布尔，选填）
- displayLabel（字符串，选填，最大 100 个字符）。此标签将在其名称旁边显示。
- websiteUrl（字符串，选填，最大 2000 个字符）。用户的名称将链接到此处。

#### 通知

要启用或禁用通知，请将 optedInNotifications 的值设置为 true 或 false。用户首次使用此值加载 SSO 有效载荷时，他们的通知设置将被更新。

#### VIP 用户和特殊标签

您可以通过使用可选的“displayLabel”字段在用户的名称旁边显示特殊标签。

#### 未认证用户

要表示未认证用户，只需不填充 userDataJSONBase64、verificationHash 或 timestamp。提供 loginURL。

#### 序列化和哈希用户数据的直接示例

有关示例的更多详细信息，<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">请点击这里 (js)</a>，<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">请点击这里 (java)</a> 和 <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">请点击这里 (php)</a>。

### 从 Disqus SSO 迁移

Disqus 和 FastComments SSO 之间最大的区别在于，Disqus 使用 SHA1 进行加密，而我们使用 SHA256。这意味着从 Disqus 迁移很简单——将使用的哈希算法从 SHA1 更改为 SHA256，并更新传递给 UI 的属性名称。

### 从 Commento SSO 迁移

Commento 采用截然不同的 SSO 方法——他们要求您有一个端点，他们会调用该端点以验证用户。FastComments 则正好相反——只需使用您的密钥编码并哈希用户的信息，然后传递过去。

我们理解，任何集成都可以是一个复杂且痛苦的过程。请随时与您的代表联系或使用 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">支持页面</a>。

{{/isPost}}

---