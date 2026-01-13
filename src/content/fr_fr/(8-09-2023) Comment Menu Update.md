---
[category:API & Development]
###### [postdate]
# [postlink]Mise à jour du menu des commentaires[/postlink]

{{#unless isPost}}
Cette mise à jour est principalement destinée aux développeurs qui personnalisent FastComments. Nous avons apporté quelques modifications à l'API et effectué quelques optimisations.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient un Jargon Technique

### Quoi de Neuf

Certains locataires de FastComments personnalisent le widget de commentaire. Cela crée un contrat entre vos personnalisations et notre mise en œuvre. Nous faisons de notre mieux pour ne pas rompre ce contrat, mais dans le cadre de cette annonce, nous avons un petit changement perturbateur.

### Pour les Développeurs

Un sélecteur CSS pour le menu des commentaires a été modifié.

Ancien :

    .comment .menu .menu-content

Nouveau :

    .menu-content

### Locataires Existants

Si vous utilisez déjà le sélecteur "menu-content" - félicitations ! Nous avons passé en revue tous nos locataires utilisant ce sélecteur et mis à jour leurs configurations de widget pour éviter des ruptures.

Faites-nous savoir si vous avez des problèmes.

### Raisonnement

Depuis la création du widget de commentaires, le menu des commentaires était purement un menu déroulant piloté par CSS. C'est une façon simple et rapide de mettre en œuvre un menu déroulant qui ne nécessite pas beaucoup de code - un objectif de conception de FastComments.

Cependant, au fil des ans, il a rencontré des problèmes.

D'une part, lorsque la zone de commentaire a une hauteur spécifique et est défilable, comme avec le Chat en Direct, accéder au menu vers le bas est difficile car le menu essaiera de dépasser la zone de contenu défilable. Cela rend une partie du menu invisible et nécessite que vous déplaciez votre souris et que vous survoliez à nouveau le menu pour effectuer le travail que vous essayiez juste de faire. Nous avons ressenti que c'était frustrant à utiliser.

Des solutions de contournement ont été mises en place, comme inverser la direction du menu **vers le haut**, mais cela ne fonctionne pas non plus si la hauteur du widget n'est pas suffisamment élevée et qu'il y a de nombreux éléments d'action dans le menu - comme pour les administrateurs. Dans ce cas, il serait idéal de faire tomber le menu en dessous de la zone de contenu défilable.

### Avantages de Taille

Un avantage de ce changement est que nous avons pu abstractionner beaucoup de code dans un module se chargeant de manière asynchrone. Cela nous permettra d'élargir les actions que vous pouvez entreprendre sur les données de commentaire sans rendre le chargement initial du widget boursouflé. Cela introduit un appel réseau la première fois que vous survolez le menu d'édition, mais le paquet initial est très petit (< 1kb) donc cela ne devrait pas être très perceptible.

Il est très difficile de continuer à faire évoluer un logiciel tout en réduisant sa taille au fil du temps. En général, le logiciel commence rapidement et devient lent. Donc, nous sommes toujours heureux de continuer à préserver la rapidité de FastComments :

    Avant : 28.76kb gzippé (108.02kb total)
    Après : 28.39kb gzippé (105.79kb total)

Moins de code signifie également moins de code à analyser par votre navigateur lors du chargement de la page. L'impact de cela s'accroîtra à mesure que de nouvelles fonctionnalités seront ajoutées.

### Avantages de Performance

L'ancien menu rendait tous les éléments du menu et chargeait toutes les extensions pour voir si les extensions avaient des éléments à ajouter, et les rendait aussi - pour chaque commentaire - afin que le contenu soit prêt pour votre souris.

Il y a généralement seulement 30 - 100 objets, donc cela tend à ne pas être un gros problème, mais l'impact grandissait. Le nouveau système supprime cette préoccupation car le menu est désormais uniquement rendu à la demande.

Le compromis est que le nouveau menu est positionné et rendu en utilisant JS pour accomplir ce que nous voulons. Nous continuerons à l'optimiser autant que possible, cependant il fonctionne actuellement bien.

### En Conclusion

Merci à nos clients pour leur patience lors du déploiement de ces changements. Nous espérons que vous continuez à aimer FastComments.

Santé !

{{/isPost}}

---