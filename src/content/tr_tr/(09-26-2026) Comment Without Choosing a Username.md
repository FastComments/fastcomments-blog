[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Kullanıcı Adı Seçmeden Yorum Yapma[/postlink]

{{#unless isPost}}
FastComments artık her yeni ziyaretçiye benzersiz, nötr bir kullanıcı adı verebilir, böylece hiç bir zaman bir tane yaratmak zorunda kalmazlar. Paylaşılan Varsayılan Kullanıcı Adı da artık ilk kullanan kişi tarafından “alınmaz”.
{{/unless}}

{{#isPost}}

### Yeni Neler

Sitenizde oturum açma yoksa, yorum bırakmak isteyen bir ziyaretçiden iki şey istenir: bir e-posta ve bir kullanıcı adı. E-posta kolaydır, ancak kullanıcı adı benzersiz olmalı, herkese açık olacak ve hemen düşünülmesi gerekir.

Bu sürüm o adımı kaldırıyor. Widget özelleştirmenizde **Generate Usernames Automatically** seçeneğini açın ve her yeni ziyaretçi `BraveOtter4172` gibi bir isimle önceden doldurulmuş olarak gelir. İsterseniz bu ismi tutabilir ya da üzerine yazabilir. Hangi şekilde olursa olsun, yorum kutusuna daha çabuk ulaşırlar.

### Açma

Widget Özelleştirme sayfanızı <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Özelleştirme</a> açın, **Anonymization** bölümünü bulun ve **Generate Usernames Automatically** seçeneğini işaretleyin. Başka yapılandırılacak bir şey yok.

Bu, **Allow Anonymous Comments** seçeneği açık ya da kapalı olsun çalışır. Her yorumcudan bir e-posta almak istiyorsanız, anonim yorumlamayı kapalı tutun. Ziyaretçiler e-postalarını girer, kullanıcı adı onlar için otomatik olarak sağlanır ve işte bu kadar. Eğer e-posta gerekmiyorsa, anonim yorumlamayı açın ve bir ziyaretçi sadece yorumun kendisini yazarak yorum yapabilir.

### Ziyaretçilerin Görmesi

Kullanıcı adı alanı oluşturulan isimle önceden doldurulmuştur. Bu sıradan bir giriş alanıdır, bu yüzden başka bir isimle tanınmak isteyen herkes sadece üzerine yazar. Hiçbir şey gizli değildir ve hiçbir şey zorunlu değildir.

İsimler iki kelime ve bir sayıdan oluşur, bu yüzden okunabilir ve nötrdür. Hiç kimse `user_83729` gibi bir isimle kalmaz.

### Her İsim Benzersiz

Oluşturulan bir isim, sunulmadan önce mevcut hesaplarla kontrol edilir ve o ziyaretçinin tarayıcı oturumu için rezerve edilir, böylece bir sonraki ziyaretçiye aynı isim sunulmaz. Oturum açmış kullanıcılar, SSO kullanıcıları ve zaten yorum yapmış ziyaretçilere yeni bir isim verilmez. Sahip oldukları ismi tutarlar.

Daha önce kullandıkları bir e-posta giren geri dönen bir ziyaretçi, mevcut hesabıyla eşleştirilir, böylece ikinci ziyaret, tarayıcı arası temizlenmiş olsa bile ikinci bir kimlik oluşturmaz.

### Hata Düzeltme - Varsayılan Kullanıcı Adı Artık Gerçekten Paylaşılıyor

Bazı kullanıcılar, burada büyük ölçüde ilerlemek için **Default Username** değerini "Anonymous" gibi bir şeyle kullanıyordu. Bunun bir tuzağı vardı. Kullanıcı adları benzersizdir, bu yüzden e-postasıyla "Anonymous" olarak yorum yapan ilk ziyaretçi ismi sahiplenir ve farklı bir e-posta ile gelen sonraki ziyaretçiye kullanıcı adının alındığı söylenir.

Bu düzeltildi. Varsayılan kullanıcı adı artık bir kimlik yerine paylaşılan bir görüntü adı olarak ele alınır. Bunu tutan her ziyaretçi, arka planda kendi hesabını alır ve hepsi "Anonymous" olarak gösterilir. Ziyaretçilerin kendileri yazdığı kullanıcı adları hâlâ benzersiz olmak zorundadır, önceki gibi.

İkisini de ayarlarsanız, oluşturulan isim kazanır.

### Dokümantasyon

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">Kullanıcı Adlarını Otomatik Oluşturma Kılavuzu</a>
seçeneği ve diğer anonim yorum ayarlarıyla nasıl etkileşime girdiğini açıklar.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">Varsayılan Kullanıcı Adı Kılavuzu</a>
paylaşılan isim davranışını açıklar.

### Sonuç

Bu, ziyaretçilerin sadece bir kez geri bildirim bırakabilecekleri bir siteyi yöneten bir müşteriden geldi. Onlardan bir e-posta ve benzersiz bir kullanıcı adı istemek fazladan bir soruydu. Eğer bir ayar okuyucularınız ile yorum kutusu arasında duruyorsa, aşağıda bize bildirin.

Sağlıcakla!

{{/isPost}}