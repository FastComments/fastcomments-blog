---
[category:API & Development]

###### [postdate]
# [postlink]Einrichten von SSO mit FastComments[/postlink]

{{#unless isPost}}
FastComments bietet SSO-Lösungen für verschiedene Plattformen und benutzerdefinierte Integrationen.
{{/unless}}

{{#isPost}}

# Übersicht

## Was ist SSO?

SSO, oder Single-Sign-On, ist eine Reihe von Konventionen, die es Ihnen oder Ihren Nutzern ermöglichen, FastComments zu nutzen, ohne ein weiteres Konto erstellen zu müssen.

Vorausgesetzt, Sie erlauben keine anonymen Kommentare, ist ein Konto erforderlich, um mit FastComments zu kommentieren. Wir machen diesen Anmeldeprozess sehr einfach - der Nutzer hinterlässt einfach
seine E-Mail, wenn er kommentiert. Wir verstehen jedoch, dass selbst dies eine zusätzliche Hürde ist, die einige Seiten vermeiden möchten.

## Wie erhalte ich es?

Alle Kontotypen erhalten derzeit Zugriff auf SSO sowie Unterstützung. Die maximale Anzahl an SSO-Nutzern variiert jedoch je nach Ihrem Paket.

### WordPress-Nutzer

Wenn Sie unser <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a>-Plugin verwenden, müssen Sie keinen Code schreiben! Gehen Sie einfach zur Administrationsseite des Plugins, klicken Sie auf SSO-Einstellungen und dann auf Aktivieren.

Dies bringt Sie zu einem Wizard mit einem einzigen Button-Klick, der Ihren API-Schlüssel erstellt, ihn an Ihre WordPress-Installation sendet und SSO aktiviert. Wir haben dies für Sie in einen einzigen Button-Klick zusammengefasst.

Beachten Sie, dass Sie, wenn Sie das Plugin zum ersten Mal installieren, den Einrichtungsprozess abschließen müssen, bevor Sie die Administrationsseite mit dem SSO-Einstellungsbutton sehen.

### Benutzerdefinierte Integrationen

FastComments SSO verwendet HMAC-SHA256-Verschlüsselung als Mechanismus zur Implementierung von SSO. Zuerst werden wir die Gesamtarchitektur durchgehen, Beispiele bereitstellen und detaillierte Schritte erläutern. Am Ende
dieses Artikels finden Sie Anweisungen zum **Migrieren von Disqus und Commento**.

Der Ablauf sieht folgendermaßen aus:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO-Diagramm" title="FastComments SSO-Diagramm" class="lozad" />
</div>

Sie müssen keine neuen API-Endpunkte mit FastComments SSO schreiben. Verschlüsseln Sie einfach die Informationen des Nutzers mit Ihrem geheimen Schlüssel und übergeben Sie die Nutzlast an das Kommentar-Widget.

Wir stellen vollständig funktionsfähige Codebeispiele in mehreren Sprachen/Laufzeiten bereit, einschließlich NodeJS, Java/Spring und reinem PHP. Obwohl wir ExpressJS im NodeJS-Beispiel verwenden
und Spring im Java-Beispiel, sind in diesen Laufzeiten keine Frameworks/Bibliotheken erforderlich, um FastComments SSO zu implementieren - die nativen Krypto-Pakete funktionieren.

Sie finden das Codebeispiel-Repository hier:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO-Codebeispiele</a>

#### Holen Sie sich Ihren API-Geheimschlüssel

Ihr API-Geheimnis kann von <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">dieser Seite</a> abgerufen werden. Sie finden diese Seite auch, indem Sie zu Mein Konto gehen,
auf die API/SSO-Kachel klicken und dann auf "API-Geheimschlüssel abrufen" klicken.

#### Parameter des Kommentar-Widgets

Dokumentation auf hohem Niveau für die API des Kommentar-Widgets finden Sie <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">hier</a> und klicken Sie auf "Erweiterte Optionen anzeigen". Suchen Sie auf der Seite nach SSO.

Lassen Sie uns näher auf die Bedeutung dieser Parameter eingehen.

Das Kommentar-Widget nimmt ein Konfigurationsobjekt - Sie übergeben dies bereits, wenn Sie FastComments verwenden, um Ihre Kunden-ID (tenantId) zu übergeben.

Um SSO zu aktivieren, übergeben Sie ein neues "sso"-Objekt, das die folgenden Parameter haben muss. Die Werte sollten **serverseitig** generiert werden.

- userDataJSONBase64: Die Daten des Nutzers im JSON-Format, die dann Base64-kodiert werden.
- verificationHash: Der HMAC-SHA256-Hash, der aus UNIX_TIME + userDataJSONBase64 erstellt wurde.
- timestamp: Die aktuelle Unix-Zeit. **Darf nicht in der Zukunft oder mehr als drei Stunden in der Vergangenheit liegen.**
- loginURL: Eine URL, die das Kommentar-Widget anzeigen kann, um den Nutzer anzumelden.
- logoutURL: Eine URL, die das Kommentar-Widget anzeigen kann, um den Nutzer abzumelden.
- loginCallback: Wenn anstelle der Anmeldelink-URL angegeben, eine Funktion, die das Kommentar-Widget beim Klicken auf die Schaltfläche zur Anmeldung aufruft.
- logoutCallback: Wenn anstelle der Abmeldelink-URL angegeben, eine Funktion, die das Kommentar-Widget beim Klicken auf die Schaltfläche zur Abmeldung aufruft.

#### Das Nutzerobjekt 

Das Nutzerobjekt enthält das folgende Schema:

- id (string, erforderlich) (max. 1k Zeichen)
- email (string, erforderlich) (max. 1k Zeichen). Hinweis: Muss eindeutig sein.
- username (string, erforderlich) (max. 1k Zeichen). Hinweis: Der Benutzername kann keine E-Mail sein. Muss nicht eindeutig sein.
- avatar (string, optional) (max. 3k Zeichen)
- optedInNotifications (boolean, optional)
- displayLabel (string, optional, max. 100 Zeichen). Dieses Label wird neben ihrem Namen angezeigt.
- websiteUrl (string, optional, max. 2000 Zeichen). Der Name des Nutzers wird mit diesem verlinkt.

#### Benachrichtigungen

Um Benachrichtigungen zu aktivieren oder zu deaktivieren, setzen Sie den Wert von optedInNotifications auf true oder false. Beim ersten Laden der Seite durch den Nutzer mit diesem Wert in der SSO-Nutzlast
werden ihre Benachrichtigungseinstellungen aktualisiert.

#### VIP-Nutzer & besondere Labels

Sie können ein besonderes Label neben dem Namen des Nutzers anzeigen, indem Sie das optionale Feld "displayLabel" verwenden.

#### Unauthentifizierte Nutzer

Um einen unauthentifizierten Nutzer darzustellen, füllen Sie einfach userDataJSONBase64, verificationHash oder timestamp nicht aus. Geben Sie eine loginURL an.

#### Direkte Beispiele für die Serialisierung und das Hashen von Nutzerdaten

Weitere Details und Beispiele finden Sie <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">hier (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">hier (java)</a> und
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">hier (php)</a>.


### Migrieren von Disqus SSO

Die größten Unterschiede zwischen Disqus und FastComments SSO bestehen darin, dass Disqus SHA1 zur Verschlüsselung verwendet, während wir SHA256 verwenden.
Das bedeutet, dass die Migration von Disqus einfach ist - ändern Sie den verwendeten Hash-Algorithmus von SHA1 auf SHA256 und aktualisieren Sie die übergebenen Eigenschaftsnamen an die UI.

### Migrieren von Commento SSO

Commento verwendet einen drastisch anderen SSO-Ansatz - sie verlangen, dass Sie einen Endpunkt haben, den sie aufrufen, um den Nutzer zu authentifizieren. FastComments ist das Gegenteil -
verschlüsseln und hashen Sie einfach die Informationen des Nutzers mit Ihrem geheimen Schlüssel und übergeben Sie diese.

Wir verstehen, dass jede Integration ein komplizierter und schmerzhafter Prozess sein kann. Zögern Sie nicht, sich an Ihren Vertreter zu wenden oder die <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Support-Seite</a> zu nutzen.

{{/isPost}}

---