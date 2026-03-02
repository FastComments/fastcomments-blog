---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Επίσημο Πακέτο Laravel Κυκλοφόρησε[/postlink]

{{#unless isPost}}
Έχουμε κυκλοφορήσει ένα επίσημο πακέτο Laravel με έτοιμα Blade components, αυτόματο SSO, και ενσωμάτωση API.
{{/unless}}

{{#isPost}}

### Τι Νέο

Είμαστε ενθουσιασμένοι να ανακοινώσουμε την κυκλοφορία του επίσημου πακέτου Laravel μας, `fastcomments/laravel`. Εάν χτίζετε με Laravel και θέλετε να προσθέσετε
σχόλια, ζωντανή συνομιλία ή μετρήσεις σχολίων στην εφαρμογή σας, μπορείτε τώρα να το κάνετε με μια μόνο εγκατάσταση Composer και μερικά Blade components.

Το πακέτο υποστηρίζει Laravel 10, 11, και 12 σε PHP 8.1+.

### Ξεκινώντας

Εγκαταστήστε με Composer:

    composer require fastcomments/laravel

Στη συνέχεια, προσθέστε το tenant ID και το API key σας στο `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Αυτό είναι όλο. Ο πάροχος υπηρεσιών και το facade ανακαλύπτονται αυτόματα - δεν απαιτείται χειροκίνητη εγγραφή. Μπορείτε να δημοσιεύσετε το αρχείο ρυθμίσεων για περαιτέρω προσαρμογή:

    php artisan vendor:publish --tag=fastcomments-config

### Έτοιμα Blade Components

Το πακέτο περιλαμβάνει τρία Blade components που μπορείτε να χρησιμοποιήσετε απευθείας στα templates σας:

**Widget Σχολίων:**

    <x-fastcomments url-id="my-page" />

**Widget Ζωντανής Συνομιλίας:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Μετρητής Σχολίων:**

    <x-fastcomments-comment-count url-id="my-page" />

Κάθε component υποστηρίζει props όπως `url`, `locale`, `readonly`, `has-dark-background`, και `default-sort-direction`. Τα scripts φορτώνονται
ασύγχρονα και αποκρύπτονται, ώστε να μπορείτε να τοποθετήσετε με ασφάλεια πολλαπλά widgets στην ίδια σελίδα.

### Αυτόματο SSO

Το SSO μπορεί να ενεργοποιηθεί με δύο μεταβλητές περιβάλλοντος:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Αφού ενεργοποιηθεί, τα components σχολίων και ζωντανής συνομιλίας διαβάζουν αυτόματα το `Auth::user()` και ενσωματώνουν το υπογεγραμμένο SSO payload στη ρύθμιση του widget.
Οι συνδεδεμένοι χρήστες αυθεντικοποιούνται απρόσκοπτα. Οι επισκέπτες βλέπουν συνδέσμους σύνδεσης και αποσύνδεσης που προγραμματίζονται να οδηγούν στις ονομασμένες διαδρομές `login` και `logout` του Laravel σας.

Υπάρχουν δύο τρόποι για να ελέγξετε πώς το μοντέλο User σας αντιστοιχεί στα δεδομένα χρήστη του FastComments:

**Αντιστοίχιση βάσει ρυθμίσεων** - ορίστε τα ονόματα χαρακτηριστικών (συμπεριλαμβανομένης της σημειογραφίας τελείας) ή callable στο `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Αντιστοίχιση βάσει διεπαφής** - εφαρμόστε το `MapsToFastCommentsUser` στο μοντέλο User σας για πλήρη έλεγχο:

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

Υποστηρίζονται τόσο οι ασφαλείς SSO (υπογεγραμμένα HMAC, συνιστάται για παραγωγή) όσο και οι απλοί τρόποι SSO.

### Ενσωμάτωση API

Το πακέτο περιλαμβάνει επίσης την API του FastComments με ένα facade, εξάρτηση εισαγωγής και άμεση εισαγωγή SDK client:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token για προσαρμοσμένη χρήση
$token = FastComments::sso()->tokenFor($user);
```

### Διαμονή Δεδομένων ΕΕ

Για τους πελάτες που χρησιμοποιούν την περιοχή ΕΕ, μια μόνο μεταβλητή περιβάλλοντος αλλάζει όλα τα endpoints - widgets, κλήσεις API, και SSO:

    FASTCOMMENTS_REGION=eu

### Συμπερασματικά

Ελπίζουμε αυτό το πακέτο να διευκολύνει την προσθήκη του FastComments στις εφαρμογές Laravel σας. Είναι διαθέσιμο τώρα στο <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
και η πηγή είναι στο <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Ενημερώστε μας παρακάτω αν έχετε κάποιο σχόλιο!

Καλή συνέχεια!

{{/isPost}}

---