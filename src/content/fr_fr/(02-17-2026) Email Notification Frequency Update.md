---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Mise à jour de la fréquence de notification par e-mail[/postlink]

{{#unless isPost}}
Les utilisateurs peuvent désormais contrôler la fréquence à laquelle ils reçoivent des notifications par e-mail pour les nouveaux commentaires et réponses — chaque minute, résumé horaire ou résumé quotidien — avec un seul paramètre partagé, plus des exceptions par abonnement.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous avons ajouté un paramètre **Fréquence de Notification des Nouveaux Commentaires** qui contrôle la fréquence à laquelle vous recevez des notifications par e-mail pour les notifications de réponse et les notifications de locataire (nouveau commentaire). Les trois options sont :

- **Chaque minute** - recevez un e-mail dès l'arrivée de nouveaux commentaires (vérifié chaque minute).
- **Résumé horaire** - recevez un résumé groupé des nouveaux commentaires une fois par heure.
- **Résumé quotidien** - recevez un résumé groupé des nouveaux commentaires une fois par jour.

Ce paramètre est disponible pour les administrateurs de locataire et les commentateurs, et s'applique à tous les e-mails de notification de commentaire. Notez que les notifications @mention sont toujours envoyées immédiatement, indépendamment de ce paramètre.

Vous pouvez également remplacer la fréquence sur une base d'abonnement individuel dans le tableau des Abonnements, pour un contrôle précis des pages individuelles.

### Comment le Configurer

1. Allez dans vos [Paramètres de Notification](https://fastcomments.com/auth/my-account/edit-notifications).
2. Utilisez le menu déroulant **Fréquence de Notification des Nouveaux Commentaires** pour définir votre fréquence préférée.
3. En option, remplacez la fréquence pour des abonnements individuels dans le tableau des Abonnements.
4. Cliquez sur **Sauvegarder les Modifications**.

La valeur par défaut est **Chaque minute**, ce qui correspond au comportement précédent.

### Support API

La fréquence de notification est également disponible via l'API. Le paramètre au niveau utilisateur est le champ <div class="code">notificationFrequency</div>, et les remplacements par abonnement peuvent être définis via le champ <div class="code">notificationFrequency</div> de l'abonnement. Consultez la [documentation API](https://docs.fastcomments.com/guide-api.html) pour plus de détails.

### En Conclusion

Cela donne aux utilisateurs le contrôle sur leur boîte de réception sans avoir à se désabonner complètement des pages. Un seul paramètre couvre maintenant à la fois les notifications de réponse et de locataire, simplifiant ainsi la gestion.

Faites-nous savoir ci-dessous si vous avez des commentaires !

Santé !

{{/isPost}}

---