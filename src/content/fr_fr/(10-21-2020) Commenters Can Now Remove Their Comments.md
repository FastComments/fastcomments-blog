---
[category:Features]
###### [postdate]
# [postlink]Les Commentateurs Peuvent Désormais Supprimer Leurs Commentaires[/postlink]

{{#unless isPost}}
Une mise à jour très attendue, vous pouvez désormais supprimer vos commentaires laissés avec FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient Du Jargon Technique

#### Quoi de Neuf

Comme annoncé récemment - les commentaires laissés avec FastComments peuvent désormais être modifiés - que vous soyez connecté ou non.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Démonstration de Suppression"></video>

En complément, la possibilité de supprimer vos commentaires a été mise en place. Compréhensiblement, tout comme la modification des commentaires, cela a été l'une des fonctionnalités les plus demandées, et nous sommes heureux d'atteindre cette étape avec notre base d'utilisateurs.

#### Comment ça Marche

La suppression de commentaires fonctionne de la même manière que la modification - les utilisateurs connectés peuvent toujours modifier et supprimer leurs commentaires. Pour les commentateurs anonymes, nos serveurs offrent une fenêtre temporaire de 24 heures pour qu'ils puissent éditer ou supprimer leur commentaire après avoir commenté tant qu'ils ne ferment pas leur navigateur. Par exemple, cela signifie qu'un commentateur anonyme peut commenter, puis modifier son commentaire pour corriger les fautes de frappe, ou le supprimer, sans jamais se connecter !

Si le commentateur anonyme ferme son navigateur, il ne pourra pas modifier ou supprimer son commentaire à moins qu'il ne clique sur le lien magique envoyé à son e-mail.

Pour plus de sécurité, la clé de modification temporaire sera invalidée à toute tentative de deviner incorrectement la clé.

#### Pourquoi Maintenant, après tant de temps ?

La raison de cela est la même que celle pour laquelle la modification a mis tant de temps à être publiée. Nous voulions nous assurer que cela ne diminuait pas les performances de FastComments et que cela fonctionnait correctement avec nos fonctionnalités de commentaire en direct. De plus, nous voulions que la fonctionnalité s'adapte au cas d'utilisation le plus courant de nos clients - les commentaires anonymes.

#### Suppression de Commentaires en Direct

Tout comme commenter et voter - la suppression se fait en temps réel. Si deux utilisateurs sont sur la même page, et qu'un utilisateur supprime son commentaire, l'autre utilisateur verra que celui-ci a été supprimé.

#### Activation de la Suppression de Commentaires

Nous avons terminé de déployer la modification et la suppression de commentaires par défaut pour tous nos clients. Actuellement, cela ne peut pas être désactivé.

#### Intégrations de Tiers

Supprimer un commentaire entraînera la propagation de l'événement vers toutes les intégrations que vous avez - comme WordPress. Si vous utilisez notre plugin WordPress, l'ajout d'un commentaire met à jour en arrière-plan votre installation WordPress afin que vous conserviez une copie de vos données. Si vous supprimez des commentaires, nous suivons la même logique et les retirons de votre installation WordPress. Cela s'applique à d'autres intégrations, pas seulement WordPress.

#### En Conclusion

Nous savons que cette fonctionnalité a été longtemps attendue par certains. Comme pour toutes les versions majeures, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité.

Santé !

{{/isPost}}

---