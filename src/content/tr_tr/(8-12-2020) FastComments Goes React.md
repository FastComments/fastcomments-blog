---
[category:API & Development]
###### [postdate]
# [postlink]FastComments React'e Geçiyor[/postlink]

{{#unless isPost}}
React ile geliştirilmiş bir uygulamaya yorumları yerleştirmek mi istiyorsunuz? Size yardımcı olabiliriz.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makalede Teknik Terimler Var

#### Yenilikler

FastComments artık VanillaJS widget'ımız ile özellik bakımından eşit olan bir React bileşenine sahip.

Kütüphaneye fastcomments-react adını vermeye karar verdik. Kaynak kodunu içeren GitHub deposunu <a href="https://github.com/FastComments/fastcomments-react" target="_blank">buradan</a> bulabilirsiniz.

Depo ayrıca widget'ın örnek kullanımını da içermektedir.

NPM'de mevcut, onu <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">buradan</a> bulabilirsiniz.

#### Nasıl Çalışır

Bu yeni bileşenin çalışma şekli, React bileşeninin mevcut FastComments widget'ının etrafında bir sarıcı olmasıdır.
 
Bu, mevcut bileşenlerimize özellikler eklersek veya hataları düzeltirsek, bundan hemen yararlanabileceğiniz anlamına geliyor!

#### Yeni Bileşen Neden?

FastComments VanillaJS widget'ını işimizin temelini oluşturacak şekilde (temel arka uç ile birlikte) yazdık. Bu, onu şu anda yaptığımız şekilde genişletilecek şekilde tasarladığımız anlamına geliyor.

Bu yeni React kütüphanesi olmadan, FastComments'ı uygulamanıza entegre etmek için kendi kütüphanenizi yazmanız gerekseydi, bu benimsenmesi açısından büyük bir engel olabilirdi. React'i doğrudan destekleyerek, bu tür müşterilere FastComments'ı benimsemesini çok daha kolay hale getiriyoruz.

#### Tek Sayfa Uygulamaları?

FastComments, çekirdek olarak SPA'ları destekler. Bileşen, yapılandırma nesnesindeki değişiklikleri izler - bu nedenle mevcut sayfayı (urlId olarak adlandırılan) güncellerken, widget
yeniden render edilecektir.

#### Mevcut Müşteriler İçin Ne Değişiyor

Mevcut müşteriler için hiçbir şey değişmiyor - ve yeni projeler için FastComments'ın VanillaJS versiyonunu kullanmanın **hiçbir** sakıncası yok. fastcomments-react, FastComments'ın VanillaJS versiyonuna bağlıdır ve her zaman öyle olacaktır. Angular veya Vue bileşenleri yayınlarsak, aynı modeli takip edeceğiz.

VanillaJS widget'ımız, FastComments'ın birinci sınıf bir üyesidir. Bu yayın, altyapımıza tamamen *eklemeli* bir katkıdır.

Ayrıca, VanillaJS widget'ı, herhangi bir çerçeve kullanmayan herhangi bir web sayfasına yerleştirilmiş yorumları eklemek için harika bir çözüm olmaya devam etmektedir, tıpkı statik bir sayfa gibi.

#### Sonuç Olarak

fastcomments-react kütüphanesini ve gelecekteki kütüphaneleri yayınlayarak, geliştiricilerin modern geliştirme metodolojileri kullanarak FastComments'ı benimsemesini kolaylaştırmayı umuyoruz.

Şerefe!

{{/isPost}}

---