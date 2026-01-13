---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Ažuriranje bezbednosti Webhook-a[/postlink]

{{#unless isPost}}
FastComments webhook-ovi sada uključuju HMAC-SHA256 potpise za verifikaciju podataka, plus novu selekciju HTTP metoda.
{{/unless}}

{{#isPost}}

### Šta je novo

Prethodno je postojala dodatna otežanost prilikom postavljanja Webhook-ova u poređenju sa drugim platformama. Smatrali smo to dobrom stvari
zbog dodatnih bezbednosnih mera koje su bile potrebne, međutim, nedavno smo se odlučili za mehanizam koji je jednako siguran
ali ta bezbednost je opcionalna.

### Prethodno ponašanje

Prethodno je sistem prosleđivao vaš API ključ u podacima i očekivao da ga validirate. Ako niste vratili 401
za nevalidan API ključ, sistem ne bi dozvolio postavljanje.

### Novo ponašanje

Sada, sistem neće proslediti API ključ za nove konfiguracije webhook-a. Umesto toga, za nove i postojeće integracije
uključen je potpisani HMAC. Možda želite ili ne želite da verifikujete ovaj potpis, u zavisnosti od nivoa
potrebne bezbednosti.

Postojeće konfiguracije će nastaviti da prosleđuju API ključ - sada možete zatražiti da ovo isključite putem podrške.

### Verifikacija HMAC potpisa

FastComments sada šalje sledeće zaglavlja sa svakim zahtevom za webhook:

| Zaglavlje | Opis |
|-----------|------|
| `X-FastComments-Timestamp` | Unix vremenska oznaka (sekunde) kada je zahtev potpisan |
| `X-FastComments-Signature` | HMAC-SHA256 potpis u formatu `sha256=<hex>` |
| `token` | Vaša API tajna (zadržana radi kompatibilnosti unazad) |

#### Kako se izračunava potpis

1. Konkatenuj: `timestamp + "." + JSON_payload_body`
2. Izračunaj HMAC-SHA256 koristeći vašu API tajnu kao ključ
3. Hex-enkodiraj rezultat

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

    # Verifikuj da je vremenska oznaka nedavna
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verifikuj potpis
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Selekcija HTTP metoda

Dodatno, uključeno sa ovom ažuriranjem - sada možete konfigurisati HTTP metodu za svaku vrstu događaja webhook-a:

- **Kreiraj događaj**: POST ili PUT (podrazumevano: PUT)
- **Ažuriraj događaj**: POST ili PUT (podrazumevano: PUT)
- **Obriši događaj**: DELETE, POST ili PUT (podrazumevano: DELETE)

### Prednosti bezbednosti

Novi sistem ima nekoliko prednosti:

- Zaštita od napada "man-in-the-middle"
- Prevencija napada ponovnog korišćenja putem verifikacije vremenskih oznaka
- Otkrivanje manipulacija sa podacima

### Kompatibilnost unazad

Zaglavlje `token` koje sadrži vašu API tajnu i dalje se šalje sa svakim zahtevom. Postojeće integracije će nastaviti da rade bez modifikacije, a kao
što je prethodno pomenuto, možete zatražiti da isključite staro ponašanje putem podrške.

### Dokumentacija

Za kompletnu dokumentaciju, pogledajte našu [Vodič za Webhook-ove](https://docs.fastcomments.com/guide-webhooks.html).

### Na kraju

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno puštanje ovih izmena. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---