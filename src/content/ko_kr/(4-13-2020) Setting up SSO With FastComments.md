---
[category:API & Development]

###### [postdate]
# [postlink]FastComments로 SSO 설정하기[/postlink]

{{#unless isPost}}
FastComments는 다양한 플랫폼과 맞춤형 통합을 위한 SSO 솔루션을 제공합니다.
{{/unless}}

{{#isPost}}

# 개요

## SSO란 무엇인가요?

SSO(싱글 사인온)는 사용자가 추가 계정을 만들 필요 없이 FastComments를 사용할 수 있도록 허용하는 일련의 규칙입니다.

익명 댓글 작성을 허용하지 않는 경우 FastComments로 댓글을 달려면 계정이 필요합니다. 저희는 이 가입 프로세스를 매우 쉽게 만들었습니다 - 사용자는 댓글을 달 때 이메일만 남기면 됩니다. 하지만, 저희는 일부 사이트가 이를 피하고 싶어 한다는 것을 이해하고 있습니다.

## 어떻게 얻을 수 있나요?

모든 계정 유형은 현재 SSO와 지원에 접근할 수 있습니다. 그러나 SSO 사용자 최대 수는 패키지에 따라 달라집니다.

### WordPress 사용자

저희 <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> 플러그인을 사용 중이라면 코드 작성이 필요 없습니다! 플러그인의 관리자 페이지로 이동하여 SSO 설정을 클릭한 후 활성화를 눌러주세요.

이것은 API 키를 생성하고 WordPress 설치로 전송하여 SSO를 켜는 단일 버튼 클릭 마법사로 안내합니다. 이를 통해 귀하를 위해 단일 버튼 클릭으로 통합했습니다.

플러그인을 처음 설치하는 경우 SSO 설정 버튼이 있는 관리자 페이지를 보려면 설정 프로세스를 완료해야 합니다.

### 맞춤형 통합

FastComments SSO는 SSO를 구현하기 위한 메커니즘으로 HMAC-SHA256 암호화를 사용합니다. 먼저 전체 아키텍처 개요를 설명하고, 예제와 자세한 단계를 제공합니다. 그러나 이 문서 끝에는 **Disqus 및 Commento에서 마이그레이션하는 방법**이 안내되어 있습니다.

흐름은 다음과 같습니다:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO 다이어그램" title="FastComments SSO 다이어그램" class="lozad" />
</div>

FastComments SSO와 함께 새 API 엔드포인트를 작성할 필요가 없습니다. 사용자의 정보를 비밀 키로 암호화하고 페이로드를 댓글 위젯에 전달하기만 하면 됩니다.

NodeJS, Java/Spring, 기본 PHP를 포함한 여러 언어/런타임에서 완전히 작동하는 코드 예제를 제공합니다. NodeJS 예제에서는 ExpressJS를 사용하지만 Java 예제에서는 Spring을 사용하고 있으며, 이러한 런타임에서 FastComments SSO를 구현하는 데 필요한 프레임워크/라이브러리는 없습니다 - 기본 crypto 패키지로 충분합니다.

코드 예제 저장소는 다음에서 확인할 수 있습니다:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO 코드 예제</a>

#### API 비밀 키 가져오기

귀하의 API 비밀 키는 <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">이 페이지</a>에서 검색할 수 있습니다. My Account로 이동하여 API/SSO 타일을 클릭한 후 "API 비밀 키 가져오기"를 클릭하여 이 페이지를 찾을 수 있습니다.

#### 댓글 위젯 매개변수

댓글 위젯에 대한 고수준 API 문서는 <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">여기</a>에서 확인할 수 있으며, "고급 옵션 표시"를 클릭하세요. 페이지에서 SSO를 검색하세요.

이 매개변수들이 의미하는 바에 대해 자세히 살펴보겠습니다.

댓글 위젯은 구성 객체를 가져갑니다 - FastComments를 사용하여 고객 ID(tenantId라고 함)를 전달하면 이미 이 값을 전달하고 있습니다.

SSO를 활성화하려면 새 "sso" 객체를 전달하세요. 이 객체는 다음 매개변수를 가져야 합니다. 값은 **서버 측**에서 생성되어야 합니다.

- userDataJSONBase64: 사용자의 JSON 형식 데이터, 이후 Base64로 인코딩됨.
- verificationHash: UNIX_TIME + userDataJSONBase64로 생성된 HMAC-SHA256 해시.
- timestamp: 현재 유닉스 시간. **미래의 시간이거나 과거 3시간을 초과해서는 안 됩니다.**
- loginURL: 댓글 위젯이 사용자를 로그인시킬 수 있는 URL.
- logoutURL: 댓글 위젯이 사용자를 로그아웃시킬 수 있는 URL.
- loginCallback: 로그인 URL 대신 제공될 때, 로그인 버튼 클릭 시 댓글 위젯이 호출할 함수.
- logoutCallback: 로그아웃 URL 대신 제공될 때, 로그아웃 버튼 클릭 시 댓글 위젯이 호출할 함수.

#### 사용자 객체

사용자 객체는 다음 스키마를 포함합니다:

- id(문자열, 필수)(최대 1k 문자)
- email(문자열, 필수)(최대 1k 문자). 주의: 유일해야 함.
- username(문자열, 필수)(최대 1k 문자). 주의: 사용자 이름은 이메일일 수 없습니다. 유일할 필요는 없음.
- avatar(문자열, 선택 사항)(최대 3k 문자)
- optedInNotifications(부울, 선택 사항)
- displayLabel(문자열, 선택 사항, 최대 100 문자). 이 레이블은 이름 옆에 표시됩니다.
- websiteUrl(문자열, 선택 사항, 최대 2000 문자). 사용자의 이름은 여기에 링크됩니다.

#### 알림

알림을 활성화하거나 비활성화하려면 optedInNotifications 값을 각각 true 또는 false로 설정하세요. 사용자가 이 값을 가진 SSO 페이로드로 페이지를 처음 로드할 때, 그들의 알림 설정이 업데이트됩니다.

#### VIP 사용자 및 특별 레이블

선택적 "displayLabel" 필드를 사용하여 사용자 이름 옆에 특별 레이블을 표시할 수 있습니다.

#### 인증되지 않은 사용자

인증되지 않은 사용자를 나타내려면 userDataJSONBase64, verificationHash 또는 timestamp를 비워두면 됩니다. loginURL을 제공하세요.

#### 사용자 데이터 직렬화 및 해싱을 위한 직접 예제

자세한 내용은 <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">여기 (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">여기 (java)</a> 및
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">여기 (php)</a>에서 확인하세요.


### Disqus SSO에서 마이그레이션

Disqus와 FastComments SSO의 가장 큰 차이점은 Disqus가 SHA1을 사용하여 암호화하는 반면 저희는 SHA256을 사용한다는 점입니다.
따라서 Disqus에서의 마이그레이션이 용이합니다 - 해싱 알고리즘을 SHA1에서 SHA256으로 변경하고 UI에 전달되는 속성 이름을 업데이트하면 됩니다.

### Commento SSO에서 마이그레이션

Commento는 상당히 다른 SSO 접근 방식을 사용합니다 - 인증을 위해 호출하는 엔드포인트를 요구합니다. FastComments는 그 반대입니다 - 
사용자의 정보를 비밀 키로 암호화하고 해시한 후 전달하기만 하면 됩니다.

모든 통합 과정이 복잡하고 힘들 수 있다는 것을 이해합니다. 주저하지 말고 귀하의 담당자에게 연락하거나 <a href="https://fastcomments.com/auth/my-account/help" target="_blank">지원 페이지</a>를 이용하세요.

{{/isPost}}

---