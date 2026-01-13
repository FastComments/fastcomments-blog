---
[category:Features]

###### [postdate]
# [postlink]使用 FastComments 支持轻松的代码片段[/postlink]

我们的一些客户拥有与软件开发相关的网站和博客。在这些社区中，分享代码片段是很常见的。以下是 FastComments 如何简化这一过程的。

{{#isPost}}

FastComments 允许用户通过将代码粘贴到评论框中进行分享。它可以与其他文本和图片混合使用，并且不需要你手动添加任何“代码”标签来进行格式化。只需粘贴即可！

这是一个简短的演示，展示了这一功能的实际效果。

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="代码片段分享演示" title="代码片段分享演示"></video>

### 性能影响

添加此功能仅增加了客户端小部件大约 150 字节，因为大部分功能是在服务器端处理的。实际上，如果你将这个与最近添加的 Markdown 功能捆绑在一起，小部件的大小在这些新功能推出后实际上是减少的！

### 注意事项

如果你的社区频繁分享代码，你应该考虑增加最大评论大小，以便更方便地分享代码片段。这可以通过管理员仪表板的“自定义”选项卡进行设置。

### 代码检测

为了保持客户端小部件的大小，我们只会自动检测粘贴的 C 和类似 Python 的语言（例如 Java、JavaScript、CSS、C++），这些语言使用“{”或空格进行控制流。如果你常用的语言没有被自动检测到，请与我们联系。

要手动插入代码块，可以写出如下评论：```<code>(defun someLispCode(1, 2, 3))</code>```. 我们可以自动检测大约 150 种语言。

### 迁移现有评论

如果你想迁移到 FastComments，并且有很多想要正确格式化的代码片段评论，<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。

### 总结

就这些！我们已将此功能推出到所有使用 FastComments 的在线社区。

祝评论愉快！

{{/isPost}}