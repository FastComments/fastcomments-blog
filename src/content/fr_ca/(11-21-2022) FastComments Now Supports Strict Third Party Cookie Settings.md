---
[category:Sécurité]

###### [postdate]
# [postlink]FastComments prend maintenant en charge les paramètres stricts des cookies tiers[/postlink]

{{#unless isPost}}
Jusqu'à présent, FastComments nécessitait l’activation des cookies tiers pour fonctionner pleinement. Ce n'est plus le cas !
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Désactiver les cookies tiers par défaut devient la norme dans les navigateurs axés sur la vie privée. Un exemple de cela est Safari d'Apple sur iOS, où
si vous laissez votre courriel pour commenter avec FastComments, vérifiez ce commentaire, puis revenez à cette page pour laisser un autre commentaire, ou répondre
à quelqu'un, vous constaterez que tous les commentaires supplémentaires que vous laissez seront marqués comme non vérifiés.

Cela se produira uniquement avec la configuration par défaut qui affiche une étiquette `Non vérifié` sur les commentaires. Cependant, cela peut avoir un impact sur d'autres éléments, comme les approbations automatiques
si les approbations automatiques ne sont activées que pour les commentaires vérifiés.

Comme vous pouvez l'imaginer, cela peut entraîner un comportement frustrant où un utilisateur vérifie son commentaire, clique sur "Rester connecté", et il n'est
toujours pas connecté lorsqu'il visite votre site ou application. Notez que cela ne s'applique pas aux intégrations SSO, car SSO ne dépend pas
des cookies.

Maintenant, avec un nouveau paramètre qui peut être activé appelé `Activer la fenêtre contextuelle de cookies tiers` dans les paramètres du widget, ce problème est résolu en
ouvrant une fenêtre contextuelle qui récupère le cookie de l'utilisateur. Pour l'instant, cela ne se produit que s'ils interagissent avec le widget de commentaire, mais le résultat est que
le commentaire sera publié depuis leur session FastComments.com, marquant leur commentaire comme vérifié, et ainsi de suite.

### Comment l'obtenir & Documentation

Tous les clients de FastComments sur tous les niveaux ont maintenant accès à cette fonctionnalité. Consultez [la documentation](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) pour apprendre comment activer le contournement des cookies tiers.

### En Conclusion

Comme toutes les grandes versions, nous sommes contents d'avoir pu prendre le temps d'optimiser, tester et bien publier cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Cheers!

{{/isPost}}

---