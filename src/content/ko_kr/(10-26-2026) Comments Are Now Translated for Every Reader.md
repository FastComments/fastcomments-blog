[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]댓글이 이제 모든 독자를 위해 번역됩니다[/postlink]

{{#unless isPost}}
FastComments는 이제 위젯뿐만 아니라 실제 댓글 자체를 번역할 수 있습니다. 사이트별 또는 페이지별로 자동 또는 번역 버튼을 사용해 활성화하면, 모든 독자는 원본을 한 번 클릭하면 볼 수 있는 자신의 언어로 대화를 확인할 수 있습니다.
{{/unless}}

{{#isPost}}

### 새로운 소식

FastComments는 이미 28개 언어로 번역되어 있어 버튼, 라벨, 이메일은 독자의 언어로 표시됩니다. 하지만 댓글은 번역되지 않았습니다. 영어 페이지에 있는 스페인어 댓글은 스페인어 그대로였으며, 이를 읽지 못한 사람은 스크롤을 넘겼습니다.

이번 릴리스에서는 **Comment Translation** 기능이 추가되었습니다. 이 기능이 켜져 있으면, 독자의 언어와 다른 언어로 작성된 댓글이 번역되어 표시되고, 아래에 원본이 어디에서 왔는지 알려주는 작은 라인과 실제로 작성된 내용을 확인할 수 있는 **Show original** 링크가 표시됩니다.

<img src="images/fc-comment-translation-auto.png" alt="영어 독자가 스페인어 댓글이 번역된 것을 보고, 'Translated from Spanish' 라인과 그 아래에 'Show original' 링크가 있는 모습" title="자동 댓글 번역" class="lozad" />

### 두 가지 모드

**Automatic**은 사전에 번역합니다. 다른 언어로 된 모든 댓글이 번역된 상태로 도착하고, 독자는 원본을 원할 경우 토글할 수 있습니다. 이는 실제로 두 개 이상의 언어로 글을 쓰며 모든 사람이 같은 대화를 읽기를 원하는 커뮤니티에 적합한 모드입니다.

**Manual**은 각 댓글에 **Translate** 링크를 추가하고 클릭될 때까지 아무 작업도 하지 않습니다. 독자는 번역할 가치가 있는 댓글을 직접 선택하며, 아무도 요청하지 않은 댓글에 대해서는 비용이 발생하지 않습니다. 이미 독자의 언어로 된 댓글은 번역을 시도하는 대신 그대로임을 표시합니다.

<img src="images/fc-comment-translation-manual.png" alt="수동 모드에서는 스페인어 댓글이 클릭 시 번역되고, 영어 댓글은 이미 독자의 언어임을 표시합니다" title="수동 댓글 번역" class="lozad" />

두 모드 모두에서 독자의 언어는 위젯이 현재 표시하고 있는 언어와 동일합니다: 커스터마이징 규칙에서 설정한 **Locale / Language** 또는 설정하지 않은 경우 방문자의 브라우저 언어입니다. 방문자가 설치하거나 가입하거나 설정할 것이 전혀 없습니다. 위젯이 페이지에 삽입되었든, Google Sites와 같은 사이트 빌더 안에 있든, 혹은 독립형 FastComments 댓글 페이지에 있든 동일하게 작동합니다.

### 활성화 방법

Open your <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">위젯 커스터마이징</a>,
find **Comment Translation** right under **Locale / Language**, and pick Automatic or Manual. It's off by default.

커스터마이징 규칙에 속해 있기 때문에 원하는 범위로 적용할 수 있습니다: 전체 사이트, 하나의 도메인, 혹은 청중이 혼합된 것으로 알고 있는 단일 페이지 등. 이는 서버 측 설정이므로 위젯의 JavaScript 구성만으로는 켤 수 없습니다.

### 비용

번역은 언어 모델에 의해 생성되며 LLM 토큰으로 청구됩니다. 이는 [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html)와 동일한 기준입니다. 모든 플랜에서 이 기능을 활성화할 수 있습니다.

각 댓글은 언어당 한 번 번역되며, 번역 결과는 댓글과 함께 저장됩니다. 1,000명의 스페인어 독자가 동일한 영어 스레드를 열어도 번역 작업은 한 번만 수행됩니다. 일반적인 댓글은 수백 토큰 정도이며, Flex 요금 기준으로 약 0.5센트 정도입니다. 작성자나 관리자가 댓글을 편집하면 저장된 번역은 폐기되고 다음 조회 시 새롭게 번역됩니다. 따라서 더 이상 존재하지 않는 텍스트의 번역을 읽는 일은 없습니다.

수동 모드는 누군가 클릭하기 전까지 비용이 발생하지 않습니다.

### 세부 사항

번역된 텍스트는 누군가 직접 입력한 댓글과 동일하게 취급됩니다. 원본과 동일한 정화 및 링크 규칙을 거치므로 번역이 원본에 없던 내용을 포함할 수 없습니다. 멘션과 해시태그는 포맷을 유지합니다.

매우 길거나 언어를 확실히 감지할 수 없는 댓글은 추측하지 않고 원본 그대로 유지됩니다. 번역된 댓글 아래의 언어 라인 역시 독자의 언어로 표시되므로, 영어 댓글을 보는 스페인어 독자는 "Traducido del inglés"와 "Mostrar original"을 보게 됩니다.

### 오버헤드

이 새로운 기능의 코드는 활성화된 경우에만 로드되므로, 다른 사용자들의 댓글 위젯 속도를 저하시키지 않습니다.

### 문서

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Comment Translation 가이드</a>
covers both modes, the rule setting, and billing.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">locale 가이드</a>
covers how the widget's language is chosen in the first place.

### 결론

이 사례는 주민들이 영어와 스페인어로 댓글을 다는 지역 협회에서 나온 것으로, 두 그룹이 브라우저 확장 프로그램을 설치하거나 회원가입을 요구받지 않고도 같은 스레드를 읽기를 원했습니다.

여러 언어로 글을 쓰는 커뮤니티를 운영한다면, 이 기능을 활성화하고 아래에 번역 결과에 대한 의견을 알려 주세요.

감사합니다!

{{/isPost}}

---