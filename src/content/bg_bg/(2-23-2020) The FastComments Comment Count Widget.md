---
[category:Features]

###### [postdate]
# [postlink]Уиджет за брой коментари на FastComments[/postlink]

Искате да покажете броя на коментарите на страница преди потребителят да кликне? Няма проблем с FastComments.

{{#isPost}}
Първият от множеството, които ще последват - FastComments вече поддържа уиджети за брой коментари.

Например, тази страница има <b><span id="fastcomments-widget-comment-count"></span></b>. Този номер се вмъква чрез уиджета! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Това е жив брой, с 60 секундна кеш памет, за да помогне при обслужването на много популярни страници по-бързо. Това означава, че можете да видите, че живият брой изостава от броя на вашите коментари с минута, но това е, за да осигури, че FastComments оправдава името си.

По-добър пример може да бъде списък с блог постове, например:

### Пост #1
##### 64 коментара


### Пост #2
##### 128 коментара


### Пост #3
##### 256 коментара

Можете също така да видите жив пример за това на блога <a href="https://blog.fastcomments.com" target="_blank">началната страница</a>.

Уиджетът за брой коментари не се рендерира в iframe, така че е напълно персонализируем чрез CSS. Той автоматично ще наследи стила на вашата страница – шрифтове, цветове, височини на редовете и т.н.

За да получите достъп до кода на уиджета за брой коментари за вашия акаунт, просто отидете <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">тук</a>.

Можете да го намерите чрез интерфейса на страницата на акаунта, след което да кликнете на Получаване на код за уиджет и след това на Други уиджети.

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