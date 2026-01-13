---
[category:Features]

###### [postdate]
# [postlink]L'éditeur WYSIWYG de FastComments est sorti de la phase bêta[/postlink]

{{#unless isPost}}
Les clients peuvent désormais choisir d'utiliser le nouvel éditeur qui n'utilise pas de balises d'ancrage visibles pour la mise en forme.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Les utilisateurs de FastComment ont toujours eu la possibilité de formater leurs commentaires avec des balises d'ancrage comme `<b>cela</b>`. Cela est très familier à quiconque a utilisé un forum internet par le passé, ou beaucoup de nos concurrents, cependant certains utilisateurs et communautés s'attendent à un comportement différent.

Vous pouvez désormais styliser le texte dans la zone de commentaire sans balises d'ancrage, car la zone de saisie de texte peut être passée en `contenteditable`.

À des fins de démonstration, cela a été activé sur ce blog.

L'éditeur avancé a exactement le même aspect que l'ancien éditeur, il n'utilise simplement pas de balises d'ancrage visibles.

### Activation de l'Édition Avancée

Dans la personnalisation du Widget, vous pouvez simplement activer `Éditeur Avancé` et enregistrer. La documentation est [ici](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Pour les Développeurs & Points de Vigilance

Vous pouvez trouver la documentation pour activer cela dans le code [ici](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg) même si nous recommandons d'utiliser l'interface utilisateur de personnalisation Widget car cela
résultera en moins de données envoyées lors de chaque chargement de page.

Le HTML généré à partir du contenu éditable est légèrement différent de l'ancien éditeur de textarea, donc gardez cela à l'esprit
si vous analysez des commentaires à partir de l'API.

### Optimisations

Nous avons empêché le widget de commentaire de grossir avec cette nouvelle fonctionnalité en l'ajoutant en tant qu'extension qui se charge en arrière-plan
quand cette fonctionnalité est activée, ce qui garde le widget de commentaire par défaut petit et léger.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes ravis d'avoir pu prendre le temps d'optimiser, tester et correctement publier cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---