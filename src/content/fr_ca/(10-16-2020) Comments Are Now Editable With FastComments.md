---
[category:Features]
###### [postdate]
# [postlink]Les Commentaires Sont Maintenant Éditables Avec FastComments[/postlink]

{{#unless isPost}}
Une mise à jour très attendue, vous pouvez maintenant éditer les commentaires laissés avec FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

#### Quoi de Neuf

Les commentaires laissés avec FastComments peuvent maintenant être édités - que vous soyez connecté ou non.

<img src="images/fc-editing-demo.gif" alt="Démonstration d'Édition GIF (17mb)" title="Démonstration d'Édition" />

Compréhensiblement, cela a été l'une de nos fonctionnalités les plus demandées, et nous sommes heureux d'atteindre ce jalon avec notre base d'utilisateurs.

#### Comment ça Fonctionne

Les utilisateurs connectés peuvent toujours éditer leurs commentaires. Pour les commentateurs anonymes, nos serveurs fournissent une fenêtre temporaire de 24 heures pour qu'ils puissent éditer leur commentaire après avoir commenté tant qu'ils ne ferment pas leur navigateur. Par exemple, cela signifie qu'un commentateur anonyme peut commenter, puis éditer son commentaire pour corriger des fautes de frappe, sans jamais se connecter !

Si le commentateur anonyme ferme son navigateur, il ne pourra pas éditer son commentaire à moins de cliquer sur le lien magique envoyé à son e-mail.

Pour des raisons de sécurité supplémentaires, la clé d'édition temporaire sera invalidée à toute tentative de deviner incorrectement la clé.

#### Pourquoi Maintenant, après tout ce temps ?

Comme pour tous les changements apportés au widget côté client, nous devons être prudents de ne pas gonfler sa taille. Cette fonctionnalité ajoute une taille considérable à la base de code de commentaires (environ 1ko gzippé - environ une augmentation de 10%).
Nous voulions nous assurer que cela ne nuise pas aux performances de FastComments et nous voulions vérifier que cela fonctionnait correctement avec nos fonctionnalités de commentaires en direct. De plus, nous voulions que la fonctionnalité soit adaptée au cas d'utilisation le plus courant de nos clients - le commentaire anonyme.

#### Édition des Commentaires en Direct

Tout comme commenter et voter - l'édition se fait en direct. Si deux utilisateurs sont sur la même page, et qu'un utilisateur édite son commentaire, l'autre utilisateur verra la mise à jour.

#### Activation de l'Édition des Commentaires

Nous avons terminé le déploiement de l'édition des commentaires par défaut pour tous nos clients. Actuellement, cela ne peut pas être désactivé.

#### Quelles Sont les Prochaines Étapes ?

Nous prévoyons également de publier la possibilité de supprimer des commentaires dans une future mise à jour.

#### Intégrations Tierces

Éditer un commentaire fera en sorte que l'événement se propage à toutes les intégrations que vous avez - comme WordPress. Si vous utilisez notre plugin WordPress, alors ajouter un commentaire met à jour votre installation WordPress en arrière-plan pour que vous conserviez une copie de vos données. Si vous éditez un commentaire, nous suivons la même logique et mettons à jour la copie dans votre installation WordPress. Cela s'applique à d'autres intégrations, pas seulement à WordPress.

#### En Conclusion

Nous savons que cette fonctionnalité a été longtemps attendue par certains. Comme toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité.

À votre santé !

{{/isPost}}