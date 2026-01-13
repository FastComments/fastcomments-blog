---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments 推出自定义投票样式[/postlink]

{{#unless isPost}}
曾想过将默认的上下投票样式切换为普通的心形图标吗？现在你可以了。
{{/unless}}

{{#isPost}}

### 新功能

之前要自定义投票条，必须编写自定义代码和 CSS。这也意味着，如果你想做一些事情，比如启用匿名投票，但禁用反对票，不仅需要自定义代码，而且投票请求无法在服务器端进行验证。这意味着人们仍然可以通过直接调用服务器进行匿名反对票，这在某些社区中发生过。

我们现在在平台中引入了 `voteStyle` 的概念，第一个新的投票样式是许多人请求的心形图标。

通过小部件自定义 UI 定义时，这也为平台添加了验证，完全防止了反对投票，从而黑客无法绕过 UI 和将用户投票到绝境，就像启用匿名投票时可能发生的情况。

### 如何使用

访问 [小部件自定义 UI](https://fastcomments.com/auth/my-account/customize-widget) 并在 `投票样式` 下选择 `心形`。

### 文档

此功能的官方文档 [可在 docs.fastcomments.com 上找到](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style)。

### 谁可以使用

所有当前和新的 FastComments 客户，在所有级别上，现在都可以访问自定义投票样式。此功能仅支持 v2 及以后的评论小部件。

### 优化

除非启用，否则不同投票样式的代码不会包含在小部件的客户端下载中，以防止产品臃肿。

### 展望未来

我们现在有能力添加不同类型的投票和反应，未来可能会这样做。

### 结论

像 FastComments 的其他功能一样，我们希望你觉得这个功能快速且易于使用。

干杯！

{{/isPost}}

---