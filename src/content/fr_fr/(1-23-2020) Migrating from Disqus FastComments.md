---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migrer de Disqus vers FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer complètement de Disqus vers FastComments.

Si vous utilisez l'intégration de site générique avec Disqus, il vous suffit de retirer le petit extrait qu'ils vous fournissent et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner Disqus et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec cela</a>.

Si vous n'utilisez pas l'intégration de site générique, les instructions varieront en fonction de votre plateforme - encore une fois <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a>.
{{/unless}}

{{#isPost}}
Il y a beaucoup de choses que Disqus fait bien, mais où ils échouent, FastComments prend le relais.

## Si vous êtes sur WordPress

FastComments a un plugin WordPress dédié : <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Le plugin rend l'installation, la configuration et la synchronisation très faciles. Si vous optez pour cette solution, vous pouvez ignorer le reste des instructions ici.

## Installation Manuelle, Générique

### Exportez vos commentaires existants

L'importateur FastComments va migrer vos commentaires, noms d'utilisateur, avatars d'utilisateur et images intégrées. Nous déplacerons les images vers nos serveurs de manière transparente.

Une chose que Disqus fait bien, c'est la façon dont ils gèrent l'exportation des données. Vous remarquerez qu'après avoir suivi les étapes de leur guide <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ici</a>, le fichier résultant que vous recevez par email a une extension de fichier mystérieuse "gz". Si vous avez des compétences techniques, vous savez peut-être que cela signifie "gzip" et est un moyen populaire et efficace de compresser les fichiers. 

### N'ouvrez pas le fichier "gz"

Une installation par défaut de Windows 10 ne pourra pas ouvrir le fichier de Disqus. C'est bon, car vous n'avez pas besoin de le faire avec FastComments. Notre backend comprend ce fichier compressé, donc tout ce que vous avez à faire est de suivre leurs instructions <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">ici pour obtenir ledit fichier</a>.

Après cela, si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez Disqus dans le menu déroulant et téléchargez votre fichier.

### Attendez quelques minutes

L'import FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes séparées.

Donc, en fonction de la taille de votre fichier, vous pourriez recevoir le message de succès immédiatement. Sur la page d'importation, en bas, il y a un tableau - chaque ligne représente une tentative d'importation.
Vous pouvez rafraîchir cette page en toute sécurité pour voir l'état de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est terminé

Vous recevrez un email lorsque l'importation est terminée - qu'elle réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier réussisse et que vous voyez votre importation dans la page des Imports. Elle aura un statut comme "Demandé" et lorsqu'elle commence, le statut sera "En cours".

Il est sûr de réimporter autant de fois que nécessaire - cependant si votre importation échoue alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> afin que nous puissions vous aider.

### Remplacez le code Disqus par FastComments

Si vous utilisez l'intégration de site générique avec Disqus, il vous suffit de retirer le petit extrait qu'ils vous fournissent et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner Disqus et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec cela</a>.

Si vous n'utilisez pas l'intégration de site générique, les instructions varieront en fonction de votre plateforme - encore une fois <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a>.

### Migrer les URL en même temps

Les commentaires eux-mêmes sont liés aux champs "lien" dans l'exportation Disqus, donc tant que vos URL ne changent pas, le passage est facile. Si vous voulez migrer des URL et conserver vos commentaires, alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URL. La page d'aide permet de télécharger de petits fichiers texte, donc si vous migrez plus que quelques URL, créez une feuille Excel.

### Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Échangez le snippet JavaScript de Disqus avec <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">celui de FastComments</a>

## Pourquoi Disqus ne m'envoie-t-il pas mon fichier ?
Pour les sites plus grands, Disqus pourrait ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur part. Nous avons la capacité d'extraire votre site existant et d'en retirer les commentaires, cependant cela peut être assez personnalisé et en raison du temps impliqué, cela nécessitera que vous ayez le Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide à ce sujet ici</a>.
{{/isPost}}