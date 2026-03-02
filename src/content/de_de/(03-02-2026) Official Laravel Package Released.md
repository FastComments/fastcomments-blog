---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Offizielles Laravel-Paket veröffentlicht[/postlink]

{{#unless isPost}}
Wir haben ein offizielles Laravel-Paket mit Drop-in Blade-Komponenten, automatischer SSO und API-Integration veröffentlicht.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Wir freuen uns, die Veröffentlichung unseres offiziellen Laravel-Pakets `fastcomments/laravel` bekannt zu geben. Wenn Sie mit Laravel arbeiten und Kommentare, Live-Chat oder Kommentaranzahlen zu Ihrer Anwendung hinzufügen möchten, können Sie dies nun mit einer einzigen Composer-Installation und ein paar Blade-Komponenten tun.

Das Paket unterstützt Laravel 10, 11 und 12 auf PHP 8.1+.

### Erste Schritte

Installieren Sie mit Composer:

    composer require fastcomments/laravel

Fügen Sie dann Ihre Mandanten-ID und den API-Schlüssel zu Ihrer `.env`-Datei hinzu:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Das war's. Der Dienstanbieter und das Facade werden automatisch erkannt - keine manuelle Registrierung erforderlich. Sie können die Konfigurationsdatei für weitere Anpassungen veröffentlichen:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade-Komponenten

Das Paket enthält drei Blade-Komponenten, die Sie direkt in Ihren Vorlagen verwenden können:

**Kommentare-Widget:**

    <x-fastcomments url-id="my-page" />

**Live-Chat-Widget:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Kommentaranzahl:**

    <x-fastcomments-comment-count url-id="my-page" />

Jede Komponente unterstützt Props wie `url`, `locale`, `readonly`, `has-dark-background` und `default-sort-direction`. Skripte werden asynchron geladen und dedupliziert, sodass Sie mehrere Widgets sicher auf derselben Seite platzieren können.

### Automatische SSO

SSO kann mit zwei Umgebungsvariablen aktiviert werden:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Sobald aktiviert, lesen die Kommentar- und Live-Chat-Komponenten automatisch `Auth::user()` und injizieren die signierte SSO-Nutzlast in die Widget-Konfiguration. Angemeldete Benutzer werden nahtlos authentifiziert. Gäste sehen Anmelde- und Abmelde-Links, die standardmäßig auf Ihre Laravel-Routen `login` und `logout` verweisen.

Es gibt zwei Möglichkeiten, wie Ihr Benutzer-Modell auf die FastComments-Benutzerdaten abgebildet wird:

**Konfigurationsbasierte Abbildung** - setzen Sie Attributnamen (einschließlich Punktnotation) oder Callable in `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Schnittstellenbasierte Abbildung** - implementieren Sie `MapsToFastCommentsUser` in Ihrem Benutzer-Modell für volle Kontrolle:

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

Sowohl Secure SSO (HMAC-signiert, empfohlen für die Produktion) als auch einfache SSO-Modi werden unterstützt.

### API-Integration

Das Paket umhüllt auch die FastComments-API mit einem Facade, Dependency Injection und direkter SDK-Client-Injection:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin-API
$comments = FastComments::admin()->getComments(...);

// Öffentliche API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO-Token zur benutzerdefinierten Verwendung
$token = FastComments::sso()->tokenFor($user);
```

### EU-Datenresidenz

Für Kunden, die unsere EU-Region nutzen, schaltet eine einzige Umgebungsvariable alle Endpunkte um - Widgets, API-Aufrufe und SSO:

    FASTCOMMENTS_REGION=eu

### Fazit

Wir hoffen, dass dieses Paket es Ihnen erleichtert, FastComments zu Ihren Laravel-Anwendungen hinzuzufügen. Es ist jetzt verfügbar auf <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
und der Quellcode befindet sich auf <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Lassen Sie uns unten wissen, wenn Sie Feedback haben!

Prost!

{{/isPost}}

---