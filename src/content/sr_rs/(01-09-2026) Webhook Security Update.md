[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Ажурирање безбедности вебхука[/postlink]

{{#unless isPost}}
FastComments вебхукови сада укључују HMAC-SHA256 потписе за верификацију полезног терета, као и нови избор HTTP методе.
{{/unless}}

{{#isPost}}

### Шта је ново

Претходно, систем је прослеђивао ваш API кључ у полезним теретима и очекивао да га верификујете. Ако нисте вратили 401 за неважећи API кључ, систем није дозволио постављање.

### Претходно понашање

Сада, систем неће прослеђивати API кључ за нове конфигурације вебхука. Уместо тога, за нове и постојеће интеграције укључује се потписани HMAC потпис. Можете, али и не морате, верификовати овај потпис, у зависности од нивоа безбедности који је потребан.

Постојеће конфигурације ће и даље прослеђивати API кључ – сада можете затражити да се ово искључи путем тикета за подршку.

### Верификација HMAC потписа

FastComments сада шаље следећа заглавља са сваким захтевом вебхука:

| Заглавље | Опис |
|--------|-------------|
| `X-FastComments-Timestamp` | Unix временска ознака (секунде) када је захтев потписан |
| `X-FastComments-Signature` | HMAC-SHA256 потпис у формату `sha256=<hex>` |
| `token` | Ваш API Secret (задржан за уназадну компатибилност) |

#### Како се израчунава потпис

1. Конкатенирајте: `timestamp + "." + JSON_payload_body`
2. Израчунате HMAC-SHA256 користећи ваш API Secret као кључ
3. Хекс-енкодујте резултат

#### Пример верификације (Python)

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

    # Verify timestamp is recent
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Verify signature
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Избор HTTP методе

Додатно, уз ово ажурирање – сада можете конфигурисати HTTP метод за сваку врсту догађаја вебхука:

- **Create Event**: POST или PUT (подразумевано: PUT)
- **Update Event**: POST или PUT (подразумевано: PUT)
- **Delete Event**: DELETE, POST или PUT (подразумевано: DELETE)

### Безбедносне предности

- Заштита од напада мана-у-мидл
- Спречавање replay напада путем верификације временске ознаке
- Откривање манипулације полезним теретом

### Уназадна компатибилност

`token` заглавље које садржи ваш API Secret и даље се шаље са сваким захтевом. Постојеће интеграције ће наставити да раде без измена, а као што је раније поменуто, можете затражити искључење старог понашања преко подршке.

### Документација

За потпуну документацију, погледајте наш [Webhooks Guide](https://docs.fastcomments.com/guide-webhooks.html).

### У закључку

Као и свака велика издања, радује нас што смо успели да одвојимо време за оптимизацију, тестирање и правилно пуштање ових измена. Јавите нам у наставку ако откријете било какве проблеме.

Поздрав!

{{/isPost}}

---