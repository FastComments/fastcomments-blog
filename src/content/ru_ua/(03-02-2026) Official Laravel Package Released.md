---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Выпущен официальный пакет для Laravel[/postlink]

{{#unless isPost}}
Мы выпустили официальный пакет для Laravel с компонентами Blade, поддержкой SSO и интеграцией API.
{{/unless}}

{{#isPost}}

### Что нового

Мы рады объявить о выпуске нашего официального пакета для Laravel, `fastcomments/laravel`. Если вы создаете приложение на Laravel и хотите добавить
комментарии, живой чат или счетчик комментариев, теперь вы можете сделать это с помощью одной установки Composer и нескольких компонентов Blade.

Пакет поддерживает Laravel 10, 11 и 12 на PHP 8.1+.

### Начало работы

Установите с помощью Composer:

    composer require fastcomments/laravel

Затем добавьте свой идентификатор арендатора и API-ключ в ваш `.env`:

    FASTCOMMENTS_TENANT_ID=ваш-идентификатор-арендатора
    FASTCOMMENTS_API_KEY=ваш-api-ключ

Вот и все. Поставщик услуг и фасад автоматически обнаруживаются - ручная регистрация не требуется. Вы можете опубликовать файл конфигурации для дальнейшей настройки:

    php artisan vendor:publish --tag=fastcomments-config

### Компоненты Blade

Пакет поставляется с тремя компонентами Blade, которые вы можете использовать напрямую в ваших шаблонах:

**Виджет комментариев:**

    <x-fastcomments url-id="my-page" />

**Виджет живого чата:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Счетчик комментариев:**

    <x-fastcomments-comment-count url-id="my-page" />

Каждый компонент поддерживает свойства, такие как `url`, `locale`, `readonly`, `has-dark-background` и `default-sort-direction`. Скрипты загружаются асинхронно и дедублируются, так что вы можете безопасно разместить несколько виджетов на одной странице.

### Автоматический SSO

SSO можно включить с помощью двух переменных окружения:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

После включения компоненты комментариев и живого чата автоматически считывают `Auth::user()` и впрыскивают подписанный полезный груз SSO в конфигурацию виджета. 
Зарегистрированные пользователи доверительно аутентифицированы. Гостям отображаются ссылки для входа и выхода, которые по умолчанию ссылаются на ваши именованные маршруты `login` и `logout` в Laravel.

Существует два способа управлять тем, как ваша модель User сопоставляется с данными пользователя FastComments:

**Сопоставление на основе конфигурации** - задайте имена атрибутов (включая нотацию с точками) или вызываемые функции в `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Сопоставление на основе интерфейса** - реализуйте `MapsToFastCommentsUser` в вашей модели User для полного контроля:

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

Поддерживаются как безопасный SSO (HMAC-подписанный, рекомендуется для производства), так и простые режимы SSO.

### Интеграция API

Пакет также оборачивает API FastComments с помощью фасада, внедрения зависимостей и прямого внедрения клиента SDK:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO токен для индивидуального использования
$token = FastComments::sso()->tokenFor($user);
```

### Резиденция данных ЕС

Для клиентов, использующих наш регион ЕС, одна переменная окружения переключает все конечные точки - виджеты, вызовы API и SSO:

    FASTCOMMENTS_REGION=eu

### В заключение

Мы надеемся, что этот пакет упростит добавление FastComments в ваши приложения на Laravel. Он доступен сейчас на <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
и исходный код на <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Дайте нам знать ниже, если у вас есть какие-либо отзывы!

Cheers!

{{/isPost}}

---