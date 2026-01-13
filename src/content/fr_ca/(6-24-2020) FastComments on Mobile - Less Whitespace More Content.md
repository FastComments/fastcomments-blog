---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments sur mobile - Moins d'espaces, plus de contenu[/postlink]

{{#unless isPost}}
Nous avons amélioré la lisibilité et l'apparence de FastComments sur mobile.
{{/unless}}

{{#isPost}}
#### Le Problème

Lorsque nous avons d'abord lancé FastComments, nous voulions un design élégant qui fonctionne bien sur mobile et sur les navigateurs de bureau. Cependant, au fur et à mesure que nous avons ajouté plus de fonctionnalités et observé les interactions des utilisateurs avec FastComments, nous avons réalisé que nous gaspillions de l'espace sur notre interface mobile en essayant de la rendre "jolie".

Nous avons donc trouvé un compromis.

#### La Solution

Ici, vous pouvez voir avant, nous n'utilisions pas l'espace de manière très efficace.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Version mobile avant"
        title="Version mobile avant"
        class='lozad' />
</div>

Maintenant, nous avons échangé l'espace vertical de l'écran pour l'espace horizontal de l'écran.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Version mobile après"
        title="Version mobile après"
        class='lozad' />
</div>

    
#### Implications de la Règle de Personnalisation

Nous sommes conscients que lorsque nous apportons des changements de style au widget de commentaire visible au public, nous pouvons rompre les personnalisations de nos clients. Ne vous inquiétez pas, nous avons tout prévu et avons vérifié le style personnalisé de chaque widget pour nous assurer qu'il n'est pas cassé. Cependant, si vous rencontrez des problèmes, faites-le nous savoir.

#### Implications de Performance

Ce changement a augmenté la taille du widget d'environ 300 octets, la portant à un total de 10,1 Ko. Comme pour toutes les versions qui augmentent la taille du widget, nous allons chercher des moyens pour la ramener à la baisse.

Bonne commentaire !

{{/isPost}}

---