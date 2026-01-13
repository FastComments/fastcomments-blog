---
[category:Moderation]

###### [postdate]

# [postlink]Verstecken von gemeldeten Kommentaren mit FastComments[/postlink]

{{#unless isPost}}Das Melden wurde zu FastComments hinzugefügt. Außerdem können Kommentare basierend auf der Anzahl der Meldungen verborgen werden.{{/unless}}

{{#isPost}}

### Was ist neu

Benutzer können nun Kommentare mit Kommentarsträngen, die von FastComments gehostet werden, melden. Moderatoren können nach gemeldeten Kommentaren filtern und sehen, wie oft sie gemeldet wurden.

Die Plattform kann auch so konfiguriert werden, dass Kommentare automatisch verborgen werden, wenn sie eine bestimmte Anzahl von Meldungen erhalten haben.

### Die Perspektive des Kommentators

Wenn ein Benutzer eine gültige Sitzung hat, kann er Kommentare über das Kommentarbearbeitungsmenü melden. 

Dies ist kompatibel mit den folgenden Sitzungstypen:

- Anonyme Sitzungen
- FastComments.com Benutzer-Sitzung (unter Verwendung von Drittanbieter-Cookies)
- Sichere SSO
- Einfache SSO

Gemeldete Kommentare werden weiterhin angezeigt, bis die konfigurierte Meldeschwelle erreicht ist.

### Für Moderatoren

Moderatoren können gemeldete Kommentare sehen, indem sie den `Gemeldete` Filter verwenden, der auch direkt [hier](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50) verfügbar ist.

Darüber hinaus ist die Anzahl der Meldungen eines Kommentars für Moderatoren und Administratoren sichtbar.

Hinweis:

- Das Zurücksetzen der Meldungsanzahl für einen Kommentar, der über die `Un-Approve Schwelle` `Nicht genehmigt` wurde, wird den Kommentar `Wieder genehmigen`.
- Ein `Wieder genehmigen` eines `Gemeldeten` Kommentars wird **die Meldungsanzahl zurücksetzen**.
- Dies ist eine Funktion, die als Komfort erstellt wurde.

### Konfiguration

Die Konfiguration des automatischen Versteckens von gemeldeten Kommentaren kann auf der [Seite für Kommentarveraltungs Einstellungen](https://fastcomments.com/auth/my-account/moderate-comments/settings) vorgenommen werden.

### Bestehende Kunden

Wir haben die Einführung dieser Funktion für alle bestehenden Kunden in allen Stufen abgeschlossen. Das automatische Verstecken von nicht genehmigten Kommentaren ist für neue oder bestehende Kunden nicht aktiviert.

### Fazit

Wir hoffen, dass Sie dieses neue Set von Funktionen nützlich und einfach zu bedienen finden. 

Prost!

{{/isPost}}