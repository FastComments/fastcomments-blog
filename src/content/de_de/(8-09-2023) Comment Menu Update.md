---
[category:API & Development]
###### [postdate]
# [postlink]Kommentar-Menü-Update[/postlink]

{{#unless isPost}}
Dieses Update richtet sich hauptsächlich an Entwickler, die FastComments anpassen. Wir haben einige API-Änderungen vorgenommen und einige Optimierungen durchgeführt.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe

### Was ist neu

Einige FastComments-Mieter passen das Kommentar-Widget an. Dies schafft einen Vertrag
zwischen Ihren Anpassungen und unserer Implementierung. Wir geben unser Bestes, um diesen
Vertrag nicht zu brechen, aber im Rahmen dieser Ankündigung haben wir eine kleine breaking change.

### Für Entwickler

Ein CSS-Selektor für das Kommentar-Menü wurde geändert.

Alt:

    .comment .menu .menu-content

Neu:

    .menu-content

### Bestehende Mieter

Wenn Sie bereits den "menu-content"-Selektor verwenden - herzlichen Glückwunsch! Wir haben alle unsere
Mieter, die diesen Selektor verwenden, überprüft und ihre Widget-Konfigurationen aktualisiert, um
Funktionsstörungen zu verhindern.

Lassen Sie es uns wissen, wenn Sie Probleme haben.

### Begründung

Seit das Kommentar-Widget erstellt wurde, war das Kommentar-Menü rein ein CSS-gesteuertes Dropdown. Dies
ist eine einfache, schnelle Möglichkeit, ein Dropdown-Menü zu implementieren, das auch nicht viel Code benötigt - ein Gestaltungsziel von FastComments.

Im Laufe der Jahre sind jedoch Probleme aufgetreten.

Eines davon ist, dass, wenn der Kommentarbereich eine bestimmte Höhe hat und scrollbar ist, wie beim Streaming-Chat, der Zugriff auf das Menü am unteren Ende schwierig ist, da das Menü versucht, über den scrollbaren Inhaltsbereich hinauszugehen. Dies macht Teile des Menüs unsichtbar und erfordert, dass Sie die Maus bewegen und erneut über das Menü fahren, um die Arbeit zu erledigen, die Sie gerade versuchen wollten. Wir empfanden dies als frustrierend in der Nutzung.

Es wurden einige Workarounds gemacht, wie das Umdrehen der Menü-Richtung **nach oben**,
aber das funktioniert auch nicht, wenn die Widget-Höhe nicht hoch genug ist und es viele Aktionspunkte im Menü gibt - wie für Administratoren. In diesem Fall wäre es ideal, das Menü unterhalb des scrollbaren Inhaltsbereichs zu öffnen.

### Größenvorteile

Ein Vorteil dieser Änderung ist, dass wir viel Code in ein asynchron ladendes
Modul abstrahieren konnten. Dies ermöglicht es uns, die Aktionen, die Sie mit Kommentardaten durchführen können, zu erweitern, ohne die Anfangsladung des Widgets aufzublähen. Dies führt beim ersten Hover über das Bearbeitungsmenü zu einem Netzwerkanruf, aber das Anfangspaket ist sehr klein (< 1kb), sodass dies nicht sehr auffällig sein sollte.

Es ist sehr schwierig, Software weiterzuentwickeln und gleichzeitig die Größe im Laufe der Zeit zu verringern. Normalerweise startet Software schnell und wird langsam. Daher sind wir immer froh, FastComments schnell zu halten:

    Vorher: 28.76kb gzipped (108.02kb insgesamt)
    Nachher: 28.39kb gzipped (105.79kb insgesamt)

Weniger Code bedeutet auch weniger Code, den Ihr Browser beim Laden der Seite parsen muss. Die Auswirkungen davon werden zunehmen, wenn weitere Funktionen hinzugefügt werden.

### Leistungsverbesserungen

Das alte Menü hat alle Menüelemente gerendert und alle Erweiterungen geladen, um zu sehen, ob die Erweiterungen
Elemente zum Hinzufügen hatten, und hat diese auch für jeden Kommentar gerendert, sodass der Inhalt für Ihre Maus bereit war.

Es gibt normalerweise nur 30 - 100 Objekte, daher ist dies meist kein großes Problem, aber der Einfluss wuchs. Das neue System beseitigt dieses Problem, da das Menü jetzt nur bei Bedarf gerendert wird.

Der Nachteil ist, dass das neue Menü positioniert und mit JS gerendert wird, um das zu erreichen, was wir möchten. Wir werden
es weiterhin optimieren, soweit wir können, jedoch funktioniert es derzeit gut.

### Fazit

Danke an unsere Kunden für ihre Geduld bei der Einführung dieser Änderungen. Wir hoffen, dass Sie
FastComments weiterhin lieben.

Prost!

{{/isPost}}

---