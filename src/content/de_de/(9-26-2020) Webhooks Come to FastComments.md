---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks kommen zu FastComments[/postlink]

{{#unless isPost}}
FastComments kann jetzt Ihre API für die Erstellung, Aktualisierung und Entfernung von Kommentaren aufrufen.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält technische Fachbegriffe

#### Was gibt's Neues

Mit FastComments ist es jetzt möglich, einen API-Endpunkt aufzurufen, wann immer ein Kommentar hinzugefügt, aktualisiert oder aus unserem System entfernt wird.

Wir erreichen dies mit asynchronen Webhooks über HTTP/HTTPS.

#### So verwenden Sie es

Zuerst navigieren Sie zum <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook-Admin</a>. Dieser ist über Daten verwalten -> Webhooks zugänglich.

Von dort aus können Sie Endpunkte für jeden Kommentarereignistyp festlegen.

Stellen Sie bei jedem Ereignistyp sicher, dass Sie auf **Send Test Payload** klicken, um zu überprüfen, ob Sie Ihre Integration korrekt eingerichtet haben. Siehe den nächsten Abschnitt "Testen" für Details.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Beispiel für die Webhook-Einrichtung" title="Beispiel für die Webhook-Einrichtung" class="lozad" />
</div>

#### Testen

Im <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook-Admin</a> gibt es für jeden Ereignistyp (Erstellen, Aktualisieren, Löschen) Schaltflächen "Send Test Payload". Die Erstellen- und Aktualisieren-Ereignisse senden ein Dummy-WebHookComment-Objekt, während das Testen von Löschen einen Dummy-Anforderungstext mit nur einer ID sendet.

Der Test wird zwei Aufrufe machen, um den Antwortcode für die "glücklichen" (korrekter API-Schlüssel) und "traurigen" (ungültiger API-Schlüssel) Szenarien zu überprüfen.

Wenn der Test einen ungültigen API-Schlüssel sendet, sollten Sie einen Statuscode von 401 zurückgeben, damit der Test erfolgreich abgeschlossen wird. Wenn Sie den Wert des Tokens nicht korrekt überprüfen, sehen Sie einen Fehler wie:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Fehler bei der Webhook-Authentifizierung" title="Fehler bei der Webhook-Authentifizierung" class="lozad" />
</div>

#### Die Struktur des Kommentarobjekts
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### Die Struktur des "Create"-Ereignisses

Der Anforderungstext des "create"-Ereignisses ist ein WebhookComment-Objekt.

#### Die Struktur des "Update"-Ereignisses

Der Anforderungstext des "update"-Ereignisses ist ein WebhookComment-Objekt.

#### Die Struktur des "Delete"-Ereignisses

Der Anforderungstext des "delete"-Ereignisses ist ein WebhookComment-Objekt, **das nur die ID enthält**.

#### Warum verwenden Create und Update beide HTTP PUT und nicht POST?

**Da alle unsere Anforderungen eine ID enthalten**, sollte das wiederholte Senden derselben Create- oder Update-Anforderung **keine neuen Objekte auf Ihrer Seite erstellen**. Das bedeutet, dass diese Aufrufe idempotent sind und gemäß der HTTP-Spezifikation PUT-Ereignisse sein sollten.

#### So funktioniert es

Alle Änderungen am Kommentarobjekt im System lösen ein Ereignis aus, das in einer Warteschlange landet. Sie können diese Warteschlange im <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook-Admin</a> überwachen, für den Fall, dass Ihre API ausfällt. Wenn eine Anfrage an Ihre API fehlschlägt, werden wir sie nach einem Zeitplan erneut in die Warteschlange stellen. Dieser Zeitplan beträgt 1 Minute * die Anzahl der erneuten Versuche. Wenn der Aufruf einmal fehlschlägt, wird er in einer Minute erneut versuchen. Wenn er zwei Mal fehlschlägt, wartet er dann zwei Minuten usw. 
Dies geschieht, damit wir Ihre API nicht überlasten, wenn sie aus lastbedingten Gründen ausfällt.

#### Sicherheit & API-Token

Im Anfrageheader geben wir Ihr <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a> im Parameter "token" weiter.

Wenn Sie diesen Parameter nicht richtig überprüfen, wird Ihre Integration nicht als verifiziert markiert. Dies ist ein Sicherheitsmechanismus, um sicherzustellen, dass alle Integrationen mit FastComments sicher sind.

#### Fazit

Wir hoffen, dass Sie die FastComments Webhook-Integration leicht verständlich und schnell einrichtbar finden.

Wenn Sie weitere Fragen haben, können Sie sich gerne an die <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Kundensupport-Seite</a> wenden.

Prost!

{{/isPost}}

---