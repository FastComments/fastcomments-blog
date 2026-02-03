---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Fügen Sie Live-Chat zu nativen Anwendungen mit FastComments React Native hinzu[/postlink]

{{#unless isPost}}
Nach monatelanger Arbeit freuen wir uns, bekannt zu geben, dass fastcomments-react-native-sdk nun in Version 1.0 allgemein verfügbar ist.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält Fachbegriffe

### Neuigkeiten

Bei FastComments haben wir eine neue Möglichkeit eingeführt, React Native-Anwendungen mit FastComments zu erstellen. Zuvor verwendeten Sie unser react-native Wrapper um die VanillaJS-Bibliothek. Dies führte zu mehreren Speicher- und Latenzproblemen, da ein Webview - ein Browser in Ihrer App - erforderlich war, nur um unsere Bibliothek zu laden.

Wir haben FastComments jetzt **komplett** auf React Native portiert und einen eigenen WYSIWYG-Editor geschrieben, um die Notwendigkeit von Webviews vollständig zu beseitigen.

Die Bibliothek unterstützt verschiedene Skins und Layouts. Zum Beispiel hier der Erebus-Skin, der ein Dunkel-Haut-Stil für den Live-Chat ist:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

Die Bibliothek ist [auf GitHub bei FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) sowie [auf NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk) verfügbar.

### Anpassbar

Die neue native Bibliothek ist so gestaltet, dass sie anpassbar ist, genau wie die bestehende Webbibliothek.

Sie können:

- Alle Assets und Icons anpassen, die die Bibliothek verwendet.
- Das Styling jeder Komponente in der Bibliothek anpassen, indem Sie ein Styles-Objekt von oben übergeben.
- Alle Übersetzungen anpassen.
- Einen der vordefinierten oder von der Community entwickelten Skins verwenden.
- Viele der gleichen Konfigurationsoptionen, die die Webbibliothek unterstützt, verwenden.

### Vollständige Funktionsübersicht

Die Bibliothek unterstützt viele Funktionen. Eine unvollständige Liste ist:

- [x] Blockieren
- [x] Chat-Reaktionen
- [x] Kinderkommentare & Antworten
- [x] Benutzerdefinierte Stile (als typisiertes Stylesheet)
- [x] Emoticons
- [x] Markierung
- [x] Gif-Browser - Mit standardmäßig trendenden + Suchfunktionen. Bilder und Suchen anonymisiert über Proxy.
- [x] Live-Kommentierung
- [x] Medienauswahl & Uploads
- [x] Nativer WYSIWYG-Editor mit Bildunterstützung.
- [x] Benachrichtungsdienst (um die ungelesenen Benachrichtigungen des Benutzers im Hintergrund abzurufen und sie zu pushen usw.)
- [x] Benachrichtigungsliste (wird angezeigt, wenn die Glocke angeklickt wird). Unterstützt Abonnements.
- [x] Pagination (Schaltflächen)
- [x] Pagination (Unendliches Scrollen)
- [x] Kommentare anheften
- [x] Sichere, einfache SSO und anonymes Kommentieren.
- [x] Mehrere vordefinierte Skins.
- [x] Kommentare Anzeigeschalter
- [x] Threads
- [x] Benutzeraktivitätsindikatoren
- [x] Abstimmen

### So funktioniert es

Die Bibliothek ist ein kompletter Neuschreib der FastComments-Client in TypeScript und React Native.

### Langfristiger Plan

Langfristig werden wir sowohl die VanillaJS-Bibliothek als auch die react-native-Bibliothek parallel pflegen, sowie alle zukünftigen nativen Bibliotheken, die wir entwickeln könnten.

### Was kommt als Nächstes?

Wir freuen uns auf Feedback von Benutzern und der Community, um diese Bibliothek im Laufe der Zeit zu verbessern, so wie wir es mit dem Web-Ökosystem getan haben.

### Fazit

Wir wissen, dass diese Bibliothek von einigen lange erwartet wurde. Wie bei allen großen Veröffentlichungen sind wir froh, dass wir die Zeit nutzen konnten, um zu optimieren, zu testen und diese Bibliothek richtig freizugeben.

Prost!

{{/isPost}}

---