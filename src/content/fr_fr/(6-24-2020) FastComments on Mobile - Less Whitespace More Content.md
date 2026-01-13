---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments sur Mobile - Moins d'Espace Blanc Plus de Contenu[/postlink]

{{#unless isPost}}
Nous avons amélioré la lisibilité et l'apparence de FastComments sur mobile.
{{/unless}}

{{#isPost}}
#### Le Problème

Lorsque nous avons d'abord publié FastComments, nous voulions un design élégant qui fonctionne bien sur mobile et sur les navigateurs de bureau. Cependant, alors que nous ajoutions plus de fonctionnalités et voyions les utilisateurs interagir avec FastComments, nous avons réalisé que nous gaspillions de l'espace à l'écran dans notre interface utilisateur mobile en essayant de la rendre "jolie".

Nous avons donc trouvé un compromis.

#### La Solution

Ici, vous pouvez voir avant, nous n'utilisions pas l'espace de manière très efficace.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Version Mobile Avant"
        title="Version Mobile Avant"
        class='lozad' />
</div>

Maintenant, nous avons échangé de l'espace d'écran vertical contre de l'espace d'écran horizontal.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Version Mobile Après"
        title="Version Mobile Après"
        class='lozad' />
</div>

    
#### Implications des Règles de Personnalisation

Nous sommes conscients que lorsque nous apportons des modifications de style au widget de commentaires visible par le public, nous pouvons casser les personnalisations de nos clients. Ne vous inquiétez pas, nous avons tout prévu et avons examiné le style personnalisé de chaque widget pour nous assurer qu'il n'est pas cassé. Cependant, si vous rencontrez des problèmes, faites-le nous savoir.

#### Implications sur la Performance

Ce changement a augmenté la taille du widget d'environ 300 octets, la portant à un total de 10.1kb. Comme avec toutes les versions qui augmentent la taille du widget, nous chercherons des moyens de la ramener à la baisse.

Bonnes commentaires !

{{/isPost}}

---