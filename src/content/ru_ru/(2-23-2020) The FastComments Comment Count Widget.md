---
[category:Features]

###### [postdate]
# [postlink]Виджет счетчика комментариев FastComments[/postlink]

Хотите показать количество комментариев на странице до того, как пользователь нажмет? Нет проблем с FastComments.

{{#isPost}}
Первый из многих - теперь FastComments поддерживает виджеты счетчика комментариев.

Например, на этой странице <b><span id="fastcomments-widget-comment-count"></span></b>. Это число вставляется через виджет! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Это живой счетчик с кэшем на 60 секунд, чтобы ускорить загрузку очень популярных страниц. Это означает, что вы можете увидеть, как живой счетчик отстает от количества ваших комментариев на минуту, но это сделано для того, чтобы FastComments оправдал свое название.

Лучший пример может быть в виде списка блог-постов, например:

### Пост #1
##### 64 комментария


### Пост #2
##### 128 комментариев


### Пост #3
##### 256 комментариев

Вы также можете увидеть живой пример этого на блоге <a href="https://blog.fastcomments.com" target="_blank">главной странице</a>.

Виджет счетчика комментариев не отображается в iframe, поэтому он полностью настраиваемый с помощью CSS. Он автоматически унаследует стили вашей страницы - шрифты, цвета, высоты строк и так далее.

Чтобы получить код виджета счетчика комментариев для вашего аккаунта, просто перейдите <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">сюда</a>.

Вы можете найти его через интерфейс, перейдя на страницу аккаунта, затем нажав на Получить код виджета и затем Другие виджеты.

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