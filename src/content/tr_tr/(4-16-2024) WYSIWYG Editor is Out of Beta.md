---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG Editörü Beta Döneminden Çıktı[/postlink]

{{#unless isPost}}
Artık müşteriler, görünür bağlantı etiketleri kullanmadan formatlama yapan yeni editörü kullanmayı seçebilirler.
{{/unless}}

{{#isPost}}

### Yeni Olanlar

FastComment kullanıcıları, yorumlarını `<b>bu</b>` gibi bağlantı sekmeleri ile formatlama yeteneğine her zaman sahipti. Bu, geçmişte bir internet forumu kullanmış olan herkes için oldukça tanıdık, ancak bazı kullanıcılar ve topluluklar farklı bir davranış bekliyor.

Artık, metin girişi `contenteditable` olarak değiştirilebildiğinden, yorum alanında metni bağlantı etiketleri olmadan stillendirebilirsiniz.

Gösterim amaçlı olarak, bu blogda bu özellik etkinleştirildi.

Gelişmiş editör, eski editörle tam aynı görünüme sahiptir, yalnızca görünür bağlantı etiketlerini kullanmaz.

### Gelişmiş Düzenlemeyi Etkinleştirme

Widget Özelleştirmesi'nde yalnızca `Gelişmiş Editör`ü etkinleştirip kaydedebilirsiniz. Belgeler [burada](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Geliştiriciler ve Dikkat Edilmesi Gerekenler

Bunu kodda etkinleştirmek için belgeleri [burada](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg) bulabilirsiniz, ancak daha az veri gönderimi sağladığı için Widget Özelleştirme UI'sını kullanmanızı öneririz.

İçerik düzenlenebilir alandan üretilen HTML, eski textarea editöründen biraz farklıdır, bu yüzden API'den yorumları ayrıştırıyorsanız bunu aklınızda bulundurun.

### Optimizasyonlar

Bu yeni özellik ile yorum widget'ının büyümesini engelledik ve bu özelliğin etkinleştirildiğinde arka planda yüklenecek bir uzantı olarak ekledik, bu da varsayılan yorum widget'ını küçük ve hafif tutar.

### Sonuç Olarak

Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfederseniz bize bildirin.

Şerefe!

{{/isPost}}