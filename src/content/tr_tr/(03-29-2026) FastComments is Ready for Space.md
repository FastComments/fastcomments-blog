---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments Uzay İçin Hazır![/postlink]

{{#unless isPost}}
Aktif-aktif veritabanı geçişimizi tamamladık, böylece FastComments'a gerçek çok bölge yedekliliği getirdik.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

### Yenilikler

Her FastComments [ulaşım noktası](https://sophon.fastcomments.com/) artık yerel yazma işlemleri yapıyor ve bunları diğer düğümlere asenkron olarak çoğaltıyor. Bu, önceki sisteme göre artan dayanıklılık sağlayacak ve bazı bölgelerde kullanıcılar için moderasyon araçlarını daha hızlı hale getirecek, beraberinde bazı ticari kazanımlar da getirecektir.

"Uzay için hazır" biraz iyimser bir ifade, ama fikir, FastComments'ı farklı gezegenlere dağıtabileceğimiz ve nihayetinde sistemin senkron hale geleceğidir. Ancak, Pluto'daki kullanıcıların, yalnızca bir bölge başına bir ana bilgisayarın fatura bilgilerini toplamasına izin verildiğinden, önümüzdeki fatura sayfasında değişiklikleri görmeleri için yaklaşık bir gün beklemeleri gerekecek.

### Geçmişteki Bazı Bilgiler, Neden Değişiklik

FastComments ilk olarak piyasaya çıktığında oldukça tipik bir mimariye sahiptik. Bir proxy katmanı, bir uygulama katmanı, bir veritabanı, bazı kopyalar ve daha sonra ek yedeklilik için bölgeler ve bulut sağlayıcıları arasında kopyalar vardı.

Sonunda veritabanı kopyalarını kullanıcılarımızın çoğunun bulunduğu tüm bölgelerde taşıdık ve uygulamayı oraya da dağıttık, ayrıca talepleri en yakın uygulama düğümüne yönlendirmek için kendi DNS ve proxy sistemimizi oluşturduk (ileride bir blog yazısında açıklanacaktır). Bu, okuma işlemlerini hızlı hale getirirken, yazma işlemlerini yavaşlatmaktadır; çünkü artık arka uçta bir HTTP gidiş-dönüş beklemek yerine, yakındaki bir düğüm için bir HTTP gidiş-dönüş bekliyorsunuz ve o düğüm, birincil veritabanına geri çoklu yazma işlemleri yapabilir. Kötü!

Bunu aşmak için uygulamanın birçok bölümünü yeniden yapılandırdık, böylece çağrıcılar okuma işlemlerinin ne kadar eskimiş olacağını belirleyebiliyor. Ayrıca daha fazla yazma işlemini (örneğin moderatör eylemleri üzerine moderatör istatistiklerini yazmak gibi) ateşle ve unut yöntemiyle gerçekleştirdik. İdeal değil, ama işleri önemli ölçüde hızlandırdı.

Mongo'yu küresel olarak kullanırken karşılaştığımız bir sorun, ağ bölünmeleridir. Yeterince düğüm kesilirse, her düğüm okumaların kabul edilebilir olup olmadığını bilmediğinden okumalar durur. Bunun etrafında bazı çözümler var, ancak kenar durumları karmaşık hale geliyor. Bu teorik bir sorun değil - bu, birçok kez 3AM'te sayfa bildirimleriyle sonuçlandı, bu yüzden bundan bıktık, hatta Mongo'yu bir dakikalık çoğaltım ekibi seçimi belirsizliğine toleranslı olabilmesi için ayarlamaya çalıştık. Maalesef, örneğin Sao Paulo'dan Falkenstein'e olan ağlar, bazı barındırma sağlayıcılarımız arasında pek iyi değildi. Sıkışıklık kontrolü ve benzeri ayarların yapılması yardımcı oldu ancak sorunu çözmedi.

Kutsal kâse çözüm, belirli ticari kazanımlarla çalışmaya istekliyseniz, o düğümde yerel yazmaları kabul etme yeteneğidir (iyi bir donanıma, RAID'e vb. sahip olup patlaması olası olmayan) ve kullanıcıya verilerinin kaydedildiğini bildirmektir. O ulaşım noktasında ayrıca dayanıklılık için sıcak bir kopya olarak ikinci bir düğüm de bulundurabilirsiniz.

Sonuç olarak buraya ulaştık. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, kendi kopyalarının bulunduğu ve yazma işlemlerini kabul eden tüm bölgeleridir. AB dağıtımı (sadece üç PoP olmasına rağmen) aynı davranışa sahiptir.

### Nasıl Çalışır

Bunun bazı kısımları önceki bölümde ele alındı, ancak kısacası, bu CRDT-lite'tır. Uygulama ile Mongo arasında bulunan ve çoklu ana makine yapan bir proxy geliştirdik (tabii ki Rust'ta). Proxy, akran bilincine sahiptir, kontrol noktalarını, çoğaltmayı, izlemeyi ve başlangıç senkronizasyonunu yönetir. Mongo'nun çoğaltım sistemi için çoklu ana makine yerine geçmektedir, bazı DDL komutları da dahil.

**Diğer araçlardan farkı**, **oplog'u takip etmemesidir**. Oplog'un takip edilmesi veya değişim akışlarının kullanılması işe yaramaz, çünkü yalnızca yazım sonrasında nesnenin nihai durumunu gösterir, bu da çatışmaları yönetmeyi imkansız kılar. Her `$set`, `$inc` işlemini yakalamanız ve bu işlemi kendisini çoğaltmanız gerekir.

Bu, alanına özgü bir çözümdür. Tüm ürünler için çalışmaz. Alan odaklı tasarım diyebilirsiniz :). Bizim için işe yarıyor çünkü başlangıçtan itibaren belgelerde değişiklik yaptığımız alanları çok dikkatli bir şekilde yalnızca `$set` yapıyoruz - örneğin Mongo'nun `replaceOne` özelliğini asla kullanmıyoruz. Sayacılarla da aynı şekilde. **Asla** `SET VOTES = 5` yapmazsınız. Bunun yerine, sonunda tutarlılığı sağladığı için `INCREMENT VOTES BY 5` yazarsınız. Dağıtılmış kilitler **yapmayarak** işlenir. Küme başına yalnızca bir düğüm crons'u çalıştırma bayrağına sahiptir. Bu sınırlı gibi görünse de, terabaytlarca RAM'e sahip sunucular satın alabiliriz, bu nedenle bu ticari kazanımı riski ve karmaşıklığı azaltmak için alabiliriz.

### Kendi Yazmalarınızı Okumak

API'yi kullanan geliştiriciler için, kendi yazmalarınızı önceden olduğu gibi okuyabilmeniz gerekir (bir yorum oluşturmak için bir API çağrısı yapın, ardından yorumları listeleyin ve bu listede yeni girişi görün). **Ayrıca** bunu bölgeler arasında yapamayacağınızdır. Arka ucunuz yalnızca bir bölgede çalışıyorsa, bizim gibi batı ABD bölgesinde, kendi yazmalarınızı okuyabilmeniz gerekir; yalnızca yazım ile okuma arasındaki düğüm kapandığında **ve** DNS önbelleğiniz bir sonraki en yakın düğüme işaret ettiğinde bu durum geçerlidir. Böyle bir durum yaşanmadığı sürece, kendi yazmalarınızı okumak güvenilir bir işlemdir.

[Ayrıca hangi ulaşım noktasını kullandığınızı sabitleyebilirsiniz. Daha fazla bilgi burada.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Test Etme & Göç

Sistemdeki kodun yaklaşık yarısı test şeması, çerçeve ve testlerden oluşmaktadır. Yine de, sürüm biraz sarsıntılı geçti, beklediğimizden daha uzun kesinti süresi (AB için 1 saat ve küresel için 20 dakika) aldı, ancak bu aşamayı geçtiğimiz için mutluyuz ve sabrınız için teşekkür ederiz!

### Sonuç & Bu Sizin İçin Ne Anlama Geliyor

FastComments şimdi daha hızlı ve daha dayanıklı olmalı ve artık özellikler üzerinde çalışmaya dönebiliriz :)

Şerefe!

{{/isPost}}

---