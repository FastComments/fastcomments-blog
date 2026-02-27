---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Neue IP-Anmeldebenachrichtigungen[/postlink]

{{#unless isPost}}
FastComments sendet jetzt eine Sicherheitsbenachrichtigung per E-Mail, wenn ein Login von einer neuen IP-Adresse erkannt wird, einschließlich des ungefähren Standorts, um den Benutzern zu helfen, unbefugten Zugriff zu erkennen.
{{/unless}}

{{#isPost}}

### Was gibt's Neues

FastComments sendet jetzt automatisch eine Sicherheitsbenachrichtigung per E-Mail, wenn wir eine Anmeldung in Ihrem Konto von einer IP-Adresse erkennen, die wir zuvor nicht gesehen haben. Die E-Mail enthält:

- Den **ungefähren Standort** (Stadt und Land) der Anmeldung.
- Die **IP-Adresse**, die verwendet wurde.
- Die **Uhrzeit** der Anmeldung.
- Einen direkten Link, um Ihr **Passwort zu ändern**, falls die Anmeldung nicht von Ihnen war.

Dies gilt für alle Anmeldemethoden: passwortbasierte Anmeldung, magische Links und Zwei-Faktor-Authentifizierungsabläufe.

### Datenschutz

Wir speichern Ihre rohe IP-Adresse nicht. Wir speichern nur eine obfuskierte Form zu Sicherheitsvergleichszwecken. Der ungefähre Standort wird
zum Zeitpunkt der Anmeldung ermittelt und nicht gespeichert.

**Ihre IP wird nicht an Dritte** weitergegeben, um den Standort zu bestimmen. Wir hosten unseren eigenen Dienst, der den ungefähren Standort
aus einer (wöchentlich aktualisierten) Kopie der MaxMind-Datenbank extrahiert.

### Wann Benachrichtigungen Gesendet Werden

Eine Benachrichtigung wird gesendet, wenn **alle** der folgenden Punkte zutreffen:

- Die Anmeldung war erfolgreich.
- Es ist nicht die erste Anmeldung des Benutzers.
- Die IP-Adresse wurde bei einer vorherigen erfolgreichen Anmeldung für dieses Konto nicht gesehen.

Das bedeutet, dass Sie bei Ihrer allerersten Anmeldung keine Benachrichtigung erhalten und keine wiederholten Benachrichtigungen für dieselbe IP-Adresse erhalten.

### Fazit

Dies ist ein weiterer Schritt, um Ihr Konto sicher zu halten. Wenn Sie eine Benachrichtigung erhalten, die Sie nicht erkennen, empfehlen wir, Ihr Passwort sofort zu ändern.

Lassen Sie uns unten wissen, wenn Sie Feedback haben!

Prost!

{{/isPost}}

--- 

---