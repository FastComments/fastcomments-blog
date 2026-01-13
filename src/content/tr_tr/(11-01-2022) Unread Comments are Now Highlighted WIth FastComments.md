---
[category:UI & Customization]
###### [postdate]
# [postlink]Görünmeyen Yorumlar Artık FastComments ile Vurgulanıyor[/postlink]

{{#unless isPost}}
Bir sayfaya geri döndüğünüzde, yorum bölümünü bıraktığınız yerden okumaya devam etmek ister misiniz? FastComments artık kaçırdığınız yorumları stilize ediyor, bu da işi kolaylaştırıyor.
{{/unless}}

{{#isPost}}

### Yenilikler

Bir sayfaya geri döndüğünüzde, yorum bölümünü bıraktığınız yerden okumaya devam etmek ister misiniz? FastComments artık kaçırdığınız yorumları stilize ediyor, bu da işi kolaylaştırıyor.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Yeni yorumda vurgulanan avatar." />
</div>

### Nasıl Elde Edilir

Uygulama içi bildirim (cevaplar, aynı başlıktaki cevaplar veya abone olduğunuz bir sayfadaki yorumlar) tetikleyen her yorum,
kullanıcının avatarı hafifçe parlayarak otomatik olarak vurgulanacaktır. Renk, `is-unread` sınıfı ile CSS aracılığıyla özelleştirilebilir. Varsayılan stil, karanlık modu da desteklemektedir.

Ayrıca, son 24 saat içinde gönderilen yorum öğelerine yeni bir `24hr` CSS sınıfı eklenmiştir. Bunu yorumları stilize etmek için de kullanabilirsiniz.

### Neden Avatarı Vurgulamak?

Tüm yorumu vurgulamanın daha iyi olabileceğini kabul ediyoruz. Ancak, bu, platformu ürünlerine uyacak şekilde özelleştiren müşterilerimizle okunabilirlik ve stil endişeleri doğuruyor. Avatarı hafifçe vurgulamanın çoğu durumda oldukça rahatsız edici bir değişiklik olmadığını gördük. İstenirse, parıltı kaldırılabilir ve widget özelleştirme kuralları kullanılarak değiştirilebilir.

### Sonuç Olarak

Bu özelliğin bazıları tarafından uzun zamandır beklenildiğini biliyoruz. Rahatsız edici olmayan ama yine de faydalı bir stil seçmek için zaman harcadık ve geri bildirimlere dayanarak daha fazla ayarlama yapabiliriz.

Şerefe!

{{/isPost}}

---