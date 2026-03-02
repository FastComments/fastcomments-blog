---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Objavljen službeni Laravel paket[/postlink]

{{#unless isPost}}
Objavili smo službeni Laravel paket s Blade komponentama koje se jednostavno dodaju, automatskim SSO-om i API integracijom.
{{/unless}}

{{#isPost}}

### Što je novo

Uzbuđeni smo što možemo najaviti izdavanje našeg službenog Laravel paketa, `fastcomments/laravel`. Ako radite s Laravelom i želite dodati
komentare, live chat ili broj komentara u svoju aplikaciju, sada to možete učiniti s jedinstvenom Composer instalacijom i nekoliko Blade komponenti.

Paket podržava Laravel 10, 11 i 12 na PHP 8.1+.

### Kako započeti

Instalirajte pomoću Composer-a:

    composer require fastcomments/laravel

Zatim dodajte svoj ID najmodavca i API ključ u svoj `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

To je to. Pružatelj usluge i fasada se automatski otkrivaju - nema potrebe za ručnom registracijom. Možete objaviti konfiguracijsku datoteku za daljnju prilagodbu:

    php artisan vendor:publish --tag=fastcomments-config

### Blade komponente koje se jednostavno dodaju

Paket dolazi s tri Blade komponente koje možete koristiti izravno u svojim predlošcima:

**Widget za komentare:**

    <x-fastcomments url-id="my-page" />

**Widget za live chat:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Broj komentara:**

    <x-fastcomments-comment-count url-id="my-page" />

Svaka komponenta podržava props kao što su `url`, `locale`, `readonly`, `has-dark-background` i `default-sort-direction`. Skripte se učitavaju
asinkrono i dedupliraju, tako da možete sigurno postaviti više widgeta na istoj stranici.

### Automatski SSO

SSO se može omogućiti s dvije varijable okruženja:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Nakon omogućavanja, komponente komentara i live chata automatski čitaju `Auth::user()` i injektiraju potpisani SSO payload u konfiguraciju widgeta.
Prijavljeni korisnici se neprimjetno autentificiraju. Gosti vide poveznice za prijavu i odjavu koje se prema zadanim postavkama odnose na vaše Laravel `login` i `logout` imenovane rute.

Postoje dva načina za upravljanje načinom na koji se vaš model korisnika mapira na korisničke podatke FastComments:

**Mapping temeljen na konfiguraciji** - postavite imena atributa (uključujući dot notaciju) ili pozivljive u `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mapping temeljen na sučelju** - implementirajte `MapsToFastCommentsUser` u vašem modelu korisnika za potpunu kontrolu:

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

Podržani su i Secure SSO (HMAC potpisan, preporučeno za produkciju) i Simple SSO načini.

### API integracija

Paket također obavija FastComments API s fasadom, ovisno injekcijom i izravnom injekcijom SDK klijenta:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token za prilagođenu upotrebu
$token = FastComments::sso()->tokenFor($user);
```

### EU podaci o rezidenciji

Za kupce koji koriste našu EU regiju, jedna varijabla okruženja mijenja sve krajnje točke - widgete, API pozive i SSO:

    FASTCOMMENTS_REGION=eu

### Na kraju

Nadamo se da će ovaj paket olakšati dodavanje FastComments u vaše Laravel aplikacije. Dostupan je sada na <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
i izvor je na <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Javite nam u nastavku imate li kakve povratne informacije!

Pozdrav!

{{/isPost}}

---