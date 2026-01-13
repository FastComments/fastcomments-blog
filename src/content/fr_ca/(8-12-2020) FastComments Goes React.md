---
[category:API & Development]
###### [postdate]
# [postlink]FastComments passe à React[/postlink]

{{#unless isPost}}
Besoin d'intégrer des commentaires dans une application développée avec React ? Nous avons ce qu'il vous faut.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Quoi de Neuf

FastComments a maintenant un composant React qui est au même niveau de fonctionnalité que notre widget VanillaJS.

Nous avons décidé d'appeler la bibliothèque fastcomments-react. Vous pouvez trouver le dépôt GitHub avec le code source <a href="https://github.com/FastComments/fastcomments-react" target="_blank">ici</a>.

Le dépôt contient également des exemples d'utilisation du widget.

Il est disponible sur NPM, que vous pouvez trouver <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">ici</a>.

#### Comment ça Fonctionne

La façon dont ce nouveau composant fonctionne est que le composant React est un wrapper autour du widget FastComments existant.

Cela signifie que si nous ajoutons des fonctionnalités à nos composants existants ou corrigons des bugs, vous en bénéficierez immédiatement !

#### Pourquoi le Nouveau Composant ?

Nous avons écrit le widget FastComments VanillaJS pour être le cœur de notre entreprise (avec le cœur backend). Cela signifie que nous l'avons conçu pour être extensible de la même manière que nous le faisons maintenant.

Bien qu'en l'absence de cette nouvelle bibliothèque React, vous auriez pu intégrer FastComments dans votre application en écrivant votre propre bibliothèque, cela aurait été un obstacle majeur à l'adoption. En prenant en charge React directement, nous facilitons l'adoption de FastComments pour ce type de clients.

#### Applications à Page Unique ?

FastComments prend en charge les SPA à son cœur. Le composant surveille les changements dans l'objet de configuration - donc si vous mettez à jour la page actuelle (appelée urlId), le widget se re-rendra.

#### Qu'est-ce Qui Change pour les Clients Existants

Rien ne change pour les clients existants - et il n'y a **rien** de mal à utiliser la version VanillaJS de FastComments pour de nouveaux projets. fastcomments-react dépend de la version VanillaJS de FastComments et le fera toujours. Si nous publions des composants Angular ou Vue, nous suivrons le même modèle.

Notre widget VanillaJS est un citoyen de première classe de FastComments. Cette version est complètement *additive* à notre infrastructure.

De plus, le widget VanillaJS reste toujours une excellente solution pour intégrer des commentaires embarqués dans n'importe quelle page web qui n'utilise pas de framework, comme une page statique.

#### En Conclusion

En publiant la bibliothèque fastcomments-react, et de futures bibliothèques, nous espérons faciliter l'adoption de FastComments par les développeurs tout en utilisant des méthodologies de développement modernes.

Santé !

{{/isPost}}

---