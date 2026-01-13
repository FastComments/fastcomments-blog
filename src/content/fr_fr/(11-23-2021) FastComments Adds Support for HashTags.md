---
[category:Features]

###### [postdate]
# [postlink]FastComments ajoute le support des #HashTags[/postlink]

{{#unless isPost}}
Vous avez déjà voulu #taguer un sujet ou une information ? Maintenant, vous pouvez.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Lors de la rédaction d'un commentaire, les utilisateurs peuvent maintenant entrer un ou plusieurs `#hashtags`. En cliquant sur un `#hashtag` dans un commentaire, vous serez dirigé vers une vue contenant d'autres commentaires avec le hashtag affiché.

De plus, les `#hashtags` peuvent être utilisés pour lier à des contenus externes. Avec cette version, nous avons lancé notre [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure) qui permet de pré-remplir des hashtags dans votre compte.

Lors du pré-remplissage des hashtags, nous pouvons définir une URL pour chaque tag. Cela signifie que les `#hashtags` peuvent également être utilisés pour lier, par exemple, à un numéro de ticket ou à un document dans un CRM.

Le symbole `#` peut également être personnalisé, sur demande.

### Comment l'Utiliser

Lorsque vous tapez `#`, puis le début d'un hashtag, une liste de résultats de recherche apparaîtra.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="Utilisation des HashTags" title="#hashtags Démo" />
</div>

Il vous suffit de cliquer sur le hashtag que vous souhaitez ajouter.

De plus, vous pouvez utiliser les touches de flèche haut et bas pour naviguer dans cette liste, et appuyer sur entrée pour sélectionner, ou échapper pour quitter.

Nous savons que vous pouvez vouloir utiliser le symbole `#` sans ajouter de hashtag. FastComments le détectera et ne perturbera pas votre expérience de saisie.

### Ajouter des Hash Tags

Si le hashtag que vous souhaitez utiliser n'est pas dans la liste des suggestions - FastComments créera simplement automatiquement le hashtag en arrière-plan.

La création automatique de `#hashtag` peut être désactivée selon la documentation [ici](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Qui en Bénéficie

Tous les clients FastComments actuels et nouveaux, sur tous les niveaux, ont maintenant accès aux `#hashtags`. Les `#hashtags` ont également été portés en arrière vers des versions antérieures du widget de commentaire.

### Comment Fonctionne l'Autocomplétion

Les tags affichés dans la liste autocomplétée proviennent uniquement de votre compte. Les HashTags ne sont pas partagés entre les locataires de FastComments.

### Documentation

Il existe une documentation dédiée pour les `#hashtags`. Voir ici : https://docs.fastcomments.com/guide-hashtags.html

### En Conclusion

Comme le reste de FastComments, nous espérons que vous trouverez cette fonctionnalité rapide et facile à utiliser.

Cheers!

{{/isPost}}

---