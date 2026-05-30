---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Disqusのコメントから広告を削除する方法[/postlink]

{{#unless isPost}}
無料のDisqusプランでは、コメントセクションに広告が表示されます。これを取り除く方法は2つあります。より良い方法は、コメントの読み込み速度を上げ、読者が追跡されるのを防ぎます。
{{/unless}}

{{#isPost}}

Disqusはその無料プランの代わりに、あなたのコンテンツの真下のコメントセクションに広告を表示します。それらの広告はあなたのものではありません。あなたが選ぶこともできず、そこから1セントの利益も得られません。これが無料プランの代償です。

広告を取り除くための実際の方法は2つあります。

## オプション1: Disqusプランをアップグレードする

ストレートフォワードな方法は、Disqusに支払うことです。彼らの有料プランでは広告がオフになります。現在のオプションは<a href="https://disqus.com/pricing/" target="_blank">Disqusの料金ページ</a>で確認できます。

これは機能しますが、あなたが購入しているものを明確に理解しておく価値があります。あなたは欠点を取り消すために支払っています。広告は消えますが、Disqusの他の部分はそのままです。コメントエリアはまだ多くのサードパーティスクリプトを読み込み、読者はまだそれを埋め込んでいるサイト全体で追跡されます。あなたは広告を取り除くために支払っているのであり、コメントセクションを軽くしたりプライベートにしたりするためではありません。

## オプション2: 広告を表示しないプラットフォームに切り替える

広告を取り除くもう一つの方法は、最初から広告を表示しないコメントプラットフォームを使用することです。 :)

月々わずか$0.99で、FastCommentsは追跡や広告なしでの深いパフォーマンス最適化機能を提供します。

## すべてのコメントを保持します

人々が最も心配するのは、既存のディスカッションを失うことです。FastCommentsには、コメント、ユーザー名、ユーザーアバター、インライン画像、投票、タイムスタンプを移行するための内蔵Disqusインポータがあります。私たちは、すべての画像をあなたのために独自のCDNに移動させることさえします。

完全で詳細な説明が必要な場合は、専用のガイドがあります：[DisqusからFastCommentsへの移行](/(1-23-2020)-migrating-from-disqus-fastcomments.html)。短いバージョンは以下の通りです。

## 3ステップで切り替える方法

### 1. Disqusからコメントをエクスポートする

<a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqusのエクスポート手順</a>に従ってください。彼らは「gz」拡張子の付いたファイルをメールで送ります。開いたり解凍したりする必要はなく、デフォルトのWindowsインストールでもできません。私たちのバックエンドは、その圧縮ファイルを直接読み取ります。

### 2. フォルダをFastCommentsにインポートする

ログインしたら、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">インポートページ</a>に移動し、ドロップダウンからDisqusを選択し、そのままファイルをアップロードします。インポートはバックグラウンドで実行され、ページは実行中に自動的に更新され、発見されたコメントの数とインポートされた数が表示されます。必要に応じて何度でも再インポートすることが安全です。

### 3. Disqusスニペットを私たちのものに置き換える

あなたのページからDisqusの埋め込みコードを削除し、代わりに<a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastCommentsのスニペット</a>を差し込んでください。ページのURLが同じであれば、インポートしたコメントは正確に元の位置に配置されます。

## WordPressを使用していますか？

あなたのサイトがWordPressの場合は、手動手順をスキップして<a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPressプラグイン</a>をインストールしてください。これにより、インストール、セットアップ、同期が行われ、その後Disqusを無効にできます。

## 切り替える前にテストしてください

一度にすべてを切り替える必要はありません。DisqusとFastCommentsを同じページで一時的に実行して、完全に切り替える前に見た目と感触を比較することができます。このプロセスのどれかで手助けが必要な場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">私たちに連絡してください</a>、そしてお手伝いします。

FastCommentsのコストが気になりますか？すべてのプランは広告なしで、<a href="https://fastcomments.com/pricing-calculator" target="_blank">料金計算機</a>で数字を確認できます。EUにいる場合は、あなたのデータがEUに保たれるように<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>でアカウントを作成できます。

## まとめ

1. Disqusからデータをエクスポートする
2. FastCommentsにインポートする
3. Disqusスニペットを<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsのもの</a>に置き換える

これだけです。コメントセクションに広告はなく、ページが軽くなり、すでにあったすべてのコメントが保存されます。

乾杯！

{{/isPost}}