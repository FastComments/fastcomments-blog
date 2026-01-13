---
[category:Features]
###### [postdate]
# [postlink]Les commentaires sont désormais modifiables avec FastComments[/postlink]

{{#unless isPost}}
Une mise à jour très attendue, vous pouvez maintenant modifier les commentaires laissés avec FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Quoi de neuf

Les commentaires laissés avec FastComments peuvent maintenant être modifiés - que vous soyez connecté ou non.

<img src="images/fc-editing-demo.gif" alt="Démonstration de modification GIF (17 Mo)" title="Démonstration de modification" />

Il est compréhensible que cela ait été l'une de nos fonctionnalités les plus demandées, et nous sommes heureux d'atteindre cette étape avec notre base d'utilisateurs.

#### Comment cela fonctionne

Les utilisateurs connectés peuvent toujours modifier leurs commentaires. Pour les commentateurs anonymes, nos serveurs offrent une fenêtre temporaire de 24 heures pour qu'ils puissent modifier leur commentaire après l'avoir posté, tant qu'ils ne ferment pas leur navigateur. Par exemple, cela signifie qu'un commentateur anonyme peut commenter, puis modifier son commentaire pour corriger d'éventuelles fautes de frappe, sans jamais se connecter !

Si le commentateur anonyme ferme son navigateur, il ne pourra pas modifier son commentaire à moins de cliquer sur le lien magique envoyé à son e-mail.

Pour une sécurité supplémentaire, la clé de modification temporaire sera invalidée lors de toute tentative de deviner la clé incorrectement.

#### Pourquoi maintenant, après tant de temps ?

Comme pour tous les changements apportés au widget côté client, nous devons faire attention à ne pas en gonfler la taille. Cette fonctionnalité ajoute une taille considérable à la base de code de commentaire principale (environ 1 Ko gzippé - soit une augmentation d'environ 10 %). 
Nous voulions nous assurer que cela n'affecte pas les performances de FastComments et que cela fonctionne correctement avec nos fonctionnalités de commentaires en direct. De plus, nous voulions que la fonctionnalité réponde aux cas d'utilisation les plus courants de nos clients - les commentaires anonymes.

#### Modification de commentaires en direct

Tout comme le commentaire et le vote - la modification se fait en direct. Si deux utilisateurs sont sur la même page, et qu'un utilisateur modifie son commentaire, l'autre utilisateur verra la mise à jour.

#### Activation de la modification des commentaires

Nous avons terminé le déploiement de la modification des commentaires par défaut pour tous nos clients. Actuellement, elle ne peut pas être désactivée.

#### Quelles sont les prochaines étapes ?

Nous prévoyons de publier la possibilité de supprimer des commentaires également dans une future mise à jour.

#### Intégrations tierces

Modifier un commentaire fera en sorte que l'événement se propage à toutes les intégrations que vous avez - comme WordPress. Si vous utilisez notre plugin WordPress, alors ajouter un commentaire met à jour votre installation WordPress en arrière-plan afin que vous gardiez une copie de vos données. Si vous modifiez un commentaire, nous suivons la même logique et mettons à jour la copie dans votre installation WordPress. Cela s'applique à d'autres intégrations, pas seulement WordPress.

#### En conclusion

Nous savons que cette fonctionnalité a été longtemps attendue par certains. Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité.

À votre santé !

{{/isPost}}

---