---
[category:Özellikler]

###### [postdate]

# [postlink]Profiller, Rozetler ve Doğrudan Mesajlaşma[/postlink]

{{#unless isPost}}Bu sürümde, FastComments kullanan topluluklara ödüller sunan ve onlara iletişim kurmalarına yardımcı olan birçok özelliğimiz var.{{/unless}}

{{#isPost}}

### Yeni Neler Var
FastComments, kullanıcı profilleri ve ilgili özellikleri resmi olarak yayınladı.

### Kullanıcı Profilleri

Bir kullanıcının profili, adını, çevrimiçi olup olmadığını, son aktivitelerini ve profilinde yorum yapma alanını içerir.

Rozetleri ve rozet kazanım ilerlemeleri de burada gösterilmektedir.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Kullanıcı Profili" title="FastComments Kullanıcı Profili"></video>
</div>

Kullanıcılar, bir yorum dizisinde avatarlarına tıklayarak kendi profillerini görebilir veya [hesap sayfalarına gidebilirler](https://fastcomments.com/auth/my-account).

Ayrıca, bir kullanıcının profilinden doğrudan mesaj gönderebilirsiniz.

### Kullanıcı Profili Modali
Bir kullanıcının avatarı seçildiğinde, Profil Modali açılır. Bu, Yorum Moderasyonu sayfasına moderatörler için de eklenmiştir.

### Kullanıcılara Rozetlerle Ödül Verme

Rozetler, topluluğunuzun kullanıcılarını ödüllendirmenize olanak tanıyan FastComments’a son eklenen özelliklerden biridir. Bir rozet oluşturmak kolaydır:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Rozet Oluştur" title="Rozet Oluştur" />
</div>

Rozetler aşağıdaki koşullara dayanarak verilebilir:

- Bırakılan Yorum Sayısı
- Kazanılan Beğeni Sayısı
- Alınan Yanıt Sayısı
- Sabitlenmiş Yorum Sayısı
- Veteran (ilk yorumdan itibaren geçen süre)
- Gece Geç Saatlerde Yorum Yapma
- Hızlı Yanıt Süresi
- Belirli Bir Sayfaya Yanıt Verme
- Moderatörler - Silinen Yorum Sayısı
- Moderatörler - Onaylanan Yorum Sayısı
- Moderatörler - Onayı Kaldırılan Yorum Sayısı
- Moderatörler - İncelenen Yorum Sayısı
- Moderatörler - Spam Olarak İşaretlenen Yorum Sayısı
- Moderatörler - Spam Olarak İşaretlenmeyen Yorum Sayısı

Gördüğünüz gibi, kullanıcılara ödül verebileceğimiz birçok durum var.

Birden fazla *seviye* rozet tanımlayabiliriz. Örneğin, 10, 100 ve 1000 bırakılan yorum eşiğine sahip `Yorum Sayısı` rozetleri ekleyebiliriz. Kullanıcılar topluluğunuzda etkileşimde bulundukça, kazandıkları rozetler zamanla **birikir**.

*Moderatörleri* unutmamalıyız. Birçok toplulukta bu, karşılıksız bir iş. Moderatörlerinize gösterecek bir şey vermek için onları düzenleyerek onlara Moderatör rozetleri ayarlayın.

Gece geç saatlerde aktif olan veya hızlı bir şekilde yanıt veren üyeleri tanımak için `Gece Kuklası` ve `Hızlı Yanıt Süresi` gibi birkaç benzersiz durumu da destekliyoruz. `Hızlı Yanıt Süresi`, FastComments’ın canlı özelliklerinin kullanıldığı durumlarda en iyi şekilde çalışır.

Yeni rozetler oluşturulduğunda, bu rozetleri hak eden mevcut topluluk üyelerine otomatik olarak eklenecektir.

### Doğrudan Mesajlaşma

Müşteriler, FastComments’ın lansmanından bu yana kullanıcılara Doğrudan Mesaj gönderme yeteneğini talep ettiler. İki yıl sonra, bu özelliği nihayet duyurmaktan mutluluk duyuyoruz ve sabırla bekleyenlere teşekkür ediyoruz.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Doğrudan Mesajlaşma" title="FastComments Doğrudan Mesajlaşma"></video>
</div>

Doğrudan Mesajlaşma, toplulukta üyelerin birbiriyle özel olarak mesajlaşmasına olanak tanır, aynı zamanda Moderatörler ve Yöneticiler için yorumcularla iletişim kurmak için faydalı bir araçtır.

FastComments’ın çoğu gibi, tüm Doğrudan Mesajlaşma özellikleri de canlıdır.

#### Asenkron Doğrudan Mesajlaşma

Bir kullanıcıya mesaj gönderdiğinizde, o çevrimdışı olabilir. Bu durumda, kullanıcıya yeni bir mesajı olduğunu bildiren bir e-posta göndereceğiz.

#### E-posta Üzerinden Doğrudan Mesajlaşma

Bir kullanıcı e-posta üzerinden bir mesaj aldığında, o e-postaya yanıt vererek yanıtlama imkanına sahiptir.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM E-posta" title="DM E-posta" />
</div>

Bunu yaptıklarında, yanıtları profilindeki Mesajlar sekmesinde diğer kullanıcıya **canlı** olarak görünecektir.

### Güvenli SSO

FastComments Kullanıcı Profilleri, mevcut Güvenli SSO kurulumlarıyla tamamen uyumludur.

Kullanıcının gizlilik ayarları gibi konular, SSO yüklemelerinde `isProfileActivityPrivate` bayrağı aracılığıyla da yapılandırılabilir.

Varsayılan olarak, `isProfileActivityPrivate` doğrudur.

### Mevcut Müşteriler

Bu özelliğin bütün mevcut müşterilere tüm seviyelerde sunumunu tamamladık.

### Gizliliği Yapılandırma

Profilinizi görüntüleyerek aşağıdaki seçeneklere ulaşabilirsiniz:

- Profilinizde yorum yapmayı devre dışı bırakma.
- Aktivitenizin başkaları tarafından görünmesini engelleme.
- Başkalarının size doğrudan mesaj atmasını engelleme.

### Toplanan Veriler

Kullanıcı Profilleri, bugün elimizde olan verilere dayanarak oluşturulur; bunlar adları, en son bıraktıkları yorumlar ve buna benzer bilgileri içerir.

Kullanıcıların profillerini genişletmek için ek veri toplayamayız. Kullanıcı Profillerini bir forumdaki tipik kullanıcı profili gibi düşündüğümüzü söyleyebiliriz.

### Sonuç Olarak

Bu özelliklerin FastComments'ı bir platform olarak büyük ölçüde genişlettiğini düşünüyoruz ve umarız bunları kullanışlı ve kullanımı kolay bulursunuz.

Şerefe!

{{/isPost}}

---