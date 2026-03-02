---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]Επίσημο Πακέτο Laravel Κυκλοφόρησε[/postlink]

{{#unless isPost}}
Έχουμε κυκλοφορήσει ένα επίσημο πακέτο Laravel με drop-in Blade components, αυτόματο SSO και integration API.
{{/unless}}

{{#isPost}}

### Νέα

Είμαστε ενθουσιασμένοι να ανακοινώσουμε την κυκλοφορία του επίσημου πακέτου Laravel μας, `fastcomments/laravel`. Αν αναπτύσσετε με Laravel και θέλετε να προσθέσετε
σχολιασμό, ζωντανή συνομιλία ή μετρήσεις σχολίων στην εφαρμογή σας, μπορείτε τώρα να το κάνετε με μία μόνο εγκατάσταση Composer και μερικά Blade components.

Το πακέτο υποστηρίζει το Laravel 10, 11 και 12 σε PHP 8.1+.

### Πρώτα Βήματα

Εγκαταστήστε με τον Composer:

    composer require fastcomments/laravel

Στη συνέχεια, προσθέστε το Tenant ID και το API key σας στο αρχείο `.env`:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

Αυτό είναι. Ο πάροχος υπηρεσιών και η facade ανακαλύπτονται αυτόματα - δεν χρειάζεται χειροκίνητη εγγραφή. Μπορείτε να δημοσιεύσετε το αρχείο ρύθμισης για περαιτέρω προσαρμογή:

    php artisan vendor:publish --tag=fastcomments-config

### Drop-In Blade Components

Το πακέτο περιλαμβάνει τρία Blade components που μπορείτε να χρησιμοποιήσετε απευθείας στα templates σας:

**Widget σχολίων:**

    <x-fastcomments url-id="my-page" />

**Widget ζωντανής συνομιλίας:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**Μετρήσεις σχολίων:**

    <x-fastcomments-comment-count url-id="my-page" />

Κάθε component υποστηρίζει props όπως `url`, `locale`, `readonly`, `has-dark-background`, και `default-sort-direction`. Τα scripts φορτώνονται
asynchronously και deduplicated, έτσι ώστε να μπορείτε να τοποθετήσετε πολλαπλά widgets στην ίδια σελίδα με ασφάλεια.

### Αυτόματο SSO

Το SSO μπορεί να ενεργοποιηθεί με δύο περιβαλλοντικές μεταβλητές:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

Μόλις ενεργοποιηθεί, τα components σχολίων και ζωντανής συνομιλίας διαβάζουν αυτόματα το `Auth::user()` και εισάγουν το υπογεγραμμένο SSO payload στη ρύθμιση του widget.
Οι συνδεδεμένοι χρήστες πιστοποιούνται χωρίς καθυστέρηση. Οι επισκέπτες βλέπουν συνδέσμους σύνδεσης και αποσύνδεσης που προεπιλέγονται στους ονόματα διαδρομές `login` και `logout` του Laravel σας.

Υπάρχουν δύο τρόποι για να ελέγξετε πώς το User model σας αντιστοιχεί στα δεδομένα χρηστών FastComments:

**Αντιστοίχιση βάσει ρύθμισης** - ορίστε ονόματα χαρακτηριστικών (συμπεριλαμβανομένης της dot notation) ή callable στο `config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**Αντιστοίχιση βάσει διεπαφής** - εφαρμόστε το `MapsToFastCommentsUser` στο User model σας για πλήρη έλεγχο:

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

Υποστηρίζονται και οι δύο Secure SSO (HMAC-signed, συνιστώμενο για παραγωγή) και Simple SSO modes.

### Ενσωμάτωση API

Το πακέτο περιλαμβάνει επίσης την FastComments API με μια facade, dependency injection και άμεση εισαγωγή SDK client:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token για προσαρμοσμένη χρήση
$token = FastComments::sso()->tokenFor($user);
```

### EU Data Residency

Για πελάτες που χρησιμοποιούν την περιοχή μας στην ΕΕ, μια μόνο περιβαλλοντική μεταβλητή αλλάζει όλα τα endpoints - widgets, κλήσεις API και SSO:

    FASTCOMMENTS_REGION=eu

### Συμπέρασμα

Ελπίζουμε ότι αυτό το πακέτο διευκολύνει την προσθήκη FastComments στις εφαρμογές Laravel σας. Είναι διαθέσιμο τώρα στο <a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
και η πηγή είναι στο <a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

Ενημερώστε μας παρακάτω αν έχετε οποιαδήποτε ανατροφοδότηση!

Cheers!

{{/isPost}}

---