---
[category:Analytics]
###### [postdate]
# [postlink]FastComments Artık Yorum Görüntülenme Sayılarını Görebilir[/postlink]

{{#unless isPost}}
FastComments artık kullanıcılar yorumları görüntüledikçe canlı olarak artan bir sayıyı her yorumun yanında göstermeyi destekliyor.
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments artık kullanıcılar yorumları görüntüledikçe canlı olarak artan bir sayıyı her yorumun yanında göstermeyi destekliyor. Bir yorumun görüntülenip görüntülenmediği, kullanıcının
hesabına veya anonim oturumuna bağlıdır. Hem Güvenli SSO hem de Basit SSO'yu destekler.

### Canlı Demolar

Bu blog yazısı için özel olarak bir yorum görüntüleme sayısı etkinleştirdik! Her bir yorumun yanında göz simgesinin yanındaki sayıyı kontrol edin!

### Dokümantasyon

[Yorum Görüntüleme Sayılarını ayarlamak için geliştirici dokümantasyonunu buradan bulabilirsiniz.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performans

Sayılar hemen güncellenmez, sayılar toplandıkça ve ardından ağ üzerinden gönderildikçe küçük (üç saniyeye kadar) bir gecikme vardır. Bu, canlı bir etkinlikteyseniz ve sayfada ortalama 10 yorumu birkaç bin kişinin görüntülediği durumlarda, her kullanıcıya anında milyonlarca güncelleme göndermememiz ve
tarayıcılarını ağırlaştırmamız veya tüm ağ bant genişliklerini kullanmamız için bir optimizasyondur.

### Sonuç Olarak

Bize sürekli geri bildirim veren müşterilerimize teşekkür ediyoruz, böyle fikirler geliştirebilelim ve iyi optimize edilmiş özellikleri başlatabilmek için zaman tanıyorsunuz. FastComments’ı sevmeye devam etmenizi umuyoruz.

Şerefe!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---