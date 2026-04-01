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

Chaque [point de présence](https://sophon.fastcomments.com/) FastComments effectue désormais des écritures localement et les réplique de manière asynchrone
vers tous les autres nœuds. Cela fournira une durabilité accrue par rapport au système précédent, tout en rendant les outils de modération plus rapides
pour les utilisateurs de certaines régions, avec quelques compromis.

"Prêt pour l'espace" est un peu optimiste, mais l'idée est que nous pourrions déployer FastComments sur différentes planètes et qu'ultimement le système serait synchronisé. Les utilisateurs sur Pluton, cependant, devraient attendre environ un jour pour voir les changements se refléter sur leur page de facture à venir, car actuellement, un seul
maître par région peut agréger les informations de facturation.

### Un peu d'histoire, pourquoi le changement

Lorsque FastComments a été lancé à l'origine, nous avions une architecture très typique. Nous avions une couche de proxy, une couche d'application, une base de données, quelques répliques, puis plus tard des répliques à travers les régions et les fournisseurs de cloud pour une redondance supplémentaire.

Finalement, nous avons déplacé les répliques de DB vers toutes les zones où se trouvent la plupart de nos utilisateurs et avons également déployé l'application là-bas, et créé notre propre système DNS et de proxy (décrit dans un article de blog ultérieur) pour acheminer les requêtes vers le nœud d'application le plus proche. Cela rend les lectures rapides, mais les écritures plus lentes, car maintenant au lieu d'attendre un aller-retour HTTP vers le backend, vous attendez un aller-retour HTTP vers un nœud proche, et ce nœud peut effectuer plusieurs écritures de base de données vers le primaire. Pas bon !

Pour contrer cela, nous avons re-structuré de nombreuses zones de l'application pour accepter un `readPreference` dans les arguments de fonction, afin que les appelants puissent décider jusqu'où
ils sont à l'aise avec leurs lectures, et en plus de cela, nous avons fait en sorte que plus d'écritures (comme l'écriture des statistiques des modérateurs sur les actions des modérateurs) soient des opérations fire-and-forget. Pas idéal, mais cela a considérablement accéléré les choses.

Un problème rencontré lors de l'exécution de Mongo à l'échelle mondiale est celui des coupures réseau. Si suffisamment de nœuds sont coupés, les lectures s'arrêtent car chaque nœud devient incertain s'il est acceptable de servir des lectures. Il existe certaines façons de contourner cela, mais les cas limites deviennent complexes. Ce n'est pas un problème théorique - cela s'est produit assez souvent, provoquant des pages de 3 h du matin, que nous en avons eu assez, même en essayant d'ajuster Mongo pour qu'il soit d'accord avec l'incertitude d'élection des replicas jusqu'à une minute d'écart. Malheureusement, les réseaux entre Sao Paulo et Falkenstein, par exemple, n'étaient tout simplement pas très bons à travers certains de nos fournisseurs d'hébergement. Ajuster le contrôle de congestion et autre chose a aidé, mais n'a pas résolu le problème.

La solution idéale, à condition que vous soyez d'accord avec certains compromis, est la capacité d'accepter les écritures localement sur ce nœud (qui a du matériel décent, RAID, etc., qui est peu susceptible de lâcher) et de dire à l'utilisateur que ses données sont enregistrées. Vous pouvez également dans ce point de présence avoir un second nœud en tant que réplique chaude pour la durabilité.

C'est donc ce vers quoi nous sommes arrivés. L'Oregon, la Virginie, Falkenstein, Sao Paulo, Singapour, sont toutes leurs propres ensembles de répliques et acceptent des écritures. Le déploiement de l'UE
(bien qu'avec seulement trois PoPs) a le même comportement.

### Comment ça fonctionne

Une partie de cela est couverte dans la section précédente, mais en résumé, c'est comme un CRDT léger. Nous avons créé un proxy (en Rust, bien sûr) qui se trouve entre l'application et Mongo et le rend multi-maître. Le proxy est conscient de ses pairs, gère les points de contrôle, la réplication, la surveillance et la synchronisation initiale. C'est un remplacement multi-maître pour le système de réplication de Mongo, y compris pour certaines commandes DDL.

**La différence avec d'autres outils** est que cela **ne suit pas l'oplog**. Suivre l'oplog, ou utiliser des flux de changements, ne fonctionnerait pas, car ils ne vous montrent que l'état final de l'objet après l'écriture, rendant impossible la gestion des conflits. Vous devez capturer
chaque opération `$set`, `$inc` et répliquer cette opération elle-même.

C'est une solution spécifique au domaine. Cela ne fonctionnerait pas pour tous les produits. On pourrait dire que c'est une conception axée sur le domaine :). Cela fonctionne pour nous car depuis le début, nous avons très soigneusement utilisé `$set` uniquement sur les champs que nous changeons dans les documents - nous n’utilisons jamais `replaceOne` de Mongo, par exemple. Même chose avec les compteurs. Vous **ne** faites jamais `SET VOTES = 5`. Au lieu de cela, vous écririez `INCREMENT VOTES BY 5`, car cela permet une consistance éventuelle. Les verrous distribués sont gérés par **ne pas**. Un seul nœud
par cluster a un drapeau défini pour exécuter des cron. Bien que cela puisse sembler limité, nous pouvons acheter des serveurs avec des téraoctets de RAM, donc nous pouvons faire ce compromis pour réduire les risques et la complexité.

### Lire vos propres écritures

Pour les développeurs utilisant l'API, vous devriez être capable de lire vos propres écritures comme avant (effectuez un appel API pour créer un commentaire, puis listez les commentaires et voyez la nouvelle entrée dans cette liste). **L'avertissement** est que vous ne pouvez pas le faire entre les régions. Si votre backend s'exécute dans une seule région,
comme us-west, alors vous devriez pouvoir lire vos propres écritures, sauf dans le cas où entre votre écriture et votre lecture, ce nœud tombe en panne **et** votre
cache DNS se met à jour pour pointer vers le nœud suivant le plus proche. À condition que cela ne se produise pas, lire vos propres écritures est fiable.

[Vous pouvez également choisir quel point de présence vous atteignez. Plus d'informations ici.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Test et migration

Environ la moitié du code dans le système est le cadre de test, le cadre et les tests. Néanmoins, la sortie a été un peu cahoteuse, prenant un temps d'arrêt plus long (1 heure pour l'UE et 20 minutes pour le monde us) que désiré, mais nous sommes contents d'avoir passé ce cap et merci de votre patience !

### En conclusion & ce que cela signifie pour vous

FastComments devrait maintenant être plus rapide et plus durable que jamais, et nous pouvons maintenant retourner à la création de fonctionnalités :)

À votre santé !

{{/isPost}}

---