---
[category:Features]
###### [postdate]
# [postlink]Emails de Notification Activés Pour les Abonnements[/postlink]

{{#unless isPost}}
FastComments envoie maintenant des e-mails aux utilisateurs pour les pages auxquelles ils sont abonnés.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Avec FastComments, les utilisateurs peuvent cliquer sur l'icône de cloche dans un widget de commentaire pour s'abonner à cette page. Nous les notifierons
quand de nouveaux commentaires sont laissés sur cette page, ou lorsqu'il y a un nouveau commentaire dans un fil de réponse dont ils font partie.

Nous avons fait cela pendant des années, cependant nous n'envoyions pas d'e-mails pour ces notifications - elles étaient seulement visibles dans notre tableau de bord.

Nous enverrons maintenant des e-mails pour ces notifications.

### Nouveaux Types d'E-mails

Nous envoyons maintenant deux nouveaux types d'e-mails. Le premier est lorsque vous n'avez que quelques notifications. Nous listerons simplement
les nouveaux commentaires dans l'e-mail pour vous.

Le deuxième type d'e-mail que vous recevrez contient des liens vers chaque page pour laquelle vous avez reçu des notifications. Cela est envoyé
lorsque vous recevez de nombreuses notifications.

Ces e-mails de notification ne concernent que les nouveaux commentaires sur les pages auxquelles vous êtes abonné.

### Horaire de Notification par E-mail

Les e-mails de notification sont envoyés toutes les heures pour éviter les e-mails excessifs. L'exception est si la page en question a plus de dix mille
commentaires, auquel cas nous n'enverrons des notifications pour cette page qu'une fois par jour.

### Pour les Propriétaires de Sites - Personnaliser les E-mails

Un nouveau modèle d'e-mail `Nouveaux Commentaires d'Abonnement` sera bientôt disponible pour personnalisation.

### Pour les Développeurs & Précautions

Pour les utilisateurs SSO, nous n'enverrons pas les e-mails de notification par défaut. Vous devrez passer un nouveau flag : `optedInSubscriptionNotifications: true` dans l'objet utilisateur, ou
dans le payload du widget de commentaire, pour activer ces nouvelles notifications.

### En Conclusion

Comme pour toutes les grandes sorties, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester, et relâcher correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Cheers!

{{/isPost}}