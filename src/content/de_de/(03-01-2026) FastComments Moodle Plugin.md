---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments hat jetzt ein spezielles Moodle-Plugin mit SSO, Thread-Kommentaren und kollaborativem Chat für Ihre Kurse.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Wir freuen uns, das offizielle FastComments-Plugin für Moodle anzukündigen. Wenn Sie Moodle verwenden und Live-Thread-Kommentare oder kollaborativen Chat zu Ihren Kursen hinzufügen möchten, macht dieses Plugin es einfach. Es ersetzt den alten manuellen PHP-Ansatz durch ein richtiges Moodle-Plugin, das in wenigen Minuten installiert werden kann und sich mit Ihren vorhandenen Moodle-Benutzerkonten integriert. Das Plugin funktioniert mit Moodle 4.1 und höher, und der Quellcode ist auf [GitHub](https://github.com/FastComments/fastcomments-moodle) verfügbar.

### Erste Schritte

Um zu installieren, laden Sie das ZIP von dem [GitHub-Repository](https://github.com/FastComments/fastcomments-moodle) herunter und entpacken Sie es nach `<moodle-root>/local/fastcomments`. Melden Sie sich dann als Site-Administrator an und besuchen Sie **Site Administration > Notifications**. Moodle wird das neue Plugin erkennen und die Installation automatisch durchführen.

Sobald es installiert ist, gehen Sie zu **Site Administration > Plugins > Local plugins > FastComments**, um es zu konfigurieren. Sie benötigen Ihre **Tenant ID** (zu finden in Ihrem FastComments-Dashboard) und Ihr **API Secret**, wenn Sie Secure SSO verwenden möchten, was wir empfehlen.

Bitte beachten Sie, dass der manuelle Download von GitHub vorübergehend ist, während wir auf die Genehmigung des Plugins im Moodle-Plugin-Verzeichnis warten. Sobald es genehmigt ist, können Sie es direkt aus dem Plugin-Installer von Moodle installieren.

### Kommentierungsstile

Das Plugin unterstützt drei Kommentierungsstile, sodass Sie wählen können, was am besten für Ihre Schüler und die Kursstruktur funktioniert.

**Kommentare**-Modus platziert ein vollständiges Kommentar-Widget unter dem Seiteninhalt. Schüler erhalten Thread-Antworten, @Erwähnungen, Upvotes und Downvotes, einen Rich-Text-Editor und die Benachrichtigungsglocke, um neue Kommentare auf einer Seite zu abonnieren.

<div class="text-center">
    <div class="sm">Kommentare auf einer Kursseite</div>
    <img src="images/moodle-course-comments.png" alt="Kurs Kommentare" title="Kurs Kommentare" />
</div>

**Collab Chat**-Modus fügt eine Leiste am oberen Rand der Seite hinzu, die Benutzer auffordert, Text auszuwählen und eine Diskussion zu beginnen. Der hervorgehobene Text ist an den Inhalt gebunden, sodass die Konversation genau mit dem verknüpft bleibt, was besprochen wird. Er zeigt auch online Benutzer und die Anzahl der aktiven Diskussionen an. In diesem Modus wird kein unteres Widget gerendert.

<div class="text-center">
    <div class="sm">Kollaborativer Chat verankert am ausgewählten Text</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Kommentare** bietet Ihnen beides gleichzeitig. Schüler können Text für Inline-Diskussionen hervorheben und auch das vollständige Kommentar-Widget unter dem Inhalt nutzen. Dies ist großartig für Kurse, in denen sowohl schnelles Inline-Feedback als auch längere Thread-Gespräche gewünscht sind.

<div class="text-center">
    <div class="sm">Beide Kommentierungsstile aktiv auf einer Seite</div>
    <img src="images/moodle-page-comments.png" alt="Seiten Kommentare" title="Seiten Kommentare" />
</div>

### SSO, das einfach funktioniert

Das Plugin unterstützt drei SSO-Modi. **Secure SSO** ist die empfohlene Option. Es signiert die Benutzeridentität serverseitig mit HMAC-SHA256 unter Verwendung Ihres API Secret, sodass Anmeldeinformationen niemals im Client offen gelegt werden. Mit Secure SSO werden Moodle-Administratoren automatisch als FastComments-Moderatoren synchronisiert, was bedeutet, dass Ihre Site-Administratoren Kommentare moderieren können, ohne zusätzliche Einrichtung. Benutzer-Avatare, Namen und E-Mail-Adressen werden alle sicher übermittelt.

**Einfaches SSO** überträgt Benutzerdaten (Name, E-Mail, Avatar) client-seitig ohne eine Signatur. Es ist schnell einzurichten, aber weniger sicher als der HMAC-Ansatz. Schließlich deaktiviert **Keine** SSO vollständig, sodass Benutzer anonym kommentieren.

### Benutzerbenachrichtigungseinstellungen

Schüler können ihre FastComments-Benachrichtigungseinstellungen direkt aus ihrem Moodle-Profil verwalten. Im Abschnitt **FastComments** können sie Antwortbenachrichtigungen (eine E-Mail erhalten, wenn jemand auf ihren Kommentar antwortet) und Abonnementsbenachrichtigungen (E-Mails für Threads erhalten, auf die sie abonniert haben) aktivieren oder deaktivieren. Dies hält alles an einem Ort und gibt den Schülern die Kontrolle darüber, wie viel E-Mail sie erhalten.

### Fazit

Das Moodle-Plugin ist jetzt verfügbar. Für die vollständige Einrichtung sehen Sie sich den [Moodle Integrationsleitfaden](https://docs.fastcomments.com/guide-installation-moodle.html) an, und der Quellcode ist auf [GitHub](https://github.com/FastComments/fastcomments-moodle) verfügbar. Lassen Sie uns unten wissen, wenn Sie Feedback haben!

Prost!

{{/isPost}}