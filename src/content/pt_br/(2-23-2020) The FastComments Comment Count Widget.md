---
[category:Features]

###### [postdate]
# [postlink]O Widget de Contagem de Comentários do FastComments[/postlink]

Quer mostrar o número de comentários em uma página antes que um usuário clique? Sem problemas com o FastComments.

{{#isPost}}
O primeiro de muitos que virão - o FastComments agora suporta widgets de contagem de comentários.

Por exemplo, esta página tem <b><span id="fastcomments-widget-comment-count"></span></b>. Esse número é inserido via o widget! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

É uma contagem ao vivo, com um cache de 60 segundos para ajudar a servir páginas muito populares mais rapidamente. Isso significa que você pode ver a contagem ao vivo atrasar em relação ao número de seus comentários por um minuto, mas isso é para garantir que o FastComments cumpra seu nome.

Um exemplo melhor pode ser uma lista de postagens de blog, por exemplo:

### Postagem #1
##### 64 Comentários


### Postagem #2
##### 128 Comentários


### Postagem #3
##### 256 Comentários

Você também pode ver um exemplo ao vivo disso na <a href="https://blog.fastcomments.com" target="_blank">página inicial</a> do blog.

O widget de Contagem de Comentários não é renderizado em um iframe, portanto, é totalmente personalizável via CSS. Ele herdará automaticamente o estilo da sua página - fontes, cores, alturas de linha e assim por diante.

Para acessar o código do widget de Contagem de Comentários para sua conta, basta ir <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">aqui</a>.

Você pode encontrá-lo na interface do usuário na página da conta, clicando em Obter Código do Widget e em Outros Widgets.

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