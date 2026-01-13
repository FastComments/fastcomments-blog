---
[category:Features]
###### [postdate]
# [postlink]Kommentare Können Jetzt Mit FastComments Bearbeitet Werden[/postlink]

{{#unless isPost}}
Ein lang erwartetes Update – Sie können jetzt Kommentare, die mit FastComments hinterlassen wurden, bearbeiten.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel Enthält Technische Fachbegriffe

#### Was ist Neu

Kommentare, die mit FastComments hinterlassen wurden, können jetzt bearbeitet werden – egal, ob Sie eingeloggt sind oder nicht.

<img src="images/fc-editing-demo.gif" alt="Bearbeitungs-Demo GIF (17mb)" title="Bearbeitungs-Demo" />

Verständlicherweise war dies eines der am häufigsten angeforderten Features, und wir freuen uns, diesen Meilenstein mit unserer Benutzergemeinschaft erreicht zu haben.

#### Wie es Funktioniert

Eingeloggte Benutzer können ihre Kommentare jederzeit bearbeiten. Für anonyme Kommentatoren stellen unsere Server ein temporäres 24-Stunden-Fenster zur Verfügung, damit sie ihren Kommentar nach dem Posten bearbeiten können, solange sie ihren Browser nicht schließen. Das bedeutet beispielsweise, dass ein anonymer Kommentator kommentieren und dann seinen Kommentar zur Behebung von Tippfehlern bearbeiten kann, ohne sich jemals einloggen zu müssen!

Wenn der anonyme Kommentator seinen Browser schließt, kann er seinen Kommentar nicht mehr bearbeiten, es sei denn, er klickt auf den magischen Link, der an seine E-Mail-Adresse gesendet wurde.

Zu zusätzlicher Sicherheit wird der temporäre Bearbeitungsschlüssel bei jedem Versuch ungültig, den Schlüssel falsch zu erraten.

#### Warum Jetzt, nach so langer Zeit?

Wie bei allen Änderungen am Client-Seiten-Widget müssen wir darauf achten, die Größe nicht zu erhöhen. Dieses Feature fügt dem zentralen Kommentierungscode (etwa 1kb gzipped – etwa 10% Zunahme) erheblich Größe hinzu. 
Wir wollten sicherstellen, dass dies die Leistung von FastComments nicht verringert und dass es ordnungsgemäß mit unseren Live-Kommentierungseigenschaften funktioniert. Außerdem wollten wir, dass das Feature den häufigsten Anwendungsfall unserer Kunden unterstützt – anonymes Kommentieren.

#### Live-Kommentare Bearbeiten

Genau wie beim Kommentieren und Abstimmen – das Bearbeiten erfolgt live. Wenn zwei Benutzer auf derselben Seite sind und ein Benutzer seinen Kommentar bearbeitet, sieht der andere Benutzer die Aktualisierung.

#### Kommentar-Bearbeitung Aktivieren

Wir haben die Kommentar-Bearbeitung standardmäßig für alle unsere Kunden bereitgestellt. Derzeit kann sie nicht deaktiviert werden.

#### Was Kommt Als Nächstes?

Wir planen, in einem zukünftigen Update auch die Möglichkeit zu veröffentlichen, Kommentare zu löschen.

#### Integrationen Dritter

Das Bearbeiten eines Kommentars führt dazu, dass das Ereignis an alle Integrationen, die Sie haben – wie WordPress, propagiert wird. Wenn Sie unser WordPress-Plugin verwenden, wird das Hinzufügen eines Kommentars im Hintergrund Ihre WordPress-Installation aktualisiert, sodass Sie eine Kopie Ihrer Daten behalten. Wenn Sie einen Kommentar bearbeiten, folgen wir derselben Logik und aktualisieren die Kopie in Ihrer WordPress-Installation. Dies gilt auch für andere Integrationen, nicht nur für WordPress.

#### Fazit

Wir wissen, dass dieses Feature von einigen lange erwartet wurde. Wie bei allen größeren Veröffentlichungen freuen wir uns, dass wir die Zeit finden konnten, um zu optimieren, zu testen und dieses Feature ordnungsgemäß zu veröffentlichen.

Prost!

{{/isPost}}

---