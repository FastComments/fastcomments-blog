---
[category:Features]

###### [postdate]
# [postlink]FastComments Artık Markdown'ı Destekliyor[/postlink]

Yorum deneyimi, Markdown kullanımıyla FastComments'ta daha zengin hale geldi!

{{#isPost}}

Markdown, metni stillendirmek için bir dizi kuraldır. Örneğin kalın bir kelime oluşturmak için \*\*bunu yapabiliriz\*\*.
Normal bağlantılar eklemek, sadece ham URL'yi yapıştırmak anlamına gelir ve görüntüler önceki gibi çalışır.

İşte Github tarafından sağlanan bir Markdown kılavuzu: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### FastComments Hangi Markdown Söz Dizimini Destekliyor?

Başlıklar hariç, Markdown'ı tamamen destekliyoruz. Bir başlık tanımlarken, konuşma akışını dağıttığı için bunu normal metin olarak gösteriyoruz. Başlıklar
blog yazıları ve belgeler gibi içerikler içindir - konuşmalar için değil.

FastComments, [img]...[/img] sözdizimi aracılığıyla her zaman resimleri desteklemiştir. Bu, Markdown'dan daha kolay anlaşılır olduğu için desteklenmeye devam edecektir.

### İçeriği Karıştırma

Tek bir yorum, tüm biçimlendirme biçimlerini - markdown, bağlantılar, görüntüler, kod parçacıkları ve tablolar - içerebilir.

### XSF/XSS Saldırılarını Önleme

Daha önce, FastComments ağ üzerinden düz metin gönderiyordu ve bunu istemcide ayrıştırıyordu. Artık, HTML ağ üzerinden gönderiliyor ve her yorumun veritabanımızda iki versiyonunu
barındırıyoruz, bu da yorumları düzenleme gibi işlevsellikleri destekler.

Yorumlara doğrudan HTML göndermenin riskleri vardır - bu nedenle tüm oluşturulan yorumlar, çapraz site ve çapraz çerçeve saldırılarını önlemek için ayrıştırılır ve temizlenir.

### Veri İhracı

Yorumları ihracat ederken, kullanıcının yorumunu yazdığı sırada gördüğü versiyonu alacaksınız. Ham HTML'yi almak istiyorsanız, bizimle iletişime geçin.

### Performans Endişeleri

Özellik geliştirme, genellikle işleri yavaşlatma eğilimindedir. FastComments'ta yapmak istediğimiz bu değil.
Bu özelliği eklemek, istemci tarafı widget'ımızın boyutunu ~400 bayt azaltmıştır - 9.53kb'den 9.12kb'ye - bu da daha hızlı sayfa yüklemeleri anlamına geliyor.

Teoride bu özelliğin yorum kaydetme mekanizmasını yavaşlatabileceği düşünülse de, performans düşüşü görmedik ve her zaman API'lerimizi izliyoruz.

### Bunu nasıl alabilirim?

Markdown desteği, tüm müşterilerimize otomatik olarak verilmiştir. Sitenize gönderilen içerikte çok fazla değişiklik görmemelisiniz - şimdi kullanıcılar kalın, altı çizili yapabilir ve basit tablolar oluşturmak gibi bazı şık şeyler yapabilirler.

Tüm özellik sürümlerinde olduğu gibi, geri bildirimlerinizi dört gözle bekliyoruz ve otomatik testlerde çokça var ama her hangi bir sorun görürseniz - bize bildirin!

Keyifli yorumlar.

{{/isPost}}

---