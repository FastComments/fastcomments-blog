---
[category:Migration]
###### [postdate]
# [postlink]Hyvor Talk から FastComments への移行[/postlink]

{{#unless isPost}}
この投稿を読んで、Hyvor Talk から FastComments への完全な移行方法を確認してください。

手動コードインストールを使用している場合は、彼らが提供する小さなスニペットを削除し、<a href="https://fastcomments.com/install-wizard" target="_blank">自分たちのもの</a>と置き換えるだけです。
Hyvor と FastComments を同じサイトで一時的に実行して、見た目をテストしたり調整したりすることもできます。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちがお手伝いできます</a>。

コードスニペットベースのインストールを使用していない場合は、プラットフォームに基づいて手順が異なります - もう一度 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">ご連絡ください</a>。
{{/unless}}

{{#isPost}}

## WordPress を使用している場合

FastComments には専用の WordPress プラグインがあります: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

このプラグインを使用すると、インストール、設定、同期が非常に簡単になります。この方法を選んだ場合は、ここにある残りの手順は無視できます。
Hyvor Talk のコメントが WordPress インストールに同期されていることを確認してください。

これがうまく機能しない場合（いくつかのお客様から報告されています）、私たちの WordPress プラグインを使って、Hyvor Talk から手動でデータをエクスポートしてインポートを行うことをお勧めします。データインポートは、[データ管理-> コメントのインポート](https://fastcomments.com/auth/my-account/manage-data/import) で見つけることができます。

## 手動・一般的なインストール

### 既存のコメントをエクスポートする

FastComments インポーターは、コメントスレッド、ユーザー名、ユーザーアバター、絵文字、インライン画像を移行します。画像はシームレスに私たちのサーバーに移動されます。

2022年現在、Hyvor Talk はメールアドレスやアップボート/ダウンボートをエクスポートしていません。この情報を含むエクスポートを取得できる場合は、私たちがインポートできます。

### .JSON ファイルをインポートする

Hyvor のエクスポートをダウンロードしたら、FastComments ダッシュボードにログインし、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ここからファイルをインポートしてください</a>。ドロップダウンから Hyvor Talk を選択し、ファイルをアップロードします。

### 数分待つ

FastComments のインポートは「非同期」です。これは、ファイルのアップロードと処理が別々のステップであることを意味します。

したがって、ファイルサイズによってはすぐに成功メッセージが表示されることがあります。インポートページの下部にはテーブルがあり、各行はインポート試行を表しています。
このページを安全に更新して、インポートのステータスや、これまでにインポートされた行数を確認できます。

### 完了したら

インポートが完了すると、成功したかどうかに関わらず、メールが届きます。ファイルのアップロードが成功したらページを閉じることができ、インポートページでインポートを見ることができます。ステータスは「リクエスト済み」となり、開始するとステータスは「実行中」になります。

必要に応じて再インポートすることは安全ですが、インポートに失敗した場合は <a href="https://fastcomments.com/auth/my-account/help" target="_blank">ご連絡ください</a> のでお手伝いできます。

### Hyvor Talk のコードを FastComments に置き換える

コードスニペットベースのインストールを使用している場合は、彼らが提供する小さなスニペットを削除し、<a href="https://fastcomments.com/install-wizard" target="_blank">自分たちのもの</a>と置き換えるだけです。
私たちは、多くのフロントエンドフレームワークをサポートしており、[こちらで見つけることができます](https://fastcomments.com/install-wizard)。Hyvor と FastComments を同じサイトで一時的に実行して、見た目をテストしたり調整したりすることもできます。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちがお手伝いできます</a>。

コードスニペットベースのインストールを使用していない場合は、プラットフォームに基づいて手順が異なります - もう一度 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">ご連絡ください</a>。

セルフサービスのインストールウィザードは[こちら](https://fastcomments.com/install-wizard)です。

### 同時に URL を移行する

コメント自体はエクスポート内のページ ID フィールドに紐付いているため、URL が変更されなければスイッチは簡単です。URL を移行してコメントを保持したい場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">古い URL と新しい URL を送信して</a> お知らせください。ヘルプページでは小さなテキストファイルをアップロードできますので、複数の URL を移行する場合は Excel シートを作成してください。

### EU

EU にいる場合は、おそらくお客様のデータを EU に保持するために、[eu.fastcomments.com](https://eu.fastcomments.com) でアカウントを作成したいでしょう。

### 要約

1. データをエクスポートする
2. FastComments にインポートする
3. Hyvor の JavaScript スニペットを <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments のもの</a>に置き換える

## なぜ Hyvor は私にファイルを送信しないのか？
大規模なサイトの場合、Hyvor は技術的な制限によりエクスポートファイルを作成できないことがあります。私たちは、お客様の既存のサイトをスクレイピングしてコメントを取得する能力がありますが、これはかなりカスタムのものであり、関与する時間のため、サポートパッケージを持つ必要があります。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">ここでサポートをリクエストできます</a>。
{{/isPost}}

---