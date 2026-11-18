[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]FastComments ile Yorumlarınıza Canlı Anketler Ekleyin[/postlink]

{{#unless isPost}}
Yorumlar artık canlı anketlere sahip! Okuyucular doğrudan konu içinde oy verir, sonuçlar sayfadaki herkes için anlık olarak güncellenir ve anketler web widget'ı ve iOS, Android ve React Native SDK'larımızda çalışır.
{{/unless}}

{{#isPost}}

### What's New

Bu sürüm **Canlı Anketler** ekliyor. Bir anket bir yoruma eklenir ve içinde görüntülenir. Okuyucular bir seçeneğe tıklayarak oy verir,
konuyu terk etmeden, ve oylar geldikçe sonuçlar sayfayı görüntüleyen herkes için anlık olarak güncellenir. Yenileme gerekmez ve
kimsenin yanıtları elle sayması gerekmez.

<img src="images/fc-live-polls.png" alt="Bir sonraki buluşmanın hangi formatta olacağını soran bir anket içeren bir yorum, Yüz yüze %34, Çevrimiçi %21 ve Hibrit %45 gösteriyor, 53 yanıtla" title="Canlı Anketler" class="lozad" />

Anket bir yorum olduğu için, sohbet ona bağlı kalır. İnsanlar oy verir, ardından nedenlerini açıklamak için yanıt verir.

### Creating a Poll

Anketler açık olduğunda, yorum düzenleyicisi bir anket düğmesi alır. Buna tıklamak, metin girişinin altında bir anket düzenleyicisi açar, burada şunları ayarlarsınız:

- **Soru**, en fazla 200 karakter.
- **Seçenekler**, 2 ile 10 arasında.
- **Kapanma zamanı**: hiç, ya da 1 gün, 3 gün veya 1 hafta sonra. Kapalı bir anket son sonuçlarını gösterir ve oy almayı durdurur.
- **Gizlilik**: anonim, yöneticilere görünür veya herkese açık.
- **Sonuçları Görmek İçin Oy Gerektir**, bu, sonuçları her izleyiciden gizler, izleyici oy verene ya da anket kapanana kadar.

Ardından yorumunuzu yazın ve her zamanki gibi gönderin. Anketler yeni yorumlarda ve yanıtlamalarda çalışır.

### Voting

Her kişi anket başına bir oy alır ve anket açıkken oyunu değiştirebilir. Anket önce oy gerektirmiyorsa,
okuyucular **Show results**'e tıklayarak seçim yapmadan önce durumun ne olduğunu görebilir.

Gizlilik anket başına ayarlanır ve seçeneklerin hemen altında gösterilir, böylece oy verenler oylarını vermeden önce kimlerin oylarını görebileceğini bilir.
Anonim anketler (varsayılan) sadece toplamları gösterir ve kimse, yöneticiler de dahil, kimin neye oy verdiğini göremez. Yönetici görünür
anketlerde, yöneticiler ve moderatörler **See who voted**'i açabilir. Kamu anketlerinde ise herkes yapabilir.

### Turning It On

Anketler varsayılan olarak kapalıdır. <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Özelleştirme</a>'yi açın,
**Anketleri Etkinleştir**'i işaretleyin ve kimlerin oluşturabileceğini seçin:

- **Yöneticiler/Moderatörler Sadece** (varsayılan), anketleri kendiniz yürütmek istediğinizde.
- **Herkes**, topluluğunuzun birbirine soru sormasını istediğinizde.

Oylama varsayılan olarak oturum açmış bir kullanıcı gerektirir. **Anonim Anket Oylarına İzin Ver**'i işaretleyerek herkesin oy vermesini sağlayabilirsiniz. Bunu adil tutmak için,
anonim oylar IP başına anket başına saat başına üç ile sınırlıdır.

Her özelleştirme kuralı gibi, bu da tüm sitenize, bir domaine veya tek bir sayfaya uygulanabilir.

### Notifications

Bir anketin yazarı yanıtlar geldikçe bunları duyar: bir bildirim, çok sayıda insan aynı anda oy verdiğinde gruplanır ve anket o gün yeni yanıtlar aldığında günlük bir e-posta gönderilir. Sadece ilk oy bir yanıt olarak sayılır, bu yüzden birinin fikrini değiştirmesi daha fazla bildirim göndermez. Bildirimler anketin gizliliğine uyar, bu yüzden anonim bir anket sadece kaç yeni yanıt geldiğini söyler, kim olduğunu asla söylemez.

### Native Mobile SDKs

Anketler sadece web widget'ında değildir. Yerel SDK'larımız anket kartını, anket düzenleyicisini, canlı sonuçları ve
oy veren listesini gerçek yerel bileşenlerle render eder ve aynı widget ayarlarını kontrol panelinizden okur. Anketleri bir kez etkinleştirin
ve sitenizde ve uygulamalarınızda görünürler.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, Swift Package Manager aracılığıyla.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, `com.fastcomments:android-sdk:2.1.0` olarak.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, NPM üzerinde.

iOS ve Android SDK'ları ayrıca kendi UI'nizden bir anket gönderilebilir. iOS'ta şöyle görünür:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

iOS ve Android için README'ler <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> ve <a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, ayrıca <a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">React Native değişiklik günlüğü</a>,
detayları kapsar, anket renklerini uygulamanıza uyacak şekilde nasıl yeniden stil vereceğinizi de içerir.

### The API

Anketler REST API'de de mevcuttur. `poll` parametresini `POST /api/v1/comments`'e göndererek bir anketi yorumuyla birlikte oluşturabilirsiniz,
ya da daha sonra `/api/v1/polls/:commentId` ile ekleyebilir, düzenleyebilir, kapatabilir ve kaldırabilirsiniz. Oylar `/api/v1/poll-votes` ile listelenebilir, verilebilir ve kaldırılabilir; bu da sonuçları bir elektronik tabloya ya da kendi CMS'nize aktarmayı kolaylaştırır. API, widget ile aynı ayarları izler ve anonim anketlerdeki bireysel oylar üzerinden okunamaz.

### Overhead

Anket kodu, anketler etkinleştirilmediği sürece yüklenmez, bu yüzden yorum widget'ını başkaları için yavaşlatmaz.

### Documentation

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">Canlı Anketler rehberi</a> anketleri etkinleştirmeyi,
kimlerin oluşturabileceğini, anonim oyları, oy veren gizliliğini, bildirimleri ve API'yi kapsar.

### Try It

<a href="https://fastcomments.com/product/live-polls" target="_blank">Canlı Anketler demo</a>'da bir canlı anket var. Üzerine oy verin,
sayfayı ikinci bir sekmede açın ve sonuçların hareketini izleyin. Orada kendi anketinizi de gönderebilirsiniz.

### In Conclusion

Eğer konularınız sürekli baş sayımına dönüşüyorsa, anketleri deneyin ve aşağıda bir sonraki görmek istediğiniz şeyi bize bildirin.

Şerefe!

{{/isPost}}

---