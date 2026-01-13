---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Migration TypeScript de FastComments terminée[/postlink]

{{#unless isPost}}
En préparation de la prochaine décennie de développement, nous avons migré l'un des plus grands composants de FastComments vers TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient un jargon technique

### Quoi de neuf

Chez FastComments, nous apprécions les langages à typage statique. Plus précisément, j'aime les systèmes de types décents avec des compilateurs rapides. FastComments a commencé avec ce dernier - ou
pas de compilateur. Bien que nous ayons eu deux services écrits en Java moderne durant la première année, les principales bibliothèques backend et frontend étaient écrites en CJS JS fonctionnant sur Node.

En préparation pour la prochaine décennie de développement, nous avons migré les plus grands composants de FastComments vers TypeScript.

Cela a impliqué la migration de plus de 130k lignes de code (100k pour le backend) à travers 1441 fichiers, et la correction de plus de 8000 erreurs de compilation.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="Capture d'écran GitHub" title="Capture d'écran GitHub" />
</div>

Cela a été fait en deux semaines.

### Gel de code - Merci

Je tiens à remercier nos clients pour leur compréhension face à tout retard dans les corrections de bugs ou les sorties de fonctionnalités, car nous avons effectué un gel de code de deux semaines pour compléter cette mise à niveau. Merci !

### Bugs corrigés

Comme vous pouvez l'imaginer, nous avons corrigé un certain nombre de bugs. Ceux-ci concernaient principalement la détection de spam et la mise en cache.

### Changements majeurs

- Tous les points de terminaison API retournent maintenant status: 'failed' au lieu d'un mélange de "failed" et "failure" comme valeurs de statut. "success" reste inchangé.
- Nous ne fournirons plus par défaut la première configuration de widget s'il n'y a pas de correspondance, à la place nous retournerons la configuration système par défaut.

### Comment c'était ?

Nous avons constaté que, comme d'habitude, de nombreux outils de l'écosystème NPM pour aider dans cette tâche ne fonctionnaient pas très bien. Donc, nous avons utilisé des LLM pour générer
des scripts pour effectuer une grande partie du travail. Par exemple, nous avons beaucoup utilisé JSDoc, afin que nous puissions écrire des scripts pour prendre le JSDoc et le convertir en interfaces typescript
et définitions de types, et annoter correctement les arguments de fonction et les types de retour. Nous avons également utilisé ces scripts pour migrer de CJS à ESM, ce qui a inclus la réécriture
des imports, des exports, et la détection de problèmes d'exécution courants comme `__dirname`.

Ai-je mentionné les problèmes d'exécution ?

### Comment est TypeScript en 2025 ?

TypeScript est un langage agréable pour écrire la logique métier. Mais, Java a toujours une meilleure expérience développeur. Si Java, Go, ou Rust compile, il y a de fortes chances que cela fonctionne. Avec TypeScript,
je peux faire quelque chose comme :

    console.log(__dirname);

... et cela va compiler.

Mais cela ne s'exécutera pas, avec des modules es modernes. Votre IDE va même compléter automatiquement `__dirname`, puis cela va échouer à l'exécution. Cela ressemble à Spring DI, mais en pire.

Vous pouvez aussi faire des choses comme :

    context.someImportantMethodToCall;

Maintenant, c'est une "déclaration". C'est une "déclaration" valide. À première vue, vous pourriez penser que nous appelons `someImportantMethodToCall`, mais ce n'est pas le cas ! Mon IDE, du moins, ne
prévien pas à ce sujet, et le compilateur non plus. Le code ne fera tout simplement rien (à moins que `someImportantMethodToCall` soit un `getter` de classe, auquel cas il est implicitement appelé...)

La solution est :

    context.someImportantMethodToCall();

Je pense que vous pouvez probablement détecter cela avec quelque chose comme eslint et une règle "pas d'effets secondaires", mais ensuite, vous intégrez un autre grand ensemble de bibliothèques à maintenir à jour,
et ensuite eslint doit analyser l'ensemble de votre code lors de chaque compilation, les outils sont lents, et ainsi de suite - non merci. L'impact sur la productivité du traitement d'outils lents comme eslint a été
plus significatif dans ma carrière lors de précédents emplois que le "gain" de productivité que j'ai jamais eu des petites choses qu'eslint corrige/empêche avec l'espacement, etc. Des alternatives plus rapides 
commencent à sortir maintenant, ce qui est génial.

TypeScript est vraiment agréable grâce à des caractéristiques de langage comme `Pick<User, 'username', 'email'>`. Cela, combiné avec l'inférence de types, fournit un moyen d'avoir des résultats de requête typés
en toute sécurité de la base de données pour des sous-ensembles d'objets plus grands sans avoir à définir une classe pour chaque forme. `Pick` est quelque chose qui me surprend que Scala n'ait pas. Les Unions de types
sont également très intéressantes.

Les compilations incrémentales fonctionnent également raisonnablement bien, nous n'avons augmenté nos temps de compilation en CI que d'environ 5 à 10 secondes en moyenne, pour la construction de la bibliothèque partagée, du frontend et du backend.

### Chronologie du développement

Pour ceux qui sont curieux, voici à quoi ressemblait notre progression :

- Jour Un : Trouvé 5564 erreurs dans 362 fichiers.
- Jour Deux : Trouvé 4034 erreurs dans 239 fichiers.
- Jour Trois : Trouvé 3784 erreurs dans 191 fichiers.
- Jour Quatre : Trouvé 2974 erreurs dans 169 fichiers.
- Jour Cinq : Trouvé 3000 erreurs dans 171 fichiers.
- Jour Six : Trouvé 2916 erreurs dans 165 fichiers.
- Jour Sept : Trouvé 2618 erreurs dans 157 fichiers.
- Jour Huit : Trouvé 2253 erreurs dans 109 fichiers.
- Jour Neuf : Trouvé 1605 erreurs dans 69 fichiers.
- Jour Dix : Trouvé 686 erreurs dans 53 fichiers.
- Jour 11 : Tests unitaires backend réussis
- Jour 12 : Début de la migration du frontend, 3118 erreurs.
- Jour 13 : Trouvé 2172 erreurs.
- Jour 14 : Trouvé 1224 erreurs.
- Jour 15 : Trouvé 498 erreurs.
- Jour 16 : Toutes les erreurs de compilation corrigées.
- Jour 17 : Publié. Les tests E2E réussis. 30 minutes d'arrêt en raison de problèmes d'exécution inattendus. :)

### L'avenir

Nous avons fait cela pour soutenir le développement pour la prochaine décennie. Le système est maintenant suffisamment vaste qu'il est plus rapide de développer avec un système de types qu'en l'absence de celui-ci.

Vous pouvez également vous attendre à ce que notre bibliothèque TypeScript sur NPM s'améliore, car elle a déjà commencé à le faire, puisque nous testons maintenant cette bibliothèque dans notre code serveur et client.

Nous allons également bientôt publier des SDK client générés directement à partir du code serveur, ce qui était une motivation principale autour de cet effort.

### En conclusion

Comme pour toutes les grandes mises à jour, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de bien publier ces changements. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---