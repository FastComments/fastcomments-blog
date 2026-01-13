---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Ažuriranje bezbednosti Webhook-a[/postlink]

{{#unless isPost}}
FastComments webhooks sada uključuju HMAC-SHA256 potpise za verifikaciju tereta, plus novu selekciju HTTP metoda.
{{/unless}}

{{#isPost}}

### Šta je novo

Prethodno je bilo dodatne poteškoće prilikom podešavanja Webhook-ova u poređenju sa drugim platformama. Smatrali smo da je to dobra stvar
zbog dodatnih mera bezbednosti koje su bile potrebne, međutim, nedavno smo se opredelili za mehanizam koji je jednako siguran
ali ta sigurnost je po izboru.

### Prethodno ponašanje

Prethodno je sistem prosleđivao vaš API ključ u teretima i očekivao da ga validirate. Ako niste vratili 401
za nevažeći API ključ, sistem nije dozvoljavao podešavanje.

### Novo ponašanje

Sada, sistem neće proslediti API ključ za nove konfiguracije webhook-a. Umesto toga, za nove i postojeće integracije
uključen je potpisan HMAC potpis. Možda ćete želeti ili ne želeti da validirate ovaj potpis, u zavisnosti od nivoa
bezbednosti koji vam je potreban.

Postojeće konfiguracije će nastaviti da prosledjuju API ključ - sada možete zatražiti da to isključite putem zahteva za podršku.

### Verifikacija HMAC potpisa

FastComments sada šalje sledeće zaglavlja sa svakim webhook zahtevom:

| Zaglavlje | Opis |
|-----------|------|
| `X-FastComments-Timestamp` | Unix vremenska oznaka (sekunde) kada je zahtev potpisan |
| `X-FastComments-Signature` | HMAC-SHA256 potpis u formatu `sha256=<hex>` |
| `token` | Vaš API Tajni ključ (zadržan zbog kompatibilnosti unazad) |

#### Kako se izračunava potpis

1. Spojite: `timestamp + "." + JSON_payload_body`
2. Izračunajte HMAC-SHA256 koristeći vaš API Tajni ključ kao ključ
3. Hex-encodirajte rezultat

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

    # Verifikujte da je vremenska oznaka nedavna
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verifikujte potpis
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Selekcija HTTP metode

Pored toga, uključeno sa ovom ažuriranjem - sada možete konfigurirati HTTP metodu za svaku vrstu webhook događaja:

- **Kreiraj Događaj**: POST ili PUT (podrazumevano: PUT)
- **Ažuriraj Događaj**: POST ili PUT (podrazumevano: PUT)
- **Obriši Događaj**: DELETE, POST ili PUT (podrazumevano: DELETE)

### Prednosti bezbednosti

Novi sistem ima nekoliko prednosti:

- Zaštita od napada "čovek u sredini"
- Prevencija ponovnog napada putem verifikacije vremenske oznake
- Detekcija manipulacije teretom

### Kompatibilnost unazad

Zaglavlje `token` koje sadrži vaš API Tajni ključ i dalje se šalje sa svakim zahtevom. Postojeće integracije će nastaviti da rade bez modifikacije, i kao
što je ranije pomenuto, možete zatražiti da isključite staro ponašanje putem podrške.

### Dokumentacija

Za kompletnu dokumentaciju, pogledajte naš [Vodič za Webhook-ove](https://docs.fastcomments.com/guide-webhooks.html).

### Na kraju

Poput svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ove promene. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---