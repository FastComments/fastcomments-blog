---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Webhook 安全更新[/postlink]

{{#unless isPost}}
FastComments 的 webhooks 现在包含 HMAC-SHA256 签名用于负载验证，并增加了新的 HTTP 方法选择。
{{/unless}}

{{#isPost}}

### 新变化

之前，设置 Webhooks 相比于其他平台有额外的摩擦。我们认为这是件好事，因为需要额外的安全措施，然而我们最近确定了一种机制，既安全又是可选的。

### 之前的行为

以前，系统会在负载中传递您的 API 密钥，并期望您进行验证。如果您没有返回 401 表示无效的 api 密钥，系统将不允许设置。

### 新行为

现在，对于新的 webhook 配置，系统将不再传递 API 密钥。相反，对于新的和现有的集成，将包括一个经过签名的 HMAC 签名。您可以根据所需的安全级别选择是否验证此签名。

现有配置将继续传递 API 密钥 - 您现在可以通过支持票请求关闭此功能。

### HMAC 签名验证

FastComments 现在在每个 webhook 请求中发送以下头部：

| 头部 | 描述 |
|--------|-------------|
| `X-FastComments-Timestamp` | 请求签名时的 Unix 时间戳（秒） |
| `X-FastComments-Signature` | HMAC-SHA256 签名，格式为 `sha256=<hex>` |
| `token` | 您的 API 密钥（保留用于向后兼容） |

#### 签名计算方法

1. 连接：`timestamp + "." + JSON_payload_body`
2. 使用您的 API 密钥作为密钥计算 HMAC-SHA256
3. 十六进制编码结果

#### 示例验证（Python）

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

    # 验证时间戳是否合理
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # 验证签名
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### HTTP 方法选择

此外，这次更新还增加了配置每个 webhook 事件类型的 HTTP 方法的功能：

- **创建事件**：POST 或 PUT（默认：PUT）
- **更新事件**：POST 或 PUT（默认：PUT）
- **删除事件**：DELETE、POST 或 PUT（默认：DELETE）

### 安全优势

新系统有一些优势：

- 防止中间人攻击
- 通过时间戳验证防止重放攻击
- 负载篡改检测

### 向后兼容性

包含您 API 密钥的 `token` 头仍然在每个请求中发送。现有集成将继续正常工作，且如前所述，您可以请求通过支持关闭旧行为。

### 文档

有关完整文档，请参见我们的 [Webhooks 指南](https://docs.fastcomments.com/guide-webhooks.html)。

### 结论

像所有重大版本一样，我们很高兴能够花时间优化、测试并正确发布这些更改。如果您发现任何问题，请在下面告诉我们。

干杯！

{{/isPost}}

---