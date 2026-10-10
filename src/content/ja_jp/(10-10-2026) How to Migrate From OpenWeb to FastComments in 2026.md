[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]OpenWeb から FastComments への移行方法（2026年）[/postlink]

{{#unless isPost}}
OpenWeb（旧 Spot.IM）から移行する出版社向けの機能別ガイド：1:1で対応するもの、異なるもの、CSV インポートの仕組み、SSO ハンドシェイクの変更点、ステップバイステップのカットオーバープランを解説します。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には技術的な専門用語が含まれています

このガイドは、現在 OpenWeb を運用していて移行計画が必要なプロダクト・エンジニアリングリーダーやコミュニティマネージャー向けです。OpenWeb の各サーフェスを確認し、FastComments の対応物を示し、1:1 のマッチがない箇所を明示します。

### なぜ今

2026年9月30日、テルアビブ地区裁判所は、OpenWeb の貸し手である Mars Growth Capital の要請により、OpenWeb に対する臨時受託者の任命を命じました。Mars Growth Capital は同社資産と口座に対する第一順位の担保権を保有しており、イスラエル資産、銀行口座、知的財産に対して執行を進めようとしています（<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 9月30日</a>）。翌日、臨時受託者として Adv. Ehud Gindes が任命されました（<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 10月4日</a>）。2026年初頭、OpenWeb の最大顧客の一つである Microsoft が契約を終了し、OpenWeb が否定するトラフィック紛争に関して支払いを保留しました（<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 9月28日</a>）。

OpenWeb はプラットフォームが引き続き稼働していると述べていますが、裁判所の監督、コメントウィジェットが依存する知的財産に対する担保権の執行、資産価値の保全を目的とした受託者の存在は、出版社がコアエンゲージメントサーフェスで望む条件ではありません。まだフルデータエクスポートを取得していない場合は、まずそれを行ってください。

### 開始前に必要なもの

コードに手を加える前に以下を用意してください：

- **OpenWeb のコメントエクスポート**。OpenWeb は Export API（v4）を提供しており、最大 100,000 件のコメントを含む ZIP 形式の CSV ファイルを生成します。ウィンドウは最大 1 か月で、ダウンロードリンクは 1 週間で期限切れになります（<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>）。必要なウィンドウすべてをリクエストし、安全な場所に保存してください。過去に管理パネルから CSV エクスポートを取得している場合はそれも保持してください。FastComments のインポーターは `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count`, `url` などの列を持つ OpenWeb CSV を読み取ります。
- **Spot ID と投稿 ID のリスト**。ランチャーに渡すすべての `data-post-id` は FastComments の URL ID になります。投稿 ID が CMS の記事 ID である場合、どのように生成されているかを把握し、FastComments 側でも同じ値を出力できるようにしてください。
- **SSO ユーザーリスト**。特に OpenWeb に登録した `primary_key` と `user_name` の値です。インポート時にコメントの著者はユーザー名でマッチングされるため、FastComments の SSO ペイロードでも同じユーザー名を渡す必要があります。
- **モデレーターリストとロール**。管理者、モデレーター、ジャーナリストアカウントと、各セクションが誰のモデレーション対象かを把握してください。
- **モデレーション設定**。サイト全体のポリシー（すべて承認、公開＋モデレーション、承認必須）、記事ごとのオーバーライド、禁止語リスト、ミュート・バンユーザーなど。
- **カスタム CSS とテーマ設定**。管理パネルからエクスポートできるものはすべて取得し、FastComments のウィジェットカスタマイズページで再構築できるようにしてください。
- **ランチャーがテンプレート内のどこに配置されているか**。Reactions、Topic Tracker、Spotlight、通知ベル、スタンドアロン広告（Conversation なし）を実行しているページも含めます。

### OpenWeb の投稿 ID と FastComments の URL ID のマッピング

FastComments はコメントスレッドを `urlId` に紐付けます。デフォルトではクリーンなページ URL が使用されますが、任意の文字列に設定可能です。OpenWeb インポーターは `post_id` 列を読み取り、各記事の FastComments URL ID として使用します。また、`url` 列は表示用 URL として保存され、モデレーションリンクや通知メールが正しいページを指すようになります。

したがってテンプレートのルールは次の通りです：OpenWeb に `data-post-id="POST_ID"` と `data-post-url="ARTICLE_URL"` を渡していた箇所は、FastComments では `urlId: 'POST_ID'` と `url: 'ARTICLE_URL'` を渡します。インポートされたスレッドはリダイレクトや URL 書き換えなしでライブスレッドと一致します。詳細は <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID ドキュメント</a> を参照してください。

今後は URL でスレッドをキーにしたい場合は、まずインポートし、次に Manage Data の「Migrate Comments」ツールで投稿 ID から URL へ一括変換できます。

### 機能マップ

| OpenWeb | FastComments | 備考 |
| --- | --- | --- |
| リアルタイム更新付き Conversation | ライブコメント機能付きコメントウィジェット | デフォルトでライブ。新規コメントは「Show N New Comments」ボタンの背後に折りたたまれ、`showLiveRightAway` で即時表示可能。 |
| コメントへのいいね・よくないね | 賛成・反対投票 | インポート時に `likes_count` と `dislikes_count` を保持。ハートスタイルや「投票無効」設定あり。 |
| Reactions（記事レベルアイコン） | Page Reacts | ページごとに設定可能なアイコンセット。ユーザーごとに記憶される。 |
| 返信とスレッド化 | スレッド化返信、無制限の深さ | `maxReplyDepth` でネスト上限設定可能。下記スレッドインポートの注意点参照。 |
| ソート: ベスト、最新、最古 | Most Relevant、Newest First、Oldest First | `defaultSortDirection` でサイト全体または URL パターン単位のデフォルト設定。 |
| ユーザープロファイル | ユーザープロファイル | アバター、バイオ、バッジ、カルマ、アクティビティ、DM。SSO ユーザーに対応。 |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, バッジ | SSO ペイロードで設定。バックエンド呼び出し不要。 |
| ピン留めされたライブブログ更新、ハイライトコメント | 任意コメントのピン留め・解除 | モデレーターはウィジェットまたはダッシュボードから操作。AI エージェントテンプレートで上位投票コメントを自動ピン留め可能。 |
| 会話内投票 | コメント投票 | 2〜10 オプション、締切日、プライバシーモード、作成者制限あり。 |
| Ask Me Anything 形式 | 専用製品なし | 作者の SSO ユーザーにラベル付与し、質問をピン留めしてスレッド化。 |
| ライブブログ | 1:1 の同等機能なし | ライブチャットウィジェットとチャットモードコメントが利用可能。編集用は CMS に保持。 |
| Topic Tracker（トピック・著者フォロー） | ページ購読 | ユーザーはページを購読し、トピックや著者の横断フォローは不可。 |
| Notification Bell | ウィジェット内通知ベル | 返信、メンション、スレッド活動、投票、購読、バッジ、DM などを通知。 |
| メール通知 | テンプレート付きメール通知 | ユーザー単位のオプトイン。カスタムテンプレート、ブランド送信元。 |
| SSO ハンドシェイク（codeA/codeB） | Secure SSO（HMAC-SHA256 ペイロード） | 登録ユーザー呼び出し不要。サーバー側でペイロードに署名し、ウィジェットへ渡す。 |
| サードパーティ SSO（Auth0, Gigya, Piano） | プロバイダー認証後の Secure SSO | 同一ペイロード。バックエンドで署名後に渡す。 |
| Identity（OpenWeb 登録画面） | Magic-link ログイン、シンプル SSO | 読者はメールリンクでログイン。パスワード不要。 |
| 記事ごとのモデレーションポリシー | URL ID パターン別カスタマイズルール | 承認モード、スパムフィルタなどを `*/section/*` パターンで設定可能。 |
| Aida AI モデレーション | スパム分類器、ChatGPT 4 オプション、画像モデレーション、AI エージェント | エージェントはドライランで開始し、人間の承認が必要になることも。 |
| 禁止語 | ワードブラックリスト | デフォルト約 450 フレーズ、編集可能。 |
| ユーザーミュート | ユーザーブロック | コメントメニューから読者単位でブロック。 |
| バン | バン | 永久、期間限定、シャドウ、IP ハッシュ、プラスエイリアス対応。 |
| モデレーションパネル | コメントモデレーションダッシュボード | フィルタ、バルクアクション（元に戻す）、モデレーショングループ、ワンクリック承認のダイジェストメール。 |
| 通知 Webhook | Webhook | コメント作成、更新、削除。ユーザー単位の通知 webhook はなし。 |
| エンゲージメントダッシュボード | アナリティクス | ライブユーザー数、トップページ、ページビュー、コメント、投票、日別アカウント数。広告収益レポートはなし。 |
| 会話内広告、スタンドアロン広告 | なし | FastComments は広告を配信しません。ウィジェット周辺に自前の広告スタックを配置してください。 |
| ソーシャルレビュー（星評価） | 評価とレビュー | 同一アカウントで別製品として提供。 |
| コミュニティで人気 | 最近のディスカッションとトップページウィジェット | コメント活動による再循環。 |
| コメントカウンター | コメント数ウィジェット | 単体・バルク。 |
| Export Comments API | CSV エクスポート、API、Webhook | ダッシュボードから随時エクスポート可能。 |
| Export and Delete User Data（GDPR/CCPA） | アカウント・データ削除、EU リージョン | eu.fastcomments.com は EU 内にデータを保持。DPA あり。 |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | ネイティブ UI、SSO、ライブ更新、スレッド化、モデレーションアクション。 |
| Launcher, Virtual Pages, React SDK | 埋め込みスクリプト、`fcConfigs`、React, Vue, Angular, SolidJS ライブラリ | SPA 用の `update()` と `destroy()` が利用可能。 |

以下のセクションで各グループを詳細に解説します。

### Conversation、Votes、Reactions

OpenWeb の Conversation はリアルタイムスレッドです。FastComments のコメントウィジェットも同様で、コメント、編集、削除、投票、モデレーションアクションがスレッド閲覧者全員にプッシュされます（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>）。デフォルトでは他者の新規コメントは「Show 2 New Comments」ボタンの背後に折りたたまれ、ページが読者の下にジャンプしないようにします。ライブイベントでは `showLiveRightAway` を設定して即時表示し、チャットのように下方向に流したい場合は `newCommentsToBottom` を使用してください。

いいね・よくないねは上下投票に変換されます。インポーターはコメントごとに両方のカウントを保持します。単一の「いいね」だけに慣れている場合は、ウィジェットカスタマイズページで投票スタイルをハートに変更できます。投票は完全に無効化することも可能です。

OpenWeb Reactions は記事上に 2〜4 個のラベル付きアイコンを表示する別ウィジェットです（<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>）。FastComments の同等機能は Page Reacts で、コメントウィジェットに添付された設定可能なリアクション画像セットです。ユーザーごと・ページごとに記憶されます（<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>）。リアクション数は OpenWeb のコメントエクスポートに含まれないため、ゼロから開始します。

ソートは直接マッピングされます。OpenWeb の `data-sort-by` 値（best、newest、oldest）は、FastComments の Most Relevant、Newest First、Oldest First に対応します。デフォルトは `defaultSortDirection`（`MR`, `NF`, `OF`）でサイト全体または URL パターン単位で設定できます。読者はウィジェット内で切り替え可能です。

`data-read-only="true"` は `readonly: true` に相当し、新規コメント、投票、編集、削除をブロックします。`data-post-staleness-days` の直接的な同等はありませんが、カスタマイズルールで URL ID パターンに対して `readonly` を適用したり、テンプレート側で記事の経過日数に応じて切り替えることができます。`data-messages-count` はページサイズに相当し、ウィジェットカスタマイズページで 10〜200 コメントに設定可能です。

### Replies と Threading

FastComments はデフォルトで無制限のネストをサポートし、`maxReplyDepth` で上限を設定できます（`1` にするとフラットな二層構造）。OpenWeb CSV には `parent_id` と `parent_comment_id` 列があります。現在のインポーターは各行をそのページのトップレベルコメントとして日付順にインポートし、著者、タイムスタンプ、投票、フラグ数、承認状態を保持しますが、親子ツリーは再構築しません。スレッドが返信中心の場合は、エクスポート送付時にお知らせいただければ、インポート時にスレッド構造を再構築します。

### ユーザープロファイルとバッジ

FastComments のユーザー（SSO ユーザー含む）は、アバター、表示名、バイオ、ソーシャルリンク、バッジ、カルマ、コメント数、公開アクティビティフィード、DM を持つプロファイルが提供されます（<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>）。アクティビティ、プロフィールコメント、DM の各サーフェスは SSO ペイロードまたは全体設定で個別に無効化可能です。

OpenWeb の Author Badge は `GET /sso/v1/user/{primary_key}` を呼び出し、取得した ID を `data-author-id` に設定する必要があります。FastComments では SSO ペイロード内で `displayLabel: 'Author'`（最大 100 文字）を設定し、`isAdmin` や `isModerator` でスタッフを示します。ラベルはコメントごとに名前横に表示されます。よりリッチなシステムを求める場合は、Customize → Badges で画像またはテキストバッジを設定し、コメント数、投票数、ピン留め数、ベテランステータス、返信速度などの閾値で自動付与、または SSO ペイロードの `badgeConfig` で手動付与できます（<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>）。

### ピン留めコメント、投票、Q&A

モデレーターはウィジェットのコメントメニューまたはモデレーションダッシュボードから任意のコメントをピン留め・解除できます。ピン留めされたコメントはスレッド全体にリアルタイムで反映されます。自動化したい場合は、AI エージェントテンプレートの「Top Comment Pinner」を使用し、投票閾値を超えたトップレベルコメントを自動でピン留めできます（<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>）。

OpenWeb の会話内投票は、スタッフがトップレベルコメントに 2〜4 オプションの投票を添付できる機能です。FastComments の投票はコメントに添付でき、2〜10 オプション、任意の締切日、結果プライバシー（匿名、管理者のみ、全員）、「結果を見るには投票」モードがあります。投票作成権限（無効、管理者・モデレーター、全員）や匿名読者の投票可否を設定できます。投票はパブリック API でも作成可能です。

OpenWeb では Ask Me Anything 形式が提供されていましたが、FastComments には専用の Q&A 製品はありません。実務的な代替は、専用 URL ID 上でスレッドを立て、ゲストの SSO ユーザーに `displayLabel` を付与し、イントロコメントをピン留めする方法です。読者はトップレベルコメントで質問し、ゲストはスレッド内で返信、メンション通知で会話が続きます。ウィンドウが閉じた後は `noNewRootComments` を設定し、ルートコメントの投稿を停止させます。

Community Spotlight（OpenWeb のメール収集・カウンター・リダイレクトカード）は同等機能がありません。ウィジェットは `headerHTML` でコメント入力上部にカスタムヘッダー HTML を挿入でき、CTA メッセージは提供できますが、メールキャプチャフォームはありません。

### ライブブログ

FastComments にはライブブログ機能はありません。OpenWeb のライブブログは編集向け製品で、レポーターが管理パネルから更新を投稿し、埋め込みリンクやツイート、動画を含めて読者が追従します（<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>）。

FastComments が提供できるライブカバレッジは、読者側の Live Chat ウィジェット（`embed-live-chat.min.js`）と、チャットモードのコメントウィジェット（`showLiveRightAway` と `newCommentsToBottom`）です。編集側の更新は出版社が CMS や専用ライブブログツールで管理し、FastComments を下部に埋め込んでディスカッションを提供します。コメント内で YouTube、SoundCloud などのメディア埋め込みがサポートされているため、スタッフの更新コメントにリッチメディアを含められます。

### Topic Tracker、通知、メール

OpenWeb の Topic Tracker は、ページメタデータからトピックや著者を抽出し、読者がフォローできる機能です。FastComments には記事横断のトピック・著者フォローはなく、ページ購読のみです。読者は通知ベルからページを購読し、スレッド更新を受け取ります。購読頻度はリアルタイム、1 時間ごとのダイジェスト、日次ダイジェストから選択可能です。記事横断のフォローがリテンションに重要な場合は、機能が失われます。

通知ベルの他の要素はすべてマッピング可能です。ウィジェットのベルは未読数で赤くなり、返信、スレッド内返信、メンション、投票、購読ページの活動、バッジ授与、DM を一覧表示します（<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>）。アプリ内通知は WebSocket でリアルタイムに配信され、返信・メンションメールは承認済みコメントのみ毎分送信されます。

SSO ユーザーの場合、ペイロードに `optedInNotifications` と `optedInSubscriptionNotifications` を含めると、次回ページロード時に FastComments が設定を更新します。メール送信にはペイロード内のメールアドレスが必要です。メールテンプレートは Customize → Email Templates でタイプ別・ロケール別に編集でき、DKIM 付き独自ドメインから送信可能です。モデレーター・管理者はワンクリック承認・返信・スパムリンク付きのデイリー・ウィークリー・マンスリー ダイジェストを受け取ります。

OpenWeb の Notification Webhook はユーザー単位の通知イベント（`replied-message`、`liked-message`、`topic-by-keyword` など）をエンドポイントに POST します。FastComments の webhook はコメントリソース（作成、更新、削除）に限定され、任意の数のエンドポイントを購読できます（<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>）。通知 webhook を自前のメールシステムに利用していた場合は、コメントイベントにロジックを移行するか、FastComments にメール送信を任せます。

### SSO：codeA/codeB から署名ペイロードへ

OpenWeb のハンドシェイクは 6 ステップです：`spot-im-api-ready` 待機、OpenWeb が `codeA` を生成、クライアントがバックエンドへ送信、バックエンドがユーザー確認後に `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...` を呼び出し、OpenWeb が `codeB` を返し、クライアントが `codeB` を OpenWeb に返します（<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>）。ログアウトは `window.SPOTIM.logout()` です。

FastComments の Secure SSO は往復通信も新エンドポイントも不要です。ログイン済みユーザー向けにページをレンダリングする際、バックエンドでユーザー情報をシリアライズし、Base64 エンコードし、API シークレットで HMAC‑SHA256 署名します。ウィジェットはリクエストにペイロードを送信し、FastComments が署名を検証します（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>）。Node の例：

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // OpenWeb で使用した primary_key と同じ値
        email: 'reader@example.com',
        username: 'reader',              // OpenWeb で登録した user_name と同じ
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // 任意、Author Badge の代替
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // ページ設定に埋め込む:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

タイムスタンプはエポックミリ秒で、2 日以上古い場合は拒否されます。ログアウト状態の読者には 3 つの署名フィールドを省略し、`loginURL`（または `loginCallback` 関数）だけを渡すと、ウィジェットはコメント入力ではなくログインプロンプトを表示します。Node、Java、PHP の完全なサンプルは <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">コード例リポジトリ</a> にあります。

ユーザーは初回ページロード時に作成され、バルク登録は不要です。OpenWeb インポーターは `user_name` でコメント著者をマッチングするため、同じ `username` を持つ SSO ペイロードが最初にスレッドをロードしたときにインポートされたコメントを取得し、以降は編集・削除が可能になります。事前にユーザーを作成したい場合は SSO ユーザー API を利用できます。

ペイロードが送信されるたびに FastComments はユーザー情報を更新するため、表示名やアバターの変更が次回ページビューで反映されます。`null` を設定すると該当フィールドがクリアされます。

Auth0、Gigya、Piano などのサードパーティ SSO を `window.SPOTIM.startSSOForProvider` で使用していた場合も、FastComments のフローは同様です。プロバイダーが認証したらバックエンドでペイロードを構築・署名します。FastComments 側で特別な統合設定は不要です。

他のオプションとして、Simple SSO はクライアント側から署名なしのユーザーオブジェクトを渡し、メールがある場合に活動を検証します（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>）。SAML 2.0 は Okta、Azure AD、ADFS で FastComments ダッシュボード自体へのログインを実現し、ロールマッピングが可能で、エンタープライズプランで利用できます（<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>）。

### モデレーション

OpenWeb の記事別モデレーションポリシー API は `spot_policy`, `approve_all`, `publish_and_moderate`, `require_approval` の 4 つの値を持ちます。FastComments は同様の動作を Moderation Settings で設定します：自動承認のオン/オフ、ユーザー初回コメントのみ承認必須、検証済み（ログインまたは SSO）コメントのみ自動承認。ルールはサイト全体または `*/politics/*` のような URL ID パターンに適用でき、セクション別ポリシーを再現します。すべてのコメント（承認済みか否か）は Moderate Comments ダッシュボードに表示され、publish‑then‑review モデルがデフォルトです（<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>）。

インポートはモデレーション状態を保持します。OpenWeb の `message_status` が `approved` の場合は承認済みとしてインポートされ、`rejected` はスパムとしてインポートされ、その他は未承認・未レビューとしてキューに入ります。`reports_count` はコメントのフラグ数になります。

FastComments の自動モデレーションは単一システムではなく層状です：

- 継続的に学習するスパム分類器（テナント全体またはテナント単位で分離可能）。長期利用者や頻繁にピン留めされるユーザーのフィルタは緩和されます。
- Flex 課金でオプションの ChatGPT 4 スパムチェック。
- 画像コンテンツモデレーション（低・中・高感度）。
- 約 450 のデフォルトフレーズを持つワードブラックリスト（編集可能）。OpenWeb の制限語はここにマッピングします。
- N 件のレポートで自動非表示になるフラグ閾値。
- 繰り返し・類似メッセージ防止（常時有効）。
- AI エージェント：イベント駆動型エージェントでツール許可リスト（スパムマーク、承認、ロック、ピン、DM 警告、バン、バッジ付与、返信）を提供。エージェントはドライランで開始し、感度の高いツールは人間の承認が必要。すべてのアクションは根拠と信頼度スコアと共に記録されます。

OpenWeb の User Muting API は SSO 読者同士のミュートを可能にします。FastComments の同等はコメントメニューの Block User で、ログイン読者なら誰でも利用可能です。バンはモデレーターアクションで、永久、期間限定、シャドウバン（ユーザーは自分のコメントが見えるが他者には見えない）、IP ハッシュ、メールエイリアス統合などがあります。バンリストはメール、名前、モデレーター、バン原因コメントで検索可能です。

Moderate Comments ダッシュボードはフィルタ（レビュー待ち、承認待ち、スパム、フラグ、バンユーザー）とテキスト検索、バルクアクション（元に戻す・一時停止）、「一致するすべてを選択」機能、大規模キュー向け、モデレーショングループ（例：スポーツデスクはスポーツスレッドのみ表示）をサポートします。コメントごとのログはメール送信の有無や理由を示し、フィルタ済みリンクを共有可能です。モデレーターはダッシュボードのみ利用でき、設定変更やデータインポートはできません。

### アナリティクス

FastComments のアナリティクスはサイト全体とページ単位で現在オンラインのユーザー数、コメント数上位ページ、ライブリーダー数、ページビュー、コメント、投票、日別アカウント作成数をリアルタイムに近い形で表示します（<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>）。モデレーター統計は別枠です。カウントは最大 1 分の遅延で、すべてのページビューがサンプリングなしでカウントされます。

広告のインプレッションや CPM、収益に関する情報は一切ありません。OpenWeb のダッシュボードでエンゲージメントと収益を結びつけていた場合、レポートは自前の広告スタックに移行する必要があります。

### マネタイズ

OpenWeb は Conversation 内外に広告を配置し、スタンドアロン広告ユニットを提供し、キャンペーンは OpenWeb のコンタクトを通じて設定します（<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>）。FastComments はウィジェット内に広告を表示せず、収益分配もなく、サードパーティ広告やトラッキングスクリプトもロードしません。ウィジェットは iframe として配置し、上下の広告枠は既存の広告スタックを使用します。

トレードオフは明確です：OpenWeb が支払っていた広告収入は失われ、固定で予測可能なコストと広告リクエストが増えないウィジェットが得られます。Flex と Pro プランではブランドが除去され、Pro と Enterprise ではホワイトラベリングが利用可能です。

### データエクスポートとプライバシー

FastComments のダッシュボードからはいつでも CSV 形式でコメントデータをエクスポートでき、日付は UTC の ISO 形式です。同データは API でも取得可能です。Webhook が継続的な同期を提供します。インポート完了後はインポートファイルは FastComments から即座に削除されます。

GDPR と CCPA に関して、OpenWeb はエクスポート・削除 API を提供し、削除されたユーザーのコメントはランダムなゲストアカウントに紐付けられます（<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>）。FastComments はデータエクスポート・削除リクエストに対応し、データ処理契約（DPA）を提供、EU リージョン向けに <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> を運用し、データは EU 内にのみレプリケートされます。欧州の読者がいる場合はそちらでアカウントを作成してください。EU リージョンでは AI エージェントのバンは常に人間の承認が必要で、DSA 第 17 条に準拠します。

グローバル展開のコメントデータはシンガポールノードを含む複数リージョンにレプリケートされ、ウィジェットは FastComments の独自 DNS と CDN から配信されます。埋め込みスクリプトはディスク上で 30 KB 未満、転送時は約 6 KB に圧縮されます。

### モバイル SDK

OpenWeb は Android、iOS、React Native SDK を提供し、Conversation、Articles、Authentication、Notifications、Reactions、In‑Conversation Polls をサポートします。FastComments はネイティブ <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>、<a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a>、<a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> ライブラリを提供し、スレッド化コメント、WebSocket によるライブ更新、Secure SSO、投票、メンション、画像アップロード、モデレーションアクション（フラグ、ピン、ロック、ブロック）、テーマ設定、ライブチャットモード、ソーシャルフィードコンポーネントを備えます。EU リージョンは設定フラグで切り替え可能です。広告 SDK は存在せず、広告自体がないためです。

### 埋め込みと SPA 統合

OpenWeb のランチャーとコンテナ：

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments の同等：

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

テナント ID は <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">埋め込みコードページ</a>で取得できます。`data-article-tags` はトピックフォローがないため同等なし。ハッシュタグは別機能です。

無限スクロールやシングルページアプリでは、OpenWeb の Virtual Pages アプローチは記事ごとにコンテナを1つ置く方式です。FastComments では `FastCommentsUI(element, config)` をスレッドごとに呼び出し、後で `instance.update(newConfig)` で URL ID を入れ替え、`instance.destroy()` で削除します（<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>）。React、Vue、Angular、SolidJS ライブラリは config プロップが変わると自動で対応します。ライフサイクルコールバック（`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`）は `spot-im-*` DOM イベントの代わりになります。

インデックスページのコメント数はコメント数ウィジェット（単体またはバルク）で表示します。SEO の観点では、コメントは iframe 内ではなくページに直接レンダリングされるため、SEO 用 API 呼び出しは不要です。

### ステップバイステップ カットオーバー

**1. アカウント作成と基本設定**  
fastcomments.com または eu.fastcomments.com でサインアップ。モデレーション設定、ワードブラックリスト、投票スタイル、デフォルトソート、ウィジェットカスタム CSS を設定。モデレーターとモデレーショングループを追加。多数の管理者がいる場合はインポートで一括追加可能。

**2. 初回インポート実行**  
<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data → Import</a> で OpenWeb（.csv）を選択しアップロード。インポートはバックグラウンドジョブとして実行され、行数とステータスが表示され、完了時にメールが送信されます（<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>）。各 OpenWeb メッセージ ID は FastComments コメント ID になるため、再インポートしても重複は発生しません。

**3. カウント検証**  
ジョブの行数とエクスポート件数を比較。モデレーションダッシュボードでトラフィックの多い URL ID を数件開き、著者、日付、投票合計、承認状態をスポットチェック。拒否コメントがスパムとして表示され、保留コメントがキューに入っていることを確認。

**4. SSO ペイロード構築**  
上記の署名コードをバックエンドに実装し、OpenWeb で使用した `id` と `username` を同じにします。ステージングページでスタッフアカウントをテストし、インポートされたコメントが正しく紐付くか、編集・削除がメニューに表示されるか確認。

**5. ステージングテンプレートで埋め込み置換**  
ランチャーとコンテナを FastComments スニペットに置き換え、`data-post-id` → `urlId`、`data-post-url` → `url` にマッピング。`window.SPOTIM.logout()` と `spot-im-*` リスナーは削除またはコールバックに置き換えます。CSS はカスタマイズルールで適用し、FastComments のリリースごとにテストが走るようにします。

**6. 並行運用**  
セクションまたは記事の一定割合で FastComments を導入し、残りは OpenWeb のままにします。OpenWeb 側の変更は不要です。モデレーションキューとアナリティクスを監視。FastComments ページでのコメントは OpenWeb エクスポートに含まれないため、最終インポートは並行運用ウィンドウが終了する前に実施します。

**7. CSP と DNS**  
Content‑Security‑Policy を使用している場合、`cdn.fastcomments.com` と `fastcomments.com`（または `eu.fastcomments.com`）を `script-src`, `frame-src`, `connect-src` に許可し、`spot.im` と `openweb.com` のエントリはランチャー削除後に除去します。DNS の変更は不要で、URL ID が一致するためリダイレクトも不要です。

**8. 最終インポートと本番移行**  
並行運用ウィンドウ分の OpenWeb エクスポートをもう一度取得し、再インポート（安全）。その後、全ページでテンプレート変更をデプロイし、ランチャー、Reactions、Topic Tracker、Spotlight、通知ベル、広告コンテナを削除します。

**9. 本番チェックリスト**

- 2 つのブラウザで本番記事にライブコメントが表示されること。
- SSO ログイン・ログアウトが機能し、実際のサブスクライバーアカウントでコメントできること。
- モデレーターがダイジェストを受け取り、そこから承認できること。
- 返信・メンションメールが正しいページへリンクして届くこと。
- バンリストとワードブラックリストが正しく反映されていること。
- Page Reacts とコメントカウントウィジェットが、Reactions とカウンターがあった場所に正しく表示されること。
- CSP レポートがクリーンであること。
- エクスポートとダッシュボード間でコメントカウントが最終的に一致すること。

### 失うものと異なる点

ギャップを率直に示します：

- **ライブブログ**：同等機能なし。CMS またはライブブログツールで維持し、FastComments を下部に埋め込む。
- **Topic Tracker**：記事横断のトピック・著者フォローなし。ページ購読のみ。
- **Community Spotlight**：CTA カード製品なし。`headerHTML` でコンポーザー上部にメッセージは表示できるが、メール取得は不可。
- **広告収益**：なし。ウィジェットは広告フリー設計。
- **Notification webhook**：コメントイベントの webhook のみで、ユーザー単位の通知イベントは対象外。
- **インポート時のスレッド構築**：現在のインポーターは返信をトップレベルに平坦化。ツリーベースが必要な場合は要相談。
- **Reactions 履歴**：記事レベルのリアクション数はエクスポートに含まれず、ゼロから開始。
- **Polls 履歴**：投票定義と結果はエクスポートに含まれず、コメントテキストのみインポート。投票自体は新規作成。
- **ログインモデル**：SSO がない読者はパスワードやソーシャルログインボタンではなく、マジックリンクでログイン。
- **ヒューマンモデレーションスタッフ**：OpenWeb は Aida とチームを提供。FastComments はツール、分類器、エージェントを提供し、ヒューマンは自社で用意。

得られるものは同様の精神です：スクリプト 1 本で広告リクエストなしのウィジェット、バルクアクションとエージェントで大規模サイトを 1 人で運用可能、署名ベースの SSO、裁判所監督下にないベンダー。

### タイムラインと無料インポートオファー

SSO 統合と数十万件コメントを持つ出版社の場合、1〜2 週間を想定：エクスポートと初回インポートに 1〜2 日、SSO とテンプレートに数日、並行運用ウィンドウ、最終インポートと切り替え。FastComments は同規模の導入実績があります（United Cloud が 10 以上のポータルで数百万コメントを運用、itsfoss.com が 88,000 件のコメント履歴を同様のセルフサービスインポーターで移行）。

FastComments は OpenWeb CSV エクスポートを無料でインポートし、カットオーバー期間中の並行運用を支援、スレッド構築やユーザー照合の質問にも対応します。エンタープライズプランには SLA が含まれ、営業時間内に 1 時間以内のサポート返信、顧客専用クラウドアカウントへの Isolated Cloud デプロイオプションがあります（<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>）。Flex の従量課金プランは契約なしで開始可能です。

<a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> にエクスポートサイズと SSO 設定を添えてご連絡ください。プランをご提案します。

### 結論

まずエクスポートを取得してください。残りの移行は機械的です：同じ投稿 ID が URL ID になり、同じユーザー名が SSO でコメントを取得し、モデレーション状態が引き継がれ、埋め込みは単純な置き換えです。FastComments の違いは上記に列挙してあるので、事実に基づいて判断できます。

Cheers!{{/isPost}}