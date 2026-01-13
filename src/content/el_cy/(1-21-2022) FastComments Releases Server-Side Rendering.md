---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Κυκλοφορεί τη Σερβερική Απόδοση[/postlink]

{{#unless isPost}}
Προσθέστε σχόλια στον ιστότοπό σας χωρίς τη χρήση JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Αυτό το Άρθρο Περιέχει Τεχνική Ορολογία

## Τι Νέο Υπάρχει

Από την έναρξή του στις αρχές του 2020, το FastComments χρησιμοποιούσε αποκλειστικά JavaScript για να αποδώσει το widget σχολίων.

Τι θα λέγατε αν σας λέγαμε ότι μπορείτε να έχετε σχεδόν όλη την ίδια βασική λειτουργικότητα, αλλά χωρίς να χρησιμοποιείτε JS;

<div class="text-center">
    <div class="sm">Αυτή είναι μια στιγμιότυπη οθόνη, σταματήστε να προσπαθείτε να κάνετε κλικ πάνω της.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Το παραπάνω στιγμιότυπο οθόνης είναι το widget σχολίων FastComments, χωρίς JavaScript. [Μπορείτε να δείτε αυτή τη σελίδα, χωρίς JavaScript, εδώ.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Πώς να το χρησιμοποιήσετε

Εάν χρησιμοποιείτε WordPress, η έκδοση 3.10.1 του plugin FastComments προσθέτει αυτόματα υποστήριξη για SSR ως εναλλακτική λύση για τους χρήστες σας που περιηγούνται με την απενεργοποιημένη JS.

Για προσαρμοσμένες υλοποιήσεις, ανακτήστε το UI για ένα νήμα σχολίων, απλά καλέστε το `/ssr/comments` για αυτή τη σελίδα:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Όπου το `$urlId` είναι το url, ή id, της σελίδας. Η τεκμηρίωση γι' αυτό είναι [εδώ](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Για παράδειγμα, με PHP μπορούμε να στείλουμε ένα iframe στη σελίδα που αποδίδει το νήμα σχολίων στο εσωτερικό:

<div class="code"><div class="title">Παράδειγμα SSR Βασισμένο σε PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Μπορούμε επίσης να κάνουμε μια κλήση API για να λάβουμε το HTML για ένα νήμα σχολίων και να το αποδώσουμε ή να το αποθηκεύσουμε.

Πλήρης τεκμηρίωση διατίθεται στα [SSR Docs στο docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Επειδή αγαπάμε τα ακρωνύμια που ακούγονται επιχειρηματικά, μην ανησυχείτε, το SSR υποστηρίζει SSO. [Ένα παράδειγμα Single-Sign-On με SSR είναι εδώ.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Τοπική Προσαρμογή

Η τελική σημείο που βασίζεται σε SSR τοποθετεί αυτόματα την απάντηση με βάση τις γλώσσα που σχετίζονται κεφαλίδες που στέλνει ο περιηγητής. Μπορεί επίσης να χρησιμοποιήσει τις ίδιες τοπικές
παρακάμψεις όπως το widget που βασίζεται σε JavaScript.

## Γιατί Δημιουργήθηκε Αυτή η Λειτουργία

Μία από τις κύριες παρατηρήσεις για υπηρεσίες όπως το FastComments είναι ότι απαιτούν JS. Ήδη κάνουμε το widget σχολίων όσο το δυνατόν πιο ελαφρύ και διασφαλίζουμε ότι τηρούμε
τους SLAs κλήσεων API μας με < 20ms, αλλά πολλές μικρότερες κοινότητες δεν θα επιλέξουν μια τέτοια λύση εάν σημαίνει ότι θα πρέπει να προσθέσουν JS στον ιστότοπό τους.

Αυτή η λειτουργία ανοίγει επίσης την ευκαιρία να χρησιμοποιηθούν μηχανές απόδοσης που δεν έχουν πρόσβαση στη JavaScript.

## Η Τεχνολογία

Το FastComments χρησιμοποιεί το δικό του μικρό μικροπλαίσιο για την απόδοση του UI. Αυτό το πλαίσιο χρησιμοποιεί μια παρόμοια προσέγγιση με το React, εκτός αν επιτρέπονται χειροκίνητες παρεμβάσεις στο DOM
εκτός από την αρχική απόδοση.

Η βασική βιβλιοθήκη widget σχολίων έχει ένα μόνο σημείο εισόδου - παίρνει ένα σύνολο καταστάσεων και δημιουργεί το αντίστοιχο HTML και CSS προς απόδοση. Απλά καλούμε Αυτό και στο
σερβερ. Όταν ο χρήστης αλληλεπιδρά με τη σελίδα, η κατάσταση αλλάζει και το τελευταίο HTML ανακτάται. Αυτό δημιουργήθηκε ως αποτέλεσμα ενός hackathon που πραγματοποιήθηκε ως μέρος του νέου έτους.

## Ζωντανά Σχόλια

Επειδή το UI αποδίδεται από τον σερβερ, μία φορά, οι δυνατότητες ζωντανής σχολιασμού δεν είναι διαθέσιμες.

Επιπλέον, η ειδοποίηση δεν είναι διαθέσιμη αυτή τη στιγμή. Θα είμαστε ανοιχτοί για να προσθέσουμε αυτή τη δυνατότητα στο μέλλον.

## Απόδοση

Το σερβερικά αποδομένο UI χρησιμοποιεί τις ίδιες βελτιώσεις αποθήκευσης και μηχανή απόδοσης όπως το widget που βασίζεται σε JavaScript. Για μικρά νήματα σχολίων, η απόδοση
είναι στην πραγματικότητα καλύτερη, καθώς ο χρήστης δεν χρειάζεται να κατεβάσει ένα script που έπειτα ανακτά τα σχόλια και αποδίδει το UI.

## Crawlers και SEO

Το FastComments λειτουργεί ήδη καλά με τις εφαρμογές καταχώρησης ιστού; αν η SEO είναι ανησυχία, η χρήση SSR δεν είναι απαραίτητη.

## Μελλοντικές Εφαρμογές

Σχεδιάζουμε να κυκλοφορήσουμε μια λύση Forum στο μέλλον. Παραδοσιακά, τα φόρουμ είναι σελιδοποιημένα και σερβερικά αποδομένα. Οι σύγχρονες λύσεις φόρουμ απομακρύνονται από αυτήν τη
νοοτροπία χρησιμοποιώντας άπειρη κύλιση και απόδοση πλευράς πελάτη. Δεν νομίζουμε ότι αυτή πρέπει να είναι η μόνη επιλογή για τη χρήση μιας τρίτης λύσης φόρουμ.

## Στο Συμπέρασμα

Ελπίζουμε ότι βρήκατε αυτόν τον οδηγό χρήσιμο και εύκολο να διαβάσετε. Μη διστάσετε να σχολιάσετε παρακάτω με οποιεσδήποτε ερωτήσεις.

Καλή συνέχεια!

<style>/*

Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}