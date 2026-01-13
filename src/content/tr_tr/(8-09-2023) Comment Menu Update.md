---
[category:API & Development]
###### [postdate]
# [postlink]Yorum Menüsü Güncellemesi[/postlink]

{{#unless isPost}}
Bu güncelleme, FastComments'i özelleştiren geliştiriciler için hazırlanmıştır. API'de bazı değişiklikler yaptık ve bazı optimizasyonlar gerçekleştirdik.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

### Yenilikler

Bazı FastComments kiracıları yorum widget'ını özelleştirir. Bu, özelleştirmeleriniz ile bizim uygulamamız arasında bir sözleşme oluşturur. Bu sözleşmeyi ihlal etmemek için elimizden geleni yapıyoruz, ancak bu duyuru kapsamında küçük bir kırılma değişikliği gerçekleşmiştir.

### Geliştiriciler İçin

Yorum menüsü için bir CSS seçici değiştirildi.

Eski:

    .comment .menu .menu-content

Yeni:

    .menu-content

### Mevcut Kiracılar

Eğer zaten "menu-content" seçicisini kullanıyorsanız - tebrikler! Bu seçiciyi kullanan tüm kiracılarımızı gözden geçirdik ve widget yapılandırmalarını güncelleyerek kırılmaları önledik.

Herhangi bir sorunla karşılaşırsanız lütfen bize bildirin.

### Gerekçe

Yorum widget'ı oluşturulduğundan beri yorum menüsü tamamen CSS tabanlı bir açılır menüydü. Bu, çok fazla kod gerektirmeyen, basit ve hızlı bir açılır menü uygulama yöntemidir - FastComments'ın bir tasarım hedefidir.

Ancak, yıllar içinde bazı sorunlar ortaya çıktı.

Örneğin, yorum alanı belirli bir yüksekliğe sahip olduğunda ve kaydırılabilir olduğunda, Streaming Chat gibi, menünün alt kısmına erişmek zordur çünkü menü kaydırılabilir içerik alanının ötesine geçmeye çalışır. Bu, menünün bir kısmını görünmez hale getirir ve yaptığınız işlemi tamamlamak için fareyi hareket ettirip menünün üzerine yeniden gelmeniz gerekir. Bunun sinir bozucu olduğunu düşündük.

Menünün yönünü **yukarı** çevirme gibi bazı geçici çözümler denendi, ancak bu da widget yüksekliği yeterince uzun değilse ve menüde birçok işlem öğesi varsa - yöneticiler için olduğu gibi - işe yaramaz. Bu durumda menüyü kaydırılabilir içerik alanının altında bırakmak ideal olacaktır.

### Boyut Faydaları

Bu değişikliğin bir avantajı, birçok kodu asenkron olarak yüklenecek bir modüle soyutlayabilmemizdir. Bu, yorum verileri üzerinde gerçekleştirilebilecek eylemleri genişletmemizi sağlayacak ve widget'ın başlangıç yükünü kabarık hale getirmeyecek. İlk defa düzenleme menüsünün üzerine geldiğinizde bir ağ çağrısı yapılıyor, ancak başlangıç paketi oldukça küçüktür (< 1kb) dolayısıyla bu pek fark edilmeyecektir.

Yazılımı geliştirmeye devam etmek ve aynı zamanda zamanla boyutunu küçültmek oldukça zor. Genellikle yazılım hızlı başlar ve yavaşlar. Bu nedenle, FastComments'ı hızlı tutmaya devam etmekte her zaman mutluyuz:

    Önce: 28.76kb gzipped (108.02kb toplam)
    Sonra: 28.39kb gzipped (105.79kb toplam)

Daha az kod, sayfa yüklemesi sırasında tarayıcınızın işlemesi gereken daha az kod anlamına gelir. Bu durum, daha fazla özellik eklendikçe genişleyecektir.

### Performans Faydaları

Eski menü, tüm menü öğelerini render ediyordu ve eklentilerin ekleyecek öğeleri olup olmadığını görmek için eklentileri yüklüyordu ve bunları da render ediyordu - her yorum için - böylece içerik fareniz için hazır oluyordu.

Genellikle sadece 30 - 100 nesne vardır, bu yüzden bu pek sorun olmuyor, ancak etki büyüyordu. Yeni sistem, bu endişeyi ortadan kaldırıyor çünkü menü artık sadece talep üzerine render ediliyor.

Değişim, yeni menünün istediğimizi başarmak için JS kullanılarak konumlandırılması ve render edilmesi gerektiği anlamına geliyor. Ancak, bunu optimize etmeye devam edeceğiz, şu anda iyi bir performansa sahip.

### Sonuç

Bu değişiklikleri uygularken gösterdiğiniz sabır için müşterilerimize teşekkür ederiz. FastComments'ı sevmeye devam etmenizi umuyoruz.

Şerefe!

{{/isPost}}

---