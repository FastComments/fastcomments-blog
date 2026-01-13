---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Abandonner l'iframe pour le SEO[/postlink]

{{#unless isPost}}
Nous avons amélioré la visibilité de vos commentaires pour les moteurs de recherche, et augmenté la probabilité que le contenu soit attribué à votre site.
{{/unless}}

{{#isPost}}

## Quoi de Neuf

Auparavant, FastComments rendait vos fils de commentaires dans un iframe lorsqu'ils étaient analysés par des moteurs de recherche. Cela est dû au fait que l'application nécessite l'utilisation d'iframes pour la manière dont nous utilisons les cookies pour les sessions de vos utilisateurs.

Cependant, cela pose un problème pour les moteurs de recherche, car ils ne garantissent pas que le contenu dans l'iframe sera attribué à votre site.

Maintenant, lors du rendu des commentaires, le script d'intégration vérifiera si la page est chargée par un robot d'exploration. Si c'est le cas, il n'utilisera pas d'iframe !

## Combien de Commentaires Sont Affichés

Jusqu'à 2 000 commentaires seront affichés aux moteurs de recherche pour une page. Ils seront triés en fonction de votre ordre de tri configuré par défaut.

## Les Tests Que Nous Avons Réalisés

Nous nous sommes assurés que les moteurs de recherche voient désormais l'ensemble du fil de commentaires d'une page, et nous avons testé la performance du chargement de l'ensemble des fils de commentaires à la fois.

## Impact sur les Clients Existants

Si vous êtes un client existant utilisant FastComments, le changement a déjà été appliqué à votre compte, et aucune action supplémentaire n'est requise. Une fois que les moteurs de recherche réindexeront vos pages, tous les commentaires sur ces pages devraient être indexés.

## En Conclusion

Nous espérons que vous avez trouvé cette mise à jour et sa documentation utiles. Bonne modération des commentaires !

{{/isPost}}