---
[category:UI & Customization]

###### [postdate]
# [postlink]Les tailles de page sont maintenant personnalisables[/postlink]

{{#unless isPost}}
FastComments avait une taille de page fixe de 30 commentaires depuis le lancement. Cela est maintenant personnalisable !
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Vos fils de commentaires peuvent désormais avoir des tailles de pagination variables, et cela peut maintenant être personnalisé globalement sur votre compte, ou au niveau du site, ou même de la page. Cela peut être souhaitable si vous souhaitez que certaines pages affichent moins ou plus de commentaires avant que l'utilisateur ne doive paginer.

Cela affecte également le défilement infini, et tous les frameworks ou intégrations affichant des commentaires de FastComments.

Les tailles de page peuvent varier de `10` jusqu'à `200`. La valeur par défaut reste à `30`.

### Comment l'obtenir

Il vous suffit de vous rendre sur l'interface [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) et de définir votre taille de page.

Notez que FastComments pré-calcule les commentaires affichés sur chaque page, donc changer ce paramètre déclenchera notre système pour recalculer tous vos fils de commentaires. Cela ne causera aucun temps d'arrêt, mais cela peut prendre quelques minutes pour que le changement soit visible.

### Documentation

La documentation mise à jour sur les tailles de page peut être trouvée sur [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Changements Importants

Dans le cadre de ce changement, deux traductions définies dans le widget de commentaire ont été renommées. `PREV_30` et `NEXT_30` sont désormais `PREV` et `NEXT`, respectivement, et contiennent une variable `[count]`.

Si vous avez défini des traductions pour les boutons de pagination via l'interface Widget Customization UI, nous les avons déjà migrées pour vous. Si vous passez les traductions dans une sorte d'intégration via le code, vous devrez mettre à jour celles-ci :

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et bien publier cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Cheers !

{{/isPost}}

---