---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Migration TypeScript de FastComments Complétée[/postlink]

{{#unless isPost}}
En préparation pour la prochaine décennie de développement, nous avons migré l'un des plus grands composants de FastComments vers TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

### Quoi de Neuf

Chez FastComments, nous apprécions les langages à typage statique. Plus précisément, j'aime les systèmes de types décents avec des compilateurs rapides. FastComments a commencé avec ce dernier - ou aucun compilateur. Bien que nous ayons deux services écrits en Java moderne au cours de la première année, les principales bibliothèques backend et frontend étaient écrites en CJS JS fonctionnant sur Node.

En préparation pour la prochaine décennie de développement, nous avons migré les plus grands composants de FastComments vers TypeScript.

Cela a impliqué la migration de plus de 130 000 lignes de code (dont 100 000 pour le backend) à travers 1441 fichiers, et la correction de plus de 8000 erreurs de compilation.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="Capture d'écran GitHub" title="Capture d'écran GitHub" />
</div>

Cela a été fait en deux semaines.

### Gel de Code - Merci

Je voudrais remercier nos clients de gérer les retards dans les corrections de bogues ou les sorties de fonctionnalités pendant que nous avons effectué un gel de code de deux semaines pour compléter cette mise à jour. Merci !

### Bogues Corrigés

Comme vous pouvez l'imaginer, nous avons corrigé quelques bogues. Ceux-ci concernaient principalement la détection de spam et le caching.

### Changements Majeurs

- Tous les points de terminaison de l'API renvoient désormais status: 'failed' au lieu d'un mélange de "failed" et "failure" comme valeurs de statut. "success" demeure inchangé.
- Nous ne reviendrons plus à la première configuration de widget par défaut s'il n'y a pas de correspondance, nous retournerons plutôt la configuration système par défaut.

### Comment C'était ?

Nous avons découvert que, comme d'habitude, de nombreux outils dans l'écosystème NPM pour aider à cette tâche ne fonctionnaient pas très bien. Donc, nous avons utilisé des LLMs pour générer des scripts pour effectuer une grande partie du travail. Par exemple, nous avons fait un usage intensif de JSDoc, afin de pouvoir écrire des scripts pour prendre le JSDoc et les convertir en interfaces TypeScript et définitions de types, et annoter correctement les arguments de fonction et les types de retour. Nous avons également utilisé ces scripts pour migrer de CJS à ESM, ce qui incluait la réécriture des imports, exports, et la détection de problèmes courants d'exécution comme `__dirname`.

Ai-je mentionné les problèmes d'exécution ?

### Comment Est TypeScript en 2025 ?

TypeScript est un bon langage pour écrire de la logique métier. Mais, Java a encore une meilleure expérience développeur. Si Java, Go, ou Rust compilent, il y a de fortes chances que cela fonctionne. Avec TypeScript, je peux faire quelque chose comme :

    console.log(__dirname);

... et cela compilera.

Mais ça ne s'exécutera pas, avec les modules ES modernes. Votre IDE complétera même joyeusement `__dirname`, puis cela explosera à l'exécution. Cela ressemble à Spring DI, mais en pire.

Vous pouvez également faire des choses comme :

    context.someImportantMethodToCall;

Maintenant, c'est une "déclaration". C'est une "déclaration" valide. À première vue, vous pourriez penser que nous appelons `someImportantMethodToCall`, mais ce n'est pas le cas ! Mon IDE, en tout cas, ne prévient pas à ce sujet, et le compilateur non plus. Le code ne fera rien (à moins que `someImportantMethodToCall` soit un `getter` de classe dans quel cas il sera appelé implicitement...)

La correction est :

    context.someImportantMethodToCall();

Je pense que vous pouvez probablement détecter cela avec quelque chose comme eslint et une règle "pas d'effets secondaires", mais ensuite vous devez ajouter un autre ensemble important de bibliothèques à maintenir à jour, et ensuite eslint doit analyser l'ensemble de votre base de code à chaque construction, les outils sont lents, etc. - non merci. L'impact sur la productivité que j'ai ressenti en gérant des outils lents comme eslint a été plus significatif au cours de ma carrière dans mes emplois précédents que le "gain" de productivité que j'ai jamais obtenu des petites choses que eslint corrige/prévient avec l'espacement, etc. Il existe maintenant des alternatives plus rapides qui arrivent, ce qui est génial.

TypeScript est vraiment agréable grâce à des fonctionnalités du langage comme `Pick<User, 'username', 'email'>`. Cela, combiné avec l'inférence de types, fournit un moyen d'obtenir des résultats de requête typés en toute sécurité depuis la base de données pour des sous-ensembles d'objets plus grands sans avoir à définir une classe pour chaque forme. `Pick` est quelque chose que je suis surpris que Scala n'ait pas. Les Unions de Types sont également vraiment agréables.

Les constructions incrémentales fonctionnent également raisonnablement bien, nous n'avons augmenté nos temps de construction dans CI que d'environ 5 à 10 secondes en moyenne, pour construire la bibliothèque partagée, le frontend, et le backend.

### Chronologie de Développement

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
- Jour 11 : Tests Unitaires Backend Réussis
- Jour 12 : Début de la migration du frontend, 3118 erreurs.
- Jour 13 : Trouvé 2172 erreurs.
- Jour 14 : Trouvé 1224 erreurs.
- Jour 15 : Trouvé 498 erreurs.
- Jour 16 : Toutes les erreurs de compilation corrigées.
- Jour 17 : Sortie. Les tests E2E passent. 30 minutes de temps d'arrêt pendant des problèmes d'exécution inattendus. :)

### L'Avenir

Nous avons fait cela pour soutenir le développement pour la prochaine décennie. Le système est désormais assez grand pour qu'il soit plus rapide de développer avec un système de types qu' sans.

Vous pouvez également vous attendre à ce que notre bibliothèque TypeScript sur NPM s'améliore, comme cela a déjà commencé, puisque nous avons maintenant une utilisation interne de cette bibliothèque dans notre code serveur et client.

Nous allons également bientôt publier des SDKs clients générés directement à partir du code serveur, ce qui était une motivation principale de cet effort.

### En Conclusion

Comme toutes les grandes versions, nous sommes contents d'avoir pu prendre le temps d'optimiser, tester et bien publier ces changements. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

À la vôtre !

{{/isPost}}

---