---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]DisqusからFastCommentsへの移行[/postlink]

{{#unless isPost}}
この投稿を読んで、DisqusからFastCommentsへ完全に移行する方法を確認してください。

DisqusのGeneric Site Integrationを使用している場合は、提供された小さなスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">私たちのもの</a>に置き換えるだけです。
同じサイトでDisqusとFastCommentsを一時的に実行して、外観や操作感をテストしたり調整したりできます。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちがサポートします</a>。

Generic Site Integrationを使用していない場合、指示はあなたのプラットフォームによって異なります - 再度、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちに連絡してください</a>。
{{/unless}}

{{#isPost}}
Disqusが得意とすることはたくさんありますが、彼らが不足しているところでFastCommentsが活躍します。

## WordPressを使用している場合

FastCommentsには専用のWordPressプラグインがあります：<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

このプラグインを使用すると、インストール、設定、および同期が非常に簡単になります。この方法を選択した場合は、ここにある残りの指示を無視できます。

## マニュアル、一般インストール

### 既存のコメントをエクスポートする

FastCommentsインポーターは、コメント、ユーザー名、ユーザーアバター、およびインライン画像を移行します。私たちは画像を当社のサーバーにシームレスに移動します。

Disqusが正しく扱っていることの一つは、データのエクスポート方法です。彼らのガイドに従った後に<a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">こちら</a>で受け取った
ファイルには、謎の「gz」ファイル拡張子が付いていることに気づくでしょう。技術に少し詳しい方は、これが「gzip」を意味し、ファイルを圧縮するための人気のある効率的な方法であることをご存知かもしれません。

### 「gz」ファイルを開かない

デフォルトのWindows 10インストールでは、Disqusからのファイルを開くことができません。問題ありません、FastCommentsでは必要ありません。当社のバックエンドは
この圧縮ファイルを理解しますので、彼らの指示に従って<a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">こちらからファイルを取得してください</a>。

その後、ログインしている場合は、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">こちらからファイルをインポートします</a>。ドロップダウンからDisqusを選択し、ファイルをアップロードします。

### 数分待つ

FastCommentsのインポートは「非同期」です。これは、ファイルのアップロードと処理が別のステップであることを意味します。

したがって、ファイルサイズに応じて、すぐに成功メッセージが表示される場合があります。インポートページの下部にはテーブルがあります - 各行はインポート試行を表します。
このページを安全にリフレッシュして、インポートのステータスと現在までのインポートされた行数を確認できます。

### 完了したら

インポートが完了すると、メールが届きます - 成功したかどうかに関わらず。ファイルアップロードが成功し、インポートページでインポートを確認したら、そのページを閉じても大丈夫です。ステータスは「要求済み」と表示され、開始するとステータスは「実行中」となります。

必要なだけ再インポートすることが安全です - ただし、インポートが失敗した場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちに連絡してください</a>、手助けができます。

### DisqusのコードをFastCommentsに置き換える

Generic Site Integrationを使用している場合は、提供された小さなスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">私たちのもの</a>に置き換えるだけです。
同じサイトでDisqusとFastCommentsを一時的に実行して、外観や操作感をテストしたり調整したりできます。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちがサポートします</a>。

Generic Site Integrationを使用していない場合、指示はあなたのプラットフォームによって異なります - 再度、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちに連絡してください</a>。

### 同時にURLを移行する

コメント自体はDisqusエクスポートの「リンク」フィールドに結び付けられているため、URLが変更されない限り、切り替えは簡単です。URLを移行してコメントを保持したい場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">古いURLと新しいURLを送信して教えてください</a>。ヘルプページでは小さなテキストファイルをアップロードできるので、数個以上のURLを移行する場合はExcelシートを作成してください。

### 概要

1. データをエクスポートします。
2. FastCommentsにインポートします。
3. DisqusのJavaScriptスニペットを<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsのもの</a>に置き換えます。

## なぜDisqusは私にファイルを送信しないのか？
大規模なサイトでは、Disqusが技術的制限のためエクスポートファイルを作成できない場合があります。私たちは既存のサイトをスクレイピングしてコメントを抽出する能力がありますが、これはかなりカスタムである可能性があり、時間がかかるため、サポートパッケージが必要です。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">こちらからサポートをリクエストできます</a>。
{{/isPost}}

---