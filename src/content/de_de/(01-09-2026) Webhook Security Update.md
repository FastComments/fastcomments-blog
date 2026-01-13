---
[category:Sicherheit]
[category:Funktionen]
[category:Webhooks]
###### [postdate]
# [postlink]Webhook-Sicherheitsupdate[/postlink]

{{#unless isPost}}
Die FastComments-Webhooks enthalten jetzt HMAC-SHA256-Signaturen zur Payload-Verifizierung sowie eine neue Auswahl an HTTP-Methoden.
{{/unless}}

{{#isPost}}

### Neuigkeiten

Früher gab es zusätzliche Hürden bei der Einrichtung von Webhooks im Vergleich zu anderen Plattformen. Wir hielten das für positiv, 
da es zusätzliche Sicherheitsmaßnahmen erforderte. Wir haben jedoch kürzlich einen Mechanismus festgelegt, der ebenso sicher ist, 
aber bei dem die Sicherheit optional ist.

### Vorheriges Verhalten

Früher übermittelte das System Ihren API-Schlüssel in Payloads und erwartete, dass Sie diesen validieren. Wenn Sie bei einem ungültigen API-Schlüssel kein 401 zurückgaben, 
ließ das System die Einrichtung nicht zu.

### Neues Verhalten

Jetzt wird das System bei neuen Webhook-Konfigurationen keinen API-Schlüssel übermitteln. Stattdessen wird für neue und bestehende Integrationen 
eine signierte HMAC-Signatur hinzugefügt. Sie können entscheiden, ob Sie diese Signatur validieren möchten, abhängig von der erforderlichen Sicherheitsstufe.

Bestehende Konfigurationen werden weiterhin den API-Schlüssel übermitteln – Sie können jetzt über ein Support-Ticket anfordern, dies auszuschalten.

### HMAC-Signaturverifizierung

FastComments sendet jetzt die folgenden Header mit jeder Webhook-Anfrage:

| Header | Beschreibung |
|--------|--------------|
| `X-FastComments-Timestamp` | Unix-Zeitstempel (Sekunden), wann die Anfrage signiert wurde |
| `X-FastComments-Signature` | HMAC-SHA256-Signatur im Format `sha256=<hex>` |
| `token` | Ihr API-Geheimnis (zur Rückwärtskompatibilität beibehalten) |

#### Wie die Signatur berechnet wird

1. Verkettung: `timestamp + "." + JSON_payload_body`
2. HMAC-SHA256 mit Ihrem API-Geheimnis als Schlüssel berechnen
3. Ergebnis hexadezimal kodieren

#### Beispielverifizierung (Python)

```python
import hmac
import hashlib
import time
import json

def verify_webhook_signature(headers, body, api_secret):
    timestamp = headers.get('X-FastComments-Timestamp')
    signature = headers.get('X-FastComments-Signature')

    if not timestamp or not signature:
        return False

    # Überprüfen, ob der Zeitstempel aktuell ist
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Überprüfen der Signatur
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Auswahl der HTTP-Methode

Zusätzlich zu diesem Update – Sie können jetzt die HTTP-Methode für jeden Webhook-Ereignistyp konfigurieren:

- **Ereignis erstellen**: POST oder PUT (Standard: PUT)
- **Ereignis aktualisieren**: POST oder PUT (Standard: PUT)
- **Ereignis löschen**: DELETE, POST oder PUT (Standard: DELETE)

### Sicherheitsvorteile

Das neue System hat einige Vorteile:

- Schutz vor Man-in-the-Middle-Angriffen
- Verhinderung von Replay-Angriffen durch Zeitstempelüberprüfung
- Erkennung von Payload-Manipulationen

### Rückwärtskompatibilität

Der `token`-Header, der Ihr API-Geheimnis enthält, wird weiterhin mit jeder Anfrage gesendet. Bestehende Integrationen werden weiterhin ohne Änderungen funktionieren, und wie 
bereits erwähnt, können Sie anfordern, das alte Verhalten über den Support abzuschalten.

### Dokumentation

Für die vollständige Dokumentation siehe unseren [Webhooks-Leitfaden](https://docs.fastcomments.com/guide-webhooks.html).

### Fazit

Wie bei allen größeren Veröffentlichungen sind wir froh, dass wir uns die Zeit nehmen konnten, diese Änderungen zu optimieren, zu testen und ordnungsgemäß zu veröffentlichen. Lassen Sie uns 
unten wissen, ob Sie irgendwelche Probleme entdecken.

Prost!

{{/isPost}}

---