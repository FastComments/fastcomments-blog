---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Intégrer des commentaires sur un site VueJS avec FastComments[/postlink]

{{#unless isPost}}
Besoin d'intégrer des commentaires dans une application développée avec Vue ? Nous avons ce qu'il vous faut.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Quoi de Neuf

FastComments a maintenant un composant Vue qui est à parité fonctionnelle avec notre widget VanillaJS.

Nous avons décidé d'appeler la bibliothèque fastcomments-vue. Vous pouvez trouver le dépôt GitHub avec le code source <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">ici</a>.

Le dépôt contient également des exemples d'utilisation du widget.

Il est disponible sur NPM, que vous pouvez trouver <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">ici</a>.

#### Comment ça Marche

Le fonctionnement de ce nouveau composant est que le composant Vue est un wrapper autour du widget FastComments existant.
 
Cela signifie que si nous ajoutons des fonctionnalités à nos composants existants ou corrigeons des bogues, vous en bénéficierez immédiatement !

#### Pourquoi le Nouveau Composant ?

Nous avons écrit le widget FastComments VanillaJS pour être le cœur de notre entreprise (en plus du backend central). Cela signifie que nous l'avons conçu pour être extensible, exactement de la manière dont nous agissons maintenant.

Bien que sans cette nouvelle bibliothèque Vue, vous auriez pu intégrer FastComments dans votre application en écrivant votre propre bibliothèque, cela aurait été un obstacle majeur à l'adoption. En supportant Vue directement, nous facilitons l'adoption de FastComments pour ces types de clients.

#### Vue 3.0

Nous avons un composant construit spécifiquement pour Vue 3.0 appelé <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Applications à Page Unique ?

FastComments supporte les SPA en son cœur. Le composant surveille les modifications de l'objet de configuration - donc si vous mettez à jour la page actuelle (appelée urlId), le widget
se re-rendra.

#### Qu'est-ce qui Change pour les Clients Existants

Rien ne change pour les clients existants - et il n'y a **rien** de mal à utiliser la version VanillaJS de FastComments pour de nouveaux projets. fastcomments-vue dépend de la version VanillaJS
de FastComments et le fera toujours. Si nous publions des composants Angular ou Vue, nous suivrons le même modèle.

Notre widget VanillaJS est un citoyen de première classe de FastComments. Ce lancement est complètement *additif* à notre infrastructure.

De plus, le widget VanillaJS reste une excellente solution pour intégrer des commentaires embarqués dans n'importe quelle page web qui n'utilise pas de framework, comme une page statique.

#### En Conclusion

En publiant la bibliothèque fastcomments-vue, et les bibliothèques futures, nous espérons faciliter l'adoption de FastComments pour les développeurs tout en utilisant des méthodologies de développement modernes. 

Santé !

{{/isPost}}

---