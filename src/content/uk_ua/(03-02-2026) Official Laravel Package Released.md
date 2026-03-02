---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Офіційний пакет Laravel випущено[/postlink]

{{#unless isPost}}
Ми випустили офіційний пакет Laravel з компонентами Blade, автоматичною SSO та інтеграцією API.
{{/unless}}

{{#isPost}}

### Що нового

Ми раді повідомити про випуск нашого офіційного пакету Laravel, `fastcomments/laravel`. Якщо ви розробляєте з Laravel і хочете додати
коментування, живий чат або рахунок коментарів у ваше застосування, ви тепер можете зробити це за допомогою одного встановлення Composer і кількох компонентів Blade.

Пакет підтримує Laravel 10, 11 та 12 на PHP 8.1+.

### Початок роботи

Встановіть за допомогою Composer:

    composer require fastcomments/laravel

Потім додайте свій ID орендаря та API-ключ до вашого `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Це все. Провайдер служби та фасад автоматично виявляються - реєстрація вручну не потрібна. Ви можете опублікувати файл конфігурації для подальшої настройки:

    php artisan vendor:publish --tag=fastcomments-config

### Компоненти Blade

Пакет постачається з трьома компонентами Blade, які ви можете використовувати безпосередньо у своїх шаблонах:

**Віджет коментарів:**

    <x-fastcomments url-id="my-page" />

**Віджет живого чату:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Кількість коментарів:**

    <x-fastcomments-comment-count url-id="my-page" />

Кожен компонент підтримує властивості, такі як `url`, `locale`, `readonly`, `has-dark-background` та `default-sort-direction`. Скрипти завантажуються
асинхронно та очищуються від дублікатів, тому ви можете безпечно розміщувати кілька віджетів на одній сторінці.

### Автоматичний SSO

SSO можна включити за допомогою двох змінних середовища:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Після активації компоненти коментарів і живого чату автоматично читають `Auth::user()` і впроваджують підписане навантаження SSO в конфігурацію віджета.
Користувачі, що увійшли в систему, безпроблемно проходять автентифікацію. Гості бачать посилання для входу та виходу, які за замовчуванням ведуть до ваших призначених маршрутів `login` та `logout` в Laravel.

Існує два способи контролювати, як ваша модель користувача відображається на дані користувача FastComments:

**Відображення на основі конфігурації** - встановіть імена атрибутів (включаючи крапкову нотацію) або викликайте функції в `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Відображення на основі інтерфейсу** - реалізуйте `MapsToFastCommentsUser` у своїй моделі користувача для повного контролю:

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

Підтримуються обидва режими SSO: Secure SSO (з підписом HMAC, рекомендований для виробництва) і Simple SSO.

### Інтеграція API

Пакет також обгортає API FastComments за допомогою фасаду, ін'єкції залежностей і прямої ін'єкції клієнта SDK:

```php
use FastComments\Laravel\Facades\FastComments;

// Адміністративний API
$comments = FastComments::admin()->getComments(...);

// Публічний API
$counts = FastComments::publicApi()->getCommentCounts(...);

// Токен SSO для спеціального використання
$token = FastComments::sso()->tokenFor($user);
```

### Резидентність даних у ЄС

Для клієнтів, які використовують наш регіон ЄС, одна змінна середовища перемикає всі кінцеві точки - віджети, виклики API та SSO:

    FASTCOMMENTS_REGION=eu

### На завершення

Сподіваємося, що цей пакет спростить додавання FastComments до ваших застосунків на Laravel. Він доступний зараз на <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
і джерело доступне на <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Дайте нам знати нижче, якщо у вас є які-небудь відгуки!

На здоров'я!

{{/isPost}}

---