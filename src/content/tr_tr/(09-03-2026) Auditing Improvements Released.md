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

Belirli bir moderatörün başına ne geldiğini öğrenmek isteseydiniz, önce kimliğini bulmanız gerekiyordu ve o moderatör daha sonra kaldırılmışsa, kimliği karşılaştıracak bir şey kalmazdı. Olay bir şeyin silindiğini, kim tarafından ve ne zaman olduğunu söylüyordu, ancak bazı durumlarda isimler eksikti.

Şimdi isim, olay anında kimlikle birlikte kaydediliyor, böylece silinmeden sonra da kalıyor ve bunun üzerinde arama yapabilirsiniz.

### Affected Sütunu

Tabloda, olayın etkilendiği kişi veya nesneyi isimle gösteren yeni bir **Affected** sütunu var. Bir kişi için `jsmith (jsmith@example.com)` gibi görünür. Bir widget özelleştirmesi veya bir moderasyon grubu için verdiğiniz isim gösterilir. Bir medya dosyası için ise yüklediğiniz dosya adı gösterilir.

Tablonun üstünde, **Kim veya ne değiştirildi** adlı eşleşen bir arama kutusu bulunur. Bir isim, e-posta adresi veya kimlik girin, ve bu kişi ya da nesneyi etkileyen olayları bulur. Üçünden hangisine sahip olduğunuzu bilmenize gerek yok ve önce dahili bir kimlik aramanıza da gerek yok.

Bu sürümden önce yazılmış olayların ismi ekli değildir, ancak her zaman olduğu gibi kimlikleri vardır, bu yüzden aynı arama kutusu onları kimlikle bulur.

### Tarih Aralığı

Filtre satırında artık **Date Range** açılır menüsü bulunur; Son 30 Gün, Son 90 Gün, Geçen Yıl, Tüm Zaman ve **Custom range** seçenekleri vardır ve **Custom range** seçildiğinde Başlangıç ve Bitiş tarih seçicileri ortaya çıkar.

Bir tarih aralığı, bir aramayı daraltmanın en kolay yoludur ve bunu diğer filtrelerle birleştirmek bir şeyi bulmanın en hızlı yoludur.

### Yönetilen Hesaplar

Hesabınız diğer kiracıları yönetiyorsa, **Include sub-tenants** adlı bir onay kutusu vardır. Bu kutuyu işaretlediğinizde hesabınız ve yönettiği tüm kiracılar tek seferde aranır ve **Tenant** sütunu her olayın hangi hesaptan geldiğini gösterir.

Şimdiye kadar her kiracının günlüğü yalnızca kendi içinde okunabiliyordu, bu yüzden "bu hafta kimse bizim varlıklarımızdan birine dokundu mu" sorusuna cevap vermek, her birine sırayla geçiş yapmayı gerektiriyordu.

### Güncellemeler Artık Ne Değiştiyi Kaydediyor

Bir ekip üyesini düzenlemek, sonuçta oluşan izin setini kaydederdi. Bu, izinlerin şu anda ne olduğunu söyler, ancak önceki durumlarını göstermez, bu yüzden "bu kişinin fatura erişimini kim ne zaman kaldırdı" sorusuna cevap verilemezdi.

Güncelleme olayları artık sadece gerçekten değişen alanların `changes` haritasını içerir; her biri önceki ve yeni değeriyle birlikte. Değişmeyen alanlar dışarıda bırakılır, böylece bir izin değişikliği bir satır olarak okunur, bir dizi boolean yerine.

### Açıklamalar ve Değişikliğin Arkasındaki Cihaz

Yıkıcı olaylar artık ne olduğunu açıklayan basit bir cümle taşır, örneğin "Kullanıcı hesabından kaldırıldı." Sayfa görüntülemeleri açıklamaya sahipti ancak silmelerde yoktu, bu ters bir durumdu.

Bir şeyi değiştiren olaylar ayrıca değişikliği yapan tarayıcıyı kaydeder. Oturumlar bir hash olarak kaydedilir, böylece bir kişinin eylemleri, logun tekrar oynatılabilecek bir şey saklamadan ilişkilendirilebilir.

### Diğer İyileştirmeler

- Sayfalama ve filtre kombinasyonlarıyla ilgili bazı düzeltmeler.
- Giriş olayları boş bir **Who** sütunu gösteriyordu. Kullanıcı adı tüm süre boyunca kayıtta vardı ancak sayfa onu okumuyordu.
- Eylem sütunu, giriş olaylarını N/A olarak gösteriyordu, çünkü Login eylem adları listesinden eksikti.
- Denetim günlüğü sayfaları SSO kullanıcılarını adlandıramıyordu ve bunun yerine "Missing User" gösteriyordu. Şimdi doğru şekilde çözümleniyor.
- Sayfa, uzun geçmişe sahip hesaplarda çok daha hızlı.

### API İçin

`/api/v1/audit-logs` uç noktası eşleşen filtreler kazandı: `username`, `ip`, `crudType`, `resourceName`, `targetId`, `target` alt dize araması için ve `includeManagedTenants`. Yanıtlar artık `targetId`, `targetLabel` ve `ua` içeriyor.

Bu uç noktayı zaten çağırıyorsanız dikkat etmeniz gereken iki değişiklik var. `before` artık tek başına çalışıyor; daha önce `after` de gönderilmediği sürece yok sayılıyordu. Ve `limit` artık 10k ile sınırlı ve varsayılanı 5k. Önceden sınırsızdı.

### Dokümantasyon

<a href="https://docs.fastcomments.com/guide-api.html#audit-logs-get" target="_blank">AuditLogs API kılavuzu</a> yeni sorgu parametrelerini kapsar, ve <a href="https://docs.fastcomments.com/guide-api.html#audit-log-structure" target="_blank">AuditLog yapı referansı</a> yeni alanları kapsar.

Eğer daha önce denetim günlüğünü kullanmadıysanız, [orijinal sürüm gönderisi](/(3-21-2022)-audit-log-released.html) nerede bulunduğunu, kimlerin okuyabileceğini ve girişlerin ne kadar süre saklandığını anlatır. Tüm bunlar değişmedi.

### Sonuç Olarak

FastComments'ı geliştirmeye devam edebildiğimiz için mutluyuz.
Eğer günlüğünüzde bir şey arayıp bulamıyorsanız, aşağıda bize bildirin.

Sağlıcakla!

{{/isPost}}