---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Disqus'tan FastComments'a Geçiş[/postlink]

{{#unless isPost}}
Bu gönderiyi okuyarak Disqus'tan FastComments'a tamamen nasıl geçiş yapacağınızı görebilirsiniz.

Eğer Disqus ile Genel Site Entegrasyonu kullanıyorsanız, o zaman yapmanız gereken tek şey, size verdikleri küçük kod parçasını kaldırmak ve <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">kendi kodumuzla</a> değiştirmektir.
Hatta görünüm ve his üzerinde test yapmak için Disqus ve FastComments'ı aynı site üzerinde geçici olarak çalıştırabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

Eğer Genel Site Entegrasyonu kullanmıyorsanız, o zaman talimatlar platformunuza bağlı olarak değişecektir - tekrar <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a>.
{{/unless}}

{{#isPost}}
Disqus'un doğru yaptığı birçok şey var, ancak eksik kaldıkları yerlerde FastComments devreye giriyor.

## WordPress Kullanıyorsanız

FastComments'ın özel bir WordPress eklentisi bulunmaktadır: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Eklenti, kurulum, yapılandırma ve senkronizasyonu oldukça kolay hale getirir. Bu yoldan giderseniz, burada diğer talimatları dikkate almanıza gerek yoktur.

## Manual, Genel Kurulum

### Mevcut Yorumlarınızı Dışa Aktarın

FastComments içe aktarıcısı yorumlarınızı, kullanıcı adlarınızı, kullanıcı avatarlarınızı ve yerel resimlerinizi taşır. Resimleri sunucularımıza sorunsuz bir şekilde taşıyacağız.

Disqus'un doğru yaptığı bir şey, verileri dışa aktarmada nasıl işlettiğidir. Rehberlerindeki adımları izlediğinizde <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">burada</a> aldığınız dosyanın gizemli bir "gz" dosya uzantısına sahip olduğunu fark edeceksiniz. Eğer biraz daha teknik bir bilgiyi sahip iseniz, bu "gzip" anlamına geldiğini ve dosyaları sıkıştırmanın popüler ve etkili bir yolu olduğunu biliyor olabilirsiniz.

### "gz" dosyasını açmayın

Varsayılan bir Windows 10 kurulumunun Disqus'dan gelen dosyayı açamayacağını bilin. Bu sorun değil, çünkü FastComments ile bunu yapmanıza gerek yok. Arka planda bu sıkıştırılmış dosyayı anlayabiliyoruz, bu yüzden tek yapmanız gereken onların talimatlarını izlemek <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">burada belirtilen dosyayı almak için</a>.

Bundan sonra, oturum açtıysanız <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">dosyayı içe aktarmak için buraya gidebilirsiniz</a>. Aşağı açılır listeden Disqus'ı seçin ve dosyanızı yükleyin.

### Birkaç dakika bekleyin

FastComments içe aktarması "asenkron"dur. Bu, dosyanın yüklenmesi ve işlenmesinin ayrı adımlar olduğu anlamına gelir.

Yani, dosya boyutunuza bağlı olarak hemen başarı mesajı alabilirsiniz. İçe aktarma sayfasının en altında bir tablo var - her bir satır bir içe aktarma denemesini temsil ediyor.
İçe aktarma durumunuzu görmek ve bugüne kadar kaç satırın içe aktarıldığını kontrol etmek için bu sayfayı güvenle yenileyebilirsiniz.

### İşlem tamamlandığında

İçe aktarma tamamlandığında, başarılı olup olmadığına dair bir e-posta alacaksınız. Dosya yüklemesi başarılı olduktan sonra ve İçe Aktarmalar sayfasında içe aktarmanızı gördüğünüzde sayfayı kapatabilirsiniz. "Talep Edildi" gibi bir durumu olacak ve başladığında durum "Devam Ediyor" olacak.

Gerekli olduğu kadar re-ihraç etmek güvenlidir - fakat eğer içe aktarmanız başarısız olursa <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a> böylece size yardımcı olabiliriz.

### Disqus Kodunu FastComments ile Değiştirin

Eğer Disqus ile Genel Site Entegrasyonu kullanıyorsanız, tek yapmanız gereken size verdikleri küçük kod parçasını kaldırmak ve <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">kendi kodumuzla</a> değiştirmektir.
Hatta görünüm ve his üzerinde test yapmak için Disqus ve FastComments'ı aynı site üzerinde geçici olarak çalıştırabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

Eğer Genel Site Entegrasyonu kullanmıyorsanız, o zaman talimatlar platformunuza bağlı olarak değişecektir - tekrar <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a>.

### URL'leri Aynı Anda Taşımak

Yorumlar, Disqus dışa aktarmasındaki "bağlantı" alanlarına bağlı olduğundan, URL'leriniz değişmediği sürece geçiş kolaydır. URL'leri taşımak ve yorumlarınızı korumak istiyorsanız <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize bildirin</a> eski ve yeni URL'lerinizi göndererek. Yardım sayfası küçük metin dosyalarını yüklemeye izin verdiğinden, eğer birden fazla URL taşıyorsanız bir Excel tablosu oluşturun.

### Özet

1. Verilerinizi dışa aktarın
2. FastComments'a içe aktarın
3. Disqus JavaScript parçasını <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments'ınki ile</a> değiştirin

## Neden Disqus Bana Dosyamı Göndermiyor?
Daha büyük siteler için Disqus, teknik sınırlamalar nedeniyle dışa aktarılan dosyayı oluşturamayabilir. Mevcut sitenizi tarayıp yorumları çekme yeteneğimiz var, ancak bu oldukça özelleşebilir ve zaman alacağı için Destek Paketi'ne sahip olmanızı gerektirecektir. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda yardım talep edebilirsiniz</a>.
{{/isPost}}