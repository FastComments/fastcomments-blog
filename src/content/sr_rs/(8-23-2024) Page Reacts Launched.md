---

[category:Features]
###### [postdate]
# [postlink]Page Reacts Launched[/postlink]

{{#unless isPost}}
FastComments sada podržava prikazivanje reakcija na stranicu zajedno sa brojem iznad komentatorskog widget-a.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je već podržavao ono što nazivamo našim modulom za povratne informacije, gde ste mogli prikazati ocenu, NPS ili drugo pitanje iznad područja komentara.

Međutim, mnogim korisnicima je potrebna jednostavnija opcija - da pokažu neke ikone sa reakcijama iznad komentatorskog widget-a, da mogu prilikom toga prilagoditi te ikone, možda prilagoditi
opciju po korisniku, i tako dalje.

Od danas smo pokrenuli ovu funkcionalnost.

Svi FastComments planovi sada imaju pristup Page Reacts.

### Live Demo

Omogućili smo demo konfiguraciju Page Reacts za ovaj blog post posebno, možete je pronaći ispod!

### Dokumentacija

[Možete pronaći developersku dokumentaciju za podešavanje Page Reacts ovde.](https://docs.fastcomments.com/guide-page-reacts.html)

### Lista korisnika sa reakcijama

Page Reacts se takođe može konfigurisati da prikaže tooltip koji otkriva listu korisnika koji su ostavili određenu reakciju.

### Na kraju

Zahvaljujemo našim korisnicima koji nam daju kontinuirane povratne informacije kako bismo mogli smisliti ideje poput ove i takođe daju nam vreme da pokrenemo dobro optimizovane funkcionalnosti. Nadamo se da ćete
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