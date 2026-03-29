---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments est prêt pour l'espace ![/postlink]

{{#unless isPost}}
Nous avons terminé notre migration de base de données active-active, apportant une véritable redondance multi-régions à FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de neuf

Chaque [point de présence](https://sophon.fastcomments.com/) de FastComments prend maintenant des écritures localement et les réplique de manière asynchrone vers tous les autres nœuds. Cela fournira une durabilité accrue par rapport au système précédent, tout en rendant les outils de modération plus rapides pour les utilisateurs de certaines régions, avec quelques compromis.

"Prêt pour l'espace" est un peu optimiste, mais l'idée est que nous pourrions déployer FastComments sur différentes planètes et, finalement, le système serait synchronisé. Les utilisateurs sur Pluton, cependant, devraient attendre environ un jour pour voir les modifications se refléter sur leur page de facture à venir, car actuellement, un seul maître par région peut agréger les informations de facturation.

### Un peu d'histoire, pourquoi ce changement

Lorsque FastComments a été lancé à l'origine, nous avions une architecture très typique. Nous avions une couche de proxy, une couche d'application, une base de données, quelques répliques, puis plus tard des répliques à travers les régions et les fournisseurs de cloud pour une redondance supplémentaire.

Finalement, nous avons déplacé les répliques de la base de données vers toutes les zones où se trouvent la plupart de nos utilisateurs et avons également déployé l'application là-bas, puis créé notre propre système DNS et proxy (décrit dans un article de blog ultérieur) pour acheminer les demandes vers le nœud d'application le plus proche. Cela rend les lectures rapides, mais les écritures plus lentes, car au lieu d'attendre un aller-retour HTTP vers le backend, vous attendez un aller-retour HTTP vers un nœud proche, et ce nœud pourrait faire plusieurs écritures de base de données vers le principal. Pas idéal !

Pour lutter contre cela, nous avons restructuré de nombreux domaines de l'application pour prendre un `readPreference` dans les arguments de fonction, afin que les appelants puissent décider à quel point ils sont prêts à tolérer des lectures obsolètes, et en plus de cela, nous avons rendu plus d'écritures (comme l'écriture des statistiques de modération lors des actions des modérateurs) en mode fire-and-forget. Pas idéal, mais cela a considérablement accéléré les choses.

Un problème auquel nous avons été confrontés en faisant fonctionner Mongo globalement est les coupures réseau. Si suffisamment de nœuds sont coupés, les lectures s'arrêtent car chaque nœud devient incertain s'il est acceptable de servir des lectures. Il existe quelques solutions à cela, mais les cas extrêmes deviennent compliqués. Ce n'est pas un problème théorique - cela s'est produit suffisamment de fois, provoquant des alertes à 3h du matin, pour que nous en ayons assez, même en essayant d'ajuster Mongo pour qu'il soit acceptable face à l'incertitude de l'élection de replicated set pendant jusqu'à une minute. Malheureusement, les réseaux entre Sao Paulo et Falkenstein, par exemple, n'étaient tout simplement pas très bons à travers certains de nos fournisseurs d'hébergement. Le réglage du contrôle de congestion et d'autres paramètres a aidé mais n'a pas résolu le problème.

La solution idéale, à condition que vous soyez d'accord avec certains compromis, est la possibilité d'accepter les écritures localement à ce nœud (qui dispose d'un matériel décent, RAID, etc., peu susceptible de tomber en panne) et de dire à l'utilisateur que ses données sont enregistrées. Vous pouvez également, à ce point de présence, avoir un second nœud comme une réplique chaude pour la durabilité.

Donc, voilà où nous en sommes. Oregon, Virginie, Falkenstein, Sao Paulo, Singapour, sont tous leurs propres ensembles de répliques et acceptent des écritures. Le déploiement de l'UE (bien qu'avec seulement trois PoPs) a le même comportement.

### Comment ça fonctionne

Une partie de cela est couverte dans la section précédente, mais le TL;DR est que c'est CRDT léger. Nous avons créé un proxy (en Rust, parce que bien sûr) qui se trouve entre l'application et Mongo et le rend multi-maître. Le proxy est conscient des pairs, gère les points de contrôle, la réplication, la surveillance et la synchronisation initiale. C'est un remplacement multi-maître pour le système de réplication de Mongo, y compris pour certains commandes DDL.

**La différence avec d'autres outils** est que cela **ne suit pas l'oplog**. Suivre l'oplog, ou utiliser des flux de changement, ne fonctionnerait pas, car ils ne vous montrent que l'état final de l'objet après l'écriture, rendant impossible la gestion des conflits. Vous devez capturer chaque opération `$set` et `$inc` et répliquer cette opération elle-même.

C'est une solution spécifique à un domaine. Cela ne fonctionnerait pas pour tous les produits. Vous pourriez dire que c'est du design orienté domaine :). Cela fonctionne pour nous parce qu'au début, nous avons très soigneusement uniquement utilisé `$set` pour les champs que nous modifions sur les documents - nous n'utilisons jamais `replaceOne` de Mongo, par exemple. Même chose pour les compteurs. Vous **ne** faites **jamais** `SET VOTES = 5`. Au lieu de cela, vous écririez `INCREMENT VOTES BY 5`, car cela permet une consistance éventuelle. Les verrous distribués sont gérés en **les évitant entièrement**. Un seul nœud par cluster a un drapeau réglé pour exécuter des tâches cron. Bien que cela puisse sembler limité, nous pouvons acheter des serveurs avec des téraoctets de RAM, donc nous pouvons accepter ce compromis pour réduire les risques et la complexité.

### Lire vos propres écritures

Pour les développeurs utilisant l'API, vous devriez être en mesure de lire vos propres écritures comme auparavant (faites un appel API pour créer un commentaire, puis listez les commentaires et voyez la nouvelle entrée dans cette liste). **L'avertissement** est que vous ne pouvez pas faire cela entre les régions. Si votre backend fonctionne dans une seule région, comme us-west, alors vous devriez être capable de lire vos propres écritures, sauf dans le cas où entre votre écriture et votre lecture, ce nœud tombe **et** que votre cache DNS se met à jour pour pointer vers le nœud le plus proche suivant. À condition que cela ne se produise pas, la lecture de vos propres écritures est fiable.

### Tests et migration

Environ la moitié du code du système est l'environnement de test, le cadre et les tests. Cependant, la sortie a été un peu cahoteuse, prenant un temps d'arrêt un peu plus long (1h pour l'UE et 20 minutes pour nous-global) que souhaité, mais nous sommes ravis d'avoir franchi cette étape et vous remercions pour votre patience !

### En conclusion et ce que cela signifie pour vous

FastComments devrait maintenant être plus rapide et plus durable que jamais, et maintenant nous pouvons retourner à travailler sur des fonctionnalités :)

Santé !

{{/isPost}}

---