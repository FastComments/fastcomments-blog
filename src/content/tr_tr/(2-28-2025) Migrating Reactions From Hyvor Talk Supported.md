---
[category:Migration]

###### [postdate]
# [postlink]Hyvor Talk'tan Tepkileri Taşımak Artık Destekleniyor[/postlink]

{{#unless isPost}}
Hyvor Talk'tan veri çıkışınızı içe aktardığınızda, artık sayfa düzeyindeki tepkilerinizi taşıyabiliriz.
{{/unless}}

{{#isPost}}

### Yenilikler

Yorumları Hyvor Talk'tan taşımak için içe aktardığınızda, FastComments artık sayfa tepkilerinizi içe aktarabilir. Ayrıca, sayfalardaki yorum dizilerinin kapalı olup olmadığını tespit edecek ve bu durumu da taşıyacağız.

İçe aktarmayı tekrar çalıştırmak, sayımın çoğalmasına veya içe aktarma öncesindeki herhangi bir tepki değerinin kaybolmasına neden olmayacaktır.

### Tepkileri Nasıl Ayarlarsınız

Sayfa tepkilerinin gösterimi otomatik değildir. Başlamak için, widget yapılandırmanızı güncellemeniz gerekecek:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Yıldızlı
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Kırmızı Kalp
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Ağız Açık Yüz
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Ağlayan Yüz
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Sevinç Gözyaşlı Yüz
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Kızgın Yüz
            ]
        }
    });
</script>
```

ID'ler, Hyvor Talk dışa aktarmasındaki olanlarla eşleşmelidir. Bu örnek doğru değerleri kullanmaktadır.

Kendi tepki resimlerinizi sağlamanız gerekecek. Bunlar, gifs dahil olmak üzere herhangi bir formatta olabilir. Yukarıdaki örnek, OpenMoji projesinden bazılarını kullanmaktadır.

### Sonuç Olarak

Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfederseniz bize bildirin.

Şerefe!

{{/isPost}}

---