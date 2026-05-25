---
[category:Migration]
###### [postdate]
# [postlink]从 Yotpo 迁移到 FastComments[/postlink]

{{#unless isPost}}
寻找 Yotpo 替代品？本文将介绍如何将产品评论从 Yotpo 迁移到 FastComments，什么内容会被保留，两者平台的对比，以及您的商店前台会发生什么变化。
{{/unless}}

{{#isPost}}

我们收到了一批 Shopify 商家的询问，关于 Yotpo 的替代品，以及如何将他们的产品评论从该平台迁出。本文涵盖了在寻找 Yotpo 替代品时应该注意什么，FastComments 迁移的全过程，以及在您使用 FastComments 后会发生哪些变化。

## 本文适合谁

本指南适用于运行 Yotpo 进行产品评论的电子商务商家和店主，他们希望寻找一个更快、更轻便或更具性价比的替代品。我们接触的大多数商家都在使用 Shopify，但 FastComments 在 WooCommerce 商店、BigCommerce、定制商店和无头设置上表现相同。迁移过程在无论您的商店运行在哪里都是相同的。

## 为什么要迁移

- FastComments 速度快。Yotpo 加载近一兆字节的 JavaScript 和多个第三方请求，这可能使产品页面变得缓慢。
- 评论不会实时显示。购物者提交评论后，页面提示他们检查收件箱，而评论只有在延迟后才会显示出来。
- FastComments 提供更线性的定价，没有功能等级的限制。

FastComments 以 ~30KB 的小部件实时更新星级评分和评论线程。新评论一经发布，瞬间流入每个打开的页面，无需重新加载！我们的基于流量的计划涵盖评分、AI 审核、多状态审核、问答功能，和完整数据导出。许多客户仅需支付一美元，对于更大的组织，还提供基于管理员和审核员席位的定价。

## 实时体验

FastComments 摘要小部件是实时的，就像我们的评论和聊天小部件一样。如果留下评论，评分会立即更新，无需刷新。这在产品发布时非常有用。

FastComments 如果您选择迁移或在不同平台上运行不同商店时也能正常运行。

## Yotpo 与 FastComments 一目了然

商家在寻找 Yotpo 替代品时关心的几个维度的快速对比：

- 小部件大小：Yotpo 需要通过多次请求传输 800KB+ 的 JavaScript。FastComments 只需一次请求传输 38KB。
- 实时评论：Yotpo 需要刷新页面才能显示新评论。FastComments 实时将新星级及评论推送至每个打开的页面。
- 定价：Yotpo 的定价依据评论数量分级，并设有功能限制。FastComments 按页面流量统一定价，并在每个计划中包含所有功能。
- 照片和视频评论：两者均支持。
- 问题和答案评论：Yotpo 将问答作为附加模块出售。FastComments 通过内置的问答功能包含此项。
- AI 审核：Yotpo 提供基本的自动发布规则。FastComments 包含可配置的每条评论评分和审核日志的 AI 代理，以及手动和自动发布配置。
- 数据导出：Yotpo 在较高的级别限制完整导出。FastComments 在每个计划中包含完整的 CSV 和 JSON 导出。
- 从竞争对手迁移：Yotpo 收取迁移服务费。FastComments 通过支持票免费处理此项。

## 迁移如何工作

Yotpo 没有一个干净的自助导出，无法准确映射到公共导入架构，因此我们通过支持团队而不是标准导入页面处理 Yotpo 的迁移。端到端流程如下：

1. 打开一个 <a href="https://fastcomments.com/contact-us" target="_blank">支持票</a>，告知我们您想从 Yotpo 迁移。
2. 我们会向您发送导出数据的说明。导出内容包括评论、评分、照片、已验证买家标记和线程回复。
3. 您将导出的数据在支持票中发送回我们。
4. 我们将每个字段映射到 FastComments 中，并将其加载到与您的账户关联的临时租户中，以便您在商店上线之前预览结果。
5. 当您批准预览后，我们将数据推广到您的生产租户中。

大多数 Yotpo 迁移在我们收到导出后的一周内完成。

## 什么会被保留

映射包括 Yotpo 针对每条评论存储的所有内容：

- 星级评分和聚合产品评分
- 评论文本、线程回复和回复时间戳
- 照片和视频附件（我们将文件迁移到我们的 CDN）
- 已验证买家标记
- 客户标识符，以便客户档案上的评论数量与之前保持一致
- 提交时间戳，确保您产品页面上的时间顺序得到保留

如果您有 Yotpo 的问答，这些会映射到 FastComments 的问答功能中，同样在产品线程上。

## 替换小部件

数据迁移完成后，将产品页面模板中的 Yotpo 小部件替换为 FastComments 小部件。我们是一个 Shopify 应用，因此对于大多数商店而言，这只是您主题中的一行代码。<a href="https://fastcomments.com/install-wizard" target="_blank">安装向导</a>涵盖了 Shopify、无头设置和主要前端框架。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以为您提供帮助</a>。

如果您想在完全迁移之前比较外观和感觉，您可以在单个产品页面上暂时并行运行 Yotpo 和 FastComments。

## 欧盟

如果您在欧盟，请在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 上创建您的账户，以便您的客户数据保留在欧盟内。

## 关于从 Yotpo 切换的常见问题

### FastComments 比 Yotpo 便宜吗？

几乎每种情况下都是的。FastComments 运行一个统一的基于流量的计划，包括每一个功能，而 Yotpo 根据评论数量在分级计划中收费，并而且会收取超额费用。请使用 <a href="https://fastcomments.com/pricing-calculator" target="_blank">定价计算器</a>为您的商店计算数字。

### 我可以在切换时保留我的 Yotpo 评论吗？

可以。迁移将保留每条评论、每个评分、每个照片和视频附件、每个线程回复以及每个已验证买家标记。提交时间戳也会被迁移，从而确保您产品页面上的时间顺序保持不变。

### FastComments 在 Shopify 之外能正常工作吗？

可以。FastComments 在 Shopify、WordPress、WooCommerce、BigCommerce、定制商店和无头设置上都能正常运行。<a href="https://fastcomments.com/install-wizard" target="_blank">安装向导</a>涵盖了主要前端框架。

### 我可以先并行运行 Yotpo 和 FastComments 吗？

可以。在临时预览期间，将两个小部件放在单一产品页面上，以比较它们在您的商店中的外观和感觉，准备好全面切换时再删除 Yotpo。

### 关于 Yotpo Loyalty、Yotpo SMS 或 Yotpo Email 呢？

FastComments 是一个评论和实时评论平台。它不处理忠诚度计划、短信营销或电子邮件营销活动。如果您今天使用 Yotpo 的这些产品，您可能想要在切换评论到 FastComments 时保留它们或迁移到专用工具中。

请注意，我们希望扩展此功能，如果您有兴趣成为这些功能的测试者，我们将很高兴将其添加到我们的短期路线图中。

### 我的星级评分是否仍会在产品页面上显示？

会的。FastComments 小部件在与 Yotpo 小部件相同的位置呈现聚合星级评分、单个评论星级和评论数量。每条评论的 HTML 结构使搜索引擎能够抓取页面上的评分数据。

### 从 Yotpo 切换到 FastComments 是否会影响我的 SEO？

如果您的产品页面的 URL 保持不变，则不会。评论内容会在相同的 URL 上迁移到新小部件，搜索引擎会在相同的页面上看到相同的产品和评论。如果您在迁移过程中更改了 URL，请通过支持票向我们发送旧 URL 和新 URL 对，以便导入工具可以进行映射。

### 有免费试用吗？

每个 FastComments 计划都以免费试用开始。您可以创建一个账户，进行导入预览，并在承诺付费计划之前在临时租户中查看小部件。

## 概述

1. <a href="https://fastcomments.com/contact-us" target="_blank">打开一个支持票</a>，告知我们您希望从 Yotpo 迁移
2. 导出您的 Yotpo 数据，并在支持票中发送给我们
3. 在临时租户上预览导入
4. 将 Yotpo 小部件替换为产品页面模板上的 FastComments 小部件

{{/isPost}}

---