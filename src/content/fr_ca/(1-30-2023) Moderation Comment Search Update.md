---
[category:Moderation]
[category:Features]

###### [postdate]
# [postlink]Mise à jour de la recherche de commentaires en modération[/postlink]

{{#unless isPost}}
FastComments vous permet désormais de rechercher par page et utilisateur sur la page de modération des commentaires.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Auparavant, FastComments vous permettait de rechercher par phrases ou correspondance exacte dans la page de modération des commentaires.

Maintenant, vous pouvez rechercher des commentaires de plusieurs manières :

- Recherche de mots flous : **les chats aiment**
- Correspondance exacte : **"J'aime les chats."**
- **_Nouveau !_** Par titre de page : **page:"Titre de la Page"**
  - Prend en charge l'autocomplétion.
  - Affiche le nombre de commentaires pour chaque page dans la liste de suggestions d'autocomplétion.
- **_Nouveau !_** Par URL de page : **page:"https://example.com/some-page"**
  - Prend en charge l'autocomplétion.
  - Affiche le nombre de commentaires pour chaque page dans la liste de suggestions d'autocomplétion.
- **_Nouveau !_** Par utilisateur : **user:"Bob"**
  - Prend en charge l'autocomplétion.

Vous pouvez partager les résultats de recherche avec d'autres modérateurs ou administrateurs en partageant l'URL de la page depuis la page de modération. La valeur du champ de recherche sera incluse dans l'URL dans votre navigateur après avoir cliqué sur "Go".

### Comment l'obtenir

Cette fonctionnalité a été déployée à tous les clients !

### Documentation

Le site de documentation a été mis à jour, et une documentation dédiée pour cette fonctionnalité [sera maintenue ici](https://docs.fastcomments.com/guide-moderation.html#search).

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---