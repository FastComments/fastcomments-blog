---
[category:Annonces]
[category:Performance]
[category:API & Développement]
###### [postdate]
# [postlink]FastComments Est Maintenant Distribué Globalement[/postlink]

{{#unless isPost}}
FastComments a transitionné vers une nouvelle architecture pour de meilleures performances globales.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Auparavant, FastComments avait une architecture très traditionnelle pour une application web. Nous avions nos serveurs d'application, bases de données et quelques autres services. Cela était
répliqué à travers deux régions (us-west et eu). Si vous étiez en France et souhaitiez voir un fil de commentaires pour un client hébergé dans notre
centre de données global, vos requêtes devaient aller jusqu'à us-west pour obtenir les données de commentaire.

Plus maintenant ! Désormais, les données de commentaires et tous les actifs médias sont répliqués globalement pour les clients dans notre déploiement global, et pour les clients
dans notre déploiement UE, nous avons trois points de présence dans l'UE où les données sont répliquées. Vos requêtes vont vers le nœud le plus proche dans l'UE.

### Comment Cela Fonctionnait Avant

Sauf pour les bases de données qui avaient plusieurs répliques actives à travers les régions et fournisseurs de cloud, tous les services étaient déployés sur une instance par type de service.
Cela signifiait que pour chaque région, nous avions un serveur d'application, un serveur pubsub, et un serveur média. Le plan était de faire évoluer verticalement tant que nous le pouvions
car cela maintenait les choses simples. Écrire du code était facile - vous saviez toujours que vous pouviez "lire vos propres écritures" en accédant à la base de données. L'infrastructure était simple,
mis à part les mises à jour de sécurité qui prenaient une minute d'inactivité.

### Le Problème

Le problème a évidemment commencé lorsque nous avons atteint notre capacité. Ainsi, nous avons optimisé, et puis finalement dû augmenter la taille de l'instance pour ce service.

Cela a commencé à devenir prohibitif en coût sur Linode, où une instance à 144 $ équivaut environ, sur la base de nos tests de passmark, à un nœud OVH à 20 $, et même si
nous changions de fournisseur d'hébergement, nous aurions des points de défaillance uniques partout - et des fournisseurs comme OVH tendent à avoir des temps de résolution plus longs que Linode
pour les problèmes de maintenance.

### RiR :)

Au cours des premières années, les services PubSub et Média chez FastComments étaient écrits en Java. Java a été choisi pour ses performances relativement élevées par rapport à l'effort
fourni, et après des années de réglage du GC, essayant G1GC, Shenandoah, et Z1, nous avons décidé qu'il ne nous fallait plus de Java. La surcharge d'utilisation de la mémoire était
tout simplement trop importante et comme ces services étaient très statiques une fois terminés, les avantages de Java se sont estompés. De plus, ces services devaient faire face
au problème du "thundering herd", ce qui signifiait que la JVM essayait de gérer le trafic de pointe lorsque le JIT n'avait même pas encore été activé. Ces services étaient des candidats
idéaux pour passer à C++ ou Rust.

Rust a été choisi car nous ne sommes pas des experts en C++ et faire une erreur dans le code réseau pourrait exposer les données d'un client à un autre. Rust nous aide à prévenir ce genre de problèmes.

Nous voulions fusionner ces services de toute façon, donc bien que nous aurions pu faire *une autre* passe à les optimiser peut-être avec GraalVM, nous avons décidé de passer à Rust et d'en finir avec cela.

La migration n'a pas été sans problème. Ces services doivent terminer SSL, prendre en charge HTTP 1.1, HTTP/2, etc. Ils font des choses comme gérer de nombreux flux de données en parallèle,
lire des médias à partir d'un cache lru sur disque en périphérie, S3, bases de données, et communiquer dans un maillage. L'écosystème Java, Vertx et Netty, était très bon pour ces choses. Nous poussons l'écosystème des bibliothèques à ses limites, et ne pas avoir beaucoup d'expérience avec les bibliothèques Rust signifie que nous avons subi
quelques essais et erreurs. Cela a causé un peu d'inactivité, et nous nous en excusons.

Nous avons également expérimenté différents gestionnaires de mémoire, nous arrêtant sur mimalloc pour nos serveurs DNS personnalisés et libc pour la couche de transport. Nous ne faisons pas fonctionner Nginx ou Apache, utilisant plutôt notre propre combinaison d'un serveur DNS personnalisé qui route les clients globalement en fonction d'un index mémoire reconstruit chaque semaine à partir de Maxmind et notre couche de transport en Rust qui maintient un maillage
avec les autres instances de transport. Le transport termine SSL, gère le travail de pubsub, et est notre CDN. L'avantage est moins de surcharge lors du transfert de choses entre
les services, et moins de surcharge/abstraction d'infrastructure. L'inconvénient est la visibilité, donc de bonnes métriques sont importantes.

En termes de performances résultantes, les services Rust utilisaient environ 10 à 30 % de la mémoire de ceux en Java, malgré tout notre travail. Je lis des livres comme Java Concurrency in Practice pour le plaisir, donc
bien que je ne sois pas un expert, je connais un ou deux trucs sur l'écriture de services JVM rapides, et il était beaucoup plus facile d'y parvenir avec Rust. De plus, des pics de messages vers de nombreux abonnés
enregistreraient à peine l'utilisation du CPU lorsque les services JVM passeraient 40 % de leur temps dans le GC, malgré l'écriture de notre code plus comme un moteur de jeu et moins
comme votre serveur typique. Je ne peux pas dire que je suis un grand fan de Rust, mais pour des services qui effectuent beaucoup de travail et ne changent pas beaucoup après le développement initial, c'est parfait. Notre logique métier principale
reste en TypeScript.

### La Nouvelle Architecture

La nouvelle architecture n'a plus de nœuds "animaux de compagnie". Au lieu de cela, chaque serveur est un clone complet avec tous les mêmes services et une configuration presque identique. Ils exécutent chacun
le transport, DNS, le serveur d'application, et une copie de la base de données. Tous les nœuds maintiennent un chiffrement de disque complet avec déverrouillage automatique avec Dropbear.

Chaque serveur exécute le transport de routage qui termine les requêtes et les traite soit comme un websocket, soit comme un flux http, soit comme une requête cdn. Ces serveurs se connectent entre eux et un serveur donné fournit une cartographie du réseau global à son serveur DNS local pour indiquer au DNS en temps réel où se trouve chaque nœud actif globalement.

Un des avantages de la nouvelle architecture est la redondance. Si un client d'une région nous sollicite vraiment fortement, les autres régions restent en ligne.

Le code de l'application doit maintenant être très conscient des requêtes qui peuvent atteindre le nœud le plus proche ou celles qui doivent aller à la base de données primaire, qui peut être éloignée. Faire une erreur
peut drastiquement diminuer les performances. Cela signifie également que les écritures de certaines régions peuvent être lentes, et cela nécessite un réglage et une optimisation soigneux. Nous suivons maintenant un modèle en interne
dans le code où toutes les méthodes qui accèdent à la base de données prennent un argument readPreference, afin que les appelants jusqu'au sommet doivent explicitement décider comment interroger.

L'avantage est un très bon évolutivité horizontale pour les lectures. FastComments est très axé sur la lecture, mais nous ne devons pas oublier nos modérateurs ! Les modérateurs travaillent jour après jour à travers le monde 
et nous voulons que leur expérience reste bonne. Dans le cadre de ce déploiement, nous avons travaillé avec quelques-uns d'entre eux pour garantir que les outils de modération restent rapides.

Nous pouvons également sélectionner du matériel sur mesure, ce qui est amusant et gratifiant. Les nouveaux serveurs sont un mélange de boîtiers i5-13500 et Ryzen 5 5600X, et l'UE est sur des Xeons plus anciens. Dans nos benchmarks, tous ces serveurs
étaient beaucoup plus rapides que les serveurs plus coûteux que nous explorions chez d'autres fournisseurs. L'inconvénient est qu'il y a plus de travail de configuration, mais nous avons automatisé cela, ainsi que le suivi SMART des disques pour les pannes, etc.

Faire ce genre de choses signifie que nous pouvons continuer à offrir des prix compétitifs.

### Le Déploiement

Le déploiement au cours des derniers mois alors que nous réécrivons les services et passons à de nouveaux fournisseurs d'hébergement a été cahoteux, nous vous remercions pour votre patience.

Lors du déploiement initial, nos métriques nous ont révélé une augmentation des requêtes prenant plus de 100 ms. Nous essayons de ne pas avoir trop de requêtes prenant aussi longtemps pour quoi que ce soit.

<div class="text-center">
    <div class="sm">Progrès Graduel</div>
    <img src="images/slow-reqs.png" alt="Requêtes Lentes" title="Requêtes Lentes" />
</div>

Nous progressons toujours progressivement pour améliorer la performance dans certaines régions. Merci à tous ceux qui ont fourni des retours jusqu'à présent.

### Considérations Lors de l'Utilisation de l'API

L'API reste fortement cohérente - vous pouvez lire vos propres écritures - pour maintenir la compatibilité ascendante et garder les choses simples pour les développeurs. Pour permettre
aux développeurs de choisir la performance plutôt que la cohérence, nous prévoyons d'exposer le paramètre readPreference. L'avantage est que nous pourrions également offrir une réduction de crédits pour
ces appels API.

Tous les points de terminaison publics, comme pour servir le widget de commentaires public, lisent toujours à partir de la base de données la plus proche (locale) sur ce nœud.

### Pourquoi Ne Pas Juste Utiliser un CDN Ordinaire

Les fils de commentaires ne sont pas statiques, ils sont en direct, et appliquer un flux en direct sur des données statiques obsolètes ne fonctionne pas non plus, car lorsque vous consultez un fil en tant qu'utilisateur anonyme, vous obtenez une "session anonyme". Dans cette session anonyme, vous pouvez faire des choses comme bloquer et signaler d'autres utilisateurs, et vous devez montrer
si l'utilisateur anonyme a aimé un commentaire donné, etc. Les fils de commentaires peuvent également être verrouillés derrière SSO, authentification ou groupes d'utilisateurs. 

Enfin, le genre d’"amélioration progressive" où les données dynamiques sont mappées aux données statiques du CDN vous donne une mauvaise expérience où le contenu saute ou change après quelques secondes.
Nous préférerions ne pas faire cela.

### Qui A Mes Données Maintenant

Vos données ne sont plus stockées sur Linode. Elles sont répliquées en direct entre Hetzner et OVH avec un chiffrement complet du disque, et toute communication entre les serveurs backend
se fait en TLS. Nous maintenons quelques instances Linode légacies pour des proxys de webhook sortants, mais aucune donnée ou média n'est stocké sur Linode.

### En Conclusion

Comme pour tous les grands releases, nous sommes contents d'avoir pu prendre le temps d'optimiser, de tester et de properly release ce changement. FastComments devrait mieux évoluer et avoir
meilleure disponibilité à long terme grâce à ce travail. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

{{/isPost}}

---