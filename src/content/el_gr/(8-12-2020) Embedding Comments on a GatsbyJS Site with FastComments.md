---
[category:Integrations]
###### [postdate]
# [postlink]Ενσωμάτωση Σχολίων σε έναν Ιστότοπο GatsbyJS με FastComments[/postlink]

{{#unless isPost}}
Μπορείτε τώρα να χρησιμοποιήσετε το FastComments για να ενσωματώσετε σχόλια σε έναν ιστότοπο που έχει δημιουργηθεί με το Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Αυτό το Άρθρο Περιέχει Τεχνική Ορολογία

#### Τι Νέο

Πρόσφατα λανσάραμε το <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">συστατικό React</a> για το FastComments.

Αυτό ανοίγει πολλές ευκαιρίες - συμπεριλαμβανομένης της ενσωμάτωσης του FastComments με το Gatsby.

#### Αν Έχετε Δημιουργήσει Το Δικό Σας Wrapper

Αν έχετε δημιουργήσει το δικό σας wrapper React για το FastComments - σκεφτείτε να το αντικαταστήσετε με το νέο μας. Θα διατηρούμε αυτή την αφαίρεση για εσάς - και περιέχει πολλά χρήσιμα πράγματα όπως <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">αυτόματη ανανέωση κατά τις αλλαγές ρυθμίσεων</a>.

#### Πώς Λειτουργεί

Δεδομένου ότι το FastComments έχει ένα συστατικό React ως wrapper γύρω από το βασικό μας widget - είναι απλώς θέμα χρήσης της βιβλιοθήκης React μας για την εγκατάσταση του widget στην πλευρά του πελάτη.

Υποστηρίζουμε πλήρως αυτό το συστατικό και θα το κρατήσουμε ενημερωμένο.

#### Παραδείγματα;

Έχουμε ξεκινήσει να ρυθμίζουμε παραδείγματα, τα οποία μπορείτε να βρείτε <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">εδώ</a>.

#### Νυχτερινή Λειτουργία

Ένα από τα παραδείγματα που έχουμε είναι η "νυχτερινή λειτουργία" - απεικονίζοντας το FastComments σε έναν ιστότοπο με μαύρο (ή πολύ σκούρο) φόντο: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Επιπλέον, καθώς το widget ανταποκρίνεται σε αλλαγές ρυθμίσεων αυτό σημαίνει ότι μπορείτε να έχετε μια λειτουργία για να αλλάξετε το θέμα του ιστότοπού σας και να πείτε εύκολα στο fastcomments-react να ενημερωθεί.

#### Στο Συμπέρασμα

Ελπίζουμε να βρείτε την ενσωμάτωσή του FastComments στον ιστότοπό σας Gatsby γρήγορη και εύκολη.

Cheers!

{{/isPost}}

---