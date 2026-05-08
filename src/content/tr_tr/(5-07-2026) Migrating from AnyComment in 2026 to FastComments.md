[category:Migration]
###### [postdate]
# [postlink]AnyComment'dan 2026'da FastComments'a Geçiş[/postlink]

{{#unless isPost}}
Bu gönderiyi okuyarak 2026'da AnyComment'dan FastComments'a nasıl tamamen geçiş yapacağınızı öğrenin.
{{/unless}}

{{#isPost}}

Birçok müşterimiz 2026'da AnyComment'dan geçiş yapmak hakkında soru sordu.

## AnyComment WordPress İçinde Yaşıyor

AnyComment, bir WordPress eklentisidir. Disqus veya Hyvor Talk gibi bağımsız platformların aksine, kendi arka ucunu çalıştırmaz - yorumlarınız doğrudan WordPress veritabanınızda, ana WordPress'in kullandığı `wp_comments` tablosunda saklanır. Bu, geçiş için harika bir haber: herhangi bir ayrı AnyComment dışa aktarması ile uğraşmanıza gerek yok, ve koordinasyon sağlamanız gereken üçüncü tarafa ait bir sunucu yok. Verileriniz zaten kendi sunucunuzda.

Bu, standart FastComments WordPress geçiş akışının AnyComment'ı ekstra adım olmadan ele alacağı anlamına gelir.

## Seçenek 1: FastComments WordPress Eklentisi (Tavsiye Edilir)

En kolay yol, <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress eklentisini</a> kurmaktır. Eklenti, WordPress kurulumunuzu FastComments ile bağlantılandırmanızda sizi yönlendirir ve mevcut yorum verilerinizi otomatik olarak kopyalar. Manuel olarak indirip yükleyeceğiniz hiçbir şey yoktur. Veriler, WordPress veritabanınızdan sunucularımıza kopyalanır, bu nedenle geçiş tamamlandıktan sonra sunucularınızdan yükü de alır.

Çoğu geçiş birkaç dakika içinde tamamlanır.

Veriler geçtikten sonra, AnyComment'ı devre dışı bırakın. Yorumlar FastComments tarafından sunulmaya devam edecek ve eklenti WordPress veritabanınızı senkronize tutarak yedekleme yapacaktır (bu özelliği etkinleştirirseniz), böylece verilerinizi her zaman sahiplenirsiniz.

## Seçenek 2: WordPress XML Dışa Aktar

Manuel geçiş yapmak isterseniz veya WordPress'ten başka bir yere taşındıysanız ve sadece bir yedek XML'e sahipseniz, WordPress'in yerleşik dışa aktarma özelliğini kullanın.

1. WordPress admin panelinize gidin, **Araçlar -> Dışa Aktar**'ı seçin ve XML dosyasını indirin.
2. FastComments kontrol panelinize giriş yapın ve <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">dosyayı içe aktarmak için buraya gidin</a>.
3. Aşağı açılır menüden **WordPress (.xml)** seçin ve dosyanızı yükleyin.

AnyComment `wp_comments`'a yazdığından, her AnyComment ipi o XML'de diğer WordPress yorumlarınızla birlikte bulunmaktadır. İçe aktarıcı, bunları otomatik olarak doğru gönderiyle eşleştirir.

## AnyComment Widget'ını Değiştirme

Seçenek 1'i kullandıysanız, FastComments WordPress eklentisi sitenizde zaten AnyComment'ı değiştirmiştir - geçiş tamamlandıktan sonra sadece AnyComment'ı devre dışı bırakın.

Seçenek 2'yi kullandıysanız ve WordPress kurulumunuzu koruyorsanız, widget görüntülemesi ve devam eden senkronizasyonu yönetmek için daha sonra FastComments eklentisini kurmalısınız. WordPress'ten tamamen ayrılıyorsanız, yeni sitenize <a href="https://fastcomments.com/install-wizard" target="_blank">kurulum snippet'ını</a> ekleyin - birçok ön uç framework desteğimiz vardır, <a href="https://fastcomments.com/install-wizard" target="_blank">buradan bulabilirsiniz</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Bu konuda size yardımcı olabiliriz</a>.

## AB

Eğer AB'deyseniz, müşteri verilerinizin AB'de kalması için muhtemelen hesabınızı <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> üzerinde oluşturmak isteyeceksiniz.

## Özet

1. FastComments WordPress eklentisini kurun ve verilerinizi kopyalaması için ona izin verin, **veya** WordPress'ten XML olarak dışa aktarın ve içe aktarma sayfasında yükleyin.
2. AnyComment'ı devre dışı bırakın.
3. Eğer WordPress'ten ayrılıyorsanız, yeni sitenizde widget kodunu değiştirin.

{{/isPost}}