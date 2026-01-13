---
[category:Features]

###### [postdate]

# [postlink]Profils, Badges et Messagerie Directe[/postlink]

{{#unless isPost}}Dans cette version, nous avons de nombreuses fonctionnalités qui récompensent les communautés utilisant FastComments et les aident à communiquer.{{/unless}}

{{#isPost}}

### Quoi de Neuf
FastComments a officiellement lancé les Profils Utilisateurs et les fonctionnalités associées.

### Profils Utilisateurs

Le profil d'un utilisateur se compose de son nom, de son statut en ligne, de son activité récente et d'un espace pour commenter son profil.

Ses badges et son avancement dans l'obtention de badges sont également affichés ici.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="Profil Utilisateur FastComments" title="Profil Utilisateur FastComments"></video>
</div>

Les utilisateurs peuvent voir leur propre profil en cliquant sur leur avatar dans un fil de commentaires, ou en [allant à leur page de compte](https://fastcomments.com/auth/my-account).

De plus, vous pouvez envoyer un message direct à un utilisateur depuis son profil.

### Modal de Profil Utilisateur
Lorsque l'avatar d'un utilisateur est sélectionné, le Modal de Profil s'ouvrira. Cela a également été ajouté pour les modérateurs sur la page de Modération des Commentaires.

### Récompenser les Utilisateurs avec des Badges

Les badges sont une autre récente addition à FastComments qui vous permet de récompenser les utilisateurs de votre communauté. Créer un badge est facile :

<div class="text-center">
    <img src="/images/create-badge.png" alt="Créer un Badge" title="Créer un Badge" />
</div>

Les badges peuvent être décernés en fonction des conditions suivantes :

- Nombre de Commentaires Postés
- Nombre de Votes Positifs Reçus
- Nombre de Réponses Reçues
- Nombre de Commentaires Épinglés
- Vétéran (temps depuis le premier commentaire)
- Commentaire Tard dans la Nuit
- Temps de Réponse Rapide
- Répondre à une Page Spécifique
- Modérateurs - Nombre de Commentaires Supprimés
- Modérateurs - Nombre de Commentaires Approuvés
- Modérateurs - Nombre de Commentaires Non Approuvés
- Modérateurs - Nombre de Commentaires Révisés
- Modérateurs - Nombre de Commentaires Marqués Spam
- Modérateurs - Nombre de Commentaires Marqués Non Spam

Comme vous pouvez le voir, il y a de nombreuses situations pour lesquelles nous pouvons récompenser les utilisateurs.

Nous pouvons définir plusieurs *niveaux* de badges. Par exemple, nous pourrions ajouter des badges `Nombre de Commentaires` avec des seuils de 10, 100 et 1000 commentaires postés. À mesure que les utilisateurs interagissent dans votre communauté, leurs badges obtenus **s'accumuleront** au fil du temps.

N'oublions pas les *Modérateurs*. Dans de nombreuses communautés, c'est un travail ingrat. Offrez à vos modérateurs quelque chose à exhiber en configurant des badges de Modérateur pour eux.

Nous soutenons également quelques cas uniques, comme les badges `Oiseau de Nuit` et `Temps de Réponse Rapide` pour reconnaître les membres actifs tard dans la nuit, ou ceux qui répondent rapidement. Le badge `Temps de Réponse Rapide` fonctionne mieux lorsque les fonctionnalités live de FastComments sont utilisées.

Lorsque de nouveaux badges sont créés, ils seront automatiquement ajoutés aux membres existants de votre communauté qui y sont éligibles.

### Messagerie Directe

Les clients ont demandé la possibilité d'envoyer des messages directs aux utilisateurs depuis le lancement de FastComments. Deux ans plus tard, nous sommes heureux d'annoncer enfin cette fonctionnalité et de remercier ceux qui ont patiemment attendu.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="Messagerie Directe FastComments" title="Messagerie Directe FastComments"></video>
</div>

La Messagerie Directe permet aux membres d'une communauté de s'envoyer des messages privés, mais elle sert également d'outil utile pour les Modérateurs et Administrateurs afin de contacter les commentateurs.

Comme pour la plupart des fonctionnalités de FastComments, toutes les fonctionnalités de Messagerie Directe sont live.

#### Messagerie Directe Asynchrone

Lorsque vous envoyez un message à un utilisateur, il peut être hors ligne. Dans ce cas, nous enverrons un e-mail à l'utilisateur pour l'informer qu'il a un nouveau message.

#### Messagerie Directe par E-mail

Lorsqu'un utilisateur reçoit un message par e-mail, il a la possibilité de répondre en répondant à cet e-mail.

<div class="text-center">
    <img src="/images/email-dm.png" alt="E-mail DM" title="E-mail DM" />
</div>

Lorsqu'il le fait, sa réponse apparaîtra **en direct** pour l'autre utilisateur dans l'onglet Messages de son profil.

### SSO Sécurisé

Les Profils Utilisateurs FastComments sont entièrement compatibles avec les installations SSO Sécurisées existantes.

Des éléments comme les paramètres de confidentialité de l'utilisateur peuvent également être configurés via le drapeau `isProfileActivityPrivate` dans la charge utile SSO.

Par défaut, `isProfileActivityPrivate` est vrai.

### Clients Existants

Nous avons terminé le déploiement de cette fonctionnalité à tous les clients existants sur tous les niveaux.

### Configurer la Confidentialité

En consultant votre profil, il existe des options pour :

- Désactiver les commentaires sur votre profil.
- Empêcher que votre activité soit visible par d'autres.
- Empêcher les autres de vous envoyer des messages directs.

### Données Collectées

Les Profils Utilisateurs sont créés sur la base des données que nous avons aujourd'hui, comme leur nom, les commentaires qu'ils ont laissés récemment, etc.

Nous ne collecterons pas de données supplémentaires pour étoffer les profils des utilisateurs. Nous aimons considérer les Profils Utilisateurs comme un profil typique d'un utilisateur sur un forum.

### En Conclusion

Nous pensons que ces fonctionnalités élargissent considérablement FastComments en tant que plateforme, et nous espérons que vous les trouverez utiles et faciles à utiliser.

Santé !

{{/isPost}}

---