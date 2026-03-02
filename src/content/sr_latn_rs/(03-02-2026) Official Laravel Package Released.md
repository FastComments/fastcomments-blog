---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Zvanični Laravel paket objavljen[/postlink]

{{#unless isPost}}
Objavili smo zvanični Laravel paket sa kompaktibilnim Blade komponentama, automatskim SSO-om i API integracijom.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa veseljem objavljujemo izdanje našeg zvaničnog Laravel paketa, `fastcomments/laravel`. Ako gradite sa Laravelom i želite da dodate
komentare, live chat ili brojače komentara u vašu aplikaciju, sada to možete učiniti sa jednom Composer instalacijom i nekoliko Blade komponenti.

Paket podržava Laravel 10, 11 i 12 na PHP 8.1+.

### Kako početi

Instalirajte sa Composer-om:

    composer require fastcomments/laravel

Zatim dodajte vaš tenant ID i API ključ u vaš `.env`:

    FASTCOMMENTS_TENANT_ID=vaš-tenant-id
    FASTCOMMENTS_API_KEY=vaš-api-key

To je to. Provider i facade se automatski otkrivaju - registracija nije potrebna. Možete objaviti konfiguracioni fajl za dodatnu prilagodbu:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade komponente

Paket dolazi sa tri Blade komponente koje možete direktno koristiti u vašim šablonima:

**Widget za komentare:**

    <x-fastcomments url-id="moja-stranica" />

**Widget za live chat:**

    <x-fastcomments-live-chat url-id="moja-chat-soba" />

**Brojač komentara:**

    <x-fastcomments-comment-count url-id="moja-stranica" />

Svaka komponenta podržava props kao što su `url`, `locale`, `readonly`, `has-dark-background`, i `default-sort-direction`. Skripte se učitavaju
asinkrono i deduplikuju, tako da možete bezbedno postaviti više widget-a na istu stranicu.

### Automatski SSO

SSO može biti omogućen sa dve promenljive okruženja:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Kada je omogućen, komponente za komentare i live chat automatski učitavaju `Auth::user()` i injektuju potpisani SSO payload u konfiguraciju widget-a.
Korisnici koji su prijavljeni se bezbedno autentifikuju. Gosti vide linkove za prijavu i odjavu koji podrazumevano vode na vaše Laravel `login` i `logout` imenovane rute.

Postoje dva načina da kontrolišete kako se vaš User model mapira na FastComments korisničke podatke:

**Mapping zasnovan na konfiguraciji** - postavite imena atributa (uključujući tačku notaciju) ili pozive u `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mapping zasnovan na interfejsu** - implementirajte `MapsToFastCommentsUser` na vašem User modelu za punu kontrolu:

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

Podržani su i Secure SSO (HMAC potpisan, preporučljen za proizvodnju) i Simple SSO režimi.

### API Integracija

Paket takođe obavija FastComments API sa facade-om, dependency injection-om i direktnim SDK klijent injekcijama:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Javni API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token za prilagođenu upotrebu
$token = FastComments::sso()->tokenFor($user);
```

### EU Rezidencija podataka

Za kupce koji koriste našu EU regiju, jedna promenljiva okruženja prebacuje sve krajnje tačke - widget-e, API pozive i SSO:

    FASTCOMMENTS_REGION=eu

### Na kraju

Nadamo se da će ovaj paket olakšati dodavanje FastComments-a u vaše Laravel aplikacije. Dostupan je sada na <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
i izvor je na <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Obavestite nas u komentarima ispod ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}

---