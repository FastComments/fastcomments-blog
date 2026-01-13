---
[category:Integrations]
###### [postdate]
# [postlink]在 BigCommerce 博客中添加评论[/postlink]

{{#isPost}}

#### 在任何页面添加观众互动
如果您的观众可以在您的博客文章上发表评论、提问和反馈，您觉得会怎样？现在，他们可以通过 FastComments 实现。

#### 自定义主题
为了将 FastComments 添加到您的 BigCommerce 商店博客中，您需要编辑主题模板。我们将引导您完成这个过程。

在 BigCommerce 仪表板中，转到 Storefront -> My Themes。

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="商店链接" title="商店链接" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="我的主题链接" title="我的主题链接" class="lozad" />
</div>

在“当前主题”下，您将看到一个标签为“高级”的下拉菜单。

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="主题高级下拉菜单" title="主题高级下拉菜单" class="lozad" />
</div>

在此下拉菜单中，第一个选项是“编辑主题文件”。如果此选项不可点击，您需要先通过“复制一份”来复制该主题。

一旦您能够打开模板编辑器，您将在浏览器的左侧看到文件浏览器。这是您主题中模板的文件浏览器。

您需要导航到表示博客文章的 HTML 模板。它位于 templates/components/blog/post.html，如下所示：

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="编辑器博客文章文件位置" title="编辑器博客文章文件位置" class="lozad" />
</div>

您的 FastComments 代码片段可以在 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">这里</a> 获取，应该粘贴在第 48 行后，也就是包含文本“&#123;{>components/common/share}&#125;”的那一行。

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="插入 FastComments 的位置" title="插入 FastComments 的位置" class="lozad" />
</div>

#### 请记住！
您需要将您的商店域添加到 FastComments，您可以在 <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">这里</a> 进行操作。

#### 结论
以下就是 FastComments 在您的 BigCommerce 博客中的样子。干杯！

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="BigCommerce 博客上的 FastCommence" title="BigCommerce 博客上的 FastCommence" class="lozad" />
</div>

{{/isPost}}

---