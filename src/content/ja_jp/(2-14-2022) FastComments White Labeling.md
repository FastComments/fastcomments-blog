---
[category:API & Development]

###### [postdate]
# [postlink]FastComments ホワイトラベリング[/postlink]

{{#unless isPost}}
ホワイトラベリングは、完全なAPI統合と自動化ツールを備え、FastCommentsに登場します。
{{/unless}}

{{#isPost}}

## 新機能

FastCommentsは、ホワイトラベリングを通じて他のアプリケーションやサードパーティのリセラーと統合できるようになりました。ホワイトラベリングを使用すると、FastCommentsアカウント（テナントと呼ばれます）、ユーザー、モデレーターなどを作成できます。

現在、私たちはサードパーティとの統合を自動化するための[包括的なAPI](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api)を提供しています。

APIを通じて、次のことが可能になりました：

- あなたのテナントによって管理される顧客（子テナント）を作成する。
- 顧客に提供されるパッケージと請求方法を管理する。
- 管理しているテナントにユーザーを追加および管理する。
- 管理しているテナントにモデレーターを追加および管理する。
- モデレーターを招待し、テナントユーザーにログインリンクを送信する。

## 請求

請求には、2つのオプションがあります：

1. FastComments Flexを通じて、子テナントの使用状況が自動的に集約され、親テナントに請求されます。これは[請求分析ページ](https://fastcomments.com/auth/my-account/analytics/billing)を通じて監視できます。
2. FastComments Proを通じて、固定の月額料金で固定の数の子テナントを作成することができます。

## ディブランド

管理されたテナントでは、ディブランドを有効にすることができ、コメントウィジェットから私たちのロゴが削除されます。

## ホワイトラベリングの取得方法

現在、FastComments FlexおよびProプランでは、ホワイトラベリングAPIへのアクセスを提供しています。

## スクリプトと例

ユーザーとモデレーターを持つテナントをセットアップするためにAPIを使用する例のスクリプトは[こちら](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling)で入手可能です。

## 包括的なバリデーション

各APIリソースには包括的なバリデーションと制約が含まれており、正しく使用するための役立つエラーメッセージが表示されます。

<div class="code"><div class="title">詳細なエラー例</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "そのIDのユーザーはこのテナントに存在しません。まずユーザーを作成し、それからモデレーターにしてください。",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## その他のユースケース

[テナントユーザー](https://docs.fastcomments.com/guide-api.html#tenant-user-structure)および[モデレーター](https://docs.fastcomments.com/guide-api.html#moderator-structure)APIを使用して、ホワイトラベリングにかかわらず、これらのリソースを自分のテナントに追加および管理することもできます。

## ドキュメント

ホワイトラベリングの完全なドキュメントとAPIの使用方法は[こちら](https://docs.fastcomments.com/guide-white-labeling.html)にあります。

## 結論

この更新とそのドキュメントが役立ったことを願っています。統合を楽しんでください！

{{/isPost}}

---