---
[category:Performance]
###### [postdate]
# [postlink]FastComments mis à jour vers HTTP/2[/postlink]

{{#unless isPost}}
Nous avons effectué des mises à niveau de l'infrastructure qui améliorent encore plus la performance de FastComments !
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient un jargon technique

### Quoi de neuf

Depuis son lancement, FastComments était sur HTTP/1.1. Récemment, nous avons basculé notre infrastructure entière
dans toutes les régions vers HTTP/2.

### Impact

Cette mise à jour permet à FastComments de rester à jour avec les normes modernes tout en offrant quelques
améliorations de performance. L'inconvénient est que certains anciens navigateurs ne sont plus supportés.

### Navigateurs et clients obsolètes

Vous pouvez trouver [les navigateurs non supportés ici](https://caniuse.com/http2). Le principal problème sera IE11 qui
n'a qu'un support partiel, cependant ces utilisateurs devraient passer à Edge.

Chrome, Firefox et d'autres prennent en charge HTTP/2 depuis des années, donc nous jugeons qu'il est sûr de faire ce changement.

### Avantages en matière de performance

FastComments est déjà relativement optimisé en termes d'actifs servis et de leur ordre. Par exemple,
le widget de commentaire ne sert que quelques requêtes à charger - l'iframe initiale, puis le script qui inclut le style pour réduire le nombre de requêtes, puis
la requête à l'API pour obtenir toutes les informations nécessaires. Comparé à de nombreux autres services, il est relativement compact.

Donc, ce n'est pas un cas où HTTP/2 aide vraiment beaucoup. Le principal avantage avec HTTP/2 est de permettre des requêtes concurrentes.

Cependant, HTTP/2 nous aide avec la compression ! Les en-têtes sont maintenant envoyés dans un protocole binaire qui
est plus compact, et certains plugins avec beaucoup d'actifs se chargeront beaucoup plus rapidement car les requêtes
peuvent être pipelined en parallèle.

### En conclusion

Merci à nos clients pour leur patience lors du déploiement de ces changements. Nous espérons que vous
continuerez à aimer FastComments.

Santé !

{{/isPost}}

---