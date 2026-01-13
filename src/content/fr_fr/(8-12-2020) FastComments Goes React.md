---
[category:API & Development]
###### [postdate]
# [postlink]FastComments passe à React[/postlink]

{{#unless isPost}}
Besoin d'intégrer des commentaires dans une application développée avec React ? Nous avons ce qu'il vous faut.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Quoi de neuf

FastComments dispose désormais d'un composant React qui est au même niveau de fonctionnalités que notre widget VanillaJS.

Nous avons décidé d'appeler la bibliothèque fastcomments-react. Vous pouvez trouver le dépôt GitHub avec le code source <a href="https://github.com/FastComments/fastcomments-react" target="_blank">ici</a>.

Le dépôt contient également des exemples d'utilisation du widget.

Il est disponible sur NPM, que vous pouvez trouver <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">ici</a>.

#### Comment cela fonctionne

Le fonctionnement de ce nouveau composant est que le composant React est un wrapper autour de l'existant widget FastComments.
 
Cela signifie que si nous ajoutons des fonctionnalités à nos composants existants ou corrigeons des bogues, vous en bénéficierez immédiatement !

#### Pourquoi le nouveau composant ?

Nous avons écrit le widget FastComments VanillaJS pour être le cœur de notre entreprise (avec le backend principal). Cela signifie que nous l'avons conçu pour être étendu précisément comme nous le faisons maintenant.

Bien qu'en l'absence de cette nouvelle bibliothèque React, vous auriez pu intégrer FastComments dans votre application en écrivant votre propre bibliothèque, cela aurait été un obstacle majeur à l'adoption. En supportant
React directement, nous facilitons considérablement l'adoption de FastComments pour ce type de clients.

#### Applications à page unique ?

FastComments prend en charge les SPAs au cœur de son fonctionnement. Le composant surveille les changements de l'objet de configuration - donc si vous mettez à jour la page actuelle (appelée urlId), le widget se
re-rendra.

#### Qu'est-ce qui change pour les clients existants 

Rien ne change pour les clients existants - et il n'y a **rien** de mal à utiliser la version VanillaJS de FastComments pour de nouveaux projets. fastcomments-react dépendra toujours de la version VanillaJS
de FastComments. Si nous publions des composants Angular ou Vue, nous suivrons le même modèle.

Notre widget VanillaJS est un citoyen de première classe de FastComments. Cette version est entièrement *additive* à notre infrastructure.

De plus, le widget VanillaJS reste une excellente solution pour intégrer des commentaires dans n'importe quelle page web qui n'utilise pas de framework, comme une page statique.

#### En conclusion

En publiant la bibliothèque fastcomments-react, et les futures bibliothèques, nous espérons que nous pourrons faciliter l'adoption de FastComments pour les développeurs tout en utilisant des méthodologies de développement modernes.

Santé !

{{/isPost}}

---