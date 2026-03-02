---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]공식 Laravel 패키지 출시[/postlink]

{{#unless isPost}}
드롭인 Blade 컴포넌트, 자동 SSO 및 API 통합이 포함된 공식 Laravel 패키지를 출시했습니다.
{{/unless}}

{{#isPost}}

### 새 소식

공식 Laravel 패키지인 `fastcomments/laravel`의 출시를 발표하게 되어 기쁩니다. Laravel로 구축하고 있고
애플리케이션에 댓글, 라이브 채팅 또는 댓글 수를 추가하고 싶다면, 이제 단일 Composer 설치와 몇 개의 Blade 컴포넌트로 이를 수행할 수 있습니다.

패키지는 PHP 8.1+에서 Laravel 10, 11 및 12를 지원합니다.

### 시작하기

Composer로 설치하세요:

    composer require fastcomments/laravel

그런 다음 `.env` 파일에 테넌트 ID와 API 키를 추가하세요:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

그게 전부입니다. 서비스 제공자 및 파사드는 자동으로 발견되므로 수동 등록이 필요 없습니다. 추가 사용자 지정을 위해 구성 파일을 게시할 수 있습니다:

    php artisan vendor:publish --tag=fastcomments-config

### 드롭인 Blade 컴포넌트

패키지는 템플릿에서 직접 사용할 수 있는 세 개의 Blade 컴포넌트를 포함합니다:

**댓글 위젯:**

    <x-fastcomments url-id="my-page" />

**라이브 채팅 위젯:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**댓글 수:**

    <x-fastcomments-comment-count url-id="my-page" />

각 컴포넌트는 `url`, `locale`, `readonly`, `has-dark-background`, `default-sort-direction`와 같은 props를 지원합니다. 스크립트는
비동기적으로 로드되며 중복이 제거되므로, 동일한 페이지에 여러 위젯을 안전하게 배치할 수 있습니다.

### 자동 SSO

SSO는 두 개의 환경 변수를 통해 활성화할 수 있습니다:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

활성화되면 댓글 및 라이브 채팅 컴포넌트는 자동으로 `Auth::user()`를 읽고 서명된 SSO 페이로드를 위젯 구성에 주입합니다.
로그인한 사용자는 원활하게 인증됩니다. 게스트는 Laravel의 `login` 및 `logout` 이름이 지정된 경로로 기본 설정된 로그인 및 로그아웃 링크를 봅니다.

사용자 모델이 FastComments 사용자 데이터에 어떻게 매핑되는지를 제어하는 두 가지 방법이 있습니다:

**구성 기반 매핑** - `config/fastcomments.php`에서 속성 이름(점 표기법 포함) 또는 호출 가능한 것을 설정합니다:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**인터페이스 기반 매핑** - 사용자 모델에서 `MapsToFastCommentsUser`를 구현하여 전체 제어를 제공합니다:

```php
use FastComments\Laravel\SSO\Contracts\MapsToFastCommentsUser;

class User extends Authenticatable implements MapsToFastCommentsUser
{
    public function toFastCommentsUserData(): array
    {
        return [
            'id' => (string) $this->id,
            'email' => $this->email,
            'username' => $this->name,
            'avatar' => $this->avatar_url,
            'is_admin' => $this->hasRole('admin'),
        ];
    }
}
```

보안 SSO (HMAC 서명, 프로덕션에 권장) 및 단순 SSO 모드가 지원됩니다.

### API 통합

패키지는 또한 패사드를 통해 FastComments API를 래핑하고, 의존성 주입 및 직접 SDK 클라이언트 주입을 지원합니다:

```php
use FastComments\Laravel\Facades\FastComments;

// 관리자 API
$comments = FastComments::admin()->getComments(...);

// 공개 API
$counts = FastComments::publicApi()->getCommentCounts(...);

// 사용자 정의 용도의 SSO 토큰
$token = FastComments::sso()->tokenFor($user);
```

### EU 데이터 거주지

EU 지역을 사용하는 고객을 위해 모든 엔드포인트 - 위젯, API 호출 및 SSO -를 전환하는 단일 환경 변수가 있습니다:

    FASTCOMMENTS_REGION=eu

### 결론

이 패키지가 FastComments를 Laravel 애플리케이션에 쉽게 추가하는 데 도움이 되기를 바랍니다. 현재 <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>에서 사용할 수 있으며
소스는 <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>에 있습니다.

아래에 피드백이 있으면 알려주세요!

Cheers!

{{/isPost}}

---