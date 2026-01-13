---
[category:API & Development]
###### [postdate]
# [postlink]FastComments에 웹후크가 추가되었습니다[/postlink]

{{#unless isPost}}
FastComments는 이제 댓글 생성, 업데이트 및 제거를 위해 API를 호출할 수 있습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 문서에는 기술 용어가 포함되어 있습니다

#### 새로운 점

FastComments를 사용하면 댓글이 시스템에 추가, 업데이트 또는 제거될 때마다 API 엔드포인트를 호출할 수 있습니다.

우리는 HTTP/HTTPS를 통한 비동기 웹후크를 사용하여 이를 수행합니다.

#### 사용 방법

먼저, <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">웹후크 관리</a>로 이동합니다. 이는 데이터 관리 -> 웹후크를 통해 접근할 수 있습니다.

그곳에서 각 댓글 이벤트 유형에 대한 엔드포인트를 지정할 수 있습니다.

각 이벤트 유형마다 **Send Test Payload**를 클릭하여 통합이 올바르게 설정되었는지 확인하세요. 세부 사항은 다음 섹션인 "테스트"를 참조하세요.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="웹후크 설정 예" title="웹후크 설정 예" class="lozad" />
</div>

#### 테스트

<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">웹후크 관리</a>에는 각 이벤트 유형(생성, 업데이트, 삭제)에 대해 "Send Test Payload" 버튼이 있습니다. 생성 및 업데이트 이벤트는 더미 WebhookComment 객체를 보내며, 삭제를 테스트할 때는 ID만 포함된 더미 요청 본문을 보냅니다.

테스트는 "정상" (올바른 API 키) 및 "비정상" (잘못된 API 키) 시나리오에 대한 응답 코드를 확인하기 위해 두 번 호출을 합니다.

테스트가 잘못된 API 키를 보낼 경우, 테스트가 완전히 통과하기 위해서는 상태 코드 401을 반환해야 합니다. 토큰의 값을 올바르게 확인하지 않으면 다음과 같은 오류가 발생하게 됩니다:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="웹후크 인증 테스트 실패" title="웹후크 인증 테스트 실패" class="lozad" />
</div>

#### 댓글 객체 구조
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

#### "생성" 이벤트 구조

"create" 이벤트 요청 본문은 WebhookComment 객체입니다.

#### "업데이트" 이벤트 구조

"update" 이벤트 요청 본문은 WebhookComment 객체입니다.

#### "삭제" 이벤트 구조

"delete" 이벤트 요청 본문은 WebhookComment 객체이지만, **id만 포함되어 있습니다**.

#### 생성과 업데이트가 모두 HTTP PUT을 사용하는 이유는 무엇인가요?

**모든 요청에 ID가 포함되므로**, 같은 생성 또는 업데이트 요청을 반복하는 것은 **새 객체를 생성해서는 안 됩니다**. 이는 이러한 호출이 멱등성(idempotent)이며 HTTP 사양에 따라 PUT 이벤트여야 함을 의미합니다.

#### 작동 방식

시스템 내의 댓글 객체에 대한 모든 변경 사항은 큐에 배치될 이벤트를 발사합니다. API가 중단되는 경우 이 큐를 <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">웹후크 관리</a>에서 모니터링할 수 있습니다. API에 대한 요청이 실패할 경우, 우리는 이를 일정에 따라 다시 큐에 등록합니다. 이 일정은 1분 * 재시도 횟수입니다. 호출이 한 번 실패하면 1분 후에 다시 시도합니다. 두 번 실패하면 두 분을 기다립니다. 이와 같은 방식은 부하로 인해 API가 중단되지 않도록 하기 위함입니다.

#### 보안 및 API 토큰

요청 헤더에 우리는 "token"이라는 매개변수로 귀하의 <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API 비밀키</a>를 전달합니다.

이 매개변수를 올바르게 확인하지 않으면 통합이 인증된 것으로 표시되지 않습니다. 이는 FastComments와의 통합이 안전하다는 것을 보장하기 위한 안전 장치입니다.

#### 결론

FastComments 웹후크 통합이 이해하기 쉽고 설정이 빠르길 바랍니다.

추가 질문이 있으시면 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">고객 지원 페이지</a>로 문의하시기 바랍니다.

감사합니다!

{{/isPost}}

---