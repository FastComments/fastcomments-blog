---
[category:Features]

###### [postdate]
# [postlink]FastComments 評論數計算小部件[/postlink]

想要在用戶點擊之前展示頁面的評論數量嗎？使用 FastComments 完全沒有問題。

{{#isPost}}
這是即將推出的許多功能之一 - FastComments 現在支持評論數計算小部件。

例如，這個頁面有<b><span id="fastcomments-widget-comment-count"></span></b>。這個數字是通過小部件插入的！
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

這是一個實時計數，具有 60 秒的緩存，以幫助非常受歡迎的頁面更快加載。這意味著您可能會看到實時計數比您的評論數少一分鐘，但這是為了確保 FastComments 名副其實。

更好的例子可能是一個博客文章的列表，例如：

### 文章 #1
##### 64 則評論


### 文章 #2
##### 128 則評論


### 文章 #3
##### 256 則評論

您還可以在博客 <a href="https://blog.fastcomments.com" target="_blank">首頁</a> 上查看這個實時示例。

評論數計算小部件不會在 iframe 中呈現，因此它可以完全通過 CSS 自定義。它會自動繼承您頁面的樣式 - 字體、顏色、行高等等。

要獲得您帳戶的評論數計算小部件代碼，只需前往<a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">這裡</a>。

您可以在用戶界面的帳戶頁面中找到它，然後點擊獲取小部件代碼，然後選擇其他小部件。

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}

---