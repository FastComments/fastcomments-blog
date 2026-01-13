---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Şifre Kimlik Doğrulaması Artık Destekleniyor[/postlink]

{{#unless isPost}}
Bu güncellemeyle birlikte FastComments, mevcut e-posta tabanlı sisteme ek olarak geleneksel şifre tabanlı kimlik doğrulamayı da destekliyor.
{{/unless}}

{{#isPost}}

### Yeni Olanlar

FastComments, lansmanından bu yana sihirli e-posta bağlantıları aracılığıyla kimlik doğrulaması yapıyordu. Bunun nedeni, kullanıcıların ilk yorumlarını bıraktıklarında kullandıkları sistemle giriş mekanizmalarını birleştirebilmemizdi. Ancak, tüm e-posta sunucuları aynı değil ve bazen bir bağlantının alınması dakikalar alabiliyordu. Bu bazı kullanıcılarımız için oldukça sinir bozucu oldu.

2023'ün sonlarına doğru, FastComments artık şifreler aracılığıyla kimlik doğrulamasını destekliyor! Giriş sayfasında artık e-posta ile giriş yapan bir sekme ve şifre ile giriş yapan bir sekme olmak üzere iki sekme var.

### Şifre Nasıl Ayarlanır

Bir şifre ayarlamak için [Hesabım -> Hesap Detayları -> Şifre Değiştir](https://fastcomments.com/auth/my-account/edit-details/change-password) sayfasına gidebilirsiniz.

Sadece bir sıfırlama bağlantısı talep edin. E-posta adresinize bir bağlantı gönderilecektir ve bu bağlantıya tıklayarak yeni bir şifre belirleyebilirsiniz. Bağlantı yalnızca bir kez kullanılabilir ve kullanılmadığında süresi dolar.

### Şifre Saklama ve Güvenlik

Şifreler saklanmaz. Bunun yerine, şifreler bcrypt kullanılarak 11 tur tuz ile karmaşaya tabi tutulur. Şifre tabanlı sisteme eşzamanlı erişim sınırlıdır ve çeşitli şifre ile ilgili saldırıları önlemek için izlenir.

### Gelecek

Gelecekte 2FA desteği sunmayı planlıyoruz.

### Sonuç

Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde piyasaya sürmek için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorunla karşılaşırsanız bize bildirin.

Şerefe!

{{/isPost}}

---