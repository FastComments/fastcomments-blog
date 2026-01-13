---
[category:Integrations]
###### [postdate]
# [postlink]Προσθήκη Σχολίων σε ένα Blog του BigCommerce[/postlink]

{{#isPost}}

#### Προσθέστε Εμπλοκή Κοινού σε Οποιαδήποτε Σελίδα
Τι θα γινόταν αν το κοινό σας μπορούσε να σχολιάσει τις αναρτήσεις σας, να ρωτήσει ερωτήσεις και να δώσει ανατροφοδότηση; Τώρα μπορεί με το FastComments.

#### Προσαρμοσμένα Θέματα
Για να προσθέσετε το FastComments στο blog του καταστήματος σας στο BigCommerce, θα πρέπει να επεξεργαστείτε τα πρότυπα του θέματος σας. Θα σας καθοδηγήσουμε σε αυτό.

Στον πίνακα ελέγχου του BigCommerce, πηγαίνετε στο Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Σύνδεσμος Καταστήματος" title="Σύνδεσμος Καταστήματος" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Σύνδεσμος Μου Θέματα" title="Σύνδεσμος Μου Θέματα" class="lozad" />
</div>

Κάτω από το "Τρέχον Θέμα", θα δείτε μια αναπτυσσόμενη λίστα με την ετικέτα "Προχωρημένα".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Αναπτυσσόμενη Λίστα Θέματος" title="Αναπτυσσόμενη Λίστα Θέματος" class="lozad" />
</div>

Σε αυτή την αναπτυσσόμενη λίστα, η πρώτη επιλογή είναι "Επεξεργασία Αρχείων Θέματος". Εάν αυτή η επιλογή δεν είναι κλικαριστή, θα πρέπει πρώτα να αντιγράψετε το θέμα μέσω της επιλογής "Δημιουργία Αντιγράφου".

Μόλις μπορέσετε να ανοίξετε τον επεξεργαστή προτύπων, θα δείτε ένα πρόγραμμα περιήγησης αρχείων στην αριστερή πλευρά του προγράμματος περιήγησής σας. Αυτό είναι ένα πρόγραμμα περιήγησης αρχείων για τα πρότυπα στο θέμα σας.

Θα θελήσετε να πλοηγηθείτε στο HTML πρότυπο που αντιπροσωπεύει μια ανάρτηση blog. Είναι στο templates/components/blog/post.html, όπως υποδεικνύεται:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Θέση Αρχείου Επεξεργαστή Ανάρτησης" title="Θέση Αρχείου Επεξεργαστή Ανάρτησης" class="lozad" />
</div>

Το απόσπασμα του κώδικα FastComments σας, το οποίο μπορείτε να αποκτήσετε από <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">εδώ</a>, θα πρέπει να κολληθεί αμέσως μετά τη γραμμή 48, η οποία έχει το κείμενο "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Θέση για εισαγωγή FastComments" title="Θέση για εισαγωγή FastComments" class="lozad" />
</div>

#### Να Θυμάστε!
Θα πρέπει να προσθέσετε το domain για το κατάστημά σας στο FastComments, το οποίο μπορείτε να το κάνετε <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">εδώ</a>.

#### Συμπερασματικά
Αυτό είναι πώς θα πρέπει να φαίνεται το FastComments στο blog σας στο BigCommerce. Στην υγειά μας!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence σε ένα Blog του BigCommerce" title="FastCommence σε ένα Blog του BigCommerce" class="lozad" />
</div>

{{/isPost}}

---