---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Officiële Laravel Package Vrijgegeven[/postlink]

{{#unless isPost}}
We hebben een officiële Laravel-package uitgebracht met drop-in Blade-componenten, automatische SSO en API-integratie.
{{/unless}}

{{#isPost}}

### Wat is Nieuw

We zijn verheugd om de release van onze officiële Laravel-package, `fastcomments/laravel`, aan te kondigen. Als je met Laravel bouwt en commentaar, live chat of commentaantal aan je toepassing wilt toevoegen, kun je dit nu doen met een enkele Composer-installatie en een paar Blade-componenten.

De package ondersteunt Laravel 10, 11 en 12 op PHP 8.1+.

### Aan de Slag

Installeer met Composer:

    composer require fastcomments/laravel

Voeg vervolgens je tenant-ID en API-sleutel toe aan je `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Dat is het. De serviceprovider en facade worden automatisch ontdekt - geen handmatige registratie nodig. Je kunt het configuratiebestand publiceren voor verdere aanpassing:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade Componenten

De package wordt geleverd met drie Blade-componenten die je direct in je sjablonen kunt gebruiken:

**Commentaar widget:**

    <x-fastcomments url-id="my-page" />

**Live chat widget:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Commentaantal:**

    <x-fastcomments-comment-count url-id="my-page" />

Elke component ondersteunt props zoals `url`, `locale`, `readonly`, `has-dark-background`, en `default-sort-direction`. Scripts worden
asynchroon geladen en gededupliceerd, zodat je veilig meerdere widgets op dezelfde pagina kunt plaatsen.

### Automatische SSO

SSO kan worden ingeschakeld met twee omgevingsvariabelen:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Zodra het is ingeschakeld, lezen de commentaar- en live chatcomponenten automatisch `Auth::user()` en injecteren ze de ondertekende SSO-load in de widgetconfiguratie. Ingelogde gebruikers worden naadloos geverifieerd. Gasten zien inlog- en uitloglinks die standaard naar jouw Laravel `login` en `logout` named routes verwijzen.

Er zijn twee manieren om te bepalen hoe jouw User-model in FastComments gebruikersgegevens wordt gemapt:

**Configuratie-gebaseerde mapping** - stel attribuutnamen in (inclusief puntnotatie) of aanroepbare functies in `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Interface-gebaseerde mapping** - implementeer `MapsToFastCommentsUser` op jouw User-model voor volledige controle:

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

Zowel Secure SSO (HMAC-ondertekend, aanbevolen voor productie) als Simple SSO-modus worden ondersteund.

### API Integratie

De package verpakt ook de FastComments API met een facade, afhankelijkheidsinjectie en directe SDK-clientinjectie:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Publieke API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO-token voor aangepast gebruik
$token = FastComments::sso()->tokenFor($user);
```

### EU Gegevensresidentie

Voor klanten die onze EU-regio gebruiken, schakelt één omgevingsvariabele alle eindpunten - widgets, API-oproepen en SSO:

    FASTCOMMENTS_REGION=eu

### Ter Conclusie

We hopen dat deze package het eenvoudig maakt om FastComments aan je Laravel-toepassingen toe te voegen. Het is nu beschikbaar op <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
en de bron is op <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Laat ons hieronder weten of je feedback hebt!

Groeten!

{{/isPost}}