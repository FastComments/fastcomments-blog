---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments hat jetzt ein dediziertes Moodle-Plugin mit SSO, threaded Kommentaren und kollaborativem Chat für Ihre Kurse.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Wir freuen uns, das offizielle FastComments-Plugin für Moodle anzukündigen. Wenn Sie Moodle verwenden und Live-Kommentare mit Threads oder einen kollaborativen Chat in Ihre Kurse integrieren möchten, macht dieses Plugin es einfach. Es ersetzt die alte manuelle PHP-Ansatz durch ein richtiges Moodle-Plugin, das in wenigen Minuten installiert wird und sich mit Ihren vorhandenen Moodle-Benutzerkonten integriert. Das Plugin funktioniert mit Moodle 4.1 und höher, und der Quellcode ist auf [GitHub](https://github.com/FastComments/fastcomments-moodle) verfügbar.

### Erste Schritte

Um zu installieren, laden Sie das ZIP-Archiv vom [GitHub-Repository](https://github.com/FastComments/fastcomments-moodle) herunter und extrahieren Sie es nach `<moodle-root>/local/fastcomments`. Melden Sie sich dann als Site-Administrator an und besuchen Sie **Site-Administration > Benachrichtigungen**. Moodle erkennt das neue Plugin und führt die Installation automatisch durch.

Nach der Installation gehen Sie zu **Site-Administration > Plugins > Lokale Plugins > FastComments**, um es zu konfigurieren. Sie benötigen Ihre **Tenant ID** (die Sie in Ihrem FastComments-Dashboard finden) und Ihr **API Secret**, wenn Sie Secure SSO verwenden möchten, was wir empfehlen.

Bitte beachten Sie, dass der manuelle Download von GitHub vorübergehend ist, während wir auf die Genehmigung des Plugins im Moodle-Plugin-Verzeichnis warten. Nach der Genehmigung können Sie es direkt aus dem Plugin-Installer von Moodle installieren.

### Kommentarstile

Das Plugin unterstützt drei Kommentarstile, sodass Sie denjenigen auswählen können, der am besten zu Ihren Schülern und der Kursstruktur passt.

**Kommentare**-Modus platziert ein vollständiges Kommentar-Widget unter dem Seiteninhalt. Schüler erhalten threaded Antworten, @Erwähnungen, Upvotes und Downvotes, einen Rich-Text-Editor und die Benachrichtigungsglocke, um neue Kommentare auf einer Seite zu abonnieren.

<div class="text-center">
    <div class="sm">Kommentare auf einer Kursseite</div>
    <img src="images/moodle-course-comments.png" alt="Kurs Kommentare" title="Kurs Kommentare" />
</div>

**Collab Chat**-Modus fügt eine Leiste oben auf der Seite hinzu, die die Benutzer auffordert, Text auszuwählen und eine Diskussion zu starten. Der hervorhobene Text ist mit dem Inhalt verankert, sodass das Gespräch genau an dem bleibt, was besprochen wird. Es zeigt auch online Benutzer und die Anzahl aktiver Diskussionen an. Dieser Modus rendert kein Bottom-Widget.

<div class="text-center">
    <div class="sm">Kollaborativer Chat, verankert an ausgewähltem Text</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Kommentare** gibt Ihnen beides gleichzeitig. Die Schüler können Text für Inline-Diskussionen markieren und auch das vollständige Kommentar-Widget unter dem Inhalt verwenden. Dies ist großartig für Kurse, in denen Sie sowohl schnelles Inline-Feedback als auch längere threaded Gespräche wünschen.

<div class="text-center">
    <div class="sm">Beide Kommentar-Stile aktiv auf einer Seite</div>
    <img src="images/moodle-page-comments.png" alt="Seiten Kommentare" title="Seiten Kommentare" />
</div>

### Automatisches SSO

Das Plugin unterstützt drei SSO-Optionen. **Secure SSO** ist die empfohlene Option. Es signiert die Benutzeridentität serverseitig mit HMAC-SHA256 unter Verwendung Ihres API Secret, sodass Anmeldeinformationen niemals auf dem Client preisgegeben werden. Mit Secure SSO werden Moodle-Administratoren automatisch als FastComments-Moderatoren synchronisiert, was bedeutet, dass Ihre Site-Administratoren Kommentare ohne zusätzliche Einrichtung moderieren können. Benutzer-Avatare, Namen und E-Mail-Adressen werden alle sicher übergeben.

**Simple SSO** überträgt Benutzerdaten (Name, E-Mail, Avatar) client-seitig ohne Signatur. Es ist schnell einzurichten, aber weniger sicher als der HMAC-Ansatz. Schließlich deaktiviert **None** SSO vollständig, sodass Benutzer anonym kommentieren.

### Benachrichtigungseinstellungen für Benutzer

Schüler können ihre FastComments-Benachrichtigungseinstellungen direkt von ihrem Moodle-Profil aus verwalten. Im Abschnitt **FastComments** können sie Reply-Benachrichtigungen umschalten (eine E-Mail erhalten, wenn jemand auf ihren Kommentar antwortet) und Abonnementbenachrichtigungen (E-Mails für Threads erhalten, auf die sie abonniert haben). Dadurch bleibt alles an einem Ort und gibt den Schülern die Kontrolle darüber, wie viele E-Mails sie erhalten.

### Fazit

Das Moodle-Plugin ist jetzt verfügbar. Für das vollständige Einrichtungs-Tutorial schauen Sie sich den
[Moodle-Integrationsleitfaden](https://docs.fastcomments.com/guide-installation-moodle.html) an, und der Quellcode ist auf
[GitHub](https://github.com/FastComments/fastcomments-moodle) verfügbar. Lassen Sie uns unten wissen, wenn Sie Feedback haben!

Prost!

{{/isPost}}

---