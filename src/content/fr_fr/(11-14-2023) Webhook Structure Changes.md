---
[category:API & Development]

###### [postdate]
# [postlink]Modifications de la structure des webhooks[/postlink]

{{#unless isPost}}
Nous avons apporté quelques modifications liées au comportement des structures de webhook.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Avant le 14 novembre 2023, nous avons apporté les modifications suivantes aux webhooks :

#### Mise à Jour des Webhooks

**Auparavant**, les mises à jour contenaient la dernière version d'un commentaire. Si deux utilisateurs votaient un commentaire en succession rapide, cela déclenchait deux webhooks. Cependant, il était possible que le premier événement de webhook contienne la **dernière version**, entraînant deux événements de webhook identiques :

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**Depuis le 14 nov**, chaque événement de webhook est idempotent et contient l'objet commentaire au moment du changement. Dans l'exemple ci-dessus, vous recevrez maintenant deux événements :

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Suppression des Webhooks

**Auparavant**, les webhooks de suppression ne contenaient que l'ID du commentaire. C'était un objet comme `{ id: string }`.

**Depuis le 14 nov**, les webhooks de suppression contiendront l'**intégralité** de l'objet commentaire au moment de la suppression.

### En Conclusion

Comme pour toutes les versions majeures, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-le nous savoir ci-dessous si vous découvrez des problèmes.

À bientôt !

{{/isPost}}

---