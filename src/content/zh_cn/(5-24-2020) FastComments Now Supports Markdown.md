---
[category:Features]

###### [postdate]
# [postlink]FastComments 现在支持 Markdown[/postlink]

丰富的评论体验已经在 FastComments 中通过使用 Markdown 到来！

{{#isPost}}

Markdown 是一套用于文本样式的约定。例如，要创建一个粗体字，我们可以 \*\*这样做\*\*。
插入普通链接只需粘贴原始 URL，图像的用法与以前相同。

这是 GitHub 提供的 Markdown 备忘单：<a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>。

### FastComments 支持哪些 Markdown 语法？

我们完全支持 Markdown，除了标题。当定义标题时，我们只是将其渲染为常规文本，因为它们会干扰话题的流畅性。标题
适用于像博客文章和文档这样的内容——而不是对话。

FastComments 一直通过 [img]...[/img] 语法支持图像。这种方式还将继续得到支持，因为它比 Markdown 的方式更易于理解。

### 混合内容

单个评论可以包含所有格式的内容——markdown、链接、图像、代码片段和表格。

### 避免 XSF/XSS 攻击

之前，FastComments 通过网络发送纯文本并在客户端解析。现在，HTML 通过网络发送，我们在数据库中维护每条评论的两个版本，以支持像编辑评论这样的功能。

直接将 HTML 发送到评论中存在风险——因此所有生成的评论都会被解析和清理，以防止跨站点和跨框架攻击。

### 数据导出

导出评论时，您将获得用户在输入评论时看到的版本。如果您想获取原始 HTML，请与我们联系。

### 性能问题

功能膨胀会使事情变得缓慢。这不是我们在 FastComments 想要做的。
添加此功能使我们的客户端小部件的大小 **减少** 了 ~400 字节——从 9.53kb 减少到 9.12kb——这意味着页面加载更快。

虽然从理论上讲，此功能可能会减慢评论保存机制，但我们没有看到任何性能下降，且一如既往我们在监控我们的 API。

### 我该如何获得它？

Markdown 支持已自动部署到我们所有客户。您在网站上发布的内容不应有太多变化——除了现在用户可以加粗、下划线，并进行一些花哨的操作，
例如创建简单表格。

与所有功能发布一样，我们期待反馈，尽管我们进行了大量自动化测试……如果您发现任何问题，请告诉我们！

祝评论愉快。

{{/isPost}}