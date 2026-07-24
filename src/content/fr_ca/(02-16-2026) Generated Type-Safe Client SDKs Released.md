---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Comme annoncé dans notre article de migration TypeScript, nous avons publié des SDK client générés et typés pour dix langages de programmation.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de neuf

Dans notre [TypeScript migration post](/blog/fastcomments-typescript-migration-completed), nous avons mentionné que des SDK client générés arriveraient. Ils sont là.

FastComments propose désormais des SDK officiels et typés pour **dix langages** :

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Chaque SDK est généré à partir de la même spécification OpenAPI que notre serveur produit. Les types, les signatures de méthodes et les modèles de requête/réponse restent synchronisés automatiquement avec l’API réelle. Votre compilateur détecte les fautes de frappe dans les noms de champs et les paramètres manquants avant que votre code n’effectue une requête réseau.

### Comment ça fonctionne

La migration TypeScript était une condition préalable à cela. Maintenant que le code de notre serveur est entièrement typé, nous utilisons [our fork of TSOA](https://github.com/FastComments/tsoa) pour générer une spécification OpenAPI 3.0 directement à partir de nos contrôleurs de routes. Cette spécification est transmise à [OpenAPI Generator](https://openapi-generator.tech/) pour produire des bibliothèques clientes pour chaque langage.

Lorsque l’API change, notre outil détecte la différence dans la spécification, régénère les SDK affectés, exécute les tests pour chaque langage et ouvre automatiquement des pull requests. Nous avons construit un petit outil de gestion en Nim qui orchestre le cycle de mise à jour‑test‑publication à travers les dix dépôts.

### Ce qui se trouve dans chaque SDK

Chaque SDK fournit deux classes API :

- **`DefaultApi`** : points de terminaison authentifiés qui nécessitent votre clé API. Utilisez‑les côté serveur pour la modération, la gestion des utilisateurs, l’analyse et les opérations en masse.
- **`PublicApi`** : points de terminaison non authentifiés sûrs à appeler depuis les navigateurs et les applications mobiles. Ceux‑ci couvrent la récupération des commentaires, la publication, le vote et d’autres opérations côté client.

Tous les SDK incluent également des utilitaires SSO pour s’intégrer à votre système d’authentification existant. Le SDK TypeScript fournit en plus des abonnements aux événements en temps réel pour les commentaires en direct.

### Documentation

La documentation complète de l’API est disponible sur [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Chaque dépôt SDK inclut également des docs générées couvrant chaque méthode et modèle disponible.

Pour l’intégration SSO, consultez notre [SSO guide](https://docs.fastcomments.com/guide-sso.html). Les dix SDK incluent des aides SSO utilisant leurs bibliothèques cryptographiques natives.

### En conclusion

Disposer d’un serveur entièrement typé a rendu simple la génération d’une spécification OpenAPI fiable, et à partir de là, générer des clients pour dix (et un jour plus !) langages était principalement une question de construire l’automatisation et d’améliorer nos définitions de types afin qu’elles soient consommables, sans ajouter trop d’abstraction qui ralentirait FastComments !

Comme pour toutes les grandes versions, nous sommes heureux d’avoir pu prendre le temps d’optimiser, de tester et de publier correctement ces SDK. Faites‑nous savoir ci‑dessous si vous avez des commentaires ou s’il y a un langage que vous aimeriez que nous ajoutions.

Santé !

{{/isPost}}

---

---