---
[category:Migration]
###### [postdate]
# [postlink]Migration de Muut Comments vers FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer complètement de Muut vers FastComments.

Il s'agit simplement de supprimer le petit extrait que Muut vous fournit et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner Muut et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.
{{/unless}}

{{#isPost}}
### Exportez Vos Commentaires Existants

L'importateur FastComments migrera vos commentaires, noms d'utilisateur, avatars d'utilisateur et images en ligne. Nous déplacerons les images vers nos serveurs sans aucun problème.

Pour exporter les données de Commentaires et d'Utilisateurs de votre site depuis Muut, allez dans le tableau de bord Administrateur, puis dans Intégrations et enfin Exportation JSON.

Vous remarquerez que le fichier résultant que vous recevez par email a une mystérieuse extension de fichier "gz". Si vous êtes un peu plus technophile, vous saurez que cela signifie "gzip" et c'est une méthode populaire et efficace pour compresser des fichiers.

### N'ouvrez pas le fichier "gz"

Une installation par défaut de Windows 10 ne pourra pas ouvrir le fichier de Muut. C'est bien, car vous n'avez pas besoin de le faire avec FastComments. Notre backend comprend ce fichier compressé.

Après cela, si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez Muut dans le menu déroulant et téléchargez votre fichier.

Vous devrez entrer l'URL de votre site Web. C'est parce que Muut ne nous donne pas cette information dans l'exportation.

### Attendez quelques minutes

L'importation FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes distinctes.

Donc, selon la taille de votre fichier, vous pourriez recevoir le message de succès immédiatement. Sur la page d'importation, en bas, il y a un tableau - chaque ligne représente une tentative d'importation.
Vous pouvez actualiser cette page sans problème pour voir l'état de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est terminé

Vous recevrez un email lorsque l'importation sera terminée - que cela réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier ait réussi et que vous voyez votre importation dans la page des Importations. Elle aura un statut comme "Demandé" et lorsqu'elle commence, le statut sera "En cours".

Il est sûr de réimporter autant de fois que nécessaire - cependant si votre importation échoue, alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> afin que nous puissions vous aider.

### Remplacez le Code Muut par FastComments

Il s'agit simplement de supprimer le petit extrait que Muut vous fournit et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner Muut et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.

### Migrer les URLs en même temps

Les commentaires eux-mêmes sont liés aux champs "lien" dans l'exportation de Muut, donc tant que vos URLs ne changent pas, le changement est facile. Si vous souhaitez migrer des URLs et conserver vos
commentaires, alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URLs. La page d'aide permet de télécharger de petits fichiers texte, donc si
vous migrez plus que quelques URLs, créez un fichier Excel.

### Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Échangez le snippet JavaScript de Muut contre <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">celui de FastComments</a>

## Pourquoi Muut ne m'envoie-t-il pas mon fichier ?
Pour les grands sites, Muut peut ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur part. Nous avons la capacité de récupérer votre site existant et d'en extraire les commentaires, cependant cela peut être
assez personnalisé et en raison du temps impliqué, cela nécessitera que vous ayez le Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide ici</a>.
{{/isPost}}

---