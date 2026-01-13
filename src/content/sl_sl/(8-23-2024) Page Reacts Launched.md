---

[category:Features]
###### [postdate]
# [postlink]Zagnane reakcije na stranici[/postlink]

{{#unless isPost}}
FastComments zdaj podpira prikazovanje reakcij na strani skupaj s številkami nad komentarjem.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments je že podpiral tisto, kar imenujemo naš modul povratnih informacij, kjer ste lahko prikazali oceno z zvezdicami, NPS ali drugo vprašanje nad območjem komentarjev.

Vendar pa mnogi uporabniki želijo nekaj enostavnejšega - prikazati ikone z reakcijami nad komentarjem, omogočiti prilagajanje teh ikon, morda prilagoditi možnosti po uporabniku itd.

Od danes smo zagnali to funkcijo.

Vsi FastComments načrti zdaj omogočajo dostop do reakcij na strani.

### Živa predstavitev

Za to objavo bloga smo omogočili konfiguracijo za prikaz reakcij na strani, ki jo lahko najdete spodaj!

### Dokumentacija

[Dokumentacijo za razvijalce za nastavitev reakcij na strani lahko najdete tukaj.](https://docs.fastcomments.com/guide-page-reacts.html)

### Seznam uporabnikov reakcij

Reakcije na strani lahko konfigurirate tudi za prikaz orodne vrstice, ki razkrije seznam uporabnikov, ki so pustili določeno reakcijo.

### Na koncu

Zahvaljujemo se našim strankam, ki nam nenehno dajejo povratne informacije, da lahko razmišljamo o idejah, kot je ta, ter nam dajo čas za zagon dobro optimiziranih funkcij. Upamo, da boste še naprej ljubili FastComments.

Na zdravje!

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