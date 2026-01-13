---
[category:Features]
###### [postdate]
# [postlink]Kommentatoren Können Nun Ihre Kommentare Entfernen[/postlink]

{{#unless isPost}}
Ein lang erwartetes Update, Sie können jetzt Ihre Kommentare, die Sie mit FastComments hinterlassen haben, löschen.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel Enthält Fachjargon

#### Was Gibt's Neues

Wie kürzlich angekündigt – Kommentare, die mit FastComments hinterlassen wurden, können jetzt bearbeitet werden – ob Sie angemeldet sind oder nicht.

<img src="images/fc-deleting-demo.gif" alt="Löschdemo GIF (11mb)" title="Löschdemo" />

Als Folge dessen wurde die Möglichkeit, Ihre Kommentare zu löschen, veröffentlicht. Verständlicherweise war dies, wie das Bearbeiten von Kommentaren, eine unserer am häufigsten nachgefragten Funktionen, und wir freuen uns, diesen Meilenstein mit unserer Benutzerbasis erreicht zu haben.

#### Wie es Funktioniert

Das Entfernen von Kommentaren funktioniert auf die gleiche Weise wie das Bearbeiten – angemeldete Benutzer können ihre Kommentare jederzeit bearbeiten und löschen. Für anonyme Kommentatoren bieten unsere Server ein temporäres 24-Stunden-Fenster, in dem sie ihren Kommentar nach dem Kommentieren bearbeiten oder löschen können, solange sie ihren Browser nicht schließen. Das bedeutet zum Beispiel, dass ein anonymem Kommentator kommentieren und dann seinen Kommentar bearbeiten kann, um Tippfehler zu korrigieren oder ihn ohne Anmeldung zu löschen!

Wenn der anonyme Kommentator seinen Browser schließt, kann er seinen Kommentar nicht mehr bearbeiten oder löschen, es sei denn, er klickt auf den magischen Link, der an seine E-Mail gesendet wurde.

Zur zusätzlichen Sicherheit wird der temporäre Bearbeitungslink bei jedem Versuch, den Link falsch zu erraten, ungültig.

#### Warum Jetzt, nach so langer Zeit?

Die Begründung dafür ist die gleiche, warum das Bearbeiten so lange auf sich warten ließ. Wir wollten sicherstellen, dass dies die Leistung von FastComments nicht verringert und dass es ordnungsgemäß mit unseren Live-Kommentarfunktionen funktioniert. Außerdem wollten wir, dass die Funktion den häufigsten Anwendungsfall unserer Kunden – anonymes Kommentieren – berücksichtigt.

#### Löschen von Live-Kommentaren

Genau wie das Kommentieren und Abstimmen – das Löschen erfolgt live. Wenn zwei Benutzer sich auf derselben Seite befinden und ein Benutzer seinen Kommentar löscht, sieht der andere Benutzer, dass er entfernt wird.

#### Aktivierung der Kommentarentfernung

Wir haben das Bearbeiten und Löschen von Kommentaren standardmäßig für alle unsere Kunden implementiert. Derzeit kann es nicht deaktiviert werden.

#### Drittanbieter-Integrationen

Das Löschen eines Kommentars wird das Ereignis an alle Integrationen weitergeben, die Sie haben – wie WordPress. Wenn Sie unser WordPress-Plugin verwenden, wird das Hinzufügen eines Kommentars Ihre WordPress-Installation im Hintergrund aktualisieren, sodass Sie eine Kopie Ihrer Daten behalten. Wenn Sie Kommentare entfernen, befolgen wir die gleiche Logik und entfernen es von Ihrer WordPress-Installation. Dies gilt auch für andere Integrationen, nicht nur WordPress.

#### Abschließend

Wir wissen, dass diese Funktion von einigen lange erwartet wurde. Wie bei allen wichtigen Veröffentlichungen sind wir froh, dass wir die Zeit nutzen konnten, um diese Funktion zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen.

Prost!

{{/isPost}}