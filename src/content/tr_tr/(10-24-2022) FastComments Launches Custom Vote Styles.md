---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Özel Oylama Stilleri Başlatıyor[/postlink]

{{#unless isPost}}
Varsayılan yukarı/aşağı oy verme stilinden yalnızca sade bir kalp simgesine geçmek hiçbir zaman aklınıza gelmiş miydi? Artık geçebilirsiniz.
{{/unless}}

{{#isPost}}

### Yenilikler

Daha önce oylama çubuğunu özelleştirmek için özel kod ve CSS yazmak gerekiyordu. Bu, anonim oylamayı etkinleştirmek ama aşağı oyları devre dışı bırakmak gibi bir şey yapmak istediğinizde, yalnızca özel kod gerektirmekle kalmıyor, aynı zamanda oy taleplerinin sunucu tarafında doğrulanamayacağı anlamına geliyordu. Bu, bazı topluluklarda, kullanıcıların anonim olarak sunucuya doğrudan erişerek hala aşağı oy verebileceği anlamına geliyordu.

Artık platforma `voteStyle` kavramını tanıttık ve ilk yeni oy stili, birçok kişinin talep ettiği kalp simgesi oldu.

Widget özelleştirme UI'si aracılığıyla tanımlandığında, bu platforma doğrulama ekler; bu, aşağı oy verme işlemini tamamen engelleyerek, hackerların UI'yi atlayıp bir kullanıcıyı yok olma noktasına aşağı oya yönlendirmesini engeller. Bu, anonim oylama devreye alındığında olabilirdi.

### Kullanım

[Widget Özelleştirme UI'sine](https://fastcomments.com/auth/my-account/customize-widget) gidin ve `Oylama Stili` altında `Kalp` seçeneğini seçin.

### Belgeler

Bu özellik için resmi belgeler [docs.fastcomments.com adresinde mevcuttur](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Kimler Alır

Tüm mevcut ve yeni FastComments müşterileri, tüm katmanlarda artık özel oylama stillerine erişime sahiptir. Bu özellik yalnızca yorum widget'ının v2 sürümü ve sonrası tarafından desteklenmektedir.

### Optimizasyonlar

Farklı oylama stillerinin kodları, etkinleştirilmediği sürece widget'ın istemci indirme dosyasına dahil edilmez, böylece ürünün aşırı büyümesini önler.

### Geleceğe Bakış

Artık farklı türde oylama ve tepkiler eklemek için kapasitemiz var; bunu gelecekte yapabiliriz.

### Sonuç

FastComments'ın geri kalanı gibi, bu özelliğin hızlı ve kullanımı kolay olmasını umuyoruz.

Selamlar!

{{/isPost}}

---