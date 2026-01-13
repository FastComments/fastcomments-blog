---
[category:API & Development]
###### [postdate]
# [postlink]VanillaJSのシングルページアプリケーションでFastCommentsを使用する[/postlink]

{{#unless isPost}}
私たちは専用のReactおよびVueJSコンポーネントを提供していますが、バニラウィジェットはシングルページアプリケーションでも使用できます。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には技術用語が含まれています

#### 対象読者

この記事は開発者を対象としています。

#### はじめに

FastComments VanillaJSウィジェットの例として、現在のページURLのコメントスレッドを読み込む非常にシンプルなコードスニペットがあります。これは、私たちの顧客の圧倒的多数のユースケースだからですが、最近、SPAを構築しFastCommentsを使用する開発者が増えています。

まず、FastCommentsには専用の<a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a>および<a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a>コンポーネントがあることを心に留めてくださいので、これらのライブラリを使用している場合はそれらをチェックしてください。そうすれば、FastCommentsをラップする必要はありません。

しかし、VanillaJSを使用してアプリケーションを構築している場合は、コメントウィジェットを動的にインスタンス化および更新できます。

#### まず、URLとURL ID

FastCommentsは、コメントスレッドが関連付けられているページまたは記事の2つの識別子を持っています。設定オブジェクトでは、"url"と"urlId"プロパティです。

URLはコメントウィジェットへのURLです。理想的には、このURLにアプリケーションの外部からアクセスできるようにする必要があります。これは、通知メールや管理者ツールでリンクとして公開されます。

URL IDは、URLまたはIDである文字列です - 現在のページを表す限り、任意の値を使用できます。投稿、記事、またはページIDがある場合は、この値のページURLの代わりにそれを利用できます。URL IDが別になっている理由は、ページに固有でないURLを作成するための追加情報をURLに保存したい場合があるからです。

ウィジェットがサポートする完全な設定がTypeScript<a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">でGitHubに文書化されていることに注意してください</a>。

#### 詳細と実際のデモ

ウィジェットがインスタンス化されると、通常呼び出すFastCommentsUI関数から結果を取得します。

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

次に、インスタンスオブジェクトの"update"メソッドを呼び出して、設定を更新できます。これによりコンポーネントが更新されます：

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

動作する例を<a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">このフィドルで見ることができます</a>。

この例ではdocument.getElementByIdを使用していますが、ターゲット要素を取得するためにお好みのメカニズムを使用できます。

#### ポイント

"URLId"のみを更新することはできますが、通知メールやモデレーションツールからのリンクが機能するために、"urlId"と"url"の両方を更新する必要があります。"url"のみを更新しても機能しません - コメントは"urlId"に関連付けられています。

#### 結論

このガイドが役に立ったことを願っています。質問がある場合は、下にコメントしてください。

乾杯！

{{/isPost}}

---