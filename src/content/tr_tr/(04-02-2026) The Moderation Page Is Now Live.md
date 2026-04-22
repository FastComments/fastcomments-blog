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

Moderasyon sayfası, yorumları yönetmek için her zaman güçlü bir araç olmuştur. Duruma göre filtreleyebilir, metne göre arama yapabilir, sayfa
veya kullanıcıya göre filtreleme yapabilir ve toplu işlemler gerçekleştirebilirsiniz. Ancak yeni yorumları görmek için sayfayı yenilemeniz
gerekirdi.

Artık değil! Moderasyon sayfası, mevcut filtrelerinize uyan yeni yorumlar geldiğinde bunu gösteriyor. Yorum listesi üstünde,
bekleyen yeni yorum sayısını bildiren bir banner beliriyor ve üzerine tıkladığınızda, sayfayı tamamen yenilemeden bunları satır içi
olarak yüklüyor.

"Filtreleriniz için yeni yorumlar" mesajı, çoğu durumda neredeyse anlık olarak görünmelidir.

### Filtre Değerlendirmesi

Taşıma katmanı tüm moderasyon filtrelerini sunucu tarafında değerlendirir. Bu, durum filtrelerini (inceleme gerektirir, onay gerektirir, spam, işaretli,
yasaklı), dize filtrelerini (kullanıcı ID'si, sayfa URL'si, alan adı) ve hatta metin aramasını içerir. `"tam ifade"` gibi alıntılanmış metinler
tam eşleşme ve büyük/küçük harf duyarsız alt dize eşleşmesi yaparken, alıntılanmamış terimler belirsiz büyük/küçük harf duyarsız eşleşme yapar.

Bu, spam yorumları için filtreleme yapıyorsanız, onaylanmış yorumlar hakkında bildirim almayacağınız anlamına gelir. Belirli bir ifadeyi
içeren yorumları arıyorsanız, yalnızca eşleşen yorumlar bannerı tetikler.

### Moderasyon Grupları

Hesabınız, moderatörlerin hangi yorumları görebileceğini kısıtlamak için moderasyon gruplarını kullanıyorsa, bu kısıtlamalar canlı
bildirimler için tam olarak uygulanır. Taşıma katmanı, moderatörün atandığı gruplara dayanan grup kısıtlamalarını içeren filtreyi oluşturmak
için uygulama sunucusuna geri çağrılar yapar. Bu filtre, WebSocket bağlantısı süresince önbelleğe alınır ve moderatör filtreleri değiştiğinde
güncellenir.

### Kaçırılan Olaylar

Bir moderatörün bağlantısı geçici olarak kesilirse (ağ sorunları, dizüstü bilgisayar uykuya geçmesi vb.), sistem otomatik olarak yeniden
bağlandığında eski durumu yakalar, böylece işinizi kaçırmazsınız.

### Performans

Bu özelliği, moderasyon sayfası yükleme süresi üzerinde minimum etkiye sahip olacak şekilde tasarladık.

### Çok Bölge

Bu özellik, küresel dağılmış mimarimizle sorunsuz bir şekilde çalışır, böylece küresel dağıtılmış moderasyon ekipleri de aynı canlı görünümü
alır.

### Sonuç

Bu özelliğin moderatörlere zaman kazandırmasını ve moderasyon deneyimini daha yanıt verici hale getirmesini umuyoruz. Her zamanki gibi,
geribildiriminiz ve desteğiniz için müşterilerimize teşekkür ederiz.

Sağlıkla!

{{/isPost}}