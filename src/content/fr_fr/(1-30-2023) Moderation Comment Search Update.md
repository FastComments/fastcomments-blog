---
[category:Modération]
[category:Fonctionnalités]

###### [postdate]
# [postlink]Mise à jour de la recherche de commentaires de modération[/postlink]

{{#unless isPost}}
FastComments vous permet maintenant de rechercher par page et utilisateur sur la page de modération des commentaires.
{{/unless}}

{{#isPost}}

### Quoi de neuf

Auparavant, FastComments vous permettait de rechercher par phrases ou correspondance exacte dans la page de modération des commentaires.

Maintenant, vous pouvez rechercher des commentaires de la manière suivante :

- Recherche floue de mots : **les chats aiment**
- Correspondance exacte de phrase : **"J'aime les chats."**
- **_Nouveau !_** Par titre de page : **page:"Titre de la Page"**
  - Prend en charge l'autocomplétion.
  - Affiche le nombre de commentaires pour chaque page dans la liste de suggestions d'autocomplétion.
- **_Nouveau !_** Par URL de page : **page:"https://example.com/some-page"**
  - Prend en charge l'autocomplétion.
  - Affiche le nombre de commentaires pour chaque page dans la liste de suggestions d'autocomplétion.
- **_Nouveau !_** Par utilisateur : **user:"Bob"**
  - Prend en charge l'autocomplétion.

Vous pouvez partager les résultats de recherche avec d'autres modérateurs ou administrateurs en partageant l'URL de la page depuis la page de modération. La valeur du champ de recherche sera incluse dans l'URL dans votre navigateur après avoir cliqué sur "Aller".

### Comment l'obtenir

Cette fonctionnalité a été déployée à tous les clients !

### Documentation

Le site de documentation a été mis à jour, et une documentation dédiée à cette fonctionnalité [sera maintenue ici](https://docs.fastcomments.com/guide-moderation.html#search).

### En conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de libérer correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

À bientôt !

{{/isPost}}

---