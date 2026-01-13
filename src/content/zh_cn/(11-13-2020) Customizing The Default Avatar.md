---
[category:UI & Customization]

###### [postdate]
# [postlink]自定义默认头像[/postlink]

{{#unless isPost}}
默认头像图片现在可以自定义。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 本文包含技术术语

#### 介绍

自FastComments推出以来，默认图标一直没有改变。请看默认个人资料图标的辉煌。

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="默认个人资料图标" alt="默认个人资料图标" />
</div>

但是现在，你可以对其进行自定义。

#### 无需代码

首先，<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">添加或编辑自定义规则</a>。自定义规则可以
应用于单个页面、一个域名或你的整个账户。如果你希望全局更改头像，可以将URL ID字段留空。

向下滚动到“默认头像”部分。

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday 设置"
    class='lozad' />
    
点击按钮上传高达20mb的JPG、PNG或GIF格式的文件。它会被调整为100px的正方形。

#### 使用代码

如果你希望托管默认头像，并且已经有一个公共URL，可以按以下示例在代码中定义。

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

图片应为正方形，大小应为100px的正方形。遵循这些限制将确保最佳体验。

#### 注意事项

1. 自定义默认个人资料照片仅影响你的网站。它不会以任何方式影响通知电子邮件或用户账户。
2. 在更改之前创建的评论可能仍会显示旧的个人资料照片。如果你调整了默认个人资料图标并发现你的网站上有很多评论使用旧的个人资料图标，<a href="https://fastcomments.com/auth/my-account/help" target="_blank">请告诉我们</a>。

#### 结论

我们希望你觉得本指南对你有帮助且易于阅读。如有任何问题，欢迎在下方留言。

干杯！

{{/isPost}}

---