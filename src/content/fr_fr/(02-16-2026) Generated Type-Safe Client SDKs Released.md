---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]SDKs de client générés et sûrs pour le type publiés[/postlink]

{{#unless isPost}}
Comme teasé dans notre article sur la migration TypeScript, nous avons publié des SDKs de client générés et sûrs pour le type pour dix langages de programmation.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

### Quoi de Neuf

Dans notre [article sur la migration TypeScript](/blog/fastcomments-typescript-migration-completed), nous avons mentionné que des SDKs de client générés allaient arriver. Ils sont là.

FastComments expédie maintenant des SDKs officiels et sûrs pour le type pour **dix langages** :

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (modules Go)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Gestionnaire de Paquets Swift)
- C++ (CMake)
- Nim (Nimble)

Chaque SDK est généré à partir de la même spécification OpenAPI que notre serveur produit. Les types, signatures de méthode et modèles de requête/réponse restent synchronisés avec l'API réelle automatiquement. Votre compilateur détecte les fautes de frappe dans les noms de champs et les paramètres manquants avant que votre code n'effectue une requête réseau.

### Comment Cela Fonctionne

La migration TypeScript était une condition préalable à cela. Maintenant que notre code serveur est entièrement typé, nous utilisons [notre fork de TSOA](https://github.com/FastComments/tsoa) pour générer une spécification OpenAPI 3.0 directement à partir de nos contrôleurs de route. Cette spécification est alimentée dans [OpenAPI Generator](https://openapi-generator.tech/) pour produire des bibliothèques clients pour chaque langage.

Lorsque l'API change, nos outils détectent la différence dans la spécification, régénèrent les SDKs affectés, exécutent des tests pour chaque langage et ouvrent automatiquement des demandes de tirage. Nous avons construit un petit outil de gestion en Nim qui orchestre le cycle de mise à jour-test-libre à travers les dix dépôts.

### Qu'est-ce Qu'il Y A dans Chaque SDK

Chaque SDK fournit deux classes API :

- **`DefaultApi`** : points de terminaison authentifiés qui nécessitent votre clé API. Utilisez-les côté serveur pour la modération, la gestion des utilisateurs, l'analytique et les opérations en masse.
- **`PublicApi`** : points de terminaison non authentifiés sûrs à appeler depuis des navigateurs et des applications mobiles. Ceux-ci couvrent le fetch des commentaires, la publication, le vote et d'autres opérations destinées aux clients.

Tous les SDKs incluent également des utilitaires SSO pour s'intégrer à votre système d'authentification existant. Le SDK TypeScript fournit en outre des abonnements d'événements en temps réel pour les commentaires en direct.

### Documentation

La documentation API complète est disponible sur [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Chaque dépôt SDK comprend également des docs générées couvrant chaque méthode et modèle disponible.

Pour l'intégration SSO, consultez notre [guide SSO](https://docs.fastcomments.com/guide-sso.html). Tous les dix SDKs incluent des helpers SSO utilisant leurs bibliothèques de cryptographie natives.

### En Conclusion

Avoir un serveur entièrement typé a rendu simple la génération d'une spécification OpenAPI fiable, et à partir de là, générer des clients pour dix (et un jour plus !) langages était principalement une question de construction de l'automatisation et d'amélioration de nos définitions de type afin qu'elles soient consommables, sans ajouter trop d'abstraction qui ralentirait FastComments !

Comme toutes les versions majeures, nous sommes ravis d'avoir pu prendre le temps d'optimiser, tester et publier correctement ces SDKs. Faites-nous savoir ci-dessous si vous avez des commentaires ou s'il y a un langage que vous aimeriez que nous ajoutions.

Santé !

{{/isPost}}

---

---