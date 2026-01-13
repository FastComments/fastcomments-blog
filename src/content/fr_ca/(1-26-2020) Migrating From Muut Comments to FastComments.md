---
[category:Migration]
###### [postdate]
# [postlink]Migration des commentaires Muut vers FastComments[/postlink]

{{#unless isPost}}
Lisez ce post pour voir comment migrer complètement de Muut à FastComments.

Il s'agit simplement de retirer le petit extrait que Muut vous donne et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner Muut et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec cela</a>.
{{/unless}}

{{#isPost}}
### Exportez vos commentaires existants

L'importateur FastComments migrera vos commentaires, noms d'utilisateur, avatars d'utilisateur et images en ligne. Nous déplacerons les images vers nos serveurs sans problème.

Pour exporter les données de commentaires et d'utilisateurs de votre site depuis Muut, allez dans leur tableau de bord Admin, puis dans Intégrations et enfin Exportation JSON.

Vous remarquerez que le fichier résultant que vous recevez par e-mail a une mystérieuse extension de fichier "gz". Si vous avez quelques compétences techniques, vous pourriez savoir que cela signifie "gzip" et est un moyen populaire et efficace de compresser des fichiers.

### Ne pas ouvrir le fichier "gz"

Une installation par défaut de Windows 10 ne pourra pas ouvrir le fichier de Muut. Cela ne pose pas de problème, car vous n'avez pas besoin de le faire avec FastComments. Notre backend comprend ce fichier compressé.

Après cela, si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez Muut dans le menu déroulant et téléchargez votre fichier.

Vous devrez entrer l'URL de votre site web. Cela est dû au fait que Muut ne nous donne pas cette information dans l'exportation.

### Attendez quelques minutes

L'importation de FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes séparées.

Donc, en fonction de la taille de votre fichier, vous pourriez obtenir le message de succès immédiatement. Sur la page d'importation, en bas, il y a un tableau - chaque ligne représente une tentative d'importation.
Vous pouvez rafraîchir cette page en toute sécurité pour voir l'état de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est terminé

Vous recevrez un e-mail lorsque l'importation est terminée - qu'elle réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier réussisse et que vous voyiez votre importation sur la page des Importations. Elle aura un statut comme "Demandé" et lorsqu'elle commence, le statut sera "En cours".

Il est sûr de réimporter autant de fois que nécessaire - cependant, si votre importation échoue, alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> afin que nous puissions vous aider.

### Remplacez le code Muut par FastComments

Il s'agit simplement de retirer le petit extrait que Muut vous donne et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner Muut et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec cela</a>.

### Migrer les URLs en même temps

Les commentaires eux-mêmes sont liés aux champs "lien" dans l'exportation Muut donc tant que vos URLs ne changent pas, le changement est facile. Si vous souhaitez migrer les URLs et conserver vos
commentaires, alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URLs. La page d'aide permet de télécharger de petits fichiers texte donc si
vous migrez plus que juste quelques urls, créez une feuille Excel.

### Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Remplacez le extrait JavaScript de Muut par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">celui de FastComments</a>

## Pourquoi Muut ne m'enverra pas mon fichier ?
Pour les sites plus grands, Muut pourrait ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur côté. Nous avons la capacité de récupérer votre site existant et d'extraire les commentaires, cependant cela peut être
assez personnalisé et en raison du temps nécessaire, vous devrez avoir le Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide à ce sujet ici</a>.
{{/isPost}}

---