---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Webhook Security Update[/postlink]

{{#unless isPost}}
FastCommentsのWebhookは、ペイロード検証のためにHMAC-SHA256署名を含むようになり、新しいHTTPメソッドの選択が可能になりました。
{{/unless}}

{{#isPost}}

### 新機能

以前は、他のプラットフォームに比べてWebhookの設定に余計な手間がありました。これは追加のセキュリティ対策が必要なため、良いことだと考えていましたが、最近、同じくらい安全でありながら、オプトインのセキュリティメカニズムに決定しました。

### 前の動作

以前は、システムがペイロード内にAPIキーを渡し、それを検証することを期待していました。無効なAPIキーに対して401を返さなければ、システムはセットアップを許可しませんでした。

### 新しい動作

現在、システムは新しいWebhook設定のためにAPIキーを渡しません。代わりに、新しいおよび既存の統合には署名されたHMAC署名が含まれます。この署名を検証するかどうかは、要求されるセキュリティレベルによって異なります。

既存の設定は引き続きAPIキーを渡します - これをオフにするようリクエストをサポートチケットで行うことができます。

### HMAC署名の検証

FastCommentsは、各Webhookリクエストに次のヘッダーを送信します：

| ヘッダー | 説明 |
|----------|------|
| `X-FastComments-Timestamp` | リクエストが署名されたUnixタイムスタンプ（秒） |
| `X-FastComments-Signature` | `sha256=<hex>`形式のHMAC-SHA256署名 |
| `token` | あなたのAPIシークレット（後方互換性のため保持） |

#### 署名の計算方法

1. 連結: `timestamp + "." + JSON_payload_body`
2. APIシークレットをキーとして使用してHMAC-SHA256を計算
3. 結果を16進数でエンコード

#### 例：検証（Python）

```python
import hmac
import hashlib
import time
import json

def verify_webhook_signature(headers, body, api_secret):
    timestamp = headers.get('X-FastComments-Timestamp')
    signature = headers.get('X-FastComments-Signature')

    if not timestamp or not signature:
        return False

    # タイムスタンプが最近のものであることを確認
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # 署名を確認
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### HTTPメソッドの選択

さらに、この更新に含まれているのは、各WebhookイベントタイプのHTTPメソッドを設定できることです：

- **作成イベント**: POSTまたはPUT（デフォルト: PUT）
- **更新イベント**: POSTまたはPUT（デフォルト: PUT）
- **削除イベント**: DELETE、POST、またはPUT（デフォルト: DELETE）

### セキュリティの利点

新しいシステムにはいくつかの利点があります：

- 中間者攻撃に対する保護
- タイムスタンプによるリプレイ攻撃防止
- ペイロード改ざん検知

### 後方互換性

APIシークレットを含む`token`ヘッダーは、まだすべてのリクエストで送信されます。既存の統合は変更なく動作し続け、前述のようにサポートを通じて古い動作をオフにするようリクエストできます。

### 文書

完全なドキュメントについては、私たちの[Webhooksガイド](https://docs.fastcomments.com/guide-webhooks.html)を参照してください。

### 結論

すべての主要リリースと同様に、これらの変更を最適化、テスト、および適切にリリースする時間を持つことができて嬉しく思っています。問題を発見した場合は、下記にお知らせください。

乾杯！

{{/isPost}}

---