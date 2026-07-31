[category:Features]
###### [postdate]
# [postlink]Лансиране реакције странице[/postlink]

{{#unless isPost}}
FastComments сада подржава приказивање реакција странице заједно са бројевима изнад виџета за коментаре.
{{/unless}}

{{#isPost}}

### Шта је ново

FastComments је већ подржавао оно што називамо нашим модулом за повратне информације, где сте могли да прикажете оцену звездица, NPS или друго питање изнад области за коментаре.

Међутим, многи корисници желе нешто једноставније – да прикажу неке иконе са реакцијама изнад виџета за коментаре, да могу да прилагоде те иконе, можда прилагоде опције по кориснику, и тако даље.

Од данас смо лансирали ову функцију.

Сви FastComments планови сада имају приступ реакцијама странице.

### Живи демо

Омогућили смо демо конфигурацију реакција странице за овај блог пост, можете је пронаћи испод!

### Документација

[Можете пронаћи документацију за програмере за подешавање реакција странице овде.](https://docs.fastcomments.com/guide-page-reacts.html)

### Листа корисника реакција

Реакције странице се такође могу конфигурисати да прикажу алатну напомена која открива листу корисника који су оставили одређену реакцију.

### У закључку

Захваљујемо се нашим купцима који нам пружају континуиране повратне информације како бисмо могли да размишљамо о идејама попут ове и такође нам дају време да лансирамо добро оптимизоване функције. Надамо се да ћете наставити да волите FastComments.

Поздрав!

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