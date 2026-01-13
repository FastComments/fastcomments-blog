---
[category:Features]
###### [postdate]
# [postlink]Yorumlar Artık FastComments ile Düzenlenebilir[/postlink]

{{#unless isPost}}
Uzun zamandır beklenen bir güncelleme ile, FastComments ile bırakılan yorumları artık düzenleyebilirsiniz.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

#### Yeni Neler Var

FastComments ile bırakılan yorumlar artık düzenlenebilir - ister giriş yapmış olun ister olmayın.

<img src="images/fc-editing-demo.gif" alt="Düzenleme Demo GIF (17mb)" title="Düzenleme Demo" />

Anlayışla karşılanır ki, bu en çok talep edilen özelliklerimizden biri oldu ve kullanıcı tabanımızla bu dönüm noktasına ulaşmaktan mutluyuz.

#### Nasıl Çalışır

Giriş yapmış kullanıcılar her zaman yorumlarını düzenleyebilir. Anonim yorumcular için, sunucularımız, anonim yorum yaptıkları sürece, tarayıcılarını kapatmadıkları takdirde, yorumlarını düzenlemeleri için geçici olarak 24 saatlik bir süre sunar. Örneğin, bu, anonim bir yorumcunun yorum yapabileceği ve sonra imla hatalarını düzeltmek için yorumunu düzenleyebileceği anlamına gelir, hatta giriş yapmadan!

Eğer anonim yorumcu tarayıcısını kapatırsa, e-posta adresine gönderilen sihirli bağlantıya tıklamadığı takdirde yorumunu düzenleyemez.

Ekstra güvenlik için, geçici düzenleme anahtarı yanlış tahmin edilmesi durumunda geçersiz kılınacaktır.

#### Neden Şimdi, bu kadar uzun bir süre sonra?

Müşteri tarafı widget’ında yapılan tüm değişikliklerde boyutunu şişirmemeye dikkat etmeliyiz. Bu özellik, temel yorumlama kod tabanına önemli bir boyut ekliyor (yaklaşık 1kb gzipped - yaklaşık %10 artış).
Bu durumun FastComments’un performansını azaltmadığından emin olmak ve canlı yorumlama özelliklerimizle sorunsuz çalıştığını görmek istedik. Ayrıca, bu özelliğin müşterilerimizin en yaygın kullanım senaryosuna - anonim yorumlama - uygun olmasını istedik.

#### Canlı Yorumları Düzenleme

Yorum yapma ve oylama gibi - düzenleme canlı gerçekleşir. İki kullanıcı aynı sayfadaysa ve bir kullanıcı yorumunu düzenlerse, diğer kullanıcı güncellemeyi görecektir.

#### Yorum Düzenlemeyi Etkinleştirme

Yorum düzenlemeyi tüm müşterilerimiz için varsayılan olarak aktif hale getirdik. Şu anda kapatılamaz.

#### Sırada Ne Var?

Gelecek bir güncellemede, yorum silme yeteneğini de yayınlamayı planlıyoruz.

#### Üçüncü Taraf Entegrasyonları

Bir yorumu düzenlemek, sahip olduğunuz herhangi bir entegrasyona olayın yayılmasına neden olacaktır - örneğin WordPress. Eğer WordPress eklentimizi kullanıyorsanız, bir yorum eklemek, verilerinizin bir kopyasını saklamak için WordPress kurulumunuzu arka planda günceller. Eğer bir yorumu düzenlerseniz, aynı mantığı takip ederiz ve WordPress kurulumunuzdaki kopyayı güncelleriz. Bu, sadece WordPress için değil, diğer entegrasyonlar için de geçerlidir.

#### Sonuç Olarak

Bu özelliğin bazıları tarafından uzun zamandır beklenildiğini biliyoruz. Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz.

Şerefe!

{{/isPost}}