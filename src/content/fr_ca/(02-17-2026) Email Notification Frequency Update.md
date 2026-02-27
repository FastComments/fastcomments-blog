---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Mise à jour de la fréquence des notifications par e-mail[/postlink]

{{#unless isPost}}
Les utilisateurs peuvent maintenant contrôler la fréquence à laquelle ils reçoivent des notifications par e-mail pour les nouveaux commentaires et réponses, toutes les minutes, par résumé horaire ou par résumé quotidien, avec des réglages distincts pour les réponses et les notifications administratives, ainsi que des remplacements par abonnement.
{{/unless}}

{{#isPost}}

### Quoi de neuf

Nous avons ajouté des réglages de **Fréquence des notifications de réponse** et de **Fréquence des notifications administratives** qui contrôlent la fréquence à laquelle vous recevez des notifications par e-mail pour les réponses et les nouveaux commentaires, respectivement. Les trois options pour chacun sont :

- **Toutes les minutes** - recevez un e-mail dès qu'un nouveau commentaire arrive (vérifié toutes les minutes).
- **Résumé horaire** - recevez un résumé groupé des nouveaux commentaires une fois par heure.
- **Résumé quotidien** - recevez un résumé groupé des nouveaux commentaires une fois par jour.

La Fréquence des notifications de réponse est disponible pour tous les utilisateurs et par défaut à **Toutes les minutes**. La Fréquence des notifications administratives est disponible pour les administrateurs de site et par défaut à **Résumé horaire**. Notez que les notifications @mention sont toujours envoyées immédiatement, peu importe ces paramètres.

Vous pouvez également remplacer la fréquence sur une base par abonnement dans le tableau des Abonnements, pour un contrôle précis sur des pages individuelles.

### Comment le configurer

1. Allez dans vos [Paramètres de notification](https://fastcomments.com/auth/my-account/edit-notifications).
2. Utilisez les menu déroulants **Fréquence des notifications de réponse** et **Fréquence des notifications administratives** pour définir vos fréquences préférées.
3. Optionnellement, remplacez la fréquence pour des abonnements individuels dans le tableau des Abonnements.
4. Cliquez sur **Sauvegarder les modifications**.

### Support API

Le champ `notificationFrequency` sur l'objet utilisateur contrôle la fréquence des notifications de réponse, et le champ `adminNotificationFrequency` contrôle la fréquence des notifications administratives. Des remplacements par abonnement peuvent être définis via le champ `notificationFrequency` de l'abonnement. Consultez la [documentation de l'API](https://docs.fastcomments.com/guide-api.html) pour plus de détails.

### En conclusion

Cela donne aux utilisateurs un contrôle sur leur boîte de réception sans avoir à se désabonner complètement des pages.

Faites-nous savoir ci-dessous si vous avez des commentaires !

Cheers!

{{/isPost}}

---