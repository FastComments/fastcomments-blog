---
[category:UI & Customization]

###### [postdate]
# [postlink]Sayfa Boyutları Artık Özelleştirilebilir[/postlink]

{{#unless isPost}}
FastComments, lansmanından bu yana sabit bir sayfa boyutu olan 30 yorumla çalışıyordu. Artık bu özelleştirilebilir!
{{/unless}}

{{#isPost}}

### Yenilikler

Yorum dizileriniz artık farklı sayfalama boyutlarına sahip olabilir ve bu, hesabınız genelinde, bir site ya da hatta sayfa düzeyinde özelleştirilebilir. Belirli sayfaların, kullanıcının sayfalama yapmadan önce daha az ya da daha fazla yorum göstermesini istiyorsanız bu istenebilecek bir durumdur.

Bu, sonsuz kaydırmayı da etkiler ve FastComments'tan yorumları render eden her türlü çerçeveyi veya entegrasyonu etkiler.

Sayfa boyutları `10`'dan `200`'e kadar değişebilir. Varsayılan değer `30`'da kalmaktadır.

### Nasıl Elde Edilir

Güvenilir [Widget Özelleştirme UI](https://fastcomments.com/auth/my-account/customize-widget) sayfasına gidin ve
sayfa boyutunuzu tanımlayın.

FastComments her sayfada gösterilen yorumları önceden hesapladığı için, bu parametreyi değiştirmeniz tüm yorum dizilerinizi yeniden hesaplamak için sistemimizin tetiklenmesini sağlayacaktır. Bu herhangi bir kesinti yaratmayacaktır, ancak değişikliğin görünmesi birkaç dakika sürebilir.

### Dokümantasyon

Sayfa boyutlarıyla ilgili güncellenmiş dokümantasyonu [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size) adresinde bulabilirsiniz.

### Önemli Değişiklikler

Bu değişikliğin bir parçası olarak, yorum widget'ında tanımlanan iki çeviri yeniden adlandırıldı. `PREV_30` ve `NEXT_30` artık sırasıyla `PREV` ve `NEXT` olarak adlandırılmakta ve `[count]` değişkenini içermektedir.

Widget Özelleştirme UI aracılığıyla sayfalama düğmeleri için çeviriler tanımladıysanız, bunlar sizin için zaten taşınmıştır. Eğer çevirileri bir tür entegrasyon aracılığıyla kodla geçiriyorsanız, bunları güncellemeniz gerekecek:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Sonuç Olarak

Tüm büyük sürümler gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun fark ederseniz bize bildirin.

Şerefe!

{{/isPost}}

---