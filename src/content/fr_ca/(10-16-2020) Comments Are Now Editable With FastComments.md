---
[category:Features]
###### [postdate]
# [postlink]Les commentaires sont maintenant modifiables avec FastComments[/postlink]

{{#unless isPost}}
Une mise à jour très attendue, vous pouvez désormais modifier les commentaires laissés avec FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

#### Quoi de neuf

Les commentaires laissés avec FastComments peuvent désormais être modifiés - que vous soyez connecté ou non.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Démonstration de modification"></video>

Compréhensible, cela a été l'une de nos fonctionnalités les plus demandées, et nous sommes heureux d'atteindre ce cap avec notre base d'utilisateurs.

#### Comment ça fonctionne

Les utilisateurs connectés peuvent toujours modifier leurs commentaires. Pour les commentateurs anonymes, nos serveurs fournissent une fenêtre temporaire de 24 heures pour modifier leur commentaire après l'avoir publié tant qu'ils ne ferment pas leur navigateur. Par exemple, cela signifie qu'un commentateur anonyme peut commenter, puis modifier son commentaire pour corriger d'éventuelles fautes de frappe, sans jamais se connecter !

Si le commentateur anonyme ferme son navigateur, il ne pourra pas modifier son commentaire à moins de cliquer sur le lien magique envoyé à son e-mail.

Pour plus de sécurité, la clé de modification temporaire sera invalidée à toute tentative de deviner la clé incorrectement.

#### Pourquoi maintenant, après tout ce temps ?

Comme pour tous les changements apportés au widget côté client, nous devons faire attention à ne pas gonfler sa taille. Cette fonctionnalité ajoute une taille considérable à la base de code de commentaire principal (environ 1 Ko gzippé - environ une augmentation de 10%).
Nous voulions nous assurer que cela ne réduisait pas les performances de FastComments et garantir que cela fonctionnait correctement avec nos fonctionnalités de commentaire en direct. De plus, nous voulions que la fonctionnalité puisse
répondre au cas d'utilisation le plus courant de nos clients - le commentaire anonyme.

#### Modification des commentaires en direct

Tout comme commenter et voter - la modification se fait en direct. Si deux utilisateurs sont sur la même page, et qu'un utilisateur modifie son commentaire, l'autre utilisateur le verra se mettre à jour.

#### Activation de la modification de commentaires

Nous avons terminé le déploiement de la modification des commentaires par défaut pour tous nos clients. Actuellement, cela ne peut pas être désactivé.

#### Et après ?

Nous prévoyons de publier également la possibilité de supprimer des commentaires dans une future mise à jour.

#### Intégrations tierces

Modifier un commentaire fera propaguer l'événement à toutes les intégrations que vous avez - comme WordPress. Si vous utilisez notre plugin WordPress, alors ajouter un commentaire met à jour
votre installation WordPress en arrière-plan afin que vous conservez une copie de vos données. Si vous modifiez un commentaire, nous appliquons la même logique et mettons à jour la copie dans votre installation WordPress. Cela s'applique à d'autres intégrations, pas seulement à WordPress.

#### En conclusion

Nous savons que cette fonctionnalité a été longtemps attendue par certains. Comme pour tous les lancements majeurs, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité.

Santé !

{{/isPost}}