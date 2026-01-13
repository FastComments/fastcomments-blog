---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Yeni ChatGPT 4 Tabanlı Spam Filtresi.[/postlink]

{{#unless isPost}}
FastComments, spam filtreleme seçenekleri listesine yeni bir eklenti daha ekliyor.
{{/unless}}

{{#isPost}}

### Yeni Olanlar

FastComments, Naïve-Bayes spam sınıflandırıcısını geliştirmeye devam ediyor, ancak spam dedektörleri filosuna yeni bir seçenek ekledik.

Artık OpenAI tarafından sağlanan ChatGPT 4 kullanarak spam tespit edebilirsiniz.

### Edinme

Hangi spam dedektörünü kullanacağınızı yapılandırmak için yönetici panelinizdeki Moderasyon Ayarları sayfasını kontrol edin. GPT4 tabanlı spam dedektörü, her `1000` token için `$0.08` olarak faturalandırılmaktadır.

Bu spam dedektörü sadece Flex planında olan müşteriler için mevcuttur, çünkü kullanılan tokenlere göre faturalandırılır.

### Optimizasyonlar

Tüm içeriği önce paylaşılan Naïve-Bayes sınıflandırıcısından geçiriyoruz, böylece OpenAI'a yapılan çağrıları sınırlandırıyoruz. Bu, belirgin spam için size tasarruf sağlar. Daha gizli spamlar için, içeriğin spam gibi görünüp görünmediğini kontrol etmek üzere OpenAI ile iletişime geçiyoruz.

### Sonuçlar

Bu özelliği etkinleştiren topluluklarda hemen iyileşmeler gözlemledik.

### Dokümantasyon

Bu, yönetici panelinizdeki Moderasyon Ayarları sayfası aracılığıyla ayarlanabilir.

[Dökümantasyona buradan da ulaşabilirsiniz](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Sonuç Olarak

Bize sürekli geri bildirimde bulunan müşterilerimize teşekkür ederiz, böylece böyle fikirler geliştirebiliriz. FastComments'ı sevmeye devam edeceğinizi umuyoruz.

Sağlıkla! 

{{/isPost}}