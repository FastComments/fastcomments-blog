---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks 来到 FastComments[/postlink]

{{#unless isPost}}
FastComments 现在可以调用您的 API 进行评论的创建、更新和删除。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 新变化

使用 FastComments 现在可以在评论被添加、更新或从我们的系统中删除时调用 API 端点。

我们通过 HTTP/HTTPS 的异步 webhook 实现这一点。

#### 如何使用它

首先，导航到 <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook 管理</a>。这可以通过管理数据 -> Webhook 访问。

在这里，您可以为每种评论事件指定端点。

对于每种事件类型，确保单击 **发送测试负载** 以确保您已正确设置集成。有关详细信息，请参阅下一部分“测试”。

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Webhook 设置示例" title="Webhook 设置示例" class="lozad" />
</div>

#### 测试

在 <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook 管理</a> 中，每种事件类型（创建、更新、删除）都有“发送测试负载”按钮。创建和更新事件发送一个虚拟的 WebhookComment 对象，而测试删除将发送一个仅包含 ID 的虚拟请求体。

测试将进行两次调用，以验证“正常”（正确的 API 密钥）和“不正常”（无效的 API 密钥）场景的响应代码。

当测试发送无效的 API 密钥时，您应该返回 401 状态码，以使测试完全通过。如果您没有正确检查令牌的值，您会看到如下错误：

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Webhook 身份验证测试失败" title="Webhook 身份验证测试失败" class="lozad" />
</div>

#### 评论对象结构
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### “创建”事件结构

“创建”事件的请求体是一个 WebhookComment 对象。

#### “更新”事件结构

“更新”事件的请求体是一个 WebhookComment 对象。

#### “删除”事件结构

“删除”事件的请求体是一个 WebhookComment 对象，**但仅包含 ID**。

#### 为什么创建和更新都使用 HTTP PUT 而不是 POST？

**由于我们所有的请求都包含一个 ID**，重复相同的创建或更新请求 **不应该在您的端创建新对象**。这意味着这些调用是幂等的，并且应该根据 HTTP 规范作为 PUT 事件。

#### 工作原理

系统中对评论对象的所有更改都会触发一个事件，该事件会进入队列。您可以在 <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook 管理</a> 中监控该队列，以防您的 API 出现故障。如果请求您的 API 失败，我们将按照计划重新排队。该计划是 1 分钟 * 重试次数。如果调用失败一次，它将在一分钟后重试。如果失败两次，则等待两分钟，以此类推。这是为了避免在您因负载相关原因而无法访问时给您的 API 带来过大负担。

#### 安全性与 API 令牌

在请求头中，我们将传递您的 <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API 密钥</a>，参数名为 “token”。

如果您没有正确检查该参数，您的集成将不会被标记为已验证。这是一种确保与 FastComments 的任何集成都安全的保护措施。

#### 总结

我们希望您发现 FastComments Webhook 集成易于理解且设置快速。

如果您有进一步的问题，请随时联系 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">客户支持页面</a>。

干杯！

{{/isPost}}

---