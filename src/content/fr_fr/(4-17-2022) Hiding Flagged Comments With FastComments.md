---
[category:Modération]

###### [postdate]

# [postlink]Masquer les commentaires signalés avec FastComments[/postlink]

{{#unless isPost}}La fonction de signalement a été ajoutée à FastComments. De plus, les commentaires peuvent être masqués en fonction du nombre de fois qu'ils sont signalés.{{/unless}}

{{#isPost}}

### Quoi de Neuf

Les utilisateurs peuvent désormais signaler des commentaires dans les fils de discussion hébergés par FastComments. Les modérateurs peuvent filtrer les commentaires signalés et voir combien de fois ils ont été signalés.

La plateforme peut également être configurée pour masquer automatiquement les commentaires lorsqu'ils ont été signalés un certain nombre de fois.

### La Perspective du Commentateur

Lorsqu'un utilisateur a une session valide, il peut signaler des commentaires via le menu d'édition des commentaires. 

Ceci est compatible avec les types de session suivants :

- Sessions anonymes
- Session utilisateur FastComments.com (Utilisation de cookies tiers)
- SSO sécurisé
- SSO simple

Les commentaires signalés continueront à être affichés jusqu'à ce que le seuil configuré soit atteint.

### Pour les Modérateurs

Les modérateurs peuvent voir les commentaires signalés en utilisant le filtre `Signalés`, également disponible directement [ici](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

De plus, le nombre de fois qu'un commentaire a été signalé est visible pour les Modérateurs et les Administrateurs.

Remarque :

- Réinitialiser le compteur de signalement d'un commentaire qui a été `Non-Aprobé` via le `Seuil de Non-Aprobation` va `Ré-Aprober` le commentaire.
- `Ré-Aprober` un commentaire `Signalé` va **réinitialiser le compteur de signalement**.
- C'est une fonctionnalité créée pour des raisons de commodité.

### Configuration

La configuration du masquage automatique des commentaires signalés peut être effectuée sur la [Page des Paramètres de Modération des Commentaires](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Clients Existants

Nous avons achevé le déploiement de cette fonctionnalité pour tous les clients existants sur tous les niveaux. Le masquage automatique des commentaires non approuvés n'est pas activé pour les nouveaux clients ou les clients existants.

### En Conclusion

Nous espérons que vous trouverez cet ensemble de nouvelles fonctionnalités utile et facile à utiliser. 

À votre santé !

{{/isPost}}

---