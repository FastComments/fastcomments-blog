---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Διανομή DKIM Διαθέσιμη Πλέον στο UI[/postlink]

{{#unless isPost}}
Το FastComments παρέχει πλέον ένα UI για τη ρύθμιση του DKIM, διευκολύνοντας τη βελτίωση των ποσοστών παράδοσης email χωρίς τη χρήση του API.
{{/unless}}

{{#isPost}}

### Τι Νέο

Η ρύθμιση του DKIM για το προσαρμοσμένο domain email σας έγινε πιο εύκολη. Πρώην, η ρύθμιση του DKIM απαιτούσε τη χρήση του
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> απευθείας. Τώρα, μπορείτε
να ρυθμίσετε το DKIM απευθείας από το admin UI του FastComments.

### Γιατί Έχει Σημασία το DKIM

Όταν προσαρμόζετε το From Domain για τα email που στέλνει το FastComments εκ μέρους σας, οι πάροχοι email πρέπει να επαληθεύσουν ότι
αυτά τα email είναι νόμιμα. Το DKIM (DomainKeys Identified Mail) είναι ένας από τους βασικούς μηχανισμούς αυθεντικοποίησης που βοηθά σε αυτό. 
Χωρίς σωστή ρύθμιση DKIM, τα email που αποστέλλονται εκ μέρους του domain σας είναι πιο πιθανό να καταλήξουν σε φακέλους ανεπιθύμητης αλληλογραφίας.

### Πώς Να Το Ρυθμίσετε

Μεταβείτε στη σελίδα <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Τα Domains Μου</a> και κάντε κλικ
στο "Δείξε Προηγμένες ρυθμίσεις" για το domain που θέλετε να ρυθμίσετε. Θα δείτε τις ρυθμίσεις DKIM όπου μπορείτε να εισάγετε το όνομα του domain σας, τον επιλεκτή κλειδιού,
και το ιδιωτικό κλειδί.

Μετά την αποθήκευση, η ρύθμιση DKIM θα εφαρμοστεί σε όλα τα email που αποστέλλονται από αυτό το domain.

### Το API Λειτουργεί Ακόμα

Εάν προτιμάτε να διαχειριστείτε τη ρύθμιση DKIM προγραμματικά, το
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> συνεχίζει να λειτουργεί
όπως και πριν.

### Στο Συμπέρασμα

Ελπίζουμε να διευκολύνει αυτό τη διασφάλιση ότι οι χρήστες σας λαμβάνουν τα email που στέλνει το FastComments εκ μέρους σας. Ενημερώστε μας
παρακάτω αν έχετε οποιαδήποτε ερώτηση.

Καλή συνέχεια!

{{/isPost}}

---