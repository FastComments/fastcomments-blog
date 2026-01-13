---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]FastComments Güven Faktörü Duyurusu[/postlink]

{{#unless isPost}}
FastComments, spamın ne olduğunu ve ne olmadığını belirlerken daha fazla sezgi kullanmaya başladı.
{{/unless}}

{{#isPost}}

### Yenilikler

16 Kasım 2023 itibarıyla, FastComments kullanıcıların güvenilirliğini belirleme yöntemini genişletmeye başladı
spam filtreleriyle başa çıkmanın getirdiği hayal kırıklığını azaltmak için.

### Kullanıcılara Etkisi

Eğer mevcut bir sitenin uzun süreli bir üyesiyseniz ve yorumlarınız spam filtresine takıldıysa,
bu değişiklik tam size göre.

Spam filtrelerinin hoşlanmadığı şeyler yapan, çok sayıda link paylaşmak gibi, birçok kullanıcıdan
sayısız rapor aldık ve bu yorumlar spam klasörüne düşerek, site ayarlarına bağlı olarak ya engelleniyor ya da moderatör onayını bekliyor.

### Site Yöneticileri ve Moderatörlere Etkisi

1. En aktif kullanıcılarınızdan daha az yorumun otomatik olarak spam olarak işaretlendiğini görebilirsiniz.
2. Bu, kelime/ifade kara listeye dayalı spam tespitini değiştirmiyor. Küfürlü ve filtrelenmiş ifadeler, bu ayara sahipseniz, yorumların spam klasörüne gitmesine neden olmaya devam edecektir.

Güven Faktörü sayısı şu anda site yöneticileri veya moderatörlerine açılmamıştır, ancak
bu gelecekte araştıracağımız bir konudur.

### Güven Faktörü Nasıl Hesaplanır

Güven Faktörü `0` ile `100` arasında bir sayı olup, site bazında sürdürülmektedir.

Güven faktörünü belirlemek için aşağıdaki değişkenler kullanılmaktadır:

- Site ile etkileşim yaşı.
- Onaylı yorum sayısı.
- Sabitlenmiş yorum sayısı.

Eğer bir siteye altı aydan uzun süredir üye iseniz ve onaylı 50'den fazla yorum bıraktıysanız,
mükemmel bir güven puanına `100` sahip olursunuz.

Aksi takdirde, formül aşağıdaki gibidir ve zamanla evrim geçirecektir:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Burada:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Burada `* 20` olduğunu fark edebilirsiniz - sabitlenmiş yorumların yüksek bir ağırlığı vardır. Moderatörler
yorumlarınızı sabitliyorsa, muhtemelen oldukça güvenilir bir kullanıcı olarak kabul ediliyorsunuzdur.

### Geliştiriciler İçin & Sorunlar

API'de, `UserBadgeProgress` artık `autoTrustFactor` ve `manualTrustFactor` olarak açılmıştır.

`autoTrustFactor` tarafımızdan hesaplanır ve API üzerinden yazılabilir değildir.

Güven faktörünü kendiniz yapılandırmak isterseniz, `manualTrustFactor` tanımlayabilirsiniz. Sistem
sonra bu değeri kullanacak ve `autoTrustFactor` değerini ayrı olarak korumaya devam edeceğiz.

### Güven Faktörünün İstismarı

Tüm şeylerde olduğu gibi, bunun istismar edilmesini bekliyoruz. İnsanlar bir toplulukla ilişkiler geliştirecek
ve sonra hesabı spam göndermek için kullanacaklar. Ancak, makul varsayılanlarla (altı ay, 50+ yorum) barajı
çoğu spamcı için buna değmeyecek kadar yüksek ayarladığımızı düşünüyoruz. Spam göndermeye başladıklarında, hesapları hemen
moderatörler tarafından yasaklanabilir. Gelecekte moderatörlerin güven faktörünü ayarlamalarına da izin verebiliriz.

### Sonuç Olarak

Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Herhangi bir sorunla karşılaşırsanız, aşağıda bize bildirin.

Şerefe!

{{/isPost}}

---