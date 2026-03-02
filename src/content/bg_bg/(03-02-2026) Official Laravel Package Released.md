[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Официален Laravel пакет пуснат[/postlink]

{{#unless isPost}}
Пуснахме официален Laravel пакет с интегрирани Blade компоненти, автоматичен SSO и API интеграция.
{{/unless}}

{{#isPost}}

### Какво ново

С удоволствие обявяваме пускането на нашия официален Laravel пакет, `fastcomments/laravel`. Ако разработвате с Laravel и искате да добавите
коментарни системи, чат на живо или броячи на коментари към вашето приложение, сега можете да го направите с една единствена инсталация на Composer и няколко Blade компонента.

Пакетът поддържа Laravel 10, 11 и 12 на PHP 8.1+.

### Започване

Инсталирайте с Composer:

    composer require fastcomments/laravel

След това добавете вашия tenant ID и API ключ в `.env` файла си:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Това е всичко. Сервизните доставчици и фасадите се откриват автоматично - не е необходимо ръчно регистриране. Можете да публикувате конфигурационния файл за допълнителна персонализация:

    php artisan vendor:publish --tag=fastcomments-config

### Интегрирани Blade компоненти

Пакетът идва с три Blade компонента, които можете да използвате директно в шаблоните си:

**Уиджет за коментари:**

    <x-fastcomments url-id="my-page" />

**Уиджет за чат на живо:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Брояч на коментари:**

    <x-fastcomments-comment-count url-id="my-page" />

Всеки компонент поддържа props като `url`, `locale`, `readonly`, `has-dark-background` и `default-sort-direction`. Скриптовете се зареждат
асинхронно и се де-дублицират, така че можете безопасно да поставяте множество уиджети на една и съща страница.

### Автоматичен SSO

SSO може да бъде активиран с две променливи на средата:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

След активиране, компонентите за коментари и чат на живо автоматично четат `Auth::user()` и инжектират подписания SSO payload в конфигурацията на уиджета.
Влезлите потребители се автентикират безпроблемно. Гостите виждат линкове за влизане и излизане, които по подразбиране сочат към вашите именувани маршрути `login` и `logout` в Laravel.

Има два начина да контролирате как вашият модел User съответства на данните за потребителите на FastComments:

**Картографиране на база конфигурация** - задайте имена на атрибути (включително точкова нотация) или функции в `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Картографиране на база интерфейс** - имплементирайте `MapsToFastCommentsUser` във вашия модел User за пълен контрол:

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

Поддържат се и двата режима на Secure SSO (HMAC-подписан, препоръчва се за продукция) и Simple SSO.

### API интеграция

Пакетът също така обвива FastComments API с фасада, инжектиране на зависимости и директно инжектиране на SDK клиент:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO токен за персонализирана употреба
$token = FastComments::sso()->tokenFor($user);
```

### EU резиденция на данни

За клиенти, използващи нашия EU регион, една единствена променлива на средата сменя всички крайни точки - уиджети, API повиквания и SSO:

    FASTCOMMENTS_REGION=eu

### В заключение

Надяваме се този пакет да улесни добавянето на FastComments към вашите Laravel приложения. Вече е наличен на <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
и източникът е на <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Кажете ни по-долу, ако имате някакви отзиви!

Наздраве!

{{/isPost}}