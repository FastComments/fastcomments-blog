---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Le système de transport automatique de routage de FastComments[/postlink]

{{#unless isPost}}
Présentation du système de transport automatique de routage de FastComments !
{{/unless}}

{{#isPost}}

## Introduction

Le système de transport automatique de routage de FastComments (FARTS) est notre couche de transport et de service. FARTS aide à la congestion, en
routant le trafic en fonction de l'emplacement de l'utilisateur et potentiellement de la charge à l'avenir. Il se compose de plusieurs systèmes différents, une couche DNS géo-consciente, un proxy de base de données, la réplication de base de données, la gestion des certificats SSL, un proxy inverse, et un CDN qui utilise un cache LRU sur disque pour mettre en cache les actifs à la périphérie.

## Actif-Actif

La dernière version de FART contient un proxy intégré et une couche de réplication pour notre base de données. Cela permet à FastComments d'être Actif-Actif avec une disponibilité d'écriture globale, ce qui garantit que nos FARTS sont finalement cohérents. [Plus de détails ici](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Une approche que nous avons réellement adoptée au début était de voir si nous pouvions créer un fork actif-actif de MongoDB. Un de nos ingénieurs (Sloperators) a pu réaliser cela avec Opus 4.6, cependant, nous avons décidé que le risque de faire cela était plus élevé que de construire notre propre système isolé.

## Rust à grande échelle

Une partie de la motivation pour créer FART était de remplacer certains services existants écrits en Java. Après y avoir réfléchi un certain temps, nous avons décidé de les consolider en un seul service Rust pour réduire les frais généraux d'exécution. C'était un compromis acceptable puisque nous ne déployons pas FART souvent. FART est compilé avec LTO, donc nous pouvons vraiment le laisser s'exprimer.

Nous avions passé beaucoup de temps à essayer de régler l'ancien système Java avec différents GC, etc., et avons finalement décidé que Rust asynchrone + Mimalloc fonctionnait
significativement mieux sur le même matériel avec des exigences de mémoire beaucoup plus faibles, donc le passage à Rust était évident.

Rust s'est avéré vraiment excellent pour le code lié au réseau qui utilise des tas partagés et des verrous. Cependant, il n'est pas imperméable aux problèmes d'exécution.
Il vaut peut-être la peine de dire que le code écrit par des LLMs en Rust est assez sujet aux interblocages, et une façon de contourner cela est de concevoir des systèmes comme des machines d'état faciles à comprendre, au lieu de simples tas d'async/await.

## Le maître FART

Chaque déploiement contient son propre maître FART. Le maître est responsable de l'orchestration des cron, des webhooks, et ainsi de suite.

## Impact sur les clients

Le système FART est en production depuis environ un an maintenant. Ce n'est que récemment que nous avons effectué la migration vers le déploiement Actif-Actif.
Il y a un impact pour lire vos propres écritures à travers les régions, ce qui est couvert dans le blog lié ci-dessus et [dans la documentation](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART fonctionne discrètement en arrière-plan, bien que sa présence soit toujours ressentie. Nous espérons que vous trouverez nos systèmes plus rapides pour vos cas d'utilisation (principalement, les actions des utilisateurs qui entraînent des changements de données seront plus rapides dans certaines régions).

## Déploiements

Le déploiement utilise le même système d'orchestration global que nous utilisons pour déployer les services eux-mêmes. La documentation de FART recommande aux Sloperators de ne jamais faire confiance à un déploiement, toujours vérifier la charge utile avant de libérer.

Après le déploiement, les alertes FART suivent une politique d'escalade : d'abord la salle, ensuite l'étage, puis le bâtiment.

## En conclusion

Ils disent qu'Internet est une série de tubes, mais c'est en réalité une série de toots.

Comme toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et bien libérer ce changement. Nous sommes impatients de ce qui arrive bientôt.
FastComments devrait mieux évoluer et avoir un meilleur temps de disponibilité à long terme grâce à ce travail. Comme le dit le manuel d'exécution FART : "Si vous sentez quelque chose, dites quelque chose". Faites-nous savoir ci-dessous si vous découvrez des problèmes.

{{/isPost}}

---