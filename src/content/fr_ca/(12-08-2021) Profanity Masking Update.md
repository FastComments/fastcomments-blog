---
[category:Modération]
###### [postdate]
# [postlink]Mise à jour du Masquage de Profanités[/postlink]

{{#unless isPost}}
La Détection et le Masquage de Profanités de FastComments reçoivent une mise à niveau
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Auparavant, FastComments ne permettait la définition que d'une seule liste noire de mots globale sur l'ensemble de votre compte.

Cette liste de mots à masquer, ou à utiliser pour la détection de spam si désiré, ne pouvait pas être définie par langue. Elle pouvait également contenir uniquement une liste de mots, et non des phrases.

Maintenant, les améliorations suivantes ont été apportées :

1. La liste noire peut être définie par locale (langue + région).
2. En plus des mots, les phrases peuvent désormais être masquées, ou utilisées pour la détection de spam.
3. La mise à jour de la configuration de détection de profanités est maintenant *en direct* et *immédiate*. Auparavant, cela pouvait prendre jusqu'à cinq minutes pour que les changements s'appliquent.

### Comment l'Utiliser

Le lien vers la liste noire de mots n'a pas changé et reste à [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) et
est toujours accessible depuis `Modérer les Commentaires -> Paramètres de Modération -> Modifier la Liste Noire de Mots`.

Sur cette page, vous verrez maintenant un menu déroulant de langue pour personnaliser la liste noire par locale.

Lors de la sélection d'une locale, vous pouvez définir des mots ou des phrases à masquer.

### Limitations

Jusqu'à 5 000 mots ou phrases peuvent être définis par locale. Si vous devez augmenter cette limite, contactez le support.

### C'est en Direct !

Tous les changements que vous apportez à la liste de mots ou de phrases à masquer s'appliquent maintenant immédiatement au système.

### Qui en Bénéficie

Tous les clients actuels et nouveaux de FastComments, sur tous les niveaux, ont maintenant accès aux nouvelles fonctionnalités de liste noire de *mots* et de *phrases*.

### En Conclusion

Comme le reste de FastComments, nous espérons que vous trouverez cette fonctionnalité rapide et facile à utiliser.

Santé !

{{/isPost}}

---