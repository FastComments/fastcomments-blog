---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]Mise à jour de la fréquence des notifications par courriel[/postlink]

{{#unless isPost}}
Les utilisateurs peuvent maintenant contrôler la fréquence à laquelle ils reçoivent des notifications par courriel pour les nouveaux commentaires et réponses — chaque minute, résumé horaire ou résumé quotidien — avec un seul paramètre partagé, plus des substitutions par abonnement.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous avons ajouté un paramètre de **Fréquence de notification de nouveaux commentaires** qui contrôle la fréquence à laquelle vous recevez des notifications par courriel pour les notifications de réponses et les notifications de locataires (nouveaux commentaires). Les trois options sont :

- **Chaque minute** - recevez un courriel dès que de nouveaux commentaires arrivent (vérifié chaque minute).
- **Résumé horaire** - recevez un résumé groupé de nouveaux commentaires une fois par heure.
- **Résumé quotidien** - recevez un résumé groupé de nouveaux commentaires une fois par jour.

Ce paramètre est disponible pour les administrateurs locataires et les commentateurs, et s'applique à tous les courriels de notification de commentaire. Notez que les notifications @mention sont toujours envoyées immédiatement, peu importe ce paramètre.

Vous pouvez également remplacer la fréquence par abonnement dans le tableau des Abonnements, pour un contrôle précis sur des pages individuelles.

### Comment le Configurer

1. Allez dans vos [Paramètres de notification](https://fastcomments.com/auth/my-account/edit-notifications).
2. Utilisez le menu déroulant **Fréquence de notification de nouveaux commentaires** pour définir votre fréquence préférée.
3. En option, remplacez la fréquence pour des abonnements individuels dans le tableau des Abonnements.
4. Cliquez sur **Enregistrer les modifications**.

La valeur par défaut est **Chaque minute**, ce qui correspond au comportement précédent.

### Support API

La fréquence de notification est également disponible via l'API. Le paramètre au niveau de l'utilisateur est le champ <div class="code">notificationFrequency</div>, et les remplacements par abonnement peuvent être définis via le champ <div class="code">notificationFrequency</div> de l'abonnement. Consultez la [documentation API](https://docs.fastcomments.com/guide-api.html) pour plus de détails.

### En Conclusion

Cela donne aux utilisateurs un contrôle sur leur boîte de réception sans avoir à se désabonner totalement des pages. Un seul paramètre couvre désormais à la fois les notifications de réponse et de locataire, ce qui simplifie la gestion.

Faites-nous savoir ci-dessous si vous avez des commentaires !

À bientôt !

{{/isPost}}

---