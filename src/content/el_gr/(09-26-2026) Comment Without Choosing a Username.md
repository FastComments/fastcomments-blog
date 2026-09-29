[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Σχόλιο Χωρίς Επιλογή Ονόματος Χρήστη[/postlink]

{{#unless isPost}}
FastComments can now hand each new visitor a unique, neutral username so they never have to invent one. The shared Default Username also no longer gets "taken" by the first person to use it.
{{/unless}}

{{#isPost}}

### What's New

Αν ο ιστότοπός σας δεν έχει σύνδεση, ένας επισκέπτης που θέλει να αφήσει ένα σχόλιο ζητείται να δώσει δύο πράγματα: ένα email και ένα όνομα χρήστη.  
Το email είναι εύκολο, αλλά το όνομα χρήστη πρέπει να είναι μοναδικό, θα είναι δημόσιο, και πρέπει να το σκεφτούν αμέσως.

Αυτή η έκδοση αφαιρεί αυτό το βήμα. Ενεργοποιήστε **Generate Usernames Automatically** στην προσαρμογή widget, και κάθε νέος
επισκέπτης εμφανίζεται με ένα όνομα όπως `BraveOtter4172` ήδη συμπληρωμένο. Μπορούν να το κρατήσουν ή να το αντικαταστήσουν. Σε κάθε περίπτωση,
προχωρούν πιο γρήγορα στο πεδίο σχολίου.

### Turning It On

Ανοίξτε την <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
βρείτε την ενότητα **Anonymization** και τσεκάρετε **Generate Usernames Automatically**. Δεν υπάρχει κάτι άλλο για ρύθμιση.

Λειτουργεί με ή χωρίς **Allow Anonymous Comments**. Αν θέλετε ακόμα ένα email από κάθε σχολιαστή, απενεργοποιήστε το ανώνυμο
σχόλιο. Οι επισκέπτες εισάγουν το email τους, το όνομα χρήστη διαχειρίζεται για αυτούς, και αυτό είναι όλο. Αν δεν χρειάζεστε email,
ενεργοποιήστε το ανώνυμο σχόλιο και ένας επισκέπτης μπορεί να σχολιάσει χωρίς να πληκτρολογήσει τίποτα εκτός από το ίδιο το σχόλιο.

### What Visitors See

Το πεδίο ονόματος χρήστη είναι προσυμπληρωμένο με το παραγόμενο όνομα. Είναι ένα συνηθισμένο πεδίο εισαγωγής, έτσι όποιος θέλει να είναι γνωστός ως
κάτι άλλο απλώς το αντικαθιστά. Τίποτα δεν κρύβεται και τίποτα δεν επιβάλλεται.

Τα ονόματα είναι δύο λέξεις και ένας αριθμός, ώστε να είναι αναγνώσιμα και ουδέτερα. Κανείς δεν καταλήγει σε `user_83729`.

### Every Name Is Unique

Ένα παραγόμενο όνομα ελέγχεται έναντι των υπαρχόντων λογαριασμών πριν προσφερθεί, και κρατιέται για τη συνεδρία του περιηγητή του επισκέπτη,
ώστε ο επόμενος επισκέπτης να μην του προσφερθεί το ίδιο. Οι συνδεδεμένοι χρήστες, χρήστες SSO και επισκέπτες που έχουν ήδη
σχολιάσει δεν λαμβάνουν ποτέ νέο όνομα. Κρατούν αυτό που έχουν.

Ένας επισκέπτης που εισάγει ένα email που έχει χρησιμοποιήσει πριν ταιριάζει με τον υπάρχοντα λογαριασμό του, ώστε μια δεύτερη επίσκεψη
να μην δημιουργήσει δεύτερη ταυτότητα ακόμη και αν ο περιηγητής είχε καθαριστεί ενδιάμεσα.

### Bugfix - The Default Username Is Now Truly Shared

Κάποιοι από εσάς χρησιμοποιούσατε το **Default Username** με τιμή όπως "Anonymous" για να φτάσετε σχεδόν εδώ. Αυτό είχε
ένα πρόβλημα. Τα ονόματα χρήστη είναι μοναδικά, έτσι ο πρώτος επισκέπτης που σχολίασε ως "Anonymous" με το email του κατείχε το όνομα, και ο
επόμενος επισκέπτης με διαφορετικό email ενημερωνόταν ότι το όνομα χρήστη ήταν κατειλημμένο.

Διορθώθηκε. Το προεπιλεγμένο όνομα χρήστη θεωρείται τώρα ως κοινό όνομα εμφάνισης αντί για ταυτότητα. Κάθε επισκέπτης που
το κρατάει έχει το δικό του λογαριασμό στο παρασκήνιο, και όλοι εμφανίζονται ως "Anonymous". Τα ονόματα που οι επισκέπτες πληκτρολογούν
οι ίδιοι εξακολουθούν να πρέπει να είναι μοναδικά, όπως πριν.

Αν ορίσετε και τα δύο, το παραγόμενο όνομα κερδίζει.

### Documentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">The Generate Usernames Automatically guide</a>
covers the option and how it interacts with the other anonymous commenting settings.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">The Default Username guide</a>
covers the shared-name behavior.

### In Conclusion

This one came from a customer running a site where visitors are patients who may only ever leave one piece of
feedback. Asking them for an email and a unique username was one question too many. If a setting is standing between
your readers and the comment box, let us know below.

Cheers!

{{/isPost}}