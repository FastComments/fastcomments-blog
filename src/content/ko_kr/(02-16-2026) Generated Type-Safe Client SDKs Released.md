---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
우리의 TypeScript 마이그레이션 포스트에서 살짝 언급했듯이, 이제 10개의 프로그래밍 언어에 대해 타입 안전한 생성 클라이언트 SDK를 출시했습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

우리의 [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-ko_kr.html)에서 생성된 클라이언트 SDK가 곧 출시될 것이라고 언급했습니다. 이제 제공됩니다.

FastComments는 이제 **열 개의 언어**에 대해 공식적인 타입 안전 SDK를 제공합니다:

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

각 SDK는 서버가 생성하는 동일한 OpenAPI 사양을 기반으로 생성됩니다. 타입, 메서드 시그니처, 요청/응답 모델이 실제 API와 자동으로 동기화됩니다. 컴파일러가 필드 이름 오타와 누락된 매개변수를 코드가 네트워크 요청을 보내기 전에 잡아줍니다.

### How It Works

TypeScript 마이그레이션이 전제 조건이었습니다. 이제 서버 코드가 완전히 타입 지정되었으므로 [our fork of TSOA](https://github.com/FastComments/tsoa)를 사용해 라우트 컨트롤러에서 직접 OpenAPI 3.0 사양을 생성합니다. 이 사양은 [OpenAPI Generator](https://openapi-generator.tech/)에 전달되어 각 언어별 클라이언트 라이브러리를 생성합니다.

API가 변경되면, 우리의 도구가 사양의 차이를 감지하고 영향을 받는 SDK를 재생성하며, 각 언어에 대해 테스트를 실행하고 자동으로 풀 리퀘스트를 엽니다. 우리는 Nim으로 작은 매니저 도구를 구축하여 열 개의 저장소 전반에 걸친 업데이트‑테스트‑릴리스 사이클을 조정합니다.

### What's in Each SDK

각 SDK는 두 개의 API 클래스를 제공합니다:

- **`DefaultApi`**: API 키가 필요한 인증된 엔드포인트. 서버 측에서 모더레이션, 사용자 관리, 분석 및 대량 작업에 사용합니다.
- **`PublicApi`**: 인증이 필요 없는 엔드포인트로, 브라우저와 모바일 앱에서 안전하게 호출할 수 있습니다. 댓글 조회, 게시, 투표 및 기타 클라이언트‑대면 작업을 포함합니다.

모든 SDK에는 기존 인증 시스템과 통합하기 위한 SSO 유틸리티도 포함됩니다. TypeScript SDK는 실시간 댓글 작성을 위한 이벤트 구독 기능도 제공합니다.

### Documentation

전체 API 문서는 [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html)에서 확인할 수 있습니다. 각 SDK 저장소에도 모든 메서드와 모델을 다루는 생성된 문서가 포함되어 있습니다.

SSO 통합에 대해서는 우리의 [SSO guide](https://docs.fastcomments.com/guide-sso.html)를 참고하세요. 열 개의 SDK 모두 네이티브 암호화 라이브러리를 사용한 SSO 헬퍼를 포함합니다.

### In Conclusion

완전 타입 지정된 서버 덕분에 신뢰할 수 있는 OpenAPI 사양을 쉽게 생성할 수 있었고, 이를 기반으로 열 개(그리고 언젠가 더 많은!) 언어에 대한 클라이언트를 만드는 작업은 주로 자동화 구축과 타입 정의를 소비 가능하도록 개선하는 일에 달려 있었습니다. FastComments의 속도를 저하시키는 과도한 추상화를 추가하지 않았습니다!

모든 주요 릴리스와 마찬가지로, 우리는 시간을 들여 이 SDK들을 최적화하고 테스트하며 적절히 릴리스할 수 있어 기쁩니다. 아래에 피드백을 남기거나 추가했으면 하는 언어가 있으면 알려 주세요.

Cheers!

{{/isPost}}

---

---