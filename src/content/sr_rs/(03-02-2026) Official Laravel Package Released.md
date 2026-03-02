---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Zvanični Laravel paket objavljen[/postlink]

{{#unless isPost}}
Objavili smo zvanični Laravel paket sa drop-in Blade komponentama, automatskim SSO-om i API integracijom.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa zadovoljstvom najavljujemo objavljivanje našeg zvaničnog Laravel paketa, `fastcomments/laravel`. Ako pravite aplikaciju sa Laravel-om i želite da dodate
komentarisanje, live chat ili brojanje komentara, sada to možete učiniti sa jednom Composer instalacijom i nekoliko Blade komponenti.

Paket podržava Laravel 10, 11 i 12 na PHP 8.1+.

### Kako početi

Instalirajte pomoću Composera:

    composer require fastcomments/laravel

Zatim dodajte svoj ID zakupca i API ključ u vaš `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

To je to. Pružalac usluga i fasada se automatski nalaze - nema potrebe za ručnom registracijom. Možete objaviti konfiguracioni fajl za dalju prilagodbu:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade komponente

Paket dolazi sa tri Blade komponente koje možete koristiti direktno u svojim šablonima:

**Widget za komentare:**

    <x-fastcomments url-id="my-page" />

**Widget za live chat:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Broj komentara:**

    <x-fastcomments-comment-count url-id="my-page" />

Svaka komponenta podržava props poput `url`, `locale`, `readonly`, `has-dark-background`, i `default-sort-direction`. Skripte se učitavaju
asinhrono i de-dupliraju, tako da možete sigurno postaviti više widget-a na istu stranicu.

### Automatski SSO

SSO se može omogućiti sa dva okruženjska varijable:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Jednom kada je omogućen, komponente za komentare i live chat automatski čitaju `Auth::user()` i ubacuju potpisani SSO payload u konfiguraciju widget-a.
Prijavljeni korisnici se nesmetano autentifikuju. Gosti vide linkove za prijavu i odjavu koji se podrazumevaju na vaše Laravel `login` i `logout` imenovane rute.

Postoje dva načina da kontrolišete kako se vaš User model mapira na FastComments korisničke podatke:

**Mapiranje zasnovano na konfiguraciji** - postavite imena atributa (uključujući tačku notaciju) ili callable u `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mapiranje zasnovano na interfejsu** - implementirajte `MapsToFastCommentsUser` u vašem User modelu za potpunu kontrolu:

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

Podržani su i Secure SSO (HMAC-potpisan, preporučuje se za proizvodnju) i Simple SSO modovi.

### API Integracija

Paket takođe obavija FastComments API sa fasadom, injekcijom zavisnosti i direktnom SDK klijent injekcijom:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token za prilagođenu upotrebu
$token = FastComments::sso()->tokenFor($user);
```

### EU Podaci o Residency

Za korisnike koji koriste našu EU regiju, jedna okruženjska varijabla prebacuje sve endpoint-e - widgete, API pozive i SSO:

    FASTCOMMENTS_REGION=eu

### Na kraju

Nadamo se da će ovaj paket olakšati dodavanje FastComments u vaše Laravel aplikacije. Dostupan je sada na <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
a izvor je na <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Obavestite nas u komentarima ispod ako imate bilo kakvih povratnih informacija!

Pozdrav!

{{/isPost}}