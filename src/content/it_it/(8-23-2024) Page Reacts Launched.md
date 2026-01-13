---

[category:Features]
###### [postdate]
# [postlink]Page Reacts Launched[/postlink]

{{#unless isPost}}
FastComments ora supporta la visualizzazione delle reazioni alla pagina insieme ai conteggi sopra il widget dei commenti.
{{/unless}}

{{#isPost}}

### Novità

FastComments aveva già supportato quello che chiamiamo il nostro modulo Feedback, dove puoi visualizzare una valutazione a stelle, NPS o un'altra domanda sopra l'area commenti.

Tuttavia, molti utenti desiderano qualcosa di più semplice: mostrare alcune icone con delle reazioni sopra il widget dei commenti, poter personalizzare quelle icone, magari personalizzare
le opzioni per utente, e così via.

A partire da oggi abbiamo lanciato questa funzionalità.

Tutti i piani FastComments ora hanno accesso a Page Reacts.

### Demo dal Vivo

Abbiamo abilitato una configurazione demo di Page Reacts per questo post del blog specificamente, puoi trovarla qui sotto!

### Documentazione

[Puoi trovare la documentazione per sviluppatori su come configurare Page Reacts qui.](https://docs.fastcomments.com/guide-page-reacts.html)

### Elenco Utenti che Reagiscono

Page Reacts può essere configurato anche per mostrare un tooltip che rivela l'elenco degli utenti che hanno lasciato una reazione specifica.

### In Conclusione

Ringraziamo i nostri clienti che ci offrono feedback continui in modo che possiamo pensare a idee come questa e che ci diano anche il tempo per lanciare funzionalità ben ottimizzate. Speriamo che
continuiate ad amare FastComments.

Saluti!

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