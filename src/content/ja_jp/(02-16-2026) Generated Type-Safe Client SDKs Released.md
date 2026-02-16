---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]生成された型安全クライアントSDKのリリース[/postlink]

{{#unless isPost}}
TypeScriptの移行に関する投稿で予告したように、10のプログラミング言語用の生成された型安全クライアントSDKをリリースしました。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には専門用語が含まれています

### 新しい情報

私たちの[TypeScript移行に関する投稿](/blog/fastcomments-typescript-migration-completed)で、生成されたクライアントSDKが提供されることに言及しました。ついに登場しました。

FastCommentsは、**10の言語**に対して公式の型安全SDKを提供します：

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

各SDKは、私たちのサーバーが生成する同じOpenAPI仕様から生成されています。型、メソッドシグネチャ、およびリクエスト/レスポンスモデルは、実際のAPIと自動的に同期されます。コンパイラーは、ネットワークリクエストを行う前にフィールド名のタイプミスや欠落したパラメータをキャッチします。

### 仕組み

TypeScriptへの移行は、このための前提条件でした。サーバーコードが完全に型付けされた今、私たちは[TSOAのフォーク](https://github.com/FastComments/tsoa)を使用して、ルートコントローラーから直接OpenAPI 3.0仕様を生成します。その仕様は[OpenAPI Generator](https://openapi-generator.tech/)に供給され、各言語用のクライアントライブラリが生成されます。

APIが変更されると、ツールが仕様の違いを検出し、影響を受けるSDKを再生成し、各言語のテストを実行し、自動的にプルリクエストを開きます。私たちは、10のリポジトリ全体で更新-テスト-リリースサイクルを調整する小さな管理ツールをNimで構築しました。

### 各SDKの内容

各SDKは2つのAPIクラスを提供します：

- **`DefaultApi`**：APIキーを必要とする認証済みエンドポイント。これらは、モデレーション、ユーザー管理、分析、およびバルク操作のためにサーバー側で使用します。
- **`PublicApi`**：ブラウザやモバイルアプリから安全に呼び出せる非認証エンドポイント。これには、コメントの取得、投稿、投票、およびその他のクライアント向け操作が含まれます。

すべてのSDKには、既存の認証システムと統合するためのSSOユーティリティも含まれています。TypeScript SDKは、リアルタイムイベントの購読も提供し、ライブコメントが可能になります。

### ドキュメンテーション

完全なAPIドキュメントは[docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html)で利用可能です。各SDKリポジトリには、利用可能なすべてのメソッドとモデルを網羅した生成ドキュメントも含まれています。

SSO統合については、私たちの[SSOガイド](https://docs.fastcomments.com/guide-sso.html)を参照してください。すべての10のSDKには、それぞれのネイティブ暗号ライブラリを使用したSSOヘルパーが含まれています。

### 結論

完全に型付けされたサーバーを持つことで、信頼性のあるOpenAPI仕様を生成することが簡単になり、そこから10の（そしていつかはもっと多くの！）言語向けのクライアントを生成することは、主に自動化を構築し、タイプ定義を改善するということが中心でした。余分な抽象化を加えることなく、FastCommentsの動作を遅くすることなく、消費可能なものにしました！

すべての主要なリリースと同様に、これらのSDKを最適化し、テストし、適切にリリースする時間を取れたことを嬉しく思います。ご意見や追加してほしい言語があれば、下記にお知らせください。

よろしくお願いします！

{{/isPost}}

---

---