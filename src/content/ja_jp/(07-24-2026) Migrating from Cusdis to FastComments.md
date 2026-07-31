[category:Migration]
###### [postdate]
# [postlink]Migrating From Cusdis To FastComments[/postlink]

{{#unless isPost}}
この投稿を読んで、スレッド、モデレーションステータス、ページURLを含む、CusdisからFastCommentsへの完全な移行方法を確認してください。
{{/unless}}

{{#isPost}}

Cusdisは軽量でオープンソースのコメントシステムです。規模が大きくなり、スパムフィルタリング、投票、リアクション、通知、SSO、フルモデレーションダッシュボードといった機能が必要になった場合、FastCommentsはCusdisのデータを直接インポートできるようになりました。

## Export Your Existing Comments

Cusdisのダッシュボードから、フルデータエクスポートをリクエストします。Cusdisはプロジェクト、ページ、すべてのコメント、スレッド、承認ステータスを含む単一のJSONファイルを提供します。Cusdisの設定に応じて、エクスポートはメールで送られるか、すぐにダウンロードされます。

編集や解凍は不要です。「.json」ファイルはそのまま保持し、バックエンドが直接読み取ります。

## Import Into FastComments

ログインしたら、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ここからファイルをインポート</a>してください。ドロップダウンから **Cusdis (.json)** を選択し、ファイルをアップロードします。

### Wait a few minutes

FastCommentsのインポートは「asynchronous」です。ファイルのアップロードと処理は別々のステップです。小さなファイルの場合、成功メッセージはすぐに表示されます。インポートページの下部にテーブルがあり、各行がインポート試行を表しています。ページをリフレッシュしてステータスと現在までにインポートされたコメント数を確認してください。

### When it's done

インポートが完了すると、成功か否かに関わらずメールが届きます。アップロードが成功し、ステータスが「Requested」または「Running」と表示されたら、ページを閉じても問題ありません。

再インポートは安全です。FastCommentsは各コメントを元のCusdis IDで照合するため、再度インポートすると既存のコメントが更新され、重複は作成されません。インポートが失敗した場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">こちらへお問い合わせ</a>ください。サポートいたします。

## What is Imported

- **Threaded replies.** Cusdisは複数階層の返信をネストしますが、FastCommentsは親子構造全体を再構築します。
- **Moderation status.** 承認済みのコメントはそのまま承認された状態で残ります。未承認のコメントはFastCommentsのモデレーションキューに入るので、レビューできます。
- **Authors.** 各コメント投稿者の名前とメールアドレスが引き継がれ、FastCommentsの登録ユーザーはメールでマッチングされます。
- **Formatting.** CusdisのコメントはMarkdownで書かれています。FastCommentsも同じMarkdownをレンダリングし、リンク、画像、改行などがそのまま表示されるため、スレッドは以前と同じ見た目になります。

Cusdisで削除されたコメントはインポートされないため、インポート後のスレッドはクリーンな状態です。

## Replace the Cusdis Widget

データ移行が完了したら、サイトから小さなCusdisスニペットを削除し、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">こちらのコード</a>に差し替えてください。しばらくの間、CusdisとFastCommentsを併用して外観や操作感をテストすることも可能です。多数のフロントエンドフレームワークに対応しており、<a href="https://fastcomments.com/install-wizard" target="_blank">こちらで確認できます</a>。<a href="https://fastcomments.com/auth/my-account/help" target="_blank">サポートも提供しています</a>。

### Migrating URLs at the same time

Cusdisは各コメントをページURLに紐付けているため、URLが変わらなければ切り替えは簡単です。URLも変更する場合は、まずCusdisデータをインポートし、その後「Manage Data」内の組み込み <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> ツールを使ってコメントを新しい場所へ移動します。古い場所と新しい場所のドメイン全体、完全なURL、またはURL ID を入力でき、1つの「from」‑「to」ペアで一致するすべてのページを一括で移動できます。バックグラウンドジョブとして実行され、完了時にメールで通知されます。

多数のページがある場合など、こちらで対応してほしい場合は、<a href="https://fastcomments.com/auth/my-account/help" target="_blank">古いURLと新しいURLをお知らせください</a>。

## EU

EUにいる場合は、顧客データがEU内に留まるように <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> でアカウントを作成することをおすすめします。

## Recap

1. CusdisからJSON形式でデータをエクスポートする
2. FastCommentsのインポートページでアップロードし、**Cusdis (.json)** を選択する
3. Cusdisスニペットを <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments のコード</a>に置き換える

{{/isPost}}

---