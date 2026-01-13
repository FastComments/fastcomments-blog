---
[category:API & Development]
###### [postdate]
# [postlink]Τα Webhooks Έρχονται στο FastComments[/postlink]

{{#unless isPost}}
Το FastComments μπορεί πλέον να καλεί το API σας για τη δημιουργία, τις ενημερώσεις και την αφαίρεση σχολίων.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Αυτό το Άρθρο Περιέχει Τεχνική Ορολογία

#### Τι Νέο

Με το FastComments είναι πλέον δυνατό να καλέσετε ένα endpoint API όποτε ένα σχόλιο προστεθεί, ενημερωθεί ή αφαιρεθεί από το σύστημά μας.

Το επιτυγχάνουμε με ασύγχρονα webhooks μέσω HTTP/HTTPS.

#### Πώς να το Χρησιμοποιήσετε

Αρχικά, πλοηγηθείτε στη <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Διαχείριση Webhooks</a>. Αυτό είναι προσβάσιμο μέσω Διαχείριση Δεδομένων -> Webhooks.

Από εκεί μπορείτε να καθορίσετε endpoints για κάθε τύπο γεγονότος σχολίου.

Για κάθε τύπο γεγονότος, βεβαιωθείτε ότι έχετε κάνει κλικ στο **Αποστολή Δοκιμαστικού Payload** για να διασφαλίσετε ότι έχετε ρυθμίσει σωστά την ενσωμάτωσή σας. Δείτε την επόμενη ενότητα, "Δοκιμή", για λεπτομέρειες.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Παράδειγμα Ρύθμισης Webhooks" title="Παράδειγμα Ρύθμισης Webhooks" class="lozad" />
</div>

#### Δοκιμή

Στη <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Διαχείριση Webhooks</a> υπάρχουν κουμπιά "Αποστολή Δοκιμαστικού Payload" για κάθε
τύπο γεγονότος (Δημιουργία, Ενημέρωση, Διαγραφή). Οι γεγονότα Δημιουργίας και Ενημέρωσης στέλνουν ένα ψεύτικο αντικείμενο WebhookComment, ενώ η δοκιμή της Διαγραφής θα στείλει ένα ψεύτικο σώμα αιτήματος με μόλις μια ID.

Η δοκιμή θα κάνει δύο κλήσεις για να επαληθεύσει τον κωδικό απόκρισης για σενάρια "χαρούμενα" (σωστό API Key) και "λυπημένα" (μη έγκυρο API Key).

Όταν η δοκιμή στείλει ένα μη έγκυρο API Key θα πρέπει να επιστρέψετε έναν κωδικό κατάστασης 401 για να περάσει τελείως η δοκιμή. Αν δεν ελέγξετε σωστά την τιμή του token, θα δείτε ένα σφάλμα όπως:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Αποτυχία Δοκιμής Αυθεντικοποίησης Webhooks" title="Αποτυχία Δοκιμής Αυθεντικοποίησης Webhooks" class="lozad" />
</div>

#### Η Δομή του Αντικειμένου Σχολίου
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

Το σώμα αίτησης του γεγονότος "διαγραφή" είναι ένα αντικείμενο WebhookComment, **αλλά περιλαμβάνει μόνο την id**.

#### Γιατί και οι Δημιουργίες και οι Ενημερώσεις χρησιμοποιούν HTTP PUT και όχι POST;

**Δεδομένου ότι όλα τα αιτήματά μας περιλαμβάνουν μια ID**, η επανάληψη του ίδιου αιτήματος Δημιουργίας ή Ενημέρωσης **δεν θα πρέπει να δημιουργεί νέα αντικείμενα από την πλευρά σας**. Αυτό σημαίνει ότι αυτές οι κλήσεις είναι ιδεατές και θα πρέπει να είναι
γεγονότα PUT σύμφωνα με την προδιαγραφή HTTP.

#### Πώς Λειτουργεί

Όλες οι αλλαγές στο αντικείμενο Σχολίου στο σύστημα ενεργοποιούν ένα γεγονός που καταλήγει σε μια ουρά. Μπορείτε να παρακολουθήσετε αυτήν την ουρά στη <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Διαχείριση Webhooks</a> σε περίπτωση που το API σας καταρρεύσει. Εάν μια αίτηση προς το API σας αποτύχει, θα την επανακαθορίσουμε σε ένα πρόγραμμα. Αυτό το πρόγραμμα είναι 1 Λεπτό * ο αριθμός επαναλήψεων. Εάν η κλήση αποτύχει μία φορά, θα προσπαθήσει ξανά σε ένα λεπτό. Εάν αποτύχει δύο φορές, θα περιμένει δύο λεπτά, και ούτω καθεξής.
Αυτό γίνεται ώστε να μην επιβαρύνουμε το API σας αν πάει κάτω για σχετικούς λόγους φόρτωσης.

#### Ασφάλεια & API Token

Στη κεφαλίδα της αίτησης θα περάσουμε το <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> στην παράμετρο που ονομάζεται "token".

Εάν δεν ελέγξετε σωστά αυτή την παράμετρο, η ενσωμάτωσή σας δεν θα χαρακτηριστεί ως Επαληθευμένη. Αυτή είναι μια προστασία για να διασφαλίσουμε ότι οποιεσδήποτε ενσωματώσεις με το FastComments είναι ασφαλείς.

#### Συμπερασματικά

Ελπίζουμε να βρείτε την ενσωμάτωσή του Webhook του FastComments εύκολη στην κατανόηση και γρήγορη στην ρύθμιση.

Αν έχετε περαιτέρω ερωτήσεις, μη διστάσετε να επικοινωνήσετε με τη <a href="https://fastcomments.com/auth/my-account/help" target="_blank">σελίδα υποστήριξης πελατών</a>.

Στην υγειά σας!

{{/isPost}}

---