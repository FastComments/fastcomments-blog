---
[category:Annonces]

###### [postdate]
# [postlink]FastComments est désormais sauvegardé sur plusieurs fournisseurs de cloud[/postlink]

{{#unless isPost}}
Depuis avril 2023, les bases de données FastComments sont désormais stockées chez plusieurs fournisseurs de cloud pour plus de prudence.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Auparavant, FastComments avait des sauvegardes en direct des bases de données sur plusieurs serveurs, mais dans le même fournisseur de cloud.

FastComments utilise principalement Linode pour les régions US-West et EU, avec des déploiements de bases de données et d'applications séparés.

Chaque région avait précédemment sa propre réplique pour la base de données en tant que sauvegarde en direct. Si la base de données principale était jamais perdue, pour une raison quelconque, 
la sauvegarde en direct serait disponible pour prendre sa place. Des instantanés de la base de données sont également effectués sur ces sauvegardes.

Nous avons maintenant ajouté des sauvegardes sur un autre fournisseur de cloud, afin que les données dans chaque région ne soient pas isolées à un seul datacenter par région.

La nouvelle topologie de base de données est :

- US-West
  - Un cluster de bases de données sur Linode en Californie.
  - **NOUVEAU** Une réplique en direct sur Hetzner en Oregon.
- EU
  - Un cluster de bases de données sur Linode à Francfort.
  - **NOUVEAU** Une réplique en direct sur Hetzner à Falkenstein.

Ces répliques sont en direct, elles ont toujours la dernière version de la base de données. 

### En Conclusion

Comme pour toutes les grandes versions, nous sommes ravis d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

À la vôtre !

{{/isPost}}

---