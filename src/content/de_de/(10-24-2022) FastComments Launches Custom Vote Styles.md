---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments startet benutzerdefinierte Abstimmungsstile[/postlink]

{{#unless isPost}}
Hatten Sie jemals den Wunsch, vom standardmäßigen Up/Down-Abstimmungsstil zu einem einfachen Herzsymbol zu wechseln? Jetzt können Sie es.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Früher musste zur Anpassung der Abstimmungsleiste benutzerdefinierter Code und CSS geschrieben werden. Das bedeutete auch, dass, wenn Sie etwas wie anonyme Abstimmungen aktivieren, aber Abwärtsabstimmungen deaktivieren wollten, hierfür nicht nur benutzerdefinierter Code erforderlich war, sondern die Abstimmungsanforderungen serverseitig nicht validiert werden konnten. Das führte dazu, dass Personen weiterhin anonym downvoten konnten, indem sie den Server direkt anriefen, was in einigen Gemeinschaften vorkam.

Wir haben jetzt das Konzept von `voteStyle` in die Plattform eingeführt, wobei der erste neue Abstimmungsstil das Herzsymbol ist, nach dem viele gefragt haben.

Wenn dies über die Benutzeroberfläche zur Anpassung des Widgets definiert wird, fügt dies auch eine Validierung zur Plattform hinzu, die Downvotes gänzlich verhindert, sodass Hacker nicht mehr die Benutzeroberfläche umgehen und einen Benutzer ins Nirgendwo downvoten können, wie es geschehen könnte, wenn anonyme Abstimmungen aktiviert wären.

### Verwendung

Gehen Sie zur [Widget-Anpassungsoberfläche](https://fastcomments.com/auth/my-account/customize-widget) und wählen Sie `Heart` unter `Vote Style`.

### Dokumentation

Offizielle Dokumente für dieses Feature sind [auf docs.fastcomments.com verfügbar](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Wer erhält es

Alle aktuellen und neuen FastComments-Kunden, in allen Tarifen, haben jetzt Zugang zu benutzerdefinierten Abstimmungsstilen. Dieses Feature wird nur von Version 2 des Kommentar-Widgets und höher unterstützt.

### Optimierungen

Der Code für die verschiedenen Abstimmungsstile ist nicht im Client-Download des Widgets enthalten, es sei denn, er wird aktiviert, um eine Überladung des Produkts zu verhindern.

### Ausblick

Wir haben jetzt die Möglichkeit, verschiedene Arten von Abstimmungen und Reaktionen hinzuzufügen, was wir in der Zukunft tun könnten.

### Fazit

Wie der Rest von FastComments hoffen wir, dass Sie dieses Feature schnell und einfach zu verwenden finden.

Prost!

{{/isPost}}

---