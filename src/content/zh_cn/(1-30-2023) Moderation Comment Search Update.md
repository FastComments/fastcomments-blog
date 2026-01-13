---
[category:Moderation]
[category:Features]

###### [postdate]
# [postlink]评论管理搜索更新[/postlink]

{{#unless isPost}}
FastComments 现在允许您在评论管理页面按页面和用户搜索。
{{/unless}}

{{#isPost}}

### 新功能

之前，FastComments 只允许您在评论管理页面按短语或完全匹配字符串进行搜索。

现在，您可以通过以下方式搜索评论：

- 模糊单词搜索: **cats love**
- 精确短语匹配: **"I love cats."**
- **_新！_** 按页面标题: **page:"页面标题"**
  - 支持自动完成。
  - 在自动完成建议列表中显示每个页面的评论数量。
- **_新！_** 按页面 URL: **page:"https://example.com/some-page"**
  - 支持自动完成。
  - 在自动完成建议列表中显示每个页面的评论数量。
- **_新！_** 按用户: **user:"Bob"**
  - 支持自动完成。

您可以通过分享评论管理页面的页面 URL 与其他管理员或审核员共享搜索结果。搜索字段的值将在您点击“前往”后包含在浏览器 URL 中。

### 如何获取

此功能已向所有客户推出！

### 文档

文档网站已更新，并且专门为此功能维护的文档 [将保留在这里](https://docs.fastcomments.com/guide-moderation.html#search)。

### 总结

与所有重大版本一样，我们很高兴能够花时间优化、测试并正式发布此功能。如果您发现任何问题，请在下面告诉我们。

干杯！

{{/isPost}}

---