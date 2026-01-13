---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments A Un Nouveau Look[/postlink]

{{#unless isPost}} FastComments a été mis à jour. Découvrez la mise à jour et comment vous pouvez l'obtenir. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

### Un Nouveau Look

Jusqu'à aujourd'hui, l'apparence et la convivialité du widget de commentaires FastComments n'avaient évolué que de manière incrémentale. Aujourd'hui, nous lançons
une toute nouvelle version !

Découvrez la comparaison ci-dessous (faites glisser le curseur pour comparer) :

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Clients Existants

Étant donné qu'une grande partie de notre base d'utilisateurs personnalise le widget de commentaires, nous avons complètement séparé la nouvelle interface utilisateur. Vous ne devriez voir aucun
changement jusqu'à ce que vous soyez migré.

### Qui en Bénéficie

Les nouveaux clients qui s'inscrivent à partir d'aujourd'hui bénéficieront automatiquement du nouveau design. Tous nos frameworks, bibliothèques et
plugins ont reçu des mises à jour pour incorporer la nouvelle version du widget de commentaires FastComments.

### Fin de Vie de la Version Précédente

Nous ne fixons actuellement pas de fin de vie pour la version précédente du widget de commentaires. Cela ne signifie pas que nous n'annoncerons pas une date à l'avenir. Cependant, lorsque nous le ferons, nous donnerons une période raisonnable (6 à 12 mois entre l'annonce et la dépréciation).

Notre suite de tests automatisés a été mise à jour pour supporter différentes versions du widget de commentaires afin que la version précédente
continue de bénéficier de tests automatisés continus.

### Mode Sombre & Autres Fonctionnalités

Le nouveau design prend en charge le mode sombre, tout comme l’ancien widget de commentaires. Tous les drapeaux de fonctionnalités et paramètres ont été migrés.

En ce qui concerne le mode sombre, avec l'ancienne interface utilisateur de commentaires, les ressources pour le mode sombre étaient toujours incluses au chargement de la page même si elles
n'étaient pas utilisées. Cela représentait environ 2ko supplémentaires qui étaient toujours téléchargés pour le client - même si ce n'était pas nécessaire.

La nouvelle version du widget de commentaires ne récupère ces ressources, y compris les styles, que si nécessaire.

### Avatar par Défaut

L'avatar par défaut utilisé dans la nouvelle interface utilisateur est différent. Lors de la migration, l'avatar par défaut utilisé dans l'ensemble du produit dans le tableau de bord administrateur et tous les e-mails de notification sera également mis à jour.

### Implications des Règles de Personnalisation

Nous sommes conscients que lorsque nous apportons des modifications de style au widget de commentaires accessible au public, cela peut perturber les personnalisations de nos clients. Ne vous inquiétez pas, nous avons pensé à vous et avons passé en revue le style personnalisé de chaque widget pour nous assurer qu'il n'a pas régressé. Cependant, si vous rencontrez des problèmes, faites-le nous savoir.

### Implications de Performance

La taille totale du widget de commentaires est passée de 15.4ko à 17.4ko. Bien que nous pensons qu'une légère augmentation de la taille du paquet pour l'amélioration visuelle de l'interface utilisateur en vaille la peine, nous avons prévu des mesures pour ramener cela à un niveau inférieur.

Dans l'ensemble, la nouvelle interface utilisateur se charge plus rapidement, car plus de ressources sont maintenant groupées ensemble, ce qui entraîne ainsi moins de requêtes.

### Comment Migrer

#### Via Support

Il vous suffit de contacter votre représentant du support ou de commencer la conversation [ici](https://fastcomments.com/auth/my-account/help).

#### WordPress

Si vous utilisez **WordPress**, il vous suffit de mettre à jour vers la dernière version et de mettre à jour tout style personnalisé que vous pourriez avoir.

#### Intégrations Personnalisées

Si vous utilisez le widget de commentaires **VanillaJS**, changez simplement :

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

À :

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Si vous utilisez les bibliothèques **React, Angular ou Vue**, mettez simplement à niveau vers la version 2.

### Quelques Statistiques Nerdy

Depuis la conception, le design et l'implémentation, il s'agissait d'un projet de deux mois qui a englobé **plus de 100 fichiers** et
modifié plus de **neuf mille lignes de code**.

Nous avons également complètement refondu notre système de construction pour pouvoir avoir une base de code partagée entre les versions du widget de commentaires. Ce système nous permet d'utiliser des expressions à la compilation pour n'inclure que le code pour la version appropriée de l'interface utilisateur, réduisant ainsi la taille du paquet du widget.

### Vision d'Avenir

Le design précédent nous a accompagné de 2019 jusqu'à mi-2021. Nous espérons que ce nouveau look nous portera encore plus loin dans l'avenir, et notre
nouvelle infrastructure pour la gestion de plusieurs versions de l'interface utilisateur de commentaires permettra à FastComments de croître sans interruption pour notre
base de clients au fil du temps.

Bonne rédaction de commentaires !

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---