---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Aktualizacja Bezpieczeństwa Webhooków[/postlink]

{{#unless isPost}}
Webhooki FastComments teraz zawierają podpisy HMAC-SHA256 do weryfikacji ładunków, a także nową selekcję metod HTTP.
{{/unless}}

{{#isPost}}

### Co nowego

Wcześniej konfigurowanie Webhooków wiązało się z dodatkowym oporem w porównaniu do innych platform. Uważaliśmy to za dobrą rzecz
ze względu na dodatkowe środki bezpieczeństwa, które były wymagane, jednak ostatnio ustaliliśmy mechanizm, który jest równie bezpieczny,
ale bezpieczeństwo jest opcjonalne.

### Poprzednie zachowanie

Wcześniej system przekazywał Twój klucz API w ładunkach i oczekiwał, że go zweryfikujesz. Jeśli nie zwróciłeś 401
dla nieprawidłowego klucza API, system nie pozwalał na konfigurację.

### Nowe zachowanie

Teraz system nie będzie przekazywał klucza API dla nowych konfiguracji webhooków. Zamiast tego, dla nowych i istniejących integracji
zawarty jest podpis HMAC. Możesz zdecydować, czy chcesz weryfikować ten podpis, w zależności od wymaganego poziomu
bezpieczeństwa.

Istniejące konfiguracje nadal będą przekazywać klucz API - teraz możesz poprosić o wyłączenie tej opcji za pośrednictwem zgłoszenia wsparcia.

### Weryfikacja podpisu HMAC

FastComments teraz wysyła następujące nagłówki z każdą prośbą webhook:

| Nagłówek | Opis |
|----------|------|
| `X-FastComments-Timestamp` | Znacznik czasu Unix (sekundy), kiedy żądanie zostało podpisane |
| `X-FastComments-Signature` | Podpis HMAC-SHA256 w formacie `sha256=<hex>` |
| `token` | Twój sekret API (zachowany dla kompatybilności) |

#### Jak obliczany jest podpis

1. Połącz: `timestamp + "." + JSON_payload_body`
2. Oblicz HMAC-SHA256 używając swojego sekretu API jako klucza
3. Zakoduj wynik w formacie hex

#### Przykład weryfikacji (Python)

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

    # Weryfikacja, czy znacznik czasu jest aktualny
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Weryfikacja podpisu
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Selekcja metody HTTP

Dodatkowo, w ramach tej aktualizacji - możesz teraz skonfigurować metodę HTTP dla każdego typu zdarzenia webhook:

- **Zdarzenie Utworzenia**: POST lub PUT (domyślnie: PUT)
- **Zdarzenie Aktualizacji**: POST lub PUT (domyślnie: PUT)
- **Zdarzenie Usunięcia**: DELETE, POST lub PUT (domyślnie: DELETE)

### Korzyści związane z bezpieczeństwem

Nowy system ma kilka korzyści:

- Ochrona przed atakami typu man-in-the-middle
- Zapobieganie atakom powtórzeniowym za pomocą weryfikacji znacznika czasu
- Wykrywanie manipulacji ładunkiem

### Kompatybilność wsteczna

Nagłówek `token` zawierający Twój sekret API nadal jest wysyłany z każdą prośbą. Istniejące integracje będą nadal działać bez modyfikacji, a jak
wcześniej wspomniano, możesz poprosić o wyłączenie starego zachowania za pośrednictwem wsparcia.

### Dokumentacja

Aby uzyskać pełną dokumentację, zobacz nasz [Przewodnik po Webhookach](https://docs.fastcomments.com/guide-webhooks.html).

### Podsumowując

Jak przy wszystkich większych wydaniach, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tych zmian. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---