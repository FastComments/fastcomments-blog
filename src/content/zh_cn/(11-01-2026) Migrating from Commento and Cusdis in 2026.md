[category:Migration]
###### [postdate]
# [postlink]2026 年从 Commento 和 Cusdis 迁移[/postlink]

{{#unless isPost}}
托管的 Commento 和 Cusdis 服务已停止响应。以下是迁移到 FastComments 的方法，以及如果您从未导出评论，我们如何帮助您从互联网档案馆恢复评论。
{{/unless}}

{{#isPost}}

如果您站点的评论区已变为空白，本篇文章适合您。它涵盖了哪些变化、如果您有导出文件如何导入，以及如果没有导出文件我们如何帮助您从互联网档案馆找回评论。

## 发生了什么

以下是我们截至 2026 年 11 月 1 日的观察：

- **Commento.** commento.io、其 API 以及小部件脚本均返回 404。互联网档案的抓取显示该站点在 2026 年 5 月 25 日仍可正常工作，但在 2026 年 6 月 11 日已返回 404。
- **Cusdis.** cusdis.com 及其 API 返回 Cloudflare 错误 521，表示 Cloudflare 后面的服务器已宕机。抓取显示该站点在 2026 年 8 月 27 日前仍可工作，但在 2026 年 10 月 16 日已返回 521。小部件脚本仍会加载，因此您的页面会出现一个空白框，原本用于显示评论。

我们未发现任何项目的停服通知。如果您自行托管 Commento 或 Cusdis，您的安装不受上述影响，且可以在准备迁移时随时导出数据。

## 查找您的数据

您选择的路径取决于您拥有的资源：

1. **您有导出文件。** 也请搜索您的收件箱，因为 Commento 会通过电子邮件发送“.gz”文件的导出。直接跳到导入步骤。
2. **您自行托管。** 从您自己的仪表盘导出，然后按照导入步骤操作。
3. **您使用了托管服务但没有导出文件。** 用于导出的仪表盘已不存在。请阅读下面的恢复章节。

## 导入导出文件

登录后，前往 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">此处导入文件</a>。从下拉菜单中选择 **Commento (.gz, .json)** 或 **Cusdis (.json)** 并上传您的文件。无需先解压 Commento 的“.gz”文件。

导入将在后台进行，完成后您会收到电子邮件。重新导入是安全的，因为每条评论会根据其原始 ID 匹配并就地更新。

我们为每种格式提供了更详细的指南：<a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> 和 <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>。它们关于从托管仪表盘请求导出的步骤已不再适用，但导入细节仍然有效。

## 从互联网档案馆恢复您的评论

Commento 和 Cusdis 都通过 JavaScript 从各自的服务器加载评论。当互联网档案馆使用浏览器抓取页面时，会连同这些响应一起保存。这些已保存的响应中包含了评论线程。

我们自行进行了测试。<a href="https://web.archive.org" target="_blank">Wayback Machine</a> 保存了超过 12,000 条捕获的 Commento 评论响应以及 448 个 Cusdis 项目的捕获，且最新的记录来自 2026 年。我们没有自助工具来完成此操作。我们会为您进行恢复，请 <a href="https://fastcomments.com/contact-us" target="_blank">联系我方</a> 开始。

### 首先检查您自己的站点

在 Wayback Machine 中打开您较为活跃的某篇文章，将地址替换为您自己的地址：

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

滚动到评论区。如果您的评论出现，说明档案中保存了该线程。如果没有出现，请使用页面顶部的日历尝试不同的年份。单篇文章的空白结果并不代表整个站点都没有，仍请联系我们。

### 恢复工作原理

1. **告诉我们您的域名。** 如果您使用了 Cusdis，还请提供您的 App ID，即您站点代码片段中的 `data-app-id` 值。我们会要求您证明对该域名的控制权，因为这些评论属于您的站点。
2. **我们查找您的线程。** 我们会收集您站点的抓取记录，并检查每条记录是否对应您的域名和页面。Commento 的恢复会更耗时，因为档案并未按站点对抓取进行索引，我们需要逐一读取。
3. **我们向您展示发现的内容。** 您将看到恢复了多少页面和评论，以及最新评论的日期，所有这些在导入之前都会显示。
4. **我们将线程导入到您的账户。** 您随后可以在审核仪表盘中编辑或删除任意评论。

### 恢复结果

<div class="pretty-table wide-table">

| 数据 | Commento | Cusdis |
| --- | --- | --- |
| 评论文本 | 是 | 是 |
| 作者显示名称 | 是 | 是 |
| 评论日期 | 是 | 是 |
| 回复线程 | 是 | 是 |
| 投票分数 | 是 | Cusdis 没有投票 |
| 页面地址 | 是 | 是，但有些站点仅存储路径，需要您提供域名 |
| 作者邮箱 | 否 | 否 |
| 待审核评论 | 否 | 否 |
| 最后一次抓取后写入的评论 | 否 | 否 |
| 档案从未抓取的页面 | 否 | 否 |

</div>

### 预期结果

此恢复基于快照进行，因此请预留可能的缺口。对经常被抓取且近期较为热门的页面恢复效果最佳。

我们测试的两个结果展示了范围。某博客中，30 次查询返回了跨 19 页的 810 条评论。另一站点仍显示其评论，最新的存档副本止于 2023 年 10 月，而实时页面一直更新至 2025 年 3 月。任何在最后一次抓取与停服之间写入的内容均不在档案中。

缺失的邮箱同样重要。恢复的评论保留作者姓名，但无法匹配到 FastComments 账户，作者也不会收到新回复的通知。

## 替换小部件

无论您选择哪条路径，都需要将旧的代码片段从站点移除。对于 Commento，请删除以下代码，如果您使用评论计数，还需删除 `count.js`：

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

对于 Cusdis，删除以下代码：

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

然后添加 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们的代码</a>：

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

我们还支持多种前端框架，<a href="https://fastcomments.com/install-wizard" target="_blank">您可以在此处找到</a>。无需等恢复完成即可切换。您的读者可以立即开始评论，恢复的线程在导入后会出现在相同页面。

### 如果您的 URL 正在更改

导入的评论与页面 URL 绑定，因此如果您的 URL 保持不变，线程会自动对齐。如果 URL 正在更改，请先导入，然后在“管理数据”下使用 <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">迁移评论</a> 工具将其移动到新位置。

## 欧盟

如果您位于欧盟，建议在 <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> 创建账户，以确保您的客户数据保留在欧盟境内。

## 小结

1. 查找导出文件，包括在您的电子邮件中。
2. 如果有文件，请在 <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">导入页面</a> 上传。
3. 如果没有，请在 Wayback Machine 中检查您的站点，并 <a href="https://fastcomments.com/contact-us" target="_blank">联系我方</a> 提供您的域名。
4. 将旧代码片段替换为 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">我们的代码</a>。

干杯!

{{/isPost}}

---