---
[category:Migration]
###### [postdate]
# [postlink]Migration de JustComments vers FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer complètement de JustComments à FastComments.

Il s'agit généralement de supprimer le petit extrait qu'ils vous fournissent et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner JustComments et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.
{{/unless}}

{{#isPost}}

À partir de 2021, JustComments va fermer. Chez FastComments, nous avons facilité votre transition vers notre plateforme.

Vous constaterez que FastComments offre de nombreuses fonctionnalités similaires auxquelles vous êtes habitué, et plus encore.

## Différences de Tarification

Alors que JustComments utilise un système basé sur des crédits, FastComments utilise un modèle par paliers avec trois paliers disponibles. Avec FastComments, notre plan à 5 $/mois
vous couvre jusqu'à 1 million de chargements de pages par mois. Au-delà de cela se trouvent les plans Pro et Enterprise, que vous pouvez consulter sur notre <a href="https://fastcomments.com/traffic-pricing" target="_blank">page de tarification</a>.

## Si Vous Êtes sur WordPress

FastComments dispose d'un plugin WordPress dédié : <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Le plugin rend l'installation, la configuration et la synchronisation très faciles. Cependant, JustComments ne synchronise pas vos commentaires dans votre installation WordPress comme le fait FastComments.
Cela signifie qu'après la synchronisation, vous devrez suivre les étapes d'exportation et d'importation ci-dessous.

## Exportez Vos Commentaires Existants

L'importateur FastComments migrera vos commentaires, noms d'utilisateur, avatars d'utilisateur et images intégrées. Nous déplacerons les images vers nos serveurs sans problème.

Pour télécharger vos données de commentaires depuis JustComments, allez sur votre page de Compte.

## Importez Dans L'Administration FastComments

Ne vous inquiétez pas d'ouvrir le fichier résultant de JustComments.

Si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>.

Sélectionnez JustComments dans le menu déroulant et téléchargez votre fichier.

### Identifiants de Page

Lors de l'importation, vous verrez l'option de choisir l'URL de la page ou "ID d'élément". Si vous n'êtes pas sûr de ce qu'il faut choisir, choisissez l'URL de la page. Si vous avez une intégration avec JustComments
où vous spécifiez l'ID d'élément dans la configuration du widget, choisissez ID d'élément.

### Attendez quelques minutes

L'importation FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes séparées.

Donc, en fonction de la taille de votre fichier, vous pourriez obtenir le message de succès immédiatement. Sur la page d'importation, en bas, il y a un tableau - chaque ligne représente une tentative d'importation.
Vous pouvez actualiser cette page en toute sécurité pour voir le statut de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est terminé

Vous recevrez un e-mail lorsque l'importation sera terminée - qu'elle réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier réussisse et que vous voyiez votre importation dans la page des Importations. Elle aura un statut comme "Demandée" et lorsqu'elle commence, le statut sera "En cours".

Il est sûr de réimporter autant de fois que nécessaire - cependant, si votre importation échoue, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> afin que nous puissions vous aider.

### Remplacez le Code JustComments par FastComments

Si vous n'utilisez pas le plugin WordPress de JustComments, il s'agit simplement de supprimer le petit extrait qu'ils vous donnent et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner JustComments et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.

### Migrer les URLs en même temps

Les commentaires eux-mêmes sont liés aux champs "pageUrl" par défaut dans l'exportation de JustComments donc tant que vos URLs ne changent pas, le passage est facile. Si vous souhaitez migrer des URLs et garder vos
commentaires, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URLs. La page d'aide permet de télécharger de petits fichiers texte donc si
vous migrez plus que quelques URLs, créez une feuille Excel.

## Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Si vous n'êtes pas sur WordPress, échangez le snippet JavaScript de JustComments avec <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">celui de FastComments</a>

{{/isPost}}

---