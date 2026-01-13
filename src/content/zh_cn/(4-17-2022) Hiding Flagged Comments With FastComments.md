---
[category:Moderation]

###### [postdate]

# [postlink]使用FastComments隐藏标记的评论[/postlink]

{{#unless isPost}}标记功能已经添加到FastComments。此外，评论可以根据被标记的次数进行隐藏。{{/unless}}

{{#isPost}}

### 新功能

用户现在可以在FastComments托管的评论线程中标记评论。版主可以通过标记的评论进行过滤，并查看评论被标记的次数。

该平台还可以配置为在评论被标记到一定次数后自动隐藏。

### 评论者的视角

当用户拥有有效的会话时，他们可以通过评论编辑菜单标记评论。

这与以下会话类型兼容：

- 匿名会话
- FastComments.com用户会话（使用第三方Cookie）
- 安全SSO
- 简单SSO

在达到配置的标记阈值之前，标记的评论将继续显示。

### 对版主的说明

版主可以使用`Flagged`过滤器查看标记的评论，该过滤器也可以直接在[这里](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50)找到。

此外，评论被标记的次数对版主和管理员可见。

注意：

- 对通过`Un-Approve Threshold`被`Un-Approved`的评论重置标记计数将`Re-Approve`该评论。
- `Re-Approving`一个`Flagged`评论将**重置标记计数**。
- 这是一个方便的功能。

### 配置

可以在[评论 moderation 设置页面](https://fastcomments.com/auth/my-account/moderate-comments/settings)上配置标记评论的自动隐藏功能。

### 现有客户

我们已将此功能推广至所有层级的现有客户。对于新客户或现有客户，未批准评论的自动隐藏功能尚未启用。

### 总结

我们希望您觉得这组新功能有用且易于使用。

干杯！

{{/isPost}}

---