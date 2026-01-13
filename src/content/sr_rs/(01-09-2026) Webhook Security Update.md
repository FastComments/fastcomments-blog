---
[category:Bezbednost]
[category:Karakteristike]
[category:Webhooks]
###### [postdate]
# [postlink]Ažuriranje bezbednosti Webhook-a[/postlink]

{{#unless isPost}}
FastComments webhooks sada uključuju HMAC-SHA256 potpise za verifikaciju payload-a, plus novu selekciju HTTP metoda.
{{/unless}}

{{#isPost}}

### Šta je novo

Ranije je bilo dodatne težine prilikom postavljanja Webhook-a u poređenju sa drugim platformama. Smatrali smo da je to dobra stvar 
zbog dodatnih bezbednosnih mera koje su bile potrebne, međutim, nedavno smo se odlučili za mehanizam koji je jednako bezbedan, 
ali ta bezbednost je opciona.

### Prethodno ponašanje

Ranije je sistem slao vaš API ključ u payload-ima i očekivao da ga validirate. Ako niste vratili 401 
za nevažeći api ključ, sistem nije dozvoljavao postavljanje.

### Novo ponašanje

Sada, sistem neće slati API ključ za nova podešavanja webhook-a. Umesto toga, za nove i postojeće integracije 
uključen je potpisan HMAC potpis. Možda želite ili ne želite da validirate ovaj potpis, u zavisnosti od nivoa 
potrebne bezbednosti.

Postojeća podešavanja će nastaviti da šalju API ključ - sada možete zatražiti da to isključite putem podrške.

### Verifikacija HMAC potpisa

FastComments sada šalje sledeće header-e sa svakim webhook zahtevom:

| Header | Opis |
|--------|-------------|
| `X-FastComments-Timestamp` | Unix timestamp (sekunde) kada je zahtev potpisan |
| `X-FastComments-Signature` | HMAC-SHA256 potpis u formatu `sha256=<hex>` |
| `token` | Vaš API Secret (zadržan radi kompatibilnosti) |

#### Kako se računa potpis

1. Spojiti: `timestamp + "." + JSON_payload_body`
2. Izračunati HMAC-SHA256 koristeći vaš API Secret kao ključ
3. Hex-enkodirati rezultat

#### Primer verifikacije (Python)

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

    # Verifikacija da je timestamp nov
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verifikacija potpisa
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Selekcija HTTP Metoda

Osim toga, u sklopu ovog ažuriranja - sada možete konfigurisati HTTP metodu za svaki tip webhook događaja:

- **Kreiraj Događaj**: POST ili PUT (podrazumevano: PUT)
- **Ažuriraj Događaj**: POST ili PUT (podrazumevano: PUT)
- **Obriši Događaj**: DELETE, POST ili PUT (podrazumevano: DELETE)

### Bezbednosne Prednosti

Novi sistem ima nekoliko prednosti:

- Zaštita od napada "čovek u sredini"
- Sprečavanje ponovljenih napada putem verifikacije vremena
- Detekcija manipulacije payload-om

### Kompatibilnost sa prethodnim verzijama

`token` header koji sadrži vaš API Secret se još uvek šalje sa svakim zahtevom. Postojeće integracije će nastaviti da rade bez izmene, i kao 
što je ranije pomenuto možete zatražiti da isključite staro ponašanje putem podrške.

### Dokumentacija

Za kompletnu dokumentaciju, pogledajte naš [Vodič za Webhook-ove](https://docs.fastcomments.com/guide-webhooks.html).

### Na kraju

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih izmena. Javite nam 
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---