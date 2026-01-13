---
[category:Features]

###### [postdate]
# [postlink]FastComments 添加对 #HashTags 的支持[/postlink]

{{#unless isPost}}
是否曾想过给某个主题或信息加上 #标签？现在你可以了。
{{/unless}}

{{#isPost}}

### 新特性

在评论时，用户现在可以输入一个或多个 `#hashtags`。点击评论中的 `#hashtag` 将带你进入一个显示其他带有该标签的评论的视图。

此外，`#hashtags` 可以用于链接到外部内容。随着这次发布，我们推出了我们的 [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)，
可以在你的账户中预填充标签。

在预填充标签时，我们可以为每个标签定义一个 URL。这意味着 `#hashtags` 还可以用来链接到例如工单号码或 CRM 中的文档。

`#` 符号也可以根据请求进行自定义。

### 如何使用

当输入 `#`，然后输入 hashtag 的开头时，将出现一个搜索结果列表。

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags 使用" title="#hashtags 示例" />
</div>

只需点击你想添加的标签。

此外，你可以使用上下箭头键在这个列表中导航，按回车键进行选择，或按逃逸键退出。

我们知道你可能希望使用 `#` 符号而不添加标签。FastComments 将检测到这一点，并不会干扰你的输入体验。

### 添加标签

如果你想使用的标签不在建议列表中 - FastComments 会在后台自动创建该标签。

自动 `#hashtag` 创建可以按文档中的说明 [在这里](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation) 禁用。

### 谁能使用

所有当前和新加入的 FastComments 客户，所有层级，现在都可以访问 `#hashtags`。 `#hashtags` 也已回溯到早期版本的评论小部件。

### 自动补全如何工作

在自动补全列表中显示的标签仅来自你的账户。HashTags 不会在 FastComments 租户之间共享。

### 文档

有专门的 `#hashtags` 文档。请查看：https://docs.fastcomments.com/guide-hashtags.html

### 总结

与其他 FastComments 的功能一样，我们希望你觉得这个功能快速且易于使用。

干杯！

{{/isPost}}

---