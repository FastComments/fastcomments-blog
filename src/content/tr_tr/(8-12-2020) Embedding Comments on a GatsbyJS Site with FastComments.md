---
[category:Integrations]
###### [postdate]
# [postlink]FastComments ile GatsbyJS Sitesine Yorumları Gömme[/postlink]

{{#unless isPost}}
Artık FastComments'ı kullanarak Gatsby ile yapılmış bir siteye yorumları gömebilirsiniz!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makalede Teknik Terimler Bulunmaktadır

#### Yenilikler

Son zamanlarda FastComments için <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React bileşenimizi</a> kullanıma sunduk.

Bu, FastComments'ı Gatsby ile entegre etme dahil birçok fırsat sunuyor.

#### Kendi Wrapper'ınızı Yazdıysanız

Eğer FastComments için kendi React wrapper'ınızı yazdıysanız - yeni olanla değiştirmeyi düşünün. Bu soyutlamayı sizin için sürdüreceğiz - ve <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">ayar değişikliklerinde otomatik yenileme</a> gibi birçok hoş özellik içeriyor.

#### Nasıl Çalışır

FastComments'ın ana widget'ımızın etrafında bir wrapper olarak bir React bileşeni olduğundan - widget'ı istemci tarafında oluşturmak için sadece React kütüphanemizi kullanmanız yeterlidir.

Bu bileşeni tam olarak destekliyoruz ve güncel tutacağız.

#### Örnekler?

Örnekler oluşturma sürecine başladık, bulabileceğiniz yer <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">burada</a>.

#### Gece Modu

Sahip olduğumuz örneklerden biri "gece modu" - FastComments'ı siyah (veya çok koyu) arka plana sahip bir sitede render etme: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Ayrıca, widget yapılandırma değişikliklerine yanıt verdiğinden, sitenizin temasını değiştirmek için bir modunuz olabilir ve fastcomments-react'i güncellemesi için kolayca bildirebilirsiniz.

#### Sonuç Olarak

FastComments'ı Gatsby sitenize entegre etmenin hızlı ve kolay olmasını umuyoruz.

Şerefe!

{{/isPost}}