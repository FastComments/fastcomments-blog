---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Mise à jour du SDK du système de commentaires React Native[/postlink]

{{#unless isPost}}
Nous avons reconstruit fastcomments-react-native-sdk de zéro : une gestion d'état nouvelle et plus efficace, un redesign utilisant des Design Tokens, un widget de chat en direct dédié et un support web de premier ordre.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient un jargon technique

### Quoi de Neuf

Nous venons de publier la version 5.1 de `fastcomments-react-native-sdk`, notre bibliothèque React Native qui rend des commentaires et des chats avec de véritables composants natifs au lieu d'un WebView.

Nous avons réécrit les éléments internes, redesigné l'ensemble de l'apparence, ajouté un widget de chat en direct, porté le SDK sur le web, et l'avons mis à niveau vers les dernières versions de React Native et React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, thème clair" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, thème sombre" title="FastComments React Native SDK, thème sombre" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Pourquoi Deux Bibliothèques React Native ?

Une note rapide, car nous recevons souvent cette question. Nous proposons deux options :

- `fastcomments-react-native` est un léger wrapper autour de notre widget web fonctionnant dans un WebView. C'est le moyen le plus rapide d'obtenir chaque fonctionnalité instantanément, et il bénéficie des corrections web automatiquement.
- `fastcomments-react-native-sdk` (celui-ci) rend l'UI avec des composants natifs React Native sans Webview. Il est plus flexible, entièrement personnalisable, et a une sensation native parce qu'il est natif.

Pour la meilleure expérience, nous recommandons le SDK. Le reste de cet article traite des changements dans la version 5.0.

### Nouvelle Gestion d'État

Le principal moteur de ce changement est de s'assurer que notre bibliothèque reste fidèle à notre nom et reste rapide. Plusieurs clients se sont plaints de ses performances, donc ce problème est maintenant résolu.

Le SDK conservait à l'origine son arbre de commentaires dans Hookstate. Cela fonctionnait, mais à mesure que les fils et les mises à jour en direct se sont multipliés, les choses ont commencé à ralentir.

Nous avons remplacé Hookstate par Zustand et un magasin indexé plat. Les commentaires vivent maintenant dans une carte `byId` aux côtés des index `childrenByParent`, `rootOrder` et `pinnedIds`, au lieu d'un arbre imbriqué dans l'état.

Le résultat :

- Les événements en direct (un nouveau commentaire, un vote, une modification) sont devenus des mutations O(1) au lieu de parcourir et de cloner un arbre.
- Nous avons abandonné deux clones JSON complets de l'arbre qui s'exécutaient à chaque récupération.
- Les composants s'abonnent exactement aux tranches qu'ils lisent, le modèle de sélection standard, donc un vote sur un commentaire touche un seul commentaire.

Ce dernier point est plus important qu'il n'y paraît. Avec des abonnements basés sur des sélecteurs, une ligne ne se redessine que lorsque ses propres données changent.

### Un Redesign Basé sur des Tokens

L'ancienne apparence était un amoncellement de styles codés en dur. Le nouveau par défaut est généré à partir d'un ensemble de tokens de design sémantiques (`FastCommentsTheme`) : couleurs, espacements, rayons, tailles de police, poids de police et tailles d'avatar. L'ensemble de l'arbre de style est dérivé de ces tokens.

Cela signifie qu'un restyling n'est qu'une seule prop :

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Le mode sombre est à un ensemble de tokens prêt :

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Le redesign lui-même est une apparence propre et moderne : séparateurs fins, boutons et puces de vote en forme de pilule, boutons principaux remplis, avatars arrondis, et une échelle typographique cohérente. La prop `styles` est toujours là pour des overrides chirurgicaux, donc les intégrations existantes fonctionnent toujours.

### Un Widget de Chat en Direct Dédié

Nous avons ajouté `FastCommentsLiveChat`, un préréglage de chat basé sur le même moteur qui reflète la vue de chat de notre SDK Android : messages chronologiques avec le plus récent en bas, le compositeur en dessous de la liste, une barre d'en-tête en direct avec un point de connexion et un compteur d'utilisateurs, défilement automatique qui se met en pause pendant que vous lisez des messages plus anciens, et un historique infini en faisant défiler vers le haut. Chaque préréglage est modifiable via `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Maintenant sur le Web Aussi

Le même SDK fonctionne maintenant sur le web via `react-native-web`. Le compositeur de texte enrichi (alimenté par `react-native-enriched`) se rend de la même manière sur iOS, Android, et le navigateur, donc l'expérience d'édition est cohérente partout avec une seule implémentation. Les superpositions que la liste de commentaires aurait autrement masquées (menus, sélecteur de GIF, liste de notifications) sont ancrées sous leurs déclencheurs sur la version web.

Vous pouvez essayer chaque widget vous-même dans le <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">navigateur de composants</a> en direct, qui est ce SDK fonctionnant dans le navigateur via `react-native-web`.

### Rester à Jour avec React Native

La version 5.0 est construite et testée contre React Native 0.81 et React 19, et elle cible la Nouvelle Architecture (Fabric), que l'éditeur de texte enrichi natif nécessite. Rester à jour ici n'est pas une perte de temps : l'éditeur, la gestion des gestes, et le rendu deviennent tous plus rapides et plus corrects au fur et à mesure que React Native progresse, et nous préférerions prendre ces mises à niveau de manière régulière plutôt que de prendre du retard pendant des années.

### En Conclusion

Cette réécriture visait à donner au SDK React Native le même niveau de premier ordre que nos autres bibliothèques : un modèle de données rapide et prévisible, une apparence que vous pouvez personnaliser via une seule prop, un widget de chat, et un support web, le tout sur une base moderne de React Native.

Vous pouvez trouver le SDK sur <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, la source, avec des exemples, sur <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, et chaque widget s'exécutant en direct dans le <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">navigateur de composants</a>. Faites-nous savoir ci-dessous si vous rencontrez des problèmes.

Santé !

{{/isPost}}

---