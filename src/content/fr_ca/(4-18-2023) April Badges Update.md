---
[category:Features]

###### [postdate]

# [postlink]Mise à jour des badges d'avril[/postlink]

{{#unless isPost}}Des changements ont été apportés aux badges, certaines fonctionnalités ont été ajoutées, et certaines améliorations ont été mises en place pour empêcher la disparition des badges lors des re-traitements.{{/unless}}

{{#isPost}}

### Quoi de neuf - Empilement des badges

Avant hier, si vous aviez un ensemble de badges dans votre communauté comme les suivants :

- Nouvel Commentateur (1 commentaire)
- Membre de la Communauté (50 commentaires)
- Expert (500 commentaires)

... et qu'un utilisateur finit avec 500 commentaires, il obtiendra des badges affichés sur ses commentaires comme ceci :

    [Nouvel Commentateur] [Membre de la Communauté] [Expert]

Dans ce scénario particulier, nous voulons probablement seulement que le badge `Expert` soit affiché. Eh bien, la plupart de nos clients le souhaitent, mais pas tous. Tous nos locataires n'ont pas la même configuration et nous le reconnaissons.

Cependant, pour les communautés qui suivent le schéma ci-dessus, qui sont la plupart, elles veulent que les commentaires montrent le badge le plus prestigieux.

Pour gérer ce cas d'utilisation, nous avons ajouté le concept d'un badge **remplaçant** un autre badge. En faisant cela, nous pouvons créer un enchaînement de badges qu'un utilisateur peut gagner :

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Empilement des Badges" title="Empilement des Badges" />
</div>

En interne, nous appelons cela l'*empilement de badges*. Le nouveau badge "s'empile" au-dessus de l'ancien.

Nous pouvons configurer cela en modifiant un badge et en indiquant qu'il remplace un autre :

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Configuration de l'Empilement des Badges" title="Configuration de l'Empilement des Badges" />
</div>

Évidemment, cela peut devenir difficile à suivre, donc la liste des badges a également été mise à jour pour fournir plus d'informations, y compris quel badge remplace quoi.

### Quoi de neuf - Améliorations du Re-traitement

Lorsque vous modifiez un badge, nous devons passer en revue tous vos utilisateurs et déterminer s'ils doivent toujours "gagner" le badge, et mettre à jour tous les styles de badge affichés, ainsi que les caches pour que la dernière version s'affiche.

Le re-traitement ne supprime plus un badge d'un utilisateur lors de l'enregistrement, même s'il ne répond plus aux critères **à moins que les critères configurés ne changent**.

Notez aux administrateurs - vous pouvez diminuer le seuil des critères d'un badge sans que le re-traitement supprime ce badge. Seul **l'augmentation** du seuil entraînera un re-traitement qui peut supprimer le badge dans certains cas.

Pour en savoir plus, lisez *La Perspective du Commentateur*.

### La Perspective du Commentateur

Le re-traitement des badges est très risqué car les utilisateurs adorent leurs badges - et nous le reconnaissons ! Nous ne voulons pas retirer le badge d'un utilisateur parce qu'il a gagné le badge Réponse en raison de 100 utilisateurs répondant à ses commentaires, puis que 10 utilisateurs suppriment plus tard leurs commentaires, ou soient supprimés par des modérateurs.

Le badge devrait rester, et il le fait, sauf...

Lors du re-traitement, nous ne savons pas que ces commentaires précédents existent, donc le badge pourrait être retiré de certains utilisateurs si un badge est modifié, comme si le style est mis à jour, ou si l'empilement des badges est configuré.

C'est ce qui s'est passé le 17 avril 2023 lorsque nous avons déployé *l'Empilement des Badges* et que certaines communautés ont activé cette fonctionnalité.

Deux scénarios ont été observés :

1. Les utilisateurs ont remarqué que certains de leurs badges semblaient être supprimés. Ce qui s'est réellement passé, c'est que tous les badges sauf les plus prestigieux ont été cachés.
   - **Vous pouvez afficher tous vos badges si vous le souhaitez.** Il suffit de cliquer sur le menu à trois points en haut à droite de votre profil et de cliquer sur `Gérer les Badges`.
2. Certains badges ont effectivement été supprimés pour certains utilisateurs, comme dans l'exemple du badge Réponse ci-dessus. Pour éviter que cela ne se reproduise à l'avenir, nous avons amélioré le système de re-traitement afin que le badge ne soit pas retiré à moins que les critères du badge eux-mêmes ne changent et que vous ne répondiez plus aux critères, cependant nous conseillons aux administrateurs de communauté de ne pas le faire car, encore une fois, les utilisateurs adorent leurs badges.

### Pour les Modérateurs

Il n'y a pas de changement du point de vue d'un modérateur, sauf que vous verrez moins de badges affichés dans la plupart des cas. Vous verrez plutôt le badge le plus prestigieux de vous et des membres de votre communauté affiché.

### Clients Existants

Nous avons terminé le déploiement de cette fonctionnalité à tous les clients existants sur tous les niveaux ! L'empilement des badges n'est pas activé par défaut et doit être configuré manuellement.

### En Conclusion

Nous espérons que vous trouverez ce nouvel ensemble de fonctionnalités et de correctifs utiles et faciles à utiliser.

Santé !

{{/isPost}}

---