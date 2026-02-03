---
[category:Features]
###### [postdate]
# [postlink]Yorumcu Bağlantılarını Tanıtıyoruz[/postlink]

{{#unless isPost}}
2021'deki ilk sürümümüz, kullanıcıların yorum yaparken blog bağlantılarını ekleyebilme yeteneğini sunuyor (eğer kiracı seviyesinde etkinleştirildiyse).
{{/unless}}

{{#isPost}}

## Yeni Olan Nedir?

2021'deki ilk sürümümüz, kullanıcıların yorum yaparken blog bağlantılarını ekleyebilme yeteneğini sunuyor (eğer kiracı seviyesinde etkinleştirildiyse).

## Yorumcu Bağlantıları Nedir?

Bu çok ilginç etkileşimde gördüğümüz gibi, bu kullanıcıların kullanıcı adları bir bağlantı olduğunu belirtmek için altı çizili:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Yorumcu Bağlantıları" title="Yorumcu Bağlantıları Demo" />
</div>

Bu, sitenin FastComments kurulumunu, kullanıcıların yorum yaparken bir bağlantı bırakabilecekleri yeni bir alan doldurmasına izin verecek şekilde yapılandırmış olmasındandır:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Yorumcu Bağlantı Girişi" title="Yorumcu Bağlantı Girişi" />
</div>

Bu bağlantı, <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Hesap Detayları</a> bölümünde düzenlenerek özelleştirilebilir.

## Yorumcu Bağlantılarını Etkinleştirmek

Yeni girdi alanını etkinleştirmek için bir <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Özelleştirme Kuralı</a> oluşturarak bu özelliği etkinleştirebiliriz. "Yorumcu Bağlantılarını Etkinleştir" seçeneğini etkinleştirmeniz yeterlidir.

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Yorumcu Bağlantılarını Etkinleştirmek" title="Blog Bağlantıları" />
</div>

## Girdi Alanı Metnini Geçersiz Kılma

Varsayılan olarak, yorumcu bağlantı alanı yeri "Blog URL'niz." olarak ayarlanmıştır. Bu, özelliği etkinleştirmek için kullandığınız aynı özelleştirme kuralı aracılığıyla geçersiz kılınabilir; "Özel Metni Göster"e tıklayarak.

## Spam Sınıflandırmasını İyileştirmek

Bu özelliğin, spam olarak işaretlenebilecek ancak spam olmayan içeriklerin azalmasına yardımcı olma gibi bir yan etkisi vardır. Az metin ve bir bağlantı içeren yorumların spam olarak sınıflandırılma olasılığı daha yüksektir. Ancak, yorumcu bağlantısı, bir yorumun spam olup olmadığı sınıflandırmasını etkilemez. Bu, bir kullanıcının blog bağlantısıyla yorum yaparken, yorumunun spam olarak işaretlenme riskinin çok daha düşük olduğu anlamına gelir.

Bu nedenlerden dolayı, yüksek miktarda spam içeren siteler bu özelliği etkinleştirmek istemeyebilir, ancak istemeyenler belirli kitlelerle kullanmanın değerini bulacaklardır.

## Mevcut Müşterilere Etkisi

Eğer mevcut bir FastComments kullanıcısıysanız, kullanıcılarınız bu özelliği açmadığınız sürece işlevsellikte herhangi bir değişiklik yaşamayacaklardır. Yeni müşteriler için de aynı durum geçerlidir - bu özelliğin varsayılan olarak kapalı olduğunu göreceksiniz.

## Sonuç Olarak

Bu özelliğin geçen yıldan daha iyi bir yılın başlangıcı olmasını umuyoruz. Keyifli yorumlar! 

{{/isPost}}