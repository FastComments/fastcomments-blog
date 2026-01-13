---

[category:Features]
###### [postdate]
# [postlink]Seitenreaktionen gestartet[/postlink]

{{#unless isPost}}
FastComments unterstützt jetzt die Anzeige von Seitenreaktionen mit Zählungen über dem Kommentarfeld.
{{/unless}}

{{#isPost}}

### Was gibt's Neues

FastComments hat bereits unser Feedback-Modul unterstützt, in dem Sie eine Sternebewertung, NPS oder andere Fragen über dem Kommentarfeld anzeigen konnten.

Viele Benutzer wünschen sich jedoch etwas Einfacheres - einige Icons mit Reaktionen über dem Kommentarfeld anzuzeigen, diese Icons anzupassen, vielleicht die Optionen pro Benutzer anzupassen und so weiter.

Seit heute haben wir dieses Feature eingeführt.

Alle FastComments-Pläne haben jetzt Zugriff auf Seitenreaktionen.

### Live-Demo

Wir haben eine Demokonfiguration für Seitenreaktionen speziell für diesen Blogbeitrag aktiviert, die Sie unten finden können!

### Dokumentation

[Hier finden Sie die Entwicklervokumentation zur Einrichtung von Seitenreaktionen.](https://docs.fastcomments.com/guide-page-reacts.html)

### Liste der Reaktionsbenutzer

Seitenreaktionen können auch so konfiguriert werden, dass ein Tooltip angezeigt wird, der die Liste der Benutzer offenbart, die eine bestimmte Reaktion hinterlassen haben.

### Abschließend

Wir danken unseren Kunden, die uns kontinuierlich Feedback geben, damit wir an Ideen wie dieser denken können und uns auch die Zeit geben, gut optimierte Features zu starten. Wir hoffen, dass Sie FastComments weiterhin lieben.

Prost!

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