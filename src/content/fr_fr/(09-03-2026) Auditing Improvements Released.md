[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Améliorations de l'audit publiées[/postlink]

{{#unless isPost}}
Le journal d'audit indique désormais qui ou quoi chaque événement a affecté par nom, et vous pouvez le rechercher. Il y a également maintenant une plage de dates, une recherche de sous‑locataires, des différences au niveau des champs lors des mises à jour, et des filtres API correspondants.
{{/unless}}

{{#isPost}}

### Nouveautés

Le journal d'audit a toujours enregistré qui a effectué une action et sur quoi elle a été effectuée. Cette version vise à rendre cet enregistrement lisible et consultable sans quitter la page.

Si vous vouliez savoir ce qui était arrivé à un modérateur particulier, vous deviez d'abord trouver son ID, et si ce modérateur avait depuis été supprimé, il n'y avait plus rien contre quoi vérifier l'ID. L'événement indiquait qu'un élément avait été supprimé, par qui et quand, mais pour certaines ressources les noms manquaient.

Désormais le nom est capturé en même temps que l'ID au moment de l'événement, il survit donc à la suppression et vous pouvez le rechercher.

### La colonne **Affected**

Il y a une nouvelle colonne **Affected** dans le tableau affichant la personne ou l'objet sur lequel l'événement a agi, par nom. Pour une personne, cela ressemble à `jsmith (jsmith@example.com)`. Pour une personnalisation de widget ou un groupe de modération, c'est le nom que vous lui avez donné. Pour un fichier média, c'est le nom de fichier que vous avez téléversé.

Au-dessus du tableau se trouve une zone de recherche correspondante, **Who or what was changed**. Saisissez un nom, une adresse e‑mail ou un ID, et elle trouve les événements affectant cette personne ou cet objet. Vous n'avez pas besoin de savoir lequel des trois vous avez, et vous n'avez pas besoin de rechercher d'abord un ID interne.

Les événements créés avant cette version n'ont pas de nom associé, mais ils conservent l'ID qu'ils ont toujours eu, de sorte que la même zone de recherche les trouve par ID.

### Plage de dates

La ligne de filtres possède désormais un menu déroulant **Date Range** avec Derniers 30 jours, Derniers 90 jours, Dernière année, Tout le temps, et **Custom range**, qui fait apparaître les sélecteurs de dates De et À.

Une plage de dates est de loin la façon la plus simple de restreindre une recherche, et la combiner avec les autres filtres est le moyen le plus rapide de trouver quelque chose.

### Comptes gérés

Si votre compte gère d'autres locataires, il y a une case à cocher **Include sub-tenants**. En la cochant, la recherche s'effectue sur votre compte et sur chaque locataire qu'il gère en une seule passe, avec une colonne **Tenant** indiquant de quel compte provient chaque événement.

Jusqu'à présent, le journal de chaque locataire ne pouvait être lu que séparément, donc répondre à « quelqu'un a-t-il touché l'une de nos propriétés cette semaine » impliquait de passer d'un locataire à l'autre successivement.

### Les mises à jour enregistrent maintenant ce qui a changé

Modifier un membre d'équipe enregistrait auparavant l'ensemble des permissions résultantes. Cela indique quelles sont les permissions maintenant, mais pas ce qu'elles étaient, de sorte que « qui a retiré l'accès à la facturation de cette personne, et quand » était impossible à répondre.

Les événements de mise à jour incluent désormais une carte `changes` contenant uniquement les champs qui ont réellement changé, chacun avec sa valeur précédente et nouvelle. Les champs non modifiés sont omis, de sorte qu'un changement de permission s'affiche sur une seule ligne plutôt que comme un mur de booléens.

### Descriptions et l'appareil derrière un changement

Les événements destructifs portent désormais une phrase simple décrivant ce qui s'est passé, comme « Removed user from the account. ». Les vues de page avaient des descriptions et les suppressions n'en avaient pas, ce qui était inversé.

Les événements qui modifient quelque chose enregistrent également le navigateur qui a effectué le changement. Les sessions sont enregistrées sous forme de hachage afin que les actions d'une même personne puissent être corrélées sans que le journal ne stocke quoi que ce soit pouvant être rejoué.

### Autres améliorations

- Quelques correctifs concernant la pagination et les combinaisons de filtres.
- Les événements de connexion affichaient une colonne **Who** vide. Le nom d'utilisateur était présent dans l'enregistrement tout le temps, mais la page ne le lisait pas.
- La colonne d'action affichait les événements de connexion comme N/A, car « Login » manquait dans la liste des noms d'action.
- Les pages du journal d'audit ne pouvaient pas nommer les utilisateurs SSO, affichant « Missing User » à la place. Ils sont maintenant résolus correctement.
- La page est beaucoup plus rapide sur les comptes avec de longues historiques.

### Pour l'API

Le point de terminaison `/api/v1/audit-logs` a reçu des filtres correspondants : `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` pour la recherche de sous‑chaîne, et `includeManagedTenants`. Les réponses incluent désormais `targetId`, `targetLabel` et `ua`.

Deux changements à noter si vous appelez déjà ce point de terminaison. `before` fonctionne maintenant seul, alors qu'auparavant il était ignoré à moins que vous ne passiez également `after`. Et `limit` est maintenant limité à 10 k avec une valeur par défaut de 5 k. Il était auparavant illimité.

### Documentation

Le <a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">guide API AuditLogs</a> couvre les nouveaux paramètres de requête, et <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">la référence de la structure AuditLog</a> couvre les nouveaux champs.

Si vous n'avez pas encore utilisé le journal d'audit, [the original release post](/(3-21-2022)-audit-log-released.html) explique où il se trouve, qui peut le lire et pendant combien de temps les entrées sont conservées. Tout cela reste inchangé.

### En conclusion

Nous sommes heureux de pouvoir continuer à améliorer FastComments. Si vous cherchez quelque chose dans votre journal et que vous ne le trouvez pas, dites-le nous ci‑dessous.

Santé !

{{/isPost}}

---