---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Kilitledi Yorumlar Artık Gerçekten Kilitli[/postlink]

{{#unless isPost}}
Kilit simgesi, kilitli yorumlarda nihayet görünüyor ve kilitli yorumlar, bir admin onları kilidini açana kadar artık düzenlenemez veya silinemez.
{{/unless}}

{{#isPost}}

### Yenilikler

Moderasyon ekibi, uzun zamandır yorumları kilitleyebilmekte. Bir yorumu kilitlemek, yeni yanıtların yazılmasını engeller; bu, bir başlığın sona erdiği veya bir alt konuşmanın raydan çıktığı durumlarda oldukça kullanışlıdır.

Sorun, "kilitli" olmanın fazla bir anlamı olmamasıydı. Okuyucular, bir yorumun kilitlendiğine dair görsel bir gösterim görmüyorlardı. Ve yeni yanıtlar engellense de, orijinal yazar veya düzenleme erişimi olan herkes hala yorumu düzenleyebilir veya silebilirdi. Bu gerçekten kilitlenmiş değil. Bu güncelleme, her ikisini de düzeltiyor.

### Kilit Simgesi

Bir moderatör bir yorumu kilitlediğinde, yorumu üst sağ köşesinde küçük bir kilit simgesi görünür, bu simge pin simgesinin hemen yanında yer alır. Bu, her okuyucu için görünür - sadece moderatörler için değil. Yorumu kilidini açmak simgeyi kaldırır.

Simgesi, pin simgesiyle aynı şekilde açık ve koyu modda çalışır.

### Düzenleme ve Silme Engellendi

Kilitli bir yorum, adminler ve moderatörler de dahil olmak üzere kimse tarafından düzenlenemez veya silinemez. Kilitli bir yorumu düzenlemek veya kaldırmak istiyorsanız, önce kilidini açmanız, sonra değişikliği yapmanız ve isterseniz tekrar kilitlemeniz gerekir.

Bu, yorumu etkileyen her yol için geçerlidir:

- Kullanıcı arayüzüne sahip widget, kilitli yorumlarda Düzenle ve Sil menü öğelerini gizler.
- Kamu API'sindeki PATCH ve DELETE uç noktaları, hedef yorum kilitliyse `locked` hatası döndürür.
- Admin moderasyon arayüzü, önce kilidi açmadan silmeye çalıştığınızda kilitli hatayı gösterir.

### İstisnalar

Bir avuç yol, işlerini yapabilmek için kasıtlı olarak kilidi atlar:

- Hesap silme. Bir kullanıcı FastComments hesabını sildiğinde, yorumları kilit durumuna bakılmaksızın temizlenir.
- Kiracı / SSO kullanıcı temizliği. Kiracı düzeyindeki kullanıcı kaldırılması için aynı fikir.
- Planlı otomatik silme. Belirli bir zamanda silinmesi planlanmış bir yorum için, planlayıcının kilitleri dikkate almasına gerek yoktur.
- Çift kayıt temizleme. Dedupe aracı, kilitli kopyaları herhangi bir tören olmaksızın kaldırır.
- "Bu kullanıcıdan tüm yorumları sil" ile moderatör yasakları. Bir kullanıcıyı yasaklamak ve geçmişini temizlemek tek bir kasıtlı eylemdir, bu yüzden kilitleri de temizler.

Diğer her şey - widget, moderasyon arayüzü, kamu API'si, harici çağrıcılar - kilidi dikkate alır.

### API Hata Şekli

Kamu API'sini kilitli bir yorumu düzenlemek veya silmek için ararsanız, şöyle bir yanıt alırsınız:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Yorum kilitli.",
    "translatedError": "Bu yorum kilitli ve düzenlenemez veya silinemez. Önce kilidini açın."
}</div>

HTTP durumu 401'dir. `translatedError` alanı, kiracınızın yapılandırılmış diline ve ayarladığınız herhangi bir özel çeviriye dayanır.

### Sonuç Olarak

Küçük bir değişiklik, ancak uzun zamandır açık olan bir boşluğu kapatıyor. Kilitli artık kilitli demektir.

Sağlıcakla!

{{/isPost}}