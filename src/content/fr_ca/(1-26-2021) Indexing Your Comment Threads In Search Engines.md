---
[category:Performance]
###### [postdate]
# [postlink]Indexation de vos fils de commentaires dans les moteurs de recherche[/postlink]

{{#unless isPost}}
Nous avons amélioré les informations que les moteurs de recherche voient lors de l'exploration de votre site avec FastComments.
{{/unless}}

{{#isPost}}

## Quoi de neuf

Précédemment, lorsque les moteurs de recherche exploraient les sites Web avec FastComments installé, ils n'indexaient que la première page (les 30 premiers) commentaires.

C'était parce que précédemment les moteurs de recherche voyaient la même chose que vous lorsque vous visitiez votre site.

Maintenant, lorsqu'un moteur de recherche visite votre site, tous les commentaires seront chargés.

## Impacts sur le classement des pages

Les moteurs de recherche modernes prennent en compte de nombreux éléments lors du classement d'une page, y compris la pertinence du contenu sur la page par rapport à ce que vous recherchez, et même des éléments comme
le temps de chargement de cette page.

Ce changement signifie que l'intégralité du contenu de vos fils de commentaires est disponible pour l'indexation, augmentant potentiellement la pertinence des recherches. Cela montre également l'engagement, qui
est quelque chose que le moteur de recherche peut utiliser pour le classement.

Un facteur potentiel à considérer est la performance, car maintenant nous chargeons plus de commentaires, cependant lors de nos tests, nous avons constaté qu'il faudrait des centaines, voire des milliers de commentaires
dans un fil pour ralentir FastComments au point d'impacter vos temps de chargement de page et de provoquer un changement de classement.

Par exemple, notre page de démonstration avec plus de 100 commentaires, obtient toujours <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">un score de 99/100 sur Google PageSpeed Insights</a>.

## Les tests que nous avons réalisés

Nous nous sommes assurés que les moteurs de recherche voient désormais l'intégralité du fil de commentaires pour une page, et nous avons testé la performance du chargement de l'intégralité des fils de commentaires en une seule fois.

## Impact sur les clients existants

Si vous êtes un client existant utilisant FastComments, le changement a déjà été appliqué à votre compte, et aucune autre action n'est requise. Une fois que les moteurs de recherche ré-indexent vos pages,
tous les commentaires sur ces pages devraient être indexés.

## En conclusion

Nous espérons que vous avez trouvé cette mise à jour et sa documentation utiles. Bon commentaire !

{{/isPost}}