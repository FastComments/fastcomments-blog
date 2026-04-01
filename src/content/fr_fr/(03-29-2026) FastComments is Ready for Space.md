---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments est prêt pour l'espace ![/postlink]

{{#unless isPost}}
Nous avons terminé notre migration de base de données active-active, apportant une véritable redondance multi-régionale à FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

### Quoi de Neuf

Chaque [point de présence](https://sophon.fastcomments.com/) de FastComments prend désormais les écritures localement et les réplique de manière asynchrone vers tous les autres nœuds. Cela fournira une durabilité accrue par rapport au système précédent, tout en rendant les outils de modération plus rapides pour les utilisateurs dans certaines régions, avec quelques compromis.

"Prêt pour l'espace" est un peu optimiste, mais l'idée est que nous pourrions déployer FastComments sur différentes planètes et que, finalement, le système se synchroniserait. Les utilisateurs sur Pluton, cependant, devraient attendre environ un jour pour voir les changements se refléter sur leur page de facturation à venir, car actuellement, un seul maître par région peut agréger les informations de facturation.

### Un Peu d'Histoire, Pourquoi le Changement

Lorsque FastComments a été lancé à l'origine, nous avions une architecture très classique. Nous avions une couche de proxy, une couche d'application, une base de données, quelques répliques, puis plus tard des répliques à travers les régions et les fournisseurs de cloud pour plus de redondance.

Finalement, nous avons déplacé les répliques de DB vers toutes les zones où se trouvent la plupart de nos utilisateurs et avons également déployé l'application là-bas, et créé notre propre système DNS et proxy (décrit dans un article de blog ultérieur) pour acheminer les demandes vers le nœud d'application le plus proche. Cela rend les lectures rapides, mais les écritures plus lentes, car maintenant au lieu d'attendre un tour de voyage HTTP vers le backend, vous attendez un tour de voyage HTTP vers un nœud proche, et ce nœud peut faire plusieurs écritures dans la base de données vers le primaire. Pas idéal !

Pour lutter contre cela, nous avons restructuré de nombreux domaines de l'application pour prendre un `readPreference` dans les arguments de fonction, afin que les appelants puissent décider à quel point ils sont d'accord de voir leurs lectures obsolètes, et en plus de cela, nous avons fait en sorte que plus d'écritures (comme l'écriture des statistiques des modérateurs sur les actions des modérateurs) soient des opérations de type fire-and-forget. Pas idéal, mais cela a considérablement accéléré les choses.

Un problème que nous avons rencontré en faisant fonctionner Mongo à l'échelle mondiale est les coupures réseau. Si suffisamment de nœuds sont coupés, les lectures s'arrêtent car chaque nœud devient incertain s'il est acceptable de servir des lectures. Il existe des moyens de contourner cela, mais les cas limites deviennent compliqués. Ce n'est pas un problème théorique - cela s'est produit suffisamment de fois, causant des alertes à 3h du matin, que nous en avons eu assez, même en essayant d'ajuster Mongo pour accepter l'incertitude des élections de réplica pendant jusqu'à une minute d'intervalle. Malheureusement, les réseaux de São Paulo à Falkenstein, par exemple, n'étaient tout simplement pas très bons chez certains de nos fournisseurs d'hébergement. L'ajustement du contrôle de congestion et autres a aidé mais n'a pas résolu le problème.

La solution idéale, à condition que vous soyez d'accord avec certains compromis, est la capacité d'accepter les écritures localement sur ce nœud (qui dispose d'un bon matériel, d'un RAID, etc., peu susceptible de tomber en panne) et d'informer l'utilisateur que ses données sont sauvegardées. Vous pouvez également avoir à ce point de présence un second nœud comme réplique chaude pour la durabilité.

C'est donc ce que nous avons terminé. L'Oregon, la Virginie, Falkenstein, São Paulo, Singapour sont tous leurs propres ensembles de réplicas et acceptent des écritures. Le déploiement de l'UE (bien qu'il n'ait que trois points de présence) a le même comportement.

### Comment Cela Fonctionne

Une partie de cela est couverte dans la section précédente, mais en résumé, c'est du CRDT-lite. Nous avons créé un proxy (en Rust, bien sûr) qui se place entre l'application et Mongo et le rend multi-maître. Le proxy est conscient des pairs, gère les points de contrôle, la réplication, la surveillance et la synchronisation initiale. C'est un remplacement multi-maître pour le système de réplication de Mongo, y compris pour certaines commandes DDL.

**La différence avec d'autres outils** est que cela **ne suit pas l'oplog**. Suivre l'oplog, ou utiliser des flux de modification, ne fonctionnerait pas, car ils ne montrent que l'état final de l'objet après l'écriture, rendant impossible la gestion des conflits. Vous devez capturer chaque opération `$set`, `$inc` et répliquer cette opération elle-même.

C'est une solution spécifique au domaine. Elle ne fonctionnerait pas pour tous les produits. On pourrait dire que c'est une conception axée sur le domaine :). Cela fonctionne pour nous car, depuis le début, nous ne faisons très soigneusement que `$set` les champs que nous changeons sur les documents - nous n'utilisons jamais `replaceOne` de Mongo, par exemple. Même chose pour les compteurs. Vous **ne** faites **jamais** `SET VOTES = 5`. Au lieu de cela, vous écririez `INCREMENT VOTES BY 5`, car cela permet une consistance éventuelle. Les verrous distribués sont gérés par **ne pas**. Un seul nœud par cluster a un indicateur configuré pour exécuter des tâches planifiées. Bien que cela puisse sembler limité, nous pouvons acheter des serveurs avec des téraoctets de RAM, nous pouvons donc faire ce compromis pour réduire le risque et la complexité.

### Lire Vos Propres Écritures

Pour les développeurs utilisant l'API, vous devriez être en mesure de lire vos propres écritures comme auparavant (effectuer un appel API pour créer un commentaire, puis lister les commentaires et voir la nouvelle entrée dans cette liste). **L'exception** est que vous ne pouvez pas le faire à travers les régions. Si votre backend fonctionne dans une seule région, 
comme us-west, alors vous devriez pouvoir lire vos propres écritures, sauf dans le cas où, entre votre écriture et votre lecture, ce nœud tombe en panne **et** votre cache DNS se met à jour pour pointer vers le nœud le plus proche suivant. À condition que cela ne se produise pas, lire vos propres écritures est fiable.

[Vous pouvez également choisir quel point de présence vous utilisez. Plus d'informations ici.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Tests & La Migration

Environ la moitié du code dans le système est l'infrastructure de test, le cadre et les tests. Pourtant, la sortie a été un peu cahoteuse, prenant plus de temps d'arrêt (1 heure pour l'UE et 20 minutes pour le monde entier) que prévu, mais nous sommes heureux d'avoir franchi ce cap et vous remercions de votre patience !

### En Conclusion & Ce Que Cela Signifie Pour Vous

FastComments devrait maintenant être plus rapide et plus durable que jamais, et nous pouvons maintenant revenir à travailler sur des fonctionnalités :)

Cheers!

{{/isPost}}

---