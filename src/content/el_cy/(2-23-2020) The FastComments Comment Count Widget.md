---
[category:Features]

###### [postdate]
# [postlink]Το Widget Μετρητής Σχολίων FastComments[/postlink]

Θέλετε να εμφανίσετε τον αριθμό σχολίων σε μια σελίδα πριν ο χρήστης κάνει κλικ; Κανένα πρόβλημα με το FastComments.

{{#isPost}}
Το πρώτο από πολλά που έρχονται - το FastComments τώρα υποστηρίζει widgets μετρητών σχολίων.

Για παράδειγμα, αυτή η σελίδα έχει <b><span id="fastcomments-widget-comment-count"></span></b>. Αυτός ο αριθμός εισάγεται μέσω του widget! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Είναι μια ζωντανή μέτρηση, με cache 60 δευτερολέπτων για να βοηθήσει στην ταχύτερη εξυπηρέτηση πολύ δημοφιλών σελίδων. Αυτό σημαίνει ότι μπορεί να δείτε την ζωντανή μέτρηση να καθυστερεί πίσω από τον αριθμό των σχολίων σας κατά ένα λεπτό, αλλά αυτό γίνεται για να διασφαλιστεί ότι το FastComments τιμά το όνομά του.

Ένα καλύτερο παράδειγμα μπορεί να είναι μια λίστα από αναρτήσεις ιστολογίου, για παράδειγμα:

### Ανάρτηση #1
##### 64 Σχόλια


### Ανάρτηση #2
##### 128 Σχόλια


### Ανάρτηση #3
##### 256 Σχόλια

Μπορείτε επίσης να δείτε ένα ζωντανό παράδειγμα αυτού στο blog <a href="https://blog.fastcomments.com" target="_blank">homepage</a>.

Το widget Μετρητής Σχολίων δεν αποδίδεται σε iframe, επομένως είναι πλήρως προσαρμόσιμο μέσω CSS. Θα κληρονομήσει αυτόματα το στυλ της σελίδας σας - γραμματοσειρές, χρώματα, ύψη γραμμών και ούτω καθεξής.

Για να αποκτήσετε πρόσβαση στον κώδικα του widget Μετρητής Σχολίων για τον λογαριασμό σας, απλώς μεταβείτε <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">εδώ</a>.

Μπορείτε να το βρείτε μέσω του UI στην σελίδα του λογαριασμού σας, κάνοντας κλικ στο "Get Widget Code" και στη συνέχεια "Other Widgets".

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}

---