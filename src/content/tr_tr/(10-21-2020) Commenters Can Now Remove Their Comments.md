---
[category:Features]
###### [postdate]
# [postlink]Yorumcular Artık Yorumlarını Silinebilir[/postlink]

{{#unless isPost}}
Merakla beklenen bir güncelleme, artık FastComments ile bırakılan yorumlarınızı silebilirsiniz.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçermektedir

#### Yeni Olan Nedir

Yeni duyurulduğu gibi - FastComments ile bırakılan yorumlar artık düzenlenebilir - giriş yapıp yapmadığınız fark etmeksizin.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Silme Demo"></video>

Takip eden bir adım olarak, yorumlarınızı silme yeteneği yayınlandı. Anlaşılabilir bir şekilde, yorumlarınızı düzenleme ile aynı şekilde, bu en çok talep edilen özelliklerimizden biri oldu ve kullanıcı tabanımızla bu kilometre taşına ulaşmaktan mutluyuz.

#### Nasıl Çalışır

Yorum silme işlemi, düzenleme ile aynı şekilde çalışır - giriş yapmış kullanıcılar her zaman yorumlarını düzenleyebilir ve silebilir. Anonim yorumcular için, sunucularımız, yorumu bıraktıktan sonra tarayıcılarını kapatmadıkları sürece, yorumu düzenlemeleri veya silmeleri için geçici 24 saatlik bir pencere sağlar. Örneğin, bu, anonim bir yorumcunun yorum yapabileceği ve ardından yazım hatalarını düzeltmek için yorumunu düzenleyebileceği veya silip, hiç giriş yapmadan bunu gerçekleştirebileceği anlamına gelir!

Anonim yorumcu tarayıcısını kapattığında, yalnızca e-postalarına gönderilen sihirli bağlantıya tıklamadıkları sürece, yorumunu düzenleyemez veya silemez.

Ek güvenlik için, geçici düzenleme anahtarı, anahtarı yanlış tahmin etme girişiminde bulunduğunuzda geçersiz hale gelecektir.

#### Bu Kadar Uzun Süre Neden Bekledik?

Bunun nedeni, düzenlemenin neden bu kadar uzun sürdüğü ile aynıdır. FastComments'ın performansını düşürmediğinden emin olmak ve canlı yorum özelliklerimizle düzgün çalıştığından emin olmak istedik. Ayrıca, bu özelliğin müşterilerimizin en yaygın kullanım senaryosuna - anonim yorumlamaya - uygun olmasını istedik.

#### Canlı Yorumları Silme

Yorum yapma ve oylama gibi - silme işlemi de canlı gerçekleşir. İki kullanıcı aynı sayfadaysa ve bir kullanıcı yorumunu silerse, diğer kullanıcı bunun kaldırıldığını görecektir.

#### Yorum Silme Özelliğini Etkinleştirme

Tüm müşterilerimiz için varsayılan olarak yorum düzenleme ve silme işlemine geçişi tamamladık. Şu anda kapatılması mümkün değildir.

#### Üçüncü Parti Entegrasyonları

Bir yorumu silmek, sahip olduğunuz entegrasyonlara - WordPress gibi - bu olayın yayılmasına neden olacaktır. WordPress eklentimizi kullanıyorsanız, bir yorum eklemek, WordPress kurulumunuzu arka planda güncelleyerek verilerinizin bir kopyasını korumanızı sağlar. Yorumları silecekseniz, aynı mantığı izleyerek WordPress kurulumunuzdan kaldırırız. Bu, yalnızca WordPress'e değil, diğer entegrasyonlara da uygulanır.

#### Sonuç Olarak

Bu özelliğin bazıları tarafından uzun süredir beklenildiğini biliyoruz. Tüm büyük sürümler gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz.

Sağlıklı günler!

{{/isPost}}