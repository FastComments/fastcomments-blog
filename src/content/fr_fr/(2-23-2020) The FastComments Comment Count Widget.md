---
[category:Features]

###### [postdate]
# [postlink]Le Widget de Compte de Commentaires FastComments[/postlink]

Vous voulez afficher le nombre de commentaires sur une page avant qu'un utilisateur ne clique ? Aucun problème avec FastComments.

{{#isPost}}
Le premier d'une longue série - FastComments prend désormais en charge les widgets de compte de commentaires.

Par exemple, cette page a <b><span id="fastcomments-widget-comment-count"></span></b>. Ce nombre est inséré via le widget ! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

C'est un comptage en direct, avec un cache de 60 secondes pour aider à servir plus rapidement les pages très populaires. Cela signifie que vous pouvez voir le compte en direct être en retard par rapport au nombre de vos commentaires d'une minute, mais c'est pour garantir que FastComments vit à la hauteur de son nom.

Un meilleur exemple pourrait être une liste de billets de blog, par exemple :

### Billet #1
##### 64 Commentaires


### Billet #2
##### 128 Commentaires


### Billet #3
##### 256 Commentaires

Vous pouvez également voir un exemple en direct de cela sur la <a href="https://blog.fastcomments.com" target="_blank">page d'accueil</a> du blog.

Le widget de compte de commentaires ne s'affiche pas dans un iframe, il est donc entièrement personnalisable via CSS. Il héritera automatiquement du style de votre page - polices, couleurs, hauteurs de ligne, etc.

Pour accéder au code du widget de compte de commentaires pour votre compte, il suffit d'aller <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">ici</a>.

Vous pouvez le trouver via l'interface utilisateur sur la page de votre compte, puis en cliquant sur Obtenir le code du widget et ensuite Autres widgets.

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}

---