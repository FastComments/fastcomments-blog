---
[category:Features]
###### [postdate]
# [postlink]新增剧透支持[/postlink]

{{#unless isPost}}
用户现在可以在评论中添加剧透，鼠标悬停时会隐藏。
{{/unless}}

{{#isPost}}

### 新特性
FastComments的用户现在可以点击“SPOILER”按钮在评论中添加剧透。如果需要，他们也可以直接写`<spoiler>一些文本</spoiler>`标签。
请注意，工具栏中的剧透选项默认是禁用的。

### 启用剧透

在小部件自定义中，您只需启用`Spoilers`选项并点击保存即可。文档在 [这里](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers)。
我们已为此博客文章启用了该功能以演示。

### 对于开发者与常见问题

默认的剧透样式支持明暗模式。如果您为遮蔽文本编写自定义CSS，请记得同时覆盖暗模式，如果您的网站支持的话。

### 总结

与所有重大版本发布一样，我们很高兴能够抽出时间来优化、测试并妥善发布此功能。如果您发现任何问题，请在下方告知我们。

干杯！

{{/isPost}}

---