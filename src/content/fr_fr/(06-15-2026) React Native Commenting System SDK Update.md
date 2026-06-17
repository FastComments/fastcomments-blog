---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Mise à jour du SDK du système de commentaires React Native[/postlink]

{{#unless isPost}}
Nous avons reconstruit fastcomments-react-native-sdk de A à Z : nouvelle gestion d'état plus efficace, un redesign utilisant des Design Tokens, un widget de chat en direct dédié, et un support web de première classe.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de neuf

Nous venons de publier la version 5.1 de `fastcomments-react-native-sdk`, notre bibliothèque React Native qui rend les commentaires et le chat avec de véritables composants natifs au lieu d’un WebView.

Nous avons réécrit les éléments internes, redessiné l'ensemble du look, ajouté un widget de chat en direct, amené le SDK sur le web, et l'avons mis à jour vers les dernières versions de React Native et React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, thème clair" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, thème sombre" title="FastComments React Native SDK, thème sombre" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Pourquoi deux bibliothèques React Native ?

Une petite note, car nous recevons souvent cette question. Nous proposons deux options :

- `fastcomments-react-native` est un mince wrapper autour de notre widget web fonctionnant dans un WebView. C’est le moyen le plus rapide d’accéder à toutes les fonctionnalités instantanément, et il bénéficie automatiquement des corrections web.
- `fastcomments-react-native-sdk` (celui-ci) rend l'interface utilisateur avec des composants natifs React Native sans WebView. Il est plus flexible, entièrement configurable, et donne une impression native car il est natif.

Pour la meilleure expérience, nous recommandons le SDK. Le reste de cet article concerne ce qui a changé dans la version 5.0.

### Nouvelle gestion d'état

Le principal moteur de ce changement est de s'assurer que notre bibliothèque reste fidèle à notre nom et reste rapide. Plusieurs clients se sont plaints
de ses performances, donc cela est désormais corrigé.

Le SDK conservait à l'origine son arbre de commentaires dans Hookstate. Cela fonctionnait, mais à mesure que les fils et les mises à jour en direct augmentaient, les choses commençaient à ralentir.

Nous avons remplacé Hookstate par Zustand et un store indexé et plat. Les commentaires vivent désormais dans une carte `byId` aux côtés des index `childrenByParent`, `rootOrder`, et `pinnedIds`, au lieu d'un arbre imbriqué dans l'état.

Les avantages :

- Les événements en direct (un nouveau commentaire, un vote, une édition) sont devenus des mutations O(1) au lieu de parcourir et de cloner un arbre.
- Nous avons abandonné deux clones JSON complets de l'arbre qui s'exécutaient à chaque fetch.
- Les composants s'abonnent exactement aux tranches qu'ils lisent, le modèle standard de sélection, donc un vote sur un commentaire n'affecte qu'un commentaire.

Ce dernier point compte plus que cela en a l'air. Avec les abonnements basés sur la sélection, une ligne se redessine seulement lorsque ses propres données changent.

### Un redesign basé sur des tokens

L'ancien look était une pile de styles codés en dur. Le nouveau par défaut est généré à partir d'un ensemble de tokens de design sémantiques (`FastCommentsTheme`) : couleurs, espacement, rayon, tailles de police, poids de police, et tailles d'avatar. L'ensemble de l'arbre de style est dérivé de ces tokens.

Cela signifie que le restylage est une seule prop :

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Le mode sombre n’est qu’à un ensemble de tokens près :

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Le redesign lui-même a un look moderne et neutre : séparateurs fins, boutons de vote en forme de pilule et chips, boutons principaux remplis, avatars ronds, et une échelle typographique cohérente. La prop `styles` est toujours là pour des remplacements chirurgicaux, donc les intégrations existantes continuent à fonctionner.

### Un widget de chat en direct dédié

Nous avons ajouté `FastCommentsLiveChat`, un préréglage de chat sur le même moteur qui reflète la vue de chat de notre SDK Android : messages chronologiques avec les plus récents en bas, le compositeur sous la liste, une barre d'en-tête en direct avec un point de connexion et un compte d'utilisateurs, un défilement automatique qui fait une pause pendant que vous lisez les messages plus anciens, et un historique infini lorsque vous faites défiler vers le haut. Chaque préréglage est remplaçable via `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Maintenant aussi sur le web

Le même SDK fonctionne maintenant sur le web grâce à `react-native-web`. Le compositeur de texte enrichi (alimenté par `react-native-enriched`) se rend de la même manière sur iOS, Android, et le navigateur, donc l'expérience d'édition est cohérente partout avec une seule implémentation. Les superpositions que la liste de commentaires aurait autrement coupées (menús, sélecteur de GIF, liste des notifications) sont ancrées sous leurs déclencheurs dans la version web.

### Rester à jour avec React Native

La version 5.0 est construite et testée avec React Native 0.81 et React 19, et elle cible la nouvelle architecture (Fabric), que l’éditeur de texte enrichi natif requiert. Être à jour ici n'est pas un travail inutile : l'éditeur, la gestion des gestes, et le rendu deviennent tous plus rapides et plus corrects à mesure que React Native progresse, et nous préférerions prendre ces mises à jour de manière constante plutôt que de prendre du retard de plusieurs années.

### En conclusion

Cette réécriture visait à donner au SDK React Native la même position de premier ordre que nos autres bibliothèques : un modèle de données rapide et prévisible, un look que vous pouvez configurer en une prop, un widget de chat, et un support web, le tout sur une base moderne de React Native.

Vous pouvez trouver le SDK sur <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> et le code source, avec des exemples, sur <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Faites-nous savoir ci-dessous si vous rencontrez quoi que ce soit.

À votre santé !

{{/isPost}}

---