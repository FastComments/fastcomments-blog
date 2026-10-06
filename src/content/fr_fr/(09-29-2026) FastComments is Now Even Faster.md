[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments est maintenant encore plus rapide[/postlink]

{{#unless isPost}}
Nous avons supprimé une requête réseau lors du chargement du widget de commentaires, réduisant encore davantage les temps de chargement.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Nouveautés

Comment FastComments a fonctionné pendant les cinq dernières années environ, c'est que nous chargeons un petit script, l'iframe se charge, puis le script qui inclut son style, et enfin une requête à l'API pour tout ce qui est nécessaire pour afficher les commentaires. Bien que cela semble beaucoup, c'est très compact comparé à la plupart des systèmes !

Cependant, il y a maintenant une requête de moins. La réponse de l'iframe qui délivre le widget transporte également les commentaires et toutes les données dont l'utilisateur a besoin initialement, ainsi la dernière requête API a disparu.

L'API reste maintenue pour la compatibilité descendante pour quiconque en dépend.

### Aucun réglage nécessaire

Il n'y a aucun paramètre pour cela et aucune version à mettre à jour. Si vous intégrez FastComments avec notre script, vous l'avez déjà.

Votre propre page n'est pas affectée dans les deux cas. Le widget se charge toujours dans une iframe et ne bloque toujours pas votre contenu, exactement comme
avant.

### Où cela ne s'applique pas

Quelques chemins n'utilisent pas cela, et ils se comportent exactement comme ils l'ont toujours fait :

- Les robots des moteurs de recherche, qui rendent déjà les commentaires directement dans la page plutôt que dans une iframe
- Les flux d'activité des utilisateurs et le filtrage par hashtags, qui lisent depuis différents points de terminaison

### En conclusion

Nous espérons que vous continuerez à apprécier notre plateforme et que les améliorations que nous apportons ajouteront de la valeur. :)

Santé!

{{/isPost}}