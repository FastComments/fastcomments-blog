---
[category:Moderation]
###### [postdate]
# [postlink]脏话屏蔽更新[/postlink]

{{#unless isPost}}
FastComments 脏话检测和屏蔽功能升级
{{/unless}}

{{#isPost}}

### 新变化

之前，FastComments 只允许在整个帐户上定义一个单一的全局单词黑名单。

这个用于屏蔽的单词列表，或者在需要时用于垃圾邮件检测，不能按语言定义。它也只能包含单词列表，而不能包含短语。

现在，进行了以下升级：

1. 黑名单可以按区域（语言 + 地区）定义。
2. 除了单词，短语现在也可以被屏蔽或用于垃圾邮件检测。
3. 更新脏话检测配置现在是*实时*和*立即*的。之前，应用更改可能需要长达五分钟的时间。

### 如何使用

单词黑名单的链接没有改变，仍然位于 [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) 并且
仍然可以通过 `Moderate Comments -> Moderation Settings -> Edit Word Blacklist` 访问。

在此页面上，您现在会看到一个语言下拉菜单，以便按区域自定义黑名单。

选择区域后，您可以定义要屏蔽的单词或短语。

### 限制

每个区域最多可以定义 5,000 个单词或短语。如果您需要提高此限制，请联系支持团队。

### 现在生效！

您对单词或短语屏蔽列表所做的任何更改现在会立即应用到系统。

### 适用对象

所有当前和新的 FastComments 客户，无论在哪个层级，现在都可以访问新的*单词*和*短语*黑名单功能。

### 总结

像 FastComments 的其他功能一样，我们希望您会发现这个功能快速且易于使用。

干杯！

{{/isPost}}

---