---

[category:Features]
###### [postdate]
# [postlink]Запуск Page Reacts[/postlink]

{{#unless isPost}}
FastComments теперь поддерживает отображение реакций страницы вместе с количеством выше виджета комментариев.
{{/unless}}

{{#isPost}}

### Что нового

FastComments уже поддерживал то, что мы называем нашим модулем обратной связи, где вы могли отображать рейтинг, NPS или другой вопрос над областью комментариев.

Тем не менее, многим пользователям нужно что-то более простое - показать несколько иконок с реакциями над виджетом комментариев, иметь возможность настраивать эти иконки, возможно настраивать
опции для каждого пользователя и так далее.

С сегодняшнего дня мы запустили эту функцию.

Все тарифные планы FastComments теперь имеют доступ к Page Reacts.

### Живая демонстрация

Мы включили конфигурацию демонстрации Page Reacts специально для этого блога, вы можете найти её ниже!

### Документация

[Вы можете найти документацию для разработчиков по настройке Page Reacts здесь.](https://docs.fastcomments.com/guide-page-reacts.html)

### Список реакций пользователей

Page Reacts также можно настроить на отображение всплывающей подсказки, которая показывает список пользователей, оставивших конкретную реакцию.

### В заключение

Мы благодарим наших клиентов, которые дают нам постоянную обратную связь, чтобы мы могли придумывать такие идеи, а также предоставляют нам время для запуска хорошо оптимизированных функций. Мы надеемся, что вы по-прежнему будете любить FastComments.

Ура!

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