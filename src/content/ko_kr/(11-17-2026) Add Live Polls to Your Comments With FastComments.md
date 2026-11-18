[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]FastComments와 함께 댓글에 실시간 설문 추가[/postlink]

{{#unless isPost}}
댓글에 이제 실시간 설문이 있습니다! 독자들은 스레드 자체에서 투표하고, 결과가 페이지에 있는 모든 사람에게 실시간으로 업데이트되며, 설문은 웹 위젯과 iOS, Android, React Native SDK에서도 작동합니다.
{{/unless}}

{{#isPost}}

### 새 기능

이번 릴리스에서는 **Live Polls**(실시간 설문)을 추가했습니다. 설문은 댓글에 첨부되어 그 안에 표시됩니다. 독자들은 스레드를 떠나지 않고 옵션을 클릭해 투표하고, 투표가 들어올 때마다 페이지를 보는 모든 사람에게 결과가 실시간으로 업데이트됩니다. 새로 고침이 필요 없으며, 누구도 수동으로 답글을 집계할 필요가 없습니다.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

설문이 댓글이기 때문에 대화가 그에 붙어 있습니다. 사람들은 투표하고, 그 이유를 댓글로 남깁니다.

### 설문 만들기

설문이 활성화되면 댓글 편집기에 설문 버튼이 나타납니다. 버튼을 클릭하면 텍스트 입력 아래에 설문 편집기가 열리며, 여기서 다음을 설정합니다:

- **질문**: 최대 200자.
- **옵션**: 2개에서 10개까지.
- **설문 종료 시점**: 절대, 혹은 1일, 3일, 1주 후 중 선택. 종료된 설문은 최종 결과를 표시하고 투표를 받지 않습니다.
- **프라이버시**: 익명, 관리자에게만 표시, 공개.
- **결과 보기 위해 투표 필요**: 투표하거나 설문이 종료될 때까지 각 사용자는 결과를 볼 수 없습니다.

그런 다음 평소처럼 댓글을 작성하고 게시하면 됩니다. 설문은 새 댓글과 답글 모두에서 작동합니다.

### 투표

각 사용자는 설문당 한 번의 투표 기회를 가지며, 설문이 열려 있는 동안 투표를 변경할 수 있습니다. 설문이 먼저 투표를 요구하지 않는 한, 독자들은 **Show results**(결과 보기)를 클릭해 선택하기 전에 현재 상황을 확인할 수 있습니다.

프라이버시는 설문마다 설정되며 옵션 바로 아래에 표시되어, 투표자는 투표하기 전에 누가 자신의 투표를 볼 수 있는지 알 수 있습니다. 익명 설문(기본값)은 총합만 표시하고, 관리자조차도 누가 어떤 옵션에 투표했는지 볼 수 없습니다. 관리자에게 보이는 설문에서는 관리자와 모더레이터가 **See who voted**(투표자 보기)를 열 수 있습니다. 공개 설문에서는 누구나 볼 수 있습니다.

### 설문 활성화

설문은 기본적으로 비활성화되어 있습니다. <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>을 열고, **Enable Polls**를 체크한 뒤, 누가 설문을 만들 수 있는지 선택합니다:

- **Admins/Moderators Only** (기본값): 직접 설문을 운영하고 싶을 때.
- **Everyone**: 커뮤니티 전체가 설문을 만들 수 있게 할 때.

투표는 기본적으로 로그인한 사용자만 가능합니다. **Allow Anonymous Poll Votes**를 체크하면 누구나 투표할 수 있습니다. 공정성을 위해 익명 투표는 IP 주소당 설문당 시간당 최대 세 번으로 제한됩니다.

다른 커스터마이징 규칙과 마찬가지로, 이 설정은 전체 사이트, 도메인, 혹은 개별 페이지에 적용할 수 있습니다.

### 알림

설문 작성자는 응답이 들어올 때마다 알림을 받습니다: 다수의 사용자가 동시에 투표하면 알림이 그룹화되고, 설문에 그날 새로운 응답이 있을 경우 일일 이메일이 전송됩니다. 첫 번째 투표만이 응답으로 간주되므로, 사용자가 의견을 바꾸어도 추가 알림이 전송되지 않습니다. 알림은 설문의 프라이버시 설정을 따르며, 익명 설문의 경우 새로운 응답 수만 표시되고, 누가 투표했는지는 절대 알려지지 않습니다.

### 네이티브 모바일 SDK

설문은 웹 위젯에만 있는 것이 아닙니다. 네이티브 SDK는 설문 카드, 설문 편집기, 실시간 결과, 투표자 목록을 실제 네이티브 컴포넌트로 렌더링하며, 대시보드의 동일한 위젯 설정을 읽어옵니다. 설문을 한 번 활성화하면 사이트와 앱 모두에 표시됩니다.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, Swift Package Manager를 통해.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, `com.fastcomments:android-sdk:2.1.0` 형태로.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, NPM에서.

iOS와 Android SDK는 자체 UI에서 설문을 게시할 수도 있습니다. iOS 예시는 다음과 같습니다:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

iOS와 Android용 <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">README</a>, 그리고 <a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native changelog</a>에서는 세부 사항을 다루며, 설문 색상을 앱에 맞게 재스타일링하는 방법도 포함합니다.

### API

설문은 REST API에서도 지원됩니다. `poll`을 `POST /api/v1/comments`에 전달하여 설문과 댓글을 동시에 생성할 수 있으며, 이후 `/api/v1/polls/:commentId`를 사용해 추가, 수정, 종료, 삭제가 가능합니다. 투표는 `/api/v1/poll-votes`로 목록 조회, 투표, 삭제가 가능해 결과를 스프레드시트나 자체 CMS로 내보내기가 쉽습니다. API는 위젯과 동일한 설정을 따르며, 익명 설문의 개별 투표는 API를 통해 읽을 수 없습니다.

### 오버헤드

설문 코드가 활성화되지 않으면 로드되지 않으므로, 다른 사용자에게 댓글 위젯의 속도를 저하시키지 않습니다.

### 문서

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">Live Polls 가이드</a>에서는 설문 활성화, 설문 생성 권한, 익명 투표, 투표자 프라이버시, 알림, API 등에 대해 다룹니다.

### 시도해 보기

<a href="https://fastcomments.com/product/live-polls" target="_blank">Live Polls 데모</a>에 실시간 설문이 있습니다. 설문에 투표하고, 두 번째 탭에서 페이지를 열어 결과가 변하는 것을 확인해 보세요. 또한 직접 설문을 게시할 수도 있습니다.

### 결론

스레드가 인원 파악으로 변해버린다면, 설문을 시도해 보고 아래에 다음에 보고 싶은 기능을 알려 주세요.

감사합니다!

{{/isPost}}

---