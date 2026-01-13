---
[category:Features]

###### [postdate]
# [postlink]Görüntüleme Adlarını Yayınlama[/postlink]

{{#unless isPost}}
FastComments, SSO kullanıcıları için her zaman görüntüleme adlarını destekledi. Ancak, bu hiç düzenli yorumculara sunulmamıştı. Bugün bu durum değişiyor!
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments, SSO kullanıcıları için her zaman görüntüleme adlarını destekledi. Ancak, bu hiç düzenli yorumculara sunulmamıştı. Bugün bu durum değişiyor!

Artık [Hesap Detayları](https://fastcomments.com/auth/my-account/edit-details) sayfasında yeni bir `Görüntüleme Adı` alanını doldurabilirsiniz. `Görüntüleme Adı`, yorumlarınızda ve profillerinizde gösterilecektir.

### Emojiler

Geçmişte, kullanıcılar kullanıcı adlarında emojileri kullanmakta zorlanıyordu çünkü giriş yapmak için kullanıcı adınızı girmeniz gerekiyordu. Ancak, artık `Görüntüleme Adı` emojiler içerebilir.

### Eşsizlik ve Suistimal

`Görüntüleme Adı`nın amacı, benzersiz olmamasıdır. Eğer iki farklı büyük toplulukta iki FastComments.com kullanıcısının benzer isimleri varsa, o zaman tercih ettikleri görüntüleme adını ayarlayabilmelerini isteriz. Ancak, kullanıcıların global FastComments hesaplarıyla yorum yapmalarının kısıtlanamayacağı için, bu bazen karışıklığa sebep olabilir.

Başka bir kullanıcıya ya da moderatöre benzer bir adına sahip olmak, başlı başına bir suistimal durumu değildir. Ancak, bu durumu kasıtlı olarak başka kullanıcıları taklit ederek suistimal ederseniz, bu özelliği hesabınızda devre dışı bırakabiliriz ve sadece `kullanıcı adı` kullanmakla sınırlı kalırsınız.

### Giriş Yapma

Hala giriş yapmak için kullanıcı adınızı kullanıyorsunuz - **görüntüleme adınızı değil!**

### Geliştiriciler İçin & Dikkat Edilmesi Gerekenler

API üzerinden sunulan standart `Kullanıcı` nesneleri artık `displayName` içeriyor.

### Sonuç

Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etme, test etme ve düzgün bir şekilde yayımlama fırsatına sahip olduğumuz için mutluyuz. Aşağıda herhangi bir sorun keşfederseniz bize bildirin.

Şerefe!

{{/isPost}}

---