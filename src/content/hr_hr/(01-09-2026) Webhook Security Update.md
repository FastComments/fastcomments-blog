---
[category:Sigurnost]
[category:Značajke]
[category:Webhookovi]
###### [postdate]
# [postlink]Ažuriranje sigurnosti webhooks-a[/postlink]

{{#unless isPost}}
FastComments webhooks sada uključuju HMAC-SHA256 potpise za verifikaciju tereta, uz novu opciju odabira HTTP metode.
{{/unless}}

{{#isPost}}

### Što je novo

Prije je postojala dodatna otežanost pri postavljanju Webhooks-a u usporedbi s drugim platformama. Smatrali smo to dobrom stvari
zbog dodatnih sigurnosnih mjera koje su bile potrebne, no nedavno smo se odlučili za mehanizam koji je jednako siguran
ali ta sigurnost je opcijska.

### Prethodno ponašanje

Prije je sustav prenio vaš API ključ u teretima i očekivao je da ga validirate. Ako niste vratili 401
za nevažeći API ključ, sustav ne bi dopuštao postavljanje.

### Novo ponašanje

Sada, sustav neće prenositi API ključ za nove konfiguracije webhooks-a. Umjesto toga, za nove i postojeće integracije
uključen je potpisani HMAC potpis. Možda ćete htjeti ili ne želite validirati ovaj potpis, ovisno o razini
sigurnosti koja vam je potrebna.

Postojeće konfiguracije će nastaviti prenositi API ključ - sada možete zatražiti da se to isključi putem podrške.

### Verifikacija HMAC potpisa

FastComments sada šalje sljedeće zaglavlja sa svakim zahtjevom za webhook:

| Zaglavlje | Opis |
|-----------|------|
| `X-FastComments-Timestamp` | Unix timestamp (sekunde) kada je zahtjev potpisan |
| `X-FastComments-Signature` | HMAC-SHA256 potpis u formatu `sha256=<hex>` |
| `token` | Vaš API tajni ključ (održava se radi retrogradne kompatibilnosti) |

#### Kako se potpis izračunava

1. Spojiti: `timestamp + "." + JSON_payload_body`
2. Izračunati HMAC-SHA256 koristeći vaš API tajni ključ kao ključ
3. Hex-enkodirati rezultat

#### Primjer verifikacije (Python)

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

    # Verifikacija da je timestamp nedavan
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

### Odabir HTTP metode

Osim toga, uključeno s ovom ažuriranjem - sada možete konfigurirati HTTP metodu za svaku vrstu webhook događaja:

- **Stvaranje događaja**: POST ili PUT (zadano: PUT)
- **Ažuriranje događaja**: POST ili PUT (zadano: PUT)
- **Brisanje događaja**: DELETE, POST ili PUT (zadano: DELETE)

### Sigurnosne prednosti

Novi sustav ima nekoliko prednosti:

- Zaštita od napada "man-in-the-middle"
- Prevencija ponovljenih napada putem verifikacije vremenskog žiga
- Otkrivanje manipulacije teretom

### Retrogradna kompatibilnost

`token` zaglavlje koje sadrži vaš API tajni ključ još uvijek se šalje sa svakim zahtjevom. Postojeće integracije će nastaviti raditi bez izmjena, i kao
što je prethodno spomenuto, možete zatražiti isključivanje starog ponašanja putem podrške.

### Dokumentacija

Za potpunu dokumentaciju, pogledajte naš [Vodič za webhooks](https://docs.fastcomments.com/guide-webhooks.html).

### Na kraju

Kao i kod svih velikih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ovih promjena. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---