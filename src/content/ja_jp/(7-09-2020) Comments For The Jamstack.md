---
[category:Integrations]
###### [postdate]
# [postlink]Jamstackのコメント[/postlink]

{{#unless isPost}}
古いものは新しいものとして再登場しています。プリレンダリングされ、CDNから提供されるサイトは現在「JamStack」と呼ばれていますが、完全に静的である必要はありません！
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には専門用語が含まれています

<a href="https://jamstack.org/" target="_blank">Jamstack</a> は、従来のウェブサーバーに依存しないウェブサイトの書き方です。代わりに、ユーザー体験を最適化するために「CDN」と呼ばれるサーバーから提供されます（非常に高速に読み込まれます）。Jamstackで書かれたサイトにとって、パフォーマンスは非常に重要です - FastCommentsと同様に。

#### FastCommentsがJamstackと連携する理由

FastCommentsは、コメントを追加したい静的ページの一番下に小さな（現在11kb未満）コードスニペットを必要とします。したがって、通常のJamstackサイトにFastCommentsをインストールするのは、静的サイトと同じように数秒で済みます。

#### 潜在的な問題

私たちは、Jamstackサイトが必ずしも静的なものとして始まるわけではないことを理解しています。例えば、Preact、React、またはVueで作成されることがあります。バニラJSで書かれたFastCommentsウィジェットは、すべての主要なフレームワークと互換性を持つように最大限に構築されました。しかし、FastCommentsとお好みのフレームワークとの間で問題が発生した場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">お知らせください</a>。

#### 結論

FastCommentsが、ユーザーがサイトと対話し、フィードバックを提供し、静的サイトではできなかった方法でコメントを残すことを可能にしてくれることを願っています。例えば、このページは従来のJamstackサイトと同様にプリレンダリングされており、FastCommentsが下部で正常に動作しているのを見ることができます。

乾杯！

{{/isPost}}

---