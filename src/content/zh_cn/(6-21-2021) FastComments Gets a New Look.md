---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments 全新外观发布[/postlink]

{{#unless isPost}} FastComments 已更新。了解该更新及您如何获得它。 {{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

### 新外观

直到今天，FastComments 评论小部件的外观和感觉只逐步演变。今天，我们发布了一个全新的版本！

请查看下面的对比（拖动滑块进行比较）：

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### 现有客户

由于我们的大部分用户自定义评论小部件，我们将新 UI 完全分开。您在迁移之前应该不会看到任何变化。

### 谁能获取

从今天开始，注册的新客户将自动获得新设计。我们所有的框架、库和插件都已更新，以整合 FastComments 评论小部件的新版本。

### 旧版本的生命周期结束

我们目前没有设定旧版本评论小部件的生命周期结束。这并不意味着将来不会宣布。但是，当我们宣布时，我们将给出合理的期限（从公告到弃用的6 - 12个月）。

我们的自动化测试套件已更新，以支持不同版本的评论小部件，因此旧版本仍将进行持续的自动化测试。

### 暗黑模式及其他功能

新设计支持暗黑模式，就像原始评论小部件一样。所有功能标志和设置已被迁移。

在暗黑模式方面，旧评论 UI 的资产在页面加载时总是被包含，即使未被使用。这约占总数据的额外2kb，始终下载到客户端 - 即使不需要。

新版本的评论小部件仅在需要时获取这些资产，包括样式。

### 默认头像

新 UI 使用的默认头像不同。在迁移时，产品中管理仪表板和所有通知电子邮件中使用的默认头像也将会更改。

### 定制规则的影响

我们意识到，当我们对公开的评论小部件进行样式更改时，可能会破坏客户的自定义设置。别担心，我们已经检查了每个人的自定义小部件样式，以确保没有出现回归问题。但是，如果您遇到问题，请告诉我们。

### 性能影响

评论小部件的总大小从15.4kb增加到17.4kb。尽管我们认为由于 UI 外观显著改善而导致的轻微捆绑大小增加是值得的，但我们已计划采取措施将其降低。

总体而言，由于更多资源现在被捆绑在一起，新 UI 的加载速度更快，从而减少了请求数量。

### 如何迁移

#### 通过支持

只需联系您的支持代表，或在[这里](https://fastcomments.com/auth/my-account/help)开始对话。

#### WordPress

如果您正在使用 **WordPress**，只需升级到最新版本并更新您可能有的任何自定义样式。

#### 自定义集成

如果您使用的是 **VanillaJS** 评论小部件，只需更改：

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

为：

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

如果您使用的是 **React, Angular, 或 Vue** 库，只需升级到版本2。

### 一些技术统计

从概念、设计到实施，这是一个为期两个月的项目，涉及 **100+ 个文件**，更改了超过 **九千行代码**。

我们还完全改造了我们的构建系统，以便在评论小部件的多个版本之间共享代码库。该系统允许我们使用编译时表达式，仅包含适合该版本 UI 的代码，从而降低小部件捆绑的大小。

### 前瞻性思维

之前的设计自2019年到2021年中期持续使用。我们希望这个新外观能让我们更进一步，而我们管理多个版本评论 UI 的新基础设施将使 FastComments 在客户基础上不断增长而不受干扰。

祝您评论愉快！

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---