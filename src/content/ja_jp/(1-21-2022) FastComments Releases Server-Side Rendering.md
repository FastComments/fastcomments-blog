---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments がサーバーサイドレンダリングをリリース[/postlink]

{{#unless isPost}}
JavaScriptを使用せずに、サイトにコメント機能を追加します。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には技術用語が含まれています

## 新機能

2020年初頭のローンチ以来、FastCommentsはコメントウィジェットをレンダリングするためにJavaScriptのみを使用してきました。

もし、JSを使用せずにほぼすべての基本的な機能を持つことができると言ったらどうしますか？

<div class="text-center">
    <div class="sm">これはスクリーンショットです。クリックしようとしないでください。</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

上記のスクリーンショットは、JavaScriptなしのFastCommentsコメントウィジェットです。[JavaScriptなしでこのページを表示できます。](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## 使い方

WordPressを使用している場合、FastCommentsプラグインバージョン3.10.1は、自動的にJavaScriptが無効なユーザーのためにSSRのサポートを追加します。

カスタム実装の場合は、コメントスレッドのUIを取得するために、そのページのために`/ssr/comments`を呼び出します：

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

ここで、`$urlId`はページのURLまたはIDです。このドキュメントは[こちら](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id)にあります。

例えば、PHPを使用してコメントスレッドを表示するiframeをページに送信することができます：

<div class="code"><div class="title">PHPベースのSSR例</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

また、API呼び出しを行ってコメントスレッドのHTMLを取得し、レンダリングまたは保存することもできます。

完全なドキュメントは、[SSR Docs at docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html)にあります。

## SSO

企業的な響きを持つ略語が好きなので、心配しないでください。SSRはSSOをサポートしています。[SSRを用いたシングルサインオンの例はここにあります。](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## ローカリゼーション

SSRベースのエンドポイントは、ブラウザが送信する言語関連のヘッダーに基づいて自動的にレスポンスをローカライズします。また、JavaScriptベースのウィジェットと同じローカリゼーションのオーバーライドを使用することもできます。

## なぜこれを作ったのか

FastCommentsのようなサービスに対する主な不満の1つは、JSが必要であることです。コメントウィジェットをできる限りスリムに保ち、API呼び出しのSLAが< 20msであることを保証していますが、多くの小規模コミュニティは、サイトにJSを追加するという意味でそのようなソリューションを選びません。

これにより、JavaScriptにアクセスできないレンダリングエンジンを使用する機会も得られます。

## 技術

FastCommentsは、UIをレンダリングするために独自の小さなマイクロフレームワークを使用しています。このフレームワークはReactと似たアプローチを取っていますが、初回のレンダリング以外の手動DOM操作が許可されています。

コアのコメントウィジェットライブラリは単一のエントリポイントを持っており、状態のセットを受け取り、レンダリングされるHTMLとCSSを生成します。これをサーバー上でも呼び出します。ユーザーがページと対話すると、状態が変更され、最新のHTMLが取得されます。これは新年の一環として行われたハッカソンの結果として作られました。

## ライブコメント

UIはサーバーによって一度レンダリングされるため、ライブコメント機能は利用できません。

また、通知ベルは現在使用できません。将来的にはこの機能を追加することを検討しています。

## パフォーマンス

サーバーでレンダリングされたUIは、JavaScriptベースのウィジェットと同じストレージ最適化とレンダリングエンジンを使用しています。小さなコメントスレッドでは、ユーザーがコメントを取得しUIをレンダリングするスクリプトをダウンロードする必要がないため、実際にはパフォーマンスが向上します。

## クローラーとSEO

FastCommentsはすでにウェブクローラーと良好に動作します。SEOが懸念される場合、SSRを使用する必要はありません。

## 今後のアプリケーション

今後フォーラムソリューションを発表する予定です。伝統的に、フォーラムはページングされ、サーバーサイドレンダリングされます。現代のフォーラムソリューションは、この標準から脱却し、無限スクロールとクライアントサイドレンダリングを使用しています。私たちは、これがサードパーティのフォーラムソリューションを使用する唯一のオプションである必要はないと考えています。

## 結論

このガイドが役に立ち、読みやすいものであったことを願っています。質問があれば、下にコメントしてください。

よろしくお願いします！

<style>/*

Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---