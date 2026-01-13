---
[category:Features]

###### [postdate]
# [postlink]Віджет кількості коментарів FastComments[/postlink]

Хочете продемонструвати кількість коментарів на сторінці до того, як користувач натисне? Немає проблем з FastComments.

{{#isPost}}
Перше з багатьох, що прийдуть - FastComments тепер підтримує віджети для підрахунку коментарів.

Наприклад, на цій сторінці є <b><span id="fastcomments-widget-comment-count"></span></b>. Це число вставляється через віджет!
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

Це живий підрахунок, з кешем на 60 секунд, щоб допомогти служити дуже популярним сторінкам швидше. Це означає, що ви можете побачити, як живий підрахунок відстає від кількості
ваших коментарів на хвилину, але це потрібно для того, щоб FastComments виправдовував свою назву.

Кращий приклад може бути список блогів, наприклад:

### Пост #1
##### 64 Коментарі


### Пост #2
##### 128 Коментарів


### Пост #3
##### 256 Коментарів

Ви також можете побачити живий приклад цього на блозі <a href="https://blog.fastcomments.com" target="_blank">головній сторінці</a>.

Віджет кількості коментарів не відображається в iframe, тому його можна повністю налаштувати за допомогою CSS. Він автоматично успадковуватиме стилі вашої сторінки - шрифти, кольори, висоти рядків тощо.

Щоб отримати доступ до коду віджету кількості коментарів для вашого облікового запису, просто переходьте <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">тут</a>.

Ви можете знайти його через інтерфейс користувача на сторінці облікового запису, потім натиснувши Отримати код віджету, а потім Інші віджети.

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