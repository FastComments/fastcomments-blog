---
[category:Tutorials]
###### [postdate]
# [postlink]FastCommentsのインストールのデバッグを簡素化する方法[/postlink]

{{#unless isPost}}
コメントが表示されない？設定が適用されていないように見える？その問題を解決するのがずっと簡単になりました。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には専門用語が含まれています

#### 新着情報

<a href="https://fastcomments.com">FastComments</a>では、Google Chrome用のブラウザ拡張機能をリリースしました。この拡張機能は、コメントウィジェットが受け取っている設定や、なぜ表示されないのかを理解するのに役立ちます。

拡張機能はここから入手できます: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### 使用方法

コメントウィジェットが読み込まれない場合や、定義した設定の一部が表示されない場合は、<a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">この拡張機能</a>をインストールして、問題のページで開いてみてください。ツールバーにアイコンを表示させるには、右上のパズルピースをクリックしてピン留めする必要があります。以下のように表示されます：

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="拡張機能をピン留めする方法" title="拡張機能をピン留めする方法" class="lozad" />
</div>

拡張機能は、2つの分類のエラーのデバッグに役立ちます。1つ目は、ウィジェットがページにまったく含まれていないか、スクリプトに大きなタイプミスがある場合です。

2つ目は、特定の設定が効果を発揮していないように見える場合です。

両方のデバッグを開始するには、アイコンを単純にクリックします。

ツールがページにコメントウィジェットを見つけることができない場合は、大きな赤いエラーが表示されます：

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Embed.jsが見つからない例" title="Embed.jsが見つからない例" class="lozad" />
</div>

ウィジェットの1つ以上のインスタンスが見つかった場合、それぞれの設定が別々に表示されます：

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="複数の設定の例" title="複数の設定の例" class="lozad" />
</div>

さらに、FastCommentsデバッガーは、コメントが利用できない場合にウィジェットが読み取り専用モードで表示されないなどの一般的な問題に対する警告も表示します。

#### "最終"インスタンス設定？

デバッガーが「ウィジェットに渡された設定」と「最終設定」とラベル付けされた2セットの設定を表示することがあります。

「ウィジェットに渡された設定」は、その名の通り、ウィジェットに渡す設定です。一部の値は、embed.jsによって暗黙的に渡されるため、URLやページタイトルなどが含まれます。

「最終設定」は、ウィジェットが自らをレンダリングするために使用するすべての情報です。これは、自己生成された値（インスタンスIDなど）や、<b>ウィジェットカスタマイズ管理ページからの値</b>を含む場合があります。

#### 仕組み

コメントウィジェットは、その設定をデバッガーが見つけられる場所に保存し、デバッガーは現在のページでウィジェットのインスタンスをスキャンし、メモリに読み込みます。

#### この拡張機能はどのような情報を収集しますか？

FastCommentsデバッグツールは、自社のサーバーに連絡することはありません。実際、ウィジェットは、あなたが現在いるページのコンテンツを確認することさえもしません。

#### 結論

このようなツールを提供することで、あらゆるタイプの顧客にとってFastCommentsの設定が容易になることを願っています。下のコメント欄でこのツールがどのように機能したか教えてください。

場合によっては、まだ助けが必要なこともあると知っています。そのためには、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">カスタマーサポートページ</a>もご利用ください。

よろしくお願いします！

{{/isPost}}