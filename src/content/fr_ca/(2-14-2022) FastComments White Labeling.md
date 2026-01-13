---
[category:API & Development]

###### [postdate]
# [postlink]Marquage blanc de FastComments[/postlink]

{{#unless isPost}}
Le marquage blanc, avec une intégration API complète et des outils d'automatisation, arrive chez FastComments.
{{/unless}}

{{#isPost}}

## Quoi de Neuf

FastComments peut maintenant s'intégrer à d'autres applications et revendeurs tiers via le marquage blanc. Le marquage blanc vous permet de créer des comptes FastComments (appelés locataires), des utilisateurs, des modérateurs, et plus encore.

Nous offrons maintenant une [API complète](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) pour automatiser l'intégration
avec des tiers.

Vous pouvez maintenant, via l'API :

- Créer des clients (locataires enfants) qui sont gérés par votre locataire.
- Gérer les forfaits disponibles pour vos clients et comment vous allez gérer la facturation.
- Ajouter et gérer des utilisateurs dans vos locataires gérés.
- Ajouter et gérer des modérateurs dans vos locataires gérés.
- Inviter des modérateurs et envoyer des liens de connexion aux utilisateurs du locataire.

## Facturation

Concernant la facturation, il y a deux options :

1. Via FastComments Flex, l'utilisation de vos locataires enfants est automatiquement résumée et facturée au locataire parent. Cela peut être surveillé via la [page d'analyse de facturation](https://fastcomments.com/auth/my-account/analytics/billing).
2. Via FastComments Pro, vous avez accès à la création d'un nombre fixe de locataires enfants pour un prix mensuel fixe.

## Débranding

Les locataires gérés peuvent avoir le débranding activé, ce qui retire nos logos du widget de commentaire.

## Comment Obtenir le Marquage Blanc

Actuellement, les plans FastComments Flex et Pro offrent l'accès à l'API de marquage blanc.

## Scripts et Exemples

Un script d'exemple qui utilise l'API pour configurer un locataire avec des utilisateurs et des modérateurs [est disponible ici](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Validation Complète

Chaque ressource API contient des validations et des restrictions complètes, avec des messages d'erreur utiles, pour vous guider dans leur utilisation correcte.

<div class="code"><div class="title">Exemple d'Erreur Détailée</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Un utilisateur avec cet identifiant n'existe pas dans ce locataire. Créez d'abord l'utilisateur, puis faites-en un modérateur.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Autres Cas d'Utilisation

Les APIs des [utilisateurs de locataires](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) et des [modérateurs](https://docs.fastcomments.com/guide-api.html#moderator-structure) peuvent également être utilisées pour
ajouter et gérer ces ressources dans votre propre locataire, indépendamment du marquage blanc.

## Documentation

Vous pouvez trouver la documentation complète sur le marquage blanc et comment utiliser l'API [ici](https://docs.fastcomments.com/guide-white-labeling.html).

## En Conclusion

Nous espérons que vous avez trouvé cette mise à jour et sa documentation utiles. Bonne intégration !

{{/isPost}}