---
[category:Integrations]
###### [postdate]
# [postlink]Προσθήκη Σχολίων σε ένα Blog του BigCommerce[/postlink]

{{#isPost}}

#### Προσθέστε Εμπλοκή Κοινού σε Οποιαδήποτε Σελίδα
Τι θα γινόταν αν το κοινό σας μπορούσε να σχολιάσει τις αναρτήσεις του blog σας, να ρωτήσει ερωτήσεις και να δώσει ανατροφοδότηση; Τώρα μπορεί με το FastComments.

#### Προσαρμοσμένα Θέματα
Για να προσθέσετε το FastComments στο blog του καταστήματος BigCommerce, θα πρέπει να επεξεργαστείτε τα πρότυπα του θέματος σας. Θα σας καθοδηγήσουμε σε αυτό.

Στον πίνακα ελέγχου του BigCommerce μεταβείτε στο Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Σύνδεσμος Καταστήματος" title="Σύνδεσμος Καταστήματος" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Σύνδεσμος Τα Θέματα Μου" title="Σύνδεσμος Τα Θέματα Μου" class="lozad" />
</div>

Κάτω από "Current Theme" θα δείτε ένα αναδυόμενο με την ετικέτα "Advanced".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Αναδυόμενο Θέματος" title="Αναδυόμενο Θέματος" class="lozad" />
</div>

Σε αυτό το αναδυόμενο, η πρώτη επιλογή είναι "Edit Theme Files". Αν αυτή η επιλογή δεν είναι επιλέξιμη, θα πρέπει πρώτα να αντιγράψετε το θέμα μέσω "Make a Copy".

Μόλις μπορέσετε να ανοίξετε τον επεξεργαστή προτύπων, θα δείτε έναν περιηγητή αρχείων στην αριστερή πλευρά του προγράμματος περιήγησής σας. Αυτός είναι ένας περιηγητής αρχείων για τα πρότυπα στο θέμα σας.

Θα θέλετε να περιηγηθείτε στο HTML πρότυπο που αντιπροσωπεύει μια ανάρτηση blog. Βρίσκεται στο templates/components/blog/post.html, όπως απεικονίζεται:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Τοποθεσία Αρχείου Επεξεργαστή Ανάρτησης" title="Τοποθεσία Αρχείου Επεξεργαστή Ανάρτησης" class="lozad" />
</div>

Το κομμάτι κώδικα FastComments σας, το οποίο μπορείτε να αποκτήσετε από <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">εδώ</a> θα πρέπει να επικολληθεί αμέσως μετά τη γραμμή 48, που έχει το κείμενο "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Τοποθεσία για να εισάγετε το FastComments" title="Τοποθεσία για να εισάγετε το FastComments" class="lozad" />
</div>

#### Θυμηθείτε!
Θα πρέπει να προσθέσετε το domain για το κατάστημά σας στο FastComments, το οποίο μπορείτε να κάνετε <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">εδώ</a>.

#### Σε Συμπέρασμα
Αυτή είναι η εμφάνιση του FastComments στο blog του BigCommerce σας. Στην υγειά σας!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastComments σε ένα Blog του BigCommerce" title="FastComments σε ένα Blog του BigCommerce" class="lozad" />
</div>

{{/isPost}}

---