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

Le Système de Transport Automatique de Routage FastComments (FARTS) est notre couche de transport et de service. FARTS aide à la congestion, en
routant le trafic en fonction de l'emplacement de l'utilisateur et potentiellement de la charge dans le futur. Il se compose de plusieurs systèmes différents, d'une couche DNS consciente de la géolocalisation, d'un proxy DB, de réplication DB, de gestion de certificats SSL, de proxy inverse, et d'un CDN qui utilise un cache LRU sur disque pour mettre en cache des actifs à la périphérie.

## Actif-Actif

La dernière version de FART contient un proxy intégré et une couche de réplication pour notre base de données. Cela permet à FastComments d'être actif-actif avec une disponibilité d'écriture globale, ce qui garantit que nos FARTS sont finalement cohérents. [Plus de détails ici](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Une approche que nous avons réellement adoptée au début était de voir si nous pouvions créer un fork actif-actif de MongoDB. Un de nos ingénieurs (Sloperators) a réussi à accomplir cela avec Opus 4.6, cependant, nous avons décidé que le risque de faire cela était plus élevé que de construire notre propre système isolé.

## Rust à Grande Échelle

Une partie de la motivation pour créer FART était de remplacer certains services existants écrits en Java. Après y avoir réfléchi un moment, nous avons décidé de les consolider en un seul service Rust pour réduire la surcharge d'exécution. C'était un compromis acceptable puisque nous ne déployons pas FART souvent. FART est compilé avec LTO, donc nous pouvons vraiment le libérer.

Nous avons passé beaucoup de temps à essayer de régler l'ancien système Java avec différents GC, etc., et finalement, nous avons juste décidé que Rust asynchrone + Mimalloc fonctionnait beaucoup mieux sur le même matériel avec des exigences de mémoire beaucoup plus faibles, donc le changement était évident.

Rust s'est révélé vraiment excellent pour le code lié au réseau qui utilise des tas partagés et des verrous. Cependant, il n'est pas imperméable aux problèmes d'exécution. Il convient peut-être de dire que le code écrit par des LLM en Rust est assez sujet aux blocages, et un moyen d'y remédier est de concevoir des systèmes comme des machines à états faciles à comprendre, au lieu de simples tas d'asynchrone/attente.

## Le Maître FART

Chaque déploiement contient son propre Maître FART. Le maître est responsable de l'orchestration des crons, des webhooks, et ainsi de suite.

## Impact sur le Client

Le système FART est en production depuis environ un an maintenant. Ce n'est que récemment que nous avons effectué la migration vers le déploiement actif-actif. 
Il y a un certain impact pour lire vos propres écritures à travers les régions, ce qui est couvert dans le billet de blog lié ci-dessus et [dans la documentation](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART fonctionne tranquillement en arrière-plan, bien que sa présence soit toujours ressentie. Nous espérons que vous trouverez que nos systèmes sont plus rapides pour vos cas d'utilisation (principalement les actions des utilisateurs qui entraînent des changements de données seront plus rapides dans certaines régions).

## Déploiements

Le déploiement utilise le même système d'orchestration globale que nous utilisons pour déployer les services eux-mêmes. La documentation FART recommande aux Sloperators de ne jamais faire confiance à un déploiement, toujours vérifier la charge utile avant de libérer.

Après le déploiement, les alertes FART suivent une politique d'escalade : d'abord la salle, puis l'étage, puis le bâtiment.

## En Conclusion

On dit qu'Internet est une série de tubes, mais c'est en fait une série de flatulences.

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et publier correctement ce changement. Nous sommes impatients de voir ce qui arrive bientôt. 
FastComments devrait mieux évoluer et avoir un meilleur temps de disponibilité à long terme grâce à ce travail. Comme le dit le manuel d'opérations FART : "Si vous sentez quelque chose, dites quelque chose". Faites-nous savoir ci-dessous si vous découvrez des problèmes.

{{/isPost}}

---