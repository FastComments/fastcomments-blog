---
[category:集成]
[category:教程]
###### [postdate]
# [postlink]在 Notion 页面添加评论[/postlink]

{{#unless isPost}}
想在你的 Notion 页面添加评论吗？我们可以帮忙。
{{/unless}}

{{#isPost}}

## 新变化

FastComments 现在是 embed.ly 的提供商，因此提供 API 和服务，使评论线程可以嵌入到支持 [oEmbed](https://oembed.com) 的应用程序中。

这意味着你现在可以轻松地在使用 Notion、Google Sites 或 Nimbus Note 构建的网站上添加实时评论。

## 如何使用 - 快速演示

登录你的租户后，只需访问 [fastcomments.com/create](https://fastcomments.com/create) 创建一个会话链接，然后可以将其添加到你的 Notion 页面或任何与 embed.ly 集成的应用程序中。

你可以使用你的演示嵌入链接 [fastcomments.com/c/demo](https://fastcomments.com/c/demo) 自行尝试：

<video src="images/fastcomments-notion.mp4" controls alt="FastComments 和 Notion 演示" title="FastComments 和 Notion 演示"></video>

嵌入的评论小部件可以像其他 FastComments 实例一样自定义。

例如，如上面的影片所示，我们可以自定义评论小部件，以便用户只需输入他们的姓名，而无需输入电子邮件即可评论或投票。

## 2023 更新 - 支持 Super.so

现在你可以使用 FastComments 在基于 Notion 文档的 Super.so 网站上添加评论！ [你可以在这里找到文档。](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sites 也得到了支持，流程类似。

1. [创建一个嵌入的会话。](https://fastcomments.com/create)
2. 在编辑你的 Google Site 时，导航到 `插入` -> `嵌入`。选择 `通过 URL`。
3. 粘贴步骤 1 中的 URL。
4. 点击 `插入`。完成！

#### 添加嵌入链接

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="如何将 FastComments 添加到 Google Site" alt="如何将 FastComments 添加到 Google Site" />
</div>

#### 已在你的 Google Site 添加评论！

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="完成！" alt="完成！" />
</div>

## Nimbus Note

Nimbus Note 也得到了支持，流程类似。

1. [创建一个嵌入的会话。](https://fastcomments.com/create)
2. 在编辑你的笔记时，添加一个嵌入块。
3. 使用步骤 1 中的 URL 作为嵌入的 URL。
4. 点击 `插入`。完成！

### 谁有权限

所有当前和新的 FastComments 客户，在所有层级上，现在都可以访问 oEmbed 支持。

### 嵌入现有会话

要嵌入现有会话，只需将传递给评论小部件的 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a> 的值输入到创建会话页面作为会话名称。

### 总结

像 FastComments 的其他功能一样，我们希望你觉得这个功能快速且易于使用。

干杯！

{{/isPost}}

---