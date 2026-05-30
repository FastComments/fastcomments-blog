---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Comment supprimer les annonces des commentaires Disqus[/postlink]

{{#unless isPost}}
Avec le plan gratuit de Disqus, votre section de commentaires est accompagnée d'annonces. Il existe deux façons de s'en débarrasser. La meilleure rend également vos commentaires plus rapides à charger et empêche vos lecteurs d'être suivis.
{{/unless}}

{{#isPost}}

Disqus finance son plan gratuit en plaçant des annonces dans votre section de commentaires, juste en dessous de votre contenu, à l'endroit où vos lecteurs vont pour discuter avec vous. Ces annonces ne vous appartiennent pas. Vous ne les choisissez pas et vous ne gagnez pas un centime avec elles. C'est l'échange pour le niveau gratuit.

Il existe deux véritables façons de les supprimer.

## Option 1 : Mettez à niveau votre plan Disqus

La voie simple est de payer Disqus. Leurs plans payants désactivent les annonces. Vous pouvez trouver les options actuelles sur la <a href="https://disqus.com/pricing/" target="_blank">page de tarification de Disqus</a>.

Cela fonctionne, mais il est important d'être clair sur ce que vous achetez. Vous payez pour annuler un inconvénient. Les annonces disparaissent, et le reste de Disqus reste le même : la zone de commentaires charge toujours un ensemble lourd de scripts tiers, et vos lecteurs sont toujours suivis sur les sites qui l'intègrent. Vous payez pour retirer les annonces, pas pour alléger la section de commentaires ou la rendre plus privée.

## Option 2 : Passez à une plateforme qui ne montre jamais d'annonces

L'autre moyen de supprimer les annonces est d'utiliser une plateforme de commentaires qui ne les exécute pas en premier lieu. :)

Pour seulement 0,99 €/mois, FastComments offre une fonctionnalité optimisée en profondeur sans suivi ni annonces.

## Vous conservez chaque commentaire

La partie qui inquiète le plus les gens est de perdre leur discussion existante. FastComments dispose d'un importateur Disqus intégré qui transfère vos commentaires, noms d'utilisateur, avatars d'utilisateur, images en ligne, votes et horodatages. Nous déplaçons même toutes les images vers notre propre CDN pour vous.

Si vous voulez le guide complet et détaillé, nous avons un guide dédié : [Migrer de Disqus vers FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). La version courte est ci-dessous.

## Comment changer en trois étapes

### 1. Exportez vos commentaires depuis Disqus

Suivez les <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">étapes d'exportation de Disqus</a>. Ils vous enverront un fichier avec une extension "gz". Vous n'avez pas besoin de l'ouvrir ou de le décompresser, et une installation Windows par défaut ne peut pas de toute façon. Notre backend lit ce fichier compressé directement.

### 2. Importez le fichier dans FastComments

Une fois que vous êtes connecté, rendez-vous sur la <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">page d'importation</a>, sélectionnez Disqus dans le menu déroulant, et téléchargez le fichier tel quel. L'importation s'exécute en arrière-plan ; la page se met à jour automatiquement pendant l'exécution pour vous montrer un compte en direct du nombre de commentaires découverts et importés. Il est sans danger de réimporter autant de fois que nécessaire.

### 3. Échangez le snippet Disqus contre le nôtre

Supprimez le code d'intégration Disqus de vos pages et insérez à la place <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">le snippet FastComments</a>. Tant que les URL de vos pages restent les mêmes, vos commentaires importés s'afficheront exactement là où ils étaient.

## Sur WordPress ?

Si votre site fonctionne sous WordPress, sautez les étapes manuelles et installez le <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin FastComments pour WordPress</a>. Il gère l'installation, la configuration et la synchronisation pour vous, puis vous pouvez désactiver Disqus.

## Testez-le avant de vous engager

Vous n'avez pas besoin de tout basculer d'un coup. Vous pouvez faire fonctionner Disqus et FastComments sur la même page temporairement pour comparer l'aspect et la convivialité avant de passer entièrement. Si vous souhaitez un coup de main pour quoi que ce soit, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez-nous</a> et nous vous aiderons.

Vous n'êtes pas sûr du coût de FastComments ? Chaque plan est sans publicité, et vous pouvez vérifier votre montant sur le <a href="https://fastcomments.com/pricing-calculator" target="_blank">calculateur de prix</a>. Si vous êtes dans l'UE, vous pouvez créer votre compte sur <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> afin que vos données restent dans l'UE.

## Récapitulatif

1. Exportez vos données depuis Disqus
2. Importez-les dans FastComments
3. Échangez le snippet Disqus contre <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">celui de FastComments</a>

C'est tout. Pas d'annonces dans votre section de commentaires, des pages plus légères, et chaque commentaire que vous aviez déjà.

À la vôtre !

{{/isPost}}