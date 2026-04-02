---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Moderasyon Sayfası Artık Canlı[/postlink]

{{#unless isPost}}
FastComments moderasyon sayfası, artık mevcut filtrelerinize uyan yeni yorumlar geldiğinde canlı bir bildirim gösteriyor.
{{/unless}}

{{#isPost}}

### Yenilikler

Moderasyon sayfası, yorumları yönetmek için her zaman güçlü bir araç olmuştur. Durumuna göre filtreleyebilir, metne göre arama yapabilir, sayfa
veya kullanıcı bazında filtreleyebilir ve toplu işlemler gerçekleştirebilirsiniz. Ancak yeni yorumları görmek için sayfayı yenilemeniz gerekiyordu.

Artık böyle değil! Moderasyon sayfası, mevcut filtrelerinize uyan yeni yorumlar geldiğinde bunu gösteriyor. Yorum listesine yeni yorumların beklediğini belirten bir banner ekranda görünür ve üzerine tıkladığınızda, tam sayfa yenilemesine ihtiyaç duymadan yorumları yükler.

"Filtreleriniz için yeni yorumlar" mesajı çoğu durumda anlık olarak görünmelidir.

### Filtre Değerlendirmesi

Taşıma katmanı, tüm moderasyon filtrelerini sunucu tarafında değerlendirir. Bu, durum filtrelerini (gözden geçirilmesi gerek, onaylanması gerek, spam, işaretlenmiş,
yasaklı), metin filtrelerini (kullanıcı kimliği, sayfa URL'si, alan adı) ve hatta metin aramasını içerir. Alıntılanmış metinler <div class="code">"tam ifade"</div> gibi, tam büyük/küçük harf duyarsız alt dize eşleşmesi yaparken, alıntılanmamış terimler bulanık büyük/küçük harf duyarsız eşleşme yapar.

Bu, spam yorumlar için filtreleme yapıyorsanız, onaylanmış yorumlar hakkında bildirim almayacağınız anlamına gelir. Belirli bir ifadeyi içeren yorumlar arıyorsanız, yalnızca eşleşen yorumlar banner'ı tetikler.

### Moderasyon Grupları

Hesabınız, hangi moderatörlerin hangi yorumları görebileceğini kısıtlamak için moderasyon grupları kullanıyorsa, bu kısıtlamalar canlı bildirimler için tamamen uygulanır. Taşıma katmanı, moderatörün atandığı gruplara dayanan grup kısıtlamalarını içeren filtreyi oluşturmak için uygulama sunucusuna geri çağırır. Bu filtre, WebSocket bağlantısının süresi boyunca önbelleğe alınır ve moderatör filtrelerini değiştirdiğinde güncellenir.

### Kaçırılan Olaylar

Eğer bir moderatörün bağlantısı geçici olarak kesilirse (ağ sorunları, dizüstü bilgisayarın uykuda olması vb.), sistem otomatik olarak yeniden bağlandığında eski duruma geri döner, böylece hiçbir işinizi kaçırmazsınız.

### Performans

Bu özelliği moderasyon sayfası yükleme süresi üzerinde minimum etki olacak şekilde tasarladık.

### Çoklu Bölge

Bu özellik, dünya genelinde dağıtılmış mimarimizle sorunsuz çalışır, böylece dünya genelinde dağıtılmış moderasyon ekipleri aynı canlı görünümü elde eder.

### Sonuç Olarak

Umarız bu özellik, moderatörlerin zamanını tasarruf ettirir ve moderasyon deneyimini daha hızlı hale getirir. Her zamanki gibi, geri bildirimleri ve destekleri için müşterilerimize teşekkür ederiz.

Şerefe!

{{/isPost}}