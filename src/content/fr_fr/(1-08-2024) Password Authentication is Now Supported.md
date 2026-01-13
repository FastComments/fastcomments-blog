---
[category:Sécurité]
[category:Fonctionnalités]
###### [postdate]
# [postlink]L'authentification par mot de passe est maintenant prise en charge[/postlink]

{{#unless isPost}}
Avec cette mise à jour, FastComments prend désormais en charge l'authentification traditionnelle par mot de passe en complément du système existant basé sur l'e-mail.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Depuis son lancement, FastComments s'authentifiait via des liens magiques par email. Cela était dû au fait que nous pouvions consolider nos mécanismes de connexion dans le même système utilisé
lorsqu'un utilisateur laisse son premier commentaire et vérifie/se connecte via un lien basé sur l'email. Cependant, tous les serveurs de messagerie ne se valent pas, et parfois
recevoir un lien pouvait prendre des minutes. Cela était très frustrant pour certains de nos utilisateurs.

À partir de fin 2023, FastComments prend désormais en charge l'authentification par mots de passe ! Sur la page de connexion, il y a maintenant deux onglets - un pour se connecter via email et un pour via
mot de passe.

### Comment définir un mot de passe

Vous pouvez définir un mot de passe en allant sur [Mon Compte -> Détails du Compte -> Changer de Mot de Passe](https://fastcomments.com/auth/my-account/edit-details/change-password).

Il suffit de demander un lien de réinitialisation. Un lien sera envoyé à votre email, et en cliquant dessus, vous pourrez définir un nouveau mot de passe. Le lien ne fonctionne qu'une seule fois et expire s'il n'est pas utilisé.

### Stockage et Sécurité des Mots de Passe

Les mots de passe ne sont pas stockés. Au lieu de cela, les mots de passe sont hachés avec un sel de 11 tours en utilisant bcrypt. La concurrence avec le système basé sur les mots de passe est limitée
et surveillée pour prévenir divers types d'attaques liées aux mots de passe.

### L'Avenir

À l'avenir, nous prévoyons également de prendre en charge l'authentification à deux facteurs (2FA).

### En Conclusion

Comme pour toutes les grandes versions, nous sommes ravis d'avoir pu prendre le temps d'optimiser, tester, et de bien déployer cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---