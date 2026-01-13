---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments Yeni Bir Görünüm Edindi[/postlink]

{{#unless isPost}} FastComments güncellendi. Güncelleme hakkında bilgi edinin ve nasıl alabileceğinizi öğrenin. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçermektedir

### Yeni Görünüm

Bugüne kadar, FastComments yorum widget'ının görünümü ve hissiyatı sadece kısmi değişikliklerle evrildi. Bugün, tamamen yeni bir sürüm yayımlıyoruz!

Karşılaştırmayı aşağıda kontrol edin (karşılaştırmak için kaydırıcıyı sürükleyin):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Mevcut Müşteriler

Kullanıcı tabanımızın büyük bir kısmı yorum widget'ını özelleştirdiği için, yeni UI'yı tamamen ayrı tuttuk. Taşınana kadar hiçbir değişiklik görmemelisiniz.

### Kimin Elde Edeceği

Bugünden itibaren kaydolan yeni müşteriler otomatik olarak yeni tasarımı alacak. Tüm framework'lerimiz, kütüphanelerimiz ve eklentilerimiz, FastComments yorum widget'ın yeni sürümünü entegre edecek şekilde güncellemeler aldı.

### Önceki Sürümün Sonu

Daha önceki yorum widget'ının sona erme tarihini şu anda belirlemiyoruz. Bu, gelecekte bir tarih açıklamayacağımız anlamına gelmiyor. Ancak, tarih açıklandığında makul bir süre (açıklamadan sonra 6 - 12 ay) tanıyacağız.

Otomatik test suite'umuz, önceki sürümün hala sürekli otomatik test alabilmesi için farklı yorum widget'ı sürümlerini destekleyecek şekilde güncellendi.

### Karanlık Mod ve Diğer Özellikler

Yeni tasarım karanlık modu destekliyor, tıpkı orijinal yorum widget'ı gibi. Tüm özellik bayrakları ve ayarlar taşındı.

Karanlık Mod açısından, eski yorum UI ile, Karanlık Mod için varlıklar her zaman sayfa yüklemesi sırasında dahil ediliyordu, kullanılmasa bile. Bu, her zaman istemciye indirilen ekstra yaklaşık 2kb anlamına geliyordu - ihtiyaç duyulmasa bile.

Yorum widget'ının yeni sürümü, yalnızca gerektiğinde bu varlıkları, stil dahil, alıyor.

### Varsayılan Avatar

Yeni UI'da kullanılan varsayılan avatar farklı. Taşınma sırasında, yönetici paneli ve tüm bildirim e-postalarında ürün boyunca kullanılan varsayılan avatar da güncellenecek.

### Özelleştirme Kuralı Sonuçları

Kamuya açık yorum widget'ında stil değişiklikleri yaptığımızda, müşterilerimizin özelleştirmelerini bozabileceğimizin farkındayız. Endişelenmeyin, sizi koruuyoruz ve herkesin özel widget stilini kontrol ettik, böylece gerileme olmadığından emin olduk. Ancak, sorun yaşıyorsanız lütfen bize bildirin.

### Performans Sonuçları

Yorum widget'ının toplam boyutu 15.4kb'den 17.4kb'ye yükseldi. UI'nın ne kadar daha iyi göründüğü için bu küçük boyut artışının buna değdiğini düşünüyoruz, ancak bu durumu geri düşürmek için planladığımız tedbirler var.

Genel olarak, yeni UI daha hızlı yükleniyor, çünkü daha fazla varlık artık birlikte paketleniyor, dolayısıyla daha az isteğe neden oluyor.

### Nasıl Taşınılır

#### Destek Üzerinden

Tek yapmanız gereken, destek temsilcinizle iletişime geçmek veya [buradan](https://fastcomments.com/auth/my-account/help) görüşmeyi başlatmak.

#### WordPress

**WordPress** kullanıyorsanız, en son sürüme güncelleyerek sahip olabileceğiniz herhangi bir özel stili güncelleyin.

#### Özel Entegrasyonlar

**VanillaJS** yorum widget'ını kullanıyorsanız, sadece şunu değiştirin:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Şuna:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

**React, Angular veya Vue** kütüphanelerini kullanıyorsanız, sadece versiyon 2'ye güncelleyin.

### Bazı Eğlenceli İstatistikler

Tasarımdan gerçekleştirmeye kadar, bu iki aylık bir proje olup **100+'den fazla dosya** içermekte ve **dokuz binden fazla satır kod** değiştirilmiştir.

Ayrıca, yorum widget'ı sürümleri arasında paylaşılan bir kod tabanına sahip olabilmek için yapı sistemimizi tamamen yeniledik. Bu sistem, yalnızca UI'nın uygun sürümü için kodu dahil etmek için derleme zamanı ifadelerini kullanmamıza olanak tanıyarak widget paketinin boyutunu azaltıyor.

### Geleceğe Yönelik

Önceki tasarımımız 2019'dan 2021'in ortalarına kadar sürdü. Bu yeni görünümün bizi geleceğe taşıyacağını umuyoruz ve çoklu yorum UI sürümlerini yönetmek için yeni alt yapımız, FastComments'ın zamanla müşteri tabanımızda kesintiye uğramadan büyümesine olanak tanıyacak.

Keyifli yorumlar!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---