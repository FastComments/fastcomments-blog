[category:Migration]
###### [postdate]
# [postlink]2026'da Commento ve Cusdis'ten Geçiş[/postlink]

{{#unless isPost}}
Barındırılan Commento ve Cusdis hizmetleri yanıt vermeyi durdurdu. FastComments'a nasıl geçeceğinizi ve Internet Archive'den yorumlarınızı nasıl kurtarabileceğimizi, eğer hiç dışa aktarmadıysanız, burada bulabilirsiniz.
{{/unless}}

{{#isPost}}

Eğer sitenizdeki yorum bölümü boşaldıysa, bu gönderi sizin için. Nelerin değiştiğini, bir dışa aktarma dosyanız varsa nasıl içe aktarılacağını ve eğer yoksa Internet Archive'den yorumlarınızı nasıl geri alabileceğinize dair bilgileri kapsar.

## Ne Oldu

1 Kasım 2026 itibarıyla gördüklerimiz:

- **Commento.** commento.io, API'si ve widget betiği hepsi 404 döndürüyor. Internet Archive yakalamaları, sitenin 25 Mayıs 2026'da çalıştığını ve 11 Haziran 2026'da 404 döndürdüğünü gösteriyor.
- **Cusdis.** cusdis.com ve API'si Cloudflare hata 521 döndürüyor, bu da Cloudflare arkasındaki sunucunun kapalı olduğu anlamına geliyor. Yakalamalar, 27 Ağustos 2026'ya kadar çalıştığını ve 16 Ekim 2026'da 521 döndürdüğünü gösteriyor. Widget betiği hâlâ yükleniyor, bu yüzden sayfanızda yorumların olduğu yerde boş bir kutu görünüyor.

Her iki projeden de bir kapanış bildirimi bulamadık. Eğer Commento veya Cusdis'i kendiniz barındırıyorsanız, kurulumunuz bundan etkilenmez ve taşınmaya hazır olduğunuzda dışa aktarım yapabilirsiniz.

## Verilerinizi Bulun

Hangi yolu seçeceğiniz, elinizde ne olduğuna bağlıdır:

1. **Bir dışa aktarma dosyanız var.** Commento'nun dışa aktarmalarını e-posta ile “.gz” dosyası olarak gönderdiğini unutmayın, gelen kutunuzu da kontrol edin. İçe aktarma adımlarına geçin.
2. **Kendiniz barındırıyorsunuz.** Kendi kontrol panelinizden dışa aktarın, ardından içe aktarma adımlarını izleyin.
3. **Barındırılan hizmeti kullandınız ve dışa aktarma dosyanız yok.** Dışa aktarım yapacağınız kontrol paneli artık yok. Aşağıdaki kurtarma bölümünü okuyun.

## Bir Dışa Aktarma Dosyasını İçe Aktarın

Giriş yaptıktan sonra <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">dosyayı içe aktarmak için buraya</a> gidin. Açılır menüden **Commento (.gz, .json)** veya **Cusdis (.json)** seçin ve dosyanızı yükleyin. Commento “.gz” dosyasını önceden açmanıza gerek yok.

İçe aktarma arka planda çalışır ve tamamlandığında bir e-posta alırsınız. Yeniden içe aktarma güvenlidir, çünkü her yorum orijinal kimliğiyle eşleşir ve yerinde güncellenir.

Her format için daha uzun bir kılavuzumuz var: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> ve <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Barındırılan kontrol panelinden dışa aktarma talep etme adımları artık geçerli değil, ancak içe aktarma detayları geçerli.

## Internet Archive'den Yorumlarınızı Kurtarın

Commento ve Cusdis, yorumları kendi sunucularından JavaScript ile yükler. Internet Archive bir sayfayı tarayıcıyla yakaladığında, bu yanıtları sayfa ile birlikte kaydedebilir. Kaydedilen bu yanıtlar yorum dizilerini içerir.

Bunu kendimiz test ettik. <a href="https://web.archive.org" target="_blank">Wayback Machine</a> 12.000'den fazla yakalanmış Commento yorum yanıtı ve 448 Cusdis projesi için yakalama içeriyor ve en yenileri 2026'dan. Bunun için kendinize hizmet veren bir aracımız yok. Kurtarmayı sizin için yapıyoruz, bu yüzden <a href="https://fastcomments.com/contact-us" target="_blank">bize yazın</a> ve başlayın.

### Önce Kendi Sitenizi Kontrol Edin

Wayback Machine'de daha yoğun bir gönderinizi açın, adresi kendi sitenizle değiştirin:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Yorum bölümüne kaydırın. Yorumlarınız görünüyorsa, arşiv o diziyi içeriyor demektir. Görünmüyorsa, sayfanın üstündeki takvimden farklı bir yıl deneyin. Tek bir gönderide boş sonuç, sitenizin geri kalanını dışlamaz, bu yüzden her halükarda bize yazın.

### Kurtarma Nasıl Çalışır

1. **Bize domaininizi söyleyin.** Eğer Cusdis kullandıysanız, ayrıca site snippet'inde bulunan `data-app-id` değerini gönderin. Domaini kontrol ettiğinizi kanıtlamanızı isteyeceğiz, çünkü bu yorumlar sitenize ait.
2. **Dizilerinizi buluyoruz.** Siteniz için yakalamaları toplar ve her birinin domaininize ve sayfanıza ait olduğunu kontrol ederiz. Commento kurtarmaları daha uzun sürer, çünkü arşiv yakalamalarını siteye göre indekslemez ve hepsini okumamız gerekir.
3. **Bulduklarımızı size gösteririz.** İçe aktarım yapılmadan önce kaç sayfa ve yorumun geri geldiğini ve en yeni yorumun tarihini göreceksiniz.
4. **Dizileri hesabınıza içe aktarırız.** Daha sonra moderasyon panelinizden istediğiniz yorumu düzenleyebilir veya kaldırabilirsiniz.

### Geri Gelenler

<div class="pretty-table wide-table">

| Veri | Commento | Cusdis |
| --- | --- | --- |
| Yorum metni | Evet | Evet |
| Yazar gösterim adı | Evet | Evet |
| Yorum tarihi | Evet | Evet |
| Yanıt dizilimi | Evet | Evet |
| Oy puanı | Evet | Cusdis'te oy yok |
| Sayfa adresi | Evet | Evet, ancak bazı siteler sadece yol sakladı, bu yüzden domaininize ihtiyacımız var |
| Yazar e-posta | Hayır | Hayır |
| Onay bekleyen yorumlar | Hayır | Hayır |
| Son yakalamadan sonra yazılan yorumlar | Hayır | Hayır |
| Arşivin hiç yakalamadığı sayfalar | Hayır | Hayır |

</div>

### Beklenenler

Bu, anlık görüntülerden bir kurtarmadır, bu yüzden boşluklar için plan yapın. Sık ve yakın zamanda yakalanan popüler sayfalar için en iyi şekilde çalışır.

Testlerimizden iki sonuç aralığı gösteriyor. Bir blogda, 30 sorgu 19 sayfada 810 yorum döndürdü. Başka bir sitede, yorumları hâlâ gösteren, en yeni arşiv kopyası Ekim 2023'te durdu, canlı sayfa ise Mart 2025'e kadar çalıştı. Son yakalama ile kapanış arasına yazılan her şey arşivde yok.

Eksik e-postalar da önemlidir. Kurtarılan yorumlar yazarın adını tutar, ancak bir FastComments hesabıyla eşleştirilemez ve yazarlar yeni yanıtlar hakkında bilgilendirilmez.

## Widget'ı Değiştirin

Hangi yolu seçerseniz seçin, eski snippet sitenizden kaldırılmalı. Commento için, bunu ve yorum sayısı kullanıyorsanız `count.js`'i kaldırın:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Cusdis için, bunu kaldırın:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Ardından <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">bizimkini</a> ekleyin:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Ayrıca birçok ön uç çerçevesini destekliyoruz, <a href="https://fastcomments.com/install-wizard" target="_blank">buradan bulabilirsiniz</a>. Geçiş yapmadan önce kurtarmanın bitmesini beklemenize gerek yok. Okuyucularınız hemen yorum yapmaya başlayabilir ve kurtarılan diziler içe aktarıldığında aynı sayfalara eklenir.

### URL'leriniz Değişiyorsa

İçe aktarılan yorumlar sayfa URL'sine bağlıdır, bu yüzden URL'leriniz aynı kalırsa diziler otomatik olarak hizalanır. Eğer değişiyorsa, önce içe aktarın, ardından Manage Data altında <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Yorumları Taşı</a> aracını kullanarak yeni konumlara taşıyın.

## AB

Eğer AB'deyseniz, müşteri verilerinizin AB içinde kalması için hesabınızı <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> üzerinden oluşturmak isteyebilirsiniz.

## Özet

1. Bir dışa aktarma dosyası arayın, e-postanızda da dahil.
2. Eğer bir dosyanız varsa, <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">içe aktarma sayfasına</a> yükleyin.
3. Eğer yoksa, Wayback Machine'de sitenizi kontrol edin ve domaininizi <a href="https://fastcomments.com/contact-us" target="_blank">bize yazın</a>.
4. Eski snippet'i <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">bizimkisiyle</a> değiştirin.

Sağlıcakla!

{{/isPost}}

---