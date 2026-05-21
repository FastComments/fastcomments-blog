---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Tous les widgets FastComments sont maintenant en ligne[/postlink]

{{#unless isPost}}
Chaque widget FastComments intégré (compte de commentaires, commentaires récents, pages populaires, discussions récentes, résumé des avis, likes flottants) se met désormais à jour en temps réel.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Le widget principal de commentaires est en ligne depuis le premier jour. Cependant, les petits widgets intégrés ne l'étaient pas. Les comptes de commentaires, les widgets "commentaires récents" ou "pages populaires", etc., affichaient parfois un nombre pouvant être obsolète d'une minute.

Désormais, chaque widget expédié par FastComments s'abonne aux mises à jour en direct et se rafraîchit immédiatement :) Cela inclut également les résumés d'avis !

### Quels Widgets

Tous. Concrètement :

- `FastCommentsCommentCount` - le compte de commentaires par page
- `FastCommentsCommentCountBulk` - la version en masse qui met à jour plusieurs comptes sur une page de liste/archives
- `FastCommentsRecentComments` et `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` et `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (le badge flottant de compte de commentaires)
- `FastCommentsEmbedPageLikesFloating` (les likes flottants + le compte de commentaires)

### Ce Que Vous Devez Faire

Rien. Si vous avez déjà l'un de ces éléments intégrés, rafraîchissez la page une fois. La prochaine fois qu'un commentaire est posté, modifié, supprimé ou que quelqu'un réagit à une page, le widget se mettra à jour.

L'ancien drapeau de configuration `isLive: true` sur les widgets de compte de commentaires est désormais redondant - les widgets sont toujours en direct.

Si vous chargez le JS du widget depuis notre CDN, vous avez la nouvelle version, y compris si vous utilisez l'une de nos bibliothèques de wrapper (React, Vue, etc).

### Les Likes Sont Également En Direct

Le widget de likes flottants réagit également maintenant aux événements de likes et de réactions. Cliquez sur le cœur d'une page et d'autres onglets ouverts voient le compte changer.

### Comment Cela Fonctionne

Chaque widget ouvre une seule connexion WebSocket. Les widgets qui affichent des données pour une page spécifique (`comment-count` (y compris la version en masse), `reviews-summary`, `embed-page-likes-floating`) s'abonnent au flux d'événements de cette page. Les widgets qui affichent des données sur plusieurs locataires (`recent-comments`, `top-pages`, `recent-discussions`) s'abonnent à un flux de pulsation par locataire qui envoie un signal chaque fois que quelque chose change dans ce locataire.

Le résultat est qu'un widget inactif coûte effectivement rien et qu'un widget actif affiche un nouveau nombre dans un délai d'une seconde ou deux après le changement sous-jacent.

### Cohérence du Cache

Les caches côté serveur qui soutiennent ces widgets expiraient auparavant sur un TTL de 60 secondes. Ils s'invalident désormais dès qu'un événement de commentaire ou de réaction pertinent arrive, de sorte que la première requête après un changement retourne des données fraîches, et non la version mise en cache.

### En Conclusion

Nous sommes heureux d'avoir pu prendre le temps de tester et d'optimiser ce changement afin que nos clients puissent en profiter au même prix que d'habitude. Nous pensons que les résumés d'avis en direct constituent un élément différenciateur particulièrement intéressant pour nous.

Faites-nous savoir ci-dessous si vous remarquez quelque chose d'anormal.

À bientôt !

{{/isPost}}