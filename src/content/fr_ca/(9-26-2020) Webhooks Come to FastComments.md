---
[category:API & Development]
###### [postdate]
# [postlink]Les Webhooks arrivent sur FastComments[/postlink]

{{#unless isPost}}
FastComments peut désormais appeler votre API pour la création, la mise à jour et la suppression de commentaires.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Quoi de neuf

Avec FastComments, il est désormais possible d'invoquer un point de terminaison API chaque fois qu'un commentaire est ajouté, mis à jour ou supprimé de notre système.

Nous réalisons cela avec des webhooks asynchrones sur HTTP/HTTPS.

#### Comment l'utiliser

Tout d'abord, accédez à l'<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administration des Webhooks</a>. Cela est accessible via Gérer les données -> Webhooks.

De là, vous pouvez spécifier des points de terminaison pour chaque type d'événement de commentaire.

Pour chaque type d'événement, assurez-vous de cliquer sur **Envoyer une charge utile de test** pour vous assurer que vous avez correctement configuré votre intégration. Consultez la section suivante, "Tests", pour les détails.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Exemple de configuration des Webhooks" title="Exemple de configuration des Webhooks" class="lozad" />
</div>

#### Tests

Dans l'<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administration des Webhooks</a>, il y a des boutons "Envoyer une charge utile de test" pour chaque type d'événement (Créer, Mettre à jour, Supprimer). Les événements Créer et Mettre à jour envoient un objet WebhookComment fictif, tandis que le test de Suppression enverra un corps de requête fictif avec juste un ID.

Le test effectuera deux appels pour vérifier le code de réponse pour les scénarios "heureux" (clé API correcte) et "triste" (clé API invalide).

Lorsque le test envoie une clé API invalide, vous devez renvoyer un code de statut de 401 pour que le test réussisse complètement. Si vous ne vérifiez pas correctement la valeur du jeton, vous verrez une erreur comme :

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Échec du test d'authentification des Webhooks" title="Échec du test d'authentification des Webhooks" class="lozad" />
</div>

#### La structure de l'objet Commentaire
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### La structure de l'événement "Créer"

Le corps de la requête de l'événement "créer" est un objet WebhookComment.

#### La structure de l'événement "Mettre à jour"

Le corps de la requête de l'événement "mettre à jour" est un objet WebhookComment.

#### La structure de l'événement "Supprimer"

Le corps de la requête de l'événement "supprimer" est un objet WebhookComment, **mais contenant uniquement l'id**.

#### Pourquoi les événements Créer et Mettre à jour utilisent-ils tous deux HTTP PUT et non POST ?

**Comme toutes nos requêtes contiennent un ID**, répéter la même requête Créer ou Mettre à jour **ne devrait pas créer de nouveaux objets de votre côté**. Cela signifie que ces appels sont idempotents et doivent être des événements PUT selon les spécifications HTTP.

#### Comment cela fonctionne

Tous les changements apportés à l'objet Commentaire dans le système déclenchent un événement qui atterrit dans une file d'attente. Vous pouvez surveiller cette file d'attente dans l'<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administration des Webhooks</a> au cas où votre API rencontre un problème. Si une requête à votre API échoue, nous la remettrons en file d'attente selon un horaire. Cet horaire est de 1 minute * le nombre de tentatives. Si l'appel échoue une fois, il tentera à nouveau dans une minute. S'il échoue deux fois, il attendra alors deux minutes, et ainsi de suite. Cela afin de ne pas surcharger votre API si vous rencontrez des problèmes de charge.

#### Sécurité & Jeton API

Dans l'en-tête de la requête, nous transmettrons votre <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">Secret API</a> dans le paramètre appelé "token".

Si vous ne vérifiez pas correctement ce paramètre, votre intégration ne sera pas marquée comme vérifiée. C'est un garde-fou pour s'assurer que toutes les intégrations avec FastComments sont sécurisées.

#### En conclusion

Nous espérons que vous trouverez l'intégration des Webhooks de FastComments facile à comprendre et rapide à configurer.

Si vous avez d'autres questions, n'hésitez pas à contacter la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">page de support client</a>.

Santé !

{{/isPost}}

---