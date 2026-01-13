---
[category:Tutorials]
###### [postdate]
# [postlink]FastComments Kurulumunuzu Hata Ayıklama İşlemini Kolaylaştırın[/postlink]

{{#unless isPost}}
Yorumlar görünmüyor mu? Ayarlar uygulanmıyor gibi mi? Bunu anlamak şimdi çok daha kolaylaştı.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçeriyor

#### Yeni Olanlar

<a href="https://fastcomments.com">FastComments</a>'da, Google Chrome için bir tarayıcı eklentisi yayınladık. Bu eklenti, yorum widget'ının hangi yapılandırmayı aldığını ve neden görünmeyebileceğini anlamanıza yardımcı olacaktır.

Eklentiyi burada bulabilirsiniz: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Nasıl Kullanılır

Eğer yorum widget'ının yüklenmediğini veya tanımladığınız bir yapılandırmanın görünmediğini düşünüyorsanız, <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">eklentiyi</a> yüklemeyi deneyin ve sorunlu sayfada açın. Araç çubuğunuzda simgeyi görmek için, sağ üstteki bulmaca parçasına tıklayıp sabitlemeniz gerekebilir:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Eklentiyi Sabitleme" title="Eklentiyi Sabitleme" class="lozad" />
</div>

Eklenti, iki hata sınıflandırmasını ayıklamaya yardımcı olabilir. İlki, widget'ın sayfada hiç yer almadığı veya scriptte büyük bir yazım hatası olduğu durumdur.

İkincisi ise bazı yapılandırmaların etkili görünmediği durumlardır.

Her iki durumu da hatırlamak için, simgeye tıklamakla başlayın.

Eğer araç, sayfada yorum widget'ını bulamazsa, büyük bir kırmızı hata alırsınız:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Embed.js bulunamadı örneği" title="Embed.js bulunamadı örneği" class="lozad" />
</div>

Bir veya daha fazla widget örneği bulunduysa, bunların yapılandırmaları ayrı ayrı görüntülenecektir:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Çoklu Yapılandırma Örneği" title="Çoklu Yapılandırma Örneği" class="lozad" />
</div>

Ayrıca, FastComments Hata Ayıklayıcı, widget'ın yorum bulunmadığında salt okunur modda görünmemesi gibi yaygın tuzaklar için de uyarılar gösterir.

#### "Son" Örnek Ayarları?

Hata ayıklayıcı, "Widget'a Geçirilen" ve "Son" olarak etiketlenmiş iki yapılandırma kümesi gösteriyorsa, bunu görebilirsiniz.

"Widget'a Geçirilen" yapılandırması, tahmin edebileceğiniz gibi, widget'a geçirdiğiniz yapılandırmadır. Bazı değerler embed.js tarafından URL veya Sayfa Başlığı gibi dolaylı olarak geçilir ve bunlar dahil edilir.

"Son" yapılandırması, widget'ın kendisini oluştururken kullandığı her şeydir. Bu, kendiliğinden doldurulan değerleri (örneğin örnek kimliği) veya <b>widget özelleştirme yönetim sayfasından gelen değerleri</b> içerebilir.

#### Nasıl Çalışıyor

Yorum widget'ı, yapılandırmasını hata ayıklayıcının bulabileceği bir yerde saklar, ardından hata ayıklayıcı, bulunduğunuz sayfadaki widget örneklerini tarar ve bunları belleğe yükler.

#### Bu Eklenti Hangi Bilgileri Toplar?

FastComments Hata Ayıklama Aracı, herhangi bir FastComments sunucusuna telefonla veya iletişim kurmaz. Aslında, widget, açılmadıkça bulunduğunuz sayfanın içeriğini bile kontrol etmez.

#### Sonuç Olarak

Daha fazla araç sunmanın, FastComments kurulumunu sahip olduğumuz her tür müşteri için daha kolay hale getireceğini umuyoruz. Aşağıdaki yorum bölümünde bunun sizin için nasıl çalıştığını bize bildirin.

Bazı durumlarda hala bir yardım eline ihtiyaç duyabileceğinizi biliyoruz - bu nedenle hala <a href="https://fastcomments.com/auth/my-account/help" target="_blank">müşteri destek sayfası</a> var.

Sağlıkla!

{{/isPost}}

---