---
[category:Security]

###### [postdate]
# [postlink]Denetim Günlüğü Yayınlandı[/postlink]

{{#unless isPost}}FastComments artık platform aracılığıyla yapılan tüm değişikliklerin detaylı bir günlüğünü sunmaktadır.{{/unless}}

{{#isPost}}

### Yenilikler

Mart itibarıyla, FastComments Pro planı ile birlikte detaylı denetim sağlamaktadır ve tüm mevcut kurumsal müşteriler için geçerlidir.

Veri erişimi, bir yorumu değiştirme veya bir kullanıcıyı yasaklama gibi tüm idari eylemler, denetim günlüğünde izlenir ve indekslenir.

### Nasıl Kullanılır

Denetim Günlüğü'ne `Verileri Yönet` sekmesine giderek ve ardından `Denetim Günlükleri` seçeneğine tıklayarak erişebilirsiniz. Doğrudan bağlantı [burada](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Başlamak için, aşağıdaki gibi bir sayfa göreceksiniz:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Denetim Günlüğü" />
</div>

Buradan kullanıcı adı, IP adresi, eylem türü veya kaynak ile arama yapabilirsiniz.

Örneğin, kaynağa göre filtreleme:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Denetim Günlüğü Kaynak Seçimi" />
</div>

Ayrıca, denetim günlüğündeki bir kaydın detaylarına dalabiliriz ve hatta değiştirilen ilgili nesneyi görebiliriz.

Örneğin, bir kullanıcıyı yasaklama kaydına dalabiliriz:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Denetim Günlüğü Girişi Detayları" />
</div>

Burada, kullanıcıyı yasaklayan kişiyi (kullanıcı adı `winrid` olan bir kullanıcı) görebiliriz. Bu bir kalıcı yasak olduğunu görebiliyoruz ve yasaklanan kullanıcı kimliği ve e-posta adresinin yanı sıra, hangi metin nedeniyle yasaklandığını da görebilmekteyiz.

Yasaklama işlemini gerçekleştiren IP'yi görebiliriz, ancak orijinal yorumcunun IP'si gizliliği için kasıtlı olarak hariç tutulmuştur.

`winrid`'in tüm olaylarını görmek için, kullanıcı adının yanındaki filtre simgesine tıklamamız yeterlidir.

### Erişimi Kısıtlama

Denetim günlüğündeki verilere yalnızca `Verileri Yönet` iznine sahip kullanıcılar erişebilir.

### Saklama Süresi

Denetim günlüğündeki tüm kayıtlar iki yıl boyunca saklanır. Ancak, hesabınız silindiğinde denetim günlüğü temizlenir.

### API Erişimi

[Denetim Günlüğü API'si için belgeler buradadır.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Kullanım durumunuza bağlı olarak denetim günlüğü birkaç farklı biçimde sıralanabilir ve sayfalara ayrılabilir.

### Mevcut Müşteriler

Pro veya eşdeğer bir planda iseniz, denetim günlüğünün otomatik olarak etkinleştirildiğini göreceksiniz! Erişim almak istiyorsanız, lütfen destek temsilcinizle iletişime geçin.

### Hariç Tutulanlar

Hariç tutulan tek tür değişiklikler, gerçek yorumlar ve oylarıdır. Bunun nedeni, müşterilerimizin denetim sırasında esas olarak idari tarafla ilgilendiğini ve insanların ne yorum yaptığını denetimle ilgilenmediğini bulmamızdır. Bu tür eylemler ayrıca günlüğe önemli ölçüde gürültü katmaktadır.

Ancak, bu bir gereklilikse, lütfen bizimle irtibata geçin ve bunu sizin için etkinleştirmeyi tartışabiliriz.

### Sonuç Olarak

Bu alanın size faydalı olmasını, kullanıcı arayüzünün kolay kullanımını ve API'nin hızını umuyoruz.

Şerefe!

{{/isPost}}

---