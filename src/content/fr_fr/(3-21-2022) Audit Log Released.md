---
[category:Sécurité]

###### [postdate]
# [postlink]Journal d'Audit Publié[/postlink]

{{#unless isPost}}FastComments fournit maintenant un journal détaillé de toutes les modifications effectuées via la plateforme.{{/unless}}

{{#isPost}}

### Quoi de Neuf

À partir de mars, FastComments inclut maintenant un audit détaillé avec le plan Pro, et pour tous les clients d'entreprise existants.

Toutes les actions administratives, qu'il s'agisse d'accès aux données, de modification d'un commentaire ou de levée d'un bannissement, sont suivies et indexées dans le journal d'audit.

### Comment l'Utiliser

Le Journal d'Audit peut être consulté en allant dans `Gérer les Données` puis `Journaux d'Audit`. Un lien direct se trouve [ici](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Pour commencer, vous verrez une page comme suit :

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Journal d'Audit" />
</div>

À partir de là, vous pouvez rechercher par nom d'utilisateur, adresse IP, type d'action ou la ressource.

Par exemple, filtrer par ressource :

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Sélection de Ressource du Journal d'Audit" />
</div>

Nous pouvons également examiner les détails d'une entrée dans le journal d'audit, et même voir l'objet associé qui a été modifié.

Par exemple, nous pouvons examiner une entrée concernant le bannissement d'un utilisateur :

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Détails de l'Entrée du Journal d'Audit" />
</div>

Ici, nous pouvons voir qui a banni l'utilisateur (un utilisateur avec le nom d'utilisateur `winrid`). Nous voyons que c'est un bannissement permanent, et nous avons également l'identifiant de l'utilisateur et l'email banni, ainsi que le texte
pour lequel il a été banni.

Nous pouvons voir l'IP qui a créé le bannissement, mais l'IP de l'utilisateur initial est volontairement omise pour préserver sa vie privée.

Pour voir tous les événements de `winrid`, nous pouvons simplement cliquer sur l'icône de filtre à droite, à côté de son nom d'utilisateur.

### Restriction d'Accès

Les données dans le journal d'audit ne peuvent être consultées que par des utilisateurs ayant la permission `Gérer les Données`.

### Rétention

Toutes les entrées dans le journal d'audit sont conservées pendant deux ans. Toutefois, le journal d'audit est effacé lorsque votre compte est supprimé.

### Accès API

[La documentation pour l'API du Journal d'Audit est ici.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Vous constaterez que le journal d'audit peut être
trié et paginé de différentes manières selon votre cas d'utilisation.

### Clients Existants

Si vous êtes sur le plan Pro ou équivalent, vous constaterez que le journal d'audit a été automatiquement activé ! Si vous souhaitez y accéder, veuillez contacter votre représentant de support.

### Ce qui est Omis

Le seul type de changements qui sont omis sont les commentaires réels et leurs votes. Cela est dû au fait que nous avons constaté que nos clients s'intéressent principalement à l'aspect administratif lors de l'audit, et pas nécessairement à l'audit de ce que les gens commentent. Ces types d'actions ajoutent également un bruit considérable au journal.

Cependant, si cela est une exigence, contactez-nous, et nous pouvons discuter de l'activation de cette fonction pour vous.

### En Conclusion

Nous espérons que vous trouverez cette partie de notre offre utile, l'interface facile à utiliser, et l'API rapide.

À bientôt !

{{/isPost}}

---