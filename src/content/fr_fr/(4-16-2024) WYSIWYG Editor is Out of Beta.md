---
[category:Features]

###### [postdate]
# [postlink]L'éditeur WYSIWYG de FastComments est sorti de la phase beta[/postlink]

{{#unless isPost}}
Les clients peuvent désormais choisir d'utiliser le nouvel éditeur qui n'utilise pas de balises d'ancre visibles pour le formatage.
{{/unless}}

{{#isPost}}

### Quoi de neuf

Les utilisateurs de FastComment ont toujours eu la possibilité de formater leurs commentaires avec des balises d'ancre comme `<b>ceci</b>`. Cela est très familier à quiconque ayant utilisé un forum internet dans le passé, ou beaucoup de nos concurrents, cependant certains utilisateurs et communautés s'attendent à un comportement différent.

Vous pouvez désormais styliser le texte dans la zone de commentaire sans balises d'ancre, car la zone de saisie de texte peut être convertie en `contenteditable`.

À des fins de démonstration, cela a été activé sur ce blog.

L'éditeur avancé a exactement le même aspect que l'ancien éditeur, il ne utilise juste pas de balises d'ancre visibles.

### Activation de l'édition avancée

Dans la personnalisation du widget, vous pouvez simplement activer `Éditeur avancé` et cliquer sur enregistrer. La documentation est [ici](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Pour les développeurs et subtilités

Vous pouvez trouver la documentation pour activer cela dans le code [ici](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), bien que nous recommandions d'utiliser l'interface utilisateur de personnalisation du widget car cela entraînera moins de données envoyées lors de chaque chargement de page.

Le HTML généré par le contenu éditable est légèrement différent de l'ancien éditeur de zone de texte, donc gardez cela à l'esprit si vous analysez des commentaires depuis l'API.

### Optimisations

Nous avons évité que le widget de commentaire ne gonfle avec cette nouvelle fonctionnalité en l'ajoutant comme une extension qui se charge en arrière-plan lorsque cette fonctionnalité est activée, ce qui maintient le widget de commentaire par défaut petit et léger.

### En conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et relâcher correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Cheers!

{{/isPost}}

---