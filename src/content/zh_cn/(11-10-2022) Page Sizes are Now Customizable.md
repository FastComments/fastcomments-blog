---
[category:UI & Customization]

###### [postdate]
# [postlink]页面大小现在可以自定义[/postlink]

{{#unless isPost}}
自推出以来，FastComments 的页面大小固定为 30 条评论。现在可以自定义了！
{{/unless}}

{{#isPost}}

### 新功能

您的评论线程现在可以有不同的分页大小，这可以在您的帐户、站点或甚至页面级别全局自定义。如果您希望某些页面显示较少或更多的评论，而不必进行分页，这将是一个理想的选择。

这也会影响无限滚动，以及任何从 FastComments 渲染评论的框架或集成。

页面大小可以从 `10` 一直到 `200`。默认值仍然是 `30`。

### 如何获取

只需前往可靠的 [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) 并定义您的页面大小。

请注意，FastComments 会预先计算每个页面上显示的评论，因此更改此参数将触发我们的系统重新计算您所有的评论线程。这不会导致任何停机，但可能需要几分钟时间才能显示更改。

### 文档

关于页面大小的更新文档可以在 [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size) 找到。

### 重大变更

作为此更改的一部分，评论小部件中定义的两个翻译已被重命名。`PREV_30` 和 `NEXT_30` 现在分别为 `PREV` 和 `NEXT`，并包含一个 `[count]` 变量。

如果您通过 Widget Customization UI 定义了分页按钮的翻译，我们已经为您迁移了这些。如果您通过代码在某种集成中传递翻译，则需要更新这些内容：

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### 总结

就像所有重大版本一样，我们很高兴能够花时间优化、测试并正确发布此功能。如果您发现任何问题，请在下方告诉我们。

干杯！

{{/isPost}}

---