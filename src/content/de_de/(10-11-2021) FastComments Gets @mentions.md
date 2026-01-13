---
[category:Features]
###### [postdate]
# [postlink]FastComments erhält @Erwähnungen[/postlink]

{{#unless isPost}}
Haben Sie jemals einen oder mehrere Benutzer in einem Kommentar @erwähnen wollen? Jetzt können Sie es.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Früher hat FastComments Benutzer benachrichtigt, wenn Sie auf ihre Kommentare geantwortet haben, aber es gab keine Möglichkeit, mehrere Personen in einem einzelnen Kommentar zu markieren. Außerdem wurden diese
Benachrichtigungen stündlich in Batches gesendet. Mit `@Erwähnungen` ist es jetzt möglich, einen oder mehrere Benutzer zu markieren, und FastComments wird sie sofort per E-Mail benachrichtigen.

### So verwenden Sie es

Wenn Sie `@` tippen und dann den Anfang eines Benutzernamens eingeben, erscheint eine Liste von Suchergebnissen.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Verwendung von Erwähnungen" title="@Erwähnungen Demo" />
</div>

Klicken Sie einfach auf den Namen des Benutzers, den Sie markieren möchten.

Außerdem können Sie die Pfeiltasten nach oben und unten verwenden, um in dieser Liste zu navigieren, und die Enter-Taste drücken, um auszuwählen, oder Escape, um zu verlassen.

Wir wissen, dass Sie das `@`-Symbol möglicherweise verwenden möchten, ohne einen Benutzer zu markieren. FastComments erkennt dies und stößt nicht in Ihr Tipp-Erlebnis.

### Wer erhält es

Alle aktuellen und neuen FastComments-Kunden in allen Tarifen haben jetzt Zugriff auf `@Erwähnungen`. `@Erwähnungen` wurden auch auf frühere Versionen des
Kommentare-Widgets zurückportiert.

### So funktioniert die Autovervollständigung

Die Benutzer, die in der autovervollständigten Liste angezeigt werden, werden bestimmt durch:

- Benutzer, die auf derselben Seite oder in demselben Thread kommentiert haben.
- Benutzer, die ihre FastComments-Konten über dieselbe Website erstellt haben.
- Moderatoren der aktuellen Website.
- SSO-Benutzer, die zum aktuellen Mandanten gehören.

### Kommentare bearbeiten

Erwähnungen können zu vorhandenen Kommentaren hinzugefügt werden, indem Sie diese bearbeiten. Die Anwendung `Kommentare moderieren` vervollständigt jedoch derzeit keine `@Erwähnungen`.

### Zukünftige Überlegungen

In Zukunft werden Benutzer, die FastComments in einem Browserfenster geöffnet haben, eine Benachrichtigung erhalten, wenn sie erwähnt werden, sofern sie für Benachrichtigungen angemeldet sind.

### Fazit

Wie der Rest von FastComments hoffen wir, dass Sie diese Funktion schnell und einfach zu bedienen finden.

Prost!

{{/isPost}}

---