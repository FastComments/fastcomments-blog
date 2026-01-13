---
[category:Features]

###### [postdate]
# [postlink]Lancement des Noms d'Affichage[/postlink]

{{#unless isPost}}
FastComments a toujours pris en charge les noms d'affichage pour les utilisateurs SSO. Cependant, cela n'était jamais accessible aux commentateurs réguliers. Aujourd'hui, cela change !
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments a toujours pris en charge les noms d'affichage pour les utilisateurs SSO. Cependant, cela n'était jamais accessible aux commentateurs réguliers. Aujourd'hui, cela change !

Dans la page [Détails du Compte](https://fastcomments.com/auth/my-account/edit-details), vous pouvez maintenant remplir un nouveau champ `Nom d'Affichage`. Le `Nom d'Affichage` sera  
affiché sur vos commentaires et vos profils.

### Émojis

Dans le passé, les utilisateurs avaient des difficultés à utiliser des émojis dans les noms d'utilisateur car vous devez entrer votre nom d'utilisateur pour vous connecter. Cependant, maintenant, le `Nom d'Affichage` peut contenir des émojis.

### Unicité et Abus

Le but du `Nom d'Affichage` est qu'il n'est pas unique. Si deux utilisateurs de FastComments.com, dans deux grandes communautés très différentes, ont des noms similaires, nous aimerions  
qu'ils puissent simplement définir leur nom d'affichage préféré. Cependant, nous ne pouvons pas restreindre où les gens commentent avec leur compte global FastComments, donc cela peut parfois  
entraîner de la confusion.

Avoir un nom similaire à un autre utilisateur, ou à un modérateur, en soi n'est pas un cas d'abus. Cependant, si vous abusez de cela en vous faisant passer intentionnellement pour d'autres utilisateurs, nous pourrions  
désactiver cette fonctionnalité sur votre compte, et vous serez limité à utiliser uniquement `nom d'utilisateur`.

### Connexion

Vous utilisez toujours votre nom d'utilisateur pour vous connecter - **pas votre nom d'affichage !**

### Pour les Développeurs & Pièges

Les objets `Utilisateur` réguliers exposés via l'API ont maintenant `displayName`.

### En Conclusion

Comme pour tous les lancements majeurs, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de lancer correctement cette fonctionnalité. Faites-nous savoir  
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---