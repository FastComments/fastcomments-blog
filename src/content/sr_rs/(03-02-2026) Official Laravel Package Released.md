[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Званични Laravel пакет објављен[/postlink]

{{#unless isPost}}
Објавили смо званични Laravel пакет са готовим Blade компонентама, аутоматским SSO‑ом и API интеграцијом.
{{/unless}}

{{#isPost}}

### Шта је ново

Одушевљени смо што можемо да најавимо издање нашег званичног Laravel пакета, `fastcomments/laravel`. Ако градите апликацију са Laravel‑ом и желите да додате коментарисање, живи ћаскање или број коментара, то сада можете урадити помоћу једне Composer инсталације и неколико Blade компоненти.

Пакет подржава Laravel 10, 11 и 12 на PHP 8.1+.

### Започните

Инсталирајте помоћу Composer‑а:

    composer require fastcomments/laravel

Затим додајте ваш tenant ID и API кључ у ваш `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

То је све. Service provider и фасада се аутоматски откривају – није потребна ручна регистрација. Можете објавити конфигурациони фајл за даљу прилагођавање:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade компоненти

Пакет долази са три Blade компоненте које можете директно користити у вашим шаблонима:

**Comments widget:**

    <x-fastcomments url-id="my-page" />

**Видгет за живи ћаскање:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Број коментара:**

    <x-fastcomments-comment-count url-id="my-page" />

Свака компонента подржава пропсеве као што су `url`, `locale`, `readonly`, `has-dark-background` и `default-sort-direction`. Скрипте се учитавају асинхроно и дедупликују, тако да безбедно можете поставити више виџетa на исту страницу.

### Аутоматски SSO

SSO се може омогућити помоћу две променљиве окружења:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Када је омогућен, коментар и живи ћаскање компоненте аутоматски читају `Auth::user()` и убацују потписани SSO пейлоад у конфигурацију виџета. Пријављени корисници се беспрекорно аутентикују. Гости виде линкове за пријаву и одјаву који подразумевано користе ваше Laravel `login` и `logout` именоване руте.

Постоје два начина да контролишете како ваш User модел мапира на FastComments корисничке податке:

**Config-based mapping** – поставите имена атрибута (укључујући нотацију тачке) или позиве у `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Interface-based mapping** – имплементирајте `MapsToFastCommentsUser` на вашем User моделу за пуну контролу:

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

Подржани су и Secure SSO (HMAC‑потписан, препоручен за продукцију) и Simple SSO модови.

### API интеграција

Пакет такође обавија FastComments API фасадом, dependency injection‑ом и директним SDK клијентом:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token for custom use
$token = FastComments::sso()->tokenFor($user);
```

### Резиденција података у ЕУ

За кориснике који користе наш ЕУ регион, једна променљива окружења пребацује све ендпоинте – виџете, API позиве и SSO:

    FASTCOMMENTS_REGION=eu

### У закључку

Надамо се да ће вам овај пакет олакшати додавање FastComments у ваше Laravel апликације. Доступан је сада на <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a> и изворни код је на <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Јавите нам у коментару ако имате било какве повратне информације!

Поздрав!

{{/isPost}}

---