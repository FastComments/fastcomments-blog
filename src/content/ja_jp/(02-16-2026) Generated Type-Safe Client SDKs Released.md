---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
TypeScript 移行記事で予告した通り、10 のプログラミング言語向けに生成された型安全なクライアント SDK をリリースしました。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事は技術的な専門用語を含みます

### 新機能

私たちの[TypeScript 移行記事](/blog/fastcomments-typescript-migration-completed)で、生成されたクライアント SDK が登場することを言及しました。今、リリースされています。

FastComments は現在、公式の型安全 SDK を **10 の言語** 向けに提供しています:

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

すべての SDK は、サーバーが生成する同一の OpenAPI 仕様から作成されています。型、メソッドシグネチャ、リクエスト/レスポンスモデルは実際の API と自動的に同期されます。コンパイラは、コードがネットワークリクエストを行う前に、フィールド名のタイプミスや不足しているパラメータを検出します。

### 動作概要

この実現には TypeScript 移行が前提条件でした。サーバーコードが完全に型付けされたので、[our fork of TSOA](https://github.com/FastComments/tsoa) を使用してルートコントローラから直接 OpenAPI 3.0 仕様を生成します。その仕様は [OpenAPI Generator](https://openapi-generator.tech/) に渡され、各言語向けのクライアントライブラリが生成されます。

API が変更されると、ツールが仕様の差分を検出し、影響を受けた SDK を再生成し、各言語のテストを実行し、プルリクエストを自動的に作成します。Nim で小さなマネージャーツールを構築し、10 のリポジトリ全体で更新・テスト・リリースのサイクルを調整しています。

### 各 SDK の内容

各 SDK は 2 つの API クラスを提供します:

- **`DefaultApi`**: API キーが必要な認証済みエンドポイントです。サーバー側でモデレーション、ユーザー管理、分析、バルク操作に使用します。
- **`PublicApi`**: 認証不要のエンドポイントで、ブラウザやモバイルアプリから安全に呼び出せます。コメント取得、投稿、投票、その他クライアント向け操作をカバーします。

すべての SDK には、既存の認証システムと統合するための SSO ユーティリティも含まれています。TypeScript SDK にはさらに、ライブコメント用のリアルタイムイベント購読が提供されています。

### ドキュメント

完全な API ドキュメントは [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html) で利用できます。各 SDK のリポジトリにも、利用可能なすべてのメソッドとモデルを網羅した生成ドキュメントが含まれています。

SSO 統合については、[SSO ガイド](https://docs.fastcomments.com/guide-sso.html) を参照してください。10 の SDK すべてに、各言語のネイティブ暗号ライブラリを使用した SSO ヘルパーが含まれています。

### 結論

完全に型付けされたサーバーがあることで、信頼性の高い OpenAPI 仕様を簡単に生成でき、そこから 10 (将来的にはさらに増やす予定です) の言語向けクライアントを生成することは、主に自動化の構築  
と型定義の改善によるもので、利用しやすくするために過度な抽象化を加えて FastComments の速度を低下させないようにしています！

すべての主要リリースと同様に、最適化、テスト、そしてこれらの SDK を適切にリリースする時間を取れたことを嬉しく思います。  
以下にフィードバックや、追加してほしい言語があればお知らせください。

よろしくお願いします！

{{/isPost}}

---
---