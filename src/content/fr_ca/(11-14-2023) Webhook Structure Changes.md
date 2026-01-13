---
[category:API & Development]

###### [postdate]
# [postlink]Changements de la Structure des Webhooks[/postlink]

{{#unless isPost}}
Nous avons apporté quelques modifications liées au comportement aux structures des webhooks.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Avant le 14 novembre 2023, nous avons apporté les changements suivants aux webhooks :

#### Mise à Jour des Webhooks

**Auparavant**, les mises à jour contenaient la dernière version d'un commentaire. Si deux utilisateurs votaient pour un commentaire en succession rapide, cela déclenchait deux webhooks. Cependant, il était possible que le premier événement webhook contienne la **dernière version**, entraînant ainsi deux événements webhook identiques :

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**À partir du 14 nov.**, chaque événement webhook est idempotent et contient l'objet commentaire au moment du changement. Dans l'exemple ci-dessus, vous recevrez maintenant deux événements :

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Suppression des Webhooks

**Auparavant**, les webhooks de suppression ne contenaient que l'id du commentaire. C'était un objet comme `{ id: string }`.

**À partir du 14 nov.**, les webhooks de suppression contiendront l'objet commentaire **entier** au moment de la suppression.

### En Conclusion

Comme pour toutes les sorties majeures, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Cheers!

{{/isPost}}

---