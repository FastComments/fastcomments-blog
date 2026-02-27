---
[category:Features]
[category:Announcements]
###### [postdate]
# [postlink]E-posta Bildirim Sıklığı Güncellemesi[/postlink]

{{#unless isPost}}
Kullanıcılar artık yeni yorumlar ve cevaplar için ne sıklıkla e-posta bildirimleri alacaklarını kontrol edebilirler; her dakika, saatlik özet veya günlük özet seçenekleriyle, cevap ve yönetici bildirimleri için ayrı ayarlar ve her abonelik için özel geçersiz kılmalar ile.
{{/unless}}

{{#isPost}}

### Yenilikler

**Cevap Bildirim Sıklığı** ve **Yönetici Bildirim Sıklığı** ayarlarını ekledik; bu ayarlar sırasıyla cevaplar ve yeni yorumlar için e-posta bildirimlerinizi ne sıklıkla alacağınızı kontrol eder. Her biri için üç seçenek mevcuttur:

- **Her dakika** - yeni yorumlar geldiğinde hemen bir e-posta alın (her dakika kontrol edilir).
- **Saatlik özet** - yeni yorumların bir saatlik özetini bir kez alırsınız.
- **Günlük özet** - yeni yorumların bir günlük özetini bir kez alırsınız.

Cevap Bildirim Sıklığı tüm kullanıcılar için mevcuttur ve varsayılan olarak **Her dakika** olarak ayarlanmıştır. Yönetici Bildirim Sıklığı, site yöneticileri için mevcuttur ve varsayılan olarak **Saatlik özet** olarak ayarlanmıştır. @mention bildirimlerinin bu ayarlara bakılmaksızın her zaman hemen gönderildiğini unutmayın.

Bireysel sayfalar için daha ayrıntılı kontrol sağlamak adına, Abonelikler tablosunda her abonelik için sıklığı da geçersiz kılabilirsiniz.

### Nasıl Yapılır

1. [Bildirim Ayarları](https://fastcomments.com/auth/my-account/edit-notifications) sayfasına gidin.
2. Tercih ettiğiniz sıklıkları ayarlamak için **Cevap Bildirim Sıklığı** ve **Yönetici Bildirim Sıklığı** açılır menülerini kullanın.
3. İsteğe bağlı olarak, Abonelikler tablosunda bireysel abonelikler için sıklığı geçersiz kılın.
4. **Değişiklikleri Kaydet** butonuna tıklayın.

### API Desteği

Kullanıcı nesnesindeki `notificationFrequency` alanı, cevap bildirim sıklığını kontrol ederken, `adminNotificationFrequency` alanı yönetici bildirim sıklığını kontrol eder. Her abonelik için geçersiz kılmalar, aboneliğin `notificationFrequency` alanı aracılığıyla ayarlanabilir. Detaylar için [API belgelerine](https://docs.fastcomments.com/guide-api.html) bakın.

### Sonuç Olarak

Bu, kullanıcılara kutularını tamamen abone olmaktan çıkarma zorunluluğu olmadan kontrol sağlar.

Aşağıda herhangi bir geri bildiriminiz varsa bize bildirin!

Selamlar!

{{/isPost}}

---