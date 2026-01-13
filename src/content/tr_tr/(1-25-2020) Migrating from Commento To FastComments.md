---
[category:Migration]
###### [postdate]
# [postlink]Commento'dan FastComments'a Geçiş[/postlink]

{{#unless isPost}}
Bu yazıyı okuyun, Commento'dan FastComments'a nasıl tamamen geçiş yapacağınızı görün.

## Dikkat Edilmesi Gerekenler

Commento bize tam URL'ler vermez. Sağladıkları yalnızca bir yorum dizisinin ait olduğu alan adıdır - "fastcomments.com/some-page" gibi. 
Bu, FastComments ithalatçısının protokolü varsaymak zorunda olduğu anlamına gelir ve varsayılan olarak https olarak ayarlanmıştır. Eğer ithalatı çalıştırdıysanız ve verilerinizi göremiyorsanız, sitenizin düzgün şekilde güvenli olup olmadığını kontrol etmeniz gerekebilir.
{{/unless}}

{{#isPost}}
### Mevcut Yorumlarınızı Dışa Aktarın

Commento'dan sitenizin Yorum ve Kullanıcı verilerini dışa aktarmak için Admin kontrol panelinde Genel bölümüne gidin ve ardından Veri Dışa Aktar seçeneğini seçin.

E-posta yoluyla aldığınız sonuç dosyasının "gz" dosya uzantısına sahip olduğunu göreceksiniz. Eğer biraz daha teknik bir bilgiye sahipseniz, bunun "gzip" anlamına geldiğini ve dosyaları sıkıştırmanın popüler ve verimli bir yolu olduğunu biliyorsunuzdur. 

### "gz" dosyasını açmayın

Varsayılan bir Windows 10 kurulumunun Commento'dan gelen dosyayı açamayacağını göreceksiniz. Sorun değil, çünkü FastComments ile bunu yapmanıza gerek yok. Arka planımız bu sıkıştırılmış dosyayı anlayabiliyor.

Bundan sonra, giriş yaptıysanız dosyayı içe aktarmak için <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">buraya gidebilirsiniz</a>. Aşağı açılır listeden Commento'yu seçin ve dosyanızı yükleyin.

### Birkaç dakika bekleyin

FastComments ithalatı "eşzamansızdır". Bu, dosyanın yüklenmesi ve işlenmesinin ayrı adımlar olduğu anlamına gelir.

Yani, dosya boyutunuza bağlı olarak hemen başarı mesajı alabilirsiniz. İthalat sayfasının alt kısmında bir tablo var - her bir satır bir ithalat denemesini temsil eder. Bu sayfayı güvenle yenileyebilirsiniz, böylece ithalatınızın durumunu ve şu ana kadar kaç satırın ithal edildiğini görebilirsiniz.

### İşlem tamamlandığında

İthalat tamamlandığında bir e-posta alacaksınız - başarılı olup olmadığına bakılmaksızın. Dosya yüklemesi başarılı olduğunda ve ithalatınızı İthalatlar sayfasında gördüğünüzde sayfayı kapatabilirsiniz. "Talep Edildi" gibi bir durumu olacak ve başladığında durum "Devam Ediyor" olacak.

Gerekirse istenilen kadar yeniden içe aktarmak güvenlidir - ancak eğer ithalatınız başarısız olursa <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a> böylece size yardımcı olabiliriz.

### Commento Kodunu FastComments ile Değiştirin

Yapmanız gereken tek şey, Commento'nun verdiği küçük parçayı çıkarmak ve <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">kendi kodumuzla</a> değiştirmektir. 
Ayrıca, görünüm ve his ile oynamak için geçici olarak aynı sitede Commento ve FastComments'ı çalıştırabilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

### Aynı anda URL'leri Taşımak

Yorumlar kendileri Commento dışa aktarımında "bağlantı" alanlarına bağlıdır, bu yüzden URL'leriniz değişmediği sürece geçiş kolaydır. URL'leri taşımak ve yorumlarınızı korumak istiyorsanız <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize bildirin</a> eski ve yeni URL'leri göndererek. Yardım sayfası küçük metin dosyalarının yüklenmesine izin verir, bu nedenle birden fazla URL taşıyorsanız bir Excel dosyası oluşturun.

### Kısaca

1. Verilerinizi dışa aktarın
2. FastComments'a içe aktarın
3. Commento JavaScript parçasını <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments’ınki ile</a> değiştirin

## Dikkat Edilmesi Gerekenler

Commento bize tam URL'ler vermez. Sağladıkları yalnızca bir yorum dizisinin ait olduğu alan adıdır - "fastcomments.com/some-page" gibi. 
Bu, FastComments ithalatçısının protokolü varsaymak zorunda olduğu anlamına gelir ve varsayılan olarak https olarak ayarlanmıştır. Eğer ithalatı çalıştırdıysanız ve verilerinizi göremiyorsanız, sitenizin düzgün şekilde güvenli olup olmadığını kontrol etmeniz gerekebilir.

## Neden Commento Bana Dosyamı Göndermiyor?
Büyük siteler için Commento teknik sınırlamalar nedeniyle dışa aktarılmış dosyayı oluşturamayabilir. Mevcut sitenizi kazıyabilme yeteneğine sahibiz ve yorumları buradan çekebiliriz, ancak bu oldukça özelleşmiş olabilir ve zaman alacağından Destek Paketi'ne sahip olmanızı gerektirecektir. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda yardım isteyebilirsiniz</a>.
{{/isPost}}

---