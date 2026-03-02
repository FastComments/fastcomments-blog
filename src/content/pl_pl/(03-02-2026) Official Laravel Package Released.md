---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Oficjalny pakiet Laravel wydany[/postlink]

{{#unless isPost}}
Wydaliśmy oficjalny pakiet Laravel z komponentami Blade do łatwego wdrożenia, automatycznym SSO i integracją API.
{{/unless}}

{{#isPost}}

### Co nowego

Z radością ogłaszamy wydanie naszego oficjalnego pakietu Laravel, `fastcomments/laravel`. Jeśli budujesz aplikację w Laravel i chcesz dodać
komentarze, czat na żywo lub liczbę komentarzy do swojej aplikacji, możesz to teraz zrobić za pomocą jednego zainstalowania przez Composer i kilku komponentów Blade.

Pakiet wspiera Laravel 10, 11 i 12 na PHP 8.1+.

### Jak zacząć

Zainstaluj za pomocą Composer:

    composer require fastcomments/laravel

Następnie dodaj swój identyfikator najemcy i klucz API do pliku `.env`:

    FASTCOMMENTS_TENANT_ID=twój-identyfikator-najemcy
    FASTCOMMENTS_API_KEY=twój-klucz-api

To wszystko. Dostawca usług i fasada są automatycznie odkrywane - nie ma potrzeby ręcznej rejestracji. Możesz opublikować plik konfiguracyjny w celu dalszej personalizacji:

    php artisan vendor:publish --tag=fastcomments-config

### Komponenty Blade do łatwego wdrożenia

Pakiet dostarczany jest z trzema komponentami Blade, które możesz używać bezpośrednio w swoich szablonach:

**Widget komentarzy:**

    <x-fastcomments url-id="moja-strona" />

**Widget czatu na żywo:**

    <x-fastcomments-live-chat url-id="moje-pokój-czatu" />

**Liczba komentarzy:**

    <x-fastcomments-comment-count url-id="moja-strona" />

Każdy komponent obsługuje właściwości takie jak `url`, `locale`, `readonly`, `has-dark-background` oraz `default-sort-direction`. Skrypty są ładowane
asynchronicznie i deduplikowane, więc możesz bezpiecznie umieścić wiele widgetów na tej samej stronie.

### Automatyczne SSO

SSO można włączyć za pomocą dwóch zmiennych środowiskowych:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Po włączeniu komponenty komentarzy i czatu na żywo automatycznie odczytują `Auth::user()` i wstrzykują podpisany ładunek SSO do konfiguracji widgetu.
Zalogowani użytkownicy są bezproblemowo uwierzytelniani. Goście widzą linki do logowania i wylogowywania, które domyślnie prowadzą do nazwanych tras Laravel `login` i `logout`.

Istnieją dwa sposoby na kontrolowanie, jak Twój model użytkownika mapuje się na dane użytkowników FastComments:

**Mapowanie oparte na konfiguracji** - ustaw nazwy atrybutów (w tym notację kropkową) lub funkcje w `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mapowanie oparte na interfejsie** - zaimplementuj `MapsToFastCommentsUser` w swoim modelu użytkownika dla pełnej kontroli:

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

Obsługiwane są zarówno tryby Secure SSO (podpisane HMAC, zalecane do użycia w produkcji), jak i Simple SSO.

### Integracja API

Pakiet również opakowuje API FastComments w fasadę, wstrzykiwanie zależności i bezpośrednie wstrzykiwanie klienta SDK:

```php
use FastComments\Laravel\Facades\FastComments;

// API dla administratorów
$comments = FastComments::admin()->getComments(...);

// API publiczne
$counts = FastComments::publicApi()->getCommentCounts(...);

// Token SSO do użytku własnego
$token = FastComments::sso()->tokenFor($user);
```

### Mieszkanie danych w UE

Dla klientów korzystających z naszego regionu UE, pojedyncza zmienna środowiskowa zmienia wszystkie punkty końcowe - widgety, wywołania API i SSO:

    FASTCOMMENTS_REGION=eu

### Na zakończenie

Mamy nadzieję, że ten pakiet ułatwi dodawanie FastComments do Twoich aplikacji Laravel. Jest już dostępny na <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
a źródło znajduje się na <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHubie</a>.

Daj nam znać poniżej, jeśli masz jakieś uwagi!

Pozdrawiamy!

{{/isPost}}

---