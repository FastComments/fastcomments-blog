---
[category:Migration]

###### [postdate]
# [postlink]Η Μεταφορά Αντιδράσεων Από Το Hyvor Talk Υποστηρίζεται Πλέον[/postlink]

{{#unless isPost}}
Όταν εισάγετε την εξαγωγή δεδομένων σας από το Hyvor Talk, μπορούμε πλέον να μεταφέρουμε τις αντιδράσεις σε επίπεδο σελίδας σας.
{{/unless}}

{{#isPost}}

### Τι Είναι Νέο

Όταν εισάγετε σχόλια για να τα μεταφέρετε από το Hyvor Talk, το FastComments μπορεί πλέον να εισάγει τις αντιδράσεις της σελίδας σας. Επιπλέον, θα ανιχνεύσουμε αν οι συζητήσεις σχόλιων στις σελίδες είναι κλειστές ή όχι, και θα μεταφέρουμε αυτήν την κατάσταση επίσης.

Η επαναφορά της εισαγωγής δεν θα προκαλέσει διπλασιασμό των μετρήσεων ή απώλεια οποιασδήποτε αξίας αντίδρασης από πριν την εισαγωγή.

### Πώς Να Ρυθμίσετε Τις Αντιδράσεις

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

Οι ταυτοτητες πρέπει να ταιριάζουν με αυτές της εξαγωγής του Hyvor Talk. Αυτό το παράδειγμα χρησιμοποιεί τις σωστές τιμές.

Θα πρέπει να βρείτε τις δικές σας εικόνες αντιδράσεων. Μπορεί να είναι οποιασδήποτε μορφής, συμπεριλαμβανομένων των gif. Το παραπάνω παράδειγμα χρησιμοποιεί μερικά από το έργο OpenMoji.

### Συμπέρασμα

Όπως σε όλες τις μεγάλες κυκλοφορίες, είμαστε ευγνώμονες που μπορέσαμε να αφιερώσουμε χρόνο για να βελτιστοποιήσουμε, να δοκιμάσουμε και να κυκλοφορήσουμε σωστά αυτή τη δυνατότητα. Ενημερώστε μας παρακάτω αν ανακαλύψετε οποιαδήποτε ζητήματα.

Στην Υγειά σας!

{{/isPost}}

---