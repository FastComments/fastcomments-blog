---
[category:API & Development]
###### [postdate]
# [postlink]FastComments’a Webhook'lar Geldi[/postlink]

{{#unless isPost}}
FastComments artık yorum oluşturma, güncelleme ve silme işlemleri için API'nizi arayabiliyor.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

#### Yeni Neler Var

FastComments ile artık bir yorum eklendiğinde, güncellendiğinde veya sistemimizden silindiğinde bir API uç noktasını çağırmak mümkün. 

Bunu HTTP/HTTPS üzerinden asenkron webhook'lar ile başarıyoruz.

#### Nasıl Kullanılır

Öncelikle <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook yönetim</a> paneline gidin. Bu, Veri Yönetimi -> Webhook'lar aracılığıyla erişilebilir.

Buradan her tür yorum olayı için uç noktaları belirleyebilirsiniz.

Her olay türü için entegrasyonunuzu doğru bir şekilde ayarladığınızdan emin olmak için **Test Gönder** butonuna tıklamayı unutmayın. Ayrıntılar için "Test" bölümüne bakın.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Webhook Ayar Örneği" title="Webhook Ayar Örneği" class="lozad" />
</div>

#### Test

<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook yönetim</a> panelinde her olay türü için "Test Gönder" butonları bulunmaktadır (Oluştur, Güncelle, Sil). Oluştur ve Güncelle olayları, bir dummy WebhookComment nesnesi gönderirken; Sil testinde yalnızca bir ID ile dummy bir istek gövdesi gönderilecektir.

Test, "mutlu" (doğru API Anahtarı) ve "üzgün" (geçersiz API anahtarı) senaryoları için yanıt kodunu doğrulamak üzere iki çağrı yapacaktır.

Test, geçersiz bir API anahtarı gönderdiğinde, testin tamamen geçmesi için 401 durum kodu döndürmelisiniz. Anahtarın değerini doğru bir şekilde kontrol etmezseniz, şöyle bir hata alırsınız:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Webhook Kimlik Doğrulama Testi Hatası" title="Webhook Kimlik Doğrulama Testi Hatası" class="lozad" />
</div>

#### Yorum Nesnesi Yapısı
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### "Oluştur" Olayı Yapısı

"Oluştur" olayı istek gövdesi bir WebhookComment nesnesidir.

#### "Güncelle" Olayı Yapısı

"Güncelle" olayı istek gövdesi bir WebhookComment nesnesidir.

#### "Sil" Olayı Yapısı

"Sil" olayı istek gövdesi bir WebhookComment nesnesidir, **ancak yalnızca id içermektedir**.

#### Neden Oluştur ve Güncelle her ikisi de HTTP PUT kullanıyor ve POST değil?

**Tüm isteklerimiz bir ID içerdiğinden**, aynı Oluştur veya Güncelle isteğini tekrarlamak **sizin tarafınızda yeni nesneler yaratmamalıdır**. Bu, bu çağrıların idempotent olduğunu ve HTTP spesifikasyonuna göre PUT olayları olması gerektiği anlamına gelir.

#### Nasıl Çalışır

Sistem içindeki Yorum nesnesindeki tüm değişiklikler bir olayı tetikler ve bu olay bir kuyruğa düşer. Bu kuyruğu <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">Webhook yönetim</a> panelinde, API'nizin kapandığı durumda izleyebilirsiniz. API'nize yapılan bir istek başarısız olursa, bunu bir takvim üzerinde yeniden kuyruklayacağız. O takvim 1 Dakika * tekrar deneme sayısıdır. Eğer çağrı bir kez başarısız olursa, bir dakika sonra tekrar deneyecektir. Eğer iki kez başarısız olursa, iki dakika bekleyecektir, ve bu şekilde devam edecektir.
Bu, yükle ilgili nedenlerden dolayı API'nizi zorlamamak için yapılmıştır.

#### Güvenlik & API Anahtarı

İstek başlığında "token" adıyla <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">API Secret</a>'inizi geçeceğiz.

Bu parametreyi uygun şekilde kontrol etmezseniz, entegrasyonunuz Doğrulanmış olarak işaretlenmeyecektir. Bu, FastComments ile yapılacak entegrasyonların güvenliğini sağlamak için bir önlemdir.

#### Sonuç Olarak

FastComments Webhook entegrasyonunun anlaşılması kolay ve hızlı bir şekilde kurulmasını umuyoruz.

Daha fazla sorunuz varsa, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">müşteri destek sayfası</a> ile iletişime geçmekten çekinmeyin.

Sağlıkla!

{{/isPost}}