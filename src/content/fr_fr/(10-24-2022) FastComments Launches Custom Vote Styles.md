---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments lance des styles de vote personnalisés[/postlink]

{{#unless isPost}}
Vous avez toujours voulu passer du style de vote par défaut up/down à simplement une icône de cœur ? Maintenant, vous pouvez.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Auparavant, pour personnaliser la barre de vote, il fallait écrire du code personnalisé et du CSS. Cela signifiait également que si vous vouliez faire quelque chose comme, activer le vote anonyme, mais désactiver les votes négatifs, cela nécessitait non seulement du code personnalisé mais aussi que les requêtes de vote ne pouvaient pas être validées côté serveur. Cela signifiait que les gens pouvaient toujours voter négativement de manière anonyme en appelant directement le serveur, ce qui s'est produit dans certaines communautés.

Nous avons maintenant introduit le concept de `voteStyle` dans la plateforme, avec le premier nouveau style de vote étant l'icône de cœur que beaucoup ont demandée.

Lorsqu'il est défini via l'interface de personnalisation du widget, cela ajoute également une validation à la plateforme, ce qui empêche complètement les votes négatifs, de sorte que les hackers ne peuvent plus contourner l'interface et voter négativement un utilisateur à sa perte, comme cela pourrait se produire si le vote anonyme était activé. 

### Comment l'Utiliser

Allez sur l'[Interface de Personnalisation du Widget](https://fastcomments.com/auth/my-account/customize-widget) et sélectionnez `Cœur` sous `Style de Vote`.

### Documentation

La documentation officielle pour cette fonctionnalité est [disponible sur docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Qui en Bénéficie

Tous les clients actuels et nouveaux de FastComments, sur tous les niveaux, ont désormais accès aux styles de vote personnalisés. Cette fonctionnalité est uniquement prise en charge par la v2 du widget de commentaires et les versions ultérieures.

### Optimisations

Le code pour les différents styles de vote n'est pas inclus dans le téléchargement client du widget, sauf s'il est activé, pour éviter le gonflement du produit.

### À Venir

Nous avons maintenant la capacité d'ajouter différents types de votes et de réactions, ce que nous pourrions faire dans le futur.

### En Conclusion

Comme le reste de FastComments, nous espérons que vous trouverez cette fonctionnalité rapide et facile à utiliser.

À votre santé !

{{/isPost}}

---