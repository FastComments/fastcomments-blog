---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments는 이제 SSO, 스레드형 댓글 및 협업 채팅을 제공하는 전용 Moodle 플러그인을 제공합니다.
{{/unless}}

{{#isPost}}

### 새로운 기능

Moodle을 위한 공식 FastComments 플러그인을 발표하게 되어 기쁩니다. Moodle을 사용하면서 라이브, 스레드형 댓글이나 협업 채팅을 수업에 추가하고 싶었던 분들에게 이 플러그인은 간편하게 사용이 가능합니다. 이전의 수동 PHP 접근 방식을 대체하며, 몇 분 안에 설치할 수 있는 적절한 Moodle 플러그인으로 기존의 Moodle 사용자 계정과 통합됩니다. 이 플러그인은 Moodle 4.1 이상에서 작동하며, 소스는 [GitHub](https://github.com/FastComments/fastcomments-moodle)에서 이용할 수 있습니다.

### 시작하기

설치하려면 [GitHub 저장소](https://github.com/FastComments/fastcomments-moodle)에서 ZIP 파일을 다운로드하고 `<moodle-root>/local/fastcomments`에 압축을 푸십시오. 그런 다음 사이트 관리자로 로그인하고 **사이트 관리 > 알림**으로 이동하십시오. Moodle은 새 플러그인을 감지하고 자동으로 설치를 실행합니다.

설치가 완료되면 **사이트 관리 > 플러그인 > 로컬 플러그인 > FastComments**로 이동하여 구성하십시오. **Tenant ID**(FastComments 대시보드에서 찾을 수 있음)와 **API 비밀**을 준비해야 하며, 이는 보안 SSO를 사용하려는 경우에 필요하며 권장합니다.

GitHub에서의 수동 다운로드는 플러그인이 Moodle 플러그인 디렉토리에서 승인될 때까지 임시로 제공되는 것입니다. 승인된 후에는 Moodle의 플러그인 설치 프로그램 내에서 직접 설치할 수 있게 됩니다.

### 댓글 스타일

이 플러그인은 세 가지 댓글 스타일을 지원하므로 학생과 수업 구조에 가장 적합한 것을 선택할 수 있습니다.

**댓글** 모드는 페이지 콘텐츠 아래에 전체 댓글 위젯을 배치합니다. 학생들은 스레드형 답글, @멘션, 업보팅 및 다운보팅, 리치 텍스트 편집기, 페이지의 새 댓글에 구독하기 위한 알림 벨을 이용할 수 있습니다.

<div class="text-center">
    <div class="sm">코스 페이지의 댓글</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**협업 채팅** 모드는 페이지 상단에 바를 추가하여 사용자가 텍스트를 선택하고 토론을 시작하도록 제공합니다. 강조된 텍스트는 콘텐츠에 고정되어 있어 대화가 논의되고 있는 내용에 계속 연결됩니다. 또한 온라인 사용자와 활성 토론 수를 표시합니다. 이 모드는 하단 위젯을 렌더링하지 않습니다.

<div class="text-center">
    <div class="sm">선택된 텍스트에 고정된 협업 채팅</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**협업 채팅 + 댓글**은 두 가지를 동시에 제공합니다. 학생들은 텍스트를 강조하여 인라인 토론을 할 수 있으며, 콘텐츠 아래의 전체 댓글 위젯을 사용할 수 있습니다. 이는 빠른 인라인 피드백과 긴 스레드형 대화를 모두 원하는 수업에 적합합니다.

<div class="text-center">
    <div class="sm">페이지에서 활성화된 두 가지 댓글 스타일</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### 바로 작동하는 SSO

이 플러그인은 세 가지 SSO 모드를 지원합니다. **보안 SSO**는 추천 옵션이며, 사용자 신원은 API 비밀을 사용하여 HMAC-SHA256 방식으로 서버 측에서 서명되므로 자격 증명이 클라이언트에 노출되지 않습니다. 보안 SSO를 사용하면 Moodle 관리자가 자동으로 FastComments 중재자로 동기화되어 사이트 관리자는 추가 설정 없이 댓글을 관리할 수 있습니다. 사용자 아바타, 이름 및 이메일 주소가 모두 안전하게 전달됩니다.

**간단한 SSO**는 서명 없이 클라이언트 측에서 사용자 데이터를(이름, 이메일, 아바타) 전달합니다. 설정이 빠르지만 HMAC 접근 방식보다는 안전성이 떨어집니다. 마지막으로, **없음**은 SSO를 완전히 비활성화하여 사용자가 익명으로 댓글을 달 수 있게 합니다.

### 사용자 알림 설정

학생들은 Moodle 프로필에서 FastComments 알림 설정을 직접 관리할 수 있습니다. **FastComments** 섹션에서 답글 알림(누군가 자신의 댓글에 답글을 달 때 이메일 받기) 및 구독 알림(구독한 스레드에 대한 이메일 받기)을 전환할 수 있습니다. 이를 통해 모든 것을 한 곳에 모아두고 학생들에게 이메일 수신량을 조절할 수 있는 권한을 부여합니다.

### 결론

Moodle 플러그인은 지금 이용 가능합니다. 전체 설치 안내는 [Moodle 통합 가이드](https://docs.fastcomments.com/guide-installation-moodle.html)를 확인하시고, 소스 코드는 [GitHub](https://github.com/FastComments/fastcomments-moodle)에서 확인하십시오. 피드백이 있으시면 아래에 남겨주세요!

건배!

{{/isPost}}

---