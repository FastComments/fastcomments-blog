---

[category:Features]  
###### [postdate]  
# [postlink]Η Λειτουργία Page Reacts Ξεκίνησε[/postlink]  

{{#unless isPost}}  
Το FastComments τώρα υποστηρίζει την εμφάνιση αντιδράσεων στη σελίδα μαζί με τις μετρήσεις πάνω από το widget σχολίων.  
{{/unless}}  

{{#isPost}}  

### Τι Νέο   

Το FastComments είχε ήδη υποστηρίξει αυτό που ονομάζουμε το Feedback module, όπου θα μπορούσατε να εμφανίσετε μια βαθμολογία, NPS ή άλλη ερώτηση πάνω από την περιοχή των σχολίων.  

Ωστόσο, πολλοί χρήστες θέλουν κάτι πιο απλό - να δείχνουν κάποια εικονίδια με κάποιες αντιδράσεις πάνω από το widget σχολίων, να μπορούν να προσαρμόζουν αυτά τα εικονίδια, ίσως να προσαρμόζουν  
τις επιλογές ανά χρήστη, και ούτω καθεξής.  

Από σήμερα έχουμε λανσάρει αυτή τη λειτουργία.  

Όλα τα σχέδια του FastComments έχουν τώρα πρόσβαση σε Page Reacts.  

### Ζωντανή Επίδειξη  

Έχουμε ενεργοποιήσει μια δοκιμαστική ρύθμιση για το Page Reacts για αυτή τη δημοσίευση του ιστολογίου συγκεκριμένα, μπορείτε να την βρείτε παρακάτω!  

### Τεκμηρίωση  

[Μπορείτε να βρείτε την τεκμηρίωση προγραμματιστή για τη ρύθμιση του Page Reacts εδώ.](https://docs.fastcomments.com/guide-page-reacts.html)  

### Λίστα Χρηστών Αντιδράσεων  

Το Page Reacts μπορεί επίσης να ρυθμιστεί ώστε να εμφανίζει ένα tooltip που αποκαλύπτει τη λίστα των χρηστών που άφησαν μια συγκεκριμένη αντίδραση.  

### Συμπερασματικά  

Ευχαριστούμε τους πελάτες μας που μας παρέχουν συνεχή ανατροφοδότηση ώστε να μπορούμε να σκεφτόμαστε ιδέες όπως αυτή και επίσης μας δίνουν τον χρόνο να λανσάρουμε καλά βελτιστοποιημένες λειτουργίες. Ελπίζουμε να  
συνεχίσετε να αγαπάτε το FastComments.  

Γεια σας!  

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