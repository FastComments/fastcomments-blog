---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Eklentisi[/postlink]

{{#unless isPost}}
FastComments, kurslarınız için SSO, temasız yorumlar ve işbirlikçi sohbet ile özel bir Moodle eklentisine sahip.
{{/unless}}

{{#isPost}}

### Yenilikler

Moodle için resmi FastComments eklentisini duyurmaktan heyecan duyuyoruz. Eğer Moodle kullanıyorsanız ve kurslarınıza canlı, temalı yorumlar ya da işbirlikçi sohbet eklemek istiyorsanız, bu eklenti bunu basit hale getiriyor. Eski manuel PHP yaklaşımını birkaç dakikada kurulan ve mevcut Moodle kullanıcı hesaplarınızla entegre olan uygun bir Moodle eklentisi ile değiştiriyor. Eklenti Moodle 4.1 ve sonrasıyla uyumludur ve kaynak kodu [GitHub](https://github.com/FastComments/fastcomments-moodle) üzerinde mevcuttur.

### Başlarken

Kurmak için, eklentiyi [Moodle Eklenti Dizini](https://moodle.org/plugins/local_fastcomments) üzerinden edinin ve Moodle sitenizin eklenti yükleyicisi aracılığıyla kurun. Alternatif olarak, bunu indirip `<moodle-root>/local/fastcomments` dizinine çıkarabilirsiniz; ardından site yöneticisi olarak giriş yapın ve **Site Yönetimi > Bildirimler** kısmına gidin. Moodle yeni eklentiyi algılayacak ve kurulumu otomatik olarak gerçekleştirecektir.

Kurdularında, yapılandırmak için **Site Yönetimi > Eklentiler > Yerel eklentiler > FastComments** kısmına gidin. **Tenant ID** ('FastComments' kontrol panelinizde bulunur) ve **API Secret**'ınıza ihtiyacınız olacak, eğer Güvenli SSO kullanmak isterseniz, bunu öneriyoruz.

### Yorumlama Stillleri

Eklenti, öğrencileriniz ve kurs yapınız için en iyi şekilde çalışan üç yorumlama stilini destekler.

**Yorumlar** modu, sayfa içeriğinin altında tam bir yorum widget'ı yerleştirir. Öğrenciler temalı yanıtlar, @bahsetmeler, oy verme, zengin metin editörü ve bir sayfadaki yeni yorumlara abone olmak için bildirim zili alırlar.

<div class="text-center">
    <div class="sm">Bir kurs sayfasındaki yorumlar</div>
    <img src="images/moodle-course-comments.png" alt="Kurs Yorumları" title="Kurs Yorumları" />
</div>

**Collab Sohbet** modu, kullanıcıların metni seçip bir tartışma başlatmasını sağlayan sayfanın üst kısmında bir çubuk ekler. Vurgulanan metin içeriğe bağlanır, bu nedenle konuşma tam olarak tartışılan konuya bağlı kalır. Ayrıca çevrimiçi kullanıcıları ve aktif tartışma sayısını gösterir. Bu mod alt widget oluşturmamazlık eder.

<div class="text-center">
    <div class="sm">Seçilen metne bağlı işbirlikçi sohbet</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Sohbet" title="Collab Sohbet" />
</div>

**Collab Sohbet + Yorumlar**, ikisini birden sunar. Öğrenciler metni vurgulayarak çevrimiçi tartışmalar yapabilir ve ayrıca içeriğin altında tam bir yorum widget'ını kullanabilirler. Bu, hızlı çevrimiçi geri bildirim ve daha uzun temalı tartışmalar istediğiniz kurslar için harikadır.

<div class="text-center">
    <div class="sm">Bir sayfadaki her iki yorumlama stili aktif</div>
    <img src="images/moodle-page-comments.png" alt="Sayfa Yorumları" title="Sayfa Yorumları" />
</div>

### Otomatik SSO

Eklenti, üç SSO modunu destekler. **Güvenli SSO**, önerilen seçenektir. Bu, kullanıcı kimliğini sunucu tarafında HMAC-SHA256 ile API Secret'ınızı kullanarak imzaladığı için kimlik bilgileri asla istemcide açığa çıkmaz. Güvenli SSO ile Moodle yöneticileri otomatik olarak FastComments moderatörleri olarak senkronize edilir, bu da site yöneticilerinizin herhangi bir ekstra kurulum olmadan yorumları denetleyebileceği anlamına gelir. Kullanıcı avatarları, isimleri ve e-posta adresleri güvenli bir şekilde iletilir.

**Basit SSO**, kullanıcı verilerini (isim, e-posta, avatar) istemci tarafında imza olmadan iletir. Kurulumu hızlıdır ancak HMAC yaklaşımından daha az güvenlidir. Son olarak, **Hiçbiri** SSO'yu tamamen devre dışı bırakır, bu da kullanıcıların anonim olarak yorum yapmasını sağlar.

### Kullanıcı Bildirim Tercihleri

Öğrenciler, FastComments bildirim ayarlarını doğrudan Moodle profillerinden yönetebilir. **FastComments** bölümünde yanıt bildirimlerini (birisi yorumlarına yanıt verdiğinde e-posta alırlar) ve abonelik bildirimlerini (abone oldukları diziler için e-posta alırlar) açıp kapatabilirler. Bu, her şeyi tek bir yerde tutar ve öğrencilere aldıkları e-posta miktarı üzerinde kontrol sağlar.

### Sonuç Olarak

Moodle eklentisi şimdi mevcut. Tam kurulum kılavuzu için [Moodle Entegrasyon Kılavuzu](https://docs.fastcomments.com/guide-installation-moodle.html) kısmına göz atın, kaynak kodu ise [GitHub](https://github.com/FastComments/fastcomments-moodle) üzerindedir. Herhangi bir geri bildiriminiz varsa aşağıda bize bildirin!

Şerefe!

{{/isPost}}