[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]OpenWeb'ten FastComments'a 2026'da Nasıl Geçiş Yapılır[/postlink]

{{#unless isPost}}
OpenWeb'ten (eski adı Spot.IM) ayrılan yayıncılar için özellik bazlı bir rehber: 1:1 eşleşenler, farklı olanlar, CSV içe aktarma nasıl çalışır, SSO el sıkışması nasıl değişir ve adım adım bir geçiş planı.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Jargon İçerir

Bu rehber, bugün OpenWeb'i yöneten ürün ve mühendislik liderleri ve topluluk yöneticileri için bir geçiş planına ihtiyaç duyanlar içindir. Her OpenWeb yüzeyini inceler, FastComments eşdeğerini adlandırır ve 1:1 eşleşmenin olmadığı yerleri açıkça söyler.

### Neden Şimdi

30 Eylül 2026'da Tel Aviv Bölge Mahkemesi, alacaklısı Mars Growth Capital'ın talebi üzerine OpenWeb üzerinde geçici bir alacaklı atamasını emretti; bu alacaklı şirketin varlıkları ve hesapları üzerinde birinci öncelikli bir rehin tutuyor ve OpenWeb'in İsrail varlıkları, banka hesapları ve fikri mülkiyeti üzerinde bunu uygulamaya çalışıyor (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Ertesi gün geçici bir mütevelli, Adv. Ehud Gindes, atandı (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). 2026'nın başlarında Microsoft, OpenWeb'in en büyük müşterilerinden biri, bir trafik anlaşmazlığı nedeniyle katılımını sonlandırdı ve ödemeleri tuttu (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb platformunun çalışmaya devam ettiğini söylüyor. Mahkeme denetimi, yorum widget'ınızın dayandığı bir IP üzerindeki bir alacaklının rehin uygulaması ve varlık değerini korum korumakla görevli bir mütevelli, bir yayıncı için temel etkileşim yüzeyi olarak istenmeyen koşullardır. Henüz tam bir veri dışa aktarımı yapmadıysanız, önce bunu bugün, bu rehberdeki başka bir şeye başlamadan yapın.

### Başlamadan Önce Gerekenler

Collect these before touching any code:

- **OpenWeb yorum dışa aktarımınız.** OpenWeb, bir Export API (v4) sunar ve sıkıştırılmış CSV dosyaları üretir, dosya başına en fazla 100.000 yorum, bir ayı geçmeyen tarih aralıkları ve bir hafta sonra süresi dolan indirme bağlantıları (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). İhtiyacınız olan her pencereyi isteyin ve dosyaları güvenli bir yerde saklayın. OpenWeb temasınız geçmişte bir Admin Panel CSV dışa aktarımı sağladıysa, onu da saklayın. FastComments içe aktarıcı, `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` ve `url` gibi sütunları olan OpenWeb CSV'sini okur.
- **Spot ID'niz ve gönderi ID'lerinin listesi.** Gönderdiğiniz her `data-post-id` başlatıcıda bir FastComments URL ID'si olur. Gönderi ID'leriniz CMS makale ID'leri ise, aynı değerleri FastComments tarafında da üretebilmek için nasıl üretildiklerini not edin.
- **SSO kullanıcı listeniz.** Özellikle OpenWeb ile kaydettiğiniz `primary_key` ve `user_name` değerleri. Yorum yazarları içe aktarma sırasında kullanıcı adıyla eşleşir, bu yüzden FastComments SSO yükünde aynı kullanıcı adlarını göndermek istersiniz.
- **Moderatör listeniz ve rolleri.** Admin, moderatör ve gazeteci hesapları ve her birinin moderasyon yaptığı bölümler.
- **Moderatör yapılandırmanız.** Site genelinde politika (tümünü onayla, yayınla ve denetle, onay gerektir), makale bazlı geçersiz kılmalar, kısıtlı kelime listesi, sessize alınan ve yasaklanan kullanıcılar.
- **Özel CSS ve tema ayarları.** Admin Panel'de dışa aktardığınız her şeyi FastComments widget özelleştirme sayfasında yeniden oluşturmak için alın.
- **Başlatıcının şablonlarınızda bulunduğu yer**, Reactions, Topic Tracker, Spotlight, Notification Bell veya Conversation olmadan bir Standalone Ad içeren sayfalar dahil.

### AI Destekli Geçiş

FastComments, geçişi hızlandırmak için bir [LLM Kit ve MCP server](https://docs.fastcomments.com/guide-llm-kit.html) sağlar.

### OpenWeb'in Gönderi ID'leri FastComments URL ID'lerine Nasıl Eşlenir

FastComments, bir yorum dizisini bir `urlId`'ye bağlar. Varsayılan olarak URL ID, temizlenmiş sayfa URL'sidir, ancak istediğiniz herhangi bir dizeye ayarlayabilirsiniz ve OpenWeb içe aktarıcı tam olarak bunu yapar: `post_id` sütununu okur ve o makaledeki her yorum için FastComments URL ID'si olarak kullanır. Ayrıca `url` sütununu görüntü URL'si olarak saklar, böylece moderasyon bağlantıları ve bildirim e-postaları doğru sayfaya yönlendirilir.

Dolayısıyla şablonlarınız için kural şudur: OpenWeb'e `data-post-id="POST_ID"` ve `data-post-url="ARTICLE_URL"` gönderdiğiniz her yerde, FastComments'e `urlId: 'POST_ID'` ve `url: 'ARTICLE_URL'` gönderin. İçeri aktarılan diziler, yönlendirme ve URL yeniden yazma olmadan canlı dizilerle eşleşir. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID belgelerine</a> bakın.

İleride dizileri URL ile değil gönderi ID'si ile anahtarlamayı tercih ederseniz, önce içe aktarın ve ardından Manage Data altında bulunan Migrate Comments aracını kullanarak dizileri toplu olarak gönderi ID'sinden URL'ye taşıyın.

### Özellik Haritası

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Notes |
| --- | --- | --- |
| Gerçek zamanlı güncellemelerle Konuşma | Canlı yorumlama ile Yorum widget'ı | Varsayılan olarak canlı. Yeni yorumlar "Show N New Comments" düğmesinin arkasına gizlenir veya `showLiveRightAway` ile anında görünür. |
| Yorumlarda beğeniler ve beğenilmeme | Yukarı ve aşağı oylar | İçe aktarma `likes_count` ve `dislikes_count` değerlerini korur. Kalp stili ve "oylamayı devre dışı bırak" yapılandırma seçenekleridir. |
| Reaksiyonlar (makalevel simgeler) | Sayfa Reaksiyonları | Sayfada yapılandırılabilir simge seti, kullanıcı başına hatırlanır. |
| Yanıtlar ve diziler | Dizili yanıtlar, sınırsız derinlik | `maxReplyDepth` iç içe geçmeyi sınırlar. |
| Sıralama: en iyi, en yeni, en eski | En İlgili, En Yeni Önce, En Eski Önce | `defaultSortDirection` site bazında veya URL deseni bazında varsayılanı ayarlar. |
| Kullanıcı profilleri | Kullanıcı profilleri | Avatar, biyografi, rozetler, karma, etkinlik, DM'ler. SSO kullanıcıları için çalışır. |
| Yazar Rozeti | `displayLabel`, `isAdmin`, `isModerator`, rozetler | SSO yükünde ayarlanır. Backend sorgulama çağrısına gerek yok. |
| Sabitlemiş Canlı Blog güncellemeleri, vurgulanan yorumlar | Herhangi bir yorumu Sabitle ve Sabitlemeyi Kaldır | Moderatörler widget'tan veya kontrol panelinden sabitleyebilir. Bir AI Agents şablonu en çok oy alan üst düzey bir yorumu sabitler. |
| Konuşma İçindeki Anketler | Yorumlarda Anketler | 2 ila 10 seçenek, isteğe bağlı kapanış tarihleri, sonuç gizliliği (anonim, sadece adminler, herkes) ve "sonuçları görmek için oy ver" modu. Anketi kimlerin oluşturabileceğini (devre dışı, adminler ve moderatörler, herkes) ve anonim okuyucuların oy verip veremeyeceğini seçersiniz. Anketler ayrıca CMS'nizden oluşturmak için genel API'de sunulur. |
| Ask Me Anything formatları | Ayrı bir ürün yok | Yazarın SSO kullanıcısı bir `displayLabel` taşır, giriş yorumunu sabitlersiniz, okuyucular üst düzey yorumlarda sorar, konuk dizede yanıt verir ve bahsetme ve yanıt bildirimleri insanları geri çeker. `noNewRootComments` pencere kapandıktan sonra sadece yanıtların devam etmesi için ayarlayın. |
| Canlı Blog | 1:1 eşdeğer yok | Canlı Sohbet widget'ı ve sohbet modu yorumları mevcuttur. Editöryel canlı blog tutma CMS'nizde kalır. |
| Konu İzleyici (konuları ve yazarları takip et) | Sayfa abonelikleri | Kullanıcılar bir sayfayı takip eder, konu veya yazar değil. Makaleler arası takip yok. |
| Bildirim Zili | Widget'ta bildirim zili | Yanıtlar, bahsedenler, dize etkinliği, oylar, abonelikler, rozet ödülleri ve doğrudan mesajlar. |
| E-posta bildirimleri | Şablonlu e-posta bildirimleri | Kullanıcı başına SSO bayraklarıyla opt-in. Özel şablonlar, markalı gönderici. |
| SSO el sıkışması (codeA/codeB) | Güvenli SSO (HMAC-SHA256 yükü) | Kayıt kullanıcı çağrısı yok. Sunucu tarafında bir yük imzalanır, widget'a gönderilir. |
| Üçüncü taraf SSO (Auth0, Gigya, Piano) | Sağlayıcınız kimlik doğruladıktan sonra Güvenli SSO | Aynı yük. Backend, kullanıcı oturum açtığında imzalar. |
| Kimlik (OpenWeb kayıt ekranları) | Sihirli bağlantı girişi, Basit SSO | Okuyucular e-posta bağlantısıyla giriş yapar. Şifre yok. |
| Makale bazlı moderasyon politikası | URL ID deseni başına özelleştirme kuralları | Onay modu, spam filtresi ve daha fazlası `*/section/*` desenlerine göre değişir. |
| Aida AI moderasyonu | Spam sınıflandırıcıları, LLM tabanlı filtreler, görüntü moderasyonu, AI Ajanları | Ajanlar deneme modunda başlar ve insan onayı gerektirebilir. |
| Kısıtlanmış kelimeler | Yerelleştirilmiş kelime kara listesi | ~450 varsayılan ifade, düzenlenebilir. |
| Kullanıcı sessize alma | Kullanıcıyı Engelle | Yorum menüsünden okuyucu başına engelleme. |
| Yasaklamalar | Yasaklamalar | Kalıcı, zamanlı, gölge, IP-şifreli, plus-alias aware. |
| Moderatör Paneli | Yorumları Moderasyon panosu | Filtreler, geri alma ile toplu eylemler, moderasyon grupları, bir tık onaylı özet e-postalar. |
| Bildirim Webhook'u | Webhooks | Yorum oluşturuldu, güncellendi, silindi. Kullanıcı başına bildirim webhook'u yok. |
| Etkileşim panosu | Analitik | Canlı kullanıcılar, en popüler sayfalar, sayfa yüklemeleri, yorumlar, oylar, günlük hesaplar. Reklam geliri raporlaması yok. |
| Konuşma içi reklamlar, Bağımsız Reklam | Yok | FastComments reklam çalıştırmaz. Widget etrafındaki kendi reklam yığınıınızı tutarsınız. |
| Sosyal İncelemeler (yıldız puanları) | Puanlar ve İncelemeler | Aynı hesapta ayrı bir ürün. |
| Toplulukta Popüler | Son Tartışmalar ve En İyi Sayfalar widget'ları | Yorum etkinliğiyle yönlendirilen yeniden dolaşım. |
| Yorum Sayacı | Yorum sayısı widget'ları | Tek ve toplu. |
| Yorumları Dışa Aktarma API | CSV dışa aktarım, API, webhooks | Kontrol panelinden istediğiniz zaman dışa aktarım. |
| Kullanıcı Verilerini Dışa Aktarma ve Silme (GDPR/CCPA) | Hesap ve veri silme, AB bölgesi | eu.fastcomments.com verileri AB içinde tutar. DPA mevcut. |
| Android, iOS, React Native SDK'ları | Android, iOS, React Native SDK'ları | Yerel UI, SSO, canlı güncellemeler, dizileme, moderasyon eyle. |
| Başlatıcı, Sanal Sayfalar, React SDK | Gömme betiği, `fcConfigs`, React, Vue, Angular, SolidJS kütüphaneleri | SPA'lar için `update()` ve `destroy()`. |

</div>

Bu bölümün geri kalanı her grubu ayrıntılı olarak inceler.

### Konuşma, Oylar ve Reaksiyonlar

OpenWeb'in Konuşması gerçek zamanlı bir dizedir. FastComments yorum widget'ı da öyle: yorumlar, düzenlemeler, silmeler, oylar ve moderasyon eylemleri dizeyi izleyen herkese gönderilir (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Varsayılan olarak diğer kişilerden gelen yeni yorumlar "Show 2 New Comments" düğmesinin arkasına gizlenir, böylece sayfa okuyucu altında atlamaz. Canlı etkinlikler için `showLiveRightAway` ayarlayın, böylece anında render edilir, ve `newCommentsToBottom` ayarlarsanız yorumlar aşağı doğru akış gibi akar.

Beğeniler ve beğenilmeme, yukarı ve aşağı oylar haline gelir. İçeri aktarıcı her yorum için her iki sayacı da korur. Topluluğunuz tek bir beğeniye alışkınsa, widget özelleştirme sayfasında oy stilini kalplere değiştirin. Oylama tamamen kapatılabilir.

OpenWeb Reaksiyonları, makalede iki ila dört etiketli simge içeren ayrı bir widget'tır (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). FastComments eşdeğeri Page Reacts'tur: yorum widget'ına eklenen, sayfa ve kullanıcı başına hatırlanan yapılandırılabilir bir reaksiyon görseli seti (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Reaksiyon sayıları OpenWeb yorum dışa aktarımının bir parçası değildir, bu yüzden sıfırdan başlar.

Sıralama doğrudan eşlenir. OpenWeb'in `data-sort-by` değerleri best, newest ve oldest, FastComments'ta Most Relevant, Newest First ve Oldest First karşılık gelir. Varsayılanı kodda veya bir özelleştirme kuralında `defaultSortDirection` (`MR`, `NF`, `OF`) ile ayarlayın. Okuyucular widget içinde değiştirebilir.

`data-read-only="true"` `readonly: true` olur, bu da yeni yorumları, oyları, düzenlemeleri ve silmeleri engeller. `data-post-staleness-days` için doğrudan bir eşdeğer yok, ancak bir özelleştirme kuralı URL ID desenine `readonly` uygulayabilir ve şablonlarınızdan makale yaşına göre de değiştirebilirsiniz. `data-messages-count` sayfa boyutudur, widget özelleştirme sayfasında 10 ile 200 yorum arasında ayarlanabilir.

### Yanıtlar ve Dizileme

FastComments varsayılan olarak sınırsız iç içe geçmeyi destekler; `maxReplyDepth` bunu sınırlar (`1` düz iki seviyeli bir yapı verir). OpenWeb CSV'si `parent_id` ve `parent_comment_id` sütunlarını içerir. İçeri aktarıcı `parent_comment_id`'yi okur ve yanıt ağacığı tam derinlikte yeniden oluşturur, böylece bir yanıtın yanıtı doğrudan ebeveyni altında kalır, yazar, zaman damgası, oylar, işaret sayısı ve onay durumu korunur. Yanıtlar, dosyada ebeveynlerinden önce görünseler bile, ya da ebeveyn daha önceki bir dışa aktarım penceresinden içe aktarılmış olsa bile bağlanır. Her dışa aktarımda ebeveyni eksik olan bir yanıt üst düzey yorum olur. OpenWeb mesaj ID'si her yorumda saklanır, böylece eski bir düz içe aktarma yeniden içe aktarıldığında aynı yerde dizileri oluşturur.

### Kullanıcı Profilleri ve Rozetler

FastComments kullanıcıları, SSO kullanıcıları dahil, avatar, görünen ad, biyografi, sosyal bağlantılar, rozetler, karma, yorum sayısı, herkese açık bir etkinlik akışı ve doğrudan mesajlar içeren bir profil alır (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Etkinlik, profil yorumları ve DM yüzeylerinin her biri SSO yükünde kullanıcı başına veya genel yapılandırmada devre dışı bırakılabilir.

OpenWeb'in Yazar Rozeti, yazar için `GET /sso/v1/user/{primary_key}` çağrısı yapmanızı ve dönen ID'yi `data-author-id` içine yerleştirmenizi gerektirir. FastComments'ta, kullanıcının SSO yükünde `displayLabel: 'Author'` (veya 100 karaktere kadar herhangi bir etiket) ve personel için `isAdmin` veya `isModerator` ayarlarsınız. Etiket, her yorumda adlarının yanında gösterilir. Daha zengin bir sistem için, Customize altında Badges bölümünde rozetleri yapılandırın: görüntü veya metin rozetleri, eşiklerde (yorum sayısı, oylar, sabitlenmiş yorumlar, veteran durumu, yanıt hızı) otomatik olarak verilir veya manuel olarak, ve SSO yükünden `badgeConfig` ile atanabilir (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Sabitlenmiş Yorumlar, Anketler ve Soru-Cevap

Herhangi bir moderatör, widget'taki yorum menüsünden veya moderasyon kontrol panelinden bir yorumu Sabitleyebilir veya Sabitlemeyi Kaldırabilir. Sabitlenmiş yorumlar dizedeki herkese canlı olarak gönderilir. Bunu otomatikleştirmek isterseniz, AI Agents özelliği bir Top Comment Pinner şablonu sunar; bu şablon oy eşiğini aşan üst düzey bir yorumu sabitler (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

OpenWeb'in Konuşma İçindeki Anketleri, personelin üst düzey bir yoruma 2 ila 4 seçenekli anket eklemesine izin verir. FastComments anketleri de bir yoruma eklenir, 2 ila 10 seçenek, isteğe bağlı kapanış tarihi, sonuç gizliliği (anonim, sadece adminler, herkes) ve "sonuçları görmek için oy ver" modu. Anketi kimlerin oluşturabileceğini (devre dışı, adminler ve moderatörler, herkes) ve anonim okuyucuların oy verip veremeyeceğini seçersiniz. Anketler ayrıca CMS'nizden oluşturmak için genel API'de sunulur.

OpenWeb, platformunda Ask Me Anything formatları yürütmüştür. FastComments ayrı bir Soru-Cevap ürünü sunmaz. Pratik bir çözüm, özel bir URL ID üzerinde normal bir dizedir: konukun SSO kullanıcısı bir `displayLabel` taşır, giriş yorumunu sabitlersiniz, okuyucular üst düzey yorumlarda sorar, konuk dizede yanıt verir ve bahsetme ve yanıt bildirimleri insanları geri çeker. `noNewRootComments` pencere kapandıktan sonra sadece yanıtların devam etmesi için ayarlayın.

Community Spotlight (OpenWeb'in e-posta toplayıcı, sayaç ve yönlendirme kartları) eşdeğeri yok. Widget, `headerHTML` aracılığıyla yorum girişinin üstünde özel bir başlık HTML'sini destekler; bu bir eylem çağrısı verir ancak e-posta yakalama formu değildir.

### Canlı Blog

FastComments'ta Canlı Blog yoktur. OpenWeb'in Canlı Blogu editöryel bir üründür: Admin Panel'de atanan muhaberciler gömülü linkler, tweet'ler ve video ile güncellemeler gönderir ve okuyucular takip eder (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

FastComments'ın canlı kapsama sunduğu şey okuyucu tarafıdır: akış sohbeti için bir Live Chat widget'ı (`embed-live-chat.min.js`) ve sohbet modunda yorum widget'ı (`showLiveRightAway` ve `newCommentsToBottom`) canlı kapsamanızın yanında. Editöryel güncellemeler için, OpenWeb'ten ayrılan yayıncılar bunları CMS'lerinde veya özel bir canlı blog aracında tutar ve FastComments'ı altına gömer. Medya gömmeleri (YouTube, SoundCloud ve diğerleri) yorumların içinde desteklenir, böylece personel güncellemeleri yorum olarak gönderildiğinde zengin medya taşır.

### Konu İzleyici, Bildirimler ve E-posta

OpenWeb'in Konu İzleyicisi, okuyucunun sayfa meta verilerinden alınan konuları ve yazarları takip etmesini ve yeni makaleler eşleştiğinde bildirim almasını sağlar (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments, makaleler arasında konu veya yazar takibi sunmaz. Okuyucular bildirim zilinden bir sayfaya abone olur ve o dize için güncellemeler alır; sıklık aboneliğe göre seçilir: her dakika, saatlik özet veya günlük özet. Makale çapraz takibi tutma oranlarınız için önemliyse, bu özelliğin yol haritasında olduğunu bize bildirin.

Bildirim Zili'ndeki diğer tüm öğeler eşleşir. Widget, okunmamış sayısı kırmızıya dönen bir zil ve şu listeleri gösterir: size gelen yanıtlar, yorum yaptığınız dizedeki yanıtlar, bahsedenler, yorumlarınıza gelen oylar, abone olunan sayfalardaki etkinlik, rozet ödülleri ve doğrudan mesajlar (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Uygulama içi bildirimler WebSocket üzerinden gerçek zamanlıdır. Yanıt ve bahsetme e-postaları sadece onaylı yorumlar için her dakika gönderilir.

SSO kullanıcıları için, yükte `optedInNotifications` ve `optedInSubscriptionNotifications` gönderin; FastComments bir sonraki sayfa yüklemesinde tercihlerini günceller. E-postalar için yükte bir e-posta adresi gerekir. E-posta şablonları, Customize altında Email Templates bölümünde tip ve bölge bazında düzenlenebilir ve DKIM ile kendi alan adınızdan gönderim desteklenir. Moderatörler ve adminler, tek tık onay, yanıt ve spam bağlantıları içeren günlük, haftalık veya aylık bir özet alır.

OpenWeb'in Bildirim Webhook'u, kullanıcı başına bildirim olaylarını (`replied-message`, `liked-message`, `topic-by-keyword` vb.) uç noktanıza gönderir. FastComments webhooks yorum kaynakları üzerine odaklanır: oluşturuldu, güncellendi ve silindi, istediğiniz kadar abone uç nokta ile (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Bildirim webhook'unu kendi e-posta sisteminizi beslemek için kullanıyorsanız, bu mantığı yorum olayları üzerine yeniden oluşturacaksınız veya FastComments'un e-postaları göndermesine izin vereceksiniz.

### SSO: codeA/codeB'den İmzalı Yük'e

OpenWeb'in el sıkışması altı adımdan oluşur: `spot-im-api-ready` bekleyin, OpenWeb `codeA` üretir, istemciniz bunu backend'inize gönderir, backend kullanıcıyı doğrular ve `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...` çağrısını yapar, OpenWeb `codeB` döner ve istemciniz `codeB`'yi OpenWeb'e geri verir (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Çıkış `window.SPOTIM.logout()` çağrısı yapar.

FastComments Güvenli SSO, bir dönüş yoluna ve tarafınızda yeni bir uç noktaya ihtiyaç duymaz. Oturum açmış bir kullanıcı için sayfayı render ettiğinizde, backend kullanıcıyı serileştirir, Base64 kodlar ve API gizlinizle HMAC-SHA256 ile imzalar. Widget, istekleriyle birlikte yükü gönderir ve FastComments imzayı doğrular (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). Node'da:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

Zaman damgası epoch milisaniyesidir ve iki günden daha eskiyse reddedilir. Çıkış yapmış bir okuyucu için üç imzalı alanı atlayın ve sadece `loginURL` (veya bir `loginCallback` fonksiyonu) gönderin; widget bir kompozitör yerine giriş istemi gösterir. Node, Java ve PHP'de tam çalışan örnekler <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">kod örnekleri deposunda</a> bulunur.

Kullanıcılar ilk sayfa yüklemesinde oluşturulur. Kimseyi toplu olarak kaydetmezsiniz. OpenWeb içe aktarıcı yorum yazarlarını `user_name` ile eşleştirdiği için, SSO yükünde aynı `username` taşıyan bir kullanıcı, bir dizeyi ilk kez yüklediğinde içe aktarılan yorumlarını talep eder ve o zamandan itibaren düzenleyebilir veya silebilir. Önceden kullanıcı oluşturmak isterseniz bir SSO kullanıcı API'si de vardır.

Yük her gönderildiğinde, FastComments kullanıcı kaydını ondan günceller; böylece tarafınızdaki değişen görünen ad veya avatar bir sonraki sayfa görüntülemesinde yayılır. Bir alanı temizlemek için `null` olarak ayarlayın.

OpenWeb'in Auth0, Gigya veya Piano ile `window.SPOTIM.startSSOForProvider` üzerinden üçüncü taraf SSO'sunu kullandıysanız, FastComments akışı yukarıdakiyle aynıdır: sağlayıcınız kullanıcıyı kimlik doğruladıktan sonra backend yükü oluşturur ve imzalar. FastComments tarafında sağlayıcıya özgü bir entegrasyon yapılandırması yoktur.

İki başka seçenek vardır. Simple SSO, backend'i olmayan platformlar için kullanıcı nesnesini imzasız olarak istemciden geçirir ve e-posta mevcut olduğunda etkinliği doğrulanmış olarak işaretler (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0, Okta, Azure AD veya ADFS üzerinden FastComments kontrol paneline rol eşlemesiyle giriş yapar ve kurumsal planlarda mevcuttur (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderasyon

OpenWeb'in makale bazlı Moderasyon Politikası API'si dört değer içerir: `spot_policy`, `approve_all`, `publish_and_moderate` ve `require_approval`. FastComments, Moderasyon Ayarları'nda aynı davranışları yapılandırır: otomatik onay açık veya kapalı, onay yalnızca bir kullanıcının ilk yorumunda gerekir ve yalnızca doğrulanmış (oturum açmış veya SSO) yorumlar otomatik onaylanır. Kurallar site genelinde veya `*/politics/*` gibi bir URL ID deseni için uygulanır; bu, bölüm bazlı politikayı yeniden üretmenin yoludur. Her yorum, onaylı olsun ya da olmasın, Moderate Comments kontrol paneline düşer, bu yüzden yayınla-sonra-gözden geçir modeli orada varsayılan görünümdür (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

İçe aktarma moderasyon durumunu taşır. OpenWeb `message_status` `approved` ise onaylı ve incelenmiş olarak içe aktarılır; `rejected` ise spam ve incelenmiş; diğerleri onaysız ve incelenmemiş olarak içe aktarılır ve moderasyon kuyruğunuzda görünür. `reports_count` yorumun işaret sayısı olur.

FastComments'ta otomatik moderasyon, Aida gibi tek bir sistem yerine katmanlıdır:

- Sürekli eğitilen bir spam sınıflandırıcı, tüm kiracılar arasında paylaşılan bir model ya da kiracınıza özel, uzun süredir aktif veya sık sabitlenen kullanıcılar için filtrelemeyi gevşeten bir güven faktörü.
- Flex faturalandırmasında isteğe bağlı bir LLM spam kontrolü (GLM-5.3 gibi açık ağırlıklı modeller mevcuttur).
- Yüklenen görseller için düşük, orta veya yüksek hassasiyette görüntü içerik moderasyonu.
- Yaklaşık 450 varsayılan ifadeyi içeren, düzenlenebilir, eşleşmeleri yıldızlarla gizleyen yerelleştirilmiş bir kelime kara listesi. OpenWeb kısıtlı kelimeleriniz burada yer alır.
- N rapor sonrası bir yorumu otomatik gizleyen işaret eşik değerleri.
- Tekrarlanan ve neredeyse aynı mesajların önlenmesi, her zaman açık.
- AI Ajanları: belirli bir araç izin listesine sahip olay odaklı ajanlar (spam işaretle, onayla, kilitle, sabitle, DM ile uyar, yasakla, rozet ver, yanıtla). Her ajan deneme modunda başlar, hassas araçlar insan onayı onaylayabilir ve her eylem gerekçe ve güven puanı ile kaydedilir.

OpenWeb'in Kullanıcı Sessize Alma API'si bir SSO okuyucunun diğerini sessize almasını sağlar. FastComments eşdeğeri, yorum menüsünde Block User'dır ve oturum açmış herhangi bir okuyucu tarafından kullanılabilir. Yasaklamalar moderatör eylemidir: kalıcı veya belirli bir süreli, isteğe bağlı gölge yasak (kullanıcı yorumunu görür ancak başkaları görmez), isteğe bağlı olarak şifreli IP, e-posta bir adres olarak ele alındığında artı takma adlarla. Yasaklı kullanıcı listesi e-posta, ad, moderatör ve yasaklamaya neden olan yorumla aranabilir.

Moderate Comments kontrol paneli, filtreleri (inceleme gerektiren, onay gerektiren, spam, işaretli, yasaklı kullanıcılardan) ve metin aramayı, geri alma ve duraklatma ile toplu eylemleri, çok büyük kuyruklar için "tüm eşleşenleri seç" özelliğini, moderasyon gruplarını (örneğin spor ekibiniz sadece spor dizilerini görür) ve her yorumun neden e-posta gönderildiğini veya gönderilmediğini gösteren günlükleri ve paylaşılabilir filtreli bağlantıları destekler. Moderatörler sadece kontrol paneline sahiptir; ayarları değiştiremez veya veri içe aktaramaz.

### Analitik

FastComments Analitik, siteleriniz ve sayfa bazında şu anda çevrimiçi kullanıcıları, en popüler sayfaları yorum veya canlı okuyucu sayısına göre ve sayfa yüklemeleri, yorumlar, oylar ve oluşturulan hesaplar için günlük serileri gösterir (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Moderatör istatistikleri ayrı. Sayımlar gerçek zamanlıya yakındır, en fazla bir dakikalık gecikme vardır ve her sayfa yüklemesi örneklenmek yerine sayılır.

Reklam doldurma, CPM veya gelirle ilgili hiçbir şey bulamazsınız, çünkü reklam yok. OpenWeb'in kontrol paneli etkileşim-gelir raporlaması için kaynağınız ise, bu raporlama kendi reklam yığınıza geçer.

### Paraya Çevirme

OpenWeb, Conversation içinde ve çevresinde reklamlar yerleştirir ve Standalone Ad birimi sunar; kampanyalar OpenWeb temasınız aracılığıyla ayarlanır (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments widget içinde reklam çalıştırmaz, gelir paylaşımı yapmaz ve üçüncü taraf reklam veya izleme betikleri yüklemez. Widget, yerleştirdiğiniz bir iframe'dir; onun üstündeki ve altındaki reklam alanları sizin olup zaten kullandığınız sistemle çalışır.

Takas açık: OpenWeb'in size ödediği her şeyi kaybedersiniz ve sabit, öngörülebilir bir maliyet ve sayfanıza reklam isteği eklemeyen bir widget kazanırsınız. Flex ve Pro planlarda marka kaldırılır, ve Pro ve Enterprise planlarda beyaz etiketleme mevcuttur.

### Veri Dışa Aktarma ve Gizlilik

FastComments kontrol panelinden tüm yorum veri dışa aktarımları CSV olarak istediğiniz zaman, tarihleri UTC ISO formatında ve aynı veriler API üzerinden de mevcuttur. Webhooks sürekli senkronizasyonu kapsar. İçe aktarma dosyaları, içe aktarma tamamlanır tamamlanır FastComments'tan silinir.

GDPR ve CCPA için OpenWeb, silinen kullanıcıların yorumlarını rastgele bir misafir hesabına ekli tutan bir dışa aktarma ve silme API'si sağlar (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments veri dışa aktarma ve silme isteklerini destekler, bir Veri İşleme Anlaşması sunar ve <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> adresinde yalnızca AB içinde veri çoğaltılan ayrı bir AB dağıtımı çalıştırır. Okuyucularınız Avrupa'da ise orada hesabınızı oluşturun. AB bölgesinde, AI ajan yasaklamaları DSA Madde 17'yi karşılamak için her zaman insan onayı gerektirir.

Küresel dağıtımdaki yorum verileri Singapur düğümü dahil olmak üzere bölgeler arasında çoğaltılır ve widget FastComments'un kendi DNS ve CDN'sinden sunulur. Gömme betiç yaklaşık 35kb sıkıştırılmıştır.

### Mobil SDK'lar

OpenWeb, Conversation, Articles, Authentication, Notifications, Reactions ve In Conversation Polls ile Android, iOS ve React Native SDK'ları sunar. FastComments, yerel <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> ve <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> kütüphaneleriyle dizili yorumlar, WebSocket üzerinden canlı güncellemeler, Güvenli SSO, oy verme, bahsetme, görsel yükleme, moderasyon eylemleri (işaret, sabitle, kilitle, engelle), tema, canlı sohbet modu ve sosyal akış bileşeni sunar. AB bölgesi bir yapılandırma bayrağıdır. Reklam olmadığı için ayrı bir reklam SDK'sı yoktur.

### Gömme ve SPA Entegrasyonu

OpenWeb başlatıcı ve konteyner:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

FastComments eşdeğeri:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Kira kimliğiniz, bir hesabınız olduğunda <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">kimlik bilgileri sayfasında</a> bulunur. `data-article-tags` için eşdeğer yoktur çünkü konu takibi yok; yorum içindeki hashtag'ler farklı bir özelliktir.

Sonsuz kaydırma ve tek sayfa uygulamaları için, OpenWeb'in Virtual Pages yaklaşımı makale başına bir konteynerdir. FastComments'ta her dize için `FastCommentsUI(element, config)` çağırırsınız ve daha sonra URL ID'yi değiştirmek için `instance.update(newConfig)` ya da kaldırmak için `instance.destroy()` kullanırsınız (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). React, Vue, Angular ve SolidJS kütüphaneleri, konfigürasyon özelliği değiştiğinde bunu yönetir. Yaşam döngüsü geri çağrıları (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) dinlediğiniz `spot-im-*` DOM olaylarını değiştirir.

İndeks sayfalarındaki yorum sayıları, tek veya toplu yorum sayısı widget'ı kullanır. SEO için, yorumlar iframe içinde değil arama motoru tarayıcıları için doğrudan sayfaya render edilir, bu yüzden yapılandırılacak bir SEO API çağrısı yoktur.

### Adım Adım Geçiş

**1. Hesabı oluşturun ve temel ayarları yapılandırın.** fastcomments.com veya eu.fastcomments.com'da kaydolun. Moderasyon ayarlarınızı, kelime kara listesini, oy stilini, varsayılan sıralamayı ve widget özelleştirme sayfasında özel CSS'i ayarlayın. Moderatörler ve moderasyon grupları ekleyin. Çok sayıda admin kullanıcınız varsa, içe aktarma onlar için yapılır.

**2. İlk içe aktarmayı çalıştırın.** <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a> sayfasına gidin, OpenWeb (.csv) seçin ve yükleyin. İçe aktarma arka planda çalışır; sayfa satır sayısını ve durumu gösterir ve tamamlandığında bir e-posta alırsınız (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Her yorum OpenWeb mesaj ID'sini dış kimlik olarak tutar, böylece içe aktarmayı yeniden çalıştırmak mevcut yorumları günceller, yeni kopyalar oluşturmaz.

**3. Sayıları doğrulayın.** İşin satır sayısını dışa aktarımınızla karşılaştırın. Moderasyon panosunda birkaç yüksek trafikli URL ID'yi açın ve yazarları, tarihleri, oy toplamlarını ve onay durumlarını kontrol edin. Reddedilen yorumların spam olarak, bekleyenlerin kuyrukta olduğunu doğrulayın.

**4. SSO yükünü oluşturun.** Yukarıdaki imzalama kodunu backend'inizde uygulayın, OpenWeb'de kullandığınız aynı `id` ve `username` değerlerini kullanın. Bir personel hesabıyla bir sahne sayfasında test edin: kullanıcının içe aktarılan yorumları onun olarak gösterilir ve düzenleme ve silme yorum menüsünde görünür.

**5. Staging şablonunda gömme kodunu değiştirin.** Başlatıcı ve konteynerı FastComments snippet'i ekleyerek değiştirin, `data-post-id`'yi `urlId`'ye ve `data-post-url`'yi `url`'ye eşleştirin. `window.SPOTIM.logout()` ve `spot-im-*` dinleyicilerini kaldırın veya geri çağrılara eşleyin. CSS'inizi bir özelleştirme kuralı olarak uygulayın, böylece her FastComments sürümünde test edilir.

**6. Paralel çalıştırın.** FastComments'u bir bölümde veya makalelerin bir yüzdesinde kullanın, OpenWeb geri kalanında kalır. OpenWeb tarafında hiçbir şey değiştirmeniz gerekmez. Moderasyon kuyruğunu ve analitik sayfasını izleyin. Bu pencere sırasında FastComments sayfalarında yorum yapan okuyucular OpenWeb dışa aktarımınızda yer almaz, bu yüzden son içe aktarmayı başlamadan önce planlayın, sonrasında değil.

**7. CSP ve DNS.** İçerik Güvenliği Politikası (CSP) kullanıyorsanız, `cdn.fastcomments.com` ve `fastcomments.com` (veya `eu.fastcomments.com`) adreslerini `script-src`, `frame-src` ve `connect-src` için izin verin, ve `spot.im` ve `openweb.com` girdilerini başlatıcı kaldırıldığında kaldırın. DNS'inizde hiçbir şey değişmez. URL ID'ler eşleştiği için yönlendirme gerekmez.

**8. Son içe aktarma ve yayına geçiş.** Paralel çalışma penceresini kapsayan bir OpenWeb dışa aktarımını daha bir kez alın, yükleyin (yeniden içe aktarma güvenlidir), ardından şablon değişikliğini tüm sayfalara dağıtın ve başlatıcıyı, Reactions, Topic Tracker, Spotlight, bell ve reklam konteynerlarını kaldırın.

**9. Yayına geçiş kontrol listesi.**

- Canlı yorumlama, iki tarayıcıda bir üretim makalesinde görünür.
- SSO giriş, çıkış ve gerçek bir abone hesabı altında bir yorum.
- Moderatörler özeti alır ve onaylayabilir.
- Yanıt ve bahsetme e-postaları gelir ve doğru sayfaya bağlanır.
- Yasak listesi ve kelime kara listesi doldurulmuş.
- Page Reacts ve yorum sayısı, Reactions ve sayaçın olduğu yerde render edilir.
- CSP raporları temiz.
- Dışa aktarımınız ve kontrol paneli arasında son bir yorum sayısı karşılaştırması.

### Kaybedecekleriniz ve Farklı Olanlar

Boşluklar hakkında doğrudan:

- **Canlı Blog.** 1:1 eşdeğer yok. CMS'inizde veya bir canlı blog aracında tutun ve FastComments'ı altına yerleştirin.
- **Konu İzleyici.** Makaleler arası konu veya yazar takibi yok. Sadece sayfa abonelik abonelikler.
- **Community Spotlight.** CTA kart ürünü yok. `headerHTML` size kompozitörün üstünde bir mesaj verir, e-posta yakalama formu değil.
- **Reklam geliri.** Yok. Widget tasarım gereği reklamsızdır.
- **Bildirim webhook'u.** Webhook'lar yorum olayları üzerindedir, kullanıcı başına bildirim olayları değil.
- **Reaksiyon geçmişi.** Makale düzeyinde reaksiyon sayıları yorum dışa aktarımında yoktur ve sıfırdan başlar. Bazen sitenizden kazıyabiliriz.
- **Anket geçmişi.** Anket tanımları ve oylar yorum dışa aktarımında yoktur; anketin yorum metni içe aktarılır, anket kendisi değil. Bazen sitenizden kazıyabiliriz.
- **Giriş modeli.** SSO olmayan okuyucular varsayılan olarak bir şifre veya sosyal giriş düğmesi yerine sihirli bağlantı ile giriş yapar.
- **İnsan moderasyon ekibi.** OpenWeb, Aida ile bir moderasyon ekibi sunar. FastComments araçlar, sınıflandırıcılar ve ajanlar sağlar; insanlar sizin tarafınızdadır.

Aynı ruhla edindiğiniz şey: tek bir küçük betik ekleyen ve reklam isteği olmayan bir widget, büyük bir site için tek bir kişinin toplu eylemler ve ajanlarla yönetebileceği moderasyon, protokol yerine imzalama işlevi olan SSO ve mahkeme denetimi altında olmayan bir satıcı.

### Zaman Çizelgesi ve Ücretsiz İçeri Aktarma Teklifi

Bir SSO entegrasyonu ve birkaç yüz bin yorum olan bir yayıncı için bir ila iki hafta planlayın: dışa aktarım ve ilk içe aktarma için bir iki gün, SSO ve şablonlar için birkaç gün, paralel çalışma penceresi, ardından son içe aktarma ve geçiş. Platform zaten bu ölçeği taşıyor: United Cloud, FastComments'ta ondan fazla portal ve milyonlarca yorum çalıştırıyor, ve itsfoss.com aynı self-service içe aktarıcıyla başka bir sağlayıcıdan 88.000 yorumluk bir geçmişi taşıdı.

FastComments, OpenWeb CSV dışa aktarımınızı ücretsiz olarak içe aktarır, geçiş sırasında OpenWeb ve FastComments'ı paralel çalıştırmanıza yardımcı olur ve geçişin kendisiyle, dizileme ve kullanıcı eşleştirme sorularıyla ilgili yardımcı olur. Enterprise planları %99.99 SLA ve iş saatlerinde bir saat içinde destek yanıtları içerir. Flex kullanım bazlı fiyatlandırma, sözleşmesiz başlamak isteyen siteler için mevcuttur.

<a href="https://fastcomments.com/contact-us">Bize Yazın</a> dışa aktarım boyutunuz ve SSO kurulumunuz ile ve size bir planla geri döneceğiz.

### Sonuç

Dışa aktarımınızı bugün alın. Unutmayın: aynı gönderi ID'leri URL ID'lerine dönüşür, moderasyon durumu taşınır ve gömme doğrudan bir değişimdir. FastComments'ın farklı olduğu yerler yukarıda listelenmiştir, böylece önünüzdeki gerçeklerle karar verebilirsiniz. :)

Şerefe!{{/isPost}}