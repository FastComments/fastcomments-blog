---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Mise à jour de la fréquence des notifications par courriel[/postlink]

{{#unless isPost}}
Les utilisateurs peuvent maintenant contrôler la fréquence à laquelle ils reçoivent des notifications par courriel pour les nouveaux commentaires et réponses, chaque minute, résumé horaire, ou résumé quotidien, avec un seul paramètre partagé, ainsi que des substitutions par abonnement.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous avons ajouté un paramètre de **Fréquence de Notification de Nouveau Commentaire** qui contrôle à quelle fréquence vous recevez des notifications par courriel pour les notifications de réponse et les notifications de locataire (nouveau commentaire). Les trois options sont :

- **Chaque minute** - recevoir un courriel dès que de nouveaux commentaires arrivent (vérifiés chaque minute).
- **Résumé horaire** - recevoir un résumé groupé des nouveaux commentaires une fois par heure.
- **Résumé quotidien** - recevoir un résumé groupé des nouveaux commentaires une fois par jour.

Ce paramètre est accessible aux admins de locataires et aux commentateurs, et s'applique à tous les courriels de notification de commentaires. Notez que les notifications @mention sont toujours envoyées immédiatement, peu importe ce paramètre.

Vous pouvez également remplacer la fréquence sur une base d'abonnement individuelle dans le tableau des Abonnements, pour un contrôle précis sur des pages spécifiques.

### Comment le Configurer

1. Allez dans vos [Paramètres de Notification](https://fastcomments.com/auth/my-account/edit-notifications).
2. Utilisez le menu déroulant **Fréquence de Notification de Nouveau Commentaire** pour définir votre fréquence préférée.
3. En option, remplacez la fréquence pour des abonnements individuels dans le tableau des Abonnements.
4. Cliquez sur **Enregistrer les Changements**.

La valeur par défaut est **Chaque minute**, ce qui correspond au comportement précédent.

### Support API

La fréquence de notification est également disponible via l'API. Le paramètre au niveau de l'utilisateur est le champ `notificationFrequency`, et les remplacements par abonnement peuvent être définis via le champ `notificationFrequency` de l'abonnement. Consultez la [documentation API](https://docs.fastcomments.com/guide-api.html) pour plus de détails.

### En Conclusion

Ceci donne aux utilisateurs le contrôle de leur boîte de réception sans avoir à se désabonner complètement des pages. Un seul paramètre couvre désormais à la fois les notifications de réponse et de locataire, ce qui facilite la gestion.

Faites-nous savoir ci-dessous si vous avez des commentaires !

Santé !

{{/isPost}}

---