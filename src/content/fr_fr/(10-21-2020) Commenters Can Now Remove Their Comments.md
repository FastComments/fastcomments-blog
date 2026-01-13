---
[category:Features]
###### [postdate]
# [postlink]Les Commentateurs Peuvent Désormais Supprimer Leurs Commentaires[/postlink]

{{#unless isPost}}
Une mise à jour très attendue, vous pouvez maintenant supprimer vos commentaires laissés avec FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient Du Jargon Technique

#### Quoi de Neuf

Comme annoncé récemment - les commentaires laissés avec FastComments peuvent maintenant être modifiés - que vous soyez connecté ou non.

<img src="images/fc-deleting-demo.gif" alt="GIF de démonstration de suppression (11mb)" title="Démonstration de Suppression" />

En complément, la possibilité de supprimer vos commentaires a été publiée. Compréhensiblement, tout comme l'édition de commentaires, cela a été l'une de nos fonctionnalités les plus demandées, et nous sommes heureux d'atteindre cette étape avec notre base d'utilisateurs.

#### Comment Ça Fonctionne

La suppression de commentaires fonctionne de la même manière que l'édition - les utilisateurs connectés peuvent toujours éditer et supprimer leurs commentaires. Pour les commentateurs anonymes, nos serveurs fournissent une fenêtre temporaire de 24 heures pour qu'ils puissent éditer ou supprimer leur commentaire après l'avoir laissé tant qu'ils ne ferment pas leur navigateur. Par exemple, cela signifie qu'un commentateur anonyme peut commenter, puis éditer son commentaire pour corriger des fautes de frappe ou le supprimer, sans jamais se connecter !

Si le commentateur anonyme ferme son navigateur, il ne pourra pas éditer ou supprimer son commentaire à moins qu'il ne clique sur le lien magique envoyé à son email.

Pour plus de sécurité, la clé d'édition temporaire sera invalidée à chaque tentative de deviner la clé incorrectement.

#### Pourquoi Maintenant, après tant de temps ?

La raison derrière cela est la même que celle pour laquelle l'édition a mis autant de temps à être publiée. Nous voulions nous assurer que cela ne diminue pas les performances de FastComments et voulions vérifier que cela fonctionnait correctement avec nos fonctionnalités de commentaire en direct. De plus, nous voulions que la fonctionnalité s'adapte au cas d'utilisation le plus courant de nos clients - le commentaire anonyme.

#### Suppression de Commentaires en Direct

Tout comme le fait de commenter et voter - la suppression se fait en direct. Si deux utilisateurs sont sur la même page, et qu'un utilisateur supprime son commentaire, l'autre utilisateur verra qu'il a été supprimé.

#### Activation de la Suppression de Commentaires

Nous avons fini de déployer l'édition et la suppression de commentaires par défaut pour tous nos clients. Actuellement, cela ne peut pas être désactivé.

#### Intégrations Tierces

Supprimer un commentaire provoquera la propagation de l'événement à toutes les intégrations que vous avez - comme WordPress. Si vous utilisez notre plugin WordPress, alors l'ajout d'un commentaire met à jour votre installation WordPress en arrière-plan afin que vous conserviez une copie de vos données. Si vous supprimez des commentaires, nous suivons la même logique et les supprimons de votre installation WordPress. Cela s'applique à d'autres intégrations, pas seulement WordPress.

#### En Conclusion

Nous savons que cette fonctionnalité a été longtemps attendue par certains. Comme pour toutes les versions majeures, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité.

Santé !

{{/isPost}}