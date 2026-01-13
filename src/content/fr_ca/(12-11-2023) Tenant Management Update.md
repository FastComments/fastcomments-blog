---
[category:Features]
###### [postdate]
# [postlink]Mise à jour de la gestion des locataires[/postlink]

{{#unless isPost}}
FastComments a amélioré l'interaction pour gérer vos locataires !
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Depuis le 11 décembre 2023, FastComments offre désormais la possibilité de changer de locataire sans imiter les autres utilisateurs locataires.

### Public Cible

Cette mise à jour n'est pas destinée aux commentateurs ou aux administrateurs de site qui gèrent un seul site. Cela bénéficie uniquement aux administrateurs qui gèrent plusieurs sites ou locataires.

### Impact pour les Administrateurs

Auparavant, créer des locataires et changer d'utilisateurs était compliqué. Certains points de douleur communs étaient :

1. Vous deviez créer un utilisateur lors de la création de votre locataire, car cet utilisateur « possédait » le locataire.
2. Cela signifiait que vous deviez utiliser un nouvel e-mail pour chaque site, même si vous souhaitiez utiliser un e-mail/compte unique pour plusieurs sous-locataires.
3. Changer de locataire nécessitait une imitation, ce qui signifiait que vos utilisateurs devaient être dupliqués sur tous les locataires, avec les mêmes autorisations, etc.

Maintenant :

1. Aucune création d'utilisateur n'est requise lors de la création d'un locataire.
2. Tout utilisateur Super Admin avec les autorisations appropriées a les mêmes autorisations dans tous les sous-locataires.
3. Il y a un bouton `Switch` dans la liste des locataires qui conserve votre utilisateur et vos autorisations actuelles, mais change de locataire où vous êtes connecté.
4. Si vous êtes un administrateur d'un locataire parent, vous avez des permissions de modérateur dans les sous-locataires lorsque vous utilisez le widget de commentaire.

Les événements sont toujours enregistrés dans le journal d'audit pour le locataire vers lequel vous êtes passé.

### Imitation

Vous pouvez toujours imiter des utilisateurs. Changez de locataire et accédez à la page `Users`.

### Pour les Développeurs & Pièges

Lors de l'utilisation de l'API `POST /tenants`, le champ `email` est maintenant optionnel. La documentation a été mise à jour.

### Futures Mises à Jour

À l'avenir, il y aura d'autres actions administratives dans la liste des locataires, comme la suppression de locataires, et ainsi de suite.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes ravis d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité. Faites-le nous savoir ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---