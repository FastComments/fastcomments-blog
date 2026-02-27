---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Mise à jour de la fréquence des notifications par email[/postlink]

{{#unless isPost}}
Les utilisateurs peuvent désormais contrôler la fréquence à laquelle ils reçoivent des notifications par email pour les nouveaux commentaires et réponses, toutes les minutes, résumé horaire ou résumé quotidien, avec des paramètres séparés pour les notifications de réponse et d'administration, plus des substitutions par abonnement.
{{/unless}}

{{#isPost}}

### Quoi de neuf

Nous avons ajouté des paramètres de **Fréquence des notifications de réponse** et de **Fréquence des notifications d'administration** qui contrôlent la fréquence à laquelle vous recevez des notifications par email pour les réponses et les nouveaux commentaires, respectivement. Les trois options pour chacun sont :

- **Toutes les minutes** - recevez un email dès que de nouveaux commentaires arrivent (vérifié toutes les minutes).
- **Résumé horaire** - recevez un résumé groupé des nouveaux commentaires une fois par heure.
- **Résumé quotidien** - recevez un résumé groupé des nouveaux commentaires une fois par jour.

La Fréquence des notifications de réponse est disponible pour tous les utilisateurs et est par défaut fixée à **Toutes les minutes**. La Fréquence des notifications d'administration est disponible pour les administrateurs du site et est par défaut fixée à **Résumé horaire**. Notez que les notifications @mention sont toujours envoyées immédiatement, quelle que soit la configuration.

Vous pouvez également remplacer la fréquence sur une base par abonnement dans le tableau des Abonnements, pour un contrôle précis sur les pages individuelles.

### Comment le configurer

1. Allez dans vos [Paramètres de notification](https://fastcomments.com/auth/my-account/edit-notifications).
2. Utilisez les menus déroulants **Fréquence des notifications de réponse** et **Fréquence des notifications d'administration** pour définir vos fréquences préférées.
3. Optionnellement, remplacez la fréquence pour des abonnements individuels dans le tableau des Abonnements.
4. Cliquez sur **Enregistrer les modifications**.

### Support API

Le champ `notificationFrequency` sur l'objet utilisateur contrôle la fréquence des notifications de réponse, et le champ `adminNotificationFrequency` contrôle la fréquence des notifications d'administration. Les substitutions par abonnement peuvent être définies via le champ `notificationFrequency` de l'abonnement. Consultez la [documentation de l'API](https://docs.fastcomments.com/guide-api.html) pour plus de détails.

### En conclusion

Cela donne aux utilisateurs un contrôle sur leur boîte de réception sans avoir à se désabonner complètement des pages.

Faites-nous savoir ci-dessous si vous avez des commentaires !

Cheers!

{{/isPost}}