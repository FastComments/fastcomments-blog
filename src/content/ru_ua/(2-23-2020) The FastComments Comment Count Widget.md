---
[category:Features]

###### [postdate]
# [postlink]Виджет количества комментариев FastComments[/postlink]

Хотите показать количество комментариев на странице до того, как пользователь кликнет? Никаких проблем с FastComments.

{{#isPost}}
Первый из многих - FastComments теперь поддерживает виджеты счетчика комментариев.

Например, на этой странице <b><span id="fastcomments-widget-comment-count"></span></b>. Это число вставляется с помощью виджета! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Это живой счетчик, с кешированием на 60 секунд, чтобы помочь быстрее обслуживать очень популярные страницы. Это означает, что вы можете видеть, как живое число отстает от количества
ваших комментариев на минуту, но это необходимо, чтобы убедиться, что FastComments оправдывает свое название.

Лучший пример может быть список блог-постов, например:

### Пост #1
##### 64 комментария


### Пост #2
##### 128 комментариев


### Пост #3
##### 256 комментариев

Вы также можете увидеть живой пример этого на <a href="https://blog.fastcomments.com" target="_blank">главной странице</a> блога.

Виджет количества комментариев не отображается в iframe, поэтому его можно полностью настроить с помощью CSS. Он автоматически унаследует стили вашей страницы - шрифты, цвета, высоты строк и так далее.

Чтобы получить доступ к коду виджета количества комментариев для вашей учетной записи, просто перейдите <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">сюда</a>.

Вы можете найти его через интерфейс на странице учетной записи, затем кликнув Получить код виджета, а затем Другие виджеты.

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