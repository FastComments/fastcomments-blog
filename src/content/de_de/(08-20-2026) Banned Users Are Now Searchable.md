[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Gesperrte Benutzer sind jetzt durchsuchbar[/postlink]

{{#unless isPost}}
Die Seite Gesperrte Benutzer hat jetzt eine Suchzeile, sodass Sie eine Sperre nach E‑Mail, Name, wer sie erteilt hat oder dem Kommentar, der sie ausgelöst hat, finden können.
{{/unless}}

{{#isPost}}

### Was ist neu

Die Seite Gesperrte Benutzer unter Kommentare moderieren hat jetzt eine Suchzeile über der Tabelle. Bisher war die einzige Möglichkeit, durch diese Liste zu navigieren, die Steuerungen Seite und Einträge pro Seite, was bei einem Dutzend Sperren in Ordnung ist, bei einigen Tausend jedoch mühsam.

Es gibt drei Steuerungen: **Search By** wählt das Feld, **Match** wählt Enthält oder Gleich und **Value** ist das, wonach Sie suchen.

### Was Sie suchen können

**Search By** bietet fünf Optionen:

- **Any Field** – durchsucht alles unten gleichzeitig
- **Email** – die gesperrte Adresse
- **Name** – der bei der Sperre gespeicherte Name
- **Banned By** – der Moderator, der die Sperre erteilt hat
- **Banned For Saying** – der Text des Kommentars, der den Benutzer gesperrt hat

Die letzten vier entsprechen den gleichnamigen Spalten in der Tabelle, sodass das Dropdown dieselbe Bezeichnung wie das zu filternde Element hat.

### Enthält vs Gleich

**Contains** findet Ihren Wert überall im Feld. **Equals** stimmt mit dem gesamten Feld überein.

Contains ist in den meisten Fällen die gewünschte Option. Die Suche nach `bademail.com` findet jede Sperre für diese Domain, einschließlich der Wildcard‑Sperre `*@bademail.com`, da Wildcard‑Sperren mit ihrem Sternchen gespeichert werden.

Equals ist für den Fall, dass Sie den genauen Wert haben und keine ähnlichen Treffer möchten. Die Suche nach der E‑Mail `spammer@example.com` mit Equals liefert genau diese eine Sperre und nichts weiter.

Beide sind bei allen Feldern nicht groß-/kleinschreibungssensitiv. Das ist wichtiger, als es klingt: Wenn eine Sperre aus einem Kommentar erstellt wird, wird nur der Domain‑Teil der Adresse kleingeschrieben, sodass eine Sperre tatsächlich als `MixedCase@Example.com` gespeichert sein kann. Die Suche nach `mixedcase@example.com` findet sie.

### Zwei Suchoptionen, die es zu kennen lohnt

**Banned For Saying** durchsucht den Kommentartext, der die Sperre ausgelöst hat. Wenn ein bestimmter Ausdruck oder Link verbreitet wurde, können Sie alle gesperrten Benutzer, die deswegen gesperrt wurden, mit einer einzigen Abfrage abrufen.

**Banned By** durchsucht den Moderator, der die Sperre erteilt hat. Wenn Sie die Entscheidungen eines bestimmten Moderators überprüfen möchten oder jemanden einarbeiten und sehen wollen, was er getan hat, reicht eine Suche.

### Es funktioniert mit Seitennavigation und Teilen

Die Suche wird in der Seiten‑URL gespeichert, sodass das Durchblättern der Ergebnisse die Suche beibehält und Sie eine gefilterte Liste an einen anderen Moderator senden können, indem Sie die URL kopieren – genau wie Sie bereits Moderations‑Links teilen. Eine neue Suche startet wieder auf der ersten Seite, und **Clear** setzt die Ansicht zurück zur vollständigen Liste.

### Namenssuche entspricht dem, was Sie sehen

Eine Sperre speichert den Namen, den der Benutzer zum Zeitpunkt der Sperrung hatte, aber die Tabelle zeigt den aktuellen Namen an. Diese sind nicht immer identisch, und eine Sperre, die Sie durch Eingabe einer E‑Mail‑Adresse erstellt haben, enthält überhaupt keinen Namen.

Daher löst die Namenssuche den Benutzer hinter jeder Sperre auf und vergleicht den Namen, den die Tabelle tatsächlich anzeigt. Wenn jemand als „OldHandle“ gesperrt wurde und sich seitdem in „NewHandle“ umbenannt hat, finden beide Suchen ihn. Wenn Sie eine Adresse gesperrt haben und die Tabelle dafür einen Namen anzeigt, funktioniert die Suche nach diesem Namen.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">The Banning Users section of the Moderation Guide</a> covers the search row in detail.

### Fazit

Diese Funktion entstand aus der Beobachtung, wie die Seite tatsächlich verwendet wird. Sperren sammeln sich jahrelang stillschweigend an, und dann muss man eines Tages eine bestimmte Sperre finden, ohne eine Möglichkeit dazu zu haben. Jetzt gibt es sie.

Teilen Sie uns unten mit, welches Feld Sie gerne durchsuchen würden, das nicht in der Liste enthalten ist.

Prost!

{{/isPost}}