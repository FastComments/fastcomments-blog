---
[category:IA & Apprentissage Machine]

###### [postdate]
# [postlink]Annonçant le Facteur de Confiance FastComments[/postlink]

{{#unless isPost}}
FastComments utilise maintenant plus d'heuristiques pour déterminer ce qui est et ce qui n'est pas du spam.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

À partir du 16 novembre 2023, FastComments a commencé à élargir la manière dont il détermine la fiabilité
des utilisateurs pour réduire la frustration liée aux filtres anti-spam.

### Impact sur les Utilisateurs

Si vous êtes un membre de longue date d'un site existant et que vos commentaires ont été pris
par le filtre anti-spam, ce changement est pour vous.

Nous avons reçu de nombreux rapports d'utilisateurs sur des sites qui font des choses que les filtres anti-spam n'aiment pas, comme partager de nombreux liens, etc., et ces
commentaires se retrouvent dans le spam et sont soit bloqués, soit en attente de l'approbation d'un modérateur selon la configuration du site.

### Impact sur les Administrateurs de Site et les Modérateurs

1. Vous pourriez voir moins de commentaires automatiquement marqués comme spam de la part de vos utilisateurs les plus actifs.
2. Cela ne change pas la détection du spam basée sur la liste noire de mots/phrases. Les propos vulgaires et les phrases filtrées feront toujours que les commentaires iront dans le spam si vous avez cette configuration.

Le nombre de Facteur de Confiance lui-même n'est actuellement pas exposé aux administrateurs ou modérateurs de site, cependant
c'est quelque chose que nous explorerons à l'avenir.

### Comment est Calculé le Facteur de Confiance

Le Facteur de Confiance est un nombre de `0` à `100` et est maintenu sur une base par site.

Les variables suivantes sont utilisées pour déterminer le facteur de confiance :

- Âge de l'interaction avec le site.
- Nombre de commentaires approuvés.
- Nombre de commentaires épinglés.

Si vous êtes membre d'un site depuis plus de six mois et que vous avez laissé plus de 50 commentaires approuvés,
vous aurez un score de confiance parfait de `100`.

Sinon, la formule est la suivante et évoluera avec le temps :

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Où :

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Vous remarquerez le `* 20` ici - les commentaires épinglés ont un poids élevé. Si les modérateurs épinglent
vos commentaires, vous êtes probablement considéré comme un utilisateur assez fiable.

### Pour les Développeurs & Points à Surveiller

Dans l'API, `UserBadgeProgress` expose maintenant `autoTrustFactor` et `manualTrustFactor`.

`autoTrustFactor` est calculé par nos soins et n'est pas modifiable via l'API.

Si vous souhaitez configurer le facteur de confiance vous-même, vous pouvez définir `manualTrustFactor`. Le système
utilisera alors cette valeur à la place, et nous continuerons à maintenir la valeur `autoTrustFactor` séparément.

### Abus du Facteur de Confiance

Comme pour toutes les choses, nous nous attendons à ce qu'il y ait des abus. Les gens établiront des relations avec une communauté et utiliseront ensuite
le compte pour publier du spam. Cependant, nous pensons qu'avec des valeurs par défaut sensées (six mois, plus de 50 commentaires), nous avons fixé la barre
assez haut pour que cela ne vaille pas le coup pour la plupart des spammeurs. Une fois qu'ils commencent à poster du spam, leur compte peut être immédiatement
banni par les modérateurs. À l'avenir, nous pourrions également permettre aux modérateurs d'ajuster le facteur de confiance.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes ravis d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

À bientôt !

{{/isPost}}

---