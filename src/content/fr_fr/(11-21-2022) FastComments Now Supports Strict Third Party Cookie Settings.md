---
[category:Sécurité]

###### [postdate]
# [postlink]FastComments prend désormais en charge les paramètres stricts des cookies tiers[/postlink]

{{#unless isPost}}
Jusqu'à présent, FastComments nécessitait l'activation des cookies tiers pour fonctionner pleinement. Ce n'est plus le cas !
{{/unless}}

{{#isPost}}

### Quoi de Neuf

La désactivation des cookies tiers par défaut devient la norme dans les navigateurs axés sur la confidentialité. Un exemple de cela est le Safari d'Apple sur iOS, où
si vous laissez votre e-mail pour commenter avec FastComments, vérifiez ce commentaire, puis revenez sur cette page pour laisser un autre commentaire ou répondre
à quelqu'un, vous constaterez que tout commentaire supplémentaire que vous laisserez sera marqué comme non vérifié.

Cela ne se produira qu'avec la configuration par défaut qui affiche une étiquette `Non vérifié` sur les commentaires. Cependant, cela peut affecter d'autres éléments comme les approbations automatiques
si les approbations automatiques ne sont activées que pour les commentaires vérifiés.

Comme vous pouvez l'imaginer, cela peut entraîner un comportement frustrant où un utilisateur vérifie son commentaire, clique sur "Rester connecté", et il est
toujours déconnecté lorsqu'il visite votre site ou application. Notez que cela ne s'applique pas aux intégrations SSO, car SSO ne dépend pas
des cookies.

Maintenant, avec un nouveau paramètre qui peut être activé appelé `Activer le popup pour les cookies tiers` dans les paramètres du widget, ce problème est résolu en
ouvrant un popup qui récupère le cookie de l'utilisateur. Pour l'instant, cela ne se produit que s'ils interagissent avec le widget de commentaire, mais le résultat est que
le commentaire sera posté depuis leur session FastComments.com, marquant leur commentaire comme vérifié, etc.

### Comment l'obtenir & Documentation

Tous les clients de FastComments sur tous les niveaux ont désormais accès à cette fonctionnalité. Consultez [la documentation](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) pour apprendre à activer le contournement des cookies tiers.

### En Conclusion

Comme toutes les grandes versions, nous sommes ravis d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---