---
[category:安全性]
[category:功能]
[category:Webhook]
###### [postdate]
# [postlink]Webhook 安全更新[/postlink]

{{#unless isPost}}
FastComments 的 webhook 現在包含 HMAC-SHA256 簽名用於有效載荷驗證，以及新的 HTTP 方法選擇。
{{/unless}}

{{#isPost}}

### 新聞

之前與其他平台相比，設定 Webhooks 會有額外的摩擦。我們認為這是件好事，因為需要額外的安全措施，然而我們最近確定了一種同樣安全但安全性是選擇性的機制。

### 先前的行為

之前，系統會在有效載荷中傳遞您的 API 金鑰，並期望您驗證它。如果您沒有因為無效的 API 金鑰返回 401，系統將不允許設定。

### 新的行為

現在，系統不會為新的 webhook 配置傳遞 API 金鑰。相反，對於新的和現有的整合會包含一個簽名的 HMAC 簽名。您可以選擇驗證此簽名，具體取決於所需的安全級別。

現有的配置將繼續傳遞 API 金鑰 - 您現在可以通過支持票請求關閉此選項。

### HMAC 簽名驗證

FastComments 現在在每個 webhook 請求中發送以下標頭：

| 標頭 | 描述 |
|--------|-------------|
| `X-FastComments-Timestamp` | 要求簽名時的 Unix 時間戳（秒） |
| `X-FastComments-Signature` | HMAC-SHA256 簽名格式為 `sha256=<hex>` |
| `token` | 您的 API 密鑰（保留向後相容性） |

#### 簽名的計算方式

1. 串聯：`timestamp + "." + JSON_payload_body`
2. 使用您的 API 密鑰作為密鑰計算 HMAC-SHA256
3. 對結果進行十六進制編碼

#### 示例驗證（Python）

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

    # 驗證時間戳是否近期
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # 驗證簽名
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### HTTP 方法選擇

此外，隨著此更新，您現在可以為每個 webhook 事件類型配置 HTTP 方法：

- **創建事件**：POST 或 PUT（默認：PUT）
- **更新事件**：POST 或 PUT（默認：PUT）
- **刪除事件**：DELETE、POST 或 PUT（默認：DELETE）

### 安全性優勢

新系統有幾個優點：

- 防範中間人攻擊
- 通過時間戳驗證來防止重播攻擊
- 有效載荷篡改檢測

### 向後相容性

包含您的 API 密鑰的 `token` 標頭仍然隨每個請求發送。現有的整合將在不修改的情況下繼續運作，如前所述，您可以請求通過支持來關閉舊的行為。

### 文檔

有關完整文檔，請參閱我們的 [Webhooks 指南](https://docs.fastcomments.com/guide-webhooks.html)。

### 總結

像所有主要版本一樣，我們很高興能夠花時間優化、測試並正確發布這些更改。如果您發現任何問題，請讓我們知道。

乾杯！

{{/isPost}}

---