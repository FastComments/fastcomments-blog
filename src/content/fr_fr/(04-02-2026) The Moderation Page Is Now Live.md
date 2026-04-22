---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]La page de modération est désormais en ligne[/postlink]

{{#unless isPost}}
La page de modération FastComments affiche maintenant une notification en direct lorsque de nouveaux commentaires arrivent et correspondent à vos filtres actuels.
{{/unless}}

{{#isPost}}

### Quoi de neuf

La page de modération a toujours été un outil puissant pour gérer les commentaires. Vous pouviez filtrer par statut, rechercher par texte, filtrer par page ou utilisateur, et effectuer des actions en masse. Mais pour voir les nouveaux commentaires, vous deviez rafraîchir la page.

Plus maintenant ! La page de modération affiche désormais lorsque de nouveaux commentaires arrivent et correspondent à vos filtres actuels. Une bannière apparaît en haut de la liste des commentaires vous indiquant combien de nouveaux commentaires attendent, et en cliquant dessus, ils se chargent en ligne sans devoir rafraîchir complètement la page.

Le message "nouveaux commentaires pour vos filtres" devrait être quasi instantané dans la plupart des cas.

### Évaluation des filtres

Le niveau de transport évalue tous les filtres de modération côté serveur. Cela inclut les filtres de statut (à réviser, à approuver, spam, signalé, banni), les filtres de chaîne (ID utilisateur, URL de la page, domaine) et même la recherche textuelle. Le texte cité comme `"phrase exacte"` effectue une correspondance exacte insensible à la casse, tandis que les termes non cités effectuent une correspondance floue insensible à la casse.

Cela signifie que si vous filtrez les commentaires de spam, vous ne serez pas notified des commentaires approuvés. Si vous recherchez des commentaires contenant une phrase spécifique, seuls les commentaires correspondants déclenchent la bannière.

### Groupes de modération

Si votre compte utilise des groupes de modération pour restreindre lesquels modérateurs peuvent voir quels commentaires, ces restrictions sont entièrement appliquées pour les notifications en direct. Le niveau de transport appelle le serveur d'application pour construire le filtre, qui inclut des restrictions de groupe basées sur les groupes assignés au modérateur. Ce filtre est mis en cache pendant la durée de la connexion WebSocket et est mis à jour chaque fois que le modérateur change de filtres.

### Événements manqués

Si la connexion d'un modérateur est temporairement interrompue (problèmes de réseau, mise en veille de l'ordinateur portable, etc.), le système se rattrape automatiquement lors de la reconnexion afin que vous ne manquiez aucun travail.

### Performance

Nous avons conçu cette fonctionnalité pour avoir un impact minimal sur le temps de chargement de la page de modération.

### Multi-région

Cette fonctionnalité fonctionne parfaitement avec notre architecture distribuée à l'échelle mondiale, de sorte que les équipes de modération réparties dans le monde entier aient la même vue en direct.

### En conclusion

Nous espérons que cette fonctionnalité fera gagner du temps aux modérateurs et rendra l'expérience de modération plus réactive. Comme toujours, nous remercions nos clients pour leurs retours et leur soutien.

À bientôt !

{{/isPost}}