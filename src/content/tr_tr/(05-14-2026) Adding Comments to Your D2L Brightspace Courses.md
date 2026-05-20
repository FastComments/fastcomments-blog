---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]D2L Brightspace Kurslarınıza Yorum Ekleme[/postlink]

{{#unless isPost}}
FastComments, D2L Brightspace'a artık LTI 1.3 Dinamik Kaydolma aracılığıyla tek adımda kurulur; her kurs birimi için otomatik SSO, iplikli yorumlar ve işbirlikçi sohbet ile birlikte.
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments artık IMS LTI 1.3 Avantaj standardını destekleyerek D2L Brightspace ile birlikte çalışıyor; Dinamik Kaydolma da dahil.
Bu, yüklenmesi gereken bir eklenti olmadığı, koordinasyon gerektiren bir anahtar değişimi olmadığı ve kurs başına bir bağlantı olmadığı anlamına geliyor. Brightspace yöneticisi, LTI Avantaj kayıt ekranına tek bir URL yapıştırır ve FastComments ile Brightspace otomatik olarak el sıkışır. Eğitmenler, FastComments'ı herhangi bir harici aracı ekledikleri gibi birime ekler ve öğrenciler, iplikli yorumları kurs içeriği içerisinde görebilir.

<div class="text-center">
    <div class="sm">Bir Brightspace biriminin içerisinde konu olarak gömülü iplikli yorumlar</div>
    <img src="images/d2l-course-comments.png" alt="FastComments, D2L Brightspace biriminde çalışıyor" title="FastComments, Brightspace Biriminde" />
</div>

### Başlarken

FastComments kontrol panelinizden, [LTI 1.3 Yapılandırma sayfasını](https://fastcomments.com/auth/my-account/lti-config) açın, platform açılır menüsünden **D2L Brightspace**'ı seçin ve **URL Oluştur** butonuna tıklayın. 30 dakika geçerli olan tek kullanımlık bir kayıt URL'si alırsınız.

Brightspace'ta yöneticiniz **Yönetici Araçları > Uzantıları Yönet > LTI Avantaj > Araç Kaydet**'i açar, URL'yi **Araç başlatma kayıt son noktası** alanına yapıştırır ve gönderir. Brightspace, FastComments ile kayıt el sıkışmasını gerçekleştirir, imzalama anahtarlarını değiş tokuş eder ve araç kaydını oluşturur. Tamamlandığında açılır pencere kendiliğinden kapanır.

Kaydın ardından, yönetici aracı etkinleştirir ve erişim sağlaması gereken organizasyon birimlerine yönelik bir dağıtım oluşturur. O andan itibaren, FastComments, her kursun içerik seçiminde **Mevcut Ekle** altında görünür.

### Bir Kursa Ekleme

Herhangi bir kurs biriminde, eğitmen **Mevcut Ekle** butonuna tıklar, etkinlik listesinden **FastComments**'ı seçer ve araç, birimde konu olarak yerleştirilir. Konuyu yeniden adlandırma, birim içinde sırasını değiştirme, belirli gruplara veya yayın koşullarına sınırlama yapma ve görünürlüğü değiştirme gibi işlemler standart Brightspace kontrolleri kullanılarak yapılır. Eğitmenlerin öğrenmesi gereken ayrı bir FastComments ayar ekranı yoktur.

İç içe gömme için, aynı FastComments aracı ayrıca Brightspace HTML editörünün **Madde Ekle** diyalog penceresi altında **LTI Avantaj** aracılığıyla mevcuttur. Bu, bir okuma, quiz talimatları veya herhangi bir HTML konusunun içine doğrudan bir yorum ipliği koymak için LTI Derin Bağlantı akışını kullanır, böylece tartışma, ilişkili içerikle yan yana durur.

### Otomatik SSO

Öğrenciler hiçbir zaman bir giriş ekranı görmez. LTI 1.3 açılışı, Brightspace kimliğini (`sub`, `name`, `email`,
ve `picture`) içeren bir imza taşır. FastComments, imzayı Brightspace'ın yayınladığı JWKS ile doğrular, kullanıcı için güvenli bir SSO oturumu oluşturur ve yorum widget'ını render'lar. Yorumlar, öğrencinin Brightspace hesabına atfedilir ve eğitmenler de Brightspace kimlikleriyle moderasyon yapar.

Rol eşleştirmesi otomatik olarak gerçekleşir. Brightspace **Yönetici** kullanıcıları FastComments yöneticisi olarak gelir, **Eğitmen** kullanıcıları moderatör olarak gelir ve diğer herkes standart yorumcular olarak gelir. FastComments tarafında bakım yapılması gereken ayrı bir kullanıcı listesi yoktur - Brightspace'ın söylediklerine uyar.

### İplik Kapsamı

Her yorum ipliği bir üçleme bağlıdır: Brightspace ana bilgisayarı, kurs ve kaynak bağlantısı. Bu, her biri "Okuma Yansımaları" konusunu kullanan iki kursun kendi tartışmalarını alacağı anlamına gelir. Aynı durum, bir eğitmenin aynı kursa FastComments'ı iki kez eklemesi durumunda da geçerlidir (örneğin, bir kez birim konusu olarak ve bir kez de bir HTML sayfasının içinde iç içe gömme olarak) - her yerleştirme kendi ipliğidir.

Ana bilgisayar bölümü, iplik tanımlayıcısının bir parçasıdır. Kurumunuz, bir FastComments hesabı altında birden fazla Brightspace örneği çalıştırıyorsa, kurs kimlikleri çakışsa bile tartışmalar her örnekte izole kalır.

### Sonuç

Eğer D2L Brightspace kullanıyorsanız, FastComments ile canlı hale gelmek bir öğleden sonranızı alır: URL'yi oluşturun, Brightspace'a yapıştırın ve eğitmenlerin aracı birimlerine eklemelerine izin verin. Sorun giderme ve sayfaya özgü ekran görüntülerini içeren adım adım tam kurulum için, 
[LTI 1.3 Kurulum Kılavuzu](https://docs.fastcomments.com/guide-installation-lti-1p3.html) sayfasına bakın. Aynı entegrasyon Moodle, Blackboard, Sakai, Schoology ve diğer tüm LTI 1.3 Avantaj platformlarını kapsar, ancak Brightspace pilot hedefimizdi ve akış orada çok sağlamdır.

Sağlıkla kalın!

{{/isPost}}

---