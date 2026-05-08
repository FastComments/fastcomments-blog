---
[category:Migration]
###### [postdate]
# [postlink]2026年从AnyComment迁移到FastComments[/postlink]

{{#unless isPost}}
阅读此文章以了解如何在2026年从AnyComment完全迁移到FastComments。
{{/unless}}

{{#isPost}}

我们有许多客户询问关于2026年从AnyComment迁移的事宜。

## AnyComment 作为 WordPress 插件存在

AnyComment是一个WordPress插件。与像Disqus或Hyvor Talk这样的独立平台不同，它没有运行自己的后端——您的评论直接存储在您的WordPress数据库中，与核心WordPress使用的`wp_comments`表相同。这对迁移来说是个好消息：没有单独的AnyComment导出需要处理，也不需要与第三方服务器协调。您的数据已经在您自己的服务器上。

这意味着标准的FastComments WordPress迁移流程可以无额外步骤地处理AnyComment。

## 选项1：FastComments WordPress插件（推荐）

最简单的方法是安装<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress插件</a>。该插件指导您将WordPress安装与FastComments链接，并自动复制您现有的评论数据。无需手动下载或上传任何内容。数据从您的WordPress数据库复制到我们的服务器，因此这也将减轻您的服务器负担，一旦迁移完成。

大多数迁移在几分钟内完成。

在数据迁移完成后，请停用AnyComment。评论将继续通过FastComments提供服务，而该插件会将您的WordPress数据库保持同步作为备份（如果您启用该功能），因此您始终拥有自己的数据。

## 选项2：WordPress XML导出

如果您更愿意手动迁移，或者您已经迁出WordPress并仅有备份的XML，使用WordPress内置的导出功能。

1. 在您的WordPress管理面板中，转到**工具 -> 导出**并下载XML文件。
2. 登录到您的FastComments仪表板并<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">在这里导入文件</a>。
3. 从下拉菜单中选择**WordPress (.xml)**并上传您的文件。

由于AnyComment写入`wp_comments`，每个AnyComment线程都与您其他WordPress评论一起出现在该XML中。导入程序会自动将它们匹配到正确的帖子。

## 替换 AnyComment 小部件

如果您使用选项1，FastComments WordPress插件已经在您的网站上替换了AnyComment - 只需在迁移完成后停用AnyComment。

如果您使用选项2并且保留您的WordPress安装，请在之后安装FastComments插件以处理小部件渲染和持续同步。如果您完全迁离WordPress，请在您的新网站上粘入我们的<a href="https://fastcomments.com/install-wizard" target="_blank">安装代码片段</a> - 我们支持许多前端框架，您<a href="https://fastcomments.com/install-wizard" target="_blank">可以在这里找到</a>。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">我们可以提供帮助</a>。

## 欧盟

如果您在欧盟，您可能希望在<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>上创建您的帐户，以便您的客户数据保持在欧盟内。

## 回顾

1. 安装FastComments WordPress插件，让它复制您的数据，**或者**从WordPress导出为XML并在导入页面上传
2. 停用AnyComment
3. 如果您也要离开WordPress，请在您的新网站上更换小部件代码

{{/isPost}}

---