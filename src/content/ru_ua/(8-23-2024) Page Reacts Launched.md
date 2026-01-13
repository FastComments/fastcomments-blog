---

[category:Features]
###### [postdate]
# [postlink]Запуск Page Reacts[/postlink]

{{#unless isPost}}
FastComments теперь поддерживает отображение реакций на страницу вместе с количеством над виджетом комментариев.
{{/unless}}

{{#isPost}}

### Что нового

FastComments уже поддерживал то, что мы называем нашим модулем обратной связи, где вы могли отображать звездный рейтинг, NPS или другой вопрос над областью комментариев.

Тем не менее, многие пользователи хотят чего-то более простого - показывать некоторые иконки с реакциями над виджетом комментариев, иметь возможность настраивать эти иконки, возможно, настраивать 
опции для каждого пользователя и так далее.

На сегодняшний день мы запустили эту функцию.

Все тарифные планы FastComments теперь имеют доступ к Page Reacts.

### Живая демонстрация

Мы включили конфигурацию демонстрации Page Reacts для этого блога, вы можете найти её ниже!

### Документация

[Вы можете найти документацию для разработчиков по настройке Page Reacts здесь.](https://docs.fastcomments.com/guide-page-reacts.html)

### Список пользователей с реакциями

Page Reacts также можно настроить, чтобы показывать подсказку, которая раскрывает список пользователей, оставивших конкретную реакцию.

### В заключение

Мы благодарим наших клиентов, которые дают нам постоянную обратную связь, чтобы мы могли придумывать подобные идеи, а также дают нам время для запуска хорошо оптимизированных функций. Мы надеемся, что вам по-прежнему нравится FastComments.

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