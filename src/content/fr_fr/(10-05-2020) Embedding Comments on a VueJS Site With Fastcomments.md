---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Intégrer des commentaires sur un site VueJS avec FastComments[/postlink]

{{#unless isPost}}
Vous devez intégrer des commentaires dans une application développée avec Vue ? Nous avons ce qu'il vous faut.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

#### Quoi de Neuf

FastComments dispose maintenant d'un composant Vue qui est équivalent en termes de fonctionnalités à notre widget VanillaJS.

Nous avons décidé d'appeler la bibliothèque fastcomments-vue. Vous pouvez trouver le dépôt GitHub avec le code source <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">ici</a>.

Le dépôt contient également des exemples d'utilisation du widget.

Il est disponible sur NPM, que vous pouvez trouver <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">ici</a>.

#### Comment Ça Marche

Le fonctionnement de ce nouveau composant est que le composant Vue est un wrapper autour du widget FastComments existant.
 
Cela signifie que si nous ajoutons des fonctionnalités à nos composants existants ou corrigeons des bugs, vous en bénéficierez immédiatement !

#### Pourquoi le Nouveau Composant ?

Nous avons écrit le widget VanillaJS FastComments pour être le cœur de notre activité (avec le backend central). Cela signifie que nous l'avons conçu pour être étendu exactement de la manière dont nous le faisons maintenant.

Bien qu'en l'absence de cette nouvelle bibliothèque Vue, vous auriez pu intégrer FastComments dans votre application en écrivant votre propre bibliothèque, cela aurait été un obstacle majeur à l'adoption. En prenant en charge Vue directement, nous facilitons considérablement l'adoption de FastComments pour ces types de clients.

#### Vue 3.0

Nous avons un composant construit spécifiquement pour Vue 3.0 appelé <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Applications à Page Unique ?

FastComments prend en charge les SPA par défaut. Le composant surveille les changements de l'objet config - donc si vous mettez à jour la page actuelle (appelée urlId), le widget se re-rendra.

#### Qu'est-ce qui Change pour les Clients Existants 

Rien ne change pour les clients existants - et il n'y a **rien** de mal à utiliser la version VanillaJS de FastComments pour de nouveaux projets. fastcomments-vue dépend de la version VanillaJS de FastComments et le fera toujours. Si nous publions des composants Angular ou Vue, nous suivre le même modèle.

Notre widget VanillaJS est un citoyen de première classe de FastComments. Cette version est complètement *additive* à notre infrastructure.

De plus, le widget VanillaJS reste une excellente solution pour intégrer des commentaires embarqués dans n'importe quelle page Web qui n'utilise pas de framework, comme une page statique.

#### En Conclusion

En publiant la bibliothèque fastcomments-vue, et futures bibliothèques, nous espérons faciliter l'adoption de FastComments pour les développeurs tout en utilisant des méthodologies de développement modernes. 

Cheers!

{{/isPost}}