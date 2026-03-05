---
[category:Features]
###### [postdate]
# [postlink]Les Commentateurs Peuvent Désormais Supprimer Leurs Commentaires[/postlink]

{{#unless isPost}}
Une mise à jour très attendue, vous pouvez maintenant supprimer vos commentaires laissés avec FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

#### Quoi de Neuf

Comme annoncé récemment - les commentaires laissés avec FastComments peuvent désormais être modifiés - que vous soyez connecté ou non.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Démo de Suppression"></video>

En complément, la possibilité de supprimer vos commentaires a été mise en ligne. De manière compréhensible, tout comme l'édition des commentaires, cela a été l'une de nos fonctionnalités les plus demandées, et nous sommes heureux d'atteindre ce jalon avec notre base d'utilisateurs.

#### Comment Ça Marche

La suppression de commentaires fonctionne de la même manière que l'édition - les utilisateurs connectés peuvent toujours éditer et supprimer leurs commentaires. Pour les commentateurs anonymes, nos serveurs fournissent une fenêtre temporaire de 24 heures pour qu'ils puissent éditer ou supprimer leur commentaire après l'avoir laissé, tant qu'ils ne ferment pas leur navigateur. Par exemple, cela signifie qu'un commentateur anonyme peut commenter, puis éditer son commentaire pour corriger des fautes de frappe, ou le supprimer, sans jamais se connecter !

Si le commentateur anonyme ferme son navigateur, il ne pourra pas éditer ou supprimer son commentaire à moins de cliquer sur le lien magique envoyé à son e-mail.

Pour plus de sécurité, la clé d'édition temporaire sera invalidée à toute tentative de deviner la clé de manière incorrecte.

#### Pourquoi Maintenant, après tant de Temps ?

La raison est la même que celle pour laquelle l'édition a mis si longtemps à être publiée. Nous voulions nous assurer que cela n'affectait pas les performances de FastComments et voulions nous assurer que cela fonctionnait correctement avec nos fonctionnalités de commentaire en direct. De plus, nous voulions que la fonctionnalité s'adapte au cas d'utilisation le plus courant de nos clients - le commentaire anonyme.

#### Suppression de Commentaires en Direct

Tout comme commenter et voter - la suppression se fait en direct. Si deux utilisateurs sont sur la même page, et qu'un utilisateur supprime son commentaire, l'autre utilisateur verra qu'il a été retiré.

#### Activation de la Suppression de Commentaire

Nous avons terminé le déploiement de l'édition et de la suppression de commentaires par défaut pour tous nos clients. Actuellement, cela ne peut pas être désactivé.

#### Intégrations Tiers

Supprimer un commentaire fera en sorte que l'événement se propage à toutes les intégrations que vous avez - comme WordPress. Si vous utilisez notre plugin WordPress, alors ajouter un commentaire met à jour votre installation WordPress en arrière-plan, vous permettant ainsi de conserver une copie de vos données. Si vous supprimez des commentaires, nous suivons la même logique et le supprimons de votre installation WordPress. Cela s'applique à d'autres intégrations, pas seulement à WordPress.

#### En Conclusion

Nous savons que cette fonctionnalité a longtemps été attendue par certains. Comme toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester, et publier correctement cette fonctionnalité.

Santé !

{{/isPost}}