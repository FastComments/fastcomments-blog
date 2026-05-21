---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Tüm FastComments Widget'ları Artık Yayında[/postlink]

{{#unless isPost}}
Her gömülü FastComments widget'ı (yorum sayıları, son yorumlar, en popüler sayfalar, son tartışmalar, inceleme özeti, kayan beğeniler) artık gerçek zamanlı olarak güncelleniyor.
{{/unless}}

{{#isPost}}

### Yenilikler

Ana yorum widget'ı ilk günden beri yayındaydı. Ancak daha küçük gömülü widget'lar değil. Yorum sayıları, "son yorumlar" veya "en popüler sayfalar" widget'ları, vb. bir dakikaya kadar eski bir sayı gösteriyordu.

Artık FastComments'ın sunduğu her widget, canlı güncellemelere abone oluyor ve hemen yenileniyor :) Bu, inceleme özetlerini de içeriyor!

### Hangi Widget'lar

Hepsi. Somut olarak:

- `FastCommentsCommentCount` - sayfa başına yorum sayısı
- `FastCommentsCommentCountBulk` - çok sayıda sayıyı güncelleyebilen toplu versiyon
- `FastCommentsRecentComments` ve `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` ve `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (kayan yorum sayısı rozet)
- `FastCommentsEmbedPageLikesFloating` (kayan beğeniler + yorum sayısı)

### Yapmanız Gerekenler

Hiçbir şey. Eğer bunlardan herhangi birini gömülü olarak zaten kullanıyorsanız, sayfayı bir kez yenileyin. Bir sonraki kez bir yorum gönderildiğinde, düzenlendiğinde, silindiğinde veya biri bir sayfaya tepki verdiğinde, widget güncellenecektir.

Yorum sayısı widget'larındaki eski `isLive: true` yapılandırma bayrağı artık gereksizdir - widget'lar her zaman canlıdır.

Widget JS'yi CDN'imizden yüklerseniz, yeni sürüme sahip olursunuz, bunun yanı sıra wrapper kütüphanelerimizden birini (React, Vue, vb.) kullanıyorsanız da.

### Beğeniler de Canlı

Kayan beğeni widget'ı da artık beğeni ve tepki olaylarına yanıt veriyor. Bir sayfadaki kalbe tıklayın ve diğer açık sekmeler sayının değiştiğini görsün.

### Nasıl Çalışır

Her widget tek bir WebSocket bağlantısı açar. Tek bir belirli sayfa için veri gösteren widget'lar (`comment-count` (toplu dahil), `reviews-summary`, `embed-page-likes-floating`) o sayfanın olay akışına abone olurlar. Bir kiracı genelinde veri gösteren widget'lar (`recent-comments`, `top-pages`, `recent-discussions`) o kiracıdaki bir değişiklik olduğunda sinyal gönderen ince bir kiracı nabzı akışına abone olurlar.

Sonuç olarak, boşta kalan bir widget etkin bir şekilde hiçbir maliyeti yoktur ve aktif bir widget temel değişiklikten bir veya iki saniye içinde güncel bir sayı gösterir.

### Önbellek Tutarlılığı

Bu widget'ların arkasındaki sunucu tarafı önbellekleri önceden 60 saniyelik bir TTL süresine sahipti. Artık ilgili bir yorum veya tepki olayı geldiğinde geçersiz kılınıyor, bu yüzden bir değişiklik sonrası yapılan ilk istek güncel veriyi döner, önbellek sürümünü değil.

### Sonuç Olarak

Müşterilerimizin her zamanki fiyatlarla bu değişiklikten yararlanabilmesi için zaman ayırıp test ve optimize edebildiğimiz için mutluyuz. Canlı inceleme özetlerinin bizim için özellikle havalı bir farklılaştırıcı olduğunu düşünüyoruz.

Aşağıda herhangi bir sorun görüyorsanız lütfen bize bildirin.

Şerefe!

{{/isPost}}