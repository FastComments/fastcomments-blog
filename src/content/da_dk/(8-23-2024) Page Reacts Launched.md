---

[category:Features]
###### [postdate]
# [postlink]Page Reacts Lancering[/postlink]

{{#unless isPost}}
FastComments understøtter nu visning af side-reaktioner sammen med tællinger over kommentarvinduet.
{{/unless}}

{{#isPost}}

### Hvad er nyt

FastComments har allerede understøttet det, vi kalder vores Feedback-modul, hvor du kunne vise en stjernemåde, NPS eller et andet spørgsmål over kommentarområdet.

Men mange brugere ønsker noget simplere - at vise nogle ikoner med nogle reaktioner over kommentarvinduet, at kunne tilpasse disse ikoner, måske tilpasse
mulighederne per bruger, og så videre.

Fra i dag har vi lanceret denne funktion.

Alle FastComments planer har nu adgang til Page Reacts.

### Live Demo

Vi har aktiveret en demo Page Reacts konfiguration for dette blogindlæg specifikt, du kan finde den nedenfor!

### Dokumentation

[Du kan finde udviklerdokumentationen til opsætning af Page Reacts her.](https://docs.fastcomments.com/guide-page-reacts.html)

### Reaktionsbrugerliste

Page Reacts kan også konfigureres til at vise et tooltip, der afslører listen over brugere, der har efterladt en specifik reaktion.

### Afslutningsvis

Vi takker vores kunder, der giver os løbende feedback, så vi kan tænke på idéer som denne og også giver os tid til at lancere veloptimerede funktioner. Vi håber, du
fortsætter med at elske FastComments.

Skål!

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