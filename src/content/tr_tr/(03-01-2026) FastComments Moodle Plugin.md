---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Eklentisi[/postlink]

{{#unless isPost}}
FastComments artık kurslarınız için SSO, dizinli yorumlar ve işbirlikçi sohbet ile özel bir Moodle eklentisine sahip.
{{/unless}}

{{#isPost}}

### Yenilikler

Moodle için resmi FastComments eklentisini duyurmaktan heyecan duyuyoruz. Eğer Moodle kullanıyorsanız ve kurslarınıza canlı,
dizinli yorum veya işbirlikçi sohbet eklemek istiyorsanız, bu eklenti bunu basit hale getiriyor. Eski manuel PHP yaklaşımını
kaçınılmaz bir şekilde birkaç dakikada yüklenebilen ve mevcut Moodle kullanıcı hesaplarınızla entegre olan doğru bir Moodle eklentisi ile değiştiriyor. Eklenti, Moodle 4.1 ve sonraki sürümleri ile uyumludur ve kaynak [GitHub](https://github.com/FastComments/fastcomments-moodle) üzerinde mevcuttur.

### Başlarken

Yüklemek için, [GitHub deposundan](https://github.com/FastComments/fastcomments-moodle) ZIP dosyasını indirin ve bunu
`<moodle-root>/local/fastcomments` dizinine çıkarın. Ardından, bir site yöneticisi olarak giriş yapın ve **Site Yönetimi > Bildirimler** bölümüne gidin.
Moodle yeni eklentiyi algılayacak ve yüklemeyi otomatik olarak gerçekleştirecektir.

Yüklendikten sonra, **Site Yönetimi > Eklentiler > Yerel eklentiler > FastComments** kısmına giderek ayarları yapılandırın. 
Eğer Güvenli SSO kullanmak istiyorsanız, **Tenant ID** (FastComments kontrol panelinizde bulunur) ve **API Secret** bilgisine ihtiyacınız olacak; bunu öneriyoruz.

GitHub üzerinden manuel indirmenin geçici olduğunu, eklentinin Moodle eklenti dizininde onaylanmasını beklediğimiz için belirtmek gerekir. Onaylandığında, eklentiyi doğrudan Moodle’ın eklenti yükleyicisinden yükleyebileceksiniz.

### Yorumlama Tarzları

Eklenti, öğrencileriniz ve kurs yapınız için en uygun olanı seçebilmeniz için üç yorumlama stilini destekler.

**Yorumlar** modu, sayfa içeriğinin altında tam bir yorum widget'ı yerleştirir. Öğrenciler dizinli yanıtlar, @bahsetmeler,
oy verme ve beğenmeme, zengin metin editörü ve sayfadaki yeni yorumlar için abone olma özelliği ile bildirim çanına sahip olurlar.

<div class="text-center">
    <div class="sm">Bir kurs sayfasında yorumlar</div>
    <img src="images/moodle-course-comments.png" alt="Kurs Yorumları" title="Kurs Yorumları" />
</div>

**Collab Sohbet** modu, sayfanın en üstünde kullanıcıların metin seçip bir tartışma başlatmasını sağlayan bir çubuk ekler. 
Vurgulanan metin, içerikle bağlantılıdır, böylece sohbet tam olarak tartışılan konuya bağlı kalır. Ayrıca çevrimiçi kullanıcıları ve aktif tartışma sayısını gösterir. Bu mod, alt kısımda bir widget oluşturmaz.

<div class="text-center">
    <div class="sm">Seçilen metne bağlı işbirlikçi sohbet</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Sohbet" title="Collab Sohbet" />
</div>

**Collab Sohbet + Yorumlar** size her ikisini bir arada sunar. Öğrenciler metni vurgulayarak anlık tartışmalar yapabilir ve ayrıca
kontenin altında tam yorum widget'ını kullanabilirler. Bu, hızlı anlık geri bildirim ve daha uzun dizinli tartışmalar istediğiniz kurslar için harika bir seçenektir.

<div class="text-center">
    <div class="sm">Bir sayfada her iki yorumlama tarzı da aktif</div>
    <img src="images/moodle-page-comments.png" alt="Sayfa Yorumları" title="Sayfa Yorumları" />
</div>

### Otomatik SSO

Eklenti, üç SSO modunu destekler. **Güvenli SSO** önerilen seçenektir. Kullanıcı kimliğini sunucu tarafında API Secret'ınızı kullanarak
HMAC-SHA256 ile imzaladığından, kimlik bilgileri hiçbir zaman istemcide açıkta bulunmaz. Güvenli SSO ile Moodle yöneticileri otomatik olarak FastComments moderatörleri ile senkronize edilir; bu da site yöneticilerinizin herhangi bir ek ayar yapmadan yorumları moderatörlük yapabileceği anlamına gelir. Kullanıcı avatarları, isimleri ve e-posta adresleri güvenli bir şekilde aktarılır.

**Basit SSO** kullanıcı verilerini (isim, e-posta, avatar) istemci tarafında imza olmadan aktarır. Hızlı bir şekilde ayarlanabilir ama HMAC yaklaşımından daha az güvenlidir. Son olarak, **Hiçbiri** SSO'yu tamamen devre dışı bırakır, bu nedenle kullanıcılar anonim olarak yorum yapar.

### Kullanıcı Bildirim Tercihleri

Öğrenciler, FastComments bildirim ayarlarını doğrudan Moodle profillerinden yönetebilirler. **FastComments** bölümünde yanıt bildirimlerini açıp kapatabilirler (birisi yorumlarına yanıt verdiğinde e-posta alırlar) ve abonelik bildirimlerini (abone oldukları diziler için e-posta alırlar) değiştirebilirler. Bu, her şeyi tek bir yerde tutar ve öğrencilere ne kadar e-posta alacakları üzerinde kontrol sağlar.

### Sonuç Olarak

Moodle eklentisi artık mevcut. Tam kurulum rehberi için [Moodle Entegrasyon Rehberine](https://docs.fastcomments.com/guide-installation-moodle.html) göz atın ve kaynak kodu [GitHub](https://github.com/FastComments/fastcomments-moodle) üzerinde mevcut. Herhangi bir geri bildiriminiz varsa, aşağıda bize bildirin!

Selamlar!

{{/isPost}}

---