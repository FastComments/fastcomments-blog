---
[category:Features]

###### [postdate]
# [postlink]Το Widget Μέτρησης Σχολίων FastComments[/postlink]

Θέλετε να δείξετε τον αριθμό των σχολίων σε μια σελίδα πριν ο χρήστης κάνει κλικ; Κανένα πρόβλημα με το FastComments.

{{#isPost}}
Ο πρώτος από τους πολλούς που έρχονται - το FastComments τώρα υποστηρίζει widgets μέτρησης σχολίων.

Για παράδειγμα, αυτή η σελίδα έχει <b><span id="fastcomments-widget-comment-count"></span></b>. Αυτός ο αριθμός εισάγεται μέσω του widget! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Είναι μια ζωντανή μέτρηση, με 60 δευτερόλεπτα cache για να βοηθήσει στην ταχύτερη εξυπηρέτηση πολύ δημοφιλών σελίδων. Αυτό σημαίνει ότι μπορεί να δείτε τη ζωντανή μέτρηση να υστερεί πίσω από τον αριθμό των σχολίων σας κατά ένα λεπτό, αλλά αυτό είναι για να διασφαλιστεί ότι το FastComments ζει μέχρι το όνομά του.

Ένα καλύτερο παράδειγμα μπορεί να είναι μια λίστα με τις αναρτήσεις του blog, για παράδειγμα:

### Ανάρτηση #1
##### 64 Σχόλια


### Ανάρτηση #2
##### 128 Σχόλια


### Ανάρτηση #3
##### 256 Σχόλια

Μπορείτε επίσης να δείτε ένα ζωντανό παράδειγμα αυτού στη <a href="https://blog.fastcomments.com" target="_blank">σελίδα αρχικής</a> του blog.

Το widget μέτρησης σχολίων δεν αποδίδεται σε iframe, οπότε είναι πλήρως προσαρμόσιμο μέσω CSS. Θα κληρονομήσει αυτόματα το στυλ της σελίδας σας - γραμματοσειρές, χρώματα, ύψη γραμμών κ.λπ.

Για να αποκτήσετε πρόσβαση στον κώδικα του widget μέτρησης σχολίων για τον λογαριασμό σας, απλά πηγαίνετε <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">εδώ</a>.

Μπορείτε να το βρείτε μέσω της διεπαφής χρήστη στη σελίδα του λογαριασμού σας, κάνοντας κλικ στη λήψη κώδικα widget και κατόπιν σε άλλα widgets.

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