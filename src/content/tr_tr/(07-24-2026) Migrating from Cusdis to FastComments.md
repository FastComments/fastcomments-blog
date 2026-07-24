[category:Migration]
###### [postdate]
# [postlink]Migrating From Cusdis To FastComments[/postlink]

{{#unless isPost}}
Bu gönderiyi okuyarak Cusdis'ten FastComments'a tam olarak nasıl geçiş yapacağınızı, konularınızı, moderasyon durumunuzu ve sayfa URL'lerinizi görebilirsiniz.
{{/unless}}

{{#isPost}}

Cusdis hafif, açık kaynaklı bir yorum sistemidir. Eğer artık ihtiyaçlarınızı karşılamıyorsa ve spam filtreleme, oylar, tepkiler, bildirimler, SSO ve tam bir moderasyon kontrol paneli gibi özellikler istiyorsanız, FastComments artık Cusdis verilerinizi doğrudan içe aktarır.

## Mevcut Yorumlarınızı Dışa Aktarın

Cusdis kontrol panelinizden tam bir veri dışa aktarımı talep edin. Cusdis, projelerinizi, sayfalarınızı ve her yorumu, bunların konularını ve onay durumlarını içeren tek bir JSON dosyası sağlar. Cusdis ayarlarınıza bağlı olarak dışa aktarım size e-posta ile gönderilir veya hemen indirilir.

Düzenlemeniz veya açmanız gereken bir şey yok. ".json" dosyasını olduğu gibi tutun, backend'imiz doğrudan okur.

## FastComments'a İçe Aktarın

Giriş yaptıktan sonra <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">dosyayı içe aktarmak için buraya</a> gidin. Açılır menüden **Cusdis (.json)** seçin ve dosyanızı yükleyin.

### Birkaç dakika bekleyin

FastComments içe aktarımı "asenkron"dur. Dosyanın yüklenmesi ve işlenmesi ayrı adımlardır. Küçük bir dosya için başarı mesajı hemen görünür. İçe aktarma sayfasının altında bir tablo bulunur ve her satır bir içe aktarma denemesidir. Durumu ve şu ana kadar kaç yorumun içe aktarıldığını görmek için sayfayı yenileyin.

### İşlem tamamlandığında

İçe aktarma tamamlandığında, başarılı olsun ya da olmasın, bir e-posta alacaksınız. Yükleme başarılı olduktan ve içe aktarma durumunun "Requested" (Talep Edildi) ya da "Running" (Çalışıyor) olduğunu gördükten sonra sayfayı kapatmanız güvenlidir.

Yeniden içe aktarmak güvenlidir. FastComments, her yorumu orijinal Cusdis kimliğiyle eşleştirir, bu yüzden içe aktarmayı tekrar çalıştırmak mevcut yorumlarınızı günceller ve kopya oluşturmaz. Bir içe aktarma başarısız olursa, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize ulaşın</a> ve size yardımcı olacağız.

## Ne İçe Aktarılıyor

- **Threaded replies.** Cusdis, yanıtları birkaç seviye derinliğinde iç içe yerleştirir ve FastComments tam ebeveyn ve çocuk yapısını yeniden oluşturur.
- **Moderation status.** Onaylanmış yorumlar onaylı kalır. Hâlâ onay bekleyen yorumlar FastComments moderasyon kuyruğunuza düşer, böylece inceleyebilirsiniz.
- **Authors.** Her yorumcunun adı ve e-posta adresi aktarılır ve kayıtlı FastComments kullanıcıları e-posta ile eşleştirilir.
- **Formatting.** Cusdis yorumları Markdown ile yazılmıştır. FastComments aynı Markdown'ı, bağlantılar, görseller ve satır sonları dahil, render eder, böylece konularınız tam olarak önceki gibi okunur.

Cusdis'te silinen yorumlar bırakılır, böylece içe aktarılan konularınız temiz kalır.

## Cusdis Widget'ını Değiştirin

Verileriniz aktarıldıktan sonra, sitenizden küçük Cusdis snippet'ini kaldırın ve <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">bizimkini</a> ekleyin. İlk olarak görünüm ve hisse bakmak için bir süre Cusdis ve FastComments'ı yan yana çalıştırabilirsiniz. Birçok ön uç çerçevesini destekliyoruz, <a href="https://fastcomments.com/install-wizard" target="_blank">buradan bulabilirsiniz</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

### URL'leri Aynı Anda Taşıma

Cusdis, her yorumu sayfa URL'sine bağlar, bu yüzden URL'leriniz değişmediği sürece geçiş kolaydır. URL'leriniz de değişiyorsa, önce Cusdis verilerinizi içe aktarın, ardından Manage Data altında yerleşik <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> aracını kullanarak yorumlarınızı yeni konumlara taşıyın. Eski ve yeni konum için tam bir domain, tam bir URL veya bir URL ID girebilirsiniz, böylece tek bir "from" ve "to" çifti tüm eşleşen sayfaları bir anda taşır. Arka plan işi olarak çalışır ve tamamlandığında size e-posta gönderir.

Eğer sizin yerinize biz halletmemizi isterseniz (çok sayfanız varsa), eski ve yeni URL'leri <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize bildirin</a>.

## AB

Eğer AB'de iseniz, müşteri verilerinizin AB içinde kalması için hesabınızı <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> üzerinde oluşturmak isteyebilirsiniz.

## Özet

1. Cusdis'ten verilerinizi JSON olarak dışa aktarın
2. FastComments içe aktarma sayfasına yükleyin ve **Cusdis (.json)** seçin
3. Cusdis snippet'ını <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments'un</a> ile değiştirin

{{/isPost}}

---