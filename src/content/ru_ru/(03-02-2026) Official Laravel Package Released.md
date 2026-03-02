---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Выпущен официальный пакет Laravel[/postlink]

{{#unless isPost}}
Мы выпустили официальный пакет Laravel с компонентами Blade, поддерживающими интеграцию, автоматическим SSO и API.
{{/unless}}

{{#isPost}}

### Что нового

Мы рады объявить о выпуске нашего официального пакета Laravel, `fastcomments/laravel`. Если вы разрабатываете на Laravel и хотите добавить
комментарии, живой чат или количество комментариев в ваше приложение, теперь вы можете сделать это с помощью одной установки Composer и нескольких компонентов Blade.

Пакет поддерживает Laravel 10, 11 и 12 на PHP 8.1+.

### Быстрый старт

Установите с помощью Composer:

    composer require fastcomments/laravel

Затем добавьте ваш tenant ID и API ключ в ваш `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Вот и все. Сервисный провайдер и фасад автоматически обнаруживаются - ручная регистрация не требуется. Вы можете опубликовать файл конфигурации для дальнейшей настройки:

    php artisan vendor:publish --tag=fastcomments-config

### Компоненты Blade

Пакет поставляется с тремя компонентами Blade, которые вы можете использовать непосредственно в своих шаблонах:

**Виджет комментариев:**

    <x-fastcomments url-id="my-page" />

**Виджет живого чата:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Количество комментариев:**

    <x-fastcomments-comment-count url-id="my-page" />

Каждый компонент поддерживает такие свойства, как `url`, `locale`, `readonly`, `has-dark-background` и `default-sort-direction`. Скрипты загружаются
асинхронно и дедуплированы, так что вы можете безопасно разместить несколько виджетов на одной странице.

### Автоматическое SSO

SSO можно активировать с помощью двух переменных окружения:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

После активации компоненты комментариев и живого чата автоматически считывают `Auth::user()` и внедряют подписанный SSO полезный груз в конфигурацию виджета.
Авторизованные пользователи аутентифицируются бесшовно. Гостям отображаются ссылки для входа и выхода, которые по умолчанию идут на ваши именованные маршруты `login` и `logout` в Laravel.

Существует два способа контролировать, как ваша модель User сопоставляется с данными пользователя FastComments:

**Сопоставление на основе конфигурации** - установите имена атрибутов (включая точечную нотацию) или вызовы в `config/fastcomments.php`:

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

Поддерживаются как безопасное SSO (HMAC-подписанный, рекомендуется для продакшена), так и простой SSO.

### Интеграция API

Пакет также оборачивает API FastComments с помощью фасада, внедрения зависимостей и прямого внедрения клиента SDK:

```php
use FastComments\Laravel\Facades\FastComments;

// Административный API
$comments = FastComments::admin()->getComments(...);

// Публичный API
$counts = FastComments::publicApi()->getCommentCounts(...);

// Токен SSO для кастомного использования
$token = FastComments::sso()->tokenFor($user);
```

### Резидентность данных в ЕС

Для клиентов, использующих наш регион ЕС, одна переменная окружения переключает все конечные точки - виджеты, API вызовы и SSO:

    FASTCOMMENTS_REGION=eu

### В заключение

Надеемся, что этот пакет облегчит добавление FastComments в ваши приложения Laravel. Он уже доступен на <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
и исходный код доступен на <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Сообщите нам ниже, если у вас есть какие-либо отзывы!

Cheers!

{{/isPost}}

---