---
[category:Migration]

###### [postdate]
# [postlink]IntenseDebate から FastComments への移行[/postlink]

{{#unless isPost}}
この投稿を読んで、IntenseDebate から FastComments への完全な移行方法を示します。
{{/unless}}

{{#isPost}}
## WordPress を使用している場合

FastComments には専用の WordPress プラグインがあります： <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

このプラグインを使用すると、インストール、セットアップ、および同期が非常に簡単になります。この方法を選択する場合、ここにある他の指示は無視して問題ありません。

## 手動での一般的なインストール

### 既存のコメントをエクスポート

IntenseDebate からサイトのコメントとユーザーデータをエクスポートするには、管理ダッシュボードで「サイト」->「あなたのサイト」->「ツール」->「XML エクスポート」に移動します。

メールで受け取った結果のファイルには、不可解な「gz」ファイル拡張子が付いていることに気づくでしょう。技術に詳しい方は、この略称が「gzip」を指し、ファイルを圧縮するための人気で効率的な方法であることを知っているかもしれません。

### 「gz」ファイルを開かないでください

デフォルトの Windows 10 インストールでは、IntenseDebate からのファイルを開くことができません。それは問題ありません。なぜなら、FastComments ではそれを開く必要がないからです。私たちのバックエンドは、この圧縮ファイルを理解します。

その後、ログインしている場合は、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ここでファイルをインポートします</a>。ドロップダウンから IntenseDebate を選択し、ファイルをアップロードします。

### 数分待つ

FastComments のインポートは「非同期」です。これは、ファイルのアップロードと処理が別のステップであることを意味します。

したがって、ファイルサイズによっては、すぐに成功メッセージを受け取ることがあります。インポートページの下部には、各行がインポート試行を表すテーブルがあります。このページを安全に更新して、インポートの状況や、これまでにいくつの行がインポートされたかを確認できます。

### 完了したら

インポートが完了すると、成功したかどうかにかかわらずメールが届きます。ファイルのアップロードが成功し、インポートページでインポートが表示されたら、そのページを閉じても問題ありません。ステータスは「リクエスト中」となり、開始するとステータスは「実行中」となります。

必要に応じて何度でも再インポートすることは安全です。ただし、インポートが失敗した場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">お問い合わせください</a>。お手伝いします。

### IntenseDebate コードを FastComments に置き換える

これは、IntenseDebate が提供する小さなスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">私たちの</a>もので置き換えるだけです。IntenseDebate と FastComments を同じサイトで一時的に実行して、外観や感触をテストおよび調整することもできます。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">お手伝いできます</a>。

IntenseDebate ウィジェットを使用していて、それを置き換えたい場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">こちらからお問い合わせください</a>。

### 同時に URL を移行する

コメント自体は IntenseDebate のエクスポート内の「リンク」フィールドに結び付けられているため、URL が変更されない限り、スイッチは簡単です。URL を移行してコメントを保持したい場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">古い URL と新しい URL を送信してお知らせください</a>。ヘルプページでは、小さなテキストファイルをアップロードできるため、複数の URL を移行する場合は Excel シートを作成してください。

### まとめ

1. データをエクスポートする
2. FastComments にインポートする
3. IntenseDebate の JavaScript スニペットを <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments のもの</a> に置き換える

## なぜ IntenseDebate からファイルが送信されないのか？
大きなサイトの場合、IntenseDebate は技術的な制限によりエクスポートファイルを作成できないことがあります。私たちには、既存のサイトをスクレイピングしてコメントを引き抜く能力がありますが、これはかなりカスタムされたものであり、時間がかかるため、サポートパッケージが必要になります。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">ここからサポートをリクエストできます</a>。
{{/isPost}}