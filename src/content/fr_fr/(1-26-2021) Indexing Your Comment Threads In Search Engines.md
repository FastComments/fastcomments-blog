---
[category:Performance]
###### [postdate]
# [postlink]Indexation de vos fils de commentaires dans les moteurs de recherche[/postlink]

{{#unless isPost}}
Nous avons amélioré les informations que les moteurs de recherche voient lorsqu'ils explorent votre site avec FastComments.
{{/unless}}

{{#isPost}}

## Quoi de Neuf

Auparavant, lorsque les moteurs de recherche exploraient des sites Web avec FastComments installé, ils ne réindexaient que la première page (les 30 premiers) commentaires.

Cela était dû au fait que précédemment, les moteurs de recherche voyaient la même chose que vous lorsque vous visitiez votre site.

Maintenant, lorsqu'un moteur de recherche visite votre site, tous les commentaires seront chargés.

## Impacts sur le Classement des Pages

Les moteurs de recherche modernes prennent en compte de nombreux facteurs lors du classement d'une page, y compris la pertinence du contenu de la page par rapport à ce que vous recherchez, et même des éléments comme
le temps de chargement de cette page.

Ce changement signifie que l'intégralité de votre fil de commentaires est désormais disponible pour indexation, augmentant potentiellement la pertinence des recherches. Cela montre également l'engagement, ce qui
est quelque chose que le moteur de recherche peut utiliser pour classer.

Un possible inconvénient est la performance, car nous chargeons maintenant plus de commentaires, cependant, lors de nos tests, nous avons trouvé qu'il faudrait des centaines, voire des milliers de commentaires
dans un fil pour ralentir FastComments au point d'impacter vos temps de chargement de pages et causer un changement de classement.

Par exemple, notre page de démonstration avec plus de 100 commentaires, <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">obtient toujours un score de 99/100 sur les PageSpeed Insights de Google</a>.

## Les Tests que Nous avons Effectués

Nous avons veillé à ce que les moteurs de recherche voient désormais l'ensemble du fil de commentaires pour une page, et nous avons testé la performance du chargement de l'ensemble des fils de commentaires en une fois.

## Impact sur les Clients Existants

Si vous êtes un client existant utilisant FastComments, le changement a déjà été appliqué à votre compte, et aucune action supplémentaire n'est requise. Une fois que les moteurs de recherche réindexeront vos pages,
tous les commentaires sur ces pages devraient être indexés.

## En Conclusion

Nous espérons que vous avez trouvé cette mise à jour et sa documentation utiles. Joyeux commentaires !

{{/isPost}}