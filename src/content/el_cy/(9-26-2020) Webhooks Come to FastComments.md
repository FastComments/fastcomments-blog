---
[category:API & Development]
###### [postdate]
# [postlink]Τα Webhooks Έρχονται στο FastComments[/postlink]

{{#unless isPost}}
Το FastComments μπορεί τώρα να καλεί το API σας για τη δημιουργία, ενημέρωση και αφαίρεση σχολίων.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Αυτό το Άρθρο Περιέχει Τεχνική Ορολογία

#### Τι είναι Νέο

Με το FastComments είναι πλέον δυνατό να καλείται ένα API endpoint whenever πρόσθετε, ενημερώνετε ή αφαιρείτε ένα σχόλιο από το σύστημά μας.

Το επιτυγχάνουμε με ασύγχρονα webhooks μέσω HTTP/HTTPS.

#### Πώς να το Χρησιμοποιήσετε

Αρχικά, πλοηγηθείτε στη <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">διαχείριση Webhooks</a>. Αυτό είναι προσβάσιμο μέσω Διαχείριση Δεδομένων -> Webhooks.

Από εκεί μπορείτε να καθορίσετε endpoints για κάθε τύπο γεγονότος σχολίου.

Για κάθε τύπο γεγονότος, βεβαιωθείτε ότι έχετε κάνει κλικ στο **Αποστολή Δοκιμαστικού Payload** για να διασφαλίσετε ότι έχετε ρυθμίσει σωστά την ενσωμάτωσή σας. Δείτε την επόμενη ενότητα, "Δοκιμή", για λεπτομέρειες.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Παράδειγμα Ρυθμίσεων Webhooks" title="Παράδειγμα Ρυθμίσεων Webhooks" class="lozad" />
</div>

#### Δοκιμή

Στη <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">διαχείριση Webhooks</a> υπάρχουν κουμπιά "Αποστολή Δοκιμαστικού Payload" για κάθε τύπο γεγονότος (Δημιουργία, Ενημέρωση, Διαγραφή). Τα γεγονότα Δημιουργίας και Ενημέρωσης στέλνουν ένα ψεύτικο αντικείμενο WebhookComment, ενώ η δοκιμή Διαγραφής θα στείλει ένα ψεύτικο σώμα αιτήματος με μόνο ένα ID.

Η δοκιμή θα πραγματοποιήσει δύο κλήσεις για να επαληθεύσει τον κωδικό απόκρισης για τις "ευτυχείς" (σωστό API Key) και "καταθλιπτικές" (μη έγκυρο API key) καταστάσεις.

Όταν η δοκιμή στέλνει έναν μη έγκυρο API key θα πρέπει να επιστρέψετε έναν κωδικό κατάστασης 401 για να περάσει πλήρως η δοκιμή. Αν δεν ελέγξετε σωστά την τιμή του token, θα δείτε ένα σφάλμα όπως:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Αποτυχία Δοκιμής Επαλήθευσης Webhooks" title="Αποτυχία Δοκιμής Επαλήθευσης Webhooks" class="lozad" />
</div>

#### Η Δομή του Σχολίου
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### Η Δομή του Γεγονότος "Δημιουργία"

Το σώμα αίτησης του γεγονότος "δημιουργία" είναι ένα αντικείμενο WebhookComment.

#### Η Δομή του Γεγονότος "Ενημέρωση"

Το σώμα αίτησης του γεγονότος "ενημέρωση" είναι ένα αντικείμενο WebhookComment.

#### Η Δομή του Γεγονότος "Διαγραφή"

Το σώμα αίτησης του γεγονότος "διαγραφή" είναι ένα αντικείμενο WebhookComment, **αλλά περιέχει μόνο το id**.

#### Γιατί χρησιμοποιούν και οι Δημιουργίες και οι Ενημερώσεις το HTTP PUT και όχι το POST;

**Δεδομένου ότι όλα τα αιτήματά μας περιέχουν ένα ID**, η επανάληψη του ίδιου αιτήματος Δημιουργίας ή Ενημέρωσης **δεν θα πρέπει να δημιουργεί νέα αντικείμενα από την πλευρά σας**. Αυτό σημαίνει ότι αυτές οι κλήσεις είναι ιδεοσυγκρατικές και θα πρέπει να είναι PUT γεγονότα σύμφωνα με την προδιαγραφή HTTP.

#### Πώς Λειτουργεί

Όλες οι αλλαγές στο αντικείμενο Σχολίου στο σύστημα πυροδοτούν ένα γεγονός το οποίο καταλήγει σε μια ουρά. Μπορείτε να παρακολουθήσετε αυτή την ουρά στη <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">διαχείριση Webhooks</a> σε περίπτωση που το API σας πέσει. Εάν μια αίτηση προς το API σας αποτύχει, θα την ξαναβάλουμε στην ουρά με ένα πρόγραμμα. Αυτό το πρόγραμμα είναι 1 Λεπτό * ο αριθμός επαναλήψεων. Αν η κλήση αποτύχει μία φορά, θα προσπαθήσει ξανά σε ένα λεπτό. Αν αποτύχει δύο φορές, θα περιμένει δύο λεπτά, και ούτω καθεξής. 
Αυτό συμβαίνει ώστε να μην φορτώσουμε το API σας αν πέσει λόγω σχετικών λόγων φόρτωσης.

#### Ασφάλεια & API Token

Στη κεφαλίδα της αίτησης θα περάσουμε το <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> σας στην παράμετρο που ονομάζεται "token".

Εάν δεν ελέγξετε σωστά αυτή την παράμετρο, η ενσωμάτωσή σας δεν θα χαρακτηριστεί ως Επαληθευμένη. Αυτό είναι μια προστασία για να διασφαλιστεί ότι οποιαδήποτε ενσωμάτωση με το FastComments είναι ασφαλής.

#### Συμπερασματικά

Ελπίζουμε να βρείτε την ενσωμάτωσή των Webhook του FastComments εύκολη στην κατανόηση και γρήγορη στη ρύθμιση.

Εάν έχετε περαιτέρω ερωτήσεις, μη διστάσετε να επικοινωνήσετε με την <a href="https://fastcomments.com/auth/my-account/help" target="_blank">σελίδα υποστήριξης πελατών</a>.

Ευχαριστούμε!

{{/isPost}}

---