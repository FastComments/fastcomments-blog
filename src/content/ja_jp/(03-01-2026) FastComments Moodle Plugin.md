---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle プラグイン[/postlink]

{{#unless isPost}}
FastComments には、SSO、スレッドコメント、コラボレーションチャットを備えた専用の Moodle プラグインが登場しました。
{{/unless}}

{{#isPost}}

### 新機能のお知らせ

Moodle 用の公式 FastComments プラグインを発表できることを嬉しく思います。Moodle を使用していて、コースにライブのスレッド形式のコメントやコラボレーションチャットを追加したい場合、このプラグインが簡単に実現します。従来の手動 PHP アプローチを置き換え、数分でインストールでき、既存の Moodle ユーザーアカウントと統合される適切な Moodle プラグインです。このプラグインは Moodle 4.1 以降で動作し、ソースは [GitHub](https://github.com/FastComments/fastcomments-moodle) で入手できます。

### はじめに

インストールするには、[GitHub リポジトリ](https://github.com/FastComments/fastcomments-moodle) から ZIP をダウンロードし、`<moodle-root>/local/fastcomments` に展開します。次に、サイト管理者としてログインし、**サイト管理 > 通知** に移動してください。Moodle は新しいプラグインを検出し、自動的にインストールを実行します。

インストールが完了したら、**サイト管理 > プラグイン > ローカルプラグイン > FastComments** に移動して設定を行います。**テナント ID**（FastComments ダッシュボードで見つかります）と、セキュア SSO を使用する場合は **API シークレット** が必要です。

プラグインが Moodle プラグインディレクトリに承認されるまで、GitHub からの手動ダウンロードが一時的な手段であることに注意してください。承認されると、Moodle のプラグインインストーラーから直接インストールできるようになります。

### コメントスタイル

プラグインは3つのコメントスタイルをサポートしているため、学生やコースの構造に最適なものを選択できます。

**コメント**モードは、ページコンテンツの下に完全なコメントウィジェットを配置します。学生はスレッド形式の返信、@メンション、アップボートやダウンボート、リッチテキストエディター、ページの新しいコメントに登録するための通知ベルを受け取ります。

<div class="text-center">
    <div class="sm">コースページのコメント</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**コラボチャット**モードは、ページの上部にバーを追加し、ユーザーにテキストを選択して議論を開始するよう促します。ハイライトされたテキストはコンテンツに固定され、会話は正確に議論されていることに結びつきます。また、オンラインユーザーやアクティブな議論の数も表示されます。このモードは下部ウィジェットを表示しません。

<div class="text-center">
    <div class="sm">選択されたテキストに固定された共同チャット</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**コラボチャット + コメント**は、両方を同時に提供します。学生はインライン議論のためにテキストをハイライトし、コンテンツの下にある完全なコメントウィジェットを使用することができます。これは、迅速なインラインフィードバックと長いスレッドによる会話の両方が必要なコースに最適です。

<div class="text-center">
    <div class="sm">ページ上でアクティブな両方のコメントスタイル</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### 機能する SSO

プラグインは3つの SSO モードをサポートしています。**セキュア SSO**が推奨されるオプションです。これは HMAC-SHA256 を使用してサーバー側でユーザーのアイデンティティを署名し、API シークレットを使用しているため、クライアント上で資格情報が曝露されることはありません。セキュア SSO を使用することで、Moodle 管理者は自動的に FastComments のモデレーターとして同期されるため、サイト管理者は特別な設定なしでコメントをモデレートできます。ユーザーのアバター、名前、メールアドレスはすべて安全に送信されます。

**シンプル SSO**は、署名なしでユーザーデータ（名前、メール、アバター）をクライアント側に送信します。設定は簡単ですが、HMAC アプローチよりも安全性が劣ります。最後に、**なし**は SSO を完全に無効にし、ユーザーは匿名でコメントを残すことができます。

### ユーザー通知設定

学生は自分の Moodle プロフィールから直接 FastComments の通知設定を管理できます。**FastComments**セクションの下で、返信通知（誰かが自分のコメントに返信したときにメールを受け取る）や購読通知（購読しているスレッドの通知をメールで受け取る）を切り替えられます。これにより、すべてが一つの場所に集まり、学生はどれだけのメールを受け取るかをコントロールできます。

### 結論

Moodle プラグインは現在利用可能です。完全な設定手順については、[Moodle 統合ガイド](https://docs.fastcomments.com/guide-moodle.html)をご覧いただき、ソースコードは [GitHub](https://github.com/FastComments/fastcomments-moodle) で入手できます。フィードバックがあれば、以下でお知らせください！

よろしくお願いします！

{{/isPost}}

---