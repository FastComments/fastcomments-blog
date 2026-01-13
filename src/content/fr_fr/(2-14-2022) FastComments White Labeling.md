---
[category:API & Development]

###### [postdate]
# [postlink]Marque Blanche FastComments[/postlink]

{{#unless isPost}}
La Marque Blanche, avec une intégration API complète et des outils d'automatisation, arrive sur FastComments.
{{/unless}}

{{#isPost}}

## Quoi de Neuf

FastComments peut désormais s'intégrer à d'autres applications et revendeurs tiers via la Marque Blanche. La Marque Blanche vous permet de créer des comptes FastComments (appelés locataires), des utilisateurs, des modérateurs, et plus encore.

Nous offrons maintenant une [API complète](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) pour automatiser l'intégration avec les tiers.

Vous pouvez maintenant, via l'API :

- Créer des clients (locataires enfants) gérés par votre locataire.
- Gérer les packages disponibles pour vos clients et comment vous allez gérer la facturation.
- Ajouter et gérer des utilisateurs dans vos locataires gérés.
- Ajouter et gérer des modérateurs dans vos locataires gérés.
- Inviter des modérateurs et envoyer des liens de connexion aux utilisateurs du locataire.

## Facturation

Avec la facturation, il y a deux options :

1. Via FastComments Flex, l'utilisation de vos locataires enfants est automatiquement compilée et facturée au locataire parent. Cela peut être suivi via la [Page d'Analyse de Facturation](https://fastcomments.com/auth/my-account/analytics/billing).
2. Via FastComments Pro, vous avez accès à la création d'un nombre fixe de locataires enfants pour un prix mensuel fixe.

## Désétiquetage

Les locataires gérés peuvent avoir le désétiquetage activé, ce qui enlève nos logos du widget de commentaire.

## Comment Obtenir la Marque Blanche

Actuellement, les plans FastComments Flex et Pro offrent un accès à l'API de Marque Blanche.

## Scripts et Exemples

Un exemple de script utilisant l'API pour configurer un locataire avec des utilisateurs et des modérateurs [est disponible ici](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Validation Complète

Chaque ressource API contient des validations et des restrictions complètes, avec des messages d'erreur utiles, pour vous guider dans leur utilisation correcte.

<div class="code"><div class="title">Exemple d'Erreur Détailée</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Un utilisateur avec cet id n'existe pas dans ce locataire. Créez d'abord l'utilisateur et ensuite faites-en un modérateur.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Autres Cas d'Utilisation

Les APIs [utilisateurs de locataire](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) et [modérateurs](https://docs.fastcomments.com/guide-api.html#moderator-structure) peuvent également être utilisées pour ajouter et gérer ces ressources dans votre propre locataire, indépendamment de la marque blanche.

## Documentation

Vous pouvez trouver la documentation complète sur la Marque Blanche et comment utiliser l'API [ici](https://docs.fastcomments.com/guide-white-labeling.html).

## En Conclusion

Nous espérons que vous avez trouvé cette mise à jour et sa documentation utiles. Bonne intégration !

{{/isPost}}