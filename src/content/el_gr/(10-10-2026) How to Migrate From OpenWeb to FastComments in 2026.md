[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Πώς να Μεταφέρετε Από το OpenWeb στο FastComments το 2026[/postlink]

{{#unless isPost}}
A feature-by-feature guide for publishers moving off OpenWeb (formerly Spot.IM): what maps 1:1, what is different, how the CSV import works, how the SSO handshake changes, and a step-by-step cutover plan.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Αυτό το Άρθρο Περιέχει Τεχνική Ορολογία

Αυτός ο οδηγός προορίζεται για product και engineering leads καθώς και community managers που διαχειρίζονται το OpenWeb σήμερα και χρειάζονται ένα σχέδιο μετάβασης. Περνάει από κάθε επιφάνεια του OpenWeb, ονομάζει το αντίστοιχο του FastComments, και δηλώνει ξεκάθαρα πού δεν υπάρχει αντιστοιχία 1:1.

### Why Now

Στις 30 Σεπτεμβρίου 2026 το Πρωτοδικείο του Τελ Αβίβ διέταξε τον διορισμό προσωρινού διαχειριστή για το OpenWeb κατόπιν αιτήματος του δανειστή του, Mars Growth Capital, ο οποίος κατέχει πρώτο προτεραιότητας χρέος επί των περιουσιακών στοιχείων και λογαριασμών της εταιρείας και προσπαθεί να το επιβάλει εναντίον των ισραηλινών περιουσιακών στοιχείων, τραπεζικών λογαριασμών και πνευματικής ιδιοκτησίας του OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Ένας προσωρινός διαχειριστής, Adv. Ehud Gindes, διορίστηκε την επόμενη μέρα (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Πριν από αυτό, το 2026 η Microsoft, ένας από τους μεγαλύτερους πελάτες του OpenWeb, τερμάτισε τη συνεργασία της και κράτησε πληρωμές λόγω διαφωνίας για την κίνηση επισκεψιμότητας που το OpenWeb απορρίπτει (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

Το OpenWeb δηλώνει ότι η πλατφόρμα συνεχίζει να λειτουργεί. Η δικαστική επίβλεψη, ένας δανειστής που επιβάλλει χρέη στην IP από την οποία εξαρτάται το widget σχολίων σας, και ένας διαχειριστής που έχει ως αποστολή τη διατήρηση της αξίας των περιουσιακών στοιχείων δεν είναι συνθήκες που θέλει ένας εκδότη κάτω από μια βασική επιφάνεια αλληλεπίδρασης. Αν δεν έχετε ήδη εξάγει πλήρη δεδομένα, κάντε το πρώτα, σήμερα, πριν προχωρήσετε σε οτιδήποτε άλλο σε αυτόν τον οδηγό.

### What You Need Before You Start

Συλλέξτε τα παρακάτω πριν αγγίξετε οποιονδήποτε κώδικα:

- **Your OpenWeb comment export.** Το OpenWeb εκθέτει ένα Export API (v4) που παράγει συμπιεσμένα CSV αρχεία, το πολύ 100.000 σχόλια ανά αρχείο, με παράθυρα ημερομηνίας έως ένα μήνα και συνδέσμους λήψης που λήγουν μετά από μια εβδομάδα (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Ζητήστε κάθε παράθυρο που χρειάζεστε και κρατήστε τα αρχεία κάπου ασφαλή. Αν η επαφή σας στο OpenWeb έχει παράσχει εξαγωγή CSV από το Admin Panel στο παρελθόν, κρατήστε και αυτήν. Ο εισαγωγέας FastComments διαβάζει το CSV του OpenWeb με στήλες όπως `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` και `url`.
- **Your Spot ID and the list of post IDs.** Κάθε `data-post-id` που περνάτε στον launcher γίνεται FastComments URL ID. Αν τα post IDs σας είναι CMS article IDs, σημειώστε πώς δημιουργούνται ώστε να μπορείτε να εκδώσετε τις ίδιες τιμές στο FastComments.
- **Your SSO user list.** Συγκεκριμένα οι τιμές `primary_key` και `user_name` που καταχωρίσατε στο OpenWeb. Η συγγραφή σχολίων ταιριάζει με το όνομα χρήστη κατά την εισαγωγή, οπότε θέλετε να περάσετε τα ίδια usernames στο payload SSO του FastComments.
- **Your moderator list and roles.** Λογαριασμοί admin, moderator και journalist, και ποιες ενότητες κάθε ένας διαχειρίζεται.
- **Your moderation configuration.** Πολιτική site-wide (approve all, publish and moderate, require approval), παρακάμψεις ανά άρθρο, λίστα περιορισμένων λέξεων, muted και banned χρήστες.
- **Custom CSS and theme settings.** Εξάγετε ό,τι έχετε στο Admin Panel ώστε να το ξαναχτίσετε στη σελίδα προσαρμογής widget του FastComments.
- **Where the launcher lives in your templates**, συμπεριλαμβανομένων τυχόν σελίδων που τρέχουν Reactions, Topic Tracker, Spotlight, το Notification Bell ή ένα Standalone Ad χωρίς Conversation.

### How OpenWeb Post IDs Map to FastComments URL IDs

Το FastComments συνδέει ένα νήμα σχολίων με ένα `urlId`. Από προεπιλογή το URL ID είναι το καθαρισμένο URL της σελίδας, αλλά μπορείτε να το ορίσετε σε οποιοδήποτε string, και αυτό ακριβώς κάνει ο εισαγωγέας OpenWeb: διαβάζει τη στήλη `post_id` και τη χρησιμοποιεί ως FastComments URL ID για κάθε σχόλιο σε αυτό το άρθρο. Επίσης αποθηκεύει τη στήλη `url` ως το εμφανιζόμενο URL ώστε οι σύνδεσμοι διαχείρισης και τα email ειδοποιήσεων να δείχνουν στη σωστή σελίδα.

Άρα ο κανόνας για τα templates σας είναι: όπου και αν περάσατε `data-post-id="POST_ID"` και `data-post-url="ARTICLE_URL"` στο OpenWeb, περάστε `urlId: 'POST_ID'` και `url: 'ARTICLE_URL'` στο FastComments. Τα εισαγόμενα νήματα ευθυγραμμίζονται με τα ζωντανά νήματα χωρίς redirects και χωρίς επανεγγραφή URL. Δείτε <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">the URL ID docs</a>.

Αν προτιμάτε να κλειδώνετε τα νήματα με URL αντί για post ID, κάντε πρώτα την εισαγωγή και μετά χρησιμοποιήστε το εργαλείο Migrate Comments κάτω από Manage Data για να μετακινήσετε τα νήματα από το post ID στο URL μαζικά.

### The Feature Map

| OpenWeb | FastComments | Notes |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live by default. New comments collapse behind a "Show N New Comments" button, or appear instantly with `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Import preserves `likes_count` and `dislikes_count`. Heart style and "disable voting" are config options. |
| Reactions (article-level icons) | Page Reacts | Configurable icon set on the page, remembered per user. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` caps nesting. See the import note on threads below. |
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
| Aida AI moderation | Spam classifiers, ChatGPT 4 option, image moderation, AI Agents | Agents start in dry run and can require human approval. |
| Restricted words | Word blacklist | ~450 default phrases, editable. |
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

The rest of this section goes through each group in detail.

### Conversation, Votes and Reactions

Το Conversation του OpenWeb είναι ένα νήμα σε πραγματικό χρόνο. Το widget σχολίων του FastComments είναι επίσης: σχόλια, επεξεργασίες, διαγραφές, ψήφοι και ενέργειες διαχείρισης σπρώχνονται σε όλους που βλέπουν το νήμα (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Από προεπιλογή τα νέα σχόλια από άλλους χρήστες εμφανίζονται πίσω από ένα κουμπί "Show 2 New Comments" ώστε η σελίδα να μην «πηδά» κάτω από τον αναγνώστη. Για ζωντανές εκδηλώσεις ορίστε `showLiveRightAway` ώστε να αποδίδονται αμέσως, και `newCommentsToBottom` αν θέλετε να ρέουν προς τα κάτω όπως σε chat.

Τα Likes και dislikes γίνονται up και down votes. Ο εισαγωγέας διατηρεί και τις δύο μετρήσεις ανά σχόλιο. Αν η κοινότητά σας είναι συνηθισμένη σε ένα μόνο like, αλλάξτε το στυλ ψήφου σε καρδιές στη σελίδα προσαρμογής widget. Η ψήφος μπορεί επίσης να απενεργοποιηθεί εντελώς.

Οι Reactions του OpenWeb είναι ένα ξεχωριστό widget με δύο έως τέσσερα ετικετοποιημένα εικονίδια στο άρθρο (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Το αντίστοιχο του FastComments είναι Page Reacts: ένα ρυθμιζόμενο σύνολο εικόνων αντίδρασης που προσαρμόζεται στο widget σχολίων, αποθηκεύεται ανά σελίδα και ανά χρήστη (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Οι μετρήσεις αντίδρασης δεν περιλαμβάνονται στην εξαγωγή σχολίων του OpenWeb, οπότε ξεκινούν από μηδέν.

Η ταξινόμηση αντιστοιχεί άμεσα. Οι τιμές `data-sort-by` του OpenWeb (best, newest, oldest) αντιστοιχούν σε Most Relevant, Newest First και Oldest First. Ορίστε την προεπιλογή με `defaultSortDirection` (`MR`, `NF`, `OF`) στον κώδικα ή σε κανόνα προσαρμογής. Οι αναγνώστες μπορούν να αλλάξουν στο widget.

`data-read-only="true"` γίνεται `readonly: true`, το οποίο εμποδίζει νέα σχόλια, ψήφους, επεξεργασίες και διαγραφές. `data-post-staleness-days` δεν έχει άμεση ισοδυναμία, αλλά ένας κανόνας προσαρμογής μπορεί να εφαρμόσει `readonly` σε μοτίβο URL ID, και μπορείτε επίσης να το ενεργοποιήσετε/απενεργοποιήσετε από τα templates σας βάσει ηλικίας άρθρου. `data-messages-count` είναι το μέγεθος σελίδας, ορίζεται στη σελίδα προσαρμογής widget από 10 έως 200 σχόλια.

### Replies and Threading

Το FastComments υποστηρίζει απεριόριστο βάθος nesting από προεπιλογή· το `maxReplyDepth` το περιορίζει (`1` δίνει επίπεδο δύο). Το CSV του OpenWeb περιλαμβάνει στήλες `parent_id` και `parent_comment_id`. Ο τρέχων εισαγωγέας εισάγει κάθε γραμμή ως σχόλιο κορυφής στη σελίδα του, με σειρά ημερομηνίας, με συγγραφέα, χρονική σήμανση, ψήφους, αριθμό σημαδιών και κατάσταση έγκρισης αμετάβλητη. Δεν αναδημιουργεί το δέντρο γονέα-παιδιού. Αν τα νήματά σας είναι πλούσια σε απαντήσεις, ενημερώστε μας όταν στέλνετε την εξαγωγή και θα διαχειριστούμε το threading ως μέρος της εισαγωγής αντί να σας αφήσουμε με ένα επίπεδο νήμα.

### User Profiles and Badges

Οι χρήστες FastComments, συμπεριλαμβανομένων των SSO χρηστών, έχουν προφίλ με avatar, εμφανιζόμενο όνομα, βιογραφικό, κοινωνικούς συνδέσμους, badges, karma, αριθμό σχολίων, δημόσιο feed δραστηριότητας και άμεσες μηνύματα (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Κάθε ένα από τα surfaces activity, profile comments και DM μπορεί να απενεργοποιηθεί ανά χρήστη στο payload SSO ή παγκοσμίως στη διαμόρφωση.

Το Author Badge του OpenWeb απαιτεί κλήση `GET /sso/v1/user/{primary_key}` για τον συγγραφέα και τοποθέτηση του επιστρεφόμενου ID στο `data-author-id`. Στο FastComments ορίζετε `displayLabel: 'Author'` (ή οποιαδήποτε ετικέτα μέχρι 100 χαρακτήρες) στο payload SSO του χρήστη, και `isAdmin` ή `isModerator` για προσωπικό. Η ετικέτα εμφανίζεται δίπλα στο όνομα σε κάθε σχόλιο. Για πιο πλούσιο σύστημα, ρυθμίστε badges στο Customize, Badges: εικόνα ή κείμενο, που απονέμονται αυτόματα βάσει κατωφλίων (αριθμός σχολίων, upvotes, pinned comments, veteran status, ταχύτητα απαντήσεων) ή χειροκίνητα, και μπορούν να οριστούν από το payload SSO με `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Οποιοσδήποτε moderator μπορεί να Pin ή Unpin ένα σχόλιο από το μενού σχολίου στο widget ή από το dashboard διαχείρισης. Τα pinned σχόλια σπρώχνονται ζωντανά σε όλους στο νήμα. Αν θέλετε αυτοματοποίηση, η λειτουργία AI Agents προσφέρει ένα template Top Comment Pinner που pin-άρει ένα σχόλιο κορυφής όταν περάσει ένα όριο ψήφων (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

Τα In Conversation Polls του OpenWeb επιτρέπουν στο προσωπικό να επισυνάψει poll 2‑4 επιλογών σε σχόλιο κορυφής. Τα polls του FastComments επίσης επισυνάπτονται σε σχόλιο, με 2‑10 επιλογές, προαιρετική ημερομηνία λήξης, ιδιωτικότητα αποτελεσμάτων (anonymous, admins only, everyone) και λειτουργία «vote to see results». Επιλέγετε ποιος μπορεί να δημιουργήσει polls (απενεργοποιημένο, admins και moderators, όλοι) και αν οι ανώνυμοι αναγνώστες μπορούν να ψηφίσουν. Τα polls εκτίθενται επίσης στο δημόσιο API για δημιουργία από το CMS σας.

Το OpenWeb έχει τρέξει μορφές Ask Me Anything. Το FastComments δεν έχει ξεχωριστό προϊόν Q&A. Η πρακτική αντικατάσταση είναι ένα κανονικό νήμα σε dedicated URL ID: ο SSO χρήστης του καλεσμένου φέρει `displayLabel`, pin-άτε το εισαγωγικό σχόλιο, οι αναγνώστες κάνουν ερωτήσεις σε σχόλια κορυφής, ο καλεσμένος απαντά εντός νήματος, και οι ειδοποιήσεις αναφοράς και απάντησης φέρνουν τους χρήστες πίσω. Ορίστε `noNewRootComments` μετά το κλείσιμο του παραθύρου ώστε μόνο απαντήσεις να συνεχίζονται.

Το Community Spotlight (συλλέκτης email, counter και redirect cards του OpenWeb) δεν έχει ισοδύναμο. Το widget υποστηρίζει custom header HTML πάνω από το πεδίο σχολίου μέσω `headerHTML`, που καλύπτει CTA αλλά όχι φόρμα συλλογής email.

### Live Blog

Δεν υπάρχει FastComments Live Blog. Το Live Blog του OpenWeb είναι προϊόν editorial: δημοσιογράφοι που έχουν ανατεθεί στο Admin Panel δημοσιεύουν ενημερώσεις με ενσωματωμένους συνδέσμους, tweets και βίντεο, και οι αναγνώστες ακολουθούν (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Αυτό που προσφέρει το FastComments για ζωντανή κάλυψη είναι η πλευρά του αναγνώστη: ένα Live Chat widget (`embed-live-chat.min.js`) για streaming chat, και το widget σχολίων σε chat mode (`showLiveRightAway` + `newCommentsToBottom`) παράλληλα με την ζωντανή κάλυψη. Για τις editorial ενημερώσεις, οι εκδότες που μεταβαίνουν από το OpenWeb τις κρατούν στο CMS ή σε dedicated εργαλείο live blog και ενσωματώνουν το FastComments κάτω για συζήτηση. Τα media embeds (YouTube, SoundCloud κ.λπ.) υποστηρίζονται μέσα στα σχόλια, ώστε οι ενημερώσεις προσωπικού που δημοσιεύονται ως σχόλια να φέρουν πλούσιο περιεχόμενο.

### Topic Tracker, Notifications and Email

Ο Topic Tracker του OpenWeb επιτρέπει σε έναν αναγνώστη να ακολουθεί topics και authors που εξάγονται από μεταδεδομένα σελίδας και να ειδοποιείται όταν νέα άρθρα ταιριάζουν (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). Το FastComments δεν έχει topic ή author follow δια-άρθρων. Οι αναγνώστες εγγράφονται σε μια σελίδα από το notification bell και λαμβάνουν ενημερώσεις για εκείνο το νήμα, με συχνότητα που επιλέγεται ανά εγγραφή: κάθε λεπτό, ωριαία σύνοψη ή ημερήσια σύνοψη. Αν το cross-article following είναι κρίσιμο για τους δείκτες διατήρησης, αυτό είναι χαρακτηριστικό που χάνετε.

Όλα τα άλλα στο Notification Bell αντιστοιχούν. Το widget έχει καμπάνα που γίνεται κόκκινη με τον αριθμό αδιάβαστων και εμφανίζει λίστες: απαντήσεις σε εσάς, απαντήσεις σε νήμα που σχολιάσατε, mentions, upvotes στα σχόλιά σας, δραστηριότητα σε εγγεγραμμένες σελίδες, awards badges και άμεσα μηνύματα (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Οι ειδοποιήσεις εντός εφαρμογής είναι σε πραγματικό χρόνο μέσω WebSocket. Τα email απαντήσεων και mentions αποστέλλονται κάθε λεπτό μόνο για εγκεκριμένα σχόλια.

Για χρήστες SSO, περάστε `optedInNotifications` και `optedInSubscriptionNotifications` στο payload και το FastComments ενημερώνει τις προτιμήσεις τους στην επόμενη φόρτωση σελίδας. Τα email χρειάζονται διεύθυνση email στο payload. Τα πρότυπα email είναι επεξεργάσιμα ανά τύπο και γλώσσα στο Customize, Email Templates, και η αποστολή από το δικό σας domain με DKIM υποστηρίζεται. Οι moderators και admins λαμβάνουν σύνοψη καθημερινή, εβδομαδιαία ή μηνιαία με ένα‑click approve, respond και spam links.

Το Notification Webhook του OpenWeb στέλνει per‑user notification events (`replied-message`, `liked-message`, `topic-by-keyword` κ.λπ.) στο endpoint σας. Τα webhooks του FastComments καλύπτουν το resource σχολίου: created, updated, removed, με όσους endpoints θέλετε να εγγραφείτε (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Αν χρησιμοποιούσατε το notification webhook για το δικό σας σύστημα email, θα ξαναχτίσετε τη λογική σε comment events, ή θα αφήσετε το FastComments να στέλνει τα email.

### SSO: From codeA/codeB to a Signed Payload

Το handshake του OpenWeb έχει έξι βήματα: περιμένετε `spot-im-api-ready`, το OpenWeb δημιουργεί `codeA`, ο client σας το στέλνει στο backend, το backend σας επιβεβαιώνει τον χρήστη και καλεί `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, το OpenWeb επιστρέφει `codeB`, και ο client σας επιστρέφει `codeB` στο OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Η αποσύνδεση καλεί `window.SPOTIM.logout()`.

Το Secure SSO του FastComments δεν έχει round‑trip και δεν απαιτεί νέο endpoint από την πλευρά σας. Όταν αποδίδετε τη σελίδα για έναν συνδεδεμένο χρήστη, το backend σας σειριοποιεί τον χρήστη, το κωδικοποιεί σε Base64 και το υπογράφει με HMAC‑SHA256 χρησιμοποιώντας το API secret σας. Το widget στέλνει το payload με τα αιτήματά του και το FastComments επαληθεύει την υπογραφή (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). Σε Node:

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

Οι χρήστες δημιουργούνται στην πρώτη φόρτωση σελίδας. Δεν κάνετε bulk‑register κανέναν. Επειδή ο εισαγωγέας OpenWeb ταιριάζει τους συγγραφείς σχολίων με `user_name`, ένας χρήστης του οποίου το payload SSO φέρει το ίδιο `username` διεκδικεί τα εισαγόμενα σχόλιά του την πρώτη φορά που φορτώνει ένα νήμα και μπορεί να τα επεξεργαστεί ή διαγράψει από τότε. Υπάρχει επίσης SSO user API αν θέλετε να προ‑δημιουργήσετε χρήστες.

Κάθε φορά που το payload αποστέλλεται, το FastComments ενημερώνει το user record, έτσι μια αλλαγή display name ή avatar από την πλευρά σας διαχέεται στην επόμενη προβολή σελίδας. Ορίστε ένα πεδίο σε `null` για να το καθαρίσετε.

Αν χρησιμοποιούσατε third‑party SSO του OpenWeb με Auth0, Gigya ή Piano μέσω `window.SPOTIM.startSSOForProvider`, η ροή FastComments είναι η ίδια: μόλις ο provider σας πιστοποιήσει τον χρήστη, το backend σας δημιουργεί και υπογράφει το payload. Δεν υπάρχει provider‑specific ενσωμάτωση που να ρυθμίζεται στην πλευρά FastComments.

Δύο άλλες επιλογές υπάρχουν. Το Simple SSO περνά το user object unsigned από τον client, για πλατφόρμες χωρίς backend, και σηματοδοτεί τη δραστηριότητα ως verified όταν υπάρχει email (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). Το SAML 2.0 υπογράφει το προσωπικό σας στο dashboard FastComments μέσω Okta, Azure AD ή ADFS, με role mapping, και είναι διαθέσιμο σε enterprise plans (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

Το API Moderation Policy ανά άρθρο του OpenWeb έχει τέσσερις τιμές: `spot_policy`, `approve_all`, `publish_and_moderate` και `require_approval`. Το FastComments ρυθμίζει τις ίδιες συμπεριφορές στις Moderation Settings: αυτόματη έγκριση ενεργή ή όχι, έγκριση απαιτείται μόνο για το πρώτο σχόλιο χρήστη, και auto‑approve μόνο για verified (συνδεδεμένους ή SSO) σχόλια. Οι κανόνες εφαρμόζονται site‑wide ή σε μοτίβο URL ID όπως `*/politics/*`, που είναι ο τρόπος να αναπαράγετε πολιτική ανά ενότητα. Κάθε σχόλιο, εγκεκριμένο ή όχι, εμφανίζεται στο Moderate Comments dashboard, έτσι το μοντέλο publish‑then‑review είναι η προεπιλογή εκεί (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Η εισαγωγή μεταφέρει την κατάσταση moderation. Το OpenWeb `message_status` με τιμή `approved` εισάγεται ως approved και reviewed· `rejected` εισάγεται ως spam και reviewed· οτιδήποτε άλλο εισάγεται ως unapproved και unreviewed ώστε να εμφανίζεται στην ουρά moderation. `reports_count` γίνεται το flag count του σχολίου.

Η αυτοματοποιημένη moderation στο FastComments είναι επιμερισμένη αντί για ένα ενιαίο σύστημα όπως το Aida:

- Ένας spam classifier, συνεχώς εκπαιδευμένος, διαθέσιμος ως shared model σε όλους τους tenants ή απομονωμένος στον δικό σας tenant, με trust factor που χαλαρώνει το φιλτράρισμα για μακροχρόνιους ή συχνά pinned χρήστες.
- Προαιρετικός έλεγχος spam ChatGPT 4 σε Flex billing.
- Moderation περιεχομένου εικόνας σε low, medium ή high ευαισθησία για ανεβασμένες εικόνες.
- Λίστα blacklist λέξεων περίπου 450 προεπιλεγμένων φράσεων, επεξεργάσιμη, που καλύπτει τις περιορισμένες λέξεις του OpenWeb.
- Όρια σημαδιών που κρύβουν αυτόματα ένα σχόλιο μετά από N reports.
- Πρόληψη επαναλαμβανόμενων και σχεδόν-διπλών μηνυμάτων, πάντα ενεργή.
- AI Agents: agents που ενεργοποιούνται από γεγονότα με explicit tool allowlist (mark spam, approve, lock, pin, warn by DM, ban, award badge, reply). Κάθε agent ξεκινά σε dry run, τα ευαίσθητα εργαλεία μπορούν να ελεγχθούν από ανθρώπινη έγκριση, και κάθε ενέργεια καταγράφεται με justification και confidence score.

Το User Muting API του OpenWeb επιτρέπει σε έναν SSO αναγνώστη να mute έναν άλλο. Το αντίστοιχο FastComments είναι Block User στο μενού σχολίου, διαθέσιμο σε οποιονδήποτε συνδεδεμένο αναγνώστη. Τα bans είναι ενέργεια moderator: permanent ή για ορισμένη διάρκεια, προαιρετικά shadow ban (ο χρήστης βλέπει το σχόλιό του αλλά κανείς άλλος όχι), προαιρετικά με hashed IP, με plus‑aliases ενός email που θεωρείται μία διεύθυνση. Η λίστα banned χρηστών είναι αναζητήσιμη με email, όνομα, moderator και το σχόλιο που προκάλεσε το ban.

Το Moderate Comments dashboard υποστηρίζει φίλτρα (needing review, needing approval, spam, flagged, from banned users) και αναζήτηση κειμένου, bulk actions με undo και pause, “select all matching” για πολύ μεγάλες ουρές, ομάδες moderation ώστε το sports desk σας να βλέπει μόνο sports threads, logs ανά σχόλιο που δείχνουν γιατί ένα email στάλθηκε ή όχι, και shareable filtered links. Οι moderators έχουν μόνο το dashboard· δεν μπορούν να αλλάξουν ρυθμίσεις ή να εισάγουν δεδομένα.

### Analytics

Το FastComments Analytics δείχνει χρήστες online αυτή τη στιγμή σε όλα τα sites και ανά σελίδα, top pages κατά σχόλια ή live readers, και series ανά ημέρα για page loads, comments, votes και accounts created (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Τα στατιστικά moderators είναι ξεχωριστά. Οι μετρήσεις είναι σχεδόν σε πραγματικό χρόνο, καθυστερούν το πολύ ένα λεπτό, και κάθε φόρτωση σελίδας μετράται αντί για sampling.

Αυτό που δεν θα βρείτε είναι κάτι για ad fill, CPM ή έσοδα, επειδή δεν υπάρχουν διαφημίσεις. Αν το dashboard του OpenWeb ήταν η πηγή σας για engagement‑to‑revenue reporting, αυτή η αναφορά μεταφέρεται στο δικό σας ad stack.

### Monetization

Το OpenWeb τοποθετεί διαφημίσεις μέσα και γύρω από το Conversation και προσφέρει Standalone Ad unit, με καμπάνιες που ρυθμίζονται μέσω της επαφής σας στο OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). Το FastComments δεν τρέχει διαφημίσεις στο widget, δεν έχει revenue share, και δεν φορτώνει third‑party ad ή tracking scripts. Το widget είναι ένα iframe που τοποθετείτε· τα slots διαφημίσεων πάνω και κάτω από αυτό είναι δικά σας και τρέχουν μέσω ό,τι ήδη χρησιμοποιείτε.

Η ανταλλαγή είναι σαφής: χάνετε ό,τι σας πλήρωσε το OpenWeb, και κερδίζετε ένα σταθερό, προβλέψιμο κόστος και ένα widget που δεν προσθέτει ad requests στη σελίδα σας. Το branding αφαιρείται σε Flex και Pro plans, και το white‑labeling είναι διαθέσιμο σε Pro και Enterprise.

### Data Export and Privacy

Όλα τα δεδομένα σχολίων μπορούν να εξαχθούν από το dashboard FastComments ως CSV οποτεδήποτε, με ημερομηνίες σε UTC ISO format, και τα ίδια δεδομένα είναι διαθέσιμα μέσω API. Τα webhooks καλύπτουν συνεχή συγχρονισμό. Τα αρχεία εισαγωγής διαγράφονται από το FastComments μόλις ολοκληρωθεί η εισαγωγή.

Για GDPR και CCPA, το OpenWeb παρέχει export και delete API όπου τα σχόλια των διαγραμμένων χρηστών παραμένουν συνδεδεμένα σε τυχαίο guest account (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). Το FastComments υποστηρίζει αιτήματα εξαγωγής και διαγραφής δεδομένων, προσφέρει Data Processing Agreement, και τρέχει ξεχωριστό EU deployment στο <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> με δεδομένα που αντιγράφονται μόνο εντός EU points of presence. Δημιουργήστε λογαριασμό εκεί αν οι αναγνώστες σας είναι στην Ευρώπη. Στην EU περιοχή, οι AI agent bans απαιτούν πάντα ανθρώπινη έγκριση για να ικανοποιήσουν το DSA Article 17.

Τα δεδομένα σχολίων στην global deployment αντιγράφονται σε περιοχές συμπεριλαμβανομένου ενός κόμβου στη Σιγκαπούρη, και το widget σερβίρεται από το δικό DNS και CDN του FastComments. Το embed script είναι κάτω από 30 KB στο δίσκο και περίπου 6 KB συμπιεσμένο στο wire.

### Mobile SDKs

Το OpenWeb παρέχει Android, iOS και React Native SDKs με Conversation, Articles, Authentication, Notifications, Reactions και In Conversation Polls. Το FastComments παρέχει native <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> και <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> βιβλιοθήκες με threaded comments, live updates μέσω WebSocket, Secure SSO, voting, mentions, image uploads, moderation actions (flag, pin, lock, block), theming, live chat mode και social feed component. Η EU περιοχή είναι flag configuration. Δεν υπάρχει ξεχωριστό ad SDK επειδή δεν υπάρχουν διαφημίσεις.

### Embed and SPA Integration

Ο OpenWeb launcher και container:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

Το FastComments equivalent:

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

Το tenant ID σας βρίσκεται στη <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">embed code page</a> μόλις έχετε λογαριασμό. `data-article-tags` δεν έχει ισοδύναμο επειδή δεν υπάρχει topic following· hashtags μέσα στα σχόλια είναι διαφορετική λειτουργία.

Για infinite scroll και single‑page apps, η προσέγγιση Virtual Pages του OpenWeb είναι ένα container ανά άρθρο. Στο FastComments καλείτε `FastCommentsUI(element, config)` ανά νήμα και αργότερα `instance.update(newConfig)` για να αλλάξετε το URL ID ή `instance.destroy()` για να το αφαιρέσετε (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Οι βιβλιοθήκες React, Vue, Angular και SolidJS διαχειρίζονται αυτό όταν αλλάζει το prop config. Τα lifecycle callbacks (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) αντικαθιστούν τα `spot-im-*` DOM events που ακούγατε.

Οι μετρήσεις σχολίων σε index pages χρησιμοποιούν το comment count widget, single ή bulk. Για SEO, τα σχόλια αποδίδονται απευθείας στη σελίδα για crawlers αντί για το iframe, έτσι δεν υπάρχει κλήση SEO API για ρύθμιση.

### Step-by-Step Cutover

**1. Create the account and configure the basics.** Εγγραφείτε στο fastcomments.com ή eu.fastcomments.com. Ορίστε τις ρυθμίσεις moderation, word blacklist, στυλ ψήφου, προεπιλεγμένη ταξινόμηση και custom CSS στη σελίδα προσαρμογής widget. Προσθέστε moderators και moderation groups. Αν έχετε πολλούς admin χρήστες, υποστηρίζουμε imports για εσάς.

**2. Run a first import.** Μεταβείτε στο <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, επιλέξτε OpenWeb (.csv) και ανεβάστε. Η εισαγωγή τρέχει ως background job· η σελίδα δείχνει row counts και status, και λαμβάνετε email όταν ολοκληρωθεί (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Κάθε OpenWeb message ID γίνεται FastComments comment ID, έτσι η επανεκτέλεση εισαγωγής δεν δημιουργεί διπλότυπα.

**3. Verify counts.** Συγκρίνετε το row count του job με την εξαγωγή σας. Ανοίξτε μερικά high‑traffic URL IDs στο moderation dashboard και ελέγξτε συγγραφείς, ημερομηνίες, συνολικές ψήφους και καταστάσεις έγκρισης. Επιβεβαιώστε ότι τα rejected σχόλια εμφανίζονται ως spam και τα pending στην ουρά.

**4. Build the SSO payload.** Υλοποιήστε τον κώδικα υπογραφής παραπάνω στο backend, χρησιμοποιώντας το ίδιο `id` και `username` που χρησιμοποιήσατε με OpenWeb. Δοκιμάστε με λογαριασμό προσωπικού σε staging σελίδα: τα εισαγόμενα σχόλια του χρήστη εμφανίζονται ως δικά του, και η επεξεργασία/διαγραφή εμφανίζεται στο μενού σχολίου.

**5. Swap the embed on a staging template.** Αντικαταστήστε τον launcher και container με το snippet FastComments, αντιστοιχίζοντας `data-post-id` σε `urlId` και `data-post-url` σε `url`. Αφαιρέστε `window.SPOTIM.logout()` και τους `spot-im-*` listeners, ή αντιστοιχίστε τα στα callbacks. Εφαρμόστε το CSS σας σε κανόνα προσαρμογής αντί για κώδικα ώστε να δοκιμάζεται σε κάθε έκδοση FastComments.

**6. Run in parallel.** Τοποθετήστε το FastComments σε τμήμα ή ποσοστό άρθρων ενώ το OpenWeb παραμένει στα υπόλοιπα. Δεν χρειάζεται καμία αλλαγή στην πλευρά OpenWeb. Παρακολουθήστε την ουρά moderation και τη σελίδα analytics. Οι αναγνώστες που σχολιάζουν σε σελίδες FastComments κατά το παράθυρο αυτό δεν περιλαμβάνονται στην εξαγωγή OpenWeb, οπότε προγραμματίστε την τελική εισαγωγή πριν αρχίσουν, όχι μετά.

**7. CSP and DNS.** Αν έχετε Content‑Security‑Policy, επιτρέψτε `cdn.fastcomments.com` και `fastcomments.com` (ή `eu.fastcomments.com`) για `script-src`, `frame-src` και `connect-src`, και αφαιρέστε τις καταχωρίσεις `spot.im` και `openweb.com` μόλις ο launcher αφαιρεθεί. Δεν αλλάζει τίποτα στο δικό σας DNS. Δεν χρειάζονται redirects επειδή τα URL IDs ταιριάζουν.

**8. Final import and go live.** Τραβήξτε μια ακόμη εξαγωγή OpenWeb που καλύπτει το παράθυρο parallel‑run, ανεβάστε την (η επανεισαγωγή είναι ασφαλής), μετά αναπτύξτε την αλλαγή template σε όλες τις σελίδες και αφαιρέστε τον launcher, Reactions, Topic Tracker, Spotlight, bell και ad containers.

**9. Go‑live checklist.**

- Live commenting ορατό σε παραγωγικό άρθρο από δύο browsers.
- SSO login, logout και ένα σχόλιο υπό πραγματικό λογαριασμό συνδρομητή.
- Οι moderators λαμβάνουν τη σύνοψη και μπορούν να εγκρίνουν από αυτήν.
- Τα email απαντήσεων και mentions φτάνουν και συνδέουν στη σωστή σελίδα.
- Η λίστα bans και το word blacklist είναι γεμάτα.
- Page Reacts και comment counts εμφανίζονται όπου πριν υπήρχαν Reactions και counter.
- Οι CSP αναφορές είναι καθαρές.
- Τελευταία σύγκριση comment‑count μεταξύ της εξαγωγής σας και του dashboard.

### What You Lose and What Is Different

Ας είμαστε άμεσοι σχετικά με τα κενά:

- **Live Blog.** Δεν υπάρχει ισοδύναμο. Κρατήστε το στο CMS ή σε εργαλείο live blogging και τοποθετήστε το FastComments κάτω από αυτό.
- **Topic Tracker.** Δεν υπάρχει cross‑article topic ή author following. Μόνο page subscriptions.
- **Community Spotlight.** Δεν υπάρχει προϊόν CTA card. `headerHTML` σας δίνει μήνυμα πάνω από το composer, όχι φόρμα email capture.
- **Ad revenue.** Κανένα. Το widget είναι ad‑free από τη σχεδίαση.
- **Notification webhook.** Τα webhooks αφορούν events σχολίων, όχι per‑user notification events.
- **Threading on import.** Ο τρέχων εισαγωγέας επίπεδωση replies σε top‑level comments στην ίδια σελίδα. Ενημερώστε μας αν χρειάζεστε την αναδόμηση του δέντρου.
- **Reactions history.** Οι μετρήσεις reaction σε επίπεδο άρθρου δεν περιλαμβάνονται στην εξαγωγή σχολίων και ξεκινούν από μηδέν.
- **Polls history.** Οι ορισμοί poll και οι ψήφοι δεν περιλαμβάνονται στην εξαγωγή σχολίων· το κείμενο του poll εισάγεται, το poll όχι.
- **Login model.** Οι αναγνώστες χωρίς SSO συνδέονται με magic link αντί για password ή social login button.
- **Human moderation staff.** Το OpenWeb παρέχει ομάδα moderation με Aida. Το FastComments παρέχει εργαλεία, classifiers και agents· το ανθρώπινο προσωπικό είναι δικό σας.

Αυτό που κερδίζετε, με το ίδιο πνεύμα: ένα widget που προσθέτει μόνο ένα μικρό script και δεν κάνει ad requests, moderation που ένας άνθρωπος μπορεί να τρέξει για μεγάλο site με bulk actions και agents, SSO που είναι μια signing function αντί για πρωτόκολλο, και ένας προμηθευτής που δεν βρίσκεται υπό δικαστική επίβλεψη.

### Timeline and the Free Import Offer

Προγραμματίστε μία‑δύο εβδομάδες για έναν εκδότη με μία ενσωμάτωση SSO και μερικές εκατοντάδες χιλιάδες σχόλια: μια‑δύο ημέρες για την εξαγωγή και την πρώτη εισαγωγή, μερικές ημέρες για SSO και templates, ένα παράθυρο parallel‑run, και τέλος η τελική εισαγωγή και η εναλλαγή. Η πλατφόρμα ήδη διαχειρίζεται αυτή την κλίμακα: η United Cloud τρέχει πάνω από δέκα portals και εκατομμύρια σχόλια στο FastComments, και το itsfoss.com μετακίνησε ιστορικό 88 000 σχολίων από άλλο πάροχο μέσω του ίδιου self‑service importer.

Το FastComments εισάγει το OpenWeb CSV export σας δωρεάν, σας βοηθά να τρέξετε OpenWeb και FastComments παράλληλα κατά τη διάρκεια του cutover, και βοηθά με τη μετεγκατάσταση, συμπεριλαμβανομένου threading και ερωτήσεων αντιστοίχισης χρηστών. Τα enterprise plans περιλαμβάνουν SLA, απαντήσεις υποστήριξης εντός μίας ώρας κατά τις εργάσιμες ώρες, και την επιλογή Isolated Cloud deployment στον δικό σας λογαριασμό cloud (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Η Flex τιμολόγηση βάσει χρήσης είναι διαθέσιμη για sites που θέλουν να ξεκινήσουν χωρίς συμβόλαιο.

Γράψτε στο <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> με το μέγεθος της εξαγωγής σας και τη ρύθμιση SSO και θα σας επιστρέψουμε με ένα πλάνο.

### In Conclusion

Τραβήξτε την εξαγωγή σας σήμερα. Το υπόλοιπο της μετεγκατάστασης είναι μηχανικό: τα ίδια post IDs γίνονται URL IDs, τα ίδια usernames διεκδικούν τα σχόλιά τους μέσω SSO, η κατάσταση moderation μεταφέρεται, και το embed είναι μια απλή αντικατάσταση. Τα σημεία όπου το FastComments διαφέρει είναι καταγεγραμμένα παραπάνω ώστε να μπορείτε να αποφασίσετε με τα γεγονότα μπροστά σας.

Cheers!{{/isPost}}