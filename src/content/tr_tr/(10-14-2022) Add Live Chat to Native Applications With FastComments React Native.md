---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]FastComments React Native ile Yerel Uygulamalara Canlı Sohbet Ekleyin[/postlink]

{{#unless isPost}}
Aylar süren çalışmalardan sonra, fastcomments-react-native-sdk'nin artık genel kullanılabilirlik için 1.0 sürümüne ulaştığını duyurmaktan mutluluk duyuyoruz.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makalede Teknik Terimler Var

### Yenilikler

FastComments'ta, FastComments ile React Native uygulamaları oluşturmanın yeni bir yolunu başlattık. Daha önce, VanillaJS kütüphanesi etrafında react-native sarmalayıcıyı kullanıyordunuz. Bu, kütüphanemizi yüklemek için uygulamanızda bir web görünümü - bir tarayıcı - gerektirdiğinden birçok bellek ve gecikme sorununa yol açıyordu.

Artık FastComments'ı React Native'e **tamamen** taşımış bulunuyoruz ve web görünümlerine olan ihtiyacı tamamen ortadan kaldırmak için kendi WYSIWYG editörümüzü yazdık.

Kütüphane farklı temalar ve düzenler destekler. Örneğin, işte canlı sohbet tarzı koyu teması olan Erebus teması:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Teması" title="Erebus Teması" />
</div>

Kütüphane [FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) adresinde GitHub'da ve [NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk) üzerinde mevcuttur.

### Özelleştirilebilir

Yeni yerel kütüphane, mevcut web kütüphanesi gibi özelleştirilebilir olarak tasarlanmıştır.

Şunları yapabilirsiniz:

- Kütüphanenin kullandığı tüm varlıkları ve simgeleri özelleştirin.
- Kütüphanedeki her bileşenin stilini en üstten bir Styles nesnesi geçirerek özelleştirin.
- Tüm çevirileri özelleştirin.
- Önceden tanımlanmış veya topluluk tarafından geliştirilmiş temalardan birini kullanın.
- Web kütüphanesinin desteklediği birçok yapılandırma seçeneğini kullanın.

### Tam Özellik Listesi

Kütüphane birçok şeyi destekler. Tam olmayan bir liste:

- [x] Engelleme
- [x] Sohbet Tepkileri
- [x] Çocuk Yorumlar & Yanıtlar
- [x] Özel Stilller (tipli stil sayfası olarak)
- [x] Emotikonlar
- [x] İşaretleme
- [x] Gif Tarayıcı - Varsayılan trend + arama yeteneği ile. Resimler ve arama proxy ile anonimleştirilmiştir.
- [x] Canlı yorum yapma
- [x] Medya Seçimi & Yüklemeler
- [x] Resim desteği olan yerel WYSIWYG editörü.
- [x] Bildirim Servisi (kullanıcının okunmamış bildirimlerini arka planda almak için, vs.)
- [x] Bildirimler Listesi (zil tıklanarak gösterilir). Abonelikleri destekler.
- [x] Sayfalama (Düğmeler)
- [x] Sayfalama (Sonsuz Kaydırma)
- [x] Yorumları Sabitleme
- [x] Güvenli, Basit SSO ve anonim yorum yapma.
- [x] Birkaç önceden tanımlanmış tema.
- [x] Yorumları Göster/Gizle Anahtarı
- [x] Konular
- [x] Kullanıcı etkinlik göstergeleri
- [x] Oylama

### Nasıl Çalışır

Kütüphane, FastComments istemcisinin TypeScript ve React Native ile tamamen yeniden yazılmış halidir.

### Uzun Vadeli Plan

Uzun vadede, VanillaJS kütüphanesini ve react-native kütüphanesini paralel olarak sürdüreceğiz, yanı sıra geliştirebileceğimiz gelecekteki yerel kütüphaneleri de.

### Sırada Ne Var?

Bu kütüphaneyi zamanla geliştirmek için kullanıcılar ve topluluktan geri bildirim almayı sabırsızlıkla bekliyoruz, tıpkı web ekosisteminde yaptığımız gibi.

### Sonuç Olarak

Bu kütüphanenin bazıları tarafından uzun süredir beklenildiğini biliyoruz. Tüm büyük sürümlerde olduğu gibi, bu kütüphaneyi optimize etmek, test etmek ve düzgün bir şekilde yayımlamak için zaman ayırabildiğimiz için mutluyuz.

Şerefe!

{{/isPost}}

---