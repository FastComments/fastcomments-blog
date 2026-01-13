---
[category:Migration]
###### [postdate]
# [postlink]Commento から FastComments への移行[/postlink]

{{#unless isPost}}
この投稿を読んで、Commento から FastComments へ完全に移行する方法を確認してください。

## 注意点

Commento は完全な URL を提供しません。彼らが提供するのは、コメントスレッドが属するドメイン名だけです - 例えば "fastcomments.com/some-page"。  
これは、FastComments のインポーターがプロトコルを推測しなければならず、デフォルトは https であることを意味します。インポートを実行してデータが表示されない場合は、サイトが適切に保護されているか確認してください。
{{/unless}}

{{#isPost}}
### 既存のコメントをエクスポートする

Commento からサイトのコメントおよびユーザーデータをエクスポートするには、管理ダッシュボードの一般設定からデータのエクスポートに進んでください。

メールで受け取る結果ファイルには、不思議な "gz" 拡張子が付いていることに気づくでしょう。技術に詳しい方であれば、これは "gzip" を意味し、ファイルを圧縮するための一般的で効率的な方法であることを知っているかもしれません。

### "gz" ファイルを開かないでください

デフォルトの Windows 10 インストールでは Commento からのファイルを開くことができませんが、それで問題ありません。FastComments では必要ありません。私たちのバックエンドはこの圧縮ファイルを理解します。

その後、ログインしている場合は<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ここからファイルをインポートします</a>。ドロップダウンメニューから Commento を選択し、ファイルをアップロードしてください。

### 数分待つ

FastComments のインポートは「非同期」です。これは、ファイルのアップロードと処理が別々のステップであることを意味します。

したがって、ファイルサイズによってはすぐに成功メッセージが表示される場合があります。インポートページの下部にはテーブルがあり、各行はインポートの試行を表しています。  
このページを安全に更新し、インポートの状況やこれまでにインポートされた行数を確認できます。

### 完了したら

インポートが完了すると、成功したかどうかに関わらずメールが届きます。ファイルアップロードが成功し、インポーツページでインポートを確認したら、ページを閉じることができます。  
そのステータスは「リクエスト中」となり、開始するとステータスが「実行中」となります。

必要なだけ再インポートすることは安全ですが、インポートが失敗した場合は<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちに連絡してください</a>。お手伝いします。

### Commento コードを FastComments に置き換える

これは、Commento が提供する小さなスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">私たちのもの</a>に置き換えることだけです。  
同じサイトで一時的に Commento と FastComments を同時に実行して、見た目や感触をテストおよび調整することもできます。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちもお手伝いできます</a>。

### 同時に URL を移行する

コメント自体は Commento エクスポートの「リンク」フィールドに紐付いているため、URL を変更しない限り、切り替えは簡単です。  
URL を移行し、コメントを保持したい場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">古い URL と新しい URL を送信してお知らせください</a>。ヘルプページでは小さなテキストファイルのアップロードが可能ですので、  
URL が2つ以上ある場合は、Excel シートを作成してください。

### まとめ

1. データをエクスポートする
2. FastComments にインポートする
3. Commento の JavaScript スニペットを<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments のもの</a>に交換する

## 注意点

Commento は完全な URL を提供しません。彼らが提供するのは、コメントスレッドが属するドメイン名だけです - 例えば "fastcomments.com/some-page"。  
これは、FastComments のインポーターがプロトコルを推測しなければならず、デフォルトは https であることを意味します。インポートを実行してデータが表示されない場合は、サイトが適切に保護されているか確認してください。

## なぜ Commento は私にファイルを送ってくれないのか？
大規模なサイトの場合、Commento は彼らの技術的制限のためにエクスポートファイルを作成できないことがあります。私たちはあなたの既存のサイトをスクレイピングし、そこからコメントを取得することができますが、これはかなりカスタムになる可能性があり、必要な時間によりサポートパッケージを持っている必要があります。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">ここでお手伝いをリクエストできます</a>。
{{/isPost}}

---