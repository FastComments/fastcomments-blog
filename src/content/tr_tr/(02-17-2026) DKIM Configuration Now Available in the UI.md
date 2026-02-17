---
[category:Özellikler]
[category:E-posta]

###### [postdate]
# [postlink]DKIM Yapılandırması Artık Kullanıcı Arayüzünde Mevcut[/postlink]

{{#unless isPost}}
FastComments artık DKIM yapılandırmak için bir kullanıcı arayüzü sunuyor ve bu, API kullanmadan e-posta teslimat oranlarını artırmayı kolaylaştırıyor.
{{/unless}}

{{#isPost}}

### Yenilikler

Özel e-posta alanınız için DKIM ayarlamak artık daha da kolaylaştı. Daha önce, DKIM yapılandırması doğrudan 
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> kullanılarak yapılması gerekiyordu. Artık, DKIM'i FastComments yönetici arayüzünden doğrudan yapılandırabilirsiniz.

### DKIM Neden Önemlidir

FastComments'ın sizin adınıza gönderdiği e-postalar için From Domain'i özelleştirdiğinizde, e-posta sağlayıcılarının bu e-postaların meşru olduğunu doğrulaması gerekir. DKIM (DomainKeys Identified Mail), bu konuda yardımcı olan temel kimlik doğrulama mekanizmalarından biridir. Uygun DKIM yapılandırması olmadan, alan adınız adına gönderilen e-postaların spam klasörlerine düşmesi daha olasıdır.

### Nasıl Yapılır

<a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">My Domains</a> sayfasına gidin ve yapılandırmak istediğiniz alan için "Gelişmişi Göster"e tıklayın. Alan adınızı, anahtar seçici ve özel anahtarı girebileceğiniz DKIM ayarlarını göreceksiniz.

Kaydettikten sonra, DKIM yapılandırması o alan adından gönderilen tüm e-postalara uygulanacaktır.

### API Hala Çalışıyor

DKIM yapılandırmasını programatik olarak yönetmeyi tercih ederseniz, 
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> önceki gibi çalışmaya devam ediyor.

### Sonuç Olarak

Bu durumun, kullanıcılarınızın FastComments'ın sizin adınıza gönderdiği e-postaları almasını sağlamayı kolaylaştıracağını umuyoruz. Aşağıda herhangi bir sorunuz varsa bize bildirin.

Şerefe!

{{/isPost}}

---