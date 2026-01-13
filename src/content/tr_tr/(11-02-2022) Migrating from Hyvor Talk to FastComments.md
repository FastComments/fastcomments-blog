---
[category:Migration]
###### [postdate]
# [postlink]Hyvor Talk'tan FastComments'a Geçiş[/postlink]

{{#unless isPost}}
Bu yazıyı okuyarak Hyvor Talk'tan FastComments'a tam olarak nasıl geçiş yapacağınızı öğrenin.

Eğer Hyvor Talk ile manuel kod kurulumunu kullanıyorsanız, o zaman sadece size verdikleri küçük parçayı kaldırıp <a href="https://fastcomments.com/install-wizard" target="_blank">kendi kodumuzla</a> değiştirmek meselesidir.
Ayrıca, görünümü test etmek ve ayarlamak için Hyvor ve FastComments'i geçici olarak aynı sitede çalıştırabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

Eğer kod parçacığına dayalı bir kurulum kullanmıyorsanız, o zaman talimatlar platformunuza bağlı olarak değişecektir - yine de <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a>.
{{/unless}}

{{#isPost}}

## WordPress Kullanıyorsanız

FastComments'in özel bir WordPress eklentisi var: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Bu eklenti kurulum, ayar ve senkronizasyonu çok kolay hale getirir. Bu yolu tercih ederseniz, burada kalan talimatları göz ardı edebilirsiniz. Sadece
Hyvor Talk yorumlarınızı WordPress kurulumunuza senkronize ettiğinizden emin olun.

Eğer bazı müşterilerimiz tarafından bildirildiği gibi bu yöntem sizin için çalışmıyorsa, WordPress eklentimizi kullanmak isteyebilirsiniz, ancak Hyvor Talk'tan verileri manuel olarak dışa aktararak bir veri içe aktarırsınız. Veri içe aktarmalarını [Veri Yönet -> Yorumları İçe Aktar](https://fastcomments.com/auth/my-account/manage-data/import) kısmında bulabilirsiniz.

## Manuel, Genel Kurulum

### Mevcut Yorumlarınızı Dışa Aktarın

FastComments içe aktarıcısı yorum dizilerinizi, kullanıcı adlarınızı, kullanıcı avatarlarınızı, emojileri ve satır içi resimleri taşıyacaktır. Resimleri sunucularımıza sorunsuz bir şekilde taşıyacağız.

2022 itibarıyla Hyvor Talk e-postaları veya yukarı/aşağı oyları dışa aktarmamaktadır. Eğer bu bilgileri içeren bir dışa aktarma alabilirseniz, bunu içe aktarabiliriz.

### .JSON Dosyasını İçe Aktarın

Hyvor dışa aktarmanızı indirdikten sonra, FastComments kontrol panelinize giriş yapın ve <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">dosyayı içe aktarmak için buraya gidin</a>. Açılır listeden Hyvor Talk'ı seçin ve dosyanızı yükleyin.

### Birkaç Dakika Bekleyin

FastComments içe aktarma "asenkron"dur. Bu, dosyanın yüklenmesi ve işlenmesi sürecinin ayrı adımlar olduğu anlamına gelir.

Bu nedenle, dosya boyutunuza bağlı olarak hemen başarı mesajı alabilirsiniz. İçe aktarma sayfasının en altında bir tablo var - her satır bir içe aktarma girişimini temsil eder.
İçe aktarma durumunuzu ve şu ana kadar kaç satırın içe aktarıldığını görmek için bu sayfayı güvenle yenileyebilirsiniz.

### İşlem Tamamlandığında

İçe aktarma tamamlandığında (başarıyla veya başarısızlıkla) bir e-posta alacaksınız. Dosya yüklemesi başarılı olduğunda sayfayı kapatabilirsiniz, ve İçe Aktarımlar sayfasında içe aktarmanızı görebilirsiniz. Durumu "Talep Edildi" gibi bir statüye sahip olacaktır ve başladığında durum "Çalışıyor" olacaktır.

Gerekirse birden fazla kez içe aktarmayı güvenle yapabilirsiniz - ancak içe aktarmanız başarısız olursa <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a> böylece yardımcı olabilelim.

### Hyvor Talk Kodunu FastComments ile Değiştirin

Eğer Hyvor ile kod parçacığına dayalı bir kurulum kullanıyorsanız, o zaman sadece size verdikleri küçük parçayı kaldırıp <a href="https://fastcomments.com/install-wizard" target="_blank">kendi kodumuzla</a> değiştirmek meselesidir.
Ayrıca [buradan](https://fastcomments.com/install-wizard) bulabileceğiniz birçok ön uç çerçevesini destekliyoruz. Görünümü test etmek ve ayarlamak için Hyvor ve FastComments'i geçici olarak aynı sitede çalıştırabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

Eğer kod parçacığına dayalı bir kurulum kullanmıyorsanız, o zaman talimatlar platformunuza bağlı olarak değişecektir - yine de <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a>.

Kendi kendine hizmete açık bir kurulum sihirbazı [burada](https://fastcomments.com/install-wizard) mevcuttur.

### URL'leri Aynı Anda Taşımak

Yorumlar, dışa aktarmadaki sayfa kimliği alanlarına bağlı olduğu için, URL'leriniz değişmediği sürece ana geçiş kolaydır. URL'leri taşımak ve yorumlarınızı korumak istiyorsanız, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize haber verin</a> eski ve yeni URL'leri göndererek. Yardım sayfası küçük metin dosyaları yüklemeye izin verir, bu nedenle birkaç URL'den fazla taşınıyorsanız bir Excel tablosu oluşturun.

### AB

Eğer AB'deyseniz, müşteri verilerinizin AB'de kalması için hesabınızı [eu.fastcomments.com](https://eu.fastcomments.com) üzerinde oluşturmak isteyebilirsiniz.

### Özet

1. Verilerinizi dışa aktarın
2. FastComments'a içe aktarın
3. Hyvor JavaScript parçacığını <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments'ınki ile değiştirin</a>

## Neden Hyvor Bana Dosyamı Göndermiyor?
Büyük siteler için Hyvor, teknik sınırlamalar nedeniyle dışa aktarılan dosyayı oluşturamayabilir. Mevcut sitenizi scrape edip yorumlarınızı çekme yeteneğimiz var, ancak bu daha özelleştirilmiş olabilir ve zaman gerektirdiğinden Destek Paketi'ne sahip olmanızı gerektirir. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda yardım isteyebilirsiniz</a>.
{{/isPost}}

---