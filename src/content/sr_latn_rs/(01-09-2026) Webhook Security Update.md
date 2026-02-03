---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Ažuriranje sigurnosti Webhook-a[/postlink]

{{#unless isPost}}
FastComments webhook-ovi sada uključuju HMAC-SHA256 potpise za verifikaciju sadržaja, plus novu selekciju HTTP metoda.
{{/unless}}

{{#isPost}}

### Šta je novo

Ranije je postojala dodatna prepreka za podešavanje Webhook-a u poređenju sa drugim platformama. Smatrali smo to dobrom stvari
zbog dodatnih mera sigurnosti koje su bile potrebne, međutim, nedavno smo se odlučili za mehanizam koji je jednako siguran,
ali koji je opcioni.

### Prethodno ponašanje

Ranije je sistem prenosio vaš API ključ u sadržaju i očekivao da ga verifikujete. Ako ne biste vratili 401
za nevažeći API ključ, sistem ne bi dozvoljavao podešavanje.

### Novo ponašanje

Sada, sistem neće prenositi API ključ za nova podešavanja webhook-a. Umesto toga, za nova i postojeća integrisanja
uključen je potpisani HMAC. Možda ćete želeti ili ne želite da verifikujete ovaj potpis, u zavisnosti od nivoa
bezbednosti koji je potreban.

Postojeća podešavanja će i dalje prenositi API ključ - sada možete zatražiti da se to isključi putem zahteva za podršku.

### Verifikacija HMAC potpisa

FastComments sada šalje sledeće zaglavlja sa svakim webhook zahtevom:

| Zaglavlje | Opis |
|-----------|------|
| `X-FastComments-Timestamp` | Unix vremenska oznaka (sekunde) kada je zahtev potpisan |
| `X-FastComments-Signature` | HMAC-SHA256 potpis u formatu `sha256=<hex>` |
| `token` | Vaša API tajna (čuvana radi unazadne kompatibilnosti) |

#### Kako se potpis obračunava

1. Konkatenujte: `timestamp + "." + JSON_payload_body`
2. Izračunajte HMAC-SHA256 koristeći vašu API tajnu kao ključ
3. Hex-encode rezultat

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

    # Proverite da li je vremenska oznaka nedavna
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Proverite potpis
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

Pored toga, uključeno u ovo ažuriranje - sada možete konfigurisati HTTP metodu za svaku vrstu događaja webhook-a:

- **Kreiraj događaj**: POST ili PUT (podrazumevano: PUT)
- **Ažuriraj događaj**: POST ili PUT (podrazumevano: PUT)
- **Obriši događaj**: DELETE, POST, ili PUT (podrazumevano: DELETE)

### Prednosti sigurnosti

Novi sistem ima nekoliko prednosti:

- Zaštita od napada "man-in-the-middle"
- Prevencija ponovljenih napada putem provere vremenskih oznaka
- Otkrivanje manipulacije sadržajem

### Unazad kompatibilnost

Zaglavlje `token` koje sadrži vašu API tajnu i dalje se šalje sa svakim zahtevom. Postojeće integracije će nastaviti da rade bez modifikacije, i kao
što je ranije pomenuto, možete zatražiti da se staro ponašanje isključi putem podrške.

### Dokumentacija

Za kompletnu dokumentaciju, pogledajte našu [Vodilicu za Webhook-e](https://docs.fastcomments.com/guide-webhooks.html).

### Na kraju

Kao i svi veliki izdanja, drago nam je da smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih izmena. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---