---
[category:Features]

###### [postdate]
# [postlink]FastComments Ajoute le Support pour les #HashTags[/postlink]

{{#unless isPost}}
Vous avez toujours voulu #taguer un sujet ou une information ? Maintenant, c'est possible.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Lors de la saisie de commentaires, les utilisateurs peuvent maintenant entrer un ou plusieurs `#hashtags`. En cliquant sur un `#hashtag` dans un commentaire, vous serez redirigé vers une vue avec d'autres commentaires affichant le hashtag.

De plus, les `#hashtags` peuvent être utilisés pour lier à des contenus externes. Avec cette version, nous avons lancé notre [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
qui permet de préremplir des hashtags dans votre compte.

Lors de la préremplissage des hashtags, nous pouvons définir une URL pour chaque tag. Cela signifie que les `#hashtags` peuvent également être utilisés pour lier, par exemple, un numéro de ticket, ou
un document dans un CRM.

Le symbole `#` peut également être personnalisé, sur demande.

### Comment l'Utiliser

Lorsque vous tapez `#` et ensuite le début d'un hashtag, une liste de résultats de recherche apparaîtra.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="Utilisation des HashTags" title="#hashtags Démo" />
</div>

Il suffit de cliquer sur le hashtag que vous souhaitez ajouter.

De plus, vous pouvez utiliser les touches fléchées haut et bas pour naviguer dans cette liste, et appuyer sur entrée pour sélectionner, ou échapper pour quitter.

Nous savons que vous pouvez vouloir utiliser le symbole `#` sans ajouter de hashtag. FastComments détectera cela et ne perturbera pas votre expérience de saisie.

### Ajouter des Hash Tags

Si le hashtag que vous souhaitez utiliser n'est pas dans la liste des suggestions - FastComments va simplement créer automatiquement le hashtag en arrière-plan.

La création automatique de `#hashtag` peut être désactivée selon la documentation [ici](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Qui en Bénéficie

Tous les clients actuels et nouveaux de FastComments, sur tous les niveaux, ont maintenant accès aux `#hashtags`. Les `#hashtags` ont également été rétroportés vers les versions antérieures du
widget de commentaire.

### Comment Fonctionne l'Autocomplétion

Les tags affichés dans la liste autocomplétée proviennent uniquement de votre compte. Les HashTags ne sont pas partagés entre les locataires de FastComments.

### Documentation

Il existe une documentation dédiée pour les `#hashtags`. Voir ici : https://docs.fastcomments.com/guide-hashtags.html

### En Conclusion

Comme le reste de FastComments, nous espérons que vous trouverez cette fonctionnalité rapide et facile à utiliser.

Santé !

{{/isPost}}

---