---
[category:Migration]
###### [postdate]
# [postlink]Migration de Commento vers FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer entièrement de Commento vers FastComments.

## Points à considérer

Commento ne nous fournit pas d'URL complètes. Ce qu'ils fournissent est juste le nom de domaine auquel appartient un fil de discussion - comme "fastcomments.com/some-page".
Cela signifie que l'importateur FastComments doit supposer quel est le protocole, et il par défaut à https. Si vous lancez l'importation et que vous ne voyez pas vos données,
vous voudrez peut-être vérifier que votre site est correctement sécurisé.
{{/unless}}

{{#isPost}}
### Exportez vos commentaires existants

Pour exporter les données de Commentaires et d'Utilisateurs de votre site depuis Commento, allez dans le tableau de bord Admin, puis dans Général, et ensuite Exporter des Données.

Vous remarquerez que le fichier résultant que vous recevez par e-mail a une mystérieuse extension de fichier "gz". Si vous êtes un peu plus à l'aise avec la technologie, vous savez peut-être que cela signifie "gzip", qui est un moyen populaire et efficace de compresser des fichiers.

### N'ouvrez pas le fichier "gz"

Une installation par défaut de Windows 10 ne pourra pas ouvrir le fichier de Commento. C'est bien, car vous n'avez pas besoin de le faire avec FastComments. Notre backend comprend ce fichier compressé.

Après cela, si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez Commento dans le menu déroulant et téléchargez votre fichier.

### Attendez quelques minutes

L'importation de FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes séparées.

Donc, selon la taille de votre fichier, vous pourriez recevoir le message de succès immédiatement. En bas de la page d'importation, il y a un tableau - chaque ligne représente une tentative d'importation.
Vous pouvez actualiser cette page en toute sécurité pour voir l'état de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est terminé

Vous recevrez un e-mail lorsque l'importation sera terminée - que cela réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier réussisse et que vous voyez votre importation dans la page des Importations. Il aura un statut comme "Demandé" et lorsque cela commence, le statut sera "En cours".

Il est sûr de réimporter autant de fois que nécessaire - cependant, si votre importation échoue, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> afin que nous puissions vous aider.

### Remplacez le code Commento par celui de FastComments

C'est simplement une question de retirer le petit extrait que Commento vous donne et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même exécuter Commento et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec cela</a>.

### Migrer les URLs en même temps

Les commentaires eux-mêmes sont liés aux champs "lien" dans l'exportation Commento, donc tant que vos URLs ne changent pas, le changement est facile. Si vous souhaitez migrer les URLs et conserver vos 
commentaires, alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URLs. La page d'aide permet de télécharger de petits fichiers texte, donc si 
vous migrez plus que quelques URLs, créez une feuille Excel.

### Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Échangez le snippet JavaScript de Commento avec <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">celui de FastComments</a>

## Points à considérer

Commento ne nous fournit pas d'URL complètes. Ce qu'ils fournissent est juste le nom de domaine auquel appartient un fil de discussion - comme "fastcomments.com/some-page".
Cela signifie que l'importateur FastComments doit supposer quel est le protocole, et il par défaut à https. Si vous lancez l'importation et que vous ne voyez pas vos données,
vous voudrez peut-être vérifier que votre site est correctement sécurisé.

## Pourquoi Commento ne m'enverra pas mon fichier?
Pour les sites plus grands, Commento pourrait ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur côté. Nous avons la capacité de récupérer votre site existant et d'en extraire les commentaires, cependant cela peut être
assez personnalisé et en raison du temps impliqué, il vous faudra avoir le Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide ici</a>.
{{/isPost}}

---