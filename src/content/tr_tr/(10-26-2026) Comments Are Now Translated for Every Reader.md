[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Yorumlar Artık Her Okuyucu İçin Çevrildi[/postlink]

{{#unless isPost}}
FastComments artık yorumları kendisi çevirebiliyor, sadece etrafındaki widget'ı değil. Site bazında ya da sayfa bazında, otomatik olarak ya da bir Çevir düğmesiyle açın ve her okuyucu, orijinali bir tık uzakta olacak şekilde, konuşmayı kendi dilinde görür.
{{/unless}}

{{#isPost}}

### Neler Yeni

FastComments bir süredir yirmi sekiz dile çevrilmiş durumda, bu yüzden düğmeler, etiketler ve e-postalar zaten okuyucunun dilinde gösteriliyor. Yorumlar ise öyle değildi. İngilizce bir sayfada bir İspanyol yorumu İspanyolca kalıyordu ve bunu okumayan herkes sayfayı atlayıp geçiyordu.

Bu sürüm **Yorum Çevirisi** ekliyor. Açık olduğunda, okuyucunun dilinden farklı bir dilde yazılmış bir yorum çevrilmiş olarak gösterilir, altında nereden geldiğini belirten küçük bir satır ve **Orijinali göster** bağlantısı bulunur.

<img src="images/fc-comment-translation-auto.png" alt="İngilizce bir okuyucunun, bir İspanyol yorumunun çevrildiğini, 'İspanyolcadan Çevrildi' satırı ve altında bir Orijinali göster bağlantısı ile görmesi" title="Otomatik Yorum Çevirisi" class="lozad" />

### İki Mod

**Otomatik** önceden çevirir. Başka bir dildeki her yorum çevrilmiş olarak gelir ve okuyucu isterse orijinale geçebilir. Bu, gerçekten iki ya da daha fazla dilde yazan ve herkesin aynı konuşmayı okumasını isteyen bir topluluk için moddur.

**Manuel** her yoruma bir **Çevir** bağlantısı ekler ve tıklanana kadar hiçbir şey yapmaz. Okuyucu hangi yorumların çevrilmeye değer olduğuna karar verir ve kimsenin sormadığı yorumlar için hiçbir şey harcanmaz. Okuyucunun dilinde zaten olan bir yorum, onu çevirmeye çalışmak yerine bu durumu belirtir.

<img src="images/fc-comment-translation-manual.png" alt="Manuel modda, bir İspanyol yorumu tıklandığında çevrilir ve bir İngilizce yorum zaten okuyucunun dilinde olduğunu bildirir" title="Manuel Yorum Çevirisi" class="lozad" />

Her iki modda da okuyucunun dili, widget'ın zaten gösterdiği şeydir: **Locale / Language** kuralında ayarladığınız dil ya da bir ayar yapmadıysanız ziyaretçinin tarayıcı dili. Ziyaretçinin kurması, kaydolması ya da yapılandırması gereken bir şey yoktur. Widget sayfanıza, Google Sites gibi bir site oluşturucu içinde ya da bağımsız bir FastComments yorum sayfasına gömülü olsun aynı şekilde çalışır.

### Nasıl Açılır

<a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Özelleştirme</a>'yi açın, **Yorum Çevirisi**'ni **Locale / Language** altında bulun ve Otomatik ya da Manuel'i seçin. Varsayılan olarak kapalıdır.

Bir özelleştirme kuralı üzerinde bulunduğu için istediğiniz gibi kapsamlandırabilirsiniz: tüm siteniz, tek bir domain ya da izleyicinin karışık olduğunu bildiğiniz tek bir sayfa. Bu bir sunucu tarafı ayarıdır, sadece widget'ın JavaScript yapılandırmasıyla açılmaz.

### Maliyet

Çeviriler bir dil modeli tarafından üretilir ve LLM tokenları olarak faturalandırılır, aynı ölçü [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html) ile aynı. Her plan bunu açabilir.

Her yorum, dil başına bir kez çevrilir ve çeviri yorumla birlikte saklanır. Binlerce İspanyol okuyucu aynı İngilizce konuyu açarsa, çeviri işi bir kez gerçekleşir. Tipik bir yorum birkaç yüz tokendır, Flex tarifelerinde yaklaşık yarım centtir. Yazar ya da bir moderatör yorumu düzenlerse, saklanan çeviri atılır ve bir sonraki görüntülemede yorum yeniden çevrilir, böylece kimse artık var olmayan bir metnin çevirisini okumaz.

Manuel mod, birisi tıklayana kadar hiçbir maliyet oluşturmaz.

### Detaylar

Çevrilen metin, birisi tarafından yazılmış bir yorum gibi ele alınır. Orijinali gibi aynı temizlik ve bağlantı kurallarına tabi tutulur, bu yüzden bir çeviri orijinalin yapamayacağı bir şeyi taşıyamaz. Bahsedenler ve hashtag'ler biçimlendirmelerini korur.

Çok uzun yorumlar ya da dili güvenle tespit edilemeyen yorumlar, tahmin edilmek yerine olduğu gibi bırakılır. Çevrilen bir yorumun altındaki dil satırı da okuyucunun dilindedir, bu yüzden bir İngilizce yorumun İspanyolca okuyucusu "Traducido del inglés" ve "Mostrar original" görür.

### Ek Yük

Bu yeni özelliğin kodu, etkinleştirilmediği sürece yüklenmez, bu yüzden diğer kullanıcılarımız için yorum widget'ını yavaşlatmaz.

### Dokümantasyon

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Yorum Çevirisi rehberi</a> iki modu, kural ayarını ve faturalandırmayı kapsar.  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Yerel rehberi</a> widget'ın dilinin ilk olarak nasıl seçildiğini açıklar.

### Sonuç

Bu özellik, sakinlerinin İngilizce ve İspanyolca yorum yaptığı bir mahalle derneğinden geldi ve her iki grubun da aynı konuyu, kimseye bir tarayıcı uzantısı kurdurmadan ya da bir şey için kaydolmadan okumasını istedi.

Birden fazla dilde yazan bir topluluğu yönetiyorsanız, özelliği açın ve çevirilerin nasıl okunduğunu aşağıda bize bildirin.

Sağlıcakla!

{{/isPost}}