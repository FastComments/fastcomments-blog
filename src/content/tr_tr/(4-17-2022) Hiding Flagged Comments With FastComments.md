---
[category:Moderation]

###### [postdate]

# [postlink]FastComments ile İşaretlenmiş Yorumları Gizleme[/postlink]

{{#unless isPost}}FastComments'a işaretleme eklendi. Ayrıca, yorumlar, işaretlendiği sayıya göre gizlenebilir.{{/unless}}

{{#isPost}}

### Yenilikler

Kullanıcılar artık FastComments tarafından barındırılan yorum dizileri ile yorumları işaretleyebilir. Moderatörler, işaretlenmiş yorumları filtreleyebilir ve ne kadar süreyle işaretlendiğini görebilir.

Platform ayrıca, belirli bir sayıda işaretlendiğinde yorumları otomatik olarak gizleyecek şekilde yapılandırılabilir.

### Yorumcunun Perspektifi

Bir kullanıcı geçerli bir oturuma sahip olduğunda, yorumları yorum düzenleme menüsü aracılığıyla işaretleyebilir.

Bu, aşağıdaki oturum türleriyle uyumludur:

- Anonim oturumlar
- FastComments.com Kullanıcı Oturumu (Üçüncü Taraf Çerezleri Kullanarak)
- Güvenli SSO
- Basit SSO

İşaretlenmiş yorumlar, yapılandırılmış işaretli eşik değeri ulaşılıncaya kadar gösterilmeye devam edecektir.

### Moderatörler için

Moderatörler, `Flagged` filtresini kullanarak işaretlenmiş yorumları görebilir, bu filtre doğrudan [buradan](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50) de kullanılabilir.

Ayrıca, bir yorumun kaç kez işaretlendiği Moderatörler ve Yöneticiler tarafından görülebilir.

Not:

- `Un-Approve Threshold` aracılığıyla `Onay Kaldırılmış` bir yorumun işaretli sayısını sıfırlamak, yorumu `Tekrar Onaylamak` anlamına gelir.
- `İşaretlenmiş` bir yorumu `Tekrar Onaylamak`, **işaretli sayısını sıfırlayacaktır**.
- Bu, bir kolaylık olarak oluşturulmuş bir özelliktir.

### Yapılandırma

İşaretlenmiş yorumların otomatik gizlenmesini yapılandırmak, [Yorum Moderasyon Ayarları Sayfasında](https://fastcomments.com/auth/my-account/moderate-comments/settings) yapılabilir.

### Mevcut Müşteriler

Bu özelliğin tüm mevcut müşterilere tüm seviyelerde dağıtımını tamamladık. Onaylanmamış yorumların otomatik gizlenmesi, yeni veya mevcut müşteriler için etkinleştirilmemiştir.

### Sonuç

Bu yeni özellik setinin faydalı ve kullanımı kolay bulmanızı umuyoruz.

Şerefe!

{{/isPost}}