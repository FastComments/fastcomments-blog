---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]如何从 Disqus 评论中移除广告[/postlink]

{{#unless isPost}}
在免费的 Disqus 计划中，你的评论区附带有广告。去除这些广告有两种方法。更好的方法还可以让你的评论加载更快，并防止读者被追踪。
{{/unless}}

{{#isPost}}

Disqus 通过在你的评论区放置广告来为其免费计划付费，这些广告位于你的内容下方，正是读者与你交流的地方。这些广告并不是你的。你不能选择它们，也没有从中赚取一分钱。这就是免费套餐的交换条件。

有两种真正的方法可以移除它们。

## 选项 1: 升级你的 Disqus 计划

直接的办法是付费给 Disqus。他们的付费计划会关闭广告。你可以在<a href="https://disqus.com/pricing/" target="_blank">Disqus 的定价页面</a>上找到当前的选项。

这样做是有效的，但需要明确你实际购买的是什么。你是为了解决一个缺点而支付费用。广告消失了，Disqus 的其他部分仍然保持不变：评论区仍然加载大量第三方脚本，读者在嵌入它的站点上仍然被追踪。你花钱是为了移除广告，而不是让评论区变得更轻便或更私密。

## 选项 2: 切换到一个从未显示广告的平台

另一种移除广告的方法是使用一个根本不播放广告的评论平台。 :)

只需每月 $0.99，FastComments 提供深度优化性能的功能，没有追踪或广告。

## 你保留每一条评论

人们最担心的部分是失去现有的讨论。FastComments 内置了一个 Disqus 导入工具，可以转移你的评论、用户名、用户头像、内嵌图片、投票和时间戳。我们还会将所有图片移动到我们自己的 CDN。

如果你想要完整的详细操作指南，我们有一个专门的指南：[从 Disqus 迁移到 FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html)。下面是简短版本。

## 三步切换的方法

### 1. 从 Disqus 导出你的评论

遵循<a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus 的导出步骤</a>。他们会将一个扩展名为 "gz" 的文件通过电子邮件发送给你。你不需要打开或解压缩它，而默认的 Windows 安装也无法这样做。我们的后台会直接读取该压缩文件。

### 2. 将文件导入到 FastComments

登录后，前往<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">导入页面</a>，从下拉菜单中选择 Disqus，然后按原样上传该文件。导入会在后台运行；页面将在运行时自动更新，显示发现和导入的评论数量。你可以安全地多次重新导入。

### 3. 用我们的代码替换 Disqus 代码

从你的页面中删除 Disqus 嵌入代码，替换为<a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments 的代码</a>。只要你的页面 URL 保持不变，你导入的评论会准确对齐到它们之前所在的位置。

## 在 WordPress 上？

如果你的网站运行在 WordPress 上，跳过手动步骤，安装<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress 插件</a>。它会为你处理安装、设置和同步，然后你可以停用 Disqus。

## 在你承诺之前先测试

你不必一次性切换所有内容。你可以暂时在同一页面上同时运行 Disqus 和 FastComments，以比较外观和感觉，然后再完全切换过来。如果你需要任何帮助，<a href="https://fastcomments.com/auth/my-account/help" target="_blank">联系我们</a>，我们会帮你解决。

不确定 FastComments 会花费你多少？每个计划都是无广告的，你可以在<a href="https://fastcomments.com/pricing-calculator" target="_blank">定价计算器</a>上查看你的费用。如果你在欧盟，你可以在<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 创建帐户，以便你的数据留在欧盟。

## 总结

1. 从 Disqus 导出你的数据
2. 将其导入到 FastComments
3. 用<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments 的代码</a>替换 Disqus 代码

就这些。在你的评论区没有广告，页面变得更轻便，所有已有的评论保持不变。

干杯！

{{/isPost}}

---