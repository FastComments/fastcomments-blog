---
[category:Features]

###### [postdate]

# [postlink]Mise à jour des badges d'avril[/postlink]

{{#unless isPost}}Des modifications ont été apportées aux badges, certaines fonctionnalités ont été ajoutées, et quelques améliorations ont été ajoutées pour éviter que les badges ne disparaissent lors du reprovisionnement.{{/unless}}

{{#isPost}}

### Quoi de Neuf - Empilement des Badges

Avant hier, si vous aviez un ensemble de badges dans votre communauté comme les suivants :

- Nouvel Commentateur (1 commentaire)
- Membre de la Communauté (50 commentaires)
- Expert (500 commentaires)

... et qu'un utilisateur se retrouve avec 500 commentaires, il recevra des badges affichés sur ses commentaires comme ceci :

    [Nouvel Commentateur] [Membre de la Communauté] [Expert]

Dans ce scénario particulier, nous ne voulons probablement que le badge `Expert` soit affiché. Eh bien, la plupart de nos clients veulent cela, mais pas tous. Tous nos locataires
n'ont pas la même configuration et nous le reconnaissons.

Cependant, pour les communautés qui suivent le modèle ci-dessus, ce qui est la plupart d'entre elles, elles veulent que les commentaires affichent le badge le plus prestigieux.

Pour gérer ce cas d'utilisation, nous avons ajouté le concept d'un badge **remplaçant** un autre badge. Ce faisant, nous pouvons créer un enchaînement de badges qu'un utilisateur peut gagner :

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Empilement des Badges" title="Empilement des Badges" />
</div>

En interne, nous appelons cela *empilement des badges*. Le nouveau badge "s'empile" au-dessus de l'ancien.

Nous pouvons configurer cela en modifiant un badge et en disant qu'il remplace un autre :

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Configuration de l'Empilement des Badges" title="Configuration de l'Empilement des Badges" />
</div>

Évidemment, cela peut devenir difficile à suivre, donc la liste des badges a également été mise à jour pour fournir plus d'informations, y compris
quel badge remplace quoi.

### Quoi de Neuf - Améliorations du Reprovisionnement

Lorsque vous modifiez un badge, nous devons passer en revue tous vos utilisateurs et déterminer s'ils doivent toujours "gagner" le badge,
et mettre à jour tous les styles de badges affichés et les caches afin que la dernière version s'affiche.

Le reprovisionnement ne supprime plus un badge d'un utilisateur lors de l'enregistrement, même s'il ne remplit plus les critères **à moins que les critères configurés ne changent**.

Administrateurs, notez - vous pouvez diminuer les critères de seuil pour un badge sans que le reprovisionnement ne supprime ce badge. Seulement **augmenter** le seuil
fera en sorte que le reprovisionnement puisse supprimer le badge dans certains cas.

Pour en savoir plus, lisez *La Perspective du Commentateur*.

### La Perspective du Commentateur

Le reprovisionnement des badges est très risqué car les utilisateurs adorent leurs badges - et nous le reconnaissons ! Nous ne voulons pas retirer un badge à un utilisateur parce qu'il a gagné le badge Réponse en raison de 100 utilisateurs répondant à ses commentaires, puis 10 utilisateurs suppriment leurs commentaires, ou se font retirer par des modérateurs.

Le badge doit rester, et il le fait, sauf...

Lors du reprovisionnement, nous ne savons pas que ces commentaires précédents existent, donc le badge pourrait être retiré de certains utilisateurs si un badge est modifié, comme si le style
est mis à jour, ou si l'empilement des badges est configuré.

C'est ce qui s'est passé le 17 avril 2023 lorsque nous avons déployé *l'Empilement des Badges* et que certaines communautés ont activé la fonctionnalité.

Deux scénarios ont été observés :

1. Les utilisateurs ont constaté que certains de leurs badges semblaient retirés. Ce qui s'est réellement passé, c'est que tous les badges sauf les plus prestigieux ont été masqués.
   - **Vous pouvez afficher tous vos badges si vous le souhaitez.** Il suffit de cliquer sur le menu à trois points en haut à droite de votre profil et de cliquer sur `Gérer les Badges`.
2. Certains badges ont en effet été retirés pour certains utilisateurs, comme dans l'exemple du badge Réponse ci-dessus. Pour éviter que cela ne se reproduise à l'avenir, nous
    avons amélioré le système de reprovisionnement afin que le badge ne soit pas retiré à moins que les critères du badge lui-même ne changent et que vous ne remplissiez plus les critères, cependant
    nous déconseillons aux administrateurs communautaires de faire cela car, encore une fois, les utilisateurs adorent leurs badges.

### Pour les Modérateurs

Il n'y a pas de changement du point de vue des modérateurs, sauf que vous verrez moins de badges affichés dans la plupart des cas. Vous verrez plutôt le plus prestigieux des
badges de vous et de vos membres de la communauté affichés.

### Clients Existants

Nous avons terminé le déploiement de cette fonctionnalité pour tous les clients existants sur tous les niveaux ! L'empilement des badges n'est pas activé par défaut et doit être configuré manuellement.

### En Conclusion

Nous espérons que vous trouverez cet ensemble de nouvelles fonctionnalités et corrections utiles et faciles à utiliser. 

À la vôtre !

{{/isPost}}