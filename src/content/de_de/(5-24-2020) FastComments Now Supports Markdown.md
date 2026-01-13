---
[category:Features]

###### [postdate]
# [postlink]FastComments Unterstützt Jetzt Markdown[/postlink]

Ein reichhaltigeres Kommentar-Erlebnis ist bei FastComments mit der Verwendung von Markdown angekommen!

{{#isPost}}

Markdown ist eine Reihe von Konventionen zur Formatierung von Text. Zum Beispiel könnten wir ein fettgedrucktes Wort \*\*so machen\*\*.
Das Einfügen normaler Links bedeutet einfach, die rohe URL einzufügen, und Bilder funktionieren wie zuvor.

Hier ist eine Markdown-Übersicht, bereitgestellt von Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Welche Markdown-Syntax Unterstützt FastComments?

Wir unterstützen Markdown vollständig, mit Ausnahme von Überschriften. Beim Definieren einer Überschrift rendern wir sie einfach als normalen Text, da sie vom Gesprächsfluss ablenken. Überschriften
sind für Inhalte wie Blogbeiträge und Dokumente - nicht für Gespräche.

FastComments hat immer Bilder über die [img]...[/img] Syntax unterstützt. Dies wird weiterhin unterstützt, da es leichter zu verstehen ist als das von Markdown.

### Mixen von Inhalten

Ein einzelner Kommentar kann alle Formen der Formatierung enthalten - Markdown, Links, Bilder, Code-Schnipsel und Tabellen.

### Vermeidung von XSF/XSS-Angriffen

Früher sendete FastComments einfachen Text über das Netzwerk und analysierte ihn auf dem Client. Jetzt wird HTML über das Netzwerk gesendet, und wir halten zwei Versionen jedes Kommentars in unserer Datenbank vor, um Funktionen wie das Bearbeiten von Kommentaren zu unterstützen.

Das direkte Senden von HTML an Kommentare birgt Risiken - daher werden alle generierten Kommentare analysiert und bereinigt, um Angriffe zwischen Websites und Frames zu verhindern.

### Datenexporte

Beim Exportieren von Kommentaren erhalten Sie die Version, die der Benutzer sah, als er seinen Kommentar eingab. Wenn Sie das rohe HTML erhalten möchten, kontaktieren Sie uns.

### Leistungsbedenken

Feature-Creep hat die Angewohnheit, Dinge zu verlangsamen. Das ist nicht, was wir bei FastComments tun möchten.
Die Hinzufügung dieses Features hat die Größe unseres clientseitigen Widgets um ~400 Byte reduziert - von 9,53 kb auf 9,12 kb - was schnellere Seitenladezeiten bedeutet.

Während dieses Feature theoretisch den Kommentar-Speichermechanismus verlangsamen könnte, haben wir keine Leistungsverschlechterungen gesehen und überwachen wie immer unsere APIs.

### Wie bekomme ich das?

Die Unterstützung für Markdown wurde automatisch an alle unsere Kunden bereitgestellt. Sie sollten nicht allzu viele Änderungen an den Inhalten sehen, die auf Ihrer Website veröffentlicht werden - außer, dass Benutzer jetzt fett, unterstrichen und einige fancy Dinge tun können
wie das Erstellen einfacher Tabellen.

Wie bei allen Funktionsveröffentlichungen freuen wir uns auf Feedback und obwohl wir viel automatisiertes Testen haben... wenn Sie Probleme sehen - lassen Sie es uns wissen!

Viel Spaß beim Kommentieren.

{{/isPost}}

---