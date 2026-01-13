---
[category:Features]
###### [postdate]
# [postlink]Fonctionnalité de Spoiler Ajoutée[/postlink]

{{#unless isPost}}
Les utilisateurs peuvent maintenant ajouter des spoilers dans leurs commentaires, qui sont cachés jusqu'à ce qu'ils soient survolés avec la souris.
{{/unless}}

{{#isPost}}

### Quoi de Neuf
Les utilisateurs de FastComments peuvent désormais cliquer sur un bouton "SPOILER" pour ajouter des spoilers à leurs commentaires. Ils peuvent également écrire des balises `<spoiler>du texte</spoiler>` directement si souhaité. 
Notez que l'option de la barre d'outils pour les spoilers est désactivée par défaut.

### Activation des Spoilers

Dans la personnalisation du widget, vous pouvez simplement activer l'option `Spoilers` et cliquer sur enregistrer. La documentation est [ici](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers). 
Nous les avons activés pour cet article de blog afin de démontrer la fonctionnalité.

### Pour les Développeurs & Astuces

Le style de base des spoilers prend en charge les modes clair et sombre. Si vous écrivez du CSS personnalisé pour le texte masqué, rappelez-vous de couvrir le mode sombre également si votre site le prend en charge.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Santé!

{{/isPost}}

---