[category:Migration]
###### [postdate]
# [postlink]Migration von Cusdis zu FastComments[/postlink]

{{#unless isPost}}
Lesen Sie diesen Beitrag, um zu erfahren, wie Sie vollständig von Cusdis zu FastComments migrieren, einschließlich Ihrer Threads, Moderationsstatus und Seiten‑URLs.
{{/unless}}

{{#isPost}}

Cusdis ist ein leichtgewichtiges, Open‑Source‑Kommentarsystem. Wenn Sie es inzwischen überfordert haben und Funktionen wie Spam‑Filterung, Stimmen, Reaktionen, Benachrichtigungen, SSO und ein vollständiges Moderations‑Dashboard benötigen, importiert FastComments jetzt Ihre Cusdis‑Daten direkt.

## Exportieren Sie Ihre bestehenden Kommentare

Fordern Sie im Cusdis‑Dashboard einen vollständigen Datenexport an. Cusdis liefert Ihnen eine einzelne JSON‑Datei, die Ihre Projekte, Seiten und jeden Kommentar samt deren Threads und Genehmigungsstatus enthält. Je nach Cusdis‑Einstellung wird der Export per E‑Mail an Sie gesendet oder sofort zum Download bereitgestellt.

Es gibt nichts zu bearbeiten oder zu entpacken. Bewahren Sie die „.json“-Datei unverändert auf, unser Backend liest sie direkt ein.

## Importieren Sie in FastComments

Sobald Sie eingeloggt sind, gehen Sie <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier, um die Datei zu importieren</a>. Wählen Sie **Cusdis (.json)** aus dem Dropdown und laden Sie Ihre Datei hoch.

### Warten Sie ein paar Minuten

Der FastComments‑Import ist „asynchron“. Das Hochladen der Datei und die Verarbeitung erfolgen in getrennten Schritten. Bei einer kleinen Datei erscheint die Erfolgsmeldung sofort. Am unteren Rand der Import‑Seite befindet sich eine Tabelle, wobei jede Zeile einen Importversuch darstellt. Aktualisieren Sie die Seite, um den Status und die bisher importierten Kommentare zu sehen.

### Wenn es fertig ist

Sie erhalten eine E‑Mail, sobald der Import abgeschlossen ist – egal, ob er erfolgreich war oder nicht. Es ist sicher, die Seite zu schließen, nachdem der Upload erfolgreich war und Sie Ihren Import mit dem Status „Requested“ oder „Running“ sehen.

Ein erneuter Import ist sicher. FastComments vergleicht jeden Kommentar anhand seiner ursprünglichen Cusdis‑ID, sodass ein erneuter Import Ihre bestehenden Kommentare aktualisiert, anstatt Duplikate zu erzeugen. Wenn ein Import fehlschlägt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktieren Sie uns</a> und wir helfen Ihnen weiter.

## Was importiert wird

- **Threaded replies.** Cusdis verschachtelt Antworten mehrere Ebenen tief, und FastComments stellt die vollständige Eltern‑ und Kindstruktur wieder her.
- **Moderationsstatus.** Genehmigte Kommentare bleiben genehmigt. Kommentare, die noch auf Genehmigung warten, landen in Ihrer FastComments‑Moderationswarteschlange, damit Sie sie prüfen können.
- **Autoren.** Jeder Name und jede E‑Mail-Adresse des Kommentators werden übernommen, und registrierte FastComments‑Nutzer werden per E‑Mail zugeordnet.
- **Formatierung.** Cusdis‑Kommentare werden in Markdown geschrieben. FastComments rendert dasselbe Markdown, inklusive Links, Bilder und Zeilenumbrüche, sodass Ihre Threads exakt so aussehen wie zuvor.

Kommentare, die in Cusdis gelöscht wurden, bleiben erhalten, sodass Ihre importierten Threads sauber bleiben.

## Ersetzen Sie das Cusdis‑Widget

Sobald Ihre Daten übertragen sind, entfernen Sie das kleine Cusdis‑Snippet von Ihrer Seite und fügen Sie <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">unser eigenes</a> ein. Sie können Cusdis und FastComments zunächst parallel laufen lassen, um Aussehen und Verhalten zu testen. Wir unterstützen viele Front‑End‑Frameworks, die Sie <a href="https://fastcomments.com/install-wizard" target="_blank">hier finden</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Wir können Ihnen dabei helfen</a>.

### URLs gleichzeitig migrieren

Cusdis verknüpft jeden Kommentar mit seiner Seiten‑URL, sodass der Wechsel einfach ist, solange sich Ihre URLs nicht ändern. Ändern sich Ihre URLs ebenfalls, importieren Sie zuerst Ihre Cusdis‑Daten und nutzen dann das integrierte <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a>-Tool unter „Manage Data“, um Ihre Kommentare an die neuen Orte zu verschieben. Sie können eine ganze Domain, eine vollständige URL oder eine URL‑ID für sowohl alte als auch neue Standorte eingeben, sodass ein einzelnes „von“‑ und „zu“‑Paar alle passenden Seiten auf einmal verschiebt. Der Vorgang läuft im Hintergrund und sendet Ihnen eine E‑Mail, wenn er abgeschlossen ist.

Wenn Sie möchten, dass wir das für Sie übernehmen (bei vielen Seiten), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lassen Sie es uns wissen</a> und geben Sie die alten und neuen URLs an.

## EU

Wenn Sie in der EU sind, sollten Sie Ihr Konto auf <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> erstellen, damit Ihre Kundendaten in der EU bleiben.

## Zusammenfassung

1. Exportieren Sie Ihre Daten von Cusdis als JSON
2. Laden Sie sie auf der FastComments‑Importseite hoch und wählen Sie **Cusdis (.json)**
3. Ersetzen Sie das Cusdis‑Snippet durch <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

{{/isPost}}

---