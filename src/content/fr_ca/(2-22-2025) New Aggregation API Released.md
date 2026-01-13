---
[category:API & Development]

###### [postdate]
# [postlink]Nouvelle API d'Agrégation Publiée[/postlink]

{{#unless isPost}}
FastComments offre à ses clients un accès inégalé à leurs données grâce à une API d'agrégation flexible et rapide.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

### Quoi de Neuf

FastComments offre à ses clients un accès inégalé à leurs données grâce à une API d'agrégation flexible. Cette API vous permet de compter, d'examiner, de segmenter et d'agréger vos commentaires, votes et **34 autres ressources** !

### Exemple - Compter les Commentaires par Email et Page

Par exemple, avec la nouvelle API, nous pouvons obtenir un décompte des commentaires par page (`urlId`) et email de l'utilisateur (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Cela nous donnerait quelque chose comme :

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

Ou peut-être voulons-nous compter nos commentaires approuvés et non approuvés :

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Cela nous donne :

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

L'API prend également en charge les filtres de requête et un regroupement plus approfondi.

### Documentation

[Vous pouvez trouver la documentation complète ici.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivation

Nous souhaitons que nos clients puissent créer des tableaux de bord pour surveiller leur compte, établir des rapports, gérer les demandes des clients et examiner leurs données selon leurs besoins.

### Qui y Accède & Limites

Tous les clients de FastComments ont accès à l'API. Votre utilisation est limitée en fonction de vos crédits API disponibles, qui varient selon le forfait que vous avez acheté.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement ces changements. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---