---

[category:Features]
###### [postdate]
# [postlink]Страницата Реакции Пуснати[/postlink]

{{#unless isPost}}
FastComments вече поддържа показването на реакции към страницата заедно с броя над коментаторския модул.
{{/unless}}

{{#isPost}}

### Какво ново

FastComments вече поддържаше това, което наричаме модул за Обратна връзка, където можете да показвате рейтинг, NPS или друг въпрос над областта за коментари.

Въпреки това, много потребители искат нещо по-просто - да покажат някои икони с реакции над коментаторския модул, да могат да персонализират тези икони, да персонализират
възможностите за потребителя и така нататък.

От днес пуснахме тази функция.

Всички планове на FastComments вече имат достъп до Страницата Реакции.

### Жива демострация

Активирахме конфигурация за демо Страница Реакции специално за този блог пост, можете да я намерите по-долу!

### Документация

[Можете да намерите документацията за разработчици за настройване на Страницата Реакции тук.](https://docs.fastcomments.com/guide-page-reacts.html)

### Списък на реагиращите потребители

Страницата Реакции може да бъде конфигурирана да показва подсказка, която разкрива списъка на потребителите, оставили специфична реакция.

### В заключение

Благодарим на нашите клиенти, които ни дават постоянна обратна връзка, за да можем да мислим за идеи като тази и също да ни дадат времето да пуснем добре оптимизирани функции. Надяваме се, че
продължавате да обичате FastComments.

Наздраве!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---