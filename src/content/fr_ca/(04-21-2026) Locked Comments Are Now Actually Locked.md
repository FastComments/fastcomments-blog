---
[category:Features]  
[category:Moderation]  
###### [postdate]  
# [postlink]Les commentaires verrouillés sont maintenant réellement verrouillés[/postlink]  

{{#unless isPost}}  
L'icône de verrouillage apparaît enfin sur les commentaires verrouillés, et les commentaires verrouillés ne peuvent plus être modifiés ou supprimés tant qu'un administrateur ne les déverrouille pas.  
{{/unless}}  

{{#isPost}}  

### Quoi de neuf  

Les modérateurs peuvent verrouiller les commentaires depuis longtemps. Verrouiller un commentaire empêche les nouvelles réponses, ce qui est pratique lorsque un fil de discussion a atteint sa conclusion ou qu'une sous-conversation dévie du sujet.  

Le problème était que "verrouillé" n'avait pas beaucoup de poids. Les lecteurs n'avaient aucune indication visuelle qu'un commentaire était verrouillé. Et même si les nouvelles réponses étaient bloquées, l'auteur original ou toute personne ayant accès à la modification pouvait toujours modifier ou supprimer le commentaire. Ce n'est pas vraiment verrouillé. Cette mise à jour corrige ces deux points.  

### L'icône de verrouillage  

Lorsqu'un modérateur verrouille un commentaire, un petit cadenas apparaît maintenant dans le coin supérieur droit du commentaire, juste à côté de l'icône de punaise. Il s'affiche pour chaque lecteur - pas seulement pour les modérateurs. Déverrouiller le commentaire le supprime.  

L'icône respecte le mode clair et sombre, tout comme l'icône de punaise.  

### Modification et suppression sont bloquées  

Un commentaire verrouillé ne peut être modifié ou supprimé par personne, y compris les administrateurs et les modérateurs. Si vous souhaitez modifier ou supprimer un commentaire verrouillé, déverrouillez-le d'abord, effectuez le changement, puis refermez-le si vous le souhaitez.  

Cela s'applique à tous les chemins qui touchent un commentaire :  

- Le widget client cache les entrées de menu Modifier et Supprimer sur les commentaires verrouillés.  
- Les points de terminaison API publics PATCH et DELETE retournent une erreur `locked` si le commentaire cible est verrouillé.  
- L'interface utilisateur de modération des administrateurs affiche l'erreur verrouillée si vous essayez de supprimer sans déverrouiller d'abord.  

### Exceptions  

Un petit nombre de chemins contournent intentionnellement le verrou pour pouvoir faire leur travail :  

- Suppression de compte. Si un utilisateur supprime son compte FastComments, ses commentaires sont nettoyés, quelle que soit l'état de verrouillage.  
- Nettoyage des utilisateurs de locataire / SSO. Même idée pour la suppression d'utilisateurs au niveau du locataire.  
- Suppression automatique programmée. Si vous avez programmé un commentaire pour être supprimé à un moment spécifique, le programmeur n'a pas besoin de se soucier des verrous.  
- Nettoyage des doublons. L'outil de dédoublonnage supprime les doublons verrouillés sans cérémonie.  
- Interdictions de modérateurs avec "supprimer tous les commentaires de cet utilisateur". Bannir un utilisateur et balayer son historique est une action intentionnelle unique, donc cela efface aussi les verrous.  

Tout le reste - le widget, l'interface de modération, l'API publique, les appelants externes - respecte le verrou.  

### Forme d'erreur API  

Si vous appelez l'API publique pour modifier ou supprimer un commentaire verrouillé, vous recevrez une réponse comme :  

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Comment is locked.",
    "translatedError": "Ce commentaire est verrouillé et ne peut pas être modifié ou supprimé. Déverrouillez-le d'abord."
}</div>  

Le statut HTTP est 401. Le champ `translatedError` utilise la locale configurée de votre locataire et toute traduction personnalisée que vous avez mise en place.  

### En conclusion  

Un petit changement, mais cela comble une lacune qui était ouverte depuis un certain temps. Verrouillé signifie maintenant verrouillé.  

Santé !  

{{/isPost}}  

---