---
[category:UI & Customization]
###### [postdate]
# [postlink]Lancement des styles de vote personnalisés de FastComments[/postlink]

{{#unless isPost}}
Vous avez déjà voulu passer du style de vote par défaut haut/bas à une simple icône de cœur? Maintenant, c'est possible.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Auparavant, pour personnaliser la barre de vote, il fallait écrire du code personnalisé et du CSS. Cela signifiait aussi que si vous vouliez faire quelque chose comme activer le vote anonyme, mais désactiver les votes négatifs, 
cela nécessitait non seulement un code personnalisé mais les demandes de vote ne pouvaient pas être validées côté serveur. Cela signifiait que les gens pouvaient toujours voter négativement de manière anonyme en appelant directement le serveur, ce qui s'est produit dans certaines communautés.

Nous avons maintenant introduit le concept de `voteStyle` dans la plateforme, le premier nouveau style de vote étant l'icône de cœur que beaucoup ont demandée.

Lorsqu'il est défini via l'interface de personnalisation du widget, cela ajoute également une validation à la plateforme, ce qui empêche complètement les votes négatifs, afin que les hackers ne puissent plus contourner l'interface utilisateur et faire voter un utilisateur dans l'oubli, 
comme cela pourrait arriver si le vote anonyme était activé.

### Comment l'Utiliser

Allez à l'[interface de personnalisation du widget](https://fastcomments.com/auth/my-account/customize-widget) et sélectionnez `Cœur` sous `Style de Vote`.

### Documentation

Les documents officiels pour cette fonctionnalité sont [disponibles sur docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Qui en Bénéficie

Tous les clients FastComments actuels et nouveaux, sur tous les niveaux, ont maintenant accès aux styles de vote personnalisés. Cette fonctionnalité est uniquement prise en charge par la v2 du widget de commentaires et suivant.

### Optimisations

Le code pour les différents styles de vote n'est pas inclus dans le téléchargement client du widget à moins d'être activé, pour éviter l'encombrement du produit.

### À Venir

Nous avons maintenant la capacité d'ajouter différents types de votes et de réactions, ce que nous pourrions faire à l'avenir.

### En Conclusion

Comme le reste de FastComments, nous espérons que vous trouverez cette fonctionnalité rapide et facile à utiliser.

Cheers!

{{/isPost}}

---