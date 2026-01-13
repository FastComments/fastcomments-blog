---
[category:Features]
###### [postdate]
# [postlink]Les Commentateurs Peuvent Désormais Supprimer Leurs Commentaires[/postlink]

{{#unless isPost}}
Une mise à jour très attendue, vous pouvez désormais supprimer vos commentaires laissés avec FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

#### Quoi de Neuf

Comme annoncé récemment - les commentaires laissés avec FastComments peuvent désormais être édités - que vous soyez connecté ou non.

<img src="images/fc-deleting-demo.gif" alt="GIF de Démonstration de Suppression (11mo)" title="Démonstration de Suppression" />

En complément, la capacité de supprimer vos commentaires a été publiée. Compréhensiblement, tout comme l'édition des commentaires, cela a été l'une de nos fonctionnalités les plus demandées, et nous sommes heureux d'atteindre cette étape avec notre base d'utilisateurs.

#### Comment Cela Fonctionne

La suppression de commentaires fonctionne de la même manière que l'édition - les utilisateurs connectés peuvent toujours modifier et supprimer leurs commentaires. Pour les commentateurs anonymes, nos serveurs offrent une fenêtre temporaire de 24 heures pour modifier ou supprimer leur commentaire après l'avoir laissé, tant qu'ils ne ferment pas leur navigateur. Par exemple, cela signifie qu'un commentateur anonyme peut commenter, puis modifier son commentaire pour corriger des fautes de frappe, ou le supprimer, sans jamais se connecter !

Si le commentateur anonyme ferme son navigateur, il ne pourra pas modifier ou supprimer son commentaire à moins de cliquer sur le lien magique envoyé à son email.

Pour plus de sécurité, la clé temporaire d'édition sera invalidée à toute tentative de deviner la clé incorrectement.

#### Pourquoi Maintenant, après tant de temps ?

La raison en est la même que celle pour laquelle l'édition a mis si longtemps à être publiée. Nous voulions nous assurer que cela n'affaiblisse pas les performances de FastComments et nous voulions garantir que cela fonctionne correctement avec nos fonctionnalités de commentaires en direct. De plus, nous voulions que la fonctionnalité réponde au cas d'utilisation le plus courant de nos clients - le commentaire anonyme.

#### Suppression de Commentaires en Direct

Tout comme commenter et voter - la suppression se fait en direct. Si deux utilisateurs sont sur la même page, et qu'un utilisateur supprime son commentaire, l'autre utilisateur verra qu'il a été retiré.

#### Activation de la Suppression de Commentaires

Nous avons terminé le déploiement de l'édition et de la suppression de commentaires par défaut pour tous nos clients. Actuellement, cela ne peut pas être désactivé.

#### Intégrations de Tiers

La suppression d'un commentaire entraînera la propagation de l'événement vers toutes les intégrations que vous avez - comme WordPress. Si vous utilisez notre plugin WordPress, alors l'ajout d'un commentaire met à jour votre installation WordPress en arrière-plan afin que vous conserviez une copie de vos données. Si vous supprimez des commentaires, nous appliquons la même logique et le supprimons de votre installation WordPress. Cela s'applique à d'autres intégrations, pas seulement WordPress.

#### En Conclusion

Nous savons que cette fonctionnalité a été longtemps attendue par certains. Comme pour toutes les grandes publications, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et publier correctement cette fonctionnalité.

Santé !

{{/isPost}}