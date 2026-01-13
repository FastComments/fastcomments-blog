---
[category:Features]
###### [postdate]
# [postlink]FastComments 新增 @mentions 功能[/postlink]

{{#unless isPost}}
想在评论中提到一个或多个用户吗？现在你可以了。
{{/unless}}

{{#isPost}}

### 新功能

虽然之前 FastComments 会在你回复他们的评论时通知用户，但在单个评论中标记多个用户的方式并不存在。此外，这些通知每小时以批量形式发送。现在，通过 `@mentions`，你可以标记一个或多个用户，FastComments 将立即通过电子邮件通知他们。

### 如何使用

当你输入 `@` 并开始输入用户的名字时，会出现搜索结果列表。

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Mentions 使用" title="@mentions 演示" />
</div>

只需点击你想要标记的用户的姓名。

此外，你可以使用上箭头和下箭头键在这个列表中导航，按回车键选择，或按 Esc 键退出。

我们知道你可能想使用 `@` 符号而不标记用户。FastComments 会检测到这一点，并不会干扰你的输入体验。

### 谁可以使用

所有当前和新的 FastComments 客户，无论哪个级别，现都可以使用 `@mentions`。 `@mentions` 也已被回移植到早期版本的评论小工具中。

### 自动补全是如何工作的

在自动补全列表中显示的用户由以下因素决定：

- 在同一页面或线程中评论的用户。
- 通过同一网站创建 FastComments 账户的用户。
- 当前网站的管理员。
- 属于当前租户的 SSO 用户。

### 编辑评论

可以通过编辑现有评论来添加提及。然而，当前，`Moderate Comments` 应用程序并不支持 `@mentions` 的自动补全。

### 未来考虑

未来，仍在浏览器窗口中打开 FastComments 的用户在被提及时会收到一个提示，如果他们选择了通知功能。

### 结论

像其他 FastComments 功能一样，我们希望你发现这个新功能快速且易于使用。

干杯！

{{/isPost}}

---