---
[category:Features]
###### [postdate]
# [postlink]FastComments reçoit les @mentions[/postlink]

{{#unless isPost}}
Vous avez toujours voulu @mentionner un ou plusieurs utilisateurs dans un commentaire ? Maintenant, c'est possible.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Alors qu'auparavant, FastComments notifiait les utilisateurs si vous répondiez à leurs commentaires, il n'y avait aucun moyen de taguer plusieurs personnes dans un seul commentaire. De plus, ces notifications étaient envoyées par lots toutes les heures. Avec les `@mentions`, il est maintenant possible de taguer un ou plusieurs utilisateurs et FastComments les notifiera immédiatement par email.

### Comment l'Utiliser

Lorsque vous tapez `@`, puis le début du nom d'un utilisateur, une liste de résultats de recherche apparaîtra.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Utilisation des Mentions" title="Démonstration des @mentions" />
</div>

Il vous suffit de cliquer sur le nom de l'utilisateur que vous souhaitez taguer.

De plus, vous pouvez utiliser les touches fléchées haut et bas pour naviguer dans cette liste, et appuyer sur entrée pour sélectionner, ou échapper pour sortir.

Nous savons que vous pouvez vouloir utiliser le symbole `@` sans taguer un utilisateur. FastComments le détectera et ne perturbera pas votre expérience de frappe.

### Qui en Bénéficie

Tous les clients actuels et nouveaux de FastComments, sur tous les niveaux, ont maintenant accès aux `@mentions`. Les `@mentions` ont été rétroportées aux versions antérieures du widget de commentaire.

### Comment Fonctionne l'Auto-complétion

Les utilisateurs affichés dans la liste auto-complétée sont déterminés par :

- Les utilisateurs qui ont commenté sur la même page ou fil de discussion.
- Les utilisateurs qui ont créé leurs comptes FastComments via le même site.
- Les modérateurs du site actuel.
- Les utilisateurs SSO qui appartiennent au locataire actuel.

### Édition des Commentaires

Les mentions peuvent être ajoutées à des commentaires existants en les éditant. Cependant, l'application `Modérer les Commentaires` ne complète actuellement pas les `@mentions`.

### Considérations Futures

À l'avenir, les utilisateurs qui ont FastComments ouvert dans une fenêtre de navigateur recevront une notification lorsqu'ils sont mentionnés, s'ils ont choisi de recevoir des notifications.

### En Conclusion

Comme le reste de FastComments, nous espérons que vous trouverez cette fonctionnalité rapide et facile à utiliser.

Santé !

{{/isPost}}