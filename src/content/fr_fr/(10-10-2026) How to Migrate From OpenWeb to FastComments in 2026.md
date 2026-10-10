[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Comment migrer d'OpenWeb vers FastComments en 2026[/postlink]

{{#unless isPost}}
Un guide fonction par fonction pour les éditeurs qui quittent OpenWeb (anciennement Spot.IM) : ce qui correspond 1:1, ce qui est différent, comment fonctionne l’import CSV, comment le handshake SSO change, et un plan de bascule étape par étape.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

Ce guide s’adresse aux responsables produit et ingénierie ainsi qu’aux community managers qui utilisent OpenWeb aujourd’hui et qui ont besoin d’un plan de migration. Il passe en revue chaque surface OpenWeb, indique l’équivalent FastComments, et précise clairement où il n’existe pas de correspondance 1:1.

### Pourquoi maintenant

Le 30 septembre 2026, le tribunal de district de Tel‑Aviv a ordonné la nomination d’un séquestre temporaire sur OpenWeb à la demande de son prêteur, Mars Growth Capital, qui détient un privilège de premier rang sur les actifs et comptes de l’entreprise et cherche à l’appliquer contre les actifs israéliens, les comptes bancaires et la propriété intellectuelle d’OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, 30 sept.</a>). Un fiduciaire temporaire, Av. Ehud Gindes, a été nommé le jour suivant (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, 4 oct.</a>). Plus tôt en 2026, Microsoft, l’un des plus gros clients d’OpenWeb, a mis fin à son engagement et retenu des paiements à cause d’un différend de trafic qu’OpenWeb conteste (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, 28 sept.</a>).

OpenWeb indique que la plateforme continue de fonctionner. La supervision judiciaire, un prêteur qui applique des privilèges sur la PI dont dépend votre widget de commentaires, et un fiduciaire dont le rôle est de préserver la valeur des actifs ne sont pas des conditions qu’un éditeur souhaite pour une surface d’engagement centrale. Si vous n’avez pas encore extrait une exportation complète des données, faites‑le en premier, dès aujourd’hui, avant toute autre étape de ce guide.

### Ce dont vous avez besoin avant de commencer

Rassemblez ces éléments avant de toucher au code :

- **Votre exportation de commentaires OpenWeb.** OpenWeb propose une API d’exportation (v4) qui génère des fichiers CSV compressés, au maximum 100 000 commentaires par fichier, avec des fenêtres de dates allant jusqu’à un mois et des liens de téléchargement expirant après une semaine (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">docs OpenWeb</a>). Demandez chaque fenêtre dont vous avez besoin et conservez les fichiers en lieu sûr. Si votre contact OpenWeb vous a déjà fourni une exportation CSV via le panneau d’administration, conservez‑la également. L’importateur FastComments lit le CSV OpenWeb avec des colonnes telles que `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` et `url`.
- **Votre Spot ID et la liste des IDs d’articles.** Chaque `data-post-id` que vous transmettez au lanceur devient un ID d’URL FastComments. Si vos IDs d’articles proviennent du CMS, notez comment ils sont générés afin de pouvoir émettre les mêmes valeurs du côté FastComments.
- **Votre liste d’utilisateurs SSO.** Plus précisément les valeurs `primary_key` et `user_name` que vous avez enregistrées auprès d’OpenWeb. L’auteur d’un commentaire est associé au nom d’utilisateur lors de l’import, donc vous devez transmettre les mêmes noms d’utilisateur dans la charge SSO FastComments.
- **Votre liste de modérateurs et leurs rôles.** Comptes admin, modérateur et journaliste, ainsi que les sections que chacun modère.
- **Votre configuration de modération.** Politique site‑wide (approuver tout, publier et modérer, nécessiter approbation), surcharges par article, liste de mots restreints, utilisateurs muets et bannis.
- **CSS personnalisé et paramètres de thème.** Exportez tout ce que vous avez dans le panneau d’administration afin de le reconstruire dans la page de personnalisation du widget FastComments.
- **L’endroit où le lanceur vit dans vos modèles**, y compris toutes les pages qui exécutent Reactions, Topic Tracker, Spotlight, la cloche de notification ou une publicité autonome sans conversation.

### Comment les IDs d’articles OpenWeb se transforment en IDs d’URL FastComments

FastComments associe un fil de commentaires à un `urlId`. Par défaut, l’ID d’URL est l’URL de page nettoyée, mais vous pouvez le définir sur n’importe quelle chaîne, et c’est exactement ce que fait l’importateur OpenWeb : il lit la colonne `post_id` et l’utilise comme ID d’URL FastComments pour chaque commentaire de cet article. Il stocke également la colonne `url` comme URL d’affichage afin que les liens de modération et les e‑mails de notification pointent vers la bonne page.

Ainsi, la règle pour vos modèles est : partout où vous avez passé `data-post-id="POST_ID"` et `data-post-url="ARTICLE_URL"` à OpenWeb, passez `urlId: 'POST_ID'` et `url: 'ARTICLE_URL'` à FastComments. Les fils importés s’alignent avec les fils en direct sans redirections ni réécriture d’URL. Voir <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">la documentation sur l’ID d’URL</a>.

Si vous préférez identifier les fils par URL à l’avenir plutôt que par ID d’article, importez d’abord puis utilisez l’outil Migrate Comments sous Manage Data pour déplacer les fils de l’ID d’article vers l’URL en masse.

### La cartographie des fonctionnalités

| OpenWeb | FastComments | Remarques |
| --- | --- | --- |
| Conversation avec mises à jour en temps réel | Widget de commentaires avec commentaires en direct | En direct par défaut. Les nouveaux commentaires se replient derrière un bouton « Afficher N nouveaux commentaires », ou apparaissent instantanément avec `showLiveRightAway`. |
| Likes et dislikes sur les commentaires | Votes positifs et négatifs | L’import conserve `likes_count` et `dislikes_count`. Le style cœur et l’option « désactiver le vote » sont configurables. |
| Reactions (icônes au niveau de l’article) | Page Reacts | Jeu d’icônes configurable sur la page, mémorisé par utilisateur. |
| Réponses et fil de discussion | Réponses en fil, profondeur illimitée | `maxReplyDepth` limite l’imbrication. Voir la note d’import sur les fils ci‑dessous. |
| Tri : meilleur, plus récent, plus ancien | Le plus pertinent, le plus récent, le plus ancien | `defaultSortDirection` définit le tri par défaut site‑wide ou par motif d’ID d’URL. |
| Profils utilisateurs | Profils utilisateurs | Avatar, bio, badges, karma, activité, DM. Fonctionne pour les utilisateurs SSO. |
| Badge d’auteur | `displayLabel`, `isAdmin`, `isModerator`, badges | Défini dans la charge SSO. Aucun appel de recherche backend requis. |
| Mises à jour Live Blog épinglées, commentaires mis en avant | Épingler et désépingler n’importe quel commentaire | Les modérateurs épinglent depuis le widget ou le tableau de bord. Un modèle d’agent IA épingle les commentaires les mieux notés. |
| Sondages en conversation | Sondages sur les commentaires | 2 à 10 options, dates de clôture, modes de confidentialité, restrictions créateur. |
| Formats Ask Me Anything | Aucun produit dédié | Fonctionne comme un fil avec l’utilisateur SSO de l’auteur étiqueté et la question épinglée. |
| Live Blog | Aucun équivalent 1:1 | Le widget Live Chat et les commentaires en mode chat existent. Le live‑blogging éditorial reste dans votre CMS. |
| Topic Tracker (suivre sujets et auteurs) | Abonnements de page | Les utilisateurs suivent une page, pas un sujet ou un auteur. Pas de suivi inter‑article. |
| Cloche de notification | Cloche de notification dans le widget | Réponses, mentions, activité du fil, votes, abonnements, badges, DM. |
| Notifications par e‑mail | Notifications par e‑mail avec modèles | Opt‑in par utilisateur via drapeaux SSO. Modèles personnalisés, expéditeur brandé. |
| Handshake SSO (codeA/codeB) | SSO sécurisé (payload HMAC‑SHA256) | Pas d’appel register‑user. Signez un payload côté serveur, transmettez‑le au widget. |
| SSO tiers (Auth0, Gigya, Piano) | SSO sécurisé après authentification du fournisseur | Même payload. Votre backend le signe une fois l’utilisateur connecté. |
| Identité (écrans d’enregistrement OpenWeb) | Connexion par lien magique, SSO simple | Les lecteurs se connectent via un lien e‑mail. Pas de mots de passe. |
| Politique de modération par article | Règles de personnalisation par motif d’ID d’URL | Mode approbation, filtre anti‑spam et plus varient selon les motifs `*/section/*`. |
| Modération IA Aida | Classificateurs anti‑spam, option ChatGPT 4, modération d’image, agents IA | Les agents démarrent en mode test et peuvent nécessiter une approbation humaine. |
| Mots restreints | Liste noire de mots | ~450 phrases par défaut, éditables. |
| Mise en sourdine d’utilisateur | Bloquer l’utilisateur | Blocage par lecteur depuis le menu du commentaire. |
| Bans | Bans | Permanents, temporaires, shadow, hachés IP, prise en compte des alias. |
| Tableau de modération | Tableau de bord Moderate Comments | Filtres, actions groupées avec annulation, groupes de modération, e‑mails digest avec approbation en un clic. |
| Webhook de notification | Webhooks | Commentaire créé, mis à jour, supprimé. Pas de webhook de notification par utilisateur. |
| Tableau de bord d’engagement | Analytique | Utilisateurs en direct, pages top, chargements de page, commentaires, votes, comptes par jour. Pas de reporting de revenus publicitaires. |
| Publicités en conversation, publicité autonome | Aucun | FastComments ne diffuse aucune publicité. Vous conservez votre propre stack publicitaire autour du widget. |
| Avis sociaux (évaluations étoiles) | Évaluations et avis | Produit séparé sur le même compte. |
| Populaire dans la communauté | Widgets Discussions récentes et Pages top | Recirculation guidée par l’activité des commentaires. |
| Compteur de commentaires | Widgets de compteur de commentaires | Simple et groupé. |
| API d’exportation de commentaires | Export CSV, API, webhooks | Export depuis le tableau de bord à tout moment. |
| Export et suppression de données utilisateur (GDPR/CCPA) | Suppression de compte et de données, région UE | eu.fastcomments.com conserve les données dans l’UE. DPA disponible. |
| SDK Android, iOS, React Native | SDK Android, iOS, React Native | UI native, SSO, mises à jour en direct, fil, actions de modération. |
| Lanceur, pages virtuelles, SDK React | Script d’intégration, `fcConfigs`, bibliothèques React, Vue, Angular, SolidJS | `update()` et `destroy()` pour les SPA. |

Le reste de cette section détaille chaque groupe.

### Conversation, votes et réactions

La Conversation d’OpenWeb est un fil en temps réel. Le widget de commentaires FastComments l’est aussi : commentaires, modifications, suppressions, votes et actions de modération sont poussés à tous les visiteurs du fil (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Par défaut, les nouveaux commentaires d’autres personnes apparaissent derrière un bouton « Afficher 2 nouveaux commentaires » afin que la page ne saute pas sous le lecteur. Pour les événements en direct, définissez `showLiveRightAway` pour qu’ils s’affichent immédiatement, et `newCommentsToBottom` si vous voulez qu’ils s’écoulent vers le bas comme un chat.

Les likes et dislikes deviennent des votes positifs et négatifs. L’importateur conserve les deux comptes par commentaire. Si votre communauté est habituée à un seul like, passez le style de vote à des cœurs dans la page de personnalisation du widget. Le vote peut également être désactivé complètement.

Les Reactions OpenWeb sont un widget séparé avec deux à quatre icônes libellées sur l’article (<a href="https://developers.openweb.com/docs/reactions" target="_blank">docs OpenWeb</a>). L’équivalent FastComments est Page Reacts : un jeu d’images de réaction configurable attaché au widget de commentaires, mémorisé par page et par utilisateur (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Les comptes de réactions ne font pas partie de l’exportation de commentaires OpenWeb, ils commencent donc à zéro.

Le tri se mappe directement. Les valeurs `data-sort-by` d’OpenWeb : best, newest et oldest correspondent à Le plus pertinent, le plus récent et le plus ancien. Définissez le défaut avec `defaultSortDirection` (`MR`, `NF`, `OF`) dans le code ou dans une règle de personnalisation. Les lecteurs peuvent changer le tri dans le widget.

`data-read-only="true"` devient `readonly: true`, ce qui bloque les nouveaux commentaires, votes, modifications et suppressions. `data-post-staleness-days` n’a pas d’équivalent direct, mais une règle de personnalisation peut appliquer `readonly` à un motif d’ID d’URL, et vous pouvez également le basculer depuis vos modèles selon l’âge de l’article. `data-messages-count` correspond à la taille de page, définie dans la page de personnalisation du widget de 10 à 200 commentaires.

### Réponses et fil de discussion

FastComments prend en charge une imbrication illimitée par défaut ; `maxReplyDepth` la limite (`1` donne une structure à deux niveaux). Le CSV OpenWeb inclut les colonnes `parent_id` et `parent_comment_id`. L’importateur actuel importe chaque ligne comme un commentaire de niveau supérieur sur sa page, dans l’ordre chronologique, avec auteur, horodatage, votes, nombre de drapeaux et état d’approbation intacts. Il ne reconstruit pas l’arbre parent‑enfant. Si vos fils sont très axés sur les réponses, indiquez‑le lors de l’envoi de l’export et nous gérerons le filage lors de l’import plutôt que de vous laisser avec un fil aplati.

### Profils utilisateurs et badges

Les utilisateurs FastComments, y compris les utilisateurs SSO, obtiennent un profil avec avatar, nom affiché, bio, liens sociaux, badges, karma, nombre de commentaires, fil d’activité public et messages directs (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Chaque surface d’activité, de commentaires de profil et de DM peut être désactivée par utilisateur dans la charge SSO ou globalement dans la configuration.

Le Badge d’auteur d’OpenWeb vous oblige à appeler `GET /sso/v1/user/{primary_key}` pour l’auteur et à placer l’ID retourné dans `data-author-id`. Dans FastComments, vous définissez `displayLabel: 'Author'` (ou tout libellé jusqu’à 100 caractères) dans la charge SSO de l’utilisateur, et `isAdmin` ou `isModerator` pour le personnel. Le libellé s’affiche à côté de son nom sur chaque commentaire. Pour un système plus riche, configurez les badges sous Personnaliser → Badges : badges image ou texte, attribués automatiquement selon des seuils (nombre de commentaires, votes positifs, commentaires épinglés, statut vétéran, rapidité de réponse) ou manuellement, et assignables depuis la charge SSO avec `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Commentaires épinglés, sondages et Q&A

Tout modérateur peut épingler ou désépingler un commentaire depuis le menu du commentaire dans le widget ou depuis le tableau de bord de modération. Les commentaires épinglés sont poussés en direct à tous les participants du fil. Si vous voulez automatiser cela, la fonctionnalité Agents IA propose un modèle Top Comment Pinner qui épingle un commentaire de niveau supérieur dès qu’il dépasse un seuil de votes (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

Les sondages In Conversation d’OpenWeb permettent au personnel d’attacher un sondage de 2 à 4 options à un commentaire de niveau supérieur. Les sondages FastComments s’attachent également à un commentaire, avec 2 à 10 options, une date de clôture facultative, une confidentialité des résultats (anonyme, admin uniquement, tout le monde) et un mode « vote pour voir les résultats ». Vous choisissez qui peut créer des sondages (désactivé, admins et modérateurs, tout le monde) et si les lecteurs anonymes peuvent voter. Les sondages sont aussi exposés via l’API publique pour les créer depuis votre CMS.

OpenWeb a proposé des formats Ask Me Anything sur sa plateforme. FastComments n’a pas de produit Q&A dédié. Le remplacement pratique est un fil normal sur un ID d’URL dédié : l’utilisateur SSO de l’invité porte un `displayLabel`, vous épinglez le commentaire d’introduction, les lecteurs posent leurs questions en commentaires de niveau supérieur, l’invité répond dans le fil, et les notifications de mention et de réponse ramènent les participants. Définissez `noNewRootComments` après la fermeture de la fenêtre afin que seules les réponses continuent.

Le Spotlight communautaire (collecteur d’e‑mail, compteur et cartes de redirection d’OpenWeb) n’a pas d’équivalent. Le widget prend en charge du HTML d’en‑tête personnalisé au-dessus de l’entrée de commentaire via `headerHTML`, ce qui couvre un appel à l’action mais pas un formulaire de capture d’e‑mail.

### Live Blog

Il n’existe pas de Live Blog FastComments. Le Live Blog d’OpenWeb est un produit éditorial : des reporters assignés dans le panneau d’administration publient des mises à jour avec des liens intégrés, des tweets et des vidéos, et les lecteurs suivent le fil (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">docs OpenWeb</a>).

Ce que FastComments propose pour la couverture en direct, c’est le côté lecteur : un widget Live Chat (`embed-live-chat.min.js`) pour le chat en streaming, et le widget de commentaires en mode chat (`showLiveRightAway` plus `newCommentsToBottom`) à côté de votre couverture en direct. Pour les mises à jour éditoriales elles‑mêmes, les éditeurs qui quittent OpenWeb les conservent dans leur CMS ou un outil de live‑blog dédié et intègrent FastComments en dessous pour la discussion. Les médias intégrés (YouTube, SoundCloud, etc.) sont pris en charge dans les commentaires, de sorte que les mises à jour du personnel publiées comme commentaires contiennent du contenu riche.

### Topic Tracker, notifications et e‑mail

Le Topic Tracker d’OpenWeb permet à un lecteur de suivre des sujets et des auteurs tirés des métadonnées de page et d’être notifié quand de nouveaux articles correspondent (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">docs OpenWeb</a>). FastComments n’a pas de suivi de sujet ou d’auteur entre les articles. Les lecteurs s’abonnent à une page depuis la cloche de notification et reçoivent les mises à jour de ce fil, avec la fréquence choisie par abonnement : chaque minute, digest horaire ou digest quotidien. Si le suivi inter‑article est crucial pour vos indicateurs de rétention, c’est une fonctionnalité que vous perdez.

Tout le reste de la Cloche de notification se mappe. Le widget possède une cloche qui devient rouge avec le compteur non lu et liste : réponses à vous, réponses dans un fil où vous avez commenté, mentions, votes positifs sur vos commentaires, activité sur les pages abonnées, attributions de badges et messages directs (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Les notifications in‑app sont en temps réel via WebSocket. Les e‑mails de réponse et de mention sont envoyés chaque minute pour les commentaires approuvés uniquement.

Pour les utilisateurs SSO, transmettez `optedInNotifications` et `optedInSubscriptionNotifications` dans la charge et FastComments met à jour leurs préférences au prochain chargement de page. Les e‑mails nécessitent une adresse e‑mail dans la charge. Les modèles d’e‑mail sont éditables par type et par langue sous Personnaliser → Modèles d’e‑mail, et l’envoi depuis votre propre domaine avec DKIM est supporté. Les modérateurs et admins reçoivent un digest quotidien, hebdomadaire ou mensuel avec approbation en un clic, réponse et liens anti‑spam.

Le Webhook de notification d’OpenWeb publie des événements de notification par utilisateur (`replied-message`, `liked-message`, `topic-by-keyword`, etc.) vers votre endpoint. Les webhooks FastComments couvrent la ressource commentaire : créé, mis à jour et supprimé, avec autant d’endpoints abonnés que vous le souhaitez (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Si vous utilisiez le webhook de notification pour alimenter votre propre système d’e‑mail, vous reconstruirez cette logique sur les événements de commentaire, ou laisserez FastComments envoyer les e‑mails.

### SSO : du codeA/codeB à un payload signé

Le handshake d’OpenWeb comporte six étapes : attendre `spot-im-api-ready`, OpenWeb génère `codeA`, votre client l’envoie à votre backend, votre backend confirme l’utilisateur et appelle `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb renvoie `codeB`, et votre client renvoie `codeB` à OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">docs OpenWeb</a>). La déconnexion appelle `window.SPOTIM.logout()`.

FastComments Secure SSO n’a pas de aller‑retour et aucun nouveau endpoint côté vous. Lorsque vous rendez la page pour un utilisateur connecté, votre backend sérialise l’utilisateur, l’encode en Base64, et le signe avec HMAC‑SHA256 en utilisant votre secret d’API. Le widget envoie le payload avec ses requêtes et FastComments vérifie la signature (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). En Node :

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // même valeur que primary_key chez OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // même user_name que chez OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optionnel, remplace le lookup du Author Badge
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

Le timestamp est en millisecondes depuis l’époque et est rejeté s’il a plus de deux jours. Pour un lecteur déconnecté, omettez les trois champs signés et ne transmettez que `loginURL` (ou une fonction `loginCallback`) ; le widget affichera alors une invite de connexion à la place du composeur. Des exemples complets en Node, Java et PHP se trouvent dans le <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">dépôt d’exemples de code</a>.

Les utilisateurs sont créés au premier chargement de page. Vous ne faites pas d’enregistrement en masse. Parce que l’importateur OpenWeb associe les auteurs de commentaires par `user_name`, un utilisateur dont le payload SSO porte le même `username` revendique ses commentaires importés dès la première fois qu’il charge un fil et peut les modifier ou les supprimer par la suite. Il existe également une API utilisateur SSO si vous souhaitez pré‑créer des utilisateurs.

Chaque fois que le payload est envoyé, FastComments met à jour l’enregistrement utilisateur, de sorte qu’un changement de nom affiché ou d’avatar de votre côté se propage au prochain affichage de page. Mettez un champ à `null` pour le réinitialiser.

Si vous utilisiez le SSO tiers d’OpenWeb avec Auth0, Gigya ou Piano via `window.SPOTIM.startSSOForProvider`, le flux FastComments est le même : une fois que votre fournisseur a authentifié l’utilisateur, votre backend construit et signe le payload. Aucun intégration spécifique au fournisseur n’est requise côté FastComments.

Deux autres options existent. Le SSO simple transmet l’objet utilisateur non signé depuis le client, pour les plateformes sans backend, et marque l’activité comme vérifiée lorsqu’un e‑mail est présent (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 signe votre personnel dans le tableau de bord FastComments via Okta, Azure AD ou ADFS, avec mappage de rôles, et est disponible sur les plans Enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Modération

L’API de politique de modération par article d’OpenWeb possède quatre valeurs : `spot_policy`, `approve_all`, `publish_and_moderate` et `require_approval`. FastComments configure les mêmes comportements dans Paramètres de modération : approbation automatique activée ou désactivée, approbation requise uniquement pour le premier commentaire d’un utilisateur, et auto‑approbation uniquement des commentaires vérifiés (connectés ou SSO). Les règles s’appliquent site‑wide ou à un motif d’ID d’URL tel que `*/politics/*`, ce qui vous permet de reproduire une politique par section. Chaque commentaire, approuvé ou non, atterrit dans le tableau de bord Moderate Comments, de sorte que le modèle publier‑puis‑revoir est la vue par défaut (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

L’import transporte l’état de modération. Le `message_status` d’OpenWeb : `approved` s’importe comme approuvé et revu ; `rejected` s’importe comme spam et revu ; tout autre statut s’importe comme non approuvé et non revu, apparaissant ainsi dans votre file d’attente de modération. `reports_count` devient le compteur de drapeaux du commentaire.

La modération automatisée sur FastComments est en couches plutôt qu’un système unique comme Aida :

- Un classificateur anti‑spam, continuellement entraîné, disponible comme modèle partagé entre tous les locataires ou isolé pour le vôtre, avec un facteur de confiance qui relâche le filtrage pour les utilisateurs de longue date ou souvent épinglés.
- Un contrôle anti‑spam optionnel ChatGPT 4 sur facturation Flex.
- Modération de contenu d’image à sensibilité basse, moyenne ou haute pour les images téléchargées.
- Une liste noire de mots d’environ 450 phrases par défaut, éditable, qui masque les correspondances avec des astérisques. C’est ici que vos mots restreints OpenWeb vont.
- Seuils de drapeaux qui masquent automatiquement un commentaire après N signalements.
- Prévention des messages répétés ou quasi‑dupliqués, toujours active.
- Agents IA : agents déclenchés par événements avec une liste d’outils explicite (marquer comme spam, approuver, verrouiller, épingler, avertir par DM, bannir, attribuer un badge, répondre). Chaque agent démarre en mode test, les outils sensibles peuvent être conditionnés à une approbation humaine, et chaque action est journalisée avec justification et score de confiance.

L’API de mise en sourdine d’utilisateur d’OpenWeb permet à un lecteur SSO de mettre en sourdine un autre. L’équivalent FastComments est Bloquer l’utilisateur dans le menu du commentaire, disponible pour tout lecteur connecté. Les bans sont une action de modérateur : permanents ou pour une durée définie, éventuellement shadow ban (l’utilisateur voit son commentaire mais personne d’autre ne le voit), éventuellement par IP hachée, avec prise en compte des alias d’e‑mail. La liste des utilisateurs bannis est recherchable par e‑mail, nom, modérateur et le commentaire qui a déclenché le ban.

Le tableau de bord Moderate Comments prend en charge les filtres (en attente de révision, nécessitant approbation, spam, signalé, provenant d’utilisateurs bannis) et la recherche texte, les actions groupées avec annulation et pause, « sélectionner tout correspondant » pour les très grandes files, les groupes de modération afin que votre desk sport ne voie que les fils sport, les journaux par commentaire montrant pourquoi un e‑mail a été envoyé ou non, et les liens filtrés partageables. Les modérateurs n’ont accès qu’au tableau de bord ; ils ne peuvent pas modifier les paramètres ou importer des données.

### Analytique

FastComments Analytics montre les utilisateurs en ligne en temps réel sur vos sites et par page, les pages top par commentaires ou par lecteurs en direct, et les séries quotidiennes pour les chargements de page, commentaires, votes et comptes créés (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Les statistiques des modérateurs sont séparées. Les comptes sont quasi‑temps réel, avec un délai maximal d’une minute, et chaque chargement de page est compté plutôt qu’échantillonné.

Ce que vous ne trouverez pas, c’est quoi que ce soit concernant le remplissage d’annonces, le CPM ou les revenus, car il n’y a aucune publicité. Si le tableau de bord d’OpenWeb était votre source pour le reporting engagement‑revenus, ce reporting passe à votre propre stack publicitaire.

### Monétisation

OpenWeb place des publicités à l’intérieur et autour de la Conversation et propose une unité Standalone Ad, avec des campagnes configurées via votre contact OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">docs OpenWeb</a>). FastComments ne diffuse aucune publicité dans le widget, ne propose aucun partage de revenus, et ne charge aucun script publicitaire ou de suivi tiers. Le widget est une iframe que vous placez ; les emplacements publicitaires au‑dessus et en dessous vous appartiennent et fonctionnent via ce que vous utilisez déjà.

Le compromis est explicite : vous perdez ce qu’OpenWeb vous payait, et vous gagnez un coût fixe, prévisible, et un widget qui n’ajoute pas de requêtes publicitaires à votre page. Le branding est retiré sur les plans Flex et Pro, et le white‑labeling est disponible sur les plans Pro et Enterprise.

### Export de données et confidentialité

Toutes les exportations de commentaires depuis le tableau de bord FastComments sont disponibles en CSV à tout moment, avec des dates au format UTC ISO, et les mêmes données sont accessibles via l’API. Les webhooks couvrent la synchronisation continue. Les fichiers d’import sont supprimés de FastComments dès que l’import est terminé.

Pour le GDPR et le CCPA, OpenWeb propose une API d’export et de suppression où les commentaires des utilisateurs supprimés restent attachés à un compte invité aléatoire (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">docs OpenWeb</a>). FastComments prend en charge les demandes d’exportation et de suppression de données, propose un Data Processing Agreement, et exécute un déploiement séparé UE à <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> avec les données répliquées uniquement dans les points de présence UE. Créez votre compte là‑bas si vos lecteurs sont en Europe. Dans la région UE, les bans d’agents IA nécessitent toujours une approbation humaine pour satisfaire l’article 17 du DSA.

Les données de commentaires dans le déploiement global sont répliquées à travers les régions, y compris un nœud à Singapour, et le widget est servi depuis le DNS et le CDN propres à FastComments. Le script d’intégration fait moins de 30 KB sur disque et environ 6 KB compressé sur le réseau.

### SDK mobiles

OpenWeb propose des SDK Android, iOS et React Native avec Conversation, Articles, Authentification, Notifications, Reactions et sondages en conversation. FastComments propose des bibliothèques natives <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> et <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> avec commentaires en fil, mises à jour en direct via WebSocket, SSO sécurisé, votes, mentions, téléchargements d’images, actions de modération (signalement, épinglage, verrouillage, blocage), thématisation, mode chat en direct et composant fil d’actualité social. La région UE est un drapeau de configuration. Il n’existe aucun SDK publicitaire séparé car il n’y a aucune publicité.

### Intégration d’embed et SPA

Le lanceur et le conteneur OpenWeb :

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

L’équivalent FastComments :

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // était data-post-id
            url: 'ARTICLE_URL',      // était data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Votre tenant ID se trouve sur la <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">page du code d’embed</a> une fois que vous avez un compte. `data-article-tags` n’a pas d’équivalent puisqu’il n’y a pas de suivi de sujet ; les hashtags dans les commentaires sont une fonctionnalité différente.

Pour le défilement infini et les applications monopage, l’approche Virtual Pages d’OpenWeb consiste en un conteneur par article. Dans FastComments, vous appelez `FastCommentsUI(element, config)` par fil puis plus tard `instance.update(newConfig)` pour changer l’ID d’URL ou `instance.destroy()` pour le retirer (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Les bibliothèques React, Vue, Angular et SolidJS gèrent cela lorsque la prop de configuration change. Les callbacks de cycle de vie (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) remplacent les événements DOM `spot-im-*` que vous écoutiez.

Les compteurs de commentaires sur les pages d’index utilisent le widget de compteur de commentaires, simple ou groupé. Pour le SEO, les commentaires sont rendus directement dans la page pour les robots d’indexation plutôt que dans l’iframe, il n’y a donc aucun appel API SEO à configurer.

### Étape par étape de la bascule

**1. Créez le compte et configurez les bases.** Inscrivez‑vous sur fastcomments.com ou eu.fastcomments.com. Définissez vos paramètres de modération, liste noire de mots, style de vote, tri par défaut et CSS personnalisé dans la page de personnalisation du widget. Ajoutez des modérateurs et des groupes de modération. Si vous avez de nombreux utilisateurs admin, le support les importe pour vous.

**2. Effectuez une première importation.** Allez sur <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, choisissez OpenWeb (.csv) et téléversez. L’import s’exécute en tâche de fond ; la page montre le nombre de lignes et le statut, et vous recevez un e‑mail à la fin (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Chaque ID de message OpenWeb devient l’ID de commentaire FastComments, donc relancer une importation ne crée pas de doublons.

**3. Vérifiez les comptes.** Comparez le nombre de lignes du job avec votre export. Ouvrez quelques IDs d’URL à fort trafic dans le tableau de bord de modération et vérifiez les auteurs, dates, totaux de votes et états d’approbation. Confirmez que les commentaires rejetés apparaissent comme spam et que les en attente sont dans la file.

**4. Construisez le payload SSO.** Implémentez le code de signature ci‑dessus dans votre backend, en utilisant le même `id` et `username` que chez OpenWeb. Testez avec un compte staff sur une page de staging : les commentaires importés apparaissent comme les leurs, et les actions de modification/suppression apparaissent dans le menu du commentaire.

**5. Remplacez l’embed sur un modèle de staging.** Remplacez le lanceur et le conteneur par le snippet FastComments, en mappant `data-post-id` vers `urlId` et `data-post-url` vers `url`. Supprimez `window.SPOTIM.logout()` et les écouteurs `spot-im-*`, ou mappez‑les aux callbacks correspondants. Appliquez votre CSS dans une règle de personnalisation plutôt que dans le code afin qu’il soit testé à chaque mise à jour de FastComments.

**6. Fonctionnez en parallèle.** Déployez FastComments sur une section ou un pourcentage d’articles pendant qu’OpenWeb reste actif sur le reste. Aucun changement n’est requis du côté OpenWeb. Surveillez la file de modération et la page d’analytique. Les lecteurs commentant sur les pages FastComments pendant cette fenêtre ne figurent pas dans votre export OpenWeb, donc planifiez l’import final avant qu’ils ne commencent, pas après.

**7. CSP et DNS.** Si vous utilisez une Content‑Security‑Policy, autorisez `cdn.fastcomments.com` et `fastcomments.com` (ou `eu.fastcomments.com`) pour `script-src`, `frame-src` et `connect-src`, et retirez les entrées `spot.im` et `openweb.com` une fois le lanceur supprimé. Aucun changement n’est requis sur votre DNS. Aucun redirection n’est nécessaire car les IDs d’URL correspondent.

**8. Import final et mise en production.** Extrayez un dernier export OpenWeb couvrant la fenêtre de fonctionnement parallèle, téléversez‑le (re‑import sécurisé), puis déployez le changement de modèle sur toutes les pages et retirez le lanceur, les Reactions, le Topic Tracker, le Spotlight, la cloche et les conteneurs publicitaires.

**9. Checklist de mise en production.**

- Commentaires en direct visibles sur un article de production depuis deux navigateurs.
- Connexion SSO, déconnexion et commentaire sous un vrai compte abonné.
- Les modérateurs reçoivent le digest et peuvent approuver depuis celui‑ci.
- Les e‑mails de réponse et de mention arrivent et pointent vers la bonne page.
- La liste des bans et la liste noire de mots sont peuplées.
- Page Reacts et compteurs de commentaires s’affichent là où les Reactions et le compteur étaient.
- Les rapports CSP sont propres.
- Une dernière comparaison du compteur de commentaires entre votre export et le tableau de bord.

### Ce que vous perdez et ce qui diffère

Être direct sur les écarts :

- **Live Blog.** Aucun équivalent. Conservez‑le dans votre CMS ou un outil de live‑blogging et placez FastComments en dessous.
- **Topic Tracker.** Aucun suivi de sujet ou d’auteur entre articles. Seulement des abonnements de page.
- **Community Spotlight.** Aucun produit de carte CTA. `headerHTML` vous donne un message au-dessus du composeur, pas de capture d’e‑mail.
- **Revenus publicitaires.** Aucun. Le widget est sans publicité par conception.
- **Webhook de notification.** Les webhooks portent sur les événements de commentaire, pas sur les notifications par utilisateur.
- **Filage lors de l’import.** L’importateur actuel aplatit les réponses en commentaires de niveau supérieur sur la même page. Indiquez‑nous si vous avez besoin de reconstruire l’arbre.
- **Historique des réactions.** Les comptes de réactions au niveau de l’article ne sont pas dans l’export de commentaires et recommencent à zéro.
- **Historique des sondages.** Les définitions et votes de sondage ne sont pas dans l’export ; le texte du sondage s’importe, le sondage lui‑même non.
- **Modèle de connexion.** Les lecteurs sans SSO se connectent via un lien magique plutôt qu’avec un mot de passe ou un bouton de connexion sociale.
- **Équipe de modération humaine.** OpenWeb fournit une équipe de modération avec Aida. FastComments fournit les outils, les classificateurs et les agents ; les humains restent à votre charge.

Ce que vous gagnez, dans le même esprit : un widget qui ajoute un petit script et aucune requête publicitaire, une modération qu’une seule personne peut gérer pour un grand site grâce aux actions groupées et aux agents, un SSO qui repose sur une fonction de signature plutôt que sur un protocole, et un fournisseur qui n’est pas sous supervision judiciaire.

### Chronologie et offre d’import gratuit

Prévoyez une à deux semaines pour un éditeur avec une intégration SSO et quelques centaines de milliers de commentaires : un jour ou deux pour l’export et la première importation, quelques jours pour le SSO et les modèles, une fenêtre de fonctionnement parallèle, puis l’import final et le basculement. La plateforme supporte déjà cette échelle : United Cloud gère plus de dix portails et des millions de commentaires sur FastComments, et itsfoss.com a migré un historique de 88 000 commentaires depuis un autre fournisseur via le même importateur en libre‑service.

FastComments importe gratuitement votre export CSV OpenWeb, vous aide à faire fonctionner OpenWeb et FastComments en parallèle pendant la bascule, et vous accompagne dans la migration elle‑même, y compris le filage et les questions d’appariement d’utilisateurs. Les plans Enterprise incluent un SLA, des réponses de support en moins d’une heure pendant les heures ouvrées, et l’option d’un déploiement Cloud isolé dans votre propre compte cloud (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). Le tarif Flex à l’usage est disponible pour les sites qui souhaitent démarrer sans contrat.

Écrivez à <a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> avec la taille de votre export et votre configuration SSO et nous reviendrons avec un plan.

### En conclusion

Extrayez votre export dès aujourd’hui. Le reste de la migration est mécanique : les mêmes IDs d’article deviennent des IDs d’URL, les mêmes noms d’utilisateur revendiquent leurs commentaires via le SSO, l’état de modération est conservé, et l’embed se remplace directement. Les points où FastComments diffère sont listés ci‑dessus afin que vous puissiez décider en connaissance de cause.

Cheers!

{{/isPost}}

---