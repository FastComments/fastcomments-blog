---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]이제 UI에서 DKIM 구성 가능[/postlink]

{{#unless isPost}}
FastComments는 이제 DKIM 구성을 위한 UI를 제공하여 API를 사용하지 않고도 이메일 배송 비율을 개선할 수 있도록 합니다.
{{/unless}}

{{#isPost}}

### 새로운 소식

커스텀 이메일 도메인의 DKIM 설정이 더욱 쉬워졌습니다. 이전에는 DKIM 구성에
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>를 직접 사용해야 했습니다. 이제 FastComments 관리 UI에서 바로 DKIM을 구성할 수 있습니다.

### DKIM이 중요한 이유

FastComments가 귀하를 대신하여 전송하는 이메일의 From Domain을 사용자 정의할 때, 이메일 제공자는 해당 이메일이 정당한 것인지 확인해야 합니다. DKIM(도메인키 식별 메일)은 이를 돕는 주요 인증 메커니즘 중 하나입니다. 적절한 DKIM 구성 없이 귀하의 도메인을 대신하여 전송된 이메일은 스팸 폴더로 갈 가능성이 높아집니다.

### 설정 방법

<a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">내 도메인</a> 페이지로 이동하여 구성할 도메인에 대해 "고급 설정 표시"를 클릭합니다. 도메인 이름, 키 선택기 및 개인 키를 입력할 수 있는 DKIM 설정이 표시됩니다.

저장한 후, DKIM 구성은 해당 도메인에서 전송되는 모든 이메일에 적용됩니다.

### API는 여전히 작동합니다

DKIM 구성을 프로그래밍 방식으로 관리하려면,
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>가 이전처럼 계속 작동합니다.

### 결론

이것이 귀하의 사용자들이 FastComments가 귀하를 대신하여 전송하는 이메일을 더 쉽게 받을 수 있도록 도와주기를 바랍니다. 질문이 있으시면 아래에 알려주세요.

감사합니다!

{{/isPost}}

---