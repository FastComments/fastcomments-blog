---
[category:Features]
###### [postdate]
# [postlink]Kommentatoren Können Jetzt Ihre Kommentare Entfernen[/postlink]

{{#unless isPost}}
Ein viel erwartetes Update: Sie können jetzt Ihre Kommentare, die Sie mit FastComments hinterlassen haben, löschen.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel Enthält Technischen Jargon

#### Was ist Neu

Wie kürzlich angekündigt - Kommentare, die mit FastComments hinterlassen wurden, können jetzt bearbeitet werden - unabhängig davon, ob Sie angemeldet sind oder nicht.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Lösch-Demo"></video>

Als Folge wurde die Möglichkeit, Ihre Kommentare zu löschen, veröffentlicht. Verständlicherweise gehört es, ebenso wie das Bearbeiten von Kommentaren, zu den am häufigsten gewünschten Funktionen, und wir freuen uns, diesen Meilenstein mit unserer Benutzerbasis zu erreichen.

#### Wie es Funktioniert

Das Entfernen von Kommentaren funktioniert genau wie das Bearbeiten - angemeldete Benutzer können ihre Kommentare immer bearbeiten und löschen. Für anonyme Kommentatoren bieten unsere Server ein temporäres 24-Stunden-Fenster, in dem sie ihren Kommentar nach dem Kommentieren bearbeiten oder löschen können, solange sie ihren Browser nicht schließen. Das bedeutet zum Beispiel, dass ein anonymer Kommentator kommentieren und dann seinen Kommentar bearbeiten kann, um Tippfehler zu korrigieren, oder ihn löschen kann, ohne sich jemals anzumelden!

Wenn der anonyme Kommentator seinen Browser schließt, kann er seinen Kommentar nicht mehr bearbeiten oder löschen, es sei denn, er klickt auf den magischen Link, der an seine E-Mail gesendet wurde.

Zur zusätzlichen Sicherheit wird der temporäre Bearbeitungsschlüssel bei jedem Versuch, den Schlüssel falsch zu erraten, ungültig gemacht.

#### Warum Jetzt, nach so langer Zeit?

Die Begründung dafür ist dieselbe wie die, warum die Bearbeitung so lange auf sich warten ließ. Wir wollten sicherstellen, dass dies die Leistung von FastComments nicht beeinträchtigt und wollten garantieren, dass es ordnungsgemäß mit unseren Live-Kommentierungsfunktionen funktioniert. Zudem wollten wir, dass die Funktion den häufigsten Anwendungsfall unserer Kunden - anonymes Kommentieren - berücksichtigt.

#### Löschen von Live-Kommentaren

Genau wie beim Kommentieren und Abstimmen - das Löschen geschieht in Echtzeit. Wenn zwei Benutzer auf derselben Seite sind und ein Benutzer seinen Kommentar löscht, wird der andere Benutzer sehen, dass er entfernt wird.

#### Aktivierung der Kommentarlöschung

Wir haben die Kommentarbearbeitung und das Löschen standardmäßig für alle unsere Kunden ausgerollt. Derzeit kann es nicht deaktiviert werden.

#### Drittes Partei Integrationen

Das Löschen eines Kommentars führt dazu, dass das Ereignis auf alle Integrationen, die Sie haben - wie WordPress - propagiert wird. Wenn Sie unser WordPress-Plugin verwenden, aktualisiert das Hinzufügen eines Kommentars Ihre WordPress-Installation im Hintergrund, sodass Sie eine Kopie Ihrer Daten behalten. Wenn Sie Kommentare entfernen, folgen wir derselben Logik und entfernen es von Ihrer WordPress-Installation. Dies gilt auch für andere Integrationen, nicht nur für WordPress.

#### Fazit

Wir wissen, dass diese Funktion von einigen lange erwartet wurde. Wie bei allen großen Veröffentlichungen freuen wir uns, dass wir uns die Zeit nehmen konnten, diese Funktion zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen.

Prost!

{{/isPost}}

---