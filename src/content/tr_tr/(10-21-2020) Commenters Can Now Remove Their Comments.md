---
[category:Özellikler]
###### [postdate]
# [postlink]Yorumcular Artık Yorumlarını Silebiliyor[/postlink]

{{#unless isPost}}
Beklenen bir güncelleme olarak, artık FastComments ile bıraktığınız yorumları silebilirsiniz.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçermektedir

#### Yenilikler

Yeni duyurulduğu gibi - FastComments ile bırakılan yorumlar artık düzenlenebilir - ister giriş yapmış olun, ister olmayın.

<img src="images/fc-deleting-demo.gif" alt="Silme Demo GIF (11mb)" title="Silme Demo" />

Bir takip olarak, yorumlarınızı silme yeteneği de yayınlandı. Anlayışla karşılayacağınız üzere, yorumları düzenleme ile aynı şekilde, bu, en çok talep edilen özelliklerimizden biri oldu ve kullanıcı tabanımızla bu dönüm noktasına ulaşmaktan mutluyuz.

#### Nasıl Çalışır

Yorum kaldırma, düzenleme ile aynı şekilde çalışır - giriş yapmış kullanıcılar her zaman yorumlarını düzenleyebilir ve silebilir. Anonim yorumcular için, sunucularımız onların yorumlarını düzenlemeleri veya silmeleri için geçici 24 saatlik bir süre sağlar, eğer tarayıcılarını kapatmazlarsa. Örneğin bu, anonim bir yorumcunun yorum yapabileceği ve ardından yanlış yazımları düzeltmek için yorumunu düzenleyebileceği veya hiç giriş yapmadan silebileceği anlamına gelir!

Eğer anonim yorumcu tarayıcısını kapatırsa, yorumunu düzenleyemez veya silemez, eğer kendisine gönderilen sihirli linke tıklamazsa.

Ek güvenlik için, geçici düzenleme anahtarı yanlış tahmin edilmeye çalışıldığında geçersiz hale gelecektir.

#### Neden Şimdi, bu kadar uzun süreden sonra?

Bunun nedeni, düzenlemenin neden bu kadar uzun sürdüğü ile aynıdır. FastComments'ın performansını etkilemediğinden emin olmak istedik ve canlı yorum yapma özelliklerimizle düzgün çalıştığından emin olmak istedik. Ayrıca, özelliğin müşterilerimizin en yaygın kullanım senaryosuna - anonim yorum yapmaya - uygun hale gelmesini istedik.

#### Canlı Yorumları Silme

Yorum yapma ve oylama gibi - silme de canlı olarak gerçekleşir. Eğer iki kullanıcı aynı sayfadaysa ve bir kullanıcı yorumunu silerse, diğer kullanıcı bunun kaldırıldığını görecektir.

#### Yorum Silme Özelliğini Etkinleştirme

Yorum düzenleme ve silme işlemlerini tüm müşterilerimiz için varsayılan olarak sunmayı tamamladık. Şu anda kapatılamamaktadır.

#### Üçüncü Taraf Entegrasyonları

Bir yorumu silmek, sahip olduğunuz herhangi bir entegrasyona olayı yayar - örneğin WordPress'e. Eğer WordPress eklentimizi kullanıyorsanız, bir yorum eklemek arka planda WordPress kurulumunuzu günceller, böylece verilerinizin bir kopyasını saklamış olursunuz. Eğer yorumları kaldırırsanız, aynı mantığı izliyoruz ve onu WordPress kurulumunuzdan kaldırıyoruz. Bu, sadece WordPress değil, diğer entegrasyonlar için de geçerlidir.

#### Sonuç Olarak

Bu özelliğin bazıları tarafından uzun zamandır beklendiğini biliyoruz. Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz.

Şerefe!

{{/isPost}}