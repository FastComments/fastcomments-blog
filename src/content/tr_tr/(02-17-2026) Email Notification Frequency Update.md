---
[category:Özellikler]
[category:Duyurular]
###### [postdate]
# [postlink]Email Bildirim Sıklığı Güncellemesi[/postlink]

{{#unless isPost}}
Kullanıcılar artık yeni yorumlar ve cevaplar için e-posta bildirimlerini ne sıklıkla alacaklarını kontrol edebilir; her dakika, saatlik özet veya günlük özet ile, tek bir ortak ayar ile, ayrıca abonelik bazında geçersiz kılmalar yapabilir.
{{/unless}}

{{#isPost}}

### Yeni Neler Var

Yeni bir **Yeni Yorum Bildirim Sıklığı** ayarı ekledik, bu ayar cevap bildirimleri ve kiracı (yeni yorum) bildirimleri için e-posta bildirimlerini ne sıklıkla alacağınızı kontrol eder. Üç seçenek mevcuttur:

- **Her dakika** - yeni yorumlar geldiğinde hemen e-posta alın (her dakika kontrol edilir).
- **Saatlik özet** - her saat yeni yorumların toplu özetini alın.
- **Günlük özet** - her gün yeni yorumların toplu özetini alın.

Bu ayar hem kiracı yöneticileri hem de yorumcular için geçerlidir ve tüm yorum bildirim e-postalarına uygulanır. Bu ayara rağmen @mention bildirimlerinin her zaman hemen gönderildiğini unutmayın.

Ayrıca, bireysel sayfalar üzerinde ince ayar yapmak için Abonelikler tablosunda her abonelik bazında sıklığı geçersiz kılabilirsiniz.

### Nasıl Yapılandırılır

1. [Bildirim Ayarları](https://fastcomments.com/auth/my-account/edit-notifications) sayfasına gidin.
2. Tercih ettiğiniz sıklığı ayarlamak için **Yeni Yorum Bildirim Sıklığı** açılır menüsünü kullanın.
3. İsteğe bağlı olarak, Abonelikler tablosunda bireysel abonelikler için sıklığı geçersiz kılın.
4. **Değişiklikleri Kaydet**’e tıklayın.

Varsayılan ayar **Her dakika** olup, önceki davranışa eşdeğerdir.

### API Desteği

Bildirim sıklığı API üzerinden de mevcuttur. Kullanıcı seviyesi ayarı `notificationFrequency` alanıdır ve abonelik bazında geçersiz kılmalar, aboneliğin `notificationFrequency` alanı aracılığıyla ayarlanabilir. Detaylar için [API belgelerine](https://docs.fastcomments.com/guide-api.html) bakın.

### Sonuç Olarak

Bu, kullanıcıların posta kutularını kontrol etmesine olanak tanır ve sayfalardan tamamen abonelikten çıkmalarına gerek kalmaz. Artık tek bir ayar, hem yanıt hem de kiracı bildirimlerini kapsar, yönetimi daha basit hale getirir.

Aşağıda geri bildirimleriniz varsa lütfen bize bildirin!

Şerefe!

{{/isPost}}

---