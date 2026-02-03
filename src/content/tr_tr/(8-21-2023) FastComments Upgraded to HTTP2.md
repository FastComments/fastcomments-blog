---
[category:Performance]
###### [postdate]
# [postlink]FastComments HTTP/2'ye Yükseltildi[/postlink]

{{#unless isPost}}
FastComments'ın performansını daha da artıran bazı altyapı yükseltmeleri yaptık!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Jargon İçermektedir

### Yenilikler

FastComments lansmandan bu yana HTTP/1.1 üzerinde çalışıyordu. Yakın zamanda, tüm bölgelerdeki altyapımızı
HTTP/2'ye geçirdik.

### Etki

Bu güncelleme FastComments'ı modern standartlarla güncel tutarken bazı
performans iyileştirmeleri sağlıyor. Dezavantajı ise bazı eski tarayıcıların artık desteklenmemesi.

### Desteklenmeyen Tarayıcılar ve İstemciler

[Desteklenmeyen tarayıcıları buradan bulabilirsiniz](https://caniuse.com/http2). Temel sorun, yalnızca kısmi destek sunan IE11 olacaktır, ancak bu kullanıcıların Edge'e geçmesi gerekiyor.

Chrome, Firefox ve diğerleri yıllardır HTTP/2'yi destekliyor, bu yüzden bu değişikliği yapmanın güvenli olduğunu düşünüyoruz.

### Performans Faydaları

FastComments, sunulan varlıklar ve bunların sıralamaları açısından zaten oldukça optimize edilmiştir. Örneğin,
yorum widget'ı yalnızca birkaç istekte bulunarak yüklenir - ilk önce iframe, ardından istekleri azaltmak için stil içeren script ve sonra
gerekli tüm bilgileri almak için API'ye yapılacak istek. Diğer birçok hizmetle karşılaştırıldığında oldukça kompakt.

Bu yüzden, HTTP/2'nin gerçekten bu durumda fazla fayda sağladığı bir durum değil. HTTP/2'nin ana faydası eş zamanlı istekler yapabilmektir.

Ancak, HTTP/2 sıkıştırma konusunda bize yardımcı oluyor! Başlıklar artık daha kompakt olan binary bir protokolde gönderiliyor ve birçok varlık içeren belirli eklentiler, isteklerin
paralel olarak işlemesi nedeniyle çok daha hızlı yükleniyor.

### Sonuç Olarak

Bu değişiklikleri uygularken gösterdiğiniz sabır için müşterilerimize teşekkür ederiz. Umarız
FastComments'ı sevmeye devam edersiniz.

Şerefe!

{{/isPost}}

---