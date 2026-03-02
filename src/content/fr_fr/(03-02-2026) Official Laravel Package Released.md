---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Package Laravel Officiel Sorti[/postlink]

{{#unless isPost}}
Nous avons publié un package Laravel officiel avec des composants Blade intégrables, SSO automatique et intégration API.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous sommes ravis d'annoncer la sortie de notre package Laravel officiel, `fastcomments/laravel`. Si vous développez avec Laravel et souhaitez ajouter
des commentaires, un chat en direct ou des comptes de commentaires à votre application, vous pouvez désormais le faire avec une seule installation Composer et quelques composants Blade.

Le package prend en charge Laravel 10, 11 et 12 sur PHP 8.1+.

### Commencer

Installez avec Composer :

    composer require fastcomments/laravel

Ajoutez ensuite votre ID de locataire et votre clé API à votre `.env` :

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

C'est tout. Le fournisseur de services et la façade sont auto-découverts - aucune inscription manuelle n'est nécessaire. Vous pouvez publier le fichier de configuration pour davantage de personnalisation :

    php artisan vendor:publish --tag=fastcomments-config

### Composants Blade Intégrables

Le package est livré avec trois composants Blade que vous pouvez utiliser directement dans vos templates :

**Widget de commentaires :**

    <x-fastcomments url-id="my-page" />

**Widget de chat en direct :**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Compte de commentaires :**

    <x-fastcomments-comment-count url-id="my-page" />

Chaque composant prend en charge des props telles que `url`, `locale`, `readonly`, `has-dark-background`, et `default-sort-direction`. Les scripts sont chargés
de manière asynchrone et dédupliqués, vous pouvez donc placer plusieurs widgets sur la même page en toute sécurité.

### SSO Automatique

Le SSO peut être activé avec deux variables d'environnement :

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Une fois activé, les composants de commentaire et de chat en direct lisent automatiquement `Auth::user()` et injectent la charge utile SSO signée dans la configuration du widget. 
Les utilisateurs connectés sont authentifiés sans interruption. Les invités voient des liens de connexion et de déconnexion qui pointent par défaut vers vos routes nommées `login` et `logout` de Laravel.

Il existe deux façons de contrôler comment votre modèle User correspond aux données utilisateur FastComments :

**Mapping basé sur la configuration** - définissez les noms des attributs (y compris la notation par points) ou les callable dans `config/fastcomments.php` :

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Mapping basé sur des interfaces** - implémentez `MapsToFastCommentsUser` sur votre modèle User pour un contrôle total :

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

Les modes SSO Sécurisé (signé HMAC, recommandé pour la production) et SSO Simple sont pris en charge.

### Intégration API

Le package enveloppe également l'API FastComments avec une façade, l'injection de dépendance et l'injection directe du client SDK :

```php
use FastComments\Laravel\Facades\FastComments;

// API Admin
$comments = FastComments::admin()->getComments(...);

// API Publique
$counts = FastComments::publicApi()->getCommentCounts(...);

// Jeton SSO pour usage personnalisé
$token = FastComments::sso()->tokenFor($user);
```

### Résidence des Données UE

Pour les clients utilisant notre région UE, une seule variable d'environnement change tous les points de terminaison - widgets, appels API et SSO :

    FASTCOMMENTS_REGION=eu

### En Conclusion

Nous espérons que ce package facilite l'ajout de FastComments à vos applications Laravel. Il est disponible dès maintenant sur <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
et la source se trouve sur <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Faites-nous savoir ci-dessous si vous avez des retours !

Cheers !

{{/isPost}}

---