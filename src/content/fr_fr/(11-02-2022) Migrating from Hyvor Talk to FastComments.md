---
[category:Migration]
###### [postdate]
# [postlink]Migration de Hyvor Talk vers FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer complètement de Hyvor Talk vers FastComments.

Si vous utilisez l'installation manuelle du code avec Hyvor Talk, il vous suffit de supprimer le petit extrait qu'ils vous donnent et de le remplacer par <a href="https://fastcomments.com/install-wizard" target="_blank">le nôtre</a>.
Vous pouvez même faire fonctionner Hyvor et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.

Si vous n'utilisez pas l'installation basée sur le code extrait, les instructions varieront en fonction de votre plateforme - encore une fois, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a>.
{{/unless}}

{{#isPost}}

## Si Vous Êtes sur WordPress

FastComments a un plugin WordPress dédié : <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Le plugin rend l'installation, la configuration et la synchronisation très faciles. Si vous suivez cette voie, vous pouvez ignorer le reste des instructions ici. Assurez-vous simplement
que vous avez synchronisé vos commentaires Hyvor Talk avec votre installation WordPress.

Si cela ne fonctionne pas pour vous comme l'ont signalé certains de nos clients, vous voudrez peut-être utiliser notre plugin WordPress, mais effectuer une importation de données
en exportant manuellement de Hyvor Talk. Vous pouvez trouver les importations de données dans [Gérer les données -> Importer les commentaires](https://fastcomments.com/auth/my-account/manage-data/import).

## Installation Manuelle, Générique

### Exportez Vos Commentaires Existants

L'importateur FastComments transférera vos fils de commentaires, noms d'utilisateur, avatars d'utilisateur, émojis et images en ligne. Nous déplacerons les images vers nos serveurs sans problème.

Depuis 2022, Hyvor Talk n'exporte pas les emails ni les votes up/down. Si vous parvenez à obtenir un export de leur part avec ces informations, nous pouvons l'importer.

### Importez le Fichier .JSON

Après avoir téléchargé l'export de Hyvor, connectez-vous à votre tableau de bord FastComments et allez <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez Hyvor Talk dans le menu déroulant et téléchargez votre fichier.

### Attendez quelques minutes

L'importation FastComments est "asynchrone". Cela signifie que le téléchargement du fichier et son traitement sont des étapes distinctes.

Donc, selon la taille de votre fichier, vous pourriez recevoir le message de succès immédiatement. Sur la page d'importation, en bas, il y a un tableau - chaque ligne représente une tentative d'importation.
Vous pouvez actualiser cette page en toute sécurité pour voir l'état de votre importation et combien de lignes ont été importées jusqu'à présent.

### Quand c'est terminé

Vous recevrez un email lorsque l'importation sera terminée - que cela réussisse ou non. Vous pouvez fermer la page après que le téléchargement du fichier ait réussi et que vous voyiez votre importation dans la page des Importations. Elle aura un statut comme "Demandé" et lorsqu'elle commencera, le statut sera "En cours".

Il est sans danger de réimporter autant de fois que nécessaire - cependant, si votre importation échoue, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> pour que nous puissions vous aider.

### Remplacez le Code Hyvor Talk par FastComments

Si vous utilisez l'installation basée sur le code extrait avec Hyvor, il vous suffit de supprimer le petit extrait qu'ils vous donnent et de le remplacer par <a href="https://fastcomments.com/install-wizard" target="_blank">le nôtre</a>.
Nous prêtons également support à de nombreux frameworks front-end que [vous pouvez trouver ici](https://fastcomments.com/install-wizard). Vous pouvez même faire fonctionner Hyvor et FastComments sur le même site temporairement pour tester et ajuster l'apparence. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.

Si vous n'utilisez pas l'installation basée sur le code extrait, les instructions varieront en fonction de votre plateforme - encore une fois, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a>.

Nous offrons un assistant d'installation en libre-service [ici](https://fastcomments.com/install-wizard).

### Migration des URL en même temps

Les commentaires eux-mêmes sont liés aux champs d'identifiant de page dans l'exportation donc tant que vos URL ne changent pas, le changement est facile. Si vous souhaitez migrer des URL et conserver vos
commentaires, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites-le nous savoir</a> en nous envoyant les anciennes et nouvelles URL. La page d'aide permet de télécharger de petits fichiers texte donc si
vous migrez plus que juste quelques URL, créez une feuille Excel.

### UE

Si vous êtes dans l'UE, vous voudrez probablement créer votre compte sur [eu.fastcomments.com](https://eu.fastcomments.com) afin que vos données client restent dans l'UE.

### Récapitulatif

1. Exportez vos données
2. Importez dans FastComments
3. Échangez le extrait JavaScript Hyvor avec <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments</a>

## Pourquoi Hyvor ne Veut-Il Pas M'envoyer Mon Fichier ?
Pour les plus grands sites, Hyvor pourrait ne pas être en mesure de créer le fichier exporté en raison de limitations techniques de leur côté. Nous avons la capacité de récupérer votre site existant et d'en extraire les commentaires, cependant cela peut être
assez personnalisé et en raison du temps impliqué, cela nécessitera que vous ayez le Support Package. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vous pouvez demander de l'aide à ce sujet ici</a>.
{{/isPost}}

---