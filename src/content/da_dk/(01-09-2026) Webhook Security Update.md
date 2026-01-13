---
[category:Sikkerhed]
[category:Funktioner]
[category:Webhooks]
###### [postdate]
# [postlink]Webhook Sikkerhedsopdatering[/postlink]

{{#unless isPost}}
FastComments webhooks inkluderer nu HMAC-SHA256 signaturer til payload verifikation, plus ny HTTP metodevalg.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Tidligere var der ekstra friktion ved opsætning af Webhooks sammenlignet med andre platforme. Vi betragtede dette som en god ting på grund af de ekstra sikkerhedsforanstaltninger, der krævedes, dog har vi for nylig besluttet os for en mekanisme, der er lige så sikker, men som sikkerhed er valgfri.

### Tidligere Adfærd

Tidligere ville systemet sende din API-nøgle i payloads og forvente, at du validerede den. Hvis du ikke returnerede en 401 for en ugyldig API-nøgle, ville systemet ikke tillade opsætning.

### Ny Adfærd

Nu vil systemet ikke sende en API-nøgle for nye webhook-konfigurationer. I stedet for nye og eksisterende integrationer inkluderes en signeret HMAC-signatur. Du vil måske validere denne signatur, afhængigt af hvilket sikkerhedsniveau du har brug for.

Eksisterende konfigurationer vil fortsætte med at sende API-nøglen - du kan nu anmode om at deaktivere dette via en supportticket.

### HMAC Signatur Verifikation

FastComments sender nu følgende headers med hver webhook-anmodning:

| Header | Beskrivelse |
|--------|-------------|
| `X-FastComments-Timestamp` | Unix tidsstempel (sekunder) når anmodningen blev signeret |
| `X-FastComments-Signature` | HMAC-SHA256 signatur i formatet `sha256=<hex>` |
| `token` | Din API Hemmelighed (beholdes for bagudkompatibilitet) |

#### Hvordan Signaturen Beregnes

1. Konkatenér: `timestamp + "." + JSON_payload_body`
2. Beregn HMAC-SHA256 ved at bruge din API Hemmelighed som nøgle
3. Hex-kod resultatet

#### Eksempel Verifikation (Python)

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

    # Verificer at tidsstemplet er aktuelt
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verificer signaturen
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### HTTP Metodevalg

Derudover, inkluderet med denne opdatering - kan du nu konfigurere HTTP metoden for hver webhook hændelsestype:

- **Opret Hændelse**: POST eller PUT (standard: PUT)
- **Opdater Hændelse**: POST eller PUT (standard: PUT)
- **Slet Hændelse**: DELETE, POST eller PUT (standard: DELETE)

### Sikkerhedsfordele

Det nye system har et par fordele:

- Beskyttelse mod man-in-the-middle angreb
- Forebyggelse af replay-angreb via tidsstempel verifikation
- Påvisning af payload manipulation

### Bagudkompatibilitet

`token` headeren, der indeholder din API Hemmelighed, sendes stadig med hver anmodning. Eksisterende integrationer vil fortsætte med at fungere uden ændringer, og som tidligere nævnt kan du anmode om at deaktivere den gamle adfærd via support.

### Dokumentation

For komplet dokumentation, se vores [Webhooks Guide](https://docs.fastcomments.com/guide-webhooks.html).

### Afslutningsvis

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt udgive disse ændringer. Lad os vide herunder, hvis du opdager nogen problemer.

Hej!

{{/isPost}}

---