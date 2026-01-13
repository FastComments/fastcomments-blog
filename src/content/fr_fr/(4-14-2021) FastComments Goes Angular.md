---
[category:API & Development]

###### [postdate]
# [postlink]FastComments passe à Angular[/postlink]

{{#unless isPost}}
Besoin d'intégrer des commentaires dans une application développée avec Angular ? Nous avons ce qu'il vous faut.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient un Langage Technique

#### Quoi de Neuf

FastComments dispose maintenant d'un composant Angular qui est au même niveau de fonctionnalités que notre widget VanillaJS.

Nous avons décidé d'appeler la bibliothèque ngx-fastcomments. Vous pouvez trouver le dépôt GitHub avec le code source <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">ici</a>.

Le dépôt contient également des exemples d'utilisation du widget sous la forme d'un espace de travail Angular.

Vous pouvez le trouver sur NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">ici</a>.

#### Comment ça Marche

Le fonctionnement de ce nouveau composant est que le composant Angular est un wrapper autour du widget FastComments existant.

Cela signifie que si nous ajoutons des fonctionnalités à nos composants existants ou corrigeons des bugs, vous en bénéficierez immédiatement !

#### Pourquoi le Nouveau Composant ?

Nous avons écrit le widget FastComments VanillaJS pour être le cœur de notre activité (avec le backend principal). Cela signifie que nous l'avons conçu pour être extensible de la façon dont nous le faisons maintenant.

Bien qu'en l'absence de cette nouvelle bibliothèque Angular, vous auriez pu intégrer FastComments dans votre application en écrivant votre propre bibliothèque, cela aurait constitué un obstacle majeur à l'adoption. En prenant en charge Angular directement, nous facilitons l'adoption de FastComments pour ce type de clients.

#### Applications à Page Unique ?

FastComments prend en charge les SPA à sa base. Le composant surveille les modifications de l'objet de configuration en utilisant la détection de changement. Par exemple, si vous mettez à jour la page actuelle (appelée urlId), le widget sera re-rendu. Cela rend des cas d'utilisation comme le basculement en mode sombre ou l'ajout de pagination faciles à mettre en œuvre.

#### Quelles Changements pour les Clients Existants

Rien ne change pour les clients existants - et il n'y a **rien** de mal à utiliser la version VanillaJS de FastComments pour de nouveaux projets. ngx-fastcomments dépend de la version VanillaJS de FastComments et le fera toujours. Si nous publions de nouveaux composants, nous suivrons le même modèle.

Notre widget VanillaJS est un citoyen de première classe de FastComments. Cette version est complètement *additive* à notre infrastructure.

De plus, le widget VanillaJS reste une excellente solution pour intégrer des commentaires embarqués sur n'importe quelle page web ne utilisant pas de framework, comme une page statique.

#### En Conclusion

En publiant la bibliothèque ngx-fastcomments, et de futures bibliothèques, nous espérons faciliter l'adoption de FastComments par les développeurs tout en utilisant des méthodologies de développement modernes. 

À la vôtre !

{{/isPost}}

---