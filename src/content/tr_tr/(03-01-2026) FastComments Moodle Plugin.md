---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Eklentisi[/postlink]

{{#unless isPost}}
FastComments artık kurslarınız için SSO, iptal edilmiş yorumlar ve işbirlikçi sohbet içeren özel bir Moodle eklentisine sahiptir.
{{/unless}}

{{#isPost}}

### Yenilikler

Moodle için resmi FastComments eklentisini duyurmaktan heyecan duyuyoruz. Eğer Moodle kullanıyorsanız ve kurslarınıza canlı, iptal edilmiş yorumlar veya işbirlikçi sohbet eklemek istiyorsanız, bu eklenti bunu basit hale getiriyor. Eski manuel PHP yaklaşımını, dakikalar içinde kurulan ve mevcut Moodle kullanıcı hesaplarınızla entegre olan doğru bir Moodle eklentisi ile değiştiriyor. Eklenti Moodle 4.1 ve sonraki sürümlerle çalışır ve kaynak kodu [GitHub](https://github.com/FastComments/fastcomments-moodle) üzerinde mevcuttur.

### Başlarken

Kurmak için, [GitHub havuzundan](https://github.com/FastComments/fastcomments-moodle) ZIP dosyasını indirin ve `<moodle-root>/local/fastcomments` dizinine çıkarın. Ardından, bir site yöneticisi olarak giriş yapın ve **Site Yönetimi > Bildirimler**'i ziyaret edin. Moodle, yeni eklentiyi algılayacak ve kurulumu otomatik olarak gerçekleştirecektir.

Kurulduktan sonra, yapılandırmak için **Site Yönetimi > Eklentiler > Yerel eklentiler > FastComments** bölümüne gidin. **Tenant ID**'nizi (FastComments kontrol panelinizde bulunabilir) ve Secure SSO kullanmak istiyorsanız **API Secret**'ınızı almanız gerekecek, bu bizim önerimizdir.

GitHub'dan manuel indirme, eklentinin Moodle eklenti dizininde onaylanmasını beklerken geçicidir. Onaylandıktan sonra, Moodle'ın eklenti yükleyicisinden doğrudan yükleyebileceksiniz.

### Yorumlama Stilleri

Eklenti, öğrencileriniz ve kurs yapınız için en iyi çalışanı seçebilmeniz için üç yorumlama stilini destekler.

**Yorumlar** modu, sayfa içeriğinin altında tam bir yorum widget'ı yerleştirir. Öğrenciler iptal edilmiş yanıtlar, @bahsetme, oylama ve oylama düşürmeyi, zengin metin düzenleyicisini ve bir sayfadaki yeni yorumlara abone olmak için bildirim zilini alırlar.

<div class="text-center">
    <div class="sm">Bir kurs sayfasında yorumlar</div>
    <img src="images/moodle-course-comments.png" alt="Kurs Yorumları" title="Kurs Yorumları" />
</div>

**İşbirlikçi Sohbet** modu, sayfanın üst kısmına bir çubuk ekler ve kullanıcıları metin seçip bir tartışma başlatmaları için yönlendirir. Vurgulanan metin içeriğe sabitlenir, böylece konuşma tam olarak tartışılan konuya bağlı kalır. Ayrıca çevrimiçi kullanıcıları ve aktif tartışma sayısını gösterir. Bu mod, alt widget'ı render etmez.

<div class="text-center">
    <div class="sm">Seçilen metne sabitlenmiş işbirlikçi sohbet</div>
    <img src="images/moodle-collab-chat.png" alt="İşbirlikçi Sohbet" title="İşbirlikçi Sohbet" />
</div>

**İşbirlikçi Sohbet + Yorumlar** her ikisini birden sunar. Öğrenciler, satır içi tartışmalar için metin vurgulayabilir ve ayrıca içeriğin altında tam yorum widget'ını kullanabilir. Bu, hem hızlı satır içi geri bildirim hem de daha uzun iptal edilmiş konuşmalar istediğiniz kurslar için harikadır.

<div class="text-center">
    <div class="sm">Bir sayfada her iki yorumlama stili de aktif</div>
    <img src="images/moodle-page-comments.png" alt="Sayfa Yorumları" title="Sayfa Yorumları" />
</div>

### SSO Ki Sadece Çalışıyor

Eklenti üç SSO modunu destekler. **Güvenli SSO** önerilen seçenektir. Kullanıcı kimliğini sunucu tarafında HMAC-SHA256 ile API Secret'ınızı kullanarak imzalar, böylece kimlik bilgileri asla istemcide açığa çıkmaz. Güvenli SSO ile Moodle yöneticileri otomatik olarak FastComments moderatörleri olarak senkronize edilir, bu da site yöneticilerinizin ekstra bir ayar olmadan yorumları yönetebileceği anlamına gelir. Kullanıcı avatarları, adları ve e-posta adresleri güvenli bir şekilde aktarılır.

**Basit SSO**, kullanıcı verilerini (ad, e-posta, avatar) imzasız bir şekilde istemci tarafında iletir. Hızlı bir şekilde kurulum yapılır ancak HMAC yaklaşımından daha az güvenlidir. Son olarak, **Hiçbiri** SSO'yu tamamen devre dışı bırakır, böylece kullanıcılar anonim olarak yorum yapar.

### Kullanıcı Bildirim Tercihleri

Öğrenciler, FastComments bildirim ayarlarını doğrudan Moodle profillerinden yönetebilir. **FastComments** bölümünde yanıt bildirimlerini (birisi yorumuna yanıt verdiğinde e-posta almak) ve abonelik bildirimlerini (abone oldukları diziler için e-posta almak) açıp kapatabilirler. Bu, her şeyi tek bir yerde tutar ve öğrencilere ne kadar e-posta alacakları üzerinde kontrol sağlar.

### Sonuç Olarak

Moodle eklentisi artık mevcut. Tam kurulum rehberi için [Moodle Entegrasyon Kılavuzu](https://docs.fastcomments.com/guide-installation-moodle.html)'na göz atın ve kaynak kodu [GitHub](https://github.com/FastComments/fastcomments-moodle) üzerinde mevcuttur. Feedback'iniz varsa aşağıda bize bildirin!

Şerefe!

{{/isPost}}

---