---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments AI Ajanslarını Lansmanını Yaptı[/postlink]

{{#unless isPost}}
Artık her yeni yorumu okuyabilen, kendi sesinizle yanıt verebilen, zor kararları yükseltebilen ve en iyi katkı yapanlara rozet verebilen AI Ajansları oluşturabilirsiniz. Onlar sizin zamanlamanıza göre çalışır, bütçeniz içinde kalır ve sadece onlara izin verdiğiniz şeyleri yaparlar.
{{/unless}}

{{#isPost}}

### Topluluğa Not

Bunu ilk başta belirtmek istiyorum - botların gerçek kullanıcılar gibi davranmasına izin veren bir şey inşa etmiyoruz. Bu, internet, çevrimiçi topluluklar veya ürün yönümüz için iyi olduğunu düşündüğüm bir şey değil. AI Ajanslarının amacı, özel moderatörleri karşılayamayacak moderasyon ekiplerini veya topluluk sahiplerini desteklemektir.

AI tarafından bırakılan tüm yorumların "Bot" etiketi olmalıdır. Ürün böyle gönderiliyor ve herhangi bir site, bot yorumlarından Bot etiketini kaldırırsa, bu özellik devre dışı olacaktır. Ayrıca, yalnızca verilerimizi eğitmeyen LLM sağlayıcılarını kullanıyoruz. Şu anda yalnızca açık kaynak modeller için çıkarım sağlayan DeepInfra'yı kullanıyoruz.

Şimdi bunu geçelim :)

### Yenilikler

FastComments artık moderasyon görevlerini yerine getirebilen, yorumları sabitleyebilen, yorum dizilerini özetleyebilen otomatik ajanslar sunuyor.

Onları [Özelleştir, ardından AI Ajansları](https://fastcomments.com/auth/my-account/ai-agents) altında bulabilirsiniz.

### Tetikleyiciler ve Araçlar

Her ajans, tetikleyici ve izin verilen eylemler listesi ile yapılandırılmıştır. Tetikleyiciler yeni yorumlar, düzenlemeler, silmeler, oy eşikleri, bayrak eşikleri, moderatör eylemleri, ilk kez yorum yapanlar ve daha fazlasını içerir. Bir ajansın kullanıcıları yasaklamasını istemiyorsanız, yasaklama aracını hariç tutabilirsiniz.

Örneğin, yalnızca belirli bir sayıda yorumdan sonra yanıt veren ve o yorumu sabitleyen bir "dizi özeti" istiyorsanız, ajansın izinlerini yalnızca bu eylemlere erişim olacak şekilde ayarlayabilirsiniz.

Ayrıca, bir ajansı belirli URL desenlerine (örneğin `/news/*` veya `/forums/*`) ve belirli yerelleştirilere sınırlayabilirsiniz, böylece Fransızca bir topluluk ajansı, İngilizce sayfalarınızda yanıt vermeye başlamaz.

### Kuru Çalışma, Onaylar ve Bütçeler

Her ajans varsayılan olarak kuru çalışma modunda başlar. Kuru çalışmada, ajans bağlamı okur ve ne yapacağını yazar, ancak gerçekte hiçbir şey yapmaz. Gerçek tetikleyicileri izleyebilir, önerilen eylemlere ve ajansın nedenine bakabilir ve etkinleştirmeden önce ona güvenip güvenmeyeceğinize karar verebilirsiniz.

Hassas araçlar için insan onayı gerektirebilirsiniz. Ajans eylemi kuyruklar, bir yönetici önerilen eylemi ve ajansın gerekçesini inceleyerek onaylar veya reddeder. Yasaklamalar, DSA Madde 17 gereği AB'de her zaman onay gerektirecektir, ancak herhangi bir araç için, her yerde onay gerektirebilirsiniz.

Her ajansın günlük ve aylık bütçe sınırı vardır. Tavan sınırına ulaşıldığında, dönem geçene kadar ajans çalışmayı durdurur. Sizi varsayılan eşikler olan %80 ve %100'de (aynı zamanda %50'lik bir uyarı seçeneğine de sahip olabilirsiniz) e-posta ile bilgilendiriyoruz, böylece sürpriz faturalar olmadığına emin olabilirsiniz.

### Bellek

Ajanslar, ajansın kendisi için okuduğu ve yazdığı bir belleğe sahiptir. Bir kullanıcı veya bir model hakkında "üç kez konudan sapma nedeniyle uyarıldı" veya "X alanına bağlantılar paylaşan spam çemberi" gibi kısa notlar kaydedebilirler ve bu notları bir sonraki tetikleyicide geri okuyabilirler. Bellek, kiracınızdaki ajanslar arasında paylaşılır, bu nedenle bir karşılama ajansının notları daha sonra bir moderasyon ajansının kararlarını etkileyebilir. Bir kullanıcıya ait bellek, hesaplarını silmeleri durumunda temizlenir.

### Tekrar Oynatma ve Test Çalıştırma

Bir ajansı canlı trafiğe bırakmadan önce, bunu geçmiş yorumlarınıza karşı çalıştırabilirsiniz. Tekrar oynatma aracı, gerçek geçmiş yorumları kuru çalışmada gözden geçirir, ajansın ne yapacağını gösterir ve önerilen eylemleri gerçek olanlarla karşılaştırır. Bu, canlı olayları beklemeden bir sistem istemini ayarlamanın en hızlı yoludur.

### Modeller, Gizlilik ve Maliyet

Ajanslar, müşteri verileri üzerinde eğitim yapmayan altyapı sağlayıcıları tarafından barındırılan açık ağırlıklı modeller üzerinde çalışır. Bugün, daha hızlı bir model (gpt-oss-120B-turbo) ve daha akıllı, daha yavaş bir model (GLM 5.1) arasında seçim yapabilirsiniz ve manzara geliştikçe seçenekler eklemeye devam edeceğiz. Maliyet, her token başına ölçülür ve kullanım sayfanızda dolar cinsinden dönüştürülür, günlük ve aylık eğilimlerle birlikte.

Bu değişimin bir parçası olarak, token maliyetlerimizi 1M Token için $80'den 1M birleşik girdi/çıktı token için $20'ye düşürüyoruz. Müşterilerimizin çoğu, spam tespiti için token'lar üzerinde çok az harcama yapmaktadır, çünkü orijinal LLM tabanlı spam tespit sistemi yalnızca spam, naif-bayes sınıflandırıcısını geçebilirse LLM'ye sevk ediliyordu, bu nedenle başlangıçta yüksek maliyetliydi. Yeni ajans işlevselliğinin kullanımını teşvik etmek için maliyeti düşürüyoruz.

Bellek maliyetleri geri düştüğünde ve GLM 5.1 gibi modeller kendi barındırılan donanımda çalıştırmak için daha makul hale geldiğinde, dış sağlayıcı kullanmaktan vazgeçecek ve donanımı kendimiz çalıştıracağız.

### Sonuç Olarak

Bu sistemi, ajansın kontrolü ele almasını hissettirmeden nasıl inşa edeceğimiz konusunda uzun zaman düşündük. Kuru çalışma, onaylar, kapsamlı araçlar, bütçe sınırları ve geçmiş ile tekrar oynatma, kontrolünüzü sürdürmenize yardımcı olmak için var. AI Ajanslarının moderatörlerinizi, insan gerektiren konuşmalara odaklanmaları için serbest bırakmasını umuyoruz.

Bize sürekli geri bildirim veren müşterilerimize teşekkür ediyoruz, böylece bu tür fikirleri düşünebilir ve bunları başarıyla başlatmak için zaman verebiliriz. Her zamanki gibi, herhangi bir sorunla karşılaşırsanız aşağıda bize bildirin.

Şerefe!

{{/isPost}}