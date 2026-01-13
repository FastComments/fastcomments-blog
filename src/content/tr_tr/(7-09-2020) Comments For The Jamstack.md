---
[category:Integrations]
###### [postdate]
# [postlink]Jamstack İçin Yorumlar[/postlink]

{{#unless isPost}}
Eski olan, yine yeni. Önceden oluşturulmuş ve bir CDN üzerinden hizmet veren sitelere artık "JamStack" deniyor - ancak tamamen statik olmak zorunda değiller!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makalede Teknik Terimler Bulunmaktadır

<a href="https://jamstack.org/" target="_blank">Jamstack</a>, geleneksel bir web sunucusuna bağımlı olmayan bir web sitesi yazma şeklidir. Bunun yerine, en iyi kullanıcı deneyimi için "CDN" adını verdiğimiz sunuculardan hizmet alınır (çok hızlı yüklenirler). Jamstack ile yazılmış siteler için performans büyük bir önceliktir - tıpkı FastComments gibi.

#### FastComments'in Jamstack ile Çalışmasının Nedenleri

FastComments, yorum eklemek istediğiniz statik sayfanın altında yalnızca küçük (< 11kb şu anda) bir kod parçası gerektirir. Böylece, tipik bir Jamstack sitesine FastComments yüklemek, herhangi bir statik siteye yüklemek kadar hızlı birkaç saniye alır.

#### Olası Sorunlar

Jamstack sitelerinin her zaman statik bir şey olarak başlamadığını anlıyoruz. Örneğin, Preact, React veya Vue ile yapılmış olabilirler. Vanilla JS ile yazdık, FastComments widget'ını tüm ana çatılarla çalışması için maksimum birlikte çalışabilirlik ile geliştirdik. Ancak, FastComments ile tercih ettiğiniz çatı arasında sorunlarla karşılaşırsanız 
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize bildirin</a>.

#### Sonuç Olarak

FastComments'in kullanıcılarınızın sitenizle etkileşimde bulunmasını, geri bildirim vermesini ve genellikle statik bir sitede yapamayacakları şekillerde yorum bırakmalarını sağladığını umuyoruz.
Örneğin, bu sayfa geleneksel bir Jamstack sitesi gibi önceden oluşturulmuştur ve FastComments'in aşağıda mutlu bir şekilde çalıştığını görebilirsiniz.

Şerefe!

{{/isPost}}

---