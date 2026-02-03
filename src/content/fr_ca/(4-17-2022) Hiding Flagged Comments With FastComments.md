---
[category:Moderation]

###### [postdate]

# [postlink]Cacher les commentaires signalés avec FastComments[/postlink]

{{#unless isPost}}La possibilité de signaler a été ajoutée à FastComments. De plus, les commentaires peuvent être cachés en fonction du nombre de fois qu'ils sont signalés.{{/unless}}

{{#isPost}}

### Nouvelles Fonctionnalités

Les utilisateurs peuvent désormais signaler des commentaires avec les fils de commentaires hébergés par FastComments. Les modérateurs peuvent filtrer les commentaires signalés ainsi que voir combien de fois ils ont été signalés.

La plateforme peut également être configurée pour cacher automatiquement les commentaires lorsqu'ils ont été signalés un certain nombre de fois.

### La Perspective de l'Utilisateur

Lorsqu'un utilisateur a une session valide, il peut signaler des commentaires via le menu de modification des commentaires. 

Cela est compatible avec les types de sessions suivants :

- Sessions anonymes
- Session d'utilisateur FastComments.com (Utilisation de cookies tiers)
- SSO sécurisé
- SSO simple

Les commentaires signalés continueront à être affichés, jusqu'à ce que le seuil de signalement configuré soit atteint.

### Pour les Modérateurs

Les modérateurs peuvent voir les commentaires signalés en utilisant le filtre `Signalés`, également disponible directement [ici](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

De plus, le nombre de fois qu'un commentaire a été signalé est visible pour les modérateurs et les administrateurs.

Note :

- Réinitialiser le compte de signalement pour un commentaire qui a été `désapprouvé` via le `seuil de désapprobation` le `réapprouvera`.
- `Réapprouver` un commentaire `signalé` **réinitialisera le compte de signalement**.
- C'est une fonctionnalité créée par souci de commodité.

### Configuration

La configuration de la dissimulation automatique des commentaires signalés peut être effectuée sur la [page des paramètres de modération des commentaires](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Clients Existants

Nous avons terminé le déploiement de cette fonctionnalité à tous les clients existants dans tous les niveaux. La dissimulation automatique des commentaires désapprouvés n'est pas activée pour les nouveaux clients ou les clients existants.

### En Conclusion

Nous espérons que vous trouverez cet ensemble de nouvelles fonctionnalités utiles et faciles à utiliser. 

Cordialement !

{{/isPost}}

---