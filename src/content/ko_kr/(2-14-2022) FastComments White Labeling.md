---
[category:API & Development]

###### [postdate]
# [postlink]FastComments 화이트 레이블링[/postlink]

{{#unless isPost}}
화이트 레이블링은 완전한 API 통합 및 자동화 도구와 함께 FastComments에 도입됩니다.
{{/unless}}

{{#isPost}}

## 새로운 소식

FastComments는 이제 화이트 레이블링을 통해 다른 애플리케이션 및 서드파티 리셀러와 통합할 수 있습니다. 화이트 레이블링을 통해 FastComments 계정(테넌트라 불림), 사용자, 관리자 등을 생성할 수 있습니다.

이제 서드파티와의 통합을 자동화하기 위한 [종합 API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api)를 제공합니다.

이제 API를 통해 다음을 수행할 수 있습니다:

- 귀하의 테넌트에 의해 관리되는 고객(자녀 테넌트)을 생성합니다.
- 고객에게 제공되는 패키지 및 청구 처리 방법을 관리합니다.
- 관리하는 테넌트에서 사용자 추가 및 관리합니다.
- 관리하는 테넌트에서 관리자 추가 및 관리합니다.
- 관리자를 초대하고 테넌트 사용자에게 로그인 링크를 보냅니다.

## 청구

청구에는 두 가지 옵션이 있습니다:

1. FastComments Flex를 통해 자녀 테넌트의 사용량은 자동으로 부모 테넌트에 청구됩니다. 이는 [청구 분석 페이지](https://fastcomments.com/auth/my-account/analytics/billing)를 통해 모니터링할 수 있습니다.
2. FastComments Pro를 통해 고정된 월 요금으로 고정된 수의 자녀 테넌트를 생성할 수 있습니다.

## 비브랜딩

관리되는 테넌트는 비브랜딩을 활성화할 수 있으며, 이 경우 댓글 위젯에서 우리의 로고가 제거됩니다.

## 화이트 레이블링 받는 방법

현재 FastComments Flex 및 Pro 플랜은 화이트 레이블링 API에 접근할 수 있는 옵션을 제공합니다.

## 스크립트 및 예제

사용자를 포함하는 테넌트를 설정하기 위해 API를 사용하는 예제 스크립트는 [여기에서 확인할 수 있습니다](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## 종합 검증

각 API 리소스는 포괄적인 검증 및 제한을 포함하고 있으며, 유용한 오류 메시지를 통해 올바르게 사용하는 데 도움을 줍니다.

<div class="code"><div class="title">자세한 오류 예제</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "해당 ID를 가진 사용자가 이 테넌트에 존재하지 않습니다. 사용자를 먼저 생성한 후 관리자로 지정하십시오.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## 기타 사용 사례

[테넌트 사용자](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) 및 [관리자](https://docs.fastcomments.com/guide-api.html#moderator-structure) API를 사용하여 화이트 레이블링에 관계없이 귀하의 테넌트에서 이러한 리소스를 추가하고 관리할 수 있습니다.

## 문서

화이트 레이블링 및 API 사용 방법에 대한 전체 문서는 [여기에서 확인할 수 있습니다](https://docs.fastcomments.com/guide-white-labeling.html).

## 결론

이 업데이트와 해당 문서가 유용했다고 생각합니다. 통합을 즐기십시오!

{{/isPost}}