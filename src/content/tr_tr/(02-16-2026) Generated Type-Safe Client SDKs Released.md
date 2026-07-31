---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
TypeScript geçiş gönderimizde ipucu verdiğimiz gibi, on programlama dili için oluşturulmuş, tip güvenli istemci SDK'larını yayınladık.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Jargon İçerir

### Neler Yeni

Bizim [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-tr_tr.html) gönderimizde, oluşturulmuş istemci SDK'larının geleceğini belirtmiştik. İşte burada.

FastComments artık resmi, tip güvenli SDK'ları **on dil** için sunuyor:

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Her SDK, sunucumuzun ürettiği aynı OpenAPI spesifikasyonundan oluşturulur. Tipler, metod imzaları ve istek/yanıt modelleri gerçek API ile otomatik olarak senkronize kalır. Derleyiciniz, kodunuzun ağ isteği yapmadan önce alan adı yazım hatalarını ve eksik parametreleri yakalar.

### Nasıl Çalışır

TypeScript geçişi bunun için bir ön koşuldı. Sunucu kodumuz tamamen tiplenmiş olduğundan, [our fork of TSOA](https://github.com/FastComments/tsoa) kullanarak OpenAPI 3.0 spesifikasyonunu doğrudan route denetleyicilerimizden oluşturuyoruz. Bu spesifikasyon, her dil için istemci kütüphaneleri üretmek üzere [OpenAPI Generator](https://openapi-generator.tech/) içine beslenir.

API değiştiğinde, araçlarımız spesifikasyondaki farkı algılar, etkilenen SDK'ları yeniden oluşturur, her dil için testleri çalıştırır ve otomatik olarak pull request'ler açar. Tüm on depoyu kapsayan güncelleme-test-sürüm döngüsünü yöneten küçük bir yönetim aracını Nim ile geliştirdik.

### Her SDK'da Neler Var

Her SDK iki API sınıfı sağlar:

- **`DefaultApi`**: API anahtarınızı gerektiren kimlik doğrulamalı uç noktalar. Bunları sunucu tarafında moderasyon, kullanıcı yönetimi, analiz ve toplu işlemler için kullanın.
- **`PublicApi`**: Tarayıcılar ve mobil uygulamalardan güvenle çağrılabilen kimlik doğrulamasız uç noktalar. Bunlar yorumları getirme, gönderme, oy verme ve diğer istemci odaklı işlemleri kapsar.

Tüm SDK'lar ayrıca mevcut kimlik doğrulama sisteminizle entegrasyon için SSO yardımcı araçları içerir. TypeScript SDK'sı ek olarak canlı yorumlama için gerçek zamanlı olay abonelikleri sağlar.

### Dokümantasyon

Tam API dokümantasyonu [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html) adresinde mevcuttur. Her SDK deposu ayrıca mevcut tüm metod ve modeli kapsayan oluşturulmuş dokümanlar içerir.

SSO entegrasyonu için, [SSO guide](https://docs.fastcomments.com/guide-sso.html) sayfamıza bakın. Tüm on SDK, yerel kriptografi kütüphanelerini kullanarak SSO yardımcıları içerir.

### Sonuç

Tam tiplenmiş bir sunucuya sahip olmak, güvenilir bir OpenAPI spesifikasyonu oluşturmayı kolaylaştırdı ve buradan on (ve bir gün daha fazla!) dil için istemciler üretmek, büyük ölçüde otomasyonu kurmak
ve tip tanımlarımızı tüketilebilir hâle getirmekle ilgiliydi; FastComments'i yavaşlatacak fazla soyutlama eklemeden!

Tüm büyük sürümler gibi, bu SDK'ları optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için memnunuz. Bize bildirin
aşağıda herhangi bir geri bildiriminiz varsa veya eklememizi istediğiniz bir dil varsa.

Sağlıcakla!

{{/isPost}}

---

---