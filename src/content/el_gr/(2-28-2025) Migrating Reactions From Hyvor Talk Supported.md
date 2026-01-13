---
[category:Migration]

###### [postdate]
# [postlink]Η Μετανάστευση Αντιδράσεων από το Hyvor Talk Υποστηρίζεται Τώρα[/postlink]

{{#unless isPost}}
Όταν εισάγετε την εξαγωγή δεδομένων σας από το Hyvor Talk, μπορούμε τώρα να μεταφέρουμε τις αντιδράσεις σας σε επίπεδο σελίδας.
{{/unless}}

{{#isPost}}

### Τι Νέο

Όταν εισάγετε σχόλια για να τα μεταφέρετε από το Hyvor Talk, το FastComments μπορεί τώρα να εισάγει τις αντιδράσεις της σελίδας σας. Επιπλέον, θα ανιχνεύσουμε αν
οι νήματα σχολίων στις σελίδες είναι κλειστά ή όχι, και θα μεταφέρουμε αυτήν την κατάσταση.

Η επανεκτέλεση της εισαγωγής δεν θα προκαλέσει διπλασιασμό των μετρήσεων ή απώλεια οποιασδήποτε αξίας αντίδρασης από πριν την εισαγωγή.

### Πώς να Ρυθμίσετε τις Αντιδράσεις

Η εμφάνιση των αντιδράσεων της σελίδας δεν είναι αυτόματη. Για να ξεκινήσετε, θα πρέπει να ενημερώσετε τη διαμόρφωση του widget σας:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Star-Struck
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Red Heart
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Face with Open Mouth
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Crying Face
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Face with Tears of Joy
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Angry Face
            ]
        }
    });
</script>
```

Οι ids πρέπει να ταιριάζουν με αυτούς της εξαγωγής του Hyvor Talk. Αυτό το παράδειγμα χρησιμοποιεί τις σωστές τιμές.

Θα πρέπει να προμηθευτείτε τις δικές σας εικόνες αντιδράσεων. Μπορούν να είναι σε οποιαδήποτε μορφή, συμπεριλαμβανομένων των gifs. Το παραπάνω παράδειγμα χρησιμοποιεί κάποια από το έργο OpenMoji.

### Συμπερασματικά

Όπως και σε όλες τις μεγάλες εκδόσεις, είμαστε χαρούμενοι που μπορέσαμε να αφιερώσουμε χρόνο για να βελτιστοποιήσουμε, να δοκιμάσουμε και να κυκλοφορήσουμε σωστά αυτή τη δυνατότητα. Ενημερώστε μας
παρακάτω αν ανακαλύψετε οποιαδήποτε προβλήματα.

Ευχαριστούμε!

{{/isPost}}

---