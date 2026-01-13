---
[category:Modération]

###### [postdate]
# [postlink]Les fils de commentaires peuvent désormais être fermés facilement[/postlink]

{{#unless isPost}}
FastComments a toujours permis de marquer les fils de commentaires comme étant en lecture seule via du code ou des règles de personnalisation, mais cela peut désormais être facilement fait depuis le widget de commentaires lui-même.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments a toujours permis de marquer les fils de commentaires comme étant en lecture seule via du code ou des règles de personnalisation, mais cela peut désormais être facilement fait depuis le widget de commentaires lui-même.

Dans le menu à trois points en haut de la zone de commentaires, les administrateurs ou toute personne ayant une autorisation de modération auront désormais l'option de **fermer** un fil de commentaires, et potentiellement de **le rouvrir** plus tard à tout moment.

Cela diffère légèrement de la définition des fils comme `readonly` que vous avez peut-être utilisée jusqu'à présent. Marquer un fil comme `readonly` signifie qu'absolument rien ne peut changer sur la page - plus de commentaires, plus de votes, plus d'édition de commentaires, plus de suppression de commentaires.

Fermer un fil de commentaires est un peu différent - des commentaires ne peuvent pas être ajoutés, mais les utilisateurs peuvent toujours supprimer leurs commentaires si désiré. De plus, des votes peuvent toujours être laissés ou retirés.

### En Direct

Comme le reste de FastComments, fermer et rouvrir des fils de commentaires se fait en direct et affectera instantanément tous les utilisateurs visualisant ce fil.

### Comment l'obtenir

Cette fonctionnalité a été déployée à tous les clients !

### Personnalisations de Texte

Une nouvelle traduction, `THREAD_CLOSED`, avec la valeur anglaise par défaut de `Ce fil de commentaires a été fermé pour de nouveaux commentaires.` a été ajoutée.

Ce texte peut toujours être personnalisé via l'interface de personnalisation du widget.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Cordialement !

{{/isPost}}

---