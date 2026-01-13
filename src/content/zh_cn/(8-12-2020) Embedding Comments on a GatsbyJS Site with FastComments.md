---
[category:Integrations]
###### [postdate]
# [postlink]在GatsbyJS网站上嵌入评论与FastComments[/postlink]

{{#unless isPost}}
您现在可以使用FastComments将评论嵌入使用Gatsby制作的网站中！
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 新变化

我们最近推出了适用于FastComments的<a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React组件</a>。

这带来了很多机会——包括将FastComments与Gatsby集成。

#### 如果您编写了自己的包装器

如果您为FastComments编写了自己的React包装器——可以考虑用我们的新组件替换它。我们将为您维护这个抽象——它包含了许多
很酷的功能，比如<a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">配置更改时自动重载</a>。

#### 工作原理

由于FastComments有一个作为我们核心小部件包装器的React组件——使用我们的React库在客户端实例化小部件就只是一个形式。

我们完全支持这个组件并会保持其更新。

#### 示例？

我们已经开始设置示例，您可以在<a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">这里</a>找到它们。

#### 夜间模式

我们有一个示例是“夜间模式”——在黑色（或非常深色）背景的网站上渲染FastComments：<a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>。

此外，由于小部件响应配置更改，这意味着您可以拥有一个切换网站主题的模式，并轻松告诉fastcomments-react进行更新。

#### 总结

我们希望您发现将FastComments集成到您的Gatsby网站中既快速又简单。

干杯！

{{/isPost}}

---