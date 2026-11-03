[category:Migration]
###### [postdate]
# [postlink]2026年のCommentoとCusdisからの移行[/postlink]

{{#unless isPost}}
ホストされた Commento と Cusdis のサービスは応答しなくなっています。FastComments への移行方法と、エクスポートしていない場合にインターネットアーカイブからコメントを復元する方法をご紹介します。
{{/unless}}

{{#isPost}}

サイトのコメントセクションが空白になっている場合は、この投稿が役立ちます。変更点、エクスポートがある場合のインポート方法、エクスポートがない場合にインターネットアーカイブからコメントを取り戻す方法を解説します。

## 何が起こったか

2026年11月1日現在の状況は以下の通りです:

- **Commento.** commento.io、API、ウィジェットスクリプトはすべて 404 を返します。インターネットアーカイブのキャプチャでは、2026年5月25日にサイトが動作しており、2026年6月11日までに 404 になっていることが確認できます。
- **Cusdis.** cusdis.com とその API は Cloudflare エラー 521 を返します。これは Cloudflare の背後にあるサーバーがダウンしていることを意味します。キャプチャでは 2026年8月27日まで動作しており、2026年10月16日までに 521 になっています。ウィジェットスクリプトはまだ読み込まれるため、ページにはコメントが空のボックスとして表示されます。

いずれのプロジェクトからも停止通知は見つかっていません。Commento または Cusdis をセルフホストしている場合、これらの影響は受けず、移行の準備ができたときにエクスポートできます。

## データの見つけ方

選択すべきパスは、現在お持ちのものによって異なります:

1. **エクスポートファイルがある。** Commento はエクスポートを「.gz」ファイルとしてメールで送信していますので、受信トレイも検索してください。インポート手順へ進んでください。
2. **セルフホストしている。** 自分のダッシュボードからエクスポートし、インポート手順に従ってください。
3. **ホストサービスを利用していてエクスポートがない。** エクスポート元のダッシュボードはなくなっています。以下の復元セクションをお読みください。

## エクスポートファイルのインポート

ログインしたら、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">こちらからファイルをインポート</a>してください。ドロップダウンから **Commento (.gz, .json)** または **Cusdis (.json)** を選択し、ファイルをアップロードします。Commento の「.gz」ファイルを事前に解凍する必要はありません。

インポートはバックグラウンドで実行され、完了するとメールが届きます。再インポートは安全です。各コメントは元の ID で照合され、同じ場所で更新されます。

各フォーマットの詳細ガイドは、<a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> と <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a> にあります。ホストダッシュボードからのエクスポート手順は現在は適用されませんが、インポート手順はそのまま使えます。

## インターネットアーカイブからコメントを復元する

Commento と Cusdis は、各自のサーバーから JavaScript でコメントをロードします。インターネットアーカイブがブラウザでページをキャプチャすると、これらのレスポンスもページと共に保存されます。保存されたレスポンスがコメントスレッドを保持しています。

私たち自身でテストしました。<a href="https://web.archive.org" target="_blank">Wayback Machine</a> には 12,000 件以上の Commento コメントレスポンスと 448 件の Cusdis プロジェクトのキャプチャがあり、最新は 2026 年です。セルフサービスツールは提供していません。復元は当社が代行しますので、<a href="https://fastcomments.com/contact-us" target="_blank">お問い合わせください</a>。

### まず自分のサイトを確認

Wayback Machine で自分のサイトの投稿を開き、アドレスを自分のものに置き換えてみてください:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

コメントセクションまでスクロールします。コメントが表示されれば、そのスレッドはアーカイブに保存されています。表示されない場合は、ページ上部のカレンダーで別の年を試してください。1 件の投稿で空結果でも、サイト全体が対象外というわけではありませんので、いずれにせよお問い合わせください。

### 復元の仕組み

1. **ドメインを教えてください。** Cusdis を使用している場合は、サイト上のスニペットにある `data-app-id` の値も送ってください。ドメインの所有権を確認させていただきます。これらのコメントはお客様のサイトに属しています。
2. **スレッドを検索します。** サイトのキャプチャを収集し、各キャプチャがドメインとページに属しているか確認します。Commento の復元は時間がかかります。アーカイブがサイト別にインデックスされておらず、すべてのキャプチャを読み取る必要があるためです。
3. **結果を提示します。** 復元されたページ数とコメント数、最新コメントの日付をインポート前にご確認いただけます。
4. **スレッドをアカウントにインポートします。** その後、モデレーションダッシュボードからコメントの編集や削除が可能です。

### 復元される内容

<div class="pretty-table wide-table">

| Data | Commento | Cusdis |
| --- | --- | --- |
| コメント本文 | はい | はい |
| 作者表示名 | はい | はい |
| コメント日時 | はい | はい |
| 返信スレッド構造 | はい | はい |
| 投票スコア | はい | Cusdis には投票がありません |
| ページ URL | はい | はい、ただし一部サイトはパスのみ保存しているため、ドメインが必要です |
| 作者メールアドレス | いいえ | いいえ |
| 承認待ちコメント | いいえ | いいえ |
| 最後のキャプチャ以降に書かれたコメント | いいえ | いいえ |
| アーカイブが取得していないページ | いいえ | いいえ |

</div>

### 期待できること

これはスナップショットからの復元なので、ギャップが生じることを想定してください。頻繁にキャプチャされ、かつ最近のページで最も効果的です。

テスト結果の例を2つ示します。あるブログでは、30 件の検索で 19 ページ合計 810 件のコメントが復元されました。別のサイトでは、コメントがまだ表示されており、最新のアーカイブは 2023年10月で止まっており、ライブページは 2025年3月まで続いています。最後のキャプチャとサービス停止の間に書かれたものはアーカイブに残りません。

メールアドレスが欠落していることも影響します。復元されたコメントは作者名は保持しますが、FastComments アカウントに紐付けられず、作者は新しい返信の通知を受け取れません。

## ウィジェットの置き換え

どのパスを選んだ場合でも、古いスニペットはサイトから削除する必要があります。Commento の場合は、以下と `count.js`（コメント数を使用している場合）も削除してください:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Cusdis の場合は、以下を削除してください:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

その後、<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">こちらのコード</a>を追加します:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

多数のフロントエンドフレームワークにも対応しており、<a href="https://fastcomments.com/install-wizard" target="_blank">こちらで確認できます</a>。復元が完了するのを待たずに切り替えても問題ありません。読者はすぐにコメントを投稿でき、復元されたスレッドはインポート時に同じページに結合されます。

### URL が変わる場合

インポートされたコメントはページ URL に紐付いています。URL が変わらない場合はスレッドが自動的に一致します。URL が変わる場合は、まずインポートし、その後 <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> ツール（Manage Data 配下）で新しい場所へ移動してください。

## EU

EU にいる場合は、データが EU 内に留まるように <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> でアカウントを作成することをお勧めします。

## まとめ

1. エクスポートファイルを探す（メールも確認）。
2. ある場合は、<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">インポートページ</a>でアップロード。
3. ない場合は Wayback Machine でサイトを確認し、<a href="https://fastcomments.com/contact-us" target="_blank">お問い合わせ</a>でドメインを教えてください。
4. 古いスニペットを <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">こちらのコード</a>に置き換える。

よろしくお願いします!

{{/isPost}}

---