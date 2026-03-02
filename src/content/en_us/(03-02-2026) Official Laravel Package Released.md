---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Official Laravel Package Released[/postlink]

{{#unless isPost}}
We have launched an official Laravel package that includes drop-in Blade components, automatic SSO, and API integration.
{{/unless}}

{{#isPost}}

### What's New

We are thrilled to announce the release of our official Laravel package, `fastcomments/laravel`. If you are developing with Laravel and want to incorporate
commenting, live chat, or comment counts into your application, you can now achieve this with a single Composer install and a few Blade components.

The package is compatible with Laravel versions 10, 11, and 12 on PHP 8.1 or higher.

### Getting Started

Install using Composer:

    composer require fastcomments/laravel

Next, add your tenant ID and API key to your `.env` file:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

That's all. The service provider and facade are auto-discovered—no manual registration required. You can publish the configuration file for additional customization:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade Components

The package includes three Blade components that you can use directly in your templates:

**Comments widget:**

    <x-fastcomments url-id="my-page" />

**Live chat widget:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Comment count:**

    <x-fastcomments-comment-count url-id="my-page" />

Each component supports properties like `url`, `locale`, `readonly`, `has-dark-background`, and `default-sort-direction`. Scripts are loaded
asynchronously and deduplicated, allowing you to safely place multiple widgets on the same page.

### Automatic SSO

SSO can be activated with two environment variables:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Once activated, the comment and live chat components automatically retrieve `Auth::user()` and inject the signed SSO payload into the widget configuration.
Logged-in users are seamlessly authenticated. Guests see login and logout links that point to your Laravel `login` and `logout` named routes.

There are two methods to control how your User model maps to FastComments user data:

**Config-based mapping** - set attribute names (including dot notation) or callables in `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Interface-based mapping** - implement `MapsToFastCommentsUser` on your User model for complete control:

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

Both Secure SSO (HMAC-signed, recommended for production) and Simple SSO modes are supported.

### API Integration

The package also wraps the FastComments API with a facade, dependency injection, and direct SDK client injection:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token for custom use
$token = FastComments::sso()->tokenFor($user);
```

### EU Data Residency

For customers utilizing our EU region, a single environment variable changes all endpoints—widgets, API calls, and SSO:

    FASTCOMMENTS_REGION=eu

### In Conclusion

We hope this package simplifies the process of adding FastComments to your Laravel applications. It is available now on <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
and the source code is available on <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Please let us know below if you have any feedback!

Cheers!

{{/isPost}}

---