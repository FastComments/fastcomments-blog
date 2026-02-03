---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Webhook Güvenlik Güncellemesi[/postlink]

{{#unless isPost}}
FastComments webhooks artık yük doğrulaması için HMAC-SHA256 imzaları ve yeni HTTP yöntem seçimleri içermektedir.
{{/unless}}

{{#isPost}}

### Yenilikler

Önceden, Webhook'ların kurulumu diğer platformlara göre daha fazla zorluk çıkarıyordu. Bunu, ek güvenlik önlemleri gerektirdiği için iyi bir şey olarak düşünüyorduk, ancak son zamanlarda tamamen güvenli ancak isteğe bağlı bir mekanizma üzerinde karar verdik.

### Önceki Davranış

Önceden, sistem API anahtarınızı yüklerde geçiriyor ve bunu doğrulamanızı bekliyordu. Geçersiz bir API anahtarı için 401 döndürmezseniz, sistem kuruluma izin vermiyordu.

### Yeni Davranış

Artık sistem, yeni webhook yapılandırmaları için bir API anahtarı geçmeyecek. Bunun yerine, yeni ve mevcut entegrasyonlar için imzalı bir HMAC imzası dahil edilecektir. Gerekli güvenlik düzeyine bağlı olarak bu imzayı doğrulamak isteyip istemediğinize karar verebilirsiniz.

Mevcut yapılandırmalar API anahtarını geçirmeye devam edecektir - artık bunu kapatmak için bir destek talebinde bulunabilirsiniz.

### HMAC İmza Doğrulaması

FastComments, artık her webhook isteği ile aşağıdaki başlıkları göndermektedir:

| Başlık | Açıklama |
|--------|-------------|
| `X-FastComments-Timestamp` | İsteğin imzalandığı anın Unix zaman damgası (saniye) |
| `X-FastComments-Signature` | `sha256=<hex>` formatında HMAC-SHA256 imzası |
| `token` | API Gizli Anahtarınız (geriye dönük uyumluluk için saklanmıştır) |

#### İmzanın Hesaplanma Şekli

1. Birleştir: `timestamp + "." + JSON_payload_body`
2. Anahtar olarak API Gizli Anahtarınızı kullanarak HMAC-SHA256 hesaplayın
3. Sonucu hex olarak kodlayın

#### Örnek Doğrulama (Python)

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

    # Zaman damgasının güncel olduğunu doğrulayın
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # İmza doğrulaması
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### HTTP Yöntemi Seçimi

Ayrıca, bu güncellemeyle birlikte - artık her webhook olay türü için HTTP yöntemini yapılandırabilirsiniz:

- **Oluşturma Olayı**: POST veya PUT (varsayılan: PUT)
- **Güncelleme Olayı**: POST veya PUT (varsayılan: PUT)
- **Silme Olayı**: DELETE, POST veya PUT (varsayılan: DELETE)

### Güvenlik Avantajları

Yeni sistemin birkaç avantajı vardır:

- Adam ortada saldırılara karşı koruma
- Zaman damgası doğrulaması ile tekrar saldırılarını önleme
- Yük manipülasyonu tespiti

### Geriye Dönük Uyumluluk

API Gizli Anahtarınızı içeren `token` başlığı, her istekte gönderilmeye devam etmektedir. Mevcut entegrasyonlar değişiklik olmadan çalışmaya devam edecek ve daha önce belirtildiği gibi eski davranışı kapatmak için destek talebinde bulunabilirsiniz.

### Belgeler

Tam belgeler için [Webhook Kılavuzumuza](https://docs.fastcomments.com/guide-webhooks.html) bakın.

### Sonuç Olarak

Tüm büyük sürümlerde olduğu gibi, bu değişiklikleri optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfettiyseniz bize bildirin.

Şerefe!

{{/isPost}}

---