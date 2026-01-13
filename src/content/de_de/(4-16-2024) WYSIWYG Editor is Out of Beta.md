---
[category:Features]

###### [postdate]
# [postlink]Der FastComments WYSIWYG-Editor ist aus der Beta[/postlink]

{{#unless isPost}}
Kunden können jetzt dem neuen Editor zustimmen, der keine sichtbaren Anker-Tags für die Formatierung verwendet.
{{/unless}}

{{#isPost}}

### Was gibt es Neues

Benutzer von FastComment hatten immer die Möglichkeit, ihre Kommentare mit Anker-Tags wie `<b>dies</b>` zu formatieren. Dies ist sehr
vertraut für jeden, der in der Vergangenheit ein Internetforum genutzt hat, oder viele unserer Wettbewerber, jedoch erwarten einige Benutzer und
Gemeinschaften ein anderes Verhalten.

Jetzt können Sie Text im Kommentarfeld ohne Anker-Tags gestalten, da das Texteingabefeld auf `contenteditable` umgeschaltet werden kann.

Zu Demonstrationszwecken wurde dies in diesem Blog aktiviert.

Der erweiterte Editor hat genau das gleiche Aussehen wie der alte Editor, er verwendet lediglich keine sichtbaren Anker-Tags.

### Aktivierung der erweiterten Bearbeitung

In der Widget-Anpassung können Sie einfach `Erweiterter Editor` aktivieren und speichern. Die Dokumentation finden Sie [hier](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Für Entwickler & Besonderheiten

Die Dokumentation zur Aktivierung dieses Features im Code finden Sie [hier](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), obwohl wir empfehlen, die Benutzeroberfläche zur Widget-Anpassung zu verwenden, da dies
zu weniger gesendeten Daten pro Seitenaufruf führt.

Das generierte HTML aus dem inhaltlich bearbeitbaren Bereich ist etwas anders als der alte Textbereich-Editor, denken Sie also daran,
wenn Sie Kommentare von der API parsen.

### Optimierungen

Wir haben das Wachstum des Kommentarwidgets mit diesem neuen Feature verhindert, indem wir es als Erweiterung hinzugefügt haben, die im Hintergrund
geladen wird, wenn dieses Feature aktiviert ist, was das standardmäßige Kommentarwidget klein und leicht hält.

### Fazit

Wie bei allen größeren Versionen freuen wir uns, dass wir uns die Zeit nehmen konnten, dieses Feature zu optimieren, zu testen und ordnungsgemäß freizugeben. Lassen Sie uns unten wissen,
wenn Sie Probleme entdecken.

Proost!

{{/isPost}}

---