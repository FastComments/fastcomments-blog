---
[category:Güvenlik]

###### [postdate]
# [postlink]Tek Oturum Açma ile Yorum Dizilerini Koruma[/postlink]

{{#unless isPost}}
Yorum dizilerinizi halka açık olarak mı düşünmüyorsunuz? Kimlik doğrulama için SSO kurulu mu? Bu sizin için olabilir.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

#### Giriş

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(burada detaylar)</a>, kullanıcılarınıza başka bir platforma giriş yapmadan yorum yapma imkanı sunar.

Ancak, bu tek başına yorum dizilerinizi güvence altına almaz, çünkü varsayılan olarak yorum verileri herkese açık bilgilerdir - sayfayı görebilen herkes yorumları görebilir. Ancak, bu sürüm durumu değiştiriyor.

#### Kod Olmadan Kurulum

SSO kurulu olduğunda, yorum dizilerimizi görüntülemeyi ve etkileşimde bulunmayı engelleyebiliriz, bunun için bir <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">özelleştirme kuralı</a> oluşturarak.

Bunu yaparken SSO araması yapın ve bu seçeneği bulacaksınız:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="SSO ile Yorumları Kilitleme İçin Yapılandırma Seçeneği" alt="SSO ile Yorumları Kilitleme İçin Yapılandırma Seçeneği" class="lozad" />
</div>

Bunu etkinleştirin ve özelleştirme kuralını kaydedin.

#### Sadece Belirli Bir Alanı veya Sayfayı Koruma

Sadece belirli bir Alanı veya Sayfayı korumak için, özelleştirme kuralını buna göre yapılandıracağız.

Özelleştirme UI'nın üst kısmında, iki girdi bulunacaktır, Alan ve URL Kimliği.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Sayfa veya Alanlı Yapılandırma Seçeneği" alt="Sayfa veya Alanlı Yapılandırma Seçeneği" class="lozad" />
</div>

Sadece belli bir alanı korumak için, ilgili alanı "alan" alanına girin.

Belirli bir sayfayı korumak için, "URL Kimliği" alanına bir sayfa URL'si girin. Eğer FastComments ile özel bir entegrasyonunuz varsa, burada bir URL yerine bir tür kimlik girebilirsiniz.

#### Okuma Dışında Koruma

Bu seçeneği etkinleştirmek, sayfanın veya alanın, kullanıcı SSO ile giriş yapmadığı sürece yorum yapılmasına karşı korunmasını sağlar. 

#### Dikkat Edilmesi Gerekenler

SSO entegrasyonunuzdan önce yorum yapan kullanıcılar, SSO entegrasyonunuzla giriş yapmadıkları sürece yorumları göremeyeceklerdir.

#### Sonuç Olarak

Bu kılavuzu faydalı ve okunması kolay bulduğunuzu umuyoruz. Herhangi bir sorunuz varsa aşağıya yorum yapmaktan çekinmeyin.

Şerefe!

{{/isPost}}

---