---
[category:Integrations]

###### [postdate]
# [postlink]适用于Webflow的可嵌入评论[/postlink]

{{#unless isPost}}
安装FastComments到Webflow.io网站的说明，包括一个视频。
{{/unless}}

{{#isPost}}

#### 目标受众

本文面向希望在其Webflow网站上添加评论支持的任何人。

#### 引言

在Webflow网站上安装FastComments和在其他网站上安装一样简单——唯一的一个特殊情况是针对像Webflow这样的托管服务提供商。

#### 步骤

1. 将你的Webflow网站域名添加到你的帐户中——没有这个域名小部件将无法加载。这是在Webflow中点击“发布”时使用的域名，例如“https://your-superb-project.webflow.io”。
2. 在设计模式中，左上角点击“添加元素”，然后向下滚动到“组件”。点击“嵌入”——添加FastComments代码片段，你可以在<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">这里</a>找到。

#### 视频

这里有一个详细说明安装过程的视频，视频从我们在Webflow设计器中的操作开始，最后展示嵌入的评论小部件在我们网站中正常运行。

<div class="text-center">
    <video src="images/fc-webflow-install.mp4" controls alt="Webflow安装说明视频" title="Webflow安装说明视频"></video>
</div>

#### 注意事项

FastComments通过验证域名来确保你的安装安全。如果你希望在没有专用域名的情况下在你的Webflow网站上显示评论小部件，**你必须在你的帐户中添加“weblfow.io”作为域名<a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">在这里</a>。**

为了提高安全性，你可以定义完整的域名，例如“your-awesome-site.webflow.io”。

#### 总结

我们希望你觉得本指南对你有所帮助且易于阅读。欢迎在下方发表评论，提出任何问题。

干杯！

{{/isPost}}

---