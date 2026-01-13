---
[category:Features]

###### [postdate]
# [postlink]Publication des Noms d'Affichage[/postlink]

{{#unless isPost}}
FastComments a toujours pris en charge les noms d'affichage pour les utilisateurs SSO. Cependant, cela n'a jamais été accessible aux commentateurs réguliers. Aujourd'hui, cela change !
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments a toujours pris en charge les noms d'affichage pour les utilisateurs SSO. Cependant, cela n'a jamais été accessible aux commentateurs réguliers. Aujourd'hui, cela change !

Sur la page [Détails du Compte](https://fastcomments.com/auth/my-account/edit-details), vous pouvez désormais remplir un nouveau champ `Display Name`. Le `Display Name` sera affiché sur vos commentaires et vos profils.

### Emojis

Par le passé, les utilisateurs avaient des difficultés à utiliser des emojis dans les noms d'utilisateur car il faut entrer votre nom d'utilisateur pour se connecter. Cependant, maintenant, le `Display Name` peut contenir des emojis.

### Unicité et Abus

Le but du `Display Name` est qu'il n'est pas unique. Si deux utilisateurs de FastComments.com, sur deux grandes communautés très différentes, ont des noms similaires, nous souhaitons qu'ils puissent simplement définir leur nom d'affichage préféré. Cependant, nous ne pouvons pas restreindre où les gens commentent avec leur compte global FastComments, donc cela peut parfois entraîner de la confusion.

Avoir un nom similaire à un autre utilisateur, ou à un modérateur, en soi, n'est pas un cas d'abus. Cependant, si vous abusez de cela en vous faisant passer intentionnellement pour d'autres utilisateurs, nous pourrions désactiver cette fonctionnalité sur votre compte, et vous serez limité à utiliser simplement `username`.

### Connexion

Vous utilisez toujours votre nom d'utilisateur pour vous connecter - **pas votre nom d'affichage !**

### Pour les Développeurs & Pièges

Les objets `User` réguliers exposés via l'API ont désormais `displayName`.

### En Conclusion

Comme pour toutes les grandes publications, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---