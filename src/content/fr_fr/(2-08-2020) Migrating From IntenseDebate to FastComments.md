---
[category:Migration]

###### [postdate]
# [postlink]Migrer de IntenseDebate vers FastComments[/postlink]

{{#unless isPost}}
Lisez ce post pour démontrer comment migrer complètement de IntenseDebate vers FastComments.
{{/unless}}

{{#isPost}}
## Si vous êtes sur WordPress

FastComments dispose d'un plugin WordPress dédié : <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Le plugin facilite l'installation, la configuration et la synchronisation. Si vous suivez cette méthode, vous pouvez ignorer le reste des instructions ici.

## Installation manuelle, générique

### Exporter vos commentaires existants

Pour exporter les données de Commentaires et d'Utilisateurs de votre site depuis IntenseDebate, allez sur le tableau de bord Admin, puis Sites -> Votre Site -> Outils -> Exportation XML.

Vous remarquerez que le fichier résultant que vous recevez par email a une mystérieuse extension de fichier "gz". Si vous êtes un peu plus à l'aise techniquement, vous savez peut-être que cela signifie "gzip" et est un moyen populaire et efficace de compresser des fichiers.

### Ne pas ouvrir le fichier "gz"

Une installation Windows 10 par défaut ne pourra pas ouvrir le fichier d'IntenseDebate. C'est bien, car vous n'avez pas besoin de le faire avec FastComments. Notre backend comprend ce fichier compressé.

Après cela, si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez IntenseDebate dans le menu déroulant et téléchargez votre fichier.

### Attendez quelques minutes

L'importation de FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes séparées.

Donc, selon la taille de votre fichier, vous pourriez recevoir le message de succès immédiatement. Sur la page d'importation, en bas, il y a un tableau - chaque ligne représente une tentative d'importation. 
Vous pouvez rafraîchir cette page en toute sécurité pour voir le statut de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est fait

Vous recevrez un email lorsque l'importation est terminée - qu'elle réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier soit réussi et que vous voyez votre importation sur la page des Importations. Elle aura un statut comme "Demandé" et lorsqu'elle commence, le statut sera "En cours".

Il est sans danger de réimporter autant de fois que nécessaire - cependant, si votre importation échoue, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> pour que nous puissions vous aider.

### Remplacer le Code IntenseDebate par celui de FastComments

Il suffit de retirer le petit extrait de code qu'IntenseDebate vous donne et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>. 
Vous pouvez même faire fonctionner IntenseDebate et FastComments sur le même site temporairement pour tester et ajuster l'apparence et la convivialité. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.

Si vous utilisez des widgets IntenseDebate et souhaitez les remplacer, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous ici</a>.

### Migration des URL en même temps

Les commentaires eux-mêmes sont liés aux champs "lien" dans l'exportation d'IntenseDebate, donc tant que vos URL ne changent pas, le changement est facile. Si vous souhaitez migrer les URL et conserver vos commentaires, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URL. La page d'aide permet de télécharger de petits fichiers texte, donc si vous migrez plus que juste quelques URL, créez une feuille Excel.

### Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Échangez le extrait de JavaScript d'IntenseDebate avec <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">celui de FastComments</a>

## Pourquoi IntenseDebate ne m'enverra-t-il pas mon fichier ?
Pour les sites plus importants, IntenseDebate pourrait ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur côté. Nous avons la capacité de récupérer votre site existant et d'extraire les commentaires à partir de celui-ci, cependant cela peut être assez personnalisé et en raison du temps impliqué, cela nécessitera que vous ayez le Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide à ce sujet ici</a>.
{{/isPost}}

---