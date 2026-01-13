---
[category:Performance]
###### [postdate]
# [postlink]FastComments auf HTTP/2 aktualisiert[/postlink]

{{#unless isPost}}
Wir haben einige Infrastruktur Verbesserungen vorgenommen, die die Leistung von FastComments weiter verbessern!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält Fachjargon

### Neuigkeiten

Seit dem Start war FastComments auf HTTP/1.1. Kürzlich haben wir unsere gesamte Infrastruktur
in allen Regionen auf HTTP/2 umgestellt.

### Auswirkungen

Dieses Update hält FastComments auf dem neuesten Stand der modernen Standards und bietet einige
Leistungsverbesserungen. Der Nachteil ist, dass einige ältere Browser nicht mehr unterstützt werden.

### Veraltete Browser und Clients

Sie können [nicht unterstützte Browser hier finden](https://caniuse.com/http2). Das Hauptproblem wird IE11 sein, der
nur teilweise Unterstützung bietet, jedoch sollten diese Nutzer zu Edge wechseln.

Chrome, Firefox und andere unterstützen HTTP/2 seit Jahren, daher halten wir es für sicher, diese Änderung vorzunehmen.

### Leistungs Vorteile

FastComments ist bereits ziemlich optimiert in Bezug auf die ausgelieferten Assets und deren Reihenfolge. Zum Beispiel
liefert das Kommentar-Widget nur wenige Anfragen zum Laden - das initiale iframe, dann das Skript, das das Styling enthält, um die Anzahl der Anfragen zu reduzieren, und dann
die Anfrage an die API, um alle benötigten Informationen zu erhalten. Im Vergleich zu vielen anderen Diensten ist es recht kompakt.

Daher ist dies kein Fall, in dem HTTP/2 wirklich viel hilft. Der Hauptvorteil von HTTP/2 besteht darin, dass es gleichzeitige Anfragen ermöglicht.

Allerdings hilft uns HTTP/2 bei der Kompression! Header werden jetzt in einem binären Protokoll gesendet, das
kompakter ist, und bestimmte Plugins mit vielen Assets laden viel schneller, da die Anfragen
parallel pipelined werden können.

### Fazit

Danke an unsere Kunden für ihre Geduld bei der Umsetzung dieser Änderungen. Wir hoffen, dass Sie
FastComments weiterhin lieben.

Prost!

{{/isPost}}