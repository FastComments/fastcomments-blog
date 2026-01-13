---
[category:Migration]
###### [postdate]
# [postlink]JustComments'dan FastComments'a Geçiş[/postlink]

{{#unless isPost}}
Bu yazıyı okuyarak JustComments'dan FastComments'a nasıl tamamen geçiş yapacağınızı öğrenin.

Genellikle, size verilen küçük kod parçasını kaldırmak ve onu <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">kendi kodumuzla</a> değiştirmekle ilgilidir.
Ayrıca, görünüm ve hissiyatı test etmek ve ayarlamak için JustComments ve FastComments'ı aynı sitede geçici olarak çalıştırabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda yardımcı olabiliriz</a>.
{{/unless}}

{{#isPost}}

2021'den itibaren, JustComments kapatılacak. FastComments'ta, platformumuza geçişi sizin için kolay hale getirdik.

FastComments'ın alışık olduğunuz birçok özelliği sunduğunu ve daha fazlasını bulacaksınız.

## Fiyatlandırma Farklılıkları

JustComments, kredi bazlı bir sistem kullanırken, FastComments üç farklı kademeden oluşan bir model kullanıyor. FastComments ile, aylık 1M sayfa görüntülemesi için $5/ay'lık planımız sizi kapsar. Bunun ötesinde Pro ve Enterprise planları bulunmaktadır; bunları <a href="https://fastcomments.com/traffic-pricing" target="_blank">fiyatlandırma sayfamızda</a> görebilirsiniz.

## Eğer WordPress Kullanıyorsanız

FastComments'ın özel bir WordPress eklentisi vardır: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Eklenti kurulumu, ayarlamayı ve senkronizasyonu çok kolay hale getirir. Ancak, JustComments yorumlarınızı geri WordPress kurulumunuza senkronize etmez, FastComments gibi. Bu, senkronizasyondan sonra aşağıdaki dışa aktarma ve içe aktarma adımlarını izlemeniz gerekeceği anlamına gelir.

## Mevcut Yorumlarınızı Dışa Aktarın

FastComments içe aktarıcısı yorumlarınızı, kullanıcı isimlerinizi, kullanıcı avatarlarınızı ve satır içi görüntülerinizi taşır. Görüntüleri sunucularımıza sorunsuz bir şekilde aktaracağız.

JustComments'dan yorum verilerinizi indirmek için, Hesap sayfanıza gidin.

## FastComments Yönetim Paneline İçe Aktarın

JustComments'dan gelen dosyayı açmakla ilgili endişelenmeyin.

Giriş yaptığınızda dosyayı <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">buradan içe aktarabilirsiniz</a>.

Açılır menüden JustComments'ı seçin ve dosyanızı yükleyin.

### Sayfa Tanımlayıcıları

İçe aktarma sırasında, Sayfa URL'si veya "Öğe ID'si" seçme seçeneğini göreceksiniz. Hangisini seçeceğinizden emin değilseniz, Sayfa URL'sini seçin. JustComments ile widget yapılandırmasında Öğe ID'sini belirttiğiniz bir entegrasyonunuz varsa, Öğe ID'sini seçin.

### Birkaç dakika bekleyin

FastComments içe aktarma "asenkron"dur. Bu, dosyanın yüklenmesi ve işlenmesinin ayrı adımlar olduğu anlamına gelir.

Bu nedenle, dosya boyutunuza bağlı olarak hemen başarı mesajı alabilirsiniz. İçe aktarma sayfasının alt kısmında bir tablo var - her satır bir içe aktarma denemesini temsil eder.
Bu sayfayı güvenle yeniden yükleyerek içe aktarmanızın durumunu ve şu ana kadar kaç satırın başarıyla içe aktarıldığını görebilirsiniz.

### İşlem bittiğinde

İçe aktarma tamamlandığında bir e-posta alacaksınız - bu başarılı olup olmadığına bakılmaksızın. Dosya yüklemesi başarılı olduğunda ve içe aktarmanızı İçe Aktarmalar sayfasında gördüğünüzde sayfayı kapatabilirsiniz. Durumu "Talep Edildi" gibi olacak ve başladığında durum "Çalışıyor" olacaktır.

Gerekli olduğu kadar yeniden içe aktarmak güvenlidir - ancak içe aktarmanız başarısız olursa <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bizimle iletişime geçin</a> böylece size yardımcı olalım.

### JustComments Kodunu FastComments ile Değiştirin

Eğer JustComments WordPress eklentisini kullanmıyorsanız, tek yapmanız gereken verilen küçük kod parçasını kaldırmak ve onu <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">kendi kodumuzla</a> değiştirmektir.
Ayrıca, görünümleri test etmek ve ayarlamak için JustComments ve FastComments'ı aynı sitede geçici olarak çalıştırabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda yardımcı olabiliriz</a>.

### Aynı anda URL'leri Taşımak

Yorumlar, JustComments dışa aktarmasında varsayılan olarak "pageUrl" alanlarına bağlıdır, bu nedenle URL'leriniz değişmedikçe geçiş kolaydır. URL'leri taşımak ve yorumlarınızı korumak istiyorsanız, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize bildirin</a> eski ve yeni URL'leri göndererek. Yardım sayfası küçük metin dosyalarını yüklemeye olanak tanır, bu nedenle birden fazla URL taşıyorsanız bir Excel belgesi oluşturun.

## Özet

1. Verilerinizi dışa aktarın
2. FastComments'a içe aktarın
3. WordPress'te değilse, JustComments JavaScript kod parçasını <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments'ınkisiyle</a> değiştirin

{{/isPost}}