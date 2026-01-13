---
[category:Performans]
[category:Özellikler]
###### [postdate]
# [postlink]SEO için iframe'leri Kaldırma[/postlink]

{{#unless isPost}}
Yorumlarınızın arama motorlarına görünürlüğünü artırdık ve içeriğin sitenize atfedilme olasılığını yükselttik.
{{/unless}}

{{#isPost}}

## Yenilikler

Daha önce, FastComments arama motorları tarafından tarandığında yorum dizilerinizi bir iframe içinde render ediyordu. Bunun nedeni, uygulamanın kullanıcı oturumları için çerezleri nasıl kullandığıyla ilgili olarak iframe'lerin kullanılmasını gerektirmesidir.

Ancak, bu arama motorlarıyla bir sorun teşkil etmektedir, çünkü iframe içindeki içeriğin sitenize atfedileceğini garanti etmemektedirler.

Artık, yorumları render ederken, gömme scripti sayfanın bir crawler tarafından yüklenip yüklenmediğini kontrol edecek. Eğer öyleyse, bir iframe kullanmayacaktır!

## Kaç Yorum Gösteriliyor

Bir sayfa için arama motorlarına maksimum 2,000 yorum gösterilecektir. Bu yorumlar, varsayılan yapılandırılmış sıralama düzeninize göre sıralanacaktır.

## Yaptığımız Testler

Artık arama motorlarının bir sayfanın tamamındaki yorum dizisini gördüğünden emin olduk ve tüm yorum dizilerini aynı anda yüklemenin performansını test ettik.

## Mevcut Müşterilere Etkisi

Eğer mevcut bir FastComments müşterisiyseniz, değişiklik zaten hesabınıza uygulanmıştır ve başka bir işlem yapmanıza gerek yoktur. Arama motorları sayfalarınızı yeniden dizinlediğinde, o sayfalardaki tüm yorumlar dizinlenmiş olmalıdır.

## Sonuç Olarak

Bu güncellemeyi ve belgelerini faydalı bulmuşsunuzdur umarız. İyi yorumlar!

{{/isPost}}