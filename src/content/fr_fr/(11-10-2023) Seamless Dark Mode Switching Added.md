---
[category:UI & Customization]

###### [postdate]
# [postlink]Ajout du passage fluide en mode sombre[/postlink]

{{#unless isPost}}
FastComments a toujours pris en charge le mode sombre. Cependant, il nécessitait auparavant un rechargement du widget de commentaires pour passer en mode sombre. Cela a été corrigé.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments a toujours pris en charge le mode sombre. Cependant, il nécessitait auparavant un rechargement du widget de commentaires pour passer en mode sombre.

Cela signifie que si un site utilisait le mode sombre, ou permettait aux utilisateurs de basculer entre les modes clair et sombre, nous devions
complètement supprimer le widget de commentaires du navigateur et le recharger. Cela a été fait pour des raisons techniques afin de simplifier le produit
au lancement initial, car l'état doit être communiqué entre la page principale et l'iframe du widget.

Suite à la fin de la saison effrayante - le passage en mode sombre a été amélioré. Le widget de commentaires prend maintenant en charge des transitions fluides entre les modes
clair et sombre. Cependant, il nécessite toujours de passer le drapeau `hasDarkBackground` lorsque cela est applicable.

### Pour les Développeurs & Précautions

Pour indiquer au widget de commentaires que votre site est en mode sombre - ou a un arrière-plan sombre appliqué - vous devez passer le
drapeau `hasDarkBackground`. Cela ne change pas. Cependant, maintenant lorsque vous appelez `instance.update(newConfig)` (ou changez l'état
dans l'une de nos bibliothèques comme React, Svelte, etc), nous détecterons si le seul paramètre modifié est `hasDarkBackground` et, si c'est le cas,
nous mettrons gracieusement à jour le widget de commentaires. Le widget chargera en arrière-plan l'extension du mode sombre de manière asynchrone et mettra à jour son style
si nécessaire.

Une précaution majeure est que lorsque vous passez `newConfig` - cela doit être un tout nouvel objet pour que cette fonctionnalité fonctionne.

### En Conclusion

Comme pour toutes les versions majeures, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---