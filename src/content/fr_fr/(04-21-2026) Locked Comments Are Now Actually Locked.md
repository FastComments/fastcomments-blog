---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Les commentaires verrouillés sont maintenant réellement verrouillés[/postlink]

{{#unless isPost}}
L'icône de verrou apparaît enfin sur les commentaires verrouillés, et ces commentaires ne peuvent plus être modifiés ou supprimés jusqu'à ce qu'un administrateur les déverrouille.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Les modérateurs peuvent verrouiller des commentaires depuis longtemps. Verrouiller un commentaire empêche de nouvelles réponses, ce qui est utile lorsque la discussion a fait son temps ou qu'une sous-conversation déraille.

Le problème était que "verrouillé" n'avait pas beaucoup de poids. Les lecteurs n'avaient aucune indication visuelle qu'un commentaire était verrouillé. Et même si de nouvelles réponses étaient bloquées, l'auteur original ou toute personne ayant un accès de modification pouvait toujours modifier ou supprimer le commentaire. Ce n'est pas vraiment verrouillé. Cette mise à jour corrige cela.

### L'icône de Verrou

Lorsqu'un modérateur verrouille un commentaire, un petit cadenas apparaît maintenant dans le coin supérieur droit du commentaire, juste à côté de l'icône de fixation. Il s'affiche pour chaque lecteur - pas seulement pour les modérateurs. Déverrouiller le commentaire le supprime.

L'icône respecte le mode clair et foncé, comme l'icône de fixation.

### Éditer et Supprimer Sont Bloqués

Un commentaire verrouillé ne peut pas être modifié ou supprimé par quiconque, y compris les administrateurs et les modérateurs. Si vous souhaitez modifier ou supprimer un commentaire verrouillé, déverrouillez-le d'abord, effectuez le changement, puis verrouillez-le à nouveau si vous le souhaitez.

Cela s'applique à chaque chemin qui touche un commentaire :

- Le widget pour les utilisateurs cache les entrées de menu Éditer et Supprimer sur les commentaires verrouillés.
- Les points de terminaison PATCH et DELETE de l'API publique retournent une erreur `locked` si le commentaire cible est verrouillé.
- L'interface utilisateur de modération des administrateurs affiche l'erreur verrouillée si vous essayez de supprimer sans déverrouiller d'abord.

### Exceptions

Une poignée de chemins contourne intentionnellement le verrou pour pouvoir faire leur travail :

- Suppression de compte. Si un utilisateur supprime son compte FastComments, ses commentaires sont nettoyés indépendamment de l'état du verrou.
- Nettoyage des utilisateurs Tenant / SSO. Même idée pour la suppression d'utilisateurs au niveau du tenant.
- Suppression automatique programmée. Si vous avez programmé un commentaire pour être supprimé à un moment spécifique, le planificateur n'a pas besoin de se soucier des verrous.
- Nettoyage des doublons. L'outil de déduplication supprime les doublons verrouillés sans cérémonie.
- Interdictions de modérateurs avec "supprimer tous les commentaires de cet utilisateur". Bannir un utilisateur et balayer son historique est une action intentionnelle unique, donc cela efface aussi les verrous.

Tout le reste - le widget, l'interface de modération, l'API publique, les appelants externes - respecte le verrou.

### Forme de l'Erreur API

Si vous appelez l'API publique pour éditer ou supprimer un commentaire verrouillé, vous obtiendrez une réponse comme :

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Comment is locked.",
    "translatedError": "Ce commentaire est verrouillé et ne peut pas être modifié ou supprimé. Déverrouillez-le d'abord."
}</div>

Le statut HTTP est 401. Le champ `translatedError` utilise la locale configurée de votre tenant et toute traduction personnalisée que vous avez mise en place.

### En Conclusion

Changement mineur, mais cela comble un vide qui était ouvert depuis un moment. Verrouillé signifie maintenant verrouillé.

À bientôt !

{{/isPost}}

---