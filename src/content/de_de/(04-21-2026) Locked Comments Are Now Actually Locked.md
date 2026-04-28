---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Kommentare sind jetzt tatsächlich gesperrt[/postlink]

{{#unless isPost}}
Das Schlosssymbol wird endlich auf gesperrten Kommentaren angezeigt, und gesperrte Kommentare können nicht mehr bearbeitet oder gelöscht werden, bis ein Administrator sie entsperrt.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Moderatoren konnten Kommentare schon seit langem sperren. Das Sperren eines Kommentars verhindert neue Antworten, was praktisch ist, wenn ein Thread seinen Lauf genommen hat oder eine Nebenunterhaltung aus dem Ruder läuft.

Das Problem war, dass "gesperrt" nicht viel Gewicht hatte. Leser hatten keine visuelle Indikation, dass ein Kommentar gesperrt war. Und obwohl neue Antworten blockiert waren, konnte der ursprüngliche Autor oder jeder mit Bearbeitungszugriff den Kommentar weiterhin bearbeiten oder löschen. Das ist nicht wirklich gesperrt. Dieses Update behebt beide Punkte.

### Das Schlosssymbol

Wenn ein Moderator einen Kommentar sperrt, erscheint ein kleines Vorhängeschloss jetzt in der oberen rechten Ecke des Kommentars, direkt neben dem Stecknadel-Symbol. Es wird für jeden Leser angezeigt - nicht nur für Moderatoren. Das Entsperren des Kommentars entfernt es.

Das Symbol berücksichtigt den Licht- und Dunkelmodus, ebenso wie das Stecknadel-Symbol.

### Bearbeiten und Löschen sind blockiert

Ein gesperrter Kommentar kann von niemandem, einschließlich Administratoren und Moderatoren, bearbeitet oder gelöscht werden. Wenn Sie einen gesperrten Kommentar bearbeiten oder entfernen möchten, entsperren Sie ihn zuerst, nehmen Sie die Änderung vor und sperren Sie ihn dann wieder, wenn Sie möchten.

Dies gilt für jeden Pfad, der einen Kommentar berührt:

- Das benutzerseitige Widget blendet die Menüpunkte Bearbeiten und Löschen bei gesperrten Kommentaren aus.
- Die öffentlichen API PATCH- und DELETE-Endpunkte geben einen `locked` Fehler zurück, wenn der Zielkommentar gesperrt ist.
- Die Admin-Moderationsbenutzeroberfläche zeigt den gesperrten Fehler an, wenn Sie versuchen, ohne vorheriges Entsperren zu löschen.

### Ausnahmen

Einige wenige Wege umgehen absichtlich die Sperre, damit sie ihre Aufgaben erledigen können:

- Kontolöschung. Wenn ein Benutzer sein FastComments-Konto löscht, werden seine Kommentare unabhängig vom Sperrstatus bereinigt.
- Tenant-/SSO-Benutzerbereinigung. Das gleiche Konzept gilt für das Entfernen von Benutzern auf Tenant-Ebene.
- Geplante automatische Löschung. Wenn Sie einen Kommentar auf einen bestimmten Zeitpunkt zur Löschung planen, muss der Scheduler sich nicht um Sperren kümmern.
- Duplikatreinigung. Das Duplikatentool entfernt gesperrte Duplikate ohne Umstände.
- Moderatorensperren mit "alle Kommentare von diesem Benutzer löschen". Ein Benutzer zu sperren und seine Historie zu löschen ist eine bewusste Handlung, daher werden auch Sperren entfernt.

Alles andere - das Widget, die Moderationsbenutzeroberfläche, die öffentliche API, externe Aufrufer - respektiert die Sperre.

### API-Fehlerformat

Wenn Sie die öffentliche API aufrufen, um einen gesperrten Kommentar zu bearbeiten oder zu löschen, erhalten Sie eine Antwort wie:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Kommentar ist gesperrt.",
    "translatedError": "Dieser Kommentar ist gesperrt und kann nicht bearbeitet oder gelöscht werden. Entsperren Sie ihn zuerst."
}</div>

Der HTTP-Status ist 401. Das Feld `translatedError` verwendet die konfigurierte Sprache Ihres Tenants und jede benutzerdefinierte Übersetzung, die Sie eingerichtet haben.

### Fazit

Eine kleine Änderung, aber sie schließt eine Lücke, die schon eine Weile offen war. Gesperrt bedeutet jetzt gesperrt.

Prost!

{{/isPost}}