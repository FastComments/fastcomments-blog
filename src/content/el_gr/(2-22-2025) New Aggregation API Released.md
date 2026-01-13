---
[category:API & Development]

###### [postdate]
# [postlink]Νέα API Συγκέντρωσης Κυκλοφόρησε[/postlink]

{{#unless isPost}}
Το FastComments προσφέρει στους πελάτες του απαράμιλλη πρόσβαση στα δεδομένα τους με μια ευέλικτη και γρήγορη API συγκέντρωσης
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Αυτό το Άρθρο Περιέχει Τεχνική Ορολογία

### Τι Νέο

Το FastComments προσφέρει στους πελάτες του απαράμιλλη πρόσβαση στα δεδομένα τους με μια ευέλικτη API συγκέντρωσης. Αυτή η API σας επιτρέπει να μετράτε, να ερευνάτε, να κόβετε και να συγκεντρώνετε
τα σχόλια, τις ψήφους και **34 περισσότερους πόρους**!

### Παράδειγμα - Μετρήσεις Σχόλιων κατά Email και Σελίδα

Για παράδειγμα, με τη νέα API μπορούμε να πάρουμε έναν αριθμό σχόλιων κατά σελίδα (`urlId`) και email χρήστη (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Αυτό θα μας δώσει κάτι σαν:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

Ή ίσως θέλουμε να μετρήσουμε τα εγκεκριμένα και μη εγκεκριμένα σχόλια μας:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Μας δίνει:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

Η API υποστηρίζει επίσης φίλτρα ερωτημάτων και πιο λεπτομερείς ομαδοποιήσεις.

### Τεκμηρίωση

[Μπορείτε να βρείτε την πλήρη τεκμηρίωση εδώ.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Κίνητρο

Θέλουμε οι πελάτες μας να μπορούν να κατασκευάζουν πίνακες ελέγχου για να παρακολουθούν τον λογαριασμό τους, να δημιουργούν αναφορές, να χειρίζονται αιτήματα πελατών και να ερευνούν τα δεδομένα τους όπως χρειάζεται.

### Ποιοι Έχουν Πρόσβαση & Περιορισμοί

Όλοι οι πελάτες του FastComments έχουν πρόσβαση στην API. Η χρήση σας περιορίζεται με βάση τα διαθέσιμα API credits σας, τα οποία θα ποικίλλουν με βάση
το πακέτο που έχετε αγοράσει.

### Συμπέρασμα

Όπως σε όλες τις μεγάλες κυκλοφορίες, είμαστε χαρούμενοι που μπορέσαμε να αφιερώσουμε χρόνο για να βελτιστοποιήσουμε, να δοκιμάσουμε και να κυκλοφορήσουμε σωστά αυτές τις αλλαγές. Ενημερώστε μας
παρακάτω αν ανακαλύψετε οποιαδήποτε προβλήματα.

Υγεία!

{{/isPost}}

---