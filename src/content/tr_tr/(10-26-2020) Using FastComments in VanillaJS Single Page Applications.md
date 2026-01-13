---
[category:API & Development]
###### [postdate]
# [postlink]VanillaJS Tek Sayfa Uygulamalarında FastComments Kullanma[/postlink]

{{#unless isPost}}
React ve VueJS bileşenleri için özel bileşenlerimiz olmasına rağmen, vanilla widget tek sayfa uygulamalarında da kullanılabilir.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Jargon İçermektedir

#### Hedef Kitle

Bu makale geliştiricilere yöneliktir.

#### Giriş

FastComments VanillaJS widget’ının en yaygın örnek kullanımı, mevcut sayfa URL'si için yorum dizisini yükleyen çok basit bir kod parçasıdır. Bunun nedeni, bu kullanım durumunun müşterilerimizin büyük çoğunluğu için geçerli olmasıdır, ancak son zamanlarda FastComments kullanan SPA'lar geliştiren geliştiricilerin artışını gördük.

Öncelikle, FastComments'ın özel <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> ve <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> bileşenleri olduğunu unutmayın, bu yüzden bu kütüphaneleri kullanıyorsanız, FastComments etrafında kendi sarmanızı oluşturmanıza gerek kalmaması için bunlara göz atın.

Ancak eğer uygulamanızı VanillaJS kullanarak geliştiriyorsanız, yorum widget’ını dinamik olarak başlatabilir ve güncelleyebilirsiniz.

#### Öncelikle URL ve URL ID

FastComments, yorum dizisinin bağlı olduğu sayfa veya makale için iki tanımlayıcıya sahiptir. Konfigürasyon nesnesinde, bunlar "url" ve "urlId" özellikleridir.

URL, yorum widget'ının URL'sidir. İdeal olarak, bu URL'ye uygulamanızın dışından erişebilmelisiniz. Bu, bildirim e-postalarında ve yönetici araçlarında bir bağlantı olarak gösterilecektir.

URL ID, bir URL veya bir ID olan bir dizedir - mevcut sayfayı temsil ettiği sürece herhangi bir değer olabilir. Bir gönderi, makale veya sayfa ID'sine sahipseniz, bu değeri sayfa URL'si yerine kullanabilirsiniz. URL ID'sinin ayrı olmasının nedeni, URL'de sayfaya özgü olmayan ekstra bilgileri depolamak isteyebileceğinizdir.

Widget'ın desteklediği tam yapılandırmayı TypeScript'te <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">GitHub'da</a> belgelerle sağlamış olduğumuzu unutmayın.

#### Özellikler ve Gerçek Bir Demo

Widget başlatıldığında, normalde çağırdığınız FastCommentsUI fonksiyonunun sonucunu yakalayın:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Ardından, yapılandırmayı güncellemek için örnek nesnesinde bir "update" metodunu çağırabilirsiniz. Bu, bileşeni yenileyecektir:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Çalışan bir örneği <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">bu fiddle ile</a> görebilirsiniz.

Bu örnekte document.getElementById kullandığımızı unutmayın, ancak hedef elementi almak için istediğiniz herhangi bir mekanizmayı kullanabilirsiniz.

#### Dikkat Edilmesi Gerekenler

Sadece "urlId" güncellemek işe yarasa da, hem "urlId" hem de "url" değerlerini güncellemelisiniz, bu değerler aynı olsa bile, böylece bildirim e-postalarındaki ve moderasyon araçlarındaki bağlantılar çalışır. Sadece "url" değerini güncellemek işe yaramaz - yorumlar "urlId" ile bağlıdır.

#### Sonuç

Bu kılavuzu yararlı bulduğunuzu umuyoruz. Herhangi bir sorunuz varsa aşağıda yorum yapmaktan çekinmeyin.

Sağlıklı günler!

{{/isPost}}

---