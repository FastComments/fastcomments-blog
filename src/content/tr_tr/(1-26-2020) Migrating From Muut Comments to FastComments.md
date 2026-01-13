---
[category:Migration]
###### [postdate]
# [postlink]Muut Yorumlarından FastComments'a Geçiş[/postlink]

{{#unless isPost}}
Bu gönderiyi okuyarak Muut'tan FastComments'a tamamen nasıl geçileceğini öğrenebilirsiniz.

Yapmanız gereken, Muut'un size verdiği küçük kod parçasını kaldırmak ve bunu <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">kendi kodumuzla</a> değiştirmek.
Hatta Muut ve FastComments'ı aynı sitede geçici olarak çalıştırarak görünüm ve hissiyatı test edebilir ve ayarlayabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.
{{/unless}}

{{#isPost}}
### Mevcut Yorumlarınızı Dışa Aktarın

FastComments ithalat aracı, yorumlarınızı, kullanıcı adlarınızı, kullanıcı avatarlarınızı ve yerel görüntülerinizi taşır. Görüntüleri sorunsuz bir şekilde sunucularımıza aktaracağız.

Muut'tan mevcut sitenizin Yorum ve Kullanıcı verilerini dışa aktarmak için Yönetici panosuna gidip Entegrasyonlar sekmesine ve ardından JSON Dışa Aktarımına gidin.

E-posta ile aldığınız dosyanın gizemli bir "gz" dosya uzantısına sahip olduğunu göreceksiniz. Eğer biraz teknik bilginiz varsa, bunun "gzip" anlamına geldiğini ve dosyaları sıkıştırmanın popüler ve verimli bir yolu olduğunu biliyor olabilirsiniz.

### "gz" dosyasını açmayın

Varsayılan bir Windows 10 kurulumu, Muut'tan gelen dosyayı açamayacaktır. Bu sorun değil, çünkü FastComments ile bunu yapmanıza gerek yok. Arka uç sistemimiz bu sıkıştırılmış dosyayı anlıyor.

Bundan sonra, eğer oturum açtıysanız, dosyayı içe aktarmak için <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">buraya gidin</a>. Açılır menüden Muut'u seçin ve dosyanızı yükleyin.

Web sitenizin URL'sini girmeniz gerekecek. Bunun nedeni, Muut'un dışa aktarımdaki bu bilgiyi bize vermemesidir.

### Birkaç dakika bekleyin

FastComments ithalatı "asenkron" bir işlemdir. Bu, dosyanın yüklenmesi ve işlenmesinin ayrı adımlar olduğu anlamına gelir.

Bu nedenle, dosya boyutunuza bağlı olarak başarı mesajını hemen alabilirsiniz. İthalat sayfasının en altında bir tablo var - her satır bir ithalat denemesini temsil eder.
İthalat durumunuzu görmek ve şu ana kadar kaç satırın içe aktarıldığını kontrol etmek için bu sayfayı güvenle yenileyebilirsiniz.

### İşlem bittiğinde

İthalat işlemi tamamlandığında bir e-posta alacaksınız - başarılı olsun veya olmasın. Dosya yüklemesi başarılı olduğunda ve ithalatınızı İthalatlar sayfasında gördüğünüzde sayfayı kapatabilirsiniz. Durumu "İstendi" şeklinde olacak ve başladığında durumu "Devam Ediyor" olacaktır.

Gerekirse istediğiniz kadar tekrar içe aktarmak güvenlidir - ancak eğer ithalatınız başarısız olursa <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a> böylece size yardımcı olabiliriz.

### Muut Kodunu FastComments İle Değiştirin

Yapmanız gereken, Muut'un size verdiği küçük kod parçasını kaldırmak ve bunu <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">kendi kodumuzla</a> değiştirmek.
Hatta Muut ve FastComments'ı aynı sitede geçici olarak çalıştırarak görünüm ve hissiyatı test edebilir ve ayarlayabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

### Aynı Anda URL'leri Taşımak

Yorumlar kendileri Muut dışa aktarımındaki "bağlantı" alanlarına bağlıdır, bu nedenle URL'leriniz değişmediği sürece geçiş kolaydır. URL'leri taşımak ve yorumlarınızı korumak istiyorsanız <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize bildirin</a> eski ve yeni URL'leri göndererek. Yardım sayfası küçük metin dosyalarını yüklemeye izin verir, bu nedenle birden fazla URL taşıyorsanız bir Excel sayfası oluşturun.

### Özet

1. Verilerinizi dışa aktarın
2. FastComments'a içe aktarın
3. Muut JavaScript kod parçasını <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments'ınkisi ile</a> değiştirin

## Neden Muut Bana Dosyamı Göndermiyor?
Daha büyük siteler için Muut, kendi tarafındaki teknik sınırlamalar nedeniyle dışa aktarılan dosyayı oluşturamayabilir. Mevcut sitenizi tarayıp yorumları alabilecek kapasiteye sahibiz, ancak bunun oldukça özel olabileceği ve zaman gerektirdiği için Destek Paketi'ne sahip olmanızı gerektirir. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bununla ilgili yardım isteyebilirsiniz</a>.
{{/isPost}}

---