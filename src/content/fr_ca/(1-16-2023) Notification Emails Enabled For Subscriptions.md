---
[category:Features]
###### [postdate]
# [postlink]Notifications par courriel activées pour les abonnements[/postlink]

{{#unless isPost}}
FastComments envoie maintenant des courriels aux utilisateurs pour les pages auxquelles ils sont abonnés.
{{/unless}}

{{#isPost}}

### Quoi de neuf

Avec FastComments, les utilisateurs peuvent cliquer sur l'icône de cloche sur un widget de commentaires pour s'abonner à cette page. Nous les informerons
lorsque de nouveaux commentaires seront publiés sur cette page, ou lorsqu'il y a un nouveau commentaire dans un fil de réponse auquel ils participent.

Nous avons fait cela pendant des années, cependant nous n'envoyions pas de courriels pour ces notifications - elles n'étaient visibles que dans notre tableau de bord.

Nous enverrons maintenant des courriels pour ces notifications.

### Nouveaux types de courriels

Nous envoyons maintenant deux nouveaux types de courriels. Le premier est lorsque vous n'avez que quelques notifications. Nous allons simplement lister
les nouveaux commentaires dans le courriel pour vous.

Le second type de courriel que vous recevrez contient des liens vers chaque page pour laquelle vous avez reçu des notifications. Cela est envoyé
lorsque vous recevez de nombreuses notifications.

Ces courriels de notification ne concernent que les nouveaux commentaires sur les pages auxquelles vous êtes abonnés.

### Horaire des notifications par courriel

Les courriels de notification sont envoyés chaque heure pour éviter d'envoyer trop de courriels. L'exception est si la page en question a plus de dix mille
commentaires, auquel cas nous enverrons des notifications pour cette page une fois par jour seulement.

### Pour les propriétaires de site - Personnalisation des courriels

Un nouveau modèle de courriel `Nouveau Commentaires d'abonnement` sera bientôt disponible pour personnalisation.

### Pour les développeurs et points à surveiller

Pour les utilisateurs SSO, nous n'enverrons pas les courriels de notification par défaut. Vous devrez passer un nouveau drapeau : `optedInSubscriptionNotifications: true` dans l'objet utilisateur, ou
dans la charge utile du widget de commentaires, pour activer ces nouvelles notifications.

### En conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}