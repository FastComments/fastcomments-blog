---
[category:Integrations]

###### [postdate]
# [postlink]Webflow用の埋め込みコメント[/postlink]

{{#unless isPost}}
FastCommentsをWebflow.ioサイトにインストールするための手順と動画が含まれています。
{{/unless}}

{{#isPost}}

#### 対象読者

この記事は、自分のWebflowサイトにコメント機能を追加したい人を対象としています。

#### はじめに

WebflowサイトにFastCommentsをインストールするのは、他のサイトにインストールするのと同じくらい簡単ですが、Webflowのようなホスティングプロバイダーに特有の1つのポイントがあります。

#### 手順

1. あなたのWebflowサイトのドメインをアカウントに追加してください。これがないとウィジェットは読み込まれません。これは、Webflowで「公開」をクリックしたときに使用されるドメインで、例えば「https://your-superb-project.webflow.io」となります。
2. デザインモードで、左上の「要素を追加」に移動し、下にスクロールして「コンポーネント」に行きます。「埋め込み」をクリックし、こちらから見つけられるFastCommentsのコードスニペットを追加します。<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ここ</a>

#### 動画

インストールの詳細を説明した動画があります。Webflowデザイナーで始まり、埋め込まれたコメントウィジェットが私たちのサイトで機能する様子で終わります。

<div class="text-center">
    <video src="images/fc-webflow-install.mp4" controls alt="WebflowインストールInstructional Video" title="WebflowインストールInstructional Video"></video>
</div>

#### ポイント

FastCommentsは、ドメイン名でリクエストを検証することでインストールを保護します。専用のドメイン名がない場合でも、Webflowサイトにコメントウィジェットを表示させるためには、**アカウントに「weblfow.io」をドメインとして追加しなければなりません <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">こちら</a>。**

セキュリティを強化するために、完全なドメイン名を定義することもできます。例えば「your-awesome-site.webflow.io」のように。

#### 結論

このガイドが役に立ち、読みやすかったことを願っています。ご質問があれば、下にコメントしてください。

よろしくお願いします！

{{/isPost}}

---