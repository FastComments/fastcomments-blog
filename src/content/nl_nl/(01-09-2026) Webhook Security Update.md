---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Webhook Beveiligingsupdate[/postlink]

{{#unless isPost}}
FastComments webhooks bevatten nu HMAC-SHA256 handtekeningen voor payload verificatie, plus een nieuwe HTTP-methode selectie.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Eerder was er extra weerstand bij het instellen van Webhooks in vergelijking met andere platforms. We beschouwden dit als iets goeds
vanwege de extra beveiligingsmaatregelen die vereist waren, maar we hebben onlangs een mechanisme gevonden dat net zo veilig is 
maar waarbij de beveiliging opt-in is.

### Vorig Gedrag

Eerder zou het systeem uw API-sleutel in payloads doorgeven en van u verwachten dat u deze valideerde. Als u geen 401 teruggeeft 
voor een ongeldige api-sleutel, zou het systeem de instelling niet toestaan.

### Nieuw Gedrag

Nu zal het systeem geen API-sleutel doorgeven voor nieuwe webhookconfiguraties. In plaats daarvan wordt voor nieuwe en bestaande integraties 
een ondertekende HMAC-handtekening inbegrepen. U kunt deze handtekening al dan niet willen valideren, afhankelijk van uw vereiste beveiligingsniveau.

Bestaande configuraties blijven de API-sleutel doorgeven - u kunt nu via een ondersteuningsaanvraag verzoeken om dit uit te schakelen.

### HMAC Handtekening Verificatie

FastComments verzendt nu de volgende headers met elke webhook-aanroep:

| Header | Beschrijving |
|--------|--------------|
| `X-FastComments-Timestamp` | Unix-tijdstempel (seconden) wanneer de aanvraag werd ondertekend |
| `X-FastComments-Signature` | HMAC-SHA256 handtekening in het formaat `sha256=<hex>` |
| `token` | Uw API-geheim (behouden voor backwards compatibility) |

#### Hoe de Handtekening wordt Berekend

1. Concateneren: `timestamp + "." + JSON_payload_body`
2. Bereken HMAC-SHA256 met uw API-geheim als de sleutel
3. Hex-code het resultaat

#### Voorbeeld Verificatie (Python)

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

    # Verifieer of de tijdstempel recent is
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verifieer handtekening
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### HTTP Methode Selectie

Daarnaast is deze update inbegrepen - u kunt nu de HTTP-methode configureren voor elk type webhook evenement:

- **Creëer Evenement**: POST of PUT (standaard: PUT)
- **Werk Evenement Bij**: POST of PUT (standaard: PUT)
- **Verwijder Evenement**: DELETE, POST, of PUT (standaard: DELETE)

### Beveiligingsvoordelen

Het nieuwe systeem heeft een aantal voordelen:

- Bescherming tegen man-in-the-middle aanvallen
- Voorkoming van replay-aanvallen via tijdstempel verificatie
- Detectie van payload manipulatie

### Backwards Compatibility

De `token` header met uw API-geheim wordt nog steeds met elke aanvraag verzonden. Bestaande integraties blijven zonder wijzigingen werken, en zoals 
eerder vermeld kunt u verzoeken om het oude gedrag uit te schakelen via ondersteuning.

### Documentatie

Voor volledige documentatie, zie onze [Webhooks Gids](https://docs.fastcomments.com/guide-webhooks.html).

### Conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd konden nemen om deze wijzigingen te optimaliseren, te testen en goed vrij te geven. Laat het ons weten 
hieronder als u problemen ontdekt.

Groetjes!

{{/isPost}}

---