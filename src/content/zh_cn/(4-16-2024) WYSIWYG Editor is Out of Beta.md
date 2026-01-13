---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG 编辑器现已脱离测试阶段[/postlink]

{{#unless isPost}}
客户现在可以选择使用新的编辑器，该编辑器不使用可见的锚标签进行格式化。
{{/unless}}

{{#isPost}}

### 新功能

FastComment 的用户一直可以使用锚标签格式化他们的评论，例如 `<b>this</b>`。对于曾经使用过互联网论坛的人或我们的许多竞争对手来说，这非常熟悉，但一些用户和社区期望有所不同的行为。

现在，您可以在评论区中样式化文本而无需锚标签，因为文本输入可以切换为 `contenteditable`。

出于演示目的，这个功能在此博客中已启用。

高级编辑器的外观与旧编辑器完全相同，只是不使用可见的锚标签。

### 开启高级编辑

在小部件自定义中，您只需启用 `Advanced Editor` 并点击保存即可。文档在 [这里](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg)。

### 对于开发者和需要注意的事项

您可以在 [这里](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg) 找到启用此功能的代码文档，尽管我们推荐使用小部件自定义 UI，因为这样可减少每次页面加载时发送的数据量。

从内容可编辑区域生成的 HTML 与旧的文本区域编辑器略有不同，因此如果您是从 API 解析评论，请注意这一点。

### 优化

我们通过将此功能作为扩展加载到后台，确保评论小部件不会因该新功能而增大，这使得默认的评论小部件保持小巧轻便。

### 结论

和所有重大版本一样，我们很高兴能够花时间优化、测试，并正式发布这个功能。如果您发现任何问题，请在下面告诉我们。

干杯！

{{/isPost}}

---