---
[category:UI & Customization]
###### [postdate]
# [postlink]Ungelesene Kommentare sind jetzt mit FastComments hervorgehoben[/postlink]

{{#unless isPost}}
Hast du je eine Seite besucht und wolltest den Kommentarbereich dort weiterlesen, wo du aufgehört hast? FastComments stylt jetzt Kommentare,
die du verpasst hast, was es einfach macht.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Hast du je eine Seite besucht und wolltest den Kommentarbereich dort weiterlesen, wo du aufgehört hast? FastComments stylt jetzt Kommentare,
die du verpasst hast, was es einfach macht.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar im neuen Kommentar hervorgehoben." />
</div>

### So erhältst du es

Jeder Kommentar, der eine Benachrichtigung im App ausgelöst hat (Antworten, Antworten im gleichen Thread oder Kommentare auf einer Seite,
bei der du abonniert bist), wird automatisch hervorgehoben, wobei der Avatar des Benutzers leicht leuchtet. Die Farbe kann über CSS
mit der Klasse `is-unread` angepasst werden. Das Standardstyling unterstützt auch den Dunkelmodus.

Zusätzlich wurde eine neue `24hr` CSS-Klasse zu Kommentarelementen hinzugefügt, die innerhalb der letzten 24 Stunden gepostet wurden. Du kannst dies ebenfalls verwenden, um
Kommentare zu stylen.

### Warum den Avatar hervorheben?

Wir erkennen an, dass es vielleicht bevorzugt wird, den ganzen Kommentar hervorzuheben. Allerdings gibt es Bedenken hinsichtlich Lesbarkeit und Styling
bei unseren Kunden, die die Plattform an ihr Produkt angepasst haben. Wir haben festgestellt, dass das leichte Hervorheben des Avatars in den meisten Fällen eine recht unauffällige
Änderung ist. Wenn gewünscht, kann der Glanz entfernt und über Widget-Anpassungsregeln geändert werden.

### Fazit

Wir wissen, dass dieses Feature von einigen lange erwartet wurde. Wir haben Zeit damit verbracht, ein Styling auszuwählen, das nicht zu aufdringlich, aber dennoch hilfreich ist, und wir könnten
weitere Anpassungen basierend auf dem Feedback vornehmen.

Prost!

{{/isPost}}

---