---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]SDKs de client générés et typés maintenant disponibles[/postlink]

{{#unless isPost}}
Comme mentionné dans notre article sur la migration vers TypeScript, nous avons publié des SDKs de client générés et typés pour dix langages de programmation.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de Neuf

Dans notre [article sur la migration vers TypeScript](/blog/fastcomments-typescript-migration-completed), nous avons mentionné que des SDKs de client générés allaient arriver. Ils sont là.

FastComments propose maintenant des SDKs officiels et typés pour **dix langages** :

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (modules Go)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Chaque SDK est généré à partir de la même spécification OpenAPI que produit notre serveur. Les types, les signatures de méthode et les modèles de requête/réponse restent synchronisés avec l'API réelle automatiquement. Votre compilateur détecte les erreurs de frappe dans les noms de champs et les paramètres manquants avant que votre code ne fasse une requête réseau.

### Comment ça Fonctionne

La migration vers TypeScript était une condition préalable à cela. Maintenant que notre code serveur est entièrement typé, nous utilisons [notre fork de TSOA](https://github.com/FastComments/tsoa) pour générer une spécification OpenAPI 3.0 directement à partir de nos contrôleurs de route. Cette spécification est intégrée dans [OpenAPI Generator](https://openapi-generator.tech/) pour produire des bibliothèques clientes pour chaque langage.

Lorsque l'API change, nos outils détectent la différence dans la spécification, régénèrent les SDKs concernés, exécutent des tests pour chaque langage et ouvrent automatiquement des demandes de tirage. Nous avons construit un petit outil de gestion en Nim qui orchestre le cycle de mise à jour, de test et de publication à travers les dix dépôts.

### Qu'est-ce qu'il y a dans Chaque SDK

Chaque SDK fournit deux classes API :

- **`DefaultApi`** : points de terminaison authentifiés qui nécessitent votre clé API. Utilisez-les côté serveur pour la modération, la gestion des utilisateurs, l'analyse et les opérations en masse.
- **`PublicApi`** : points de terminaison non authentifiés sûrs à appeler depuis les navigateurs et les applications mobiles. Ceux-ci couvrent la récupération de commentaires, les publications, les votes et d'autres opérations destinées aux clients.

Tous les SDKs incluent également des utilitaires SSO pour s'intégrer à votre système d'authentification existant. Le SDK TypeScript fournit en plus des abonnements d'événements en temps réel pour les commentaires en direct.

### Documentation

La documentation complète de l'API est disponible sur [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Chaque dépôt de SDK inclut également des docs générées couvrant chaque méthode et modèle disponible.

Pour l'intégration SSO, consultez notre [guide SSO](https://docs.fastcomments.com/guide-sso.html). Tous les dix SDKs incluent des helpers SSO utilisant leurs bibliothèques de cryptographie natives.

### En Conclusion

Avoir un serveur entièrement typé a rendu facile la génération d'une spécification OpenAPI fiable, et à partir de là, la génération de clients pour dix (et un jour plus !) langages était principalement une question de construction de l'automatisation et d'amélioration de nos définitions de types afin qu'elles puissent être consommables, sans ajouter trop d'abstraction qui ralentirait FastComments !

Comme pour tous les lancements majeurs, nous sommes ravis d'avoir pu prendre le temps d'optimiser, de tester et de publier ces SDKs correctement. Faites-nous savoir ci-dessous si vous avez des commentaires ou s'il y a un langage que vous aimeriez que nous ajoutions.

Santé !

{{/isPost}}

--- 

---