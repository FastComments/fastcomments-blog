---
[category:Migration]
###### [postdate]
# [postlink]Muut コメントから FastComments への移行[/postlink]

{{#unless isPost}}
この記事を読んで、Muut から FastComments への完全な移行方法を確認しましょう。

これは、Muut が提供する小さなスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">私たちのもの</a> に置き換えるだけです。
Muut と FastComments を同じサイトで一時的に実行して、外観や操作感をテストしたり微調整したりすることもできます。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">お手伝いできます</a>。
{{/unless}}

{{#isPost}}
### 既存のコメントをエクスポートする

FastComments インポーターは、あなたのコメント、ユーザー名、ユーザーアバター、およびインライン画像を移行します。画像は私たちのサーバーにシームレスに移動します。

Muut からの管理ダッシュボードでサイトのコメントおよびユーザーデータをエクスポートするには、Integrations に移動し、その後 JSON Export を選択します。

結果として得られるファイルの拡張子が「gz」となっていることに気づくでしょう。技術に少し詳しい場合は、これは「gzip」を意味し、ファイルを圧縮するための一般的で効率的な方法であることをご存知かもしれません。

### "gz" ファイルを開かないでください

デフォルトの Windows 10 インストールでは、Muut からのファイルを開くことができません。それでも問題ありません。FastComments では、その圧縮ファイルを理解しています。

その後、ログインしている場合は、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">こちらからファイルをインポートできます</a>。ドロップダウンから Muut を選択し、ファイルをアップロードします。

ウェブサイトの URL を入力する必要があります。これは、Muut がエクスポート時にその情報を提供しないためです。

### 数分待つ

FastComments のインポートは「非同期」です。これは、ファイルのアップロードと処理が別々のステップであることを意味します。

したがって、ファイルサイズに応じて、すぐに成功メッセージが表示される場合があります。インポートページの下部には、各行がインポート試行を表すテーブルがあります。
このページを安全にリフレッシュして、インポートの状態とこれまでにインポートされた行数を確認できます。

### 完了したら

インポートが完了すると、成功したかどうかに関わらず、メールが届きます。ファイルのアップロードが成功し、インポートページでインポートが表示されたら、ページを閉じることができます。ステータスは「Requested」となり、開始するとステータスは「Running」となります。

必要に応じて再インポートすることは安全ですが、インポートに失敗した場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">ご連絡ください</a>。お手伝いできます。

### Muut コードを FastComments に置き換える

これは、Muut が提供する小さなスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">私たちのもの</a> に置き換えるだけです。
Muut と FastComments を同じサイトで一時的に実行して、外観や操作感をテストしたり微調整したりすることもできます。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">お手伝いできます</a>。

### 同時に URL を移行する

コメント自体は Muut エクスポートの「リンク」フィールドに関連付けられているため、URL が変更されなければスイッチは簡単です。URL を移行してコメントを保持したい場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">古い URL と新しい URL を送信してお知らせください</a>。ヘルプページでは、小さなテキストファイルをアップロードできますので、
複数の URL を移行する場合は、Excel シートを作成してください。

### まとめ

1. データをエクスポートします
2. FastComments にインポートします
3. Muut の JavaScript スニペットを <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments のもの</a> に交換します

## なぜ Muut は私にファイルを送ってくれないのか？
大規模なサイトでは、Muut が技術的制限によりエクスポートファイルを作成できない場合があります。既存のサイトをスクレイピングし、コメントを取得する能力はありますが、これはかなりカスタムされる可能性があり、関与する時間のためにサポートパッケージが必要です。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">こちらからお手伝いをリクエストできます</a>。
{{/isPost}}

---