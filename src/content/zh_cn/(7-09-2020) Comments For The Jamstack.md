---
[category:Integrations]
###### [postdate]
# [postlink]Jamstack 的评论[/postlink]

{{#unless isPost}}
旧的总是新的。预渲染并从 CDN 提供网站现在被称为“JamStack”——但它们并不一定要完全静态！
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

<a href="https://jamstack.org/" target="_blank">Jamstack</a> 是一种编写网站的方式，它不依赖于传统的 Web 服务器。相反，它们
是通过我们称之为“CDN”的服务器提供，以获得最佳的用户体验（加载速度非常快）。性能是使用 Jamstack 编写的网站的一个重要优先事项——就像
FastComments 一样。

#### FastComments 与 Jamstack 的兼容性

FastComments 仅在你想添加评论的静态页面底部需要一个小的（目前小于 11kb）代码片段。因此，在典型的
Jamstack 网站上安装 FastComments 只需几秒钟，就像任何静态网站一样。

#### 潜在问题

我们理解 Jamstack 网站并不总是以静态的形式开始。它们可能是使用 Preact、React 或 Vue 构建的。例如，我们用原生 JS 编写了 FastComments 小部件
以实现最大互操作性，以便与所有主要框架一起使用。然而，如果你在使用 FastComments 和你选择的框架时遇到问题，请
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">告诉我们</a>。

#### 结论

我们希望你发现 FastComments 能够让你的用户与网站互动，提供反馈，并以他们通常无法在静态网站上做到的方式留言。
例如，这个页面是预渲染的，就像传统的 Jamstack 网站一样，你可以在底部看到 FastComments 正在愉快地工作。

干杯！

{{/isPost}}

---