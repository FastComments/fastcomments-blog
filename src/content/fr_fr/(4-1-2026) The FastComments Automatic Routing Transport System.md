---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Le Système de Transport de Routage Automatique FastComments[/postlink]

{{#unless isPost}}
Présentation du Système de Transport de Routage Automatique FastComments !
{{/unless}}

{{#isPost}}

## Introduction

Le Système de Transport de Routage Automatique FastComments (FARTS) est notre couche de transport et de service. FARTS aide à gérer la congestion, en
routant le trafic en fonction de la localisation des utilisateurs et potentiellement de la charge à l'avenir. Il se compose de plusieurs systèmes différents, d'une couche DNS géo-consciente, d'un proxy DB, de la réplication DB, de la gestion des certificats SSL, d'un proxy inverse, et d'un CDN qui utilise un cache LRU sur disque pour mettre en cache les actifs à la périphérie.

## Actif-Actif

La dernière version de FART contient un proxy intégré et une couche de réplication pour notre base de données. Cela permet à FastComments d'être actif-actif 
avec disponibilité d'écriture globale, ce qui garantit que nos FARTS sont éventuellement cohérents. [Plus de détails ici](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Une approche que nous avons réellement adoptée au début était de voir si nous pourrions créer un fork actif-actif de MongoDB. Un de nos ingénieurs (Sloperators) a réussi à accomplir cela avec Opus 4.6, cependant, nous avons décidé que le risque de faire cela était plus élevé que de construire notre propre système isolé.

## Rust à Grande Échelle

Une partie de la motivation pour créer FART était de remplacer certains services existants écrits en Java. Après y avoir réfléchi un moment, nous avons décidé de consolider ceux-ci en un seul service Rust pour réduire la surcharge d'exécution. Cela était un compromis acceptable puisque nous ne déployons pas FART souvent. FART est compilé avec LTO, donc nous pouvons vraiment le faire fonctionner à plein régime.

Nous avons passé beaucoup de temps à essayer d'optimiser l'ancien système Java avec différents GC, etc., et nous avons finalement décidé que Rust asynchrone + Mimalloc performait de manière significativement
meilleure sur le même matériel avec des exigences mémoire beaucoup plus faibles, donc le passage à Rust était une évidence.

Rust s'est avéré vraiment excellent pour le code lié au réseau qui utilise des tas partagés et des verrouillages. Il n'est cependant pas imperméable aux problèmes d'exécution.
Il vaut peut-être la peine de préciser que le code écrit par des LLM en Rust est assez sujet aux blocages, et une façon d'y remédier est de concevoir des systèmes comme des machines à états faciles à comprendre, au lieu de simples piles d'async/await.

## Le Maître FART

Chaque déploiement contient son propre Maître FART. Le maître est responsable de l'orchestration des tâches cron, des webhooks, etc.

## Impact Client

Le système FART est en production depuis environ un an maintenant. Ce n'est que récemment que nous avons effectué la migration vers le déploiement actif-actif.
Il y a un certain impact pour lire vos propres écritures à travers les régions, ce qui est couvert dans le billet de blog mentionné ci-dessus et [dans la documentation](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART fonctionne discrètement en arrière-plan, bien que sa présence se fasse toujours sentir. Nous espérons que vous trouverez nos systèmes plus rapides pour vos cas d'utilisation (principalement des actions utilisateur qui entraînent des modifications de données seront plus rapides dans certaines régions).

## Déploiements

Le déploiement utilise le même système d'orchestration globale que nous utilisons pour déployer les services eux-mêmes. La documentation FART recommande aux Sloperators de ne jamais faire confiance à un déploiement, toujours vérifier la charge avant de libérer.

Après le déploiement, les alertes FART suivent une politique d'escalade : d'abord la salle, puis l'étage, puis le bâtiment.

## En Conclusion

On dit qu'Internet est une série de tubes, mais en fait c'est une série de toots.

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de relâcher correctement ce changement. Nous sommes impatients de voir ce qui arrive dans le pipeline.
FastComments devrait mieux évoluer et avoir une meilleure disponibilité à long terme grâce à ce travail. Comme le dit le manuel d'exploitation de FART : "Si vous sentez quelque chose, dites quelque chose". Faites-nous savoir ci-dessous si vous découvrez des problèmes.

{{/isPost}}

---