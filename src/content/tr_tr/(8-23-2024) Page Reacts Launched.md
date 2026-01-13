---

[category:Features]
###### [postdate]
# [postlink]Sayfa Tepkileri Yayınlandı[/postlink]

{{#unless isPost}}
FastComments artık yorum widget'ının üzerinde tepkiler ve sayıları göstermeyi destekliyor.
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments daha önce, yorum alanının üzerinde bir yıldız derecelendirmesi, NPS veya diğer bir soru gösterebileceğiniz Geri Bildirim modülünü destekliyordu.

Ancak, birçok kullanıcı daha basit bir şey istiyor - yorum widget'ının üzerinde bazı simgelerle tepkilerin gösterilmesi, bu simgelerin özelleştirilmesi, belki kullanıcı başına seçeneklerin özelleştirilmesi ve daha fazlası.

Bugünden itibaren bu özelliği başlattık.

Tüm FastComments planları artık Sayfa Tepkilerine erişebiliyor.

### Canlı Demo

Bu blog gönderisi için özel olarak bir demo Sayfa Tepkileri yapılandırması etkinleştirildi, aşağıda bulabilirsiniz!

### Dokümantasyon

[Sayfa Tepkilerini ayarlamak için geliştirici dokümantasyonunu burada bulabilirsiniz.](https://docs.fastcomments.com/guide-page-reacts.html)

### Tepki Kullanıcı Listesi

Sayfa Tepkileri, belirli bir tepki bırakan kullanıcıların listesini açığa çıkaran bir araç ipucu gösterecek şekilde de yapılandırılabilir.

### Sonuç

Bu tür fikirler üzerinde düşünebilmemiz ve iyi optimize edilmiş özellikleri piyasaya sürmek için bize zaman vermeleri için sürekli geri bildirim veren müşterilerimize teşekkür ederiz. FastComments'ı sevmeye devam edeceğinizi umuyoruz.

Şerefe!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---