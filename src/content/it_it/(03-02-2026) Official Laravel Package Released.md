---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Pacchetto Laravel Ufficiale Rilasciato[/postlink]

{{#unless isPost}}
Abbiamo rilasciato un pacchetto Laravel ufficiale con componenti Blade plug-and-play, SSO automatico e integrazione API.
{{/unless}}

{{#isPost}}

### Novità

Siamo lieti di annunciare il rilascio del nostro pacchetto Laravel ufficiale, `fastcomments/laravel`. Se stai costruendo con Laravel e desideri aggiungere
commenti, chat dal vivo o conteggi dei commenti alla tua applicazione, ora puoi farlo con una sola installazione di Composer e un paio di componenti Blade.

Il pacchetto supporta Laravel 10, 11 e 12 su PHP 8.1+.

### Iniziare

Installa con Composer:

    composer require fastcomments/laravel

Successivamente, aggiungi il tuo ID tenant e la chiave API al tuo `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Tutto qui. Il provider di servizi e la facciata vengono scoperti automaticamente - non è necessaria registrazione manuale. Puoi pubblicare il file di configurazione per ulteriori personalizzazioni:

    php artisan vendor:publish --tag=fastcomments-config

### Componenti Blade Plug-and-Play

Il pacchetto include tre componenti Blade che puoi utilizzare direttamente nei tuoi template:

**Widget dei commenti:**

    <x-fastcomments url-id="my-page" />

**Widget della chat dal vivo:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Conteggio dei commenti:**

    <x-fastcomments-comment-count url-id="my-page" />

Ogni componente supporta proprietà come `url`, `locale`, `readonly`, `has-dark-background` e `default-sort-direction`. Gli script vengono caricati
in modo asincrono e deduplicati, quindi puoi posizionare in sicurezza più widget sulla stessa pagina.

### SSO Automatico

Il SSO può essere abilitato con due variabili ambiente:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Una volta abilitato, i componenti di commento e chat dal vivo leggono automaticamente `Auth::user()` e iniettano il payload SSO firmato nella configurazione del widget.
Gli utenti connessi vengono autenticati senza problemi. Gli ospiti vedono collegamenti di accesso e disconessione che predefiniscono i tuoi percorsi nominati `login` e `logout` di Laravel.

Ci sono due modi per controllare come il tuo modello User si mappa ai dati utente di FastComments:

**Mappatura basata sulla configurazione** - impostare i nomi degli attributi (inclusa la notazione a punti) o funzioni nel file `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mappatura basata su interfaccia** - implementare `MapsToFastCommentsUser` nel tuo modello User per un controllo completo:

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

Sia il SSO Sicuro (firmato HMAC, raccomandato per la produzione) che i modi SSO Semplice sono supportati.

### Integrazione API

Il pacchetto avvolge anche l'API di FastComments con una facciata, iniezione di dipendenza e iniezione diretta del client SDK:

```php
use FastComments\Laravel\Facades\FastComments;

// API Admin
$comments = FastComments::admin()->getComments(...);

// API Pubblica
$counts = FastComments::publicApi()->getCommentCounts(...);

// Token SSO per uso personalizzato
$token = FastComments::sso()->tokenFor($user);
```

### Residenza dei Dati UE

Per i clienti che utilizzano la nostra regione UE, una sola variabile ambiente commuta tutti gli endpoint - widget, chiamate API e SSO:

    FASTCOMMENTS_REGION=eu

### In Conclusione

Speriamo che questo pacchetto renda facile aggiungere FastComments alle tue applicazioni Laravel. È disponibile ora su <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
e il codice sorgente è su <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Faccelo sapere qui sotto se hai qualche feedback!

Saluti!

{{/isPost}}

---