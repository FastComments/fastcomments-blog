---
[category:Features]

###### [postdate]
# [postlink]FastComments Fügt Unterstützung für #HashTags Hinzu[/postlink]

{{#unless isPost}}
Haben Sie jemals ein Thema oder eine Information #taggen wollen? Jetzt können Sie das.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Beim Kommentieren können Benutzer jetzt ein oder mehrere `#hashtags` eingeben. Ein Klick auf ein `#hashtag` in einem Kommentar führt Sie zu einer Ansicht mit anderen Kommentaren,
die das angezeigte Hashtag enthalten.

Zusätzlich können `#hashtags` verwendet werden, um auf externe Inhalte zu verlinken. Mit diesem Release haben wir unsere [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
eingeführt, die es ermöglicht, Hashtags in Ihrem Konto vorab auszufüllen.

Beim Vorab-Ausfüllen von Hashtags können wir eine URL für jedes Tag definieren. Das bedeutet, dass `#hashtags` auch verwendet werden können, um beispielsweise auf eine Ticketnummer oder
ein Dokument in einem CRM zu verlinken.

Das `#`-Symbol kann ebenfalls auf Anfrage angepasst werden.

### Verwendung

Beim Tippen von `#` und dann dem Anfang eines Hashtags wird eine Liste von Suchergebnissen angezeigt.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Verwendung" title="#hashtags Demo" />
</div>

Klicken Sie einfach auf das Hashtag, das Sie hinzufügen möchten.

Zusätzlich können Sie die Auf- und Abwärtstasten verwenden, um durch diese Liste zu navigieren, und die Eingabetaste drücken, um auszuwählen, oder Escape, um zu verlassen.

Wir wissen, dass Sie das `#`-Symbol möglicherweise verwenden möchten, ohne ein Hashtag hinzuzufügen. FastComments erkennt dies und stört nicht Ihr Tipp-Erlebnis.

### Hinzufügen von Hash Tags

Wenn das Hashtag, das Sie verwenden möchten, nicht in der Liste der Vorschläge enthalten ist, wird FastComments das Hashtag einfach im Hintergrund automatisch erstellen.

Die automatische Erstellung von `#hashtags` kann gemäß der Dokumentation [hier](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation) deaktiviert werden.

### Wer Es Bekommmt

Alle aktuellen und neuen FastComments-Kunden, auf allen Ebenen, haben jetzt Zugriff auf `#hashtags`. `#hashtags` wurden auch in frühere Versionen des
Kommentarfelds zurückportiert.

### Wie die Autovervollständigung Funktioniert

Die in der autovervollständigten Liste angezeigten Tags stammen nur aus Ihrem Konto. HashTags werden nicht zwischen FastComments-Mandanten geteilt.

### Dokumentation

Es gibt eine spezielle Dokumentation für `#hashtags`. Sehen Sie hier: https://docs.fastcomments.com/guide-hashtags.html

### Fazit

Wie der Rest von FastComments hoffen wir, dass Sie dieses Feature schnell und einfach zu bedienen finden.

Prost!

{{/isPost}}

---