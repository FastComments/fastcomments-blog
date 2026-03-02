---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Objavljen oficialni Laravel paket[/postlink]

{{#unless isPost}}
Objavili smo zvanični Laravel paket sa Blade komponentama, automatskim SSO-om i API integracijom.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa uzbuđenjem objavljujemo objavu našeg zvaničnog Laravel paketa, `fastcomments/laravel`. Ako gradite sa Laravel-om i želite da dodate
komentarisanje, live chat ili broj komentara vašoj aplikaciji, sada to možete učiniti sa jednom Composer instalacijom i nekoliko Blade komponenti.

Paket podržava Laravel 10, 11 i 12 na PHP 8.1+.

### Početak rada

Instalirajte sa Composer-om:

    composer require fastcomments/laravel

Zatim dodajte svoj tenant ID i API ključ u svoj `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

To je to. Servisni provajder i fasada se automatski otkrivaju - nije potrebna ručna registracija. Možete objaviti konfiguracioni fajl za dodatnu prilagodbu:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade Komponente

Paket dolazi sa tri Blade komponente koje možete koristiti direktno u svojim šablonima:

**Widget za komentare:**

    <x-fastcomments url-id="my-page" />

**Widget za live chat:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Broj komentara:**

    <x-fastcomments-comment-count url-id="my-page" />

Svaka komponenta podržava propse kao što su `url`, `locale`, `readonly`, `has-dark-background` i `default-sort-direction`. Skripte se učitavaju
asinkrono i deduplikuju, tako da možete bezbedno postaviti više widgeta na istu stranicu.

### Automatski SSO

SSO se može omogućiti sa dve promenljive okruženja:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Kada se omogući, komponente za komentare i live chat automatski čitaju `Auth::user()` i ubacuju potpisani SSO payload u konfiguraciju widgeta.
Prijavljeni korisnici se bez problema autentifikuju. Gosti vide linkove za prijavu i odjavu koji podrazumevano vode na vaše Laravel `login` i `logout` imenovane rute.

Postoje dva načina da kontrolišete kako se vaš User model mapira na podatke o korisniku FastComments:

**Mapping zasnovan na konfiguraciji** - postavite imena atributa (uključujući tačkaste notacije) ili callable funkcije u `config/fastcomments.php`:

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

Podržani su i Secure SSO (HMAC-potpisan, preporučuje se za produkciju) i Simple SSO režimi.

### API Integracija

Paket takođe obavija FastComments API sa fasadom, zavisnom injekcijom i direktnom SDK klijent injekcijom:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token za prilagođenu upotrebu
$token = FastComments::sso()->tokenFor($user);
```

### EU Podaci o Rezidentnosti

Za kupce koji koriste naš EU region, jedna promenljiva okruženja prebacuje sve krajnje tačke - widgete, API pozive i SSO:

    FASTCOMMENTS_REGION=eu

### Zaključak

Nadamo se da će vam ovaj paket olakšati dodavanje FastComments-a u vaše Laravel aplikacije. Sada je dostupan na <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
a izvor je na <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Javite nam u komentarima ako imate neka povratna mišljenja!

Pozdrav!

{{/isPost}}

---