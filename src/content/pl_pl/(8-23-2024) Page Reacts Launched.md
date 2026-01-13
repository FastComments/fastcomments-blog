---

[category:Features]
###### [postdate]
# [postlink]Wprowadzenie Reakcji na Stronie[/postlink]

{{#unless isPost}}
FastComments teraz obsługuje wyświetlanie reakcji na stronie wraz z liczbą nad widgetem komentarzy.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments już wcześniej wspierał to, co nazywamy modułem opinii, w którym można było wyświetlić ocenę w skali gwiazdkowej, NPS lub inne pytanie nad obszarem komentarzy.

Jednak wielu użytkowników chce czegoś prostszego - aby pokazać kilka ikon z reakcjami nad widgetem komentarzy, z możliwością dostosowania tych ikon, może z możliwością dostosowania opcji per użytkownik, i tak dalej.

Od dzisiaj uruchomiliśmy tę funkcję.

Wszystkie plany FastComments mają teraz dostęp do Reakcji na Stronie.

### Demo na żywo

Włączyliśmy konfigurację demo Reakcji na Stronie specjalnie dla tego wpisu na blogu, możesz ją znaleźć poniżej!

### Dokumentacja

[Możesz znaleźć dokumentację dla programistów dotyczącą konfiguracji Reakcji na Stronie tutaj.](https://docs.fastcomments.com/guide-page-reacts.html)

### Lista Użytkowników Reagujących

Reakcje na Stronie mogą być również skonfigurowane, aby pokazywać dymek, który ujawnia listę użytkowników, którzy pozostawili konkretną reakcję.

### Podsumowując

Dziękujemy naszym klientom za nieustanne opinie, dzięki którym możemy myśleć o takich pomysłach jak ten oraz dać nam czas na wprowadzenie dobrze zoptymalizowanych funkcji. Mamy nadzieję, że nadal będziecie kochać FastComments.

Na zdrowie!

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