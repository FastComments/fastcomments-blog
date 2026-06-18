---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Mise à jour du SDK de système de commentaires React Native[/postlink]

{{#unless isPost}}
Nous avons reconstruit le fastcomments-react-native-sdk de A à Z : nouvelle gestion d'état plus efficace, une refonte utilisant des Design Tokens, un widget de chat en direct dédié et un support web de premier ordre.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de neuf

Nous venons de publier la version 5.1 de `fastcomments-react-native-sdk`, notre bibliothèque React Native qui rend les commentaires et le chat avec de véritables composants natifs au lieu d'un WebView.

Nous avons réécrit l’interne, refondu complètement l’apparence, ajouté un widget de chat en direct, porté le SDK sur le web et l’avons mis à jour vers les dernières versions de React Native et React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, thème clair" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, thème sombre" title="FastComments React Native SDK, thème sombre" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Pourquoi deux bibliothèques React Native ?

Une petite note, car nous avons cette question. Nous proposons deux options :

- `fastcomments-react-native` est un léger wrapper autour de notre widget web fonctionnant dans un WebView. C’est le moyen le plus rapide d’obtenir chaque fonctionnalité instantanément, et il bénéficie automatiquement des corrections web.
- `fastcomments-react-native-sdk` (celui-ci) rend l’interface utilisateur avec des composants React Native natifs sans WebView. Il est plus flexible, entièrement personnalisable et a une apparence native car il est natif.

Pour la meilleure expérience, nous recommandons le SDK. Le reste de ce post concerne ce qui a changé dans la version 5.0.

### Nouvelle gestion d'état

Le principal moteur de ce changement est de s'assurer que notre bibliothèque reste fidèle à son nom et reste rapide. Plusieurs clients s’étaient plaints de ses performances, donc c’est maintenant corrigé.

Le SDK conservait à l'origine son arbre de commentaires dans Hookstate. Ça fonctionnait, mais à mesure que les fils de discussion et les mises à jour en direct augmentaient, les choses commençaient à ralentir.

Nous avons remplacé Hookstate par Zustand et un magasin plat indexé. Les commentaires vivent maintenant dans une map `byId` aux côtés d'index `childrenByParent`, `rootOrder` et `pinnedIds`, au lieu d'un arbre imbriqué dans l'état.

Le résultat :

- Les événements en direct (un nouveau commentaire, un vote, une modification) sont devenus des mutations O(1) au lieu de parcourir et de cloner un arbre.
- Nous avons supprimé deux clones JSON à arbre entier qui se déclenchaient à chaque récupération.
- Les composants s'abonnent exactement aux tranches qu'ils lisent, le modèle standard de sélection, donc un vote sur un commentaire n’affecte qu’un seul commentaire.

Ce dernier point est plus important qu'il n'y paraît. Avec des abonnements basés sur des sélections, une ligne ne se réaffiche que lorsque ses propres données changent.

### Une refonte basée sur des tokens

Le look ancien était un tas de styles codés en dur. Le nouveau par défaut est généré à partir d'un ensemble de design tokens sémantiques (`FastCommentsTheme`) : couleurs, espacements, rayons, tailles de police, poids de police et tailles d'avatar. L'ensemble de l'arbre de style est dérivé de ces tokens.

Cela signifie que le re-styling est un prop :

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Le mode sombre n'est qu'à un ensemble de tokens :

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

La refonte elle-même a un aspect plus propre et moderne : séparateurs fins, boutons de vote en forme de pilule et puces, boutons principaux remplis, avatars arrondis et une échelle typographique cohérente. Le prop `styles` est toujours là pour des remplacements ciblés, donc les intégrations existantes continuent de fonctionner.

### Un widget de chat en direct dédié

Nous avons ajouté `FastCommentsLiveChat`, un preset de chat basé sur le même moteur qui reflète la vue de chat de notre SDK Android : messages chronologiques avec les plus récents en bas, le compositeur en dessous de la liste, une barre d’en-tête en direct avec un point de connexion et un nombre d’utilisateurs, défilement automatique qui se met en pause pendant que vous lisez les anciens messages, et historique infini lorsque vous faites défiler vers le haut. Chaque preset est modifiable via `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Maintenant sur le web aussi

Le même SDK fonctionne maintenant sur le web via `react-native-web`. Le compositeur de texte enrichi (propulsé par `react-native-enriched`) se render de la même manière sur iOS, Android et le navigateur, donc l'expérience d'édition est cohérente partout avec une seule implémentation. Les superpositions que la liste de commentaires autrement couperait (menus, sélection de GIF, liste de notifications) sont ancrées sous leurs déclencheurs dans la version web.

Vous pouvez essayer chaque widget vous-même dans le <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">navigateur de composants</a>, qui est ce SDK fonctionnant dans le navigateur via `react-native-web`.

### Rester à jour avec React Native

La version 5.0 est construite et testée avec React Native 0.81 et React 19, et elle cible la Nouvelle Architecture (Fabric), que nécessite l'éditeur de texte enrichi natif. Rester à jour ici n'est pas un travail inutile : l'éditeur, la gestion des gestes et le rendu deviennent tous plus rapides et plus corrects à mesure que React Native progresse, et nous préférons prendre ces mises à jour régulièrement plutôt que de rester à la traîne pendant des années.

### En conclusion

Cette réécriture visait à donner au SDK React Native le même statut de premier ordre que nos autres bibliothèques : un modèle de données rapide et prévisible, un look que vous pouvez personnaliser en un prop, un widget de chat, et un support web, le tout sur une base moderne de React Native.

Vous pouvez trouver le SDK sur <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, la source, avec des exemples, sur <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, et chaque widget fonctionnant en direct dans le <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">navigateur de composants</a>. Faites-nous savoir ci-dessous si vous rencontrez des problèmes.

À la vôtre !

{{/isPost}}

---