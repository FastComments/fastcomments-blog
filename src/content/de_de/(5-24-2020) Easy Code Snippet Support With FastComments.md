---
[category:Features]

###### [postdate]
# [postlink]Einfache Unterstützung für Code-Snippets mit FastComments[/postlink]

Einige unserer Kunden haben Software-Entwicklung verwandte Websites und Blogs. In diesen Gemeinschaften ist es üblich, Code-Snippets zu teilen. So erleichtert FastComments das.

{{#isPost}}

FastComments ermöglicht das Teilen von Code, indem man ihn einfach in das Kommentarfeld einfügt. Er kann mit anderem Text und Bildern gemischt werden und erfordert nicht, dass man manuell irgendwelche "Code"-Tags hinzufügt, um das Format zu erstellen. Einfach einfügen!

Hier ist eine kurze Demo, die es in Aktion zeigt.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Code-Snippet Sharing Demo" title="Code-Snippet Sharing Demo"></video>

### Leistungsaspekte

Das Hinzufügen dieser Funktion hat nur ~150 Bytes zur Client-seitigen Widget-Größe hinzugefügt, da die meisten Funktionen serverseitig verarbeitet werden. Tatsächlich ist die Widget-Größe, wenn man diese Funktion mit den kürzlich hinzugefügten Markdown-Features kombiniert, sogar gesunken!

### Dinge, die zu beachten sind

Wenn Sie eine Gemeinschaft haben, die stark Code teilt, sollten Sie in Betracht ziehen, die maximale Kommentargröße zu erhöhen, um das Teilen von Code-Snippets zu erleichtern. Dies geschieht über den "Anpassen"-Tab des Administrations-Dashboards.

### Code-Erkennung

Um die Client-seitige Widget-Größe klein zu halten, erkennen wir nur automatisch eingefügten Code für C- und Python-ähnliche Sprachen (Java, JavaScript, CSS, C++, zum Beispiel), die entweder "{" oder Leerzeichen für den Kontrollfluss verwenden. Wenn Sie häufig eine Sprache verwenden, die nicht automatisch erkannt wird, kontaktieren Sie uns.

Um manuell einen Block von Code einzufügen, schreiben Sie einen Kommentar wie: ```<code>(defun someLispCode(1, 2, 3))</code>```. Wir können ungefähr 150 Sprachen automatisch erkennen. 

### Migration bestehender Kommentare

Wenn Sie zu FastComments wechseln möchten und viele Kommentare haben, die Code-Snippets enthalten, die Sie richtig formatiert haben möchten, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">können wir helfen</a>.

### Fazit

Das war's! Wir haben dies für alle Online-Communities auf FastComments eingeführt.

Viel Spaß beim Kommentieren!

{{/isPost}}