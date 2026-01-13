---
[category:Features]

###### [postdate]
# [postlink]发布显示名称[/postlink]

{{#unless isPost}}
FastComments 一直支持 SSO 用户的显示名称。然而，这从未对普通评论者开放。今天有所改变！
{{/unless}}

{{#isPost}}

### 新变化

FastComments 一直支持 SSO 用户的显示名称。然而，这从未对普通评论者开放。今天有所改变！

在 [账户详情](https://fastcomments.com/auth/my-account/edit-details) 页面中，现在可以填写一个新的 `Display Name` 字段。`Display Name` 将会显示在您的评论和个人资料中。

### emoji

过去，用户在用户名中使用 emoji 时遇到困难，因为您需要输入用户名才能登录。然而，现在 `Display Name` 可以包含 emoji。

### 唯一性和滥用

`Display Name` 的目的是它不需要是唯一的。如果两个 FastComments.com 用户在两个非常不同的主要社区中有相似的名字，我们希望他们能够设置自己喜欢的显示名称。然而，我们无法限制用户使用他们的全球 FastComments 帐户发表评论，因此有时这可能会导致混淆。

与其他用户或管理员拥有相似名称本身并不构成滥用。然而，如果您故意冒充其他用户而滥用这一点，我们可能会在您的帐户上禁用此功能，并且您将仅限于使用 `username`。

### 登录

您仍然使用用户名登录 - **而不是显示名称！**

### 对开发者的提示与注意事项

现在通过 API 暴露的常规 `User` 对象具有 `displayName`。

### 总结

与所有重大发布一样，我们很高兴能够花时间优化、测试并正式发布此功能。如果您发现任何问题，请在下方告诉我们。

干杯！

{{/isPost}}

---