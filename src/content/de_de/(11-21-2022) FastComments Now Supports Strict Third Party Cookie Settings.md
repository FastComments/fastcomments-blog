---
[category:Security]

###### [postdate]
# [postlink]FastComments unterstützt jetzt strenge Einstellungen für Cookies von Drittanbietern[/postlink]

{{#unless isPost}}
Bis jetzt erforderte FastComments, dass Cookies von Drittanbietern aktiviert sind, um voll funktionsfähig zu sein. Das ist jetzt nicht mehr der Fall!
{{/unless}}

{{#isPost}}

### Was gibt's Neues

Das Deaktivieren von Cookies von Drittanbietern als Standard wird zum Standard in datenschutzorientierten Browsern. Ein Beispiel dafür ist Apples Safari auf iOS, wo
wenn Sie Ihre E-Mail hinterlassen, um mit FastComments zu kommentieren, diesen Kommentar verifizieren und dann zu dieser Seite zurückkehren, um einen weiteren Kommentar zu hinterlassen oder auf jemanden zu antworten, Sie feststellen werden, dass alle weiteren Kommentare, die Sie hinterlassen, als unbestätigt markiert werden.

Dies geschieht nur mit der Standardkonfiguration, die ein `Unverified`-Label an Kommentaren anzeigt. Dies kann jedoch andere Dinge wie automatische Genehmigungen beeinflussen, wenn automatische Genehmigungen nur für verifizierte Kommentare aktiviert sind.

Wie Sie sich vorstellen können, kann dies zu frustrierendem Verhalten führen, bei dem ein Benutzer seinen Kommentar verifiziert, auf "Angemeldet bleiben" klickt und er oder sie immer noch nicht angemeldet ist, wenn er oder sie Ihre Seite oder Anwendung besucht. Beachten Sie, dass dies nicht für SSO-Integrationen gilt, da SSO nicht von Cookies abhängt.

Jetzt, mit einer neuen Einstellung, die aktiviert werden kann und `Enable Third-Party Cookie Popup` in den Widget-Einstellungen heißt, wird dieses Problem gelöst, indem ein Pop-up geöffnet wird, das das Cookie des Benutzers abruft. Momentan geschieht dies nur, wenn sie mit dem Kommentar-Widget interagieren, aber das Ergebnis ist, dass der Kommentar aus ihrer FastComments.com-Sitzung gepostet wird, wodurch ihr Kommentar als verifiziert markiert wird und so weiter.

### Wie man es bekommt & Dokumentation

Alle FastComments-Kunden auf allen Stufen haben jetzt Zugang zu dieser Funktion. Überprüfen Sie [die Dokumentation](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass), um zu erfahren, wie man den Umgehung von Cookies von Drittanbietern aktiviert.

### Fazit

Wie bei allen größeren Versionen freuen wir uns, dass wir uns die Zeit nehmen konnten, diese Funktion zu optimieren, zu testen und ordnungsgemäß freizugeben. Lassen Sie es uns unten wissen, wenn Sie irgendwelche Probleme entdecken.

Prost!

{{/isPost}}

---