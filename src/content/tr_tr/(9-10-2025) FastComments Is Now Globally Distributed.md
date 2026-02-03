---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Artık Küresel Olarak Dağıtılmıştır[/postlink]

{{#unless isPost}}
FastComments, daha iyi küresel performans için yeni bir mimariye geçiş yaptı.
{{/unless}}

{{#isPost}}

### Yenilikler

Daha önce FastComments, bir web uygulaması için oldukça geleneksel bir mimariye sahipti. Uygulama sunucularımız, veritabanlarımız ve bazı diğer hizmetlerimiz vardı. Bu, iki bölgede (us-west ve eu) kopyalanmıştı. Eğer Fransa'daysanız ve küresel veri merkezi olan bir müşteri için bir yorum dizisini görüntülemek istiyorsanız, istekleriniz yorum verisi için us-west'e gitmek zorundaydı.

Artık öyle değil! Şimdi yorum verileri ve tüm medya varlıkları, küresel dağıtımımızdaki müşteriler için küresel olarak çoğaltılmakta, ve AB dağıtımındaki müşteriler için verilerin üç noktasında kopyalanmaktadır. İstekleriniz, AB'deki en yakın düğüme gider.

### Daha Önce Nasıl Çalışıyordu

Bölgeler ve bulut sağlayıcıları arasında birkaç canlı kopyası olan veritabanları dışında, tüm hizmetler bir hizmet türü başına bir örnek olarak dağıtılmıştı. Bu, her bölge için bir uygulama sunucumuz, bir pubsub sunucumuz ve bir medya sunucumuz olması anlamına geliyordu. Plan, mümkün olduğunca dikey ölçeklenmekti çünkü bu işleri basit tutuyordu. Kod yazmak kolaydı - veritabanına eriştiğinizde "kendi yazdığınızı okuma" yeteneğinizi her zaman biliyordunuz. Altyapı kolaydı, güvenlik güncellemeleri dışında, bu durum birkaç dakikalık bir kesintiyi gerektiriyordu.

### Sorun

Sorun, kapasiteye ulaştığımızda belirgin bir şekilde başladı. Böylece optimize ediyorduk ve sonunda o hizmet için örnek boyutunu artırmak zorunda kalıyorduk.

Bu, Linode'da maliyet açısından sorunlu hale gelmeye başladı. 144 dolarlık bir örnek, geçiş testi sonuçlarımıza göre yaklaşık 20 dolarlık bir OVH düğümüne eşdeğerdi, ve hosting sağlayıcılarını değiştirdiğimizde birçok yerde tekil hata noktalarına sahip oluyorduk - ve OVH gibi sağlayıcıların bakım sorunları için Linode'dan daha uzun çözüm süreleri olma eğilimi vardı.

### RiR :)

FastComments'teki ilk birkaç yıl PubSub ve Media hizmetleri Java ile yazılmıştı. Java, harcanan çaba açısından nispeten yüksek performans sağlamak için seçildi ve GC'yi yıllarca ayarladıktan, G1GC, Shenandoah ve Z1 denedikten sonra, artık daha fazla Java istemedik. Bellek kullanım maliyeti basitçe çok fazlaydı ve bu hizmetler tamamlandığında genellikle durağandı, dolayısıyla Java'nın faydaları azaldı. Ayrıca, bu hizmetler "thundering herd" sorunu ile başa çıkmak zorunda kalıyordu, bu da JVM'nin JIT devreye girmeden zirve trafiği yönetmeye çalışması anlamına geliyordu. Bu hizmetler, C++ veya Rust'a geçmek için çok uygun adaylardı.

Rust, C++ uzmanı olmadığımız için seçildi ve net kodda bir hata yapmanın bir müşterinin verisini başka birine açabileceğini biliyorduk. Rust, bu tür sorunları önlememize yardımcı oluyor.

Bu hizmetleri birleştirmek istedik, bu nedenle belki de GraalVM ile daha fazla optimize etmek yerine Rust'a geçmeye ve bunu tamamlamaya karar verdik.

Göç, sorunlar olmadan değildi. Bu hizmetler SSL'yi sonlandırmalı, HTTP 1.1, HTTP/2 desteği sağlamalıydı. Birçok veri akışını eş zamanlı olarak yönetmeli, bir kenar bellek LRU önbelleğinden, S3'ten, veritabanlarından medya okumalı ve bir ağ içinde iletişim kurmalıydı. Java ekosistemi, Vertx ve Netty, bu tür işler için oldukça iyiydi. Kütüphane ekosistemini sınırına kadar zorlayıp, Rust kütüphaneleri hakkında fazla deneyimimiz olmaması nedeniyle bazı denemeler ve hatalar yaşadık. Bu bazı kesintilere neden oldu, bu yüzden özür dileriz.

Farklı bellek yöneticileri ile de denemeler yaptık, özel DNS sunucularımız için mimalloc ve taşıma katmanı için libc ile karar verdik. Nginx veya Apache çalıştırmıyoruz; bunun yerine Maxmind'den haftalık olarak yeniden inşa edilen bir bellek içi dizine dayalı olarak küresel olarak istemcileri yönlendiren özel bir DNS sunucumuz ve diğer taşıma örnekleriyle bir ağ oluşturan Rust'taki taşıma katmanımızı kullanıyoruz. Taşıma, SSL'yi sonlandırır, pubsub işlerini yönetir ve CDN'mizdir. Bunun faydası, hizmetler arasında şeyleri taşırken daha az yük ve altyapı aşırılığıdır. Dezavantajı ise görünürlük, bu nedenle iyi metrikler önemlidir.

Sonuç olarak, Rust hizmetleri, tüm çalışmalarımıza rağmen Java hizmetlerinin belleğinin %10-30'unu kullanıyor. Eğlencelik Java Concurrency in Practice gibi kitaplar okuyorum, bu yüzden bir uzman olmasam da hızlı JVM hizmetleri yazma konusunda bir şeyler biliyorum ve bunu Rust ile başarmak çok daha kolaydı. Ayrıca, büyük sayıda aboneye mesaj gönderme patlamaları, JVM hizmetlerinin zamanlarının %40'ını GC'de harcadığı dönemde CPU kullanımında neredeyse hiç belirgin olmadı; yazılımımız bir oyun motoruna daha çok benziyor, tipik bir sunucuya daha az. Rust hayranı olduğumu söyleyemem, ama çok iş yapan ve başlangıç geliştirmeden sonra fazla değişmeyen hizmetler için mükemmel. Ana iş mantığımız TypeScript'te kalıyor.

### Yeni Mimari

Yeni mimaride artık "evcil" düğümler yok. Bunun yerine, her sunucu, tüm aynı hizmetleri ve neredeyse kimliksiz yapılandırmayı içeren bir kopyadır. Her biri taşıma, DNS, uygulama sunucusu ve veritabanının bir kopyasını çalıştırır. Tüm düğümler, Dropbear ile otomatik açılma ile Tam Disk Şifrelemesi sağlıyor.

Her sunucu, istekleri sonlandıran ve bunları websocket, http akışı veya cdn isteği olarak yöneten yönlendirme taşımasını çalıştırıyor. Bu sunucular birbirleriyle bağlantı kurar ve herhangi biri, küresel ağın yerel DNS sunucusuna gerçek zamanlı olarak her canlı düğümün nerede olduğunu anlatan bir harita sağlamaktadır.

Yeni mimarinin bir faydası yedekliliktir. Eğer bir bölgedeki bir müşteri bizi gerçekten zorlayacaksa, diğer bölgeler çevrimiçi kalır.

Uygulama kodu artık hangi sorguların en yakın düğüme ulaşabileceğine veya hangilerinin ana veritabanına gitmesi gerektiğine çok dikkatli bir şekilde yaklaşmak zorunda. Hatalı bir karar, performansı önemli ölçüde azaltabilir. Ayrıca, bazı bölgelerden gelen yazmalar yavaş olabilir ve bu, dikkatli bir ayarlama ve optimizasyon gerektirir. Artık, kod içinde tüm veritabanına erişim sağlayan tüm yöntemlerin bir readPreference argümanına sahip olduğu bir şemayı takip ediyoruz, böylece arayıcılar en üst kısma kadar nasıl sorgu yapacaklarına açık bir şekilde karar vermek zorunda kalıyor.

Faydası, okuma için çok iyi yatay ölçeklenme sağlamasıdır. FastComments, oldukça okuma ağırlıklıdır, ancak moderatörlerimizi unutmamalıyız! Moderatörler, dünya çapında gün boyunca çalışır ve deneyimlerinin iyi kalmasını istiyoruz. Bu dağıtım sürecinde, moderasyon araçlarının hızlı kalmasını sağlamak için bazılarıyla çalıştık.

Ayrıca, donanımı seçme seçeneğine sahibiz, bu da eğlenceli ve ödüllendirici. Yeni sunucularımız, i5-13500 ve Ryzen 5 5600X kutularının bir karışımıdır ve AB, daha eski Xeon'lar üzerinde çalışmaktadır. Karşılaştırmalarımızda, bunların hepsi, diğer sağlayıcılarda araştırdığımız daha pahalı sunuculardan çok daha hızlıydı. Dezavantajı daha fazla kurulum çalışması gerektirmesi, ancak bunu otomatikleştirdik ve arızalar için SMART disk izleme gibi şeyler sağladık.

Bu tür şeyler yapmak, rekabetçi fiyatlandırma sunmaya devam etmemizi sağlar.

### Dağıtım

Hizmetleri yeniden yazarken ve yeni hosting sağlayıcılarına geçerken son birkaç ayda yapılan dağıtım pürüzlü geçti, sabrınız için teşekkür ederiz.

İlk dağıtımda metriklerimiz bize 100 ms'den fazla süren isteklerde bir artış gösterdi. Bu kadar uzun süren çok sayıda isteğimizin olmamasını sağlıyoruz.

<div class="text-center">
    <div class="sm">Aşamalı Gelişme</div>
    <img src="images/slow-reqs.png" alt="Yavaş İstekler" title="Yavaş İstekler" />
</div>

Belirli bölgeler için performansı iyileştirmek adına hala aşamalı bir ilerleme kaydediyoruz. Şu ana kadar geri bildirimde bulunan herkese teşekkür ederiz.

### API Kullanırken Dikkat Edilmesi Gerekenler

API, geriye dönük uyumluluğu sağlamak ve geliştiriciler için işleri basit tutmak amacıyla güçlü bir şekilde tutarlıdır - kendi yazdıklarınızı okuyabilirsiniz. Geliştiricilerin tutarlılık yerine performansı seçmelerine izin vermek için readPreference parametresini sunmayı planlıyoruz. Bunun avantajı, bu API çağrıları için bir kredi indirim teklifi sunabiliyor olmamızdır.

Herkese açık uç noktalar, halka açık yorum widget'ını sunmak için, her zaman o düğümdeki en yakın (yerel) veritabanından okuma yaparlar.

### Neden Sıradan Bir CDN Kullanmayalım

Yorum dizileri statik değildir, canlıdır, ve eski statik veriler üzerinde bir canlı akış uygulamak işe yaramaz; çünkü bir dizi anlık kullanıcı olarak görüntülediğinizde "anonim oturum" alıyorsunuz. Bu anonim oturumda diğer kullanıcıları engelleyip raporlayabilirsiniz ve anonim kullanıcının belirli bir yorumu beğenip beğenmediğini göstermeniz gerekir, vb. Yorum dizileri ayrıca SSO, kimlik doğrulama veya kullanıcı grupları altında kilitlenebilir.

Son olarak, dinamik verilerin CDN'den statik verilere eşlendiği "ilerlemeli geliştirme" türü, içeriğin sıçraması veya birkaç saniye sonra değişmesi ile kötü bir deneyim sağlar. Bunu yapmayı tercih etmiyoruz.

### Şimdi Verilerim Kimde

Verileriniz artık Linode'da depolanmıyor. Hetzner ve OVH arasında canlı bir şekilde kopyalanmakta ve tam disk şifrelemesi ile korunmaktadır, ve arka uç sunucular arasındaki tüm iletişim TLS ile yapılmaktadır. ÇıkışWebhook proxy'leri için birkaç eski Linode örneği tutuyoruz, ancak Linode'da herhangi bir veri veya medya depolanmamaktadır.

### Sonuç

Tüm büyük sürümlerde olduğu gibi, bu değişikliği optimize etme, test etme ve düzgün bir şekilde yayma şansına sahip olduğumuz için mutluyuz. Bu çalışma ile FastComments daha iyi ölçeklenmeli ve uzun vadede daha iyi çalışma süresine sahip olmalıdır. Herhangi bir sorunla karşılaşırsanız, lütfen aşağıda bize bildirin.

{{/isPost}}