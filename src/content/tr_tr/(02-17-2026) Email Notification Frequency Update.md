---
[category:Özellikler]
[category:Duyurular]
###### [postdate]
# [postlink]E-posta Bildirim Sıklığı Güncellemesi[/postlink]

{{#unless isPost}}
Kullanıcılar artık yeni yorumlar ve cevaplar için e-posta bildirimlerini ne sıklıkla alacaklarını — her dakika, saatlik özet veya günlük özet — tek bir ortak ayar ile kontrol edebiliyorlar; ayrıca her abonelik için farklı ayar yapma imkanı da var.
{{/unless}}

{{#isPost}}

### Yenilikler

Cevap bildirimleri ve kiracı (yeni yorum) bildirimleri için e-posta bildirimlerini ne sıklıkla alacağınızı kontrol eden **Yeni Yorum Bildirim Sıklığı** ayarını ekledik. Üç seçenek bulunmaktadır:

- **Her dakika** - yeni yorumlar geldiği anda e-posta alın (her dakika kontrol edilir).
- **Saatlik özet** - her saat başı yeni yorumların toplu özeti alın.
- **Günlük özet** - her gün yeni yorumların toplu özeti alın.

Bu ayar, hem kiracı yöneticilerine hem de yorumculara açıktır ve tüm yorum bildirim e-postalarına uygulanır. Bu ayar ile ilgili olarak @mention bildirimlerinin her zaman hemen gönderildiğini unutmayın.

Ayrıca, bireysel sayfalar için daha ayrıntılı kontrol sağlamak adına Abonelikler tablosunda her bir abonelik için sıklığı değiştirebilirsiniz.

### Nasıl Yapılandırılır

1. [Bildirim Ayarları](https://fastcomments.com/auth/my-account/edit-notifications) sayfasına gidin.
2. Tercih ettiğiniz sıklığı ayarlamak için **Yeni Yorum Bildirim Sıklığı** açılır menüsünü kullanın.
3. İsteğe bağlı olarak, Abonelikler tablosunda bireysel abonelikler için sıklığı geçersiz kılın.
4. **Değişiklikleri Kaydet** butonuna tıklayın.

Varsayılan ayar **Her dakika**dır ve önceden mevcut olan davranışı yansıtmaktadır.

### API Desteği

Bildirim sıklığı ayrıca API aracılığıyla da kullanılabilir. Kullanıcı düzeyindeki ayar <div class="code">notificationFrequency</div> alanıdır ve her bir abonelik için geçersiz kılmalar, aboneliğin <div class="code">notificationFrequency</div> alanı aracılığıyla ayarlanabilir. Ayrıntılar için [API belgelerine](https://docs.fastcomments.com/guide-api.html) bakın.

### Sonuç

Bu, kullanıcıların kutularını kontrol etmelerini sağlar ve sayfalardan tamamen aboneliği iptal etme ihtiyacını ortadan kaldırır. Tek bir ayar, hem cevap hem de kiracı bildirimlerini kapsayarak yönetimi daha basit hale getirir.

Aşağıda geri bildirimlerinizi bize iletin!

Sağlıcakla!

{{/isPost}}