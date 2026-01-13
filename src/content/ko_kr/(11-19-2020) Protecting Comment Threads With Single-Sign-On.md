---
[category:Security]

###### [postdate]
# [postlink]싱글 사인온으로 댓글 스레드 보호하기[/postlink]

{{#unless isPost}}
댓글 스레드를 공개로 고려하지 않나요? 인증을 위해 SSO를 설정했나요? 이 내용이 당신에게 해당될 수 있습니다.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> 이 글에는 기술적인 용어가 포함되어 있습니다

#### 소개

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(자세한 내용)</a>는 사용자에게 다른 플랫폼에 로그인하지 않고 댓글을 달 수 있는 방법을 제공합니다.

그러나 이것만으로는 댓글 스레드를 안전하게 보호할 수 없습니다. 기본적으로 댓글 데이터는 공개적으로 이용 가능한 정보이기 때문에 페이지를 볼 수 있는 누구나 댓글을 볼 수 있습니다. 그러나 이번 버전에서는 이것이 변경됩니다.

#### 코드 없는 설정

SSO가 설정된 상태에서 댓글 스레드를 보기 및 상호작용하지 못하도록 하기 위해 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">사용자 지정 규칙</a>을 생성할 수 있습니다.

그렇게 하려면 SSO를 검색하면 이 옵션을 찾을 수 있습니다:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="SSO를 통한 댓글 잠금을 위한 구성 옵션" alt="SSO를 통한 댓글 잠금을 위한 구성 옵션" class="lozad" />
</div>

활성화하고 사용자 지정 규칙을 저장하세요.

#### 특정 도메인 또는 페이지만 보호하기

특정 도메인이나 페이지만 보호하려면 사용자 지정 규칙을 그렇게 구성하면 됩니다.

사용자 지정 UI 상단에는 두 개의 입력란인 도메인과 URL ID가 있습니다.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="페이지 또는 도메인별 구성 옵션" alt="페이지 또는 도메인별 구성 옵션" class="lozad" />
</div>

특정 도메인만 보호하려면 "domain" 필드에 해당 도메인을 입력하세요.

특정 페이지를 보호하려면 "URL ID" 필드에 페이지 URL을 입력하세요. FastComments와의 사용자 지정 통합이 있는 경우 여기서 URL 대신 ID 유형을 입력할 수 있습니다.

#### 읽기 이상의 보호

이 옵션을 활성화하면 사용자가 SSO를 통해 로그인하지 않는 한 해당 페이지나 도메인에서 댓글을 달 수 없도록 보호됩니다.

#### 주의사항

사용자가 SSO 통합 이전에 댓글을 작성한 경우, SSO 통합을 통해 로그인하지 않으면 댓글을 볼 수 없습니다.

#### 결론

이 가이드가 유용하고 읽기 쉽기를 바랍니다. 질문이 있으시면 아래 댓글로 자유롭게 남겨주세요.

감사합니다!

{{/isPost}}

---