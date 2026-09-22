[category:Features]
[category:Security]
[category:API & Development]

###### [postdate]
# [postlink]Denetim İyileştirmeleri Yayınlandı[/postlink]

{{#unless isPost}}
Denetim günlüğü artık her olayın kim veya neyi etkilediğini isimle gösteriyor ve bunun üzerinde arama yapabilirsiniz. Ayrıca artık tarih aralığı, alt kiracı araması, güncellemelerde alan düzeyinde farklar ve eşleşen API filtreleri de mevcut.
{{/unless}}

{{#isPost}}

### Neler Yeni

Denetim günlüğü her zaman bir eylemi kimin gerçekleştirdiğini ve ne üzerinde gerçekleştirildiğini kaydetmiştir. Bu sürüm, bu kaydı sayfadan çıkmadan okunabilir ve aranabilir hâle getirmeyi amaçlıyor.

Belirli bir moderatörün başına ne geldiğini öğrenmek istiyorsanız, önce onun kimliğini bulmanız gerekiyordu ve o moderatör daha sonra kaldırılmışsa, kimliği karşılaştıracak bir şey kalmazdı. Olay, bir şeyin kim tarafından ve ne zaman silindiğini söylüyordu, ancak bazı durumlarda isimler eksik oluyordu.

Şimdi isim, olay anında kimlikle birlikte yakalanıyor, böylece silinmeden sonra da kalıyor ve bunun üzerinde arama yapabilirsiniz.

### Etkilenen Sütun

Tabloda, olayın etkilendiği kişi veya nesneyi isimle gösteren yeni bir **Affected** sütunu var. Bir kişi için bu, `jsmith (jsmith@example.com)` gibi görünür. Bir widget özelleştirmesi veya bir moderasyon grubu için verdiğiniz isim gösterilir. Bir medya dosyası için ise yüklediğiniz dosya adı gösterilir.

Tablonun üstünde, **Who or what was changed** adlı eşleşen bir arama kutusu bulunur. Bir isim, e-posta adresi veya kimlik girin ve o kişi ya da nesneyi etkileyen olayları bulur. Üçünden hangisine sahip olduğunuzu bilmenize gerek yok ve önce dahili bir kimlik aramanıza da gerek yok.

Bu sürümden önce yazılmış olayların isimleri ekli değildir, ancak hâlâ her zaman sahip oldukları kimliği vardır, bu yüzden aynı arama kutusu onları kimlikle bulur.

### Tarih Aralığı

Filtre satırında artık **Date Range** açılır menüsü bulunur; Son 30 Gün, Son 90 Gün, Geçen Yıl, Tüm Zaman ve **Custom range** seçenekleri vardır, bu da From ve To tarih seçicilerini gösterir.

Bir tarih aralığı, bir aramayı daraltmanın en kolay yoludur ve bunu diğer filtrelerle birleştirmek bir şey bulmanın en hızlı yoludur.

### Yönetilen Hesaplar

Hesabınız diğer kiracıları yönetiyorsa, **Include sub-tenants** adlı bir onay kutusu vardır. Bunu işaretlediğinizde hesabınız ve yönettiği tüm kiracılar tek seferde aranır, ve **Tenant** sütunu her olayın hangi hesaptan geldiğini gösterir.

Şimdiye kadar her kiracının günlüğü yalnızca kendi içinde okunabiliyordu, bu yüzden "bu hafta kimse bizim mülklerimizden birine dokundu mu" sorusuna cevap vermek, her birine sırayla geçiş yapmayı gerektiriyordu.

### Güncellemeler Artık Ne Değiştiyi Kaydediyor

Bir ekip üyesini düzenlemek, ortaya çıkan izin setini kaydederdi. Bu, izinlerin şu anda ne olduğunu söyler, ancak önceki durumlarını göstermez, bu yüzden "bu kişinin fatura erişimini kim ne zaman kaldırdı" sorusuna cevap verilemezdi.

Güncelleme olayları artık sadece gerçekten değişen alanların `changes` haritasını içerir, her biri önceki ve yeni değeriyle. Değişmeyen alanlar dışarıda bırakılır, böylece bir izin değişikliği bir satır olarak okunur, bir dizi boolean yerine.

### Açıklamalar ve Değişikliğin Arkasındaki Cihaz

Yıkıcı olaylar artık "Removed user from the account." gibi ne olduğunu açıklayan basit bir cümle taşır. Sayfa görüntülemeleri açıklamalara sahipti ancak silmelerde yoktu, bu ters bir durumdu.

Bir şeyi değiştiren olaylar ayrıca değişikliği yapan tarayıcıyı kaydeder. Oturumlar bir hash olarak kaydedilir, böylece bir kişinin eylemleri, logun tekrar oynatılabilecek bir şey saklamadan ilişkilendirilebilir.

### Diğer İyileştirmeler

- Sayfalama ve filtre kombinasyonlarıyla ilgili bazı düzeltmeler.
- Giriş olayları boş bir **Who** sütunu gösteriyordu. Kullanıcı adı tüm zaman boyunca kayıtta vardı ancak sayfa onu okumuyordu.
- Eylem sütunu, giriş olaylarını N/A olarak render ediyordu, çünkü Login eylem adları listesinden eksikti.
- Denetim günlüğü sayfaları SSO kullanıcılarını adlandıramıyordu, bunun yerine "Missing User" gösteriyordu. Artık doğru şekilde çözüldü.
- Sayfa, uzun geçmişe sahip hesaplarda çok daha hızlı.

### API İçin

`/api/v1/audit-logs` uç noktası eşleşen filtreler kazandı: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` alt dize araması için ve `includeManagedTenants`. Yanıtlar artık `targetId`, `targetLabel` ve `ua` içeriyor.

Bu uç noktayı zaten çağırıyorsanız dikkat etmeniz gereken iki değişiklik var. `before` artık tek başına çalışıyor, daha önce `after` de gönderilmediği sürece yok sayılıyordu. Ve `limit` artık 10k ile sınırlı, önceden bir üst sınırı yoktu. Varsayılan değer 1k olarak değişmedi.

### Dokümantasyon

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">AuditLogs API rehberi</a> yeni sorgu parametrelerini kapsar ve <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">AuditLog yapı referansı</a> yeni alanları kapsar.

Eğer daha önce denetim günlüğünü kullanmadıysanız, [orijinal sürüm gönderisi](/(3-21-2022)-audit-log-released.html) nerede bulunduğunu, kimlerin okuyabileceğini ve girişlerin ne kadar süre saklandığını anlatır. Tüm bunlar değişmedi.

### Sonuç Olarak

FastComments'ı geliştirmeye devam edebildiğimiz için mutluyuz.
Eğer günlüğünüzde bir şey arayıp bulamıyorsanız, aşağıda bize bildirin.

Sağlıcakla!

{{/isPost}}