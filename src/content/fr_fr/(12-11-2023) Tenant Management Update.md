---
[category:Features]
###### [postdate]
# [postlink]Mise à jour de la gestion des locataires[/postlink]

{{#unless isPost}}
FastComments a amélioré l'interaction pour gérer vos locataires !
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Depuis le 11 décembre 2023, FastComments propose désormais la possibilité de changer de locataire sans imiter d'autres utilisateurs locataires.

### Public Cible

Cette mise à jour n'est pas destinée aux commentateurs ou aux administrateurs de site qui gèrent un site unique. Elle bénéficie aux administrateurs qui gèrent plusieurs sites ou locataires uniquement.

### Impact sur les Administrateurs

Auparavant, la création de locataires et le changement d'utilisateurs étaient pénibles. Voici quelques points de douleur courants :

1. Vous deviez créer un utilisateur lors de la création de votre locataire, car cet utilisateur "possédait" le locataire.
2. Cela signifiait que vous deviez utiliser un nouvel email pour chaque site, même si vous vouliez utiliser un seul email/compte pour plusieurs sous-locataires.
3. Le changement de locataires nécessitait une usurpation d'identité, ce qui signifiait que vos utilisateurs devaient être dupliqués à travers tous les locataires, avec les mêmes autorisations, etc.

Maintenant :

1. Aucune création d'utilisateur n'est requise lors de la création d'un locataire.
2. Tout utilisateur Super Administrateur ayant les autorisations appropriées a les mêmes autorisations dans tous les sous-locataires.
3. Il y a un bouton `Switch` dans la liste des locataires qui conserve votre utilisateur et vos autorisations actuels, mais change le locataire auquel vous êtes connecté.
4. Si vous êtes administrateur d'un locataire parent, vous avez des autorisations de modérateur dans les sous-locataires lors de l'utilisation du widget de commentaires.

Les événements sont toujours enregistrés dans le Journal d'Audit pour le locataire auquel vous êtes basculé.

### Usurpation d'Identité

Vous pouvez toujours usurper des utilisateurs. Basculez vers un locataire et allez sur la page `Users`.

### Pour les Développeurs & À Savoir

Lors de l'utilisation de l'API `POST /tenants`, le champ `email` est désormais optionnel. La documentation a été mise à jour.

### Mises à Jour Futures

À l'avenir, il y aura d'autres actions administratives dans la liste des locataires, comme la suppression de locataires, etc.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---