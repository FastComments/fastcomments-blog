---
[category:Moderation]

###### [postdate]
# [postlink]Créer une équipe de modérateurs de commentaires avec FastComments[/postlink]

Une armée d'un seul homme ne peut aller que jusqu'à un certain point. Que faites-vous lorsque vous êtes submergé par le nombre de commentaires que vous devez examiner ?

{{#unless isPost}}
Lisez cet article pour voir comment inviter des modérateurs de commentaires à FastComments.
{{/unless}}

{{#isPost}}
### Le Problème

Vous avez beaucoup de contenu et beaucoup de commentaires. C'est bon - votre base d'utilisateurs est suffisamment engagée pour interagir avec vous. Mais maintenant, vous êtes submergé
et devez développer votre opération.

### Modération FastComments

Les outils de modération de FastComments offrent un environnement efficace pour examiner les commentaires, les marquer comme spam ou (si nécessaire) les supprimer.

Le tableau de bord est également réactif, vous pouvez donc examiner et modérer les commentaires en déplacement !

Mais l'accès à la modération des commentaires pour votre site n'est pas limité à votre compte. Quelqu'un peut créer son propre compte FastComments et être invité
à votre site via le tableau de bord admin, [ou en masse via l'API](https://docs.fastcomments.com/guide-api.html#moderator-structure). Ils n'ont même pas besoin de connaître FastComments ou de créer un compte au préalable. Le lien d'invitation que nous allons vous montrer
comment envoyer les guidera pour créer un compte.

Il suffit de vous connecter à votre compte et de survoler Modérer les Commentaires. Vous verrez une option pour Gérer les Modérateurs.

<img 
    src="images/fc-add-moderator-menu.png"
    alt="Menu Gérer les Modérateurs"
    title="Menu Gérer les Modérateurs"
    class='lozad' />

Si vous n'avez pas encore ajouté de modérateurs, ce bouton vous dirigera vers un assistant qui vous guidera dans l'ajout d'un modérateur.

Vous aurez simplement besoin de fournir un nom et un e-mail. Ils recevront automatiquement un lien d'invitation qui les guidera également dans la création d'un compte.

En option, vous pouvez également placer des modérateurs et des commentaires dans des groupes séparés. [En savoir plus sur les Groupes de Modération et d'autres fonctionnalités de modération ici.](https://docs.fastcomments.com/guide-moderation.html)

Si vous avez une équipe de modérateurs, vous pouvez voir leur progression depuis le même endroit - la liste des Modérateurs de Commentaires fournit des statistiques pour chaque modérateur. Cela inclut
le nombre de commentaires qu'ils ont marqués comme examinés, spam et supprimés.

C'est tout. Après avoir envoyé ce lien d'invitation, ils pourront créer leur compte et auront un accès complet pour modérer vos commentaires. Ils ne verront qu'une version simplifiée
de la page de Modération des Commentaires - aucune possibilité de modifier les paramètres n'est fournie aux modérateurs.

Bon commentaire !

{{/isPost}}