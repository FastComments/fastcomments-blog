---
[category:Moderazione]
[category:Tutorial]
###### [postdate]
# [postlink]Come prevenire lo spam nei tuoi commenti[/postlink]

Non c'è modo di combattere lo spam al 100%. Ma FastComments implementa una serie di misure per aiutare.

{{#isPost}}

## Documentazione per Amministratori di Sito

Un'installazione predefinita di FastComments ha abilitate sia la filtrazione di Spam che quella di Linguaggio Inappropriato.

Queste impostazioni predefinite trovano un equilibrio tra la prevenzione dello spam e il non essere troppo invasive per la maggior parte delle comunità.

[Potresti voler dare un'occhiata alla guida sulla moderazione](https://docs.fastcomments.com/guide-moderation.html).

## Come Funziona

Il nostro filtro anti-spam utilizza un [classificatore Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) per identificare lo spam.

Viene addestrato nel tempo in base a ciò che gli amministratori segnalano come spam e non spam.

FastComments viene eseguito in un iframe sul tuo sito. Questo rende più difficile per i bot di spam automatizzati prendersi di mira la tua sezione commenti. Tuttavia, se lo fanno
e il nostro classificatore capisce che i loro commenti sono "spam", verranno nascosti ai tuoi utenti. Come tutti gli altri commenti, sono anche contrassegnati come
"richiede revisione" nella [pagina di moderazione](https://fastcomments.com/auth/my-account/moderate-comments) del dashboard.

La filtrazione del linguaggio inappropriato, tuttavia, non comporta la nascita di commenti nascosti per impostazione predefinita. Maschererà semplicemente le "parole cattive" con asterischi.

## Bloccare Completamente lo Spam

Per impostazione predefinita, FastComments consente lo spam, ma lo nasconde e lo contrassegna per la revisione.

Se desideri informare l'utente che il suo commento è stato rilevato come spam e chiedergli di rivederlo, questo può essere fatto nelle [Impostazioni di Moderazione](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
attivando l'impostazione `Block Spam`.

## Nascondere Commenti Inappropriati

I commenti inappropriati possono essere nascosti attivando `Automatically Send Profane Comments to Spam` nelle [Impostazioni di Moderazione](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Impostazioni

Sia la filtrazione del Linguaggio Inappropriato che dello Spam possono essere disattivate individualmente nella pagina delle [Impostazioni di Moderazione](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verifica dei Commenti

FastComments impiega un sistema di verifica dove, per impostazione predefinita, i [commenti non verificati](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) sono contrassegnati come tali per tutti gli utenti.

Consentendo agli utenti di commentare senza essere completamente autenticati, si abbassa la barriera d'ingresso per entrare in una discussione. L'etichetta di non verificato può essere nascosta tramite regole di personalizzazione.

I commenti non verificati sono mostrati per impostazione predefinita, ma possono essere nascosti fino a quando non vengono verificati via email, attivando `Only Auto Approve Verified Comments`.

Nota che con SSO, tutti i commenti sono sempre verificati. Se un utente è connesso in una sessione verificata, anche i suoi commenti saranno sempre verificati.

I commenti non verificati possono anche essere programmati per la rimozione.

## Per i Commentatori

Se il tuo commento viene rilevato come spam, vedrai subito un messaggio. Questo serve a farti sapere che il commento dovrà essere revisionato
prima di essere visibile ad altri. La rilevazione dello spam non può essere 100% precisa, quindi comprendiamo se provi un po' di frustrazione. Se il tuo commento è legittimo, l'amministratore del sito dovrebbe essere in grado di riconoscerlo e contrassegnare il tuo commento come non spam.

{{/isPost}}

---