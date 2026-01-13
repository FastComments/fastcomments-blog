---

[category:Features]
###### [postdate]
# [postlink]Pokrenuto Page Reacts[/postlink]

{{#unless isPost}}
FastComments sada podržava prikaz stranica-reakcija zajedno s brojevima iznad vidžeta za komentare.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je već podržavao ono što nazivamo našim modulom za povratne informacije, gde ste mogli prikazati ocenu zvezdama, NPS, ili neko drugo pitanje iznad prostora za komentare.

Međutim, mnogim korisnicima je potrebno nešto jednostavnije - da pokažu neke ikone s reakcijama iznad vidžeta za komentare, da mogu prilagoditi te ikone, možda prilagoditi
opciju po korisniku, i tako dalje.

Od danas smo pokrenuli ovu funkciju.

Svi FastComments planovi sada imaju pristup Page Reacts.

### Živa Demo

Omogućili smo demo konfiguraciju Page Reacts specifično za ovaj blog post, možete je pronaći ispod!

### Dokumentacija

[Možete pronaći dokumentaciju za developere za postavljanje Page Reacts ovde.](https://docs.fastcomments.com/guide-page-reacts.html)

### Lista korisnika koji reaguju

Page Reacts se takođe mogu konfigurisati da prikazuju saveta koji otkriva listu korisnika koji su ostavili specifičnu reakciju.

### U zaključku

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli razmišljati o idejama poput ove i takođe nam daju vreme da pokrenemo dobro optimizovane funkcije. Nadamo se da ćete
nastaviti da volite FastComments.

Pozdrav!

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