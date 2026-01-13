---
[category:Güvenlik]

###### [postdate]
# [postlink]FastComments Artık Katı Üçüncü Taraf Çerez Ayarlarını Destekliyor[/postlink]

{{#unless isPost}}
Şu ana kadar, FastComments'ın tam olarak çalışabilmesi için üçüncü taraf çerezlerinin etkinleştirilmesi gerekiyordu. Artık durum böyle değil!
{{/unless}}

{{#isPost}}

### Yeni Nedir

Varsayılan olarak üçüncü taraf çerezlerinin devre dışı bırakılması, gizlilik odaklı tarayıcılarda norm haline geliyor. Bunun bir örneği, iOS'taki Apple'ın Safari'sidir; burada
FastComments ile yorum yapmak için e-posta adresinizi bırakırsanız, o yorumu doğrularsanız ve sonra yeni bir yorum bırakmak veya birine yanıt vermek için o sayfaya geri dönerseniz, bıraktığınız diğer tüm yorumların doğrulanmamış olarak işaretlendiğini göreceksiniz.

Bu sadece yorumlarda `Doğrulanmamış` etiketi gösteren varsayılan ayar ile gerçekleşecektir. Ancak, bu otomatik onaylar gibi diğer şeyleri etkileyebilir
eğer otomatik onaylar sadece doğrulanmış yorumlar için etkinleştirilmişse.

Tahmin edebileceğiniz gibi, bu, bir kullanıcının yorumunu doğrulayıp "Beni Girişte Tut" butonuna tıkladığında ve siteye ya da uygulamanıza geri döndüğünde hala giriş yapmamış olması gibi hayal kırıklığı yaratan bir duruma yol açabilir. Not edin ki bu, SSO entegrasyonları için geçerli değildir; çünkü SSO çerezlere bağlı değildir.

Artık, widget ayarlarında etkinleştirilebilecek `Üçüncü Taraf Çerez Popup'ını Etkinleştir` adlı yeni bir ayar ile bu sorun, kullanıcının çerezini alan bir popup açılarak çözülmektedir. Şimdilik bu sadece yorum widget'ı ile etkileşime girdiklerinde gerçekleşiyor, ancak sonuç olarak
yorumları, FastComments.com oturumlarından gönderilecek ve yorumları doğrulanmış işaretlenecektir.

### Nasıl Alınır & Belgeler

Tüm FastComments müşterileri, tüm seviyelerde bu özelliğe erişim sağladı. Üçüncü
taraf çerez atlamasını etkinleştirmeyi öğrenmek için [belgelere](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) göz atın.

### Sonuç Olarak

Tüm büyük sürümler gibi, bu özelliği optimize edebilmek, test edebilmek ve düzgün bir şekilde yayınlayabilmek için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfederken bize bildirin.

Şerefe!

{{/isPost}}

---