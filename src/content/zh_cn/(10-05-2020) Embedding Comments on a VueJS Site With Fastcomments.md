---
[category:教程]
[category:集成]
###### [postdate]
# [postlink]在VueJS网站上嵌入FastComments评论[/postlink]

{{#unless isPost}}
需要在使用Vue开发的应用程序中嵌入评论？我们可以帮您。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 新动态

FastComments现在拥有一个与我们的VanillaJS小部件功能相匹配的Vue组件。

我们决定将这个库命名为fastcomments-vue。您可以在<a href="https://github.com/FastComments/fastcomments-vue" target="_blank">这里</a>找到包含源代码的GitHub库。

该库还包含小部件的示例用法。

它已在NPM上，您可以在<a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">这里</a>找到。

#### 工作原理

这个新组件的工作方式是，Vue组件是现有FastComments小部件的一个封装。

这意味着如果我们增加现有组件的新功能或修复缺陷，您仍然会立即受益！

#### 为什么要有新组件？

我们编写FastComments VanillaJS小部件是为了成为我们业务的核心（以及核心后端）。这意味着我们设计它时考虑到了扩展性，就像现在这样。

尽管在没有这个新Vue库的情况下，您可以通过编写自己的库将FastComments集成到您的应用中，但这将是一个重大的采用障碍。通过直接支持Vue，我们使这些类型的客户更容易采用FastComments。

#### Vue 3.0

我们有一个专门为Vue 3.0构建的组件，名为<a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>。

#### 单页面应用程序？

FastComments在其核心支持SPA。该组件监视配置对象的变化 - 因此，如果您更新当前页面（称为urlId），小部件将重新渲染。

#### 对现有客户的影响

对现有客户没有任何变化 - 并且对于新项目使用VanillaJS版本的FastComments没有**任何**问题。fastcomments-vue依赖于VanillaJS版本的FastComments，并且永远如此。如果我们发布Angular或Vue组件，我们将遵循相同的模式。

我们的VanillaJS小部件是FastComments的第一公民。此版本完全是对我们基础设施的*补充*。

此外，VanillaJS小部件仍然是将嵌入式评论放入任何未使用框架的网页（如静态页面）的绝佳解决方案。

#### 结论

通过发布fastcomments-vue库以及未来的库，我们希望能让开发者在使用现代开发方法论时更容易地采用FastComments。

干杯！

{{/isPost}}

---