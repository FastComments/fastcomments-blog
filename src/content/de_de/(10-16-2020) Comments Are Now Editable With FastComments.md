---
[category:Features]
###### [postdate]
# [postlink]Kommentare sind jetzt mit FastComments bearbeitbar[/postlink]

{{#unless isPost}}
Ein lang erwartetes Update, jetzt können Kommentare, die mit FastComments hinterlassen wurden, bearbeitet werden.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält Fachjargon

#### Was ist neu

Kommentare, die mit FastComments hinterlassen wurden, können jetzt bearbeitet werden - egal, ob Sie angemeldet sind oder nicht.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Editing Demo"></video>

Verständlicherweise war dies eine unserer am häufigsten nachgefragten Funktionen, und wir freuen uns, diesen Meilenstein mit unserer Nutzerbasis zu erreichen.

#### So funktioniert es

Angemeldete Benutzer können ihre Kommentare jederzeit bearbeiten. Für anonyme Kommentatoren bieten unsere Server ein temporäres 24-Stunden-Fenster, in dem sie ihren Kommentar nach dem Kommentieren bearbeiten können, solange sie ihren Browser nicht schließen. Zum Beispiel bedeutet dies, dass ein anonymer Kommentator kommentieren und dann seinen Kommentar zur Korrektur von Tippfehlern bearbeiten kann, ohne sich jemals anzumelden!

Wenn der anonyme Kommentator seinen Browser schließt, kann er seinen Kommentar nicht mehr bearbeiten, es sei denn, er klickt auf den magischen Link, der an seine E-Mail gesendet wurde.

Zur zusätzlichen Sicherheit wird der temporäre Bearbeitungsschlüssel bei jedem Versuch, den Schlüssel falsch zu erraten, ungültig.

#### Warum jetzt, nach so langer Zeit?

Wie bei allen Änderungen am Client-seitigen Widget müssen wir darauf achten, seine Größe nicht zu erhöhen. Dieses Feature fügt dem Kernkommentierungscode (etwa 1kb gzipped - etwa 10% Zunahme) erheblich Größe hinzu. Wir wollten sicherstellen, dass dies die Leistung von FastComments nicht verringert und dass es ordnungsgemäß mit unseren Live-Kommentierungsfunktionen funktioniert. Außerdem wollten wir, dass die Funktion die häufigsten Anwendungsfälle unserer Kunden - anonymes Kommentieren - unterstützt.

#### Bearbeiten von Live-Kommentaren

Genau wie beim Kommentieren und Abstimmen - das Bearbeiten geschieht in Echtzeit. Wenn zwei Benutzer auf der gleichen Seite sind und ein Benutzer seinen Kommentar bearbeitet, sieht der andere Benutzer die Aktualisierung.

#### Aktivierung der Kommentarbearbeitung

Wir haben die Bearbeitung von Kommentaren standardmäßig für alle unsere Kunden implementiert. Derzeit kann sie nicht deaktiviert werden.

#### Was kommt als Nächstes?

Wir planen, die Möglichkeit, Kommentare zu löschen, in einem zukünftigen Update ebenfalls bereitzustellen.

#### Integrationen von Drittanbietern

Das Bearbeiten eines Kommentars sorgt dafür, dass das Ereignis an alle von Ihnen verwendeten Integrationen - wie WordPress - weitergegeben wird. Wenn Sie unser WordPress-Plugin verwenden, wird das Hinzufügen eines Kommentars im Hintergrund Ihre WordPress-Installation aktualisieren, damit Sie eine Kopie Ihrer Daten behalten. Wenn Sie einen Kommentar bearbeiten, folgen wir demselben Prinzip und aktualisieren die Kopie in Ihrer WordPress-Installation. Dies gilt auch für andere Integrationen, nicht nur für WordPress.

#### Fazit

Wir wissen, dass diese Funktion von einigen lange erwartet wurde. Wie bei allen größeren Veröffentlichungen freuen wir uns, dass wir die Zeit finden konnten, diese Funktion zu optimieren, zu testen und ordnungsgemäß bereitzustellen.

Prost!

{{/isPost}}