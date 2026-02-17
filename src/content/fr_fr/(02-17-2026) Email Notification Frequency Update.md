---
[category:Fonctionnalités]
[category:Annonces]
###### [postdate]
# [postlink]Mise à jour de la fréquence des notifications par e-mail[/postlink]

{{#unless isPost}}
Les utilisateurs peuvent désormais contrôler la fréquence à laquelle ils reçoivent des notifications par e-mail pour les nouveaux commentaires et réponses, chaque minute, résumé horaire ou résumé quotidien, avec un seul paramètre partagé, plus des remplacements par abonnement.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous avons ajouté un paramètre de **Fréquence des Notifications de Nouveaux Commentaires** qui contrôle la fréquence à laquelle vous recevez des e-mails pour les notifications de réponses et les notifications de locataires (nouveaux commentaires). Les trois options sont :

- **Chaque minute** - recevez un e-mail dès que de nouveaux commentaires arrivent (vérifié toutes les minutes).
- **Résumé Horaire** - recevez un résumé groupé des nouveaux commentaires une fois par heure.
- **Résumé Quotidien** - recevez un résumé groupé des nouveaux commentaires une fois par jour.

Ce paramètre est disponible à la fois pour les administrateurs de locataires et les commentateurs, et s'applique à tous les e-mails de notification de commentaires. Notez que les notifications @mention sont toujours envoyées immédiatement, quelle que soit cette configuration.

Vous pouvez également remplacer la fréquence pour chaque abonnement dans le tableau d'abonnements, pour un contrôle plus précis sur des pages individuelles.

### Comment le Configurer

1. Allez dans vos [Paramètres de Notification](https://fastcomments.com/auth/my-account/edit-notifications).
2. Utilisez le menu déroulant **Fréquence des Notifications de Nouveaux Commentaires** pour définir votre fréquence préférée.
3. Optionnellement, remplacez la fréquence pour des abonnements individuels dans le tableau des Abonnements.
4. Cliquez sur **Enregistrer les Modifications**.

La valeur par défaut est **Chaque minute**, ce qui correspond au comportement précédent.

### Support API

La fréquence de notification est également disponible via l'API. Le paramètre au niveau utilisateur est le champ `notificationFrequency`, et les remplacements par abonnement peuvent être définis via le champ `notificationFrequency` de l'abonnement. Consultez la [documentation API](https://docs.fastcomments.com/guide-api.html) pour plus de détails.

### En Conclusion

Cela donne aux utilisateurs le contrôle sur leur boîte de réception sans avoir à se désabonner complètement des pages. Un seul paramètre couvre désormais à la fois les notifications de réponses et les notifications de locataires, ce qui rend la gestion plus simple.

Faites-nous savoir ci-dessous si vous avez des retours !

Cordialement !

{{/isPost}}

---