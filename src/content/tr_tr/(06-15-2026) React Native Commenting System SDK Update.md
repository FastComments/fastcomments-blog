---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Yorum Sistemi SDK Güncellemesi[/postlink]

{{#unless isPost}}
fastcomments-react-native-sdk'yi sıfırdan yeniden inşa ettik: yeni, daha verimli bir durum yönetimi, Tasarım Tokenları kullanarak bir yeniden tasarım, özel bir canlı sohbet widget'ı ve birinci sınıf web desteği.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makalede Teknik Terimler Bulunmaktadır

### Yenilikler

`fastcomments-react-native-sdk`'nin 5.1 sürümünü yayımladık. Bu, gerçek yerel bileşenlerle yorumları ve sohbeti render eden React Native kütüphanemizdir, bir WebView yerine.

İç yapısını yeniden yazdık, tüm görünümü yeniden tasarladık, bir canlı sohbet widget'ı ekledik, SDK'yı web'e taşıdık ve en son React Native ve React sürümüne güncelledik.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, açık tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, karanlık tema" title="FastComments React Native SDK, karanlık tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Neden İki React Native Kütüphanesi?

Bu soruyu aldığımız için hızlıca belirtmek istedik. İki seçenek sunuyoruz:

- `fastcomments-react-native`, bir WebView üzerinde çalışan web widget'ımızın ince bir sarıcısıdır. Tüm özelliklere anında erişmenin en hızlı yolu olup, web düzeltmelerinden otomatik olarak faydalanır.
- `fastcomments-react-native-sdk` (bu) kullanıcı arayüzünü bir webview olmadan yerel React Native bileşenleriyle render eder. Daha esnek, tamamen temalandırılabilir ve yerel olduğu için yerel hissiyatı taşır.

En iyi deneyim için SDK'yı öneriyoruz. Bu gönderinin geri kalanı, 5.0'da nelerin değiştiği hakkında.

### Yeni Durum Yönetimi

Bu değişikliğin ana amacı, kütüphanemizin adımıza sadık kalması ve HIZLI kalmasını sağlamaktır. Performansı hakkında bir dizi müşteri şikayette bulundu, bu yüzden bu sorun artık çözülmüş durumda.

SDK başlangıçta yorum ağacını Hookstate içinde tutuyordu. Çalışıyordu, ancak iplikler ve canlı güncellemeler arttıkça işler yavaşlamaya başladı.

Hookstate'i Zustand ve düz, indekslenmiş bir mağaza ile değiştirdik. Artık yorumlar, durumun içinde yer alan bir ağaç yerine, `byId` haritasında `childrenByParent`, `rootOrder` ve `pinnedIds` indeksleriyle birlikte yaşamaktadır.

Sonuç:

- Canlı olaylar (yeni bir yorum, bir oy, bir düzenleme) O(1) mutasyonları haline geldi ve ağaç yürütme ve klonlamaya ihtiyaç kalmadı.
- Her fetch'te çalışan tam ağaç JSON derin klonlarını kaldırdık.
- Bileşenler, okudukları dilimlere tam olarak abone olurlar, standart seçici modeli, bu nedenle bir yoruma yapılan bir oy, yalnızca bir yorumu etkiler.

Son nokta, duyduğunuzdan daha önemlidir. Seçici tabanlı aboneliklerle, bir satır sadece kendi verisi değiştiğinde yeniden render edilir.

### Token Tabanlı Yeniden Tasarım

Eski görünüm, sabit kodlanmış stillerden oluşan bir yığını andırıyordu. Yeni varsayılan, bir dizi anlamsal tasarım tokenından (`FastCommentsTheme`) üretilmektedir: renkler, boşluk, yarıçap, yazı tipi boyutları, yazı tipi ağırlıkları ve avatar boyutları. Tüm stil ağacı bu tokenlardan türetilmiştir.

Bu, yeniden stillendirmenin tek bir prop ile mümkün olduğu anlamına gelir:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Karanlık mod, tek bir token seti kadar yakındır:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Yeniden tasarım, temiz, modern-nötr bir görünümdür: ince ayrımlar, yuvarlak oylama düğmeleri ve çipler, dolu birincil düğmeler, yuvarlatılmış avatarlar ve tutarlı bir yazı tipi ölçeği. `styles` prop'u hâlâ kesme aşamaları için mevcuttur, böylece mevcut entegrasyonlar çalışmaya devam eder.

### Özel Bir Canlı Sohbet Widget'ı

`FastCommentsLiveChat` olarak adlandırdığımız, Android SDK'ımızın sohbet görünümünü yansıtan bir sohbet preset'i ekledik: en yenisi en altta olmak üzere kronolojik mesajlar, listenin altında bir bileşim alanı, bağlantı noktası ve kullanıcı sayısıyla birlikte bir canlı başlık şeridi, eski mesajları okuduğunuz sırada duraklayan otomatik kaydırma ve yukarı kaydırırken sonsuz bir geçmiş. Her preset, `config` aracılığıyla değiştirilebilir.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Artık Web'de de Var

Artık aynı SDK, `react-native-web` üzerinden web'de de çalışmaktadır. Zengin metin bileşeni (`react-native-enriched` ile desteklenen) iOS, Android ve tarayıcıda aynı şekilde render edilir, böylece düzenleme deneyimi her yerde tek bir uygulama ile tutarlıdır. Yorum listesinin kesebileceği örtü (menüler, GIF seçim aracı, bildirim listesi) web yapısında tetikleyicilerinin altına yerleştirilmiştir.

### React Native ile Güncel Kalmak

5.0, React Native 0.81 ve React 19'a karşı oluşturulmuş ve test edilmiştir, ayrıca yerel zengin metin editörünün gerektirdiği Yeni Mimari'yi (Fabric) hedef almaktadır. Burada güncel kalmak sıradan bir iş değildir: editör, dokunma yönetimi ve render etme, React Native ilerledikçe daha hızlı ve daha doğru hale gelir ve bu yükseltmeleri yavaş yavaş almak, yıllar içinde geride kalmaktansa tercihimizdir.

### Sonuç Olarak

Bu yeniden yazım, React Native SDK'sına diğer kütüphanelerimizle aynı birinci sınıf konumu vermek üzerineydi: hızlı ve öngörülebilir bir veri modeli, tek bir prop ile temalandırabileceğiniz bir görünüm, bir sohbet widget'ı ve modern bir React Native temeli üzerinde web desteği.

SDK'yı <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>'de ve örneklerle kaynak kodunu <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>'da bulabilirsiniz. Herhangi bir sorunla karşılaşırsanız aşağıda bize bildirin.

Şerefe!

{{/isPost}}

---