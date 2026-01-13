---
[category:Features]
###### [postdate]
# [postlink]Benachrichtigungs-E-Mails Aktiviert Für Abonnements[/postlink]

{{#unless isPost}}
FastComments sendet jetzt E-Mails an Benutzer für Seiten, auf denen sie abonniert sind.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Mit FastComments können Benutzer auf das Glockensymbol in einem Kommentar-Widget klicken, um sich für diese Seite anzumelden. Wir benachrichtigen sie, 
wenn neue Kommentare auf dieser Seite hinterlassen werden oder wenn es einen neuen Kommentar in einem Antwort-Thread gibt, an dem sie beteiligt sind.

Wir haben dies seit Jahren getan, jedoch haben wir keine E-Mails für diese Benachrichtigungen gesendet - sie waren nur in unserem Dashboard sichtbar.

Jetzt werden wir E-Mails für diese Benachrichtigungen senden.

### Neue E-Mail-Typen

Wir senden jetzt zwei neue Arten von E-Mails. Die erste ist, wenn Sie nur ein paar Benachrichtigungen haben. Wir werden einfach die 
neuen Kommentare in der E-Mail für Sie auflisten.

Die zweite Art von E-Mail, die Sie erhalten werden, enthält Links zu jeder Seite, für die Sie Benachrichtigungen erhalten haben. Diese wird 
gesendet, wenn Sie viele Benachrichtigungen erhalten.

Diese Benachrichtigungs-E-Mails sind nur für neue Kommentare auf Seiten, auf denen Sie abonniert sind.

### Zeitplan für E-Mail-Benachrichtigungen

Benachrichtigungs-E-Mails werden stündlich gesendet, um übermäßige E-Mails zu vermeiden. Die Ausnahme ist, wenn die betreffende Seite über zehntausend 
Kommentare hat; in diesem Fall senden wir für diese Seite nur einmal am Tag Benachrichtigungen.

### Für Seiteninhaber - E-Mails Anpassen

Eine neue E-Mail-Vorlage für `Neue Abonnementkommentare` wird bald verfügbar sein, um angepasst zu werden.

### Für Entwickler & Wissenswertes

Für SSO-Benutzer senden wir die Benachrichtigungs-E-Mails standardmäßig nicht. Sie müssen ein neues Flag übergeben: `optedInSubscriptionNotifications: true` im Benutzerobjekt oder 
im Payload des Kommentar-Widgets, um diese neuen Benachrichtigungen zu aktivieren.

### Fazit

Wie bei allen großen Veröffentlichungen freuen wir uns, dass wir die Zeit nutzen konnten, um diese Funktion zu optimieren, zu testen und richtig zu veröffentlichen. Lassen Sie uns 
unten wissen, wenn Sie Probleme entdecken.

Prost!

{{/isPost}}

---