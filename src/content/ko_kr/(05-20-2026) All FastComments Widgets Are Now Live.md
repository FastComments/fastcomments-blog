---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]모든 FastComments 위젯이 이제 실시간으로 제공됩니다[/postlink]

{{#unless isPost}}
모든 임베디드 FastComments 위젯(댓글 수, 최근 댓글, 인기 페이지, 최근 토론, 리뷰 요약, 플로팅 좋아요)은 이제 실시간으로 업데이트됩니다.
{{/unless}}

{{#isPost}}

### 새로운 기능

주 댓글 위젯은 첫날부터 실시간으로 제공되었습니다. 그러나 작은 임베디드 위젯들은 그렇지 않았습니다. 댓글 수, "최근 댓글" 또는 "인기 페이지" 위젯 등은 기꺼이 최대 1분 정도의 오래된 숫자를 보여주곤 했습니다.

이제 FastComments에서 제공하는 모든 위젯은 실시간 업데이트를 구독하고 즉시 새로 고침됩니다 :) 리뷰 요약도 포함됩니다!

### 어떤 위젯들인가요

모든 위젯입니다. 구체적으로는:

- `FastCommentsCommentCount` - 페이지별 댓글 수
- `FastCommentsCommentCountBulk` - 목록/아카이브 페이지에서 여러 댓글 수를 업데이트하는 대량 버전
- `FastCommentsRecentComments` 및 `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` 및 `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (플로팅 댓글 수 배지)
- `FastCommentsEmbedPageLikesFloating` (플로팅 좋아요 + 댓글 수)

### 무엇을 해야 하나요

아무것도 필요 없습니다. 이미 이러한 위젯 중 하나라도 임베드되어 있다면, 페이지를 한 번 새로 고침하세요. 다음에 댓글이 게시되거나 수정되거나 삭제되거나 누군가 페이지에 반응하면, 위젯이 업데이트됩니다.

이제 댓글 수 위젯의 `isLive: true` 설정 플래그는 불필요합니다 - 위젯은 항상 실시간입니다.

우리 CDN에서 위젯 JS를 로드하면, 새로운 버전을 사용하고 있으며, 우리 래퍼 라이브러리(React, Vue 등) 중 하나를 사용해도 마찬가지입니다.

### 좋아요도 실시간입니다

플로팅 좋아요 위젯도 이제 좋아요 및 반응 이벤트에 응답합니다. 페이지에서 하트를 클릭하면 다른 열린 탭에서 수치 변화가 보입니다.

### 작동 방식

모든 위젯은 단일 WebSocket 연결을 엽니다. 특정 페이지에 대한 데이터를 표시하는 위젯(`comment-count` (대량 포함), `reviews-summary`, `embed-page-likes-floating`)은 해당 페이지의 이벤트 스트림을 구독합니다. 테넌트를 넘어서는 데이터를 표시하는 위젯(`recent-comments`, `top-pages`, `recent-discussions`)은 해당 테넌트에서 변경 사항이 있을 때마다 신호를 발생시키는 슬림한 테넌트 별 펄스 스트림을 구독합니다.

결과적으로 유휴 위젯은 사실상 비용이 없고, 활성 위젯은 기본 변경 후 1초 또는 2초 이내에 새 숫자를 표시합니다.

### 캐시 일관성

이 위젯을 지원하는 서버 측 캐시는 60초 TTL에서 만료되었습니다. 이제 관련 댓글이나 반응 이벤트가 발생하는 순간 무효화되므로, 변경 후 첫 요청은 캐시된 버전이 아닌 새 데이터를 반환합니다.

### 결론

저희는 고객이 항상와 동일한 가격으로 이 변화를 즐길 수 있도록 테스트하고 최적화하는 데 시간을 낼 수 있어서 기쁩니다. 실시간 리뷰 요약은 특히 저희에게 멋진 차별점이라고 생각합니다.

아래에서 이상한 점을 발견하시면 알려주세요.

감사합니다!

{{/isPost}}