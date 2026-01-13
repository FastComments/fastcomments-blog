---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]FastComments ile VueJS sitesinde Yorumları Gömme[/postlink]

{{#unless isPost}}
Vue ile geliştirilmiş bir uygulamaya yorumları gömmek mi gerekiyor? İşte burada sana yardımcı olabiliriz.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

#### Yenilikler

FastComments artık VanillaJS widget'ımızla aynı özelliklere sahip bir Vue bileşenine sahip.

Kütüphaneye fastcomments-vue adını vermeye karar verdik. Kaynak koduyla GitHub deposunu <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">buradan</a> bulabilirsiniz.

Depoda ayrıca widget'ın örnek kullanımları da bulunmaktadır.

NPM'de mevcut, buradan bulabilirsiniz <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">burada</a>.

#### Nasıl Çalışır

Bu yeni bileşenin çalışma şekli, Vue bileşeninin mevcut FastComments widget'ının etrafında bir sargı olmasıdır.

Bu, mevcut bileşenlerimize özellikler ekler veya hataları düzeltirsek, hemen faydalanabileceğiniz anlamına geliyor!

#### Yeni Bileşen Neden?

FastComments VanillaJS widget'ını işimizin temeli olacak şekilde (temel arka uç ile birlikte) yazdık. Bu, onu şu anda yaptığımız gibi genişletmek üzere tasarladığımız anlamına geliyor.

Bu yeni Vue kütüphanesi olmadan, FastComments'ı uygulamanıza kendi kütüphanenizi yazarak entegre edebilirdiniz, ancak bu benim için büyük bir benimseme engeli olurdu. Vue'yu doğrudan destekleyerek, bu tür müşteriler için FastComments'ı benimsemeyi çok daha kolay hale getiriyoruz.

#### Vue 3.0

Özellikle Vue 3.0 için <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a> adını verdiğimiz bir bileşenimiz var.

#### Tek Sayfa Uygulamaları?

FastComments, temelinde SPA'ları destekliyor. Bileşen, yapılandırma nesnesindeki değişiklikleri izler - bu nedenle mevcut sayfayı (urlId olarak adlandırılan) güncellediğinizde widget yeniden oluşturulacaktır.

#### Mevcut Müşterilere Ne Değişecek?

Mevcut müşteriler için hiçbir şey değişmiyor - ve yeni projeler için FastComments'ın VanillaJS sürümünü kullanmakta **hiçbir** sakınca yoktur. fastcomments-vue, FastComments'ın VanillaJS sürümüne bağımlıdır ve her zaman öyle olacaktır. Angular veya Vue bileşenleri yayımlarsak, aynı modeli takip edeceğiz.

VanillaJS widget'ımız, FastComments'ın birinci sınıf bir bileşenidir. Bu sürüm, altyapımıza tamamen *ekleyici* bir katkıdır.

Ayrıca, VanillaJS widget'ı, herhangi bir framework kullanmayan bir web sayfasına gömülü yorumları yerleştirmek için hala harika bir çözüm olmaya devam etmektedir, örneğin statik bir sayfa.

#### Sonuç Olarak

fastcomments-vue kütüphanesini ve gelecekteki kütüphaneleri yayımlayarak, modern geliştirme metodolojilerini kullanırken geliştiricilerin FastComments'ı benimsemelerini kolaylaştırabileceğimizi umuyoruz.

Sağ olun!

{{/isPost}}