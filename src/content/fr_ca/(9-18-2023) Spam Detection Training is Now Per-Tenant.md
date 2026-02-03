---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]La formation de détection de spam est maintenant par locataire[/postlink]

{{#unless isPost}}
FastComments forme son classificateur de prévention de spam depuis des années. Maintenant, les 
capacités de formation ont été améliorées.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Lorsque vous marquez un commentaire comme spam, ou non spam, FastComments apprend de cela pour la 
détection de spam future.

Cependant, cet apprentissage se faisait au même endroit pour tout le monde. Cela signifie que la 
formation sur le spam d'un autre locataire affectait la vôtre. Il y a des avantages et des inconvénients à cela. 
Tout d'abord, vous bénéficiez automatiquement de ce que d'autres modérateurs considèrent comme du spam. 
L'inconvénient est que s'ils commettent une erreur, ou s'ils ont du contenu qui est différent du vôtre.

Par exemple, si un autre locataire a un public intéressé par les simulateurs de course, il peut souvent 
marquer des commentaires avec du "spam crypto" comme étant du spam. En conséquence, le classificateur commence à 
relier le texte lié à la crypto comme du spam.

Mais, disons que vous avez un site orienté crypto. Maintenant, beaucoup de vos commentaires commencent à être 
marqués comme spam alors qu'ils ne le sont pas. Certains d'entre eux peuvent effectivement être du spam, mais 
beaucoup d'autres pourraient ne pas l'être.

### Formation Isolée

Lorsque qu'un nouveau locataire rejoint FastComments, par défaut sa détection de spam sera formée à partir 
des travaux passés d'autres locataires.

Au fur et à mesure que vous commencez à marquer des commentaires comme spam/non spam, le système passera à 
votre propre ensemble de formation.

### Mise à Jour 20 Septembre 2023

Nous avons constaté que cette configuration n'était pas idéale pour tout le monde par défaut. La Formation 
de Spam Isolée n'est pas seulement sur opt-in. Vous pouvez l'activer dans la page des Paramètres de 
Modération en sélectionnant "Isolé" dans l'option "Filtre Anti-Spam".

Le paramètre par défaut est maintenant de nouveau "Partagé".

### En Direct

L'ensemble de formation pour votre locataire est désormais toujours reconstruit chaque fois que vous 
marquez un commentaire comme spam ou non spam.

Auparavant, le système reconstruisait périodiquement l'index de spam. Cela était fait pour protéger le 
système contre une charge excessive. Après quelques années, nous avons constaté que la charge due à une 
formation continue n'était pas très élevée, nous avons donc mis à jour le système pour mettre à jour 
automatiquement l'index chaque fois que vous effectuez un changement.

Ces index sont stockés sur le bord dans nos serveurs d'application, et ils se mettent tous à jour 
indépendamment afin de garder le système rapide et réactif.

### Comment L'Obtenir

Cette fonctionnalité a été déployée à tous les clients !

### En Conclusion

Comme toutes les grandes versions, nous sommes contents d'avoir pu prendre le temps d'optimiser, de tester, et de 
publier correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---