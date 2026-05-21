---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Tous les widgets FastComments sont maintenant actifs[/postlink]

{{#unless isPost}}
Chaque widget FastComments intégré (comptes de commentaires, commentaires récents, pages les plus vues, discussions récentes, résumé des avis, mentions j'aime flottantes) se met désormais à jour en temps réel.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Le widget principal de commentaires est actif depuis le premier jour. En revanche, les widgets intégrés plus petits ne l'étaient pas. Les comptes de commentaires, les widgets "commentaires récents" ou "pages les plus vues", etc., affichaient facilement un nombre qui pouvait être obsolète d'une minute.

Désormais, tous les widgets expédiés par FastComments s'abonnent aux mises à jour en direct et se rafraîchissent immédiatement :) Cela inclut également les résumés des avis !

### Quels Widgets

Tous. Concrètement :

- `FastCommentsCommentCount` - le nombre de commentaires par page
- `FastCommentsCommentCountBulk` - la version en masse qui met à jour plusieurs comptes sur une page de liste/archives
- `FastCommentsRecentComments` et `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` et `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (le badge flottant du compte de commentaires)
- `FastCommentsEmbedPageLikesFloating` (les mentions j'aime flottantes + le compte de commentaires)

### Ce Que Vous Devez Faire

Rien. Si vous avez déjà l'un de ces widgets intégrés, actualisez simplement la page une fois. La prochaine fois qu'un commentaire est publié, édité, supprimé ou qu'une personne réagit à une page, le widget se mettra à jour.

L'ancien drapeau de configuration `isLive: true` sur les widgets de compte de commentaires est désormais redondant - les widgets sont toujours actifs.

Si vous chargez le JS du widget depuis notre CDN, vous avez la nouvelle version, y compris si vous utilisez l'une de nos bibliothèques d'encapsulation (React, Vue, etc.).

### Les Mentions J'aime Sont Aussi Actives

Le widget des mentions j'aime flottantes répond également désormais aux événements de mention j'aime et de réaction. Cliquez sur le cœur d'une page et d'autres onglets ouverts verront le compte changer.

### Comment Ça Marche

Chaque widget ouvre une seule connexion WebSocket. Les widgets qui affichent des données pour une page spécifique (`comment-count` (y compris en masse), `reviews-summary`, `embed-page-likes-floating`) s'abonnent au flux d'événements de cette page. Les widgets qui affichent des données englobant un locataire (`recent-comments`, `top-pages`, `recent-discussions`) s'abonnent à un flux périphérique par locataire qui envoie un signal chaque fois que quelque chose change dans ce locataire.

Le résultat est qu'un widget inactif coûte effectivement rien et un widget actif affiche un nouveau chiffre dans une seconde ou deux après le changement sous-jacent.

### Cohérence du Cache

Les caches côté serveur qui soutiennent ces widgets avaient une expiration après 60 secondes. Ils invalident désormais dès qu'un événement de commentaire ou de réaction pertinent arrive, de sorte que la première demande après un changement renvoie des données fraîches, et non la version mise en cache.

### En Conclusion

Nous sommes heureux d'avoir pu prendre le temps de tester et d'optimiser ce changement afin que nos clients puissent en profiter au même prix que toujours. Nous pensons que les résumés d'avis en direct sont un différenciateur particulièrement intéressant pour nous.

Faites-nous savoir ci-dessous si vous remarquez quelque chose de bizarre.

À bientôt !

{{/isPost}}