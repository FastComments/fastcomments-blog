[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments Artık Zapier'de[/link]

{{#unless isPost}}
Yorumlarınızı resmi FastComments Zapier uygulamasıyla binlerce uygulamaya bağlayın. Bir yorum gönderildiği anda tetikleyiciler çalışır ve herhangi bir uygulama sitenizde yorumlar, sayfalar ve kullanıcılar oluşturabilir.
{{/unless}}

{{#isPost}}

### Yeni Neler

Artık resmi bir FastComments uygulaması [Zapier](https://zapier.com) üzerinde mevcut. Zapier editöründen bir kez oturum açın ve her yeni yorumu Slack'e gönderebilir, bir elektronik tabloya kaydedebilir, yorumcuları CRM'inize ekleyebilir veya bir form gönderiminden yorum oluşturabilirsiniz; hiç kod yazmanıza gerek yok.

Bundan önce, FastComments'ı başka bir araca bağlamak, kendi webhook alıcınızı kurmak ya da REST API'ye karşı kod yazmak anlamına geliyordu. Her ikisi de hâlâ çalışıyor. Zapier uygulaması, hiçbir şey çalıştırmak istemediğiniz durumlar için.

### Tetikleyiciler

Üç tetikleyici, hepsi anında:

- **New Comment** bir yorum gönderildiğinde çalışır. Varsayılan olarak yalnızca onaylanmış, spam olmayan yorumlar tetiklenir, böylece bir kamu kanalına gönderilen Zap, hâlâ moderasyon kuyruğunda olan şeyleri sızdırmaz. Her şeyi dahil etmek için bir onay kutusu vardır.
- **Updated Comment** bir yorum düzenlendiğinde, onaylandığında, oylandığında, sabitlendiğinde veya başka bir şekilde değiştiğinde çalışır. Onay alanına filtre uygulayarak "onaylanmış yorum" tetikleyicisi elde edersiniz.
- **Deleted Comment** bir yorum silindiğinde çalışır ve tam yorum kaydınız olur.

Her tetikleyicinin, hesabınızda yapılandırılmış alan adlarını listeleyen isteğe bağlı bir domain filtresi vardır; böylece bir Zap birçok site arasından bir tanesini izleyebilir.

Tetikleyiciler, anket yerine webhook'lar tarafından desteklenir. FastComments, olay gerçekleşir gerçekleşmez Zapier'e iletir, beklerken hesabınızı sorgulayan bir şey yoktur ve bekleme API kredisi harcamaz.

### Eylemler ve Aramalar

Eylemler, FastComments API'sini sizin adınıza çağırır:

- **Create Comment** herhangi bir sayfada, adlandırılmış bir yorumcu olarak veya mevcut bir SSO kullanıcısı olarak, isteğe bağlı olarak yanıt olarak.
- **Create Page**, böylece bir sayfa listelenebilir ve ilk yorumu gelmeden önce üye gruplarına kısıtlanabilir.
- **Create SSO User**, böylece diğer araçlarınızdan üyeler kendi kimlikleriyle yorum yapabilir.
- **Create Feed Post** ve **Create Hash Tag**.
- **Flag Comment** moderatör incelemesi için.

Aramalar, sonraki adımlar için şeyleri bulur: **Find Comment** kimliğe göre, **Find SSO User** e-posta ile ve **Find Page** URL kimliğine göre. Zapier'in "bul ya da oluştur" modunda bir aramayı eşleşen oluşturma ile eşleştirirseniz, eksik kullanıcı veya sayfa sizin için oluşturulur.

### Başlangıç İçin Birkaç Zap

- New Comment, ardından Slack "Send Channel Message". Yorumcunun adını, yorumu ve sayfa URL'sini eşleştirin. Domain filtresini kullanarak her siteyi kendi kanalına yönlendirin.
- New Comment, ardından Google Sheets "Create Spreadsheet Row", Deleted Comment ile ikinci bir Zap olarak bir satır ekleyin. Sayfa bir denetim izi haline gelir.
- Approved true olarak filtrelenmiş Updated Comment, ardından Gmail "Send Email" yazarak yazarın yorumunun yayında olduğunu bildirin.
- Typeform "New Response", ardından onay işareti bırakılmadan testimonials sayfanıza Create Comment, böylece her birini görünmeden önce gözden geçirirsiniz.
- WordPress "New Post", ardından Create Page, böylece her gönderi ilk yorumdan önce kaydedilir.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) daha fazlasını içerir, üyelik aracınızdan SSO kullanıcıları sağlamak için bir iş akışı da dahil.

### Nasıl Bağlanır

Uygulama OAuth kullanır. Bir FastComments adımı eklediğinizde, Zapier bölgenizi (United States veya EU) sorar, oturum açmanız için sizi FastComments'a yönlendirir ve uygulamanın adını, bağlanacağı hesabı ve istenen izinleri gösteren bir onay sayfası gösterir. Zapier'a bir API anahtarı kopyalanmaz.

Bağlantıyı onaylayan kişi, hesabın bir API yöneticisi olmalıdır. Hesap sahipleri zaten buna sahiptir ve Kullanıcılar sayfasında diğer ekip üyelerine verebilirler.

Her bağlantı, kontrol panelinizde **Integrate**, ardından **Connected Apps** altında görünür, resmi bir entegrasyon olarak işaretlenir ve en son ne zaman kullanıldığı gösterilir. Orada iptal etmek, Zapier'ı hemen keser. Bir Zap'ı açmak, **API** kaynağıyla Webhooks sayfasında görebileceğiniz bir webhook aboneliği oluşturur ve Zap'ı kapatmak bunu kaldırır.

### Maliyeti

Uygulama, ücretsiz plan dahil olmak üzere her Zapier planında ücretsizdir ve FastComments bunun için ekstra ücret almaz. Tetikleyiciler API kredisi harcamaz. Eylemler ve aramalar, kendi kodunuzdan yapılan bir çağrının harcayacağı aynı kredileri harcar; çoğu durumda çağrı başına bir kredi.

### Dokümantasyon

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) bir hesabı bağlamayı, her tetikleyici ve eylemi alanlarıyla, örnek Zaps'ları ve sorun giderme konularını kapsar. Entegrasyonun kendisi açık kaynak olarak [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier) adresinde bulunur.

### Sonuç

Uygulamayı bulmak, hesabınızı bağlamak ve ilk Zap'ınızı oluşturmak için [fastcomments.com/zapier](https://fastcomments.com/zapier) adresini açın.

Her zaman olduğu gibi, bir sorunla karşılaşırsanız aşağıda bize bildirin.

Sağlıcakla!

{{/isPost}}