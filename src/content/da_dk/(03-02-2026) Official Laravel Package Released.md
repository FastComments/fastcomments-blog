---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Officiel Laravel-pakke udgivet[/postlink]

{{#unless isPost}}
Vi har udgivet en officiel Laravel-pakke med drop-in Blade-komponenter, automatisk SSO og API-integration.
{{/unless}}

{{#isPost}}

### Nyheder

Vi er glade for at annoncere udgivelsen af vores officielle Laravel-pakke, `fastcomments/laravel`. Hvis du bygger med Laravel og ønsker at tilføje
kommentarer, live chat eller kommentartælling til din applikation, kan du nu gøre det med en enkelt Composer-installation og et par Blade-komponenter.

Pakken understøtter Laravel 10, 11 og 12 på PHP 8.1+.

### Kom i gang

Installer med Composer:

    composer require fastcomments/laravel

Tilføj derefter dit tenant ID og API-nøgle til din `.env`:

    FASTCOMMENTS_TENANT_ID=dit-tenant-id
    FASTCOMMENTS_API_KEY=din-api-nøgle

Det er det. Service-provider og facade opdages automatisk - ingen manuel registrering nødvendig. Du kan offentliggøre konfigurationsfilen for yderligere tilpasning:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade-komponenter

Pakken leveres med tre Blade-komponenter, som du kan bruge direkte i dine skabeloner:

**Kommentar-widget:**

    <x-fastcomments url-id="min-side" />

**Live chat-widget:**

    <x-fastcomments-live-chat url-id="mit-chat-værelse" />

**Kommentartælling:**

    <x-fastcomments-comment-count url-id="min-side" />

Hver komponent understøtter props som `url`, `locale`, `readonly`, `has-dark-background` og `default-sort-direction`. Scripts indlæses
asynkront og dedupliceres, så du trygt kan placere flere widgets på samme side.

### Automatisk SSO

SSO kan aktiveres med to miljøvariabler:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Når det er aktiveret, læser kommentar- og live chat-komponenterne automatisk `Auth::user()` og injicerer den signerede SSO-payload i widget-konfigurationen.
Indloggede brugere godkendes problemfrit. Gæster ser login- og logout-links, der som standard fører til dine Laravel `login` og `logout` navngivne ruter.

Der er to måder at kontrollere, hvordan din User-model mapper til FastComments-brugerdata:

**Konfigurationsbaseret mapping** - indstil attributnavne (inklusive punktnotation) eller callable i `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Interface-baseret mapping** - implementer `MapsToFastCommentsUser` på din User-model for fuld kontrol:

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

Både Secure SSO (HMAC-signeret, anbefalet til produktion) og Simple SSO-tilstande understøttes.

### API-integration

Pakken indkapsler også FastComments API med en facade, afhængighedsinjektion og direkte SDK-klientinjektion:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Offentlig API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO-token til brugerdefineret brug
$token = FastComments::sso()->tokenFor($user);
```

### EU Data Residency

For kunder, der bruger vores EU-region, kan en enkelt miljøvariabel skifte alle endepunkter - widgets, API-opkald og SSO:

    FASTCOMMENTS_REGION=eu

### Afslutning

Vi håber, at denne pakke gør det let at tilføje FastComments til dine Laravel-applikationer. Den er tilgængelig nu på <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
og koden er på <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Lad os vide nedenfor, hvis du har nogen feedback!

Skål!

{{/isPost}}

---