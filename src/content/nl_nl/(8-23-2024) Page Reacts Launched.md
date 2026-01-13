---

[category:Features]
###### [postdate]
# [postlink]Pagina Reacties Gelanceerd[/postlink]

{{#unless isPost}}
FastComments ondersteunt nu het weergeven van paginareacties samen met tellers boven de opmerkingwidget.
{{/unless}}

{{#isPost}}

### Wat is er Nieuw

FastComments ondersteunde al wat we onze Feedback-module noemen, waar je een sterbeoordeling, NPS of andere vraag boven het opmerkingengebied kunt weergeven.

Echter, veel gebruikers willen iets eenvoudigers - enkele iconen weergeven met reacties boven de opmerkingwidget, de mogelijkheid hebben om die iconen aan te passen, misschien de opties per gebruiker aan te passen, enzovoort.

Vanaf vandaag hebben we deze functie gelanceerd.

Alle FastComments-plannen hebben nu toegang tot Pagina Reacties.

### Live Demo

We hebben een demo-configuratie voor Pagina Reacties specifiek voor deze blogpost ingeschakeld, je kunt het hieronder vinden!

### Documentatie

[Je kunt de ontwikkelaarsdocumentatie voor het instellen van Pagina Reacties hier vinden.](https://docs.fastcomments.com/guide-page-reacts.html)

### Lijst van React-gebruikers

Pagina Reacties kunnen ook zo worden geconfigureerd dat er een tooltip wordt weergegeven die de lijst van gebruikers onthult die een specifieke reactie hebben achtergelaten.

### Conclusie

We danken onze klanten die ons continue feedback geven, zodat we kunnen nadenken over ideeën zoals deze en ons ook de tijd geven om goed geoptimaliseerde functies te lanceren. We hopen dat je 
blijft houden van FastComments.

Proost!

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