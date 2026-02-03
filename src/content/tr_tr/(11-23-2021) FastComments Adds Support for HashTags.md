---
[category:Features]

###### [postdate]
# [postlink]FastComments #HashTag Desteği Ekledi[/postlink]

{{#unless isPost}}
Bir konuya veya bilgi parçasına #etiket koymayı hiç istediniz mi? Artık yapabilirsiniz.
{{/unless}}

{{#isPost}}

### Yenilikler

Yorum yaparken, kullanıcılar artık bir veya daha fazla `#hashtag` girebilir. Yorumda bir `#hashtag`e tıkladığınızda, o hashtag ile diğer yorumların görüntülendiği bir alana yönlendirileceksiniz.

Ayrıca, `#hashtags` dış içerik parçalarına bağlantı vermek için de kullanılabilir. Bu sürümle birlikte, etiketlerinizi önceden doldurmanıza olanak tanıyan [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure) hizmetini de başlattık.

Hashtag'leri önceden doldururken, her etiket için bir URL tanımlayabiliriz. Bu, `#hashtags`'ın örneğin bir tiket numarasına veya bir CRM’deki bir belgeden bağlantı vermek için de kullanılabileceği anlamına gelir.

`#` sembolü de talep üzerine özelleştirilebilir.

### Nasıl Kullanılır

`#` yazdıktan sonra bir hashtag'in başlangıcını yazdığınızda, bir arama sonuçları listesi görünecektir.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Kullanımı" title="#hashtags Demo" />
</div>

Eklemek istediğiniz hashtag’e tıklamanız yeterlidir.

Ayrıca, bu listede gezinmek için yukarı ve aşağı ok tuşlarını kullanabilir, seçmek için enter tuşuna basabilir veya çıkmak için escape tuşuna basabilirsiniz.

`#` sembolünü bir hashtag eklemeden kullanmak isteyebileceğinizi biliyoruz. FastComments bunu tespit edecek ve yazım deneyiminize müdahale etmeyecektir.

### Hash Tag Eklemek

Kullanmak istediğiniz hashtag öneriler listesinde yoksa - FastComments arka planda hashtags'ı otomatik olarak oluşturacaktır.

Otomatik `#hashtag` oluşturma, dökümantasyonda [buradan](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation) devre dışı bırakılabilir.

### Kimler Yararlanır

Tüm mevcut ve yeni FastComments müşterileri, tüm seviyelerde, artık `#hashtags`'a erişime sahiptir. `#hashtags` daha önceki yorum bileşenlerine de geri taşınmıştır.

### Otomatik Tamamlama Nasıl Çalışır

Otomatik tamamlanmış listede gösterilen etiketler yalnızca sizin hesabınızdan alınır. HashTags FastComments kiracıları arasında paylaşılmaz.

### Dökümantasyon

`#hashtags` için özel dökümantasyon bulunmaktadır. Buradan bakabilirsiniz: https://docs.fastcomments.com/guide-hashtags.html

### Sonuç Olarak

FastComments'ın geri kalanında olduğu gibi, bu özelliğin hızlı ve kolay kullanılmasını umuyoruz.

Şerefe!

{{/isPost}}

---