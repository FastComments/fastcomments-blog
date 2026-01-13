---
[category:Features]
###### [postdate]
# [postlink]Kiracı Yönetimi Güncellemesi[/postlink]

{{#unless isPost}}
FastComments, kiracılarını yönetme etkileşimini geliştirdi!
{{/unless}}

{{#isPost}}

### Yenilikler

11 Aralık 2023 itibarıyla FastComments artık diğer kiracı kullanıcılarını taklit etmeden kiracılar arasında geçiş yapma yeteneğine sahip.

### Hedef Kitle

Bu güncelleme, tek bir site yöneten yorumcular veya site yöneticileri için değildir. Bu, yalnızca birden fazla site veya kiracı yöneten yöneticilere fayda sağlar.

### Yöneticiler Üzerindeki Etki

Daha önce, kiracı oluşturmak ve kullanıcı değiştirmek gerçekten zordu. Bazı yaygın sorunlar şunlardı:

1. Kiracınızı oluştururken bir kullanıcı oluşturmanız gerekiyordu, çünkü o kullanıcı kiracının "sahibi" idi.
2. Bu, birden fazla alt kiracı için tek bir e-posta/hesap kullanmak isteseniz bile, her site için yeni bir e-posta kullanmanız gerektiği anlamına geliyordu.
3. Kiracılar arasında geçiş yapmak, taklit gerektiriyordu, bu da kullanıcılarınızın tüm kiracılarda, aynı izinlerle ve benzeri şekilde kopyalanması gerektiği anlamına geliyordu.

Artık:

1. Bir kiracı oluştururken kullanıcı oluşturulmasına gerek yoktur.
2. Uygun izinlere sahip herhangi bir Süper Yönetici kullanıcısı, tüm alt kiracılarda aynı izinlere sahiptir.
3. Kiracılar listesindeki `Switch` düğmesi, mevcut kullanıcınızı ve izinlerinizi korur, ancak hangi kiracıda oturum açtığınızı değiştirir.
4. Bir ana kiracının yöneticisiyseniz, yorum widget’ını kullanırken alt kiracılarda moderator izinleriniz vardır.

Olaylar, geçiş yaptığınız kiracı için Denetim Günlüğü'nde kaydedilir.

### Taklit

Kullanıcıları taklit etmeye devam edebilirsiniz. Bir kiracıya geçin ve `Users` sayfasına gidin.

### Geliştiriciler İçin & Dikkat Edilmesi Gerekenler

`POST /tenants` API'sini kullanırken `email` alanı artık isteğe bağlıdır. Belgelendirme güncellenmiştir.

### Gelecek Güncellemeler

Gelecekte, kiracıların silinmesi gibi kiracılar listesinde daha fazla yönetimsel eylem olacak.

### Sonuç

Tüm büyük sürümler gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfederseniz bize bildirin.

İyi çalışmalar!

{{/isPost}}

---