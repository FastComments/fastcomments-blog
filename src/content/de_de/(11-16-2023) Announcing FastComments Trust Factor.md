---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Ankündigung des FastComments Vertrauensfaktors[/postlink]

{{#unless isPost}}
FastComments verwendet jetzt mehr Heuristiken, um zu bestimmen, was Spam ist und was nicht.
{{/unless}}

{{#isPost}}

### Was gibt es Neues

Seit dem 16. November 2023 hat FastComments begonnen, die Art und Weise zu erweitern, wie es die Vertrauenswürdigkeit
von Benutzern bestimmt, um die Frustration im Umgang mit Spamfiltern zu verringern.

### Auswirkungen auf die Benutzer

Wenn Sie ein langjähriges Mitglied einer bestehenden Seite sind und Ihre Kommentare von
dem Spamfilter erfasst wurden, ist diese Änderung für Sie.

Wir haben zahlreiche Berichte von Benutzern auf Seiten erhalten, die Dinge tun, die Spamfilter nicht mögen, wie das Teilen vieler Links und so weiter, und diese
Kommentare landen im Spam und werden entweder blockiert oder warten auf die Genehmigung durch einen Moderator, abhängig von der Einrichtung der Seite.

### Auswirkungen auf Seitenadministratoren und Moderatoren

1. Sie könnten weniger Kommentare sehen, die automatisch von Ihren aktivsten Benutzern als Spam markiert werden.
2. Dies ändert nichts an der Spam-Erkennung basierend auf der Wort-/Phrasen-Schwarzenliste. Obszönitäten und gefilterte Phrasen führen weiterhin dazu, dass Kommentare als Spam eingestuft werden, wenn Sie dieses Setup haben.

Die Vertrauensfaktor-Zahl selbst wird derzeit nicht den Seitenadministratoren oder Moderatoren offengelegt, jedoch
werden wir dies in Zukunft erkunden.

### Wie der Vertrauensfaktor berechnet wird

Der Vertrauensfaktor ist eine Zahl von `0` bis `100` und wird seitenbasiert verwaltet.

Die folgenden Variablen werden zur Bestimmung des Vertrauensfaktors verwendet:

- Alter der Interaktion mit der Seite.
- Anzahl der genehmigten Kommentare.
- Anzahl der gepinnten Kommentare.

Wenn Sie seit über sechs Monaten Mitglied einer Seite sind und über 50 genehmigte Kommentare hinterlassen haben,
werden Sie einen perfekten Vertrauenswert von `100` haben.

Andernfalls ist die Formel wie folgt und wird sich im Laufe der Zeit weiterentwickeln:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Wo:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Sie werden hier das `* 20` bemerken - gepinnte Kommentare haben ein hohes Gewicht. Wenn Moderatoren
Ihre Kommentare anheften, wird Ihr Benutzer wahrscheinlich als ziemlich vertrauenswürdig angesehen.

### Für Entwickler & Stolperfallen

In der API hat `UserBadgeProgress` jetzt `autoTrustFactor` und `manualTrustFactor` offengelegt.

`autoTrustFactor` wird von uns berechnet und kann nicht über die API geschrieben werden.

Wenn Sie den Vertrauensfaktor selbst konfigurieren möchten, können Sie `manualTrustFactor` definieren. Das System
verwendet dann diesen Wert stattdessen und wir werden weiterhin den Wert `autoTrustFactor` separat pflegen.

### Missbrauch des Vertrauensfaktors

Wie bei allen Dingen erwarten wir, dass dies missbraucht wird. Menschen werden Beziehungen zu einer Gemeinschaft aufbauen und dann
das Konto nutzen, um Spam zu posten. Wir denken jedoch, dass wir mit vernünftigen Vorgaben (sechs Monate, 50+ Kommentare) die Messlatte
hoch genug gelegt haben, um dies für die meisten Spammer nicht lohnenswert zu machen. Sobald sie anfangen, Spam zu posten, kann ihr Konto sofort
von Moderatoren gesperrt werden. In Zukunft könnten wir Moderatoren auch erlauben, den Vertrauensfaktor anzupassen.

### Fazit

Wie bei allen größeren Veröffentlichungen sind wir froh, dass wir uns die Zeit nehmen konnten, um diese Funktion zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie uns unten wissen,
wenn Sie Probleme entdecken.

Prost!

{{/isPost}}

---