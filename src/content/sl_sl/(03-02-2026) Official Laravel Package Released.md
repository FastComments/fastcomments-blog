---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Uradna knjižnica Laravel izdana[/postlink]

{{#unless isPost}}
Izdali smo uradno knjižnico Laravel z vstavnimi Blade komponentami, samodejnim SSO in integracijo API.
{{/unless}}

{{#isPost}}

### Novosti

Navdušeni smo, da lahko napovemo izdajo naše uradne knjižnice Laravel, `fastcomments/laravel`. Če razvijate z Laravel in želite dodati
komentarje, klepet v živo ali število komentarjev v vašo aplikacijo, to lahko zdaj storite z enim samim namestitvenim ukazom Composer in nekaj Blade komponentami.

Knjižnica podpira Laravel 10, 11 in 12 na PHP 8.1+.

### Začetek

Namestite s Composerjem:

    composer require fastcomments/laravel

Nato dodajte svoj ID najemnika in API ključ v datoteko `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

To je to. Ponudnik storitev in fasada sta samodejno odkrito - ni potrebne ročne registracije. Objavite konfiguracijsko datoteko za nadaljnje prilagajanje:

    php artisan vendor:publish --tag=fastcomments-config

### Vstavne Blade komponente

Knjižnica vsebuje tri Blade komponente, ki jih lahko uporabite neposredno v vaših predlogah:

**Vedno komentarjev:**

    <x-fastcomments url-id="my-page" />

**Vedno klepet v živo:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Število komentarjev:**

    <x-fastcomments-comment-count url-id="my-page" />

Vsaka komponenta podpira lastnosti, kot so `url`, `locale`, `readonly`, `has-dark-background` in `default-sort-direction`. Skripti se nalagajo
asinhkronično in deduplicirano, tako da lahko varno postavite več pripomočkov na isto stran.

### Samodejni SSO

SSO se lahko omogoči z dvema spremenljivkama okolja:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Ko je omogočeno, komponente za komentarje in klepet v živo samodejno preberejo `Auth::user()` in vnesejo podpisano SSO naročilo v konfiguracijo pripomočka.
Prijavljeni uporabniki so brezhibno avtenticirani. Gosti vidijo povezave za prijavo in odjavo, ki privzeto uporabljajo vaše imenske poti Laravel `login` in `logout`.

Obstajata dva načina za nadzor, kako se vaš model uporabnika preslikuje na podatke uporabnikov FastComments:

**Preslikava na podlagi konfiguracije** - nastavite imena atributov (vključno z dot notacijo) ali klicne funkcije v `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Preslikava na podlagi vmesnika** - implementirajte `MapsToFastCommentsUser` na vašem modelu User za popoln nadzor:

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

Podprta sta oba načina SSO (HMAC-podpisano, priporočeno za produkcijo) in enostavno SSO.

### Integracija API

Knjižnica tudi ovija API FastComments z fasado, odvisnostjo injekcije in neposredno injekcijo SDK odjemalca:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Javni API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO žeton za lastno uporabo
$token = FastComments::sso()->tokenFor($user);
```

### Evropska rezidenca podatkov

Za stranke, ki uporabljajo našo evropsko regijo, ena spremenljivka okolja preklopi vse končne točke - pripomočke, klice API in SSO:

    FASTCOMMENTS_REGION=eu

### Na koncu

Upamo, da ta knjižnica olajša dodajanje FastComments v vaše aplikacije Laravel. Zdaj je na voljo na <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
in vir je na <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Sporočite nam spodaj, če imate kakšne povratne informacije!

Na zdravje!

{{/isPost}}

---