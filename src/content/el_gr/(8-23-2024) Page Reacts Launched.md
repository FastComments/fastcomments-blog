---

[category:Features]
###### [postdate]
# [postlink]Λανσάρισμα Αντιδράσεων σε Σελίδα[/postlink]

{{#unless isPost}}
Το FastComments τώρα υποστηρίζει την εμφάνιση αντιδράσεων σε σελίδα μαζί με τις μετρήσεις πάνω από το widget σχολίων.
{{/unless}}

{{#isPost}}

### Τι Νέο

Το FastComments υποστήριζε ήδη αυτό που ονομάζουμε το Feedback module, όπου μπορούσατε να εμφανίσετε μια βαθμολογία αστέρων, NPS ή άλλη ερώτηση πάνω από την περιοχή σχολίων.

Ωστόσο, πολλοί χρήστες θέλουν κάτι πιο απλό - να δείχνουν εικονίδια με κάποιες αντιδράσεις πάνω από το widget σχολίων, να μπορούν να προσαρμόσουν αυτά τα εικονίδια, ίσως να προσαρμόσουν
τις επιλογές ανά χρήστη και ούτω καθεξής.

Από σήμερα έχουμε λανσάρει αυτή τη δυνατότητα.

Όλα τα σχέδια του FastComments τώρα έχουν πρόσβαση στις Αντιδράσεις σε Σελίδα.

### Ζωντανή Επίδειξη

Έχουμε ενεργοποιήσει μια παραμετροποίηση Αντιδράσεων σε Σελίδα ειδικά για αυτήν την ανάρτηση του blog, μπορείτε να την βρείτε παρακάτω!

### Τεκμηρίωση

[Μπορείτε να βρείτε την τεκμηρίωση για προγραμματιστές σχετικά με την ρύθμιση των Αντιδράσεων σε Σελίδα εδώ.](https://docs.fastcomments.com/guide-page-reacts.html)

### Λίστα Χρηστών Αντίδρασης

Οι Αντιδράσεις σε Σελίδα μπορούν επίσης να παραμετροποιηθούν για να δείχνουν ένα tooltip που αποκαλύπτει τη λίστα των χρηστών που άφησαν μια συγκεκριμένη αντίδραση.

### Συμπέρασμα

Ευχαριστούμε τους πελάτες μας που μας δίνουν διαρκή feedback ώστε να μπορούμε να σκεφτόμαστε ιδέες όπως αυτή και επίσης να μας δίνουν τον χρόνο να λανσάρουμε καλά βελτιστοποιημένες δυνατότητες. Ελπίζουμε να συνεχίσετε να αγαπάτε το FastComments.

Υγεία!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---