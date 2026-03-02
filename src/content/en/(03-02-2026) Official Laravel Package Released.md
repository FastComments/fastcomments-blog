[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Official Laravel Package Released[/postlink]

{{#unless isPost}}
We've released an official Laravel package with drop-in Blade components, automatic SSO, and API integration.
{{/unless}}

{{#isPost}}

### What's New

We're excited to announce the release of our official Laravel package, `fastcomments/laravel`. If you're building with Laravel and want to add
commenting, live chat, or comment counts to your application, you can now do so with a single Composer install and a couple of Blade components.

The package supports Laravel 10, 11, and 12 on PHP 8.1+.

### Getting Started

Install with Composer:

    composer require fastcomments/laravel

Then add your tenant ID and API key to your `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

That's it. The service provider and facade are auto-discovered - no manual registration needed. You can publish the config file for further customization:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade Components

The package ships with three Blade components that you can use directly in your templates:

**Comments widget:**

    <x-fastcomments url-id="my-page" />

**Live chat widget:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Comment count:**

    <x-fastcomments-comment-count url-id="my-page" />

Each component supports props like `url`, `locale`, `readonly`, `has-dark-background`, and `default-sort-direction`. Scripts are loaded
asynchronously and deduplicated, so you can safely place multiple widgets on the same page.

### Automatic SSO

SSO can be enabled with two environment variables:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Once enabled, the comment and live chat components automatically read `Auth::user()` and inject the signed SSO payload into the widget config.
Logged-in users are seamlessly authenticated. Guests see login and logout links that default to your Laravel `login` and `logout` named routes.

There are two ways to control how your User model maps to FastComments user data:

**Config-based mapping** - set attribute names (including dot notation) or callables in `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Interface-based mapping** - implement `MapsToFastCommentsUser` on your User model for full control:

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

For customers using our EU region, a single environment variable switches all endpoints - widgets, API calls, and SSO:

    FASTCOMMENTS_REGION=eu

### In Conclusion

We hope this package makes it easy to add FastComments to your Laravel applications. It's available now on <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
and the source is on <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Let us know below if you have any feedback!

Cheers!

{{/isPost}}
