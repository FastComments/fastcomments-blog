---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments Uzaya Hazır![/postlink]

{{#unless isPost}}
Aktif-aktif veritabanı göçümüzü tamamladık ve FastComments'a gerçek çok bölgeli yedeklilik getirdik.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

### Yenilikler

Her FastComments [nokta-nüfuzu](https://sophon.fastcomments.com/) artık yazıları yerel olarak alıyor ve onları diğer tüm düğümlere asenkron bir şekilde kopyalıyor. Bu, önceki sisteme göre artan dayanıklılık sağlayacak ve bazı bölgelerde moderasyon araçlarının kullanıcılar için daha hızlı olmasını sağlayacaktır, ama bazı trade-off'lar ile birlikte.

"Uzaya Hazır" biraz iyimser bir tanım, ancak fikir şu: FastComments'ı farklı gezegenlere dağıtabiliriz ve sonunda sistem senkronize olur. Ancak, Plüton'daki kullanıcıların, yalnızca bir bölgedeki bir ana düğümün faturalama bilgilerini toplaması mümkün olduğundan, değişikliklerin gelecek fatura sayfalarında yansımasını görmek için yaklaşık bir gün beklemeleri gerekecek.

### Biraz Tarih, Neden Değişiklik

FastComments ilk başlatıldığında çok tipik bir mimarimiz vardı. Bir proxy katmanı, bir uygulama katmanı, bir veritabanı, bazı kopyalar ve daha sonra ekstra yedeklilik için bölgeler ve bulut sağlayıcıları arasında kopyalarımız vardı.

Sonunda veritabanı kopyalarını kullanıcılarımızın çoğunun bulunduğu tüm bölgelere taşımış ve uygulamayı da burada dağıtmıştık. Ayrıca, istekleri en yakın uygulama düğümüne yönlendirmek için kendi DNS ve proxy sistemimizi oluşturduk (ilerideki bir blog yazısında açıklanacaktır). Bu, okuma işlemlerini hızlı hale getiriyor ancak yazma işlemlerini yavaşlatıyor, çünkü artık bir HTTP gidiş dönüş yolculuğu yerine yakındaki bir düğüme gidiş dönüş yolculuğu beklemeniz gerekiyor ve bu düğüm, birincil veritabanına birden fazla yazma işlemi yapabilir. Bu pek iyi değil!

Bu sorunu aşmak için, uygulamanın birçok alanını `readPreference` fonksiyon argümanında alacak şekilde yeniden yapılandırdık, böylece çağrıcılar okuma işlemlerinin ne kadar eski olmasına tolerans gösterdiklerine karar verebiliyorlar. Ayrıca, yazma işlemlerini (moderasyon istatistiklerini moderatör işlemleriyle yazmak gibi) ateşle ve unut türünde yapacak şekilde düzenledik. İdeal değil, ama bu, işleri önemli ölçüde hızlandırdı.

Mongo'yu global olarak çalıştırdığımızda karşılaştığımız bir sorun, ağ bölünmeleridir. Yeterince düğüm kesildiğinde, her düğüm okuyucu sunmanın kabul edilebilir olup olmadığında belirsizlik yaşadığı için okumalar durur. Bu durumun etraflarında bazı çözümler var, ancak kenar vakaları karmaşık hale geliyor. Bu, teorik bir sorun değil - 3AM bildirimlerine neden olacak kadar sık gerçekleştiği için bu durumdan bıktık, Mongo'yu bir dakikalık replikasyon seçim belirsizliğine tolerans gösterecek şekilde ayarlamaya bile çalıştık. Maalesef örneğin Sao Paulo'dan Falkenstein'e giden ağlar, bazı barındırma sağlayıcılarımız arasında çok iyi değildi. Trafik kontrolünü ayarlamak yardımcı oldu ama sorunu çözmedi.

Kutsal kâse çözümü, belirli trade-off'larla razı olduğunuz varsayımıyla, o düğümde yerel olarak yazıları kabul etme yeteneğidir (decent donanımı, RAID, vb. olan ve patlama ihtimali düşük). Kullanıcıya verilerinin kaydedildiğini bildirebilirsiniz. Ayrıca bu noktadaki bir nokta-nüfuzunda, dayanıklılık için sıcak bir kopya olarak ikinci bir düğüm de bulundurabilirsiniz.

Sonuç olarak buraya ulaştık. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur tümü kendi replikasetlerine sahip ve yazıları kabul ediyor. AB dağıtımı (sadece üç PoP olmasına rağmen) aynı davranışı sergiler.

### Nasıl Çalışır

Bunun bazı kısımları önceki bölümde geçildi, ama kısaca, CRDT-lite. Uygulama ile Mongo arasında oturan bir proxy (elbette Rust’ta) oluşturduk ve bunu çoklu-master yapıyoruz. Proxy, akran bilgisiyle çalışır, kontrol noktalarını yönetir, replikasyonu, izlemeyi ve başlangıç senkronizasyonunu yönetir. Mongo'nun replikasyon sisteminin bir çoklu-master yerine geçmektedir, bazı DDL komutları için de geçerlidir.

**Diğer araçlardan farkı** ise **oplog'ı takip etmemesidir**. Oplog’ı takip etmek veya değişim akışları kullanmak işe yaramaz çünkü sadece yazım sonrasında nesnenin nihai durumunu gösterir ve bu da çelişkileri yönetmeyi imkansız hale getirir. Her `$set`, `$inc` işlemini yakalamalı ve o işlemi kendisini çoğaltmalısınız.

Bu, alan spesifik bir çözümdür. Tüm ürünler için çalışmaz. Alan odaklı tasarım olarak adlandırılabilir :). Bizim için çalışıyor çünkü baştan itibaren sadece değiştirdiğimiz belgelerde `$set` kullanarak çok dikkatli davrandık - örneğin Mongo'nun `replaceOne`'ını asla kullanmıyoruz. Sayaçlar için de aynı durum geçerli. Asla `SET VOTES = 5` yapmazsınız. Bunun yerine, `INCREMENT VOTES BY 5` yazarsınız, çünkü bu, nihai tutarlılığı sağlar. Dağıtık kilitler **tamamen kaçınarak** yönetilmektedir. Küme başına sadece bir düğüm, cronları çalıştırmak için bir bayrak ayarına sahiptir. Bu sınırlı gibi görünse de, terabaytlarca RAM'e sahip sunucular satın alabiliyoruz, bu nedenle bu trade-off'u risk ve karmaşıklığı azaltmak için alabiliriz.

### Kendi Yazılarınızı Okumak

API'yi kullanan geliştiricilerin, daha önce olduğu gibi kendi yazılarını okuyabilmesi gerekir (bir yorum oluşturmak için bir API çağrısı yapın, sonra yorumları listeleyin ve bu listedeki yeni girişi görün). **Uyarı** ise, bunu bölgeler arasında yapamayacağınızdır. Arka uç sisteminiz sadece bir bölgede çalışıyorsa, örneğin us-west, o zaman kendi yazılarınızı okuyabilmelisiniz, yalnızca yazmanız ile okumanız arasında, o düğüm çöker ve DNS cache’iniz bir sonraki en yakın düğüme yönlendirilirse bu durum dışında. Bu durum gerçekleşmediği sürece, kendi yazılarınızı okumak güvenilirdir.

### Test Etme & Göç

Sistemin kodunun yaklaşık yarısı test sargı, çerçeve ve testlerden oluşmaktadır. Yine de, sürüm biraz sarsıntılı oldu ve beklenenden daha uzun bir kesinti süresi aldı (AB için 1 saat, genel olarak 20 dakika), ancak bu aşamayı geçtiğimiz için mutluyuz ve sabrınız için teşekkür ederiz!

### Sonuç ve Sizin İçin Anlamı

FastComments artık daha hızlı ve dayanıklı olmalıdır ve şimdi özellikler üzerinde çalışmaya geri dönebiliriz :)

Şerefe!

{{/isPost}}

---