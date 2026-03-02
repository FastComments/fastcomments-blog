---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Zvanični Laravel Paket Objavljen[/postlink]

{{#unless isPost}}
Objavili smo zvanični Laravel paket sa jednostavnim Blade komponentama, automatskim SSO-om i integracijom API-ja.
{{/unless}}

{{#isPost}}

### Šta je Novo

Sa radošću najavljujemo objavljivanje našeg zvaničnog Laravel paketa, `fastcomments/laravel`. Ako radite sa Laravel-om i želite da dodate
komentare, live chat ili broj komentara u vašu aplikaciju, sada to možete učiniti sa jednom Composer instalacijom i nekoliko Blade komponenti.

Paket podržava Laravel 10, 11 i 12 na PHP 8.1+.

### Kako Početi

Instalirajte pomoću Composer-a:

    composer require fastcomments/laravel

Zatim dodajte svoj tenant ID i API ključ u vaš `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

To je to. Servisni provajder i fasada se automatski otkrivaju - nema potrebe za ručnom registracijom. Možete objaviti konfiguracioni fajl za dalju prilagodbu:

    php artisan vendor:publish --tag=fastcomments-config

### Blade Komponente

Paket dolazi sa tri Blade komponente koje možete koristiti direktno u vašim šablonima:

**Widget za komentare:**

    <x-fastcomments url-id="my-page" />

**Widget za live chat:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Broj komentara:**

    <x-fastcomments-comment-count url-id="my-page" />

Svaka komponenta podržava props kao što su `url`, `locale`, `readonly`, `has-dark-background`, i `default-sort-direction`. Skripte se učitavaju
asinhrono i deduplikuju, tako da možete sigurno postaviti više widgeta na istoj stranici.

### Automatski SSO

SSO se može omogućiti sa dve promenljive okruženja:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Kada je omogućeno, komponente za komentare i live chat automatski čitaju `Auth::user()` i ubacuju potpisani SSO payload u konfiguraciju widgeta.
Prijavljeni korisnici se besprekorno autentifikuju. Gosti vide linkove za prijavu i odjavu koji podrazumevaju vaše Laravel `login` i `logout` imenovane rute.

Postoje dva načina da kontrolišete kako se vaš User model mapira na podatke o korisnicima u FastComments-u:

**Mapiranje zasnovano na konfiguraciji** - postavite nazive atributa (uključujući tačku) ili pozive u `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mapiranje zasnovano na interfejsu** - implementirajte `MapsToFastCommentsUser` na vašem User modelu za potpunu kontrolu:

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

Podržani su i Secure SSO (HMAC potpisan, preporučuje se za produkciju) i Simple SSO modovi.

### API Integracija

Paket takođe obavija FastComments API sa fasadom, injekcijom zavisnosti i direktnom injekcijom SDK klijenta:

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

Za korisnike koji koriste našu EU regiju, jedna promenljiva okruženja prebacuje sve endpointe - widgete, API pozive i SSO:

    FASTCOMMENTS_REGION=eu

### Na Zaključak

Nadamo se da će ovaj paket olakšati dodavanje FastComments u vaše Laravel aplikacije. Sada je dostupan na <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
a izvor je na <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Javite nam u komentarima ako imate bilo kakve povratne informacije!

Pozdrav!

{{/isPost}}