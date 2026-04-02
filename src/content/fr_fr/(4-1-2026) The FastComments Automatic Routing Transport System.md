---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Le Système de Transport à Routage Automatique de FastComments[/postlink]

{{#unless isPost}}
Introduction du Système de Transport à Routage Automatique de FastComments !
{{/unless}}

{{#isPost}}

## Introduction

Le Système de Transport à Routage Automatique de FastComments (FARTS) est notre couche de transport et de service. FARTS aide à gérer la congestion, en routant le trafic en fonction de la localisation de l'utilisateur et potentiellement de la charge à l'avenir. Il se compose de plusieurs systèmes différents, d'une couche DNS géo-consciente, d'un proxy DB, de la réplication DB, de la gestion des certificats SSL, d'un proxy inverse, et d'un CDN qui utilise un cache LRU sur disque pour mettre en cache les actifs à la périphérie.

## Actif-Actif

La dernière version de FART contient un proxy intégré et une couche de réplication pour notre base de données. Cela permet à FastComments d'être Actif-Actif avec une disponibilité d'écriture globale, ce qui garantit que nos FARTS sont finalement cohérents. [Plus de détails ici](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Une approche que nous avons effectivement adoptée dès le début était de voir si nous pouvions créer un fork actif-actif de MongoDB. L'un de nos ingénieurs (Sloperators) a réussi à réaliser cela avec Opus 4.6, cependant, nous avons décidé que le risque de le faire était plus élevé que de construire notre propre système isolé.

## Rust à Grande Échelle

Une partie de la motivation pour créer FART était de remplacer certains services existants écrits en Java. Après y avoir réfléchi un moment, nous avons décidé de consolider ces services en un seul service Rust pour réduire la surcharge d'exécution. C'était un compromis acceptable puisque nous ne déployons pas FART souvent. FART est compilé avec LTO, donc nous pouvons vraiment le laisser s'exprimer.

Nous avions passé beaucoup de temps à essayer de régler l'ancien système Java avec différents GC, etc., et finalement, nous avons simplement décidé que Rust asynchrone + Mimalloc performait de manière significativement meilleure sur le même matériel avec des besoins en mémoire beaucoup plus faibles, donc le passage était une évidence.

Rust s'est révélé vraiment excellent pour le code lié au réseau qui utilise des tas partagés et des verrous. Cependant, il n'est pas imperméable aux problèmes d'exécution. Il vaut peut-être la peine de mentionner que le code écrit par des LLM en Rust est assez sujet aux interblocages, et une solution consiste à concevoir des systèmes comme des machines d'état faciles à comprendre, au lieu de simplement des tas d'asynchrone/attente.

## Le Maître FART

Chaque déploiement contient son propre Maître FART. Le maître est responsable de l'orchestration des crons, des webhooks, et ainsi de suite.

## Impact sur les Clients

Le système FART est en production depuis environ un an maintenant. Ce n'est que récemment que nous avons effectué la migration vers le déploiement Actif-Actif. Il y a un certain impact lors de la lecture de vos propres écritures à travers les régions, ce qui est couvert dans l'article de blog lié ci-dessus et [dans la documentation](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART fonctionne tranquillement en arrière-plan, bien que sa présence soit toujours ressentie. Nous espérons que vous trouverez nos systèmes plus rapides pour vos cas d'utilisation (principalement les actions des utilisateurs qui entraînent des modifications des données seront plus rapides dans certaines régions).

## Déploiements

Le déploiement utilise le même système d'orchestration global que nous utilisons pour déployer les services eux-mêmes. La documentation de FART recommande aux Sloperators de ne jamais faire confiance à un déploiement, de toujours vérifier la charge utile avant la mise en production.

Les alertes de post-déploiement FART suivent une politique d'escalade : d'abord la salle, puis l'étage, puis le bâtiment.

## En Conclusion

On dit qu'Internet est une série de tubes, mais c'est en réalité une série de pets.

Comme pour toutes les grandes mises à jour, nous sommes ravis d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement ce changement. Nous sommes impatients de voir ce qui arrive à l'avenir. FastComments devrait mieux évoluer et avoir un meilleur temps de fonctionnement à long terme avec ce travail. Comme le dit le manuel d'exécution FART : "Si vous sentez quelque chose, dites-le". Faites-le nous savoir ci-dessous si vous découvrez des problèmes.

{{/isPost}}

---