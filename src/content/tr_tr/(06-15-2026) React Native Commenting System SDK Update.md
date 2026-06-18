---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Yorum Sistemi SDK Güncellemesi[/postlink]

{{#unless isPost}}
fastcomments-react-native-sdk'yi sıfırdan yeniden inşa ettik: yeni, daha verimli bir durum yönetimi, Tasarım Token'ları kullanarak bir yeniden tasarım, özel bir canlı sohbet widget'ı ve birinci sınıf web desteği.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Jargon İçeriyor

### Yenilikler

`fastcomments-react-native-sdk`'nin 5.1 sürümünü yayınladık; bu, yorumları ve sohbeti gerçek yerel bileşenlerle render eden React Native kütüphanemizdir, bir WebView yerine.

İç yapısını yeniden yazdık, tüm görünümü yeniden tasarladık, bir canlı sohbet widget'ı ekledik, SDK'yı web'e taşıdık ve en son React Native ve React sürümlerine güncelledik.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, açık tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, koyu tema" title="FastComments React Native SDK, koyu tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Neden İki React Native Kütüphanesi?

Bu soruyu sıkça aldığımız için kısaca belirtmek gerek. İki seçenek sunuyoruz:

- `fastcomments-react-native`, bir WebView içinde çalışan web widget'ımızın ince bir sarf malzemesidir. Her özelliği anında elde etmenin en hızlı yoludur ve web düzeltmelerinden otomatik olarak yararlanır.
- `fastcomments-react-native-sdk` (bu) UI'yı webview olmadan yerel React Native bileşenleriyle render eder. Daha esnektir, tamamen temalandırılabilir ve yerelliktir çünkü yereldir.

En iyi deneyim için SDK'yı öneriyoruz. Bu gönderinin geri kalanı, 5.0'da nelerin değiştiği ile ilgilidir.

### Yeni Durum Yönetimi

Bu değişikliğin temel nedeni, kütüphanemizin adımıza sadık kalmasını sağlamak ve hızlı olmasını sağlamaktır. Birçok müşteri performansı hakkında şikayette bulundu, bu nedenle şimdi bu sorun düzeltildi.

SDK başlangıçta yorum ağacını Hookstate'de tutuyordu. Çalışıyordu, ama diziler ve canlı güncellemeler arttıkça işler yavaşlamaya başladı.

Hookstate'i Zustand ile yer değiştirdik ve düz, indeksli bir depolama alanına geçtik. Yorumlar artık bir `byId` haritasında `childrenByParent`, `rootOrder` ve `pinnedIds` indeksleriyle birlikte yer alıyor, bu da devlete gömülmüş bir ağaç yerine.

Kazanç:

- Canlı olaylar (yeni bir yorum, bir oylama, bir düzenleme) artık ağaçta yürümek ve kopyalamak yerine O(1) mutasyonlar haline geldi.
- Her fetch işleminde çalışan iki tam ağaç JSON derin kopyasını kaldırdık.
- Bileşenler okudukları dilimlere tam olarak abone olur, standard bir seçici modeli ile, bu yüzden bir yorum üzerindeki bir oylama sadece bir yorumu etkiler.

Son nokta, duyulduğundan daha önemlidir. Seçici tabanlı aboneliklerde, bir satır sadece kendi verileri değiştiğinde yeniden render edilir.

### Token Tabanlı Yeniden Tasarım

Eski görünüm, sabit kodlanmış stillerden oluşuyordu. Yeni varsayılan, bir dizi anlamsal tasarım token'ından (`FastCommentsTheme`) üretilmektedir: renkler, boşluklar, yarıçap, yazı tipi boyutları, yazı tipi kalınlıkları ve avatar boyutları. Tüm stil ağacı bu token'lardan türetilmiştir.

Bu, stil değiştirmenin tek bir prop ile yapılacağı anlamına geliyor:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Koyu mod, bir token seti uzakta:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Yeniden tasarım, daha temiz, modern-nötr bir görünüme sahip: ince ayırıcılar, yuvarlak oylama butonları ve çipler, dolgu rengi ana butonlar, yuvarlak avatarlar ve tutarlı bir tip ölçeği. `styles` prop'u hala mevcut, bu nedenle mevcut entegrasyonlar çalışmaya devam ediyor.

### Özel Bir Canlı Sohbet Widget'ı

`FastCommentsLiveChat`'i ekledik; bu, Android SDK'mızın sohbet görünümünü yansıtan aynı motor üzerinde bir sohbet ayarı: en yeni mesajların altta olduğu kronolojik mesajlar, listenin altında bir yazıcı, bağlantı noktası ve kullanıcı sayısı ile bir canlı üst çubuk, daha eski mesajları okurken duraklayan otomatik kaydırma ve yukarı doğru kaydırdıkça sonsuz tarih. Her ayar `config` aracılığıyla değiştirilebilir.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Artık Web'de de

Aynı SDK şimdi `react-native-web` aracılığıyla web'de çalışıyor. Zengin metin yazıcısı (`react-native-enriched` ile destekli) iOS, Android ve tarayıcıda aynı şekilde render ediliyor, bu nedenle düzenleme deneyimi her yerde tek bir uygulama ile tutarlıdır. Yorum listesinin aksi takdirde keseceği örtüler (menüler, GIF seçici, bildirim listesi) web yapısındaki tetikleyicileri altında yer alır.

Canlı <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">bileşen tarayıcısı</a>'nda her widget'ı kendiniz deneyebilirsiniz; bu, bu SDK'nın `react-native-web` aracılığıyla tarayıcıda çalışmasıdır.

### React Native ile Güncel Kalmak

5.0, React Native 0.81 ve React 19'a karşı inşa edilmiş ve test edilmiştir ve Yeni Mimariyi (Fabric) hedef almaktadır, bu da yerel zengin metin editörü için gereklidir. Burada güncel kalmak meşguliyet değil: editör, hareket algılama ve render süreci, React Native ilerledikçe daha hızlı ve daha doğru hale gelmektedir ve bu yükseltmeleri istikrarlı bir şekilde almak, yıllarca geride kalmaktan daha iyidir.

### Sonuç Olarak

Bu yeniden yazım, React Native SDK'ya diğer kütüphanelerimizle aynı birinci sınıf temeli sunmakla ilgiliydi: hızlı ve öngörülebilir bir veri modeli, bir prop ile temalandırabileceğiniz bir görünüm, bir sohbet widget'ı ve web desteği, hepsi modern bir React Native altyapısı üzerinde.

SDK'yı <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>'de, örneklerle birlikte kaynağını <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>'da ve her widget'ı canlı olarak <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">bileşen tarayıcısı</a>'nde bulabilirsiniz. Bir sorunla karşılaşırsanız, aşağıda bize bildirin.

Şerefe!

{{/isPost}}

---