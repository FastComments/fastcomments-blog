[category:Features]
###### [postdate]
# [postlink]FastComments ile Yorumlar Artık Düzenlenebilir[/postlink]

{{#unless isPost}}
Uzun zamandır beklenen bir güncelleme olarak, artık FastComments ile bırakılan yorumları düzenleyebilirsiniz.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makalede Teknik Terimler Vardır

#### Yenilikler

FastComments ile bırakılan yorumlar artık düzenlenebilir - giriş yapıp yapmadığınız önemli değil.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Düzenleme Demo"></video>

Anlayışla karşılanmalı ki, bu en çok talep edilen özelliklerimizden biri oldu ve kullanıcılarımız ile bu aşamaya gelmekten mutluyuz.

#### Nasıl Çalışır

Giriş yapmış kullanıcılar her zaman yorumlarını düzenleyebilir. Ayrıca, anonim yorum yapanlar için sunucularımız, tarayıcılarını kapatmadıkları sürece, yorum yaptıktan sonra 24 saatlik geçici bir düzenleme penceresi sunar. Örneğin, bu, anonim bir yorumcunun yorum yapabileceği ve ardından giriş yapmadan yazım hatalarını düzeltmek için yorumunu düzenleyebileceği anlamına gelir!

Eğer anonim yorumcu tarayıcısını kapatırsa, e-posta adresine gönderilen sihirli bağlantıya tıklamadıkları sürece yorumlarını düzenleyemezler.

Ek güvenlik için, geçici düzenleme anahtarı yanlış tahmin etme girişiminde geçersiz hale gelecektir.

#### Neden Şimdi, bu kadar uzun zamandan sonra?

İstemci tarafındaki widget'taki tüm değişikliklerde olduğu gibi, boyutunu şişirmemek için dikkatli olmalıyız. Bu özellik, çekirdek yorumlama kod tabanına önemli bir boyut ekler (yaklaşık 1kb gzipped - yaklaşık %10 artış).
FastComments'ın performansını düşürmediğinden emin olmak istedik ve canlı yorumlama özelliklerimizle düzgün çalışmasını sağlamak istedik. Ayrıca, bu özelliğin müşterilerimizin en yaygın kullanım senaryosunu - anonim yorumlamayı - karşılayabilmesini istedik.

#### Canlı Yorumları Düzenleme

Yorum yapma ve oylama gibi - düzenleme canlı olarak gerçekleşir. Eğer iki kullanıcı aynı sayfadaysa ve bir kullanıcı yorumunu düzenlerse, diğer kullanıcı güncellemeyi görecektir.

#### Yorum Düzenlemeyi Etkinleştirme

Yorum düzenlemeyi varsayılan olarak tüm müşterilerimiz için etkinleştirmeyi tamamladık. Şu anda kapatılamaz.

#### Sırada Ne Var?

Gelecek bir güncellemede yorum silme yeteneğini de yayınlamayı planlıyoruz.

#### Üçüncü Taraf Entegrasyonları

Bir yorumu düzenlemek, sahip olduğunuz herhangi bir entegrasyona - WordPress gibi - olayı yayacaktır. Eğer WordPress eklentimizi kullanıyorsanız, yorum eklemek arka planda WordPress kurulumunuzu günceller, böylece verilerinizin bir kopyasını saklamış olursunuz. Bir yorumu düzenlediğinizde, aynı mantığı izleriz ve WordPress kurulumunuzdaki kopyayı güncelleriz. Bu, yalnızca WordPress değil diğer entegrasyonlar için de geçerlidir.

#### Sonuç Olarak

Bu özelliğin bazıları tarafından uzun süredir beklediğini biliyoruz. Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve doğru bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz.

Sağlıklı günler!

{{/isPost}}