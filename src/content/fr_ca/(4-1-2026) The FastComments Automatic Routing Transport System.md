---
---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Le Système de Transport Automatique de Routage de FastComments[/postlink]

{{#unless isPost}}
Présentation du Système de Transport Automatique de Routage de FastComments !
{{/unless}}

{{#isPost}}

## Introduction

Le Système de Transport Automatique de Routage de FastComments (FARTS) est notre couche de transport et de service. Les FARTs aident à la congestion, en routant le
trafic en fonction de l'emplacement de l'utilisateur et potentiellement de la charge à l'avenir. Il se compose de plusieurs systèmes différents, d'une couche DNS géo-consciente, d'un proxy DB, de la
réplication DB, de la gestion des certificats SSL, d'un proxy inverse et d'un CDN qui utilise un cache LRU sur disque pour mettre en cache les actifs à la périphérie. Le système prend en charge les modes de basculement silencieux et bruyants.
Le mode silencieux est préféré en production.

## Actif-Actif

La dernière version de FART contient un proxy intégré et une couche de réplication pour notre base de données. Cela permet à FastComments d'être Actif-Actif
avec disponibilité d'écriture globale, ce qui permet à nos FARTS d'être finalement cohérents. [Plus de détails ici](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Une approche que nous avons effectivement adoptée au début a été d'explorer si nous pouvions créer un fork de MongoDB. Un de nos ingénieurs (Sloperators) a réussi à le faire avec Opus 4.6, cependant nous avons décidé que le risque de faire cela était plus élevé que de construire notre propre système isolé.

La dernière chose que vous voudriez avec quelque chose comme FART, c'est de savoir qu'il est arrivé, mais que vous ne pouvez pas tracer la source. Nous avons ajouté une surveillance et des diagnostics
pour surveiller la réplication actif-actif à un niveau granulaire.

## Rust à Grande Échelle

Une partie de la motivation pour créer FART était de remplacer certains services existants écrits en Java. Après y avoir réfléchi un moment, nous avons décidé de consolider ceux-ci en un seul service Rust
pour réduire la surcharge d'exécution. C'était un compromis acceptable puisque nous ne déployons pas souvent FART. FART est compilé avec LTO, donc nous pouvons vraiment lui donner tout son potentiel.

Nous avons passé beaucoup de temps à essayer d'optimiser l'ancien système Java avec différents GC, etc., et finalement nous avons juste décidé que Rust asynchrone + Mimalloc performait significativement
mieux sur le même matériel avec des exigences de mémoire beaucoup plus faibles, donc le changement était une évidence.

## Le Maître FART

Chaque déploiement contient son propre Maître FART. Le maître est responsable d'orchestrer les crons, les webhooks, etc.

## Impact Client

Le système FART est en production depuis environ un an maintenant. Ce n'est que récemment que nous avons effectué la migration vers le déploiement Actif-Actif. Le nouveau
système nous donne une meilleure visibilité sur la latence à travers le système, ainsi qu'un fardeau de maintenance réduit, nous permettant maintenant de passer plus de temps sur les fonctionnalités.

FART fonctionne discrètement en arrière-plan, bien que sa présence soit toujours ressentie. Nous espérons que vous constaterez que nos systèmes sont plus rapides pour vos cas d'utilisation (principalement les actions des utilisateurs qui entraînent des changements de données seront plus rapides dans certaines régions).

## Déploiements

Le déploiement utilise le même système d'orchestration global que nous utilisons pour déployer les services eux-mêmes. La documentation FARTS recommande aux sloperators de ne jamais faire confiance à un déploiement, de toujours vérifier la charge utile avant de la libérer.

Après le déploiement, les alertes FART suivent une politique d'escalade : d'abord la salle, puis l'étage, puis le bâtiment.

## En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et bien libérer ce changement. Nous sommes impatients de ce qui s'en vient.
FastComments devrait mieux évoluer et avoir un meilleur temps de disponibilité à long terme grâce à ce travail. Comme le dit le livre de recettes FART : "Si vous sentez quelque chose, dites quelque chose". Faites-nous savoir ci-dessous si vous découvrez des problèmes.

{{/isPost}}