---
[category:Features]

###### [postdate]
# [postlink]FastComments コメント数ウィジェット[/postlink]

ユーザーがクリックする前にページ上のコメント数を表示したいですか？FastCommentsなら問題ありません。

{{#isPost}}
多くの機能の最初の一つとして、FastCommentsはコメント数ウィジェットをサポートしています。

例えば、このページには <b><span id="fastcomments-widget-comment-count"></span></b> があります。この数値はウィジェットを通じて挿入されます！ 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

これはリアルタイムのカウントで、非常に人気のあるページをより速く提供するために60秒間キャッシュされます。つまり、コメントの数が1分遅れることがありますが、それはFastCommentsがその名前にふさわしいものであることを保証するためです。

より良い例はブログ投稿の一覧です。例えば：

### 投稿 #1
##### 64 コメント


### 投稿 #2
##### 128 コメント


### 投稿 #3
##### 256 コメント

これに関するライブ例をブログの<a href="https://blog.fastcomments.com" target="_blank">ホームページ</a>で見ることもできます。

コメント数ウィジェットはiframeにレンダリングされないため、CSSによって完全にカスタマイズ可能です。ページのスタイル - フォント、色、行の高さなどを自動的に継承します。

アカウント用のコメント数ウィジェットコードにアクセスするには、<a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">こちら</a>に行ってください。

UIからアカウントページを通じて見つけ、ウィジェットコードを取得してから、その他のウィジェットをクリックします。

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