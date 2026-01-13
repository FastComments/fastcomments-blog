---
[category:API & Development]
###### [postdate]
# [postlink]FastCommentsにWebhookが登場[/postlink]

{{#unless isPost}}
FastCommentsは、コメントの作成、更新、削除のためにあなたのAPIを呼び出すことが可能になりました。
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> この記事には技術用語が含まれています

#### 新機能

FastCommentsでは、コメントがシステムに追加、更新、または削除されるたびにAPIエンドポイントを呼び出すことが可能になりました。

これをHTTP/HTTPSを介した非同期Webhookで実現しています。

#### 使用方法

まず、<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook管理</a>に移動します。これは、データ管理 -> Webhookからアクセスできます。

ここから、各種コメントイベントのエンドポイントを指定できます。

各イベントタイプについては、**テストペイロードを送信**をクリックし、統合が正しく設定されていることを確認してください。詳細については次のセクション「テスト」をご覧ください。

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Webhook設定例" title="Webhook設定例" class="lozad" />
</div>

#### テスト

<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook管理</a>には、各イベントタイプ（作成、更新、削除）に対して「テストペイロードを送信」ボタンがあります。作成および更新イベントは、ダミーのWebhookCommentオブジェクトを送信しますが、削除をテストするとIDだけのダミーリクエストボディが送信されます。

テストは、「成功」（正しいAPIキー）および「失敗」（無効なAPIキー）のシナリオのレスポンスコードを確認するために2回呼び出しを行います。

テストが無効なAPIキーを送信した場合、完全にテストを通過させるためにはステータスコード401を返す必要があります。トークンの値を正しくチェックしないと、次のようなエラーが表示されます：

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Webhook認証テスト失敗" title="Webhook認証テスト失敗" class="lozad" />
</div>

#### コメントオブジェクト構造
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### 「作成」イベント構造

「作成」イベントのリクエストボディはWebhookCommentオブジェクトです。

#### 「更新」イベント構造

「更新」イベントのリクエストボディはWebhookCommentオブジェクトです。

#### 「削除」イベント構造

「削除」イベントのリクエストボディはWebhookCommentオブジェクトですが、**idのみを含みます**。

#### なぜ作成と更新は両方ともHTTP PUTを使用し、POSTを使用しないのか？

**すべてのリクエストにIDが含まれているため**、同じ作成または更新リクエストを繰り返すことは、**あなたの側で新しいオブジェクトを作成すべきではありません**。これは、これらの呼び出しが冪等であり、HTTP仕様に従ってPUTイベントであるべきであることを意味します。

#### 仕組み

システム内のコメントオブジェクトに対するすべての変更がイベントを発火し、そのイベントがキューに送られます。APIがダウンした場合に備えて、このキューを<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook管理</a>で監視できます。APIへのリクエストが失敗した場合、それをスケジュールに従って再キューします。そのスケジュールは1分 * 再試行カウントです。呼び出しが1回失敗した場合、1分後に再試行します。2回失敗した場合は、次に2分待ちます。以降も同様です。
これは、関連する理由でダウンしている場合にAPIをオーバーロードしないようにするためです。

#### セキュリティ & APIトークン

リクエストヘッダーには、あなたの<a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">APIシークレット</a>を「token」というパラメータで渡します。

このパラメータを正しくチェックしないと、統合は確認済みとしてマークされません。これは、FastCommentsとの統合が安全であることを保証するための安全策です。

#### 結論

FastCommentsのWebhook統合が理解しやすく、迅速にセットアップできることを望んでいます。

さらに質問がある場合は、お気軽に<a href="https://fastcomments.com/auth/my-account/help" target="_blank">カスタマーサポートページ</a>にお問い合わせください。

よろしくお願いします！

{{/isPost}}

---