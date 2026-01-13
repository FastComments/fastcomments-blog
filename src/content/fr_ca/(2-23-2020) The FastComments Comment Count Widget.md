---
[category:Features]

###### [postdate]
# [postlink]Le widget de compteur de commentaires FastComments[/postlink]

Vous voulez afficher le nombre de commentaires sur une page avant qu'un utilisateur ne clique ? Pas de problème avec FastComments.

{{#isPost}}
Le premier d'une longue série - FastComments prend désormais en charge les widgets de compteur de commentaires.

Par exemple, cette page a <b><span id="fastcomments-widget-comment-count"></span></b>. Ce nombre est inséré via le widget ! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

C'est un compteur en direct, avec un cache de 60 secondes pour aider à servir des pages très populaires plus rapidement. Cela signifie que vous pourriez voir le compteur en direct en retard par rapport au nombre de
vos commentaires d'une minute, mais c'est pour s'assurer que FastComments répond à son nom.

Un meilleur exemple pourrait être une liste de billets de blog, par exemple :

### Post #1
##### 64 Commentaires


### Post #2
##### 128 Commentaires


### Post #3
##### 256 Commentaires

Vous pouvez également voir un exemple en direct de cela sur le <a href="https://blog.fastcomments.com" target="_blank">site</a>.

Le widget de compteur de commentaires ne s'affiche pas dans un iframe, donc il est entièrement personnalisable via CSS. Il héritera automatiquement du style de votre page - polices, couleurs, hauteurs de ligne, et ainsi de suite.

Pour accéder au code du widget de compteur de commentaires pour votre compte, il vous suffit d'aller <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">ici</a>.

Vous pouvez le trouver via l'interface utilisateur via la page de compte, puis en cliquant sur Obtenir le code du widget puis Autres widgets.

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