---
[category:API & Development]

###### [postdate]
# [postlink]Νέα API Συγκέντρωσης Δημοσιεύτηκε[/postlink]

{{#unless isPost}}
Η FastComments προσφέρει στους πελάτες της αξεπέραστη πρόσβαση στα δεδομένα τους με ένα ευέλικτο και γρήγορο API συγκέντρωσης.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Αυτό το Άρθρο Περιέχει Τεχνική Γλώσσα

### Τι Νέο

Η FastComments προσφέρει στους πελάτες της αξεπέραστη πρόσβαση στα δεδομένα τους με ένα ευέλικτο API συγκέντρωσης. Αυτό το API σας επιτρέπει να μετράτε, να ερευνάτε, να κόβετε και να συγκεντρώνετε
τα σχόλια, τις ψήφους σας και **34 περισσότερους πόρους**!

### Παράδειγμα - Μέτρηση Σχολίων ανά Email και Σελίδα

Για παράδειγμα, με το νέο API μπορούμε να πάρουμε έναν αριθμό σχολίων ανά σελίδα (`urlId`) και διεύθυνση email χρήστη (`commenterEmail`):

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

Ή ίσως θέλουμε να μετρήσουμε τα εγκεκριμένα και μη εγκεκριμένα σχόλιά μας:

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

Το API υποστηρίζει επίσης φίλτρα ερωτημάτων και πιο βαθιές ομάδες.

### Τεκμηρίωση

[Μπορείτε να βρείτε την πλήρη τεκμηρίωση εδώ.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Κίνητρο

Θέλουμε οι πελάτες μας να μπορούν να κατασκευάζουν πίνακες ελέγχου για να παρακολουθούν τον λογαριασμό τους, να δημιουργούν αναφορές, να χειρίζονται αιτήματα πελατών και να ερευνούν τα δεδομένα τους όπως απαιτείται.

### Ποιος Το Έχει & Όρια

Όλοι οι πελάτες της FastComments έχουν πρόσβαση στο API. Η χρήση σας περιορίζεται με βάση τα διαθέσιμα πιστώματα API σας, τα οποία ποικίλλουν ανάλογα με το πακέτο που έχετε αγοράσει.

### Στην Κατακλείδα

Όπως σε όλες τις μεγάλες εκδόσεις, είμαστε χαρούμενοι που μπορέσαμε να αφιερώσουμε χρόνο για να βελτιστοποιήσουμε, να δοκιμάσουμε και να κυκλοφορήσουμε κατάλληλα αυτές τις αλλαγές. Ενημερώστε μας παρακάτω εάν ανακαλύψετε οποιαδήποτε προβλήματα.

Στην υγειά σας!

{{/isPost}}

---