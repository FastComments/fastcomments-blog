---
[category:Integrations]
###### [postdate]
# [postlink]FastCommentsを使用してGatsbyJSサイトにコメントを埋め込む[/postlink]

{{#unless isPost}}
現在、FastCommentsを使用してGatsbyで作成されたサイトにコメントを埋め込むことができます！
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事は専門用語が含まれています

#### 新しい情報

最近、FastCommentsのための<a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">Reactコンポーネント</a>を発表しました。

これにより、多くの機会が開かれます - FastCommentsとGatsbyを統合することを含めて。

#### 自分でラッパーを書いた場合

FastCommentsのために独自のReactラッパーを作成した場合は、新しいものに置き換えることを検討してください。この抽象化を維持し、多くの
便利な機能（例えば<a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">設定変更時の自動リロード</a>など）が含まれています。

#### どのように機能するのか

FastCommentsは、コアウィジェットの周りにReactコンポーネントをラッパーとして持っているため、クライアント側でウィジェットをインスタンス化するために私たちのReactライブラリを使用するだけです。

このコンポーネントを完全にサポートし、更新を行います。

#### 例はありますか？

例を設定し始めましたので、<a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">ここ</a>で確認できます。

#### ナイトモード

私たちが持っている例の一つは「ナイトモード」で、黒（または非常に暗い）背景のサイトでFastCommentsをレンダリングします：<a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>。

さらに、ウィジェットは設定変更に応じて反応するため、サイトのテーマを切り替えるモードを持ち、fastcomments-reactに簡単に更新を指示することができます。

#### 結論

FastCommentsをGatsbyサイトに統合することが迅速かつ容易であることを願っています。

乾杯！

{{/isPost}}

---