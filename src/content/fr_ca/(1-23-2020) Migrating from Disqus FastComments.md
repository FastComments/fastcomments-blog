---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migrer de Disqus à FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer complètement de Disqus à FastComments.

Si vous utilisez l'intégration de site générique avec Disqus, il vous suffit de retirer le petit extrait qu'ils vous donnent et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même exécuter Disqus et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.

Si vous n'utilisez pas l'intégration de site générique, les instructions varieront en fonction de votre plateforme - encore une fois, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a>.
{{/unless}}

{{#isPost}}
Il y a beaucoup de choses que Disqus fait bien, mais là où ils échouent, c'est là où FastComments intervient.

## Si vous êtes sur WordPress

FastComments dispose d'un plugin WordPress dédié : <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Le plugin rend l'installation, la configuration et la synchronisation très faciles. Si vous choisissez cette voie, vous pouvez ignorer le reste des instructions ici.

## Installation manuelle, générique

### Exportez vos commentaires existants

L'importateur FastComments migrera vos commentaires, noms d'utilisateur, avatars d'utilisateur et images intégrées. Nous déplacerons les images vers nos serveurs sans problème.

Une chose que Disqus fait bien est la façon dont ils gèrent l'exportation des données. Vous remarquerez qu'après avoir suivi les étapes de leur guide <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ici</a>, le fichier que vous recevez par e-mail a une mystérieuse extension de fichier "gz". Si vous êtes un peu techniquement aguerri, vous savez peut-être que cela signifie "gzip" et qu'il s'agit d'une méthode populaire et efficace pour compresser des fichiers.

### Ne pas ouvrir le fichier "gz"

Une installation par défaut de Windows 10 ne pourra pas ouvrir le fichier de Disqus. Ce n'est pas grave, car vous n'avez pas à le faire avec FastComments. Notre backend comprend ce fichier compressé, donc tout ce que vous avez à faire est de suivre leurs instructions <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ici pour obtenir ce fichier</a>.

Après cela, si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez Disqus dans le menu déroulant et téléchargez votre fichier.

### Attendez quelques minutes

L'importation FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes séparées.

Donc, en fonction de la taille de votre fichier, vous pourriez recevoir le message de succès immédiatement. Sur la page d'importation, en bas, il y a un tableau - chaque ligne représente une tentative d'importation.
Vous pouvez actualiser cette page en toute sécurité pour voir l'état de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est terminé

Vous recevrez un e-mail lorsque l'importation sera terminée - que cela réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier ait réussi et que vous voyiez votre importation sur la page d'Importations. Elle aura un statut comme "Demandé" et lorsqu'elle commence, le statut sera "En cours".

Il est sûr de réimporter autant de fois que nécessaire - cependant, si votre importation échoue, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> pour que nous puissions vous aider.

### Remplacer le code Disqus par FastComments

Si vous utilisez l'intégration de site générique avec Disqus, il vous suffit de retirer le petit extrait qu'ils vous donnent et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même exécuter Disqus et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.

Si vous n'utilisez pas l'intégration de site générique, les instructions varieront en fonction de votre plateforme - encore une fois, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a>.

### Migrer les URL en même temps

Les commentaires eux-mêmes sont liés aux champs "lien" dans l'exportation de Disqus, donc tant que vos URL ne changent pas, le passage est facile. Si vous souhaitez migrer des URL et garder vos commentaires, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URL. La page d'aide permet de télécharger de petits fichiers texte, donc si vous migrez plus que juste quelques URL, créez une feuille Excel.

### Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Remplacez le extrait JavaScript de Disqus par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Pourquoi Disqus ne m'enverra-t-il pas mon fichier ?
Pour les plus grands sites, Disqus pourrait ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur côté. Nous avons la capacité de scanner votre site existant et d'extraire les commentaires, cependant, cela peut être assez personnalisé et, en raison du temps impliqué, nécessitera que vous ayez le package de support. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide pour cela ici</a>.
{{/isPost}}