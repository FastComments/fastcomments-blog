---

[category:Features]
###### [postdate]
# [postlink]Запущено Page Reacts[/postlink]

{{#unless isPost}}
FastComments тепер підтримує відображення реакцій на сторінки разом з підрахунками над віджетом коментарів.
{{/unless}}

{{#isPost}}

### Що нового

FastComments вже підтримував те, що ми називаємо нашим модулем зворотного зв'язку, де ви могли відображати рейтинг, NPS або інше питання над коментарями.

Однак багато користувачів хочуть чогось простішого - показувати кілька іконок з реакціями над віджетом коментарів, мати можливість налаштовувати ці іконки, можливо налаштовувати
опції для кожного користувача і так далі.

Станом на сьогодні ми запустили цю функцію.

Усі плани FastComments тепер мають доступ до Page Reacts.

### Живий демонстраційний показ

Ми ввімкнули демонстраційну конфігурацію Page Reacts конкретно для цього блогу, ви можете знайти її нижче!

### Документація

[Ви можете знайти документацію для розробників щодо налаштування Page Reacts тут.](https://docs.fastcomments.com/guide-page-reacts.html)

### Список користувачів реакцій

Page Reacts також можна налаштувати для відображення підказки, яка показує список користувачів, які залишили конкретну реакцію.

### На завершення

Ми дякуємо нашим клієнтам, які постійно надають нам зворотний зв'язок, щоб ми могли думати над такими ідеями, а також дають нам час для запуску добре оптимізованих функцій. Сподіваємось, ви 
продовжите любити FastComments.

На здоров'я!

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