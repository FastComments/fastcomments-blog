---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]생성된 타입 안전 클라이언트 SDK 출시[/postlink]

{{#unless isPost}}
우리의 TypeScript 마이그레이션 게시물에서 예고한 대로, 우리는 열 가지 프로그래밍 언어에 대한 생성된 타입 안전 클라이언트 SDK를 출시했습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 기사에는 기술 전문 용어가 포함되어 있습니다

### 새로운 소식

우리는 [TypeScript 마이그레이션 게시물](/blog/fastcomments-typescript-migration-completed)에서 생성된 클라이언트 SDK가 온다고 언급했습니다. 이제 그것이 도착했습니다.

FastComments는 이제 **열 가지 언어**에 대한 공식 타입 안전 SDK를 제공합니다:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

모든 SDK는 서버에서 생성하는 동일한 OpenAPI 사양에서 생성됩니다. 타입, 메서드 서명, 요청/응답 모델은 실제 API와 자동으로 동기화됩니다. 당신의 컴파일러는 코드가 네트워크 요청을 하기 전에 필드 이름 오타와 누락된 매개변수를 잡아냅니다.

### 작동 방식

TypeScript 마이그레이션은 이를 위한 전제 조건이었습니다. 이제 서버 코드가 완전히 타입이 지정되었으므로, 우리는 [TSOA의 포크](https://github.com/FastComments/tsoa)를 사용하여 라우트 컨트롤러에서 직접 OpenAPI 3.0 사양을 생성합니다. 이 사양은 [OpenAPI Generator](https://openapi-generator.tech/)에 입력되어 각 언어에 대한 클라이언트 라이브러리를 생성합니다.

API가 변경되면, 우리의 도구는 사양의 차이를 감지하고 영향을 받는 SDK를 재생성하며, 각 언어에 대해 테스트를 실행하고 자동으로 풀 리퀘스트를 엽니다. 우리는 모든 열 개 리포지토스 전반에 걸쳐 업데이트-테스트-릴리스 주기를 조율하는 작은 관리 도구를 Nim으로 만들었습니다.

### 각 SDK의 내용

각 SDK는 두 개의 API 클래스를 제공합니다:

- **`DefaultApi`**: API 키가 필요한 인증된 엔드포인트. 이들은 서버 측에서 중재, 사용자 관리, 분석 및 대량 작업을 위해 사용됩니다.
- **`PublicApi`**: 브라우저 및 모바일 앱에서 안전하게 호출할 수 있는 인증되지 않은 엔드포인트. 이들은 댓글 가져오기, 게시물 작성, 투표 및 기타 클라이언트 측 작업을 포함합니다.

모든 SDK는 또한 기존 인증 시스템과 통합할 수 있는 SSO 유틸리티를 포함합니다. TypeScript SDK는 실시간 이벤트 구독을 추가로 제공하여 라이브 댓글을 지원합니다.

### 문서

전체 API 문서는 [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html)에서 확인할 수 있습니다. 각 SDK 리포지토리에는 사용 가능한 모든 메서드와 모델을 다루는 생성된 문서도 포함되어 있습니다.

SSO 통합에 대한 내용은 우리의 [SSO 가이드](https://docs.fastcomments.com/guide-sso.html)를 참조하세요. 모든 열 개 SDK에는 자체 암호화 라이브러리를 사용하는 SSO 헬퍼가 포함되어 있습니다.

### 결론

완전히 타입이 지정된 서버 덕분에 신뢰할 수 있는 OpenAPI 사양을 생성하는 것이 간단해졌고, 그로부터 열 개(그리고 언젠가는 더 많은!) 언어를 위한 클라이언트를 생성하는 것은 주로 자동화를 구축하고 우리 타입 정의를 개선하는 문제였습니다. FastComments의 속도를 늦추지 않도록 지나치게 많은 추상화를 추가하지 않고도 소비할 수 있도록 할 수 있었습니다!

모든 주요 릴리스와 마찬가지로, 우리는 이 SDK를 최적화하고 테스트하며 적절히 출시할 수 있는 시간을 가질 수 있었던 것에 대해 기쁘게 생각합니다. 아래에 피드백이 있거나 추가하고 싶은 언어가 있다면 알려주세요.

감사합니다!

{{/isPost}}

---

---