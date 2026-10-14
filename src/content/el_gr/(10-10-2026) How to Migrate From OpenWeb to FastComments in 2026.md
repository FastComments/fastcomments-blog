[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Πώς να Μεταφέρετε Από το OpenWeb στο FastComments το 2026[/postlink]

{{#unless isPost}}
Ένας οδηγός χαρακτηριστικό-κατά-χαρακτηριστικό για εκδότες που μεταβαίνουν από το OpenWeb (παλαιότερα Spot.IM): τι ταιριάζει 1:1, τι είναι διαφορετικό, πώς λειτουργεί η εισαγωγή CSV, πώς αλλάζει η διαδικασία SSO, και ένα βήμα-βήμα σχέδιο μετάβασης.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Αυτό το Άρθρο Περιέχει Τεχνική Ορολογία

Αυτός ο οδηγός απευθύνεται σε ηγέτες προϊόντων και μηχανικών καθώς και σε διαχειριστές κοινοτήτων που χρησιμοποιούν το OpenWeb σήμερα και χρειάζονται ένα σχέδιο μεταφοράς. Περνάει από κάθε επιφάνεια του OpenWeb, ονομάζει το αντίστοιχο FastComments και δηλώνει ξεκάθαρα πού δεν υπάρχει αντιστοιχία 1:1.

### Γιατί Τώρα

Στις 30 Σεπτεμβρίου 2026 το Πρωτοδικείο του Τελ Αβίβ διέταξε τον διορισμό προσωρινού διαχειριστή για το OpenWeb κατόπιν αιτήματος του δανειστή του, Mars Growth Capital, ο οποίος κατέχει προτεραιότητα επί των περιουσιακών στοιχείων και λογαριασμών της εταιρείας και προσπαθεί να το επιβάλει εναντίον των ισραηλινών περιουσιακών στοιχείων, τραπεζικών λογαριασμών και πνευματικής ιδιοκτησίας του OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Ένας προσωρινός διαχειριστής, Adv. Ehud Gindes, διορίστηκε την επόμενη μέρα (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Πριν από λίγο το 2026 η Microsoft, ένας από τους μεγαλύτερους πελάτες του OpenWeb, τερμάτισε τη συνεργασία της και κράτησε πληρωμές λόγω μιας διαφωνίας για την κίνηση επισκεψιμότητας που το OpenWeb απορρίπτει (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

Το OpenWeb δηλώνει ότι η πλατφόρμα συνεχίζει να λειτουργεί. Η δικαστική επίβλεψη, ένας δανειστής που επιβάλλει εγγυήσεις στην πνευματική ιδιοκτησία που εξαρτάται το widget σχολίων σας, και ένας διαχειριστής που έχει ως αποστολή τη διατήρηση της αξίας των περιουσιακών στοιχείων δεν είναι συνθήκες που θέλετε ως εκδότες για μια βασική επιφάνεια αλληλεπίδρασης. Αν δεν έχετε ήδη εξάγει πλήρη δεδομένα, κάντε το πρώτα, σήμερα, πριν προχωρήσετε σε οτιδήποτε άλλο σε αυτόν τον οδηγό.

### Τι Χρειάζεστε Πριν Ξεκινήσετε

Συλλέξτε τα παρακάτω πριν αγγίξετε κώδικα:

- **Η εξαγωγή σχολίων του OpenWeb.** Το OpenWeb παρέχει ένα Export API (v4) που δημιουργεί συμπιεσμένα CSV αρχεία, το πολύ 100 000 σχόλια ανά αρχείο, με παράθυρα ημερομηνίας έως ένα μήνα και συνδέσμους λήψης που λήγουν μετά από μια εβδομάδα (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Ζητήστε κάθε παράθυρο που χρειάζεστε και αποθηκεύστε τα αρχεία κάπου ασφαλή. Αν ο υπεύθυνος του OpenWeb σας έχει δώσει εξαγωγή CSV από το Admin Panel στο παρελθόν, κρατήστε και αυτή. Ο εισαγωγέας FastComments διαβάζει το CSV του OpenWeb με στήλες όπως `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` και `url`.
- **Το Spot ID και τη λίστα των post IDs.** Κάθε `data-post-id` που περνάτε στον εκκινητή γίνεται FastComments URL ID. Αν τα post IDs σας είναι CMS article IDs, σημειώστε πώς δημιουργούνται ώστε να μπορείτε να εκδώσετε τις ίδιες τιμές στο FastComments.
- **Τη λίστα χρηστών SSO.** Συγκεκριμένα τις τιμές `primary_key` και `user_name` που καταχωρίσατε στο OpenWeb. Η συγγραφή σχολίων ταιριάζει με το όνομα χρήστη κατά την εισαγωγή, οπότε θέλετε να περάσετε τα ίδια usernames στο payload SSO του FastComments.
- **Τη λίστα και τους ρόλους των συντονιστών.** Λογαριασμούς admin, moderator και δημοσιογράφου, και ποιες ενότητες συντονίζουν.
- **Τη ρύθμιση διαχείρισης.** Πολιτική σε όλο τον ιστότοπο (έγκριση όλων, δημοσίευση και συντονισμός, απαίτηση έγκρισης), παρακάμψεις ανά άρθρο, λίστα περιορισμένων λέξεων, χρήστες σε σίγαση και αποκλεισμένοι.
- **Προσαρμοσμένο CSS και ρυθμίσεις θέματος.** Εξάγετε ό,τι έχετε στο Admin Panel ώστε να το ξαναχτίσετε στη σελίδα προσαρμογής widget του FastComments.
- **Πού βρίσκεται ο εκκινητής στα πρότυπα σας**, συμπεριλαμβανομένων των σελίδων που τρέχουν Reactions, Topic Tracker, Spotlight, το Notification Bell ή ένα Standalone Ad χωρίς Conversation.

### AI Υποβοηθούμενη Μετάβαση

Το FastComments παρέχει ένα [LLM Kit and MCP server to speed up the migration](https://docs.fastcomments.com/guide-llm-kit.html).

### Πώς Τα OpenWeb Post IDs Αντιστοιχούν Σε FastComments URL IDs

Το FastComments συνδέει ένα νήμα σχολίων με ένα `urlId`. Από προεπιλογή το URL ID είναι το καθαρισμένο URL της σελίδας, αλλά μπορείτε να το ορίσετε σε οποιοδήποτε string, και αυτό ακριβώς κάνει ο εισαγωγέας OpenWeb: διαβάζει τη στήλη `post_id` και τη χρησιμοποιεί ως FastComments URL ID για κάθε σχόλιο του άρθρου. Επίσης αποθηκεύει τη στήλη `url` ως εμφανιζόμενο URL ώστε οι σύνδεσμοι συντονισμού και τα email ειδοποιήσεων να δείχνουν στη σωστή σελίδα.

Άρα ο κανόνας για τα πρότυπά σας είναι: όπου και αν περάσατε `data-post-id="POST_ID"` και `data-post-url="ARTICLE_URL"` στο OpenWeb, περάστε `urlId: 'POST_ID'` και `url: 'ARTICLE_URL'` στο FastComments. Τα εισαγόμενα νήματα ευθυγραμμίζονται με τα ζωντανά νήματα χωρίς ανακατευθύνσεις και χωρίς επανεγγραφή URL. Δείτε <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">τα URL ID docs</a>.

Αν προτιμάτε να κλειδώσετε τα νήματα με URL αντί για post ID, κάντε πρώτα την εισαγωγή και μετά χρησιμοποιήστε το εργαλείο Migrate Comments κάτω από Manage Data για να μετακινήσετε τα νήματα από το post ID στο URL μαζικά.

### Ο Χάρτης Χαρακτηριστικών

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Σημειώσεις |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live by default. New comments collapse behind a "Show N New Comments" button, or appear instantly with `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Import preserves `likes_count` and `dislikes_count`. Heart style and "disable voting" are config options. |
| Reactions (article-level icons) | Page Reacts | Configurable icon set on the page, remembered per user. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` caps nesting. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` sets the default per site or per URL pattern. |
| User profiles | User profiles | Avatar, bio, badges, karma, activity, DMs. Works for SSO users. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Set in the SSO payload. No backend lookup call needed. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderators pin from the widget or dashboard. An AI agent template pins top-voted comments. |
| In Conversation Polls | Polls on comments | 2 to 10 options, close dates, privacy modes, creator restrictions. |
| Ask Me Anything formats | No dedicated product | Run as a thread with the author's SSO user labeled and the question pinned. |
| Live Blog | No 1:1 equivalent | Live Chat widget and chat-mode comments exist. Editorial live blogging stays in your CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Users follow a page, not a topic or author. No cross-article follow. |
| Notification Bell | Notification bell in the widget | Replies, mentions, thread activity, votes, subscriptions, badges, DMs. |
| Email notifications | Email notifications with templates | Per-user opt-in via SSO flags. Custom templates, branded sender. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | No register-user call. Sign a payload server-side, pass it to the widget. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Same payload. Your backend signs it once the user is logged in. |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | Readers log in with an email link. No passwords. |
| Moderation policy per article | Customization rules per URL ID pattern | Approval mode, spam filter and more vary by `*/section/*` patterns. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | Agents start in dry run and can require human approval. |
| Restricted words | Word blacklist customizable by locale | ~450 default phrases, editable. |
| User muting | Block User | Per-reader block from the comment menu. |
| Bans | Bans | Permanent, timed, shadow, IP-hashed, plus-alias aware. |
| Moderation Panel | Moderate Comments dashboard | Filters, bulk actions with undo, moderation groups, digest emails with one-click approve. |
| Notification Webhook | Webhooks | Comment created, updated, deleted. No per-user notification webhook. |
| Engagement dashboard | Analytics | Live users online, top pages, page loads, comments, votes, accounts by day. No ad revenue reporting. |
| In-conversation ads, Standalone Ad | None | FastComments runs no ads. You keep your own ad stack around the widget. |
| Social Reviews (star ratings) | Ratings and Reviews | Separate product on the same account. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Recirculation driven by comment activity. |
| Comment Counter | Comment count widgets | Single and bulk. |
| Export Comments API | CSV export, API, webhooks | Export from the dashboard any time. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com keeps data in the EU. DPA available. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, live updates, threading, moderation actions. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` and `destroy()` for SPAs. |

</div>

Το υπόλοιπο αυτής της ενότητας περνάει από κάθε ομάδα λεπτομερώς.

### Conversation, Votes and Reactions

Η Conversation του OpenWeb είναι ένα νήμα σε πραγματικό χρόνο. Το widget σχολίων του FastComments είναι επίσης: σχόλια, επεξεργασίες, διαγραφές, ψήφοι και ενέργειες συντονισμού σπρώχνονται σε όλους που βλέπουν το νήμα (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Από προεπιλογή τα νέα σχόλια από άλλους χρήστες εμφανίζονται πίσω από ένα κουμπί "Show 2 New Comments" ώστε η σελίδα να μην «πηδά» κάτω από τον αναγνώστη. Για ζωντανές εκδηλώσεις ορίστε `showLiveRightAway` ώστε να εμφανίζονται αμέσως, και `newCommentsToBottom` αν θέλετε να ρέουν προς τα κάτω σαν chat.

Τα likes και dislikes γίνονται up και down ψήφοι. Ο εισαγωγέας διατηρεί και τις δύο μετρήσεις ανά σχόλιο. Αν η κοινότητά σας είναι συνηθισμένη σε ένα μόνο like, αλλάξτε το στυλ ψήφου σε καρδιές στη σελίδα προσαρμογής widget. Η ψήφος μπορεί επίσης να απενεργοποιηθεί εντελώς.

Οι Reactions του OpenWeb είναι ένα ξεχωριστό widget με 2‑4 ετικετοποιημένα εικονίδια στο άρθρο (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Το αντίστοιχο FastComments είναι Page Reacts: ένα ρυθμιζόμενο σύνολο εικόνων αντίδρασης που προσαρμόζεται στο widget, αποθηκεύεται ανά σελίδα και ανά χρήστη (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Οι μετρήσεις των Reactions δεν περιλαμβάνονται στην εξαγωγή σχολίων του OpenWeb, οπότε ξεκινούν από το μηδέν.

Η ταξινόμηση αντιστοιχεί άμεσα. Οι τιμές `data-sort-by` του OpenWeb (best, newest, oldest) αντιστοιχούν στα Most Relevant, Newest First και Oldest First. Ορίστε την προεπιλογή με `defaultSortDirection` (`MR`, `NF`, `OF`) στον κώδικα ή σε κανόνα προσαρμογής. Οι αναγνώστες μπορούν να αλλάξουν στο widget.

`data-read-only="true"` γίνεται `readonly: true`, το οποίο μπλοκάρει νέα σχόλια, ψήφους, επεξεργασίες και διαγραφές. `data-post-staleness-days` δεν έχει άμεση ισοδυναμία, αλλά ένας κανόνας προσαρμογής μπορεί να εφαρμόσει `readonly` σε μοτίβο URL ID, και μπορείτε επίσης να το ενεργοποιήσετε/απενεργοποιήσετε από τα πρότυπα βάσει ηλικίας άρθρου. `data-messages-count` είναι το μέγεθος σελίδας, ορίζεται στη σελίδα προσαρμογής widget από 10 έως 200 σχόλια.

### Replies and Threading

Το FastComments υποστηρίζει απεριόριστο βάθος nesting από προεπιλογή· το `maxReplyDepth` το περιορίζει (`1` δίνει επίπεδο δύο). Το CSV του OpenWeb περιλαμβάνει στήλες `parent_id` και `parent_comment_id`. Ο εισαγωγέας διαβάζει `parent_comment_id` και ξαναχτίζει το δέντρο απαντήσεων σε πλήρες βάθος, έτσι μια απάντηση σε απάντηση παραμένει nested κάτω από τον άμεσο γονέα, με συγγραφέα, χρονική σήμανση, ψήφους, αριθμό σημαδιών και κατάσταση έγκρισης αμετάβλητα. Οι απαντήσεις συνδέονται ακόμη και όταν εμφανίζονται πριν από τον γονέα στο αρχείο, ή όταν ο γονέας είχε εισαχθεί από προηγούμενο παράθυρο εξαγωγής. Μια απάντηση του οποίου ο γονέας λείπει από όλες τις εξαγωγές γίνεται σχόλιο κορυφής. Το ID του μηνύματος του OpenWeb αποθηκεύεται σε κάθε σχόλιο, έτσι μια επανεισαγωγή παλαιότερου «flat» import το ενσωματώνει στη θέση του.

### User Profiles and Badges

Οι χρήστες FastComments, συμπεριλαμβανομένων των χρηστών SSO, έχουν προφίλ με avatar, εμφανιζόμενο όνομα, βιογραφικό, κοινωνικούς συνδέσμους, badges, karma, αριθμό σχολίων, δημόσιο feed δραστηριότητας και άμεσες μηνύματα (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Κάθε ένα από τα surfaces δραστηριότητας, προφίλ σχολίων και DM μπορεί να απενεργοποιηθεί ανά χρήστη στο payload SSO ή παγκοσμίως στη ρύθμιση.

Το Author Badge του OpenWeb απαιτεί κλήση `GET /sso/v1/user/{primary_key}` για τον συγγραφέα και τοποθέτηση του επιστρεφόμενου ID στο `data-author-id`. Στο FastComments ορίζετε `displayLabel: 'Author'` (ή οποιαδήποτε ετικέτα μέχρι 100 χαρακτήρες) στο payload SSO, και `isAdmin` ή `isModerator` για προσωπικό. Η ετικέτα εμφανίζεται δίπλα στο όνομα σε κάθε σχόλιο. Για πιο πλούσιο σύστημα, ρυθμίστε badges στο Customize → Badges: εικόνα ή κείμενο, χορηγούνται αυτόματα βάσει κατωφλίων (αριθμός σχολίων, upvotes, pinned comments, veteran status, ταχύτητα απαντήσεων) ή χειροκίνητα, και μπορούν να οριστούν από το payload SSO με `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Οποιοσδήποτε συντονιστής μπορεί να Pin ή Unpin ένα σχόλιο από το μενού του widget ή από το dashboard συντονισμού. Τα pinned σχόλια σπρώχνονται ζωντανά σε όλους στο νήμα. Αν θέλετε αυτοματοποίηση, η λειτουργία AI Agents προσφέρει ένα template Top Comment Pinner που pin-άρει ένα σχόλιο κορυφής όταν περάσει ένα όριο ψήφων (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

Τα In Conversation Polls του OpenWeb επιτρέπουν στο προσωπικό να προσθέσει poll 2‑4 επιλογών σε σχόλιο κορυφής. Τα polls του FastComments επίσης προστίθενται σε σχόλιο, με 2‑10 επιλογές, προαιρετική ημερομηνία λήξης, ιδιωτικότητα αποτελεσμάτων (ανώνυμη, μόνο admins, όλοι) και λειτουργία «ψήφισε για να δεις τα αποτελέσματα». Επιλέγετε ποιος μπορεί να δημιουργήσει polls (απενεργοποιημένο, admins & moderators, όλοι) και αν οι ανώνυμοι αναγνώστες μπορούν να ψήφουν. Τα polls εκτίθενται επίσης στο δημόσιο API για δημιουργία από το CMS σας.

Το OpenWeb είχε μορφές Ask Me Anything. Το FastComments δεν έχει ξεχωριστό προϊόν Q&A. Η πρακτική αντικατάσταση είναι ένα κανονικό νήμα σε dedicated URL ID: ο SSO χρήστης του καλεσμένου φέρει `displayLabel`, pin-άτε το εισαγωγικό σχόλιο, οι αναγνώστες κάνουν ερωτήσεις σε σχόλια κορυφής, ο καλεσμένος απαντά εντός νήματος, και οι ειδοποιήσεις αναφορών και απαντήσεων φέρνουν τους χρήστες πίσω. Ορίστε `noNewRootComments` μετά το κλείσιμο του παραθύρου ώστε μόνο απαντήσεις να συνεχίσουν.

Το Community Spotlight (συλλέκτης email, counter και redirect cards του OpenWeb) δεν έχει ισοδύναμο. Το widget υποστηρίζει custom header HTML πάνω από το πεδίο σχολίου μέσω `headerHTML`, που καλύπτει CTA αλλά όχι φόρμα σύλληψης email.

### Live Blog

Δεν υπάρχει FastComments Live Blog. Το Live Blog του OpenWeb είναι προϊόν editorial: δημοσιογράφοι που έχουν ανατεθεί στο Admin Panel δημοσιεύουν ενημερώσεις με ενσωματωμένους συνδέσμους, tweets και βίντεο, και οι αναγνώστες ακολουθούν (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Αυτό που προσφέρει το FastComments για ζωντανή κάλυψη είναι η πλευρά του αναγνώστη: ένα Live Chat widget (`embed-live-chat.min.js`) για streaming chat, και το widget σχολίων σε chat mode (`showLiveRightAway` + `newCommentsToBottom`) παράλληλα με την κάλυψη σας. Για τις editorial ενημερώσεις, οι εκδότες που μεταβαίνουν από το OpenWeb τις κρατούν στο CMS ή σε dedicated εργαλείο live blog και ενσωματώνουν το FastComments κάτω για συζήτηση. Τα media embeds (YouTube, SoundCloud κ.λπ.) υποστηρίζονται μέσα στα σχόλια, έτσι οι ενημερώσεις προσωπικού ως σχόλια φέρνουν πλούσιο μέσο.

### Topic Tracker, Notifications and Email

Ο Topic Tracker του OpenWeb επιτρέπει σε έναν αναγνώστη να ακολουθεί topics και συγγραφείς που εξάγονται από μεταδεδομένα σελίδας και να ειδοποιείται όταν νέα άρθρα ταιριάζουν (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). Το FastComments δεν έχει topic ή author follow διασυγγραφικά. Οι αναγνώστες εγγράφονται σε μια σελίδα από το Notification Bell και λαμβάνουν ενημερώσεις για εκείνο το νήμα, με συχνότητα που επιλέγεται ανά εγγραφή: κάθε λεπτό, ωριαία σύνοψη ή ημερήσια σύνοψη. Αν η διασυγγραφική ακολουθία είναι κρίσιμη για τα retention σας, ενημερώστε μας καθώς αυτή η λειτουργία είναι στο roadmap μας.

Όλα τα άλλα του Notification Bell αντιστοιχούν. Το widget έχει καμπάνα που γίνεται κόκκινη με το count των αδιάβαστων και εμφανίζει λίστα: απαντήσεις σε εσάς, απαντήσεις σε νήμα που σχολιάσατε, mentions, upvotes στα σχόλιά σας, δραστηριότητα σε εγγεγραμμένες σελίδες, awards badges και άμεσες μηνύματα (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Οι ειδοποιήσεις εντός εφαρμογής είναι σε πραγματικό χρόνο μέσω WebSocket. Τα email απαντήσεων και mentions αποστέλλονται κάθε λεπτό μόνο για εγκεκριμένα σχόλια.

Για χρήστες SSO, περάστε `optedInNotifications` και `optedInSubscriptionNotifications` στο payload και το FastComments ενημερώνει τις προτιμήσεις τους στην επόμενη φόρτωση σελίδας. Τα email χρειάζονται διεύθυνση email στο payload. Τα πρότυπα email είναι επεξεργάσιμα ανά τύπο και ανά locale στο Customize → Email Templates, και η αποστολή από το δικό σας domain με DKIM υποστηρίζεται. Οι συντονιστές και admins λαμβάνουν ημερήσια, εβδομαδιαία ή μηνιαία σύνοψη με one‑click approve, respond και spam links.

Το Notification Webhook του OpenWeb στέλνει per‑user events (`replied-message`, `liked-message`, `topic-by-keyword` κ.λπ.) στο endpoint σας. Τα webhooks του FastComments καλύπτουν το resource σχολίου: created, updated, removed, με όσους endpoints θέλετε να εγγραφείτε (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Αν χρησιμοποιούσατε το webhook ειδοποιήσεων για το δικό σας σύστημα email, θα ξαναχτίσετε τη λογική σε comment events, ή θα αφήσετε το FastComments να στέλνει τα email.

### SSO: From codeA/codeB to a Signed Payload

Η διαδικασία handshake του OpenWeb έχει έξι βήματα: περιμένετε `spot-im-api-ready`, το OpenWeb δημιουργεί `codeA`, ο client σας το στέλνει στο backend, το backend επιβεβαιώνει τον χρήστη και καλεί `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, το OpenWeb επιστρέφει `codeB`, και ο client σας επιστρέφει `codeB` στο OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Η αποσύνδεση καλεί `window.SPOTIM.logout()`.

Το Secure SSO του FastComments δεν έχει round‑trip και δεν απαιτεί νέο endpoint. Όταν αποδίδετε τη σελίδα για συνδεδεμένο χρήστη, το backend σας σειριοποιεί τον χρήστη, το κωδικοποιεί σε Base64, και το υπογράφει με HMAC‑SHA256 χρησιμοποιώντας το API secret σας. Το widget στέλνει το payload με τα αιτήματά του και το FastComments επαληθεύει την υπογραφή (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). Σε Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

Το timestamp είναι epoch milliseconds και απορρίπτεται αν είναι παλαιότερο από δύο ημέρες. Για ανώνυμο αναγνώστη, παραλείψτε τα τρία υπογεγραμμένα πεδία και περάστε μόνο `loginURL` (ή μια `loginCallback` function) και το widget θα δείξει prompt login αντί για συνθέτη. Πλήρη παραδείγματα σε Node, Java και PHP βρίσκονται στο <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a>.

Οι χρήστες δημιουργούνται στην πρώτη φόρτωση σελίδας. Δεν κάνετε bulk‑register κανέναν. Επειδή ο εισαγωγέας OpenWeb ταιριάζει τους συγγραφείς σχολίων με `user_name`, ένας χρήστης του οποίου το SSO payload φέρει το ίδιο `username` διεκδικεί τα εισαγόμενα σχόλιά του την πρώτη φορά που φορτώνει ένα νήμα και μπορεί να τα επεξεργαστεί ή διαγράψει από τότε. Υπάρχει επίσης SSO user API αν θέλετε να προ‑δημιουργήσετε χρήστες.

Κάθε φορά που το payload στέλνεται, το FastComments ενημερώνει το user record, έτσι μια αλλαγή display name ή avatar από τη δική σας πλευρά διαχέεται στην επόμενη προβολή. Ορίστε πεδίο σε `null` για να το καθαρίσετε.

Αν χρησιμοποιούσατε third‑party SSO του OpenWeb με Auth0, Gigya ή Piano μέσω `window.SPOTIM.startSSOForProvider`, η ροή FastComments είναι η ίδια: μόλις ο provider σας πιστοποιήσει τον χρήστη, το backend σας δημιουργεί και υπογράφει το payload. Δεν υπάρχει provider‑specific ενσωμάτωση που χρειάζεται ρύθμιση στο FastComments.

Δύο άλλες επιλογές υπάρχουν. Το Simple SSO περνάει το user object unsigned από τον client, για πλατφόρμες χωρίς backend, και σηματοδοτεί τη δραστηριότητα ως verified όταν υπάρχει email (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). Το SAML 2.0 υπογράφει το προσωπικό σας στο dashboard του FastComments μέσω Okta, Azure AD ή ADFS, με mapping ρόλων, και είναι διαθέσιμο σε enterprise plans (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

Το API Πολιτικής Συντονισμού ανά άρθρο του OpenWeb έχει τέσσερις τιμές: `spot_policy`, `approve_all`, `publish_and_moderate` και `require_approval`. Το FastComments ρυθμίζει τις ίδιες συμπεριφορές στις Moderation Settings: αυτόματη έγκριση ενεργή ή όχι, έγκριση απαιτείται μόνο για το πρώτο σχόλιο χρήστη, και auto‑approve μόνο για verified (συνδεδεμένους ή SSO) χρήστες. Οι κανόνες εφαρμόζονται site‑wide ή σε μοτίβο URL ID όπως `*/politics/*`, που είναι ο τρόπος να αναπαράγετε πολιτική ανά ενότητα. Κάθε σχόλιο, εγκεκριμένο ή όχι, εμφανίζεται στο Moderate Comments dashboard, έτσι το μοντέλο publish‑then‑review είναι η προεπιλογή εκεί (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Η εισαγωγή μεταφέρει την κατάσταση συντονισμού. Το OpenWeb `message_status` με τιμή `approved` εισάγεται ως approved και reviewed· `rejected` εισάγεται ως spam και reviewed· οτιδήποτε άλλο εισάγεται ως unapproved και unreviewed ώστε να εμφανίζεται στην ουρά συντονισμού. Το `reports_count` γίνεται το flag count του σχολίου.

Η αυτοματοποιημένη συντονιστική λειτουργία στο FastComments είναι επιπέδου‑πέρας αντί για ένα ενιαίο σύστημα όπως το Aida:

- Spam classifier, συνεχώς εκπαιδευμένο, διαθέσιμο ως shared model σε όλους τους tenants ή απομονωμένο στο δικό σας tenant, με trust factor που χαλαρώνει το φιλτράρισμα για μακροχρόνιους ή συχνά pinned χρήστες.
- Προαιρετικός LLM spam check σε Flex billing (ανοιχτά μοντέλα όπως GLM‑5.3 είναι διαθέσιμα)
- Image content moderation σε low, medium ή high ευαισθησία για ανεβασμένες εικόνες.
- Τοπική λευκή λίστα λέξεων περίπου 450 προεπιλεγμένες φράσεις, επεξεργάσιμη, που καλύπτει τις περιορισμένες λέξεις του OpenWeb.
- Κατώφλια flags που κρύβουν αυτόματα ένα σχόλιο μετά από N αναφορές.
- Πρόληψη επαναλαμβανόμενων ή σχεδόν-διπλών μηνυμάτων, πάντα ενεργή.
- AI Agents: agents που ενεργοποιούνται από γεγονότα με explicit tool allowlist (σημείωση spam, έγκριση, κλείδωμα, pin, προειδοποίηση μέσω DM, ban, award badge, reply). Κάθε agent ξεκινά σε dry run, τα ευαίσθητα εργαλεία μπορούν να γίνουν διαθέσιμα μόνο μετά από ανθρώπινη έγκριση, και κάθε ενέργεια καταγράφεται με justification και confidence score.

Το User Muting API του OpenWeb επιτρέπει σε έναν SSO αναγνώστη να σιγήσει έναν άλλο. Το FastComments ισοδυναμεί με Block User στο μενού σχολίου, διαθέσιμο σε οποιονδήποτε συνδεδεμένο αναγνώστη. Τα bans είναι ενέργεια συντονιστή: μόνιμα ή για ορισμένη διάρκεια, προαιρετικά shadow ban (ο χρήστης βλέπει το σχόλιό του αλλά κανείς άλλος όχι), προαιρετικά με hashed IP, με plus‑aliases ενός email που θεωρείται μία διεύθυνση. Η λίστα banned χρηστών είναι αναζητήσιμη κατά email, όνομα, συντονιστή και το σχόλιο που προκάλεσε το ban.

Το Moderate Comments dashboard υποστηρίζει φίλτρα (χρειάζεται review, χρειάζεται έγκριση, spam, flagged, από banned χρήστες) και αναζήτηση κειμένου, bulk actions με undo και pause, “select all matching” για πολύ μεγάλες ουρές, ομάδες συντονιστών ώστε το sports desk σας να βλέπει μόνο sports threads, logs ανά σχόλιο που δείχνουν γιατί ένα email στάλθηκε ή όχι, και shareable filtered links. Οι συντονιστές έχουν μόνο το dashboard· δεν μπορούν να αλλάξουν ρυθμίσεις ή να εισάγουν δεδομένα.

### Analytics

Το FastComments Analytics δείχνει χρήστες online αυτή τη στιγμή σε όλους τους ιστότοπούς και ανά σελίδα, κορυφαίες σελίδες κατά σχόλια ή ζωντανούς χρήστες, και ημερήσιες σειρές για page loads, σχόλια, ψήφους και λογαριασμούς που δημιουργήθηκαν (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Τα στατιστικά συντονιστών είναι ξεχωριστά. Οι μετρήσεις είναι σχεδόν σε πραγματικό χρόνο, καθυστερούν το πολύ ένα λεπτό, και κάθε φόρτωση σελίδας μετράται αντί για sampling.

Αυτό που δεν θα βρείτε είναι κάτι για ad fill, CPM ή έσοδα, επειδή δεν υπάρχουν διαφημίσεις. Αν το dashboard του OpenWeb ήταν η πηγή σας για engagement‑to‑revenue reporting, αυτή η αναφορά μεταφέρεται στο δικό σας ad stack.

### Monetization

Το OpenWeb τοποθετεί διαφημίσεις μέσα και γύρω από τη Conversation και προσφέρει Standalone Ad unit, με καμπάνιες που ρυθμίζονται μέσω του OpenWeb contact σας (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). Το FastComments δεν τρέχει διαφημίσεις στο widget, δεν έχει revenue share, και δεν φορτώνει τρίτα ad ή tracking scripts. Το widget είναι ένα iframe που τοποθετείτε· τα slots διαφημίσεων πάνω και κάτω από αυτό είναι δικά σας και τρέχουν μέσω ό,τι ήδη χρησιμοποιείτε.

Η ανταλλαγή είναι σαφής: χάνετε ό,τι σας πλήρωσε το OpenWeb, και κερδίζετε σταθερό, προβλέψιμο κόστος και ένα widget που δεν προσθέτει ad requests στη σελίδα σας. Το branding αφαιρείται σε Flex και Pro plans, και το white‑labeling είναι διαθέσιμο σε Pro και Enterprise.

### Data Export and Privacy

Όλα τα εξαγόμενα δεδομένα σχολίων από το FastComments dashboard είναι CSV οποτεδήποτε, με ημερομηνίες σε UTC ISO format, και τα ίδια δεδομένα είναι διαθέσιμα μέσω API. Τα webhooks καλύπτουν συνεχή συγχρονισμό. Τα αρχεία εισαγωγής διαγράφονται από το FastComments μόλις ολοκληρωθεί η εισαγωγή.

Για GDPR και CCPA, το OpenWeb παρέχει export και delete API όπου τα σχόλια διαγραμμένων χρηστών παραμένουν συνδεδεμένα σε τυχαίο guest account (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). Το FastComments υποστηρίζει αιτήματα εξαγωγής και διαγραφής δεδομένων, προσφέρει Data Processing Agreement, και τρέχει ξεχωριστή EU εγκατάσταση στο <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> με δεδομένα που αντιγράφονται μόνο σε EU points of presence. Δημιουργήστε λογαριασμό εκεί αν οι αναγνώστες σας είναι στην Ευρώπη. Στην EU περιοχή, οι AI agent bans απαιτούν πάντα ανθρώπινη έγκριση για να ικανοποιήσουν το DSA Article 17.

Τα δεδομένα σχολίων στην παγκόσμια εγκατάσταση αντιγράφονται σε περιοχές, συμπεριλαμβανομένου ενός κόμβου στη Σιγκαπούρη, και το widget σερβίρεται από το δικό μας DNS και CDN. Το embed script είναι περίπου 35 kb συμπιεσμένο στο δίκτυο.

### Mobile SDKs

Το OpenWeb παρέχει Android, iOS και React Native SDKs με Conversation, Articles, Authentication, Notifications, Reactions και In Conversation Polls. Το FastComments παρέχει native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> και <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> βιβλιοθήκες με threaded comments, live updates μέσω WebSocket, Secure SSO, ψήφους, mentions, ανέβασμα εικόνων, ενέργειες συντονισμού (flag, pin, lock, block), theming, live chat mode και social feed component. Η EU περιοχή είναι flag configuration. Δεν υπάρχει ξεχωριστό ad SDK επειδή δεν υπάρχουν διαφημίσεις.

### Embed and SPA Integration

Ο εκκινητής και container του OpenWeb:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

Το αντίστοιχο FastComments:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Το tenant ID σας βρίσκεται στη <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">σελίδα credentials</a> μόλις έχετε λογαριασμό. `data-article-tags` δεν έχει ισοδυναμία επειδή δεν υπάρχει topic following· hashtags μέσα στα σχόλια είναι διαφορετική λειτουργία.

Για infinite scroll και single‑page apps, η προσέγγιση Virtual Pages του OpenWeb είναι ένα container ανά άρθρο. Στο FastComments καλείτε `FastCommentsUI(element, config)` ανά νήμα και αργότερα `instance.update(newConfig)` για να αλλάξετε το URL ID ή `instance.destroy()` για να το αφαιρέσετε (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Οι βιβλιοθήκες React, Vue, Angular και SolidJS διαχειρίζονται αυτό όταν αλλάζει το prop config. Τα lifecycle callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) αντικαθιστούν τα `spot-im-*` DOM events που ακούγατε.

Οι μετρήσεις σχολίων σε index pages χρησιμοποιούν το comment count widget, single ή bulk. Για SEO, τα σχόλια αποδίδονται απευθείας στη σελίδα για crawlers αντί για το iframe, έτσι δεν υπάρχει κλήση SEO API για ρύθμιση.

### Step-by-Step Cutover

**1. Δημιουργήστε τον λογαριασμό και ρυθμίστε τα βασικά.** Εγγραφείτε στο fastcomments.com ή eu.fastcomments.com. Ορίστε τις ρυθμίσεις συντονισμού, blacklist λέξεων, στυλ ψήφου, προεπιλεγμένη ταξινόμηση και custom CSS στη σελίδα προσαρμογής widget. Προσθέστε συντονιστές και ομάδες συντονισμού. Αν έχετε πολλούς admin χρήστες, υποστηρίζουμε εισαγωγή για εσάς.

**2. Εκτελέστε την πρώτη εισαγωγή.** Μεταβείτε στο <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, επιλέξτε OpenWeb (.csv) και ανεβάστε. Η εισαγωγή τρέχει ως background job· η σελίδα δείχνει row counts και status, και λαμβάνετε email όταν ολοκληρωθεί (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Κάθε σχόλιο κρατά το OpenWeb message ID ως external ID, έτσι μια επανεκτέλεση εισαγωγής ενημερώνει τα υπάρχοντα σχόλια αντί να δημιουργεί διπλότυπα.

**3. Επαληθεύστε τα counts.** Συγκρίνετε το row count του job με την εξαγωγή σας. Ανοίξτε μερικά URL IDs υψηλής κίνησης στο dashboard συντονισμού και ελέγξτε συγγραφείς, ημερομηνίες, συνολικές ψήφους και κατάσταση έγκρισης. Επιβεβαιώστε ότι τα rejected σχόλια εμφανίζονται ως spam και τα pending στην ουρά.

**4. Δημιουργήστε το SSO payload.** Υλοποιήστε τον κώδικα υπογραφής παραπάνω στο backend, χρησιμοποιώντας το ίδιο `id` και `username` που χρησιμοποιήσατε με το OpenWeb. Δοκιμάστε με λογαριασμό προσωπικού σε staging σελίδα: τα εισαγόμενα σχόλια του χρήστη εμφανίζονται ως δικά του, και η επεξεργασία/διαγραφή εμφανίζεται στο μενού του.

**5. Αντικαταστήστε το embed σε ένα staging template.** Αντικαταστήστε τον launcher και container με το snippet FastComments, αντιστοιχίζοντας `data-post-id` σε `urlId` και `data-post-url` σε `url`. Αφαιρέστε `window.SPOTIM.logout()` και τους `spot-im-*` listeners, ή αντιστοιχίστε τα στα callbacks. Εφαρμόστε το CSS σας σε κανόνα προσαρμογής αντί για κώδικα ώστε να δοκιμάζεται σε κάθε έκδοση FastComments.

**6. Τρέξτε παράλληλα.** Τοποθετήστε το FastComments σε ένα τμήμα ή ποσοστό άρθρων ενώ το OpenWeb παραμένει στα υπόλοιπα. Δεν χρειάζεται καμία αλλαγή στο OpenWeb. Παρακολουθήστε την ουρά συντονισμού και τη σελίδα analytics. Οι αναγνώστες που σχολιάζουν σε σελίδες FastComments κατά το παράλληλο παράθυρο δεν περιλαμβάνονται στην εξαγωγή OpenWeb, οπότε προγραμματίστε την τελική εισαγωγή πριν ξεκινήσουν, όχι μετά.

**7. CSP και DNS.** Αν έχετε Content‑Security‑Policy, επιτρέψτε `cdn.fastcomments.com` και `fastcomments.com` (ή `eu.fastcomments.com`) για `script-src`, `frame-src` και `connect-src`, και αφαιρέστε τις καταχωρήσεις `spot.im` και `openweb.com` όταν ο launcher αφαιρεθεί. Δεν αλλάζει τίποτα στο δικό σας DNS. Δεν χρειάζονται redirects επειδή τα URL IDs ταιριάζουν.

**8. Τελική εισαγωγή και go live.** Τραβήξτε μια ακόμη εξαγωγή OpenWeb που καλύπτει το παράλληλο παράθυρο, ανεβάστε την (η επανεισαγωγή είναι ασφαλής), μετά αναπτύξτε την αλλαγή template σε όλες τις σελίδες και αφαιρέστε τον launcher, Reactions, Topic Tracker, Spotlight, bell και ad containers.

**9. Λίστα ελέγχου go‑live.**

- Ζωντανό σχολιασμό ορατό σε παραγωγικό άρθρο από δύο browsers.
- Σύνδεση SSO, αποσύνδεση και σχόλιο υπό πραγματικό λογαριασμό συνδρομητή.
- Οι συντονιστές λαμβάνουν τη σύνοψη και μπορούν να εγκρίνουν από αυτήν.
- Τα email απαντήσεων και mentions φτάνουν και οδηγούν στη σωστή σελίδα.
- Λίστα bans και blacklist λέξεων γεμάτες.
- Page Reacts και comment count widgets εμφανίζονται εκεί που πριν υπήρχαν Reactions και counter.
- Αναφορές CSP καθαρές.
- Τελευταία σύγκριση comment‑count μεταξύ εξαγωγής και dashboard.

### What You Lose and What Is Different

Απλώς και ξεκάθαρα τα κενά:

- **Live Blog.** Δεν υπάρχει ισοδύναμο. Κρατήστε το στο CMS ή σε εργαλείο live blogging και τοποθετήστε το FastComments κάτω από αυτό.
- **Topic Tracker.** Δεν υπάρχει διασυγγραφική παρακολούθηση topics ή συγγραφέων. Μόνο εγγραφές σε σελίδες.
- **Community Spotlight.** Δεν υπάρχει προϊόν CTA card. `headerHTML` σας δίνει μήνυμα πάνω από το composer, όχι φόρμα σύλληψης email.
- **Ad revenue.** Δεν υπάρχει. Το widget είναι χωρίς διαφημίσεις από την αρχή.
- **Notification webhook.** Τα webhooks αφορούν γεγονότα σχολίων, όχι per‑user notification events.
- **Ιστορικό Reactions.** Οι μετρήσεις σε επίπεδο άρθρου δεν περιλαμβάνονται στην εξαγωγή σχολίων και ξεκινούν από το μηδέν. Μπορούμε μερικές φορές να τα «σκάψουμε» από το site σας.
- **Ιστορικό Polls.** Οι ορισμοί και οι ψήφοι των polls δεν περιλαμβάνονται στην εξαγωγή σχολίων· το κείμενο του poll εισάγεται, το poll όχι. Μπορούμε μερικές φορές να τα «σκάψουμε» από το site σας.
- **Μονόγραμμα σύνδεσης.** Οι αναγνώστες χωρίς SSO συνδέονται με magic link αντί για κωδικό ή social login.
- **Ανθρώπινο προσωπικό συντονισμού.** Το OpenWeb παρέχει ομάδα συντονισμού με Aida. Το FastComments προσφέρει εργαλεία, classifiers και agents· το ανθρώπινο προσωπικό είναι δικό σας.

Αυτό που κερδίζετε, με το ίδιο πνεύμα: ένα widget που προσθέτει μόνο ένα μικρό script και δεν κάνει ad requests, συντονισμό που ένας μόνο άνθρωπος μπορεί να διαχειριστεί για μεγάλο site με bulk actions και agents, SSO που είναι μια συνάρτηση υπογραφής αντί για πρωτόκολλο, και ένας προμηθευτής που δεν βρίσκεται υπό δικαστική επίβλεψη.

### Timeline and the Free Import Offer

Προγραμματίστε μία‑δύο εβδομάδες για έναν εκδότη με μία ενσωμάτωση SSO και μερικές εκατοντάδες χιλιάδες σχόλια: μια‑δύο ημέρες για εξαγωγή και πρώτη εισαγωγή, μερικές ημέρες για SSO και πρότυπα, παράθυρο παράλληλης λειτουργίας, και τέλος τελική εισαγωγή και εναλλαγή. Η πλατφόρμα ήδη υποστηρίζει αυτή την κλίμακα: η United Cloud τρέχει πάνω από δέκα portals και εκατομμύρια σχόλια στο FastComments, και το itsfoss.com μετέφερε ιστορικό 88 000 σχολίων από άλλο πάροχο μέσω του ίδιου αυτο‑υπηρεσίας εισαγωγέα.

Το FastComments εισάγει το CSV export του OpenWeb δωρεάν, σας βοηθά να τρέξετε OpenWeb και FastComments παράλληλα κατά τη μετάβαση, και υποστηρίζει τη μετανάστευση ίδια, συμπεριλαμβανομένου του threading και των ερωτήσεων αντιστοίχισης χρηστών. Τα enterprise plans περιλαμβάνουν SLA 99.99% και υποστήριξη εντός μίας ώρας κατά τις εργάσιμες ώρες. Η τιμολόγηση Flex είναι με βάση τη χρήση για sites που θέλουν να ξεκινήσουν χωρίς συμβόλαιο.

<a href="https://fastcomments.com/contact-us">Write to us</a> με το μέγεθος της εξαγωγής σας και τη ρύθμιση SSO και θα σας επιστρέψουμε με ένα σχέδιο.

### In Conclusion

Τραβήξτε την εξαγωγή σας σήμερα. Θυμηθείτε: τα ίδια post IDs γίνονται URL IDs, η κατάσταση συντονισμού μεταφέρεται, και το embed είναι απλή αντικατάσταση. Τα σημεία όπου το FastComments διαφέρει είναι παρατιθέμενα παραπάνω ώστε να μπορείτε να αποφασίσετε με τα πραγματικά δεδομένα μπροστά σας. :)

Cheers!

{{/isPost}}

---