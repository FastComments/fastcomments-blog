---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Mise à jour du SDK du système de commentaires React Native[/postlink]

{{#unless isPost}}
Nous avons reconstruit fastcomments-react-native-sdk de zéro : une gestion d'état nouvelle et plus efficace, un redesign utilisant des Design Tokens, un widget de chat en direct dédié, et un support web de première classe.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient un jargon technique

### Quoi de Neuf

Nous venons de lancer la version 5.1 de `fastcomments-react-native-sdk`, notre bibliothèque React Native qui rend des commentaires et un chat avec de véritables composants natifs au lieu d'un WebView.

Nous avons réécrit les éléments internes, redessiné l'ensemble de l'apparence, ajouté un widget de chat en direct, amené le SDK sur le web, et l'avons mis à jour avec les dernières versions de React Native et React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, thème clair" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, thème foncé" title="FastComments React Native SDK, thème foncé" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Pourquoi Deux Bibliothèques React Native?

Une petite note, car nous recevons cette question. Nous proposons deux options :

- `fastcomments-react-native` est un mince wrapper autour de notre widget web fonctionnant dans un WebView. C'est la manière la plus rapide d'obtenir toutes les fonctionnalités instantanément, et il bénéficie des correctifs web automatiquement.
- `fastcomments-react-native-sdk` (celui-ci) rend l'UI avec des composants React Native natifs sans WebView. Il est plus flexible, entièrement personnalisable et a une apparence native parce qu'il est natif.

Pour la meilleure expérience, nous recommandons le SDK. Le reste de cet article porte sur ce qui a changé dans 5.0.

### Nouvelle Gestion d'État

Le principal moteur de ce changement est de s'assurer que notre bibliothèque reste fidèle à notre nom et reste rapide. Nous avons eu plusieurs clients se plaindre de ses performances, donc c'est maintenant corrigé.

Le SDK conservait à l'origine son arbre de commentaires dans Hookstate. Cela fonctionnait, mais à mesure que les fils de discussion et les mises à jour en direct croissaient, les choses ont commencé à ralentir.

Nous avons remplacé Hookstate par Zustand et un magasin plat et indexé. Les commentaires vivent maintenant dans une carte `byId` aux côtés des index `childrenByParent`, `rootOrder`, et `pinnedIds`, au lieu d'un arbre imbriqué dans l'état.

Le résultat :

- Les événements en direct (un nouveau commentaire, un vote, une modification) sont devenus des mutations O(1) au lieu de parcourir et cloner un arbre.
- Nous avons abandonné deux clones profonds JSON d'arbre complet qui s'exécutaient à chaque récupération.
- Les composants s'abonnent exactement aux parts qu'ils lisent, le modèle de sélection standard, donc un vote sur un commentaire touche un commentaire.

Ce dernier point compte plus qu'il n'y paraît. Avec des abonnements basés sur la sélection, une ligne ne se redessine que lorsque ses propres données changent.

### Un Redesign Basé sur des Tokens

L'ancienne apparence était un tas de styles codés en dur. Le nouveau défaut est généré à partir d'un ensemble de tokens de design sémantiques (`FastCommentsTheme`) : couleurs, espacement, rayons, tailles de police, poids de police et tailles d'avatar. L'ensemble de l'arbre de style est dérivé de ces tokens.

Cela signifie que la mise en forme est un seul prop :

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Le mode sombre est à un ensemble de tokens près :

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Le redesign lui-même a une apparence plus propre et moderne : séparateurs fins, boutons et puces de vote en forme de pilule, boutons principaux remplis, avatars arrondis, et une échelle typographique cohérente. Le prop `styles` est toujours là pour des remplacements chirurgicaux, donc les intégrations existantes continuent de fonctionner.

### Un Widget de Chat En Direct Dédié

Nous avons ajouté `FastCommentsLiveChat`, un preset de chat basé sur le même moteur qui reflète la vue de chat de notre SDK Android : messages chronologiques avec les plus récents en bas, le compositeur en dessous de la liste, une barre supérieure en direct avec un point de connexion et un compte d'utilisateurs, un défilement automatique qui pause pendant que vous lisez les messages anciens, et un historique infini à mesure que vous faites défiler vers le haut. Chaque preset est personnalisable via `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Maintenant Sur le Web Aussi

Le même SDK fonctionne maintenant sur le web via `react-native-web`. Le compositeur de texte enrichi (alimenté par `react-native-enriched`) s'affiche de la même manière sur iOS, Android et dans le navigateur, donc l'expérience d'édition est cohérente partout avec une seule implémentation. Les superpositions que la liste de commentaires autrement couperait (menus, sélecteur de GIF, liste de notifications) sont ancrées sous leurs déclencheurs dans la version web.

### Garder le Courant Avec React Native

5.0 est construit et testé contre React Native 0.81 et React 19, et il cible la Nouvelle Architecture (Fabric), que l'éditeur de texte riche natif nécessite. Rester à jour ici n'est pas une perte de temps : l'éditeur, la gestion des gestes, et le rendu deviennent tous plus rapides et plus corrects à mesure que React Native progresse, et nous préférerions prendre ces mises à niveau régulièrement plutôt que de prendre du retard pendant des années.

### En Conclusion

Cette réécriture visait à donner au SDK React Native le même traitement de première classe que nos autres bibliothèques : un modèle de données rapide et prévisible, une apparence que vous pouvez personnaliser en un seul prop, un widget de chat, et un support web, le tout sur une base moderne de React Native.

Vous pouvez trouver le SDK sur <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> et la source, avec des exemples, sur <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Faites-nous savoir ci-dessous si vous rencontrez des problèmes.

À votre santé !

{{/isPost}}

---