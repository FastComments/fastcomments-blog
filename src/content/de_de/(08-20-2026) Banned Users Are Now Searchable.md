[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Gesperrte Benutzer sind jetzt durchsuchbar[/postlink]

{{#unless isPost}}
Die Seite Gesperrte Benutzer hat jetzt eine Suchzeile, sodass Sie eine Sperre nach E‑Mail, Name, wer sie erteilt hat oder dem Kommentar, der sie ausgelöst hat, finden können.
{{/unless}}

{{#isPost}}

### Was ist neu

Die Seite Gesperrte Benutzer unter Kommentare moderieren hat jetzt eine Suchzeile über der Tabelle. Bis jetzt war die einzige Möglichkeit, durch diese
Liste zu navigieren, die Steuerungen Seite und Einträge pro Seite, was in Ordnung ist, wenn Sie ein Dutzend Sperren haben, und schmerzhaft, wenn Sie einige tausend haben.

Es gibt drei Steuerungen: **Search By** wählt das Feld, **Match** wählt Contains oder Equals, und **Value** ist das, wonach Sie suchen.

### Was Sie suchen können

**Search By** bietet fünf Optionen:

- **Any Field** - durchsucht alles unten auf einmal
- **Email** - die gesperrte Adresse
- **Name** - der Name des Kommentators
- **Banned By** - der Moderator, der die Sperre erteilt hat
- **Banned For Saying** - der Text des Kommentars, der den Benutzer gesperrt hat

Die letzten vier entsprechen den Spalten mit demselben Namen in der Tabelle, sodass das Dropdown genauso liest wie das, was es filtert.

### Contains vs Equals

**Contains** findet Ihren Wert überall im Feld. **Equals** stimmt mit dem gesamten Feld überein.

Contains ist das, was Sie die meiste Zeit wollen. Die Suche nach `bademail.com` findet jede Sperre für diese Domain, einschließlich der
Wildcard `*@bademail.com`-Sperre, weil Wildcard‑Sperren mit ihrem Sternchen gespeichert werden.

Equals ist für den Fall, dass Sie den genauen Wert haben und keine Nahtreffer wollen. Die Suche nach Email für `spammer@example.com` mit
Equals gibt genau diese eine Sperre zurück und nichts anderes.

Beide sind bei allen Feldern nicht groß-/kleinschreibungssensitiv. Das ist wichtiger, als es klingt: Wenn eine Sperre aus einem
Kommentar erstellt wird, wird nur die Domain‑Hälfte der Adresse kleingeschrieben, sodass eine Sperre tatsächlich als `MixedCase@Example.com` gespeichert werden kann.
Die Suche nach `mixedcase@example.com` findet sie.

### Zwei Suchoptionen, die es zu kennen gilt

**Banned For Saying** durchsucht den Kommentartext, der die Sperre ausgelöst hat. Wenn ein bestimmter Ausdruck oder Link verbreitet wird,
können Sie alle, die deswegen gesperrt wurden, mit einer Abfrage abrufen.

**Banned By** durchsucht den Moderator, der die Sperre erteilt hat. Wenn Sie die Entscheidungen eines bestimmten Moderators überprüfen möchten, oder Sie
jemanden einarbeiten und sehen wollen, was er getan hat, ist das nur eine Suche entfernt.

### Es funktioniert mit Seitennavigation und Teilen

Die Suche ist in der Seiten‑URL enthalten, sodass das Blättern durch die Ergebnisse die Suche beibehält und Sie eine gefilterte Liste an einen anderen
Moderator senden können, indem Sie die URL kopieren, genau wie Sie bereits Moderations‑Links teilen. Eine neue Suche zu starten bringt Sie zurück zur
ersten Seite, und **Clear** setzt die Ansicht zurück zur vollständigen Liste.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">Der Abschnitt „Banning Users“ des Moderationsleitfadens</a> behandelt die Suchzeile im Detail.

### Fazit

Diese Funktion entstand aus der Beobachtung, wie die Seite tatsächlich genutzt wird. Sperren sammeln sich jahrelang still an, und dann braucht man eines Tages
eine bestimmte und es gibt keinen Weg, sie zu finden. Jetzt gibt es einen.

Lassen Sie uns unten wissen, wenn es ein Feld gibt, das Sie gerne durchsuchen würden, das nicht in der Liste steht.

Prost!

{{/isPost}}

---