---
[category:API & Development]
###### [postdate]
# [postlink]Mise à jour du menu des commentaires[/postlink]

{{#unless isPost}}
Cette mise à jour est principalement destinée aux développeurs qui personnalisent FastComments. Nous avons apporté des modifications à l'API et effectué quelques optimisations.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de neuf

Certains locataires de FastComments personnalisent le widget de commentaire. Cela crée un contrat
entre vos personnalisations et notre mise en œuvre. Nous faisons de notre mieux pour ne pas rompre ce
contrat, mais dans le cadre de cette annonce, nous avons un petit changement qui pourrait être cassant.

### Pour les développeurs

Un sélecteur CSS pour le menu des commentaires a été modifié.

Ancien :

    .comment .menu .menu-content

Nouveau :

    .menu-content

### Locataires existants

Si vous utilisez déjà le sélecteur "menu-content" - félicitations ! Nous avons examiné tous nos
locataires utilisant ce sélecteur et mis à jour leurs configurations de widget pour éviter des pannes.

Faites-nous savoir si vous rencontrez des problèmes.

### Raisonnement

Depuis la création du widget de commentaires, le menu des commentaires était purement un menu déroulant basé sur CSS. C'est une manière simple et rapide d'implémenter un menu déroulant qui ne nécessite pas beaucoup de code - un objectif de conception de FastComments.

Cependant, au fil des ans, cela a accumulé des problèmes.

D'une part, lorsque la zone de commentaire a une hauteur spécifique et est défilable, comme avec le chat en direct, accéder au menu vers le bas est difficile car le menu tentera de dépasser
la zone de contenu défilable. Cela rend partie du menu invisible et nécessite de
déplacer votre souris et de survoler à nouveau le menu pour effectuer le travail que vous essayiez de faire. Nous avons estimé que c'était frustrant à utiliser.

Certaines solutions de contournement ont été mises en place, comme changer la direction du menu **vers le haut**,
mais cela ne fonctionne également pas si la hauteur du widget n'est pas suffisamment grande et qu'il y a de nombreux éléments d'action
dans le menu - comme pour les administrateurs. Dans ce cas, il serait idéal de faire tomber le menu en dessous
de la zone de contenu défilable.

### Avantages en taille

Un des avantages de ce changement est que nous avons pu abstraire beaucoup de code dans un module se chargeant de manière asynchrone. Cela nous permettra d'élargir les actions que vous pouvez effectuer sur les données de commentaire sans alourdir
le chargement initial du widget. Cela introduit un appel réseau la première fois que vous survolez
le menu de modification, mais le bundle initial est très petit (< 1ko) donc cela ne devrait pas être très perceptible.

Il est très difficile de continuer à faire évoluer un logiciel tout en réduisant sa taille au fil du temps. En général, le logiciel démarré rapidement devient lent. Nous sommes donc toujours heureux de continuer à rendre FastComments rapide :

    Avant : 28.76ko compressé (108.02ko au total)
    Après : 28.39ko compressé (105.79ko au total)

Moins de code signifie également moins de code à analyser par votre navigateur lors du chargement de la page. L'impact de cela s'élargira à mesure que de nouvelles fonctionnalités seront ajoutées.

### Avantages en performance

L'ancien menu rendait tous les éléments de menu et chargeait toutes les extensions pour voir si les extensions
avaient des éléments à ajouter, et les rendait également - pour chaque commentaire - afin que le contenu soit prêt pour votre souris.

Il y a généralement seulement 30 à 100 objets donc cela a tendance à ne pas être un gros problème, mais l'impact grandissait. Le nouveau système élimine cette préoccupation
car le menu n'est désormais rendu que sur demande.

Le compromis est que le nouveau menu est positionné et rendu en utilisant JS pour accomplir ce que nous voulons. Nous continuerons à l'optimiser autant que possible, cependant il fonctionne actuellement bien.

### En conclusion

Merci à nos clients pour leur patience lors du déploiement de ces changements. Nous espérons que vous
continuerez à aimer FastComments.

Santé !

{{/isPost}}

---