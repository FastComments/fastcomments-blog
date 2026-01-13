---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Spam-Erkennungstraining ist jetzt pro Mandant[/postlink]

{{#unless isPost}}
FastComments hat seit Jahren seinen Spam-Präventions-Classifier trainiert. Jetzt wurden die
Trainingsmöglichkeiten verbessert.
{{/unless}}

{{#isPost}}

### Was gibt es Neues

Wenn Sie einen Kommentar als Spam oder nicht Spam markieren, lernt FastComments daraus für die zukünftige
Spam-Erkennung.

Das Lernen fand jedoch für alle am selben Ort statt. Das bedeutet, dass das Spam-Training eines anderen Mandanten
Ihr eigenes beeinflusste. Es gibt Vor- und Nachteile. Erstens profitieren Sie automatisch von dem, was andere Moderatoren als Spam betrachten. Der Nachteil ist, wenn sie einen Fehler machen oder Inhalte haben, die sich von Ihren unterscheiden.

Zum Beispiel, wenn ein anderer Mandant ein Publikum hat, das sich mit Rennsimulatoren beschäftigt, könnten sie
Kommentare mit "Krypto-Spam" häufig als Spam markieren. Infolgedessen beginnt der Classifier, kryptobezoogene Texte als Spam zu betrachten.

Aber nehmen wir an, Sie haben eine Seite, die sich auf Krypto konzentriert. Jetzt werden viele Ihrer Kommentare
als Spam markiert, obwohl sie es nicht sind. Einige von ihnen könnten zu Recht Spam sein, aber viele möglicherweise nicht.

### Isoliertes Training

Wenn ein neuer Mandant zu FastComments kommt, wird standardmäßig seine Spam-Erkennung auf
der bisherigen Arbeit anderer Mandanten trainiert.

Wenn Sie beginnen, Kommentare als Spam/nicht Spam zu markieren, wird das System auf Ihr eigenes
Trainingsset umschalten.

### Update 20. September 2023

Wir haben festgestellt, dass dieses Setup standardmäßig nicht für jeden ideal war. Isoliertes Spam-Training ist nicht nur
auf die Opt-in-Option beschränkt. Sie können dies auf der Seite der Moderationseinstellungen aktivieren, indem Sie "Isoliert" in der Option "Spam-Filter" auswählen.

Der Standard ist jetzt wieder auf "Geteiltes" Training zurückgesetzt.

### Live

Das Trainingsset für Ihren Mandanten wird jetzt immer neu erstellt, wenn Sie einen Kommentar als Spam oder nicht Spam markieren.

Früher wurde das Spam-Index gelegentlich automatisch neu erstellt. Dies wurde gemacht, um das System vor
übermäßiger Last zu schützen. Nach ein paar Jahren haben wir festgestellt, dass die Last durch kontinuierliches Training nicht sehr hoch ist, daher haben wir
das System aktualisiert, um den Index jedes Mal automatisch zu aktualisieren, wenn Sie eine Änderung vornehmen.

Diese Indizes werden am Edge in unseren Anwendungsservern gespeichert und aktualisieren sich unabhängig, um
das System schnell und reaktionsschnell zu halten.

### Wie Sie es bekommen

Dieses Feature wurde allen Kunden bereitgestellt!

### Abschließend

Wie bei allen größeren Versionen sind wir froh, dass wir die Zeit nutzen konnten, um dieses Feature zu optimieren, zu testen und ordnungsgemäß freizugeben. Lassen Sie uns unten wissen, wenn Sie irgendwelche Probleme entdecken.

Prost!

{{/isPost}}

---