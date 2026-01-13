---
[category:API & Development]

###### [postdate]
# [postlink]Webhookイベントは現在キャンセル可能です[/postlink]

{{#unless isPost}}
Webhook処理キュー内のイベントはキャンセルでき、再試行されなくなります。
{{/unless}}

{{#isPost}}

### 新機能

以前は、Webhookイベントをキャンセルするにはサポートチケットが必要でした。しかし、現在は[ログページ](https://fastcomments.com/auth/my-account/manage-data/webhooks/logs)に移動し、イベントの横にある `x` をクリックすることでセルフサービスでキャンセルできるようになりました。

さらに、WebhookログのUIも大幅に高速化されました。

### 結論

このアップデートが役に立ったことを願っており、FastCommentsとの作業を引き続き楽しんでいただければと思います。

{{/isPost}}