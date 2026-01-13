---

[category:Features]
###### [postdate]
# [postlink]Pokrenute Page Reacts[/postlink]

{{#unless isPost}}
FastComments sada podržava prikaz reakcija stranica zajedno sa brojevima iznad komentarskog vidžeta.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je već podržavao ono što nazivamo našim Feedback modulom, gde možete prikazati ocenu, NPS ili drugo pitanje iznad komentarskog područja.

Međutim, mnogim korisnicima je potrebno nešto jednostavnije - da prikažu ikone sa reakcijama iznad komentarskog vidžeta, da budu u mogućnosti prilagoditi te ikone, možda prilagoditi
opcijama po korisniku, i tako dalje.

Od danas smo pokrenuli ovu funkciju.

Svi FastComments planovi sada imaju pristup Page Reacts.

### Uživo demo

Omogućili smo demo konfiguraciju Page Reacts posebno za ovaj blog post, možete je pronaći ispod!

### Dokumentacija

[Možete pronaći dokumentaciju za programere za postavljanje Page Reacts ovde.](https://docs.fastcomments.com/guide-page-reacts.html)

### Lista korisnika koji reaguju

Page Reacts se takođe može konfigurirati da prikaže alatku koja otkriva listu korisnika koji su ostavili određenu reakciju.

### Zaključak

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije tako da možemo razmišljati o idejama poput ove i takođe nam daju vremena da lansiramo dobro optimizovane funkcije. Nadamo se da ćete
nastaviti voleti FastComments.

Živeli!

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