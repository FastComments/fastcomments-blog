---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Beyaz Etiketleme[/postlink]

{{#unless isPost}}
Beyaz Etiketleme, tam API entegrasyonu ve otomasyon araçları ile birlikte FastComments'a geliyor.
{{/unless}}

{{#isPost}}

## Yenilikler

FastComments artık Beyaz Etiketleme aracılığıyla diğer uygulamalar ve üçüncü taraf satıcılarla entegre olabilir. Beyaz Etiketleme, FastComments hesapları (tenants olarak adlandırılır), kullanıcılar, moderatörler ve daha fazlasını oluşturmanıza olanak tanır.

Artık üçüncü taraflarla entegrasyonu otomatikleştirmek için [kapsamlı bir API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) sunuyoruz.

API aracılığıyla artık şunları yapabilirsiniz:

- Tenant'ınız tarafından yönetilen müşteri (çocuk tenant'lar) oluşturun.
- Müşterilerinize sunulan paketleri yönetin ve faturalandırmayı nasıl yapacağınızı belirleyin.
- Yönetilen tenant'larınızda kullanıcılar ekleyin ve yönetin.
- Yönetilen tenant'larınızda moderatörler ekleyin ve yönetin.
- Moderatörleri davet edin ve tenant kullanıcılarına giriş bağlantıları gönderin.

## Faturalandırma

Faturalandırma ile iki seçenek bulunmaktadır:

1. FastComments Flex aracılığıyla, çocuk tenant'larınızın kullanımı otomatik olarak sarılır ve ana tenant'a faturalandırılır. Bu, [Faturalandırma Analizi Sayfası](https://fastcomments.com/auth/my-account/analytics/billing) aracılığıyla izlenebilir.
2. FastComments Pro aracılığıyla, sabit bir aylık ücret karşılığında sabit sayıda çocuk tenant oluşturma erişimi alırsınız.

## Markasızlaştırma

Yönetilen tenant'lar, yorum widget'ından logolarımızın kaldırılmasını sağlayan markasızlaştırma etkinleştirilebilir.

## Beyaz Etiketleme Nasıl Alınır

Şu anda, FastComments Flex ve Pro planları Beyaz Etiketleme API'sine erişim sunmaktadır.

## Scriptler ve Örnekler

Kullanıcılar ve moderatörler ile bir tenant kurmak için API'yi kullanan bir örnek script [burada mevcuttur](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Kapsamlı Doğrulama

Her API kaynağı, bunları doğru bir şekilde kullanmanıza yardımcı olacak kapsamlı doğrulamalar ve kısıtlamalar ile birlikte yararlı hata mesajları içerir.

<div class="code"><div class="title">Detaylı Hata Örneği</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "O id'nin sahibi bir kullanıcı bu tenant'ta mevcut değil. Önce kullanıcıyı oluşturun ve sonra onu moderatör yapın.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Diğer Kullanım Senaryoları

[tenant kullanıcıları](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) ve [moderatörler](https://docs.fastcomments.com/guide-api.html#moderator-structure) API'leri, beyaz etiketleme durumundan bağımsız olarak, kendi tenant'ınızdaki bu kaynakları eklemek ve yönetmek için de kullanılabilir.

## Dokümantasyon

Beyaz Etiketleme'nin tam dokümantasyonunu ve API'yi nasıl kullanacağınızı [burada](https://docs.fastcomments.com/guide-white-labeling.html) bulabilirsiniz.

## Sonuç Olarak

Bu güncellemeyi ve dokümantasyonunu faydalı bulduğunuzu umuyoruz. Entegrasyonlarınızda başarılar dileriz!

{{/isPost}}


---