---
[category:API & Development]

###### [postdate]
# [postlink]FastComments 白标服务[/postlink]

{{#unless isPost}}
白标服务，配合完整的 API 集成和自动化工具，现已加入 FastComments。
{{/unless}}

{{#isPost}}

## 新功能

FastComments 现可以通过白标服务与其他应用程序和第三方销售商进行集成。白标服务允许您创建 FastComments 帐户（称为租户）、用户、版主等。

我们现在提供一个 [全面的 API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) 来自动化与第三方的集成。

您现在可以通过 API：

- 创建由您的租户管理的客户（子租户）。
- 管理可供客户使用的套餐以及如何处理账单。
- 在您管理的租户中添加和管理用户。
- 在您管理的租户中添加和管理版主。
- 邀请版主并向租户用户发送登录链接。

## 计费

关于计费，有两种选择：

1. 通过 FastComments Flex，您子租户的使用情况会自动汇总并计费给父租户。这可以通过 [计费分析页面](https://fastcomments.com/auth/my-account/analytics/billing) 进行监控。
2. 通过 FastComments Pro，您可以以固定的月费创建固定数量的子租户。

## 去品牌化

管理的租户可以启用去品牌化，这样可以从评论小部件中移除我们的标志。

## 如何获取白标服务

目前，FastComments Flex 和 Pro 计划提供对白标 API 的访问。

## 脚本和示例

一个使用 API 设置租户及用户和版主的示例脚本 [可以在这里找到](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling)。

## 全面验证

每个 API 资源都包含全面的验证和限制，并附有有用的错误消息，以指导您正确使用它们。

<div class="code"><div class="title">详细错误示例</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "该 ID 的用户在此租户中不存在。请先创建该用户，然后将其设为版主。",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## 其他用例

[租户用户](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) 和 [版主](https://docs.fastcomments.com/guide-api.html#moderator-structure) API 也可以用于在您自己的租户中添加和管理这些资源，不论是否使用白标服务。

## 文档

您可以在 [这里](https://docs.fastcomments.com/guide-white-labeling.html) 找到白标服务的完整文档及如何使用 API 的信息。

## 总结

我们希望您觉得本次更新及其文档有用。祝您集成愉快！

{{/isPost}}