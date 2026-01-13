---
[category:Migration]

###### [postdate]
# [postlink]Migration D'IntenseDebate Vers FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour démontrer comment migrer entièrement d'IntenseDebate vers FastComments.
{{/unless}}

{{#isPost}}
## Si Vous Êtes Sur WordPress

FastComments a un plugin dédié pour WordPress : <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Le plugin rend l'installation, la configuration et la synchronisation très faciles. Si vous optez pour cette solution, vous pouvez ignorer le reste des instructions ici.

## Installation Manuelle, Générique

### Exportez Vos Commentaires Existants

Pour exporter les données de Commentaires et d'Utilisateurs de votre site depuis IntenseDebate, allez sur le tableau de bord Admin, puis Sites -> Votre Site -> Outils -> Export XML.

Vous remarquerez que le fichier résultant que vous recevez par e-mail a une mystérieuse extension de fichier "gz". Si vous êtes un peu plus calé techniquement, vous saurez que cela signifie "gzip" et est une méthode populaire et efficace pour compresser des fichiers. 

### Ne pas ouvrir le fichier "gz"

Une installation par défaut de Windows 10 ne pourra pas ouvrir le fichier d'IntenseDebate. C'est bien, car vous n'avez pas besoin de le faire avec FastComments. Notre backend comprend ce fichier compressé.

Après cela, si vous êtes connecté, vous pouvez aller <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez IntenseDebate dans le menu déroulant et téléchargez votre fichier.

### Attendez quelques minutes

L'importation Rapide des Commentaires est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes séparées.

Donc, en fonction de la taille de votre fichier, vous pourriez recevoir le message de succès immédiatement. Sur la page d'importation, en bas, il y a un tableau - chaque ligne représente une tentative d'importation.
Vous pouvez rafraîchir cette page en toute sécurité pour voir l'état de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est fait

Vous recevrez un e-mail lorsque l'importation sera terminée - qu'elle réussisse ou non. Vous pouvez fermer la page après le succès du téléchargement du fichier et voir votre import sur la page des Imports. Il aura un statut comme "Demandé" et lorsqu'il commence, le statut sera "En cours".

Il est sûr de réimporter autant de fois que nécessaire - cependant, si votre importation échoue, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> afin que nous puissions vous aider.

### Remplacer le Code d'IntenseDebate par celui de FastComments

Il s'agit simplement de supprimer le petit extrait qu'IntenseDebate vous donne et de le remplacer par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner IntenseDebate et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec cela</a>.

Si vous utilisez des widgets IntenseDebate et souhaitez les remplacer, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous ici</a>.

### Migrer des URLs en même temps

Les commentaires eux-mêmes sont liés aux champs "lien" dans l'exportation d'IntenseDebate donc tant que vos URLs ne changent pas, le passage est facile. Si vous souhaitez migrer des URLs et conserver vos
commentaires, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URLs. La page d'aide permet de télécharger de petits fichiers texte, donc si
vous migrez plus que juste quelques URLs, créez une feuille Excel.

### Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Remplacez l'extrait JavaScript d'IntenseDebate par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">celui de FastComments</a>

## Pourquoi IntenseDebate Ne M'Envoie-T-Il Pas Mon Fichier ?
Pour des sites plus grands, IntenseDebate pourrait ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur côté. Nous avons la capacité de parcourir votre site existant et d'extraire les commentaires, cependant cela peut être
assez personnalisé et en raison du temps impliqué, cela nécessitera que vous ayez le Package de Support. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide à ce sujet ici</a>.
{{/isPost}}

---