[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]OpenWeb から FastComments への移行方法（2026年）[/postlink]

{{#unless isPost}}
OpenWeb（旧 Spot.IM）から移行する出版社向けの機能別ガイド：1:1 に対応するもの、異なるもの、CSV インポートの仕組み、SSO ハンドシェイクの変更点、ステップバイステップのカットオーバープランを紹介します。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事は技術的な専門用語を含みます

### Why Now

2026 年 9 月 30 日、テルアビブ地区裁判所は、貸し手である Mars Growth Capital の要請により OpenWeb に対して臨時受託者の任命を命じました。Mars Growth Capital は同社の資産と口座に対して第一順位の担保権を保有しており、イスラエルの資産、銀行口座、知的財産に対して執行を進めようとしています（<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 9 月 30 日</a>）。翌日、臨時受託者として Adv. Ehud Gindes が任命されました（<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 10 月 4 日</a>）。2026 年初頭、OpenWeb の最大顧客の一つである Microsoft が契約を終了し、OpenWeb が否定するトラフィック紛争に関して支払いを保留しました（<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 9 月 28 日</a>）。

OpenWeb はプラットフォームが引き続き稼働していると述べていますが、裁判所の監督、知的財産に対する担保権の執行、資産価値の保全を目的とした受託者の存在は、コアエンゲージメントサーフェスを提供する出版社にとって望ましい条件ではありません。まだフルデータエクスポートを取得していない場合は、まずそれを実行してください。

### What You Need Before You Start

コードに手を加える前に以下を用意してください：

- **OpenWeb のコメントエクスポート**。OpenWeb は Export API（v4）を提供しており、最大 100,000 件のコメントを含む ZIP 形式の CSV ファイルを生成します。ウィンドウは最大 1 か月で、ダウンロードリンクは 1 週間で期限切れになります（<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>）。必要な期間すべてのウィンドウをリクエストし、安全な場所に保存してください。過去に管理パネルから CSV エクスポートを取得している場合はそれも保持してください。FastComments のインポーターは `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count`, `url` などの列を持つ OpenWeb CSV を読み取ります。
- **Spot ID と投稿 ID のリスト**。ランチャーに渡すすべての `data-post-id` は FastComments の URL ID になります。投稿 ID が CMS の記事 ID である場合、生成方法を把握し、FastComments 側でも同じ値を出力できるようにしてください。
- **SSO ユーザーリスト**。特に OpenWeb に登録した `primary_key` と `user_name` の値です。インポート時にコメントの著者はユーザー名で照合されるため、FastComments の SSO ペイロードでも同じユーザー名を渡す必要があります。
- **モデレーターリストとロール**。管理者、モデレーター、ジャーナリストアカウントと、各セクションが担当する範囲。
- **モデレーション設定**。サイト全体のポリシー（すべて承認、公開＋モデレート、承認必須）、記事ごとのオーバーライド、禁止語リスト、ミュート・バンユーザー。
- **カスタム CSS とテーマ設定**。管理パネルからエクスポートし、FastComments のウィジェットカスタマイズページで再構築できるようにしてください。
- **ランチャーがテンプレート内に配置されている場所**。Reactions、Topic Tracker、Spotlight、通知ベル、スタンドアロン広告（Conversation なし）を使用しているページも含めます。

### AI Assisted Migration

FastComments は [LLM Kit と MCP サーバー](https://docs.fastcomments.com/guide-llm-kit.html) を提供し、マイグレーションを高速化します。

### How OpenWeb Post IDs Map to FastComments URL IDs

FastComments はコメントスレッドを `urlId` に紐付けます。デフォルトではクリーンなページ URL が使用されますが、任意の文字列に設定可能です。OpenWeb インポーターは `post_id` 列を読み取り、各記事の FastComments URL ID として使用します。また、`url` 列は表示用 URL として保存され、モデレーションリンクや通知メールが正しいページを指すようになります。

したがってテンプレートのルールは次の通りです：OpenWeb に `data-post-id="POST_ID"` と `data-post-url="ARTICLE_URL"` を渡していた箇所は、FastComments では `urlId: 'POST_ID'` と `url: 'ARTICLE_URL'` を渡します。インポートされたスレッドはリダイレクトや URL 書き換えなしでライブスレッドと一致します。詳細は <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID ドキュメント</a> を参照してください。

今後は URL でスレッドをキーにしたい場合、まずインポートし、次に「Manage Data」配下の「Migrate Comments」ツールで投稿 ID から URL へ一括移行できます。

### The Feature Map

<div class="pretty-table wide-table">

| OpenWeb | FastComments | 備考 |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | デフォルトでライブ。新しいコメントは「Show N New Comments」ボタンの背後に折りたたまれるか、`showLiveRightAway` で即時表示されます。 |
| Likes and dislikes on comments | Up and down votes | インポートは `likes_count` と `dislikes_count` を保持します。ハートスタイルや「投票無効化」は設定オプションです。 |
| Reactions (article-level icons) | Page Reacts | ページごとに設定可能なアイコンセットで、ユーザーごとに記憶されます。 |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` で深さ上限を設定できます。 |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` でサイト全体または URL パターン単位のデフォルトを設定します。 |
| User profiles | User profiles | アバター、バイオ、バッジ、カルマ、アクティビティ、DM など。SSO ユーザーでも機能します。 |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | SSO ペイロードで設定。バックエンド呼び出しは不要です。 |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | モデレーターはウィジェットまたはダッシュボードからピン付け可能。AI エージェントテンプレートで上位投票コメントを自動ピン付けできます。 |
| In Conversation Polls | Polls on comments | 2〜10 オプション、締切日、プライバシーモード、作成者制限などをサポート。 |
| Ask Me Anything formats | No dedicated product | 著者の SSO ユーザーをラベル付けし、質問をピン付けしたスレッドとして運用します。 |
| Live Blog | No 1:1 equivalent | Live Chat ウィジェットとチャットモードコメントが利用可能。編集用ライブブログは CMS に残します。 |
| Topic Tracker (follow topics and authors) | Page subscriptions | ユーザーはページをフォローし、トピックや著者単位のフォローはありません。 |
| Notification Bell | Notification bell in the widget | 返信、メンション、スレッドアクティビティ、投票、購読、バッジ、DM などを通知。 |
| Email notifications | Email notifications with templates | SSO フラグでユーザー単位のオプトイン。カスタムテンプレート、ブランド送信者。 |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | 登録ユーザー呼び出しは不要。サーバー側でペイロードに署名し、ウィジェットに渡します。 |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | 同一ペイロード。バックエンドでユーザーがログインしたら署名します。 |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | 読者はメールリンクでログイン。パスワード不要。 |
| Moderation policy per article | Customization rules per URL ID pattern | 承認モード、スパムフィルタなどを `*/section/*` パターンで変化させます。 |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | エージェントはドライランで開始し、人間の承認が必要になることがあります。 |
| Restricted words | Word blacklist customizable by locale | デフォルトで約 450 フレーズ、編集可能。 |
| User muting | Block User | コメントメニューから読者単位でブロック。 |
| Bans | Bans | 永久、期間限定、シャドウ、IP ハッシュ、プラスエイリアス対応。 |
| Moderation Panel | Moderate Comments dashboard | フィルタ、バルクアクション（元に戻す）、モデレーショングループ、ダイジェストメール（ワンクリック承認）。 |
| Notification Webhook | Webhooks | コメント作成、更新、削除。ユーザー単位の通知 webhook はなし。 |
| Engagement dashboard | Analytics | ライブユーザー数、トップページ、ページビュー、コメント、投票、日別アカウント数。広告収益レポートはなし。 |
| In-conversation ads, Standalone Ad | None | FastComments は広告を配信しません。ウィジェット周辺に自社広告スタックを保持してください。 |
| Social Reviews (star ratings) | Ratings and Reviews | 同一アカウントで別プロダクトとして提供。 |
| Popular in the Community | Recent Discussions and Top Pages widgets | コメント活動に基づく再循環。 |
| Comment Counter | Comment count widgets | 単体・バルク。 |
| Export Comments API | CSV export, API, webhooks | ダッシュボードからいつでもエクスポート可能。 |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com は EU 内にデータを保持。DPA あり。 |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | ネイティブ UI、SSO、ライブ更新、スレッド、モデレーションアクション。 |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | SPA 用に `update()` と `destroy()` を提供。 |

</div>

以下のセクションでは各グループを詳細に解説します。

### Conversation, Votes and Reactions

OpenWeb の Conversation はリアルタイムスレッドです。FastComments のコメントウィジェットも同様で、コメント、編集、削除、投票、モデレーションアクションがすべて閲覧者にプッシュされます（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>）。デフォルトでは他者の新規コメントは「Show 2 New Comments」ボタンの背後に隠れ、ページが読者の下にジャンプしないようになっています。ライブイベントでは `showLiveRightAway` を設定して即時表示し、`newCommentsToBottom` を設定すればチャットのように下方向に流れます。

Likes と dislikes は up/down 投票に変換されます。インポーターはコメントごとに両方のカウントを保持します。コミュニティがシングル Like に慣れている場合は、ウィジェットカスタマイズページで投票スタイルをハートに変更してください。投票は完全に無効化することも可能です。

OpenWeb の Reactions は記事レベルのアイコンが 2〜4 個表示される別ウィジェットです（<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>）。FastComments の同等機能は Page Reacts で、コメントウィジェットに添付された設定可能なリアクション画像セットです。OpenWeb のコメントエクスポートにはリアクションカウントが含まれないため、0 から開始します。

ソートは直接マッピングされます。OpenWeb の `data-sort-by` の best、newest、oldest はそれぞれ Most Relevant、Newest First、Oldest First に対応します。デフォルトは `defaultSortDirection`（`MR`, `NF`, `OF`）でコードまたはカスタマイズルールで設定できます。読者はウィジェット内で切り替え可能です。

`data-read-only="true"` は `readonly: true` に変換され、コメント・投票・編集・削除がブロックされます。`data-post-staleness-days` の直接的な同等はありませんが、URL ID パターンに対して `readonly` を適用するカスタマイズルールで実装できます。`data-messages-count` はページサイズに相当し、ウィジェットカスタマイズページで 10〜200 コメントに設定可能です。

### Replies and Threading

FastComments はデフォルトで無制限のネストをサポートし、`maxReplyDepth` で上限を設定できます（`1` にするとフラットな 2 レベル構造）。OpenWeb の CSV には `parent_id` と `parent_comment_id` 列が含まれます。インポーターは `parent_comment_id` を読み取り、フル深度で返信ツリーを再構築します。そのため、返信が別の返信に対して行われても、直接の親の下に正しくネストされ、著者・タイムスタンプ・投票・フラグ数・承認状態が保持されます。親コメントがインポート前に存在しない場合はトップレベルコメントとして扱われます。OpenWeb のメッセージ ID は各コメントに保存され、古いフラットインポートを再度インポートすると正しい位置にスレッドが配置されます。

### User Profiles and Badges

FastComments のユーザー（SSO ユーザー含む）は、アバター、表示名、バイオ、ソーシャルリンク、バッジ、カルマ、コメント数、公開アクティビティフィード、DM を備えたプロフィールを持ちます（<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>）。アクティビティ、プロフィールコメント、DM は SSO ペイロードまたは全体設定で個別に無効化可能です。

OpenWeb の Author Badge は `GET /sso/v1/user/{primary_key}` を呼び出し、取得した ID を `data-author-id` に設定する必要があります。FastComments では SSO ペイロード内で `displayLabel: 'Author'`（最大 100 文字）を設定し、`isAdmin` や `isModerator` でスタッフを示します。ラベルはすべてのコメントで名前横に表示されます。よりリッチなシステムを求める場合は、Customize → Badges で画像またはテキストバッジを設定し、しきい値（コメント数、アップボート数、ピン付けコメント、ベテランステータス、返信速度）で自動付与、または SSO ペイロードの `badgeConfig` で手動付与できます（<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>）。

### Pinned Comments, Polls and Q&A

モデレーターはウィジェットのコメントメニューまたはモデレーションダッシュボードから任意のコメントを Pin または Unpin できます。ピン付けされたコメントはスレッド全体にリアルタイムでプッシュされます。自動化したい場合は、AI エージェントテンプレートの「Top Comment Pinner」を使用し、投票しきい値を超えたトップレベルコメントを自動でピン付けできます（<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>）。

OpenWeb の In Conversation Polls はトップレベルコメントに 2〜4 オプションの投票を添付します。FastComments の Polls もコメントに添付され、2〜10 オプション、任意の締切日、結果プライバシー（匿名、管理者のみ、全員）、「結果を見るには投票」モードをサポートします。作成権限（無効、管理者・モデレーター、全員）や匿名読者の投票可否も設定可能です。Poll はパブリック API でも作成でき、CMS からの自動生成に利用できます。

OpenWeb では Ask Me Anything 形式が提供されていましたが、FastComments には専用の Q&A 製品はありません。実務的な代替は、専用 URL ID 上に通常スレッドを作成し、ゲストの SSO ユーザーに `displayLabel` を付与し、イントロコメントをピン付けする方法です。読者はトップレベルコメントで質問し、ゲストはスレッド内で返信、メンション通知で会話が続きます。ウィンドウが閉じた後は `noNewRootComments` を設定し、ルートコメントの追加を防ぎます。

Community Spotlight（OpenWeb のメール収集・カウンター・リダイレクトカード）は同等機能がありません。ウィジェットは `headerHTML` でコメント入力上部にカスタムヘッダー HTML を挿入でき、CTA メッセージは表示できますが、メールキャプチャフォームは提供されません。

### Live Blog

FastComments には Live Blog がありません。OpenWeb の Live Blog は編集者向け製品で、管理パネルで記者が更新を投稿し、埋め込みリンクやツイート、動画を含めて読者が追従します（<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>）。

FastComments が提供できるライブカバレッジは読者側です：Live Chat ウィジェット（`embed-live-chat.min.js`）でストリーミングチャットを提供し、コメントウィジェットをチャットモード（`showLiveRightAway` と `newCommentsToBottom`）で使用します。編集側のライブ更新は CMS または専用ライブブログツールで管理し、FastComments を下部に埋め込んでディスカッションを行います。コメント内で YouTube、SoundCloud などのメディア埋め込みがサポートされているため、スタッフの更新もリッチメディアを含められます。

### Topic Tracker, Notifications and Email

OpenWeb の Topic Tracker はページメタデータからトピックや著者を抽出し、読者がフォローできる機能です。FastComments には記事横断的なトピックや著者のフォローはなく、ページ購読のみが可能です。読者は通知ベルからページを購読し、購読頻度（毎分、時間ごとのダイジェスト、日次ダイジェスト）を選択できます。記事横断的なフォローが重要であれば、ロードマップ上の機能としてご要望ください。

通知ベルの他の要素はすべてマッピング可能です。ウィジェットのベルは未読数で赤くなり、以下を一覧表示します：自分への返信、コメントしたスレッド内の返信、メンション、コメントへの投票、購読ページのアクティビティ、バッジ授与、DM。インアプリ通知は WebSocket でリアルタイムに配信され、返信・メンションメールは承認済みコメントのみ毎分送信されます。

SSO ユーザー向けにはペイロードに `optedInNotifications` と `optedInSubscriptionNotifications` を含めると、次回ページロード時に FastComments が設定を更新します。メール送信にはペイロードにメールアドレスが必要です。テンプレートは Customize → Email Templates でタイプ別・ロケール別に編集でき、DKIM 付き独自ドメインから送信可能です。モデレーター・管理者は日次・週次・月次のダイジェストを受け取り、ワンクリックで承認・返信・スパム処理が可能です。

OpenWeb の Notification Webhook はユーザー単位の通知イベント（`replied-message`, `liked-message`, `topic-by-keyword` など）をエンドポイントに送ります。FastComments の webhook はコメントリソース（作成、更新、削除）に限定され、任意の数のエンドポイントを登録可能です（<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>）。通知 webhook を利用して独自のメールシステムにフィードしていた場合は、コメントイベントに置き換えてロジックを再構築するか、FastComments にメール送信を任せてください。

### SSO: From codeA/codeB to a Signed Payload

OpenWeb のハンドシェイクは 6 ステップです：`spot-im-api-ready` 待ち、OpenWeb が `codeA` を生成、クライアントがバックエンドへ送信、バックエンドがユーザー確認後に `GET https://www.spot.im/api/sso/v1/register-user?...` を呼び出し、OpenWeb が `codeB` を返し、クライアントが `codeB` を OpenWeb に返します（<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>）。ログアウトは `window.SPOTIM.logout()` です。

FastComments の Secure SSO は往復不要で、エンドポイントも不要です。ログイン済みユーザー向けにページをレンダリングする際、バックエンドでユーザー情報をシリアライズし Base64 エンコード、API シークレットで HMAC‑SHA256 署名します。ウィジェットはリクエストにペイロードを送信し、FastComments が署名を検証します（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>）。Node の例：

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // OpenWeb で使用した primary_key と同じ
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

タイムスタンプはエポックミリ秒で、2 日以上古い場合は拒否されます。ログアウト状態の読者には 3 つの署名フィールドを省略し、`loginURL`（または `loginCallback` 関数）だけを渡すと、ウィジェットはコメント入力の代わりにログインプロンプトを表示します。Node、Java、PHP の完全なサンプルは <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">コード例リポジトリ</a> にあります。

ユーザーは初回ページロード時に作成され、バルク登録は行いません。OpenWeb インポーターは `user_name` でコメント著者を照合するため、同じ `username` を持つ SSO ペイロードを送れば、インポートされたコメントがそのユーザーに紐付けられ、以降は編集・削除が可能になります。事前にユーザーを作成したい場合は SSO ユーザー API を利用してください。

ペイロードが送信されるたびに FastComments はユーザー情報を更新するため、表示名やアバターの変更は次回ページビューで反映されます。`null` を設定すればフィールドをクリアできます。

Auth0、Gigya、Piano などのサードパーティ SSO を `window.SPOTIM.startSSOForProvider` で使用していた場合も、FastComments のフローは同様です。プロバイダーが認証したらバックエンドでペイロードを構築・署名します。FastComments 側でプロバイダー固有の統合設定は不要です。

他のオプションとして、シンプル SSO はクライアント側から署名なしのユーザーオブジェクトを渡し、メールがある場合に検証済みとして扱います（<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>）。SAML 2.0 は Okta、Azure AD、ADFS で FastComments ダッシュボード自体へのログインを実現し、ロールマッピングが可能で、エンタープライズプランで利用できます（<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>）。

### Moderation

OpenWeb の記事単位モデレーションポリシー API は `spot_policy`, `approve_all`, `publish_and_moderate`, `require_approval` の 4 つの値を持ちます。FastComments は同様の動作を Moderation Settings で設定でき、サイト全体または `*/politics/*` のような URL ID パターン単位で適用できます。すべてのコメント（承認済み・未承認）は Moderate Comments ダッシュボードに表示され、デフォルトは「公開後レビュー」モデルです（<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>）。

インポート時にモデレーション状態が引き継がれます。OpenWeb の `message_status` が `approved` の場合は承認済みとしてインポートされ、`rejected` はスパムとしてインポートされ、その他は未承認・未レビューとしてキューに入ります。`reports_count` はコメントのフラグ数になります。

FastComments の自動モデレーションは Aida のように単一システムではなく、層状に構成されています：

- スパム分類器（テナント全体または個別にトレーニング可能）で、長期利用ユーザーや頻繁にピン付けされるユーザーのフィルタを緩和。
- Flex 課金で利用できるオプション LLM スパムチェック（GLM‑5.3 などのオープンウェイトモデル）。
- 画像コンテンツモデレーション（低・中・高感度）。
- ロケール別の単語ブラックリスト（約 450 デフォルトフレーズ、編集可能）で、OpenWeb の制限語はここにマッピング。
- N 件の通報で自動非表示になるフラグ閾値。
- 繰り返し・類似メッセージ防止（常時オン）。
- AI エージェント：ツール許可リスト（スパムマーク、承認、ロック、ピン、DM 警告、バン、バッジ付与、返信）を持つイベント駆動型エージェント。すべてドライランで開始し、感度の高いツールは人間の承認が必要。すべてのアクションは根拠と信頼度スコアと共に記録。

OpenWeb の User Muting API は SSO 読者同士のミュートを可能にします。FastComments の同等はコメントメニューの Block User で、ログイン済み読者なら誰でも利用可能です。バンはモデレーターアクションで、永久、期間限定、シャドウバン（ユーザーは自分のコメントが見えるが他者には非表示）、IP ハッシュ、メールエイリアス統合などがあります。バンリストはメール、名前、モデレーター、バンの原因コメントで検索可能です。

Moderate Comments ダッシュボードはフィルタ（レビュー待ち、承認待ち、スパム、フラグ、バンユーザー）とテキスト検索、元に戻すバルクアクション、非常に大きなキュー向けの「全一致選択」、モデレーショングループ（例：スポーツデスクはスポーツスレッドのみ表示）、コメントごとのログ（メール送信の有無）や共有可能なフィルタリンクを提供します。モデレーターはダッシュボードのみ使用でき、設定変更やデータインポートはできません。

### Analytics

FastComments Analytics はサイト全体とページ単位で現在オンラインのユーザー数、コメント数上位ページ、ライブリーダー数、ページビュー、コメント、投票、日別のアカウント作成数をリアルタイムに近い形で表示します（<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>）。モデレーター統計は別枠です。カウントは最大 1 分の遅延で、ページビューはサンプリングせずにすべてカウントします。

広告のインプレッションや CPM、収益に関するデータは一切ありません。OpenWeb のダッシュボードでエンゲージメントと収益を結びつけていた場合は、広告スタック側でレポートを作成してください。

### Monetization

OpenWeb は Conversation 内外に広告を配置し、スタンドアロン広告ユニットを提供します（<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>）。FastComments はウィジェット内に広告を表示せず、収益分配も行わず、サードパーティ広告やトラッキングスクリプトもロードしません。ウィジェットは iframe で配置し、上下の広告枠は既存の広告スタックをご利用ください。

トレードオフは明確です：OpenWeb が支払っていた広告収入は失われ、代わりに固定・予測可能なコストと、ページに広告リクエストを追加しないウィジェットが得られます。Flex と Pro プランではブランドが除去され、Pro と Enterprise ではホワイトラベリングが利用可能です。

### Data Export and Privacy

FastComments のダッシュボードからはいつでも CSV 形式でコメントデータをエクスポートでき、日付は UTC の ISO 形式です。同データは API でも取得可能で、Webhooks が継続的な同期を提供します。インポート完了後はインポートファイルは FastComments から削除されます。

GDPR と CCPA に関して、OpenWeb はエクスポート・削除 API を提供し、削除されたユーザーのコメントはランダムなゲストアカウントに紐付けられます（<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>）。FastComments はデータエクスポート・削除リクエストをサポートし、データ処理契約（DPA）を提供、EU 向けに <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> で EU 内のみのデプロイを実行しています。EU リージョンでは AI エージェントのバンは常に人間の承認が必要で、DSA 第 17 条に準拠します。

グローバルデプロイのコメントデータはシンガポールノードを含む複数リージョンにレプリケートされ、ウィジェットは FastComments の独自 DNS と CDN から配信されます。埋め込みスクリプトは圧縮で約 35 KB です。

### Mobile SDKs

OpenWeb は Android、iOS、React Native 向けに Conversation、Articles、Authentication、Notifications、Reactions、In Conversation Polls を提供します。FastComments は <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>、<a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a>、<a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> 向けにスレッドコメント、WebSocket によるライブ更新、Secure SSO、投票、メンション、画像アップロード、モデレーションアクション（フラグ、ピン、ロック、ブロック）、テーマ、ライブチャットモード、ソーシャルフィードコンポーネントを提供します。EU リージョンは設定フラグで切り替え可能です。広告 SDK はありません（広告がないため）。

### Embed and SPA Integration

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

テナント ID は <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">認証情報ページ</a>で確認できます。`data-article-tags` はトピックフォローがないため同等はありません。ハッシュタグは別機能です。

無限スクロールやシングルページアプリの場合、OpenWeb の Virtual Pages は記事ごとにコンテナを作成します。FastComments では `FastCommentsUI(element, config)` でスレッドを呼び出し、後で `instance.update(newConfig)` で URL ID を入れ替え、`instance.destroy()` で削除します（<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>）。React、Vue、Angular、SolidJS のライブラリは config プロパティが変わると自動で対応します。ライフサイクルコールバック（`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`）は `spot-im-*` DOM イベントの代わりになります。

インデックスページのコメント数はコメントカウントウィジェットで表示します。SEO の観点では、コメントは iframe 内ではなくページに直接レンダリングされるため、検索エンジンがコメントをインデックスできます。SEO 用の API 呼び出しは不要です。

### Step-by-Step Cutover

**1. アカウント作成と基本設定**  
fastcomments.com または eu.fastcomments.com でサインアップ。モデレーション設定、単語ブラックリスト、投票スタイル、デフォルトソート、カスタム CSS をウィジェットカスタマイズページで設定。モデレーターとモデレーショングループを追加。多数の管理者がいる場合はインポートで一括追加可能。

**2. 初回インポート実行**  
<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data → Import</a> へ移動し、OpenWeb（.csv）を選択してアップロード。インポートはバックグラウンドジョブとして実行され、行数とステータスが表示され、完了時にメールが送信されます（<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>）。各コメントは OpenWeb のメッセージ ID を外部 ID として保持するため、再インポート時に重複せずに更新されます。

**3. カウント検証**  
ジョブの行数とエクスポート件数を比較。モデレーションダッシュボードでトラフィックの多い URL ID を数件開き、著者、日時、投票合計、承認状態を目視で確認。拒否されたコメントがスパムとして表示され、保留中のコメントがキューにあることを確認。

**4. SSO ペイロード構築**  
上記の署名コードをバックエンドに実装し、OpenWeb で使用した `id` と `username` を同じにします。ステージングページでスタッフアカウントをテストし、インポートされたコメントが正しく紐付くか、編集・削除がメニューに表示されるか確認。

**5. テンプレートで埋め込み置換**  
ランチャーとコンテナを FastComments スニペットに差し替え、`data-post-id` → `urlId`、`data-post-url` → `url` にマッピング。`window.SPOTIM.logout()` と `spot-im-*` リスナーを削除またはコールバックに置き換え。CSS はコードではなくカスタマイズルールで適用し、FastComments のリリースごとにテストが走るようにします。

**6. 並行運用**  
セクションまたは記事の一定割合で FastComments を導入し、残りは OpenWeb のままにします。OpenWeb 側の変更は不要です。モデレーションキューとアナリティクスページを監視。FastComments ページでのコメントは OpenWeb エクスポートに含まれないため、最終インポートはウィンドウが終了する前に実施してください。

**7. CSP と DNS**  
Content‑Security‑Policy を使用している場合、`cdn.fastcomments.com` と `fastcomments.com`（または `eu.fastcomments.com`）を `script-src`, `frame-src`, `connect-src` に許可し、`spot.im` と `openweb.com` のエントリはランチャー削除後に除去。DNS の変更は不要です。URL ID が一致するためリダイレクトは不要です。

**8. 最終インポートと本番移行**  
並行運用期間の最後に OpenWeb エクスポートをもう一度取得し、再インポート（安全）。その後テンプレート変更を全ページにデプロイし、ランチャー、Reactions、Topic Tracker、Spotlight、通知ベル、広告コンテナを削除します。

**9. 本番チェックリスト**

- 2 つのブラウザで本番記事にライブコメントが表示されること。
- SSO ログイン・ログアウト、実際のサブスクライバーアカウントでのコメント投稿。
- モデレーターがダイジェストを受け取り、そこから承認できること。
- 返信・メンションメールが正しいページへリンクして届くこと。
- バンリストと単語ブラックリストが正しく反映されていること。
- Page Reacts とコメントカウントが、Reactions とカウンターがあった場所に正しく表示されること。
- CSP レポートがクリーンであること。
- エクスポートとダッシュボードのコメント数が最終的に一致していること。

### What You Lose and What Is Different

ギャップを率直に示します：

- **Live Blog**：同等機能なし。CMS またはライブブログツールで管理し、FastComments を下部に埋め込む。
- **Topic Tracker**：記事横断的なトピック・著者フォローなし。ページ購読のみ。
- **Community Spotlight**：CTA カード製品なし。`headerHTML` でコンポーザー上部にメッセージは表示できるが、メール取得は不可。
- **Ad revenue**：広告なし。ウィジェットは広告フリー設計。
- **Notification webhook**：コメントイベントのみ。ユーザー単位の通知イベントは対象外。
- **Reactions history**：記事レベルのリアクションカウントはエクスポートに含まれず、ゼロから開始。必要に応じてサイトからスクレイプ可能。
- **Polls history**：投票定義と結果はエクスポートに含まれず、コメントテキストのみインポート。必要に応じてスクレイプ可能。
- **Login model**：SSO がない読者はパスワードやソーシャルログインボタンではなく、マジックリンクでログイン。
- **Human moderation staff**：OpenWeb は Aida とモデレーションチームを提供。FastComments はツール・分類器・エージェントを提供し、人的リソースは顧客側に依存。

同様に得られるもの：スクリプト 1 本で広告リクエストが増えず、バルクアクションとエージェントで大規模サイトを少人数で運用可能、署名ベースの SSO、裁判所監督下にないベンダー。

### Timeline and the Free Import Offer

規模感の例：SSO 統合 1 件、数十万コメントの出版社で 1〜2 週間を想定。エクスポートと初回インポートに 1〜2 日、SSO とテンプレートに数日、並行運用ウィンドウ、最終インポートと切り替えの順です。プラットフォームはすでに大規模運用実績があります。United Cloud は 10 以上のポータルで数百万コメントを FastComments で処理し、itsfoss.com は別プロバイダーから 88,000 コメントの履歴を同様のセルフサービスインポーターで移行しました。

FastComments は OpenWeb CSV エクスポートを無料でインポートし、カットオーバー期間中の並行運用を支援、インポートやスレッド・ユーザー照合に関する質問にも対応します。エンタープライズプランには 99.99% SLA と営業時間内 1 時間以内のサポート返信が含まれます。Flex の従量課金プランは契約なしで開始可能です。

<a href="https://fastcomments.com/contact-us">お問い合わせ</a> でエクスポートサイズと SSO 設定を教えていただければ、プランをご提案します。

### In Conclusion

今日エクスポートを取得してください。投稿 ID が URL ID に変換され、モデレーション状態が引き継がれ、埋め込みは単純な置き換えです。FastComments の違いは上記に列挙していますので、事実に基づいて判断できます。 :)

よろしくお願いします！

{{/isPost}}

---