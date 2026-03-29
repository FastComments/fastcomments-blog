---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments est prêt pour l'espace ![/postlink]

{{#unless isPost}}
Nous avons terminé notre migration de base de données active-active, apportant une véritable redondance multi-régionale à FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de neuf

Chaque [point de présence](https://sophon.fastcomments.com/) de FastComments prend désormais les écritures localement et les réplique de manière asynchrone
vers tous les autres nœuds. Cela fournira une durabilité accrue par rapport au système précédent, tout en rendant les outils de modération plus rapides
pour les utilisateurs dans certaines régions, avec quelques compromis.

"Prêt pour l'espace" est un peu optimiste, mais l'idée est que nous pourrions déployer FastComments sur différentes planètes et finalement le système serait synchronisé. Les utilisateurs sur Pluton, cependant, devraient attendre environ un jour pour voir les changements se refléter sur leur page de facture à venir, car actuellement un seul
maître par région peut agréger les informations de facturation.

### Quelques antécédents, pourquoi le changement

Lorsque FastComments a été lancé, nous avions une architecture très typique. Nous avions une couche de proxy, une couche d'application, une base de données, quelques répliques, puis plus tard des répliques à travers les régions et les fournisseurs de cloud pour une redondance supplémentaire.

Finalement, nous avons déplacé les répliques de la base de données vers toutes les zones où se trouvent la plupart de nos utilisateurs et avons également déployé l'application là-bas, et créé notre propre DNS et système de proxy (décrit dans un post de blog ultérieur) pour acheminer les demandes vers le nœud d'application le plus proche. Cela rend les lectures rapides, mais les écritures plus lentes, car maintenant au lieu d'attendre un aller-retour HTTP vers le backend, vous attendez un aller-retour HTTP vers un nœud proche, et ce nœud pourrait faire plusieurs écritures de base de données vers le primaire. Pas idéal !

Donc, pour combattre cela, nous avons restructuré de nombreuses zones de l'application pour prendre un `readPreference` dans les arguments de fonction, afin que les appelants puissent décider du degré de fraîcheur acceptable pour leurs lectures, et en plus de cela, avons rendu plus d'écritures (comme l'écriture des statistiques des modérateurs sur les actions des modérateurs) en mode fire-and-forget. Pas idéal, mais cela a considérablement accéléré les choses.

Un problème rencontré en faisant fonctionner Mongo à l'échelle mondiale sont les coupures de réseau. Si suffisamment de nœuds sont coupés, les lectures s'arrêtent car chaque nœud devient incertain sur le fait qu'il est acceptable de servir des lectures. Il existe des solutions, mais les cas extrêmes deviennent compliqués. Ce n'est pas un problème théorique - cela s'est produit suffisamment de fois, provoquant des alertes à 3 heures du matin, que nous en avons eu assez, même en essayant d'ajuster Mongo pour être à l'aise avec l'incertitude de l'élection du replicaset jusqu'à une minute d'écart. Malheureusement, les réseaux de Sao Paulo à Falkenstein, par exemple, n'étaient tout simplement pas très bons à travers certains de nos fournisseurs d'hébergement. Ajuster le contrôle de congestion et autres a aidé mais n'a pas résolu le problème.

La solution idéale, à condition d'accepter certains compromis, est la capacité à accepter les écritures localement à ce nœud (qui dispose d'un matériel décent, RAID, etc., peu susceptible de tomber en panne) et d'informer l'utilisateur que ses données sont enregistrées. Vous pouvez également, dans ce point de présence, avoir un deuxième nœud comme réplique chaude pour la durabilité.

Nous sommes donc arrivés à cette solution. Oregon, Virginia, Falkenstein, Sao Paulo, Singapour, sont tous leurs propres réplicas et acceptent les écritures. Le déploiement de l'UE (bien que n'ayant que trois PoPs) présente le même comportement.

### Comment ça fonctionne

Une partie de cela est couverte dans la section précédente, mais le TL;DR est que c'est une CRDT légère. Nous avons créé un proxy (en Rust, bien sûr) qui se trouve entre l'application et Mongo et le rend multi-maître. Le proxy est conscient des pairs, gère les checkpoints, la réplication, la surveillance et la synchronisation initiale. C'est un remplacement multi-maître pour le système de réplication de Mongo, y compris pour certaines commandes DDL.

**La différence avec d'autres outils** est que cela **ne suit pas l'oplog**. Suivre l'oplog, ou utiliser des flux de changement, ne fonctionnerait pas, car ils ne montrent que l'état final de l'objet après l'écriture, ce qui rend impossible la gestion des conflits. Vous devez capturer chaque opération `$set`, `$inc` et répliquer cette opération elle-même.

C'est une solution spécifique à un domaine. Elle ne fonctionnerait pas pour tous les produits. Vous pourriez dire que c'est une conception pilotée par le domaine :). Cela fonctionne pour nous car depuis le début, nous ne faisons très attentivement que `$set` les champs que nous changeons sur les documents - nous n'utilisons jamais `replaceOne` de Mongo, par exemple. Même principe avec les compteurs. Vous **ne** faites **jamais** `SET VOTES = 5`. Au lieu de cela, vous écririez `INCREMENT VOTES BY 5`, car cela permet une cohérence éventuelle. Les verrous distribués sont gérés par **les éviter complètement**. Un seul nœud par cluster a un drapeau activé pour exécuter des tâches cron. Bien que cela puisse sembler limité, nous pouvons acheter des serveurs avec des téraoctets de RAM, donc nous pouvons accepter ce compromis pour réduire le risque et la complexité.

### Lire vos propres écritures

Pour les développeurs utilisant l'API, vous devriez être en mesure de lire vos propres écritures comme auparavant (faites un appel API pour créer un commentaire, puis listez les commentaires et voyez la nouvelle entrée dans cette liste). **Le caveat** est que vous ne pouvez pas le faire à travers les régions. Si votre backend fonctionne dans une seule région,
comme us-west, alors vous devriez être en mesure de lire vos propres écritures sauf dans le cas où entre votre écriture et votre lecture, ce nœud tombe en panne **et** votre cache DNS se met à jour pour pointer vers le nœud le plus proche suivant. Tant que cela ne se produit pas, lire vos propres écritures est fiable.

### Tests & La migration

Environ la moitié du code du système est le cadre de test et les tests. Cependant, le lancement a été un peu mouvementé, prenant plus de temps d'arrêt (1h pour l'UE et 20min pour us-global) que prévu, mais nous sommes heureux d'avoir franchi ce cap et vous remercions pour votre patience !

### En conclusion & ce que cela signifie pour vous

FastComments devrait maintenant être plus rapide et plus durable que jamais, et nous pouvons maintenant retourner travailler sur de nouvelles fonctionnalités :)

Cheers !

{{/isPost}}

---