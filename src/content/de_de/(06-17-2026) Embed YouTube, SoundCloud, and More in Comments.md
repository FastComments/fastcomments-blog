---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]YouTube, SoundCloud und mehr in Kommentaren einbetten[/postlink]

{{#unless isPost}}
Kommentatoren können jetzt einen Einbettungscode einfügen, und das Video oder der Player wird direkt im Kommentar angezeigt. Es ist standardmäßig deaktiviert, muss pro Seite aktiviert werden und ist auf vertrauenswürdige Anbieter beschränkt.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Menschen teilen gerne ein Video oder einen Track in einer Diskussion. Bis jetzt hatte das Einfügen eines YouTube- oder SoundCloud-Embed in einen Kommentar nicht viel bewirkt. Der rohe `<iframe>` wurde aus Sicherheitsgründen entfernt, oder er wurde als Codeblock umwickelt.

Jetzt können Sie Medien-Embeds für Ihre Seite aktivieren. Wenn es aktiviert ist, kann ein Kommentator den Einbettungscode direkt vom Anbieter einfügen, und er wird in-line gerendert, so wie es auf jeder anderen Seite der Fall wäre.

Hier ist der Art von Snippet, den Leute von einem "Teilen"- oder "Einbetten"-Button kopieren:

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>

Fügen Sie das in einen Kommentar ein, wenn Embeds aktiviert sind, und Sie bekommen den tatsächlichen Player.

### Nur vertrauenswürdige Anbieter

Das Zulassen beliebiger iframes auf Ihrer Seite ist ein echtes Sicherheitsrisiko, daher haben wir nicht einfach die Tore geöffnet. Embeds sind auf eine integrierte Liste vertrauenswürdiger Anbieter beschränkt, einschließlich YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch und Dailymotion.

Wenn ein Kommentar ein iframe enthält, das auf etwas anderes zeigt, wird das iframe entfernt, wenn der Kommentar gespeichert wird. Dieselbe Bereinigung, die gegen `<script>`-Tags und `onload=`-Tricks schützt, läuft weiterhin bei jedem Kommentar. Embeds sind lediglich eine zusätzliche, sorgfältig festgelegte Erlaubnis darüber hinaus.

### Eigene Anbieter hinzufügen

Wenn Sie einen Anbieter verwenden, der nicht auf der integrierten Liste steht, können Sie ihn erlauben. Es gibt ein Feld "Zusätzliche Einbettungsdomains", in dem Sie zusätzliche Hostnamen zur Vertrauensliste hinzufügen, zusätzlich zu den integrierten Anbietern.

Die Zuordnung erfolgt anhand des exakten Hostnamens, also fügen Sie den vollständigen Host hinzu, von dem das Embed geladen wird, zum Beispiel `player.example.com`. Alles, was Sie nicht auflisten, bleibt blockiert.

### So aktivieren Sie es

Es handelt sich um eine Einstellung pro Seite auf der Seite zur Widget-Anpassung, direkt neben den Optionen zum Hochladen von Bildern. Aktivieren Sie "Medien-Embeds erlauben?" und speichern Sie. Kein Code oder erneutes Bereitstellen erforderlich.

Wie bei unseren anderen Inhalteinstellungen gilt dies pro Anpassungsregel, sodass Sie Embeds auf einer Seite oder einem Satz von Seiten aktivieren und es anderswo deaktiviert lassen können.

### Funktioniert in beiden Editoren

Das Einfügen funktioniert sowohl im einfachen Kommentarfeld als auch im WYSIWYG-Editor. Im einfachen Feld wird der Einbettungscode als Text eingefügt und wird beim Absenden zu einem Player. Im WYSIWYG-Editor erscheint das Embed sofort als Block mit einem kleinen Entfernen-Button in der Ecke, sodass es leicht zu löschen ist, falls es ein Fehler war.

### Fazit

Embeds sind standardmäßig deaktiviert, sodass sich für Ihre Seite nichts ändert, es sei denn, Sie entscheiden sich, sie zu aktivieren. Wenn Sie dies tun, erhalten Ihre Kommentatoren eine schönere Möglichkeit, Videos und Tracks zu teilen, und Sie behalten die gleichen Sicherheitsgarantien, die Sie bereits hatten.

Aktivieren Sie es, fügen Sie ein Video ein, und lassen Sie uns wissen, was Sie unten denken.

Prost!

{{/isPost}}

---