---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Spam Tespit Eğitimi Artık Her Kiracı İçin Ayrı[/postlink]

{{#unless isPost}}
FastComments, spam önleme sınıflandırıcısını yıllardır eğitiyor. Artık, eğitim
kapasiteleri yükseltildi.
{{/unless}}

{{#isPost}}

### Yenilikler

Bir yorumu spam olarak işaretlediğinizde veya spam olmayan olarak işaretlediğinizde, FastComments bu durumdan
gelecek spam tespiti için öğrenir.

Ancak, bu öğrenme herkes için aynı yerde gerçekleşti. Yani, başka bir kiracının
spam eğitimi sizin eğitiminizi etkiliyordu. Bunun artıları ve eksileri var. Öncelikle, diğer
moderatorlerin spam olarak gördüklerinden otomatik olarak faydalanıyorsunuz. Dezavantajı, eğer
yanlış bir karar verirlerse veya sizin içeriğinizden farklı bir içerikleri varsa ortaya çıkıyor.

Örneğin, başka bir kiracı yarış simülatörleri ile ilgili bir kitleye sahipse, yorumları
sıklıkla "kripto spam" olarak işaretleyebilirler. Sonuç olarak, sınıflandırıcı kripto ile ilgili metinleri
spam olarak ilişkilendirmeye başlar.

Ama, diyelim ki kripto odaklı bir siteniz var. Şimdi, birçok yorumunuz
spam olarak işaretlenmeye başlıyor, oysa bunlar spam değil. Bazıları gerçekten spam olabilir, ama çoğu
olmayabilir.

### İzole Eğitim

Yeni bir kiracı FastComments'a katıldığında, varsayılan olarak spam tespiti
diğer kiracıların geçmiş çalışmalarına dayanarak eğitilecektir.

Yorumları spam/spam olmayan olarak işaretlemeye başladığınızda, sistem kendi
eğitim setinizi kullanacak şekilde geçiş yapacaktır.

### Güncelleme 20 Eylül 2023

Bu kurulumun varsayılan olarak herkes için uygun olmadığını bulduk. İzole Spam Eğitimi sadece isteğe bağlı değildir.
Bunu Moderasyon Ayarları sayfasında "Spam Filtre" seçeneğinde "İzole"yi seçerek etkinleştirebilirsiniz.

Varsayılan artık tekrar "Paylaşılan" eğitim.

### Canlı

Kiracınıza ait eğitim seti artık her yorumunuzu spam veya spam olmayan olarak işaretlediğinizde
her zaman yeniden oluşturulmaktadır.

Önceden sistem spam indeksini periyodik olarak yeniden oluşturuyordu. Bu, sistemi aşırı yüklenmeye karşı korumak içindi.
Birkaç yıl sonra, sürekli eğitimden kaynaklanan yükün çok yüksek olmadığını bulduk, bu yüzden
sistemi her değişiklik yaptığınızda indeksin otomatik olarak güncellenmesi için güncelledik.

Bu indeksler, uygulama sunucularımızın ucunda depolanmakta ve hepsi bağımsız olarak güncellenmekte böylece
sistemi hızlı ve yanıt verebilir tutmaktadır.

### Nasıl Elde Edilir

Bu özellik tüm müşterilere sunulmuştur!

### Sonuç

Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun bulursanız bize bildirin.

Sağlıkla!

{{/isPost}}