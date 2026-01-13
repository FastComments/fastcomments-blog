---
[category:Migration]

###### [postdate]
# [postlink]IntenseDebate'den FastComments'a Geçiş[/postlink]

{{#unless isPost}}
IntenseDebate'den FastComments'a nasıl tamamen geçiş yapılacağını göstermek için bu yazıyı okuyun.
{{/unless}}

{{#isPost}}
## Eğer WordPress Kullanıyorsanız

FastComments'ın özel bir WordPress eklentisi vardır: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Eklenti, kurulum, ayar ve senkronizasyonu çok kolay hale getirir. Bu seçeneği tercih ederseniz burada kalan talimatları görmezden gelebilirsiniz.

## Manuel, Genel Kurulum

### Mevcut Yorumlarınızı Dışa Aktarın

IntenseDebate'den mevcut sitenizin Yorum ve Kullanıcı verilerini dışa aktarmak için Yönetici panelinden Siteler -> Siteniz -> Araçlar -> XML Dışa Aktarım'a gidin.

E-posta ile aldığınız dosyanın "gz" dosya uzantısına sahip olduğunu göreceksiniz. Eğer biraz teknik bilgiye sahipseniz, bunun "gzip" anlamına geldiğini ve popüler bir dosya sıkıştırma yöntemi olduğunu bilirsiniz.

### "gz" dosyasını açmayın

Varsayılan bir Windows 10 kurulumu IntenseDebate'den gelen dosyayı açamayacaktır. Bu sorun değil, çünkü FastComments ile bunu yapmanız gerekmiyor. Arka planda bu sıkıştırılmış dosyayı anlayabiliyoruz.

Bundan sonra, eğer giriş yaptıysanız <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">buradan dosyayı içe aktarabilirsiniz</a>. Aşağı açılır menüden IntenseDebate'i seçin ve dosyanızı yükleyin.

### Birkaç dakika bekleyin

FastComments içe aktarma işlemi "eşzamansızdır". Bu, dosyanın yüklenmesi ve işlenmesinin ayrı adımlar olduğu anlamına gelir.

Yani, dosya boyutunuza bağlı olarak başarı mesajını hemen alabilirsiniz. İçe aktarma sayfasında altta bir tablo var - her satır bir içe aktarma denemesini temsil eder.
Bu sayfayı güvenle yenileyebilir ve içe aktarmanızın durumunu ve şu ana kadar kaç satırın içe aktarıldığını görebilirsiniz.

### İşlem tamamlandığında

İçe aktarma işlemi tamamlandığında bir e-posta alacaksınız - işlem başarılı olsa da olmasa da. Dosyanızın yüklendiğinden emin olduktan sonra ve içe aktarmanızı İçe Aktarmalar sayfasında gördüğünüzde sayfayı kapatabilirsiniz. Durumu "Talep Edildi" olacak ve başladığında durum "Çalışıyor" olacaktır.

Gerekli olduğu kadar çok kez yeniden içe aktarma yapmak güvenlidir - ancak eğer içe aktarmanız başarısız olursa <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bizimle iletişime geçin</a> böylece size yardımcı olalım.

### IntenseDebate Kodunu FastComments ile Değiştirin

Basit bir şekilde, IntenseDebate'in size verdiği küçük parçayı kaldırıp <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">kendi kodumuzu</a> yerleştirmeniz gerekiyor.
Hatta IntenseDebate ve FastComments'ı aynı site üzerinde geçici olarak çalıştırabilir, görünüm ve hissiyatı test edebilirsiniz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

Eğer IntenseDebate widget’larını kullanıyorsanız ve bunları değiştirmek istiyorsanız <a href="https://fastcomments.com/auth/my-account/help" target="_blank">buradan bizimle iletişime geçin</a>.

### URL'leri Aynı Anda Taşımak

Yorumlar kendileri IntenseDebate dışa aktarımındaki "bağlantı" alanlarına bağlıdır, dolayısıyla URL'leriniz değişmediği sürece geçiş kolaydır. URL'leri taşıyıp
yorumlarınızı korumak isterseniz <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize bildirin</a> ve eski ile yeni URL'leri gönderin. Yardım sayfası küçük metin dosyaları yüklemeye izin verir, dolayısıyla
birkaç URL'den fazlasını taşıyorsanız bir Excel tablosu oluşturun.

### Özet

1. Verilerinizi dışa aktarın
2. FastComments'a içe aktarın
3. IntenseDebate JavaScript parçasını <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments'ınkisi ile değiştirin</a>

## Neden IntenseDebate Dosyamı Göndermiyor?
Daha büyük siteler için IntenseDebate, kendi tarafındaki teknik kısıtlamalar nedeniyle dışa aktarılan dosyayı oluşturamamış olabilir. Mevcut sitenizi tarama ve içindeki yorumları alma yeteneğine sahibiz; ancak bu oldukça özelleşmiş olabilir ve zaman alacağı için Destek Paketi'ne sahip olmanızı gerektirecektir. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Buradan bu konuda yardım talep edebilirsiniz</a>.
{{/isPost}}

---