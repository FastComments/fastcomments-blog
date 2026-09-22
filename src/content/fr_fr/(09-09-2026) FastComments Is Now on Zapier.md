---
[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments est maintenant sur Zapier[/postlink]

{{#unless isPost}}
Connectez vos commentaires à des milliers d'applications avec l'application officielle FastComments pour Zapier. Les déclencheurs s'activent dès qu'un commentaire est publié, et n'importe quelle application peut créer des commentaires, des pages et des utilisateurs sur votre site.
{{/unless}}

{{#isPost}}

### Nouveautés

Il existe maintenant une application officielle FastComments sur [Zapier](https://zapier.com). Connectez-vous une fois depuis l'éditeur Zapier et vous pouvez envoyer chaque nouveau commentaire à Slack, les enregistrer dans une feuille de calcul, ajouter les commentateurs à votre CRM, ou créer des commentaires à partir d'une soumission de formulaire, sans écrire de code.

Avant cela, intégrer FastComments à un autre outil signifiait mettre en place votre propre récepteur de webhook ou écrire contre l'API REST. Les deux fonctionnent toujours. L'application Zapier est destinée aux cas où vous préférez ne rien exécuter.

### Déclencheurs

Trois déclencheurs, tous instantanés :

- **New Comment** se déclenche lorsqu'un commentaire est publié. Par défaut, seuls les commentaires approuvés et non indésirables déclenchent, de sorte qu'un Zap qui publie dans un canal public ne divulgue pas les éléments encore en file d'attente de modération. Il y a une case à cocher pour inclure tout.
- **Updated Comment** se déclenche lorsqu'un commentaire est modifié, approuvé, voté, épinglé ou autrement changé. Filtrez sur le champ approuvé et il devient un déclencheur de « commentaire approuvé ».
- **Deleted Comment** se déclenche lorsqu'un commentaire est supprimé, avec le commentaire complet pour vos archives.

Chaque déclencheur possède un filtre de domaine optionnel listant les domaines configurés sur votre compte, de sorte qu'un Zap puisse surveiller un site parmi plusieurs.

Les déclencheurs sont basés sur des webhooks, pas sur du polling. FastComments transmet l'événement à Zapier dès qu'il se produit, rien ne sonde votre compte pendant l'attente, et l'attente ne coûte aucun crédit API.

### Actions et Recherches

Les actions appellent l'API FastComments en votre nom :

- **Create Comment** sur n'importe quelle page, en tant que commentateur nommé ou utilisateur SSO existant, éventuellement en tant que réponse.
- **Create Page**, afin qu'une page puisse être listée et restreinte aux groupes de membres avant son premier commentaire.
- **Create SSO User**, afin que les membres de vos autres outils puissent commenter sous leur propre identité.
- **Create Feed Post** et **Create Hash Tag**.
- **Flag Comment** pour révision par un modérateur.

Les recherches récupèrent des éléments pour les étapes suivantes : **Find Comment** par ID, **Find SSO User** par e‑mail, et **Find Page** par ID d'URL. Associez une recherche à la création correspondante dans le mode « find or create » de Zapier et l'utilisateur ou la page manquante sera créée pour vous.

### Quelques Zaps pour commencer

- New Comment, puis Slack « Send Channel Message ». Mappez le nom du commentateur, le commentaire et l'URL de la page. Utilisez le filtre de domaine pour diriger chaque site vers son propre canal.
- New Comment, puis Google Sheets « Create Spreadsheet Row », avec Deleted Comment ajoutant une ligne comme second Zap. La feuille devient une piste d'audit.
- Updated Comment filtré où Approved est vrai, puis Gmail « Send Email » pour informer l'auteur que son commentaire est en ligne.
- Typeform « New Response », puis Create Comment sur votre page de témoignages avec Approved laissé décoché, afin que vous puissiez examiner chaque commentaire avant qu'il n'apparaisse.
- WordPress « New Post », puis Create Page, afin que chaque article soit enregistré avant le premier commentaire.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) en contient plus, y compris un flux de travail pour provisionner les utilisateurs SSO depuis votre outil d'adhésion.

### Comment ça se connecte

L'application utilise OAuth. Lorsque vous ajoutez une étape FastComments, Zapier vous demande votre région (États‑Unis ou UE), vous redirige vers FastComments pour vous connecter, et affiche une page de consentement indiquant le nom de l'application, le compte auquel elle se connectera, et les autorisations demandées. Aucune clé API n'est copiée dans Zapier.

La personne qui approuve la connexion doit être un administrateur API du compte. Les propriétaires de compte disposent déjà de ce droit et peuvent le concéder à d'autres membres de l'équipe sur la page Utilisateurs.

Chaque connexion apparaît sous **Integrate, then Connected Apps** dans votre tableau de bord, marquée comme une intégration officielle, avec la date de dernière utilisation. La révoquer là déconnecte Zapier immédiatement. Activer un Zap crée une souscription webhook que vous pouvez voir sur la page Webhooks avec la source **API**, et désactiver le Zap la supprime.

### Combien ça coûte

L'application est gratuite sur tous les plans Zapier, y compris le plan gratuit, et FastComments ne facture rien de plus pour cela. Les déclencheurs n'utilisent aucun crédit API. Les actions et les recherches consomment les mêmes crédits qu'un appel depuis votre propre code, généralement un crédit par appel.

### Documentation

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) couvre la connexion d'un compte, chaque déclencheur et action avec leurs champs, des exemples de Zaps, et le dépannage. L'intégration elle‑même est open source sur [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### En conclusion

Ouvrez [fastcomments.com/zapier](https://fastcomments.com/zapier) pour trouver l'application, connecter votre compte, et créer votre premier Zap.

Comme toujours, faites‑nous savoir ci‑dessous si vous rencontrez le moindre problème.

Santé !

{{/isPost}}

---