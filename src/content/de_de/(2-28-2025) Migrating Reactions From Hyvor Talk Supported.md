---
[category:Migration]

###### [postdate]
# [postlink]Die Migration von Reaktionen von Hyvor Talk wird jetzt unterstützt[/postlink]

{{#unless isPost}}
Wenn Sie Ihren Datenexport von Hyvor Talk importieren, können wir jetzt Ihre Seitenreaktionen migrieren.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Wenn Sie Kommentare importieren, um sie von Hyvor Talk zu migrieren, kann FastComments jetzt Ihre Seitenreaktionen importieren. Außerdem erkennen wir, ob
Kommentarstränge auf Seiten geschlossen sind oder nicht, und migrieren diesen Status ebenfalls.

Ein erneutes Ausführen des Imports führt nicht zu doppelten Zählungen oder dem Verlust von Reaktionswerten vor dem Import.

### So richten Sie Reaktionen ein

Das Anzeigen von Seitenreaktionen erfolgt nicht automatisch. Um zu beginnen, müssen Sie Ihre Widget-Konfiguration aktualisieren:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Star-Struck
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Rotes Herz
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Gesicht mit offenem Mund
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Weinendes Gesicht
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Gesicht mit Freudentränen
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Wütendes Gesicht
            ]
        }
    });
</script>
```

Die IDs müssen mit denjenigen aus dem Hyvor Talk-Export übereinstimmen. Dieses Beispiel verwendet die korrekten Werte.

Sie müssen Ihre eigenen Reaktionsbilder bereitstellen. Sie können jedes Format haben, einschließlich GIFs. Das obige Beispiel verwendet einige aus dem OpenMoji-Projekt.

### Fazit

Wie bei allen großen Versionen freuen wir uns, dass wir uns die Zeit nehmen konnten, dieses Feature zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie es uns
unten wissen, wenn Sie auf Probleme stoßen.

Prost!

{{/isPost}}

---