---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]D2L Brightspace 코스에 댓글 추가하기[/postlink]

{{#unless isPost}}
FastComments는 이제 LTI 1.3 동적 등록을 통해 D2L Brightspace에 한 번의 단계로 설치되며, 모든 코스 단위에 대해 자동 SSO, 스레드 댓글, 협업 채팅을 제공합니다.
{{/unless}}

{{#isPost}}

### 새 소식

FastComments는 이제 IMS LTI 1.3 Advantage 표준을 통해 D2L Brightspace를 지원하며, 여기에는 동적 등록이 포함됩니다.
즉, 설치할 플러그인이나 조정할 키 교환, 코스별 연결이 필요하지 않습니다. Brightspace 관리자는 LTI Advantage 등록 화면에 URL을 하나 붙여넣고, FastComments와 Brightspace가 자동으로 핸드셰이크를 완료합니다. 강사는 다른 외부 도구를 추가하는 것과 동일한 방식으로 FastComments를 모든 단위에 추가하고, 학생들은 코스 콘텐츠에 스레드 댓글이 삽입된 것을 보게 됩니다.

<div class="text-center">
    <div class="sm">Brightspace 단위의 주제로 삽입된 스레드 댓글</div>
    <img src="images/d2l-course-comments.png" alt="D2L Brightspace 단위 내에서 실행되는 FastComments" title="Brightspace 단위의 FastComments" />
</div>

### 시작하기

FastComments 대시보드에서 [LTI 1.3 구성 페이지](https://fastcomments.com/auth/my-account/lti-config)를 열고,
플랫폼 드롭다운에서 **D2L Brightspace**를 선택한 후 **URL 생성**을 클릭합니다. 30분 동안 유효한 단일 사용 등록 URL을 받습니다.

Brightspace에서 관리자는 **관리 도구 > 확장성 관리 > LTI Advantage > 도구 등록**을 열고,
URL을 **도구 초기화 등록 엔드포인트** 필드에 붙여넣고 제출합니다. Brightspace는 FastComments와 등록 핸드셰이크를 수행하고,
서명 키를 교환한 후 도구 항목을 생성합니다. 완료되면 팝업이 자동으로 닫힙니다.

등록 후 관리자는 도구를 활성화하고 접근이 허용된 조직 단위에 범위가 설정된 배포를 만듭니다.
그 이후로 FastComments는 모든 코스의 콘텐츠 선택기에서 **기존 추가** 아래에 표시됩니다.

### 코스에 추가하기

어떤 코스 단위 내에서도 강사는 **기존 추가**를 클릭하고, 활동 목록에서 **FastComments**를 선택하면
도구가 단위의 주제로 배치됩니다. 주제 이름 변경, 단위 내 재배치, 특정 그룹 또는 공개 조건으로 제한하기,
가시성 전환 등은 모두 стандарт Brightspace 컨트롤을 사용합니다. 강사가 배워야 할 별도의 FastComments 설정 화면은 없습니다.

인라인 삽입을 위해 동일한 FastComments 도구는 Brightspace HTML 편집기의 **자료 삽입** 대화 상자에서 **LTI Advantage**를 통해
이용할 수 있습니다. 이는 LTI 딥 링크 흐름을 사용하여 독서, 퀴즈 지침 또는 기타 HTML 주제 바로 안에 댓글 스레드를 삽입하므로,
논의가 그 내용 옆에 위치하게 됩니다.

### 자동 SSO

학생들은 로그인 화면을 절대 보지 않습니다. LTI 1.3 출시는 학생의 Brightspace 신원(`sub`, `name`, `email`, 및 `picture`)을
Brightspace의 개인 키로 서명하여 전달합니다. FastComments는 서명을 Brightspace의 공개된 JWKS와 대조하여 확인하고,
사용자를 위한 안전한 SSO 세션을 생성하며 댓글 위젯을 렌더링합니다. 댓글은 학생의 Brightspace 계정에 속하며,
강사도 자신의 Brightspace 신원을 사용하여 댓글을 조정합니다.

역할 매핑은 자동으로 수행됩니다. Brightspace **관리자** 사용자들은 FastComments 관리자로, **강사** 사용자들은
모더레이터로, 나머지 모든 사용자는 일반 댓글 작성자로 처리됩니다. FastComments 측에서 유지해야 할 별도의 사용자 목록은 없으며,
Brightspace에서 말하는 내용을 따릅니다.

### 스레드 범위 설정

각 댓글 스레드는 Brightspace 호스트, 코스 및 리소스 링크의 세 가지 요소에 바인딩됩니다. 즉,
"독서 반영" 주제를 사용하는 두 개의 코스는 각기 다른 토론을 갖습니다. 강사가 같은 코스에 FastComments를 두 번 추가하는 경우
(예를 들어, 한 번은 단위 주제로, 한 번은 HTML 페이지 안에 인라인 삽입으로)에도 마찬가지로, 각 배치는
자신만의 스레드가 됩니다.

호스트 부분은 의도적으로 스레드 식별자의 일부입니다. 귀하의 기관이 하나의 FastComments 계정 아래 여러 Brightspace 인스턴스를 운영하는 경우,
코스 ID가 충돌할 때에도 대화는 각 인스턴스에 고립된 상태로 유지됩니다.

### 결론

D2L Brightspace를 운영하고 있다면, 오후 내에 FastComments를 라이브로 실행할 수 있습니다: URL을 생성하고,
Brightspace에 붙여넣고, 강사들이 도구를 단위에 추가하도록 하면 됩니다. 문제 해결 및 페이지별 스크린샷을 포함한
전체 단계별 설정은 [LTI 1.3 설치 가이드](https://docs.fastcomments.com/guide-installation-lti-1p3.html)를 참조하십시오.
같은 통합은 Moodle, Blackboard, Sakai, Schoology 및 기타 모든 LTI 1.3 Advantage 플랫폼도 포함하지만,
Brightspace는 우리의 파일럿 목표였으며, 해당 흐름은 그곳에서 매우 안정적입니다.

감사합니다!

{{/isPost}}

---