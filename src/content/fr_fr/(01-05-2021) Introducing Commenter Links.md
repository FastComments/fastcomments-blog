---
[category:Features]
###### [postdate]
# [postlink]Présentation des Liens de Commentateur[/postlink]

{{#unless isPost}}
Notre première publication de 2021 offre aux utilisateurs la possibilité (si activée au niveau du locataire) d'ajouter le lien de leur blog lors de leurs commentaires.
{{/unless}}

{{#isPost}}

## Quoi de Neuf

Notre première publication de 2021 offre aux utilisateurs la possibilité (si activée au niveau du locataire) d'ajouter le lien de leur blog lors de leurs commentaires.

## Qu'est-ce que les Liens de Commentateur ?

Comme nous le voyons dans cet échange très curieux, l'un de ces utilisateurs a son nom d'utilisateur souligné pour indiquer qu'il s'agit d'un lien :

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Liens de Commentateur" title="Démo des Liens de Commentateur" />
</div>

Cela est dû au fait que le site a configuré son installation FastComments pour autoriser le remplissage d'un nouveau champ lors des commentaires, où l'utilisateur peut laisser un lien :

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Champ de Lien de Commentateur" title="Champ de Lien de Commentateur" />
</div>

Ce lien peut également être personnalisé en modifiant vos <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Détails de Compte</a>.

## Activer les Liens de Commentateur

En créant une <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Règle de Personnalisation</a>, nous pouvons activer le nouveau champ de saisie. Il suffit d'activer l'option "Activer les Liens de Commentateur".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Activation des Liens de Commentateur" title="Liens de Blog" />
</div>

## Remplacer le Texte du Champ de Saisie

Par défaut, le texte indicatif du champ de lien de commentateur est "Votre URL de Blog.". Cela peut être remplacé via la même règle de personnalisation que vous avez utilisée pour activer la fonctionnalité, en cliquant sur "Afficher le Texte Personnalisé".

## Amélioration de la Classification des Spams

Cette fonctionnalité a l'effet secondaire de réduire le contenu signalé comme spam qui pourrait ne pas l'être. Les commentaires avec peu de texte et un lien ont plus de chances d'être classés comme spam. Cependant, le lien de commentateur n'affecte pas la classification du fait que le commentaire soit considéré comme spam ou non. Cela signifie qu'un utilisateur peut commenter avec son lien de blog avec un risque beaucoup plus faible que le commentaire soit signalé comme spam.

Pour ces raisons, les sites avec une forte quantité de spam pourraient ne pas vouloir activer cette fonctionnalité, cependant ceux qui ne le font pas y trouveront de la valeur en l'utilisant avec certains publics.

## Impact sur les Clients Existants

Si vous êtes un client existant utilisant FastComments, vos utilisateurs ne constateront aucun changement de fonctionnalité, à moins que vous n'activiez cette fonctionnalité. Il en va de même pour les nouveaux clients - vous constaterez que cette fonctionnalité est désactivée par défaut.

## En Conclusion

Nous espérons que cette fonctionnalité est le début d'une meilleure année que la précédente. Bon commentaire !

{{/isPost}}