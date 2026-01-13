---
[category:Features]
###### [postdate]
# [postlink]Présentation des Liens de Commentateur[/postlink]

{{#unless isPost}}
Notre première publication de 2021 apporte la possibilité (si activée au niveau du locataire) pour les utilisateurs d'ajouter le lien de leur blog lors de la publication de commentaires.
{{/unless}}

{{#isPost}}

## Quoi de Neuf

Notre première publication de 2021 apporte la possibilité (si activée au niveau du locataire) pour les utilisateurs d'ajouter le lien de leur blog lors de la publication de commentaires.

## Qu'est-ce que les Liens de Commentateur ?

Comme nous le voyons avec cet échange très curieux, l'un de ces utilisateurs a son nom d'utilisateur souligné pour indiquer qu'il s'agit d'un lien :

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Liens de Commentateur" title="Démo des Liens de Commentateur" />
</div>

C'est parce que le site a configuré son installation FastComments pour permettre de remplir un nouveau champ lors de la publication d'un commentaire, où l'utilisateur peut laisser un lien :

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Champ de Lien de Commentateur" title="Champ de Lien de Commentateur" />
</div>

Ce lien peut également être personnalisé en modifiant vos <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Détails du Compte</a>.

## Activation des Liens de Commentateur

En créant une <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Règle de Personnalisation</a>, nous pouvons activer le nouveau champ d'entrée. Il suffit d'activer l'option "Activer les Liens de Commentateur".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Activation des Liens de Commentateur" title="Liens de Blog" />
</div>

## Remplacer le Texte du Champ de Saisie

Par défaut, le texte d'espace réservé du champ de lien du commentateur est "L'URL de votre Blog.". Cela peut être remplacé via la même règle de personnalisation que vous avez utilisée pour activer la fonctionnalité, en cliquant sur "Afficher le Texte Personnalisé".

## Amélioration de la Classification des Spams

Cette fonctionnalité a pour effet secondaire de réduire le contenu signalé comme spam qui pourrait ne pas être du spam. Les commentaires avec peu de texte et un lien ont plus de chances d'être classés comme spam. Cependant, le lien de commentateur n'affecte pas la classification de savoir si le commentaire est du spam ou non. Cela signifie qu'un utilisateur peut commenter avec le lien de son blog avec un risque beaucoup plus faible que le commentaire soit signalé comme spam.

Pour ces raisons, les sites avec une grande quantité de spam ne voudront peut-être pas activer cette fonctionnalité, cependant ceux qui ne le font pas trouveront de la valeur à l'utiliser avec certains publics.

## Impact sur les Clients Existants

Si vous êtes un client existant utilisant FastComments, vos utilisateurs ne constateront aucun changement de fonctionnalité, à moins que vous n'activiez cette fonctionnalité. Il en va de même pour les nouveaux clients - vous constaterez que cette fonctionnalité est désactivée par défaut.

## En Conclusion

Nous espérons que cette fonctionnalité est le début d'une meilleure année que la précédente. Bon commentaire !

{{/isPost}}