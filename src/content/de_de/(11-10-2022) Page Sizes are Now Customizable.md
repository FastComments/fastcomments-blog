---
[category:UI & Customization]

###### [postdate]
# [postlink]Seitengrößen sind jetzt anpassbar[/postlink]

{{#unless isPost}}
FastComments hatte seit der Einführung eine feste Seitengröße von 30 Kommentaren. Dies ist jetzt anpassbar!
{{/unless}}

{{#isPost}}

### Neuigkeiten

Ihre Kommentar-Threads können jetzt unterschiedliche Seitenzahlen haben, und dies kann global über Ihr Konto, oder auf
Seiten- oder sogar Seitenebene angepasst werden. Dies kann wünschenswert sein, wenn Sie möchten, dass bestimmte Seiten weniger oder mehr Kommentare anzeigen, bevor der Benutzer weiterblättern muss.

Dies beeinflusst auch das unendliche Scrollen sowie alle Frameworks oder Integrationen, die Kommentare von FastComments rendern.

Die Seitengrößen können von `10` bis zu `200` reichen. Der Standard bleibt bei `30`.

### So erhalten Sie es

Gehen Sie einfach zur zuverlässigen [Widget-Anpassungsoberfläche](https://fastcomments.com/auth/my-account/customize-widget) und legen Sie
Ihre Seitengröße fest.

Bitte beachten Sie, dass FastComments die angezeigten Kommentare auf jeder Seite vorab berechnet. Das Ändern dieses Parameters
führt dazu, dass unser System alle Ihre Kommentar-Threads neu berechnet. Dies verursacht keine Ausfallzeiten, aber es kann einige Minuten dauern, bis die Änderung angezeigt wird.

### Dokumentation

Aktualisierte Dokumentationen zu Seitengrößen finden Sie unter [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Breaking Changes

Im Rahmen dieser Änderung wurden zwei in dem Kommentar-Widget definierte Übersetzungen umbenannt. `PREV_30` und `NEXT_30` heißen jetzt
`PREV` und `NEXT` und enthalten eine `[count]`-Variable.

Wenn Sie Übersetzungen für die Paginierungsschaltflächen über die Widget-Anpassungsoberfläche definiert haben, haben wir diese
bereits für Sie migriert. Wenn Sie die Übersetzungen in einer Art Integration über Code übergeben, müssen Sie diese aktualisieren:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Fazit

Wie bei allen größeren Veröffentlichungen freuen wir uns, dass wir uns die Zeit nehmen konnten, dieses Feature zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie uns unten wissen, wenn Sie Probleme entdecken.

Prost!

{{/isPost}}

---