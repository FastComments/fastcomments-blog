---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments hat jetzt ein spezielles Moodle-Plugin mit SSO, threaded Kommentaren und kollaborativem Chat für Ihre Kurse.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Wir freuen uns, das offizielle FastComments-Plugin für Moodle anzukündigen. Wenn Sie Moodle nutzen und lebendige,
threaded Kommentare oder kollaborativen Chat zu Ihren Kursen hinzufügen möchten, macht dieses Plugin es einfach. Es ersetzt den alten manuellen PHP-Ansatz
durch ein richtiges Moodle-Plugin, das in wenigen Minuten installiert werden kann und mit Ihren bestehenden Moodle-Benutzerkonten integriert ist. Das Plugin funktioniert
mit Moodle 4.1 und später, und der Quellcode ist auf [GitHub](https://github.com/FastComments/fastcomments-moodle) verfügbar.

### Erste Schritte

Um das Plugin zu installieren, laden Sie es aus dem [Moodle Plugin Verzeichnis](https://moodle.org/plugins/local_fastcomments) herunter und installieren Sie es
über den Plugin-Installer Ihrer Moodle-Website. Alternativ können Sie es herunterladen und in
`<moodle-root>/local/fastcomments` entpacken, sich dann als Site-Administrator anmelden und **Website-Administration > Benachrichtigungen** besuchen.
Moodle erkennt das neue Plugin und führt die Installation automatisch durch.

Nach der Installation gehen Sie zu **Website-Administration > Plugins > Lokale Plugins > FastComments**, um es zu konfigurieren. Sie benötigen Ihre
**Tenant-ID** (zu finden in Ihrem FastComments-Dashboard) und Ihr **API Secret**, wenn Sie das sichere SSO nutzen möchten, was wir empfehlen.

### Kommentar-Stile

Das Plugin unterstützt drei Kommentar-Stile, sodass Sie den auswählen können, der am besten für Ihre Studenten und die Kursstruktur funktioniert.

**Kommentare**-Modus platziert ein vollständiges Kommentar-Widget unter dem Seiteninhalt. Die Studierenden erhalten threaded Antworten, @Erwähnungen,
Upvoting und Downvoting, einen Rich-Text-Editor und die Benachrichtigungsglocke, um neue Kommentare auf einer Seite zu abonnieren.

<div class="text-center">
    <div class="sm">Kommentare auf einer Kursseite</div>
    <img src="images/moodle-course-comments.png" alt="Kurs Kommentare" title="Kurs Kommentare" />
</div>

**Kollab Chat**-Modus fügt eine Leiste oben auf der Seite hinzu, die die Benutzer auffordert, Text auszuwählen und eine Diskussion zu beginnen. Der
hervorgehobene Text wird an den Inhalt angeheftet, sodass das Gespräch genau zu dem bleibt, was besprochen wird. Er zeigt auch
online Benutzer und die Anzahl aktiver Diskussionen an. Dieser Modus rendert kein Widget unten.

<div class="text-center">
    <div class="sm">Kollaborativer Chat an den ausgewählten Text angeheftet</div>
    <img src="images/moodle-collab-chat.png" alt="Kollab Chat" title="Kollab Chat" />
</div>

**Kollab Chat + Kommentare** bietet Ihnen beides zur gleichen Zeit. Die Studierenden können Text für Inline-Diskussionen hervorheben und auch
das vollständige Kommentar-Widget unter dem Inhalt nutzen. Dies ist großartig für Kurse, in denen Sie sowohl schnelles Inline-Feedback als auch
längere threaded Gespräche wünschen.

<div class="text-center">
    <div class="sm">Beide Kommentar-Stile aktiv auf einer Seite</div>
    <img src="images/moodle-page-comments.png" alt="Seiten Kommentare" title="Seiten Kommentare" />
</div>

### Automatisches SSO

Das Plugin unterstützt drei SSO-Modi. **Sicheres SSO** ist die empfohlene Option. Es signiert die Benutzeridentität serverseitig mit
HMAC-SHA256 unter Verwendung Ihres API Secrets, sodass die Anmeldedaten niemals auf dem Client exponiert werden. Mit sicherem SSO werden die Moodle-Administratoren
automatisch als FastComments-Moderatoren synchronisiert, was bedeutet, dass Ihre Site-Administratoren Kommentare ohne zusätzliche
Einrichtung moderieren können. Benutzer-Avatare, Namen und E-Mail-Adressen werden alle sicher übermittelt.

**Einfaches SSO** überträgt Benutzerdaten (Name, E-Mail, Avatar) clientseitig ohne Signatur. Es ist schnell einzurichten, aber weniger sicher
als der HMAC-Ansatz. Schließlich deaktiviert **Keine** das SSO vollständig, sodass Benutzer anonym kommentieren.

### Benutzer-Benachrichtigungseinstellungen

Studenten können ihre FastComments-Benachrichtigungseinstellungen direkt über ihr Moodle-Profil verwalten. Im Abschnitt **FastComments**
können sie Benachrichtigungen über Antworten (eine E-Mail erhalten, wenn jemand auf ihren Kommentar antwortet) und Benachrichtigungen über Abonnements
(E-Mails für Threads, die sie abonniert haben) umschalten. Dadurch bleibt alles an einem Ort und die Studierenden haben die Kontrolle darüber, wie viel E-Mail sie erhalten.

### Fazit

Das Moodle-Plugin ist jetzt verfügbar. Für die vollständige Einrichtungshinweise, schauen Sie sich den
[Moodle Integrationsleitfaden](https://docs.fastcomments.com/guide-installation-moodle.html) an, und der Quellcode ist auf
[GitHub](https://github.com/FastComments/fastcomments-moodle). Lassen Sie uns unten wissen, ob Sie Feedback haben!

Prost!

{{/isPost}}

---