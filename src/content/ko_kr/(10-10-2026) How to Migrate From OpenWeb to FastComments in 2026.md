[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]2026년에 OpenWeb에서 FastComments로 마이그레이션하는 방법[/postlink]

{{#unless isPost}}
OpenWeb(이전 Spot.IM)에서 전환하는 퍼블리셔를 위한 기능별 가이드: 1:1 매핑되는 항목, 차이점, CSV 가져오기 작동 방식, SSO 핸드셰이크 변경 사항, 단계별 전환 계획을 제공합니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 문서는 기술 용어가 포함되어 있습니다

이 가이드는 현재 OpenWeb을 운영하고 전환 계획이 필요한 제품 및 엔지니어링 리드와 커뮤니티 매니저를 위한 것입니다. 각 OpenWeb 인터페이스를 살펴보고 FastComments에 해당하는 항목을 명시하며 1:1 매핑이 없는 경우를 명확히 설명합니다.

### 왜 지금인가

2026년 9월 30일, 텔아비브 지방법원은 OpenWeb에 대한 임시 수신인 임명을 명령했으며, 이는 채권자인 Mars Growth Capital의 요청에 따른 것입니다. 이 채권자는 회사 자산 및 계정에 대한 1순위 유치권을 보유하고 있으며, OpenWeb의 이스라엘 자산, 은행 계좌 및 지적 재산에 대해 이를 집행하려 하고 있습니다(<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 9월 30일</a>). 다음 날 임시 수탁자 Adv. Ehud Gindes가 임명되었습니다(<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 10월 4일</a>). 2026년 초, OpenWeb의 주요 고객 중 하나였던 Microsoft가 트래픽 분쟁을 이유로 계약을 종료하고 결제를 보류했습니다(<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 9월 28일</a>).

OpenWeb은 플랫폼이 계속 운영된다고 밝히고 있습니다. 법원의 감독, IP에 대한 유치권을 집행하는 채권자, 그리고 자산 가치를 보존하는 수탁자는 퍼블리셔가 핵심 참여 인터페이스에서 원하지 않을 조건입니다. 아직 전체 데이터 내보내기를 수행하지 않았다면, 이 가이드를 진행하기 전에 먼저 전체 데이터를 내보내세요.

### 시작하기 전에 준비할 것

코드를 건드리기 전에 다음을 준비하세요:

- **OpenWeb 댓글 내보내기**. OpenWeb은 Export API(v4)를 제공하며, 최대 100,000개의 댓글을 포함한 ZIP CSV 파일을 생성합니다. 파일당 최대 1개월 범위의 날짜 창을 지원하고, 다운로드 링크는 일주일 후에 만료됩니다(<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). 필요한 모든 창을 요청하고 파일을 안전한 곳에 보관하세요. 이전에 OpenWeb 담당자가 Admin Panel CSV 내보내기를 제공한 경우에도 보관하십시오. FastComments 가져오기 도구는 `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count`, `url` 등의 열을 포함한 OpenWeb CSV를 읽습니다.
- **Spot ID와 게시물 ID 목록**. 런처에 전달하는 모든 `data-post-id`는 FastComments URL ID가 됩니다. 게시물 ID가 CMS 기사 ID인 경우, FastComments 측에서도 동일한 값을 생성할 수 있도록 생성 방식을 기록해 두세요.
- **SSO 사용자 목록**. 특히 OpenWeb에 등록한 `primary_key`와 `user_name` 값을 준비하세요. 댓글 작성자는 가져오기 중 사용자 이름으로 매칭되므로 FastComments SSO 페이로드에 동일한 사용자 이름을 전달해야 합니다.
- **모더레이터 목록 및 역할**. 관리자, 모더레이터, 기자 계정 및 각 섹션이 담당하는 영역을 정리하세요.
- **모더레이션 설정**. 사이트 전체 정책(전체 승인, 게시 후 모더레이트, 승인 필요), 기사별 오버라이드, 제한어 목록, 음소거 및 차단 사용자 등을 정리하세요.
- **맞춤 CSS 및 테마 설정**. Admin Panel에서 내보낸 모든 항목을 FastComments 위젯 커스터마이징 페이지에서 재구성할 수 있도록 준비하세요.
- **런처가 템플릿에 위치한 곳**. Reactions, Topic Tracker, Spotlight, Notification Bell 또는 Standalone Ad가 포함된 페이지를 포함한 모든 템플릿 위치를 파악하세요.

### OpenWeb 게시물 ID와 FastComments URL ID 매핑

FastComments는 댓글 스레드를 `urlId`에 연결합니다. 기본적으로 URL ID는 정리된 페이지 URL이지만, 임의 문자열로 설정할 수 있으며, OpenWeb 가져오기 도구가 바로 그렇게 합니다: `post_id` 열을 읽어 해당 기사에 대한 모든 댓글의 FastComments URL ID로 사용합니다. 또한 `url` 열을 표시 URL로 저장해 모더레이션 링크와 알림 이메일이 올바른 페이지를 가리키게 합니다.

따라서 템플릿 규칙은 다음과 같습니다: OpenWeb에 `data-post-id="POST_ID"`와 `data-post-url="ARTICLE_URL"`를 전달했다면, FastComments에는 `urlId: 'POST_ID'`와 `url: 'ARTICLE_URL'`를 전달합니다. 가져온 스레드는 리다이렉트 없이 실시간 스레드와 일치합니다. 자세한 내용은 <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID 문서</a>를 참고하세요.

앞으로 URL을 기준으로 스레드를 키우고 싶다면 먼저 가져온 뒤, Manage Data 아래의 Migrate Comments 도구를 사용해 게시물 ID에서 URL로 일괄 이동할 수 있습니다.

### 기능 매핑

| OpenWeb | FastComments | 비고 |
| --- | --- | --- |
| 실시간 업데이트가 가능한 대화 | 실시간 댓글 위젯 | 기본적으로 실시간. 새 댓글은 “Show N New Comments” 버튼 뒤에 숨겨지거나 `showLiveRightAway`로 즉시 표시됩니다. |
| 댓글에 대한 좋아요·싫어요 | 상·하 투표 | 가져오기 시 `likes_count`와 `dislikes_count`를 보존합니다. 하트 스타일 및 “투표 비활성화”는 설정 옵션입니다. |
| Reactions(기사 수준 아이콘) | 페이지 Reactions | 페이지에 설정 가능한 아이콘 세트, 사용자별 기억됨. |
| 답글 및 스레딩 | 스레드형 답글, 무제한 깊이 | `maxReplyDepth`로 중첩 제한. 아래 스레드 가져오기 주석 참고. |
| 정렬: best, newest, oldest | 가장 관련성 높은, 최신, 오래된 순 | `defaultSortDirection`으로 사이트 또는 URL 패턴별 기본값 설정. |
| 사용자 프로필 | 사용자 프로필 | 아바타, 바이오, 배지, 카르마, 활동, DM 지원. SSO 사용자와 연동. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, 배지 | SSO 페이로드에 설정. 백엔드 조회 호출 불필요. |
| 고정된 라이브 블로그 업데이트, 강조 댓글 | 댓글 고정·해제 | 모더레이터가 위젯 또는 대시보드에서 고정. AI 에이전트 템플릿이 상위 투표 댓글을 고정. |
| 대화 내 설문조사 | 댓글 설문 | 2~10 옵션, 마감일, 프라이버시 모드, 작성자 제한. |
| AMA 포맷 | 전용 제품 없음 | 작성자 SSO 사용자를 라벨링하고 질문을 고정한 스레드로 운영. |
| Live Blog | 1:1 대응 없음 | 라이브 채팅 위젯 및 채팅 모드 댓글 존재. 편집용 라이브 블로그는 CMS에 유지. |
| Topic Tracker(주제·작성자 팔로우) | 페이지 구독 | 사용자는 페이지를 구독, 주제·작성자 교차 팔로우 없음. |
| Notification Bell | 위젯 내 알림 벨 | 답글, 멘션, 스레드 활동, 투표, 구독, 배지, DM 등. |
| 이메일 알림 | 템플릿 기반 이메일 알림 | 사용자별 SSO 플래그로 옵트인. 맞춤 템플릿, 브랜드 발신자. |
| SSO 핸드셰이크(codeA/codeB) | Secure SSO(HMAC-SHA256 페이로드) | 사용자 등록 호출 없음. 서버에서 페이로드 서명 후 위젯에 전달. |
| 서드파티 SSO(Auth0, Gigya, Piano) | 인증 제공자 인증 후 Secure SSO | 동일 페이로드. 백엔드에서 로그인 후 서명. |
| Identity(OpenWeb 등록 화면) | 매직링크 로그인, Simple SSO | 이메일 링크로 로그인, 비밀번호 없음. |
| 기사별 모더레이션 정책 | URL ID 패턴별 커스터마이징 규칙 | 승인 모드, 스팸 필터 등 `*/section/*` 패턴별 적용. |
| Aida AI 모더레이션 | 스팸 분류기, ChatGPT 4 옵션, 이미지 모더레이션, AI 에이전트 | 에이전트는 드라이 런으로 시작, 인간 승인 필요 가능. |
| 제한어 | 단어 블랙리스트 | 기본 ~450개 구문, 편집 가능. |
| 사용자 음소거 | 사용자 차단 | 댓글 메뉴에서 독자 차단. |
| 차단 | 차단 | 영구, 기간 지정, 섀도우, IP 해시, 별칭 인식 등. |
| 모더레이션 패널 | 댓글 모더레이션 대시보드 | 필터, 일괄 작업(undo 포함), 그룹, 다이제스트 이메일, 원클릭 승인. |
| 알림 웹훅 | 웹훅 | 댓글 생성·업데이트·삭제. 사용자별 알림 웹훅 없음. |
| 참여 대시보드 | 분석 | 실시간 사용자, 상위 페이지, 페이지 로드, 댓글, 투표, 일일 계정 등. 광고 수익 보고 없음. |
| 대화형 광고, Standalone Ad | 없음 | FastComments는 광고를 제공하지 않으며, 위젯 주변에 자체 광고 스택을 유지합니다. |
| Social Reviews(별점) | 평점 및 리뷰 | 동일 계정의 별도 제품. |
| 커뮤니티 인기 | 최신 토론 및 상위 페이지 위젯 | 댓글 활동 기반 재순환. |
| 댓글 카운터 | 댓글 수 위젯 | 단일 및 일괄. |
| Export Comments API | CSV 내보내기, API, 웹훅 | 대시보드에서 언제든 내보내기. |
| 사용자 데이터 내보내기·삭제(GDPR/CCPA) | 계정·데이터 삭제, EU 지역 | eu.fastcomments.com은 EU 내에 데이터 보관. DPA 제공. |
| Android, iOS, React Native SDK | Android, iOS, React Native SDK | 네이티브 UI, SSO, 실시간 업데이트, 스레딩, 모더레이션 액션. |
| Launcher, Virtual Pages, React SDK | 임베드 스크립트, `fcConfigs`, React, Vue, Angular, SolidJS 라이브러리 | SPA용 `update()`와 `destroy()` 제공. |

위 섹션의 나머지는 각 그룹을 자세히 설명합니다.

### 대화, 투표 및 Reactions

OpenWeb의 Conversation은 실시간 스레드이며, FastComments 댓글 위젯도 동일합니다: 댓글, 편집, 삭제, 투표 및 모더레이션 액션이 스레드를 보는 모든 사람에게 푸시됩니다(<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). 기본적으로 다른 사람의 새 댓글은 “Show 2 New Comments” 버튼 뒤에 숨겨져 페이지가 독자에게 튀는 것을 방지합니다. 실시간 이벤트의 경우 `showLiveRightAway`를 설정해 즉시 표시하고, 채팅처럼 아래로 흐르게 하려면 `newCommentsToBottom`을 사용하세요.

좋아요·싫어요는 상·하 투표가 됩니다. 가져오기 시 각 댓글의 두 카운트를 보존합니다. 커뮤니티가 단일 좋아요만 사용한다면 위젯 커스터마이징 페이지에서 하트 스타일로 전환하세요. 투표를 완전히 비활성화할 수도 있습니다.

OpenWeb Reactions는 기사에 2~4개의 라벨 아이콘을 표시하는 별도 위젯입니다(<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments 대응은 Page Reactions이며, 댓글 위젯에 연결된 반응 이미지 세트를 페이지·사용자별로 기억합니다(<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). 반응 카운트는 OpenWeb 댓글 내보내기에 포함되지 않으므로 0부터 시작합니다.

정렬은 직접 매핑됩니다. OpenWeb의 `data-sort-by` 값인 best, newest, oldest는 각각 Most Relevant, Newest First, Oldest First와 대응합니다. 코드 또는 커스터마이징 규칙에서 `defaultSortDirection`(`MR`, `NF`, `OF`)으로 기본값을 설정합니다. 사용자는 위젯에서 전환할 수 있습니다.

`data-read-only="true"`는 `readonly: true`가 되며, 새 댓글, 투표, 편집 및 삭제를 차단합니다. `data-post-staleness-days`와 직접 대응되는 항목은 없지만, 커스터마이징 규칙으로 URL ID 패턴에 `readonly`를 적용하거나 템플릿에서 기사 연령에 따라 전환할 수 있습니다. `data-messages-count`는 페이지당 표시할 댓글 수이며, 위젯 커스터마이징 페이지에서 10~200 사이로 설정합니다.

### 답글 및 스레딩

FastComments는 기본적으로 무제한 중첩을 지원합니다; `maxReplyDepth`로 제한할 수 있습니다(`1`이면 2단계 구조). OpenWeb CSV에는 `parent_id`와 `parent_comment_id` 열이 포함됩니다. 현재 가져오기 도구는 각 행을 해당 페이지의 최상위 댓글로 날짜 순서대로 가져오며, 작성자, 타임스탬프, 투표, 플래그 수 및 승인 상태를 그대로 유지합니다. 부모‑자식 트리를 재구성하지는 않습니다. 스레드가 답글 위주라면 내보내기를 보낼 때 알려주시면 가져오기 단계에서 스레딩을 처리해 평탄화된 스레드 대신 원래 구조를 유지할 수 있습니다.

### 사용자 프로필 및 배지

FastComments 사용자는 SSO 사용자를 포함해 아바타, 표시 이름, 바이오, 소셜 링크, 배지, 카르마, 댓글 수, 공개 활동 피드 및 DM을 제공하는 프로필을 가집니다(<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). 활동, 프로필 댓글 및 DM 영역은 SSO 페이로드 또는 전역 설정에서 사용자별로 비활성화할 수 있습니다.

OpenWeb의 Author Badge는 `GET /sso/v1/user/{primary_key}`를 호출해 작성자를 조회하고 `data-author-id`에 반환된 ID를 넣어야 합니다. FastComments에서는 SSO 페이로드에 `displayLabel: 'Author'`(또는 100자 이하의 임의 라벨)와 `isAdmin` 또는 `isModerator`를 설정하면 됩니다. 라벨은 모든 댓글에 이름 옆에 표시됩니다. 더 풍부한 시스템을 원한다면 Customize → Badges에서 이미지·텍스트 배지를 설정하고, 댓글 수, 상위 투표, 고정 댓글, 베테랑 상태, 답글 속도 등 임계값에 따라 자동 부여하거나 수동으로 부여할 수 있습니다. SSO 페이로드의 `badgeConfig`로도 할당 가능합니다(<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### 고정 댓글, 설문 및 Q&A

모더레이터는 위젯의 댓글 메뉴 또는 모더레이션 대시보드에서 댓글을 고정·해제할 수 있습니다. 고정된 댓글은 스레드에 있는 모든 사람에게 실시간으로 푸시됩니다. 자동화를 원한다면 AI Agents 기능의 Top Comment Pinner 템플릿을 사용해 투표 임계값을 초과하면 자동으로 상위 댓글을 고정할 수 있습니다(<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb의 In Conversation Polls는 직원이 최상위 댓글에 2~4 옵션 설문을 붙이는 기능입니다. FastComments 설문도 댓글에 붙이며, 2~10 옵션, 선택적 마감일, 결과 프라이버시(익명, 관리자 전용, 전체 공개) 및 “결과 보기 위해 투표” 모드가 있습니다. 설문 생성 권한(비활성화, 관리자·모더레이터, 전체)과 익명 독자의 투표 여부를 설정할 수 있습니다. 설문은 공개 API를 통해 CMS에서 생성할 수도 있습니다.

OpenWeb은 Ask Me Anything 포맷을 제공했지만 FastComments에는 전용 Q&A 제품이 없습니다. 실용적인 대체 방법은 전용 URL ID에 일반 스레드를 만들고, 게스트의 SSO 사용자에 `displayLabel`을 지정해 소개 댓글을 고정하는 것입니다. 독자는 최상위 댓글에 질문하고, 게스트는 스레드 내에서 답변하며, 멘션·답글 알림이 사람들을 다시 끌어옵니다. 창이 닫힌 후에는 `noNewRootComments`를 설정해 새 루트 댓글을 차단하고 답글만 허용합니다.

Community Spotlight(OpenWeb의 이메일 수집·카운터·리다이렉트 카드)는 대응이 없습니다. 위젯은 `headerHTML`을 통해 댓글 입력 위에 맞춤 헤더 HTML을 지원하지만, 이메일 캡처 폼은 제공하지 않습니다.

### Live Blog

FastComments에는 Live Blog이 없습니다. OpenWeb의 Live Blog은 편집자 제품으로, 관리자 패널에서 기자가 업데이트를 게시하고 링크·트윗·비디오를 삽입해 독자가 실시간으로 따라갑니다(<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

FastComments가 제공하는 실시간 커버리지는 독자 측면입니다: Live Chat 위젯(`embed-live-chat.min.js`)을 사용해 스트리밍 채팅을 제공하고, 댓글 위젯을 채팅 모드(`showLiveRightAway` + `newCommentsToBottom`)로 전환해 실시간 보도를 보조합니다. 편집자 업데이트는 OpenWeb에서 CMS나 전용 Live Blog 도구에 유지하고, FastComments를 아래에 삽입해 토론을 진행합니다. 댓글 안에 YouTube, SoundCloud 등 미디어 삽입이 지원되어 직원이 댓글로 업데이트할 때 풍부한 미디어를 포함할 수 있습니다.

### Topic Tracker, 알림 및 이메일

OpenWeb의 Topic Tracker는 페이지 메타데이터에서 추출한 주제·작성자를 팔로우하고, 새 기사와 매치될 때 알림을 제공합니다(<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments에는 기사 간 주제·작성자 팔로우 기능이 없습니다. 독자는 알림 벨을 통해 페이지를 구독하고, 해당 스레드에 대한 업데이트를 받으며, 구독 빈도는 1분, 시간별 다이제스트, 일일 다이제스트 중 선택할 수 있습니다. 교차 기사 팔로우가 중요한 경우, 이 기능을 잃게 됩니다.

알림 벨의 나머지 기능은 동일합니다. 위젯에는 미읽음 카운트가 빨간색 벨에 표시되고, 목록에는 나에게 달린 답글, 내가 댓글을 단 스레드의 답글, 멘션, 내 댓글에 대한 투표, 구독 페이지 활동, 배지 수여, DM이 포함됩니다(<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). 인앱 알림은 WebSocket을 통해 실시간으로 전달됩니다. 답글·멘션 이메일은 승인된 댓글에 대해 1분마다 발송됩니다.

SSO 사용자의 경우 페이로드에 `optedInNotifications`와 `optedInSubscriptionNotifications`를 전달하면 FastComments가 다음 페이지 로드 시 선호도를 업데이트합니다. 이메일은 페이로드에 이메일 주소가 있어야 합니다. 이메일 템플릿은 Customize → Email Templates에서 유형·언어별로 편집 가능하며, DKIM을 사용해 자체 도메인에서 발송할 수 있습니다. 모더레이터와 관리자는 일일·주간·월간 다이제스트를 받아 원클릭 승인·응답·스팸 링크를 사용할 수 있습니다.

OpenWeb의 Notification Webhook은 사용자별 알림 이벤트(`replied-message`, `liked-message`, `topic-by-keyword` 등)를 엔드포인트에 전송합니다. FastComments 웹훅은 댓글 리소스(생성·업데이트·삭제)만을 다루며, 원하는 만큼 구독 엔드포인트를 추가할 수 있습니다(<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). 기존에 알림 웹훅을 사용해 자체 이메일 시스템을 구축했다면, 댓글 이벤트 기반 로직으로 재구성하거나 FastComments가 이메일을 직접 발송하도록 전환해야 합니다.

### SSO: codeA/codeB에서 서명된 페이로드로

OpenWeb의 핸드셰이크는 6단계: `spot-im-api-ready` 대기 → OpenWeb이 `codeA` 발행 → 클라이언트가 백엔드에 전송 → 백엔드가 사용자 확인 후 `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...` 호출 → OpenWeb이 `codeB` 반환 → 클라이언트가 `codeB`를 OpenWeb에 전달(<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). 로그아웃은 `window.SPOTIM.logout()`을 호출합니다.

FastComments Secure SSO는 라운드 트립이 없으며 새로운 엔드포인트도 필요하지 않습니다. 로그인된 사용자를 위한 페이지를 렌더링할 때 백엔드가 사용자를 직렬화하고 Base64 인코딩한 뒤, API 시크릿으로 HMAC‑SHA256 서명을 합니다. 위젯은 요청에 페이로드를 포함하고 FastComments가 서명을 검증합니다(<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). Node 예시:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // OpenWeb에서 primary_key로 사용한 값과 동일
        email: 'reader@example.com',
        username: 'reader',              // OpenWeb에 등록한 user_name과 동일
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // 선택 사항, Author Badge 조회 대체
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // 페이지 config에 렌더링:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

타임스탬프는 epoch 밀리초이며, 2일 이상 오래되면 거부됩니다. 로그아웃된 독자에게는 세 개의 서명 필드를 생략하고 `loginURL`(또는 `loginCallback` 함수)만 전달하면 위젯이 로그인 프롬프트를 표시합니다. Node, Java, PHP 전체 예시는 <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">코드 예제 저장소</a>에 있습니다.

사용자는 첫 페이지 로드 시 자동 생성됩니다. 일괄 등록은 하지 않습니다. OpenWeb 가져오기 도구가 `user_name`으로 댓글 작성자를 매칭하므로, 동일 `username`을 포함한 SSO 페이로드를 전달하면 해당 사용자는 처음 스레드를 로드할 때 가져온 댓글을 차지하고 이후 편집·삭제가 가능합니다. 사전 생성이 필요하면 SSO 사용자 API를 사용할 수 있습니다.

페이로드가 전송될 때마다 FastComments는 사용자 레코드를 업데이트하므로, 표시 이름이나 아바타가 변경되면 다음 페이지 뷰에 반영됩니다. `null` 값을 지정하면 해당 필드를 삭제합니다.

Auth0, Gigya, Piano 등 서드파티 SSO를 `window.SPOTIM.startSSOForProvider`로 사용했다면 FastComments 흐름은 동일합니다: 제공자가 인증을 마치면 백엔드가 페이로드를 생성·서명합니다. FastComments 측에서 별도 제공자 통합 설정은 필요하지 않습니다.

두 가지 추가 옵션이 있습니다. Simple SSO는 클라이언트에서 서명되지 않은 사용자 객체를 전달하며, 이메일이 있으면 활동을 검증된 것으로 표시합니다(<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0은 Okta, Azure AD, ADFS 등을 통해 FastComments 대시보드 자체에 로그인하며, 역할 매핑을 지원하고 엔터프라이즈 플랜에서 이용 가능합니다(<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### 모더레이션

OpenWeb의 기사별 모더레이션 정책 API는 `spot_policy`, `approve_all`, `publish_and_moderate`, `require_approval` 네 가지 값을 가집니다. FastComments는 모더레이션 설정에서 동일한 동작을 구성합니다: 자동 승인 켜기·끄기, 사용자의 첫 댓글에만 승인 요구, 인증된(로그인·SSO) 댓글만 자동 승인 등. 규칙은 사이트 전체 또는 `*/politics/*`와 같은 URL ID 패턴별로 적용할 수 있어 섹션별 정책을 재현합니다. 모든 댓글(승인 여부와 관계없이)은 Moderate Comments 대시보드에 나타나며, 기본 모델은 게시 후 검토(publish‑then‑review)입니다(<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

가져오기는 모더레이션 상태를 그대로 유지합니다. OpenWeb `message_status`가 `approved`이면 승인 및 검토된 상태로, `rejected`이면 스팸 및 검토된 상태로, 그 외는 미승인·미검토 상태로 가져와 모더레이션 대기열에 나타납니다. `reports_count`는 댓글의 플래그 수가 됩니다.

FastComments의 자동 모더레이션은 Aida와 달리 여러 레이어로 구성됩니다:

- 지속적으로 학습되는 스팸 분류기(전체 테넌트 공유 또는 전용)와 장기·고정 사용자에 대해 필터링을 완화하는 신뢰 요소.
- Flex 청구 옵션인 ChatGPT 4 스팸 검사(선택).
- 이미지 콘텐츠 모더레이션(저·중·고 감도) 옵션.
- 약 450개의 기본 구문을 포함한 단어 블랙리스트(편집 가능)로 매치된 단어를 별표로 마스킹. 여기서 OpenWeb 제한어를 사용합니다.
- N개의 신고가 누적되면 자동 숨김 임계값.
- 반복·유사 메시지 방지(항상 활성).
- AI Agents: 이벤트 기반 에이전트로 도구 화이트리스트(스팸 표시, 승인, 잠금, 고정, DM 경고, 차단, 배지 수여, 답글) 제공. 모든 에이전트는 드라이 런으로 시작하고, 민감 도구는 인간 승인 뒤에 사용할 수 있으며, 모든 행동은 사유와 신뢰 점수와 함께 로그에 기록됩니다.

OpenWeb의 사용자 음소거 API는 한 SSO 사용자가 다른 사용자를 음소거합니다. FastComments 대응은 댓글 메뉴의 Block User이며, 로그인한 모든 독자가 사용할 수 있습니다. 차단은 모더레이터 액션으로, 영구·기간 지정·섀도우·IP 해시·이메일 별칭 인식 등 다양한 옵션을 제공합니다. 차단된 사용자 목록은 이메일, 이름, 모더레이터, 차단을 일으킨 댓글 기준으로 검색할 수 있습니다.

Moderate Comments 대시보드는 필터(검토 필요, 승인 필요, 스팸, 플래그, 차단 사용자)와 텍스트 검색, 일괄 작업(undo·일시정지), 대규모 대기열을 위한 “전체 선택” 기능, 섹션별 모더레이터 전용 그룹, 각 댓글 로그(이메일 발송 여부 사유) 및 공유 가능한 필터링 링크를 지원합니다. 모더레이터는 대시보드만 사용 가능하며 설정 변경이나 데이터 가져오기는 할 수 없습니다.

### 분석

FastComments Analytics는 현재 온라인 사용자 수, 페이지별 상위 페이지(댓글·실시간 독자), 일일 페이지 로드·댓글·투표·계정 생성 추이를 보여줍니다(<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). 모더레이터 통계는 별도입니다. 카운트는 거의 실시간이며 최대 1분 지연, 모든 페이지 로드가 샘플링 없이 집계됩니다.

광고 채우기, CPM, 수익 등에 관한 데이터는 없습니다. OpenWeb 대시보드가 참여‑수익 보고를 제공했다면, 해당 보고는 자체 광고 스택으로 이전해야 합니다.

### 수익화

OpenWeb은 대화 내·주변에 광고를 삽입하고 Standalone Ad 유닛을 제공하며, 캠페인은 OpenWeb 담당자를 통해 설정합니다(<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments는 위젯에 광고를 삽입하지 않으며, 수익 공유도 없고, 제3자 광고·추적 스크립트도 로드하지 않습니다. 위젯은 iframe 형태로 삽입되며, 위·아래 광고 슬롯은 퍼블리셔가 기존에 사용하던 방식을 그대로 유지합니다.

트레이드‑오프는 명확합니다: OpenWeb이 제공하던 광고 수익을 잃고, 고정·예측 가능한 비용과 광고 요청이 없는 위젯을 얻게 됩니다. Flex 및 Pro 플랜에서는 브랜드 표시가 제거되며, Pro와 Enterprise 플랜에서는 화이트 라벨링이 가능합니다.

### 데이터 내보내기·프라이버시

FastComments 대시보드에서 언제든 CSV 형태로 모든 댓글 데이터를 내보낼 수 있으며, 날짜는 UTC ISO 형식입니다. 동일 데이터는 API를 통해서도 접근 가능하고, 웹훅으로 지속 동기화됩니다. 가져오기 파일은 가져오기가 완료되는 즉시 FastComments에서 삭제됩니다.

GDPR·CCPA를 위해 OpenWeb은 내보내기·삭제 API를 제공하며, 삭제된 사용자의 댓글은 무작위 게스트 계정에 남습니다(<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments는 데이터 내보내기·삭제 요청을 지원하고, 데이터 처리 계약(DPA)을 제공하며, EU 전용 배포(<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>)를 운영합니다. EU 지역에서는 데이터가 EU 내에만 복제됩니다. 유럽 독자가 있다면 해당 지역에 계정을 생성하세요. EU 지역에서는 AI 에이전트 차단이 항상 인간 승인을 요구해 DSA 제17조를 충족합니다.

글로벌 배포의 댓글 데이터는 싱가포르 노드를 포함한 여러 지역에 복제되며, 위젯은 FastComments 자체 DNS와 CDN을 통해 제공됩니다. 임베드 스크립트는 디스크 기준 30 KB 이하, 전송 시 약 6 KB 압축됩니다.

### 모바일 SDK

OpenWeb은 Android, iOS, React Native SDK에 Conversation, Articles, Authentication, Notifications, Reactions, In‑Conversation Polls를 포함합니다. FastComments는 네이티브 <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a>, <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> 라이브러리를 제공하며, 스레드형 댓글, WebSocket 기반 실시간 업데이트, Secure SSO, 투표, 멘션, 이미지 업로드, 모더레이션 액션(플래그·고정·잠금·차단), 테마, 라이브 채팅 모드, 소셜 피드 컴포넌트를 지원합니다. EU 지역은 구성 플래그로 활성화됩니다. 광고 SDK는 없으며, 광고 자체가 없기 때문입니다.

### 임베드·SPA 통합

OpenWeb 런처와 컨테이너:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments 대응:

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

테넌트 ID는 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">임베드 코드 페이지</a>에서 확인할 수 있습니다. `data-article-tags`는 주제 팔로우 기능이 없으므로 대응이 없습니다; 해시태그는 별도 기능입니다.

무한 스크롤·SPA에서는 OpenWeb의 Virtual Pages가 기사당 하나의 컨테이너를 사용합니다. FastComments에서는 `FastCommentsUI(element, config)`를 스레드마다 호출하고, 이후 `instance.update(newConfig)`로 URL ID를 교체하거나 `instance.destroy()`로 제거합니다(<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular, SolidJS 라이브러리는 config prop이 변경될 때 이를 자동 처리합니다. 라이프사이클 콜백(`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`)은 기존에 사용하던 `spot-im-*` DOM 이벤트를 대체합니다.

인덱스 페이지의 댓글 수는 댓글 수 위젯(단일·일괄)으로 표시합니다. SEO를 위해 댓글은 iframe이 아닌 페이지에 직접 렌더링되어 검색 엔진 크롤러가 읽을 수 있습니다. 따라서 SEO API 호출이 필요 없습니다.

### 단계별 전환

**1. 계정 생성 및 기본 설정**. fastcomments.com 또는 eu.fastcomments.com에 가입합니다. 모더레이션 설정, 단어 블랙리스트, 투표 스타일, 기본 정렬, 위젯 커스터마이징 페이지의 맞춤 CSS 등을 설정합니다. 모더레이터와 모더레이션 그룹을 추가합니다. 관리자가 많다면 FastComments가 가져와서 설정해 드립니다.

**2. 첫 번째 가져오기 실행**. <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data → Import</a>로 이동해 OpenWeb(.csv)을 선택하고 업로드합니다. 가져오기는 백그라운드 작업으로 진행되며, 행 수와 상태가 표시되고 완료 시 이메일이 전송됩니다(<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). 각 OpenWeb 메시지 ID는 FastComments 댓글 ID가 되므로 재실행해도 중복이 생성되지 않습니다.

**3. 카운트 검증**. 작업 행 수를 내보내기와 비교합니다. 모더레이션 대시보드에서 트래픽이 많은 몇 개 URL ID를 열어 작성자, 날짜, 투표 합계, 승인 상태 등을 샘플링합니다. 거부된 댓글은 스팸으로, 보류 중인 댓글은 대기열에 있는지 확인합니다.

**4. SSO 페이로드 구축**. 위의 서명 코드를 백엔드에 구현하고, OpenWeb에서 사용한 `id`와 `username`을 동일하게 사용합니다. 스테이징 페이지에서 직원 계정으로 테스트해 가져온 댓글이 해당 사용자에게 귀속되고, 편집·삭제가 메뉴에 나타나는지 확인합니다.

**5. 스테이징 템플릿에 임베드 교체**. 런처와 컨테이너를 FastComments 스니펫으로 교체하고, `data-post-id`를 `urlId`로, `data-post-url`을 `url`로 매핑합니다. `window.SPOTIM.logout()` 및 `spot-im-*` 리스너를 제거하거나 콜백으로 매핑합니다. CSS는 코드가 아니라 커스터마이징 규칙에 적용해 FastComments 업데이트 시마다 테스트됩니다.

**6. 병행 운영**. 섹션 또는 일정 비율의 기사에 FastComments를 적용하고 나머지는 OpenWeb을 유지합니다. OpenWeb 측에서는 변경이 필요 없습니다. 모더레이션 대기열과 분석 페이지를 모니터링합니다. 병행 운영 기간 동안 FastComments 페이지에 댓글을 다는 사용자는 OpenWeb 내보내기에 포함되지 않으므로, 최종 가져오기 전에 이를 고려해 계획합니다.

**7. CSP 및 DNS**. Content‑Security‑Policy를 사용한다면 `cdn.fastcomments.com`과 `fastcomments.com`(또는 `eu.fastcomments.com`)을 `script-src`, `frame-src`, `connect-src`에 허용하고, `spot.im`·`openweb.com` 항목은 런처 제거 후 삭제합니다. DNS 설정은 변경할 필요가 없으며, URL ID가 동일하므로 리다이렉트도 필요 없습니다.

**8. 최종 가져오기 및 라이브 전환**. 병행 운영 기간을 포함한 마지막 OpenWeb 내보내기를 수행하고 업로드합니다(재가져오기는 안전). 템플릿 변경을 전체 페이지에 배포하고 런처·Reactions·Topic Tracker·Spotlight·벨·광고 컨테이너를 제거합니다.

**9. 라이브 체크리스트**

- 두 브라우저에서 프로덕션 기사에 실시간 댓글이 보이는지.
- SSO 로그인·로그아웃 및 실제 구독자 계정으로 댓글 작성 여부.
- 모더레이터가 다이제스트를 받고 승인할 수 있는지.
- 답글·멘션 이메일이 올바른 페이지로 연결되는지.
- 차단 목록·단어 블랙리스트가 채워졌는지.
- 페이지 Reacts와 댓글 카운트가 이전 Reactions·카운터 위치에 정상 표시되는지.
- CSP 보고가 깨끗한지.
- 내보내기와 대시보드 간 마지막 댓글 수 비교.

### 잃는 것과 다른 점

갭을 직접 정리하면:

- **Live Blog**: 대응 없음. CMS 또는 별도 라이브 블로깅 도구에 유지하고 FastComments를 아래에 삽입.
- **Topic Tracker**: 기사 간 주제·작성자 팔로우 없음. 페이지 구독만 제공.
- **Community Spotlight**: CTA 카드 제품 없음. `headerHTML`로 컴포저 위에 메시지만 표시, 이메일 캡처는 제공되지 않음.
- **광고 수익**: 없음. 위젯은 광고 없이 설계됨.
- **Notification webhook**: 댓글 이벤트에 대한 웹훅만 제공, 사용자별 알림 이벤트는 없음.
- **가져오기 시 스레딩**: 현재 가져오기 도구는 답글을 최상위 댓글로 평탄화합니다. 트리 재구성이 필요하면 알려 주세요.
- **Reactions 히스토리**: 기사 수준 반응 카운트는 댓글 내보내기에 포함되지 않아 새로 시작합니다.
- **Polls 히스토리**: 설문 정의와 투표는 내보내기에 포함되지 않으며, 설문 텍스트만 댓글로 가져옵니다.
- **로그인 모델**: SSO가 없는 독자는 비밀번호 없이 매직링크로 로그인합니다.
- **인간 모더레이션 스태프**: OpenWeb은 Aida와 함께 모더레이션 팀을 제공하지만, FastComments는 도구·분류기·에이전트를 제공하고 실제 인력은 퍼블리셔에게 있습니다.

얻는 점은 동일합니다: 한 줄 스크립트와 광고 요청이 없는 위젯, 대규모 사이트를 위한 일괄 작업·에이전트 기반 모더레이션, 서명 기반 SSO, 법원 감독을 받지 않는 공급업체.

### 일정 및 무료 가져오기 제안

OpenWeb과 FastComments를 병행 운영해야 하는 퍼블리셔(SSO 통합 1개, 수십만 댓글) 기준으로 1~2주 정도를 계획하세요: 내보내기·첫 번째 가져오기 1~2일, SSO·템플릿 며칠, 병행 운영 창, 최종 가져오기·전환. FastComments는 이미 United Cloud와 같은 대규모 고객이 수백만 댓글을 처리하고 있습니다.

FastComments는 OpenWeb CSV 내보내기를 무료로 가져오며, 전환 기간 동안 병행 운영을 지원하고, 스레딩·사용자 매칭 등 마이그레이션 질문에 답변합니다. 엔터프라이즈 플랜은 SLA, 영업시간 내 1시간 이내 지원, 자체 클라우드 계정에 격리된 클라우드 배포 옵션을 포함합니다(<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). 계약 없이 시작하고 싶은 사이트는 Flex 사용량 기반 요금제를 이용할 수 있습니다.

<a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a>으로 내보내기 크기와 SSO 설정을 알려 주시면 플랜을 제안해 드립니다.

### 결론

오늘 바로 내보내기를 수행하세요. 나머지 마이그레이션은 기계적인 작업입니다: 동일한 게시물 ID가 URL ID가 되고, 동일한 사용자 이름이 SSO를 통해 댓글을 차지하며, 모더레이션 상태가 유지되고, 임베드는 바로 교체됩니다. FastComments와의 차이점은 위에 정리했으니, 이를 바탕으로 판단하시면 됩니다.

Cheers!{{/isPost}}

---