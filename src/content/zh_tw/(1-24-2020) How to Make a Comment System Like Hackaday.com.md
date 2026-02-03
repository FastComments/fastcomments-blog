---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]如何製作類似Hackaday.com的評論系統[/postlink]

{{#unless isPost}}
在這裡，我們將探索創建一個看起來像Hackaday的評論線程。

如果您點擊此帖的鏈接，整體頁面樣式以及FastComments博客將會改變。

{{/unless}}

{{#isPost}}
###### 2020年1月24日
<div class="post-header">
    <div class="by left">作者: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## 哇，發生了什麼？

這篇文章是使用FastComments創建一個看起來像https://hackaday.com的評論系統的示範。

我們不建議您複製它們。但這展示了FastComments的靈活性。

讓FastComments看起來像這樣是很簡單的！
我們為此構建了一個UI！例如，這是我們用來讓FastComments與此頁面匹配的配置：

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday 設定"
        class='lozad'
        height="850px" />
</div>

如果您想在代碼中進行操作也是同樣容易的。

我們只需要設置幾個選項。嗯，七個。這是代碼片段（自訂CSS省略）。這種方式僅能插入這麼多CSS。我們建議您使用
上面的UI來定義CSS。它也會為您進行壓縮，而定義customCSS屬性則不會應用任何壓縮優化。

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] 在「如何製作類似HACKADAY.COM的評論系統」的想法',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' 條評論';
        },
        headerHTML: '<h1>留下回覆</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

這些每個選項的含義是什麼？
- commentCountFormat = 評論線程上方標題的格式。"[count]" 將被實際的本地化計數替換。
- commentCountUpdated = 當評論數量變更時調用的函數。我們使用這個來設置頁面頂部的評論數量。
- headerHTML = 顯示在“留下回覆”框上方的HTML。在這種情況下，我們用它來插入標題元素。
- hideAvatars = Hackaday沒有頭像。因此，我們將其設置為true以隱藏它們。
- inputAfterComments = 將回覆框重新定位到評論提要的底部。
- absoluteDates = 將默認日期格式（即“11分鐘前”）更改為絕對日期。
- customCSS = 自定義樣式

所有配置選項的文檔記載於<a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">這裡</a>。

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' 條評論';
    };
</script>

{{/isPost}}

---