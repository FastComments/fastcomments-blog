---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Hackaday.comのようなコメントシステムを作成する方法[/postlink]

{{#unless isPost}}
ここでは、Hackadayに似たコメントスレッドの作成について探求します。

この投稿へのリンクをクリックすると、全体のページスタイリングやFastCommentsブログが変更されます。

{{/unless}}

{{#isPost}}
###### 2020年1月24日
<div class="post-header">
    <div class="by left">作成者: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## おお、何が起こったの？

この投稿は、FastCommentsを使用してhttps://hackaday.comに似たコメントシステムを作成するデモです。

コピーすることはお勧めしませんが、これはFastCommentsの柔軟性を示しています。

FastCommentsをこのように見せるのは簡単です！
私たちはそれ用のUIを構築しました！例えば、FastCommentsがこのページに一致するように構成した設定は次の通りです：

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Settings"
        class='lozad'
        height="850px" />
</div>

コード内で行う場合も同様に簡単です。

いくつかのオプションを設定するだけです。実際には7つです。ここにコードスニペットがあります（カスタムCSSは省略）。この方法で挿入できるCSSは限られています。CSSを定義するためには上記のUIを使うことをお勧めします。また、UIはCSSを圧縮してくれますが、customCSSプロパティを定義すると最適化は適用されません。

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] THOUGHTS ON "HOW TO MAKE A COMMENT SYSTEM LIKE HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comments';
        },
        headerHTML: '<h1>返信を残す</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

これらのそれぞれは何を意味するのでしょうか？
- commentCountFormat = コメントスレッド上のタイトルの形式。 "[count]"は実際のローカライズされたカウントに置き換えられます。
- commentCountUpdated = コメントカウントが変更されたときに呼び出される関数。これを使用してページの上部にコメント数を設定します。
- headerHTML = "返信を残す"ボックスの上に表示されるHTML。この場合、見出し要素を挿入するために使用します。
- hideAvatars = Hackadayにはアバターがないため、これをtrueに設定して非表示にします。
- inputAfterComments = 返信ボックスをコメントフィードの下部に再配置します。
- absoluteDates = デフォルトの日付形式（例："11分前"）を絶対日付に変更します。
- customCSS = カスタムスタイリング

すべての設定オプションは<a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">こちら</a>に文書化されています。

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' コメント';
    };
</script>

{{/isPost}}

---