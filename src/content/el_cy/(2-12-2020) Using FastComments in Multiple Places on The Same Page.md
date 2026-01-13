---
[category:Tutorials]

###### [postdate]
# [postlink]Χρήση του FastComments σε Πολλαπλές Θέσεις στην Ιδιόκτητη Σελίδα[/postlink]

Το FastComments είναι ευέλικτο. Συνδέεται με ένα κανονικό στοιχείο σε μια σελίδα, έτσι ώστε να λειτουργεί με οποιοδήποτε web framework.

{{#unless isPost}}
Διαβάστε αυτήν την ανάρτηση για να δείτε ένα παράδειγμα με πολλές περιπτώσεις του FastComments στην ίδια σελίδα.
{{/unless}}

{{#isPost}}
Αυτό σημαίνει ότι μπορούμε να έχουμε όσες συνομιλίες θέλουμε σε μια σελίδα. Για παράδειγμα, εδώ είναι δύο συνομιλίες η μία δίπλα στην άλλη.

<style>
.content {
    max-width: 1220px;
}

.content .widgets {
    text-align: center;
}

.content .widget {
    display: inline-block;
    width: 49%;
    vertical-align: top;
}

#fastcomments-widget {
    display: none;
}

@media(max-width: 768px) {
    .content .widget {
        display: block;
        width: 100%;
    }
}
</style>

<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div class="widgets">
    <div class="widget left" id="fastcomments-widget2"></div>
    <div class="widget right" id="fastcomments-widget3"></div>
</div>

<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?cats',
        headerHTML: '<h1>Συζήτηση για Γάτες</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>Συζήτηση για Σκύλους</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### Πώς λειτουργεί

Αυτή είναι ο κώδικας που κάνει αυτό να συμβαίνει. Προσαρμόζουμε την παράμετρο urlId για να κάνουμε κάθε συνομιλία μοναδική. Σημειώστε ότι χρησιμοποιούμε ids, αλλά μπορείτε
να περάσετε οποιοδήποτε στοιχείο DOM αν το ερωτήσετε με οποιοδήποτε τρόπο σας αρέσει.


<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;Συζήτηση για Γάτες&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;Συζήτηση για Σκύλους&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---