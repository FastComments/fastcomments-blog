---
[category:Performance]
###### [postdate]
# [postlink]FastComments amélioré avec HTTP/2[/postlink]

{{#unless isPost}}
Nous avons effectué des mises à niveau de l'infrastructure qui améliorent encore plus les performances de FastComments !
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de neuf

Depuis son lancement, FastComments fonctionne sur HTTP/1.1. Récemment, nous avons migré toute notre infrastructure
dans toutes les régions vers HTTP/2.

### Impact

Cette mise à jour permet à FastComments de rester à jour avec les normes modernes tout en offrant des
améliorations de performance. Le revers de la médaille est que certains anciens navigateurs ne sont plus supportés.

### Navigateurs et clients obsolètes

Vous pouvez trouver [des navigateurs non pris en charge ici](https://caniuse.com/http2). Le principal problème sera IE11 qui
n'a qu'un support partiel, cependant ces utilisateurs devraient passer à Edge.

Chrome, Firefox et d'autres prennent en charge HTTP/2 depuis des années, donc nous estimons qu'il est sûr de faire ce changement.

### Avantages en termes de performance

FastComments est déjà assez optimisé en termes d'actifs servis et de leur ordre. Par exemple,
le widget de commentaires ne sert que quelques requêtes à charger - le premier iframe, puis le script qui inclut le style pour réduire le nombre de requêtes, et ensuite
la requête vers l'API pour obtenir toutes les informations nécessaires. Comparé à de nombreux autres services, c'est assez compact.

Donc, ce n'est pas un cas où HTTP/2 aide vraiment beaucoup. Le principal avantage de HTTP/2 est de permettre des requêtes concurrentes.

Cependant, HTTP/2 nous aide avec la compression ! Les en-têtes sont désormais envoyés dans un protocole binaire qui
est plus compact, et certains plugins avec de nombreux actifs se chargeront beaucoup plus rapidement car les requêtes
peuvent être pipelined en parallèle.

### En conclusion

Merci à nos clients pour leur patience lors de la mise en œuvre de ces changements. Nous espérons que vous
continuez à aimer FastComments.

À bientôt !

{{/isPost}}

---