---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Est Maintenant Distribué Globalement[/postlink]

{{#unless isPost}}
FastComments a transitionné vers une nouvelle architecture pour de meilleures performances globales.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Auparavant, FastComments avait une architecture très traditionnelle pour une application web. Nous avions nos serveurs d'application, bases de données et quelques autres services. Cela était
répliqué dans deux régions (us-west et eu). Si vous étiez en France et que vous souhaitiez voir un fil de commentaires pour un client hébergé dans notre
centre de données mondial, vos requêtes devaient parcourir tout le chemin jusqu'à us-west pour accéder aux données de commentaire.

Plus maintenant ! Désormais, les données de commentaire et tous les actifs multimédias sont répliqués mondialement pour les clients dans notre déploiement mondial, et pour les clients
dans notre déploiement EU, nous avons trois points de présence dans l'UE où les données sont répliquées. Vos requêtes vont au nœud le plus proche dans l'UE.

### Comment Cela Fonctionnait

Excepté pour les bases de données qui avaient plusieurs répliques en direct à travers les régions et les fournisseurs de cloud, tous les services étaient déployés sur une instance par type de service.
Cela signifiait que pour chaque région, nous avions un serveur d'application, un serveur pubsub, et un serveur multimédia. Le plan était de mettre à l'échelle verticalement tant que nous le pouvions
car cela gardait les choses simples. Écrire du code était facile - vous saviez toujours que vous pouviez "lire vos propres écritures" lorsque vous touchiez la base de données. L'infrastructure était facile,
à l'exception des mises à jour de sécurité qui prenaient une minute d'arrêt.

### Le Problème

Le problème a commencé évidemment lorsque nous atteignions la capacité. Nous devions donc optimiser, et ensuite finalement augmenter la taille d'instance pour ce service.

Cela a commencé à devenir prohibitif en termes de coûts sur Linode, où une instance à 144 $ est à peu près équivalente, basé sur nos tests au passmark, à un nœud OVH à 20 $. Même si
nous changions de fournisseur d'hébergement, nous aurions des points de défaillance uniques un peu partout - et des fournisseurs comme OVH ont tendance à avoir des temps de résolution plus longs que Linode
pour les problèmes de maintenance.

### RiR :)

Pendant les premières années, les services PubSub et Media chez FastComments ont été écrits en Java. Java a été choisi pour sa performance relativement élevée par rapport à l'effort
d'investi, et après des années de réglage du GC, ayant essayé G1GC, Shenandoah, et Z1, nous avons décidé qu'il n'y aurait plus de Java. Le surcoût en utilisation de mémoire était tout simplement trop élevé et puisque ces
services étaient très stagnants une fois achevés, les avantages de Java se sont estompés. De plus, ces services devaient souvent faire face au problème du "thundering herd", ce qui signifiait
que la JVM essayait de gérer un trafic de pointe avant même que le JIT ait été activé. Ces services étaient de parfaits candidats pour passer à C++ ou Rust.

Rust a été choisi puisque nous ne sommes pas des experts en C++ et faire une erreur dans le code réseau pourrait exposer les données d'un client à un autre. Rust nous aide à prévenir ces types de problèmes.

Nous voulions de toute façon consolider ces services, donc bien que nous aurions pu faire *une autre* passe pour les optimiser peut-être avec GraalVM, nous avons décidé de passer à Rust et d'en finir avec cela.

La migration n'a pas été sans problèmes. Ces services doivent terminer SSL, prendre en charge HTTP 1.1, HTTP/2, etc. Ils font des choses comme gérer de nombreux flux de données simultanément,
lire des médias à partir d'un cache lru sur disque, S3, bases de données, et communiquer en maillage. L'écosystème Java, Vertx et Netty, étaient très bons pour ces choses. Nous poussons l'écosystème de bibliothèques à ses limites, et n'ayant pas beaucoup d'expérience avec les bibliothèques Rust cela a entraîné
des essais et des erreurs. Cela a causé quelques temps d'arrêt, et nous nous en excusons.

Nous avons également expérimenté avec différents gestionnaires de mémoire, nous arrêtant sur mimalloc pour nos serveurs DNS personnalisés et libc pour la couche de transport. Nous ne faisons pas fonctionner Nginx ou Apache, mais utilisons plutôt notre propre combinaison d'un serveur DNS personnalisé qui route les clients globalement basé sur un index en mémoire reconstruit chaque semaine à partir de Maxmind et notre couche de transport en Rust qui maintient un maillage
avec les autres instances de transport. Le transport termine SSL, gère le travail pubsub, et est notre CDN. L'avantage de ceci est moins de surcharge lors du déplacement des choses entre
les services, et moins de surcharge d'infrastructure/abstraction. L'inconvénient est la visibilité, donc de bonnes métriques sont importantes.

En termes de performance résultante, les services Rust utilisaient environ 10-30% de la mémoire des services Java, malgré tous nos efforts. Je lis des livres comme Java Concurrency in Practice par amusement, donc
bien que je ne sois pas un expert, je sais une chose ou deux sur l'écriture de services JVM rapides, et cela a été beaucoup plus facile à accomplir avec Rust. De plus, des pics de messages à un grand nombre
d'abonnés n'enregistreraient à peine l'utilisation du CPU alors que les services JVM passeraient 40% de leur temps dans le GC, malgré le fait que nous écrivions notre code plus comme un moteur de jeu et moins
comme votre serveur typique. Je ne peux pas dire que je suis un grand fan de Rust, mais pour des services qui font beaucoup de travail et ne changent pas beaucoup après le développement initial, c'est parfait. Notre logique métier principale
reste en TypeScript.

### La Nouvelle Architecture

La nouvelle architecture n'a plus de nœuds "de compagnie". Au lieu de cela, chaque serveur est un clone complet avec tous les mêmes services et une configuration presque identique. Chacun exécute
le transport, DNS, le serveur d'application, et une copie de la base de données. Tous les nœuds maintiennent le chiffrement intégral du disque avec déverrouillage automatique avec Dropbear.

Chaque serveur exécute le transport de routage qui termine les requêtes et les gère soit comme un websocket, un flux http, ou une demande cdn. Ces serveurs se connectent entre eux et chaque serveur donné fournit une cartographie du réseau global à son serveur DNS local pour indiquer au DNS en temps réel où chaque nœud en direct se trouve globalement.

Un des avantages de la nouvelle architecture est la redondance. Si un client dans une région nous sollicite vraiment fortement, les autres régions restent en ligne.

Le code de l'application doit maintenant être très conscient des requêtes qui peuvent toucher le nœud le plus proche ou lesquelles doivent aller au primaire de la base de données, qui peut être lointain. Faire une erreur
peut drastiquement diminuer la performance. Cela signifie également que les écriture provenant de certaines régions peuvent être lentes, et cela nécessite un réglage et une optimisation minutieux. Nous suivons maintenant un modèle en interne
dans le code où toutes les méthodes qui touchent la base de données prennent un argument readPreference, afin que les appelants jusqu'en haut doivent explicitement décider comment interroger.

L'avantage est un très bon redimensionnement horizontal pour les lectures. FastComments est très lisant, mais nous ne devons pas oublier nos modérateurs ! Les modérateurs travaillent jour après jour dans le monde entier
et nous voulons que leur expérience reste bonne. Dans le cadre de ce déploiement, nous avons travaillé avec quelques-uns d'entre eux pour nous assurer que les outils de modération restent rapides.

Nous pouvons également sélectionner du matériel, ce qui est amusant et gratifiant. Les nouveaux serveurs sont un mélange de boîtiers i5-13500 et Ryzen 5 5600X, et l'UE est sur quelques anciens Xeons. Dans nos benchmarks, tous ces
étaient beaucoup plus rapides que les serveurs plus coûteux que nous explorions chez d'autres fournisseurs. L'inconvénient est qu'il faut plus de travail de configuration, mais nous avons automatisé cela, ainsi que la surveillance de disque SMART pour les pannes, et ainsi de suite.

Faire ce genre de choses signifie que nous pouvons continuer à offrir des prix concurrentiels.

### Le Déploiement

Le déploiement au cours des derniers mois alors que nous réécrivons les services et déménageons vers de nouveaux fournisseurs d'hébergement a été cahoteux, nous vous remercions pour votre patience.

Lors du déploiement initial, nos métriques nous ont montré une augmentation des requêtes prenant > 100ms. Nous essayons de ne pas avoir beaucoup de requêtes prenant autant de temps pour quoi que ce soit.

<div class="text-center">
    <div class="sm">Progrès Progressif</div>
    <img src="images/slow-reqs.png" alt="Requêtes Lentes" title="Requêtes Lentes" />
</div>

Nous faisons encore des progrès progressifs pour améliorer les performances dans certaines régions. Merci à tous ceux qui ont fourni des retours jusqu'à présent.

### Considérations Lors de l'Utilisation de l'API

L'API reste fortement consistante - vous pouvez lire vos propres écritures - pour maintenir la compatibilité ascendante et garder les choses simples pour les développeurs. Pour permettre
aux développeurs de choisir la performance plutôt que la cohérence, nous prévoyons d'exposer le paramètre readPreference. L'avantage est que nous pourrions également offrir une réduction de crédits pour
ces appels API.

Tous les points de terminaison publics, comme pour servir le widget de commentaire public, lisent toujours à partir de la base de données la plus proche (locale) sur ce nœud.

### Pourquoi Ne Pas Juste Utiliser un CDN Normal

Les fils de commentaires ne sont pas statiques, ils sont en direct, et appliquer un flux en direct sur les données statiques obsolètes ne fonctionne pas non plus car lorsque vous consultez un fil en tant qu'utilisateur anonyme, vous obtenez une "session anonyme". Dans cette session anonyme, vous pouvez faire des choses comme bloquer et signaler d'autres utilisateurs, et vous devez montrer
si l'utilisateur anonyme a aimé un commentaire donné, et ainsi de suite. Les fils de commentaires peuvent également être verrouillés derrière SSO, authentification, ou groupes d'utilisateurs. 

Enfin, le genre d'"amélioration progressive" où les données dynamiques sont mappées sur les données statiques du CDN vous donne une mauvaise expérience où le contenu saute ou change après quelques secondes.
Nous préférerions ne pas faire cela.

### Qui A Mes Données Maintenant

Vos données ne sont plus stockées sur Linode. Elles sont répliquées en direct entre Hetzner et OVH avec chiffrement intégral du disque, et toute communication entre serveurs backend
se fait via TLS. Nous maintenons quelques instances Linode héritées pour des proxies de webhook sortants, mais aucune donnée ou média n'est stocké sur Linode.

### En Conclusion

Comme tous les grandes versions, nous sommes contents d'avoir pu prendre le temps d'optimiser, tester, et déployer correctement ce changement. FastComments devrait mieux évoluer et avoir
un meilleur temps de disponibilité à long terme grâce à ce travail. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

{{/isPost}}

---