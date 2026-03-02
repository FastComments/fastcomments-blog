---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments는 이제 귀하의 강의를 위한 SSO, 스레드형 댓글 및 협업 채팅을 제공하는 전용 Moodle 플러그인을 갖추고 있습니다.
{{/unless}}

{{#isPost}}

### 새로운 기능

우리는 Moodle을 위한 공식 FastComments 플러그인을 발표하게 되어 기쁩니다. Moodle을 사용하고 있고 강의에 실시간 스레드형 댓글이나 협업 채팅을 추가하고 싶었다면, 이 플러그인이 간단하게 만들어줍니다. 이는 이전의 수동 PHP 접근 방식을 대체하며, 몇 분 안에 설치할 수 있는 적절한 Moodle 플러그인으로 당신의 기존 Moodle 사용자 계정과 통합됩니다. 이 플러그인은 Moodle 4.1 이상에서 작동하며, 소스 코드는 [GitHub](https://github.com/FastComments/fastcomments-moodle)에서 확인할 수 있습니다.

### 시작하기

설치하려면, [GitHub 저장소](https://github.com/FastComments/fastcomments-moodle)에서 ZIP 파일을 다운로드하고 `<moodle-root>/local/fastcomments`에 추출합니다. 그런 다음 사이트 관리자 계정으로 로그인하고 **사이트 관리 > 알림**을 방문하세요. Moodle이 새로운 플러그인을 감지하고 설치를 자동으로 실행합니다.

설치가 완료되면 **사이트 관리 > 플러그인 > 로컬 플러그인 > FastComments**로 이동하여 구성합니다. **테넌트 ID**(귀하의 FastComments 대시보드에서 확인 가능)와 Secure SSO를 사용하려면 **API 비밀**이 필요합니다. 우리는 이를 추천합니다.

GitHub에서의 수동 다운로드는 플러그인이 Moodle 플러그인 디렉토리에서 승인될 때까지 임시로 제공됩니다. 승인된 후에는 Moodle의 플러그인 설치 프로그램 내에서 직접 설치할 수 있습니다.

### 댓글 스타일

이 플러그인은 세 가지 댓글 스타일을 지원하므로 학생과 강의 구조에 가장 적합한 것을 선택할 수 있습니다.

**댓글** 모드는 페이지 콘텐츠 아래에 전체 댓글 위젯을 배치합니다. 학생들은 스레드형 답변, @멘션, 추천 및 비추천, 리치 텍스트 편집기, 페이지에서 새로운 댓글에 구독하기 위한 알림 벨을 이용할 수 있습니다.

<div class="text-center">
    <div class="sm">강의 페이지의 댓글</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**협업 채팅** 모드는 페이지 상단에 사용자가 텍스트를 선택하고 논의를 시작하도록 유도하는 바를 추가합니다. 강조된 텍스트는 콘텐츠에 고정되어 대화가 논의되고 있는 내용과 연결됩니다. 또한 온라인 사용자와 활성 논의 수를 보여줍니다. 이 모드는 하단 위젯을 표시하지 않습니다.

<div class="text-center">
    <div class="sm">선택된 텍스트에 고정된 협업 채팅</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**협업 채팅 + 댓글**은 두 가지 기능을 동시에 제공합니다. 학생들은 인라인 논의를 위해 텍스트를 강조할 수 있고 콘텐츠 아래에 있는 전체 댓글 위젯도 사용할 수 있습니다. 이는 빠른 인라인 피드백과 긴 스레드형 대화 모두를 원하는 강의에 적합합니다.

<div class="text-center">
    <div class="sm">페이지에서 활성화된 두 가지 댓글 스타일</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### 자동 SSO

이 플러그인은 세 가지 SSO 모드를 지원합니다. **보안 SSO**가 추천되는 옵션입니다. 이는 API 비밀을 사용하여 HMAC-SHA256으로 서버 측에서 사용자 신원을 서명하므로 클라이언트에서 자격 증명이 노출되지 않습니다. 보안 SSO를 사용하면 Moodle 관리자가 자동으로 FastComments 중재자로 동기화되므로 사이트 관리자가 추가 설정 없이 댓글을 조정할 수 있습니다. 사용자 아바타, 이름 및 이메일 주소는 모두 안전하게 전달됩니다.

**간단한 SSO**는 서명 없이 클라이언트 측에서 사용자 데이터(이름, 이메일, 아바타)를 전달합니다. 설정이 빠르지만 HMAC 접근 방식보다 덜 안전합니다. 마지막으로, **없음**은 SSO를 완전히 비활성화하므로 사용자가 익명으로 댓글을 작성할 수 있습니다.

### 사용자 알림 환경설정

학생들은 Moodle 프로필에서 직접 FastComments 알림 설정을 관리할 수 있습니다. **FastComments** 섹션에서 댓글에 대한 알림(누군가 자신의 댓글에 답장할 때 이메일 받기) 및 구독 알림(구독한 스레드에 대해 이메일 받기)을 전환할 수 있습니다. 이를 통해 모든 것을 한 곳에서 관리하고 학생이 받는 이메일 양을 조정할 수 있습니다.

### 결론적으로

Moodle 플러그인이 현재 사용 가능합니다. 전체 설정 방법에 대한 자세한 내용은 [Moodle 통합 가이드](https://docs.fastcomments.com/guide-installation-moodle.html)를 확인하시고, 소스 코드는 [GitHub](https://github.com/FastComments/fastcomments-moodle)에서 확인할 수 있습니다. 아래에 피드백이 있으시면 알려주세요!

감사합니다!

{{/isPost}}

---