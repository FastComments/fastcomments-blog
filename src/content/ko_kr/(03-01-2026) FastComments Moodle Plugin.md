---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments는 이제 SSO, 스레드된 댓글 및 협업 채팅 기능을 갖춘 전용 Moodle 플러그인을 제공합니다.
{{/unless}}

{{#isPost}}

### 새로운 기능

Moodle을 위한 공식 FastComments 플러그인을 발표하게 되어 기쁩니다. Moodle을 사용하고 있으며, 라이브 스레드 댓글 또는 협업 채팅을 수업에 추가하고 싶었다면, 이 플러그인이 간편하게 만들어 줍니다. 이전의 수동 PHP 방식 대신 설치가 몇 분 만에 완료되고 기존 Moodle 사용자 계정과 통합되는 적절한 Moodle 플러그인으로 대체됩니다. 이 플러그인은 Moodle 4.1 이상과 호환되며, 소스는 [GitHub](https://github.com/FastComments/fastcomments-moodle)에서 확인할 수 있습니다.

### 시작하기

설치를 위해 [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments)에서 플러그인을 다운로드하고 Moodle 사이트의 플러그인 설치 관리자를 통해 설치합니다. 또는 플러그인을 다운로드하여 `<moodle-root>/local/fastcomments`에 압축을 풀고, 사이트 관리자로 로그인한 뒤 **사이트 관리 > 알림**을 방문합니다. Moodle은 새 플러그인을 감지하고 자동으로 설치를 진행합니다.

설치가 완료되면 **사이트 관리 > 플러그인 > 로컬 플러그인 > FastComments**로 이동하여 설정합니다. **Tenant ID**(FastComments 대시보드에서 찾을 수 있음)와 Secure SSO를 사용하려면 **API Secret**이 필요합니다. Secure SSO 사용을 권장합니다.

### 댓글 스타일

이 플러그인은 세 가지 댓글 스타일을 지원하므로 학생과 수업 구조에 가장 적합한 것을 선택할 수 있습니다.

**댓글** 모드는 페이지 콘텐츠 아래에 전체 댓글 위젯을 배치합니다. 학생들은 스레드에 대한 답글, @멘션, 찬반 투표, 리치 텍스트 편집기 및 페이지의 새로운 댓글에 구독하기 위한 알림 벨을 받을 수 있습니다.

<div class="text-center">
    <div class="sm">코스 페이지의 댓글</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**협업 채팅** 모드는 페이지 상단에 사용자가 텍스트를 선택하고 논의를 시작하도록 유도하는 바를 추가합니다. 강조된 텍스트는 콘텐츠에 연결되어 있어, 논의되고 있는 내용에 대한 대화가 지속적으로 연결되어 있습니다. 이 모드는 온라인 사용자와 활성화된 논의 수를 표시합니다. 하단 위젯은 표시되지 않습니다.

<div class="text-center">
    <div class="sm">선택된 텍스트에 연결된 협업 채팅</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**협업 채팅 + 댓글**은 두 가지를 동시에 제공합니다. 학생들은 인라인 논의를 위해 텍스트를 강조할 수 있으며, 콘텐츠 아래에 전체 댓글 위젯을 사용할 수 있습니다. 이는 빠른 인라인 피드백과 긴 스레드 대화를 모두 원하는 과정에 적합합니다.

<div class="text-center">
    <div class="sm">페이지에서 활성화된 두 가지 댓글 스타일</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### 자동 SSO

이 플러그인은 세 가지 SSO 모드를 지원합니다. **Secure SSO**가 추천 옵션입니다. 이 옵션은 API Secret을 사용하여 HMAC-SHA256으로 사용자 신원을 서버 측에서 서명하므로, 클라이언트에서 자격 증명이 노출되지 않습니다. Secure SSO를 사용하면 Moodle 관리자들이 자동으로 FastComments 중재자로 동기화되므로, 사이트 관리자는 추가 설정 없이 댓글을 중재할 수 있습니다. 사용자 아바타, 이름 및 이메일 주소는 모두 안전하게 전송됩니다.

**Simple SSO**는 사용자 데이터(이름, 이메일, 아바타)를 서명 없이 클라이언트 측에서 전송합니다. 설정이 빠르지만 HMAC 접근 방식보다 보안이 떨어집니다. 마지막으로, **None**은 SSO를 완전히 비활성화하여 사용자가 익명으로 댓글을 달 수 있도록 합니다.

### 사용자 알림 기본 설정

학생들은 Moodle 프로필에서 FastComments 알림 설정을 직접 관리할 수 있습니다. **FastComments** 섹션 아래에서 댓글에 대한 답글 알림(댓글에 대한 답글이 있을 때 이메일을 받기)과 구독 알림(구독한 스레드에 대한 이메일을 받기)을 전환할 수 있습니다. 이를 통해 모든 것을 한 곳에서 관리할 수 있고, 학생들이 받는 이메일 양을 조절할 수 있습니다.

### 결론

Moodle 플러그인이 지금 사용 가능합니다. 전체 설정 안내서는 [Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html)에서 확인할 수 있으며, 소스 코드는 [GitHub](https://github.com/FastComments/fastcomments-moodle)에서 확인할 수 있습니다. 피드백이 있으시면 아래에 남겨 주세요!

감사합니다!

{{/isPost}}

---