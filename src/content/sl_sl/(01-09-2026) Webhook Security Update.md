---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Posodobitev varnosti webhookov[/postlink]

{{#unless isPost}}
Webhooki FastComments zdaj vključujejo HMAC-SHA256 podpise za overjanje payloada, poleg nove izbire HTTP metod.
{{/unless}}

{{#isPost}}

### Kaj je novega

Prej je bilo za nastavitev webhookov več trenja v primerjavi z drugimi platformami. To smo smatrali za dobro stvar zaradi dodatnih varnostnih ukrepov, ki so bili potrebni, vendar smo se nedavno odločili za mehanizem, ki je prav tako varen, vendar je ta varnost izbirna.

### Prejšnje obnašanje

Prej je sistem posredoval vaš API ključ v payloadih in pričakoval, da ga boste validirali. Če niste vrnili 401 za neveljavni API ključ, sistem ni dovolil nastavitve.

### Novo obnašanje

Zdaj sistem ne bo posredoval API ključa za nove konfiguracije webhookov. Namesto tega bo za nove in obstoječe integracije priložen podpisan HMAC. Morda boste želeli ali pa ne boste želeli validirati tega podpisa, odvisno od vašega zahtevanega nivoja varnosti.

Obstoječe konfiguracije bodo še naprej posredovale API ključ - zdaj lahko zahtevate, da to izklopite prek podpore.

### Overjanje HMAC podpisa

FastComments zdaj pošilja naslednje glave z vsakim zahtevkom za webhook:

| Glava | Opis |
|--------|-------------|
| `X-FastComments-Timestamp` | Unix časovni žig (sekunde), ko je bila zahteva podpisana |
| `X-FastComments-Signature` | HMAC-SHA256 podpis v formatu `sha256=<hex>` |
| `token` | Vaša API skrivnost (ohranjena za združljivost) |

#### Kako se izračuna podpis

1. Konkatenirajte: `timestamp + "." + JSON_payload_body`
2. Izračunajte HMAC-SHA256 z vašo API skrivnostjo kot ključno
3. Rezultat pretvorite v hex

#### Primer overjanja (Python)

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

    # Preverite, da je časovni žig nedaven
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Preverite podpis
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Izbor HTTP metode

Poleg tega, kar je vključeno v to posodobitev - zdaj lahko konfigurirate HTTP metodo za vsak tip dogodka webhooka:

- **Ustvari dogodek**: POST ali PUT (privzeto: PUT)
- **Posodobi dogodek**: POST ali PUT (privzeto: PUT)
- **Izbriši dogodek**: DELETE, POST ali PUT (privzeto: DELETE)

### Varnostne prednosti

Nov sistem ima nekaj prednosti:

- Zaščita pred napadi "man-in-the-middle"
- Preprečevanje napadov ponovitev preko preverjanja časovnega žiga
- Zaznavanje zlorab payloada

### Združljivost nazaj

Glava `token`, ki vsebuje vašo API skrivnost, se še vedno pošilja z vsako zahtevo. Obstoječe integracije bodo še naprej delovale brez sprememb, in kot je bilo omenjeno, lahko zahtevate, da izklopite staro obnašanje prek podpore.

### Dokumentacija

Za popolno dokumentacijo si oglejte naš [Vodnik po Webhookih](https://docs.fastcomments.com/guide-webhooks.html).

### V zaključku

Kot pri vseh večjih izdajah, smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo teh sprememb. Sporočite nam spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}

---