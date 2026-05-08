---
[category:Migration]
###### [postdate]
# [postlink]Migrer d'AnyComment en 2026 vers FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer complètement d'AnyComment vers FastComments en 2026.
{{/unless}}

{{#isPost}}

Nous avons eu de nombreux clients qui se sont renseignés sur la migration d'AnyComment en 2026.

## AnyComment vit à l'intérieur de WordPress

AnyComment est un plugin WordPress. Contrairement aux plateformes autonomes comme Disqus ou Hyvor Talk, il n'exécute pas son propre backend - vos commentaires sont stockés directement dans votre base de données WordPress, dans la même table `wp_comments` utilisée par le cœur de WordPress. C'est une excellente nouvelle pour la migration : il n'y a pas d'exportation AnyComment séparée à gérer, et aucun serveur tiers avec lequel coordonner. Vos données sont déjà sur votre propre serveur.

Cela signifie que le flux de migration standard de FastComments pour WordPress gère AnyComment sans étapes supplémentaires.

## Option 1 : Le plugin FastComments pour WordPress (recommandé)

Le chemin le plus simple est d'installer le <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">plugin FastComments pour WordPress</a>. Le plugin vous guide pour lier votre installation WordPress à FastComments et copie automatiquement vos données de commentaires existantes. Il n'y a rien à télécharger ou à télécharger manuellement. Les données sont copiées de votre base de données WordPress vers nos serveurs, donc cela allégera également la charge de vos serveurs une fois la migration terminée.

La plupart des migrations se terminent en quelques minutes.

Une fois les données transférées, désactivez AnyComment. Les commentaires continueront d'être gérés par FastComments, et le plugin maintient votre base de données WordPress synchronisée en tant que sauvegarde (si vous activez cette fonctionnalité), donc vous possédez toujours vos données.

## Option 2 : Exportation XML de WordPress

Si vous préférez migrer manuellement, ou si vous avez déjà quitté WordPress et que vous avez juste une sauvegarde XML, utilisez l'exportation intégrée de WordPress.

1. Dans votre admin WordPress, allez sur **Outils -> Exporter** et téléchargez le fichier XML.
2. Connectez-vous à votre tableau de bord FastComments et allez <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>.
3. Sélectionnez **WordPress (.xml)** dans le menu déroulant et téléchargez votre fichier.

Puisqu'AnyComment écrit dans `wp_comments`, chaque fil de discussion AnyComment se trouve dans cet XML aux côtés de vos autres commentaires WordPress. L'importateur les associe automatiquement au bon article.

## Remplacer le widget AnyComment

Si vous avez utilisé l'Option 1, le plugin FastComments pour WordPress remplace déjà AnyComment sur votre site - désactivez simplement AnyComment après la fin de la migration.

Si vous avez utilisé l'Option 2 et que vous conservez votre installation WordPress, installez ensuite le plugin FastComments pour gérer le rendu du widget et la synchronisation continue. Si vous quittez complètement WordPress, intégrez notre <a href="https://fastcomments.com/install-wizard" target="_blank">snippet d'installation</a> sur votre nouveau site - nous prenons en charge de nombreux frameworks frontaux que <a href="https://fastcomments.com/install-wizard" target="_blank">vous pouvez trouver ici</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec ça</a>.

## UE

Si vous êtes dans l'UE, vous voudrez probablement créer votre compte sur <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> afin que vos données clients restent dans l'UE.

## Récapitulatif

1. Installez le plugin FastComments pour WordPress et laissez-le copier vos données, **ou** exportez depuis WordPress en tant qu'XML et téléchargez-le sur la page d'importation
2. Désactivez AnyComment
3. Si vous quittez également WordPress, remplacez le code du widget sur votre nouveau site

{{/isPost}}

---