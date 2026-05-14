---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Kommentare zu Ihren D2L Brightspace-Kursen hinzufügen[/postlink]

{{#unless isPost}}
FastComments wird nun in D2L Brightspace in einem Schritt über die LTI 1.3 Dynamische Registrierung installiert, mit automatischer SSO, threadbasierten Kommentaren und kollaborativem Chat für jede Kurseinheit.
{{/unless}}

{{#isPost}}

### Neuigkeiten

FastComments unterstützt jetzt D2L Brightspace durch den IMS LTI 1.3 Advantage Standard, einschließlich Dynamischer Registrierung.
Das bedeutet, es gibt kein Plugin zum Installieren, keinen Schlüssel, den man koordinieren muss, und keine Einrichtungsverknüpfung pro Kurs. Ihr Brightspace
Administrator fügt eine einzelne URL in das LTI Advantage Registrierungsfenster ein, und FastComments und Brightspace schließen
die Handshakes automatisch ab. Dozenten fügen dann FastComments zu jeder Einheit auf die gleiche Weise hinzu, wie sie jedes andere externe
Tool hinzufügen, und die Studenten sehen threadbasierte Kommentare direkt im Kursinhalt eingebettet.

<div class="text-center">
    <div class="sm">Threadbasierte Kommentare eingebettet als Thema innerhalb einer Brightspace-Einheit</div>
    <img src="images/d2l-course-comments.png" alt="FastComments läuft innerhalb einer D2L Brightspace-Einheit" title="FastComments auf einer Brightspace-Einheit" />
</div>

### Erste Schritte

Öffnen Sie von Ihrem FastComments-Dashboard die [LTI 1.3 Konfigurationsseite](https://fastcomments.com/auth/my-account/lti-config),
wählen Sie **D2L Brightspace** aus dem Plattform-Dropdown und klicken Sie auf **URL generieren**. Sie erhalten eine einmalig verwendbare Registrierungs-URL,
die 30 Minuten gültig ist.

In Brightspace öffnet Ihr Administrator **Admin-Tools > Erweiterbarkeit verwalten > LTI Advantage > Tool registrieren**, fügt die
URL in das Feld **Tool-Initierungsregistrierungsendpunkt** ein und reicht sie ein. Brightspace führt den Registrierungs-Handschlag
mit FastComments durch, tauscht Signaturschlüssel aus und erstellt den Tool-Eintrag. Das Popup-Fenster schließt sich automatisch, wenn der Vorgang abgeschlossen ist.

Nach der Registrierung aktiviert der Administrator das Tool und erstellt eine Bereitstellung, die auf die Organisations-Einheiten beschränkt ist, die Zugriff haben sollen. Von diesem Punkt an erscheint FastComments im Inhaltsauswahlbereich jedes Kurses unter **Vorhandenes hinzufügen**.

### Zu einem Kurs hinzufügen

Innerhalb jeder Kurseinheit klickt der Dozent auf **Vorhandenes hinzufügen**, wählt **FastComments** aus der Aktivitätenliste und das
Tool wird als Thema in die Einheit eingefügt. Das Umbenennen des Themas, das Neuanordnen innerhalb der Einheit, die Beschränkung auf spezifische
Gruppen oder Freigabebedingungen und das Umschalten der Sichtbarkeit erfolgen alle über die Standardsteuerungen von Brightspace. Es gibt keinen separaten
FastComments-Einstellungsbildschirm, den Lehrer lernen müssen.

Für die Inline-Einbettung ist dasselbe FastComments-Tool auch über den **Stuff einfügen** Dialog des Brightspace HTML-Editors unter **LTI Advantage** verfügbar. Dies nutzt den LTI Deep Linking Fluss, um einen Kommentarthread direkt innerhalb einer Lektüre,
Quizanweisungen oder eines anderen HTML-Themas abzulegen, sodass die Diskussion neben dem Inhalt steht, auf den sie sich bezieht.

### Automatische SSO

Die Studenten sehen niemals einen Anmeldebildschirm. Der LTI 1.3 Start überträgt die Brightspace-Identität des Studenten (`sub`, `name`, `email`,
und `picture`), signiert mit dem privaten Schlüssel von Brightspace. FastComments überprüft die Signatur gegen die veröffentlichten
JWKS von Brightspace, erstellt eine sichere SSO-Sitzung für den Benutzer und rendert das Kommentarfeld. Kommentare werden dem Brightspace-Konto des Studenten zugeordnet, und Dozenten moderieren ebenfalls mit ihrer Brightspace-Identität.

Die Rollenzuweisung ist automatisch. Brightspace **Administrator**-Benutzer treten als FastComments-Admins auf, **Dozent**-Benutzer als Moderatoren, und alle anderen als Standardkommentatoren. Es gibt keine separate Benutzerliste, die auf der FastComments-Seite verwaltet werden muss - sie folgt dem, was Brightspace angibt.

### Thread-Bindung

Jeder Kommentarthread ist an ein Trio gebunden: den Brightspace-Host, den Kurs und den Ressourcenlink. Das bedeutet, dass zwei
Kurse, die beide ein Thema "Lese-Reflexionen" verwenden, ihre eigene Diskussion erhalten. Das Gleiche gilt, wenn ein Dozent
FastComments zweimal im selben Kurs hinzufügt (zum Beispiel einmal als Einheitenthema und einmal als Inline-Einbettung innerhalb einer
HTML-Seite) - jede Platzierung ist ihr eigener Thread.

Der Host-Teil ist absichtlich Teil der Thread-ID. Wenn Ihre Institution mehrere Brightspace-Instanzen unter einem FastComments-Konto betreibt,
bleiben die Gespräche auf jede Instanz isoliert, selbst wenn Kurs-IDs kollidieren.

### Zusammenfassung

Wenn Sie D2L Brightspace verwenden, können Sie innerhalb eines Nachmittags mit FastComments live sein: URL generieren, in Brightspace einfügen,
und Dozenten das Tool in ihre Einheiten einfügen lassen. Für die vollständige Schritt-für-Schritt-Anleitung, einschließlich
Fehlerbehebung und Screenshots pro Seite, siehe das
[LTI 1.3 Installationshandbuch](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Dieselbe Integration deckt auch Moodle, Blackboard, Sakai, Schoology und jede andere LTI 1.3 Advantage-Plattform ab, aber Brightspace war unser Pilotziel und der Flow ist dort rocksolide.

Prost!

{{/isPost}}

---