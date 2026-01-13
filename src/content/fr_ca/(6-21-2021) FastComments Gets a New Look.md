---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments a une nouvelle apparence[/postlink]

{{#unless isPost}} FastComments a été mis à jour. Découvrez la mise à jour et comment vous pouvez l'obtenir. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Une nouvelle apparence

Jusqu'à aujourd'hui, l'apparence et la convivialité du widget de commentaires FastComments n'avaient évolué que de manière incrémentale. Aujourd'hui, nous publions une toute nouvelle version !

Regardez la comparaison ci-dessous (faites glisser le curseur pour comparer) :

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Clients existants

Étant donné qu'une grande partie de notre base d'utilisateurs personnalise le widget de commentaires, nous avons gardé la nouvelle interface utilisateur complètement séparée. Vous ne devriez voir aucun changement jusqu'à ce que vous soyez migré.

### Qui le reçoit

Les nouveaux clients qui s'inscrivent à partir d'aujourd'hui bénéficieront automatiquement du nouveau design. Tous nos frameworks, bibliothèques et plugins ont été mis à jour pour incorporer la nouvelle version du widget de commentaires FastComments.

### Fin de vie de la version précédente

Nous ne prévoyons pas actuellement de fixer une date de fin de vie pour la version précédente du widget de commentaires. Cela ne signifie pas que nous ne l'annoncerons pas à l'avenir. Cependant, lorsque nous le ferons, nous donnerons une marge raisonnable (de 6 à 12 mois entre l'annonce et la dépréciation).

Notre suite de tests automatisés a été mise à jour pour prendre en charge différentes versions du widget de commentaires afin que la version précédente continue de bénéficier de tests automatisés continus.

### Mode sombre et autres fonctionnalités

Le nouveau design prend en charge le mode sombre, tout comme l'ancien widget de commentaires. Tous les indicateurs de fonctionnalités et les paramètres ont été migrés.

En ce qui concerne le mode sombre, avec l'ancienne interface utilisateur des commentaires, les ressources pour le mode sombre étaient toujours incluses lors du chargement de la page, même si elles n'étaient pas utilisées. Cela représenterait environ 2 Ko supplémentaires qui étaient toujours téléchargés côté client, même si ce n'était pas nécessaire.

La nouvelle version du widget de commentaires ne récupère ces ressources, y compris le style, que si nécessaire.

### Avatar par défaut

L'avatar par défaut utilisé dans la nouvelle interface utilisateur est différent. Lors de la migration, l'avatar par défaut utilisé dans l'ensemble du produit dans le tableau de bord administrateur et tous les e-mails de notification sera également mis à jour.

### Implications de la règle de personnalisation

Nous sommes conscients que lorsque nous apportons des modifications de style au widget de commentaires accessible au public, nous pouvons casser les personnalisations de nos clients. Ne vous inquiétez pas, nous avons pris en compte cela et avons vérifié le style personnalisé de chaque widget pour nous assurer qu'il n'a pas régressé. Cependant, si vous rencontrez des problèmes, faites-le nous savoir.

### Implications sur la performance

La taille totale du widget de commentaires est passée de 15,4 Ko à 17,4 Ko. Bien que nous pensons qu'une légère augmentation de la taille du bundle pour la meilleure apparence de l'interface utilisateur en vaut la peine, nous avons prévu des mesures pour réduire cela.

Dans l'ensemble, la nouvelle interface utilisateur se charge plus rapidement, car plus de ressources sont désormais regroupées ensemble, ce qui entraîne moins de requêtes.

### Comment migrer

#### Via le support

Il suffit de contacter votre représentant du support, ou commencer la conversation [ici](https://fastcomments.com/auth/my-account/help).

#### WordPress

Si vous utilisez **WordPress**, il vous suffit de mettre à niveau vers la version la plus récente et de mettre à jour tout style personnalisé que vous pourriez avoir.

#### Intégrations personnalisées

Si vous utilisez le widget de commentaires **VanillaJS**, il vous suffit de changer :

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

À :

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Si vous utilisez les bibliothèques **React, Angular ou Vue**, il vous suffit de mettre à niveau vers la version 2.

### Quelques statistiques techniques

Depuis la conception, la conception et la mise en œuvre, il s'agissait d'un projet de deux mois qui a impliqué **plus de 100 fichiers** et a changé plus de **neuf mille lignes de code**.

Nous avons également complètement repensé notre système de construction pour pouvoir avoir une base de code partagée entre les versions du widget de commentaires. Ce système nous permet d'utiliser des expressions de temps de compilation pour n'inclure que le code pour la version appropriée de l'interface utilisateur, réduisant ainsi la taille du bundle du widget.

### Une vision vers l'avenir

Le design précédent a duré de 2019 jusqu'à mi-2021. Nous espérons que ce nouveau look nous portera plus loin dans le futur, et notre nouvelle infrastructure pour gérer plusieurs versions de l'interface utilisateur des commentaires permettra à FastComments de croître sans interruption pour notre base de clients au fil du temps.

Bon commentaires !

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---