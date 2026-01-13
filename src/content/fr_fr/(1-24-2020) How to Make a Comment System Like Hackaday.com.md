---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Comment créer un système de commentaires comme Hackaday.com[/postlink]

{{#unless isPost}}
Ici, nous allons explorer la création d'un fil de commentaires qui ressemble à celui de Hackaday.

Si vous cliquez sur le lien de cet article, le style général de la page ainsi que le blog FastComments changeront.

{{/unless}}

{{#isPost}}
###### 24 janvier 2020
<div class="post-header">
    <div class="by left">par : <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## OUAIS, QU'EST-CE QUI S'EST PASSÉ ?

Cet article est une démonstration de l'utilisation de FastComments pour créer un système de commentaires qui ressemble à https://hackaday.com.

Nous ne vous suggérons pas de les copier. Mais cela démontre la flexibilité de FastComments.

Faire en sorte que FastComments ait cet aspect est simple !
Nous avons créé une interface utilisateur pour cela ! Par exemple, voici la configuration que nous avons utilisée pour faire correspondre FastComments avec cette page :

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="Paramètres FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

Si vous voulez le faire en code, c'est tout aussi facile.

Nous devons juste définir quelques options. Eh bien, sept. Voici le extrait de code (CSS personnalisé omis). Seule une certaine quantité de CSS peut être insérée de cette manière. Nous vous recommandons d'utiliser
l'interface utilisateur ci-dessus pour définir le CSS. Elle le minimisera également pour vous, alors que définir la propriété customCSS n'appliquera aucune optimisation de minification.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] PENSÉES SUR "COMMENT CRÉER UN SYSTÈME DE COMMENTAIRES COMME HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Commentaires';
        },
        headerHTML: '<h1>Laissez une réponse</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Alors, que signifie chacune de ces options ?
- commentCountFormat = Le format du titre au-dessus du fil de commentaires. "[count]" est remplacé par le compte localisé réel.
- commentCountUpdated = Une fonction qui est appelée lorsque le nombre de commentaires change. Nous l'utilisons pour définir le nombre de commentaires en haut de la page.
- headerHTML = HTML qui est affiché au-dessus de la boîte "laisser une réponse". Dans ce cas, nous l'utilisons pour insérer un élément d'en-tête.
- hideAvatars = Hackaday n’a pas d’avatars. Donc, nous avons défini cela sur vrai pour les cacher.
- inputAfterComments = Repositionne la boîte de réponse en bas du flux de commentaires.
- absoluteDates = Change le format de date par défaut (c'est-à-dire "Il y a 11 minutes") en une date absolue.
- customCSS = Style personnalisé

Toutes les options de configuration sont documentées <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">ici</a>.

<style>
    body, .content {
        background: #1a1a1a;
        font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova",sans-serif;
        color: #fff;
    }
    
    .header {
        color: #fff;
        border: none;
    }
    
    .header .header-inner a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .header-inner .buttons {
        display: none;
    }
    
    .header .header-inner #watchly-target {
        display: none;
    }
    
    .left-right-art {
        display: none;
    }
    
    .content {
        position: relative;
        max-width: 1128px;
        margin: 57px auto;
        padding: 20px 0 20px 0;
        box-shadow: none;
        border-top: 5px solid #fff;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .content a {
        color: #f3bf10;
        text-decoration: none;
    }
    
    .content a:hover {
        color: #fddb2f;
    }
    
    .content .posts .post .post-description h1, .content .posts .post .post-description h1 a {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px !important;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
    }
    
    .content h6#jan-24nd-2020-1 {
        position: absolute;
        top: -80px;
        right: 0px;
        font-size: 17px;
        font-weight: 700;
    }
    
    .content .by {
        font-size: 20.4px;
    }
    
    .post-header {
        height: 20px;
    }
    
    .post-header a {
        cursor: pointer;
        font-weight: 600;
    }
    
    .post-header .left {
        float: left;
    }
    
    .post-header .right {
        float: right;
    }
    
    @media(max-width: 1024px) {
        .header {
            padding-top: 0;
        }
        
        .header .header-inner a {
            padding: 0;
            font-size: 40px;
        }
        
        .content {
            margin: 7px auto;
            padding: 8px;
        }
        
        .content h6#jan-24nd-2020-1 {
            top: -38px;
            right: 5px;
        }
        
        .content h1 {
            padding: 0 0 10px;
            font-size: 32px;
        }
    }
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Commentaires';
    };
</script>

{{/isPost}}

---