---
[category:Security]

###### [postdate]
# [postlink]감사 로그 공개[/postlink]

{{#unless isPost}}FastComments는 이제 플랫폼을 통해 이루어진 모든 수정 사항에 대한 자세한 로그를 제공합니다.{{/unless}}

{{#isPost}}

### 새로운 기능

3월부터 FastComments는 Pro 플랜 및 모든 기존 기업 고객을 위한 자세한 감사 기능을 포함하게 되었습니다.

데이터 접근, 댓글 수정 또는 사용자 차단 해제 등 모든 관리 작업이 감사 로그에 기록되고 인덱싱됩니다.

### 사용 방법

감사 로그는 `Manage Data`로 가서 `Audit Logs`를 클릭하여 접근할 수 있습니다. 직접 링크는 [여기](https://fastcomments.com/auth/my-account/manage-data/audit-logs)에 있습니다.

시작하면 다음과 같은 페이지를 보게 됩니다:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

여기에서 사용자 이름, IP 주소, 작업 유형 또는 리소스별로 검색할 수 있습니다.

예를 들어, 리소스별로 필터링:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

감사 로그의 항목 세부 정보로 들어가 변경된 관련 객체도 볼 수 있습니다.

예를 들어, 사용자를 차단하는 항목으로 들어가 볼 수 있습니다:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

여기에서 누구(사용자 이름 `winrid`)가 사용자를 차단했는지 볼 수 있습니다. 이는 영구 차단이며, 차단된 사용자 ID 및 이메일과 함께 차단 사유도 확인할 수 있습니다.

차단을 생성한 IP를 확인할 수 있지만, 원래 댓글 작성자의 IP는 개인 정보 보호를 위해 고의로 생략되어 있습니다.

`winrid`의 모든 이벤트를 보려면, 사용자 이름 옆의 필터 아이콘을 클릭하면 됩니다.

### 접근 제한

감사 로그의 데이터는 `Manage Data` 권한을 가진 사용자만 접근할 수 있습니다.

### 보존 기간

감사 로그의 모든 항목은 2년 동안 보존됩니다. 그러나 계정이 삭제되면 감사 로그는 삭제됩니다.

### API 접근

[감사 로그 API에 대한 문서는 여기 있습니다.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) 감사 로그는 사용 사례에 따라 정렬 및 페이지 매김할 수 있다는 것을 알 수 있습니다.

### 기존 고객

Pro 또는 해당 플랜에 가입하신 경우, 감사 로그가 자동으로 활성화되었습니다! 접근 권한을 원하시면 지원 담당자에게 연락해 주세요.

### 생략된 항목

생략되는 유일한 변경 유형은 실제 댓글 및 그 투표입니다. 이는 고객이 감사 시 관리 측면에 더 관심이 있음을 발견했기 때문이며, 사람들이 댓글을 단 내용을 감사하는 것에는 관심이 없기 때문입니다. 이러한 유형의 작업은 로그에 상당한 소음을 추가합니다.

하지만, 이것이 요구 사항이라면 연락해 주시면 이를 활성화하는 방안에 대해 논의할 수 있습니다.

### 결론

이 영역이 유용하고 UI가 사용하기 쉬우며 API가 빠르기를 바랍니다.

건배!

{{/isPost}}