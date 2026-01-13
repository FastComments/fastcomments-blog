---
[category:Migration]
###### [postdate]
# [postlink]JustCommentsからFastCommentsへの移行[/postlink]

{{#unless isPost}}
この投稿を読んで、JustCommentsからFastCommentsへの完全な移行方法を確認してください。

通常、彼らが提供する小さなコードスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">私たち自身のもの</a>に置き換えることが必要です。
JustCommentsとFastCommentsを同じサイトで一時的に実行して、見た目や操作感をテストし、微調整することもできます。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちが手助けできます</a>。
{{/unless}}

{{#isPost}}

2021年から、JustCommentsはサービスを終了します。FastCommentsでは、あなたが私たちのプラットフォームに簡単に切り替えられるようにしています。

FastCommentsは、あなたが慣れ親しんだ多くの機能を提供し、さらに多くの機能を備えています。

## 価格の違い

JustCommentsはクレジットベースのシステムを使用していますが、FastCommentsは三つの階層がある階層モデルを採用しています。FastCommentsの$5/月のプランでは、月に最大1Mページビューをカバーします。それ以上はProプランとEnterpriseプランがあり、詳細は<a href="https://fastcomments.com/traffic-pricing" target="_blank">料金ページ</a>をご覧ください。

## WordPressを使用している場合

FastCommentsには専用のWordPressプラグインがあります：<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>。

このプラグインは、インストール、設定、同期を非常に簡単にします。ただし、JustCommentsはFastCommentsのようにWordPressインストールにコメントを戻さないため、同期後は以下のエクスポートとインポートの手順に従う必要があります。

## 既存のコメントをエクスポートする

FastCommentsインポータは、あなたのコメント、ユーザー名、ユーザーアバター、インライン画像を移行します。画像は私たちのサーバーにシームレスに移動します。

JustCommentsからコメントデータをダウンロードするには、アカウントページに移動してください。

## FastComments管理画面にインポートする

JustCommentsからの結果ファイルを開くことについて心配する必要はありません。

ログインしている場合は、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ここからファイルをインポートできます</a>。

ドロップダウンからJustCommentsを選択し、ファイルをアップロードします。

### ページ識別子

インポート時に、ページのURLまたは「アイテムID」を選択するオプションが表示されます。どちらを選ぶべきか不明な場合は、ページのURLを選択してください。ウィジェットの設定でアイテムIDを指定するJustCommentsとの統合がある場合は、アイテムIDを選択します。

### 数分待つ

FastCommentsのインポートは「非同期」です。これは、ファイルのアップロードと処理が別々のステップであることを意味します。

そのため、ファイルサイズによっては、すぐに成功メッセージが表示されることがあります。インポートページの下部にはテーブルがあり、各行はインポート試行を示しています。
このページを安全に更新して、インポートの状況や、これまでにインポートされた行数を確認できます。

### 完了したら

インポートが完了すると、成功または失敗にかかわらずメールが届きます。ファイルのアップロードが成功し、インポートページでインポートが表示されたら、ページを閉じることができます。ステータスは「リクエスト済み」というようになり、開始されるとステータスは「実行中」となります。

必要な限り再インポートすることは安全ですが、インポートが失敗した場合は<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちに連絡してください</a>、お手伝いします。

### FastCommentsにJustCommentsのコードを置き換える

JustCommentsのWordPressプラグインを使用していない場合は、彼らが提供する小さなコードスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">私たちのもの</a>に置き換えるだけです。
JustCommentsとFastCommentsを同じサイトで一時的に実行して、見た目や操作感をテストし、微調整することもできます。 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちが手助けできます</a>。

### 同時にURLを移行する

コメント自体はデフォルトでJustCommentsのエクスポートの「pageUrl」フィールドに紐付けられているため、URLが変更されない限り、切り替えは簡単です。URLを移行し、コメントを保持したい場合は<a href="https://fastcomments.com/auth/my-account/help" target="_blank">旧URLと新URLを送って教えてください</a>。ヘルプページでは小さなテキストファイルのアップロードが可能なので、複数のURLを移行する場合はExcelシートを作成してください。

## まとめ

1. データをエクスポートする
2. FastCommentsにインポートする
3. WordPress以外の場合、JustCommentsのJavaScriptスニペットを<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsのもの</a>に置き換える

{{/isPost}}

---