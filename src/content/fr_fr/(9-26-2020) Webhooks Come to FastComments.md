---
[category:API & Development]
###### [postdate]
# [postlink]Les Webhooks arrivent sur FastComments[/postlink]

{{#unless isPost}}
FastComments peut désormais appeler votre API pour la création, la mise à jour et la suppression de commentaires.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

#### Quoi de Neuf

Avec FastComments, il est désormais possible d'invoquer un point de terminaison API chaque fois qu'un commentaire est ajouté, mis à jour ou supprimé de notre système.

Nous y parvenons grâce à des webhooks asynchrones via HTTP/HTTPS.

#### Comment l'Utiliser

Tout d'abord, accédez à l'<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administration des Webhooks</a>. Ceci est accessible via Gérer les données -> Webhooks.

De là, vous pouvez spécifier des points de terminaison pour chaque type d'événement de commentaire.

Pour chaque type d'événement, assurez-vous de cliquer sur **Envoyer un Payload de Test** pour vous assurer que votre intégration est correctement configurée. Consultez la section suivante, "Test", pour plus de détails.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Exemple de Configuration des Webhooks" title="Exemple de Configuration des Webhooks" class="lozad" />
</div>

#### Test

Dans l'<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administration des Webhooks</a>, il y a des boutons "Envoyer un Payload de Test" pour chaque type d'événement (Créer, Mettre à jour, Supprimer). Les événements Créer et Mettre à jour envoient un objet WebhookComment fictif, tandis que le test de Suppression enverra un corps de requête fictif contenant uniquement un ID.

Le test effectuera deux appels pour vérifier le code de réponse pour les scénarios "heureux" (clé API correcte) et "triste" (clé API invalide).

Lorsque le test envoie une clé API invalide, vous devez retourner un code de statut 401 pour que le test réussisse complètement. Si vous ne vérifiez pas correctement la valeur du token, vous verrez une erreur comme :

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Échec du Test d'Authentification des Webhooks" title="Échec du Test d'Authentification des Webhooks" class="lozad" />
</div>

#### La Structure de l'Objet Commentaire
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

#### La Structure de l'Événement "Créer"

Le corps de la requête de l'événement "créer" est un objet WebhookComment.

#### La Structure de l'Événement "Mettre à Jour"

Le corps de la requête de l'événement "mettre à jour" est un objet WebhookComment.

#### La Structure de l'Événement "Supprimer"

Le corps de la requête de l'événement "supprimer" est un objet WebhookComment, **mais contenant uniquement l'id**.

#### Pourquoi Créer et Mettre à Jour utilisent-elles toutes les deux HTTP PUT et non POST ?

**Puisque toutes nos requêtes contiennent un ID**, répéter la même requête de Création ou de Mise à jour **ne devrait pas créer de nouveaux objets de votre côté**. Cela signifie que ces appels sont idempotents et doivent être des événements PUT selon la spécification HTTP.

#### Comment Cela Fonctionne

Tous les changements apportés à l'objet Commentaire dans le système déclenchent un événement qui finit dans une file d'attente. Vous pouvez surveiller cette file d'attente dans l'<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">administration des Webhooks</a> au cas où votre API tomberait en panne. Si une requête à votre API échoue, nous la remettrons dans la file d'attente selon un calendrier. Ce calendrier est de 1 Minute * le nombre de tentatives. Si l'appel échoue une fois, il essaiera à nouveau dans une minute. S'il échoue deux fois, il attendra ensuite deux minutes, et ainsi de suite. 
Cela permet d'éviter de surcharger votre API si elle rencontre des problèmes liés à la charge.

#### Sécurité & Token API

Dans l'en-tête de la requête, nous transmettrons votre <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">Secret API</a> dans le paramètre appelé "token".

Si vous ne vérifiez pas correctement ce paramètre, votre intégration ne sera pas marquée comme Vérifiée. C'est une mesure de sécurité pour garantir que toutes les intégrations avec FastComments sont sécurisées.

#### En Conclusion

Nous espérons que vous trouvez l'intégration de Webhook FastComments facile à comprendre et rapide à configurer.

Si vous avez d'autres questions, n'hésitez pas à contacter la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">page de support client</a>.

À bientôt !

{{/isPost}}

---