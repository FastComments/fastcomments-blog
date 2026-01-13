---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Das iframe für SEO entfernen[/postlink]

{{#unless isPost}}
Wir haben die Sichtbarkeit Ihrer Kommentare für Suchmaschinen verbessert und die Wahrscheinlichkeit erhöht, dass der Inhalt Ihrer Seite zugeordnet wird.
{{/unless}}

{{#isPost}}

## Was gibt's Neues

Früher wurden Ihre Kommentar-Threads in einem iframe gerendert, wenn sie von Suchmaschinen crawled wurden. Das liegt daran, dass die Anwendung die Verwendung von iframes benötigt, 
um die Cookies für die Sitzungen Ihrer Benutzer zu verwalten.

Dies stellt jedoch ein Problem für Suchmaschinen dar, da sie nicht garantieren, dass der Inhalt im iframe Ihrer Seite zugeordnet wird.

Jetzt wird beim Rendern von Kommentaren das Einbettungsskript überprüfen, ob die Seite von einem Crawler geladen wird. Falls ja, wird kein iframe verwendet!

## Wie viele Kommentare angezeigt werden

Bis zu 2.000 Kommentare werden für eine Seite an Suchmaschinen angezeigt. Sie werden basierend auf Ihrer standardmäßig konfigurierten Sortierreihenfolge sortiert.

## Die Tests, die wir durchgeführt haben

Wir haben sichergestellt, dass Suchmaschinen jetzt den gesamten Kommentar-Thread für eine Seite sehen, und wir haben die Leistung getestet, ganze Kommentar-Threads auf einmal zu laden.

## Auswirkungen auf bestehende Kunden

Wenn Sie ein bestehender Kunde von FastComments sind, wurde die Änderung bereits auf Ihr Konto angewendet, und es sind keine weiteren Maßnahmen erforderlich. Sobald Suchmaschinen Ihre Seiten erneut indexieren, sollten alle Kommentare auf diesen Seiten indiziert werden.

## Fazit

Wir hoffen, dass Sie dieses Update und die dazugehörige Dokumentation nützlich fanden. Viel Spaß beim Kommentieren!

{{/isPost}}

---