---
[category:Features]  
[category:Moderation]  
###### [postdate]  
# [postlink]La Page de Modération Est Maintenant Active[/postlink]  

{{#unless isPost}}  
La page de modération FastComments affiche maintenant une notification en direct lorsque de nouveaux commentaires arrivent et correspondent à vos filtres actuels.  
{{/unless}}  

{{#isPost}}  

### Quoi de Neuf  

La page de modération a toujours été un outil puissant pour gérer les commentaires. Vous pouviez filtrer par statut, rechercher par texte, filtrer par page ou utilisateur, et effectuer des actions en masse. Mais pour voir de nouveaux commentaires, vous deviez rafraîchir la page.  

Pas maintenant ! La page de modération indique maintenant quand de nouveaux commentaires arrivent et correspondent à vos filtres actuels. Une bannière apparaît en haut de la liste des commentaires pour vous informer du nombre de nouveaux commentaires en attente, et en cliquant dessus, vous les chargez en ligne sans avoir à rafraîchir toute la page.  

Le message "nouveaux commentaires pour vos filtres" devrait être presque instantané dans la plupart des circonstances.  

### Évaluation des Filtres  

La couche de transport évalue tous les filtres de modération côté serveur. Cela inclut les filtres de statut (besoin de révision, besoin d'approbation, spam, signalé, banni), les filtres de chaîne (ID utilisateur, URL de page, domaine), et même la recherche de texte. Le texte cité comme <div class="code">"phrase exacte"</div> effectue une correspondance exact sans différencier les majuscules et minuscules, tandis que les termes non cités effectuent une correspondance floue sans tenir compte des majuscules et minuscules.  

Cela signifie que si vous filtrez pour des commentaires spam, vous ne serez pas notifié des commentaires approuvés. Si vous recherchez des commentaires contenant une phrase spécifique, seuls les commentaires correspondants déclenchent la bannière.  

### Groupes de Modération  

Si votre compte utilise des groupes de modération pour restreindre quels modérateurs peuvent voir quels commentaires, ces restrictions sont entièrement appliquées pour les notifications en direct. La couche de transport appelle le serveur d'application pour construire le filtre, qui inclut des restrictions de groupe basées sur les groupes assignés au modérateur. Ce filtre est mis en cache pendant la durée de la connexion WebSocket et mis à jour chaque fois que le modérateur change de filtres.  

### Événements Manqués  

Si la connexion d'un modérateur se coupe temporairement (problèmes de réseau, mise en veille de l'ordinateur portable, etc.), le système reprend automatiquement à la reconnexion afin que vous ne manquiez aucun travail.  

### Performance  

Nous avons conçu cette fonctionnalité pour avoir un impact minime sur le temps de chargement de la page de modération.  

### Multi-Région  

Cette fonctionnalité fonctionne sans problème avec notre architecture distribuée à l’échelle mondiale, de sorte que les équipes de modération réparties dans le monde entier bénéficient de la même vue en direct.  

### En Conclusion  

Nous espérons que cette fonctionnalité fera gagner du temps aux modérateurs et rendra l'expérience de modération plus réactive. Comme toujours, nous remercions nos clients pour leurs retours et leur soutien.  

Santé !  

{{/isPost}}