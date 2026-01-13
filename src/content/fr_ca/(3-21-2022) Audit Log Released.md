---
[category:Security]

###### [postdate]
# [postlink]Journal d'Audit Publié[/postlink]

{{#unless isPost}}FastComments fournit maintenant un journal détaillé de toutes les modifications effectuées via la plateforme.{{/unless}}

{{#isPost}}

### Quoi de Neuf

Depuis mars, FastComments inclut désormais un audit détaillé avec le plan Pro, et pour tous les clients d'entreprise existants.

Toutes les actions administratives, qu'il s'agisse d'accès aux données, de modification d'un commentaire ou de levée de ban d'un utilisateur, sont suivies et indexées dans le journal d'audit.

### Comment l'Utiliser

Le Journal d'Audit peut être accessible en allant dans `Gérer les Données` puis `Journaux d'Audit`. Un lien direct est [ici](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Pour commencer, vous verrez une page comme suit :

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Journal d'Audit" />
</div>

De là, vous pouvez rechercher par nom d'utilisateur, adresse IP, type d'action ou ressource.

Par exemple, filtrage par ressource :

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Sélection de Ressource du Journal d'Audit" />
</div>

Nous pouvons également plonger dans les détails d'une entrée dans le journal d'audit, et même voir l'objet lié qui a été modifié.

Par exemple, nous pouvons examiner une entrée pour bannir un utilisateur :

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Détails de l'Entrée du Journal d'Audit" />
</div>

Ici, nous pouvons voir qui a banni l'utilisateur (un utilisateur avec le nom d'utilisateur `winrid`). Nous pouvons voir qu'il s'agit d'un ban permanent, et nous avons également l'identifiant de l'utilisateur et l'email banni, ainsi que le texte pour lequel ils ont été bannis.

Nous pouvons voir l'IP qui a créé le ban, mais l'IP du commentateur original est intentionnellement omise pour leur vie privée.

Pour voir tous les événements de `winrid`, il suffit de cliquer sur l'icône de filtre à droite, à côté de leur nom d'utilisateur.

### Restriction d'Accès

Les données dans le journal d'audit ne peuvent être accessibles que par des utilisateurs ayant la permission `Gérer les Données`.

### Conservation

Toutes les entrées dans le journal d'audit sont conservées pendant deux ans. Cependant, le journal d'audit est effacé lorsque votre compte est supprimé.

### Accès API

[La documentation pour l'API du Journal d'Audit est ici.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Vous constaterez que le journal d'audit peut être trié et paginé de plusieurs manières selon votre cas d'utilisation.

### Clients Existants

Si vous êtes sur le plan Pro ou un plan équivalent, vous constaterez que le journal d'audit a été activé automatiquement ! Si vous souhaitez y accéder, veuillez contacter votre représentant de support.

### Ce Qui est Omis

Le seul type de modifications qui est omis concerne les commentaires réels et leurs votes. Cela est dû au fait que nous avons constaté que nos clients s'intéressent principalement à l'aspect administratif lors des audits, et ne sont pas nécessairement intéressés à auditer ce que les gens commentent. Ces types d'actions ajoutent également un bruit considérable au journal.

Cependant, si cela est une exigence, contactez-nous, et nous pouvons discuter de l'activation de cela pour vous.

### En Conclusion

Nous espérons que vous trouverez cette partie de notre offre utile, que l'interface est facile à utiliser, et que l'API est rapide.

Santé !

{{/isPost}}

---