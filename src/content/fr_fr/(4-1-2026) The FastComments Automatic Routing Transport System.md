---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Le Système de Transport Automatique de Routage FastComments[/postlink]

{{#unless isPost}}
Présentation du Système de Transport Automatique de Routage FastComments !
{{/unless}}

{{#isPost}}

## Introduction

Le Système de Transport Automatique de Routage FastComments (FARTS) est notre couche de transport et de service. Les FART aident à gérer la congestion, à router le trafic en fonction de la position des utilisateurs et potentiellement de la charge à l'avenir. Il se compose de plusieurs systèmes différents, d'une couche DNS géo-consciente, d'un proxy DB, de la réplication DB, de la gestion des certificats SSL, d'un proxy inverse et d'un CDN qui utilise un cache LRU sur disque pour mettre en cache les actifs en périphérie. Le système supporte à la fois les modes de basculement silencieux et bruyants. Le mode silencieux est préféré en production.

## Actif-Actif

La dernière version de FART contient un proxy intégré et une couche de réplication pour notre base de données. Cela permet à FastComments d'être en mode Actif-Actif avec une disponibilité d'écriture mondiale, ce qui permet à nos FARTS d'être éventuellement cohérents. [Plus de détails ici](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Une des approches que nous avons réellement adoptées au début était de voir si nous pouvions créer un fork de MongoDB. Un de nos ingénieurs (Sloperators) a réussi à le faire avec Opus 4.6, cependant nous avons décidé que le risque de faire cela était plus élevé que de construire notre propre système isolé.

La dernière chose que vous voudriez avec quelque chose comme FART, c'est de savoir qu'il est arrivé, mais que vous ne pouvez pas tracer la source. Nous avons ajouté des outils de surveillance et des diagnostics pour surveiller la réplication active-active à un niveau granulaire.

## Rust à Grande Échelle

Une partie de la motivation pour créer FART était de remplacer certains services existants écrits en Java. Après y avoir réfléchi pendant un certain temps, nous avons décidé de consolider ceux-ci en un seul service Rust pour réduire les frais généraux d'exécution. C'était un compromis acceptable puisque nous ne déployons pas FART souvent. FART est compilé avec LTO, donc nous pouvons vraiment le faire fonctionner.

Nous avions passé beaucoup de temps à essayer d'optimiser l'ancien système Java avec différents GC, etc., et finalement, nous avons simplement décidé que le Rust asynchrone + Mimalloc performait significativement mieux sur le même matériel avec des exigences mémoire beaucoup plus faibles, donc le changement était une évidence.

## Le Maître FART

Chaque déploiement contient son propre Maître FART. Le maître est responsable de l'orchestration des crons, des webhooks, et ainsi de suite.

## Impact sur les Clients

Le système FART est en production depuis environ un an maintenant. Ce n'est que récemment que nous avons effectué la migration vers le déploiement Actif-Actif. Le nouveau système nous donne une visibilité accrue sur la latence à travers le système, ainsi qu'un coût de maintenance réduit afin que nous puissions maintenant passer plus de temps sur les fonctionnalités.

FART fonctionne discrètement en arrière-plan, bien que sa présence se fasse toujours sentir. Nous espérons que vous trouvez nos systèmes plus rapides pour vos cas d'utilisation (principalement, les actions des utilisateurs qui entraînent des modifications de données seront plus rapides dans certaines régions).

## Déploiements

Le déploiement utilise le même système d'orchestration global que nous utilisons pour déployer les services eux-mêmes. La documentation FARTS recommande aux sloperators de ne jamais faire confiance à un déploiement, de toujours vérifier le contenu avant la publication.

Après le déploiement, les alertes FART suivent une politique d'escalade : d'abord la salle, ensuite l'étage, puis le bâtiment.

## En Conclusion

Comme pour toutes les grandes versions, nous sommes ravis d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement ce changement. Nous sommes impatients de voir ce qui arrive dans le pipeline. FastComments devrait mieux évoluer et avoir un meilleur temps de disponibilité à long terme avec ce travail. Comme le dit le manuel d'exploitation de FART : "Si vous sentez quelque chose, dites quelque chose". Faites-nous savoir ci-dessous si vous découvrez des problèmes.

{{/isPost}}

---