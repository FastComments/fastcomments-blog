---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastCommentsは、コース用のSSO、スレッドコメント、および協力チャットを備えた専用のMoodleプラグインを提供しています。
{{/unless}}

{{#isPost}}

### 新しい機能

FastCommentsのMoodle用公式プラグインを発表できることを嬉しく思います。Moodleを使用していて、コースにライブのスレッドコメントや協力チャットを追加したいと思っていた方にとって、このプラグインは非常に簡単に実装できます。従来の手動PHPアプローチを置き換え、数分でインストールでき、既存のMoodleユーザーアカウントに統合された適切なMoodleプラグインです。このプラグインはMoodle 4.1以降で動作し、ソースは[GitHub](https://github.com/FastComments/fastcomments-moodle)で入手可能です。

### はじめに

インストールするには、[Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments)からプラグインを取得し、Moodleサイトのプラグインインストーラーを通じてインストールします。あるいは、ダウンロードして`<moodle-root>/local/fastcomments`に抽出し、サイト管理者としてログインして**サイト管理 > 通知**にアクセスします。Moodleは新しいプラグインを検出し、インストールを自動的に実行します。

インストールが完了したら、**サイト管理 > プラグイン > ローカルプラグイン > FastComments**に進んで設定を行います。**テナントID**（FastCommentsダッシュボードにあります）と、Secure SSOを使用する場合は**API秘密鍵**が必要です。これは推奨されます。

### コメントスタイル

プラグインは3つのコメントスタイルをサポートしており、学生やコース構造に最適なものを選択できます。

**コメント**モードでは、ページコンテンツの下にフルコメントウィジェットが配置されます。学生はスレッド形式の返信、@メンション、賛否投票、リッチテキストエディタ、ページの新しいコメントに登録するための通知ベルを利用できます。

<div class="text-center">
    <div class="sm">コースページのコメント</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**コラボチャット**モードでは、ページの上部にバーが追加され、ユーザーがテキストを選択してディスカッションを開始するように促します。ハイライトされたテキストはコンテンツに固定され、会話は正確に話し合われていることに結びつきます。また、オンラインユーザーとアクティブなディスカッションの数も表示されます。このモードでは下部ウィジェットは表示されません。

<div class="text-center">
    <div class="sm">選択したテキストに固定されたコラボチャット</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**コラボチャット + コメント**では、両方を同時に使用できます。学生はインラインディスカッションのためにテキストをハイライトし、コンテンツの下にあるフルコメントウィジェットも利用できます。これは、迅速なインラインフィードバックと長いスレッドの会話の両方が必要なコースに最適です。

<div class="text-center">
    <div class="sm">ページ上でアクティブな両方のコメントスタイル</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### 自動SSO

プラグインは3つのSSOモードをサポートしています。**Secure SSO**が推奨されるオプションです。これは、HMAC-SHA256を使用してAPI秘密鍵でユーザーのアイデンティティをサーバー側で署名するため、クライアント上での資格情報の露出がありません。Secure SSOを使用すると、Moodle管理者は自動的にFastCommentsのモデレーターとして同期され、サイト管理者は追加のセットアップなしでコメントを管理できます。ユーザーのアバター、名前、メールアドレスはすべて安全に渡されます。

**Simple SSO**は署名なしでクライアント側でユーザーデータ（名前、メール、アバター）を渡します。短時間で設定できますが、HMACアプローチよりもセキュリティが低くなります。最後に、**None**はSSOを完全に無効にするため、ユーザーは匿名でコメントできます。

### ユーザー通知設定

学生は、Moodleプロファイルから直接FastCommentsの通知設定を管理できます。**FastComments**セクションで返信通知（誰かが自分のコメントに返信したときにメールを受け取る）とサブスクリプション通知（自分が登録したスレッドのメールを受け取る）を切り替えることができます。これにより、すべてが一か所に集まり、学生は受け取るメールの量をコントロールできます。

### 結論

Moodleプラグインは現在利用可能です。完全なセットアップのウォークスルーについては、[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html)をご覧ください。ソースコードは[GitHub](https://github.com/FastComments/fastcomments-moodle)で入手できます。ご意見がありましたら、下記にお知らせください！

よろしくお願いします！

{{/isPost}}

---