---
[category:Özellikler]
###### [postdate]
# [postlink]Abonelikler İçin Bildirim E-posta'ları Aktif Hale Geldi[/postlink]

{{#unless isPost}}
FastComments artık kullanıcılara abone oldukları sayfalar için e-posta gönderiyor.
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments ile kullanıcılar, bir yorum widget'ında bulunan zil simgesine tıklayarak o sayfaya abone olabilirler. Yeni yorumlar bırakıldığında veya bir yanıtlama dizisinde yeni bir yorum olduğunda onları bilgilendireceğiz.

Bunu yıllardır yapıyoruz, ancak bu bildirimler için e-posta göndermiyorduk - yalnızca panelimizde görünürlerdi.

Artık bu bildirimler için e-posta göndereceğiz.

### Yeni E-posta Türleri

Artık iki yeni tür e-posta gönderiyoruz. İlk olarak, yalnızca birkaç bildirim aldığınızda. E-postada yeni yorumları sizin için listeleyeceğiz.

Aldığınız e-posta türü, bildirim aldığınız her sayfaya bağlantılar içerecektir. Bu, birçok bildirim aldığınızda gönderilir.

Bu bildirim e-postaları yalnızca abone olduğunuz sayfalardaki yeni yorumlar içindir.

### E-posta Bildirim Takvimi

Bildirimin e-postaları fazla e-posta göndermemek için her saatte bir gönderilir. İstisna, söz konusu sayfanın on binin üzerinde yoruma sahip olması durumudur, bu durumda o sayfa için bildirimleri günde bir kez göndereceğiz.

### Site Sahipleri İçin - E-postaları Özelleştirme

Yeni `Yeni Abone Yorumları` e-posta şablonu yakında özelleştirme için mevcut olacak.

### Geliştiriciler ve Dikkat Edilmesi Gerekenler

SSO Kullanıcıları için, varsayılan olarak bildirim e-postalarını göndermeyeceğiz. Bu yeni bildirimleri etkinleştirmek için kullanıcı nesnesinde veya yorum widget'ına gönderilen yüklemede yeni bir bayrak geçmeniz gerekecek: `optedInSubscriptionNotifications: true`.

### Sonuç Olarak

Tüm büyük sürümler gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorunla karşılaşırsanız bize bildirin.

Sağlıkla!

{{/isPost}}

---