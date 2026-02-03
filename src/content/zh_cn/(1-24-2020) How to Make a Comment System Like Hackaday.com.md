---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]如何制作一个像Hackaday.com这样的评论系统[/postlink]

{{#unless isPost}}
在这里，我们将探讨创建一个看起来像Hackaday的评论线程。

如果您点击这个帖子的链接，整个页面的样式以及FastComments博客将会改变。

{{/unless}}

{{#isPost}}
###### 2020年1月24日
<div class="post-header">
    <div class="by left">作者: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## 哇，发生了什么？

这篇文章是使用FastComments制作一个看起来像https://hackaday.com的评论系统的演示。

我们并不建议您复制它们。但这展示了FastComments的灵活性。

让FastComments看起来像这样是很简单的！
我们为此构建了一个用户界面！例如，这里是我们用来使FastComments与这个页面匹配的配置：

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday设置"
        class='lozad'
        height="850px" />
</div>

如果您想在代码中实现，这同样简单。

我们只需要设置几个选项。嗯，总共七个。以下是代码片段（自定义CSS省略）。通过这种方式可以插入的CSS数量有限。我们建议您使用上述用户界面来定义CSS。它还会为您进行压缩，而定义customCSS属性将不会应用任何压缩优化。

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] 对“如何制作一个像HACKADAY.COM的评论系统”的看法',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' 条评论';
        },
        headerHTML: '<h1>留下回复</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

那么这些选项是什么意思呢？
- commentCountFormat = 评论线程上方标题的格式。 "[count]"将被实际的本地化数量替换。
- commentCountUpdated = 当评论数量发生变化时调用的函数。我们用这个来设置页面顶部的评论数量。
- headerHTML = 在“留下回复”框上方显示的HTML。在这种情况下，我们用它插入一个标题元素。
- hideAvatars = Hackaday没有头像。所以我们将其设置为true以隐藏头像。
- inputAfterComments = 将回复框重新定位到评论流的底部。
- absoluteDates = 将默认日期格式（即“11分钟前”）更改为绝对日期。
- customCSS = 自定义样式

所有配置选项都在<a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">这里</a>有详细文档。

<style>
    body, .content {
        background: #1a1a1a;
        font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova",sans-serif;
        color: #fff;
    }
    
    .header {
        color: #fff;
        border: none;
    }
    
    .header .header-inner a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .header-inner .buttons {
        display: none;
    }
    
    .header .header-inner #watchly-target {
        display: none;
    }
    
    .left-right-art {
        display: none;
    }
    
    .content {
        position: relative;
        max-width: 1128px;
        margin: 57px auto;
        padding: 20px 0 20px 0;
        box-shadow: none;
        border-top: 5px solid #fff;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .content a {
        color: #f3bf10;
        text-decoration: none;
    }
    
    .content a:hover {
        color: #fddb2f;
    }
    
    .content .posts .post .post-description h1, .content .posts .post .post-description h1 a {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px !important;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
    }
    
    .content h6#jan-24nd-2020-1 {
        position: absolute;
        top: -80px;
        right: 0px;
        font-size: 17px;
        font-weight: 700;
    }
    
    .content .by {
        font-size: 20.4px;
    }
    
    .post-header {
        height: 20px;
    }
    
    .post-header a {
        cursor: pointer;
        font-weight: 600;
    }
    
    .post-header .left {
        float: left;
    }
    
    .post-header .right {
        float: right;
    }
    
    @media(max-width: 1024px) {
        .header {
            padding-top: 0;
        }
        
        .header .header-inner a {
            padding: 0;
            font-size: 40px;
        }
        
        .content {
            margin: 7px auto;
            padding: 8px;
        }
        
        .content h6#jan-24nd-2020-1 {
            top: -38px;
            right: 5px;
        }
        
        .content h1 {
            padding: 0 0 10px;
            font-size: 32px;
        }
    }
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' 条评论';
    };
</script>

{{/isPost}}

---