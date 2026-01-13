---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]웹훅 보안 업데이트[/postlink]

{{#unless isPost}}
FastComments 웹훅은 이제 페이로드 검증을 위한 HMAC-SHA256 서명과 새로운 HTTP 메서드 선택 기능을 포함합니다.
{{/unless}}

{{#isPost}}

### 새로운 점

이전에는 다른 플랫폼에 비해 웹훅 설정에 추가적인 마찰이 있었습니다. 우리는 이것이 요구되는 추가 보안 조치 때문에 좋은 것이라고 생각했지만, 최근에 보안이 선택 사항인 것과 동일하게 안전한 메커니즘을 마련했습니다.

### 이전 동작

이전에는 시스템이 API 키를 페이로드에 전달하고 이를 검증할 것으로 기대했습니다. 유효하지 않은 API 키에 대해 401을 반환하지 않으면 시스템은 설정을 허용하지 않았습니다.

### 새로운 동작

이제 시스템은 새로운 웹훅 구성을 위해 API 키를 전달하지 않습니다. 대신, 새로운 통합 및 기존 통합에 대해 서명된 HMAC 서명이 포함됩니다. 필요한 보안 수준에 따라 이 서명을 검증할 수도, 하지 않을 수도 있습니다.

기존 구성은 계속해서 API 키를 전달합니다 - 이제 지원 티켓을 통해 이를 끌 요청할 수 있습니다.

### HMAC 서명 검증

FastComments는 이제 모든 웹훅 요청에 다음 헤더를 전송합니다:

| 헤더 | 설명 |
|--------|-------------|
| `X-FastComments-Timestamp` | 요청이 서명된 Unix 타임스탬프(초) |
| `X-FastComments-Signature` | `sha256=<hex>` 형식의 HMAC-SHA256 서명 |
| `token` | 귀하의 API 비밀(하위 호환성을 위해 유지) |

#### 서명을 계산하는 방법

1. 연결: `timestamp + "." + JSON_payload_body`
2. API 비밀을 키로 사용하여 HMAC-SHA256 계산
3. 결과를 16진수로 인코딩

#### 예시 검증 (Python)

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

    # 최근 타임스탬프 검증
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # 서명 검증
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### HTTP 메서드 선택

또한, 이번 업데이트와 함께 각 웹훅 이벤트 유형에 대해 HTTP 메서드를 구성할 수 있습니다:

- **생성 이벤트**: POST 또는 PUT (기본값: PUT)
- **업데이트 이벤트**: POST 또는 PUT (기본값: PUT)
- **삭제 이벤트**: DELETE, POST 또는 PUT (기본값: DELETE)

### 보안 이점

새 시스템은 몇 가지 이점이 있습니다:

- 중간자 공격에 대한 보호
- 타임스탬프 검증을 통한 재전송 공격 방지
- 페이로드 변조 감지

### 하위 호환성

API 비밀을 포함하는 `token` 헤더는 여전히 모든 요청과 함께 전송됩니다. 기존 통합은 수정 없이 계속 작동하며, 앞서 언급한 대로 구식 동작을 끌 요청할 수 있습니다.

### 문서

완전한 문서는 우리의 [웹훅 가이드](https://docs.fastcomments.com/guide-webhooks.html)를 참조하세요.

### 결론

모든 주요 릴리스와 마찬가지로, 우리는 이러한 변경 사항을 최적화하고 테스트하며 적절히 릴리스할 수 있어서 기쁩니다. 문제가 발견되면 아래에 알려주세요.

감사합니다!

{{/isPost}}

---