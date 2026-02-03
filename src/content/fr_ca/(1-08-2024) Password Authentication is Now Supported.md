---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]L'authentification par mot de passe est maintenant prise en charge[/postlink]

{{#unless isPost}}
Avec cette mise à jour, FastComments prend désormais en charge l'authentification traditionnelle par mot de passe en plus du système existant basé sur l'email.
{{/unless}}

{{#isPost}}

### Quoi de neuf

Depuis son lancement, FastComments authentifiait via des liens magiques envoyés par email. Cela était dû au fait que nous pouvions consolider nos mécanismes de connexion dans le même système utilisé
lorsqu'un utilisateur laisse son premier commentaire et vérifie/se connecte via un lien basé sur l'email. Cependant, tous les serveurs de messagerie ne fonctionnent pas de la même manière, et parfois
la réception d'un lien pouvait prendre des minutes. Ceci était très frustrant pour certains de nos utilisateurs.

Depuis la fin de 2023, FastComments prend désormais en charge l'authentification par mot de passe ! Sur la page de connexion, il y a maintenant deux onglets - un pour se connecter via email et un pour via
mot de passe.

### Comment définir un mot de passe

Vous pouvez définir un mot de passe en allant sur [Mon Compte -> Détails du Compte -> Changer de Mot de Passe](https://fastcomments.com/auth/my-account/edit-details/change-password).

Il vous suffit de demander un lien de réinitialisation. Un lien sera envoyé à votre email, et en cliquant dessus, vous pourrez définir un nouveau mot de passe. Le lien ne fonctionne qu'une seule fois et expire s'il n'est pas utilisé.

### Stockage et sécurité des mots de passe

Les mots de passe ne sont pas stockés. En effet, les mots de passe sont hachés avec un sel à 11 tours en utilisant bcrypt. La concurrence envers le système basé sur les mots de passe est limitée
et surveillée pour prévenir différents types d'attaques liées aux mots de passe.

### L'avenir

À l'avenir, nous prévoyons également de prendre en charge la 2FA.

### En conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

À la vôtre !

{{/isPost}}

---