---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Üretilmiş Tür Güvenli İstemci SDK'ları Yayınlandı[/postlink]

{{#unless isPost}}
TypeScript geçiş yazımızda belirtildiği gibi, on programlama dili için üretilmiş, tür güvenli istemci SDK'larını yayınladık.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçermektedir

### Yeni Nedir

[TypeScript geçiş yazımızda](/blog/fastcomments-typescript-migration-completed) üretilmiş istemci SDK'larının geldiğini belirtmiştik. İşte burada.

FastComments artık **on dil** için resmi, tür güvenli SDK'lar sunuyor:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modülleri)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Paket Yöneticisi)
- C++ (CMake)
- Nim (Nimble)

Her SDK, sunucumuzun ürettiği aynı OpenAPI spesifikasyonundan üretilmiştir. Türler, yöntem imzaları ve istek/yanıt modelleri otomatik olarak gerçek API ile senkronize kalır. Derleyiciniz, kodunuz bir ağ isteği yapmadan önce alan adı yazım hatalarını ve eksik parametreleri yakalar.

### Nasıl Çalışır

TypeScript geçişi bunun için bir ön koşuldu. Sunucu kodumuz tamamen tipleştikten sonra, [TSOA'nın çatalımızı](https://github.com/FastComments/tsoa) kullanarak rota denetleyicilerimizden doğrudan bir OpenAPI 3.0 spesifikasyonu üretiyoruz. Bu spesifikasyon, her dil için istemci kütüphaneleri üretmek amacıyla [OpenAPI üreticisinde](https://openapi-generator.tech/) kullanılır.

API değiştiğinde, araçlarımız spesifikasyondaki farkı tespit eder, etkilenen SDK'ları yeniden üretir, her dil için testler çalıştırır ve otomatik olarak çekme istekleri açar. Tüm on depo arasında güncelleme-test-piyasaya sürme döngüsünü düzenleyen küçük bir yöneticimsi araç geliştirdik.

### Her SDK'da Neler Var

Her SDK, iki API sınıfı sunar:

- **`DefaultApi`**: API anahtarınızı gerektiren kimlik doğrulamalı uç noktalar. Bunları moderasyon, kullanıcı yönetimi, analiz ve toplu işlemler için sunucu tarafında kullanın.
- **`PublicApi`**: tarayıcılardan ve mobil uygulamalardan çağrılmak için güvenli olan kimlik doğrulamasız uç noktalar. Bu, yorum alma, gönderme, oylama ve diğer istemciyle etkileşimli işlemleri kapsar.

Tüm SDK'lar, mevcut kimlik doğrulama sisteminizle entegrasyon için SSO yardımcı programları da içermektedir. TypeScript SDK, ayrıca canlı yorumlama için gerçek zamanlı olay abonelikleri sağlar.

### Belgeler

Tam API belgeleri [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html) adresinde mevcuttur. Her SDK deposu, mevcut her yöntem ve modeli kapsayan üretilmiş belgeleri de içerir.

SSO entegrasyonu için, lütfen [SSO kılavuzumuza](https://docs.fastcomments.com/guide-sso.html) bakın. Tüm on SDK, yerel kriptografi kütüphanelerini kullanarak SSO yardımcı programlarını içermektedir.

### Sonuç Olarak

Tamamen tipleştirilmiş bir sunucuya sahip olmak, güvenilir bir OpenAPI spesifikasyonu üretmeyi kolaylaştırdı ve buradan on (ve bir gün daha fazla!) dil için istemciler üretmek, çoğunlukla otomasyonu inşa etmek ve daha fazla soyutlama eklemeden, FastComments'ın yavaşlamasını sağlamak için tür tanımlarımızı iyileştirmek meselesiydi!

Tüm büyük sürümlerde olduğu gibi, bu SDK'ları optimize etmek, test etmek ve doğru bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda bize herhangi bir geri bildirimde bulunmaktan veya eklememizi istediğiniz bir dil varsa bildirin.

Şerefe!

{{/isPost}}

---

---