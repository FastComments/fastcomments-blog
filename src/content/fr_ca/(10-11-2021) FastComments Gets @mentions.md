---
[category:Features]
###### [postdate]
# [postlink]FastComments obtient des @mentions[/postlink]

{{#unless isPost}}
Avez-vous déjà voulu @mentionner un ou plusieurs utilisateurs dans un commentaire ? Maintenant, c'est possible.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Alors qu'auparavant FastComments notifiait les utilisateurs si vous répondiez à leurs commentaires, il n'y avait aucun moyen de taguer plusieurs personnes dans un seul commentaire. De plus, ces
notifications étaient envoyées par lots chaque heure. Avec `@mentions`, il est désormais possible de taguer un ou plusieurs utilisateurs et FastComments les notifiera immédiatement par e-mail.

### Comment l'Utiliser

Lorsque vous tapez `@`, puis le début du nom d'un utilisateur, une liste de résultats de recherche apparaîtra.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Utilisation des Mentions" title="Démo des @mentions" />
</div>

Cliquez simplement sur le nom de l'utilisateur que vous souhaitez taguer.

De plus, vous pouvez utiliser les touches fléchées haut et bas pour naviguer dans cette liste et appuyer sur Entrée pour sélectionner, ou Échap pour quitter.

Nous savons que vous pouvez vouloir utiliser le symbole `@` sans taguer un utilisateur. FastComments détectera cela et n'interférera pas avec votre expérience de saisie.

### Qui en Bénéficie

Tous les clients FastComments actuels et nouveaux, sur tous les niveaux, ont maintenant accès aux `@mentions`. Les `@mentions` ont également été rétroportées vers des versions antérieures du
widget de commentaires.

### Comment Fonctionne l'Autocomplete

Les utilisateurs affichés dans la liste autocomplétée sont déterminés par :

- Les utilisateurs qui ont commenté sur la même page ou fil de discussion.
- Les utilisateurs qui ont créé leurs comptes FastComments via le même site.
- Les modérateurs du site actuel.
- Les utilisateurs SSO appartenant au locataire actuel.

### Édition de Commentaires

Les mentions peuvent être ajoutées aux commentaires existants en les éditant. Cependant, l'application `Modérer les Commentaires` ne complète actuellement pas les `@mentions`.

### Considérations Futures

À l'avenir, les utilisateurs qui ont FastComments ouvert dans une fenêtre de navigateur recevront une notification lorsqu'ils sont mentionnés, s'ils ont choisi de recevoir des notifications.

### En Conclusion

Comme le reste de FastComments, nous espérons que vous trouverez cette fonctionnalité rapide et facile à utiliser.

Santé !

{{/isPost}}

---