---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Aggiornamento sulla Sicurezza dei Webhook[/postlink]

{{#unless isPost}}
I webhook di FastComments ora includono firme HMAC-SHA256 per la verifica del payload, oltre a una nuova selezione del metodo HTTP.
{{/unless}}

{{#isPost}}

### Cosa c'è di Nuovo

In precedenza c'era una maggiore frizione nella configurazione dei Webhook rispetto ad altre piattaforme. Abbiamo considerato questo un aspetto positivo
a causa delle misure di sicurezza aggiuntive richieste, tuttavia abbiamo recentemente trovato un meccanismo che è altrettanto sicuro
ma con sicurezza opt-in.

### Comportamento Precedente

In precedenza, il sistema passava la tua chiave API nei payload e si aspettava che tu la validassi. Se non restituivi un 401
per una chiave API non valida, il sistema non permetteva la configurazione.

### Nuovo Comportamento

Ora, il sistema non passerà una chiave API per le nuove configurazioni di webhook. Invece, per integrazioni nuove ed esistenti
è inclusa una firma HMAC firmata. Puoi scegliere di validare o meno questa firma, a seconda del livello
di sicurezza richiesto.

Le configurazioni esistenti continueranno a passare la chiave API - puoi ora richiedere di disattivarlo tramite un ticket di supporto.

### Verifica della Firma HMAC

FastComments ora invia i seguenti header con ogni richiesta webhook:

| Header | Descrizione |
|--------|-------------|
| `X-FastComments-Timestamp` | Timestamp Unix (secondi) in cui la richiesta è stata firmata |
| `X-FastComments-Signature` | Firma HMAC-SHA256 nel formato `sha256=<hex>` |
| `token` | Il tuo API Secret (mantenuto per compatibilità retroattiva) |

#### Come viene Calcolata la Firma

1. Concatenare: `timestamp + "." + JSON_payload_body`
2. Calcolare HMAC-SHA256 utilizzando il tuo API Secret come chiave
3. Codificare il risultato in esadecimale

#### Esempio di Verifica (Python)

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

    # Verifica che il timestamp sia recente
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verifica la firma
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Selezione del Metodo HTTP

Inoltre, incluso in questo aggiornamento - ora puoi configurare il metodo HTTP per ciascun tipo di evento webhook:

- **Crea Evento**: POST o PUT (predefinito: PUT)
- **Aggiorna Evento**: POST o PUT (predefinito: PUT)
- **Elimina Evento**: DELETE, POST o PUT (predefinito: DELETE)

### Vantaggi di Sicurezza

Il nuovo sistema ha alcuni vantaggi:

- Protezione contro attacchi man-in-the-middle
- Prevenzione degli attacchi di replay tramite verifica del timestamp
- Rilevamento della manomissione del payload

### Compatibilità Retroattiva

L'header `token` contenente il tuo API Secret è ancora inviato con ogni richiesta. Le integrazioni esistenti continueranno a funzionare senza modifiche e, come
già accennato, puoi richiedere di disattivare il vecchio comportamento tramite supporto.

### Documentazione

Per la documentazione completa, consulta la nostra [Guida ai Webhook](https://docs.fastcomments.com/guide-webhooks.html).

### In Conclusione

Come tutti i principali rilasci, siamo felici di aver potuto dedicare tempo per ottimizzare, testare e rilasciare correttamente queste modifiche. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---