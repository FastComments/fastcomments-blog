---
[category:API & Development]

###### [postdate]
# [postlink]FastComments devient Angular[/postlink]

{{#unless isPost}}
Vous devez intégrer des commentaires dans une application développée avec Angular ? Nous avons ce qu'il vous faut.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Quoi de neuf

FastComments a désormais un composant Angular qui est à parité fonctionnelle avec notre widget VanillaJS.

Nous avons décidé d'appeler la bibliothèque ngx-fastcomments. Vous pouvez trouver le dépôt GitHub avec le code source <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">ici</a>.

Le dépôt contient également des exemples d'utilisation du widget sous la forme d'un espace de travail Angular.

Vous pouvez le trouver sur NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">ici</a>.

#### Comment cela fonctionne

Le fonctionnement de ce nouveau composant est que le composant Angular est un wrapper autour du widget FastComments existant.

Cela signifie que si nous ajoutons des fonctionnalités à nos composants existants ou corrigeons des bogues, vous en bénéficierez immédiatement !

#### Pourquoi le nouveau composant ?

Nous avons écrit le widget FastComments VanillaJS pour être le cœur de notre entreprise (avec le backend principal). Cela signifie que nous l'avons conçu pour être étendu de la même manière que nous le faisons maintenant.

Bien que sans cette nouvelle bibliothèque Angular, vous auriez pu intégrer FastComments dans votre application en écrivant votre propre bibliothèque, cela aurait constitué un obstacle majeur à l'adoption. En soutenant Angular directement, nous facilitons l'adoption de FastComments pour ce type de clients.

#### Applications à page unique ?

FastComments prend en charge les SPAs dans son cœur. Le composant surveille les modifications de l'objet de configuration à l'aide de la détection des changements. Par exemple, si vous mettez à jour la page actuelle (appelée urlId), le widget se re-rendra. Cela rend des cas d'utilisation comme le basculement en mode sombre ou l'ajout de la pagination faciles à mettre en œuvre.

#### Qu'est-ce qui change pour les clients existants

Rien ne change pour les clients existants - et il n'y a **rien** de mal à utiliser la version VanillaJS de FastComments pour de nouveaux projets. ngx-fastcomments dépend de la version VanillaJS de FastComments et le fera toujours. Si nous publions de nouveaux composants, nous suivrons le même modèle.

Notre widget VanillaJS est un citoyen de première classe de FastComments. Cette publication est complètement *additive* à notre infrastructure.

De plus, le widget VanillaJS reste toujours une excellente solution pour intégrer des commentaires dans n'importe quelle page web qui n'utilise pas de framework, comme une page statique.

#### En conclusion

En publiant la bibliothèque ngx-fastcomments et d'autres bibliothèques futures, nous espérons faciliter l'adoption de FastComments par les développeurs tout en utilisant des méthodologies de développement modernes.

Santé !

{{/isPost}}