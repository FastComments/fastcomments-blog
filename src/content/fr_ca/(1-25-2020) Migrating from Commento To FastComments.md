---
[category:Migration]
###### [postdate]
# [postlink]Migration de Commento à FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer complètement de Commento à FastComments.

## Points à surveiller

Commento ne nous fournit pas d'URLs complètes. Ce qu'ils fournissent est juste le nom de domaine auquel appartient un fil de commentaires - comme "fastcomments.com/some-page".  
Cela signifie que l'importateur FastComments doit supposer quel est le protocole, et il par défaut à https. Si vous exécutez l'importation et que vous ne voyez pas vos données,  
vous voudrez peut-être vérifier que votre site est correctement sécurisé.  
{{/unless}}

{{#isPost}}
### Exportez vos commentaires existants

Pour exporter les données de Commentaires et d'Utilisateurs de votre site depuis le tableau de bord Admin de Commento, allez dans Général puis Exporter les données.

Vous remarquerez que le fichier résultant que vous recevez par e-mail a une extension de fichier mystérieuse "gz". Si vous êtes un peu plus technique, vous savez peut-être que cela signifie "gzip" et est un moyen populaire et efficace de compresser des fichiers.

### Ne pas ouvrir le fichier "gz"

Une installation Windows 10 par défaut ne pourra pas ouvrir le fichier de Commento. C'est bien, car vous n'avez pas besoin de cela avec FastComments. Notre backend comprend ce fichier compressé.

Après cela, si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez Commento dans le menu déroulant et téléchargez votre fichier.

### Attendez quelques minutes

L'importation FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes séparées.

Donc, selon la taille de votre fichier, vous pourriez recevoir le message de succès immédiatement. Sur la page d'importation en bas, il y a un tableau - chaque ligne représente une tentative d'importation.  
Vous pouvez actualiser cette page en toute sécurité pour voir le statut de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est terminé

Vous recevrez un e-mail lorsque l'importation sera terminée - que cela réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier ait réussi et que vous ayez vu votre importation sur la page des Importations. Cela aura un statut comme "Demandé" et quand cela commence, le statut sera "En cours".

Il est sûr de réimporter autant de fois que nécessaire - cependant si votre importation échoue, alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> pour que nous puissions vous aider.

### Remplacez le code Commento par FastComments

C'est simplement une question de retirer le petit extrait que Commento vous donne et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">notre propre</a>.  
Vous pouvez même faire fonctionner Commento et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec cela</a>.

### Migration des URLs en même temps

Les commentaires eux-mêmes sont liés aux champs "lien" dans l'exportation de Commento donc tant que vos URLs ne changent pas, le changement est facile. Si vous souhaitez migrer des URLs et conserver vos  
commentaires, alors <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URLs. La page d'aide permet de télécharger de petits fichiers texte donc si  
vous migrez plus que juste quelques URLs, créez une feuille Excel.

### Récapitulatif

1. Exportez vos données  
2. Importez dans FastComments  
3. Échangez le snippet JavaScript de Commento avec <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Points à surveiller

Commento ne nous fournit pas d'URLs complètes. Ce qu'ils fournissent est juste le nom de domaine auquel appartient un fil de commentaires - comme "fastcomments.com/some-page".  
Cela signifie que l'importateur FastComments doit supposer quel est le protocole, et il par défaut à https. Si vous exécutez l'importation et que vous ne voyez pas vos données,  
vous voudrez peut-être vérifier que votre site est correctement sécurisé.

## Pourquoi Commento ne m'envoie-t-il pas mon fichier ?
Pour les sites plus grands, Commento pourrait ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur côté. Nous avons la capacité d'extraire votre site existant et d'en retirer les commentaires, cependant cela peut être  
assez personnalisé et en raison du temps impliqué, cela nécessitera que vous ayez le Forfait Support. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide à ce sujet ici</a>.  
{{/isPost}}

---