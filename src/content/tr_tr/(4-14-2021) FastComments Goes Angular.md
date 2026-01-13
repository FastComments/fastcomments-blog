---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Angular'a Geçiyor[/postlink]

{{#unless isPost}}
Angular ile geliştirilmiş bir uygulamaya yorum eklemek mi istiyorsunuz? Size yardımcı oluruz.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçermektedir

#### Yenilikler

FastComments artık VanillaJS widget'ımızla aynı özelliklerde bir Angular bileşeni içeriyor.

Kütüphaneye ngx-fastcomments adını verdik. Kaynak kodu ile GitHub deposunu <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">buradan</a> bulabilirsiniz.

Depoda, Angular çalışma alanı şeklinde widget'ın örnek kullanımı da yer almakta.

Bunu NPM’de <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">buradan</a> bulabilirsiniz.

#### Nasıl Çalışır

Bu yeni bileşenin çalışma şekli, Angular bileşeninin mevcut FastComments widget'ının etrafında bir sarmalayıcı olmasıdır.

Bu, mevcut bileşenlerimize özellikler ekler veya hataları düzeltirsek, derhal faydalanabileceğiniz anlamına geliyor!

#### Neden Yeni Bileşen?

FastComments VanillaJS widget'ını işimizin temel bileşeni olarak yazdık (temel arka uçla birlikte). Bu, şimdi olduğu gibi genişletilmesi için tasarlandığı anlamına geliyor.

Bu yeni Angular kütüphanesi olmadan, FastComments'ı uygulamanıza entegre edebilmek için kendi kütüphanenizi yazmanız gerekirdi ve bu benimsenmesi zor bir engel olurdu. Angular'ı doğrudan destekleyerek, bu tür müşteriler için FastComments'ın benimsenmesini çok daha kolay hale getiriyoruz.

#### Tek Sayfa Uygulamaları?

FastComments, temelinde SPA'ları destekler. Bileşen, yapılandırma nesnesindeki değişiklikleri değişiklik algılama kullanarak izler. Örneğin, mevcut sayfayı (urlId olarak adlandırılan) güncellerseniz, widget yeniden oluşturulacaktır. Bu, karanlık modun açılıp kapatılması veya sayfalandırmanın eklenmesi gibi kullanım alanlarını uygulamayı kolaylaştırır.

#### Mevcut Müşteriler İçin Ne Değişiyor

Mevcut müşteriler için hiçbir şey değişmiyor - ve yeni projeler için FastComments'ın VanillaJS sürümünü kullanmanın **hiçbir** sakıncası yok. ngx-fastcomments, FastComments'ın VanillaJS sürümüne bağımlıdır ve daima öyle kalacaktır. Yeni bileşenler yayınladığımızda, aynı modeli takip edeceğiz.

VanillaJS widget'ımız FastComments'ın birinci sınıf bir vatandaşıdır. Bu sürüm, altyapımıza tamamen *ekstradır*.

Ayrıca, VanillaJS widget'ı hala herhangi bir çerçeve kullanmayan (statik bir sayfa gibi) web sayfasına yerleştirilen yorumları eklemek için harika bir çözüm olmaya devam etmektedir.

#### Sonuç Olarak

ngx-fastcomments kütüphanesini ve gelecekteki kütüphaneleri yayınlayarak, geliştiricilerin modern geliştirme metodolojilerini kullanarak FastComments'ı benimsemelerini kolaylaştırmayı umuyoruz.

Şerefe!

{{/isPost}}

---