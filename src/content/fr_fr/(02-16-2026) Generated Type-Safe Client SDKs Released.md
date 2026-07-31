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

### <i class="circle">!</i> This Article Contains Technical Jargon

### What's New

Dans notre [article de migration TypeScript](/(1-31-2025)-fastcomments-typescript-migration-completed-fr_fr.html), nous avions mentionné que des SDK client générés arriveraient. Ils sont maintenant disponibles.

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

Chaque SDK est généré à partir de la même spécification OpenAPI que notre serveur produit. Les types, les signatures de méthodes et les modèles de requête/réponse restent synchronisés automatiquement avec l'API réelle. Votre compilateur détecte les fautes de frappe dans les noms de champs et les paramètres manquants avant que votre code n'effectue une requête réseau.

### How It Works

La migration TypeScript était une condition préalable à cela. Maintenant que le code de notre serveur est entièrement typé, nous utilisons [notre fork de TSOA](https://github.com/FastComments/tsoa) pour générer une spécification OpenAPI 3.0 directement à partir de nos contrôleurs de routes. Cette spécification est ensuite transmise à [OpenAPI Generator](https://openapi-generator.tech/) pour produire des bibliothèques client pour chaque langage.

Lorsque l'API change, nos outils détectent la différence dans la spécification, régénèrent les SDK concernés, exécutent les tests pour chaque langage et ouvrent automatiquement des pull requests. Nous avons créé un petit outil de gestion en Nim qui orchestre le cycle de mise à jour‑test‑release à travers les dix dépôts.

### What's in Each SDK

Chaque SDK fournit deux classes API :

- **`DefaultApi`** : points de terminaison authentifiés qui nécessitent votre clé API. Utilisez-les côté serveur pour la modération, la gestion des utilisateurs, l'analyse et les opérations en masse.
- **`PublicApi`** : points de terminaison non authentifiés sûrs à appeler depuis les navigateurs et les applications mobiles. Ils couvrent la récupération des commentaires, la publication, le vote et d'autres opérations côté client.

Tous les SDK incluent également des utilitaires SSO pour s'intégrer à votre système d'authentification existant. Le SDK TypeScript fournit en plus des abonnements aux événements en temps réel pour les commentaires en direct.

### Documentation

La documentation complète de l'API est disponible sur [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Chaque dépôt SDK inclut également des docs générées couvrant chaque méthode et modèle disponible.

Pour l'intégration SSO, consultez notre [guide SSO](https://docs.fastcomments.com/guide-sso.html). Les dix SDK incluent des assistants SSO utilisant leurs bibliothèques cryptographiques natives.

### In Conclusion

Disposer d'un serveur entièrement typé a simplifié la génération d'une spécification OpenAPI fiable, et à partir de là, générer des clients pour dix (et un jour plus !) langages était principalement une question de mettre en place l'automatisation
et d'améliorer nos définitions de types afin qu'elles soient consommables, sans ajouter trop d'abstraction qui ralentirait FastComments !

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement ces SDK. Faites‑nous savoir
ci‑dessous si vous avez des retours ou s'il y a un langage que vous souhaiteriez que nous ajoutions.

Santé!

{{/isPost}}

---
---