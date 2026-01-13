---
[category:Integrations]
###### [postdate]
# [postlink]Intégrer des commentaires sur un site GatsbyJS avec FastComments[/postlink]

{{#unless isPost}}
Vous pouvez maintenant utiliser FastComments pour intégrer des commentaires sur un site créé avec Gatsby !
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Quoi de neuf

Nous avons récemment lancé notre <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">composant React</a> pour FastComments.

Cela ouvre beaucoup d'opportunités - y compris l'intégration de FastComments avec Gatsby.

#### Si vous avez écrit votre propre wrapper

Si vous avez écrit votre propre wrapper React pour FastComments - envisagez de le remplacer par notre nouveau. Nous maintiendrons cette abstraction pour vous - et cela contient beaucoup de
choses intéressantes comme <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">le rechargement automatique lors des changements de configuration</a>.

#### Comment ça fonctionne

Puisque FastComments a un composant React comme wrapper autour de notre widget principal - il vous suffit d'utiliser notre bibliothèque React pour instancier le widget côté client.

Nous prenons en charge pleinement ce composant et le mettrons à jour.

#### Exemples ?

Nous avons commencé à mettre en place des exemples, que vous pouvez trouver <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">ici</a>.

#### Mode Nuit

Un des exemples que nous avons est le "mode nuit" - rendant FastComments sur un site avec un fond noir (ou très sombre) : <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

De plus, puisque le widget répond aux changements de configuration, cela signifie que vous pouvez avoir un mode pour basculer le thème de vos sites et dire facilement à fastcomments-react de se mettre à jour.

#### En conclusion

Nous espérons que vous trouverez l'intégration de FastComments dans votre site Gatsby rapide et facile.

Santé !

{{/isPost}}

---