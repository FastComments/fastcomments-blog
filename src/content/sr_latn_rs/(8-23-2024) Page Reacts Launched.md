---

[category:Features]
###### [postdate]
# [postlink]Pokrenuta opcija Page Reacts[/postlink]

{{#unless isPost}}
FastComments sada podržava prikazivanje reakcija na stranicu uz brojače iznad komentatorskog vidžeta.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je već podržavao ono što nazivamo modulom za povratne informacije, gde ste mogli prikazati ocenu, NPS ili drugo pitanje iznad dela za komentare.

Međutim, mnogi korisnici žele nešto jednostavnije - da prikazuju neke ikone sa reakcijama iznad vidžeta za komentare, da mogu prilagoditi te ikone, možda da prilagođavaju
opcije po korisniku, i tako dalje.

Od danas smo pokrenuli ovu opciju.

Svi FastComments planovi sada imaju pristup Page Reacts.

### Uživite u Demos

Omogućili smo demo konfiguraciju Page Reacts za ovaj blog post posebno, možete je pronaći ispod!

### Dokumentacija

[Možete pronaći dokumentaciju za developere za postavljanje Page Reacts ovde.](https://docs.fastcomments.com/guide-page-reacts.html)

### Lista korisnika reakcija

Page Reacts se takođe može konfigurirati da prikaže tooltip koji otkriva listu korisnika koji su ostavili određenu reakciju.

### Na kraju

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli smisliti ovakve ideje i takođe nam daju vreme da lansiramo dobro optimizovane funkcije. Nadamo se da ćete
nastaviti da volite FastComments.

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