---
[category:UI & Customization]

###### [postdate]
# [postlink]Nahtloses Umschalten des Dunkelmodus hinzugefügt[/postlink]

{{#unless isPost}}
FastComments hat immer den Dunkelmodus unterstützt. Früher war es jedoch erforderlich, das Kommentar-Widget neu zu laden, um zum Dunkelmodus zu wechseln. Dies wurde behoben.
{{/unless}}

{{#isPost}}

### Was ist neu

FastComments hat immer den Dunkelmodus unterstützt. Früher war es jedoch erforderlich, das Kommentar-Widget neu zu laden, um zum Dunkelmodus zu wechseln.

Das bedeutet, dass wenn eine Website den Dunkelmodus verwendet oder es den Benutzern erlaubt, zwischen Licht- und Dunkelmodus hin und her zu wechseln, wir das Kommentar-Widget vollständig aus dem Browser entfernen und neu laden würden. Dies wurde aus technischen Gründen gemacht, um das Produkt beim ursprünglichen Start zu vereinfachen, da der Status zwischen der übergeordneten Seite und dem iframe des Widgets hin und her kommuniziert werden muss.

In Anbetracht dessen, dass die gruselige Saison vorbei ist - wurde der Wechsel zum Dunkelmodus verbessert. Das Kommentar-Widget unterstützt jetzt nahtlose Übergänge zwischen Licht- und Dunkelmodus. Es erfordert jedoch weiterhin, dass das `hasDarkBackground`-Flag übergeben wird, wenn zutreffend.

### Für Entwickler & Stolpersteine

Um dem Kommentar-Widget mitzuteilen, dass Ihre Website im Dunkelmodus ist - oder einen dunklen Hintergrund angewendet hat - würden Sie das `hasDarkBackground`-Flag übergeben. Das ändert sich nicht. Wenn Sie jedoch `instance.update(newConfig)` aufrufen (oder den Status in einer unserer Bibliotheken wie React, Svelte usw. ändern), werden wir erkennen, ob das einzige geänderte Parameter `hasDarkBackground` ist, und falls ja, das Kommentar-Widget elegant aktualisieren. Das Widget wird die Dunkelmodus-Erweiterung asynchron im Hintergrund laden und seine Styling bei Bedarf aktualisieren.

Ein wesentlicher Stolperstein ist, dass wenn Sie `newConfig` übergeben - dies ein völlig neues Objekt sein muss, damit diese Funktion funktioniert.

### Fazit

Wie bei allen größeren Versionen freuen wir uns, dass wir die Zeit nutzen konnten, um dieses Feature zu optimieren, zu testen und angemessen freizugeben. Lassen Sie uns unten wissen, wenn Sie irgendwelche Probleme entdecken.

Prost!

{{/isPost}}

---