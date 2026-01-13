---
[category:Integrations]
###### [postdate]
# [postlink]Intégration des Commentaires sur un Site GatsbyJS avec FastComments[/postlink]

{{#unless isPost}}
Vous pouvez désormais utiliser FastComments pour intégrer des commentaires dans un site créé avec Gatsby !
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient un Jargon Technique

#### Quoi de Neuf

Nous avons récemment lancé notre <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">composant React</a> pour FastComments.

Cela ouvre de nombreuses opportunités - y compris l'intégration de FastComments avec Gatsby.

#### Si Vous Avez Écrit Votre Propre Wrapper

Si vous avez écrit votre propre wrapper React pour FastComments - envisagez de le remplacer par le nôtre. Nous maintiendrons cette abstraction pour vous - et elle contient beaucoup de choses intéressantes comme <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">rechargement automatique lors des changements de configuration</a>.

#### Comment Cela Fonctionne

Étant donné que FastComments a un composant React comme wrapper autour de notre widget principal - il s'agit simplement d'utiliser notre bibliothèque React pour instancier le widget côté client.

Nous soutenons entièrement ce composant et le garderons à jour.

#### Exemples ?

Nous avons commencé à mettre en place des exemples, que vous pouvez trouver <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">ici</a>.

#### Mode Nuit

L'un des exemples que nous avons est le "mode nuit" - rendant FastComments sur un site avec un fond noir (ou très sombre) : <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

De plus, puisque le widget réagit aux changements de configuration, cela signifie que vous pouvez avoir un mode pour basculer le thème de votre site et dire facilement à fastcomments-react de mettre à jour.

#### En Conclusion

Nous espérons que vous trouverez l'intégration de FastComments dans votre site Gatsby rapide et facile.

Santé !

{{/isPost}}

---