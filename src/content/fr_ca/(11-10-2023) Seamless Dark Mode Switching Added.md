---
[category:UI & Customization]

###### [postdate]
# [postlink]Ajout d'un changement de mode sombre sans couture[/postlink]

{{#unless isPost}}
FastComments a toujours pris en charge le mode sombre. Cependant, il nécessitait auparavant un rechargement du widget de commentaire pour passer en mode sombre. Cela a été corrigé.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments a toujours pris en charge le mode sombre. Cependant, il nécessitait auparavant un rechargement du widget de commentaire pour passer en mode sombre.

Cela signifie que si un site utilisait le mode sombre, ou permettait aux utilisateurs de passer d'un mode à l'autre entre clair et sombre, nous devions 
complètement supprimer le widget de commentaire du navigateur et le recharger. Cela a été fait pour des raisons techniques afin de simplifier le produit
au lancement initial, car l'état doit être communiqué dans les deux sens entre la page parente et l'iframe du widget.

Étant donné que la saison d'Halloween est maintenant terminée, le changement de mode sombre a été amélioré. Le widget de commentaire prend désormais en charge les transitions sans couture entre les modes clair 
et sombre. Cependant, il nécessite toujours de passer le drapeau `hasDarkBackground` lorsque cela est applicable.

### Pour les Développeurs & Pièges

Pour indiquer au widget de commentaire que votre site est en mode sombre - ou a un arrière-plan sombre appliqué - vous devez passer le 
drapeau `hasDarkBackground`. Cela ne change pas. Cependant, maintenant lorsque vous appelez `instance.update(newConfig)` (ou changez l'état
dans l'une de nos bibliothèques comme React, Svelte, etc), nous détecterons si le seul paramètre changé est `hasDarkBackground` et si c'est le cas,
nous mettrons à jour le widget de commentaire de manière élégante. Le widget chargera en arrière-plan l'extension de mode sombre de manière asynchrone et mettra à jour son style 
si nécessaire.

Un des principaux pièges est que lorsque vous passez `newConfig` - cela doit être un objet totalement nouveau pour que cette fonctionnalité fonctionne.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et déployer correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---